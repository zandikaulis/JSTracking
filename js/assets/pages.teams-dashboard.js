webpackJsonp([38], {
    1003: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setDate(n.getDate() + a), n
        }
        var r = n(810);
        e.exports = a
    },
    1004: function(e, t, n) {
        function a(e, t) {
            var n = r(e).getTime(),
                a = Number(t);
            return new Date(n + a)
        }
        var r = n(810);
        e.exports = a
    },
    1005: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), i(n)
        }
        var r = n(904),
            i = n(905);
        e.exports = a
    },
    1006: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = n.getTime(),
                i = r(t),
                o = i.getTime();
            return a < o ? -1 : a > o ? 1 : 0
        }
        var r = n(810);
        e.exports = a
    },
    1007: function(e, t, n) {
        "use strict";
        var a = n(815);
        e.exports = {
            generators: {
                linear: function(e, t) {
                    var n, r = [];
                    if (e.stepSize && e.stepSize > 0) n = e.stepSize;
                    else {
                        var i = a.niceNum(t.max - t.min, !1);
                        n = a.niceNum(i / (e.maxTicks - 1), !0)
                    }
                    var o = Math.floor(t.min / n) * n,
                        s = Math.ceil(t.max / n) * n;
                    e.min && e.max && e.stepSize && a.almostWhole((e.max - e.min) / e.stepSize, n / 1e3) && (o = e.min, s = e.max);
                    var d = (s - o) / n;
                    d = a.almostEquals(d, Math.round(d), n / 1e3) ? Math.round(d) : Math.ceil(d), r.push(void 0 !== e.min ? e.min : o);
                    for (var u = 1; u < d; ++u) r.push(o + u * n);
                    return r.push(void 0 !== e.max ? e.max : s), r
                },
                logarithmic: function(e, t) {
                    var n, r, i = [],
                        o = a.valueOrDefault,
                        s = o(e.min, Math.pow(10, Math.floor(a.log10(t.min)))),
                        d = Math.floor(a.log10(t.max)),
                        u = Math.ceil(t.max / Math.pow(10, d));
                    0 === s ? (n = Math.floor(a.log10(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, n)), i.push(s), s = r * Math.pow(10, n)) : (n = Math.floor(a.log10(s)), r = Math.floor(s / Math.pow(10, n)));
                    do {
                        i.push(s), ++r, 10 === r && (r = 1, ++n), s = r * Math.pow(10, n)
                    } while (n < d || n === d && r < u);
                    var l = o(e.max, s);
                    return i.push(l), i
                }
            },
            formatters: {
                values: function(e) {
                    return a.isArray(e) ? e : "" + e
                },
                linear: function(e, t, n) {
                    var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                    Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
                    var i = a.log10(Math.abs(r)),
                        o = "";
                    if (0 !== e) {
                        var s = -1 * Math.floor(i);
                        s = Math.max(Math.min(s, 20), 0), o = e.toFixed(s)
                    } else o = "0";
                    return o
                },
                logarithmic: function(e, t, n) {
                    var r = e / Math.pow(10, Math.floor(a.log10(e)));
                    return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === n.length - 1 ? e.toExponential() : ""
                }
            }
        }
    },
    1034: function(e, t, n) {
        function a(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                a = r(e),
                i = a.getDay(),
                o = (i < n ? 7 : 0) + i - n;
            return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a
        }
        var r = n(810);
        e.exports = a
    },
    1035: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t),
                s = n.getTime() - n.getTimezoneOffset() * i,
                d = a.getTime() - a.getTimezoneOffset() * i;
            return Math.round((s - d) / o)
        }
        var r = n(906),
            i = 6e4,
            o = 864e5;
        e.exports = a
    },
    1036: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t),
                o = n.getMonth() + a,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var d = i(s);
            return n.setMonth(o, Math.min(d, n.getDate())), n
        }
        var r = n(810),
            i = n(1053);
        e.exports = a
    },
    1037: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() - a.getTime()
        }
        var r = n(810);
        e.exports = a
    },
    1038: function(e, t, n) {
        "use strict";
        var a = {
            noop: function() {},
            uid: function() {
                var e = 0;
                return function() {
                    return e++
                }
            }(),
            isNullOrUndef: function(e) {
                return null === e || void 0 === e
            },
            isArray: Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            isObject: function(e) {
                return null !== e && "[object Object]" === Object.prototype.toString.call(e)
            },
            valueOrDefault: function(e, t) {
                return void 0 === e ? t : e
            },
            valueAtIndexOrDefault: function(e, t, n) {
                return a.valueOrDefault(a.isArray(e) ? e[t] : e, n)
            },
            callback: function(e, t, n) {
                if (e && "function" == typeof e.call) return e.apply(n, t)
            },
            each: function(e, t, n, r) {
                var i, o, s;
                if (a.isArray(e))
                    if (o = e.length, r)
                        for (i = o - 1; i >= 0; i--) t.call(n, e[i], i);
                    else
                        for (i = 0; i < o; i++) t.call(n, e[i], i);
                else if (a.isObject(e))
                    for (s = Object.keys(e), o = s.length, i = 0; i < o; i++) t.call(n, e[s[i]], s[i])
            },
            arrayEquals: function(e, t) {
                var n, r, i, o;
                if (!e || !t || e.length !== t.length) return !1;
                for (n = 0, r = e.length; n < r; ++n)
                    if (i = e[n], o = t[n], i instanceof Array && o instanceof Array) {
                        if (!a.arrayEquals(i, o)) return !1
                    } else if (i !== o) return !1;
                return !0
            },
            clone: function(e) {
                if (a.isArray(e)) return e.map(a.clone);
                if (a.isObject(e)) {
                    for (var t = {}, n = Object.keys(e), r = n.length, i = 0; i < r; ++i) t[n[i]] = a.clone(e[n[i]]);
                    return t
                }
                return e
            },
            _merger: function(e, t, n, r) {
                var i = t[e],
                    o = n[e];
                a.isObject(i) && a.isObject(o) ? a.merge(i, o, r) : t[e] = a.clone(o)
            },
            _mergerIf: function(e, t, n) {
                var r = t[e],
                    i = n[e];
                a.isObject(r) && a.isObject(i) ? a.mergeIf(r, i) : t.hasOwnProperty(e) || (t[e] = a.clone(i))
            },
            merge: function(e, t, n) {
                var r, i, o, s, d, u = a.isArray(t) ? t : [t],
                    l = u.length;
                if (!a.isObject(e)) return e;
                for (n = n || {}, r = n.merger || a._merger, i = 0; i < l; ++i)
                    if (t = u[i], a.isObject(t))
                        for (o = Object.keys(t), d = 0, s = o.length; d < s; ++d) r(o[d], e, t, n);
                return e
            },
            mergeIf: function(e, t) {
                return a.merge(e, t, {
                    merger: a._mergerIf
                })
            }
        };
        e.exports = a, a.callCallback = a.callback, a.indexOf = function(e, t, n) {
            return Array.prototype.indexOf.call(e, t, n)
        }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault
    },
    1052: function(e, t) {
        function n(e) {
            return e instanceof Date
        }
        e.exports = n
    },
    1053: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getFullYear(),
                a = t.getMonth(),
                i = new Date(0);
            return i.setFullYear(n, a + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
        }
        var r = n(810);
        e.exports = a
    },
    1054: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, 7 * n)
        }
        var r = n(1003);
        e.exports = a
    },
    1055: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = n.getTime(),
                i = r(t),
                o = i.getTime();
            return a > o ? -1 : a < o ? 1 : 0
        }
        var r = n(810);
        e.exports = a
    },
    1056: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t),
                s = o(n, a),
                d = Math.abs(i(n, a));
            return n.setMonth(n.getMonth() - s * d), s * (d - (o(n, a) === -s))
        }
        var r = n(810),
            i = n(1115),
            o = n(1006);
        e.exports = a
    },
    1057: function(e, t, n) {
        function a(e, t) {
            var n = r(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var r = n(1037);
        e.exports = a
    },
    1058: function(e, t, n) {
        var a = n(1417),
            r = n(1418);
        e.exports = {
            distanceInWords: a(),
            format: r()
        }
    },
    1059: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setHours(23, 59, 59, 999), t
        }
        var r = n(810);
        e.exports = a
    },
    1060: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = i(t).getTime() - o(t).getTime();
            return Math.round(n / s) + 1
        }
        var r = n(810),
            i = n(905),
            o = n(1005),
            s = 6048e5;
        e.exports = a
    },
    1061: function(e, t, n) {
        function a(e, t, n) {
            var a = r(e, n),
                i = r(t, n);
            return a.getTime() === i.getTime()
        }
        var r = n(1034);
        e.exports = a
    },
    1067: function(e, t, n) {
        "use strict";

        function a(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, i.a.request(e.path, e)];
                        case 1:
                            return t = n.sent(), [2, new o(t, e)]
                    }
                })
            })
        }
        t.a = a;
        var r = n(0),
            i = n(817),
            o = function() {
                function e(e, t) {
                    this.status = e.status, this.body = e.body, this.error = e.error, this.requestError = e.requestError, this.request = t
                }
                return e.prototype.isSuccess = function() {
                    return this.status >= 200 && !this.requestError
                }, e.prototype.isError = function() {
                    return !this.isSuccess()
                }, e
            }()
    },
    1107: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, n * i)
        }
        var r = n(1004),
            i = 36e5;
        e.exports = a
    },
    1108: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return i(e, r(e) + n)
        }
        var r = n(904),
            i = n(1109);
        e.exports = a
    },
    1109: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t),
                s = o(n, i(n)),
                d = new Date(0);
            return d.setFullYear(a, 0, 4), d.setHours(0, 0, 0, 0), n = i(d), n.setDate(n.getDate() + s), n
        }
        var r = n(810),
            i = n(1005),
            o = n(1035);
        e.exports = a
    },
    1110: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, n * i)
        }
        var r = n(1004),
            i = 6e4;
        e.exports = a
    },
    1111: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, 3 * n)
        }
        var r = n(1036);
        e.exports = a
    },
    1112: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, 1e3 * n)
        }
        var r = n(1004);
        e.exports = a
    },
    1113: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, 12 * n)
        }
        var r = n(1036);
        e.exports = a
    },
    1114: function(e, t, n) {
        function a(e, t) {
            return r(e) - r(t)
        }
        var r = n(904);
        e.exports = a
    },
    1115: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return 12 * (n.getFullYear() - a.getFullYear()) + (n.getMonth() - a.getMonth())
        }
        var r = n(810);
        e.exports = a
    },
    1116: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
        var r = n(810);
        e.exports = a
    },
    1117: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() - a.getFullYear()
        }
        var r = n(810);
        e.exports = a
    },
    1118: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t),
                s = o(n, a),
                d = Math.abs(i(n, a));
            return n.setDate(n.getDate() - s * d), s * (d - (o(n, a) === -s))
        }
        var r = n(810),
            i = n(1035),
            o = n(1006);
        e.exports = a
    },
    1119: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1108);
        e.exports = a
    },
    1120: function(e, t, n) {
        function a(e, t, n) {
            var a = n || {},
                _ = r(e, t),
                h = a.locale,
                f = d.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (f = h.distanceInWords.localize);
            var p, y, M = {
                addSuffix: Boolean(a.addSuffix),
                comparison: _
            };
            _ > 0 ? (p = i(e), y = i(t)) : (p = i(t), y = i(e));
            var g, v = o(y, p),
                b = y.getTimezoneOffset() - p.getTimezoneOffset(),
                L = Math.round(v / 60) - b;
            if (L < 2) return a.includeSeconds ? v < 5 ? f("lessThanXSeconds", 5, M) : v < 10 ? f("lessThanXSeconds", 10, M) : v < 20 ? f("lessThanXSeconds", 20, M) : v < 40 ? f("halfAMinute", null, M) : v < 60 ? f("lessThanXMinutes", 1, M) : f("xMinutes", 1, M) : 0 === L ? f("lessThanXMinutes", 1, M) : f("xMinutes", L, M);
            if (L < 45) return f("xMinutes", L, M);
            if (L < 90) return f("aboutXHours", 1, M);
            if (L < u) {
                return f("aboutXHours", Math.round(L / 60), M)
            }
            if (L < l) return f("xDays", 1, M);
            if (L < c) {
                return f("xDays", Math.round(L / u), M)
            }
            if (L < m) return g = Math.round(L / c), f("aboutXMonths", g, M);
            if ((g = s(y, p)) < 12) {
                return f("xMonths", Math.round(L / c), M)
            }
            var Y = g % 12,
                k = Math.floor(g / 12);
            return Y < 3 ? f("aboutXYears", k, M) : Y < 9 ? f("overXYears", k, M) : f("almostXYears", k + 1, M)
        }
        var r = n(1055),
            i = n(810),
            o = n(1057),
            s = n(1056),
            d = n(1058),
            u = 1440,
            l = 2520,
            c = 43200,
            m = 86400;
        e.exports = a
    },
    1121: function(e, t, n) {
        function a(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                a = r(e),
                i = a.getDay(),
                o = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a
        }
        var r = n(810);
        e.exports = a
    },
    1122: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
        }
        var r = n(810);
        e.exports = a
    },
    1123: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return o(t, i(t)) + 1
        }
        var r = n(810),
            i = n(1124),
            o = n(1035);
        e.exports = a
    },
    1124: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
        var r = n(810);
        e.exports = a
    },
    1125: function(e, t, n) {
        function a(e) {
            if (r(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
        var r = n(1052);
        e.exports = a
    },
    1126: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getFullYear();
            return n % 400 == 0 || n % 4 == 0 && n % 100 != 0
        }
        var r = n(810);
        e.exports = a
    },
    1127: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getDay();
            return 0 === n && (n = 7), n
        }
        var r = n(810);
        e.exports = a
    },
    1128: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
        var r = n(1129);
        e.exports = a
    },
    1129: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setMinutes(0, 0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    1130: function(e, t, n) {
        function a(e, t) {
            return r(e, t, {
                weekStartsOn: 1
            })
        }
        var r = n(1061);
        e.exports = a
    },
    1131: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
        var r = n(1005);
        e.exports = a
    },
    1132: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
        var r = n(1133);
        e.exports = a
    },
    1133: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setSeconds(0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    1134: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth()
        }
        var r = n(810);
        e.exports = a
    },
    1135: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
        var r = n(1136);
        e.exports = a
    },
    1136: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3;
            return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    1137: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
        var r = n(1138);
        e.exports = a
    },
    1138: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setMilliseconds(0), t
        }
        var r = n(810);
        e.exports = a
    },
    1139: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() === a.getFullYear()
        }
        var r = n(810);
        e.exports = a
    },
    1140: function(e, t, n) {
        function a(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                a = r(e),
                i = a.getDay(),
                o = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + o), a
        }
        var r = n(810);
        e.exports = a
    },
    1141: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t),
                o = n.getFullYear(),
                s = n.getDate(),
                d = new Date(0);
            d.setFullYear(o, a, 15), d.setHours(0, 0, 0, 0);
            var u = i(d);
            return n.setMonth(a, Math.min(s, u)), n
        }
        var r = n(810),
            i = n(1053);
        e.exports = a
    },
    1142: function(e, t, n) {
        var a = n(1511),
            r = n(1513),
            i = function(e) {
                if (e instanceof i) return e;
                if (!(this instanceof i)) return new i(e);
                this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                };
                var t;
                "string" == typeof e ? (t = r.getRgba(e), t ? this.setValues("rgb", t) : (t = r.getHsla(e)) ? this.setValues("hsl", t) : (t = r.getHwb(e)) && this.setValues("hwb", t)) : "object" == typeof e && (t = e, void 0 !== t.r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t))
            };
        i.prototype = {
            isValid: function() {
                return this.valid
            },
            rgb: function() {
                return this.setSpace("rgb", arguments)
            },
            hsl: function() {
                return this.setSpace("hsl", arguments)
            },
            hsv: function() {
                return this.setSpace("hsv", arguments)
            },
            hwb: function() {
                return this.setSpace("hwb", arguments)
            },
            cmyk: function() {
                return this.setSpace("cmyk", arguments)
            },
            rgbArray: function() {
                return this.values.rgb
            },
            hslArray: function() {
                return this.values.hsl
            },
            hsvArray: function() {
                return this.values.hsv
            },
            hwbArray: function() {
                var e = this.values;
                return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
            },
            cmykArray: function() {
                return this.values.cmyk
            },
            rgbaArray: function() {
                var e = this.values;
                return e.rgb.concat([e.alpha])
            },
            hslaArray: function() {
                var e = this.values;
                return e.hsl.concat([e.alpha])
            },
            alpha: function(e) {
                return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
            },
            red: function(e) {
                return this.setChannel("rgb", 0, e)
            },
            green: function(e) {
                return this.setChannel("rgb", 1, e)
            },
            blue: function(e) {
                return this.setChannel("rgb", 2, e)
            },
            hue: function(e) {
                return e && (e %= 360, e = e < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
            },
            saturation: function(e) {
                return this.setChannel("hsl", 1, e)
            },
            lightness: function(e) {
                return this.setChannel("hsl", 2, e)
            },
            saturationv: function(e) {
                return this.setChannel("hsv", 1, e)
            },
            whiteness: function(e) {
                return this.setChannel("hwb", 1, e)
            },
            blackness: function(e) {
                return this.setChannel("hwb", 2, e)
            },
            value: function(e) {
                return this.setChannel("hsv", 2, e)
            },
            cyan: function(e) {
                return this.setChannel("cmyk", 0, e)
            },
            magenta: function(e) {
                return this.setChannel("cmyk", 1, e)
            },
            yellow: function(e) {
                return this.setChannel("cmyk", 2, e)
            },
            black: function(e) {
                return this.setChannel("cmyk", 3, e)
            },
            hexString: function() {
                return r.hexString(this.values.rgb)
            },
            rgbString: function() {
                return r.rgbString(this.values.rgb, this.values.alpha)
            },
            rgbaString: function() {
                return r.rgbaString(this.values.rgb, this.values.alpha)
            },
            percentString: function() {
                return r.percentString(this.values.rgb, this.values.alpha)
            },
            hslString: function() {
                return r.hslString(this.values.hsl, this.values.alpha)
            },
            hslaString: function() {
                return r.hslaString(this.values.hsl, this.values.alpha)
            },
            hwbString: function() {
                return r.hwbString(this.values.hwb, this.values.alpha)
            },
            keyword: function() {
                return r.keyword(this.values.rgb, this.values.alpha)
            },
            rgbNumber: function() {
                var e = this.values.rgb;
                return e[0] << 16 | e[1] << 8 | e[2]
            },
            luminosity: function() {
                for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
                    var a = e[n] / 255;
                    t[n] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
                }
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            },
            contrast: function(e) {
                var t = this.luminosity(),
                    n = e.luminosity();
                return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
            },
            level: function(e) {
                var t = this.contrast(e);
                return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
            },
            dark: function() {
                var e = this.values.rgb;
                return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
            },
            light: function() {
                return !this.dark()
            },
            negate: function() {
                for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
                return this.setValues("rgb", e), this
            },
            lighten: function(e) {
                var t = this.values.hsl;
                return t[2] += t[2] * e, this.setValues("hsl", t), this
            },
            darken: function(e) {
                var t = this.values.hsl;
                return t[2] -= t[2] * e, this.setValues("hsl", t), this
            },
            saturate: function(e) {
                var t = this.values.hsl;
                return t[1] += t[1] * e, this.setValues("hsl", t), this
            },
            desaturate: function(e) {
                var t = this.values.hsl;
                return t[1] -= t[1] * e, this.setValues("hsl", t), this
            },
            whiten: function(e) {
                var t = this.values.hwb;
                return t[1] += t[1] * e, this.setValues("hwb", t), this
            },
            blacken: function(e) {
                var t = this.values.hwb;
                return t[2] += t[2] * e, this.setValues("hwb", t), this
            },
            greyscale: function() {
                var e = this.values.rgb,
                    t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                return this.setValues("rgb", [t, t, t]), this
            },
            clearer: function(e) {
                var t = this.values.alpha;
                return this.setValues("alpha", t - t * e), this
            },
            opaquer: function(e) {
                var t = this.values.alpha;
                return this.setValues("alpha", t + t * e), this
            },
            rotate: function(e) {
                var t = this.values.hsl,
                    n = (t[0] + e) % 360;
                return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
            },
            mix: function(e, t) {
                var n = this,
                    a = e,
                    r = void 0 === t ? .5 : t,
                    i = 2 * r - 1,
                    o = n.alpha() - a.alpha(),
                    s = ((i * o == -1 ? i : (i + o) / (1 + i * o)) + 1) / 2,
                    d = 1 - s;
                return this.rgb(s * n.red() + d * a.red(), s * n.green() + d * a.green(), s * n.blue() + d * a.blue()).alpha(n.alpha() * r + a.alpha() * (1 - r))
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                var e, t, n = new i,
                    a = this.values,
                    r = n.values;
                for (var o in a) a.hasOwnProperty(o) && (e = a[o], t = {}.toString.call(e), "[object Array]" === t ? r[o] = e.slice(0) : "[object Number]" === t ? r[o] = e : console.error("unexpected color value:", e));
                return n
            }
        }, i.prototype.spaces = {
            rgb: ["red", "green", "blue"],
            hsl: ["hue", "saturation", "lightness"],
            hsv: ["hue", "saturation", "value"],
            hwb: ["hue", "whiteness", "blackness"],
            cmyk: ["cyan", "magenta", "yellow", "black"]
        }, i.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100]
        }, i.prototype.getValues = function(e) {
            for (var t = this.values, n = {}, a = 0; a < e.length; a++) n[e.charAt(a)] = t[e][a];
            return 1 !== t.alpha && (n.a = t.alpha), n
        }, i.prototype.setValues = function(e, t) {
            var n, r = this.values,
                i = this.spaces,
                o = this.maxes,
                s = 1;
            if (this.valid = !0, "alpha" === e) s = t;
            else if (t.length) r[e] = t.slice(0, e.length), s = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                s = t.a
            } else if (void 0 !== t[i[e][0]]) {
                var d = i[e];
                for (n = 0; n < e.length; n++) r[e][n] = t[d[n]];
                s = t.alpha
            }
            if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === e) return !1;
            var u;
            for (n = 0; n < e.length; n++) u = Math.max(0, Math.min(o[e][n], r[e][n])), r[e][n] = Math.round(u);
            for (var l in i) l !== e && (r[l] = a[e][l](r[e]));
            return !0
        }, i.prototype.setSpace = function(e, t) {
            var n = t[0];
            return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
        }, i.prototype.setChannel = function(e, t, n) {
            var a = this.values[e];
            return void 0 === n ? a[t] : n === a[t] ? this : (a[t] = n, this.setValues(e, a), this)
        }, "undefined" != typeof window && (window.Color = i), e.exports = i
    },
    1143: function(e, t, n) {
        "use strict";

        function a(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : u.getRelativePosition(e, t)
        }

        function r(e, t) {
            var n, a, r, i, o, s = e.data.datasets;
            for (a = 0, i = s.length; a < i; ++a)
                if (e.isDatasetVisible(a))
                    for (n = e.getDatasetMeta(a), r = 0, o = n.data.length; r < o; ++r) {
                        var d = n.data[r];
                        d._view.skip || t(d)
                    }
        }

        function i(e, t) {
            var n = [];
            return r(e, function(e) {
                e.inRange(t.x, t.y) && n.push(e)
            }), n
        }

        function o(e, t, n, a) {
            var i = Number.POSITIVE_INFINITY,
                o = [];
            return r(e, function(e) {
                if (!n || e.inRange(t.x, t.y)) {
                    var r = e.getCenterPoint(),
                        s = a(t, r);
                    s < i ? (o = [e], i = s) : s === i && o.push(e)
                }
            }), o
        }

        function s(e) {
            var t = -1 !== e.indexOf("x"),
                n = -1 !== e.indexOf("y");
            return function(e, a) {
                var r = t ? Math.abs(e.x - a.x) : 0,
                    i = n ? Math.abs(e.y - a.y) : 0;
                return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2))
            }
        }

        function d(e, t, n) {
            var r = a(t, e);
            n.axis = n.axis || "x";
            var d = s(n.axis),
                u = n.intersect ? i(e, r) : o(e, r, !1, d),
                l = [];
            return u.length ? (e.data.datasets.forEach(function(t, n) {
                if (e.isDatasetVisible(n)) {
                    var a = e.getDatasetMeta(n),
                        r = a.data[u[0]._index];
                    r && !r._view.skip && l.push(r)
                }
            }), l) : []
        }
        var u = n(815);
        e.exports = {
            modes: {
                single: function(e, t) {
                    var n = a(t, e),
                        i = [];
                    return r(e, function(e) {
                        if (e.inRange(n.x, n.y)) return i.push(e), i
                    }), i.slice(0, 1)
                },
                label: d,
                index: d,
                dataset: function(e, t, n) {
                    var r = a(t, e);
                    n.axis = n.axis || "xy";
                    var d = s(n.axis),
                        u = n.intersect ? i(e, r) : o(e, r, !1, d);
                    return u.length > 0 && (u = e.getDatasetMeta(u[0]._datasetIndex).data), u
                },
                "x-axis": function(e, t) {
                    return d(e, t, {
                        intersect: !0
                    })
                },
                point: function(e, t) {
                    return i(e, a(t, e))
                },
                nearest: function(e, t, n) {
                    var r = a(t, e);
                    n.axis = n.axis || "xy";
                    var i = s(n.axis),
                        d = o(e, r, n.intersect, i);
                    return d.length > 1 && d.sort(function(e, t) {
                        var n = e.getArea(),
                            a = t.getArea(),
                            r = n - a;
                        return 0 === r && (r = e._datasetIndex - t._datasetIndex), r
                    }), d.slice(0, 1)
                },
                x: function(e, t, n) {
                    var i = a(t, e),
                        o = [],
                        s = !1;
                    return r(e, function(e) {
                        e.inXRange(i.x) && o.push(e), e.inRange(i.x, i.y) && (s = !0)
                    }), n.intersect && !s && (o = []), o
                },
                y: function(e, t, n) {
                    var i = a(t, e),
                        o = [],
                        s = !1;
                    return r(e, function(e) {
                        e.inYRange(i.y) && o.push(e), e.inRange(i.x, i.y) && (s = !0)
                    }), n.intersect && !s && (o = []), o
                }
            }
        }
    },
    1144: function(e, t, n) {
        "use strict";
        var a = n(815),
            r = n(1519),
            i = n(1520),
            o = i._enabled ? i : r;
        e.exports = a.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, o)
    },
    1145: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1146: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                },
                a = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                r = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                i = function(e) {
                    return function(t, n, i, o) {
                        var s = a(t),
                            d = r[e][a(t)];
                        return 2 === s && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                o = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
            return e.defineLocale("ar", {
                months: o,
                monthsShort: o,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: i("s"),
                    m: i("m"),
                    mm: i("m"),
                    h: i("h"),
                    hh: i("h"),
                    d: i("d"),
                    dd: i("d"),
                    M: i("M"),
                    MM: i("M"),
                    y: i("y"),
                    yy: i("y")
                },
                preparse: function(e) {
                    return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1147: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-dz", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        })
    },
    1148: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        })
    },
    1149: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    0: "0"
                },
                n = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                a = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                r = function(e) {
                    return function(t, r, i, o) {
                        var s = n(t),
                            d = a[e][n(t)];
                        return 2 === s && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            return e.defineLocale("ar-ly", {
                months: i,
                monthsShort: i,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: r("s"),
                    m: r("m"),
                    mm: r("m"),
                    h: r("h"),
                    hh: r("h"),
                    d: r("d"),
                    dd: r("d"),
                    M: r("M"),
                    MM: r("M"),
                    y: r("y"),
                    yy: r("y")
                },
                preparse: function(e) {
                    return e.replace(/\u200f/g, "").replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1150: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1151: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                };
            return e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1152: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1153: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            };
            return e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "birneçə saniyyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(e) {
                    return /^(gündüz|axşam)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(e) {
                    if (0 === e) return e + "-ıncı";
                    var n = e % 10,
                        a = e % 100 - n,
                        r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1154: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                };
                return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(r[a], +e)
            }
            return e.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1155: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1156: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "১",
                    2: "২",
                    3: "৩",
                    4: "৪",
                    5: "৫",
                    6: "৬",
                    7: "৭",
                    8: "৮",
                    9: "৯",
                    0: "০"
                },
                n = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
            return e.defineLocale("bn", {
                months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1157: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "༡",
                    2: "༢",
                    3: "༣",
                    4: "༤",
                    5: "༥",
                    6: "༦",
                    7: "༧",
                    8: "༨",
                    9: "༩",
                    0: "༠"
                },
                n = {
                    "༡": "1",
                    "༢": "2",
                    "༣": "3",
                    "༤": "4",
                    "༥": "5",
                    "༦": "6",
                    "༧": "7",
                    "༨": "8",
                    "༩": "9",
                    "༠": "0"
                };
            return e.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1158: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return e + " " + r({
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                }[n], e)
            }

            function n(e) {
                switch (a(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }

            function a(e) {
                return e > 9 ? a(e % 10) : e
            }

            function r(e, t) {
                return 2 === t ? i(e) : e
            }

            function i(e) {
                var t = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
            }
            return e.defineLocale("br", {
                months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h[e]mm A",
                    LTS: "h[e]mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY h[e]mm A",
                    LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warc'hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Dec'h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s 'zo",
                    s: "un nebeud segondennoù",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(e) {
                    return e + (1 === e ? "añ" : "vet")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1159: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1160: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "[el] D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "[el] D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (n = "a"), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1161: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "pár sekund" : "pár sekundami";
                    case "m":
                        return n ? "minuta" : r ? "minutu" : "minutou";
                    case "mm":
                        return n || r ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
                    case "h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return n || r ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
                    case "d":
                        return n || r ? "den" : "dnem";
                    case "dd":
                        return n || r ? i + (t(e) ? "dny" : "dní") : i + "dny";
                    case "M":
                        return n || r ? "měsíc" : "měsícem";
                    case "MM":
                        return n || r ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
                    case "y":
                        return n || r ? "rok" : "rokem";
                    case "yy":
                        return n || r ? i + (t(e) ? "roky" : "let") : i + "lety"
                }
            }
            var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
            return e.defineLocale("cs", {
                months: a,
                monthsShort: r,
                monthsParse: function(e, t) {
                    var n, a = [];
                    for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                    return a
                }(a, r),
                shortMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                    return n
                }(r),
                longMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                    return n
                }(a),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1162: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1163: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = e,
                        n = "",
                        a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1164: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1165: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1166: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1167: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH.mm",
                    LLLL: "dddd, D. MMMM YYYY HH.mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1168: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            return e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function(e) {
                    return "މފ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            })
        })
    },
    1169: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            return e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return e ? /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(e, n) {
                    var a = this._calendarEl[e],
                        r = n && n.hours();
                    return t(a) && (a = a.apply(n)), a.replace("{}", r % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1170: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1171: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            })
        })
    },
    1172: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1173: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1174: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1175: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D[-a de] MMMM, YYYY",
                    LLL: "D[-a de] MMMM, YYYY HH:mm",
                    LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd [je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasinta] dddd [je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "sekundoj",
                    m: "minuto",
                    mm: "%d minutoj",
                    h: "horo",
                    hh: "%d horoj",
                    d: "tago",
                    dd: "%d tagoj",
                    M: "monato",
                    MM: "%d monatoj",
                    y: "jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1176: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1177: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1178: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1]
            }
            return e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1179: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1180: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "۱",
                    2: "۲",
                    3: "۳",
                    4: "۴",
                    5: "۵",
                    6: "۶",
                    7: "۷",
                    8: "۸",
                    9: "۹",
                    0: "۰"
                },
                n = {
                    "۱": "1",
                    "۲": "2",
                    "۳": "3",
                    "۴": "4",
                    "۵": "5",
                    "۶": "6",
                    "۷": "7",
                    "۸": "8",
                    "۹": "9",
                    "۰": "0"
                };
            return e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/[۰-۹]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1181: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, r) {
                var i = "";
                switch (a) {
                    case "s":
                        return r ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return r ? "minuutin" : "minuutti";
                    case "mm":
                        i = r ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return r ? "tunnin" : "tunti";
                    case "hh":
                        i = r ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return r ? "päivän" : "päivä";
                    case "dd":
                        i = r ? "päivän" : "päivää";
                        break;
                    case "M":
                        return r ? "kuukauden" : "kuukausi";
                    case "MM":
                        i = r ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return r ? "vuoden" : "vuosi";
                    case "yy":
                        i = r ? "vuoden" : "vuotta"
                }
                return i = n(e, r) + " " + i
            }

            function n(e, t) {
                return e < 10 ? t ? r[e] : a[e] : e
            }
            var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
            return e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1182: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    m: "ein minutt",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaði",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1183: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "D":
                            return e + (1 === e ? "er" : "");
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1184: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                            case "M":
                            case "Q":
                            case "D":
                            case "DDD":
                            case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                                case "W":
                                return e + (1 === e ? "re" : "e")
                    }
                }
            })
        })
    },
    1185: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                            case "M":
                            case "Q":
                            case "D":
                            case "DDD":
                            case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                                case "W":
                                return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1186: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            return e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1187: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
                n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
                a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
            return e.defineLocale("gd", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1188: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1189: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["thodde secondanim", "thodde second"],
                    m: ["eka mintan", "ek minute"],
                    mm: [e + " mintanim", e + " mintam"],
                    h: ["eka horan", "ek hor"],
                    hh: [e + " horanim", e + " hor"],
                    d: ["eka disan", "ek dis"],
                    dd: [e + " disanim", e + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [e + " mhoineanim", e + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [e + " vorsanim", e + " vorsam"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("gom-latn", {
                months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Ieta to] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fatlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "D":
                            return e + "er";
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                        case "w":
                        case "W":
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /rati|sokalli|donparam|sanje/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                }
            })
        })
    },
    1190: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        })
    },
    1191: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1192: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1193: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = e;
                switch (n) {
                    case "s":
                        return a || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (a || t ? " perc" : " perce");
                    case "mm":
                        return r + (a || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (a || t ? " óra" : " órája");
                    case "hh":
                        return r + (a || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (a || t ? " nap" : " napja");
                    case "dd":
                        return r + (a || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (a || t ? " hónap" : " hónapja");
                    case "MM":
                        return r + (a || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (a || t ? " év" : " éve");
                    case "yy":
                        return r + (a || t ? " év" : " éve")
                }
                return ""
            }

            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
            }
            var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            return e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return n.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return n.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1194: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1195: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1196: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e % 100 == 11 || e % 10 != 1
            }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return n ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? i + (n || r ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
                    case "hh":
                        return t(e) ? i + (n || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                    case "d":
                        return n ? "dagur" : r ? "dag" : "degi";
                    case "dd":
                        return t(e) ? n ? i + "dagar" : i + (r ? "daga" : "dögum") : n ? i + "dagur" : i + (r ? "dag" : "degi");
                    case "M":
                        return n ? "mánuður" : r ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? n ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
                    case "y":
                        return n || r ? "ár" : "ári";
                    case "yy":
                        return t(e) ? i + (n || r ? "ár" : "árum") : i + (n || r ? "ár" : "ári")
                }
            }
            return e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1197: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1198: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 HH:mm dddd",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日 HH:mm dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        })
    },
    1199: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1200: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ka", {
                months: {
                    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                },
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
                    },
                    s: "რამდენიმე წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1201: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            };
            return e.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(e) {
                    var n = e % 10,
                        a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1202: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1203: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "೧",
                    2: "೨",
                    3: "೩",
                    4: "೪",
                    5: "೫",
                    6: "೬",
                    7: "೭",
                    8: "೮",
                    9: "೯",
                    0: "೦"
                },
                n = {
                    "೧": "1",
                    "೨": "2",
                    "೩": "3",
                    "೪": "4",
                    "೫": "5",
                    "೬": "6",
                    "೭": "7",
                    "೮": "8",
                    "೯": "9",
                    "೦": "0"
                };
            return e.defineLocale("kn", {
                months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
                monthsParseExact: !0,
                weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[ಇಂದು] LT",
                    nextDay: "[ನಾಳೆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ನಿನ್ನೆ] LT",
                    lastWeek: "[ಕೊನೆಯ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ನಂತರ",
                    past: "%s ಹಿಂದೆ",
                    s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                    m: "ಒಂದು ನಿಮಿಷ",
                    mm: "%d ನಿಮಿಷ",
                    h: "ಒಂದು ಗಂಟೆ",
                    hh: "%d ಗಂಟೆ",
                    d: "ಒಂದು ದಿನ",
                    dd: "%d ದಿನ",
                    M: "ಒಂದು ತಿಂಗಳು",
                    MM: "%d ತಿಂಗಳು",
                    y: "ಒಂದು ವರ್ಷ",
                    yy: "%d ವರ್ಷ"
                },
                preparse: function(e) {
                    return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                ordinal: function(e) {
                    return e + "ನೇ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1204: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}일/,
                ordinal: "%d일",
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        })
    },
    1205: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            };
            return e.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кече саат] LT",
                    lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function(e) {
                    var n = e % 10,
                        a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1206: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? r[n][0] : r[n][1]
            }

            function n(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            }

            function a(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            }

            function r(e) {
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (e < 0) return !0;
                if (e < 10) return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10,
                        n = e / 10;
                    return r(0 === t ? n : t)
                }
                if (e < 1e4) {
                    for (; e >= 10;) e /= 10;
                    return r(e)
                }
                return e /= 1e3, r(e)
            }
            return e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "e puer Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1207: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(e) {
                    return "ທີ່" + e
                }
            })
        })
    },
    1208: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
            }

            function n(e, t, n, a) {
                return t ? r(n)[0] : a ? r(n)[1] : r(n)[2]
            }

            function a(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function r(e) {
                return o[e].split("_")
            }

            function i(e, t, i, o) {
                var s = e + " ";
                return 1 === e ? s + n(e, t, i[0], o) : t ? s + (a(e) ? r(i)[1] : r(i)[0]) : o ? s + r(i)[1] : s + (a(e) ? r(i)[1] : r(i)[2])
            }
            var o = {
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            };
            return e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: t,
                    m: n,
                    mm: i,
                    h: n,
                    hh: i,
                    d: n,
                    dd: i,
                    M: n,
                    MM: i,
                    y: n,
                    yy: i
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function(e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1209: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }

            function n(e, n, a) {
                return e + " " + t(i[a], e, n)
            }

            function a(e, n, a) {
                return t(i[a], e, n)
            }

            function r(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            }
            var i = {
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            };
            return e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: r,
                    m: a,
                    mm: n,
                    h: a,
                    hh: n,
                    d: a,
                    dd: n,
                    M: a,
                    MM: n,
                    y: a,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1210: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mjesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1211: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1212: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1213: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        })
    },
    1214: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = "";
                if (t) switch (n) {
                    case "s":
                        r = "काही सेकंद";
                        break;
                    case "m":
                        r = "एक मिनिट";
                        break;
                    case "mm":
                        r = "%d मिनिटे";
                        break;
                    case "h":
                        r = "एक तास";
                        break;
                    case "hh":
                        r = "%d तास";
                        break;
                    case "d":
                        r = "एक दिवस";
                        break;
                    case "dd":
                        r = "%d दिवस";
                        break;
                    case "M":
                        r = "एक महिना";
                        break;
                    case "MM":
                        r = "%d महिने";
                        break;
                    case "y":
                        r = "एक वर्ष";
                        break;
                    case "yy":
                        r = "%d वर्षे"
                } else switch (n) {
                    case "s":
                        r = "काही सेकंदां";
                        break;
                    case "m":
                        r = "एका मिनिटा";
                        break;
                    case "mm":
                        r = "%d मिनिटां";
                        break;
                    case "h":
                        r = "एका तासा";
                        break;
                    case "hh":
                        r = "%d तासां";
                        break;
                    case "d":
                        r = "एका दिवसा";
                        break;
                    case "dd":
                        r = "%d दिवसां";
                        break;
                    case "M":
                        r = "एका महिन्या";
                        break;
                    case "MM":
                        r = "%d महिन्यां";
                        break;
                    case "y":
                        r = "एका वर्षा";
                        break;
                    case "yy":
                        r = "%d वर्षां"
                }
                return r.replace(/%d/i, e)
            }
            var n = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                a = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return a[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return n[e]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1215: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1216: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1217: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "၁",
                    2: "၂",
                    3: "၃",
                    4: "၄",
                    5: "၅",
                    6: "၆",
                    7: "၇",
                    8: "၈",
                    9: "၉",
                    0: "၀"
                },
                n = {
                    "၁": "1",
                    "၂": "2",
                    "၃": "3",
                    "၄": "4",
                    "၅": "5",
                    "၆": "6",
                    "၇": "7",
                    "၈": "8",
                    "၉": "9",
                    "၀": "0"
                };
            return e.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1218: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1219: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1220: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1221: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1222: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1223: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "੧",
                    2: "੨",
                    3: "੩",
                    4: "੪",
                    5: "੫",
                    6: "੬",
                    7: "੭",
                    8: "੮",
                    9: "੯",
                    0: "੦"
                },
                n = {
                    "੧": "1",
                    "੨": "2",
                    "੩": "3",
                    "੪": "4",
                    "੫": "5",
                    "੬": "6",
                    "੭": "7",
                    "੮": "8",
                    "੯": "9",
                    "੦": "0"
                };
            return e.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function(e) {
                    return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1224: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }

            function n(e, n, a) {
                var r = e + " ";
                switch (a) {
                    case "m":
                        return n ? "minuta" : "minutę";
                    case "mm":
                        return r + (t(e) ? "minuty" : "minut");
                    case "h":
                        return n ? "godzina" : "godzinę";
                    case "hh":
                        return r + (t(e) ? "godziny" : "godzin");
                    case "MM":
                        return r + (t(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return r + (t(e) ? "lata" : "lat")
                }
            }
            var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
            return e.defineLocale("pl", {
                months: function(e, t) {
                    return e ? "" === t ? "(" + r[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : a[e.month()] : a
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: "[W] dddd [o] LT",
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: n,
                    y: "rok",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1225: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("pt", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1226: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("pt-br", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "poucos segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            })
        })
    },
    1227: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = {
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    },
                    r = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + a[n]
            }
            return e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1228: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === a ? n ? "минута" : "минуту" : e + " " + t(r[a], +e)
            }
            var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            return e.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd [в] LT"
                        }
                    },
                    lastWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1229: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
                n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            return e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1230: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1231: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function(e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function(e) {
                    return "ප.ව." === e || "පස් වරු" === e
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            })
        })
    },
    1232: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5
            }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return n ? "minúta" : r ? "minútu" : "minútou";
                    case "mm":
                        return n || r ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
                    case "h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return n || r ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
                    case "d":
                        return n || r ? "deň" : "dňom";
                    case "dd":
                        return n || r ? i + (t(e) ? "dni" : "dní") : i + "dňami";
                    case "M":
                        return n || r ? "mesiac" : "mesiacom";
                    case "MM":
                        return n || r ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                    case "y":
                        return n || r ? "rok" : "rokom";
                    case "yy":
                        return n || r ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
                }
            }
            var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("sk", {
                months: a,
                monthsShort: r,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1233: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                    case "s":
                        return t || a ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                    case "d":
                        return t || a ? "en dan" : "enim dnem";
                    case "dd":
                        return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                    case "M":
                        return t || a ? "en mesec" : "enim mesecem";
                    case "MM":
                        return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                    case "y":
                        return t || a ? "eno leto" : "enim letom";
                    case "yy":
                        return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
                }
            }
            return e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1234: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1235: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1236: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "дан",
                    dd: t.translate,
                    M: "месец",
                    MM: t.translate,
                    y: "годину",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1237: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function(e, t, n) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1238: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1239: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "masiku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1240: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "௧",
                    2: "௨",
                    3: "௩",
                    4: "௪",
                    5: "௫",
                    6: "௬",
                    7: "௭",
                    8: "௮",
                    9: "௯",
                    0: "௦"
                },
                n = {
                    "௧": "1",
                    "௨": "2",
                    "௩": "3",
                    "௪": "4",
                    "௫": "5",
                    "௬": "6",
                    "௭": "7",
                    "௮": "8",
                    "௯": "9",
                    "௦": "0"
                };
            return e.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                dayOfMonthOrdinalParse: /\d{1,2}வது/,
                ordinal: function(e) {
                    return e + "வது"
                },
                preparse: function(e) {
                    return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(e, t, n) {
                    return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1241: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1242: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "minutu balun",
                    m: "minutu ida",
                    mm: "minutus %d",
                    h: "horas ida",
                    hh: "horas %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1243: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        })
    },
    1244: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1245: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
            }

            function n(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
            }

            function a(e, t, n, a) {
                var i = r(e);
                switch (n) {
                    case "mm":
                        return i + " tup";
                    case "hh":
                        return i + " rep";
                    case "dd":
                        return i + " jaj";
                    case "MM":
                        return i + " jar";
                    case "yy":
                        return i + " DIS"
                }
            }

            function r(e) {
                var t = Math.floor(e % 1e3 / 100),
                    n = Math.floor(e % 100 / 10),
                    a = e % 10,
                    r = "";
                return t > 0 && (r += i[t] + "vatlh"), n > 0 && (r += ("" !== r ? " " : "") + i[n] + "maH"), a > 0 && (r += ("" !== r ? " " : "") + i[a]), "" === r ? "pagh" : r
            }
            var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
            return e.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: t,
                    past: n,
                    s: "puS lup",
                    m: "wa’ tup",
                    mm: a,
                    h: "wa’ rep",
                    hh: a,
                    d: "wa’ jaj",
                    dd: a,
                    M: "wa’ jar",
                    MM: a,
                    y: "wa’ DIS",
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1246: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            return e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(e) {
                    if (0 === e) return e + "'ıncı";
                    var n = e % 10,
                        a = e % 100 - n,
                        r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1247: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["viensas secunds", "'iensas secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [e + " míuts", e + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [e + " þoras", e + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", e + " ars"]
                };
                return a ? r[n][0] : t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function(e) {
                    return "d'o" === e.toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1248: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1249: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1250: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(r[a], +e)
            }

            function a(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            }

            function r(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            return e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: a,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: r("[Сьогодні "),
                    nextDay: r("[Завтра "),
                    lastDay: r("[Вчора "),
                    nextWeek: r("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return r("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return r("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1251: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            return e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[آج بوقت] LT",
                    nextDay: "[کل بوقت] LT",
                    nextWeek: "dddd [بوقت] LT",
                    lastDay: "[گذشتہ روز بوقت] LT",
                    lastWeek: "[گذشتہ] dddd [بوقت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s بعد",
                    past: "%s قبل",
                    s: "چند سیکنڈ",
                    m: "ایک منٹ",
                    mm: "%d منٹ",
                    h: "ایک گھنٹہ",
                    hh: "%d گھنٹے",
                    d: "ایک دن",
                    dd: "%d دن",
                    M: "ایک ماہ",
                    MM: "%d ماہ",
                    y: "ایک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1252: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1253: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1254: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1255: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1256: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1257: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah点mm分",
                    LLLL: "YYYY年MMMD日ddddAh点mm分",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1258: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日 HH:mm",
                    LLLL: "YYYY年MMMD日dddd HH:mm",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        })
    },
    1259: function(e, t, n) {
        ! function(e, t) {
            t(n(809))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日 HH:mm",
                    LLLL: "YYYY年MMMD日dddd HH:mm",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        })
    },
    1285: function(e, t, n) {
        "use strict";

        function a(e) {
            if (e) {
                var t = i(e);
                if (t) {
                    var n = e.getBoundingClientRect(),
                        a = t.getBoundingClientRect();
                    n.bottom > a.bottom && r(e, d), n.top < a.top && r(e, s)
                }
            }
        }

        function r(e, t) {
            requestAnimationFrame(function() {
                e.scrollIntoView(t)
            })
        }

        function i(e) {
            return null === e ? null : o(e) ? e : i(e.parentElement)
        }

        function o(e) {
            var t = getComputedStyle(e).overflowY;
            return "visible" !== t && "hidden" !== t
        }
        t.a = a;
        var s = !0,
            d = !1
    },
    1286: function(e, t, n) {
        var a = n(1506)();
        a.helpers = n(815), n(1510)(a), a.defaults = n(820), a.Element = n(848), a.elements = n(878), a.Interaction = n(1143), a.platform = n(1144), n(1521)(a), n(1522)(a), n(1523)(a), n(1524)(a), n(1525)(a), n(1526)(a), n(1527)(a), n(1528)(a), n(1529)(a), n(1530)(a), n(1531)(a), n(1532)(a), n(1533)(a), n(1534)(a), n(1536)(a), n(1537)(a), n(1538)(a), n(1539)(a), n(1540)(a), n(1541)(a), n(1542)(a), n(1543)(a), n(1544)(a), n(1545)(a), n(1546)(a), n(1547)(a), n(1548)(a), n(1549)(a);
        var r = [];
        r.push(n(1550)(a), n(1551)(a), n(1552)(a)), a.plugins.register(r), a.platform.initialize(), e.exports = a, "undefined" != typeof window && (window.Chart = a), a.canvasHelpers = a.helpers.canvas
    },
    1288: function(e, t) {},
    1405: function(e, t, n) {
        function a(e, t, n, a) {
            var i = r(e).getTime(),
                o = r(t).getTime(),
                s = r(n).getTime(),
                d = r(a).getTime();
            if (i > o || s > d) throw new Error("The start of the range cannot be after the end of the range");
            return i < d && s < o
        }
        var r = n(810);
        e.exports = a
    },
    1406: function(e, t, n) {
        function a(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, i = r(e),
                o = i.getTime();
            return t.forEach(function(e, t) {
                var i = r(e),
                    s = Math.abs(o - i.getTime());
                (void 0 === n || s < a) && (n = t, a = s)
            }), n
        }
        var r = n(810);
        e.exports = a
    },
    1407: function(e, t, n) {
        function a(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, i = r(e),
                o = i.getTime();
            return t.forEach(function(e) {
                var t = r(e),
                    i = Math.abs(o - t.getTime());
                (void 0 === n || i < a) && (n = t, a = i)
            }), n
        }
        var r = n(810);
        e.exports = a
    },
    1408: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t),
                s = n.getTime() - n.getTimezoneOffset() * i,
                d = a.getTime() - a.getTimezoneOffset() * i;
            return Math.round((s - d) / o)
        }
        var r = n(905),
            i = 6e4,
            o = 6048e5;
        e.exports = a
    },
    1409: function(e, t, n) {
        function a(e, t) {
            var n = i(e),
                a = i(t);
            return 4 * (n.getFullYear() - a.getFullYear()) + (r(n) - r(a))
        }
        var r = n(1116),
            i = n(810);
        e.exports = a
    },
    1410: function(e, t, n) {
        function a(e, t, n) {
            var a = r(e, n),
                s = r(t, n),
                d = a.getTime() - a.getTimezoneOffset() * i,
                u = s.getTime() - s.getTimezoneOffset() * i;
            return Math.round((d - u) / o)
        }
        var r = n(1034),
            i = 6e4,
            o = 6048e5;
        e.exports = a
    },
    1411: function(e, t, n) {
        function a(e, t) {
            var n = r(e, t) / i;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var r = n(1037),
            i = 36e5;
        e.exports = a
    },
    1412: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t),
                d = o(n, a),
                u = Math.abs(i(n, a));
            return n = s(n, d * u), d * (u - (o(n, a) === -d))
        }
        var r = n(810),
            i = n(1114),
            o = n(1006),
            s = n(1119);
        e.exports = a
    },
    1413: function(e, t, n) {
        function a(e, t) {
            var n = r(e, t) / i;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var r = n(1037),
            i = 6e4;
        e.exports = a
    },
    1414: function(e, t, n) {
        function a(e, t) {
            var n = r(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var r = n(1056);
        e.exports = a
    },
    1415: function(e, t, n) {
        function a(e, t) {
            var n = r(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
        var r = n(1118);
        e.exports = a
    },
    1416: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t),
                s = o(n, a),
                d = Math.abs(i(n, a));
            return n.setFullYear(n.getFullYear() - s * d), s * (d - (o(n, a) === -s))
        }
        var r = n(810),
            i = n(1117),
            o = n(1006);
        e.exports = a
    },
    1417: function(e, t) {
        function n() {
            function e(e, n, a) {
                a = a || {};
                var r;
                return r = "string" == typeof t[e] ? t[e] : 1 === n ? t[e].one : t[e].other.replace("{{count}}", n), a.addSuffix ? a.comparison > 0 ? "in " + r : r + " ago" : r
            }
            var t = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: e
            }
        }
        e.exports = n
    },
    1418: function(e, t, n) {
        function a() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                s = ["AM", "PM"],
                d = ["am", "pm"],
                u = ["a.m.", "p.m."],
                l = {
                    MMM: function(t) {
                        return e[t.getMonth()]
                    },
                    MMMM: function(e) {
                        return t[e.getMonth()]
                    },
                    dd: function(e) {
                        return n[e.getDay()]
                    },
                    ddd: function(e) {
                        return a[e.getDay()]
                    },
                    dddd: function(e) {
                        return o[e.getDay()]
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? d[1] : d[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? u[1] : u[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                l[e + "o"] = function(t, n) {
                    return r(n[e](t))
                }
            }), {
                formatters: l,
                formattingTokensRegExp: i(l)
            }
        }

        function r(e) {
            var t = e % 100;
            if (t > 20 || t < 10) switch (t % 10) {
                case 1:
                    return e + "st";
                case 2:
                    return e + "nd";
                case 3:
                    return e + "rd"
            }
            return e + "th"
        }
        var i = n(1419);
        e.exports = a
    },
    1419: function(e, t) {
        function n(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            var r = a.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + r.join("|") + "|.)", "g")
        }
        var a = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = n
    },
    1420: function(e, t, n) {
        function a(e, t, n) {
            var a = n || {},
                c = r(e, t),
                m = a.locale,
                _ = s.distanceInWords.localize;
            m && m.distanceInWords && m.distanceInWords.localize && (_ = m.distanceInWords.localize);
            var h, f, p = {
                addSuffix: Boolean(a.addSuffix),
                comparison: c
            };
            c > 0 ? (h = i(e), f = i(t)) : (h = i(t), f = i(e));
            var y, M, g, v, b, L = Math[a.partialMethod ? String(a.partialMethod) : "floor"],
                Y = o(f, h),
                k = f.getTimezoneOffset() - h.getTimezoneOffset(),
                D = L(Y / 60) - k;
            if ("s" === (y = a.unit ? String(a.unit) : D < 1 ? "s" : D < 60 ? "m" : D < d ? "h" : D < u ? "d" : D < l ? "M" : "Y")) return _("xSeconds", Y, p);
            if ("m" === y) return _("xMinutes", D, p);
            if ("h" === y) return M = L(D / 60), _("xHours", M, p);
            if ("d" === y) return g = L(D / d), _("xDays", g, p);
            if ("M" === y) return v = L(D / u), _("xMonths", v, p);
            if ("Y" === y) return b = L(D / l), _("xYears", b, p);
            throw new Error("Unknown unit: " + y)
        }
        var r = n(1055),
            i = n(810),
            o = n(1057),
            s = n(1058),
            d = 1440,
            u = 43200,
            l = 525600;
        e.exports = a
    },
    1421: function(e, t, n) {
        function a(e, t) {
            return r(Date.now(), e, t)
        }
        var r = n(1120);
        e.exports = a
    },
    1422: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t),
                i = a.getTime();
            if (n.getTime() > i) throw new Error("The first date cannot be after the second date");
            var o = [],
                s = n;
            for (s.setHours(0, 0, 0, 0); s.getTime() <= i;) o.push(r(s)), s.setDate(s.getDate() + 1);
            return o
        }
        var r = n(810);
        e.exports = a
    },
    1423: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setMinutes(59, 59, 999), t
        }
        var r = n(810);
        e.exports = a
    },
    1424: function(e, t, n) {
        function a(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
        var r = n(1121);
        e.exports = a
    },
    1425: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = i(n);
            return a.setMilliseconds(a.getMilliseconds() - 1), a
        }
        var r = n(904),
            i = n(905);
        e.exports = a
    },
    1426: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setSeconds(59, 999), t
        }
        var r = n(810);
        e.exports = a
    },
    1427: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(23, 59, 59, 999), t
        }
        var r = n(810);
        e.exports = a
    },
    1428: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setMilliseconds(999), t
        }
        var r = n(810);
        e.exports = a
    },
    1429: function(e, t, n) {
        function a() {
            return r(new Date)
        }
        var r = n(1059);
        e.exports = a
    },
    1430: function(e, t) {
        function n() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a + 1), r.setHours(23, 59, 59, 999), r
        }
        e.exports = n
    },
    1431: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
        var r = n(810);
        e.exports = a
    },
    1432: function(e, t) {
        function n() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a - 1), r.setHours(23, 59, 59, 999), r
        }
        e.exports = n
    },
    1433: function(e, t, n) {
        function a(e, t, n) {
            var a = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                i = n || {},
                o = i.locale,
                s = _.format.formatters,
                d = _.format.formattingTokensRegExp;
            o && o.format && o.format.formatters && (s = o.format.formatters, o.format.formattingTokensRegExp && (d = o.format.formattingTokensRegExp));
            var u = c(e);
            return m(u) ? r(a, s, d)(u) : "Invalid Date"
        }

        function r(e, t, n) {
            var a, r, o = e.match(n),
                s = o.length;
            for (a = 0; a < s; a++) r = t[o[a]] || h[o[a]], o[a] = r || i(o[a]);
            return function(e) {
                for (var t = "", n = 0; n < s; n++) o[n] instanceof Function ? t += o[n](e, h) : t += o[n];
                return t
            }
        }

        function i(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, "") : e.replace(/\\/g, "")
        }

        function o(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                a = Math.abs(e),
                r = Math.floor(a / 60),
                i = a % 60;
            return n + s(r, 2) + t + s(i, 2)
        }

        function s(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        var d = n(1123),
            u = n(1060),
            l = n(904),
            c = n(810),
            m = n(1125),
            _ = n(1058),
            h = {
                M: function(e) {
                    return e.getMonth() + 1
                },
                MM: function(e) {
                    return s(e.getMonth() + 1, 2)
                },
                Q: function(e) {
                    return Math.ceil((e.getMonth() + 1) / 3)
                },
                D: function(e) {
                    return e.getDate()
                },
                DD: function(e) {
                    return s(e.getDate(), 2)
                },
                DDD: function(e) {
                    return d(e)
                },
                DDDD: function(e) {
                    return s(d(e), 3)
                },
                d: function(e) {
                    return e.getDay()
                },
                E: function(e) {
                    return e.getDay() || 7
                },
                W: function(e) {
                    return u(e)
                },
                WW: function(e) {
                    return s(u(e), 2)
                },
                YY: function(e) {
                    return s(e.getFullYear(), 4).substr(2)
                },
                YYYY: function(e) {
                    return s(e.getFullYear(), 4)
                },
                GG: function(e) {
                    return String(l(e)).substr(2)
                },
                GGGG: function(e) {
                    return l(e)
                },
                H: function(e) {
                    return e.getHours()
                },
                HH: function(e) {
                    return s(e.getHours(), 2)
                },
                h: function(e) {
                    var t = e.getHours();
                    return 0 === t ? 12 : t > 12 ? t % 12 : t
                },
                hh: function(e) {
                    return s(h.h(e), 2)
                },
                m: function(e) {
                    return e.getMinutes()
                },
                mm: function(e) {
                    return s(e.getMinutes(), 2)
                },
                s: function(e) {
                    return e.getSeconds()
                },
                ss: function(e) {
                    return s(e.getSeconds(), 2)
                },
                S: function(e) {
                    return Math.floor(e.getMilliseconds() / 100)
                },
                SS: function(e) {
                    return s(Math.floor(e.getMilliseconds() / 10), 2)
                },
                SSS: function(e) {
                    return s(e.getMilliseconds(), 3)
                },
                Z: function(e) {
                    return o(e.getTimezoneOffset(), ":")
                },
                ZZ: function(e) {
                    return o(e.getTimezoneOffset())
                },
                X: function(e) {
                    return Math.floor(e.getTime() / 1e3)
                },
                x: function(e) {
                    return e.getTime()
                }
            };
        e.exports = a
    },
    1434: function(e, t, n) {
        function a(e) {
            return r(e).getDate()
        }
        var r = n(810);
        e.exports = a
    },
    1435: function(e, t, n) {
        function a(e) {
            return r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1436: function(e, t, n) {
        function a(e) {
            return r(e) ? 366 : 365
        }
        var r = n(1126);
        e.exports = a
    },
    1437: function(e, t, n) {
        function a(e) {
            return r(e).getHours()
        }
        var r = n(810);
        e.exports = a
    },
    1438: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = r(i(t, 60)),
                a = n.valueOf() - t.valueOf();
            return Math.round(a / o)
        }
        var r = n(1005),
            i = n(1054),
            o = 6048e5;
        e.exports = a
    },
    1439: function(e, t, n) {
        function a(e) {
            return r(e).getMilliseconds()
        }
        var r = n(810);
        e.exports = a
    },
    1440: function(e, t, n) {
        function a(e) {
            return r(e).getMinutes()
        }
        var r = n(810);
        e.exports = a
    },
    1441: function(e, t, n) {
        function a(e) {
            return r(e).getMonth()
        }
        var r = n(810);
        e.exports = a
    },
    1442: function(e, t, n) {
        function a(e, t, n, a) {
            var o = r(e).getTime(),
                s = r(t).getTime(),
                d = r(n).getTime(),
                u = r(a).getTime();
            if (o > s || d > u) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < u && d < s)) return 0;
            var l = d < o ? o : d,
                c = u > s ? s : u,
                m = c - l;
            return Math.ceil(m / i)
        }
        var r = n(810),
            i = 864e5;
        e.exports = a
    },
    1443: function(e, t, n) {
        function a(e) {
            return r(e).getSeconds()
        }
        var r = n(810);
        e.exports = a
    },
    1444: function(e, t, n) {
        function a(e) {
            return r(e).getTime()
        }
        var r = n(810);
        e.exports = a
    },
    1445: function(e, t, n) {
        function a(e) {
            return r(e).getFullYear()
        }
        var r = n(810);
        e.exports = a
    },
    1446: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() > a.getTime()
        }
        var r = n(810);
        e.exports = a
    },
    1447: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() < a.getTime()
        }
        var r = n(810);
        e.exports = a
    },
    1448: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
        var r = n(810);
        e.exports = a
    },
    1449: function(e, t, n) {
        function a(e) {
            return 1 === r(e).getDate()
        }
        var r = n(810);
        e.exports = a
    },
    1450: function(e, t, n) {
        function a(e) {
            return 5 === r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1451: function(e, t, n) {
        function a(e) {
            return r(e).getTime() > (new Date).getTime()
        }
        var r = n(810);
        e.exports = a
    },
    1452: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return i(t).getTime() === o(t).getTime()
        }
        var r = n(810),
            i = n(1059),
            o = n(1122);
        e.exports = a
    },
    1453: function(e, t, n) {
        function a(e) {
            return 1 === r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1454: function(e, t, n) {
        function a(e) {
            return r(e).getTime() < (new Date).getTime()
        }
        var r = n(810);
        e.exports = a
    },
    1455: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
        var r = n(906);
        e.exports = a
    },
    1456: function(e, t, n) {
        function a(e) {
            return 6 === r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1457: function(e, t, n) {
        function a(e) {
            return 0 === r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1458: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1128);
        e.exports = a
    },
    1459: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1130);
        e.exports = a
    },
    1460: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1131);
        e.exports = a
    },
    1461: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1132);
        e.exports = a
    },
    1462: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1134);
        e.exports = a
    },
    1463: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1135);
        e.exports = a
    },
    1464: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1137);
        e.exports = a
    },
    1465: function(e, t, n) {
        function a(e, t) {
            return r(new Date, e, t)
        }
        var r = n(1061);
        e.exports = a
    },
    1466: function(e, t, n) {
        function a(e) {
            return r(new Date, e)
        }
        var r = n(1139);
        e.exports = a
    },
    1467: function(e, t, n) {
        function a(e) {
            return 4 === r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1468: function(e, t, n) {
        function a(e) {
            return r(e).getTime() === r(new Date).getTime()
        }
        var r = n(906);
        e.exports = a
    },
    1469: function(e, t, n) {
        function a(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), r(e).getTime() === r(t).getTime()
        }
        var r = n(906);
        e.exports = a
    },
    1470: function(e, t, n) {
        function a(e) {
            return 2 === r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1471: function(e, t, n) {
        function a(e) {
            return 3 === r(e).getDay()
        }
        var r = n(810);
        e.exports = a
    },
    1472: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getDay();
            return 0 === n || 6 === n
        }
        var r = n(810);
        e.exports = a
    },
    1473: function(e, t, n) {
        function a(e, t, n) {
            var a = r(e).getTime(),
                i = r(t).getTime(),
                o = r(n).getTime();
            if (i > o) throw new Error("The start of the range cannot be after the end of the range");
            return a >= i && a <= o
        }
        var r = n(810);
        e.exports = a
    },
    1474: function(e, t, n) {
        function a(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), r(e).getTime() === r(t).getTime()
        }
        var r = n(906);
        e.exports = a
    },
    1475: function(e, t, n) {
        function a(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
        var r = n(1140);
        e.exports = a
    },
    1476: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = i(n);
            return a.setDate(a.getDate() - 1), a
        }
        var r = n(904),
            i = n(905);
        e.exports = a
    },
    1477: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    1478: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(0, 0, 0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    1479: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    1480: function(e, t, n) {
        function a() {
            var e = Array.prototype.slice.call(arguments),
                t = e.map(function(e) {
                    return r(e)
                }),
                n = Math.max.apply(null, t);
            return new Date(n)
        }
        var r = n(810);
        e.exports = a
    },
    1481: function(e, t, n) {
        function a() {
            var e = Array.prototype.slice.call(arguments),
                t = e.map(function(e) {
                    return r(e)
                }),
                n = Math.min.apply(null, t);
            return new Date(n)
        }
        var r = n(810);
        e.exports = a
    },
    1482: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setDate(a), n
        }
        var r = n(810);
        e.exports = a
    },
    1483: function(e, t, n) {
        function a(e, t, n) {
            var a = n ? Number(n.weekStartsOn) || 0 : 0,
                o = r(e),
                s = Number(t),
                d = o.getDay();
            return i(o, ((s % 7 + 7) % 7 < a ? 7 : 0) + s - d)
        }
        var r = n(810),
            i = n(1003);
        e.exports = a
    },
    1484: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMonth(0), n.setDate(a), n
        }
        var r = n(810);
        e.exports = a
    },
    1485: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setHours(a), n
        }
        var r = n(810);
        e.exports = a
    },
    1486: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t),
                s = o(n);
            return i(n, a - s)
        }
        var r = n(810),
            i = n(1003),
            o = n(1127);
        e.exports = a
    },
    1487: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t),
                o = i(n) - a;
            return n.setDate(n.getDate() - 7 * o), n
        }
        var r = n(810),
            i = n(1060);
        e.exports = a
    },
    1488: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMilliseconds(a), n
        }
        var r = n(810);
        e.exports = a
    },
    1489: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMinutes(a), n
        }
        var r = n(810);
        e.exports = a
    },
    1490: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t),
                o = Math.floor(n.getMonth() / 3) + 1,
                s = a - o;
            return i(n, n.getMonth() + 3 * s)
        }
        var r = n(810),
            i = n(1141);
        e.exports = a
    },
    1491: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setSeconds(a), n
        }
        var r = n(810);
        e.exports = a
    },
    1492: function(e, t, n) {
        function a(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setFullYear(a), n
        }
        var r = n(810);
        e.exports = a
    },
    1493: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    1494: function(e, t, n) {
        function a() {
            return r(new Date)
        }
        var r = n(906);
        e.exports = a
    },
    1495: function(e, t) {
        function n() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a + 1), r.setHours(0, 0, 0, 0), r
        }
        e.exports = n
    },
    1496: function(e, t) {
        function n() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a - 1), r.setHours(0, 0, 0, 0), r
        }
        e.exports = n
    },
    1497: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1003);
        e.exports = a
    },
    1498: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1107);
        e.exports = a
    },
    1499: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1004);
        e.exports = a
    },
    1500: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1110);
        e.exports = a
    },
    1501: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1036);
        e.exports = a
    },
    1502: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1111);
        e.exports = a
    },
    1503: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1112);
        e.exports = a
    },
    1504: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1054);
        e.exports = a
    },
    1505: function(e, t, n) {
        function a(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
        var r = n(1113);
        e.exports = a
    },
    1506: function(e, t, n) {
        "use strict";
        n(820)._set("global", {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            hover: {
                onHover: null,
                mode: "nearest",
                intersect: !0,
                animationDuration: 400
            },
            onClick: null,
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            showLines: !0,
            elements: {},
            layout: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        }), e.exports = function() {
            var e = function(e, t) {
                return this.construct(e, t), this
            };
            return e.Chart = e, e
        }
    },
    1507: function(e, t, n) {
        "use strict";
        var a = n(1038),
            r = {
                linear: function(e) {
                    return e
                },
                easeInQuad: function(e) {
                    return e * e
                },
                easeOutQuad: function(e) {
                    return -e * (e - 2)
                },
                easeInOutQuad: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                },
                easeInCubic: function(e) {
                    return e * e * e
                },
                easeOutCubic: function(e) {
                    return (e -= 1) * e * e + 1
                },
                easeInOutCubic: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                },
                easeInQuart: function(e) {
                    return e * e * e * e
                },
                easeOutQuart: function(e) {
                    return -((e -= 1) * e * e * e - 1)
                },
                easeInOutQuart: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                },
                easeInQuint: function(e) {
                    return e * e * e * e * e
                },
                easeOutQuint: function(e) {
                    return (e -= 1) * e * e * e * e + 1
                },
                easeInOutQuint: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                },
                easeInSine: function(e) {
                    return 1 - Math.cos(e * (Math.PI / 2))
                },
                easeOutSine: function(e) {
                    return Math.sin(e * (Math.PI / 2))
                },
                easeInOutSine: function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                },
                easeInExpo: function(e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                },
                easeOutExpo: function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                easeInOutExpo: function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                },
                easeInCirc: function(e) {
                    return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
                },
                easeOutCirc: function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                },
                easeInOutCirc: function(e) {
                    return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                },
                easeInElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
                },
                easeOutElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
                },
                easeInOutElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
                },
                easeInBack: function(e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                },
                easeOutBack: function(e) {
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1
                },
                easeInOutBack: function(e) {
                    var t = 1.70158;
                    return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                },
                easeInBounce: function(e) {
                    return 1 - r.easeOutBounce(1 - e)
                },
                easeOutBounce: function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                easeInOutBounce: function(e) {
                    return e < .5 ? .5 * r.easeInBounce(2 * e) : .5 * r.easeOutBounce(2 * e - 1) + .5
                }
            };
        e.exports = {
            effects: r
        }, a.easingEffects = r
    },
    1508: function(e, t, n) {
        "use strict";
        var a = n(1038),
            t = e.exports = {
                clear: function(e) {
                    e.ctx.clearRect(0, 0, e.width, e.height)
                },
                roundedRect: function(e, t, n, a, r, i) {
                    if (i) {
                        var o = Math.min(i, a / 2),
                            s = Math.min(i, r / 2);
                        e.moveTo(t + o, n), e.lineTo(t + a - o, n), e.quadraticCurveTo(t + a, n, t + a, n + s), e.lineTo(t + a, n + r - s), e.quadraticCurveTo(t + a, n + r, t + a - o, n + r), e.lineTo(t + o, n + r), e.quadraticCurveTo(t, n + r, t, n + r - s), e.lineTo(t, n + s), e.quadraticCurveTo(t, n, t + o, n)
                    } else e.rect(t, n, a, r)
                },
                drawPoint: function(e, t, n, a, r) {
                    var i, o, s, d, u, l;
                    if ("object" == typeof t && ("[object HTMLImageElement]" === (i = t.toString()) || "[object HTMLCanvasElement]" === i)) return void e.drawImage(t, a - t.width / 2, r - t.height / 2, t.width, t.height);
                    if (!(isNaN(n) || n <= 0)) {
                        switch (t) {
                            default: e.beginPath(),
                            e.arc(a, r, n, 0, 2 * Math.PI),
                            e.closePath(),
                            e.fill();
                            break;
                            case "triangle":
                                    e.beginPath(),
                                o = 3 * n / Math.sqrt(3),
                                u = o * Math.sqrt(3) / 2,
                                e.moveTo(a - o / 2, r + u / 3),
                                e.lineTo(a + o / 2, r + u / 3),
                                e.lineTo(a, r - 2 * u / 3),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rect":
                                    l = 1 / Math.SQRT2 * n,
                                e.beginPath(),
                                e.fillRect(a - l, r - l, 2 * l, 2 * l),
                                e.strokeRect(a - l, r - l, 2 * l, 2 * l);
                                break;
                            case "rectRounded":
                                    var c = n / Math.SQRT2,
                                    m = a - c,
                                    _ = r - c,
                                    h = Math.SQRT2 * n;e.beginPath(),
                                this.roundedRect(e, m, _, h, h, n / 2),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rectRot":
                                    l = 1 / Math.SQRT2 * n,
                                e.beginPath(),
                                e.moveTo(a - l, r),
                                e.lineTo(a, r + l),
                                e.lineTo(a + l, r),
                                e.lineTo(a, r - l),
                                e.closePath(),
                                e.fill();
                                break;
                            case "cross":
                                    e.beginPath(),
                                e.moveTo(a, r + n),
                                e.lineTo(a, r - n),
                                e.moveTo(a - n, r),
                                e.lineTo(a + n, r),
                                e.closePath();
                                break;
                            case "crossRot":
                                    e.beginPath(),
                                s = Math.cos(Math.PI / 4) * n,
                                d = Math.sin(Math.PI / 4) * n,
                                e.moveTo(a - s, r - d),
                                e.lineTo(a + s, r + d),
                                e.moveTo(a - s, r + d),
                                e.lineTo(a + s, r - d),
                                e.closePath();
                                break;
                            case "star":
                                    e.beginPath(),
                                e.moveTo(a, r + n),
                                e.lineTo(a, r - n),
                                e.moveTo(a - n, r),
                                e.lineTo(a + n, r),
                                s = Math.cos(Math.PI / 4) * n,
                                d = Math.sin(Math.PI / 4) * n,
                                e.moveTo(a - s, r - d),
                                e.lineTo(a + s, r + d),
                                e.moveTo(a - s, r + d),
                                e.lineTo(a + s, r - d),
                                e.closePath();
                                break;
                            case "line":
                                    e.beginPath(),
                                e.moveTo(a - n, r),
                                e.lineTo(a + n, r),
                                e.closePath();
                                break;
                            case "dash":
                                    e.beginPath(),
                                e.moveTo(a, r),
                                e.lineTo(a + n, r),
                                e.closePath()
                        }
                        e.stroke()
                    }
                },
                clipArea: function(e, t) {
                    e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
                },
                unclipArea: function(e) {
                    e.restore()
                },
                lineTo: function(e, t, n, a) {
                    return n.steppedLine ? ("after" === n.steppedLine && !a || "after" !== n.steppedLine && a ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y), void e.lineTo(n.x, n.y)) : n.tension ? void e.bezierCurveTo(a ? t.controlPointPreviousX : t.controlPointNextX, a ? t.controlPointPreviousY : t.controlPointNextY, a ? n.controlPointNextX : n.controlPointPreviousX, a ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : void e.lineTo(n.x, n.y)
                }
            };
        a.clear = t.clear, a.drawRoundedRectangle = function(e) {
            e.beginPath(), t.roundedRect.apply(t, arguments), e.closePath()
        }
    },
    1509: function(e, t, n) {
        "use strict";
        var a = n(1038);
        e.exports = {
            toLineHeight: function(e, t) {
                var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!n || "normal" === n[1]) return 1.2 * t;
                switch (e = +n[2], n[3]) {
                    case "px":
                        return e;
                    case "%":
                        e /= 100
                }
                return t * e
            },
            toPadding: function(e) {
                var t, n, r, i;
                return a.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, r = +e.bottom || 0, i = +e.left || 0) : t = n = r = i = +e || 0, {
                    top: t,
                    right: n,
                    bottom: r,
                    left: i,
                    height: t + r,
                    width: i + n
                }
            },
            resolve: function(e, t, n) {
                var r, i, o;
                for (r = 0, i = e.length; r < i; ++r)
                    if (void 0 !== (o = e[r]) && (void 0 !== t && "function" == typeof o && (o = o(t)), void 0 !== n && a.isArray(o) && (o = o[n]), void 0 !== o)) return o
            }
        }
    },
    1510: function(e, t, n) {
        "use strict";
        var a = n(1142),
            r = n(820),
            i = n(815);
        e.exports = function(e) {
            function t(e, t, n) {
                var a;
                return "string" == typeof e ? (a = parseInt(e, 10), -1 !== e.indexOf("%") && (a = a / 100 * t.parentNode[n])) : a = e, a
            }

            function n(e) {
                return void 0 !== e && null !== e && "none" !== e
            }

            function o(e, a, r) {
                var i = document.defaultView,
                    o = e.parentNode,
                    s = i.getComputedStyle(e)[a],
                    d = i.getComputedStyle(o)[a],
                    u = n(s),
                    l = n(d),
                    c = Number.POSITIVE_INFINITY;
                return u || l ? Math.min(u ? t(s, e, r) : c, l ? t(d, o, r) : c) : "none"
            }
            i.extend = function(e) {
                for (var t = function(t, n) {
                        e[n] = t
                    }, n = 1, a = arguments.length; n < a; n++) i.each(arguments[n], t);
                return e
            }, i.configMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, n, a, r) {
                        var o = n[t] || {},
                            s = a[t];
                        "scales" === t ? n[t] = i.scaleMerge(o, s) : "scale" === t ? n[t] = i.merge(o, [e.scaleService.getScaleDefaults(s.type), s]) : i._merger(t, n, a, r)
                    }
                })
            }, i.scaleMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, n, a, r) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var o, s, d, u = a[t].length;
                            for (n[t] || (n[t] = []), o = 0; o < u; ++o) d = a[t][o], s = i.valueOrDefault(d.type, "xAxes" === t ? "category" : "linear"), o >= n[t].length && n[t].push({}), !n[t][o].type || d.type && d.type !== n[t][o].type ? i.merge(n[t][o], [e.scaleService.getScaleDefaults(s), d]) : i.merge(n[t][o], d)
                        } else i._merger(t, n, a, r)
                    }
                })
            }, i.where = function(e, t) {
                if (i.isArray(e) && Array.prototype.filter) return e.filter(t);
                var n = [];
                return i.each(e, function(e) {
                    t(e) && n.push(e)
                }), n
            }, i.findIndex = Array.prototype.findIndex ? function(e, t, n) {
                return e.findIndex(t, n)
            } : function(e, t, n) {
                n = void 0 === n ? e : n;
                for (var a = 0, r = e.length; a < r; ++a)
                    if (t.call(n, e[a], a, e)) return a;
                return -1
            }, i.findNextWhere = function(e, t, n) {
                i.isNullOrUndef(n) && (n = -1);
                for (var a = n + 1; a < e.length; a++) {
                    var r = e[a];
                    if (t(r)) return r
                }
            }, i.findPreviousWhere = function(e, t, n) {
                i.isNullOrUndef(n) && (n = e.length);
                for (var a = n - 1; a >= 0; a--) {
                    var r = e[a];
                    if (t(r)) return r
                }
            }, i.inherits = function(e) {
                var t = this,
                    n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                        return t.apply(this, arguments)
                    },
                    a = function() {
                        this.constructor = n
                    };
                return a.prototype = t.prototype, n.prototype = new a, n.extend = i.inherits, e && i.extend(n.prototype, e), n.__super__ = t.prototype, n
            }, i.isNumber = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, i.almostEquals = function(e, t, n) {
                return Math.abs(e - t) < n
            }, i.almostWhole = function(e, t) {
                var n = Math.round(e);
                return n - t < e && n + t > e
            }, i.max = function(e) {
                return e.reduce(function(e, t) {
                    return isNaN(t) ? e : Math.max(e, t)
                }, Number.NEGATIVE_INFINITY)
            }, i.min = function(e) {
                return e.reduce(function(e, t) {
                    return isNaN(t) ? e : Math.min(e, t)
                }, Number.POSITIVE_INFINITY)
            }, i.sign = Math.sign ? function(e) {
                return Math.sign(e)
            } : function(e) {
                return e = +e, 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
            }, i.log10 = Math.log10 ? function(e) {
                return Math.log10(e)
            } : function(e) {
                return Math.log(e) / Math.LN10
            }, i.toRadians = function(e) {
                return e * (Math.PI / 180)
            }, i.toDegrees = function(e) {
                return e * (180 / Math.PI)
            }, i.getAngleFromPoint = function(e, t) {
                var n = t.x - e.x,
                    a = t.y - e.y,
                    r = Math.sqrt(n * n + a * a),
                    i = Math.atan2(a, n);
                return i < -.5 * Math.PI && (i += 2 * Math.PI), {
                    angle: i,
                    distance: r
                }
            }, i.distanceBetweenPoints = function(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }, i.aliasPixel = function(e) {
                return e % 2 == 0 ? 0 : .5
            }, i.splineCurve = function(e, t, n, a) {
                var r = e.skip ? t : e,
                    i = t,
                    o = n.skip ? t : n,
                    s = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
                    d = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
                    u = s / (s + d),
                    l = d / (s + d);
                u = isNaN(u) ? 0 : u, l = isNaN(l) ? 0 : l;
                var c = a * u,
                    m = a * l;
                return {
                    previous: {
                        x: i.x - c * (o.x - r.x),
                        y: i.y - c * (o.y - r.y)
                    },
                    next: {
                        x: i.x + m * (o.x - r.x),
                        y: i.y + m * (o.y - r.y)
                    }
                }
            }, i.EPSILON = Number.EPSILON || 1e-14, i.splineCurveMonotone = function(e) {
                var t, n, a, r, o = (e || []).map(function(e) {
                        return {
                            model: e._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                    s = o.length;
                for (t = 0; t < s; ++t)
                    if (a = o[t], !a.model.skip) {
                        if (n = t > 0 ? o[t - 1] : null, (r = t < s - 1 ? o[t + 1] : null) && !r.model.skip) {
                            var d = r.model.x - a.model.x;
                            a.deltaK = 0 !== d ? (r.model.y - a.model.y) / d : 0
                        }!n || n.model.skip ? a.mK = a.deltaK : !r || r.model.skip ? a.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (n.deltaK + a.deltaK) / 2
                    }
                var u, l, c, m;
                for (t = 0; t < s - 1; ++t) a = o[t], r = o[t + 1], a.model.skip || r.model.skip || (i.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = r.mK = 0 : (u = a.mK / a.deltaK, l = r.mK / a.deltaK, (m = Math.pow(u, 2) + Math.pow(l, 2)) <= 9 || (c = 3 / Math.sqrt(m), a.mK = u * c * a.deltaK, r.mK = l * c * a.deltaK)));
                var _;
                for (t = 0; t < s; ++t) a = o[t], a.model.skip || (n = t > 0 ? o[t - 1] : null, r = t < s - 1 ? o[t + 1] : null, n && !n.model.skip && (_ = (a.model.x - n.model.x) / 3, a.model.controlPointPreviousX = a.model.x - _, a.model.controlPointPreviousY = a.model.y - _ * a.mK), r && !r.model.skip && (_ = (r.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + _, a.model.controlPointNextY = a.model.y + _ * a.mK))
            }, i.nextItem = function(e, t, n) {
                return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
            }, i.previousItem = function(e, t, n) {
                return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
            }, i.niceNum = function(e, t) {
                var n = Math.floor(i.log10(e)),
                    a = e / Math.pow(10, n);
                return (t ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * Math.pow(10, n)
            }, i.requestAnimFrame = function() {
                return "undefined" == typeof window ? function(e) {
                    e()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    return window.setTimeout(e, 1e3 / 60)
                }
            }(), i.getRelativePosition = function(e, t) {
                var n, a, r = e.originalEvent || e,
                    o = e.currentTarget || e.srcElement,
                    s = o.getBoundingClientRect(),
                    d = r.touches;
                d && d.length > 0 ? (n = d[0].clientX, a = d[0].clientY) : (n = r.clientX, a = r.clientY);
                var u = parseFloat(i.getStyle(o, "padding-left")),
                    l = parseFloat(i.getStyle(o, "padding-top")),
                    c = parseFloat(i.getStyle(o, "padding-right")),
                    m = parseFloat(i.getStyle(o, "padding-bottom")),
                    _ = s.right - s.left - u - c,
                    h = s.bottom - s.top - l - m;
                return n = Math.round((n - s.left - u) / _ * o.width / t.currentDevicePixelRatio), a = Math.round((a - s.top - l) / h * o.height / t.currentDevicePixelRatio), {
                    x: n,
                    y: a
                }
            }, i.getConstraintWidth = function(e) {
                return o(e, "max-width", "clientWidth")
            }, i.getConstraintHeight = function(e) {
                return o(e, "max-height", "clientHeight")
            }, i.getMaximumWidth = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientWidth;
                var n = parseInt(i.getStyle(t, "padding-left"), 10),
                    a = parseInt(i.getStyle(t, "padding-right"), 10),
                    r = t.clientWidth - n - a,
                    o = i.getConstraintWidth(e);
                return isNaN(o) ? r : Math.min(r, o)
            }, i.getMaximumHeight = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientHeight;
                var n = parseInt(i.getStyle(t, "padding-top"), 10),
                    a = parseInt(i.getStyle(t, "padding-bottom"), 10),
                    r = t.clientHeight - n - a,
                    o = i.getConstraintHeight(e);
                return isNaN(o) ? r : Math.min(r, o)
            }, i.getStyle = function(e, t) {
                return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
            }, i.retinaScale = function(e, t) {
                var n = e.currentDevicePixelRatio = t || window.devicePixelRatio || 1;
                if (1 !== n) {
                    var a = e.canvas,
                        r = e.height,
                        i = e.width;
                    a.height = r * n, a.width = i * n, e.ctx.scale(n, n), a.style.height = r + "px", a.style.width = i + "px"
                }
            }, i.fontString = function(e, t, n) {
                return t + " " + e + "px " + n
            }, i.longestText = function(e, t, n, a) {
                a = a || {};
                var r = a.data = a.data || {},
                    o = a.garbageCollect = a.garbageCollect || [];
                a.font !== t && (r = a.data = {}, o = a.garbageCollect = [], a.font = t), e.font = t;
                var s = 0;
                i.each(n, function(t) {
                    void 0 !== t && null !== t && !0 !== i.isArray(t) ? s = i.measureText(e, r, o, s, t) : i.isArray(t) && i.each(t, function(t) {
                        void 0 === t || null === t || i.isArray(t) || (s = i.measureText(e, r, o, s, t))
                    })
                });
                var d = o.length / 2;
                if (d > n.length) {
                    for (var u = 0; u < d; u++) delete r[o[u]];
                    o.splice(0, d)
                }
                return s
            }, i.measureText = function(e, t, n, a, r) {
                var i = t[r];
                return i || (i = t[r] = e.measureText(r).width, n.push(r)), i > a && (a = i), a
            }, i.numberOfLabelLines = function(e) {
                var t = 1;
                return i.each(e, function(e) {
                    i.isArray(e) && e.length > t && (t = e.length)
                }), t
            }, i.color = a ? function(e) {
                return e instanceof CanvasGradient && (e = r.global.defaultColor), a(e)
            } : function(e) {
                return console.error("Color.js not found!"), e
            }, i.getHoverColor = function(e) {
                return e instanceof CanvasPattern ? e : i.color(e).saturate(.5).darken(.1).rgbString()
            }
        }
    },
    1511: function(e, t, n) {
        var a = n(1512),
            r = function() {
                return new u
            };
        for (var i in a) {
            r[i + "Raw"] = function(e) {
                return function(t) {
                    return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
                }
            }(i);
            var o = /(\w+)2(\w+)/.exec(i),
                s = o[1],
                d = o[2];
            r[s] = r[s] || {}, r[s][d] = r[i] = function(e) {
                return function(t) {
                    "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                    var n = a[e](t);
                    if ("string" == typeof n || void 0 === n) return n;
                    for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
                    return n
                }
            }(i)
        }
        var u = function() {
            this.convs = {}
        };
        u.prototype.routeSpace = function(e, t) {
            var n = t[0];
            return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n))
        }, u.prototype.setValues = function(e, t) {
            return this.space = e, this.convs = {}, this.convs[e] = t, this
        }, u.prototype.getValues = function(e) {
            var t = this.convs[e];
            if (!t) {
                var n = this.space,
                    a = this.convs[n];
                t = r[n][e](a), this.convs[e] = t
            }
            return t
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
            u.prototype[e] = function(t) {
                return this.routeSpace(e, arguments)
            }
        }), e.exports = r
    },
    1512: function(e, t) {
        function n(e) {
            var t, n, a, r = e[0] / 255,
                i = e[1] / 255,
                o = e[2] / 255,
                s = Math.min(r, i, o),
                d = Math.max(r, i, o),
                u = d - s;
            return d == s ? t = 0 : r == d ? t = (i - o) / u : i == d ? t = 2 + (o - r) / u : o == d && (t = 4 + (r - i) / u), t = Math.min(60 * t, 360), t < 0 && (t += 360), a = (s + d) / 2, n = d == s ? 0 : a <= .5 ? u / (d + s) : u / (2 - d - s), [t, 100 * n, 100 * a]
        }

        function a(e) {
            var t, n, a, r = e[0],
                i = e[1],
                o = e[2],
                s = Math.min(r, i, o),
                d = Math.max(r, i, o),
                u = d - s;
            return n = 0 == d ? 0 : u / d * 1e3 / 10, d == s ? t = 0 : r == d ? t = (i - o) / u : i == d ? t = 2 + (o - r) / u : o == d && (t = 4 + (r - i) / u), t = Math.min(60 * t, 360), t < 0 && (t += 360), a = d / 255 * 1e3 / 10, [t, n, a]
        }

        function i(e) {
            var t = e[0],
                a = e[1],
                r = e[2],
                i = n(e)[0],
                o = 1 / 255 * Math.min(t, Math.min(a, r)),
                r = 1 - 1 / 255 * Math.max(t, Math.max(a, r));
            return [i, 100 * o, 100 * r]
        }

        function o(e) {
            var t, n, a, r, i = e[0] / 255,
                o = e[1] / 255,
                s = e[2] / 255;
            return r = Math.min(1 - i, 1 - o, 1 - s), t = (1 - i - r) / (1 - r) || 0, n = (1 - o - r) / (1 - r) || 0, a = (1 - s - r) / (1 - r) || 0, [100 * t, 100 * n, 100 * a, 100 * r]
        }

        function s(e) {
            return K[JSON.stringify(e)]
        }

        function d(e) {
            var t = e[0] / 255,
                n = e[1] / 255,
                a = e[2] / 255;
            return t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, [100 * (.4124 * t + .3576 * n + .1805 * a), 100 * (.2126 * t + .7152 * n + .0722 * a), 100 * (.0193 * t + .1192 * n + .9505 * a)]
        }

        function u(e) {
            var t, n, a, r = d(e),
                i = r[0],
                o = r[1],
                s = r[2];
            return i /= 95.047, o /= 100, s /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * o - 16, n = 500 * (i - o), a = 200 * (o - s), [t, n, a]
        }

        function l(e) {
            return E(u(e))
        }

        function c(e) {
            var t, n, a, r, i, o = e[0] / 360,
                s = e[1] / 100,
                d = e[2] / 100;
            if (0 == s) return i = 255 * d, [i, i, i];
            n = d < .5 ? d * (1 + s) : d + s - d * s, t = 2 * d - n, r = [0, 0, 0];
            for (var u = 0; u < 3; u++) a = o + 1 / 3 * -(u - 1), a < 0 && a++, a > 1 && a--, i = 6 * a < 1 ? t + 6 * (n - t) * a : 2 * a < 1 ? n : 3 * a < 2 ? t + (n - t) * (2 / 3 - a) * 6 : t, r[u] = 255 * i;
            return r
        }

        function m(e) {
            var t, n, a = e[0],
                r = e[1] / 100,
                i = e[2] / 100;
            return 0 === i ? [0, 0, 0] : (i *= 2, r *= i <= 1 ? i : 2 - i, n = (i + r) / 2, t = 2 * r / (i + r), [a, 100 * t, 100 * n])
        }

        function _(e) {
            return i(c(e))
        }

        function h(e) {
            return o(c(e))
        }

        function f(e) {
            return s(c(e))
        }

        function p(e) {
            var t = e[0] / 60,
                n = e[1] / 100,
                a = e[2] / 100,
                r = Math.floor(t) % 6,
                i = t - Math.floor(t),
                o = 255 * a * (1 - n),
                s = 255 * a * (1 - n * i),
                d = 255 * a * (1 - n * (1 - i)),
                a = 255 * a;
            switch (r) {
                case 0:
                    return [a, d, o];
                case 1:
                    return [s, a, o];
                case 2:
                    return [o, a, d];
                case 3:
                    return [o, s, a];
                case 4:
                    return [d, o, a];
                case 5:
                    return [a, o, s]
            }
        }

        function y(e) {
            var t, n, a = e[0],
                r = e[1] / 100,
                i = e[2] / 100;
            return n = (2 - r) * i, t = r * i, t /= n <= 1 ? n : 2 - n, t = t || 0, n /= 2, [a, 100 * t, 100 * n]
        }

        function M(e) {
            return i(p(e))
        }

        function v(e) {
            return o(p(e))
        }

        function L(e) {
            return s(p(e))
        }

        function Y(e) {
            var t, n, a, i, o = e[0] / 360,
                s = e[1] / 100,
                d = e[2] / 100,
                u = s + d;
            switch (u > 1 && (s /= u, d /= u), t = Math.floor(6 * o), n = 1 - d, a = 6 * o - t, 0 != (1 & t) && (a = 1 - a), i = s + a * (n - s), t) {
                default:
                    case 6:
                    case 0:
                    r = n,
                g = i,
                b = s;
                break;
                case 1:
                        r = i,
                    g = n,
                    b = s;
                    break;
                case 2:
                        r = s,
                    g = n,
                    b = i;
                    break;
                case 3:
                        r = s,
                    g = i,
                    b = n;
                    break;
                case 4:
                        r = i,
                    g = s,
                    b = n;
                    break;
                case 5:
                        r = n,
                    g = s,
                    b = i
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function k(e) {
            return n(Y(e))
        }

        function D(e) {
            return a(Y(e))
        }

        function x(e) {
            return o(Y(e))
        }

        function T(e) {
            return s(Y(e))
        }

        function w(e) {
            var t, n, a, r = e[0] / 100,
                i = e[1] / 100,
                o = e[2] / 100,
                s = e[3] / 100;
            return t = 1 - Math.min(1, r * (1 - s) + s), n = 1 - Math.min(1, i * (1 - s) + s), a = 1 - Math.min(1, o * (1 - s) + s), [255 * t, 255 * n, 255 * a]
        }

        function S(e) {
            return n(w(e))
        }

        function j(e) {
            return a(w(e))
        }

        function H(e) {
            return i(w(e))
        }

        function O(e) {
            return s(w(e))
        }

        function C(e) {
            var t, n, a, r = e[0] / 100,
                i = e[1] / 100,
                o = e[2] / 100;
            return t = 3.2406 * r + -1.5372 * i + -.4986 * o, n = -.9689 * r + 1.8758 * i + .0415 * o, a = .0557 * r + -.204 * i + 1.057 * o, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, t = Math.min(Math.max(0, t), 1), n = Math.min(Math.max(0, n), 1), a = Math.min(Math.max(0, a), 1), [255 * t, 255 * n, 255 * a]
        }

        function P(e) {
            var t, n, a, r = e[0],
                i = e[1],
                o = e[2];
            return r /= 95.047, i /= 100, o /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, t = 116 * i - 16, n = 500 * (r - i), a = 200 * (i - o), [t, n, a]
        }

        function A(e) {
            return E(P(e))
        }

        function F(e) {
            var t, n, a, r, i = e[0],
                o = e[1],
                s = e[2];
            return i <= 8 ? (n = 100 * i / 903.3, r = n / 100 * 7.787 + 16 / 116) : (n = 100 * Math.pow((i + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (o / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + r, 3), a = a / 108.883 <= .008859 ? a = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3), [t, n, a]
        }

        function E(e) {
            var t, n, a, r = e[0],
                i = e[1],
                o = e[2];
            return t = Math.atan2(o, i), n = 360 * t / 2 / Math.PI, n < 0 && (n += 360), a = Math.sqrt(i * i + o * o), [r, a, n]
        }

        function W(e) {
            return C(F(e))
        }

        function I(e) {
            var t, n, a, r = e[0],
                i = e[1],
                o = e[2];
            return a = o / 360 * 2 * Math.PI, t = i * Math.cos(a), n = i * Math.sin(a), [r, t, n]
        }

        function z(e) {
            return F(I(e))
        }

        function R(e) {
            return W(I(e))
        }

        function N(e) {
            return Z[e]
        }

        function B(e) {
            return n(N(e))
        }

        function V(e) {
            return a(N(e))
        }

        function U(e) {
            return i(N(e))
        }

        function J(e) {
            return o(N(e))
        }

        function G(e) {
            return u(N(e))
        }

        function q(e) {
            return d(N(e))
        }
        e.exports = {
            rgb2hsl: n,
            rgb2hsv: a,
            rgb2hwb: i,
            rgb2cmyk: o,
            rgb2keyword: s,
            rgb2xyz: d,
            rgb2lab: u,
            rgb2lch: l,
            hsl2rgb: c,
            hsl2hsv: m,
            hsl2hwb: _,
            hsl2cmyk: h,
            hsl2keyword: f,
            hsv2rgb: p,
            hsv2hsl: y,
            hsv2hwb: M,
            hsv2cmyk: v,
            hsv2keyword: L,
            hwb2rgb: Y,
            hwb2hsl: k,
            hwb2hsv: D,
            hwb2cmyk: x,
            hwb2keyword: T,
            cmyk2rgb: w,
            cmyk2hsl: S,
            cmyk2hsv: j,
            cmyk2hwb: H,
            cmyk2keyword: O,
            keyword2rgb: N,
            keyword2hsl: B,
            keyword2hsv: V,
            keyword2hwb: U,
            keyword2cmyk: J,
            keyword2lab: G,
            keyword2xyz: q,
            xyz2rgb: C,
            xyz2lab: P,
            xyz2lch: A,
            lab2xyz: F,
            lab2rgb: W,
            lab2lch: E,
            lch2lab: I,
            lch2xyz: z,
            lch2rgb: R
        };
        var Z = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            },
            K = {};
        for (var $ in Z) K[JSON.stringify(Z[$])] = $
    },
    1513: function(e, t, n) {
        function a(e) {
            if (e) {
                var t = /^#([a-fA-F0-9]{3})$/i,
                    n = /^#([a-fA-F0-9]{6})$/i,
                    a = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                    r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                    i = /(\w+)/,
                    o = [0, 0, 0],
                    s = 1,
                    d = e.match(t);
                if (d) {
                    d = d[1];
                    for (var u = 0; u < o.length; u++) o[u] = parseInt(d[u] + d[u], 16)
                } else if (d = e.match(n)) {
                    d = d[1];
                    for (var u = 0; u < o.length; u++) o[u] = parseInt(d.slice(2 * u, 2 * u + 2), 16)
                } else if (d = e.match(a)) {
                    for (var u = 0; u < o.length; u++) o[u] = parseInt(d[u + 1]);
                    s = parseFloat(d[4])
                } else if (d = e.match(r)) {
                    for (var u = 0; u < o.length; u++) o[u] = Math.round(2.55 * parseFloat(d[u + 1]));
                    s = parseFloat(d[4])
                } else if (d = e.match(i)) {
                    if ("transparent" == d[1]) return [0, 0, 0, 0];
                    if (!(o = v[d[1]])) return
                }
                for (var u = 0; u < o.length; u++) o[u] = M(o[u], 0, 255);
                return s = s || 0 == s ? M(s, 0, 1) : 1, o[3] = s, o
            }
        }

        function r(e) {
            if (e) {
                var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    n = e.match(t);
                if (n) {
                    var a = parseFloat(n[4]);
                    return [M(parseInt(n[1]), 0, 360), M(parseFloat(n[2]), 0, 100), M(parseFloat(n[3]), 0, 100), M(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }

        function i(e) {
            if (e) {
                var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    n = e.match(t);
                if (n) {
                    var a = parseFloat(n[4]);
                    return [M(parseInt(n[1]), 0, 360), M(parseFloat(n[2]), 0, 100), M(parseFloat(n[3]), 0, 100), M(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }

        function o(e) {
            var t = a(e);
            return t && t.slice(0, 3)
        }

        function s(e) {
            var t = r(e);
            return t && t.slice(0, 3)
        }

        function d(e) {
            var t = a(e);
            return t ? t[3] : (t = r(e)) ? t[3] : (t = i(e)) ? t[3] : void 0
        }

        function u(e) {
            return "#" + g(e[0]) + g(e[1]) + g(e[2])
        }

        function l(e, t) {
            return t < 1 || e[3] && e[3] < 1 ? c(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
        }

        function c(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
        }

        function m(e, t) {
            return t < 1 || e[3] && e[3] < 1 ? _(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)"
        }

        function _(e, t) {
            return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
        }

        function h(e, t) {
            return t < 1 || e[3] && e[3] < 1 ? f(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
        }

        function f(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
        }

        function p(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
        }

        function y(e) {
            return b[e.slice(0, 3)]
        }

        function M(e, t, n) {
            return Math.min(Math.max(t, e), n)
        }

        function g(e) {
            var t = e.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t
        }
        var v = n(1514);
        e.exports = {
            getRgba: a,
            getHsla: r,
            getRgb: o,
            getHsl: s,
            getHwb: i,
            getAlpha: d,
            hexString: u,
            rgbString: l,
            rgbaString: c,
            percentString: m,
            percentaString: _,
            hslString: h,
            hslaString: f,
            hwbString: p,
            keyword: y
        };
        var b = {};
        for (var L in v) b[v[L]] = L
    },
    1514: function(e, t) {
        e.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    },
    1515: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(848),
            i = n(815);
        a._set("global", {
            elements: {
                arc: {
                    backgroundColor: a.global.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2
                }
            }
        }), e.exports = r.extend({
            inLabelRange: function(e) {
                var t = this._view;
                return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
            },
            inRange: function(e, t) {
                var n = this._view;
                if (n) {
                    for (var a = i.getAngleFromPoint(n, {
                            x: e,
                            y: t
                        }), r = a.angle, o = a.distance, s = n.startAngle, d = n.endAngle; d < s;) d += 2 * Math.PI;
                    for (; r > d;) r -= 2 * Math.PI;
                    for (; r < s;) r += 2 * Math.PI;
                    var u = r >= s && r <= d,
                        l = o >= n.innerRadius && o <= n.outerRadius;
                    return u && l
                }
                return !1
            },
            getCenterPoint: function() {
                var e = this._view,
                    t = (e.startAngle + e.endAngle) / 2,
                    n = (e.innerRadius + e.outerRadius) / 2;
                return {
                    x: e.x + Math.cos(t) * n,
                    y: e.y + Math.sin(t) * n
                }
            },
            getArea: function() {
                var e = this._view;
                return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
            },
            tooltipPosition: function() {
                var e = this._view,
                    t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                    n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                return {
                    x: e.x + Math.cos(t) * n,
                    y: e.y + Math.sin(t) * n
                }
            },
            draw: function() {
                var e = this._chart.ctx,
                    t = this._view,
                    n = t.startAngle,
                    a = t.endAngle;
                e.beginPath(), e.arc(t.x, t.y, t.outerRadius, n, a), e.arc(t.x, t.y, t.innerRadius, a, n, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
            }
        })
    },
    1516: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(848),
            i = n(815),
            o = a.global;
        a._set("global", {
            elements: {
                line: {
                    tension: .4,
                    backgroundColor: o.defaultColor,
                    borderWidth: 3,
                    borderColor: o.defaultColor,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    capBezierPoints: !0,
                    fill: !0
                }
            }
        }), e.exports = r.extend({
            draw: function() {
                var e, t, n, a, r = this,
                    s = r._view,
                    d = r._chart.ctx,
                    u = s.spanGaps,
                    l = r._children.slice(),
                    c = o.elements.line,
                    m = -1;
                for (r._loop && l.length && l.push(l[0]), d.save(), d.lineCap = s.borderCapStyle || c.borderCapStyle, d.setLineDash && d.setLineDash(s.borderDash || c.borderDash), d.lineDashOffset = s.borderDashOffset || c.borderDashOffset, d.lineJoin = s.borderJoinStyle || c.borderJoinStyle, d.lineWidth = s.borderWidth || c.borderWidth, d.strokeStyle = s.borderColor || o.defaultColor, d.beginPath(), m = -1, e = 0; e < l.length; ++e) t = l[e], n = i.previousItem(l, e), a = t._view, 0 === e ? a.skip || (d.moveTo(a.x, a.y), m = e) : (n = -1 === m ? n : l[m], a.skip || (m !== e - 1 && !u || -1 === m ? d.moveTo(a.x, a.y) : i.canvas.lineTo(d, n._view, t._view), m = e));
                d.stroke(), d.restore()
            }
        })
    },
    1517: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }

        function r(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.y, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }
        var i = n(820),
            o = n(848),
            s = n(815),
            d = i.global.defaultColor;
        i._set("global", {
            elements: {
                point: {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: d,
                    borderColor: d,
                    borderWidth: 1,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }
            }
        }), e.exports = o.extend({
            inRange: function(e, t) {
                var n = this._view;
                return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
            },
            inLabelRange: a,
            inXRange: a,
            inYRange: r,
            getCenterPoint: function() {
                var e = this._view;
                return {
                    x: e.x,
                    y: e.y
                }
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
                var e = this._view;
                return {
                    x: e.x,
                    y: e.y,
                    padding: e.radius + e.borderWidth
                }
            },
            draw: function(e) {
                var t = this._view,
                    n = this._model,
                    a = this._chart.ctx,
                    r = t.pointStyle,
                    o = t.radius,
                    u = t.x,
                    l = t.y,
                    c = s.color,
                    m = 0;
                t.skip || (a.strokeStyle = t.borderColor || d, a.lineWidth = s.valueOrDefault(t.borderWidth, i.global.elements.point.borderWidth), a.fillStyle = t.backgroundColor || d, void 0 !== e && (n.x < e.left || 1.01 * e.right < n.x || n.y < e.top || 1.01 * e.bottom < n.y) && (n.x < e.left ? m = (u - n.x) / (e.left - n.x) : 1.01 * e.right < n.x ? m = (n.x - u) / (n.x - e.right) : n.y < e.top ? m = (l - n.y) / (e.top - n.y) : 1.01 * e.bottom < n.y && (m = (n.y - l) / (n.y - e.bottom)), m = Math.round(100 * m) / 100, a.strokeStyle = c(a.strokeStyle).alpha(m).rgbString(), a.fillStyle = c(a.fillStyle).alpha(m).rgbString()), s.canvas.drawPoint(a, r, o, u, l))
            }
        })
    },
    1518: function(e, t, n) {
        "use strict";

        function a(e) {
            return void 0 !== e._view.width
        }

        function r(e) {
            var t, n, r, i, o = e._view;
            if (a(e)) {
                var s = o.width / 2;
                t = o.x - s, n = o.x + s, r = Math.min(o.y, o.base), i = Math.max(o.y, o.base)
            } else {
                var d = o.height / 2;
                t = Math.min(o.x, o.base), n = Math.max(o.x, o.base), r = o.y - d, i = o.y + d
            }
            return {
                left: t,
                top: r,
                right: n,
                bottom: i
            }
        }
        var i = n(820),
            o = n(848);
        i._set("global", {
            elements: {
                rectangle: {
                    backgroundColor: i.global.defaultColor,
                    borderColor: i.global.defaultColor,
                    borderSkipped: "bottom",
                    borderWidth: 0
                }
            }
        }), e.exports = o.extend({
            draw: function() {
                function e(e) {
                    return y[(g + e) % 4]
                }
                var t, n, a, r, i, o, s, d = this._chart.ctx,
                    u = this._view,
                    l = u.borderWidth;
                if (u.horizontal ? (t = u.base, n = u.x, a = u.y - u.height / 2, r = u.y + u.height / 2, i = n > t ? 1 : -1, o = 1, s = u.borderSkipped || "left") : (t = u.x - u.width / 2, n = u.x + u.width / 2, a = u.y, r = u.base, i = 1, o = r > a ? 1 : -1, s = u.borderSkipped || "bottom"), l) {
                    var c = Math.min(Math.abs(t - n), Math.abs(a - r));
                    l = l > c ? c : l;
                    var m = l / 2,
                        _ = t + ("left" !== s ? m * i : 0),
                        h = n + ("right" !== s ? -m * i : 0),
                        f = a + ("top" !== s ? m * o : 0),
                        p = r + ("bottom" !== s ? -m * o : 0);
                    _ !== h && (a = f, r = p), f !== p && (t = _, n = h)
                }
                d.beginPath(), d.fillStyle = u.backgroundColor, d.strokeStyle = u.borderColor, d.lineWidth = l;
                var y = [
                        [t, r],
                        [t, a],
                        [n, a],
                        [n, r]
                    ],
                    M = ["bottom", "left", "top", "right"],
                    g = M.indexOf(s, 0); - 1 === g && (g = 0);
                var v = e(0);
                d.moveTo(v[0], v[1]);
                for (var b = 1; b < 4; b++) v = e(b), d.lineTo(v[0], v[1]);
                d.fill(), l && d.stroke()
            },
            height: function() {
                var e = this._view;
                return e.base - e.y
            },
            inRange: function(e, t) {
                var n = !1;
                if (this._view) {
                    var a = r(this);
                    n = e >= a.left && e <= a.right && t >= a.top && t <= a.bottom
                }
                return n
            },
            inLabelRange: function(e, t) {
                var n = this;
                if (!n._view) return !1;
                var i = r(n);
                return a(n) ? e >= i.left && e <= i.right : t >= i.top && t <= i.bottom
            },
            inXRange: function(e) {
                var t = r(this);
                return e >= t.left && e <= t.right
            },
            inYRange: function(e) {
                var t = r(this);
                return e >= t.top && e <= t.bottom
            },
            getCenterPoint: function() {
                var e, t, n = this._view;
                return a(this) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {
                    x: e,
                    y: t
                }
            },
            getArea: function() {
                var e = this._view;
                return e.width * Math.abs(e.y - e.base)
            },
            tooltipPosition: function() {
                var e = this._view;
                return {
                    x: e.x,
                    y: e.y
                }
            }
        })
    },
    1519: function(e, t) {
        e.exports = {
            acquireContext: function(e) {
                return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
            }
        }
    },
    1520: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = p.getStyle(e, t),
                a = n && n.match(/^(\d+)(\.\d+)?px$/);
            return a ? Number(a[1]) : void 0
        }

        function r(e, t) {
            var n = e.style,
                r = e.getAttribute("height"),
                i = e.getAttribute("width");
            if (e[y] = {
                    initial: {
                        height: r,
                        width: i,
                        style: {
                            display: n.display,
                            height: n.height,
                            width: n.width
                        }
                    }
                }, n.display = n.display || "block", null === i || "" === i) {
                var o = a(e, "width");
                void 0 !== o && (e.width = o)
            }
            if (null === r || "" === r)
                if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                else {
                    var s = a(e, "height");
                    void 0 !== o && (e.height = s)
                }
            return e
        }

        function i(e, t, n) {
            e.addEventListener(t, n, k)
        }

        function o(e, t, n) {
            e.removeEventListener(t, n, k)
        }

        function s(e, t, n, a, r) {
            return {
                type: e,
                chart: t,
                native: r || null,
                x: void 0 !== n ? n : null,
                y: void 0 !== a ? a : null
            }
        }

        function d(e, t) {
            var n = L[e.type] || e.type,
                a = p.getRelativePosition(e, t);
            return s(n, t, a.x, a.y, e)
        }

        function u(e, t) {
            var n = !1,
                a = [];
            return function() {
                a = Array.prototype.slice.call(arguments), t = t || this, n || (n = !0, p.requestAnimFrame.call(window, function() {
                    n = !1, e.apply(t, a)
                }))
            }
        }

        function l(e) {
            var t = document.createElement("div"),
                n = M + "size-monitor",
                a = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
            t.style.cssText = a, t.className = n, t.innerHTML = '<div class="' + n + '-expand" style="' + a + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + a + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
            var r = t.childNodes[0],
                o = t.childNodes[1];
            t._reset = function() {
                r.scrollLeft = 1e6, r.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
            };
            var s = function() {
                t._reset(), e()
            };
            return i(r, "scroll", s.bind(r, "expand")), i(o, "scroll", s.bind(o, "shrink")), t
        }

        function c(e, t) {
            var n = e[y] || (e[y] = {}),
                a = n.renderProxy = function(e) {
                    e.animationName === v && t()
                };
            p.each(b, function(t) {
                i(e, t, a)
            }), e.classList.add(g)
        }

        function m(e) {
            var t = e[y] || {},
                n = t.renderProxy;
            n && (p.each(b, function(t) {
                o(e, t, n)
            }), delete t.renderProxy), e.classList.remove(g)
        }

        function _(e, t, n) {
            var a = e[y] || (e[y] = {}),
                r = a.resizer = l(u(function() {
                    if (a.resizer) return t(s("resize", n))
                }));
            c(e, function() {
                if (a.resizer) {
                    var t = e.parentNode;
                    t && t !== r.parentNode && t.insertBefore(r, t.firstChild), r._reset()
                }
            })
        }

        function h(e) {
            var t = e[y] || {},
                n = t.resizer;
            delete t.resizer, m(e), n && n.parentNode && n.parentNode.removeChild(n)
        }

        function f(e, t) {
            var n = e._style || document.createElement("style");
            e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t))
        }
        var p = n(815),
            y = "$chartjs",
            M = "chartjs-",
            g = M + "render-monitor",
            v = M + "render-animation",
            b = ["animationstart", "webkitAnimationStart"],
            L = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            },
            Y = function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("e", null, t)
                } catch (e) {}
                return e
            }(),
            k = !!Y && {
                passive: !0
            };
        e.exports = {
            _enabled: "undefined" != typeof window && "undefined" != typeof document,
            initialize: function() {
                var e = "from{opacity:0.99}to{opacity:1}";
                f(this, "@-webkit-keyframes " + v + "{" + e + "}@keyframes " + v + "{" + e + "}." + g + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}")
            },
            acquireContext: function(e, t) {
                "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                var n = e && e.getContext && e.getContext("2d");
                return n && n.canvas === e ? (r(e, t), n) : null
            },
            releaseContext: function(e) {
                var t = e.canvas;
                if (t[y]) {
                    var n = t[y].initial;
                    ["height", "width"].forEach(function(e) {
                        var a = n[e];
                        p.isNullOrUndef(a) ? t.removeAttribute(e) : t.setAttribute(e, a)
                    }), p.each(n.style || {}, function(e, n) {
                        t.style[n] = e
                    }), t.width = t.width, delete t[y]
                }
            },
            addEventListener: function(e, t, n) {
                var a = e.canvas;
                if ("resize" === t) return void _(a, n, e);
                var r = n[y] || (n[y] = {});
                i(a, t, (r.proxies || (r.proxies = {}))[e.id + "_" + t] = function(t) {
                    n(d(t, e))
                })
            },
            removeEventListener: function(e, t, n) {
                var a = e.canvas;
                if ("resize" === t) return void h(a);
                var r = n[y] || {},
                    i = r.proxies || {},
                    s = i[e.id + "_" + t];
                s && o(a, t, s)
            }
        }, p.addEvent = i, p.removeEvent = o
    },
    1521: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(848),
            i = n(815);
        a._set("global", {
            plugins: {}
        }), e.exports = function(e) {
            e.plugins = {
                _plugins: [],
                _cacheId: 0,
                register: function(e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function(e) {
                        -1 === t.indexOf(e) && t.push(e)
                    }), this._cacheId++
                },
                unregister: function(e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function(e) {
                        var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                    }), this._cacheId++
                },
                clear: function() {
                    this._plugins = [], this._cacheId++
                },
                count: function() {
                    return this._plugins.length
                },
                getAll: function() {
                    return this._plugins
                },
                notify: function(e, t, n) {
                    var a, r, i, o, s, d = this.descriptors(e),
                        u = d.length;
                    for (a = 0; a < u; ++a)
                        if (r = d[a], i = r.plugin, "function" == typeof(s = i[t]) && (o = [e].concat(n || []), o.push(r.options), !1 === s.apply(i, o))) return !1;
                    return !0
                },
                descriptors: function(e) {
                    var t = e._plugins || (e._plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var n = [],
                        r = [],
                        o = e && e.config || {},
                        s = o.options && o.options.plugins || {};
                    return this._plugins.concat(o.plugins || []).forEach(function(e) {
                        if (-1 === n.indexOf(e)) {
                            var t = e.id,
                                o = s[t];
                            !1 !== o && (!0 === o && (o = i.clone(a.global.plugins[t])), n.push(e), r.push({
                                plugin: e,
                                options: o || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                }
            }, e.pluginService = e.plugins, e.PluginBase = r.extend({})
        }
    },
    1522: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(848),
            i = n(815);
        a._set("global", {
            animation: {
                duration: 1e3,
                easing: "easeOutQuart",
                onProgress: i.noop,
                onComplete: i.noop
            }
        }), e.exports = function(e) {
            e.Animation = r.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            }), e.animationService = {
                frameDuration: 17,
                animations: [],
                dropFrames: 0,
                request: null,
                addAnimation: function(e, t, n, a) {
                    var r, i, o = this.animations;
                    for (t.chart = e, a || (e.animating = !0), r = 0, i = o.length; r < i; ++r)
                        if (o[r].chart === e) return void(o[r] = t);
                    o.push(t), 1 === o.length && this.requestAnimationFrame()
                },
                cancelAnimation: function(e) {
                    var t = i.findIndex(this.animations, function(t) {
                        return t.chart === e
                    }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                },
                requestAnimationFrame: function() {
                    var e = this;
                    null === e.request && (e.request = i.requestAnimFrame.call(window, function() {
                        e.request = null, e.startDigest()
                    }))
                },
                startDigest: function() {
                    var e = this,
                        t = Date.now(),
                        n = 0;
                    e.dropFrames > 1 && (n = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + n);
                    var a = Date.now();
                    e.dropFrames += (a - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
                },
                advance: function(e) {
                    for (var t, n, a = this.animations, r = 0; r < a.length;) t = a[r], n = t.chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), i.callback(t.render, [n, t], n), i.callback(t.onAnimationProgress, [t], n), t.currentStep >= t.numSteps ? (i.callback(t.onAnimationComplete, [t], n), n.animating = !1, a.splice(r, 1)) : ++r
                }
            }, Object.defineProperty(e.Animation.prototype, "animationObject", {
                get: function() {
                    return this
                }
            }), Object.defineProperty(e.Animation.prototype, "chartInstance", {
                get: function() {
                    return this.chart
                },
                set: function(e) {
                    this.chart = e
                }
            })
        }
    },
    1523: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(815),
            i = n(1143),
            o = n(1144);
        e.exports = function(e) {
            function t(e) {
                e = e || {};
                var t = e.data = e.data || {};
                return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = r.configMerge(a.global, a[e.type], e.options || {}), e
            }

            function n(e) {
                var t = e.options;
                t.scale ? e.scale.options = t.scale : t.scales && t.scales.xAxes.concat(t.scales.yAxes).forEach(function(t) {
                    e.scales[t.id].options = t
                }), e.tooltip._options = t.tooltips
            }

            function s(e) {
                return "top" === e || "bottom" === e
            }
            var d = e.plugins;
            e.types = {}, e.instances = {}, e.controllers = {}, r.extend(e.prototype, {
                construct: function(n, a) {
                    var i = this;
                    a = t(a);
                    var s = o.acquireContext(n, a),
                        d = s && s.canvas,
                        u = d && d.height,
                        l = d && d.width;
                    if (i.id = r.uid(), i.ctx = s, i.canvas = d, i.config = a, i.width = l, i.height = u, i.aspectRatio = u ? l / u : null, i.options = a.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
                            get: function() {
                                return i.config.data
                            },
                            set: function(e) {
                                i.config.data = e
                            }
                        }), !s || !d) return void console.error("Failed to create chart: can't acquire context from the given item");
                    i.initialize(), i.update()
                },
                initialize: function() {
                    var e = this;
                    return d.notify(e, "beforeInit"), r.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildScales(), e.initToolTip(), d.notify(e, "afterInit"), e
                },
                clear: function() {
                    return r.canvas.clear(this), this
                },
                stop: function() {
                    return e.animationService.cancelAnimation(this), this
                },
                resize: function(e) {
                    var t = this,
                        n = t.options,
                        a = t.canvas,
                        i = n.maintainAspectRatio && t.aspectRatio || null,
                        o = Math.max(0, Math.floor(r.getMaximumWidth(a))),
                        s = Math.max(0, Math.floor(i ? o / i : r.getMaximumHeight(a)));
                    if ((t.width !== o || t.height !== s) && (a.width = t.width = o, a.height = t.height = s, a.style.width = o + "px", a.style.height = s + "px", r.retinaScale(t, n.devicePixelRatio), !e)) {
                        var u = {
                            width: o,
                            height: s
                        };
                        d.notify(t, "resize", [u]), t.options.onResize && t.options.onResize(t, u), t.stop(), t.update(t.options.responsiveAnimationDuration)
                    }
                },
                ensureScalesHaveIDs: function() {
                    var e = this.options,
                        t = e.scales || {},
                        n = e.scale;
                    r.each(t.xAxes, function(e, t) {
                        e.id = e.id || "x-axis-" + t
                    }), r.each(t.yAxes, function(e, t) {
                        e.id = e.id || "y-axis-" + t
                    }), n && (n.id = n.id || "scale")
                },
                buildScales: function() {
                    var t = this,
                        n = t.options,
                        a = t.scales = {},
                        i = [];
                    n.scales && (i = i.concat((n.scales.xAxes || []).map(function(e) {
                        return {
                            options: e,
                            dtype: "category",
                            dposition: "bottom"
                        }
                    }), (n.scales.yAxes || []).map(function(e) {
                        return {
                            options: e,
                            dtype: "linear",
                            dposition: "left"
                        }
                    }))), n.scale && i.push({
                        options: n.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }), r.each(i, function(n) {
                        var i = n.options,
                            o = r.valueOrDefault(i.type, n.dtype),
                            d = e.scaleService.getScaleConstructor(o);
                        if (d) {
                            s(i.position) !== s(n.dposition) && (i.position = n.dposition);
                            var u = new d({
                                id: i.id,
                                options: i,
                                ctx: t.ctx,
                                chart: t
                            });
                            a[u.id] = u, u.mergeTicksOptions(), n.isDefault && (t.scale = u)
                        }
                    }), e.scaleService.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function() {
                    var t = this,
                        n = [],
                        a = [];
                    return r.each(t.data.datasets, function(r, i) {
                        var o = t.getDatasetMeta(i),
                            s = r.type || t.config.type;
                        if (o.type && o.type !== s && (t.destroyDatasetMeta(i), o = t.getDatasetMeta(i)), o.type = s, n.push(o.type), o.controller) o.controller.updateIndex(i);
                        else {
                            var d = e.controllers[o.type];
                            if (void 0 === d) throw new Error('"' + o.type + '" is not a chart type.');
                            o.controller = new d(t, i), a.push(o.controller)
                        }
                    }, t), a
                },
                resetElements: function() {
                    var e = this;
                    r.each(e.data.datasets, function(t, n) {
                        e.getDatasetMeta(n).controller.reset()
                    }, e)
                },
                reset: function() {
                    this.resetElements(), this.tooltip.initialize()
                },
                update: function(e) {
                    var t = this;
                    if (e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        }), n(t), !1 !== d.notify(t, "beforeUpdate")) {
                        t.tooltip._data = t.data;
                        var a = t.buildOrUpdateControllers();
                        r.each(t.data.datasets, function(e, n) {
                            t.getDatasetMeta(n).controller.buildOrUpdateElements()
                        }, t), t.updateLayout(), r.each(a, function(e) {
                            e.reset()
                        }), t.updateDatasets(), d.notify(t, "afterUpdate"), t._bufferedRender ? t._bufferedRequest = {
                            duration: e.duration,
                            easing: e.easing,
                            lazy: e.lazy
                        } : t.render(e)
                    }
                },
                updateLayout: function() {
                    var t = this;
                    !1 !== d.notify(t, "beforeLayout") && (e.layoutService.update(this, this.width, this.height), d.notify(t, "afterScaleUpdate"), d.notify(t, "afterLayout"))
                },
                updateDatasets: function() {
                    var e = this;
                    if (!1 !== d.notify(e, "beforeDatasetsUpdate")) {
                        for (var t = 0, n = e.data.datasets.length; t < n; ++t) e.updateDataset(t);
                        d.notify(e, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function(e) {
                    var t = this,
                        n = t.getDatasetMeta(e),
                        a = {
                            meta: n,
                            index: e
                        };
                    !1 !== d.notify(t, "beforeDatasetUpdate", [a]) && (n.controller.update(), d.notify(t, "afterDatasetUpdate", [a]))
                },
                render: function(t) {
                    var n = this;
                    t && "object" == typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    });
                    var a = t.duration,
                        i = t.lazy;
                    if (!1 !== d.notify(n, "beforeRender")) {
                        var o = n.options.animation,
                            s = function(e) {
                                d.notify(n, "afterRender"), r.callback(o && o.onComplete, [e], n)
                            };
                        if (o && (void 0 !== a && 0 !== a || void 0 === a && 0 !== o.duration)) {
                            var u = new e.Animation({
                                numSteps: (a || o.duration) / 16.66,
                                easing: t.easing || o.easing,
                                render: function(e, t) {
                                    var n = r.easing.effects[t.easing],
                                        a = t.currentStep,
                                        i = a / t.numSteps;
                                    e.draw(n(i), i, a)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: s
                            });
                            e.animationService.addAnimation(n, u, a, i)
                        } else n.draw(), s(new e.Animation({
                            numSteps: 0,
                            chart: n
                        }));
                        return n
                    }
                },
                draw: function(e) {
                    var t = this;
                    t.clear(), r.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== d.notify(t, "beforeDraw", [e]) && (r.each(t.boxes, function(e) {
                        e.draw(t.chartArea)
                    }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t.tooltip.draw(), d.notify(t, "afterDraw", [e]))
                },
                transition: function(e) {
                    for (var t = this, n = 0, a = (t.data.datasets || []).length; n < a; ++n) t.isDatasetVisible(n) && t.getDatasetMeta(n).controller.transition(e);
                    t.tooltip.transition(e)
                },
                drawDatasets: function(e) {
                    var t = this;
                    if (!1 !== d.notify(t, "beforeDatasetsDraw", [e])) {
                        for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                        d.notify(t, "afterDatasetsDraw", [e])
                    }
                },
                drawDataset: function(e, t) {
                    var n = this,
                        a = n.getDatasetMeta(e),
                        r = {
                            meta: a,
                            index: e,
                            easingValue: t
                        };
                    !1 !== d.notify(n, "beforeDatasetDraw", [r]) && (a.controller.draw(t), d.notify(n, "afterDatasetDraw", [r]))
                },
                getElementAtEvent: function(e) {
                    return i.modes.single(this, e)
                },
                getElementsAtEvent: function(e) {
                    return i.modes.label(this, e, {
                        intersect: !0
                    })
                },
                getElementsAtXAxis: function(e) {
                    return i.modes["x-axis"](this, e, {
                        intersect: !0
                    })
                },
                getElementsAtEventForMode: function(e, t, n) {
                    var a = i.modes[t];
                    return "function" == typeof a ? a(this, e, n) : []
                },
                getDatasetAtEvent: function(e) {
                    return i.modes.dataset(this, e, {
                        intersect: !0
                    })
                },
                getDatasetMeta: function(e) {
                    var t = this,
                        n = t.data.datasets[e];
                    n._meta || (n._meta = {});
                    var a = n._meta[t.id];
                    return a || (a = n._meta[t.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null
                    }), a
                },
                getVisibleDatasetCount: function() {
                    for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
                    return e
                },
                isDatasetVisible: function(e) {
                    var t = this.getDatasetMeta(e);
                    return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
                },
                generateLegend: function() {
                    return this.options.legendCallback(this)
                },
                destroyDatasetMeta: function(e) {
                    var t = this.id,
                        n = this.data.datasets[e],
                        a = n._meta && n._meta[t];
                    a && (a.controller.destroy(), delete n._meta[t])
                },
                destroy: function() {
                    var t, n, a = this,
                        i = a.canvas;
                    for (a.stop(), t = 0, n = a.data.datasets.length; t < n; ++t) a.destroyDatasetMeta(t);
                    i && (a.unbindEvents(), r.canvas.clear(a), o.releaseContext(a.ctx), a.canvas = null, a.ctx = null), d.notify(a, "destroy"), delete e.instances[a.id]
                },
                toBase64Image: function() {
                    return this.canvas.toDataURL.apply(this.canvas, arguments)
                },
                initToolTip: function() {
                    var t = this;
                    t.tooltip = new e.Tooltip({
                        _chart: t,
                        _chartInstance: t,
                        _data: t.data,
                        _options: t.options.tooltips
                    }, t)
                },
                bindEvents: function() {
                    var e = this,
                        t = e._listeners = {},
                        n = function() {
                            e.eventHandler.apply(e, arguments)
                        };
                    r.each(e.options.events, function(a) {
                        o.addEventListener(e, a, n), t[a] = n
                    }), e.options.responsive && (n = function() {
                        e.resize()
                    }, o.addEventListener(e, "resize", n), t.resize = n)
                },
                unbindEvents: function() {
                    var e = this,
                        t = e._listeners;
                    t && (delete e._listeners, r.each(t, function(t, n) {
                        o.removeEventListener(e, n, t)
                    }))
                },
                updateHoverStyle: function(e, t, n) {
                    var a, r, i, o = n ? "setHoverStyle" : "removeHoverStyle";
                    for (r = 0, i = e.length; r < i; ++r)(a = e[r]) && this.getDatasetMeta(a._datasetIndex).controller[o](a)
                },
                eventHandler: function(e) {
                    var t = this,
                        n = t.tooltip;
                    if (!1 !== d.notify(t, "beforeEvent", [e])) {
                        t._bufferedRender = !0, t._bufferedRequest = null;
                        var a = t.handleEvent(e);
                        a |= n && n.handleEvent(e), d.notify(t, "afterEvent", [e]);
                        var r = t._bufferedRequest;
                        return r ? t.render(r) : a && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        n = t.options || {},
                        a = n.hover,
                        i = !1;
                    return t.lastActive = t.lastActive || [], "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, a.mode, a), r.callback(n.onHover || n.hover.onHover, [e.native, t.active], t), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, a.mode, !1), t.active.length && a.mode && t.updateHoverStyle(t.active, a.mode, !0), i = !r.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, i
                }
            }), e.Controller = e
        }
    },
    1524: function(e, t, n) {
        "use strict";
        var a = n(815);
        e.exports = function(e) {
            function t(e, t) {
                if (e._chartjs) return void e._chartjs.listeners.push(t);
                Object.defineProperty(e, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [t]
                    }
                }), r.forEach(function(t) {
                    var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                        r = e[t];
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            var t = Array.prototype.slice.call(arguments),
                                i = r.apply(this, t);
                            return a.each(e._chartjs.listeners, function(e) {
                                "function" == typeof e[n] && e[n].apply(e, t)
                            }), i
                        }
                    })
                })
            }

            function n(e, t) {
                var n = e._chartjs;
                if (n) {
                    var a = n.listeners,
                        i = a.indexOf(t); - 1 !== i && a.splice(i, 1), a.length > 0 || (r.forEach(function(t) {
                        delete e[t]
                    }), delete e._chartjs)
                }
            }
            var r = ["push", "pop", "shift", "splice", "unshift"];
            e.DatasetController = function(e, t) {
                this.initialize(e, t)
            }, a.extend(e.DatasetController.prototype, {
                datasetElementType: null,
                dataElementType: null,
                initialize: function(e, t) {
                    var n = this;
                    n.chart = e, n.index = t, n.linkScales(), n.addElements()
                },
                updateIndex: function(e) {
                    this.index = e
                },
                linkScales: function() {
                    var e = this,
                        t = e.getMeta(),
                        n = e.getDataset();
                    null === t.xAxisID && (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
                },
                getDataset: function() {
                    return this.chart.data.datasets[this.index]
                },
                getMeta: function() {
                    return this.chart.getDatasetMeta(this.index)
                },
                getScaleForId: function(e) {
                    return this.chart.scales[e]
                },
                reset: function() {
                    this.update(!0)
                },
                destroy: function() {
                    this._data && n(this._data, this)
                },
                createMetaDataset: function() {
                    var e = this,
                        t = e.datasetElementType;
                    return t && new t({
                        _chart: e.chart,
                        _datasetIndex: e.index
                    })
                },
                createMetaData: function(e) {
                    var t = this,
                        n = t.dataElementType;
                    return n && new n({
                        _chart: t.chart,
                        _datasetIndex: t.index,
                        _index: e
                    })
                },
                addElements: function() {
                    var e, t, n = this,
                        a = n.getMeta(),
                        r = n.getDataset().data || [],
                        i = a.data;
                    for (e = 0, t = r.length; e < t; ++e) i[e] = i[e] || n.createMetaData(e);
                    a.dataset = a.dataset || n.createMetaDataset()
                },
                addElementAndReset: function(e) {
                    var t = this.createMetaData(e);
                    this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                },
                buildOrUpdateElements: function() {
                    var e = this,
                        a = e.getDataset(),
                        r = a.data || (a.data = []);
                    e._data !== r && (e._data && n(e._data, e), t(r, e), e._data = r), e.resyncElements()
                },
                update: a.noop,
                transition: function(e) {
                    for (var t = this.getMeta(), n = t.data || [], a = n.length, r = 0; r < a; ++r) n[r].transition(e);
                    t.dataset && t.dataset.transition(e)
                },
                draw: function() {
                    var e = this.getMeta(),
                        t = e.data || [],
                        n = t.length,
                        a = 0;
                    for (e.dataset && e.dataset.draw(); a < n; ++a) t[a].draw()
                },
                removeHoverStyle: function(e, t) {
                    var n = this.chart.data.datasets[e._datasetIndex],
                        r = e._index,
                        i = e.custom || {},
                        o = a.valueAtIndexOrDefault,
                        s = e._model;
                    s.backgroundColor = i.backgroundColor ? i.backgroundColor : o(n.backgroundColor, r, t.backgroundColor), s.borderColor = i.borderColor ? i.borderColor : o(n.borderColor, r, t.borderColor), s.borderWidth = i.borderWidth ? i.borderWidth : o(n.borderWidth, r, t.borderWidth)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        r = e.custom || {},
                        i = a.valueAtIndexOrDefault,
                        o = a.getHoverColor,
                        s = e._model;
                    s.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : i(t.hoverBackgroundColor, n, o(s.backgroundColor)), s.borderColor = r.hoverBorderColor ? r.hoverBorderColor : i(t.hoverBorderColor, n, o(s.borderColor)), s.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : i(t.hoverBorderWidth, n, s.borderWidth)
                },
                resyncElements: function() {
                    var e = this,
                        t = e.getMeta(),
                        n = e.getDataset().data,
                        a = t.data.length,
                        r = n.length;
                    r < a ? t.data.splice(r, a - r) : r > a && e.insertElements(a, r - a)
                },
                insertElements: function(e, t) {
                    for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
                },
                onDataPush: function() {
                    this.insertElements(this.getDataset().data.length - 1, arguments.length)
                },
                onDataPop: function() {
                    this.getMeta().data.pop()
                },
                onDataShift: function() {
                    this.getMeta().data.shift()
                },
                onDataSplice: function(e, t) {
                    this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
                },
                onDataUnshift: function() {
                    this.insertElements(0, arguments.length)
                }
            }), e.DatasetController.extend = a.inherits
        }
    },
    1525: function(e, t, n) {
        "use strict";
        var a = n(815);
        e.exports = function(e) {
            function t(e, t) {
                return a.where(e, function(e) {
                    return e.position === t
                })
            }

            function n(e, t) {
                e.forEach(function(e, t) {
                    return e._tmpIndex_ = t, e
                }), e.sort(function(e, n) {
                    var a = t ? n : e,
                        r = t ? e : n;
                    return a.weight === r.weight ? a._tmpIndex_ - r._tmpIndex_ : a.weight - r.weight
                }), e.forEach(function(e) {
                    delete e._tmpIndex_
                })
            }
            e.layoutService = {
                defaults: {},
                addBox: function(e, t) {
                    e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
                },
                removeBox: function(e, t) {
                    var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1)
                },
                configure: function(e, t, n) {
                    for (var a, r = ["fullWidth", "position", "weight"], i = r.length, o = 0; o < i; ++o) a = r[o], n.hasOwnProperty(a) && (t[a] = n[a])
                },
                update: function(e, r, i) {
                    function o(e) {
                        var t, n = e.isHorizontal();
                        n ? (t = e.update(e.fullWidth ? b : T, x), w -= t.height) : (t = e.update(D, k), T -= t.width), S.push({
                            horizontal: n,
                            minSize: t,
                            box: e
                        })
                    }

                    function s(e) {
                        var t = a.findNextWhere(S, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var n = {
                                    left: Math.max(P, j),
                                    right: Math.max(A, H),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? b : T, L / 2, n)
                            } else e.update(t.minSize.width, w)
                    }

                    function d(e) {
                        var t = a.findNextWhere(S, function(t) {
                                return t.box === e
                            }),
                            n = {
                                left: 0,
                                right: 0,
                                top: F,
                                bottom: E
                            };
                        t && e.update(t.minSize.width, w, n)
                    }

                    function u(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? m : P, e.right = e.fullWidth ? r - _ : P + T, e.top = B, e.bottom = B + e.height, B = e.bottom) : (e.left = N, e.right = N + e.width, e.top = F, e.bottom = F + w, N = e.right)
                    }
                    if (e) {
                        var l = e.options.layout || {},
                            c = a.options.toPadding(l.padding),
                            m = c.left,
                            _ = c.right,
                            h = c.top,
                            f = c.bottom,
                            p = t(e.boxes, "left"),
                            y = t(e.boxes, "right"),
                            M = t(e.boxes, "top"),
                            g = t(e.boxes, "bottom"),
                            v = t(e.boxes, "chartArea");
                        n(p, !0), n(y, !1), n(M, !0), n(g, !1);
                        var b = r - m - _,
                            L = i - h - f,
                            Y = b / 2,
                            k = L / 2,
                            D = (r - Y) / (p.length + y.length),
                            x = (i - k) / (M.length + g.length),
                            T = b,
                            w = L,
                            S = [];
                        a.each(p.concat(y, M, g), o);
                        var j = 0,
                            H = 0,
                            O = 0,
                            C = 0;
                        a.each(M.concat(g), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                j = Math.max(j, t.left), H = Math.max(H, t.right)
                            }
                        }), a.each(p.concat(y), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                O = Math.max(O, t.top), C = Math.max(C, t.bottom)
                            }
                        });
                        var P = m,
                            A = _,
                            F = h,
                            E = f;
                        a.each(p.concat(y), s), a.each(p, function(e) {
                            P += e.width
                        }), a.each(y, function(e) {
                            A += e.width
                        }), a.each(M.concat(g), s), a.each(M, function(e) {
                            F += e.height
                        }), a.each(g, function(e) {
                            E += e.height
                        }), a.each(p.concat(y), d), P = m, A = _, F = h, E = f, a.each(p, function(e) {
                            P += e.width
                        }), a.each(y, function(e) {
                            A += e.width
                        }), a.each(M, function(e) {
                            F += e.height
                        }), a.each(g, function(e) {
                            E += e.height
                        });
                        var W = Math.max(j - P, 0);
                        P += W, A += Math.max(H - A, 0);
                        var I = Math.max(O - F, 0);
                        F += I, E += Math.max(C - E, 0);
                        var z = i - F - E,
                            R = r - P - A;
                        R === T && z === w || (a.each(p, function(e) {
                            e.height = z
                        }), a.each(y, function(e) {
                            e.height = z
                        }), a.each(M, function(e) {
                            e.fullWidth || (e.width = R)
                        }), a.each(g, function(e) {
                            e.fullWidth || (e.width = R)
                        }), w = z, T = R);
                        var N = m + W,
                            B = h + I;
                        a.each(p.concat(M), u), N += T, B += w, a.each(y, u), a.each(g, u), e.chartArea = {
                            left: P,
                            top: F,
                            right: P + T,
                            bottom: F + w
                        }, a.each(v, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(T, w)
                        })
                    }
                }
            }
        }
    },
    1526: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(815);
        e.exports = function(e) {
            e.scaleService = {
                constructors: {},
                defaults: {},
                registerScaleType: function(e, t, n) {
                    this.constructors[e] = t, this.defaults[e] = r.clone(n)
                },
                getScaleConstructor: function(e) {
                    return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                },
                getScaleDefaults: function(e) {
                    return this.defaults.hasOwnProperty(e) ? r.merge({}, [a.scale, this.defaults[e]]) : {}
                },
                updateScaleDefaults: function(e, t) {
                    var n = this;
                    n.defaults.hasOwnProperty(e) && (n.defaults[e] = r.extend(n.defaults[e], t))
                },
                addScalesToLayout: function(t) {
                    r.each(t.scales, function(n) {
                        n.fullWidth = n.options.fullWidth, n.position = n.options.position, n.weight = n.options.weight, e.layoutService.addBox(t, n)
                    })
                }
            }
        }
    },
    1527: function(e, t, n) {
        "use strict";

        function a(e) {
            var t, n, a = [];
            for (t = 0, n = e.length; t < n; ++t) a.push(e[t].label);
            return a
        }

        function r(e, t, n) {
            var a = e.getPixelForTick(t);
            return n && (a -= 0 === t ? (e.getPixelForTick(1) - a) / 2 : (a - e.getPixelForTick(t - 1)) / 2), a
        }
        var i = n(820),
            o = n(848),
            s = n(815),
            d = n(1007);
        i._set("scale", {
            display: !0,
            position: "left",
            offset: !1,
            gridLines: {
                display: !0,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
                drawBorder: !0,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickMarkLength: 10,
                zeroLineWidth: 1,
                zeroLineColor: "rgba(0,0,0,0.25)",
                zeroLineBorderDash: [],
                zeroLineBorderDashOffset: 0,
                offsetGridLines: !1,
                borderDash: [],
                borderDashOffset: 0
            },
            scaleLabel: {
                display: !1,
                labelString: "",
                lineHeight: 1.2,
                padding: {
                    top: 4,
                    bottom: 4
                }
            },
            ticks: {
                beginAtZero: !1,
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                padding: 0,
                reverse: !1,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 0,
                labelOffset: 0,
                callback: d.formatters.values,
                minor: {},
                major: {}
            }
        }), e.exports = function(e) {
            function t(e, t, n) {
                return s.isArray(t) ? s.longestText(e, n, t) : e.measureText(t).width
            }

            function n(e) {
                var t = s.valueOrDefault,
                    n = i.global,
                    a = t(e.fontSize, n.defaultFontSize),
                    r = t(e.fontStyle, n.defaultFontStyle),
                    o = t(e.fontFamily, n.defaultFontFamily);
                return {
                    size: a,
                    style: r,
                    family: o,
                    font: s.fontString(a, r, o)
                }
            }

            function d(e) {
                return s.options.toLineHeight(s.valueOrDefault(e.lineHeight, 1.2), s.valueOrDefault(e.fontSize, i.global.defaultFontSize))
            }
            e.Scale = o.extend({
                getPadding: function() {
                    var e = this;
                    return {
                        left: e.paddingLeft || 0,
                        top: e.paddingTop || 0,
                        right: e.paddingRight || 0,
                        bottom: e.paddingBottom || 0
                    }
                },
                getTicks: function() {
                    return this._ticks
                },
                mergeTicksOptions: function() {
                    var e = this.options.ticks;
                    !1 === e.minor && (e.minor = {
                        display: !1
                    }), !1 === e.major && (e.major = {
                        display: !1
                    });
                    for (var t in e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                },
                beforeUpdate: function() {
                    s.callback(this.options.beforeUpdate, [this])
                },
                update: function(e, t, n) {
                    var a, r, i, o, d, u, l = this;
                    for (l.beforeUpdate(), l.maxWidth = e, l.maxHeight = t, l.margins = s.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n), l.longestTextCache = l.longestTextCache || {}, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), d = l.buildTicks() || [], l.afterBuildTicks(), l.beforeTickToLabelConversion(), i = l.convertTicksToLabels(d) || l.ticks, l.afterTickToLabelConversion(), l.ticks = i, a = 0, r = i.length; a < r; ++a) o = i[a], u = d[a], u ? u.label = o : d.push(u = {
                        label: o,
                        major: !1
                    });
                    return l._ticks = d, l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l.afterUpdate(), l.minSize
                },
                afterUpdate: function() {
                    s.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function() {
                    s.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                },
                afterSetDimensions: function() {
                    s.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function() {
                    s.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: s.noop,
                afterDataLimits: function() {
                    s.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function() {
                    s.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: s.noop,
                afterBuildTicks: function() {
                    s.callback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function() {
                    s.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function() {
                    var e = this,
                        t = e.options.ticks;
                    e.ticks = e.ticks.map(t.userCallback || t.callback, this)
                },
                afterTickToLabelConversion: function() {
                    s.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function() {
                    s.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function() {
                    var e = this,
                        t = e.ctx,
                        r = e.options.ticks,
                        i = a(e._ticks),
                        o = n(r);
                    t.font = o.font;
                    var d = r.minRotation || 0;
                    if (i.length && e.options.display && e.isHorizontal())
                        for (var u, l = s.longestText(t, o.font, i, e.longestTextCache), c = l, m = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > m && d < r.maxRotation;) {
                            var _ = s.toRadians(d);
                            if (u = Math.cos(_), Math.sin(_) * l > e.maxHeight) {
                                d--;
                                break
                            }
                            d++, c = u * l
                        }
                    e.labelRotation = d
                },
                afterCalculateTickRotation: function() {
                    s.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function() {
                    s.callback(this.options.beforeFit, [this])
                },
                fit: function() {
                    var e = this,
                        r = e.minSize = {
                            width: 0,
                            height: 0
                        },
                        i = a(e._ticks),
                        o = e.options,
                        u = o.ticks,
                        l = o.scaleLabel,
                        c = o.gridLines,
                        m = o.display,
                        _ = e.isHorizontal(),
                        h = n(u),
                        f = o.gridLines.tickMarkLength;
                    if (r.width = _ ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && c.drawTicks ? f : 0, r.height = _ ? m && c.drawTicks ? f : 0 : e.maxHeight, l.display && m) {
                        var p = d(l),
                            y = s.options.toPadding(l.padding),
                            M = p + y.height;
                        _ ? r.height += M : r.width += M
                    }
                    if (u.display && m) {
                        var g = s.longestText(e.ctx, h.font, i, e.longestTextCache),
                            v = s.numberOfLabelLines(i),
                            b = .5 * h.size,
                            L = e.options.ticks.padding;
                        if (_) {
                            e.longestLabelWidth = g;
                            var Y = s.toRadians(e.labelRotation),
                                k = Math.cos(Y),
                                D = Math.sin(Y),
                                x = D * g + h.size * v + b * (v - 1) + b;
                            r.height = Math.min(e.maxHeight, r.height + x + L), e.ctx.font = h.font;
                            var T = t(e.ctx, i[0], h.font),
                                w = t(e.ctx, i[i.length - 1], h.font);
                            0 !== e.labelRotation ? (e.paddingLeft = "bottom" === o.position ? k * T + 3 : k * b + 3, e.paddingRight = "bottom" === o.position ? k * b + 3 : k * w + 3) : (e.paddingLeft = T / 2 + 3, e.paddingRight = w / 2 + 3)
                        } else u.mirror ? g = 0 : g += L + b, r.width = Math.min(e.maxWidth, r.width + g), e.paddingTop = h.size / 2, e.paddingBottom = h.size / 2
                    }
                    e.handleMargins(), e.width = r.width, e.height = r.height
                },
                handleMargins: function() {
                    var e = this;
                    e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                },
                afterFit: function() {
                    s.callback(this.options.afterFit, [this])
                },
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function() {
                    return this.options.fullWidth
                },
                getRightValue: function(e) {
                    if (s.isNullOrUndef(e)) return NaN;
                    if ("number" == typeof e && !isFinite(e)) return NaN;
                    if (e)
                        if (this.isHorizontal()) {
                            if (void 0 !== e.x) return this.getRightValue(e.x)
                        } else if (void 0 !== e.y) return this.getRightValue(e.y);
                    return e
                },
                getLabelForIndex: s.noop,
                getPixelForValue: s.noop,
                getValueForPixel: s.noop,
                getPixelForTick: function(e) {
                    var t = this,
                        n = t.options.offset;
                    if (t.isHorizontal()) {
                        var a = t.width - (t.paddingLeft + t.paddingRight),
                            r = a / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                            i = r * e + t.paddingLeft;
                        n && (i += r / 2);
                        var o = t.left + Math.round(i);
                        return o += t.isFullWidth() ? t.margins.left : 0
                    }
                    var s = t.height - (t.paddingTop + t.paddingBottom);
                    return t.top + e * (s / (t._ticks.length - 1))
                },
                getPixelForDecimal: function(e) {
                    var t = this;
                    if (t.isHorizontal()) {
                        var n = t.width - (t.paddingLeft + t.paddingRight),
                            a = n * e + t.paddingLeft,
                            r = t.left + Math.round(a);
                        return r += t.isFullWidth() ? t.margins.left : 0
                    }
                    return t.top + e * t.height
                },
                getBasePixel: function() {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function() {
                    var e = this,
                        t = e.min,
                        n = e.max;
                    return e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
                },
                _autoSkip: function(e) {
                    var t, n, a, r, i, o = this,
                        d = o.isHorizontal(),
                        u = o.options.ticks.minor,
                        l = e.length,
                        c = s.toRadians(o.labelRotation),
                        m = Math.cos(c),
                        _ = o.longestLabelWidth * m,
                        h = [];
                    for (u.maxTicksLimit && (i = u.maxTicksLimit), d && (t = !1, (_ + u.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (t = 1 + Math.floor((_ + u.autoSkipPadding) * l / (o.width - (o.paddingLeft + o.paddingRight)))), i && l > i && (t = Math.max(t, Math.floor(l / i)))), n = 0; n < l; n++) a = e[n], r = t > 1 && n % t > 0 || n % t == 0 && n + t >= l, (r && n !== l - 1 || s.isNullOrUndef(a.label)) && delete a.label, h.push(a);
                    return h
                },
                draw: function(e) {
                    var t = this,
                        a = t.options;
                    if (a.display) {
                        var o = t.ctx,
                            u = i.global,
                            l = a.ticks.minor,
                            c = a.ticks.major || l,
                            m = a.gridLines,
                            _ = a.scaleLabel,
                            h = 0 !== t.labelRotation,
                            f = t.isHorizontal(),
                            p = l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            y = s.valueOrDefault(l.fontColor, u.defaultFontColor),
                            M = n(l),
                            g = s.valueOrDefault(c.fontColor, u.defaultFontColor),
                            v = n(c),
                            b = m.drawTicks ? m.tickMarkLength : 0,
                            L = s.valueOrDefault(_.fontColor, u.defaultFontColor),
                            Y = n(_),
                            k = s.options.toPadding(_.padding),
                            D = s.toRadians(t.labelRotation),
                            x = [],
                            T = "right" === a.position ? t.left : t.right - b,
                            w = "right" === a.position ? t.left + b : t.right,
                            S = "bottom" === a.position ? t.top : t.bottom - b,
                            j = "bottom" === a.position ? t.top + b : t.bottom;
                        if (s.each(p, function(n, i) {
                                if (void 0 !== n.label) {
                                    var o, d, c, _, y = n.label;
                                    i === t.zeroLineIndex && a.offset === m.offsetGridLines ? (o = m.zeroLineWidth, d = m.zeroLineColor, c = m.zeroLineBorderDash, _ = m.zeroLineBorderDashOffset) : (o = s.valueAtIndexOrDefault(m.lineWidth, i), d = s.valueAtIndexOrDefault(m.color, i), c = s.valueOrDefault(m.borderDash, u.borderDash), _ = s.valueOrDefault(m.borderDashOffset, u.borderDashOffset));
                                    var M, g, v, L, Y, k, H, O, C, P, A = "middle",
                                        F = "middle",
                                        E = l.padding;
                                    if (f) {
                                        var W = b + E;
                                        "bottom" === a.position ? (F = h ? "middle" : "top", A = h ? "right" : "center", P = t.top + W) : (F = h ? "middle" : "bottom", A = h ? "left" : "center", P = t.bottom - W);
                                        var I = r(t, i, m.offsetGridLines && p.length > 1);
                                        I < t.left && (d = "rgba(0,0,0,0)"), I += s.aliasPixel(o), C = t.getPixelForTick(i) + l.labelOffset, M = v = Y = H = I, g = S, L = j, k = e.top, O = e.bottom
                                    } else {
                                        var z, R = "left" === a.position;
                                        l.mirror ? (A = R ? "left" : "right", z = E) : (A = R ? "right" : "left", z = b + E), C = R ? t.right - z : t.left + z;
                                        var N = r(t, i, m.offsetGridLines && p.length > 1);
                                        N < t.top && (d = "rgba(0,0,0,0)"), N += s.aliasPixel(o), P = t.getPixelForTick(i) + l.labelOffset, M = T, v = w, Y = e.left, H = e.right, g = L = k = O = N
                                    }
                                    x.push({
                                        tx1: M,
                                        ty1: g,
                                        tx2: v,
                                        ty2: L,
                                        x1: Y,
                                        y1: k,
                                        x2: H,
                                        y2: O,
                                        labelX: C,
                                        labelY: P,
                                        glWidth: o,
                                        glColor: d,
                                        glBorderDash: c,
                                        glBorderDashOffset: _,
                                        rotation: -1 * D,
                                        label: y,
                                        major: n.major,
                                        textBaseline: F,
                                        textAlign: A
                                    })
                                }
                            }), s.each(x, function(e) {
                                if (m.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), l.display) {
                                    o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? v.font : M.font, o.fillStyle = e.major ? g : y, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (s.isArray(t))
                                        for (var n = 0, a = 0; n < t.length; ++n) o.fillText("" + t[n], 0, a), a += 1.5 * M.size;
                                    else o.fillText(t, 0, 0);
                                    o.restore()
                                }
                            }), _.display) {
                            var H, O, C = 0,
                                P = d(_) / 2;
                            if (f) H = t.left + (t.right - t.left) / 2, O = "bottom" === a.position ? t.bottom - P - k.bottom : t.top + P + k.top;
                            else {
                                var A = "left" === a.position;
                                H = A ? t.left + P + k.top : t.right - P - k.top, O = t.top + (t.bottom - t.top) / 2, C = A ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(H, O), o.rotate(C), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = L, o.font = Y.font, o.fillText(_.labelString, 0, 0), o.restore()
                        }
                        if (m.drawBorder) {
                            o.lineWidth = s.valueAtIndexOrDefault(m.lineWidth, 0), o.strokeStyle = s.valueAtIndexOrDefault(m.color, 0);
                            var F = t.left,
                                E = t.right,
                                W = t.top,
                                I = t.bottom,
                                z = s.aliasPixel(o.lineWidth);
                            f ? (W = I = "top" === a.position ? t.bottom : t.top, W += z, I += z) : (F = E = "left" === a.position ? t.right : t.left, F += z, E += z), o.beginPath(), o.moveTo(F, W), o.lineTo(E, I), o.stroke()
                        }
                    }
                }
            })
        }
    },
    1528: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(848),
            i = n(815);
        a._set("global", {
            tooltips: {
                enabled: !0,
                custom: null,
                mode: "nearest",
                position: "average",
                intersect: !0,
                backgroundColor: "rgba(0,0,0,0.8)",
                titleFontStyle: "bold",
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleFontColor: "#fff",
                titleAlign: "left",
                bodySpacing: 2,
                bodyFontColor: "#fff",
                bodyAlign: "left",
                footerFontStyle: "bold",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: "#fff",
                footerAlign: "left",
                yPadding: 6,
                xPadding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                multiKeyBackground: "#fff",
                displayColors: !0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                callbacks: {
                    beforeTitle: i.noop,
                    title: function(e, t) {
                        var n = "",
                            a = t.labels,
                            r = a ? a.length : 0;
                        if (e.length > 0) {
                            var i = e[0];
                            i.xLabel ? n = i.xLabel : r > 0 && i.index < r && (n = a[i.index])
                        }
                        return n
                    },
                    afterTitle: i.noop,
                    beforeBody: i.noop,
                    beforeLabel: i.noop,
                    label: function(e, t) {
                        var n = t.datasets[e.datasetIndex].label || "";
                        return n && (n += ": "), n += e.yLabel
                    },
                    labelColor: function(e, t) {
                        var n = t.getDatasetMeta(e.datasetIndex),
                            a = n.data[e.index],
                            r = a._view;
                        return {
                            borderColor: r.borderColor,
                            backgroundColor: r.backgroundColor
                        }
                    },
                    labelTextColor: function() {
                        return this._options.bodyFontColor
                    },
                    afterLabel: i.noop,
                    afterBody: i.noop,
                    beforeFooter: i.noop,
                    footer: i.noop,
                    afterFooter: i.noop
                }
            }
        }), e.exports = function(e) {
            function t(e, t) {
                var n = i.color(e);
                return n.alpha(t * n.alpha()).rgbaString()
            }

            function n(e, t) {
                return t && (i.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
            }

            function o(e) {
                var t = e._xScale,
                    n = e._yScale || e._scale,
                    a = e._index,
                    r = e._datasetIndex;
                return {
                    xLabel: t ? t.getLabelForIndex(a, r) : "",
                    yLabel: n ? n.getLabelForIndex(a, r) : "",
                    index: a,
                    datasetIndex: r,
                    x: e._model.x,
                    y: e._model.y
                }
            }

            function s(e) {
                var t = a.global,
                    n = i.valueOrDefault;
                return {
                    xPadding: e.xPadding,
                    yPadding: e.yPadding,
                    xAlign: e.xAlign,
                    yAlign: e.yAlign,
                    bodyFontColor: e.bodyFontColor,
                    _bodyFontFamily: n(e.bodyFontFamily, t.defaultFontFamily),
                    _bodyFontStyle: n(e.bodyFontStyle, t.defaultFontStyle),
                    _bodyAlign: e.bodyAlign,
                    bodyFontSize: n(e.bodyFontSize, t.defaultFontSize),
                    bodySpacing: e.bodySpacing,
                    titleFontColor: e.titleFontColor,
                    _titleFontFamily: n(e.titleFontFamily, t.defaultFontFamily),
                    _titleFontStyle: n(e.titleFontStyle, t.defaultFontStyle),
                    titleFontSize: n(e.titleFontSize, t.defaultFontSize),
                    _titleAlign: e.titleAlign,
                    titleSpacing: e.titleSpacing,
                    titleMarginBottom: e.titleMarginBottom,
                    footerFontColor: e.footerFontColor,
                    _footerFontFamily: n(e.footerFontFamily, t.defaultFontFamily),
                    _footerFontStyle: n(e.footerFontStyle, t.defaultFontStyle),
                    footerFontSize: n(e.footerFontSize, t.defaultFontSize),
                    _footerAlign: e.footerAlign,
                    footerSpacing: e.footerSpacing,
                    footerMarginTop: e.footerMarginTop,
                    caretSize: e.caretSize,
                    cornerRadius: e.cornerRadius,
                    backgroundColor: e.backgroundColor,
                    opacity: 0,
                    legendColorBackground: e.multiKeyBackground,
                    displayColors: e.displayColors,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth
                }
            }

            function d(e, t) {
                var n = e._chart.ctx,
                    a = 2 * t.yPadding,
                    r = 0,
                    o = t.body,
                    s = o.reduce(function(e, t) {
                        return e + t.before.length + t.lines.length + t.after.length
                    }, 0);
                s += t.beforeBody.length + t.afterBody.length;
                var d = t.title.length,
                    u = t.footer.length,
                    l = t.titleFontSize,
                    c = t.bodyFontSize,
                    m = t.footerFontSize;
                a += d * l, a += d ? (d - 1) * t.titleSpacing : 0, a += d ? t.titleMarginBottom : 0, a += s * c, a += s ? (s - 1) * t.bodySpacing : 0, a += u ? t.footerMarginTop : 0, a += u * m, a += u ? (u - 1) * t.footerSpacing : 0;
                var _ = 0,
                    h = function(e) {
                        r = Math.max(r, n.measureText(e).width + _)
                    };
                return n.font = i.fontString(l, t._titleFontStyle, t._titleFontFamily), i.each(t.title, h), n.font = i.fontString(c, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), h), _ = t.displayColors ? c + 2 : 0, i.each(o, function(e) {
                    i.each(e.before, h), i.each(e.lines, h), i.each(e.after, h)
                }), _ = 0, n.font = i.fontString(m, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, h), r += 2 * t.xPadding, {
                    width: r,
                    height: a
                }
            }

            function u(e, t) {
                var n = e._model,
                    a = e._chart,
                    r = e._chart.chartArea,
                    i = "center",
                    o = "center";
                n.y < t.height ? o = "top" : n.y > a.height - t.height && (o = "bottom");
                var s, d, u, l, c, m = (r.left + r.right) / 2,
                    _ = (r.top + r.bottom) / 2;
                "center" === o ? (s = function(e) {
                    return e <= m
                }, d = function(e) {
                    return e > m
                }) : (s = function(e) {
                    return e <= t.width / 2
                }, d = function(e) {
                    return e >= a.width - t.width / 2
                }), u = function(e) {
                    return e + t.width > a.width
                }, l = function(e) {
                    return e - t.width < 0
                }, c = function(e) {
                    return e <= _ ? "top" : "bottom"
                }, s(n.x) ? (i = "left", u(n.x) && (i = "center", o = c(n.y))) : d(n.x) && (i = "right", l(n.x) && (i = "center", o = c(n.y)));
                var h = e._options;
                return {
                    xAlign: h.xAlign ? h.xAlign : i,
                    yAlign: h.yAlign ? h.yAlign : o
                }
            }

            function l(e, t, n) {
                var a = e.x,
                    r = e.y,
                    i = e.caretSize,
                    o = e.caretPadding,
                    s = e.cornerRadius,
                    d = n.xAlign,
                    u = n.yAlign,
                    l = i + o,
                    c = s + o;
                return "right" === d ? a -= t.width : "center" === d && (a -= t.width / 2), "top" === u ? r += l : r -= "bottom" === u ? t.height + l : t.height / 2, "center" === u ? "left" === d ? a += l : "right" === d && (a -= l) : "left" === d ? a -= c : "right" === d && (a += c), {
                    x: a,
                    y: r
                }
            }
            e.Tooltip = r.extend({
                initialize: function() {
                    this._model = s(this._options)
                },
                getTitle: function() {
                    var e = this,
                        t = e._options,
                        a = t.callbacks,
                        r = a.beforeTitle.apply(e, arguments),
                        i = a.title.apply(e, arguments),
                        o = a.afterTitle.apply(e, arguments),
                        s = [];
                    return s = n(s, r), s = n(s, i), s = n(s, o)
                },
                getBeforeBody: function() {
                    var e = this._options.callbacks.beforeBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getBody: function(e, t) {
                    var a = this,
                        r = a._options.callbacks,
                        o = [];
                    return i.each(e, function(e) {
                        var i = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        n(i.before, r.beforeLabel.call(a, e, t)), n(i.lines, r.label.call(a, e, t)), n(i.after, r.afterLabel.call(a, e, t)), o.push(i)
                    }), o
                },
                getAfterBody: function() {
                    var e = this._options.callbacks.afterBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getFooter: function() {
                    var e = this,
                        t = e._options.callbacks,
                        a = t.beforeFooter.apply(e, arguments),
                        r = t.footer.apply(e, arguments),
                        i = t.afterFooter.apply(e, arguments),
                        o = [];
                    return o = n(o, a), o = n(o, r), o = n(o, i)
                },
                update: function(t) {
                    var n, a, r = this,
                        c = r._options,
                        m = r._model,
                        _ = r._model = s(c),
                        h = r._active,
                        f = r._data,
                        p = {
                            xAlign: m.xAlign,
                            yAlign: m.yAlign
                        },
                        y = {
                            x: m.x,
                            y: m.y
                        },
                        M = {
                            width: m.width,
                            height: m.height
                        },
                        g = {
                            x: m.caretX,
                            y: m.caretY
                        };
                    if (h.length) {
                        _.opacity = 1;
                        var v = [],
                            b = [];
                        g = e.Tooltip.positioners[c.position](h, r._eventPosition);
                        var L = [];
                        for (n = 0, a = h.length; n < a; ++n) L.push(o(h[n]));
                        c.filter && (L = L.filter(function(e) {
                            return c.filter(e, f)
                        })), c.itemSort && (L = L.sort(function(e, t) {
                            return c.itemSort(e, t, f)
                        })), i.each(L, function(e) {
                            v.push(c.callbacks.labelColor.call(r, e, r._chart)), b.push(c.callbacks.labelTextColor.call(r, e, r._chart))
                        }), _.title = r.getTitle(L, f), _.beforeBody = r.getBeforeBody(L, f), _.body = r.getBody(L, f), _.afterBody = r.getAfterBody(L, f), _.footer = r.getFooter(L, f), _.x = Math.round(g.x), _.y = Math.round(g.y), _.caretPadding = c.caretPadding, _.labelColors = v, _.labelTextColors = b, _.dataPoints = L, M = d(this, _), p = u(this, M), y = l(_, M, p)
                    } else _.opacity = 0;
                    return _.xAlign = p.xAlign, _.yAlign = p.yAlign, _.x = y.x, _.y = y.y, _.width = M.width, _.height = M.height, _.caretX = g.x, _.caretY = g.y, r._model = _, t && c.custom && c.custom.call(r, _), r
                },
                drawCaret: function(e, t) {
                    var n = this._chart.ctx,
                        a = this._view,
                        r = this.getCaretPosition(e, t, a);
                    n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
                },
                getCaretPosition: function(e, t, n) {
                    var a, r, i, o, s, d, u = n.caretSize,
                        l = n.cornerRadius,
                        c = n.xAlign,
                        m = n.yAlign,
                        _ = e.x,
                        h = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === m) s = h + p / 2, "left" === c ? (a = _, r = a - u, i = a, o = s + u, d = s - u) : (a = _ + f, r = a + u, i = a, o = s - u, d = s + u);
                    else if ("left" === c ? (r = _ + l + u, a = r - u, i = r + u) : "right" === c ? (r = _ + f - l - u, a = r - u, i = r + u) : (r = _ + f / 2, a = r - u, i = r + u), "top" === m) o = h, s = o - u, d = o;
                    else {
                        o = h + p, s = o + u, d = o;
                        var y = i;
                        i = a, a = y
                    }
                    return {
                        x1: a,
                        x2: r,
                        x3: i,
                        y1: o,
                        y2: s,
                        y3: d
                    }
                },
                drawTitle: function(e, n, a, r) {
                    var o = n.title;
                    if (o.length) {
                        a.textAlign = n._titleAlign, a.textBaseline = "top";
                        var s = n.titleFontSize,
                            d = n.titleSpacing;
                        a.fillStyle = t(n.titleFontColor, r), a.font = i.fontString(s, n._titleFontStyle, n._titleFontFamily);
                        var u, l;
                        for (u = 0, l = o.length; u < l; ++u) a.fillText(o[u], e.x, e.y), e.y += s + d, u + 1 === o.length && (e.y += n.titleMarginBottom - d)
                    }
                },
                drawBody: function(e, n, a, r) {
                    var o = n.bodyFontSize,
                        s = n.bodySpacing,
                        d = n.body;
                    a.textAlign = n._bodyAlign, a.textBaseline = "top", a.font = i.fontString(o, n._bodyFontStyle, n._bodyFontFamily);
                    var u = 0,
                        l = function(t) {
                            a.fillText(t, e.x + u, e.y), e.y += o + s
                        };
                    i.each(n.beforeBody, l);
                    var c = n.displayColors;
                    u = c ? o + 2 : 0, i.each(d, function(s, d) {
                        i.each(s.before, l), i.each(s.lines, function(i) {
                            if (c) {
                                a.fillStyle = t(n.legendColorBackground, r), a.fillRect(e.x, e.y, o, o), a.lineWidth = 1, a.strokeStyle = t(n.labelColors[d].borderColor, r), a.strokeRect(e.x, e.y, o, o), a.fillStyle = t(n.labelColors[d].backgroundColor, r), a.fillRect(e.x + 1, e.y + 1, o - 2, o - 2);
                                var s = t(n.labelTextColors[d], r);
                                a.fillStyle = s
                            }
                            l(i)
                        }), i.each(s.after, l)
                    }), u = 0, i.each(n.afterBody, l), e.y -= s
                },
                drawFooter: function(e, n, a, r) {
                    var o = n.footer;
                    o.length && (e.y += n.footerMarginTop, a.textAlign = n._footerAlign, a.textBaseline = "top", a.fillStyle = t(n.footerFontColor, r), a.font = i.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), i.each(o, function(t) {
                        a.fillText(t, e.x, e.y), e.y += n.footerFontSize + n.footerSpacing
                    }))
                },
                drawBackground: function(e, n, a, r, i) {
                    a.fillStyle = t(n.backgroundColor, i), a.strokeStyle = t(n.borderColor, i), a.lineWidth = n.borderWidth;
                    var o = n.xAlign,
                        s = n.yAlign,
                        d = e.x,
                        u = e.y,
                        l = r.width,
                        c = r.height,
                        m = n.cornerRadius;
                    a.beginPath(), a.moveTo(d + m, u), "top" === s && this.drawCaret(e, r), a.lineTo(d + l - m, u), a.quadraticCurveTo(d + l, u, d + l, u + m), "center" === s && "right" === o && this.drawCaret(e, r), a.lineTo(d + l, u + c - m), a.quadraticCurveTo(d + l, u + c, d + l - m, u + c), "bottom" === s && this.drawCaret(e, r), a.lineTo(d + m, u + c), a.quadraticCurveTo(d, u + c, d, u + c - m), "center" === s && "left" === o && this.drawCaret(e, r), a.lineTo(d, u + m), a.quadraticCurveTo(d, u, d + m, u), a.closePath(), a.fill(), n.borderWidth > 0 && a.stroke()
                },
                draw: function() {
                    var e = this._chart.ctx,
                        t = this._view;
                    if (0 !== t.opacity) {
                        var n = {
                                width: t.width,
                                height: t.height
                            },
                            a = {
                                x: t.x,
                                y: t.y
                            },
                            r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                            i = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                        this._options.enabled && i && (this.drawBackground(a, t, e, n, r), a.x += t.xPadding, a.y += t.yPadding, this.drawTitle(a, t, e, r), this.drawBody(a, t, e, r), this.drawFooter(a, t, e, r))
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        n = t._options,
                        a = !1;
                    if (t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : t._active = t._chart.getElementsAtEventForMode(e, n.mode, n), !(a = !i.arrayEquals(t._active, t._lastActive))) return !1;
                    if (t._lastActive = t._active, n.enabled || n.custom) {
                        t._eventPosition = {
                            x: e.x,
                            y: e.y
                        };
                        var r = t._model;
                        t.update(!0), t.pivot(), a |= r.x !== t._model.x || r.y !== t._model.y
                    }
                    return a
                }
            }), e.Tooltip.positioners = {
                average: function(e) {
                    if (!e.length) return !1;
                    var t, n, a = 0,
                        r = 0,
                        i = 0;
                    for (t = 0, n = e.length; t < n; ++t) {
                        var o = e[t];
                        if (o && o.hasValue()) {
                            var s = o.tooltipPosition();
                            a += s.x, r += s.y, ++i
                        }
                    }
                    return {
                        x: Math.round(a / i),
                        y: Math.round(r / i)
                    }
                },
                nearest: function(e, t) {
                    var n, a, r, o = t.x,
                        s = t.y,
                        d = Number.POSITIVE_INFINITY;
                    for (n = 0, a = e.length; n < a; ++n) {
                        var u = e[n];
                        if (u && u.hasValue()) {
                            var l = u.getCenterPoint(),
                                c = i.distanceBetweenPoints(t, l);
                            c < d && (d = c, r = u)
                        }
                    }
                    if (r) {
                        var m = r.tooltipPosition();
                        o = m.x, s = m.y
                    }
                    return {
                        x: o,
                        y: s
                    }
                }
            }
        }
    },
    1529: function(e, t, n) {
        "use strict";
        var a = n(815),
            r = n(1007);
        e.exports = function(e) {
            var t = a.noop;
            e.LinearScaleBase = e.Scale.extend({
                getRightValue: function(t) {
                    return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                },
                handleTickRangeOptions: function() {
                    var e = this,
                        t = e.options,
                        n = t.ticks;
                    if (n.beginAtZero) {
                        var r = a.sign(e.min),
                            i = a.sign(e.max);
                        r < 0 && i < 0 ? e.max = 0 : r > 0 && i > 0 && (e.min = 0)
                    }
                    var o = void 0 !== n.min || void 0 !== n.suggestedMin,
                        s = void 0 !== n.max || void 0 !== n.suggestedMax;
                    void 0 !== n.min ? e.min = n.min : void 0 !== n.suggestedMin && (null === e.min ? e.min = n.suggestedMin : e.min = Math.min(e.min, n.suggestedMin)), void 0 !== n.max ? e.max = n.max : void 0 !== n.suggestedMax && (null === e.max ? e.max = n.suggestedMax : e.max = Math.max(e.max, n.suggestedMax)), o !== s && e.min >= e.max && (o ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, n.beginAtZero || e.min--)
                },
                getTickLimit: t,
                handleDirectionalChanges: t,
                buildTicks: function() {
                    var e = this,
                        t = e.options,
                        n = t.ticks,
                        i = e.getTickLimit();
                    i = Math.max(2, i);
                    var o = {
                            maxTicks: i,
                            min: n.min,
                            max: n.max,
                            stepSize: a.valueOrDefault(n.fixedStepSize, n.stepSize)
                        },
                        s = e.ticks = r.generators.linear(o, e);
                    e.handleDirectionalChanges(), e.max = a.max(s), e.min = a.min(s), n.reverse ? (s.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                },
                convertTicksToLabels: function() {
                    var t = this;
                    t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                }
            })
        }
    },
    1530: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = {
                    position: "bottom"
                },
                n = e.Scale.extend({
                    getLabels: function() {
                        var e = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                    },
                    determineDataLimits: function() {
                        var e = this,
                            t = e.getLabels();
                        e.minIndex = 0, e.maxIndex = t.length - 1;
                        var n;
                        void 0 !== e.options.ticks.min && (n = t.indexOf(e.options.ticks.min), e.minIndex = -1 !== n ? n : e.minIndex), void 0 !== e.options.ticks.max && (n = t.indexOf(e.options.ticks.max), e.maxIndex = -1 !== n ? n : e.maxIndex), e.min = t[e.minIndex], e.max = t[e.maxIndex]
                    },
                    buildTicks: function() {
                        var e = this,
                            t = e.getLabels();
                        e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                    },
                    getLabelForIndex: function(e, t) {
                        var n = this,
                            a = n.chart.data,
                            r = n.isHorizontal();
                        return a.yLabels && !r ? n.getRightValue(a.datasets[t].data[e]) : n.ticks[e - n.minIndex]
                    },
                    getPixelForValue: function(e, t) {
                        var n, a = this,
                            r = a.options.offset,
                            i = Math.max(a.maxIndex + 1 - a.minIndex - (r ? 0 : 1), 1);
                        if (void 0 !== e && null !== e && (n = a.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) {
                            var o = a.getLabels();
                            e = n || e;
                            var s = o.indexOf(e);
                            t = -1 !== s ? s : t
                        }
                        if (a.isHorizontal()) {
                            var d = a.width / i,
                                u = d * (t - a.minIndex);
                            return r && (u += d / 2), a.left + Math.round(u)
                        }
                        var l = a.height / i,
                            c = l * (t - a.minIndex);
                        return r && (c += l / 2), a.top + Math.round(c)
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            n = t.options.offset,
                            a = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                            r = t.isHorizontal(),
                            i = (r ? t.width : t.height) / a;
                        return e -= r ? t.left : t.top, n && (e -= i / 2), (e <= 0 ? 0 : Math.round(e / i)) + t.minIndex
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
            e.scaleService.registerScaleType("category", n, t)
        }
    },
    1531: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(815),
            i = n(1007);
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: i.formatters.linear
                    }
                },
                n = e.LinearScaleBase.extend({
                    determineDataLimits: function() {
                        function e(e) {
                            return s ? e.xAxisID === t.id : e.yAxisID === t.id
                        }
                        var t = this,
                            n = t.options,
                            a = t.chart,
                            i = a.data,
                            o = i.datasets,
                            s = t.isHorizontal();
                        t.min = null, t.max = null;
                        var d = n.stacked;
                        if (void 0 === d && r.each(o, function(t, n) {
                                if (!d) {
                                    var r = a.getDatasetMeta(n);
                                    a.isDatasetVisible(n) && e(r) && void 0 !== r.stack && (d = !0)
                                }
                            }), n.stacked || d) {
                            var u = {};
                            r.each(o, function(i, o) {
                                var s = a.getDatasetMeta(o),
                                    d = [s.type, void 0 === n.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                void 0 === u[d] && (u[d] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var l = u[d].positiveValues,
                                    c = u[d].negativeValues;
                                a.isDatasetVisible(o) && e(s) && r.each(i.data, function(e, a) {
                                    var r = +t.getRightValue(e);
                                    isNaN(r) || s.data[a].hidden || (l[a] = l[a] || 0, c[a] = c[a] || 0, n.relativePoints ? l[a] = 100 : r < 0 ? c[a] += r : l[a] += r)
                                })
                            }), r.each(u, function(e) {
                                var n = e.positiveValues.concat(e.negativeValues),
                                    a = r.min(n),
                                    i = r.max(n);
                                t.min = null === t.min ? a : Math.min(t.min, a), t.max = null === t.max ? i : Math.max(t.max, i)
                            })
                        } else r.each(o, function(n, i) {
                            var o = a.getDatasetMeta(i);
                            a.isDatasetVisible(i) && e(o) && r.each(n.data, function(e, n) {
                                var a = +t.getRightValue(e);
                                isNaN(a) || o.data[n].hidden || (null === t.min ? t.min = a : a < t.min && (t.min = a), null === t.max ? t.max = a : a > t.max && (t.max = a))
                            })
                        });
                        t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e, t = this,
                            n = t.options.ticks;
                        if (t.isHorizontal()) e = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(t.width / 50));
                        else {
                            var i = r.valueOrDefault(n.fontSize, a.global.defaultFontSize);
                            e = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(t.height / (2 * i)))
                        }
                        return e
                    },
                    handleDirectionalChanges: function() {
                        this.isHorizontal() || this.ticks.reverse()
                    },
                    getLabelForIndex: function(e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    },
                    getPixelForValue: function(e) {
                        var t, n = this,
                            a = n.start,
                            r = +n.getRightValue(e),
                            i = n.end - a;
                        return n.isHorizontal() ? (t = n.left + n.width / i * (r - a), Math.round(t)) : (t = n.bottom - n.height / i * (r - a), Math.round(t))
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            n = t.isHorizontal(),
                            a = n ? t.width : t.height,
                            r = (n ? e - t.left : t.bottom - e) / a;
                        return t.start + (t.end - t.start) * r
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.ticksAsNumbers[e])
                    }
                });
            e.scaleService.registerScaleType("linear", n, t)
        }
    },
    1532: function(e, t, n) {
        "use strict";
        var a = n(815),
            r = n(1007);
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: r.formatters.logarithmic
                    }
                },
                n = e.Scale.extend({
                    determineDataLimits: function() {
                        function e(e) {
                            return u ? e.xAxisID === t.id : e.yAxisID === t.id
                        }
                        var t = this,
                            n = t.options,
                            r = n.ticks,
                            i = t.chart,
                            o = i.data,
                            s = o.datasets,
                            d = a.valueOrDefault,
                            u = t.isHorizontal();
                        t.min = null, t.max = null, t.minNotZero = null;
                        var l = n.stacked;
                        if (void 0 === l && a.each(s, function(t, n) {
                                if (!l) {
                                    var a = i.getDatasetMeta(n);
                                    i.isDatasetVisible(n) && e(a) && void 0 !== a.stack && (l = !0)
                                }
                            }), n.stacked || l) {
                            var c = {};
                            a.each(s, function(r, o) {
                                var s = i.getDatasetMeta(o),
                                    d = [s.type, void 0 === n.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                i.isDatasetVisible(o) && e(s) && (void 0 === c[d] && (c[d] = []), a.each(r.data, function(e, a) {
                                    var r = c[d],
                                        i = +t.getRightValue(e);
                                    isNaN(i) || s.data[a].hidden || (r[a] = r[a] || 0, n.relativePoints ? r[a] = 100 : r[a] += i)
                                }))
                            }), a.each(c, function(e) {
                                var n = a.min(e),
                                    r = a.max(e);
                                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r)
                            })
                        } else a.each(s, function(n, r) {
                            var o = i.getDatasetMeta(r);
                            i.isDatasetVisible(r) && e(o) && a.each(n.data, function(e, n) {
                                var a = +t.getRightValue(e);
                                isNaN(a) || o.data[n].hidden || (null === t.min ? t.min = a : a < t.min && (t.min = a), null === t.max ? t.max = a : a > t.max && (t.max = a), 0 !== a && (null === t.minNotZero || a < t.minNotZero) && (t.minNotZero = a))
                            })
                        });
                        t.min = d(r.min, t.min), t.max = d(r.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(a.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(a.log10(t.max)) + 1)) : (t.min = 1, t.max = 10))
                    },
                    buildTicks: function() {
                        var e = this,
                            t = e.options,
                            n = t.ticks,
                            i = {
                                min: n.min,
                                max: n.max
                            },
                            o = e.ticks = r.generators.logarithmic(i, e);
                        e.isHorizontal() || o.reverse(), e.max = a.max(o), e.min = a.min(o), n.reverse ? (o.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                    },
                    convertTicksToLabels: function() {
                        this.tickValues = this.ticks.slice(), e.Scale.prototype.convertTicksToLabels.call(this)
                    },
                    getLabelForIndex: function(e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.tickValues[e])
                    },
                    getPixelForValue: function(e) {
                        var t, n, r, i = this,
                            o = i.start,
                            s = +i.getRightValue(e),
                            d = i.options,
                            u = d.ticks;
                        return i.isHorizontal() ? (r = a.log10(i.end) - a.log10(o), 0 === s ? n = i.left : (t = i.width, n = i.left + t / r * (a.log10(s) - a.log10(o)))) : (t = i.height, 0 !== o || u.reverse ? 0 === i.end && u.reverse ? (r = a.log10(i.start) - a.log10(i.minNotZero), n = s === i.end ? i.top : s === i.minNotZero ? i.top + .02 * t : i.top + .02 * t + .98 * t / r * (a.log10(s) - a.log10(i.minNotZero))) : 0 === s ? n = u.reverse ? i.top : i.bottom : (r = a.log10(i.end) - a.log10(o), t = i.height, n = i.bottom - t / r * (a.log10(s) - a.log10(o))) : (r = a.log10(i.end) - a.log10(i.minNotZero), n = s === o ? i.bottom : s === i.minNotZero ? i.bottom - .02 * t : i.bottom - .02 * t - .98 * t / r * (a.log10(s) - a.log10(i.minNotZero)))), n
                    },
                    getValueForPixel: function(e) {
                        var t, n, r = this,
                            i = a.log10(r.end) - a.log10(r.start);
                        return r.isHorizontal() ? (n = r.width, t = r.start * Math.pow(10, (e - r.left) * i / n)) : (n = r.height, t = Math.pow(10, (r.bottom - e) * i / n) / r.start), t
                    }
                });
            e.scaleService.registerScaleType("logarithmic", n, t)
        }
    },
    1533: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(815),
            i = n(1007);
        e.exports = function(e) {
            function t(e) {
                var t = e.options;
                return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
            }

            function n(e) {
                var t = e.options.pointLabels,
                    n = r.valueOrDefault(t.fontSize, p.defaultFontSize),
                    a = r.valueOrDefault(t.fontStyle, p.defaultFontStyle),
                    i = r.valueOrDefault(t.fontFamily, p.defaultFontFamily);
                return {
                    size: n,
                    style: a,
                    family: i,
                    font: r.fontString(n, a, i)
                }
            }

            function o(e, t, n) {
                return r.isArray(n) ? {
                    w: r.longestText(e, e.font, n),
                    h: n.length * t + 1.5 * (n.length - 1) * t
                } : {
                    w: e.measureText(n).width,
                    h: t
                }
            }

            function s(e, t, n, a, r) {
                return e === a || e === r ? {
                    start: t - n / 2,
                    end: t + n / 2
                } : e < a || e > r ? {
                    start: t - n - 5,
                    end: t
                } : {
                    start: t,
                    end: t + n + 5
                }
            }

            function d(e) {
                var a, i, d, u = n(e),
                    l = Math.min(e.height / 2, e.width / 2),
                    c = {
                        r: e.width,
                        l: 0,
                        t: e.height,
                        b: 0
                    },
                    m = {};
                e.ctx.font = u.font, e._pointLabelSizes = [];
                var _ = t(e);
                for (a = 0; a < _; a++) {
                    d = e.getPointPosition(a, l), i = o(e.ctx, u.size, e.pointLabels[a] || ""), e._pointLabelSizes[a] = i;
                    var h = e.getIndexAngle(a),
                        f = r.toDegrees(h) % 360,
                        p = s(f, d.x, i.w, 0, 180),
                        y = s(f, d.y, i.h, 90, 270);
                    p.start < c.l && (c.l = p.start, m.l = h), p.end > c.r && (c.r = p.end, m.r = h), y.start < c.t && (c.t = y.start, m.t = h), y.end > c.b && (c.b = y.end, m.b = h)
                }
                e.setReductions(l, c, m)
            }

            function u(e) {
                var t = Math.min(e.height / 2, e.width / 2);
                e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0)
            }

            function l(e) {
                return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
            }

            function c(e, t, n, a) {
                if (r.isArray(t))
                    for (var i = n.y, o = 1.5 * a, s = 0; s < t.length; ++s) e.fillText(t[s], n.x, i), i += o;
                else e.fillText(t, n.x, n.y)
            }

            function m(e, t, n) {
                90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
            }

            function _(e) {
                var a = e.ctx,
                    i = r.valueOrDefault,
                    o = e.options,
                    s = o.angleLines,
                    d = o.pointLabels;
                a.lineWidth = s.lineWidth, a.strokeStyle = s.color;
                var u = e.getDistanceFromCenterForValue(o.ticks.reverse ? e.min : e.max),
                    _ = n(e);
                a.textBaseline = "top";
                for (var h = t(e) - 1; h >= 0; h--) {
                    if (s.display) {
                        var f = e.getPointPosition(h, u);
                        a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(f.x, f.y), a.stroke(), a.closePath()
                    }
                    if (d.display) {
                        var y = e.getPointPosition(h, u + 5),
                            M = i(d.fontColor, p.defaultFontColor);
                        a.font = _.font, a.fillStyle = M;
                        var g = e.getIndexAngle(h),
                            v = r.toDegrees(g);
                        a.textAlign = l(v), m(v, e._pointLabelSizes[h], y), c(a, e.pointLabels[h] || "", y, _.size)
                    }
                }
            }

            function h(e, n, a, i) {
                var o = e.ctx;
                if (o.strokeStyle = r.valueAtIndexOrDefault(n.color, i - 1), o.lineWidth = r.valueAtIndexOrDefault(n.lineWidth, i - 1), e.options.gridLines.circular) o.beginPath(), o.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), o.closePath(), o.stroke();
                else {
                    var s = t(e);
                    if (0 === s) return;
                    o.beginPath();
                    var d = e.getPointPosition(0, a);
                    o.moveTo(d.x, d.y);
                    for (var u = 1; u < s; u++) d = e.getPointPosition(u, a), o.lineTo(d.x, d.y);
                    o.closePath(), o.stroke()
                }
            }

            function f(e) {
                return r.isNumber(e) ? e : 0
            }
            var p = a.global,
                y = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1
                    },
                    gridLines: {
                        circular: !1
                    },
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: i.formatters.linear
                    },
                    pointLabels: {
                        display: !0,
                        fontSize: 10,
                        callback: function(e) {
                            return e
                        }
                    }
                },
                M = e.LinearScaleBase.extend({
                    setDimensions: function() {
                        var e = this,
                            t = e.options,
                            n = t.ticks;
                        e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                        var a = r.min([e.height, e.width]),
                            i = r.valueOrDefault(n.fontSize, p.defaultFontSize);
                        e.drawingArea = t.display ? a / 2 - (i / 2 + n.backdropPaddingY) : a / 2
                    },
                    determineDataLimits: function() {
                        var e = this,
                            t = e.chart,
                            n = Number.POSITIVE_INFINITY,
                            a = Number.NEGATIVE_INFINITY;
                        r.each(t.data.datasets, function(i, o) {
                            if (t.isDatasetVisible(o)) {
                                var s = t.getDatasetMeta(o);
                                r.each(i.data, function(t, r) {
                                    var i = +e.getRightValue(t);
                                    isNaN(i) || s.data[r].hidden || (n = Math.min(i, n), a = Math.max(i, a))
                                })
                            }
                        }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = a === Number.NEGATIVE_INFINITY ? 0 : a, e.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e = this.options.ticks,
                            t = r.valueOrDefault(e.fontSize, p.defaultFontSize);
                        return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)))
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                    },
                    getLabelForIndex: function(e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    },
                    fit: function() {
                        this.options.pointLabels.display ? d(this) : u(this)
                    },
                    setReductions: function(e, t, n) {
                        var a = this,
                            r = t.l / Math.sin(n.l),
                            i = Math.max(t.r - a.width, 0) / Math.sin(n.r),
                            o = -t.t / Math.cos(n.t),
                            s = -Math.max(t.b - a.height, 0) / Math.cos(n.b);
                        r = f(r), i = f(i), o = f(o), s = f(s), a.drawingArea = Math.min(Math.round(e - (r + i) / 2), Math.round(e - (o + s) / 2)), a.setCenterPoint(r, i, o, s)
                    },
                    setCenterPoint: function(e, t, n, a) {
                        var r = this,
                            i = r.width - t - r.drawingArea,
                            o = e + r.drawingArea,
                            s = n + r.drawingArea,
                            d = r.height - a - r.drawingArea;
                        r.xCenter = Math.round((o + i) / 2 + r.left), r.yCenter = Math.round((s + d) / 2 + r.top)
                    },
                    getIndexAngle: function(e) {
                        return e * (2 * Math.PI / t(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(e) {
                        var t = this;
                        if (null === e) return 0;
                        var n = t.drawingArea / (t.max - t.min);
                        return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
                    },
                    getPointPosition: function(e, t) {
                        var n = this,
                            a = n.getIndexAngle(e) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(a) * t) + n.xCenter,
                            y: Math.round(Math.sin(a) * t) + n.yCenter
                        }
                    },
                    getPointPositionForValue: function(e, t) {
                        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                    },
                    getBasePosition: function() {
                        var e = this,
                            t = e.min,
                            n = e.max;
                        return e.getPointPositionForValue(0, e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0)
                    },
                    draw: function() {
                        var e = this,
                            t = e.options,
                            n = t.gridLines,
                            a = t.ticks,
                            i = r.valueOrDefault;
                        if (t.display) {
                            var o = e.ctx,
                                s = this.getIndexAngle(0),
                                d = i(a.fontSize, p.defaultFontSize),
                                u = i(a.fontStyle, p.defaultFontStyle),
                                l = i(a.fontFamily, p.defaultFontFamily),
                                c = r.fontString(d, u, l);
                            r.each(e.ticks, function(t, r) {
                                if (r > 0 || a.reverse) {
                                    var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[r]);
                                    if (n.display && 0 !== r && h(e, n, u, r), a.display) {
                                        var l = i(a.fontColor, p.defaultFontColor);
                                        if (o.font = c, o.save(), o.translate(e.xCenter, e.yCenter), o.rotate(s), a.showLabelBackdrop) {
                                            var m = o.measureText(t).width;
                                            o.fillStyle = a.backdropColor, o.fillRect(-m / 2 - a.backdropPaddingX, -u - d / 2 - a.backdropPaddingY, m + 2 * a.backdropPaddingX, d + 2 * a.backdropPaddingY)
                                        }
                                        o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = l, o.fillText(t, 0, -u), o.restore()
                                    }
                                }
                            }), (t.angleLines.display || t.pointLabels.display) && _(e)
                        }
                    }
                });
            e.scaleService.registerScaleType("radialLinear", M, y)
        }
    },
    1534: function(e, t, n) {
        "use strict";

        function a(e, t) {
            return e - t
        }

        function r(e) {
            var t, n, a, r = {},
                i = [];
            for (t = 0, n = e.length; t < n; ++t) a = e[t], r[a] || (r[a] = !0, i.push(a));
            return i
        }

        function i(e, t, n, a) {
            if ("linear" === a || !e.length) return [{
                time: t,
                pos: 0
            }, {
                time: n,
                pos: 1
            }];
            var r, i, o, s, d, u = [],
                l = [t];
            for (r = 0, i = e.length; r < i; ++r)(s = e[r]) > t && s < n && l.push(s);
            for (l.push(n), r = 0, i = l.length; r < i; ++r) d = l[r + 1], o = l[r - 1], s = l[r], void 0 !== o && void 0 !== d && Math.round((d + o) / 2) === s || u.push({
                time: s,
                pos: r / (i - 1)
            });
            return u
        }

        function o(e, t, n) {
            for (var a, r, i, o = 0, s = e.length - 1; o >= 0 && o <= s;) {
                if (a = o + s >> 1, r = e[a - 1] || null, i = e[a], !r) return {
                    lo: null,
                    hi: i
                };
                if (i[t] < n) o = a + 1;
                else {
                    if (!(r[t] > n)) return {
                        lo: r,
                        hi: i
                    };
                    s = a - 1
                }
            }
            return {
                lo: i,
                hi: null
            }
        }

        function s(e, t, n, a) {
            var r = o(e, t, n),
                i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                d = s[t] - i[t],
                u = d ? (n - i[t]) / d : 0,
                l = (s[a] - i[a]) * u;
            return i[a] + l
        }

        function d(e, t) {
            var n = t.parser,
                a = t.parser || t.format;
            return "function" == typeof n ? n(e) : "string" == typeof e && "string" == typeof a ? p(e, a) : (e instanceof p || (e = p(e)), e.isValid() ? e : "function" == typeof a ? a(e) : e)
        }

        function u(e, t) {
            if (M.isNullOrUndef(e)) return null;
            var n = t.options.time,
                a = d(t.getRightValue(e), n);
            return a.isValid() ? (n.round && a.startOf(n.round), a.valueOf()) : null
        }

        function l(e, t, n, a) {
            var r, i, o, s = t - e,
                d = b[n],
                u = d.size,
                l = d.steps;
            if (!l) return Math.ceil(s / ((a || 1) * u));
            for (r = 0, i = l.length; r < i && (o = l[r], !(Math.ceil(s / (u * o)) <= a)); ++r);
            return o
        }

        function c(e, t, n, a) {
            var r, i, o, s = L.length;
            for (r = L.indexOf(e); r < s - 1; ++r)
                if (i = b[L[r]], o = i.steps ? i.steps[i.steps.length - 1] : v, Math.ceil((n - t) / (o * i.size)) <= a) return L[r];
            return L[s - 1]
        }

        function m(e) {
            for (var t = L.indexOf(e) + 1, n = L.length; t < n; ++t)
                if (b[L[t]].major) return L[t]
        }

        function _(e, t, n, a, r, i) {
            var o, s = i.time,
                d = M.valueOrDefault(s.stepSize, s.unitStepSize),
                u = "week" === n && s.isoWeekday,
                c = i.ticks.major.enabled,
                m = b[n],
                _ = p(e),
                h = p(t),
                f = [];
            for (d || (d = l(e, t, n, r)), u && (_ = _.isoWeekday(u), h = h.isoWeekday(u)), _ = _.startOf(u ? "day" : n), h = h.startOf(u ? "day" : n), h < t && h.add(1, n), o = p(_), c && a && !u && !s.round && (o.startOf(a), o.add(~~((_ - o) / (m.size * d)) * d, n)); o < h; o.add(d, n)) f.push(+o);
            return f.push(+o), f
        }

        function h(e, t, n, a, r) {
            var i, o, d = 0,
                u = 0;
            return r.offset && t.length && (r.time.min || (i = t.length > 1 ? t[1] : a, o = t[0], d = (s(e, "time", i, "pos") - s(e, "time", o, "pos")) / 2), r.time.max || (i = t[t.length - 1], o = t.length > 1 ? t[t.length - 2] : n, u = (s(e, "time", i, "pos") - s(e, "time", o, "pos")) / 2)), {
                left: d,
                right: u
            }
        }

        function f(e, t) {
            var n, a, r, i, o = [];
            for (n = 0, a = e.length; n < a; ++n) r = e[n], i = !!t && r === +p(r).startOf(t), o.push({
                value: r,
                major: i
            });
            return o
        }
        var p = n(809);
        p = "function" == typeof p ? p : window.moment;
        var y = n(820),
            M = n(815),
            g = Number.MIN_SAFE_INTEGER || -9007199254740991,
            v = Number.MAX_SAFE_INTEGER || 9007199254740991,
            b = {
                millisecond: {
                    major: !0,
                    size: 1,
                    steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                },
                second: {
                    major: !0,
                    size: 1e3,
                    steps: [1, 2, 5, 10, 30]
                },
                minute: {
                    major: !0,
                    size: 6e4,
                    steps: [1, 2, 5, 10, 30]
                },
                hour: {
                    major: !0,
                    size: 36e5,
                    steps: [1, 2, 3, 6, 12]
                },
                day: {
                    major: !0,
                    size: 864e5,
                    steps: [1, 2, 5]
                },
                week: {
                    major: !1,
                    size: 6048e5,
                    steps: [1, 2, 3, 4]
                },
                month: {
                    major: !0,
                    size: 2628e6,
                    steps: [1, 2, 3]
                },
                quarter: {
                    major: !1,
                    size: 7884e6,
                    steps: [1, 2, 3, 4]
                },
                year: {
                    major: !0,
                    size: 3154e7
                }
            },
            L = Object.keys(b);
        e.exports = function(e) {
            var t = {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                },
                n = e.Scale.extend({
                    initialize: function() {
                        if (!p) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                    },
                    update: function() {
                        var t = this,
                            n = t.options;
                        return n.time && n.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(t, arguments)
                    },
                    getRightValue: function(t) {
                        return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function() {
                        var e, t, n, i, o, s, d = this,
                            l = d.chart,
                            c = d.options.time,
                            m = u(c.min, d) || v,
                            _ = u(c.max, d) || g,
                            h = [],
                            f = [],
                            y = [];
                        for (e = 0, n = l.data.labels.length; e < n; ++e) y.push(u(l.data.labels[e], d));
                        for (e = 0, n = (l.data.datasets || []).length; e < n; ++e)
                            if (l.isDatasetVisible(e))
                                if (o = l.data.datasets[e].data, M.isObject(o[0]))
                                    for (f[e] = [], t = 0, i = o.length; t < i; ++t) s = u(o[t], d), h.push(s), f[e][t] = s;
                                else h.push.apply(h, y), f[e] = y.slice(0);
                        else f[e] = [];
                        y.length && (y = r(y).sort(a), m = Math.min(m, y[0]), _ = Math.max(_, y[y.length - 1])), h.length && (h = r(h).sort(a), m = Math.min(m, h[0]), _ = Math.max(_, h[h.length - 1])), m = m === v ? +p().startOf("day") : m, _ = _ === g ? +p().endOf("day") + 1 : _, d.min = Math.min(m, _), d.max = Math.max(m + 1, _), d._horizontal = d.isHorizontal(), d._table = [], d._timestamps = {
                            data: h,
                            datasets: f,
                            labels: y
                        }
                    },
                    buildTicks: function() {
                        var e, t, n, a = this,
                            r = a.min,
                            o = a.max,
                            s = a.options,
                            d = s.time,
                            l = d.displayFormats,
                            p = a.getLabelCapacity(r),
                            y = d.unit || c(d.minUnit, r, o, p),
                            M = m(y),
                            g = [],
                            v = [];
                        switch (s.ticks.source) {
                            case "data":
                                g = a._timestamps.data;
                                break;
                            case "labels":
                                g = a._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                g = _(r, o, y, M, p, s)
                        }
                        for ("ticks" === s.bounds && g.length && (r = g[0], o = g[g.length - 1]), r = u(d.min, a) || r, o = u(d.max, a) || o, e = 0, t = g.length; e < t; ++e)(n = g[e]) >= r && n <= o && v.push(n);
                        return a.min = r, a.max = o, a._unit = y, a._majorUnit = M, a._minorFormat = l[y], a._majorFormat = l[M], a._table = i(a._timestamps.data, r, o, s.distribution), a._offsets = h(a._table, v, r, o, s), f(v, M)
                    },
                    getLabelForIndex: function(e, t) {
                        var n = this,
                            a = n.chart.data,
                            r = n.options.time,
                            i = a.labels && e < a.labels.length ? a.labels[e] : "",
                            o = a.datasets[t].data[e];
                        return M.isObject(o) && (i = n.getRightValue(o)), r.tooltipFormat && (i = d(i, r).format(r.tooltipFormat)), i
                    },
                    tickFormatFunction: function(e, t, n) {
                        var a = this,
                            r = a.options,
                            i = e.valueOf(),
                            o = a._majorUnit,
                            s = a._majorFormat,
                            d = e.clone().startOf(a._majorUnit).valueOf(),
                            u = r.ticks.major,
                            l = u.enabled && o && s && i === d,
                            c = e.format(l ? s : a._minorFormat),
                            m = l ? u : r.ticks.minor,
                            _ = M.valueOrDefault(m.callback, m.userCallback);
                        return _ ? _(c, t, n) : c
                    },
                    convertTicksToLabels: function(e) {
                        var t, n, a = [];
                        for (t = 0, n = e.length; t < n; ++t) a.push(this.tickFormatFunction(p(e[t].value), t, e));
                        return a
                    },
                    getPixelForOffset: function(e) {
                        var t = this,
                            n = t._horizontal ? t.width : t.height,
                            a = t._horizontal ? t.left : t.top,
                            r = s(t._table, "time", e, "pos");
                        return a + n * (t._offsets.left + r) / (t._offsets.left + 1 + t._offsets.right)
                    },
                    getPixelForValue: function(e, t, n) {
                        var a = this,
                            r = null;
                        if (void 0 !== t && void 0 !== n && (r = a._timestamps.datasets[n][t]), null === r && (r = u(e, a)), null !== r) return a.getPixelForOffset(r)
                    },
                    getPixelForTick: function(e) {
                        var t = this.getTicks();
                        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            n = t._horizontal ? t.width : t.height,
                            a = t._horizontal ? t.left : t.top,
                            r = (n ? (e - a) / n : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                            i = s(t._table, "pos", r, "time");
                        return p(i)
                    },
                    getLabelWidth: function(e) {
                        var t = this,
                            n = t.options.ticks,
                            a = t.ctx.measureText(e).width,
                            r = M.toRadians(n.maxRotation),
                            i = Math.cos(r),
                            o = Math.sin(r);
                        return a * i + M.valueOrDefault(n.fontSize, y.global.defaultFontSize) * o
                    },
                    getLabelCapacity: function(e) {
                        var t = this;
                        t._minorFormat = t.options.time.displayFormats.millisecond;
                        var n = t.tickFormatFunction(p(e), 0, []),
                            a = t.getLabelWidth(n),
                            r = t.isHorizontal() ? t.width : t.height;
                        return Math.floor(r / a)
                    }
                });
            e.scaleService.registerScaleType("time", n, t)
        }
    },
    1535: function(e, t, n) {
        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        var i = {
            "./af": 1145,
            "./af.js": 1145,
            "./ar": 1146,
            "./ar-dz": 1147,
            "./ar-dz.js": 1147,
            "./ar-kw": 1148,
            "./ar-kw.js": 1148,
            "./ar-ly": 1149,
            "./ar-ly.js": 1149,
            "./ar-ma": 1150,
            "./ar-ma.js": 1150,
            "./ar-sa": 1151,
            "./ar-sa.js": 1151,
            "./ar-tn": 1152,
            "./ar-tn.js": 1152,
            "./ar.js": 1146,
            "./az": 1153,
            "./az.js": 1153,
            "./be": 1154,
            "./be.js": 1154,
            "./bg": 1155,
            "./bg.js": 1155,
            "./bn": 1156,
            "./bn.js": 1156,
            "./bo": 1157,
            "./bo.js": 1157,
            "./br": 1158,
            "./br.js": 1158,
            "./bs": 1159,
            "./bs.js": 1159,
            "./ca": 1160,
            "./ca.js": 1160,
            "./cs": 1161,
            "./cs.js": 1161,
            "./cv": 1162,
            "./cv.js": 1162,
            "./cy": 1163,
            "./cy.js": 1163,
            "./da": 1164,
            "./da.js": 1164,
            "./de": 1165,
            "./de-at": 1166,
            "./de-at.js": 1166,
            "./de-ch": 1167,
            "./de-ch.js": 1167,
            "./de.js": 1165,
            "./dv": 1168,
            "./dv.js": 1168,
            "./el": 1169,
            "./el.js": 1169,
            "./en-au": 1170,
            "./en-au.js": 1170,
            "./en-ca": 1171,
            "./en-ca.js": 1171,
            "./en-gb": 1172,
            "./en-gb.js": 1172,
            "./en-ie": 1173,
            "./en-ie.js": 1173,
            "./en-nz": 1174,
            "./en-nz.js": 1174,
            "./eo": 1175,
            "./eo.js": 1175,
            "./es": 1176,
            "./es-do": 1177,
            "./es-do.js": 1177,
            "./es.js": 1176,
            "./et": 1178,
            "./et.js": 1178,
            "./eu": 1179,
            "./eu.js": 1179,
            "./fa": 1180,
            "./fa.js": 1180,
            "./fi": 1181,
            "./fi.js": 1181,
            "./fo": 1182,
            "./fo.js": 1182,
            "./fr": 1183,
            "./fr-ca": 1184,
            "./fr-ca.js": 1184,
            "./fr-ch": 1185,
            "./fr-ch.js": 1185,
            "./fr.js": 1183,
            "./fy": 1186,
            "./fy.js": 1186,
            "./gd": 1187,
            "./gd.js": 1187,
            "./gl": 1188,
            "./gl.js": 1188,
            "./gom-latn": 1189,
            "./gom-latn.js": 1189,
            "./he": 1190,
            "./he.js": 1190,
            "./hi": 1191,
            "./hi.js": 1191,
            "./hr": 1192,
            "./hr.js": 1192,
            "./hu": 1193,
            "./hu.js": 1193,
            "./hy-am": 1194,
            "./hy-am.js": 1194,
            "./id": 1195,
            "./id.js": 1195,
            "./is": 1196,
            "./is.js": 1196,
            "./it": 1197,
            "./it.js": 1197,
            "./ja": 1198,
            "./ja.js": 1198,
            "./jv": 1199,
            "./jv.js": 1199,
            "./ka": 1200,
            "./ka.js": 1200,
            "./kk": 1201,
            "./kk.js": 1201,
            "./km": 1202,
            "./km.js": 1202,
            "./kn": 1203,
            "./kn.js": 1203,
            "./ko": 1204,
            "./ko.js": 1204,
            "./ky": 1205,
            "./ky.js": 1205,
            "./lb": 1206,
            "./lb.js": 1206,
            "./lo": 1207,
            "./lo.js": 1207,
            "./lt": 1208,
            "./lt.js": 1208,
            "./lv": 1209,
            "./lv.js": 1209,
            "./me": 1210,
            "./me.js": 1210,
            "./mi": 1211,
            "./mi.js": 1211,
            "./mk": 1212,
            "./mk.js": 1212,
            "./ml": 1213,
            "./ml.js": 1213,
            "./mr": 1214,
            "./mr.js": 1214,
            "./ms": 1215,
            "./ms-my": 1216,
            "./ms-my.js": 1216,
            "./ms.js": 1215,
            "./my": 1217,
            "./my.js": 1217,
            "./nb": 1218,
            "./nb.js": 1218,
            "./ne": 1219,
            "./ne.js": 1219,
            "./nl": 1220,
            "./nl-be": 1221,
            "./nl-be.js": 1221,
            "./nl.js": 1220,
            "./nn": 1222,
            "./nn.js": 1222,
            "./pa-in": 1223,
            "./pa-in.js": 1223,
            "./pl": 1224,
            "./pl.js": 1224,
            "./pt": 1225,
            "./pt-br": 1226,
            "./pt-br.js": 1226,
            "./pt.js": 1225,
            "./ro": 1227,
            "./ro.js": 1227,
            "./ru": 1228,
            "./ru.js": 1228,
            "./sd": 1229,
            "./sd.js": 1229,
            "./se": 1230,
            "./se.js": 1230,
            "./si": 1231,
            "./si.js": 1231,
            "./sk": 1232,
            "./sk.js": 1232,
            "./sl": 1233,
            "./sl.js": 1233,
            "./sq": 1234,
            "./sq.js": 1234,
            "./sr": 1235,
            "./sr-cyrl": 1236,
            "./sr-cyrl.js": 1236,
            "./sr.js": 1235,
            "./ss": 1237,
            "./ss.js": 1237,
            "./sv": 1238,
            "./sv.js": 1238,
            "./sw": 1239,
            "./sw.js": 1239,
            "./ta": 1240,
            "./ta.js": 1240,
            "./te": 1241,
            "./te.js": 1241,
            "./tet": 1242,
            "./tet.js": 1242,
            "./th": 1243,
            "./th.js": 1243,
            "./tl-ph": 1244,
            "./tl-ph.js": 1244,
            "./tlh": 1245,
            "./tlh.js": 1245,
            "./tr": 1246,
            "./tr.js": 1246,
            "./tzl": 1247,
            "./tzl.js": 1247,
            "./tzm": 1248,
            "./tzm-latn": 1249,
            "./tzm-latn.js": 1249,
            "./tzm.js": 1248,
            "./uk": 1250,
            "./uk.js": 1250,
            "./ur": 1251,
            "./ur.js": 1251,
            "./uz": 1252,
            "./uz-latn": 1253,
            "./uz-latn.js": 1253,
            "./uz.js": 1252,
            "./vi": 1254,
            "./vi.js": 1254,
            "./x-pseudo": 1255,
            "./x-pseudo.js": 1255,
            "./yo": 1256,
            "./yo.js": 1256,
            "./zh-cn": 1257,
            "./zh-cn.js": 1257,
            "./zh-hk": 1258,
            "./zh-hk.js": 1258,
            "./zh-tw": 1259,
            "./zh-tw.js": 1259
        };
        a.keys = function() {
            return Object.keys(i)
        }, a.resolve = r, e.exports = a, a.id = 1535
    },
    1536: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(878),
            i = n(815);
        a._set("bar", {
            hover: {
                mode: "label"
            },
            scales: {
                xAxes: [{
                    type: "category",
                    categoryPercentage: .8,
                    barPercentage: .9,
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }],
                yAxes: [{
                    type: "linear"
                }]
            }
        }), a._set("horizontalBar", {
            hover: {
                mode: "index",
                axis: "y"
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom"
                }],
                yAxes: [{
                    position: "left",
                    type: "category",
                    categoryPercentage: .8,
                    barPercentage: .9,
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }]
            },
            elements: {
                rectangle: {
                    borderSkipped: "left"
                }
            },
            tooltips: {
                callbacks: {
                    title: function(e, t) {
                        var n = "";
                        return e.length > 0 && (e[0].yLabel ? n = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (n = t.labels[e[0].index])), n
                    },
                    label: function(e, t) {
                        return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
                    }
                },
                mode: "index",
                axis: "y"
            }
        }), e.exports = function(e) {
            e.controllers.bar = e.DatasetController.extend({
                dataElementType: r.Rectangle,
                initialize: function() {
                    var t, n = this;
                    e.DatasetController.prototype.initialize.apply(n, arguments), t = n.getMeta(), t.stack = n.getDataset().stack, t.bar = !0
                },
                update: function(e) {
                    var t, n, a = this,
                        r = a.getMeta().data;
                    for (a._ruler = a.getRuler(), t = 0, n = r.length; t < n; ++t) a.updateElement(r[t], t, e)
                },
                updateElement: function(e, t, n) {
                    var a = this,
                        r = a.chart,
                        o = a.getMeta(),
                        s = a.getDataset(),
                        d = e.custom || {},
                        u = r.options.elements.rectangle;
                    e._xScale = a.getScaleForId(o.xAxisID), e._yScale = a.getScaleForId(o.yAxisID), e._datasetIndex = a.index, e._index = t, e._model = {
                        datasetLabel: s.label,
                        label: r.data.labels[t],
                        borderSkipped: d.borderSkipped ? d.borderSkipped : u.borderSkipped,
                        backgroundColor: d.backgroundColor ? d.backgroundColor : i.valueAtIndexOrDefault(s.backgroundColor, t, u.backgroundColor),
                        borderColor: d.borderColor ? d.borderColor : i.valueAtIndexOrDefault(s.borderColor, t, u.borderColor),
                        borderWidth: d.borderWidth ? d.borderWidth : i.valueAtIndexOrDefault(s.borderWidth, t, u.borderWidth)
                    }, a.updateElementGeometry(e, t, n), e.pivot()
                },
                updateElementGeometry: function(e, t, n) {
                    var a = this,
                        r = e._model,
                        i = a.getValueScale(),
                        o = i.getBasePixel(),
                        s = i.isHorizontal(),
                        d = a._ruler || a.getRuler(),
                        u = a.calculateBarValuePixels(a.index, t),
                        l = a.calculateBarIndexPixels(a.index, t, d);
                    r.horizontal = s, r.base = n ? o : u.base, r.x = s ? n ? o : u.head : l.center, r.y = s ? l.center : n ? o : u.head, r.height = s ? l.size : void 0, r.width = s ? void 0 : l.size
                },
                getValueScaleId: function() {
                    return this.getMeta().yAxisID
                },
                getIndexScaleId: function() {
                    return this.getMeta().xAxisID
                },
                getValueScale: function() {
                    return this.getScaleForId(this.getValueScaleId())
                },
                getIndexScale: function() {
                    return this.getScaleForId(this.getIndexScaleId())
                },
                getStackCount: function(e) {
                    var t, n, a = this,
                        r = a.chart,
                        i = a.getIndexScale(),
                        o = i.options.stacked,
                        s = void 0 === e ? r.data.datasets.length : e + 1,
                        d = [];
                    for (t = 0; t < s; ++t) n = r.getDatasetMeta(t), n.bar && r.isDatasetVisible(t) && (!1 === o || !0 === o && -1 === d.indexOf(n.stack) || void 0 === o && (void 0 === n.stack || -1 === d.indexOf(n.stack))) && d.push(n.stack);
                    return d.length
                },
                getStackIndex: function(e) {
                    return this.getStackCount(e) - 1
                },
                getRuler: function() {
                    var e, t, n = this,
                        a = n.getIndexScale(),
                        r = n.getStackCount(),
                        i = n.index,
                        o = [],
                        s = a.isHorizontal(),
                        d = s ? a.left : a.top,
                        u = d + (s ? a.width : a.height);
                    for (e = 0, t = n.getMeta().data.length; e < t; ++e) o.push(a.getPixelForValue(null, e, i));
                    return {
                        pixels: o,
                        start: d,
                        end: u,
                        stackCount: r,
                        scale: a
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var n, a, r, i, o, s, d = this,
                        u = d.chart,
                        l = d.getMeta(),
                        c = d.getValueScale(),
                        m = u.data.datasets,
                        _ = c.getRightValue(m[e].data[t]),
                        h = c.options.stacked,
                        f = l.stack,
                        p = 0;
                    if (h || void 0 === h && void 0 !== f)
                        for (n = 0; n < e; ++n) a = u.getDatasetMeta(n), a.bar && a.stack === f && a.controller.getValueScaleId() === c.id && u.isDatasetVisible(n) && (r = c.getRightValue(m[n].data[t]), (_ < 0 && r < 0 || _ >= 0 && r > 0) && (p += r));
                    return i = c.getPixelForValue(p), o = c.getPixelForValue(p + _), s = (o - i) / 2, {
                        size: s,
                        base: i,
                        head: o,
                        center: o + s / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, n) {
                    var a, r, o, s, d, u, l = this,
                        c = n.scale.options,
                        m = l.getStackIndex(e),
                        _ = n.pixels,
                        h = _[t],
                        f = _.length,
                        p = n.start,
                        y = n.end;
                    return 1 === f ? (a = h > p ? h - p : y - h, r = h < y ? y - h : h - p) : (t > 0 && (a = (h - _[t - 1]) / 2, t === f - 1 && (r = a)), t < f - 1 && (r = (_[t + 1] - h) / 2, 0 === t && (a = r))), o = a * c.categoryPercentage, s = r * c.categoryPercentage, d = (o + s) / n.stackCount, u = d * c.barPercentage, u = Math.min(i.valueOrDefault(c.barThickness, u), i.valueOrDefault(c.maxBarThickness, 1 / 0)), h -= o, h += d * m, h += (d - u) / 2, {
                        size: u,
                        base: h,
                        head: h + u,
                        center: h + u / 2
                    }
                },
                draw: function() {
                    var e = this,
                        t = e.chart,
                        n = e.getValueScale(),
                        a = e.getMeta().data,
                        r = e.getDataset(),
                        o = a.length,
                        s = 0;
                    for (i.canvas.clipArea(t.ctx, t.chartArea); s < o; ++s) isNaN(n.getRightValue(r.data[s])) || a[s].draw();
                    i.canvas.unclipArea(t.ctx)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        a = e.custom || {},
                        r = e._model;
                    r.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : i.valueAtIndexOrDefault(t.hoverBackgroundColor, n, i.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor ? a.hoverBorderColor : i.valueAtIndexOrDefault(t.hoverBorderColor, n, i.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : i.valueAtIndexOrDefault(t.hoverBorderWidth, n, r.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        a = e.custom || {},
                        r = e._model,
                        o = this.chart.options.elements.rectangle;
                    r.backgroundColor = a.backgroundColor ? a.backgroundColor : i.valueAtIndexOrDefault(t.backgroundColor, n, o.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : i.valueAtIndexOrDefault(t.borderColor, n, o.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : i.valueAtIndexOrDefault(t.borderWidth, n, o.borderWidth)
                }
            }), e.controllers.horizontalBar = e.controllers.bar.extend({
                getValueScaleId: function() {
                    return this.getMeta().xAxisID
                },
                getIndexScaleId: function() {
                    return this.getMeta().yAxisID
                }
            })
        }
    },
    1537: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(878),
            i = n(815);
        a._set("bubble", {
            hover: {
                mode: "single"
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom",
                    id: "x-axis-0"
                }],
                yAxes: [{
                    type: "linear",
                    position: "left",
                    id: "y-axis-0"
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e, t) {
                        var n = t.datasets[e.datasetIndex].label || "",
                            a = t.datasets[e.datasetIndex].data[e.index];
                        return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + a.r + ")"
                    }
                }
            }
        }), e.exports = function(e) {
            e.controllers.bubble = e.DatasetController.extend({
                dataElementType: r.Point,
                update: function(e) {
                    var t = this,
                        n = t.getMeta(),
                        a = n.data;
                    i.each(a, function(n, a) {
                        t.updateElement(n, a, e)
                    })
                },
                updateElement: function(e, t, n) {
                    var a = this,
                        r = a.getMeta(),
                        i = e.custom || {},
                        o = a.getScaleForId(r.xAxisID),
                        s = a.getScaleForId(r.yAxisID),
                        d = a._resolveElementOptions(e, t),
                        u = a.getDataset().data[t],
                        l = a.index,
                        c = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, t, l),
                        m = n ? s.getBasePixel() : s.getPixelForValue(u, t, l);
                    e._xScale = o, e._yScale = s, e._options = d, e._datasetIndex = l, e._index = t, e._model = {
                        backgroundColor: d.backgroundColor,
                        borderColor: d.borderColor,
                        borderWidth: d.borderWidth,
                        hitRadius: d.hitRadius,
                        pointStyle: d.pointStyle,
                        radius: n ? 0 : d.radius,
                        skip: i.skip || isNaN(c) || isNaN(m),
                        x: c,
                        y: m
                    }, e.pivot()
                },
                setHoverStyle: function(e) {
                    var t = e._model,
                        n = e._options;
                    t.backgroundColor = i.valueOrDefault(n.hoverBackgroundColor, i.getHoverColor(n.backgroundColor)), t.borderColor = i.valueOrDefault(n.hoverBorderColor, i.getHoverColor(n.borderColor)), t.borderWidth = i.valueOrDefault(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
                },
                removeHoverStyle: function(e) {
                    var t = e._model,
                        n = e._options;
                    t.backgroundColor = n.backgroundColor, t.borderColor = n.borderColor, t.borderWidth = n.borderWidth, t.radius = n.radius
                },
                _resolveElementOptions: function(e, t) {
                    var n, a, r, o = this,
                        s = o.chart,
                        d = s.data.datasets,
                        u = d[o.index],
                        l = e.custom || {},
                        c = s.options.elements.point,
                        m = i.options.resolve,
                        _ = u.data[t],
                        h = {},
                        f = {
                            chart: s,
                            dataIndex: t,
                            dataset: u,
                            datasetIndex: o.index
                        },
                        p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                    for (n = 0, a = p.length; n < a; ++n) r = p[n], h[r] = m([l[r], u[r], c[r]], f, t);
                    return h.radius = m([l.radius, _ ? _.r : void 0, u.radius, c.radius], f, t), h
                }
            })
        }
    },
    1538: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(878),
            i = n(815);
        a._set("doughnut", {
            animation: {
                animateRotate: !0,
                animateScale: !1
            },
            hover: {
                mode: "single"
            },
            legendCallback: function(e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                var n = e.data,
                    a = n.datasets,
                    r = n.labels;
                if (a.length)
                    for (var i = 0; i < a[0].data.length; ++i) t.push('<li><span style="background-color:' + a[0].backgroundColor[i] + '"></span>'), r[i] && t.push(r[i]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) {
                            var r = e.getDatasetMeta(0),
                                o = t.datasets[0],
                                s = r.data[a],
                                d = s && s.custom || {},
                                u = i.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: n,
                                fillStyle: d.backgroundColor ? d.backgroundColor : u(o.backgroundColor, a, l.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : u(o.borderColor, a, l.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : u(o.borderWidth, a, l.borderWidth),
                                hidden: isNaN(o.data[a]) || r.data[a].hidden,
                                index: a
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var n, a, r, i = t.index,
                        o = this.chart;
                    for (n = 0, a = (o.data.datasets || []).length; n < a; ++n) r = o.getDatasetMeta(n), r.data[i] && (r.data[i].hidden = !r.data[i].hidden);
                    o.update()
                }
            },
            cutoutPercentage: 50,
            rotation: -.5 * Math.PI,
            circumference: 2 * Math.PI,
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e, t) {
                        var n = t.labels[e.index],
                            a = ": " + t.datasets[e.datasetIndex].data[e.index];
                        return i.isArray(n) ? (n = n.slice(), n[0] += a) : n += a, n
                    }
                }
            }
        }), a._set("pie", i.clone(a.doughnut)), a._set("pie", {
            cutoutPercentage: 0
        }), e.exports = function(e) {
            e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                dataElementType: r.Arc,
                linkScales: i.noop,
                getRingIndex: function(e) {
                    for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
                    return t
                },
                update: function(e) {
                    var t = this,
                        n = t.chart,
                        a = n.chartArea,
                        r = n.options,
                        o = r.elements.arc,
                        s = a.right - a.left - o.borderWidth,
                        d = a.bottom - a.top - o.borderWidth,
                        u = Math.min(s, d),
                        l = {
                            x: 0,
                            y: 0
                        },
                        c = t.getMeta(),
                        m = r.cutoutPercentage,
                        _ = r.circumference;
                    if (_ < 2 * Math.PI) {
                        var h = r.rotation % (2 * Math.PI);
                        h += 2 * Math.PI * (h >= Math.PI ? -1 : h < -Math.PI ? 1 : 0);
                        var f = h + _,
                            p = {
                                x: Math.cos(h),
                                y: Math.sin(h)
                            },
                            y = {
                                x: Math.cos(f),
                                y: Math.sin(f)
                            },
                            M = h <= 0 && f >= 0 || h <= 2 * Math.PI && 2 * Math.PI <= f,
                            g = h <= .5 * Math.PI && .5 * Math.PI <= f || h <= 2.5 * Math.PI && 2.5 * Math.PI <= f,
                            v = h <= -Math.PI && -Math.PI <= f || h <= Math.PI && Math.PI <= f,
                            b = h <= .5 * -Math.PI && .5 * -Math.PI <= f || h <= 1.5 * Math.PI && 1.5 * Math.PI <= f,
                            L = m / 100,
                            Y = {
                                x: v ? -1 : Math.min(p.x * (p.x < 0 ? 1 : L), y.x * (y.x < 0 ? 1 : L)),
                                y: b ? -1 : Math.min(p.y * (p.y < 0 ? 1 : L), y.y * (y.y < 0 ? 1 : L))
                            },
                            k = {
                                x: M ? 1 : Math.max(p.x * (p.x > 0 ? 1 : L), y.x * (y.x > 0 ? 1 : L)),
                                y: g ? 1 : Math.max(p.y * (p.y > 0 ? 1 : L), y.y * (y.y > 0 ? 1 : L))
                            },
                            D = {
                                width: .5 * (k.x - Y.x),
                                height: .5 * (k.y - Y.y)
                            };
                        u = Math.min(s / D.width, d / D.height), l = {
                            x: -.5 * (k.x + Y.x),
                            y: -.5 * (k.y + Y.y)
                        }
                    }
                    n.borderWidth = t.getMaxBorderWidth(c.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(m ? n.outerRadius / 100 * m : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = l.x * n.outerRadius, n.offsetY = l.y * n.outerRadius, c.total = t.calculateTotal(), t.outerRadius = n.outerRadius - n.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - n.radiusLength, 0), i.each(c.data, function(n, a) {
                        t.updateElement(n, a, e)
                    })
                },
                updateElement: function(e, t, n) {
                    var a = this,
                        r = a.chart,
                        o = r.chartArea,
                        s = r.options,
                        d = s.animation,
                        u = (o.left + o.right) / 2,
                        l = (o.top + o.bottom) / 2,
                        c = s.rotation,
                        m = s.rotation,
                        _ = a.getDataset(),
                        h = n && d.animateRotate ? 0 : e.hidden ? 0 : a.calculateCircumference(_.data[t]) * (s.circumference / (2 * Math.PI)),
                        f = n && d.animateScale ? 0 : a.innerRadius,
                        p = n && d.animateScale ? 0 : a.outerRadius,
                        y = i.valueAtIndexOrDefault;
                    i.extend(e, {
                        _datasetIndex: a.index,
                        _index: t,
                        _model: {
                            x: u + r.offsetX,
                            y: l + r.offsetY,
                            startAngle: c,
                            endAngle: m,
                            circumference: h,
                            outerRadius: p,
                            innerRadius: f,
                            label: y(_.label, t, r.data.labels[t])
                        }
                    });
                    var M = e._model;
                    this.removeHoverStyle(e), n && d.animateRotate || (M.startAngle = 0 === t ? s.rotation : a.getMeta().data[t - 1]._model.endAngle, M.endAngle = M.startAngle + M.circumference), e.pivot()
                },
                removeHoverStyle: function(t) {
                    e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                },
                calculateTotal: function() {
                    var e, t = this.getDataset(),
                        n = this.getMeta(),
                        a = 0;
                    return i.each(n.data, function(n, r) {
                        e = t.data[r], isNaN(e) || n.hidden || (a += Math.abs(e))
                    }), a
                },
                calculateCircumference: function(e) {
                    var t = this.getMeta().total;
                    return t > 0 && !isNaN(e) ? 2 * Math.PI * (e / t) : 0
                },
                getMaxBorderWidth: function(e) {
                    for (var t, n, a = 0, r = this.index, i = e.length, o = 0; o < i; o++) t = e[o]._model ? e[o]._model.borderWidth : 0, n = e[o]._chart ? e[o]._chart.config.data.datasets[r].hoverBorderWidth : 0, a = t > a ? t : a, a = n > a ? n : a;
                    return a
                }
            })
        }
    },
    1539: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(878),
            i = n(815);
        a._set("line", {
            showLines: !0,
            spanGaps: !1,
            hover: {
                mode: "label"
            },
            scales: {
                xAxes: [{
                    type: "category",
                    id: "x-axis-0"
                }],
                yAxes: [{
                    type: "linear",
                    id: "y-axis-0"
                }]
            }
        }), e.exports = function(e) {
            function t(e, t) {
                return i.valueOrDefault(e.showLine, t.showLines)
            }
            e.controllers.line = e.DatasetController.extend({
                datasetElementType: r.Line,
                dataElementType: r.Point,
                update: function(e) {
                    var n, a, r, o = this,
                        s = o.getMeta(),
                        d = s.dataset,
                        u = s.data || [],
                        l = o.chart.options,
                        c = l.elements.line,
                        m = o.getScaleForId(s.yAxisID),
                        _ = o.getDataset(),
                        h = t(_, l);
                    for (h && (r = d.custom || {}, void 0 !== _.tension && void 0 === _.lineTension && (_.lineTension = _.tension), d._scale = m, d._datasetIndex = o.index, d._children = u, d._model = {
                            spanGaps: _.spanGaps ? _.spanGaps : l.spanGaps,
                            tension: r.tension ? r.tension : i.valueOrDefault(_.lineTension, c.tension),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : _.backgroundColor || c.backgroundColor,
                            borderWidth: r.borderWidth ? r.borderWidth : _.borderWidth || c.borderWidth,
                            borderColor: r.borderColor ? r.borderColor : _.borderColor || c.borderColor,
                            borderCapStyle: r.borderCapStyle ? r.borderCapStyle : _.borderCapStyle || c.borderCapStyle,
                            borderDash: r.borderDash ? r.borderDash : _.borderDash || c.borderDash,
                            borderDashOffset: r.borderDashOffset ? r.borderDashOffset : _.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : _.borderJoinStyle || c.borderJoinStyle,
                            fill: r.fill ? r.fill : void 0 !== _.fill ? _.fill : c.fill,
                            steppedLine: r.steppedLine ? r.steppedLine : i.valueOrDefault(_.steppedLine, c.stepped),
                            cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : i.valueOrDefault(_.cubicInterpolationMode, c.cubicInterpolationMode)
                        }, d.pivot()), n = 0, a = u.length; n < a; ++n) o.updateElement(u[n], n, e);
                    for (h && 0 !== d._model.tension && o.updateBezierControlPoints(), n = 0, a = u.length; n < a; ++n) u[n].pivot()
                },
                getPointBackgroundColor: function(e, t) {
                    var n = this.chart.options.elements.point.backgroundColor,
                        a = this.getDataset(),
                        r = e.custom || {};
                    return r.backgroundColor ? n = r.backgroundColor : a.pointBackgroundColor ? n = i.valueAtIndexOrDefault(a.pointBackgroundColor, t, n) : a.backgroundColor && (n = a.backgroundColor), n
                },
                getPointBorderColor: function(e, t) {
                    var n = this.chart.options.elements.point.borderColor,
                        a = this.getDataset(),
                        r = e.custom || {};
                    return r.borderColor ? n = r.borderColor : a.pointBorderColor ? n = i.valueAtIndexOrDefault(a.pointBorderColor, t, n) : a.borderColor && (n = a.borderColor), n
                },
                getPointBorderWidth: function(e, t) {
                    var n = this.chart.options.elements.point.borderWidth,
                        a = this.getDataset(),
                        r = e.custom || {};
                    return isNaN(r.borderWidth) ? !isNaN(a.pointBorderWidth) || i.isArray(a.pointBorderWidth) ? n = i.valueAtIndexOrDefault(a.pointBorderWidth, t, n) : isNaN(a.borderWidth) || (n = a.borderWidth) : n = r.borderWidth, n
                },
                updateElement: function(e, t, n) {
                    var a, r, o = this,
                        s = o.getMeta(),
                        d = e.custom || {},
                        u = o.getDataset(),
                        l = o.index,
                        c = u.data[t],
                        m = o.getScaleForId(s.yAxisID),
                        _ = o.getScaleForId(s.xAxisID),
                        h = o.chart.options.elements.point;
                    void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), a = _.getPixelForValue("object" == typeof c ? c : NaN, t, l), r = n ? m.getBasePixel() : o.calculatePointY(c, t, l), e._xScale = _, e._yScale = m, e._datasetIndex = l, e._index = t, e._model = {
                        x: a,
                        y: r,
                        skip: d.skip || isNaN(a) || isNaN(r),
                        radius: d.radius || i.valueAtIndexOrDefault(u.pointRadius, t, h.radius),
                        pointStyle: d.pointStyle || i.valueAtIndexOrDefault(u.pointStyle, t, h.pointStyle),
                        backgroundColor: o.getPointBackgroundColor(e, t),
                        borderColor: o.getPointBorderColor(e, t),
                        borderWidth: o.getPointBorderWidth(e, t),
                        tension: s.dataset._model ? s.dataset._model.tension : 0,
                        steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                        hitRadius: d.hitRadius || i.valueAtIndexOrDefault(u.pointHitRadius, t, h.hitRadius)
                    }
                },
                calculatePointY: function(e, t, n) {
                    var a, r, i, o = this,
                        s = o.chart,
                        d = o.getMeta(),
                        u = o.getScaleForId(d.yAxisID),
                        l = 0,
                        c = 0;
                    if (u.options.stacked) {
                        for (a = 0; a < n; a++)
                            if (r = s.data.datasets[a], i = s.getDatasetMeta(a), "line" === i.type && i.yAxisID === u.id && s.isDatasetVisible(a)) {
                                var m = Number(u.getRightValue(r.data[t]));
                                m < 0 ? c += m || 0 : l += m || 0
                            }
                        var _ = Number(u.getRightValue(e));
                        return _ < 0 ? u.getPixelForValue(c + _) : u.getPixelForValue(l + _)
                    }
                    return u.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    function e(e, t, n) {
                        return Math.max(Math.min(e, n), t)
                    }
                    var t, n, a, r, o, s = this,
                        d = s.getMeta(),
                        u = s.chart.chartArea,
                        l = d.data || [];
                    if (d.dataset._model.spanGaps && (l = l.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === d.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(l);
                    else
                        for (t = 0, n = l.length; t < n; ++t) a = l[t], r = a._model, o = i.splineCurve(i.previousItem(l, t)._model, r, i.nextItem(l, t)._model, d.dataset._model.tension), r.controlPointPreviousX = o.previous.x, r.controlPointPreviousY = o.previous.y, r.controlPointNextX = o.next.x, r.controlPointNextY = o.next.y;
                    if (s.chart.options.elements.line.capBezierPoints)
                        for (t = 0, n = l.length; t < n; ++t) r = l[t]._model, r.controlPointPreviousX = e(r.controlPointPreviousX, u.left, u.right), r.controlPointPreviousY = e(r.controlPointPreviousY, u.top, u.bottom), r.controlPointNextX = e(r.controlPointNextX, u.left, u.right), r.controlPointNextY = e(r.controlPointNextY, u.top, u.bottom)
                },
                draw: function() {
                    var e = this,
                        n = e.chart,
                        a = e.getMeta(),
                        r = a.data || [],
                        o = n.chartArea,
                        s = r.length,
                        d = 0;
                    for (i.canvas.clipArea(n.ctx, o), t(e.getDataset(), n.options) && a.dataset.draw(), i.canvas.unclipArea(n.ctx); d < s; ++d) r[d].draw(o)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        a = e.custom || {},
                        r = e._model;
                    r.radius = a.hoverRadius || i.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = a.hoverBackgroundColor || i.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, i.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor || i.valueAtIndexOrDefault(t.pointHoverBorderColor, n, i.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth || i.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, r.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this,
                        n = t.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        r = e.custom || {},
                        o = e._model;
                    void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), o.radius = r.radius || i.valueAtIndexOrDefault(n.pointRadius, a, t.chart.options.elements.point.radius), o.backgroundColor = t.getPointBackgroundColor(e, a), o.borderColor = t.getPointBorderColor(e, a), o.borderWidth = t.getPointBorderWidth(e, a)
                }
            })
        }
    },
    1540: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(878),
            i = n(815);
        a._set("polarArea", {
            scale: {
                type: "radialLinear",
                angleLines: {
                    display: !1
                },
                gridLines: {
                    circular: !0
                },
                pointLabels: {
                    display: !1
                },
                ticks: {
                    beginAtZero: !0
                }
            },
            animation: {
                animateRotate: !0,
                animateScale: !0
            },
            startAngle: -.5 * Math.PI,
            legendCallback: function(e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                var n = e.data,
                    a = n.datasets,
                    r = n.labels;
                if (a.length)
                    for (var i = 0; i < a[0].data.length; ++i) t.push('<li><span style="background-color:' + a[0].backgroundColor[i] + '"></span>'), r[i] && t.push(r[i]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) {
                            var r = e.getDatasetMeta(0),
                                o = t.datasets[0],
                                s = r.data[a],
                                d = s.custom || {},
                                u = i.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: n,
                                fillStyle: d.backgroundColor ? d.backgroundColor : u(o.backgroundColor, a, l.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : u(o.borderColor, a, l.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : u(o.borderWidth, a, l.borderWidth),
                                hidden: isNaN(o.data[a]) || r.data[a].hidden,
                                index: a
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var n, a, r, i = t.index,
                        o = this.chart;
                    for (n = 0, a = (o.data.datasets || []).length; n < a; ++n) r = o.getDatasetMeta(n), r.data[i].hidden = !r.data[i].hidden;
                    o.update()
                }
            },
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e, t) {
                        return t.labels[e.index] + ": " + e.yLabel
                    }
                }
            }
        }), e.exports = function(e) {
            e.controllers.polarArea = e.DatasetController.extend({
                dataElementType: r.Arc,
                linkScales: i.noop,
                update: function(e) {
                    var t = this,
                        n = t.chart,
                        a = n.chartArea,
                        r = t.getMeta(),
                        o = n.options,
                        s = o.elements.arc,
                        d = Math.min(a.right - a.left, a.bottom - a.top);
                    n.outerRadius = Math.max((d - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(o.cutoutPercentage ? n.outerRadius / 100 * o.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), t.outerRadius = n.outerRadius - n.radiusLength * t.index, t.innerRadius = t.outerRadius - n.radiusLength, r.count = t.countVisibleElements(), i.each(r.data, function(n, a) {
                        t.updateElement(n, a, e)
                    })
                },
                updateElement: function(e, t, n) {
                    for (var a = this, r = a.chart, o = a.getDataset(), s = r.options, d = s.animation, u = r.scale, l = r.data.labels, c = a.calculateCircumference(o.data[t]), m = u.xCenter, _ = u.yCenter, h = 0, f = a.getMeta(), p = 0; p < t; ++p) isNaN(o.data[p]) || f.data[p].hidden || ++h;
                    var y = s.startAngle,
                        M = e.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[t]),
                        g = y + c * h,
                        v = g + (e.hidden ? 0 : c),
                        b = d.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[t]);
                    i.extend(e, {
                        _datasetIndex: a.index,
                        _index: t,
                        _scale: u,
                        _model: {
                            x: m,
                            y: _,
                            innerRadius: 0,
                            outerRadius: n ? b : M,
                            startAngle: n && d.animateRotate ? y : g,
                            endAngle: n && d.animateRotate ? y : v,
                            label: i.valueAtIndexOrDefault(l, t, l[t])
                        }
                    }), a.removeHoverStyle(e), e.pivot()
                },
                removeHoverStyle: function(t) {
                    e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                },
                countVisibleElements: function() {
                    var e = this.getDataset(),
                        t = this.getMeta(),
                        n = 0;
                    return i.each(t.data, function(t, a) {
                        isNaN(e.data[a]) || t.hidden || n++
                    }), n
                },
                calculateCircumference: function(e) {
                    var t = this.getMeta().count;
                    return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
                }
            })
        }
    },
    1541: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(878),
            i = n(815);
        a._set("radar", {
            scale: {
                type: "radialLinear"
            },
            elements: {
                line: {
                    tension: 0
                }
            }
        }), e.exports = function(e) {
            e.controllers.radar = e.DatasetController.extend({
                datasetElementType: r.Line,
                dataElementType: r.Point,
                linkScales: i.noop,
                update: function(e) {
                    var t = this,
                        n = t.getMeta(),
                        a = n.dataset,
                        r = n.data,
                        o = a.custom || {},
                        s = t.getDataset(),
                        d = t.chart.options.elements.line,
                        u = t.chart.scale;
                    void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), i.extend(n.dataset, {
                        _datasetIndex: t.index,
                        _scale: u,
                        _children: r,
                        _loop: !0,
                        _model: {
                            tension: o.tension ? o.tension : i.valueOrDefault(s.lineTension, d.tension),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || d.backgroundColor,
                            borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || d.borderWidth,
                            borderColor: o.borderColor ? o.borderColor : s.borderColor || d.borderColor,
                            fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : d.fill,
                            borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || d.borderCapStyle,
                            borderDash: o.borderDash ? o.borderDash : s.borderDash || d.borderDash,
                            borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || d.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || d.borderJoinStyle
                        }
                    }), n.dataset.pivot(), i.each(r, function(n, a) {
                        t.updateElement(n, a, e)
                    }, t), t.updateBezierControlPoints()
                },
                updateElement: function(e, t, n) {
                    var a = this,
                        r = e.custom || {},
                        o = a.getDataset(),
                        s = a.chart.scale,
                        d = a.chart.options.elements.point,
                        u = s.getPointPositionForValue(t, o.data[t]);
                    void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), i.extend(e, {
                        _datasetIndex: a.index,
                        _index: t,
                        _scale: s,
                        _model: {
                            x: n ? s.xCenter : u.x,
                            y: n ? s.yCenter : u.y,
                            tension: r.tension ? r.tension : i.valueOrDefault(o.lineTension, a.chart.options.elements.line.tension),
                            radius: r.radius ? r.radius : i.valueAtIndexOrDefault(o.pointRadius, t, d.radius),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : i.valueAtIndexOrDefault(o.pointBackgroundColor, t, d.backgroundColor),
                            borderColor: r.borderColor ? r.borderColor : i.valueAtIndexOrDefault(o.pointBorderColor, t, d.borderColor),
                            borderWidth: r.borderWidth ? r.borderWidth : i.valueAtIndexOrDefault(o.pointBorderWidth, t, d.borderWidth),
                            pointStyle: r.pointStyle ? r.pointStyle : i.valueAtIndexOrDefault(o.pointStyle, t, d.pointStyle),
                            hitRadius: r.hitRadius ? r.hitRadius : i.valueAtIndexOrDefault(o.pointHitRadius, t, d.hitRadius)
                        }
                    }), e._model.skip = r.skip ? r.skip : isNaN(e._model.x) || isNaN(e._model.y)
                },
                updateBezierControlPoints: function() {
                    var e = this.chart.chartArea,
                        t = this.getMeta();
                    i.each(t.data, function(n, a) {
                        var r = n._model,
                            o = i.splineCurve(i.previousItem(t.data, a, !0)._model, r, i.nextItem(t.data, a, !0)._model, r.tension);
                        r.controlPointPreviousX = Math.max(Math.min(o.previous.x, e.right), e.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, e.bottom), e.top), r.controlPointNextX = Math.max(Math.min(o.next.x, e.right), e.left), r.controlPointNextY = Math.max(Math.min(o.next.y, e.bottom), e.top), n.pivot()
                    })
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e.custom || {},
                        a = e._index,
                        r = e._model;
                    r.radius = n.hoverRadius ? n.hoverRadius : i.valueAtIndexOrDefault(t.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : i.valueAtIndexOrDefault(t.pointHoverBackgroundColor, a, i.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : i.valueAtIndexOrDefault(t.pointHoverBorderColor, a, i.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : i.valueAtIndexOrDefault(t.pointHoverBorderWidth, a, r.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e.custom || {},
                        a = e._index,
                        r = e._model,
                        o = this.chart.options.elements.point;
                    r.radius = n.radius ? n.radius : i.valueAtIndexOrDefault(t.pointRadius, a, o.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : i.valueAtIndexOrDefault(t.pointBackgroundColor, a, o.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : i.valueAtIndexOrDefault(t.pointBorderColor, a, o.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : i.valueAtIndexOrDefault(t.pointBorderWidth, a, o.borderWidth)
                }
            })
        }
    },
    1542: function(e, t, n) {
        "use strict";
        n(820)._set("scatter", {
            hover: {
                mode: "single"
            },
            scales: {
                xAxes: [{
                    id: "x-axis-1",
                    type: "linear",
                    position: "bottom"
                }],
                yAxes: [{
                    id: "y-axis-1",
                    type: "linear",
                    position: "left"
                }]
            },
            showLines: !1,
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e) {
                        return "(" + e.xLabel + ", " + e.yLabel + ")"
                    }
                }
            }
        }), e.exports = function(e) {
            e.controllers.scatter = e.controllers.line
        }
    },
    1543: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Bar = function(t, n) {
                return n.type = "bar", new e(t, n)
            }
        }
    },
    1544: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Bubble = function(t, n) {
                return n.type = "bubble", new e(t, n)
            }
        }
    },
    1545: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Doughnut = function(t, n) {
                return n.type = "doughnut", new e(t, n)
            }
        }
    },
    1546: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Line = function(t, n) {
                return n.type = "line", new e(t, n)
            }
        }
    },
    1547: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.PolarArea = function(t, n) {
                return n.type = "polarArea", new e(t, n)
            }
        }
    },
    1548: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Radar = function(t, n) {
                return n.type = "radar", new e(t, n)
            }
        }
    },
    1549: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Scatter = function(t, n) {
                return n.type = "scatter", new e(t, n)
            }
        }
    },
    1550: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(878),
            i = n(815);
        a._set("global", {
            plugins: {
                filler: {
                    propagate: !0
                }
            }
        }), e.exports = function() {
            function e(e, t, n) {
                var a, r = e._model || {},
                    i = r.fill;
                if (void 0 === i && (i = !!r.backgroundColor), !1 === i || null === i) return !1;
                if (!0 === i) return "origin";
                if (a = parseFloat(i, 10), isFinite(a) && Math.floor(a) === a) return "-" !== i[0] && "+" !== i[0] || (a = t + a), !(a === t || a < 0 || a >= n) && a;
                switch (i) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return i;
                    default:
                        return !1
                }
            }

            function t(e) {
                var t, n = e.el._model || {},
                    a = e.el._scale || {},
                    r = e.fill,
                    i = null;
                if (isFinite(r)) return null;
                if ("start" === r ? i = void 0 === n.scaleBottom ? a.bottom : n.scaleBottom : "end" === r ? i = void 0 === n.scaleTop ? a.top : n.scaleTop : void 0 !== n.scaleZero ? i = n.scaleZero : a.getBasePosition ? i = a.getBasePosition() : a.getBasePixel && (i = a.getBasePixel()), void 0 !== i && null !== i) {
                    if (void 0 !== i.x && void 0 !== i.y) return i;
                    if ("number" == typeof i && isFinite(i)) return t = a.isHorizontal(), {
                        x: t ? i : null,
                        y: t ? null : i
                    }
                }
                return null
            }

            function n(e, t, n) {
                var a, r = e[t],
                    i = r.fill,
                    o = [t];
                if (!n) return i;
                for (; !1 !== i && -1 === o.indexOf(i);) {
                    if (!isFinite(i)) return i;
                    if (!(a = e[i])) return !1;
                    if (a.visible) return i;
                    o.push(i), i = a.fill
                }
                return !1
            }

            function o(e) {
                var t = e.fill,
                    n = "dataset";
                return !1 === t ? null : (isFinite(t) || (n = "boundary"), l[n](e))
            }

            function s(e) {
                return e && !e.skip
            }

            function d(e, t, n, a, r) {
                var o;
                if (a && r) {
                    for (e.moveTo(t[0].x, t[0].y), o = 1; o < a; ++o) i.canvas.lineTo(e, t[o - 1], t[o]);
                    for (e.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) i.canvas.lineTo(e, n[o], n[o - 1], !0)
                }
            }

            function u(e, t, n, a, r, i) {
                var o, u, l, c, m, _, h, f = t.length,
                    p = a.spanGaps,
                    y = [],
                    M = [],
                    g = 0,
                    v = 0;
                for (e.beginPath(), o = 0, u = f + !!i; o < u; ++o) l = o % f, c = t[l]._view, m = n(c, l, a), _ = s(c), h = s(m), _ && h ? (g = y.push(c), v = M.push(m)) : g && v && (p ? (_ && y.push(c), h && M.push(m)) : (d(e, y, M, g, v), g = v = 0, y = [], M = []));
                d(e, y, M, g, v), e.closePath(), e.fillStyle = r, e.fill()
            }
            var l = {
                dataset: function(e) {
                    var t = e.fill,
                        n = e.chart,
                        a = n.getDatasetMeta(t),
                        r = a && n.isDatasetVisible(t),
                        i = r && a.dataset._children || [],
                        o = i.length || 0;
                    return o ? function(e, t) {
                        return t < o && i[t]._view || null
                    } : null
                },
                boundary: function(e) {
                    var t = e.boundary,
                        n = t ? t.x : null,
                        a = t ? t.y : null;
                    return function(e) {
                        return {
                            x: null === n ? e.x : n,
                            y: null === a ? e.y : a
                        }
                    }
                }
            };
            return {
                id: "filler",
                afterDatasetsUpdate: function(a, i) {
                    var s, d, u, l, c = (a.data.datasets || []).length,
                        m = i.propagate,
                        _ = [];
                    for (d = 0; d < c; ++d) s = a.getDatasetMeta(d), u = s.dataset, l = null, u && u._model && u instanceof r.Line && (l = {
                        visible: a.isDatasetVisible(d),
                        fill: e(u, d, c),
                        chart: a,
                        el: u
                    }), s.$filler = l, _.push(l);
                    for (d = 0; d < c; ++d)(l = _[d]) && (l.fill = n(_, d, m), l.boundary = t(l), l.mapper = o(l))
                },
                beforeDatasetDraw: function(e, t) {
                    var n = t.meta.$filler;
                    if (n) {
                        var r = e.ctx,
                            o = n.el,
                            s = o._view,
                            d = o._children || [],
                            l = n.mapper,
                            c = s.backgroundColor || a.global.defaultColor;
                        l && c && d.length && (i.canvas.clipArea(r, e.chartArea), u(r, d, l, s, c, o._loop), i.canvas.unclipArea(r))
                    }
                }
            }
        }
    },
    1551: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(848),
            i = n(815);
        a._set("global", {
            legend: {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                weight: 1e3,
                onClick: function(e, t) {
                    var n = t.datasetIndex,
                        a = this.chart,
                        r = a.getDatasetMeta(n);
                    r.hidden = null === r.hidden ? !a.data.datasets[n].hidden : null, a.update()
                },
                onHover: null,
                labels: {
                    boxWidth: 40,
                    padding: 10,
                    generateLabels: function(e) {
                        var t = e.data;
                        return i.isArray(t.datasets) ? t.datasets.map(function(t, n) {
                            return {
                                text: t.label,
                                fillStyle: i.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                hidden: !e.isDatasetVisible(n),
                                lineCap: t.borderCapStyle,
                                lineDash: t.borderDash,
                                lineDashOffset: t.borderDashOffset,
                                lineJoin: t.borderJoinStyle,
                                lineWidth: t.borderWidth,
                                strokeStyle: t.borderColor,
                                pointStyle: t.pointStyle,
                                datasetIndex: n
                            }
                        }, this) : []
                    }
                }
            },
            legendCallback: function(e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
                return t.push("</ul>"), t.join("")
            }
        }), e.exports = function(e) {
            function t(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            function n(t, n) {
                var a = new e.Legend({
                    ctx: t.ctx,
                    options: n,
                    chart: t
                });
                o.configure(t, a, n), o.addBox(t, a), t.legend = a
            }
            var o = e.layoutService,
                s = i.noop;
            return e.Legend = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: s,
                update: function(e, t, n) {
                    var a = this;
                    return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: function() {
                    var e = this,
                        t = e.options.labels || {},
                        n = i.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (n = n.filter(function(n) {
                        return t.filter(n, e.chart.data)
                    })), e.options.reverse && n.reverse(), e.legendItems = n
                },
                afterBuildLabels: s,
                beforeFit: s,
                fit: function() {
                    var e = this,
                        n = e.options,
                        r = n.labels,
                        o = n.display,
                        s = e.ctx,
                        d = a.global,
                        u = i.valueOrDefault,
                        l = u(r.fontSize, d.defaultFontSize),
                        c = u(r.fontStyle, d.defaultFontStyle),
                        m = u(r.fontFamily, d.defaultFontFamily),
                        _ = i.fontString(l, c, m),
                        h = e.legendHitBoxes = [],
                        f = e.minSize,
                        p = e.isHorizontal();
                    if (p ? (f.width = e.maxWidth, f.height = o ? 10 : 0) : (f.width = o ? 10 : 0, f.height = e.maxHeight), o)
                        if (s.font = _, p) {
                            var y = e.lineWidths = [0],
                                M = e.legendItems.length ? l + r.padding : 0;
                            s.textAlign = "left", s.textBaseline = "top", i.each(e.legendItems, function(n, a) {
                                var i = t(r, l),
                                    o = i + l / 2 + s.measureText(n.text).width;
                                y[y.length - 1] + o + r.padding >= e.width && (M += l + r.padding, y[y.length] = e.left), h[a] = {
                                    left: 0,
                                    top: 0,
                                    width: o,
                                    height: l
                                }, y[y.length - 1] += o + r.padding
                            }), f.height += M
                        } else {
                            var g = r.padding,
                                v = e.columnWidths = [],
                                b = r.padding,
                                L = 0,
                                Y = 0,
                                k = l + g;
                            i.each(e.legendItems, function(e, n) {
                                var a = t(r, l),
                                    i = a + l / 2 + s.measureText(e.text).width;
                                Y + k > f.height && (b += L + r.padding, v.push(L), L = 0, Y = 0), L = Math.max(L, i), Y += k, h[n] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: l
                                }
                            }), b += L, v.push(L), f.width += b
                        }
                    e.width = f.width, e.height = f.height
                },
                afterFit: s,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var e = this,
                        n = e.options,
                        r = n.labels,
                        o = a.global,
                        s = o.elements.line,
                        d = e.width,
                        u = e.lineWidths;
                    if (n.display) {
                        var l, c = e.ctx,
                            m = i.valueOrDefault,
                            _ = m(r.fontColor, o.defaultFontColor),
                            h = m(r.fontSize, o.defaultFontSize),
                            f = m(r.fontStyle, o.defaultFontStyle),
                            p = m(r.fontFamily, o.defaultFontFamily),
                            y = i.fontString(h, f, p);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = _, c.fillStyle = _, c.font = y;
                        var M = t(r, h),
                            g = e.legendHitBoxes,
                            v = function(e, t, a) {
                                if (!(isNaN(M) || M <= 0)) {
                                    c.save(), c.fillStyle = m(a.fillStyle, o.defaultColor), c.lineCap = m(a.lineCap, s.borderCapStyle), c.lineDashOffset = m(a.lineDashOffset, s.borderDashOffset), c.lineJoin = m(a.lineJoin, s.borderJoinStyle), c.lineWidth = m(a.lineWidth, s.borderWidth), c.strokeStyle = m(a.strokeStyle, o.defaultColor);
                                    var r = 0 === m(a.lineWidth, s.borderWidth);
                                    if (c.setLineDash && c.setLineDash(m(a.lineDash, s.borderDash)), n.labels && n.labels.usePointStyle) {
                                        var d = h * Math.SQRT2 / 2,
                                            u = d / Math.SQRT2,
                                            l = e + u,
                                            _ = t + u;
                                        i.canvas.drawPoint(c, a.pointStyle, d, l, _)
                                    } else r || c.strokeRect(e, t, M, h), c.fillRect(e, t, M, h);
                                    c.restore()
                                }
                            },
                            b = function(e, t, n, a) {
                                var r = h / 2,
                                    i = M + r + e,
                                    o = t + r;
                                c.fillText(n.text, i, o), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, o), c.lineTo(i + a, o), c.stroke())
                            },
                            L = e.isHorizontal();
                        l = L ? {
                            x: e.left + (d - u[0]) / 2,
                            y: e.top + r.padding,
                            line: 0
                        } : {
                            x: e.left + r.padding,
                            y: e.top + r.padding,
                            line: 0
                        };
                        var Y = h + r.padding;
                        i.each(e.legendItems, function(t, n) {
                            var a = c.measureText(t.text).width,
                                i = M + h / 2 + a,
                                o = l.x,
                                s = l.y;
                            L ? o + i >= d && (s = l.y += Y, l.line++, o = l.x = e.left + (d - u[l.line]) / 2) : s + Y > e.bottom && (o = l.x = o + e.columnWidths[l.line] + r.padding, s = l.y = e.top + r.padding, l.line++), v(o, s, t), g[n].left = o, g[n].top = s, b(o, s, t, a), L ? l.x += i + r.padding : l.y += Y
                        })
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        n = t.options,
                        a = "mouseup" === e.type ? "click" : e.type,
                        r = !1;
                    if ("mousemove" === a) {
                        if (!n.onHover) return
                    } else {
                        if ("click" !== a) return;
                        if (!n.onClick) return
                    }
                    var i = e.x,
                        o = e.y;
                    if (i >= t.left && i <= t.right && o >= t.top && o <= t.bottom)
                        for (var s = t.legendHitBoxes, d = 0; d < s.length; ++d) {
                            var u = s[d];
                            if (i >= u.left && i <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                                if ("click" === a) {
                                    n.onClick.call(t, e.native, t.legendItems[d]), r = !0;
                                    break
                                }
                                if ("mousemove" === a) {
                                    n.onHover.call(t, e.native, t.legendItems[d]), r = !0;
                                    break
                                }
                            }
                        }
                    return r
                }
            }), {
                id: "legend",
                beforeInit: function(e) {
                    var t = e.options.legend;
                    t && n(e, t)
                },
                beforeUpdate: function(e) {
                    var t = e.options.legend,
                        r = e.legend;
                    t ? (i.mergeIf(t, a.global.legend), r ? (o.configure(e, r, t), r.options = t) : n(e, t)) : r && (o.removeBox(e, r), delete e.legend)
                },
                afterEvent: function(e, t) {
                    var n = e.legend;
                    n && n.handleEvent(t)
                }
            }
        }
    },
    1552: function(e, t, n) {
        "use strict";
        var a = n(820),
            r = n(848),
            i = n(815);
        a._set("global", {
            title: {
                display: !1,
                fontStyle: "bold",
                fullWidth: !0,
                lineHeight: 1.2,
                padding: 10,
                position: "top",
                text: "",
                weight: 2e3
            }
        }), e.exports = function(e) {
            function t(t, a) {
                var r = new e.Title({
                    ctx: t.ctx,
                    options: a,
                    chart: t
                });
                n.configure(t, r, a), n.addBox(t, r), t.titleBlock = r
            }
            var n = e.layoutService,
                o = i.noop;
            return e.Title = r.extend({
                initialize: function(e) {
                    var t = this;
                    i.extend(t, e), t.legendHitBoxes = []
                },
                beforeUpdate: o,
                update: function(e, t, n) {
                    var a = this;
                    return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: o,
                afterBuildLabels: o,
                beforeFit: o,
                fit: function() {
                    var e = this,
                        t = i.valueOrDefault,
                        n = e.options,
                        r = n.display,
                        o = t(n.fontSize, a.global.defaultFontSize),
                        s = e.minSize,
                        d = i.isArray(n.text) ? n.text.length : 1,
                        u = i.options.toLineHeight(n.lineHeight, o),
                        l = r ? d * u + 2 * n.padding : 0;
                    e.isHorizontal() ? (s.width = e.maxWidth, s.height = l) : (s.width = l, s.height = e.maxHeight), e.width = s.width, e.height = s.height
                },
                afterFit: o,
                isHorizontal: function() {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function() {
                    var e = this,
                        t = e.ctx,
                        n = i.valueOrDefault,
                        r = e.options,
                        o = a.global;
                    if (r.display) {
                        var s, d, u, l = n(r.fontSize, o.defaultFontSize),
                            c = n(r.fontStyle, o.defaultFontStyle),
                            m = n(r.fontFamily, o.defaultFontFamily),
                            _ = i.fontString(l, c, m),
                            h = i.options.toLineHeight(r.lineHeight, l),
                            f = h / 2 + r.padding,
                            p = 0,
                            y = e.top,
                            M = e.left,
                            g = e.bottom,
                            v = e.right;
                        t.fillStyle = n(r.fontColor, o.defaultFontColor), t.font = _, e.isHorizontal() ? (d = M + (v - M) / 2, u = y + f, s = v - M) : (d = "left" === r.position ? M + f : v - f, u = y + (g - y) / 2, s = g - y, p = Math.PI * ("left" === r.position ? -.5 : .5)), t.save(), t.translate(d, u), t.rotate(p), t.textAlign = "center", t.textBaseline = "middle";
                        var b = r.text;
                        if (i.isArray(b))
                            for (var L = 0, Y = 0; Y < b.length; ++Y) t.fillText(b[Y], 0, L, s), L += h;
                        else t.fillText(b, 0, 0, s);
                        t.restore()
                    }
                }
            }), {
                id: "title",
                beforeInit: function(e) {
                    var n = e.options.title;
                    n && t(e, n)
                },
                beforeUpdate: function(r) {
                    var o = r.options.title,
                        s = r.titleBlock;
                    o ? (i.mergeIf(o, a.global.title), s ? (n.configure(r, s, o), s.options = o) : t(r, o)) : s && (e.layoutService.removeBox(r, s), delete r.titleBlock)
                }
            }
        }
    },
    2074: function(e, t, n) {
        "use strict";

        function a(e) {
            switch (e.toUpperCase()) {
                case "A1":
                    return Object(L.d)("Anonymous Proxy", "format-country");
                case "A2":
                    return Object(L.d)("Satellite Provider", "format-country");
                case "AD":
                    return Object(L.d)("Andorra", "format-country");
                case "AE":
                    return Object(L.d)("United Arab Emirates", "format-country");
                case "AF":
                    return Object(L.d)("Afghanistan", "format-country");
                case "AG":
                    return Object(L.d)("Antigua and Barbuda", "format-country");
                case "AI":
                    return Object(L.d)("Anguilla", "format-country");
                case "AL":
                    return Object(L.d)("Albania", "format-country");
                case "AM":
                    return Object(L.d)("Armenia", "format-country");
                case "AO":
                    return Object(L.d)("Angola", "format-country");
                case "AP":
                    return Object(L.d)("Asia/Pacific Region", "format-country");
                case "AQ":
                    return Object(L.d)("Antarctica", "format-country");
                case "AR":
                    return Object(L.d)("Argentina", "format-country");
                case "AS":
                    return Object(L.d)("American Samoa", "format-country");
                case "AT":
                    return Object(L.d)("Austria", "format-country");
                case "AU":
                    return Object(L.d)("Australia", "format-country");
                case "AW":
                    return Object(L.d)("Aruba", "format-country");
                case "AX":
                    return Object(L.d)("Aland Islands", "format-country");
                case "AZ":
                    return Object(L.d)("Azerbaijan", "format-country");
                case "BA":
                    return Object(L.d)("Bosnia and Herzegovina", "format-country");
                case "BB":
                    return Object(L.d)("Barbados", "format-country");
                case "BD":
                    return Object(L.d)("Bangladesh", "format-country");
                case "BE":
                    return Object(L.d)("Belgium", "format-country");
                case "BF":
                    return Object(L.d)("Burkina Faso", "format-country");
                case "BG":
                    return Object(L.d)("Bulgaria", "format-country");
                case "BH":
                    return Object(L.d)("Bahrain", "format-country");
                case "BI":
                    return Object(L.d)("Burundi", "format-country");
                case "BJ":
                    return Object(L.d)("Benin", "format-country");
                case "BL":
                    return Object(L.d)("Saint Bartelemey", "format-country");
                case "BM":
                    return Object(L.d)("Bermuda", "format-country");
                case "BN":
                    return Object(L.d)("Brunei", "format-country");
                case "BO":
                    return Object(L.d)("Bolivia", "format-country");
                case "BQ":
                    return Object(L.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                case "BR":
                    return Object(L.d)("Brazil", "format-country");
                case "BS":
                    return Object(L.d)("Bahamas", "format-country");
                case "BT":
                    return Object(L.d)("Bhutan", "format-country");
                case "BV":
                    return Object(L.d)("Bouvet Island", "format-country");
                case "BW":
                    return Object(L.d)("Botswana", "format-country");
                case "BY":
                    return Object(L.d)("Belarus", "format-country");
                case "BZ":
                    return Object(L.d)("Belize", "format-country");
                case "CA":
                    return Object(L.d)("Canada", "format-country");
                case "CC":
                    return Object(L.d)("Cocos (Keeling) Islands", "format-country");
                case "CD":
                    return Object(L.d)("Congo, The Democratic Republic of the", "format-country");
                case "CF":
                    return Object(L.d)("Central African Republic", "format-country");
                case "CG":
                    return Object(L.d)("Congo", "format-country");
                case "CH":
                    return Object(L.d)("Switzerland", "format-country");
                case "CI":
                    return Object(L.d)("Ivory Coast", "format-country");
                case "CK":
                    return Object(L.d)("Cook Islands", "format-country");
                case "CL":
                    return Object(L.d)("Chile", "format-country");
                case "CM":
                    return Object(L.d)("Cameroon", "format-country");
                case "CN":
                    return Object(L.d)("China", "format-country");
                case "CO":
                    return Object(L.d)("Colombia", "format-country");
                case "CR":
                    return Object(L.d)("Costa Rica", "format-country");
                case "CU":
                    return Object(L.d)("Cuba", "format-country");
                case "CV":
                    return Object(L.d)("Cape Verde", "format-country");
                case "CW":
                    return Object(L.d)("Curacao", "format-country");
                case "CX":
                    return Object(L.d)("Christmas Island", "format-country");
                case "CY":
                    return Object(L.d)("Cyprus", "format-country");
                case "CZ":
                    return Object(L.d)("Czech Republic", "format-country");
                case "DE":
                    return Object(L.d)("Germany", "format-country");
                case "DJ":
                    return Object(L.d)("Djibouti", "format-country");
                case "DK":
                    return Object(L.d)("Denmark", "format-country");
                case "DM":
                    return Object(L.d)("Dominica", "format-country");
                case "DO":
                    return Object(L.d)("Dominican Republic", "format-country");
                case "DZ":
                    return Object(L.d)("Algeria", "format-country");
                case "EC":
                    return Object(L.d)("Ecuador", "format-country");
                case "EE":
                    return Object(L.d)("Estonia", "format-country");
                case "EG":
                    return Object(L.d)("Egypt", "format-country");
                case "EH":
                    return Object(L.d)("Western Sahara", "format-country");
                case "ER":
                    return Object(L.d)("Eritrea", "format-country");
                case "ES":
                    return Object(L.d)("Spain", "format-country");
                case "ET":
                    return Object(L.d)("Ethiopia", "format-country");
                case "EU":
                    return Object(L.d)("Europe", "format-country");
                case "FI":
                    return Object(L.d)("Finland", "format-country");
                case "FJ":
                    return Object(L.d)("Fiji", "format-country");
                case "FK":
                    return Object(L.d)("Falkland Islands (Malvinas)", "format-country");
                case "FM":
                    return Object(L.d)("Micronesia", "format-country");
                case "FO":
                    return Object(L.d)("Faroe Islands", "format-country");
                case "FR":
                    return Object(L.d)("France", "format-country");
                case "GA":
                    return Object(L.d)("Gabon", "format-country");
                case "GB":
                    return Object(L.d)("United Kingdom", "format-country");
                case "GD":
                    return Object(L.d)("Grenada", "format-country");
                case "GE":
                    return Object(L.d)("Georgia", "format-country");
                case "GF":
                    return Object(L.d)("French Guiana", "format-country");
                case "GG":
                    return Object(L.d)("Guernsey", "format-country");
                case "GH":
                    return Object(L.d)("Ghana", "format-country");
                case "GI":
                    return Object(L.d)("Gibraltar", "format-country");
                case "GL":
                    return Object(L.d)("Greenland", "format-country");
                case "GM":
                    return Object(L.d)("Gambia", "format-country");
                case "GN":
                    return Object(L.d)("Guinea", "format-country");
                case "GP":
                    return Object(L.d)("Guadeloupe", "format-country");
                case "GQ":
                    return Object(L.d)("Equatorial Guinea", "format-country");
                case "GR":
                    return Object(L.d)("Greece", "format-country");
                case "GS":
                    return Object(L.d)("South Georgia and the South Sandwich Islands", "format-country");
                case "GT":
                    return Object(L.d)("Guatemala", "format-country");
                case "GU":
                    return Object(L.d)("Guam", "format-country");
                case "GW":
                    return Object(L.d)("Guinea-Bissau", "format-country");
                case "GY":
                    return Object(L.d)("Guyana", "format-country");
                case "HK":
                    return Object(L.d)("Hong Kong", "format-country");
                case "HM":
                    return Object(L.d)("Heard Island and McDonald Islands", "format-country");
                case "HN":
                    return Object(L.d)("Honduras", "format-country");
                case "HR":
                    return Object(L.d)("Croatia", "format-country");
                case "HT":
                    return Object(L.d)("Haiti", "format-country");
                case "HU":
                    return Object(L.d)("Hungary", "format-country");
                case "ID":
                    return Object(L.d)("Indonesia", "format-country");
                case "IE":
                    return Object(L.d)("Ireland", "format-country");
                case "IL":
                    return Object(L.d)("Israel", "format-country");
                case "IM":
                    return Object(L.d)("Isle of Man", "format-country");
                case "IN":
                    return Object(L.d)("India", "format-country");
                case "IO":
                    return Object(L.d)("British Indian Ocean Territory", "format-country");
                case "IQ":
                    return Object(L.d)("Iraq", "format-country");
                case "IR":
                    return Object(L.d)("Iran", "format-country");
                case "IS":
                    return Object(L.d)("Iceland", "format-country");
                case "IT":
                    return Object(L.d)("Italy", "format-country");
                case "JE":
                    return Object(L.d)("Jersey", "format-country");
                case "JM":
                    return Object(L.d)("Jamaica", "format-country");
                case "JO":
                    return Object(L.d)("Jordan", "format-country");
                case "JP":
                    return Object(L.d)("Japan", "format-country");
                case "KE":
                    return Object(L.d)("Kenya", "format-country");
                case "KG":
                    return Object(L.d)("Kyrgyzstan", "format-country");
                case "KH":
                    return Object(L.d)("Cambodia", "format-country");
                case "KI":
                    return Object(L.d)("Kiribati", "format-country");
                case "KM":
                    return Object(L.d)("Comoros", "format-country");
                case "KN":
                    return Object(L.d)("Saint Kitts and Nevis", "format-country");
                case "KP":
                    return Object(L.d)("North Korea", "format-country");
                case "KR":
                    return Object(L.d)("South Korea", "format-country");
                case "KW":
                    return Object(L.d)("Kuwait", "format-country");
                case "KY":
                    return Object(L.d)("Cayman Islands", "format-country");
                case "KZ":
                    return Object(L.d)("Kazakhstan", "format-country");
                case "LA":
                    return Object(L.d)("Laos", "format-country");
                case "LB":
                    return Object(L.d)("Lebanon", "format-country");
                case "LC":
                    return Object(L.d)("Saint Lucia", "format-country");
                case "LI":
                    return Object(L.d)("Liechtenstein", "format-country");
                case "LK":
                    return Object(L.d)("Sri Lanka", "format-country");
                case "LR":
                    return Object(L.d)("Liberia", "format-country");
                case "LS":
                    return Object(L.d)("Lesotho", "format-country");
                case "LT":
                    return Object(L.d)("Lithuania", "format-country");
                case "LU":
                    return Object(L.d)("Luxembourg", "format-country");
                case "LV":
                    return Object(L.d)("Latvia", "format-country");
                case "LY":
                    return Object(L.d)("Libya", "format-country");
                case "MA":
                    return Object(L.d)("Morocco", "format-country");
                case "MC":
                    return Object(L.d)("Monaco", "format-country");
                case "MD":
                    return Object(L.d)("Moldova", "format-country");
                case "ME":
                    return Object(L.d)("Montenegro", "format-country");
                case "MF":
                    return Object(L.d)("Saint Martin", "format-country");
                case "MG":
                    return Object(L.d)("Madagascar", "format-country");
                case "MH":
                    return Object(L.d)("Marshall Islands", "format-country");
                case "MK":
                    return Object(L.d)("Macedonia", "format-country");
                case "ML":
                    return Object(L.d)("Mali", "format-country");
                case "MM":
                    return Object(L.d)("Myanmar", "format-country");
                case "MN":
                    return Object(L.d)("Mongolia", "format-country");
                case "MO":
                    return Object(L.d)("Macao", "format-country");
                case "MP":
                    return Object(L.d)("Northern Mariana Islands", "format-country");
                case "MQ":
                    return Object(L.d)("Martinique", "format-country");
                case "MR":
                    return Object(L.d)("Mauritania", "format-country");
                case "MS":
                    return Object(L.d)("Montserrat", "format-country");
                case "MT":
                    return Object(L.d)("Malta", "format-country");
                case "MU":
                    return Object(L.d)("Mauritius", "format-country");
                case "MV":
                    return Object(L.d)("Maldives", "format-country");
                case "MW":
                    return Object(L.d)("Malawi", "format-country");
                case "MX":
                    return Object(L.d)("Mexico", "format-country");
                case "MY":
                    return Object(L.d)("Malaysia", "format-country");
                case "MZ":
                    return Object(L.d)("Mozambique", "format-country");
                case "NA":
                    return Object(L.d)("Namibia", "format-country");
                case "NC":
                    return Object(L.d)("New Caledonia", "format-country");
                case "NE":
                    return Object(L.d)("Niger", "format-country");
                case "NF":
                    return Object(L.d)("Norfolk Island", "format-country");
                case "NG":
                    return Object(L.d)("Nigeria", "format-country");
                case "NI":
                    return Object(L.d)("Nicaragua", "format-country");
                case "NL":
                    return Object(L.d)("Netherlands", "format-country");
                case "NO":
                    return Object(L.d)("Norway", "format-country");
                case "NP":
                    return Object(L.d)("Nepal", "format-country");
                case "NR":
                    return Object(L.d)("Nauru", "format-country");
                case "NU":
                    return Object(L.d)("Niue", "format-country");
                case "NZ":
                    return Object(L.d)("New Zealand", "format-country");
                case "O1":
                    return Object(L.d)("Other Country", "format-country");
                case "OM":
                    return Object(L.d)("Oman", "format-country");
                case "PA":
                    return Object(L.d)("Panama", "format-country");
                case "PE":
                    return Object(L.d)("Peru", "format-country");
                case "PF":
                    return Object(L.d)("French Polynesia", "format-country");
                case "PG":
                    return Object(L.d)("Papua New Guinea", "format-country");
                case "PH":
                    return Object(L.d)("Philippines", "format-country");
                case "PK":
                    return Object(L.d)("Pakistan", "format-country");
                case "PL":
                    return Object(L.d)("Poland", "format-country");
                case "PM":
                    return Object(L.d)("Saint Pierre and Miquelon", "format-country");
                case "PN":
                    return Object(L.d)("Pitcairn", "format-country");
                case "PR":
                    return Object(L.d)("Puerto Rico", "format-country");
                case "PS":
                    return Object(L.d)("Palestine", "format-country");
                case "PT":
                    return Object(L.d)("Portugal", "format-country");
                case "PW":
                    return Object(L.d)("Palau", "format-country");
                case "PY":
                    return Object(L.d)("Paraguay", "format-country");
                case "QA":
                    return Object(L.d)("Qatar", "format-country");
                case "RE":
                    return Object(L.d)("Reunion", "format-country");
                case "RO":
                    return Object(L.d)("Romania", "format-country");
                case "RS":
                    return Object(L.d)("Serbia", "format-country");
                case "RU":
                    return Object(L.d)("Russia", "format-country");
                case "RW":
                    return Object(L.d)("Rwanda", "format-country");
                case "SA":
                    return Object(L.d)("Saudi Arabia", "format-country");
                case "SB":
                    return Object(L.d)("Solomon Islands", "format-country");
                case "SC":
                    return Object(L.d)("Seychelles", "format-country");
                case "SD":
                    return Object(L.d)("Sudan", "format-country");
                case "SE":
                    return Object(L.d)("Sweden", "format-country");
                case "SG":
                    return Object(L.d)("Singapore", "format-country");
                case "SH":
                    return Object(L.d)("Saint Helena", "format-country");
                case "SI":
                    return Object(L.d)("Slovenia", "format-country");
                case "SJ":
                    return Object(L.d)("Svalbard and Jan Mayen", "format-country");
                case "SK":
                    return Object(L.d)("Slovakia", "format-country");
                case "SL":
                    return Object(L.d)("Sierra Leone", "format-country");
                case "SM":
                    return Object(L.d)("San Marino", "format-country");
                case "SN":
                    return Object(L.d)("Senegal", "format-country");
                case "SO":
                    return Object(L.d)("Somalia", "format-country");
                case "SR":
                    return Object(L.d)("Suriname", "format-country");
                case "SS":
                    return Object(L.d)("South Sudan", "format-country");
                case "ST":
                    return Object(L.d)("Sao Tome and Principe", "format-country");
                case "SV":
                    return Object(L.d)("El Salvador", "format-country");
                case "SX":
                    return Object(L.d)("Sint Maarten", "format-country");
                case "SY":
                    return Object(L.d)("Syria", "format-country");
                case "SZ":
                    return Object(L.d)("Swaziland", "format-country");
                case "TC":
                    return Object(L.d)("Turks and Caicos Islands", "format-country");
                case "TD":
                    return Object(L.d)("Chad", "format-country");
                case "TF":
                    return Object(L.d)("French Southern Territories", "format-country");
                case "TG":
                    return Object(L.d)("Togo", "format-country");
                case "TH":
                    return Object(L.d)("Thailand", "format-country");
                case "TJ":
                    return Object(L.d)("Tajikistan", "format-country");
                case "TK":
                    return Object(L.d)("Tokelau", "format-country");
                case "TL":
                    return Object(L.d)("East Timor", "format-country");
                case "TM":
                    return Object(L.d)("Turkmenistan", "format-country");
                case "TN":
                    return Object(L.d)("Tunisia", "format-country");
                case "TO":
                    return Object(L.d)("Tonga", "format-country");
                case "TR":
                    return Object(L.d)("Turkey", "format-country");
                case "TT":
                    return Object(L.d)("Trinidad and Tobago", "format-country");
                case "TV":
                    return Object(L.d)("Tuvalu", "format-country");
                case "TW":
                    return Object(L.d)("Taiwan", "format-country");
                case "TZ":
                    return Object(L.d)("Tanzania", "format-country");
                case "UA":
                    return Object(L.d)("Ukraine", "format-country");
                case "UG":
                    return Object(L.d)("Uganda", "format-country");
                case "UM":
                    return Object(L.d)("United States Minor Outlying Islands", "format-country");
                case "US":
                    return Object(L.d)("United States", "format-country");
                case "UY":
                    return Object(L.d)("Uruguay", "format-country");
                case "UZ":
                    return Object(L.d)("Uzbekistan", "format-country");
                case "VA":
                    return Object(L.d)("Vatican City", "format-country");
                case "VC":
                    return Object(L.d)("Saint Vincent and the Grenadines", "format-country");
                case "VE":
                    return Object(L.d)("Venezuela", "format-country");
                case "VG":
                    return Object(L.d)("British Virgin Islands", "format-country");
                case "VI":
                    return Object(L.d)("U.S. Virgin Islands", "format-country");
                case "VN":
                    return Object(L.d)("Vietnam", "format-country");
                case "VU":
                    return Object(L.d)("Vanuatu", "format-country");
                case "WF":
                    return Object(L.d)("Wallis and Futuna", "format-country");
                case "WS":
                    return Object(L.d)("Samoa", "format-country");
                case "YE":
                    return Object(L.d)("Yemen", "format-country");
                case "YT":
                    return Object(L.d)("Mayotte", "format-country");
                case "ZA":
                    return Object(L.d)("South Africa", "format-country");
                case "ZM":
                    return Object(L.d)("Zambia", "format-country");
                case "ZW":
                    return Object(L.d)("Zimbabwe", "format-country");
                default:
                    return e
            }
        }

        function r(e) {
            return Object(d.bindActionCreators)({
                onAnonymousVisit: function() {
                    return Object(l.f)(u.a.DashboardPage)
                }
            }, e)
        }

        function i(e) {
            return {
                isLoggedIn: Object(c.d)(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, s = n(6),
            d = n(9),
            u = n(48),
            l = n(32),
            c = n(17),
            m = n(0),
            _ = n(1),
            h = n(22),
            f = n(814),
            p = n(5),
            y = n(28),
            M = n(3),
            g = function(e) {
                return _.createElement(y.b, null, _.createElement(M.U, {
                    display: M.H.Flex,
                    flexDirection: M.J.Column,
                    alignItems: M.c.Center,
                    padding: 2
                }, _.createElement(M.U, {
                    display: M.H.Flex,
                    padding: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, _.createElement(M._21, {
                    "data-test-selector": e.titleSelector,
                    type: M._26.H1
                }, e.title)), e.children))
            },
            v = g;
        ! function(e) {
            e.BasicInfo = "basic-info", e.Customize = "customize", e.Members = "members", e.FeaturedChannels = "featured-channels", e.Stats = "stats", e.Revenue = "revenue"
        }(o || (o = {}));
        var b, L = n(2),
            Y = function(e) {
                switch (e) {
                    case o.BasicInfo:
                        return Object(L.d)("Basic Info", "TeamsDashboard");
                    case o.Customize:
                        return Object(L.d)("Customize", "TeamsDashboard");
                    case o.Members:
                        return Object(L.d)("Members", "TeamsDashboard");
                    case o.FeaturedChannels:
                        return Object(L.d)("Featured Channels", "TeamsDashboard");
                    case o.Stats:
                        return Object(L.d)("Stats", "TeamsDashboard");
                    case o.Revenue:
                        return Object(L.d)("Revenue", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            k = function() {
                return _.createElement(v, {
                    title: Y(o.BasicInfo),
                    titleSelector: "basic-info-page-title"
                })
            },
            D = Object(p.c)("BasicInfoPage", {
                destination: f.a.TeamsDashboardBasicInfo,
                autoReportInteractive: !0
            })(k),
            x = function() {
                return _.createElement(v, {
                    title: Y(o.Customize),
                    titleSelector: "customize-page-title"
                })
            },
            T = Object(p.c)("CustomizePage", {
                destination: f.a.TeamsDashboardCustomize,
                autoReportInteractive: !0
            })(x),
            w = function() {
                return _.createElement(v, {
                    title: Y(o.FeaturedChannels),
                    titleSelector: "featured-channels-page-title"
                })
            },
            S = Object(p.c)("FeaturedChannelsPage", {
                destination: f.a.TeamsDashboardFeaturedChannels,
                autoReportInteractive: !0
            })(w),
            j = (n(1288), function(e) {
                var t = function(e) {
                    var t = Object(L.d)("{displayName}'s Avatar Image", {
                        displayName: e.member.displayName
                    }, "TeamsDashboard");
                    return _.createElement(M._17, {
                        display: M.H.Flex,
                        flexDirection: M.J.Row,
                        padding: 1,
                        borderBottom: !0,
                        fullWidth: !0
                    }, _.createElement(M.l, {
                        imageSrc: e.member.avatarSrc,
                        imageAlt: t,
                        size: 30
                    }), _.createElement(M.U, {
                        display: M.H.Flex,
                        alignSelf: M.d.Center,
                        margin: {
                            left: 1
                        }
                    }, _.createElement(M._21, null, e.member.displayName)))
                };
                return _.createElement(M.U, {
                    fullWidth: !0,
                    margin: {
                        top: 2,
                        bottom: 2
                    }
                }, _.createElement(M._21, {
                    type: M._26.H3
                }, e.header), e.members.length ? function(e) {
                    return _.createElement(y.b, null, _.createElement(M.U, {
                        display: M.H.Flex,
                        flexDirection: M.J.Column
                    }, e.map(function(e) {
                        return _.createElement(t, {
                            key: e.id,
                            member: e
                        })
                    })))
                }(e.members) : function() {
                    return _.createElement(M._21, null, "No team members yet.")
                }())
            }),
            H = n(912),
            O = this,
            C = function(e) {
                return e.map(function(e) {
                    return {
                        id: e._id,
                        displayName: e.display_name,
                        avatarSrc: e.logo
                    }
                })
            };
        ! function(e) {
            e.StatsRevealed = "stats_revealed", e.RevenueRevealed = "revenue_revealed"
        }(b || (b = {}));
        var P, A = function(e, t) {
                return void 0 === t && (t = b.StatsRevealed), m.__awaiter(O, void 0, void 0, function() {
                    var n, a, r;
                    return m.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return n = "/v5/teams/" + e + "/dashboard/members?" + t + "=true", [4, Object(H.c)({
                                    path: n
                                })];
                            case 1:
                                return a = i.sent(), r = a.body ? a.body.channels : [], [2, C(r)]
                        }
                    })
                })
            },
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        members: []
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, A(this.props.teamName)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        members: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return _.createElement(v, {
                        title: Y(o.Members),
                        titleSelector: "members-page-title"
                    }, _.createElement(j, {
                        header: Object(L.d)("Pending Team Invitations", "TeamsDashboard"),
                        members: [{
                            id: 0,
                            displayName: "As Df",
                            avatarSrc: "https://pbs.twimg.com/profile_images/706844157093027840/2Aan_aSU_400x400.jpg"
                        }, {
                            id: 1,
                            displayName: "Qw Er",
                            avatarSrc: "https://pbs.twimg.com/profile_images/706844157093027840/2Aan_aSU_400x400.jpg"
                        }, {
                            id: 2,
                            displayName: "Zx Cv",
                            avatarSrc: "https://pbs.twimg.com/profile_images/706844157093027840/2Aan_aSU_400x400.jpg"
                        }]
                    }), _.createElement(j, {
                        header: Object(L.d)("Current Members", "TeamsDashboard"),
                        members: this.state.members
                    }))
                }, t = m.__decorate([Object(p.c)("MembersPage", {
                    autoReportInteractive: !0,
                    destination: f.a.TeamsDashboardMembers
                })], t)
            }(_.Component),
            E = F,
            W = n(933),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        var n = new Date(parseInt(e.target.value, 10)),
                            a = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth())),
                            r = Object(W.addMonths)(a, 1);
                        t.props.onMonthSelection(a, r)
                    }, t.getDropdownOptions = function(e, t) {
                        for (var n = [], a = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth())); a.getTime() >= t.getTime(); a.setUTCMonth(a.getUTCMonth() - 1)) {
                            var r = a.getTime();
                            n.push(_.createElement("option", {
                                key: r,
                                value: r
                            }, Object(L.c)(a, {
                                month: "long",
                                year: "numeric",
                                timeZone: "UTC"
                            })))
                        }
                        return n
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = new Date(Date.UTC(2017, 9)),
                        t = this.props.currentMonth || new Date;
                    return Object(W.isBefore)(t, e) && (t = e), _.createElement(M.U, {
                        className: "month-select-menu"
                    }, _.createElement(M._14, {
                        onChange: this.handleChange
                    }, this.getDropdownOptions(t, e)))
                }, t = m.__decorate([Object(p.c)("MonthSelectMenuComponent")], t)
            }(_.Component),
            z = I,
            R = function(e) {
                var t = Math.floor(e.amount),
                    n = Math.round(e.amount % 1 * 100);
                return _.createElement(M.U, {
                    display: M.H.Flex,
                    flexDirection: M.J.Column,
                    margin: 1
                }, _.createElement(M.U, {
                    display: M.H.Flex,
                    padding: e.magnified ? {
                        bottom: 1
                    } : {}
                }, _.createElement(M._21, {
                    color: M.F.Alt2,
                    type: M._26.H5
                }, e.title)), _.createElement(M.U, {
                    display: M.H.Flex,
                    flexDirection: M.J.Row,
                    alignItems: M.c.Start
                }, _.createElement(M._21, {
                    type: e.magnified ? M._26.H4 : M._26.H5
                }, "$ "), _.createElement(M._21, {
                    type: e.magnified ? M._26.H1 : M._26.H2
                }, Object(L.e)(t)), _.createElement(M._21, {
                    type: e.magnified ? M._26.H4 : M._26.H5
                }, Object(L.e)(n, {
                    minimumIntegerDigits: 2
                }))))
            },
            N = function(e) {
                var t = e.revenues.reduce(function(e, t) {
                    return e + t.amount
                }, 0);
                return _.createElement(M._17, {
                    borderMarked: !0,
                    border: !0,
                    fullWidth: !0,
                    background: M.m.Base,
                    display: M.H.Flex,
                    justifyContent: M.T.Between,
                    alignItems: M.c.Center,
                    padding: 1
                }, _.createElement(R, {
                    title: e.totalTitle + " " + e.summaryItemTitleSuffix,
                    amount: t,
                    magnified: !0
                }), e.revenues.map(function(t, n) {
                    return _.createElement(R, {
                        key: n,
                        title: t.title + " " + e.summaryItemTitleSuffix,
                        amount: t.amount
                    })
                }))
            },
            B = n(47),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toggleOpenClose = function(e) {
                        e && t.props.fetchMembersData(t.props.members)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.members.filter(function(e) {
                            return e.checked
                        }).length,
                        n = this.props.members.length > 100 ? "Select First 100" : "Select All";
                    return _.createElement(M.U, {
                        className: "team-members-select-menu"
                    }, _.createElement(B.a, {
                        onToggle: this.toggleOpenClose
                    }, _.createElement(M.u, {
                        dropdown: !0,
                        type: M.z.Hollow
                    }, Object(L.d)("{checkedCount, plural, one {Stats for # Team Member} other {Stats for # Team Members}}", {
                        checkedCount: t
                    }, "TeamsDashboard")), _.createElement(M.p, {
                        direction: M.q.BottomLeft,
                        noTail: !0
                    }, _.createElement(y.b, {
                        className: "team-members-select-menu__scroller"
                    }, _.createElement(M.U, null, _.createElement(M._17, {
                        borderBottom: !0,
                        padding: {
                            top: 1,
                            left: .5,
                            right: .5,
                            bottom: .5
                        }
                    }, _.createElement(M.E, {
                        label: n,
                        checked: this.props.groupChecked,
                        onChange: this.props.toggleGroupChecked
                    })), this.props.members.map(function(n) {
                        var a = {
                            label: n.displayName,
                            checked: n.checked,
                            onChange: e.props.toggleMemberChecked.bind(e, n),
                            disabled: t >= 100 && !n.checked
                        };
                        return _.createElement(M._17, {
                            margin: {
                                x: .5,
                                y: 0
                            },
                            key: n.id
                        }, _.createElement(M.E, m.__assign({}, a)))
                    }))))))
                }, t = m.__decorate([Object(p.c)("TeamMembersSelectMenu", {
                    autoReportInteractive: !0
                })], t)
            }(_.Component),
            U = V,
            J = this,
            G = function() {
                return m.__awaiter(J, void 0, void 0, function() {
                    var e;
                    return m.__generator(this, function(t) {
                        return e = q(X), [2, K(e)]
                    })
                })
            },
            q = function(e) {
                for (var t = {}, n = 0, a = Object.keys(e); n < a.length; n++)
                    for (var r = a[n], i = 0, o = Object.keys(e[r]); i < o.length; i++)
                        for (var s = o[i], d = Z(e[r][s]), u = 0, l = Object.keys(d); u < l.length; u++) {
                            var c = l[u];
                            t.hasOwnProperty(c) ? t[c].hasOwnProperty(s) ? t[c][s] += d[c] : t[c][s] = d[c] : (t[c] = {}, t[c][s] = d[c])
                        }
                return t
            },
            Z = function(e) {
                var t = {};
                return e.forEach(function(e) {
                    var n = new Date(e.timestamp),
                        a = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate())).toISOString();
                    t.hasOwnProperty(a) ? t[a] += e.amount : t[a] = e.amount
                }), t
            },
            K = function(e) {
                for (var t = [], n = {
                        twitch_subscriptions: {
                            categoryLabel: "Sub Revenue",
                            color: "#7752ba",
                            data: []
                        },
                        ads: {
                            categoryLabel: "Ad Revenue",
                            color: "#c5b6e2",
                            data: []
                        },
                        bits: {
                            categoryLabel: "Bits Revenue",
                            color: "#3dc7ae",
                            data: []
                        },
                        prime_subscriptions: {
                            categoryLabel: "Twitch Prime Revenue",
                            color: "#059bdc",
                            data: []
                        }
                    }, a = 0, r = Object.keys(e).sort(); a < r.length; a++) {
                    var i = r[a];
                    t.push(i);
                    for (var o = e[i], s = 0, d = Object.keys(n); s < d.length; s++) {
                        var u = d[s];
                        n[u].data.push(o[u] ? o[u] : 0)
                    }
                }
                return {
                    twitch_subscriptions: n.twitch_subscriptions,
                    ads: n.ads,
                    bits: n.bits,
                    prime_subscriptions: n.prime_subscriptions,
                    timestampLabels: t
                }
            },
            $ = function(e) {
                return e.map(function(e) {
                    return {
                        title: e.categoryLabel,
                        amount: e.data.reduce(function(e, t) {
                            return e + t
                        }, 0)
                    }
                })
            },
            X = {
                654: {
                    twitch_subscriptions: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }],
                    ads: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }],
                    bits: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }],
                    prime_subscriptions: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }]
                },
                987: {
                    twitch_subscriptions: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }],
                    ads: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }],
                    bits: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }],
                    prime_subscriptions: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }]
                },
                321: {
                    twitch_subscriptions: [{
                        timestamp: "2017-10-27T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-27T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-27T16:10:00Z",
                        amount: 14.99
                    }],
                    ads: [{
                        timestamp: "2017-10-27T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-27T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-27T16:10:00Z",
                        amount: 14.99
                    }],
                    bits: [{
                        timestamp: "2017-10-27T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-27T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-27T16:10:00Z",
                        amount: 14.99
                    }],
                    prime_subscriptions: [{
                        timestamp: "2017-10-26T16:00:00Z",
                        amount: 4.99
                    }, {
                        timestamp: "2017-10-26T16:05:00Z",
                        amount: 9.99
                    }, {
                        timestamp: "2017-10-26T16:10:00Z",
                        amount: 14.99
                    }]
                }
            },
            Q = n(1286),
            ee = {
                width: 800,
                height: 380
            },
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setCanvasResolution(), this.myChart = new Q(this.canvas, {
                        type: "bar",
                        data: ae(this.props.datasets, this.props.timestampLabels),
                        options: {
                            tooltips: {
                                backgroundColor: "rgba(0,0,0,0.8)",
                                bodyFontColor: "#fff",
                                bodyFontSize: 14,
                                bodyFontStyle: "normal",
                                bodySpacing: 4,
                                caretSize: 6,
                                enabled: !0,
                                intersect: !1,
                                mode: "index",
                                multiKeyBackground: "rgba(0,0,0,0)",
                                position: "nearest",
                                titleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                                titleFontSize: 14,
                                titleFontColor: "#fff",
                                titleSpacing: 0,
                                titleMarginBottom: 10,
                                xPadding: 15,
                                yPadding: 12,
                                callbacks: {
                                    title: function(e) {
                                        var t = e.map(function(e) {
                                            return e.yLabel || "0"
                                        }).reduce(function(e, t) {
                                            return e + parseInt(t, 10)
                                        }, 0);
                                        return Object(L.e)(t, {
                                            style: "currency",
                                            currency: "USD"
                                        }) + " - " + Object(L.c)(new Date(e[0].xLabel || "1970-01-01Z"), {
                                            weekday: "short",
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                    },
                                    label: function(e, t) {
                                        return " " + Object(L.e)(parseInt(e.yLabel || "0", 10), {
                                            style: "currency",
                                            currency: "USD"
                                        }) + " " + (void 0 !== e.datasetIndex && t.datasets ? t.datasets[e.datasetIndex].label : "")
                                    }
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    boxWidth: 12
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                xAxes: [{
                                    stacked: !0,
                                    gridLines: {
                                        display: !1
                                    },
                                    ticks: {
                                        display: !1
                                    }
                                }],
                                yAxes: [{
                                    stacked: !0,
                                    gridLines: {
                                        color: "rgba(150,150,150,0.2)",
                                        zeroLineColor: "rgba(150,150,150,0.2)",
                                        tickMarkLength: 5
                                    },
                                    ticks: {
                                        min: 0,
                                        maxTicksLimit: 5,
                                        callback: function(e) {
                                            return Object(L.e)(e, {
                                                style: "currency",
                                                currency: "USD"
                                            })
                                        }
                                    }
                                }]
                            }
                        }
                    })
                }, t.prototype.componentWillUpdate = function(e) {
                    this.myChart.data = ae(e.datasets, e.timestampLabels), this.myChart.update()
                }, t.prototype.render = function() {
                    var e = this;
                    return _.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    })
                }, t.prototype.setCanvasResolution = function() {
                    var e = ee.width,
                        t = ee.height,
                        n = ne(this.canvas.getContext("2d"));
                    this.canvas.width = e * n, this.canvas.height = t * n, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t = m.__decorate([Object(p.c)("RevenueChart")], t)
            }(_.Component),
            ne = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            ae = function(e, t) {
                return {
                    labels: t.slice(0),
                    datasets: e.map(function(e) {
                        return {
                            label: e.categoryLabel,
                            backgroundColor: e.color,
                            borderCapStyle: "round",
                            borderColor: "#6441A4",
                            borderWidth: 0,
                            fill: !0,
                            lineTension: .3,
                            pointRadius: 4,
                            pointBackgroundColor: "#B2A0D2",
                            pointBorderColor: "#B2A0D2",
                            pointBorderWidth: 2,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "#6441A4",
                            pointHoverBorderWidth: 6,
                            pointHoverBorderColor: "#B2A0D2",
                            data: e.data.slice(0),
                            spanGaps: !0
                        }
                    })
                }
            },
            re = te,
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        members: [],
                        startTime: new Date,
                        endTime: new Date,
                        groupChecked: !0,
                        revenues: {
                            twitch_subscriptions: {
                                categoryLabel: "",
                                color: "",
                                data: []
                            },
                            prime_subscriptions: {
                                categoryLabel: "",
                                color: "",
                                data: []
                            },
                            bits: {
                                categoryLabel: "",
                                color: "",
                                data: []
                            },
                            ads: {
                                categoryLabel: "",
                                color: "",
                                data: []
                            },
                            timestampLabels: []
                        }
                    }, t.toggleMemberChecked = function(e) {
                        var n = t.state.members.slice(),
                            a = n.find(function(t) {
                                return t.id === e.id
                            });
                        a.checked = !a.checked, t.setState({
                            members: n,
                            groupChecked: !1
                        })
                    }, t.toggleGroupChecked = function() {
                        var e = !t.state.groupChecked,
                            n = t.state.members.map(function(t, n) {
                                return t.checked = e && n < 100, t
                            });
                        t.setState({
                            groupChecked: e,
                            members: n
                        })
                    }, t.handleTimeRangeChange = function(e, n) {
                        t.setState({
                            startTime: e,
                            endTime: n
                        })
                    }, t.fetchMembersData = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(e) {
                                return this.setState({}), [2]
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a;
                        return m.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.props.optionalData && this.props.optionalData.members ? (e = this.props.optionalData.members, [3, 3]) : [3, 1];
                                case 1:
                                    return [4, A(this.props.teamName, b.RevenueRevealed)];
                                case 2:
                                    e = r.sent(), r.label = 3;
                                case 3:
                                    return t = e.map(function(e, t) {
                                        return m.__assign({}, e, {
                                            checked: t < 100
                                        })
                                    }), this.setState({
                                        members: t
                                    }), n = this.setState, a = {}, [4, G()];
                                case 4:
                                    return n.apply(this, [(a.revenues = r.sent(), a)]), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [this.state.revenues.twitch_subscriptions, this.state.revenues.prime_subscriptions, this.state.revenues.bits, this.state.revenues.ads];
                    return _.createElement(v, {
                        title: Y(o.Revenue),
                        titleSelector: "revenue-page-title"
                    }, _.createElement(M._17, {
                        border: !0,
                        fullWidth: !0
                    }, _.createElement(M.U, {
                        display: M.H.Flex,
                        flexDirection: M.J.Row,
                        justifyContent: M.T.Between,
                        margin: 2
                    }, _.createElement(M.U, {
                        display: M.H.Flex,
                        flexDirection: M.J.Row
                    }, _.createElement(M.U, {
                        margin: {
                            right: 1
                        }
                    }, _.createElement(U, {
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        fetchMembersData: this.fetchMembersData,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), _.createElement(z, {
                        onMonthSelection: this.handleTimeRangeChange
                    })), _.createElement(M.U, null, _.createElement(M._21, {
                        color: M.F.Alt2
                    }, Object(L.d)("* All revenue values are estimated (in $USD)", "TeamsDashboard")))), _.createElement(M.U, {
                        display: M.H.Flex,
                        flexDirection: M.J.Row,
                        justifyContent: M.T.Between,
                        margin: 2
                    }, _.createElement(N, {
                        revenues: $(e),
                        totalTitle: Object(L.d)("Total Revenue", "TeamsDashboard"),
                        summaryItemTitleSuffix: "*"
                    })), _.createElement(M._17, {
                        padding: 2,
                        background: M.m.Base,
                        borderTop: !0
                    }, _.createElement(re, {
                        timestampLabels: this.state.revenues.timestampLabels,
                        datasets: e
                    }))))
                }, t = m.__decorate([Object(p.c)("RevenuePage", {
                    autoReportInteractive: !0,
                    destination: f.a.TeamsDashboardRevenue
                })], t)
            }(_.Component),
            oe = ie,
            se = n(4),
            de = {
                "side-nav-bar__option": !0,
                "side-nav-bar__option--active": !0
            },
            ue = function(e) {
                var t = function(t) {
                    return se(e.page === t ? de : "side-nav-bar__option")
                };
                return _.createElement(M._17, {
                    display: M.H.Block,
                    className: "side-nav-bar",
                    fullHeight: !0,
                    borderRight: !0
                }, _.createElement(M.U, {
                    padding: {
                        top: 2,
                        x: 2
                    },
                    margin: {
                        bottom: .5
                    }
                }, _.createElement(M._21, {
                    type: M._26.H4,
                    fontSize: M.L.Size5
                }, Object(L.d)("Team Dashboard", "TeamsDashboard"))), _.createElement("ul", null, _.createElement("li", null, _.createElement(M.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.BasicInfo
                }, _.createElement(M.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.BasicInfo)
                }, Y(o.BasicInfo)))), _.createElement("li", null, _.createElement(M.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Customize
                }, _.createElement(M.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Customize)
                }, Y(o.Customize)))), _.createElement("li", null, _.createElement(M.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Revenue,
                    "data-test-selector": "side-nav-revenue"
                }, _.createElement(M.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Revenue)
                }, Y(o.Revenue)))), _.createElement("li", null, _.createElement(M.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Stats,
                    "data-test-selector": "side-nav-stats"
                }, _.createElement(M.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Stats)
                }, Y(o.Stats)))), _.createElement("li", null, _.createElement(M.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Members
                }, _.createElement(M.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Members)
                }, Y(o.Members)))), _.createElement("li", null, _.createElement(M.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.FeaturedChannels
                }, _.createElement(M.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.FeaturedChannels)
                }, Y(o.FeaturedChannels))))))
            },
            le = Object(p.c)("Navbar", {
                autoReportInteractive: !0
            })(ue);
        ! function(e) {
            e.AverageViewers = "concurrent_viewers", e.NewFollowers = "follows"
        }(P || (P = {}));
        var ce = function(e) {
                switch (e) {
                    case P.AverageViewers:
                        return Object(L.d)("Avg. Viewers", "TeamsDashboard");
                    case P.NewFollowers:
                        return Object(L.d)("New Followers", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            me = function(e) {
                var t = function(t) {
                    e.onChange(t.target.value)
                };
                return _.createElement(M.U, {
                    className: "metric-select-menu"
                }, _.createElement(M._14, {
                    value: "" + e.metric,
                    onChange: t
                }, _.createElement("option", {
                    value: P.AverageViewers
                }, ce(P.AverageViewers)), _.createElement("option", {
                    value: P.NewFollowers
                }, ce(P.NewFollowers))))
            },
            _e = me,
            he = {
                width: 800,
                height: 380
            },
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.setCanvasResolution(), this.myChart = new Q(this.canvas, {
                        type: "line",
                        data: {
                            datasets: [{
                                label: this.props.lineChartData.chartLabel,
                                backgroundColor: "#6441A4",
                                borderCapStyle: "round",
                                borderColor: "#6441A4",
                                borderWidth: 1,
                                fill: !0,
                                lineTension: .3,
                                pointRadius: 4,
                                pointBackgroundColor: "#B2A0D2",
                                pointBorderColor: "#B2A0D2",
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                pointHoverBackgroundColor: "#6441A4",
                                pointHoverBorderWidth: 6,
                                pointHoverBorderColor: "#B2A0D2",
                                data: this.props.lineChartData.data,
                                spanGaps: !0
                            }],
                            labels: this.props.lineChartData.timeLabels
                        },
                        options: {
                            tooltips: {
                                callbacks: {
                                    title: function(e, t) {
                                        var n = "",
                                            a = e[0];
                                        return t && t.labels && (n = t.labels[a.index || 0]), Object(L.c)(new Date(n), {
                                            weekday: "short",
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            hour: "numeric",
                                            timeZone: "UTC"
                                        })
                                    },
                                    label: function(e) {
                                        return Math.round(parseFloat(e.yLabel || "0"))
                                    }
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    boxWidth: 12
                                }
                            },
                            maintainAspectRatio: !1,
                            responsive: !0,
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    },
                                    stacked: !0,
                                    ticks: {
                                        fontColor: "#898395",
                                        callback: function(e) {
                                            var t = new Date(e);
                                            return 0 === t.getUTCHours() ? Object(L.c)(t, "full") : ""
                                        }
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color: "#EFEEF1",
                                        tickMarkLength: 5,
                                        zeroLineColor: "#EFEEF1"
                                    },
                                    stacked: !0,
                                    ticks: {
                                        maxTicksLimit: 6,
                                        min: 0
                                    }
                                }]
                            }
                        }
                    })
                }, t.prototype.componentWillUpdate = function(e) {
                    this.myChart && this.myChart.data && this.myChart.data.datasets && (this.myChart.data.datasets[0].data = e.lineChartData.data, this.myChart.data.datasets[0].label = e.lineChartData.chartLabel, this.myChart.data.labels = e.lineChartData.timeLabels, this.myChart.update())
                }, t.prototype.render = function() {
                    var e = this;
                    return _.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    })
                }, t.prototype.setCanvasResolution = function() {
                    var e = he.width,
                        t = he.height,
                        n = pe(this.canvas.getContext("2d"));
                    this.canvas.width = e * n, this.canvas.height = t * n, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t = m.__decorate([Object(p.c)("StatsCanvas")], t)
            }(_.Component),
            pe = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            ye = fe,
            Me = function(e) {
                var t = e.data,
                    n = e.dataType,
                    a = {
                        chartLabel: ce(n),
                        timeLabels: Object.keys(t).sort(function(e, t) {
                            return e.localeCompare(t, void 0, {
                                numeric: !0
                            })
                        }),
                        data: []
                    };
                switch (n) {
                    case P.AverageViewers:
                        a.data = a.timeLabels.map(function(e) {
                            return t[e]
                        });
                        break;
                    case P.NewFollowers:
                        a.data = a.timeLabels.reduce(function(e, n) {
                            return e.push(t[n] + (e.length ? e[e.length - 1] : 0)), e
                        }, []);
                        break;
                    default:
                        throw new Error
                }
                return _.createElement(ye, {
                    lineChartData: a
                })
            },
            ge = function(e) {
                var t = e.columnName;
                return _.createElement(M.N, null, _.createElement(M.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(M.U, null)), _.createElement(M.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(M.U, null, _.createElement(M._21, {
                    bold: !0
                }, t))), _.createElement(M.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(M.U, null, _.createElement(M._21, {
                    bold: !0
                }, Object(L.d)("Views", "TeamsDashboard")))), _.createElement(M.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(M.U, null, _.createElement(M._21, {
                    bold: !0
                }, Object(L.d)("Percent", "TeamsDashboard")))))
            },
            ve = ge,
            be = function(e) {
                var t = e.rowContent;
                return _.createElement(M.N, null, _.createElement(M.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(M.U, {
                    fullHeight: !0,
                    display: M.H.Flex,
                    alignItems: M.c.Center
                }, _.createElement(M._5, {
                    value: t.percent,
                    mask: !0
                }))), _.createElement(M.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(M.U, null, _.createElement(M._21, {
                    ellipsis: !0
                }, t.name))), _.createElement(M.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(M.U, null, _.createElement(M._21, null, Object(L.e)(t.views)))), _.createElement(M.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(M.U, null, _.createElement(M._21, null, Object(L.e)(t.percent), "%"))))
            },
            Le = be,
            Ye = function(e) {
                var t = e.tableName,
                    n = e.columnName,
                    a = e.rowData,
                    r = e.isGeo,
                    i = a.reduce(function(e, t) {
                        return e + t.views
                    }, 0),
                    o = a.sort(function(e, t) {
                        return t.views - e.views || e.name.localeCompare(t.name)
                    });
                return _.createElement(M.U, {
                    display: M.H.Flex,
                    flexDirection: M.J.Column,
                    padding: 2,
                    className: "table",
                    flexWrap: M.K.NoWrap,
                    fullWidth: !0
                }, De(t, o.length), ke(o, i, n, r))
            },
            ke = function(e, t, n, a) {
                return 0 === e.length ? xe() : a && 1 === e.length ? Te(e[0].name) : we(e, n, t)
            },
            De = function(e, t) {
                var n = Object(L.d)("{tableName}", {
                    tableName: e
                }, "TeamsDashboard");
                return t > 10 ? n = Object(L.d)("{tableName} (Top 10)", {
                    tableName: e
                }, "TeamsDashboard") : t > 1 && (n = Object(L.d)("{tableName} (All)", {
                    tableName: e
                }, "TeamsDashboard")), _.createElement(M.U, {
                    padding: {
                        bottom: 1
                    }
                }, _.createElement(M._21, {
                    type: M._26.H4
                }, n))
            },
            xe = function() {
                return _.createElement(M._21, null, Object(L.d)("Not enough data for us to display", "TeamsDashboard"))
            },
            Te = function(e) {
                return _.createElement(M._21, null, Object(L.d)("The top viewer location was {name}", {
                    name: e
                }, "TeamsDashboard"))
            },
            we = function(e, t, n) {
                return _.createElement(M.U, null, _.createElement(M.U, null, _.createElement(ve, {
                    columnName: t
                })), e.slice(0, 10).map(function(e, t) {
                    var a = e.name,
                        r = e.views,
                        i = Math.round(r / n * 100);
                    return _.createElement(M.U, {
                        key: t
                    }, _.createElement(Le, {
                        rowContent: {
                            name: a,
                            views: r,
                            percent: i
                        }
                    }))
                }))
            },
            Se = Ye,
            je = Object(L.d)("Referrer", "TeamsDashboard"),
            He = function(e) {
                var t = Object(L.d)("Views by Referrer", "TeamsDashboard"),
                    n = "";
                return e.internalReferral && e.internalReferral.length && (t = Object(L.d)("Views from Outside Twitch", "TeamsDashboard"), n = _.createElement(M._17, {
                    display: M.H.Flex,
                    flexGrow: 1,
                    borderBottom: !0,
                    borderLeft: !0
                }, _.createElement(Se, {
                    tableName: Object(L.d)("Views from Twitch", "TeamsDashboard"),
                    columnName: je,
                    rowData: e.internalReferral
                }))), _.createElement(M._17, {
                    className: "all-tables-wrapper",
                    display: M.H.Flex,
                    flexDirection: M.J.Row,
                    borderTop: !0
                }, _.createElement(M.U, {
                    display: M.H.Flex,
                    flexGrow: 1,
                    flexDirection: M.J.Column,
                    flexWrap: M.K.NoWrap
                }, _.createElement(M._17, {
                    display: M.H.Flex,
                    flexGrow: 1,
                    borderBottom: !0
                }, _.createElement(Se, {
                    tableName: Object(L.d)("Views by Location", "TeamsDashboard"),
                    columnName: Object(L.d)("Location", "TeamsDashboard"),
                    rowData: e.geographical,
                    isGeo: !0
                })), _.createElement(M._17, {
                    display: M.H.Flex,
                    flexGrow: 1
                }, _.createElement(Se, {
                    tableName: Object(L.d)("Views by Platform", "TeamsDashboard"),
                    columnName: Object(L.d)("Platform", "TeamsDashboard"),
                    rowData: e.platform
                }))), _.createElement(M.U, {
                    display: M.H.Flex,
                    flexGrow: 1,
                    flexDirection: M.J.Column,
                    flexWrap: M.K.NoWrap
                }, n, _.createElement(M._17, {
                    display: M.H.Flex,
                    flexGrow: 1,
                    borderLeft: !0
                }, _.createElement(Se, {
                    tableName: t,
                    columnName: je,
                    rowData: e.externalReferral
                }))))
            },
            Oe = He,
            Ce = function(e) {
                void 0 === e && (e = "Time,Views\n01 Oct 00:00,360\n01 Oct 01:00,300\n");
                var t = encodeURIComponent(e),
                    n = document.createElement("a");
                n.href = "data:text/csv;charset=utf-8," + t, n.download = "views.csv", document.body.appendChild(n), n.click(), document.body.removeChild(n)
            },
            Pe = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t += n + "," + e[n] + "\n"
                }, "Time,Views\n")
            },
            Ae = this,
            Fe = function(e, t, n, a) {
                return m.__awaiter(Ae, void 0, void 0, function() {
                    var r, i, o, s;
                    return m.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return r = {
                                    geographical: [],
                                    platform: [],
                                    internalReferral: [],
                                    externalReferral: []
                                }, t.length < 1 ? [2, r] : (i = t.join(","), o = "/v5/teams/" + e + "/stats/video_play_demographics?channel_ids=" + i + "&start_time=" + n + "&end_time=" + a, [4, Object(H.c)({
                                    path: o
                                })]);
                            case 1:
                                return s = d.sent(), [2, s.body ? Ee(s.body) : r]
                        }
                    })
                })
            },
            Ee = function(e) {
                for (var t = e.video_play_demographics, n = {
                        geographical: [],
                        platform: [],
                        internalReferral: [],
                        externalReferral: []
                    }, r = 0, i = Object.keys(t.geo); r < i.length; r++) {
                    var o = i[r];
                    n.geographical.push({
                        name: a(o),
                        views: t.geo[o]
                    })
                }
                for (var s = 0, d = Object.keys(t.platform); s < d.length; s++) {
                    var o = d[s];
                    n.platform.push({
                        name: Ie(o),
                        views: t.platform[o]
                    })
                }
                for (var u = 0, l = Object.keys(t.referrer.internal); u < l.length; u++) {
                    var o = l[u];
                    n.internalReferral.push({
                        name: ze(o),
                        views: t.referrer.internal[o]
                    })
                }
                for (var c = 0, m = Object.keys(t.referrer.external); c < m.length; c++) {
                    var o = m[c];
                    n.externalReferral.push({
                        name: Re(o),
                        views: t.referrer.external[o]
                    })
                }
                return n
            },
            We = Object(L.d)("Other", "TeamsDashboard"),
            Ie = function(e) {
                return {
                    unknown: Object(L.d)("Unknown", "TeamsDashboard"),
                    tv: Object(L.d)("TV", "TeamsDashboard"),
                    ios: Object(L.d)("iOS App", "TeamsDashboard"),
                    web: Object(L.d)("Web", "TeamsDashboard"),
                    android: Object(L.d)("Android App", "TeamsDashboard"),
                    mobile_web: Object(L.d)("Mobile Web", "TeamsDashboard"),
                    mobile_aggregated: Object(L.d)("Mobile", "TeamsDashboard"),
                    console: Object(L.d)("Console", "TeamsDashboard"),
                    other: We
                }[e] || e
            },
            ze = function(e) {
                return {
                    other: We,
                    front_page_featured: Object(L.d)("Featured Section - Front Page", "TeamsDashboard"),
                    creative_page_featured: Object(L.d)("Featured Section - Creative Page", "TeamsDashboard"),
                    hosted: Object(L.d)("Hosts", "TeamsDashboard"),
                    email_live_notification: Object(L.d)("Notifications - Email", "TeamsDashboard"),
                    onsite_notification: Object(L.d)("Notifications - Onsite", "TeamsDashboard"),
                    followed_channel: Object(L.d)("Followers", "TeamsDashboard"),
                    directory_browse: Object(L.d)("Browse Page", "TeamsDashboard"),
                    search: Object(L.d)("Searches", "TeamsDashboard"),
                    clips_live: Object(L.d)("Clips", "TeamsDashboard"),
                    friend_presence: Object(L.d)("Friends", "TeamsDashboard"),
                    top_nav_bar: Object(L.d)("Your Channel Page", "TeamsDashboard"),
                    recommended_channel: Object(L.d)("Recommendations", "TeamsDashboard"),
                    other_channel_page: Object(L.d)("Other Channel Page", "TeamsDashboard")
                }[e] || Object(L.d)("{name}'s Channel Page", {
                    name: e
                }, "TeamsDashboard")
            },
            Re = function(e) {
                return (t = {
                    facebook: Object(L.d)("Facebook", "TeamsDashboard"),
                    google: Object(L.d)("Google", "TeamsDashboard"),
                    reddit: Object(L.d)("Reddit", "TeamsDashboard"),
                    youtube: Object(L.d)("Youtube", "TeamsDashboard")
                }, t["t.co"] = Object(L.d)("Twitter", "TeamsDashboard"), t.unknown = Object(L.d)("Direct/Unknown", "TeamsDashboard"), t.twitch_aggregate = Object(L.d)("Twitch", "TeamsDashboard"), t.external_aggregate = Object(L.d)("External", "TeamsDashboard"), t)[e] || e;
                var t
            },
            Ne = this,
            Be = function(e, t, n, a, r) {
                return m.__awaiter(Ne, void 0, void 0, function() {
                    var i, o, s, d;
                    return m.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (0 === n.length) return [2, Promise.resolve({})];
                                switch (i = "/v5/teams/" + t + "/stats/" + e + "?channel_ids=" + n + "&start_time=" + a + "&end_time=" + r, d = e) {
                                    case P.AverageViewers:
                                        return [3, 1];
                                    case P.NewFollowers:
                                        return [3, 3]
                                }
                                return [3, 5];
                            case 1:
                                return [4, Ve(i)];
                            case 2:
                                return o = u.sent(), s = qe, [3, 6];
                            case 3:
                                return [4, Ue(i)];
                            case 4:
                                return o = u.sent(), s = Ze, [3, 6];
                            case 5:
                                throw new Error("fetch type is not in StatsEndpoint enum");
                            case 6:
                                return [2, Je(Ge(o, a, r, s))]
                        }
                    })
                })
            },
            Ve = function(e) {
                return m.__awaiter(Ne, void 0, void 0, function() {
                    var t;
                    return m.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Object(H.c)({
                                    path: e
                                })];
                            case 1:
                                return t = n.sent(), [2, t.body ? t.body.concurrent_viewers : {}]
                        }
                    })
                })
            },
            Ue = function(e) {
                return m.__awaiter(Ne, void 0, void 0, function() {
                    var t;
                    return m.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Object(H.c)({
                                    path: e
                                })];
                            case 1:
                                return t = n.sent(), [2, t.body ? t.body.follows : {}]
                        }
                    })
                })
            },
            Je = function(e) {
                for (var t = {}, n = Object.keys(e), a = 0, r = n; a < r.length; a++)
                    for (var i = r[a], o = e[i], s = 0, d = o; s < d.length; s++) {
                        var u = d[s],
                            l = u.timestamp,
                            c = u.count;
                        t[l] ? t[l] += c : t[l] = c
                    }
                return t
            },
            Ge = function(e, t, n, a) {
                for (var r = {}, i = Object.keys(e), o = 0, s = i; o < s.length; o++) {
                    var d = s[o];
                    r[d] = a(t, n, e[d])
                }
                return r
            },
            qe = function(e, t, n) {
                for (var a = Ke(e, t), r = a.map(function(e) {
                        return m.__assign({}, e, {
                            sampleSize: 0
                        })
                    }), i = 0, o = n; i < o.length; i++) {
                    var s = o[i],
                        d = s.timestamp,
                        u = s.count;
                    ! function(e, t) {
                        var n = r.find(function(t) {
                            return t.timestamp === $e(e)
                        });
                        n && 0 !== t && (n.count += t, n.sampleSize += 1)
                    }(d, u)
                }
                return r.map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0
                    }
                })
            },
            Ze = function(e, t, n) {
                for (var a = Ke(e, t), r = 0, i = n; r < i.length; r++) {
                    var o = i[r],
                        s = o.timestamp,
                        d = o.count;
                    ! function(e, t) {
                        var n = a.find(function(t) {
                            return t.timestamp === $e(e)
                        });
                        n && (n.count += t)
                    }(s, d)
                }
                return a
            },
            Ke = function(e, t) {
                for (var n = [], a = new Date($e(e)), r = new Date(t); a < r;) n.push({
                    timestamp: a.toISOString(),
                    count: 0
                }), a.setUTCHours(a.getUTCHours() + 4);
                return n
            },
            $e = function(e) {
                var t = new Date(e),
                    n = t.getUTCHours() - t.getUTCHours() % 4;
                return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), n)).toISOString()
            },
            Xe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.toggleMemberChecked = function(e) {
                        var t = n.state.members.slice(),
                            a = t.find(function(t) {
                                return t.id === e.id
                            });
                        a.checked = !a.checked, n.setState({
                            members: t,
                            groupChecked: !1
                        })
                    }, n.toggleGroupChecked = function() {
                        var e = !n.state.groupChecked,
                            t = n.state.members.map(function(t, n) {
                                return t.checked = e && n < 100, t
                            });
                        n.setState({
                            groupChecked: e,
                            members: t
                        })
                    }, n.fetchStats = function() {
                        return m.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, a, r;
                            return m.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = this.state.members.filter(function(e) {
                                            return e.checked
                                        }).map(function(e) {
                                            return e.id
                                        }), t = this.state.startTime.toISOString(), n = this.state.endTime.toISOString(), this.state.metric !== P.AverageViewers ? [3, 2] : [4, Fe(this.props.teamName, e, t, n)];
                                    case 1:
                                        a = i.sent(), this.setState({
                                            demographics: a
                                        }), i.label = 2;
                                    case 2:
                                        return [4, Be(this.state.metric, this.props.teamName, e, t, n)];
                                    case 3:
                                        return r = i.sent(), this.setState({
                                            data: r
                                        }), [2]
                                }
                            })
                        })
                    }, n.handleTimeRangeChange = function(e, t) {
                        n.setState({
                            startTime: e,
                            endTime: t
                        }, n.fetchStats)
                    }, n.onMetricChange = function(e) {
                        n.setState({
                            metric: e
                        }, n.fetchStats)
                    };
                    var a = new Date(Date.UTC((new Date).getUTCFullYear(), (new Date).getUTCMonth()));
                    return n.state = {
                        members: [],
                        data: {},
                        demographics: {
                            geographical: [],
                            platform: [],
                            internalReferral: [],
                            externalReferral: []
                        },
                        startTime: a,
                        endTime: Object(W.addMonths)(a, 1),
                        groupChecked: !0,
                        metric: P.AverageViewers
                    }, n
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return m.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, A(this.props.teamName)];
                                case 1:
                                    return e = n.sent(), t = e.map(function(e, t) {
                                        return m.__assign({}, e, {
                                            checked: t < 100
                                        })
                                    }), this.setState({
                                        members: t
                                    }, this.fetchStats), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return _.createElement(v, {
                        title: Y(o.Stats),
                        titleSelector: "stats-page-title"
                    }, _.createElement(M._17, {
                        border: !0,
                        fullWidth: !0
                    }, _.createElement(M.U, {
                        display: M.H.Flex,
                        flexDirection: M.J.Row,
                        justifyContent: M.T.Between,
                        margin: 2
                    }, _.createElement(M.U, {
                        display: M.H.Flex,
                        flexDirection: M.J.Row
                    }, _.createElement(M.U, {
                        margin: {
                            right: 1
                        }
                    }, _.createElement(U, {
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        fetchMembersData: this.fetchStats,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), _.createElement(_e, {
                        metric: this.state.metric,
                        onChange: this.onMetricChange
                    }), _.createElement(z, {
                        onMonthSelection: this.handleTimeRangeChange
                    })), _.createElement(M.U, null, _.createElement(M.u, {
                        "data-test-selector": "export-csv-button",
                        onClick: this.handleCSVClick
                    }, Object(L.d)("Export Data", "TeamsDashboard")))), _.createElement(M.U, {
                        fullWidth: !0
                    }, _.createElement(Me, {
                        data: this.state.data,
                        dataType: this.state.metric
                    })), this.state.metric === P.AverageViewers ? _.createElement(Oe, m.__assign({}, this.state.demographics)) : ""))
                }, t.prototype.handleCSVClick = function() {
                    var e = Pe(this.state.data);
                    Ce(e)
                }, t = m.__decorate([Object(p.c)("StatsPage", {
                    autoReportInteractive: !0,
                    destination: f.a.TeamsDashboardStats
                })], t)
            }(_.Component),
            Qe = Xe,
            et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderStatsPage = function() {
                        return _.createElement(Qe, {
                            teamName: t.props.match.params.teamName
                        })
                    }, t.renderBasicInfoPage = function() {
                        return _.createElement(D, null)
                    }, t.renderCustomizePage = function() {
                        return _.createElement(T, null)
                    }, t.renderMembersPage = function() {
                        return _.createElement(E, {
                            teamName: t.props.match.params.teamName
                        })
                    }, t.renderFeaturedChannelsPage = function() {
                        return _.createElement(S, null)
                    }, t.renderRevenuePage = function() {
                        return _.createElement(oe, {
                            teamName: t.props.match.params.teamName
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? _.createElement(M.U, {
                        display: M.H.Flex,
                        flexWrap: M.K.NoWrap,
                        fullWidth: !0,
                        fullHeight: !0
                    }, _.createElement(le, {
                        teamName: this.props.match.params.teamName,
                        page: this.props.match.params.pageName
                    }), _.createElement(M.U, {
                        fullWidth: !0
                    }, _.createElement(h.d, null, _.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + o.Stats,
                        render: this.renderStatsPage
                    }), _.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + o.BasicInfo,
                        render: this.renderBasicInfoPage
                    }), _.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + o.Customize,
                        render: this.renderCustomizePage
                    }), _.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + o.Members,
                        render: this.renderMembersPage
                    }), _.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + o.FeaturedChannels,
                        render: this.renderFeaturedChannelsPage
                    }), _.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + o.Revenue,
                        render: this.renderRevenuePage
                    }), _.createElement(h.a, {
                        to: "/teams/" + this.props.match.params.teamName + "/dashboard/" + o.Stats
                    })))) : (this.props.onAnonymousVisit(), _.createElement(M.X, {
                        fillContent: !0
                    }))
                }, t
            }(_.Component),
            tt = et,
            nt = Object(s.a)(i, r)(tt);
        n.d(t, "TeamsDashboardRoot", function() {
            return nt
        })
    },
    809: function(e, t, n) {
        (function(e) {
            ! function(t, n) {
                e.exports = n()
            }(0, function() {
                "use strict";

                function t() {
                    return va.apply(null, arguments)
                }

                function a(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function i(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }

                function o(e) {
                    return void 0 === e
                }

                function s(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function d(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function u(e, t) {
                    var n, a = [];
                    for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                    return a
                }

                function l(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function c(e, t) {
                    for (var n in t) l(t, n) && (e[n] = t[n]);
                    return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function m(e, t, n, a) {
                    return gt(e, t, n, a, !0).utc()
                }

                function _() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }
                }

                function h(e) {
                    return null == e._pf && (e._pf = _()), e._pf
                }

                function f(e) {
                    if (null == e._isValid) {
                        var t = h(e),
                            n = La.call(t.parsedDateParts, function(e) {
                                return null != e
                            }),
                            a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                        if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                        e._isValid = a
                    }
                    return e._isValid
                }

                function p(e) {
                    var t = m(NaN);
                    return null != e ? c(h(t), e) : h(t).userInvalidated = !0, t
                }

                function y(e, t) {
                    var n, a, r;
                    if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), Ya.length > 0)
                        for (n = 0; n < Ya.length; n++) a = Ya[n], r = t[a], o(r) || (e[a] = r);
                    return e
                }

                function M(e) {
                    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === ka && (ka = !0, t.updateOffset(this), ka = !1)
                }

                function g(e) {
                    return e instanceof M || null != e && null != e._isAMomentObject
                }

                function v(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function b(e) {
                    var t = +e,
                        n = 0;
                    return 0 !== t && isFinite(t) && (n = v(t)), n
                }

                function L(e, t, n) {
                    var a, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        o = 0;
                    for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && b(e[a]) !== b(t[a])) && o++;
                    return o + i
                }

                function Y(e) {
                    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function k(e, n) {
                    var a = !0;
                    return c(function() {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
                            for (var r, i = [], o = 0; o < arguments.length; o++) {
                                if (r = "", "object" == typeof arguments[o]) {
                                    r += "\n[" + o + "] ";
                                    for (var s in arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[o];
                                i.push(r)
                            }
                            Y(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
                        }
                        return n.apply(this, arguments)
                    }, n)
                }

                function D(e, n) {
                    null != t.deprecationHandler && t.deprecationHandler(e, n), Da[e] || (Y(n), Da[e] = !0)
                }

                function x(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function T(e) {
                    var t, n;
                    for (n in e) t = e[n], x(t) ? this[n] = t : this["_" + n] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function w(e, t) {
                    var n, a = c({}, e);
                    for (n in t) l(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, c(a[n], e[n]), c(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                    for (n in e) l(e, n) && !l(t, n) && r(e[n]) && (a[n] = c({}, a[n]));
                    return a
                }

                function S(e) {
                    null != e && this.set(e)
                }

                function j(e, t, n) {
                    var a = this._calendar[e] || this._calendar.sameElse;
                    return x(a) ? a.call(t, n) : a
                }

                function H(e) {
                    var t = this._longDateFormat[e],
                        n = this._longDateFormat[e.toUpperCase()];
                    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }

                function O() {
                    return this._invalidDate
                }

                function C(e) {
                    return this._ordinal.replace("%d", e)
                }

                function P(e, t, n, a) {
                    var r = this._relativeTime[n];
                    return x(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
                }

                function A(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return x(n) ? n(t) : n.replace(/%s/i, t)
                }

                function F(e, t) {
                    var n = e.toLowerCase();
                    Ca[n] = Ca[n + "s"] = Ca[t] = e
                }

                function E(e) {
                    return "string" == typeof e ? Ca[e] || Ca[e.toLowerCase()] : void 0
                }

                function W(e) {
                    var t, n, a = {};
                    for (n in e) l(e, n) && (t = E(n)) && (a[t] = e[n]);
                    return a
                }

                function I(e, t) {
                    Pa[e] = t
                }

                function z(e) {
                    var t = [];
                    for (var n in e) t.push({
                        unit: n,
                        priority: Pa[n]
                    });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }), t
                }

                function R(e, n) {
                    return function(a) {
                        return null != a ? (B(this, e, a), t.updateOffset(this, n), this) : N(this, e)
                    }
                }

                function N(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function B(e, t, n) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
                }

                function V(e) {
                    return e = E(e), x(this[e]) ? this[e]() : this
                }

                function U(e, t) {
                    if ("object" == typeof e) {
                        e = W(e);
                        for (var n = z(e), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
                    } else if (e = E(e), x(this[e])) return this[e](t);
                    return this
                }

                function J(e, t, n) {
                    var a = "" + Math.abs(e),
                        r = t - a.length;
                    return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
                }

                function G(e, t, n, a) {
                    var r = a;
                    "string" == typeof a && (r = function() {
                        return this[a]()
                    }), e && (Wa[e] = r), t && (Wa[t[0]] = function() {
                        return J(r.apply(this, arguments), t[1], t[2])
                    }), n && (Wa[n] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function q(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function Z(e) {
                    var t, n, a = e.match(Aa);
                    for (t = 0, n = a.length; t < n; t++) Wa[a[t]] ? a[t] = Wa[a[t]] : a[t] = q(a[t]);
                    return function(t) {
                        var r, i = "";
                        for (r = 0; r < n; r++) i += x(a[r]) ? a[r].call(t, e) : a[r];
                        return i
                    }
                }

                function K(e, t) {
                    return e.isValid() ? (t = $(t, e.localeData()), Ea[t] = Ea[t] || Z(t), Ea[t](e)) : e.localeData().invalidDate()
                }

                function $(e, t) {
                    function n(e) {
                        return t.longDateFormat(e) || e
                    }
                    var a = 5;
                    for (Fa.lastIndex = 0; a >= 0 && Fa.test(e);) e = e.replace(Fa, n), Fa.lastIndex = 0, a -= 1;
                    return e
                }

                function X(e, t, n) {
                    nr[e] = x(t) ? t : function(e, a) {
                        return e && n ? n : t
                    }
                }

                function Q(e, t) {
                    return l(nr, e) ? nr[e](t._strict, t._locale) : new RegExp(ee(e))
                }

                function ee(e) {
                    return te(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) {
                        return t || n || a || r
                    }))
                }

                function te(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function ne(e, t) {
                    var n, a = t;
                    for ("string" == typeof e && (e = [e]), s(t) && (a = function(e, n) {
                            n[t] = b(e)
                        }), n = 0; n < e.length; n++) ar[e[n]] = a
                }

                function ae(e, t) {
                    ne(e, function(e, n, a, r) {
                        a._w = a._w || {}, t(e, a._w, a, r)
                    })
                }

                function re(e, t, n) {
                    null != t && l(ar, e) && ar[e](t, n._a, n, e)
                }

                function ie(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }

                function oe(e, t) {
                    return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || hr).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
                }

                function se(e, t) {
                    return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[hr.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }

                function de(e, t, n) {
                    var a, r, i, o = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) i = m([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? (r = _r.call(this._shortMonthsParse, o), -1 !== r ? r : null) : (r = _r.call(this._longMonthsParse, o), -1 !== r ? r : null) : "MMM" === t ? -1 !== (r = _r.call(this._shortMonthsParse, o)) ? r : (r = _r.call(this._longMonthsParse, o), -1 !== r ? r : null) : -1 !== (r = _r.call(this._longMonthsParse, o)) ? r : (r = _r.call(this._shortMonthsParse, o), -1 !== r ? r : null)
                }

                function ue(e, t, n) {
                    var a, r, i;
                    if (this._monthsParseExact) return de.call(this, e, t, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                        if (r = m([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                        if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                        if (!n && this._monthsParse[a].test(e)) return a
                    }
                }

                function le(e, t) {
                    var n;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = b(t);
                        else if (t = e.localeData().monthsParse(t), !s(t)) return e;
                    return n = Math.min(e.date(), ie(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
                }

                function ce(e) {
                    return null != e ? (le(this, e), t.updateOffset(this, !0), this) : N(this, "Month")
                }

                function me() {
                    return ie(this.year(), this.month())
                }

                function _e(e) {
                    return this._monthsParseExact ? (l(this, "_monthsRegex") || fe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = yr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }

                function he(e) {
                    return this._monthsParseExact ? (l(this, "_monthsRegex") || fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Mr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }

                function fe() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a = [],
                        r = [],
                        i = [];
                    for (t = 0; t < 12; t++) n = m([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                    for (a.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) a[t] = te(a[t]), r[t] = te(r[t]);
                    for (t = 0; t < 24; t++) i[t] = te(i[t]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
                }

                function pe(e) {
                    return ye(e) ? 366 : 365
                }

                function ye(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function Me() {
                    return ye(this.year())
                }

                function ge(e, t, n, a, r, i, o) {
                    var s = new Date(e, t, n, a, r, i, o);
                    return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
                }

                function ve(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function be(e, t, n) {
                    var a = 7 + t - n;
                    return -(7 + ve(e, 0, a).getUTCDay() - t) % 7 + a - 1
                }

                function Le(e, t, n, a, r) {
                    var i, o, s = (7 + n - a) % 7,
                        d = be(e, a, r),
                        u = 1 + 7 * (t - 1) + s + d;
                    return u <= 0 ? (i = e - 1, o = pe(i) + u) : u > pe(e) ? (i = e + 1, o = u - pe(e)) : (i = e, o = u), {
                        year: i,
                        dayOfYear: o
                    }
                }

                function Ye(e, t, n) {
                    var a, r, i = be(e.year(), t, n),
                        o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return o < 1 ? (r = e.year() - 1, a = o + ke(r, t, n)) : o > ke(e.year(), t, n) ? (a = o - ke(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = o), {
                        week: a,
                        year: r
                    }
                }

                function ke(e, t, n) {
                    var a = be(e, t, n),
                        r = be(e + 1, t, n);
                    return (pe(e) - a + r) / 7
                }

                function De(e) {
                    return Ye(e, this._week.dow, this._week.doy).week
                }

                function xe() {
                    return this._week.dow
                }

                function Te() {
                    return this._week.doy
                }

                function we(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function Se(e) {
                    var t = Ye(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function je(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
                }

                function He(e, t) {
                    return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                }

                function Oe(e, t) {
                    return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }

                function Ce(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }

                function Pe(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }

                function Ae(e, t, n) {
                    var a, r, i, o = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) i = m([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? (r = _r.call(this._weekdaysParse, o), -1 !== r ? r : null) : "ddd" === t ? (r = _r.call(this._shortWeekdaysParse, o), -1 !== r ? r : null) : (r = _r.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "dddd" === t ? -1 !== (r = _r.call(this._weekdaysParse, o)) ? r : -1 !== (r = _r.call(this._shortWeekdaysParse, o)) ? r : (r = _r.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "ddd" === t ? -1 !== (r = _r.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = _r.call(this._weekdaysParse, o)) ? r : (r = _r.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : -1 !== (r = _r.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = _r.call(this._weekdaysParse, o)) ? r : (r = _r.call(this._shortWeekdaysParse, o), -1 !== r ? r : null)
                }

                function Fe(e, t, n) {
                    var a, r, i;
                    if (this._weekdaysParseExact) return Ae.call(this, e, t, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                        if (r = m([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                        if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                        if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                        if (!n && this._weekdaysParse[a].test(e)) return a
                    }
                }

                function Ee(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = je(e, this.localeData()), this.add(e - t, "d")) : t
                }

                function We(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Ie(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = He(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }

                function ze(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = kr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Re(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Dr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function Ne(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function Be() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a, r, i, o = [],
                        s = [],
                        d = [],
                        u = [];
                    for (t = 0; t < 7; t++) n = m([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), o.push(a), s.push(r), d.push(i), u.push(a), u.push(r), u.push(i);
                    for (o.sort(e), s.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = te(s[t]), d[t] = te(d[t]), u[t] = te(u[t]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
                }

                function Ve() {
                    return this.hours() % 12 || 12
                }

                function Ue() {
                    return this.hours() || 24
                }

                function Je(e, t) {
                    G(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function Ge(e, t) {
                    return t._meridiemParse
                }

                function qe(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }

                function Ze(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function Ke(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function $e(e) {
                    for (var t, n, a, r, i = 0; i < e.length;) {
                        for (r = Ke(e[i]).split("-"), t = r.length, n = Ke(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
                            if (a = Xe(r.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && L(r, n, !0) >= t - 1) break;
                            t--
                        }
                        i++
                    }
                    return null
                }

                function Xe(t) {
                    var a = null;
                    if (!Hr[t] && void 0 !== e && e && e.exports) try {
                        a = Tr._abbr, n(1535)("./" + t), Qe(a)
                    } catch (e) {}
                    return Hr[t]
                }

                function Qe(e, t) {
                    var n;
                    return e && (n = o(t) ? nt(e) : et(e, t)) && (Tr = n), Tr._abbr
                }

                function et(e, t) {
                    if (null !== t) {
                        var n = jr;
                        if (t.abbr = e, null != Hr[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Hr[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == Hr[t.parentLocale]) return Or[t.parentLocale] || (Or[t.parentLocale] = []), Or[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            n = Hr[t.parentLocale]._config
                        }
                        return Hr[e] = new S(w(n, t)), Or[e] && Or[e].forEach(function(e) {
                            et(e.name, e.config)
                        }), Qe(e), Hr[e]
                    }
                    return delete Hr[e], null
                }

                function tt(e, t) {
                    if (null != t) {
                        var n, a = jr;
                        null != Hr[e] && (a = Hr[e]._config), t = w(a, t), n = new S(t), n.parentLocale = Hr[e], Hr[e] = n, Qe(e)
                    } else null != Hr[e] && (null != Hr[e].parentLocale ? Hr[e] = Hr[e].parentLocale : null != Hr[e] && delete Hr[e]);
                    return Hr[e]
                }

                function nt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Tr;
                    if (!a(e)) {
                        if (t = Xe(e)) return t;
                        e = [e]
                    }
                    return $e(e)
                }

                function at() {
                    return wa(Hr)
                }

                function rt(e) {
                    var t, n = e._a;
                    return n && -2 === h(e).overflow && (t = n[ir] < 0 || n[ir] > 11 ? ir : n[or] < 1 || n[or] > ie(n[rr], n[ir]) ? or : n[sr] < 0 || n[sr] > 24 || 24 === n[sr] && (0 !== n[dr] || 0 !== n[ur] || 0 !== n[lr]) ? sr : n[dr] < 0 || n[dr] > 59 ? dr : n[ur] < 0 || n[ur] > 59 ? ur : n[lr] < 0 || n[lr] > 999 ? lr : -1, h(e)._overflowDayOfYear && (t < rr || t > or) && (t = or), h(e)._overflowWeeks && -1 === t && (t = cr), h(e)._overflowWeekday && -1 === t && (t = mr), h(e).overflow = t), e
                }

                function it(e) {
                    var t, n, a, r, i, o, s = e._i,
                        d = Cr.exec(s) || Pr.exec(s);
                    if (d) {
                        for (h(e).iso = !0, t = 0, n = Fr.length; t < n; t++)
                            if (Fr[t][1].exec(d[1])) {
                                r = Fr[t][0], a = !1 !== Fr[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, n = Er.length; t < n; t++)
                                if (Er[t][1].exec(d[3])) {
                                    i = (d[2] || " ") + Er[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!a && null != i) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!Ar.exec(d[4])) return void(e._isValid = !1);
                            o = "Z"
                        }
                        e._f = r + (i || "") + (o || ""), mt(e)
                    } else e._isValid = !1
                }

                function ot(e) {
                    var t, n, a, r, i, o, s, d, u = {
                            " GMT": " +0000",
                            " EDT": " -0400",
                            " EST": " -0500",
                            " CDT": " -0500",
                            " CST": " -0600",
                            " MDT": " -0600",
                            " MST": " -0700",
                            " PDT": " -0700",
                            " PST": " -0800"
                        },
                        l = "YXWVUTSRQPONZABCDEFGHIKLM";
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = Ir.exec(t)) {
                        if (a = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", r = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
                            var c = new Date(n[2]),
                                m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][c.getDay()];
                            if (n[1].substr(0, 3) !== m) return h(e).weekdayMismatch = !0, void(e._isValid = !1)
                        }
                        switch (n[5].length) {
                            case 2:
                                0 === d ? s = " +0000" : (d = l.indexOf(n[5][1].toUpperCase()) - 12, s = (d < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00");
                                break;
                            case 4:
                                s = u[n[5]];
                                break;
                            default:
                                s = u[" GMT"]
                        }
                        n[5] = s, e._i = n.splice(1).join(""), o = " ZZ", e._f = a + r + i + o, mt(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function st(e) {
                    var n = Wr.exec(e._i);
                    if (null !== n) return void(e._d = new Date(+n[1]));
                    it(e), !1 === e._isValid && (delete e._isValid, ot(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))
                }

                function dt(e, t, n) {
                    return null != e ? e : null != t ? t : n
                }

                function ut(e) {
                    var n = new Date(t.now());
                    return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                }

                function lt(e) {
                    var t, n, a, r, i = [];
                    if (!e._d) {
                        for (a = ut(e), e._w && null == e._a[or] && null == e._a[ir] && ct(e), null != e._dayOfYear && (r = dt(e._a[rr], a[rr]), (e._dayOfYear > pe(r) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = ve(r, 0, e._dayOfYear), e._a[ir] = n.getUTCMonth(), e._a[or] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = i[t] = a[t];
                        for (; t < 7; t++) e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[sr] && 0 === e._a[dr] && 0 === e._a[ur] && 0 === e._a[lr] && (e._nextDay = !0, e._a[sr] = 0), e._d = (e._useUTC ? ve : ge).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[sr] = 24)
                    }
                }

                function ct(e) {
                    var t, n, a, r, i, o, s, d;
                    if (t = e._w, null != t.GG || null != t.W || null != t.E) i = 1, o = 4, n = dt(t.GG, e._a[rr], Ye(vt(), 1, 4).year), a = dt(t.W, 1), ((r = dt(t.E, 1)) < 1 || r > 7) && (d = !0);
                    else {
                        i = e._locale._week.dow, o = e._locale._week.doy;
                        var u = Ye(vt(), i, o);
                        n = dt(t.gg, e._a[rr], u.year), a = dt(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
                    }
                    a < 1 || a > ke(n, i, o) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (s = Le(n, a, r, i, o), e._a[rr] = s.year, e._dayOfYear = s.dayOfYear)
                }

                function mt(e) {
                    if (e._f === t.ISO_8601) return void it(e);
                    if (e._f === t.RFC_2822) return void ot(e);
                    e._a = [], h(e).empty = !0;
                    var n, a, r, i, o, s = "" + e._i,
                        d = s.length,
                        u = 0;
                    for (r = $(e._f, e._locale).match(Aa) || [], n = 0; n < r.length; n++) i = r[n], a = (s.match(Q(i, e)) || [])[0], a && (o = s.substr(0, s.indexOf(a)), o.length > 0 && h(e).unusedInput.push(o), s = s.slice(s.indexOf(a) + a.length), u += a.length), Wa[i] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(i), re(i, a, e)) : e._strict && !a && h(e).unusedTokens.push(i);
                    h(e).charsLeftOver = d - u, s.length > 0 && h(e).unusedInput.push(s), e._a[sr] <= 12 && !0 === h(e).bigHour && e._a[sr] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[sr] = _t(e._locale, e._a[sr], e._meridiem), lt(e), rt(e)
                }

                function _t(e, t, n) {
                    var a;
                    return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
                }

                function ht(e) {
                    var t, n, a, r, i;
                    if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) i = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], mt(t), f(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == a || i < a) && (a = i, n = t));
                    c(e, n || t)
                }

                function ft(e) {
                    if (!e._d) {
                        var t = W(e._i);
                        e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                            return e && parseInt(e, 10)
                        }), lt(e)
                    }
                }

                function pt(e) {
                    var t = new M(rt(yt(e)));
                    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                }

                function yt(e) {
                    var t = e._i,
                        n = e._f;
                    return e._locale = e._locale || nt(e._l), null === t || void 0 === n && "" === t ? p({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new M(rt(t)) : (d(t) ? e._d = t : a(n) ? ht(e) : n ? mt(e) : Mt(e), f(e) || (e._d = null), e))
                }

                function Mt(e) {
                    var n = e._i;
                    o(n) ? e._d = new Date(t.now()) : d(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? st(e) : a(n) ? (e._a = u(n.slice(0), function(e) {
                        return parseInt(e, 10)
                    }), lt(e)) : r(n) ? ft(e) : s(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
                }

                function gt(e, t, n, o, s) {
                    var d = {};
                    return !0 !== n && !1 !== n || (o = n, n = void 0), (r(e) && i(e) || a(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = n, d._i = e, d._f = t, d._strict = o, pt(d)
                }

                function vt(e, t, n, a) {
                    return gt(e, t, n, a, !1)
                }

                function bt(e, t) {
                    var n, r;
                    if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return vt();
                    for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                    return n
                }

                function Lt() {
                    return bt("isBefore", [].slice.call(arguments, 0))
                }

                function Yt() {
                    return bt("isAfter", [].slice.call(arguments, 0))
                }

                function kt(e) {
                    for (var t in e)
                        if (-1 === Br.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, a = 0; a < Br.length; ++a)
                        if (e[Br[a]]) {
                            if (n) return !1;
                            parseFloat(e[Br[a]]) !== b(e[Br[a]]) && (n = !0)
                        }
                    return !0
                }

                function Dt() {
                    return this._isValid
                }

                function xt() {
                    return Ut(NaN)
                }

                function Tt(e) {
                    var t = W(e),
                        n = t.year || 0,
                        a = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        o = t.day || 0,
                        s = t.hour || 0,
                        d = t.minute || 0,
                        u = t.second || 0,
                        l = t.millisecond || 0;
                    this._isValid = kt(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * s * 60 * 60, this._days = +o + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = nt(), this._bubble()
                }

                function wt(e) {
                    return e instanceof Tt
                }

                function St(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function jt(e, t) {
                    G(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            n = "+";
                        return e < 0 && (e = -e, n = "-"), n + J(~~(e / 60), 2) + t + J(~~e % 60, 2)
                    })
                }

                function Ht(e, t) {
                    var n = (t || "").match(e);
                    if (null === n) return null;
                    var a = n[n.length - 1] || [],
                        r = (a + "").match(Vr) || ["-", 0, 0],
                        i = 60 * r[1] + b(r[2]);
                    return 0 === i ? 0 : "+" === r[0] ? i : -i
                }

                function Ot(e, n) {
                    var a, r;
                    return n._isUTC ? (a = n.clone(), r = (g(e) || d(e) ? e.valueOf() : vt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), t.updateOffset(a, !1), a) : vt(e).local()
                }

                function Ct(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function Pt(e, n, a) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Ht(Qa, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && n && (r = Ct(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!n || this._changeInProgress ? Kt(this, Ut(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? i : Ct(this)
                }

                function At(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }

                function Ft(e) {
                    return this.utcOffset(0, e)
                }

                function Et(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ct(this), "m")), this
                }

                function Wt() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = Ht(Xa, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }

                function It(e) {
                    return !!this.isValid() && (e = e ? vt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }

                function zt() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function Rt() {
                    if (!o(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (y(e, this), e = yt(e), e._a) {
                        var t = e._isUTC ? m(e._a) : vt(e._a);
                        this._isDSTShifted = this.isValid() && L(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function Nt() {
                    return !!this.isValid() && !this._isUTC
                }

                function Bt() {
                    return !!this.isValid() && this._isUTC
                }

                function Vt() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Ut(e, t) {
                    var n, a, r, i = e,
                        o = null;
                    return wt(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : s(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (o = Ur.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
                        y: 0,
                        d: b(o[or]) * n,
                        h: b(o[sr]) * n,
                        m: b(o[dr]) * n,
                        s: b(o[ur]) * n,
                        ms: b(St(1e3 * o[lr])) * n
                    }) : (o = Jr.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
                        y: Jt(o[2], n),
                        M: Jt(o[3], n),
                        w: Jt(o[4], n),
                        d: Jt(o[5], n),
                        h: Jt(o[6], n),
                        m: Jt(o[7], n),
                        s: Jt(o[8], n)
                    }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = qt(vt(i.from), vt(i.to)), i = {}, i.ms = r.milliseconds, i.M = r.months), a = new Tt(i), wt(e) && l(e, "_locale") && (a._locale = e._locale), a
                }

                function Jt(e, t) {
                    var n = e && parseFloat(e.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * t
                }

                function Gt(e, t) {
                    var n = {
                        milliseconds: 0,
                        months: 0
                    };
                    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
                }

                function qt(e, t) {
                    var n;
                    return e.isValid() && t.isValid() ? (t = Ot(t, e), e.isBefore(t) ? n = Gt(e, t) : (n = Gt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function Zt(e, t) {
                    return function(n, a) {
                        var r, i;
                        return null === a || isNaN(+a) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = a, a = i), n = "string" == typeof n ? +n : n, r = Ut(n, a), Kt(this, r, e), this
                    }
                }

                function Kt(e, n, a, r) {
                    var i = n._milliseconds,
                        o = St(n._days),
                        s = St(n._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * a), o && B(e, "Date", N(e, "Date") + o * a), s && le(e, N(e, "Month") + s * a), r && t.updateOffset(e, o || s))
                }

                function $t(e, t) {
                    var n = e.diff(t, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }

                function Xt(e, n) {
                    var a = e || vt(),
                        r = Ot(a, this).startOf("day"),
                        i = t.calendarFormat(this, r) || "sameElse",
                        o = n && (x(n[i]) ? n[i].call(this, a) : n[i]);
                    return this.format(o || this.localeData().calendar(i, this, vt(a)))
                }

                function Qt() {
                    return new M(this)
                }

                function en(e, t) {
                    var n = g(e) ? e : vt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = E(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
                }

                function tn(e, t) {
                    var n = g(e) ? e : vt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = E(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
                }

                function nn(e, t, n, a) {
                    return a = a || "()", ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
                }

                function an(e, t) {
                    var n, a = g(e) ? e : vt(e);
                    return !(!this.isValid() || !a.isValid()) && (t = E(t || "millisecond"), "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
                }

                function rn(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }

                function on(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }

                function sn(e, t, n) {
                    var a, r, i, o;
                    return this.isValid() ? (a = Ot(e, this), a.isValid() ? (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = E(t), "year" === t || "month" === t || "quarter" === t ? (o = dn(this, a), "quarter" === t ? o /= 3 : "year" === t && (o /= 12)) : (i = this - a, o = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), n ? o : v(o)) : NaN) : NaN
                }

                function dn(e, t) {
                    var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        i = e.clone().add(r, "months");
                    return t - i < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(r + 1, "months"), a = (t - i) / (n - i)), -(r + a) || 0
                }

                function un() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function ln() {
                    if (!this.isValid()) return null;
                    var e = this.clone().utc();
                    return e.year() < 0 || e.year() > 9999 ? K(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : x(Date.prototype.toISOString) ? this.toDate().toISOString() : K(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }

                function cn() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var n = "[" + e + '("]',
                        a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }

                function mn(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var n = K(this, e);
                    return this.localeData().postformat(n)
                }

                function _n(e, t) {
                    return this.isValid() && (g(e) && e.isValid() || vt(e).isValid()) ? Ut({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function hn(e) {
                    return this.from(vt(), e)
                }

                function fn(e, t) {
                    return this.isValid() && (g(e) && e.isValid() || vt(e).isValid()) ? Ut({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function pn(e) {
                    return this.to(vt(), e)
                }

                function yn(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (t = nt(e), null != t && (this._locale = t), this)
                }

                function Mn() {
                    return this._locale
                }

                function gn(e) {
                    switch (e = E(e)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                        case "date":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function vn(e) {
                    return void 0 === (e = E(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }

                function bn() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function Ln() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function Yn() {
                    return new Date(this.valueOf())
                }

                function kn() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }

                function Dn() {
                    var e = this;
                    return {
                        years: e.year(),
                        months: e.month(),
                        date: e.date(),
                        hours: e.hours(),
                        minutes: e.minutes(),
                        seconds: e.seconds(),
                        milliseconds: e.milliseconds()
                    }
                }

                function xn() {
                    return this.isValid() ? this.toISOString() : null
                }

                function Tn() {
                    return f(this)
                }

                function wn() {
                    return c({}, h(this))
                }

                function Sn() {
                    return h(this).overflow
                }

                function jn() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function Hn(e, t) {
                    G(0, [e, e.length], 0, t)
                }

                function On(e) {
                    return Fn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Cn(e) {
                    return Fn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function Pn() {
                    return ke(this.year(), 1, 4)
                }

                function An() {
                    var e = this.localeData()._week;
                    return ke(this.year(), e.dow, e.doy)
                }

                function Fn(e, t, n, a, r) {
                    var i;
                    return null == e ? Ye(this, a, r).year : (i = ke(e, a, r), t > i && (t = i), En.call(this, e, t, n, a, r))
                }

                function En(e, t, n, a, r) {
                    var i = Le(e, t, n, a, r),
                        o = ve(i.year, 0, i.dayOfYear);
                    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
                }

                function Wn(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }

                function In(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }

                function zn(e, t) {
                    t[lr] = b(1e3 * ("0." + e))
                }

                function Rn() {
                    return this._isUTC ? "UTC" : ""
                }

                function Nn() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Bn(e) {
                    return vt(1e3 * e)
                }

                function Vn() {
                    return vt.apply(null, arguments).parseZone()
                }

                function Un(e) {
                    return e
                }

                function Jn(e, t, n, a) {
                    var r = nt(),
                        i = m().set(a, t);
                    return r[n](i, e)
                }

                function Gn(e, t, n) {
                    if (s(e) && (t = e, e = void 0), e = e || "", null != t) return Jn(e, t, n, "month");
                    var a, r = [];
                    for (a = 0; a < 12; a++) r[a] = Jn(e, a, n, "month");
                    return r
                }

                function qn(e, t, n, a) {
                    "boolean" == typeof e ? (s(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, s(t) && (n = t, t = void 0), t = t || "");
                    var r = nt(),
                        i = e ? r._week.dow : 0;
                    if (null != n) return Jn(t, (n + i) % 7, a, "day");
                    var o, d = [];
                    for (o = 0; o < 7; o++) d[o] = Jn(t, (o + i) % 7, a, "day");
                    return d
                }

                function Zn(e, t) {
                    return Gn(e, t, "months")
                }

                function Kn(e, t) {
                    return Gn(e, t, "monthsShort")
                }

                function $n(e, t, n) {
                    return qn(e, t, n, "weekdays")
                }

                function Xn(e, t, n) {
                    return qn(e, t, n, "weekdaysShort")
                }

                function Qn(e, t, n) {
                    return qn(e, t, n, "weekdaysMin")
                }

                function ea() {
                    var e = this._data;
                    return this._milliseconds = ai(this._milliseconds), this._days = ai(this._days), this._months = ai(this._months), e.milliseconds = ai(e.milliseconds), e.seconds = ai(e.seconds), e.minutes = ai(e.minutes), e.hours = ai(e.hours), e.months = ai(e.months), e.years = ai(e.years), this
                }

                function ta(e, t, n, a) {
                    var r = Ut(t, n);
                    return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble()
                }

                function na(e, t) {
                    return ta(this, e, t, 1)
                }

                function aa(e, t) {
                    return ta(this, e, t, -1)
                }

                function ra(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function ia() {
                    var e, t, n, a, r, i = this._milliseconds,
                        o = this._days,
                        s = this._months,
                        d = this._data;
                    return i >= 0 && o >= 0 && s >= 0 || i <= 0 && o <= 0 && s <= 0 || (i += 864e5 * ra(sa(s) + o), o = 0, s = 0), d.milliseconds = i % 1e3, e = v(i / 1e3), d.seconds = e % 60, t = v(e / 60), d.minutes = t % 60, n = v(t / 60), d.hours = n % 24, o += v(n / 24), r = v(oa(o)), s += r, o -= ra(sa(r)), a = v(s / 12), s %= 12, d.days = o, d.months = s, d.years = a, this
                }

                function oa(e) {
                    return 4800 * e / 146097
                }

                function sa(e) {
                    return 146097 * e / 4800
                }

                function da(e) {
                    if (!this.isValid()) return NaN;
                    var t, n, a = this._milliseconds;
                    if ("month" === (e = E(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + oa(t), "month" === e ? n : n / 12;
                    switch (t = this._days + Math.round(sa(this._months)), e) {
                        case "week":
                            return t / 7 + a / 6048e5;
                        case "day":
                            return t + a / 864e5;
                        case "hour":
                            return 24 * t + a / 36e5;
                        case "minute":
                            return 1440 * t + a / 6e4;
                        case "second":
                            return 86400 * t + a / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + a;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }

                function ua() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
                }

                function la(e) {
                    return function() {
                        return this.as(e)
                    }
                }

                function ca(e) {
                    return e = E(e), this.isValid() ? this[e + "s"]() : NaN
                }

                function ma(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }

                function _a() {
                    return v(this.days() / 7)
                }

                function ha(e, t, n, a, r) {
                    return r.relativeTime(t || 1, !!n, e, a)
                }

                function fa(e, t, n) {
                    var a = Ut(e).abs(),
                        r = gi(a.as("s")),
                        i = gi(a.as("m")),
                        o = gi(a.as("h")),
                        s = gi(a.as("d")),
                        d = gi(a.as("M")),
                        u = gi(a.as("y")),
                        l = r <= vi.ss && ["s", r] || r < vi.s && ["ss", r] || i <= 1 && ["m"] || i < vi.m && ["mm", i] || o <= 1 && ["h"] || o < vi.h && ["hh", o] || s <= 1 && ["d"] || s < vi.d && ["dd", s] || d <= 1 && ["M"] || d < vi.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                    return l[2] = t, l[3] = +e > 0, l[4] = n, ha.apply(null, l)
                }

                function pa(e) {
                    return void 0 === e ? gi : "function" == typeof e && (gi = e, !0)
                }

                function ya(e, t) {
                    return void 0 !== vi[e] && (void 0 === t ? vi[e] : (vi[e] = t, "s" === e && (vi.ss = t - 1), !0))
                }

                function Ma(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(),
                        n = fa(this, !e, t);
                    return e && (n = t.pastFuture(+this, n)), t.postformat(n)
                }

                function ga() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, n, a = bi(this._milliseconds) / 1e3,
                        r = bi(this._days),
                        i = bi(this._months);
                    e = v(a / 60), t = v(e / 60), a %= 60, e %= 60, n = v(i / 12), i %= 12;
                    var o = n,
                        s = i,
                        d = r,
                        u = t,
                        l = e,
                        c = a,
                        m = this.asSeconds();
                    return m ? (m < 0 ? "-" : "") + "P" + (o ? o + "Y" : "") + (s ? s + "M" : "") + (d ? d + "D" : "") + (u || l || c ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
                }
                var va, ba;
                ba = Array.prototype.some ? Array.prototype.some : function(e) {
                    for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                        if (a in t && e.call(this, t[a], a, t)) return !0;
                    return !1
                };
                var La = ba,
                    Ya = t.momentProperties = [],
                    ka = !1,
                    Da = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var xa;
                xa = Object.keys ? Object.keys : function(e) {
                    var t, n = [];
                    for (t in e) l(e, t) && n.push(t);
                    return n
                };
                var Ta, wa = xa,
                    Sa = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    ja = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    Ha = /\d{1,2}/,
                    Oa = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    Ca = {},
                    Pa = {},
                    Aa = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    Fa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    Ea = {},
                    Wa = {},
                    Ia = /\d/,
                    za = /\d\d/,
                    Ra = /\d{3}/,
                    Na = /\d{4}/,
                    Ba = /[+-]?\d{6}/,
                    Va = /\d\d?/,
                    Ua = /\d\d\d\d?/,
                    Ja = /\d\d\d\d\d\d?/,
                    Ga = /\d{1,3}/,
                    qa = /\d{1,4}/,
                    Za = /[+-]?\d{1,6}/,
                    Ka = /\d+/,
                    $a = /[+-]?\d+/,
                    Xa = /Z|[+-]\d\d:?\d\d/gi,
                    Qa = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    er = /[+-]?\d+(\.\d{1,3})?/,
                    tr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    nr = {},
                    ar = {},
                    rr = 0,
                    ir = 1,
                    or = 2,
                    sr = 3,
                    dr = 4,
                    ur = 5,
                    lr = 6,
                    cr = 7,
                    mr = 8;
                Ta = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                    var t;
                    for (t = 0; t < this.length; ++t)
                        if (this[t] === e) return t;
                    return -1
                };
                var _r = Ta;
                G("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), G("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), G("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), F("month", "M"), I("month", 8), X("M", Va), X("MM", Va, za), X("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), X("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ne(["M", "MM"], function(e, t) {
                    t[ir] = b(e) - 1
                }), ne(["MMM", "MMMM"], function(e, t, n, a) {
                    var r = n._locale.monthsParse(e, a, n._strict);
                    null != r ? t[ir] = r : h(n).invalidMonth = e
                });
                var hr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    fr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    pr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    yr = tr,
                    Mr = tr;
                G("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), G(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), I("year", 1), X("Y", $a), X("YY", Va, za), X("YYYY", qa, Na), X("YYYYY", Za, Ba), X("YYYYYY", Za, Ba), ne(["YYYYY", "YYYYYY"], rr), ne("YYYY", function(e, n) {
                    n[rr] = 2 === e.length ? t.parseTwoDigitYear(e) : b(e)
                }), ne("YY", function(e, n) {
                    n[rr] = t.parseTwoDigitYear(e)
                }), ne("Y", function(e, t) {
                    t[rr] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function(e) {
                    return b(e) + (b(e) > 68 ? 1900 : 2e3)
                };
                var gr = R("FullYear", !0);
                G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), I("week", 5), I("isoWeek", 5), X("w", Va), X("ww", Va, za), X("W", Va), X("WW", Va, za), ae(["w", "ww", "W", "WW"], function(e, t, n, a) {
                    t[a.substr(0, 1)] = b(e)
                });
                var vr = {
                    dow: 0,
                    doy: 6
                };
                G("d", 0, "do", "day"), G("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), G("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), G("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), X("d", Va), X("e", Va), X("E", Va), X("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), X("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), X("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ae(["dd", "ddd", "dddd"], function(e, t, n, a) {
                    var r = n._locale.weekdaysParse(e, a, n._strict);
                    null != r ? t.d = r : h(n).invalidWeekday = e
                }), ae(["d", "e", "E"], function(e, t, n, a) {
                    t[a] = b(e)
                });
                var br = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Lr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    kr = tr,
                    Dr = tr,
                    xr = tr;
                G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, Ve), G("k", ["kk", 2], 0, Ue), G("hmm", 0, 0, function() {
                    return "" + Ve.apply(this) + J(this.minutes(), 2)
                }), G("hmmss", 0, 0, function() {
                    return "" + Ve.apply(this) + J(this.minutes(), 2) + J(this.seconds(), 2)
                }), G("Hmm", 0, 0, function() {
                    return "" + this.hours() + J(this.minutes(), 2)
                }), G("Hmmss", 0, 0, function() {
                    return "" + this.hours() + J(this.minutes(), 2) + J(this.seconds(), 2)
                }), Je("a", !0), Je("A", !1), F("hour", "h"), I("hour", 13), X("a", Ge), X("A", Ge), X("H", Va), X("h", Va), X("k", Va), X("HH", Va, za), X("hh", Va, za), X("kk", Va, za), X("hmm", Ua), X("hmmss", Ja), X("Hmm", Ua), X("Hmmss", Ja), ne(["H", "HH"], sr), ne(["k", "kk"], function(e, t, n) {
                    var a = b(e);
                    t[sr] = 24 === a ? 0 : a
                }), ne(["a", "A"], function(e, t, n) {
                    n._isPm = n._locale.isPM(e), n._meridiem = e
                }), ne(["h", "hh"], function(e, t, n) {
                    t[sr] = b(e), h(n).bigHour = !0
                }), ne("hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[sr] = b(e.substr(0, a)), t[dr] = b(e.substr(a)), h(n).bigHour = !0
                }), ne("hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[sr] = b(e.substr(0, a)), t[dr] = b(e.substr(a, 2)), t[ur] = b(e.substr(r)), h(n).bigHour = !0
                }), ne("Hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[sr] = b(e.substr(0, a)), t[dr] = b(e.substr(a))
                }), ne("Hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[sr] = b(e.substr(0, a)), t[dr] = b(e.substr(a, 2)), t[ur] = b(e.substr(r))
                });
                var Tr, wr = /[ap]\.?m?\.?/i,
                    Sr = R("Hours", !0),
                    jr = {
                        calendar: Sa,
                        longDateFormat: ja,
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: Ha,
                        relativeTime: Oa,
                        months: fr,
                        monthsShort: pr,
                        week: vr,
                        weekdays: br,
                        weekdaysMin: Yr,
                        weekdaysShort: Lr,
                        meridiemParse: wr
                    },
                    Hr = {},
                    Or = {},
                    Cr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Pr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Ar = /Z|[+-]\d\d(?::?\d\d)?/,
                    Fr = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    Er = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    Wr = /^\/?Date\((\-?\d+)/i,
                    Ir = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
                t.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
                var zr = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = vt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : p()
                    }),
                    Rr = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = vt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : p()
                    }),
                    Nr = function() {
                        return Date.now ? Date.now() : +new Date
                    },
                    Br = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                jt("Z", ":"), jt("ZZ", ""), X("Z", Qa), X("ZZ", Qa), ne(["Z", "ZZ"], function(e, t, n) {
                    n._useUTC = !0, n._tzm = Ht(Qa, e)
                });
                var Vr = /([\+\-]|\d\d)/gi;
                t.updateOffset = function() {};
                var Ur = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Jr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                Ut.fn = Tt.prototype, Ut.invalid = xt;
                var Gr = Zt(1, "add"),
                    qr = Zt(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Zr = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });
                G(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), G(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), Hn("gggg", "weekYear"), Hn("ggggg", "weekYear"), Hn("GGGG", "isoWeekYear"), Hn("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), X("G", $a), X("g", $a), X("GG", Va, za), X("gg", Va, za), X("GGGG", qa, Na), X("gggg", qa, Na), X("GGGGG", Za, Ba), X("ggggg", Za, Ba), ae(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
                    t[a.substr(0, 2)] = b(e)
                }), ae(["gg", "GG"], function(e, n, a, r) {
                    n[r] = t.parseTwoDigitYear(e)
                }), G("Q", 0, "Qo", "quarter"), F("quarter", "Q"), I("quarter", 7), X("Q", Ia), ne("Q", function(e, t) {
                    t[ir] = 3 * (b(e) - 1)
                }), G("D", ["DD", 2], "Do", "date"), F("date", "D"), I("date", 9), X("D", Va), X("DD", Va, za), X("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), ne(["D", "DD"], or), ne("Do", function(e, t) {
                    t[or] = b(e.match(Va)[0], 10)
                });
                var Kr = R("Date", !0);
                G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), I("dayOfYear", 4), X("DDD", Ga), X("DDDD", Ra), ne(["DDD", "DDDD"], function(e, t, n) {
                    n._dayOfYear = b(e)
                }), G("m", ["mm", 2], 0, "minute"), F("minute", "m"), I("minute", 14), X("m", Va), X("mm", Va, za), ne(["m", "mm"], dr);
                var $r = R("Minutes", !1);
                G("s", ["ss", 2], 0, "second"), F("second", "s"), I("second", 15), X("s", Va), X("ss", Va, za), ne(["s", "ss"], ur);
                var Xr = R("Seconds", !1);
                G("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), G(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), G(0, ["SSS", 3], 0, "millisecond"), G(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), G(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), G(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), G(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), G(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), G(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), F("millisecond", "ms"), I("millisecond", 16), X("S", Ga, Ia), X("SS", Ga, za), X("SSS", Ga, Ra);
                var Qr;
                for (Qr = "SSSS"; Qr.length <= 9; Qr += "S") X(Qr, Ka);
                for (Qr = "S"; Qr.length <= 9; Qr += "S") ne(Qr, zn);
                var ei = R("Milliseconds", !1);
                G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
                var ti = M.prototype;
                ti.add = Gr, ti.calendar = Xt, ti.clone = Qt, ti.diff = sn, ti.endOf = vn, ti.format = mn, ti.from = _n, ti.fromNow = hn, ti.to = fn, ti.toNow = pn, ti.get = V, ti.invalidAt = Sn, ti.isAfter = en, ti.isBefore = tn, ti.isBetween = nn, ti.isSame = an, ti.isSameOrAfter = rn, ti.isSameOrBefore = on, ti.isValid = Tn, ti.lang = Zr, ti.locale = yn, ti.localeData = Mn, ti.max = Rr, ti.min = zr, ti.parsingFlags = wn, ti.set = U, ti.startOf = gn, ti.subtract = qr, ti.toArray = kn, ti.toObject = Dn, ti.toDate = Yn, ti.toISOString = ln, ti.inspect = cn, ti.toJSON = xn, ti.toString = un, ti.unix = Ln, ti.valueOf = bn, ti.creationData = jn, ti.year = gr, ti.isLeapYear = Me, ti.weekYear = On, ti.isoWeekYear = Cn, ti.quarter = ti.quarters = Wn, ti.month = ce, ti.daysInMonth = me, ti.week = ti.weeks = we, ti.isoWeek = ti.isoWeeks = Se, ti.weeksInYear = An, ti.isoWeeksInYear = Pn, ti.date = Kr, ti.day = ti.days = Ee, ti.weekday = We, ti.isoWeekday = Ie, ti.dayOfYear = In, ti.hour = ti.hours = Sr, ti.minute = ti.minutes = $r, ti.second = ti.seconds = Xr, ti.millisecond = ti.milliseconds = ei, ti.utcOffset = Pt, ti.utc = Ft, ti.local = Et, ti.parseZone = Wt, ti.hasAlignedHourOffset = It, ti.isDST = zt, ti.isLocal = Nt, ti.isUtcOffset = Bt, ti.isUtc = Vt, ti.isUTC = Vt, ti.zoneAbbr = Rn, ti.zoneName = Nn, ti.dates = k("dates accessor is deprecated. Use date instead.", Kr), ti.months = k("months accessor is deprecated. Use month instead", ce), ti.years = k("years accessor is deprecated. Use year instead", gr), ti.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", At), ti.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Rt);
                var ni = S.prototype;
                ni.calendar = j, ni.longDateFormat = H, ni.invalidDate = O, ni.ordinal = C, ni.preparse = Un, ni.postformat = Un, ni.relativeTime = P, ni.pastFuture = A, ni.set = T, ni.months = oe, ni.monthsShort = se, ni.monthsParse = ue, ni.monthsRegex = he, ni.monthsShortRegex = _e, ni.week = De, ni.firstDayOfYear = Te, ni.firstDayOfWeek = xe, ni.weekdays = Oe, ni.weekdaysMin = Pe, ni.weekdaysShort = Ce, ni.weekdaysParse = Fe, ni.weekdaysRegex = ze, ni.weekdaysShortRegex = Re, ni.weekdaysMinRegex = Ne, ni.isPM = qe, ni.meridiem = Ze, Qe("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), t.lang = k("moment.lang is deprecated. Use moment.locale instead.", Qe), t.langData = k("moment.langData is deprecated. Use moment.localeData instead.", nt);
                var ai = Math.abs,
                    ri = la("ms"),
                    ii = la("s"),
                    oi = la("m"),
                    si = la("h"),
                    di = la("d"),
                    ui = la("w"),
                    li = la("M"),
                    ci = la("y"),
                    mi = ma("milliseconds"),
                    _i = ma("seconds"),
                    hi = ma("minutes"),
                    fi = ma("hours"),
                    pi = ma("days"),
                    yi = ma("months"),
                    Mi = ma("years"),
                    gi = Math.round,
                    vi = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    bi = Math.abs,
                    Li = Tt.prototype;
                return Li.isValid = Dt, Li.abs = ea, Li.add = na, Li.subtract = aa, Li.as = da, Li.asMilliseconds = ri, Li.asSeconds = ii, Li.asMinutes = oi, Li.asHours = si, Li.asDays = di, Li.asWeeks = ui, Li.asMonths = li, Li.asYears = ci, Li.valueOf = ua, Li._bubble = ia, Li.get = ca, Li.milliseconds = mi, Li.seconds = _i, Li.minutes = hi, Li.hours = fi, Li.days = pi, Li.weeks = _a, Li.months = yi, Li.years = Mi, Li.humanize = Ma, Li.toISOString = ga, Li.toString = ga, Li.toJSON = ga, Li.locale = yn, Li.localeData = Mn, Li.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ga), Li.lang = Zr, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), X("x", $a), X("X", er), ne("X", function(e, t, n) {
                        n._d = new Date(1e3 * parseFloat(e, 10))
                    }), ne("x", function(e, t, n) {
                        n._d = new Date(b(e))
                    }), t.version = "2.18.1",
                    function(e) {
                        va = e
                    }(vt), t.fn = ti, t.min = Lt, t.max = Yt, t.now = Nr, t.utc = m, t.unix = Bn, t.months = Zn, t.isDate = d, t.locale = Qe, t.invalid = p, t.duration = Ut, t.isMoment = g, t.weekdays = $n, t.parseZone = Vn, t.localeData = nt, t.isDuration = wt, t.monthsShort = Kn, t.weekdaysMin = Qn, t.defineLocale = et, t.updateLocale = tt, t.locales = at, t.weekdaysShort = Xn, t.normalizeUnits = E, t.relativeTimeRounding = pa, t.relativeTimeThreshold = ya, t.calendarFormat = $t, t.prototype = ti, t
            })
        }).call(t, n(446)(e))
    },
    810: function(e, t, n) {
        function a(e, t) {
            if (l(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = t || {},
                a = n.additionalDigits;
            a = null == a ? _ : Number(a);
            var u = r(e),
                c = i(u.date, a),
                h = c.year,
                f = c.restDateString,
                p = o(f, h);
            if (p) {
                var y, M = p.getTime(),
                    g = 0;
                return u.time && (g = s(u.time)), u.timezone ? y = d(u.timezone) : (y = new Date(M + g).getTimezoneOffset(), y = new Date(M + g + y * m).getTimezoneOffset()), new Date(M + g + y * m)
            }
            return new Date(e)
        }

        function r(e) {
            var t, n = {},
                a = e.split(h);
            if (f.test(a[0]) ? (n.date = null, t = a[0]) : (n.date = a[0], t = a[1]), t) {
                var r = w.exec(t);
                r ? (n.time = t.replace(r[1], ""), n.timezone = r[1]) : n.time = t
            }
            return n
        }

        function i(e, t) {
            var n, a = y[t],
                r = g[t];
            if (n = M.exec(e) || r.exec(e)) {
                var i = n[1];
                return {
                    year: parseInt(i, 10),
                    restDateString: e.slice(i.length)
                }
            }
            if (n = p.exec(e) || a.exec(e)) {
                var o = n[1];
                return {
                    year: 100 * parseInt(o, 10),
                    restDateString: e.slice(o.length)
                }
            }
            return {
                year: null
            }
        }

        function o(e, t) {
            if (null === t) return null;
            var n, a, r, i;
            if (0 === e.length) return a = new Date(0), a.setUTCFullYear(t), a;
            if (n = v.exec(e)) return a = new Date(0), r = parseInt(n[1], 10) - 1, a.setUTCFullYear(t, r), a;
            if (n = b.exec(e)) {
                a = new Date(0);
                var o = parseInt(n[1], 10);
                return a.setUTCFullYear(t, 0, o), a
            }
            if (n = L.exec(e)) {
                a = new Date(0), r = parseInt(n[1], 10) - 1;
                var s = parseInt(n[2], 10);
                return a.setUTCFullYear(t, r, s), a
            }
            if (n = Y.exec(e)) return i = parseInt(n[1], 10) - 1, u(t, i);
            if (n = k.exec(e)) {
                i = parseInt(n[1], 10) - 1;
                return u(t, i, parseInt(n[2], 10) - 1)
            }
            return null
        }

        function s(e) {
            var t, n, a;
            if (t = D.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * c;
            if (t = x.exec(e)) return n = parseInt(t[1], 10), a = parseFloat(t[2].replace(",", ".")), n % 24 * c + a * m;
            if (t = T.exec(e)) {
                n = parseInt(t[1], 10), a = parseInt(t[2], 10);
                var r = parseFloat(t[3].replace(",", "."));
                return n % 24 * c + a * m + 1e3 * r
            }
            return null
        }

        function d(e) {
            var t, n;
            return (t = S.exec(e)) ? 0 : (t = j.exec(e)) ? (n = 60 * parseInt(t[2], 10), "+" === t[1] ? -n : n) : (t = H.exec(e), t ? (n = 60 * parseInt(t[2], 10) + parseInt(t[3], 10), "+" === t[1] ? -n : n) : 0)
        }

        function u(e, t, n) {
            t = t || 0, n = n || 0;
            var a = new Date(0);
            a.setUTCFullYear(e, 0, 4);
            var r = a.getUTCDay() || 7,
                i = 7 * t + n + 1 - r;
            return a.setUTCDate(a.getUTCDate() + i), a
        }
        var l = n(1052),
            c = 36e5,
            m = 6e4,
            _ = 2,
            h = /[T ]/,
            f = /:/,
            p = /^(\d{2})$/,
            y = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            M = /^(\d{4})/,
            g = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            v = /^-(\d{2})$/,
            b = /^-?(\d{3})$/,
            L = /^-?(\d{2})-?(\d{2})$/,
            Y = /^-?W(\d{2})$/,
            k = /^-?W(\d{2})-?(\d{1})$/,
            D = /^(\d{2}([.,]\d*)?)$/,
            x = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            T = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            w = /([Z+-].*)$/,
            S = /^(Z)$/,
            j = /^([+-])(\d{2})$/,
            H = /^([+-])(\d{2}):?(\d{2})$/;
        e.exports = a
    },
    814: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryPopularByLanguage: "directory.popular.language",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    815: function(e, t, n) {
        "use strict";
        e.exports = n(1038), e.exports.easing = n(1507), e.exports.canvas = n(1508), e.exports.options = n(1509)
    },
    817: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n(0),
            r = n(2),
            i = n(17),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        var r, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, r), [4, this._fetch(e, t)];
                                case 1:
                                    return i = a.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = a.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return r = a.sent(), t.requestError = r, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: a.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.n.store.getState(),
                        a = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(i.c)(n);
                    return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        a[e] && delete a[e]
                    }), a
                }, e
            }()
    },
    820: function(e, t, n) {
        "use strict";
        var a = n(815);
        e.exports = {
            _set: function(e, t) {
                return a.merge(this[e] || (this[e] = {}), t)
            }
        }
    },
    848: function(e, t, n) {
        "use strict";

        function a(e, t, n, a) {
            var i, o, s, d, u, l, c, m, _, h = Object.keys(n);
            for (i = 0, o = h.length; i < o; ++i)
                if (s = h[i], l = n[s], t.hasOwnProperty(s) || (t[s] = l), (d = t[s]) !== l && "_" !== s[0]) {
                    if (e.hasOwnProperty(s) || (e[s] = d), u = e[s], (c = typeof l) === typeof u)
                        if ("string" === c) {
                            if (m = r(u), m.valid && (_ = r(l), _.valid)) {
                                t[s] = _.mix(m, a).rgbString();
                                continue
                            }
                        } else if ("number" === c && isFinite(u) && isFinite(l)) {
                        t[s] = u + (l - u) * a;
                        continue
                    }
                    t[s] = l
                }
        }
        var r = n(1142),
            i = n(815),
            o = function(e) {
                i.extend(this, e), this.initialize.apply(this, arguments)
            };
        i.extend(o.prototype, {
            initialize: function() {
                this.hidden = !1
            },
            pivot: function() {
                var e = this;
                return e._view || (e._view = i.clone(e._model)), e._start = {}, e
            },
            transition: function(e) {
                var t = this,
                    n = t._model,
                    r = t._start,
                    i = t._view;
                return n && 1 !== e ? (i || (i = t._view = {}), r || (r = t._start = {}), a(r, i, n, e), t) : (t._view = n, t._start = null, t)
            },
            tooltipPosition: function() {
                return {
                    x: this._model.x,
                    y: this._model.y
                }
            },
            hasValue: function() {
                return i.isNumber(this._model.x) && i.isNumber(this._model.y)
            }
        }), o.extend = i.inherits, e.exports = o
    },
    878: function(e, t, n) {
        "use strict";
        e.exports = {}, e.exports.Arc = n(1515), e.exports.Line = n(1516), e.exports.Point = n(1517), e.exports.Rectangle = n(1518)
    },
    904: function(e, t, n) {
        function a(e) {
            var t = r(e),
                n = t.getFullYear(),
                a = new Date(0);
            a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var o = i(a),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var d = i(s);
            return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= d.getTime() ? n : n - 1
        }
        var r = n(810),
            i = n(905);
        e.exports = a
    },
    905: function(e, t, n) {
        function a(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
        var r = n(1034);
        e.exports = a
    },
    906: function(e, t, n) {
        function a(e) {
            var t = r(e);
            return t.setHours(0, 0, 0, 0), t
        }
        var r = n(810);
        e.exports = a
    },
    912: function(e, t, n) {
        "use strict";

        function a(e) {
            return "/" + e + "/dashboard/achievements/"
        }

        function r(e) {
            return "/" + e.channelName + "/dashboard/achievements/" + e.id
        }

        function i(e, t) {
            return {
                start_time: e.toJSON(),
                end_time: t.toJSON()
            }
        }
        var o = {};
        n.d(o, "channelAchievements", function() {
            return a
        }), n.d(o, "achievement", function() {
            return r
        });
        var s = n(1067),
            d = n(1285),
            u = n(933),
            l = 6e4,
            c = 60 * l,
            m = function() {
                function e(e) {
                    this.totalMilliseconds = e, this.hours = Math.floor(e / c), this.minutes = Math.floor(e % c / l)
                }
                return e.prototype.isSameLengthAs = function(e) {
                    return this.minutes === e.minutes && this.hours === e.hours
                }, e.prototype.diff = function(t) {
                    return new e(this.totalMilliseconds - t.totalMilliseconds)
                }, e
            }(),
            _ = function() {
                function e(e, t) {
                    this.start = "string" == typeof e ? new Date(e) : e, this.end = "string" == typeof t ? new Date(t) : t, this.duration = new m(this.end.getTime() - this.start.getTime()), this.hours = this.duration.hours, this.minutes = this.duration.minutes
                }
                return e.lastNDays = function(t, n) {
                    return void 0 === n && (n = new Date), new e(Object(u.subDays)(n, t), n)
                }, e.prototype.isSameLengthAs = function(e) {
                    return this.duration.isSameLengthAs(e.duration)
                }, e.prototype.diff = function(e) {
                    return this.duration.diff(e.duration)
                }, e
            }();
        n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return d.a
        }), n.d(t, "a", function() {
            return _
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, !1, function() {
            return m
        })
    },
    933: function(e, t, n) {
        e.exports = {
            addDays: n(1003),
            addHours: n(1107),
            addISOYears: n(1108),
            addMilliseconds: n(1004),
            addMinutes: n(1110),
            addMonths: n(1036),
            addQuarters: n(1111),
            addSeconds: n(1112),
            addWeeks: n(1054),
            addYears: n(1113),
            areRangesOverlapping: n(1405),
            closestIndexTo: n(1406),
            closestTo: n(1407),
            compareAsc: n(1006),
            compareDesc: n(1055),
            differenceInCalendarDays: n(1035),
            differenceInCalendarISOWeeks: n(1408),
            differenceInCalendarISOYears: n(1114),
            differenceInCalendarMonths: n(1115),
            differenceInCalendarQuarters: n(1409),
            differenceInCalendarWeeks: n(1410),
            differenceInCalendarYears: n(1117),
            differenceInDays: n(1118),
            differenceInHours: n(1411),
            differenceInISOYears: n(1412),
            differenceInMilliseconds: n(1037),
            differenceInMinutes: n(1413),
            differenceInMonths: n(1056),
            differenceInQuarters: n(1414),
            differenceInSeconds: n(1057),
            differenceInWeeks: n(1415),
            differenceInYears: n(1416),
            distanceInWords: n(1120),
            distanceInWordsStrict: n(1420),
            distanceInWordsToNow: n(1421),
            eachDay: n(1422),
            endOfDay: n(1059),
            endOfHour: n(1423),
            endOfISOWeek: n(1424),
            endOfISOYear: n(1425),
            endOfMinute: n(1426),
            endOfMonth: n(1122),
            endOfQuarter: n(1427),
            endOfSecond: n(1428),
            endOfToday: n(1429),
            endOfTomorrow: n(1430),
            endOfWeek: n(1121),
            endOfYear: n(1431),
            endOfYesterday: n(1432),
            format: n(1433),
            getDate: n(1434),
            getDay: n(1435),
            getDayOfYear: n(1123),
            getDaysInMonth: n(1053),
            getDaysInYear: n(1436),
            getHours: n(1437),
            getISODay: n(1127),
            getISOWeek: n(1060),
            getISOWeeksInYear: n(1438),
            getISOYear: n(904),
            getMilliseconds: n(1439),
            getMinutes: n(1440),
            getMonth: n(1441),
            getOverlappingDaysInRanges: n(1442),
            getQuarter: n(1116),
            getSeconds: n(1443),
            getTime: n(1444),
            getYear: n(1445),
            isAfter: n(1446),
            isBefore: n(1447),
            isDate: n(1052),
            isEqual: n(1448),
            isFirstDayOfMonth: n(1449),
            isFriday: n(1450),
            isFuture: n(1451),
            isLastDayOfMonth: n(1452),
            isLeapYear: n(1126),
            isMonday: n(1453),
            isPast: n(1454),
            isSameDay: n(1455),
            isSameHour: n(1128),
            isSameISOWeek: n(1130),
            isSameISOYear: n(1131),
            isSameMinute: n(1132),
            isSameMonth: n(1134),
            isSameQuarter: n(1135),
            isSameSecond: n(1137),
            isSameWeek: n(1061),
            isSameYear: n(1139),
            isSaturday: n(1456),
            isSunday: n(1457),
            isThisHour: n(1458),
            isThisISOWeek: n(1459),
            isThisISOYear: n(1460),
            isThisMinute: n(1461),
            isThisMonth: n(1462),
            isThisQuarter: n(1463),
            isThisSecond: n(1464),
            isThisWeek: n(1465),
            isThisYear: n(1466),
            isThursday: n(1467),
            isToday: n(1468),
            isTomorrow: n(1469),
            isTuesday: n(1470),
            isValid: n(1125),
            isWednesday: n(1471),
            isWeekend: n(1472),
            isWithinRange: n(1473),
            isYesterday: n(1474),
            lastDayOfISOWeek: n(1475),
            lastDayOfISOYear: n(1476),
            lastDayOfMonth: n(1477),
            lastDayOfQuarter: n(1478),
            lastDayOfWeek: n(1140),
            lastDayOfYear: n(1479),
            max: n(1480),
            min: n(1481),
            parse: n(810),
            setDate: n(1482),
            setDay: n(1483),
            setDayOfYear: n(1484),
            setHours: n(1485),
            setISODay: n(1486),
            setISOWeek: n(1487),
            setISOYear: n(1109),
            setMilliseconds: n(1488),
            setMinutes: n(1489),
            setMonth: n(1141),
            setQuarter: n(1490),
            setSeconds: n(1491),
            setYear: n(1492),
            startOfDay: n(906),
            startOfHour: n(1129),
            startOfISOWeek: n(905),
            startOfISOYear: n(1005),
            startOfMinute: n(1133),
            startOfMonth: n(1493),
            startOfQuarter: n(1136),
            startOfSecond: n(1138),
            startOfToday: n(1494),
            startOfTomorrow: n(1495),
            startOfWeek: n(1034),
            startOfYear: n(1124),
            startOfYesterday: n(1496),
            subDays: n(1497),
            subHours: n(1498),
            subISOYears: n(1119),
            subMilliseconds: n(1499),
            subMinutes: n(1500),
            subMonths: n(1501),
            subQuarters: n(1502),
            subSeconds: n(1503),
            subWeeks: n(1504),
            subYears: n(1505)
        }
    }
});
//# sourceMappingURL=pages.teams-dashboard-3e18d948605d2dfaf7111255aeaf01ec.js.map