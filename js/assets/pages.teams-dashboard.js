webpackJsonp([37], {
    1006: function(e, t, a) {
        e.exports = {
            addDays: a(995),
            addHours: a(1093),
            addISOYears: a(1094),
            addMilliseconds: a(996),
            addMinutes: a(1096),
            addMonths: a(1021),
            addQuarters: a(1097),
            addSeconds: a(1098),
            addWeeks: a(1040),
            addYears: a(1099),
            areRangesOverlapping: a(1401),
            closestIndexTo: a(1402),
            closestTo: a(1403),
            compareAsc: a(998),
            compareDesc: a(1041),
            differenceInCalendarDays: a(1020),
            differenceInCalendarISOWeeks: a(1404),
            differenceInCalendarISOYears: a(1100),
            differenceInCalendarMonths: a(1101),
            differenceInCalendarQuarters: a(1405),
            differenceInCalendarWeeks: a(1406),
            differenceInCalendarYears: a(1103),
            differenceInDays: a(1104),
            differenceInHours: a(1407),
            differenceInISOYears: a(1408),
            differenceInMilliseconds: a(1022),
            differenceInMinutes: a(1409),
            differenceInMonths: a(1042),
            differenceInQuarters: a(1410),
            differenceInSeconds: a(1043),
            differenceInWeeks: a(1411),
            differenceInYears: a(1412),
            distanceInWords: a(1106),
            distanceInWordsStrict: a(1416),
            distanceInWordsToNow: a(1417),
            eachDay: a(1418),
            endOfDay: a(1045),
            endOfHour: a(1419),
            endOfISOWeek: a(1420),
            endOfISOYear: a(1421),
            endOfMinute: a(1422),
            endOfMonth: a(1108),
            endOfQuarter: a(1423),
            endOfSecond: a(1424),
            endOfToday: a(1425),
            endOfTomorrow: a(1426),
            endOfWeek: a(1107),
            endOfYear: a(1427),
            endOfYesterday: a(1428),
            format: a(1429),
            getDate: a(1430),
            getDay: a(1431),
            getDayOfYear: a(1109),
            getDaysInMonth: a(1039),
            getDaysInYear: a(1432),
            getHours: a(1433),
            getISODay: a(1113),
            getISOWeek: a(1046),
            getISOWeeksInYear: a(1434),
            getISOYear: a(903),
            getMilliseconds: a(1435),
            getMinutes: a(1436),
            getMonth: a(1437),
            getOverlappingDaysInRanges: a(1438),
            getQuarter: a(1102),
            getSeconds: a(1439),
            getTime: a(1440),
            getYear: a(1441),
            isAfter: a(1442),
            isBefore: a(1443),
            isDate: a(1038),
            isEqual: a(1444),
            isFirstDayOfMonth: a(1445),
            isFriday: a(1446),
            isFuture: a(1447),
            isLastDayOfMonth: a(1448),
            isLeapYear: a(1112),
            isMonday: a(1449),
            isPast: a(1450),
            isSameDay: a(1451),
            isSameHour: a(1114),
            isSameISOWeek: a(1116),
            isSameISOYear: a(1117),
            isSameMinute: a(1118),
            isSameMonth: a(1120),
            isSameQuarter: a(1121),
            isSameSecond: a(1123),
            isSameWeek: a(1047),
            isSameYear: a(1125),
            isSaturday: a(1452),
            isSunday: a(1453),
            isThisHour: a(1454),
            isThisISOWeek: a(1455),
            isThisISOYear: a(1456),
            isThisMinute: a(1457),
            isThisMonth: a(1458),
            isThisQuarter: a(1459),
            isThisSecond: a(1460),
            isThisWeek: a(1461),
            isThisYear: a(1462),
            isThursday: a(1463),
            isToday: a(1464),
            isTomorrow: a(1465),
            isTuesday: a(1466),
            isValid: a(1111),
            isWednesday: a(1467),
            isWeekend: a(1468),
            isWithinRange: a(1469),
            isYesterday: a(1470),
            lastDayOfISOWeek: a(1471),
            lastDayOfISOYear: a(1472),
            lastDayOfMonth: a(1473),
            lastDayOfQuarter: a(1474),
            lastDayOfWeek: a(1126),
            lastDayOfYear: a(1475),
            max: a(1476),
            min: a(1477),
            parse: a(817),
            setDate: a(1478),
            setDay: a(1479),
            setDayOfYear: a(1480),
            setHours: a(1481),
            setISODay: a(1482),
            setISOWeek: a(1483),
            setISOYear: a(1095),
            setMilliseconds: a(1484),
            setMinutes: a(1485),
            setMonth: a(1127),
            setQuarter: a(1486),
            setSeconds: a(1487),
            setYear: a(1488),
            startOfDay: a(905),
            startOfHour: a(1115),
            startOfISOWeek: a(904),
            startOfISOYear: a(997),
            startOfMinute: a(1119),
            startOfMonth: a(1489),
            startOfQuarter: a(1122),
            startOfSecond: a(1124),
            startOfToday: a(1490),
            startOfTomorrow: a(1491),
            startOfWeek: a(1019),
            startOfYear: a(1110),
            startOfYesterday: a(1492),
            subDays: a(1493),
            subHours: a(1494),
            subISOYears: a(1105),
            subMilliseconds: a(1495),
            subMinutes: a(1496),
            subMonths: a(1497),
            subQuarters: a(1498),
            subSeconds: a(1499),
            subWeeks: a(1500),
            subYears: a(1501)
        }
    },
    1019: function(e, t, a) {
        function n(e, t) {
            var a = t ? Number(t.weekStartsOn) || 0 : 0,
                n = r(e),
                i = n.getDay(),
                o = (i < a ? 7 : 0) + i - a;
            return n.setDate(n.getDate() - o), n.setHours(0, 0, 0, 0), n
        }
        var r = a(817);
        e.exports = n
    },
    1020: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t),
                s = a.getTime() - a.getTimezoneOffset() * i,
                d = n.getTime() - n.getTimezoneOffset() * i;
            return Math.round((s - d) / o)
        }
        var r = a(905),
            i = 6e4,
            o = 864e5;
        e.exports = n
    },
    1021: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t),
                o = a.getMonth() + n,
                s = new Date(0);
            s.setFullYear(a.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var d = i(s);
            return a.setMonth(o, Math.min(d, a.getDate())), a
        }
        var r = a(817),
            i = a(1039);
        e.exports = n
    },
    1022: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() - n.getTime()
        }
        var r = a(817);
        e.exports = n
    },
    1023: function(e, t, a) {
        "use strict";
        var n = {
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
            valueAtIndexOrDefault: function(e, t, a) {
                return n.valueOrDefault(n.isArray(e) ? e[t] : e, a)
            },
            callback: function(e, t, a) {
                if (e && "function" == typeof e.call) return e.apply(a, t)
            },
            each: function(e, t, a, r) {
                var i, o, s;
                if (n.isArray(e))
                    if (o = e.length, r)
                        for (i = o - 1; i >= 0; i--) t.call(a, e[i], i);
                    else
                        for (i = 0; i < o; i++) t.call(a, e[i], i);
                else if (n.isObject(e))
                    for (s = Object.keys(e), o = s.length, i = 0; i < o; i++) t.call(a, e[s[i]], s[i])
            },
            arrayEquals: function(e, t) {
                var a, r, i, o;
                if (!e || !t || e.length !== t.length) return !1;
                for (a = 0, r = e.length; a < r; ++a)
                    if (i = e[a], o = t[a], i instanceof Array && o instanceof Array) {
                        if (!n.arrayEquals(i, o)) return !1
                    } else if (i !== o) return !1;
                return !0
            },
            clone: function(e) {
                if (n.isArray(e)) return e.map(n.clone);
                if (n.isObject(e)) {
                    for (var t = {}, a = Object.keys(e), r = a.length, i = 0; i < r; ++i) t[a[i]] = n.clone(e[a[i]]);
                    return t
                }
                return e
            },
            _merger: function(e, t, a, r) {
                var i = t[e],
                    o = a[e];
                n.isObject(i) && n.isObject(o) ? n.merge(i, o, r) : t[e] = n.clone(o)
            },
            _mergerIf: function(e, t, a) {
                var r = t[e],
                    i = a[e];
                n.isObject(r) && n.isObject(i) ? n.mergeIf(r, i) : t.hasOwnProperty(e) || (t[e] = n.clone(i))
            },
            merge: function(e, t, a) {
                var r, i, o, s, d, u = n.isArray(t) ? t : [t],
                    l = u.length;
                if (!n.isObject(e)) return e;
                for (a = a || {}, r = a.merger || n._merger, i = 0; i < l; ++i)
                    if (t = u[i], n.isObject(t))
                        for (o = Object.keys(t), d = 0, s = o.length; d < s; ++d) r(o[d], e, t, a);
                return e
            },
            mergeIf: function(e, t) {
                return n.merge(e, t, {
                    merger: n._mergerIf
                })
            }
        };
        e.exports = n, n.callCallback = n.callback, n.indexOf = function(e, t, a) {
            return Array.prototype.indexOf.call(e, t, a)
        }, n.getValueOrDefault = n.valueOrDefault, n.getValueAtIndexOrDefault = n.valueAtIndexOrDefault
    },
    1038: function(e, t) {
        function a(e) {
            return e instanceof Date
        }
        e.exports = a
    },
    1039: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getFullYear(),
                n = t.getMonth(),
                i = new Date(0);
            return i.setFullYear(a, n + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
        }
        var r = a(817);
        e.exports = n
    },
    1040: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, 7 * a)
        }
        var r = a(995);
        e.exports = n
    },
    1041: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = a.getTime(),
                i = r(t),
                o = i.getTime();
            return n > o ? -1 : n < o ? 1 : 0
        }
        var r = a(817);
        e.exports = n
    },
    1042: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t),
                s = o(a, n),
                d = Math.abs(i(a, n));
            return a.setMonth(a.getMonth() - s * d), s * (d - (o(a, n) === -s))
        }
        var r = a(817),
            i = a(1101),
            o = a(998);
        e.exports = n
    },
    1043: function(e, t, a) {
        function n(e, t) {
            var a = r(e, t) / 1e3;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
        var r = a(1022);
        e.exports = n
    },
    1044: function(e, t, a) {
        var n = a(1413),
            r = a(1414);
        e.exports = {
            distanceInWords: n(),
            format: r()
        }
    },
    1045: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setHours(23, 59, 59, 999), t
        }
        var r = a(817);
        e.exports = n
    },
    1046: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = i(t).getTime() - o(t).getTime();
            return Math.round(a / s) + 1
        }
        var r = a(817),
            i = a(904),
            o = a(997),
            s = 6048e5;
        e.exports = n
    },
    1047: function(e, t, a) {
        function n(e, t, a) {
            var n = r(e, a),
                i = r(t, a);
            return n.getTime() === i.getTime()
        }
        var r = a(1019);
        e.exports = n
    },
    1053: function(e, t, a) {
        "use strict";

        function n(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, i.a.request(e.path, e)];
                        case 1:
                            return t = a.sent(), [2, new o(t, e)]
                    }
                })
            })
        }
        t.a = n;
        var r = a(0),
            i = a(831),
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
    1093: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, a * i)
        }
        var r = a(996),
            i = 36e5;
        e.exports = n
    },
    1094: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return i(e, r(e) + a)
        }
        var r = a(903),
            i = a(1095);
        e.exports = n
    },
    1095: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t),
                s = o(a, i(a)),
                d = new Date(0);
            return d.setFullYear(n, 0, 4), d.setHours(0, 0, 0, 0), a = i(d), a.setDate(a.getDate() + s), a
        }
        var r = a(817),
            i = a(997),
            o = a(1020);
        e.exports = n
    },
    1096: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, a * i)
        }
        var r = a(996),
            i = 6e4;
        e.exports = n
    },
    1097: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, 3 * a)
        }
        var r = a(1021);
        e.exports = n
    },
    1098: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, 1e3 * a)
        }
        var r = a(996);
        e.exports = n
    },
    1099: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, 12 * a)
        }
        var r = a(1021);
        e.exports = n
    },
    1100: function(e, t, a) {
        function n(e, t) {
            return r(e) - r(t)
        }
        var r = a(903);
        e.exports = n
    },
    1101: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return 12 * (a.getFullYear() - n.getFullYear()) + (a.getMonth() - n.getMonth())
        }
        var r = a(817);
        e.exports = n
    },
    1102: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
        var r = a(817);
        e.exports = n
    },
    1103: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getFullYear() - n.getFullYear()
        }
        var r = a(817);
        e.exports = n
    },
    1104: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t),
                s = o(a, n),
                d = Math.abs(i(a, n));
            return a.setDate(a.getDate() - s * d), s * (d - (o(a, n) === -s))
        }
        var r = a(817),
            i = a(1020),
            o = a(998);
        e.exports = n
    },
    1105: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1094);
        e.exports = n
    },
    1106: function(e, t, a) {
        function n(e, t, a) {
            var n = a || {},
                _ = r(e, t),
                h = n.locale,
                f = d.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (f = h.distanceInWords.localize);
            var p, y, g = {
                addSuffix: Boolean(n.addSuffix),
                comparison: _
            };
            _ > 0 ? (p = i(e), y = i(t)) : (p = i(t), y = i(e));
            var M, v = o(y, p),
                b = y.getTimezoneOffset() - p.getTimezoneOffset(),
                L = Math.round(v / 60) - b;
            if (L < 2) return n.includeSeconds ? v < 5 ? f("lessThanXSeconds", 5, g) : v < 10 ? f("lessThanXSeconds", 10, g) : v < 20 ? f("lessThanXSeconds", 20, g) : v < 40 ? f("halfAMinute", null, g) : v < 60 ? f("lessThanXMinutes", 1, g) : f("xMinutes", 1, g) : 0 === L ? f("lessThanXMinutes", 1, g) : f("xMinutes", L, g);
            if (L < 45) return f("xMinutes", L, g);
            if (L < 90) return f("aboutXHours", 1, g);
            if (L < u) {
                return f("aboutXHours", Math.round(L / 60), g)
            }
            if (L < l) return f("xDays", 1, g);
            if (L < c) {
                return f("xDays", Math.round(L / u), g)
            }
            if (L < m) return M = Math.round(L / c), f("aboutXMonths", M, g);
            if ((M = s(y, p)) < 12) {
                return f("xMonths", Math.round(L / c), g)
            }
            var Y = M % 12,
                D = Math.floor(M / 12);
            return Y < 3 ? f("aboutXYears", D, g) : Y < 9 ? f("overXYears", D, g) : f("almostXYears", D + 1, g)
        }
        var r = a(1041),
            i = a(817),
            o = a(1043),
            s = a(1042),
            d = a(1044),
            u = 1440,
            l = 2520,
            c = 43200,
            m = 86400;
        e.exports = n
    },
    1107: function(e, t, a) {
        function n(e, t) {
            var a = t ? Number(t.weekStartsOn) || 0 : 0,
                n = r(e),
                i = n.getDay(),
                o = 6 + (i < a ? -7 : 0) - (i - a);
            return n.setDate(n.getDate() + o), n.setHours(23, 59, 59, 999), n
        }
        var r = a(817);
        e.exports = n
    },
    1108: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getMonth();
            return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t
        }
        var r = a(817);
        e.exports = n
    },
    1109: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return o(t, i(t)) + 1
        }
        var r = a(817),
            i = a(1110),
            o = a(1020);
        e.exports = n
    },
    1110: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = new Date(0);
            return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a
        }
        var r = a(817);
        e.exports = n
    },
    1111: function(e, t, a) {
        function n(e) {
            if (r(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
        var r = a(1038);
        e.exports = n
    },
    1112: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getFullYear();
            return a % 400 == 0 || a % 4 == 0 && a % 100 != 0
        }
        var r = a(817);
        e.exports = n
    },
    1113: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getDay();
            return 0 === a && (a = 7), a
        }
        var r = a(817);
        e.exports = n
    },
    1114: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() === n.getTime()
        }
        var r = a(1115);
        e.exports = n
    },
    1115: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setMinutes(0, 0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    1116: function(e, t, a) {
        function n(e, t) {
            return r(e, t, {
                weekStartsOn: 1
            })
        }
        var r = a(1047);
        e.exports = n
    },
    1117: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() === n.getTime()
        }
        var r = a(997);
        e.exports = n
    },
    1118: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() === n.getTime()
        }
        var r = a(1119);
        e.exports = n
    },
    1119: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setSeconds(0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    1120: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getFullYear() === n.getFullYear() && a.getMonth() === n.getMonth()
        }
        var r = a(817);
        e.exports = n
    },
    1121: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() === n.getTime()
        }
        var r = a(1122);
        e.exports = n
    },
    1122: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getMonth(),
                n = a - a % 3;
            return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    1123: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() === n.getTime()
        }
        var r = a(1124);
        e.exports = n
    },
    1124: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setMilliseconds(0), t
        }
        var r = a(817);
        e.exports = n
    },
    1125: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getFullYear() === n.getFullYear()
        }
        var r = a(817);
        e.exports = n
    },
    1126: function(e, t, a) {
        function n(e, t) {
            var a = t ? Number(t.weekStartsOn) || 0 : 0,
                n = r(e),
                i = n.getDay(),
                o = 6 + (i < a ? -7 : 0) - (i - a);
            return n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + o), n
        }
        var r = a(817);
        e.exports = n
    },
    1127: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t),
                o = a.getFullYear(),
                s = a.getDate(),
                d = new Date(0);
            d.setFullYear(o, n, 15), d.setHours(0, 0, 0, 0);
            var u = i(d);
            return a.setMonth(n, Math.min(s, u)), a
        }
        var r = a(817),
            i = a(1039);
        e.exports = n
    },
    1128: function(e, t, a) {
        var n = a(1507),
            r = a(1509),
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
                for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) {
                    var n = e[a] / 255;
                    t[a] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                }
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            },
            contrast: function(e) {
                var t = this.luminosity(),
                    a = e.luminosity();
                return t > a ? (t + .05) / (a + .05) : (a + .05) / (t + .05)
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
                    a = (t[0] + e) % 360;
                return t[0] = a < 0 ? 360 + a : a, this.setValues("hsl", t), this
            },
            mix: function(e, t) {
                var a = this,
                    n = e,
                    r = void 0 === t ? .5 : t,
                    i = 2 * r - 1,
                    o = a.alpha() - n.alpha(),
                    s = ((i * o == -1 ? i : (i + o) / (1 + i * o)) + 1) / 2,
                    d = 1 - s;
                return this.rgb(s * a.red() + d * n.red(), s * a.green() + d * n.green(), s * a.blue() + d * n.blue()).alpha(a.alpha() * r + n.alpha() * (1 - r))
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                var e, t, a = new i,
                    n = this.values,
                    r = a.values;
                for (var o in n) n.hasOwnProperty(o) && (e = n[o], t = {}.toString.call(e), "[object Array]" === t ? r[o] = e.slice(0) : "[object Number]" === t ? r[o] = e : console.error("unexpected color value:", e));
                return a
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
            for (var t = this.values, a = {}, n = 0; n < e.length; n++) a[e.charAt(n)] = t[e][n];
            return 1 !== t.alpha && (a.a = t.alpha), a
        }, i.prototype.setValues = function(e, t) {
            var a, r = this.values,
                i = this.spaces,
                o = this.maxes,
                s = 1;
            if (this.valid = !0, "alpha" === e) s = t;
            else if (t.length) r[e] = t.slice(0, e.length), s = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (a = 0; a < e.length; a++) r[e][a] = t[e.charAt(a)];
                s = t.a
            } else if (void 0 !== t[i[e][0]]) {
                var d = i[e];
                for (a = 0; a < e.length; a++) r[e][a] = t[d[a]];
                s = t.alpha
            }
            if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === e) return !1;
            var u;
            for (a = 0; a < e.length; a++) u = Math.max(0, Math.min(o[e][a], r[e][a])), r[e][a] = Math.round(u);
            for (var l in i) l !== e && (r[l] = n[e][l](r[e]));
            return !0
        }, i.prototype.setSpace = function(e, t) {
            var a = t[0];
            return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a), this)
        }, i.prototype.setChannel = function(e, t, a) {
            var n = this.values[e];
            return void 0 === a ? n[t] : a === n[t] ? this : (n[t] = a, this.setValues(e, n), this)
        }, "undefined" != typeof window && (window.Color = i), e.exports = i
    },
    1129: function(e, t, a) {
        "use strict";

        function n(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : u.getRelativePosition(e, t)
        }

        function r(e, t) {
            var a, n, r, i, o, s = e.data.datasets;
            for (n = 0, i = s.length; n < i; ++n)
                if (e.isDatasetVisible(n))
                    for (a = e.getDatasetMeta(n), r = 0, o = a.data.length; r < o; ++r) {
                        var d = a.data[r];
                        d._view.skip || t(d)
                    }
        }

        function i(e, t) {
            var a = [];
            return r(e, function(e) {
                e.inRange(t.x, t.y) && a.push(e)
            }), a
        }

        function o(e, t, a, n) {
            var i = Number.POSITIVE_INFINITY,
                o = [];
            return r(e, function(e) {
                if (!a || e.inRange(t.x, t.y)) {
                    var r = e.getCenterPoint(),
                        s = n(t, r);
                    s < i ? (o = [e], i = s) : s === i && o.push(e)
                }
            }), o
        }

        function s(e) {
            var t = -1 !== e.indexOf("x"),
                a = -1 !== e.indexOf("y");
            return function(e, n) {
                var r = t ? Math.abs(e.x - n.x) : 0,
                    i = a ? Math.abs(e.y - n.y) : 0;
                return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2))
            }
        }

        function d(e, t, a) {
            var r = n(t, e);
            a.axis = a.axis || "x";
            var d = s(a.axis),
                u = a.intersect ? i(e, r) : o(e, r, !1, d),
                l = [];
            return u.length ? (e.data.datasets.forEach(function(t, a) {
                if (e.isDatasetVisible(a)) {
                    var n = e.getDatasetMeta(a),
                        r = n.data[u[0]._index];
                    r && !r._view.skip && l.push(r)
                }
            }), l) : []
        }
        var u = a(822);
        e.exports = {
            modes: {
                single: function(e, t) {
                    var a = n(t, e),
                        i = [];
                    return r(e, function(e) {
                        if (e.inRange(a.x, a.y)) return i.push(e), i
                    }), i.slice(0, 1)
                },
                label: d,
                index: d,
                dataset: function(e, t, a) {
                    var r = n(t, e);
                    a.axis = a.axis || "xy";
                    var d = s(a.axis),
                        u = a.intersect ? i(e, r) : o(e, r, !1, d);
                    return u.length > 0 && (u = e.getDatasetMeta(u[0]._datasetIndex).data), u
                },
                "x-axis": function(e, t) {
                    return d(e, t, {
                        intersect: !0
                    })
                },
                point: function(e, t) {
                    return i(e, n(t, e))
                },
                nearest: function(e, t, a) {
                    var r = n(t, e);
                    a.axis = a.axis || "xy";
                    var i = s(a.axis),
                        d = o(e, r, a.intersect, i);
                    return d.length > 1 && d.sort(function(e, t) {
                        var a = e.getArea(),
                            n = t.getArea(),
                            r = a - n;
                        return 0 === r && (r = e._datasetIndex - t._datasetIndex), r
                    }), d.slice(0, 1)
                },
                x: function(e, t, a) {
                    var i = n(t, e),
                        o = [],
                        s = !1;
                    return r(e, function(e) {
                        e.inXRange(i.x) && o.push(e), e.inRange(i.x, i.y) && (s = !0)
                    }), a.intersect && !s && (o = []), o
                },
                y: function(e, t, a) {
                    var i = n(t, e),
                        o = [],
                        s = !1;
                    return r(e, function(e) {
                        e.inYRange(i.y) && o.push(e), e.inRange(i.x, i.y) && (s = !0)
                    }), a.intersect && !s && (o = []), o
                }
            }
        }
    },
    1130: function(e, t, a) {
        "use strict";
        var n = a(822),
            r = a(1515),
            i = a(1516),
            o = i._enabled ? i : r;
        e.exports = n.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, o)
    },
    1131: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM"
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
    1132: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                n = function(e) {
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
                    return function(t, a, i, o) {
                        var s = n(t),
                            d = r[e][n(t)];
                        return 2 === s && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
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
                meridiem: function(e, t, a) {
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
                        return a[e]
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
    1133: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1134: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1135: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                n = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                r = function(e) {
                    return function(t, r, i, o) {
                        var s = a(t),
                            d = n[e][a(t)];
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
                meridiem: function(e, t, a) {
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
    1136: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1137: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                meridiem: function(e, t, a) {
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
                        return a[e]
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
    1138: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1139: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(e) {
                    if (0 === e) return e + "-ıncı";
                    var a = e % 10,
                        n = e % 100 - a,
                        r = e >= 100 ? 100 : null;
                    return e + (t[a] || t[n] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1140: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var a = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
            }

            function a(e, a, n) {
                var r = {
                    mm: a ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: a ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                };
                return "m" === n ? a ? "хвіліна" : "хвіліну" : "h" === n ? a ? "гадзіна" : "гадзіну" : e + " " + t(r[n], +e)
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
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: "дзень",
                    dd: a,
                    M: "месяц",
                    MM: a,
                    y: "год",
                    yy: a
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e, t, a) {
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
    1141: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                        a = e % 100;
                    return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1142: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                        return a[e]
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1143: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                        return a[e]
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1144: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                return e + " " + r({
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                }[a], e)
            }

            function a(e) {
                switch (n(e)) {
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

            function n(e) {
                return e > 9 ? n(e % 10) : e
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
                    yy: a
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
    1145: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                var n = e + " ";
                switch (a) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return n += 1 === e ? "dan" : "dana";
                    case "MM":
                        return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
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
    1146: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                    var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (a = "a"), e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1147: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }

            function a(e, a, n, r) {
                var i = e + " ";
                switch (n) {
                    case "s":
                        return a || r ? "pár sekund" : "pár sekundami";
                    case "m":
                        return a ? "minuta" : r ? "minutu" : "minutou";
                    case "mm":
                        return a || r ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
                    case "h":
                        return a ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return a || r ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
                    case "d":
                        return a || r ? "den" : "dnem";
                    case "dd":
                        return a || r ? i + (t(e) ? "dny" : "dní") : i + "dny";
                    case "M":
                        return a || r ? "měsíc" : "měsícem";
                    case "MM":
                        return a || r ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
                    case "y":
                        return a || r ? "rok" : "rokem";
                    case "yy":
                        return a || r ? i + (t(e) ? "roky" : "let") : i + "lety"
                }
            }
            var n = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
            return e.defineLocale("cs", {
                months: n,
                monthsShort: r,
                monthsParse: function(e, t) {
                    var a, n = [];
                    for (a = 0; a < 12; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
                    return n
                }(n, r),
                shortMonthsParse: function(e) {
                    var t, a = [];
                    for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                    return a
                }(r),
                longMonthsParse: function(e) {
                    var t, a = [];
                    for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                    return a
                }(n),
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
                    s: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
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
    1148: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1149: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                        a = "",
                        n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? a = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (a = n[t]), e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1150: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1151: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
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
                return t ? r[a][0] : r[a][1]
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
    1152: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
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
                return t ? r[a][0] : r[a][1]
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
    1153: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
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
                return t ? r[a][0] : r[a][1]
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
    1154: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            return e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: a,
                weekdaysShort: a,
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
                meridiem: function(e, t, a) {
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
    1155: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
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
                calendar: function(e, a) {
                    var n = this._calendarEl[e],
                        r = a && a.hours();
                    return t(n) && (n = n.apply(a)), n.replace("{}", r % 12 == 1 ? "στη" : "στις")
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
    1156: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1157: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1158: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1159: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1160: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1161: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
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
    1162: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
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
    1163: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
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
    1164: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
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
                return t ? r[a][2] ? r[a][2] : r[a][1] : n ? r[a][0] : r[a][1]
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
    1165: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1166: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                meridiem: function(e, t, a) {
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
                        return a[e]
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
    1167: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, r) {
                var i = "";
                switch (n) {
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
                return i = a(e, r) + " " + i
            }

            function a(e, t) {
                return e < 10 ? t ? r[e] : n[e] : e
            }
            var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];
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
    1168: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1169: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1170: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1171: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1172: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            return e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
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
    1173: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
                a = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
                n = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
            return e.defineLocale("gd", {
                months: t,
                monthsShort: a,
                monthsParseExact: !0,
                weekdays: n,
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
    1174: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1175: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
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
                return t ? r[a][0] : r[a][1]
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                }
            })
        })
    },
    1176: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        })
    },
    1177: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                        return a[e]
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1178: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                var n = e + " ";
                switch (a) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return n += 1 === e ? "dan" : "dana";
                    case "MM":
                        return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
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
    1179: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
                var r = e;
                switch (a) {
                    case "s":
                        return n || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (n || t ? " perc" : " perce");
                    case "mm":
                        return r + (n || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (n || t ? " óra" : " órája");
                    case "hh":
                        return r + (n || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (n || t ? " nap" : " napja");
                    case "dd":
                        return r + (n || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (n || t ? " hónap" : " hónapja");
                    case "MM":
                        return r + (n || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (n || t ? " év" : " éve");
                    case "yy":
                        return r + (n || t ? " év" : " éve")
                }
                return ""
            }

            function a(e) {
                return (e ? "" : "[múlt] ") + "[" + n[this.day()] + "] LT[-kor]"
            }
            var n = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
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
                meridiem: function(e, t, a) {
                    return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return a.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return a.call(this, !1)
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
    1180: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1181: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1182: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e % 100 == 11 || e % 10 != 1
            }

            function a(e, a, n, r) {
                var i = e + " ";
                switch (n) {
                    case "s":
                        return a || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return a ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? i + (a || r ? "mínútur" : "mínútum") : a ? i + "mínúta" : i + "mínútu";
                    case "hh":
                        return t(e) ? i + (a || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                    case "d":
                        return a ? "dagur" : r ? "dag" : "degi";
                    case "dd":
                        return t(e) ? a ? i + "dagar" : i + (r ? "daga" : "dögum") : a ? i + "dagur" : i + (r ? "dag" : "degi");
                    case "M":
                        return a ? "mánuður" : r ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? a ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : a ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
                    case "y":
                        return a || r ? "ár" : "ári";
                    case "yy":
                        return t(e) ? i + (a || r ? "ár" : "árum") : i + (a || r ? "ár" : "ári")
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
                    s: a,
                    m: a,
                    mm: a,
                    h: "klukkustund",
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
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
    1183: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1184: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1185: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1186: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1187: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                    var a = e % 10,
                        n = e >= 100 ? 100 : null;
                    return e + (t[e] || t[a] || t[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1188: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1189: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                        return a[e]
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
                meridiem: function(e, t, a) {
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
    1190: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        })
    },
    1191: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                    var a = e % 10,
                        n = e >= 100 ? 100 : null;
                    return e + (t[e] || t[a] || t[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1192: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
                var r = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? r[a][0] : r[a][1]
            }

            function a(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            }

            function n(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            }

            function r(e) {
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (e < 0) return !0;
                if (e < 10) return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10,
                        a = e / 10;
                    return r(0 === t ? a : t)
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
                    future: a,
                    past: n,
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
    1193: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1194: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
                return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
            }

            function a(e, t, a, n) {
                return t ? r(a)[0] : n ? r(a)[1] : r(a)[2]
            }

            function n(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function r(e) {
                return o[e].split("_")
            }

            function i(e, t, i, o) {
                var s = e + " ";
                return 1 === e ? s + a(e, t, i[0], o) : t ? s + (n(e) ? r(i)[1] : r(i)[0]) : o ? s + r(i)[1] : s + (n(e) ? r(i)[1] : r(i)[2])
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
                    m: a,
                    mm: i,
                    h: a,
                    hh: i,
                    d: a,
                    dd: i,
                    M: a,
                    MM: i,
                    y: a,
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
    1195: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }

            function a(e, a, n) {
                return e + " " + t(i[n], e, a)
            }

            function n(e, a, n) {
                return t(i[n], e, a)
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
                    m: n,
                    mm: a,
                    h: n,
                    hh: a,
                    d: n,
                    dd: a,
                    M: n,
                    MM: a,
                    y: n,
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
    1196: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                translate: function(e, a, n) {
                    var r = t.words[n];
                    return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
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
    1197: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1198: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                        a = e % 100;
                    return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1199: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        })
    },
    1200: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
                var r = "";
                if (t) switch (a) {
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
                } else switch (a) {
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
            var a = {
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
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return a[e]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1201: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1202: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1203: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                        return a[e]
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
    1204: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1205: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                        return a[e]
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
                meridiem: function(e, t, a) {
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
    1206: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
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
    1207: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
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
    1208: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1209: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                        return a[e]
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1210: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }

            function a(e, a, n) {
                var r = e + " ";
                switch (n) {
                    case "m":
                        return a ? "minuta" : "minutę";
                    case "mm":
                        return r + (t(e) ? "minuty" : "minut");
                    case "h":
                        return a ? "godzina" : "godzinę";
                    case "hh":
                        return r + (t(e) ? "godziny" : "godzin");
                    case "MM":
                        return r + (t(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return r + (t(e) ? "lata" : "lat")
                }
            }
            var n = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
            return e.defineLocale("pl", {
                months: function(e, t) {
                    return e ? "" === t ? "(" + r[e.month()] + "|" + n[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : n[e.month()] : n
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
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: a,
                    y: "rok",
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
    1211: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1212: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1213: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                var n = {
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    },
                    r = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + n[a]
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
    1214: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var a = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
            }

            function a(e, a, n) {
                var r = {
                    mm: a ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === n ? a ? "минута" : "минуту" : e + " " + t(r[n], +e)
            }
            var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
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
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
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
                    m: a,
                    mm: a,
                    h: "час",
                    hh: a,
                    d: "день",
                    dd: a,
                    M: "месяц",
                    MM: a,
                    y: "год",
                    yy: a
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e, t, a) {
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
    1215: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
                a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            return e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: a,
                weekdaysShort: a,
                weekdaysMin: a,
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
                meridiem: function(e, t, a) {
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
    1216: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1217: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු"
                }
            })
        })
    },
    1218: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5
            }

            function a(e, a, n, r) {
                var i = e + " ";
                switch (n) {
                    case "s":
                        return a || r ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return a ? "minúta" : r ? "minútu" : "minútou";
                    case "mm":
                        return a || r ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
                    case "h":
                        return a ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return a || r ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
                    case "d":
                        return a || r ? "deň" : "dňom";
                    case "dd":
                        return a || r ? i + (t(e) ? "dni" : "dní") : i + "dňami";
                    case "M":
                        return a || r ? "mesiac" : "mesiacom";
                    case "MM":
                        return a || r ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                    case "y":
                        return a || r ? "rok" : "rokom";
                    case "yy":
                        return a || r ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
                }
            }
            var n = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("sk", {
                months: n,
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
                    s: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
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
    1219: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
                var r = e + " ";
                switch (a) {
                    case "s":
                        return t || n ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";
                    case "d":
                        return t || n ? "en dan" : "enim dnem";
                    case "dd":
                        return r += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";
                    case "M":
                        return t || n ? "en mesec" : "enim mesecem";
                    case "MM":
                        return r += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";
                    case "y":
                        return t || n ? "eno leto" : "enim letom";
                    case "yy":
                        return r += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti"
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
    1220: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1221: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                translate: function(e, a, n) {
                    var r = t.words[n];
                    return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
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
    1222: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                translate: function(e, a, n) {
                    var r = t.words[n];
                    return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
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
    1223: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1224: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1225: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1226: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                a = {
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
                        return a[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(e, t, a) {
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
    1227: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1228: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1229: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
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
    1230: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1231: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
            }

            function a(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
            }

            function n(e, t, a, n) {
                var i = r(e);
                switch (a) {
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
                    a = Math.floor(e % 100 / 10),
                    n = e % 10,
                    r = "";
                return t > 0 && (r += i[t] + "vatlh"), a > 0 && (r += ("" !== r ? " " : "") + i[a] + "maH"), n > 0 && (r += ("" !== r ? " " : "") + i[n]), "" === r ? "pagh" : r
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
                    past: a,
                    s: "puS lup",
                    m: "wa’ tup",
                    mm: n,
                    h: "wa’ rep",
                    hh: n,
                    d: "wa’ jaj",
                    dd: n,
                    M: "wa’ jar",
                    MM: n,
                    y: "wa’ DIS",
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
    1232: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                    var a = e % 10,
                        n = e % 100 - a,
                        r = e >= 100 ? 100 : null;
                    return e + (t[a] || t[n] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1233: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, n) {
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
                return n ? r[a][0] : t ? r[a][0] : r[a][1]
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
                meridiem: function(e, t, a) {
                    return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
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
    1234: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1235: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1236: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var a = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
            }

            function a(e, a, n) {
                var r = {
                    mm: a ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: a ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === n ? a ? "хвилина" : "хвилину" : "h" === n ? a ? "година" : "годину" : e + " " + t(r[n], +e)
            }

            function n(e, t) {
                var a = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
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
                weekdays: n,
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
                    m: a,
                    mm: a,
                    h: "годину",
                    hh: a,
                    d: "день",
                    dd: a,
                    M: "місяць",
                    MM: a,
                    y: "рік",
                    yy: a
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, t, a) {
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
    1237: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
        }(0, function(e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            return e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: a,
                weekdaysShort: a,
                weekdaysMin: a,
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
                meridiem: function(e, t, a) {
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
    1238: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1239: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1240: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH"
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
    1241: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1242: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
    1243: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
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
    1244: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
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
    1245: function(e, t, a) {
        ! function(e, t) {
            t(a(816))
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
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
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
    1271: function(e, t, a) {
        "use strict";

        function n(e) {
            if (e) {
                var t = i(e);
                if (t) {
                    var a = e.getBoundingClientRect(),
                        n = t.getBoundingClientRect();
                    a.bottom > n.bottom && r(e, d), a.top < n.top && r(e, s)
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
        t.a = n;
        var s = !0,
            d = !1
    },
    1272: function(e, t, a) {
        var n = a(1502)();
        n.helpers = a(822), a(1506)(n), n.defaults = a(827), n.Element = a(851), n.elements = a(879), n.Interaction = a(1129), n.platform = a(1130), a(1517)(n), a(1518)(n), a(1519)(n), a(1520)(n), a(1521)(n), a(1522)(n), a(1523)(n), a(1524)(n), a(1525)(n), a(1526)(n), a(1527)(n), a(1528)(n), a(1529)(n), a(1530)(n), a(1532)(n), a(1533)(n), a(1534)(n), a(1535)(n), a(1536)(n), a(1537)(n), a(1538)(n), a(1539)(n), a(1540)(n), a(1541)(n), a(1542)(n), a(1543)(n), a(1544)(n), a(1545)(n);
        var r = [];
        r.push(a(1546)(n), a(1547)(n), a(1548)(n)), n.plugins.register(r), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
    },
    1274: function(e, t) {},
    1401: function(e, t, a) {
        function n(e, t, a, n) {
            var i = r(e).getTime(),
                o = r(t).getTime(),
                s = r(a).getTime(),
                d = r(n).getTime();
            if (i > o || s > d) throw new Error("The start of the range cannot be after the end of the range");
            return i < d && s < o
        }
        var r = a(817);
        e.exports = n
    },
    1402: function(e, t, a) {
        function n(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var a, n, i = r(e),
                o = i.getTime();
            return t.forEach(function(e, t) {
                var i = r(e),
                    s = Math.abs(o - i.getTime());
                (void 0 === a || s < n) && (a = t, n = s)
            }), a
        }
        var r = a(817);
        e.exports = n
    },
    1403: function(e, t, a) {
        function n(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var a, n, i = r(e),
                o = i.getTime();
            return t.forEach(function(e) {
                var t = r(e),
                    i = Math.abs(o - t.getTime());
                (void 0 === a || i < n) && (a = t, n = i)
            }), a
        }
        var r = a(817);
        e.exports = n
    },
    1404: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t),
                s = a.getTime() - a.getTimezoneOffset() * i,
                d = n.getTime() - n.getTimezoneOffset() * i;
            return Math.round((s - d) / o)
        }
        var r = a(904),
            i = 6e4,
            o = 6048e5;
        e.exports = n
    },
    1405: function(e, t, a) {
        function n(e, t) {
            var a = i(e),
                n = i(t);
            return 4 * (a.getFullYear() - n.getFullYear()) + (r(a) - r(n))
        }
        var r = a(1102),
            i = a(817);
        e.exports = n
    },
    1406: function(e, t, a) {
        function n(e, t, a) {
            var n = r(e, a),
                s = r(t, a),
                d = n.getTime() - n.getTimezoneOffset() * i,
                u = s.getTime() - s.getTimezoneOffset() * i;
            return Math.round((d - u) / o)
        }
        var r = a(1019),
            i = 6e4,
            o = 6048e5;
        e.exports = n
    },
    1407: function(e, t, a) {
        function n(e, t) {
            var a = r(e, t) / i;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
        var r = a(1022),
            i = 36e5;
        e.exports = n
    },
    1408: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t),
                d = o(a, n),
                u = Math.abs(i(a, n));
            return a = s(a, d * u), d * (u - (o(a, n) === -d))
        }
        var r = a(817),
            i = a(1100),
            o = a(998),
            s = a(1105);
        e.exports = n
    },
    1409: function(e, t, a) {
        function n(e, t) {
            var a = r(e, t) / i;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
        var r = a(1022),
            i = 6e4;
        e.exports = n
    },
    1410: function(e, t, a) {
        function n(e, t) {
            var a = r(e, t) / 3;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
        var r = a(1042);
        e.exports = n
    },
    1411: function(e, t, a) {
        function n(e, t) {
            var a = r(e, t) / 7;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
        var r = a(1104);
        e.exports = n
    },
    1412: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t),
                s = o(a, n),
                d = Math.abs(i(a, n));
            return a.setFullYear(a.getFullYear() - s * d), s * (d - (o(a, n) === -s))
        }
        var r = a(817),
            i = a(1103),
            o = a(998);
        e.exports = n
    },
    1413: function(e, t) {
        function a() {
            function e(e, a, n) {
                n = n || {};
                var r;
                return r = "string" == typeof t[e] ? t[e] : 1 === a ? t[e].one : t[e].other.replace("{{count}}", a), n.addSuffix ? n.comparison > 0 ? "in " + r : r + " ago" : r
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
        e.exports = a
    },
    1414: function(e, t, a) {
        function n() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                a = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
                        return a[e.getDay()]
                    },
                    ddd: function(e) {
                        return n[e.getDay()]
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
                l[e + "o"] = function(t, a) {
                    return r(a[e](t))
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
        var i = a(1415);
        e.exports = n
    },
    1415: function(e, t) {
        function a(e) {
            var t = [];
            for (var a in e) e.hasOwnProperty(a) && t.push(a);
            var r = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + r.join("|") + "|.)", "g")
        }
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = a
    },
    1416: function(e, t, a) {
        function n(e, t, a) {
            var n = a || {},
                c = r(e, t),
                m = n.locale,
                _ = s.distanceInWords.localize;
            m && m.distanceInWords && m.distanceInWords.localize && (_ = m.distanceInWords.localize);
            var h, f, p = {
                addSuffix: Boolean(n.addSuffix),
                comparison: c
            };
            c > 0 ? (h = i(e), f = i(t)) : (h = i(t), f = i(e));
            var y, g, M, v, b, L = Math[n.partialMethod ? String(n.partialMethod) : "floor"],
                Y = o(f, h),
                D = f.getTimezoneOffset() - h.getTimezoneOffset(),
                k = L(Y / 60) - D;
            if ("s" === (y = n.unit ? String(n.unit) : k < 1 ? "s" : k < 60 ? "m" : k < d ? "h" : k < u ? "d" : k < l ? "M" : "Y")) return _("xSeconds", Y, p);
            if ("m" === y) return _("xMinutes", k, p);
            if ("h" === y) return g = L(k / 60), _("xHours", g, p);
            if ("d" === y) return M = L(k / d), _("xDays", M, p);
            if ("M" === y) return v = L(k / u), _("xMonths", v, p);
            if ("Y" === y) return b = L(k / l), _("xYears", b, p);
            throw new Error("Unknown unit: " + y)
        }
        var r = a(1041),
            i = a(817),
            o = a(1043),
            s = a(1044),
            d = 1440,
            u = 43200,
            l = 525600;
        e.exports = n
    },
    1417: function(e, t, a) {
        function n(e, t) {
            return r(Date.now(), e, t)
        }
        var r = a(1106);
        e.exports = n
    },
    1418: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t),
                i = n.getTime();
            if (a.getTime() > i) throw new Error("The first date cannot be after the second date");
            var o = [],
                s = a;
            for (s.setHours(0, 0, 0, 0); s.getTime() <= i;) o.push(r(s)), s.setDate(s.getDate() + 1);
            return o
        }
        var r = a(817);
        e.exports = n
    },
    1419: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setMinutes(59, 59, 999), t
        }
        var r = a(817);
        e.exports = n
    },
    1420: function(e, t, a) {
        function n(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
        var r = a(1107);
        e.exports = n
    },
    1421: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = new Date(0);
            a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var n = i(a);
            return n.setMilliseconds(n.getMilliseconds() - 1), n
        }
        var r = a(903),
            i = a(904);
        e.exports = n
    },
    1422: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setSeconds(59, 999), t
        }
        var r = a(817);
        e.exports = n
    },
    1423: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getMonth(),
                n = a - a % 3 + 3;
            return t.setMonth(n, 0), t.setHours(23, 59, 59, 999), t
        }
        var r = a(817);
        e.exports = n
    },
    1424: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setMilliseconds(999), t
        }
        var r = a(817);
        e.exports = n
    },
    1425: function(e, t, a) {
        function n() {
            return r(new Date)
        }
        var r = a(1045);
        e.exports = n
    },
    1426: function(e, t) {
        function a() {
            var e = new Date,
                t = e.getFullYear(),
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n + 1), r.setHours(23, 59, 59, 999), r
        }
        e.exports = a
    },
    1427: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getFullYear();
            return t.setFullYear(a + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
        var r = a(817);
        e.exports = n
    },
    1428: function(e, t) {
        function a() {
            var e = new Date,
                t = e.getFullYear(),
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n - 1), r.setHours(23, 59, 59, 999), r
        }
        e.exports = a
    },
    1429: function(e, t, a) {
        function n(e, t, a) {
            var n = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                i = a || {},
                o = i.locale,
                s = _.format.formatters,
                d = _.format.formattingTokensRegExp;
            o && o.format && o.format.formatters && (s = o.format.formatters, o.format.formattingTokensRegExp && (d = o.format.formattingTokensRegExp));
            var u = c(e);
            return m(u) ? r(n, s, d)(u) : "Invalid Date"
        }

        function r(e, t, a) {
            var n, r, o = e.match(a),
                s = o.length;
            for (n = 0; n < s; n++) r = t[o[n]] || h[o[n]], o[n] = r || i(o[n]);
            return function(e) {
                for (var t = "", a = 0; a < s; a++) o[a] instanceof Function ? t += o[a](e, h) : t += o[a];
                return t
            }
        }

        function i(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, "") : e.replace(/\\/g, "")
        }

        function o(e, t) {
            t = t || "";
            var a = e > 0 ? "-" : "+",
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
            return a + s(r, 2) + t + s(i, 2)
        }

        function s(e, t) {
            for (var a = Math.abs(e).toString(); a.length < t;) a = "0" + a;
            return a
        }
        var d = a(1109),
            u = a(1046),
            l = a(903),
            c = a(817),
            m = a(1111),
            _ = a(1044),
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
        e.exports = n
    },
    1430: function(e, t, a) {
        function n(e) {
            return r(e).getDate()
        }
        var r = a(817);
        e.exports = n
    },
    1431: function(e, t, a) {
        function n(e) {
            return r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1432: function(e, t, a) {
        function n(e) {
            return r(e) ? 366 : 365
        }
        var r = a(1112);
        e.exports = n
    },
    1433: function(e, t, a) {
        function n(e) {
            return r(e).getHours()
        }
        var r = a(817);
        e.exports = n
    },
    1434: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = r(i(t, 60)),
                n = a.valueOf() - t.valueOf();
            return Math.round(n / o)
        }
        var r = a(997),
            i = a(1040),
            o = 6048e5;
        e.exports = n
    },
    1435: function(e, t, a) {
        function n(e) {
            return r(e).getMilliseconds()
        }
        var r = a(817);
        e.exports = n
    },
    1436: function(e, t, a) {
        function n(e) {
            return r(e).getMinutes()
        }
        var r = a(817);
        e.exports = n
    },
    1437: function(e, t, a) {
        function n(e) {
            return r(e).getMonth()
        }
        var r = a(817);
        e.exports = n
    },
    1438: function(e, t, a) {
        function n(e, t, a, n) {
            var o = r(e).getTime(),
                s = r(t).getTime(),
                d = r(a).getTime(),
                u = r(n).getTime();
            if (o > s || d > u) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < u && d < s)) return 0;
            var l = d < o ? o : d,
                c = u > s ? s : u,
                m = c - l;
            return Math.ceil(m / i)
        }
        var r = a(817),
            i = 864e5;
        e.exports = n
    },
    1439: function(e, t, a) {
        function n(e) {
            return r(e).getSeconds()
        }
        var r = a(817);
        e.exports = n
    },
    1440: function(e, t, a) {
        function n(e) {
            return r(e).getTime()
        }
        var r = a(817);
        e.exports = n
    },
    1441: function(e, t, a) {
        function n(e) {
            return r(e).getFullYear()
        }
        var r = a(817);
        e.exports = n
    },
    1442: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() > n.getTime()
        }
        var r = a(817);
        e.exports = n
    },
    1443: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() < n.getTime()
        }
        var r = a(817);
        e.exports = n
    },
    1444: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() === n.getTime()
        }
        var r = a(817);
        e.exports = n
    },
    1445: function(e, t, a) {
        function n(e) {
            return 1 === r(e).getDate()
        }
        var r = a(817);
        e.exports = n
    },
    1446: function(e, t, a) {
        function n(e) {
            return 5 === r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1447: function(e, t, a) {
        function n(e) {
            return r(e).getTime() > (new Date).getTime()
        }
        var r = a(817);
        e.exports = n
    },
    1448: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return i(t).getTime() === o(t).getTime()
        }
        var r = a(817),
            i = a(1045),
            o = a(1108);
        e.exports = n
    },
    1449: function(e, t, a) {
        function n(e) {
            return 1 === r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1450: function(e, t, a) {
        function n(e) {
            return r(e).getTime() < (new Date).getTime()
        }
        var r = a(817);
        e.exports = n
    },
    1451: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = r(t);
            return a.getTime() === n.getTime()
        }
        var r = a(905);
        e.exports = n
    },
    1452: function(e, t, a) {
        function n(e) {
            return 6 === r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1453: function(e, t, a) {
        function n(e) {
            return 0 === r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1454: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1114);
        e.exports = n
    },
    1455: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1116);
        e.exports = n
    },
    1456: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1117);
        e.exports = n
    },
    1457: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1118);
        e.exports = n
    },
    1458: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1120);
        e.exports = n
    },
    1459: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1121);
        e.exports = n
    },
    1460: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1123);
        e.exports = n
    },
    1461: function(e, t, a) {
        function n(e, t) {
            return r(new Date, e, t)
        }
        var r = a(1047);
        e.exports = n
    },
    1462: function(e, t, a) {
        function n(e) {
            return r(new Date, e)
        }
        var r = a(1125);
        e.exports = n
    },
    1463: function(e, t, a) {
        function n(e) {
            return 4 === r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1464: function(e, t, a) {
        function n(e) {
            return r(e).getTime() === r(new Date).getTime()
        }
        var r = a(905);
        e.exports = n
    },
    1465: function(e, t, a) {
        function n(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), r(e).getTime() === r(t).getTime()
        }
        var r = a(905);
        e.exports = n
    },
    1466: function(e, t, a) {
        function n(e) {
            return 2 === r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1467: function(e, t, a) {
        function n(e) {
            return 3 === r(e).getDay()
        }
        var r = a(817);
        e.exports = n
    },
    1468: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getDay();
            return 0 === a || 6 === a
        }
        var r = a(817);
        e.exports = n
    },
    1469: function(e, t, a) {
        function n(e, t, a) {
            var n = r(e).getTime(),
                i = r(t).getTime(),
                o = r(a).getTime();
            if (i > o) throw new Error("The start of the range cannot be after the end of the range");
            return n >= i && n <= o
        }
        var r = a(817);
        e.exports = n
    },
    1470: function(e, t, a) {
        function n(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), r(e).getTime() === r(t).getTime()
        }
        var r = a(905);
        e.exports = n
    },
    1471: function(e, t, a) {
        function n(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
        var r = a(1126);
        e.exports = n
    },
    1472: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = new Date(0);
            a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var n = i(a);
            return n.setDate(n.getDate() - 1), n
        }
        var r = a(903),
            i = a(904);
        e.exports = n
    },
    1473: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getMonth();
            return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(0, 0, 0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    1474: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getMonth(),
                n = a - a % 3 + 3;
            return t.setMonth(n, 0), t.setHours(0, 0, 0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    1475: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getFullYear();
            return t.setFullYear(a + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    1476: function(e, t, a) {
        function n() {
            var e = Array.prototype.slice.call(arguments),
                t = e.map(function(e) {
                    return r(e)
                }),
                a = Math.max.apply(null, t);
            return new Date(a)
        }
        var r = a(817);
        e.exports = n
    },
    1477: function(e, t, a) {
        function n() {
            var e = Array.prototype.slice.call(arguments),
                t = e.map(function(e) {
                    return r(e)
                }),
                a = Math.min.apply(null, t);
            return new Date(a)
        }
        var r = a(817);
        e.exports = n
    },
    1478: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setDate(n), a
        }
        var r = a(817);
        e.exports = n
    },
    1479: function(e, t, a) {
        function n(e, t, a) {
            var n = a ? Number(a.weekStartsOn) || 0 : 0,
                o = r(e),
                s = Number(t),
                d = o.getDay();
            return i(o, ((s % 7 + 7) % 7 < n ? 7 : 0) + s - d)
        }
        var r = a(817),
            i = a(995);
        e.exports = n
    },
    1480: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setMonth(0), a.setDate(n), a
        }
        var r = a(817);
        e.exports = n
    },
    1481: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setHours(n), a
        }
        var r = a(817);
        e.exports = n
    },
    1482: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t),
                s = o(a);
            return i(a, n - s)
        }
        var r = a(817),
            i = a(995),
            o = a(1113);
        e.exports = n
    },
    1483: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t),
                o = i(a) - n;
            return a.setDate(a.getDate() - 7 * o), a
        }
        var r = a(817),
            i = a(1046);
        e.exports = n
    },
    1484: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setMilliseconds(n), a
        }
        var r = a(817);
        e.exports = n
    },
    1485: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setMinutes(n), a
        }
        var r = a(817);
        e.exports = n
    },
    1486: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t),
                o = Math.floor(a.getMonth() / 3) + 1,
                s = n - o;
            return i(a, a.getMonth() + 3 * s)
        }
        var r = a(817),
            i = a(1127);
        e.exports = n
    },
    1487: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setSeconds(n), a
        }
        var r = a(817);
        e.exports = n
    },
    1488: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setFullYear(n), a
        }
        var r = a(817);
        e.exports = n
    },
    1489: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    1490: function(e, t, a) {
        function n() {
            return r(new Date)
        }
        var r = a(905);
        e.exports = n
    },
    1491: function(e, t) {
        function a() {
            var e = new Date,
                t = e.getFullYear(),
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n + 1), r.setHours(0, 0, 0, 0), r
        }
        e.exports = a
    },
    1492: function(e, t) {
        function a() {
            var e = new Date,
                t = e.getFullYear(),
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n - 1), r.setHours(0, 0, 0, 0), r
        }
        e.exports = a
    },
    1493: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(995);
        e.exports = n
    },
    1494: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1093);
        e.exports = n
    },
    1495: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(996);
        e.exports = n
    },
    1496: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1096);
        e.exports = n
    },
    1497: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1021);
        e.exports = n
    },
    1498: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1097);
        e.exports = n
    },
    1499: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1098);
        e.exports = n
    },
    1500: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1040);
        e.exports = n
    },
    1501: function(e, t, a) {
        function n(e, t) {
            var a = Number(t);
            return r(e, -a)
        }
        var r = a(1099);
        e.exports = n
    },
    1502: function(e, t, a) {
        "use strict";
        a(827)._set("global", {
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
    1503: function(e, t, a) {
        "use strict";
        var n = a(1023),
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
                        a = 0,
                        n = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a))
                },
                easeOutElastic: function(e) {
                    var t = 1.70158,
                        a = 0,
                        n = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1)
                },
                easeInOutElastic: function(e) {
                    var t = 1.70158,
                        a = 0,
                        n = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .45), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * .5 + 1)
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
        }, n.easingEffects = r
    },
    1504: function(e, t, a) {
        "use strict";
        var n = a(1023),
            t = e.exports = {
                clear: function(e) {
                    e.ctx.clearRect(0, 0, e.width, e.height)
                },
                roundedRect: function(e, t, a, n, r, i) {
                    if (i) {
                        var o = Math.min(i, n / 2),
                            s = Math.min(i, r / 2);
                        e.moveTo(t + o, a), e.lineTo(t + n - o, a), e.quadraticCurveTo(t + n, a, t + n, a + s), e.lineTo(t + n, a + r - s), e.quadraticCurveTo(t + n, a + r, t + n - o, a + r), e.lineTo(t + o, a + r), e.quadraticCurveTo(t, a + r, t, a + r - s), e.lineTo(t, a + s), e.quadraticCurveTo(t, a, t + o, a)
                    } else e.rect(t, a, n, r)
                },
                drawPoint: function(e, t, a, n, r) {
                    var i, o, s, d, u, l;
                    if ("object" == typeof t && ("[object HTMLImageElement]" === (i = t.toString()) || "[object HTMLCanvasElement]" === i)) return void e.drawImage(t, n - t.width / 2, r - t.height / 2, t.width, t.height);
                    if (!(isNaN(a) || a <= 0)) {
                        switch (t) {
                            default: e.beginPath(),
                            e.arc(n, r, a, 0, 2 * Math.PI),
                            e.closePath(),
                            e.fill();
                            break;
                            case "triangle":
                                    e.beginPath(),
                                o = 3 * a / Math.sqrt(3),
                                u = o * Math.sqrt(3) / 2,
                                e.moveTo(n - o / 2, r + u / 3),
                                e.lineTo(n + o / 2, r + u / 3),
                                e.lineTo(n, r - 2 * u / 3),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rect":
                                    l = 1 / Math.SQRT2 * a,
                                e.beginPath(),
                                e.fillRect(n - l, r - l, 2 * l, 2 * l),
                                e.strokeRect(n - l, r - l, 2 * l, 2 * l);
                                break;
                            case "rectRounded":
                                    var c = a / Math.SQRT2,
                                    m = n - c,
                                    _ = r - c,
                                    h = Math.SQRT2 * a;e.beginPath(),
                                this.roundedRect(e, m, _, h, h, a / 2),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rectRot":
                                    l = 1 / Math.SQRT2 * a,
                                e.beginPath(),
                                e.moveTo(n - l, r),
                                e.lineTo(n, r + l),
                                e.lineTo(n + l, r),
                                e.lineTo(n, r - l),
                                e.closePath(),
                                e.fill();
                                break;
                            case "cross":
                                    e.beginPath(),
                                e.moveTo(n, r + a),
                                e.lineTo(n, r - a),
                                e.moveTo(n - a, r),
                                e.lineTo(n + a, r),
                                e.closePath();
                                break;
                            case "crossRot":
                                    e.beginPath(),
                                s = Math.cos(Math.PI / 4) * a,
                                d = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - s, r - d),
                                e.lineTo(n + s, r + d),
                                e.moveTo(n - s, r + d),
                                e.lineTo(n + s, r - d),
                                e.closePath();
                                break;
                            case "star":
                                    e.beginPath(),
                                e.moveTo(n, r + a),
                                e.lineTo(n, r - a),
                                e.moveTo(n - a, r),
                                e.lineTo(n + a, r),
                                s = Math.cos(Math.PI / 4) * a,
                                d = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - s, r - d),
                                e.lineTo(n + s, r + d),
                                e.moveTo(n - s, r + d),
                                e.lineTo(n + s, r - d),
                                e.closePath();
                                break;
                            case "line":
                                    e.beginPath(),
                                e.moveTo(n - a, r),
                                e.lineTo(n + a, r),
                                e.closePath();
                                break;
                            case "dash":
                                    e.beginPath(),
                                e.moveTo(n, r),
                                e.lineTo(n + a, r),
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
                lineTo: function(e, t, a, n) {
                    return a.steppedLine ? ("after" === a.steppedLine && !n || "after" !== a.steppedLine && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y), void e.lineTo(a.x, a.y)) : a.tension ? void e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : void e.lineTo(a.x, a.y)
                }
            };
        n.clear = t.clear, n.drawRoundedRectangle = function(e) {
            e.beginPath(), t.roundedRect.apply(t, arguments), e.closePath()
        }
    },
    1505: function(e, t, a) {
        "use strict";
        var n = a(1023);
        e.exports = {
            toLineHeight: function(e, t) {
                var a = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!a || "normal" === a[1]) return 1.2 * t;
                switch (e = +a[2], a[3]) {
                    case "px":
                        return e;
                    case "%":
                        e /= 100
                }
                return t * e
            },
            toPadding: function(e) {
                var t, a, r, i;
                return n.isObject(e) ? (t = +e.top || 0, a = +e.right || 0, r = +e.bottom || 0, i = +e.left || 0) : t = a = r = i = +e || 0, {
                    top: t,
                    right: a,
                    bottom: r,
                    left: i,
                    height: t + r,
                    width: i + a
                }
            },
            resolve: function(e, t, a) {
                var r, i, o;
                for (r = 0, i = e.length; r < i; ++r)
                    if (void 0 !== (o = e[r]) && (void 0 !== t && "function" == typeof o && (o = o(t)), void 0 !== a && n.isArray(o) && (o = o[a]), void 0 !== o)) return o
            }
        }
    },
    1506: function(e, t, a) {
        "use strict";
        var n = a(1128),
            r = a(827),
            i = a(822);
        e.exports = function(e) {
            function t(e, t, a) {
                var n;
                return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e, n
            }

            function a(e) {
                return void 0 !== e && null !== e && "none" !== e
            }

            function o(e, n, r) {
                var i = document.defaultView,
                    o = e.parentNode,
                    s = i.getComputedStyle(e)[n],
                    d = i.getComputedStyle(o)[n],
                    u = a(s),
                    l = a(d),
                    c = Number.POSITIVE_INFINITY;
                return u || l ? Math.min(u ? t(s, e, r) : c, l ? t(d, o, r) : c) : "none"
            }
            i.extend = function(e) {
                for (var t = function(t, a) {
                        e[a] = t
                    }, a = 1, n = arguments.length; a < n; a++) i.each(arguments[a], t);
                return e
            }, i.configMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, a, n, r) {
                        var o = a[t] || {},
                            s = n[t];
                        "scales" === t ? a[t] = i.scaleMerge(o, s) : "scale" === t ? a[t] = i.merge(o, [e.scaleService.getScaleDefaults(s.type), s]) : i._merger(t, a, n, r)
                    }
                })
            }, i.scaleMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, a, n, r) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var o, s, d, u = n[t].length;
                            for (a[t] || (a[t] = []), o = 0; o < u; ++o) d = n[t][o], s = i.valueOrDefault(d.type, "xAxes" === t ? "category" : "linear"), o >= a[t].length && a[t].push({}), !a[t][o].type || d.type && d.type !== a[t][o].type ? i.merge(a[t][o], [e.scaleService.getScaleDefaults(s), d]) : i.merge(a[t][o], d)
                        } else i._merger(t, a, n, r)
                    }
                })
            }, i.where = function(e, t) {
                if (i.isArray(e) && Array.prototype.filter) return e.filter(t);
                var a = [];
                return i.each(e, function(e) {
                    t(e) && a.push(e)
                }), a
            }, i.findIndex = Array.prototype.findIndex ? function(e, t, a) {
                return e.findIndex(t, a)
            } : function(e, t, a) {
                a = void 0 === a ? e : a;
                for (var n = 0, r = e.length; n < r; ++n)
                    if (t.call(a, e[n], n, e)) return n;
                return -1
            }, i.findNextWhere = function(e, t, a) {
                i.isNullOrUndef(a) && (a = -1);
                for (var n = a + 1; n < e.length; n++) {
                    var r = e[n];
                    if (t(r)) return r
                }
            }, i.findPreviousWhere = function(e, t, a) {
                i.isNullOrUndef(a) && (a = e.length);
                for (var n = a - 1; n >= 0; n--) {
                    var r = e[n];
                    if (t(r)) return r
                }
            }, i.inherits = function(e) {
                var t = this,
                    a = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                        return t.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = a
                    };
                return n.prototype = t.prototype, a.prototype = new n, a.extend = i.inherits, e && i.extend(a.prototype, e), a.__super__ = t.prototype, a
            }, i.isNumber = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, i.almostEquals = function(e, t, a) {
                return Math.abs(e - t) < a
            }, i.almostWhole = function(e, t) {
                var a = Math.round(e);
                return a - t < e && a + t > e
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
                var a = t.x - e.x,
                    n = t.y - e.y,
                    r = Math.sqrt(a * a + n * n),
                    i = Math.atan2(n, a);
                return i < -.5 * Math.PI && (i += 2 * Math.PI), {
                    angle: i,
                    distance: r
                }
            }, i.distanceBetweenPoints = function(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }, i.aliasPixel = function(e) {
                return e % 2 == 0 ? 0 : .5
            }, i.splineCurve = function(e, t, a, n) {
                var r = e.skip ? t : e,
                    i = t,
                    o = a.skip ? t : a,
                    s = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
                    d = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
                    u = s / (s + d),
                    l = d / (s + d);
                u = isNaN(u) ? 0 : u, l = isNaN(l) ? 0 : l;
                var c = n * u,
                    m = n * l;
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
                var t, a, n, r, o = (e || []).map(function(e) {
                        return {
                            model: e._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                    s = o.length;
                for (t = 0; t < s; ++t)
                    if (n = o[t], !n.model.skip) {
                        if (a = t > 0 ? o[t - 1] : null, (r = t < s - 1 ? o[t + 1] : null) && !r.model.skip) {
                            var d = r.model.x - n.model.x;
                            n.deltaK = 0 !== d ? (r.model.y - n.model.y) / d : 0
                        }!a || a.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
                    }
                var u, l, c, m;
                for (t = 0; t < s - 1; ++t) n = o[t], r = o[t + 1], n.model.skip || r.model.skip || (i.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (u = n.mK / n.deltaK, l = r.mK / n.deltaK, (m = Math.pow(u, 2) + Math.pow(l, 2)) <= 9 || (c = 3 / Math.sqrt(m), n.mK = u * c * n.deltaK, r.mK = l * c * n.deltaK)));
                var _;
                for (t = 0; t < s; ++t) n = o[t], n.model.skip || (a = t > 0 ? o[t - 1] : null, r = t < s - 1 ? o[t + 1] : null, a && !a.model.skip && (_ = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - _, n.model.controlPointPreviousY = n.model.y - _ * n.mK), r && !r.model.skip && (_ = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + _, n.model.controlPointNextY = n.model.y + _ * n.mK))
            }, i.nextItem = function(e, t, a) {
                return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
            }, i.previousItem = function(e, t, a) {
                return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
            }, i.niceNum = function(e, t) {
                var a = Math.floor(i.log10(e)),
                    n = e / Math.pow(10, a);
                return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, a)
            }, i.requestAnimFrame = function() {
                return "undefined" == typeof window ? function(e) {
                    e()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    return window.setTimeout(e, 1e3 / 60)
                }
            }(), i.getRelativePosition = function(e, t) {
                var a, n, r = e.originalEvent || e,
                    o = e.currentTarget || e.srcElement,
                    s = o.getBoundingClientRect(),
                    d = r.touches;
                d && d.length > 0 ? (a = d[0].clientX, n = d[0].clientY) : (a = r.clientX, n = r.clientY);
                var u = parseFloat(i.getStyle(o, "padding-left")),
                    l = parseFloat(i.getStyle(o, "padding-top")),
                    c = parseFloat(i.getStyle(o, "padding-right")),
                    m = parseFloat(i.getStyle(o, "padding-bottom")),
                    _ = s.right - s.left - u - c,
                    h = s.bottom - s.top - l - m;
                return a = Math.round((a - s.left - u) / _ * o.width / t.currentDevicePixelRatio), n = Math.round((n - s.top - l) / h * o.height / t.currentDevicePixelRatio), {
                    x: a,
                    y: n
                }
            }, i.getConstraintWidth = function(e) {
                return o(e, "max-width", "clientWidth")
            }, i.getConstraintHeight = function(e) {
                return o(e, "max-height", "clientHeight")
            }, i.getMaximumWidth = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientWidth;
                var a = parseInt(i.getStyle(t, "padding-left"), 10),
                    n = parseInt(i.getStyle(t, "padding-right"), 10),
                    r = t.clientWidth - a - n,
                    o = i.getConstraintWidth(e);
                return isNaN(o) ? r : Math.min(r, o)
            }, i.getMaximumHeight = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientHeight;
                var a = parseInt(i.getStyle(t, "padding-top"), 10),
                    n = parseInt(i.getStyle(t, "padding-bottom"), 10),
                    r = t.clientHeight - a - n,
                    o = i.getConstraintHeight(e);
                return isNaN(o) ? r : Math.min(r, o)
            }, i.getStyle = function(e, t) {
                return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
            }, i.retinaScale = function(e, t) {
                var a = e.currentDevicePixelRatio = t || window.devicePixelRatio || 1;
                if (1 !== a) {
                    var n = e.canvas,
                        r = e.height,
                        i = e.width;
                    n.height = r * a, n.width = i * a, e.ctx.scale(a, a), n.style.height = r + "px", n.style.width = i + "px"
                }
            }, i.fontString = function(e, t, a) {
                return t + " " + e + "px " + a
            }, i.longestText = function(e, t, a, n) {
                n = n || {};
                var r = n.data = n.data || {},
                    o = n.garbageCollect = n.garbageCollect || [];
                n.font !== t && (r = n.data = {}, o = n.garbageCollect = [], n.font = t), e.font = t;
                var s = 0;
                i.each(a, function(t) {
                    void 0 !== t && null !== t && !0 !== i.isArray(t) ? s = i.measureText(e, r, o, s, t) : i.isArray(t) && i.each(t, function(t) {
                        void 0 === t || null === t || i.isArray(t) || (s = i.measureText(e, r, o, s, t))
                    })
                });
                var d = o.length / 2;
                if (d > a.length) {
                    for (var u = 0; u < d; u++) delete r[o[u]];
                    o.splice(0, d)
                }
                return s
            }, i.measureText = function(e, t, a, n, r) {
                var i = t[r];
                return i || (i = t[r] = e.measureText(r).width, a.push(r)), i > n && (n = i), n
            }, i.numberOfLabelLines = function(e) {
                var t = 1;
                return i.each(e, function(e) {
                    i.isArray(e) && e.length > t && (t = e.length)
                }), t
            }, i.color = n ? function(e) {
                return e instanceof CanvasGradient && (e = r.global.defaultColor), n(e)
            } : function(e) {
                return console.error("Color.js not found!"), e
            }, i.getHoverColor = function(e) {
                return e instanceof CanvasPattern ? e : i.color(e).saturate(.5).darken(.1).rgbString()
            }
        }
    },
    1507: function(e, t, a) {
        var n = a(1508),
            r = function() {
                return new u
            };
        for (var i in n) {
            r[i + "Raw"] = function(e) {
                return function(t) {
                    return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), n[e](t)
                }
            }(i);
            var o = /(\w+)2(\w+)/.exec(i),
                s = o[1],
                d = o[2];
            r[s] = r[s] || {}, r[s][d] = r[i] = function(e) {
                return function(t) {
                    "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                    var a = n[e](t);
                    if ("string" == typeof a || void 0 === a) return a;
                    for (var r = 0; r < a.length; r++) a[r] = Math.round(a[r]);
                    return a
                }
            }(i)
        }
        var u = function() {
            this.convs = {}
        };
        u.prototype.routeSpace = function(e, t) {
            var a = t[0];
            return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a))
        }, u.prototype.setValues = function(e, t) {
            return this.space = e, this.convs = {}, this.convs[e] = t, this
        }, u.prototype.getValues = function(e) {
            var t = this.convs[e];
            if (!t) {
                var a = this.space,
                    n = this.convs[a];
                t = r[a][e](n), this.convs[e] = t
            }
            return t
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
            u.prototype[e] = function(t) {
                return this.routeSpace(e, arguments)
            }
        }), e.exports = r
    },
    1508: function(e, t) {
        function a(e) {
            var t, a, n, r = e[0] / 255,
                i = e[1] / 255,
                o = e[2] / 255,
                s = Math.min(r, i, o),
                d = Math.max(r, i, o),
                u = d - s;
            return d == s ? t = 0 : r == d ? t = (i - o) / u : i == d ? t = 2 + (o - r) / u : o == d && (t = 4 + (r - i) / u), t = Math.min(60 * t, 360), t < 0 && (t += 360), n = (s + d) / 2, a = d == s ? 0 : n <= .5 ? u / (d + s) : u / (2 - d - s), [t, 100 * a, 100 * n]
        }

        function n(e) {
            var t, a, n, r = e[0],
                i = e[1],
                o = e[2],
                s = Math.min(r, i, o),
                d = Math.max(r, i, o),
                u = d - s;
            return a = 0 == d ? 0 : u / d * 1e3 / 10, d == s ? t = 0 : r == d ? t = (i - o) / u : i == d ? t = 2 + (o - r) / u : o == d && (t = 4 + (r - i) / u), t = Math.min(60 * t, 360), t < 0 && (t += 360), n = d / 255 * 1e3 / 10, [t, a, n]
        }

        function i(e) {
            var t = e[0],
                n = e[1],
                r = e[2],
                i = a(e)[0],
                o = 1 / 255 * Math.min(t, Math.min(n, r)),
                r = 1 - 1 / 255 * Math.max(t, Math.max(n, r));
            return [i, 100 * o, 100 * r]
        }

        function o(e) {
            var t, a, n, r, i = e[0] / 255,
                o = e[1] / 255,
                s = e[2] / 255;
            return r = Math.min(1 - i, 1 - o, 1 - s), t = (1 - i - r) / (1 - r) || 0, a = (1 - o - r) / (1 - r) || 0, n = (1 - s - r) / (1 - r) || 0, [100 * t, 100 * a, 100 * n, 100 * r]
        }

        function s(e) {
            return K[JSON.stringify(e)]
        }

        function d(e) {
            var t = e[0] / 255,
                a = e[1] / 255,
                n = e[2] / 255;
            return t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, [100 * (.4124 * t + .3576 * a + .1805 * n), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
        }

        function u(e) {
            var t, a, n, r = d(e),
                i = r[0],
                o = r[1],
                s = r[2];
            return i /= 95.047, o /= 100, s /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * o - 16, a = 500 * (i - o), n = 200 * (o - s), [t, a, n]
        }

        function l(e) {
            return E(u(e))
        }

        function c(e) {
            var t, a, n, r, i, o = e[0] / 360,
                s = e[1] / 100,
                d = e[2] / 100;
            if (0 == s) return i = 255 * d, [i, i, i];
            a = d < .5 ? d * (1 + s) : d + s - d * s, t = 2 * d - a, r = [0, 0, 0];
            for (var u = 0; u < 3; u++) n = o + 1 / 3 * -(u - 1), n < 0 && n++, n > 1 && n--, i = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, r[u] = 255 * i;
            return r
        }

        function m(e) {
            var t, a, n = e[0],
                r = e[1] / 100,
                i = e[2] / 100;
            return 0 === i ? [0, 0, 0] : (i *= 2, r *= i <= 1 ? i : 2 - i, a = (i + r) / 2, t = 2 * r / (i + r), [n, 100 * t, 100 * a])
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
                a = e[1] / 100,
                n = e[2] / 100,
                r = Math.floor(t) % 6,
                i = t - Math.floor(t),
                o = 255 * n * (1 - a),
                s = 255 * n * (1 - a * i),
                d = 255 * n * (1 - a * (1 - i)),
                n = 255 * n;
            switch (r) {
                case 0:
                    return [n, d, o];
                case 1:
                    return [s, n, o];
                case 2:
                    return [o, n, d];
                case 3:
                    return [o, s, n];
                case 4:
                    return [d, o, n];
                case 5:
                    return [n, o, s]
            }
        }

        function y(e) {
            var t, a, n = e[0],
                r = e[1] / 100,
                i = e[2] / 100;
            return a = (2 - r) * i, t = r * i, t /= a <= 1 ? a : 2 - a, t = t || 0, a /= 2, [n, 100 * t, 100 * a]
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
            var t, a, n, i, o = e[0] / 360,
                s = e[1] / 100,
                d = e[2] / 100,
                u = s + d;
            switch (u > 1 && (s /= u, d /= u), t = Math.floor(6 * o), a = 1 - d, n = 6 * o - t, 0 != (1 & t) && (n = 1 - n), i = s + n * (a - s), t) {
                default:
                    case 6:
                    case 0:
                    r = a,
                g = i,
                b = s;
                break;
                case 1:
                        r = i,
                    g = a,
                    b = s;
                    break;
                case 2:
                        r = s,
                    g = a,
                    b = i;
                    break;
                case 3:
                        r = s,
                    g = i,
                    b = a;
                    break;
                case 4:
                        r = i,
                    g = s,
                    b = a;
                    break;
                case 5:
                        r = a,
                    g = s,
                    b = i
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function D(e) {
            return a(Y(e))
        }

        function k(e) {
            return n(Y(e))
        }

        function x(e) {
            return o(Y(e))
        }

        function T(e) {
            return s(Y(e))
        }

        function w(e) {
            var t, a, n, r = e[0] / 100,
                i = e[1] / 100,
                o = e[2] / 100,
                s = e[3] / 100;
            return t = 1 - Math.min(1, r * (1 - s) + s), a = 1 - Math.min(1, i * (1 - s) + s), n = 1 - Math.min(1, o * (1 - s) + s), [255 * t, 255 * a, 255 * n]
        }

        function S(e) {
            return a(w(e))
        }

        function j(e) {
            return n(w(e))
        }

        function O(e) {
            return i(w(e))
        }

        function H(e) {
            return s(w(e))
        }

        function C(e) {
            var t, a, n, r = e[0] / 100,
                i = e[1] / 100,
                o = e[2] / 100;
            return t = 3.2406 * r + -1.5372 * i + -.4986 * o, a = -.9689 * r + 1.8758 * i + .0415 * o, n = .0557 * r + -.204 * i + 1.057 * o, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, t = Math.min(Math.max(0, t), 1), a = Math.min(Math.max(0, a), 1), n = Math.min(Math.max(0, n), 1), [255 * t, 255 * a, 255 * n]
        }

        function P(e) {
            var t, a, n, r = e[0],
                i = e[1],
                o = e[2];
            return r /= 95.047, i /= 100, o /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, t = 116 * i - 16, a = 500 * (r - i), n = 200 * (i - o), [t, a, n]
        }

        function A(e) {
            return E(P(e))
        }

        function F(e) {
            var t, a, n, r, i = e[0],
                o = e[1],
                s = e[2];
            return i <= 8 ? (a = 100 * i / 903.3, r = a / 100 * 7.787 + 16 / 116) : (a = 100 * Math.pow((i + 16) / 116, 3), r = Math.pow(a / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (o / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + r, 3), n = n / 108.883 <= .008859 ? n = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3), [t, a, n]
        }

        function E(e) {
            var t, a, n, r = e[0],
                i = e[1],
                o = e[2];
            return t = Math.atan2(o, i), a = 360 * t / 2 / Math.PI, a < 0 && (a += 360), n = Math.sqrt(i * i + o * o), [r, n, a]
        }

        function W(e) {
            return C(F(e))
        }

        function I(e) {
            var t, a, n, r = e[0],
                i = e[1],
                o = e[2];
            return n = o / 360 * 2 * Math.PI, t = i * Math.cos(n), a = i * Math.sin(n), [r, t, a]
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
            return a(N(e))
        }

        function V(e) {
            return n(N(e))
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
            rgb2hsl: a,
            rgb2hsv: n,
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
            hwb2hsl: D,
            hwb2hsv: k,
            hwb2cmyk: x,
            hwb2keyword: T,
            cmyk2rgb: w,
            cmyk2hsl: S,
            cmyk2hsv: j,
            cmyk2hwb: O,
            cmyk2keyword: H,
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
    1509: function(e, t, a) {
        function n(e) {
            if (e) {
                var t = /^#([a-fA-F0-9]{3})$/i,
                    a = /^#([a-fA-F0-9]{6})$/i,
                    n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                    r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                    i = /(\w+)/,
                    o = [0, 0, 0],
                    s = 1,
                    d = e.match(t);
                if (d) {
                    d = d[1];
                    for (var u = 0; u < o.length; u++) o[u] = parseInt(d[u] + d[u], 16)
                } else if (d = e.match(a)) {
                    d = d[1];
                    for (var u = 0; u < o.length; u++) o[u] = parseInt(d.slice(2 * u, 2 * u + 2), 16)
                } else if (d = e.match(n)) {
                    for (var u = 0; u < o.length; u++) o[u] = parseInt(d[u + 1]);
                    s = parseFloat(d[4])
                } else if (d = e.match(r)) {
                    for (var u = 0; u < o.length; u++) o[u] = Math.round(2.55 * parseFloat(d[u + 1]));
                    s = parseFloat(d[4])
                } else if (d = e.match(i)) {
                    if ("transparent" == d[1]) return [0, 0, 0, 0];
                    if (!(o = v[d[1]])) return
                }
                for (var u = 0; u < o.length; u++) o[u] = g(o[u], 0, 255);
                return s = s || 0 == s ? g(s, 0, 1) : 1, o[3] = s, o
            }
        }

        function r(e) {
            if (e) {
                var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    a = e.match(t);
                if (a) {
                    var n = parseFloat(a[4]);
                    return [g(parseInt(a[1]), 0, 360), g(parseFloat(a[2]), 0, 100), g(parseFloat(a[3]), 0, 100), g(isNaN(n) ? 1 : n, 0, 1)]
                }
            }
        }

        function i(e) {
            if (e) {
                var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    a = e.match(t);
                if (a) {
                    var n = parseFloat(a[4]);
                    return [g(parseInt(a[1]), 0, 360), g(parseFloat(a[2]), 0, 100), g(parseFloat(a[3]), 0, 100), g(isNaN(n) ? 1 : n, 0, 1)]
                }
            }
        }

        function o(e) {
            var t = n(e);
            return t && t.slice(0, 3)
        }

        function s(e) {
            var t = r(e);
            return t && t.slice(0, 3)
        }

        function d(e) {
            var t = n(e);
            return t ? t[3] : (t = r(e)) ? t[3] : (t = i(e)) ? t[3] : void 0
        }

        function u(e) {
            return "#" + M(e[0]) + M(e[1]) + M(e[2])
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

        function g(e, t, a) {
            return Math.min(Math.max(t, e), a)
        }

        function M(e) {
            var t = e.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t
        }
        var v = a(1510);
        e.exports = {
            getRgba: n,
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
    1510: function(e, t) {
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
    1511: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(851),
            i = a(822);
        n._set("global", {
            elements: {
                arc: {
                    backgroundColor: n.global.defaultColor,
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
                var a = this._view;
                if (a) {
                    for (var n = i.getAngleFromPoint(a, {
                            x: e,
                            y: t
                        }), r = n.angle, o = n.distance, s = a.startAngle, d = a.endAngle; d < s;) d += 2 * Math.PI;
                    for (; r > d;) r -= 2 * Math.PI;
                    for (; r < s;) r += 2 * Math.PI;
                    var u = r >= s && r <= d,
                        l = o >= a.innerRadius && o <= a.outerRadius;
                    return u && l
                }
                return !1
            },
            getCenterPoint: function() {
                var e = this._view,
                    t = (e.startAngle + e.endAngle) / 2,
                    a = (e.innerRadius + e.outerRadius) / 2;
                return {
                    x: e.x + Math.cos(t) * a,
                    y: e.y + Math.sin(t) * a
                }
            },
            getArea: function() {
                var e = this._view;
                return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
            },
            tooltipPosition: function() {
                var e = this._view,
                    t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                    a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                return {
                    x: e.x + Math.cos(t) * a,
                    y: e.y + Math.sin(t) * a
                }
            },
            draw: function() {
                var e = this._chart.ctx,
                    t = this._view,
                    a = t.startAngle,
                    n = t.endAngle;
                e.beginPath(), e.arc(t.x, t.y, t.outerRadius, a, n), e.arc(t.x, t.y, t.innerRadius, n, a, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
            }
        })
    },
    1512: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(851),
            i = a(822),
            o = n.global;
        n._set("global", {
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
                var e, t, a, n, r = this,
                    s = r._view,
                    d = r._chart.ctx,
                    u = s.spanGaps,
                    l = r._children.slice(),
                    c = o.elements.line,
                    m = -1;
                for (r._loop && l.length && l.push(l[0]), d.save(), d.lineCap = s.borderCapStyle || c.borderCapStyle, d.setLineDash && d.setLineDash(s.borderDash || c.borderDash), d.lineDashOffset = s.borderDashOffset || c.borderDashOffset, d.lineJoin = s.borderJoinStyle || c.borderJoinStyle, d.lineWidth = s.borderWidth || c.borderWidth, d.strokeStyle = s.borderColor || o.defaultColor, d.beginPath(), m = -1, e = 0; e < l.length; ++e) t = l[e], a = i.previousItem(l, e), n = t._view, 0 === e ? n.skip || (d.moveTo(n.x, n.y), m = e) : (a = -1 === m ? a : l[m], n.skip || (m !== e - 1 && !u || -1 === m ? d.moveTo(n.x, n.y) : i.canvas.lineTo(d, a._view, t._view), m = e));
                d.stroke(), d.restore()
            }
        })
    },
    1513: function(e, t, a) {
        "use strict";

        function n(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }

        function r(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.y, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }
        var i = a(827),
            o = a(851),
            s = a(822),
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
                var a = this._view;
                return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
            },
            inLabelRange: n,
            inXRange: n,
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
                    a = this._model,
                    n = this._chart.ctx,
                    r = t.pointStyle,
                    o = t.radius,
                    u = t.x,
                    l = t.y,
                    c = s.color,
                    m = 0;
                t.skip || (n.strokeStyle = t.borderColor || d, n.lineWidth = s.valueOrDefault(t.borderWidth, i.global.elements.point.borderWidth), n.fillStyle = t.backgroundColor || d, void 0 !== e && (a.x < e.left || 1.01 * e.right < a.x || a.y < e.top || 1.01 * e.bottom < a.y) && (a.x < e.left ? m = (u - a.x) / (e.left - a.x) : 1.01 * e.right < a.x ? m = (a.x - u) / (a.x - e.right) : a.y < e.top ? m = (l - a.y) / (e.top - a.y) : 1.01 * e.bottom < a.y && (m = (a.y - l) / (a.y - e.bottom)), m = Math.round(100 * m) / 100, n.strokeStyle = c(n.strokeStyle).alpha(m).rgbString(), n.fillStyle = c(n.fillStyle).alpha(m).rgbString()), s.canvas.drawPoint(n, r, o, u, l))
            }
        })
    },
    1514: function(e, t, a) {
        "use strict";

        function n(e) {
            return void 0 !== e._view.width
        }

        function r(e) {
            var t, a, r, i, o = e._view;
            if (n(e)) {
                var s = o.width / 2;
                t = o.x - s, a = o.x + s, r = Math.min(o.y, o.base), i = Math.max(o.y, o.base)
            } else {
                var d = o.height / 2;
                t = Math.min(o.x, o.base), a = Math.max(o.x, o.base), r = o.y - d, i = o.y + d
            }
            return {
                left: t,
                top: r,
                right: a,
                bottom: i
            }
        }
        var i = a(827),
            o = a(851);
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
                    return y[(M + e) % 4]
                }
                var t, a, n, r, i, o, s, d = this._chart.ctx,
                    u = this._view,
                    l = u.borderWidth;
                if (u.horizontal ? (t = u.base, a = u.x, n = u.y - u.height / 2, r = u.y + u.height / 2, i = a > t ? 1 : -1, o = 1, s = u.borderSkipped || "left") : (t = u.x - u.width / 2, a = u.x + u.width / 2, n = u.y, r = u.base, i = 1, o = r > n ? 1 : -1, s = u.borderSkipped || "bottom"), l) {
                    var c = Math.min(Math.abs(t - a), Math.abs(n - r));
                    l = l > c ? c : l;
                    var m = l / 2,
                        _ = t + ("left" !== s ? m * i : 0),
                        h = a + ("right" !== s ? -m * i : 0),
                        f = n + ("top" !== s ? m * o : 0),
                        p = r + ("bottom" !== s ? -m * o : 0);
                    _ !== h && (n = f, r = p), f !== p && (t = _, a = h)
                }
                d.beginPath(), d.fillStyle = u.backgroundColor, d.strokeStyle = u.borderColor, d.lineWidth = l;
                var y = [
                        [t, r],
                        [t, n],
                        [a, n],
                        [a, r]
                    ],
                    g = ["bottom", "left", "top", "right"],
                    M = g.indexOf(s, 0); - 1 === M && (M = 0);
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
                var a = !1;
                if (this._view) {
                    var n = r(this);
                    a = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                }
                return a
            },
            inLabelRange: function(e, t) {
                var a = this;
                if (!a._view) return !1;
                var i = r(a);
                return n(a) ? e >= i.left && e <= i.right : t >= i.top && t <= i.bottom
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
                var e, t, a = this._view;
                return n(this) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), {
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
    1515: function(e, t) {
        e.exports = {
            acquireContext: function(e) {
                return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
            }
        }
    },
    1516: function(e, t, a) {
        "use strict";

        function n(e, t) {
            var a = p.getStyle(e, t),
                n = a && a.match(/^(\d+)(\.\d+)?px$/);
            return n ? Number(n[1]) : void 0
        }

        function r(e, t) {
            var a = e.style,
                r = e.getAttribute("height"),
                i = e.getAttribute("width");
            if (e[y] = {
                    initial: {
                        height: r,
                        width: i,
                        style: {
                            display: a.display,
                            height: a.height,
                            width: a.width
                        }
                    }
                }, a.display = a.display || "block", null === i || "" === i) {
                var o = n(e, "width");
                void 0 !== o && (e.width = o)
            }
            if (null === r || "" === r)
                if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                else {
                    var s = n(e, "height");
                    void 0 !== o && (e.height = s)
                }
            return e
        }

        function i(e, t, a) {
            e.addEventListener(t, a, D)
        }

        function o(e, t, a) {
            e.removeEventListener(t, a, D)
        }

        function s(e, t, a, n, r) {
            return {
                type: e,
                chart: t,
                native: r || null,
                x: void 0 !== a ? a : null,
                y: void 0 !== n ? n : null
            }
        }

        function d(e, t) {
            var a = L[e.type] || e.type,
                n = p.getRelativePosition(e, t);
            return s(a, t, n.x, n.y, e)
        }

        function u(e, t) {
            var a = !1,
                n = [];
            return function() {
                n = Array.prototype.slice.call(arguments), t = t || this, a || (a = !0, p.requestAnimFrame.call(window, function() {
                    a = !1, e.apply(t, n)
                }))
            }
        }

        function l(e) {
            var t = document.createElement("div"),
                a = g + "size-monitor",
                n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
            t.style.cssText = n, t.className = a, t.innerHTML = '<div class="' + a + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + a + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
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
            var a = e[y] || (e[y] = {}),
                n = a.renderProxy = function(e) {
                    e.animationName === v && t()
                };
            p.each(b, function(t) {
                i(e, t, n)
            }), e.classList.add(M)
        }

        function m(e) {
            var t = e[y] || {},
                a = t.renderProxy;
            a && (p.each(b, function(t) {
                o(e, t, a)
            }), delete t.renderProxy), e.classList.remove(M)
        }

        function _(e, t, a) {
            var n = e[y] || (e[y] = {}),
                r = n.resizer = l(u(function() {
                    if (n.resizer) return t(s("resize", a))
                }));
            c(e, function() {
                if (n.resizer) {
                    var t = e.parentNode;
                    t && t !== r.parentNode && t.insertBefore(r, t.firstChild), r._reset()
                }
            })
        }

        function h(e) {
            var t = e[y] || {},
                a = t.resizer;
            delete t.resizer, m(e), a && a.parentNode && a.parentNode.removeChild(a)
        }

        function f(e, t) {
            var a = e._style || document.createElement("style");
            e._style || (e._style = a, t = "/* Chart.js */\n" + t, a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a)), a.appendChild(document.createTextNode(t))
        }
        var p = a(822),
            y = "$chartjs",
            g = "chartjs-",
            M = g + "render-monitor",
            v = g + "render-animation",
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
            D = !!Y && {
                passive: !0
            };
        e.exports = {
            _enabled: "undefined" != typeof window && "undefined" != typeof document,
            initialize: function() {
                var e = "from{opacity:0.99}to{opacity:1}";
                f(this, "@-webkit-keyframes " + v + "{" + e + "}@keyframes " + v + "{" + e + "}." + M + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}")
            },
            acquireContext: function(e, t) {
                "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                var a = e && e.getContext && e.getContext("2d");
                return a && a.canvas === e ? (r(e, t), a) : null
            },
            releaseContext: function(e) {
                var t = e.canvas;
                if (t[y]) {
                    var a = t[y].initial;
                    ["height", "width"].forEach(function(e) {
                        var n = a[e];
                        p.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
                    }), p.each(a.style || {}, function(e, a) {
                        t.style[a] = e
                    }), t.width = t.width, delete t[y]
                }
            },
            addEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" === t) return void _(n, a, e);
                var r = a[y] || (a[y] = {});
                i(n, t, (r.proxies || (r.proxies = {}))[e.id + "_" + t] = function(t) {
                    a(d(t, e))
                })
            },
            removeEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" === t) return void h(n);
                var r = a[y] || {},
                    i = r.proxies || {},
                    s = i[e.id + "_" + t];
                s && o(n, t, s)
            }
        }, p.addEvent = i, p.removeEvent = o
    },
    1517: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(851),
            i = a(822);
        n._set("global", {
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
                        var a = t.indexOf(e); - 1 !== a && t.splice(a, 1)
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
                notify: function(e, t, a) {
                    var n, r, i, o, s, d = this.descriptors(e),
                        u = d.length;
                    for (n = 0; n < u; ++n)
                        if (r = d[n], i = r.plugin, "function" == typeof(s = i[t]) && (o = [e].concat(a || []), o.push(r.options), !1 === s.apply(i, o))) return !1;
                    return !0
                },
                descriptors: function(e) {
                    var t = e._plugins || (e._plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var a = [],
                        r = [],
                        o = e && e.config || {},
                        s = o.options && o.options.plugins || {};
                    return this._plugins.concat(o.plugins || []).forEach(function(e) {
                        if (-1 === a.indexOf(e)) {
                            var t = e.id,
                                o = s[t];
                            !1 !== o && (!0 === o && (o = i.clone(n.global.plugins[t])), a.push(e), r.push({
                                plugin: e,
                                options: o || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                }
            }, e.pluginService = e.plugins, e.PluginBase = r.extend({})
        }
    },
    1518: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(851),
            i = a(822);
        n._set("global", {
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
                addAnimation: function(e, t, a, n) {
                    var r, i, o = this.animations;
                    for (t.chart = e, n || (e.animating = !0), r = 0, i = o.length; r < i; ++r)
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
                        a = 0;
                    e.dropFrames > 1 && (a = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + a);
                    var n = Date.now();
                    e.dropFrames += (n - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
                },
                advance: function(e) {
                    for (var t, a, n = this.animations, r = 0; r < n.length;) t = n[r], a = t.chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), i.callback(t.render, [a, t], a), i.callback(t.onAnimationProgress, [t], a), t.currentStep >= t.numSteps ? (i.callback(t.onAnimationComplete, [t], a), a.animating = !1, n.splice(r, 1)) : ++r
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
    1519: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(822),
            i = a(1129),
            o = a(1130);
        e.exports = function(e) {
            function t(e) {
                e = e || {};
                var t = e.data = e.data || {};
                return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = r.configMerge(n.global, n[e.type], e.options || {}), e
            }

            function a(e) {
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
                construct: function(a, n) {
                    var i = this;
                    n = t(n);
                    var s = o.acquireContext(a, n),
                        d = s && s.canvas,
                        u = d && d.height,
                        l = d && d.width;
                    if (i.id = r.uid(), i.ctx = s, i.canvas = d, i.config = n, i.width = l, i.height = u, i.aspectRatio = u ? l / u : null, i.options = n.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
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
                        a = t.options,
                        n = t.canvas,
                        i = a.maintainAspectRatio && t.aspectRatio || null,
                        o = Math.max(0, Math.floor(r.getMaximumWidth(n))),
                        s = Math.max(0, Math.floor(i ? o / i : r.getMaximumHeight(n)));
                    if ((t.width !== o || t.height !== s) && (n.width = t.width = o, n.height = t.height = s, n.style.width = o + "px", n.style.height = s + "px", r.retinaScale(t, a.devicePixelRatio), !e)) {
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
                        a = e.scale;
                    r.each(t.xAxes, function(e, t) {
                        e.id = e.id || "x-axis-" + t
                    }), r.each(t.yAxes, function(e, t) {
                        e.id = e.id || "y-axis-" + t
                    }), a && (a.id = a.id || "scale")
                },
                buildScales: function() {
                    var t = this,
                        a = t.options,
                        n = t.scales = {},
                        i = [];
                    a.scales && (i = i.concat((a.scales.xAxes || []).map(function(e) {
                        return {
                            options: e,
                            dtype: "category",
                            dposition: "bottom"
                        }
                    }), (a.scales.yAxes || []).map(function(e) {
                        return {
                            options: e,
                            dtype: "linear",
                            dposition: "left"
                        }
                    }))), a.scale && i.push({
                        options: a.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }), r.each(i, function(a) {
                        var i = a.options,
                            o = r.valueOrDefault(i.type, a.dtype),
                            d = e.scaleService.getScaleConstructor(o);
                        if (d) {
                            s(i.position) !== s(a.dposition) && (i.position = a.dposition);
                            var u = new d({
                                id: i.id,
                                options: i,
                                ctx: t.ctx,
                                chart: t
                            });
                            n[u.id] = u, u.mergeTicksOptions(), a.isDefault && (t.scale = u)
                        }
                    }), e.scaleService.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function() {
                    var t = this,
                        a = [],
                        n = [];
                    return r.each(t.data.datasets, function(r, i) {
                        var o = t.getDatasetMeta(i),
                            s = r.type || t.config.type;
                        if (o.type && o.type !== s && (t.destroyDatasetMeta(i), o = t.getDatasetMeta(i)), o.type = s, a.push(o.type), o.controller) o.controller.updateIndex(i);
                        else {
                            var d = e.controllers[o.type];
                            if (void 0 === d) throw new Error('"' + o.type + '" is not a chart type.');
                            o.controller = new d(t, i), n.push(o.controller)
                        }
                    }, t), n
                },
                resetElements: function() {
                    var e = this;
                    r.each(e.data.datasets, function(t, a) {
                        e.getDatasetMeta(a).controller.reset()
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
                        }), a(t), !1 !== d.notify(t, "beforeUpdate")) {
                        t.tooltip._data = t.data;
                        var n = t.buildOrUpdateControllers();
                        r.each(t.data.datasets, function(e, a) {
                            t.getDatasetMeta(a).controller.buildOrUpdateElements()
                        }, t), t.updateLayout(), r.each(n, function(e) {
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
                        for (var t = 0, a = e.data.datasets.length; t < a; ++t) e.updateDataset(t);
                        d.notify(e, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function(e) {
                    var t = this,
                        a = t.getDatasetMeta(e),
                        n = {
                            meta: a,
                            index: e
                        };
                    !1 !== d.notify(t, "beforeDatasetUpdate", [n]) && (a.controller.update(), d.notify(t, "afterDatasetUpdate", [n]))
                },
                render: function(t) {
                    var a = this;
                    t && "object" == typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    });
                    var n = t.duration,
                        i = t.lazy;
                    if (!1 !== d.notify(a, "beforeRender")) {
                        var o = a.options.animation,
                            s = function(e) {
                                d.notify(a, "afterRender"), r.callback(o && o.onComplete, [e], a)
                            };
                        if (o && (void 0 !== n && 0 !== n || void 0 === n && 0 !== o.duration)) {
                            var u = new e.Animation({
                                numSteps: (n || o.duration) / 16.66,
                                easing: t.easing || o.easing,
                                render: function(e, t) {
                                    var a = r.easing.effects[t.easing],
                                        n = t.currentStep,
                                        i = n / t.numSteps;
                                    e.draw(a(i), i, n)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: s
                            });
                            e.animationService.addAnimation(a, u, n, i)
                        } else a.draw(), s(new e.Animation({
                            numSteps: 0,
                            chart: a
                        }));
                        return a
                    }
                },
                draw: function(e) {
                    var t = this;
                    t.clear(), r.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== d.notify(t, "beforeDraw", [e]) && (r.each(t.boxes, function(e) {
                        e.draw(t.chartArea)
                    }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t.tooltip.draw(), d.notify(t, "afterDraw", [e]))
                },
                transition: function(e) {
                    for (var t = this, a = 0, n = (t.data.datasets || []).length; a < n; ++a) t.isDatasetVisible(a) && t.getDatasetMeta(a).controller.transition(e);
                    t.tooltip.transition(e)
                },
                drawDatasets: function(e) {
                    var t = this;
                    if (!1 !== d.notify(t, "beforeDatasetsDraw", [e])) {
                        for (var a = (t.data.datasets || []).length - 1; a >= 0; --a) t.isDatasetVisible(a) && t.drawDataset(a, e);
                        d.notify(t, "afterDatasetsDraw", [e])
                    }
                },
                drawDataset: function(e, t) {
                    var a = this,
                        n = a.getDatasetMeta(e),
                        r = {
                            meta: n,
                            index: e,
                            easingValue: t
                        };
                    !1 !== d.notify(a, "beforeDatasetDraw", [r]) && (n.controller.draw(t), d.notify(a, "afterDatasetDraw", [r]))
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
                getElementsAtEventForMode: function(e, t, a) {
                    var n = i.modes[t];
                    return "function" == typeof n ? n(this, e, a) : []
                },
                getDatasetAtEvent: function(e) {
                    return i.modes.dataset(this, e, {
                        intersect: !0
                    })
                },
                getDatasetMeta: function(e) {
                    var t = this,
                        a = t.data.datasets[e];
                    a._meta || (a._meta = {});
                    var n = a._meta[t.id];
                    return n || (n = a._meta[t.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null
                    }), n
                },
                getVisibleDatasetCount: function() {
                    for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t) this.isDatasetVisible(t) && e++;
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
                        a = this.data.datasets[e],
                        n = a._meta && a._meta[t];
                    n && (n.controller.destroy(), delete a._meta[t])
                },
                destroy: function() {
                    var t, a, n = this,
                        i = n.canvas;
                    for (n.stop(), t = 0, a = n.data.datasets.length; t < a; ++t) n.destroyDatasetMeta(t);
                    i && (n.unbindEvents(), r.canvas.clear(n), o.releaseContext(n.ctx), n.canvas = null, n.ctx = null), d.notify(n, "destroy"), delete e.instances[n.id]
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
                        a = function() {
                            e.eventHandler.apply(e, arguments)
                        };
                    r.each(e.options.events, function(n) {
                        o.addEventListener(e, n, a), t[n] = a
                    }), e.options.responsive && (a = function() {
                        e.resize()
                    }, o.addEventListener(e, "resize", a), t.resize = a)
                },
                unbindEvents: function() {
                    var e = this,
                        t = e._listeners;
                    t && (delete e._listeners, r.each(t, function(t, a) {
                        o.removeEventListener(e, a, t)
                    }))
                },
                updateHoverStyle: function(e, t, a) {
                    var n, r, i, o = a ? "setHoverStyle" : "removeHoverStyle";
                    for (r = 0, i = e.length; r < i; ++r)(n = e[r]) && this.getDatasetMeta(n._datasetIndex).controller[o](n)
                },
                eventHandler: function(e) {
                    var t = this,
                        a = t.tooltip;
                    if (!1 !== d.notify(t, "beforeEvent", [e])) {
                        t._bufferedRender = !0, t._bufferedRequest = null;
                        var n = t.handleEvent(e);
                        n |= a && a.handleEvent(e), d.notify(t, "afterEvent", [e]);
                        var r = t._bufferedRequest;
                        return r ? t.render(r) : n && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        a = t.options || {},
                        n = a.hover,
                        i = !1;
                    return t.lastActive = t.lastActive || [], "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, n.mode, n), r.callback(a.onHover || a.hover.onHover, [e.native, t.active], t), "mouseup" !== e.type && "click" !== e.type || a.onClick && a.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, n.mode, !1), t.active.length && n.mode && t.updateHoverStyle(t.active, n.mode, !0), i = !r.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, i
                }
            }), e.Controller = e
        }
    },
    1520: function(e, t, a) {
        "use strict";
        var n = a(822);
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
                    var a = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                        r = e[t];
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            var t = Array.prototype.slice.call(arguments),
                                i = r.apply(this, t);
                            return n.each(e._chartjs.listeners, function(e) {
                                "function" == typeof e[a] && e[a].apply(e, t)
                            }), i
                        }
                    })
                })
            }

            function a(e, t) {
                var a = e._chartjs;
                if (a) {
                    var n = a.listeners,
                        i = n.indexOf(t); - 1 !== i && n.splice(i, 1), n.length > 0 || (r.forEach(function(t) {
                        delete e[t]
                    }), delete e._chartjs)
                }
            }
            var r = ["push", "pop", "shift", "splice", "unshift"];
            e.DatasetController = function(e, t) {
                this.initialize(e, t)
            }, n.extend(e.DatasetController.prototype, {
                datasetElementType: null,
                dataElementType: null,
                initialize: function(e, t) {
                    var a = this;
                    a.chart = e, a.index = t, a.linkScales(), a.addElements()
                },
                updateIndex: function(e) {
                    this.index = e
                },
                linkScales: function() {
                    var e = this,
                        t = e.getMeta(),
                        a = e.getDataset();
                    null === t.xAxisID && (t.xAxisID = a.xAxisID || e.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = a.yAxisID || e.chart.options.scales.yAxes[0].id)
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
                    this._data && a(this._data, this)
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
                        a = t.dataElementType;
                    return a && new a({
                        _chart: t.chart,
                        _datasetIndex: t.index,
                        _index: e
                    })
                },
                addElements: function() {
                    var e, t, a = this,
                        n = a.getMeta(),
                        r = a.getDataset().data || [],
                        i = n.data;
                    for (e = 0, t = r.length; e < t; ++e) i[e] = i[e] || a.createMetaData(e);
                    n.dataset = n.dataset || a.createMetaDataset()
                },
                addElementAndReset: function(e) {
                    var t = this.createMetaData(e);
                    this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                },
                buildOrUpdateElements: function() {
                    var e = this,
                        n = e.getDataset(),
                        r = n.data || (n.data = []);
                    e._data !== r && (e._data && a(e._data, e), t(r, e), e._data = r), e.resyncElements()
                },
                update: n.noop,
                transition: function(e) {
                    for (var t = this.getMeta(), a = t.data || [], n = a.length, r = 0; r < n; ++r) a[r].transition(e);
                    t.dataset && t.dataset.transition(e)
                },
                draw: function() {
                    var e = this.getMeta(),
                        t = e.data || [],
                        a = t.length,
                        n = 0;
                    for (e.dataset && e.dataset.draw(); n < a; ++n) t[n].draw()
                },
                removeHoverStyle: function(e, t) {
                    var a = this.chart.data.datasets[e._datasetIndex],
                        r = e._index,
                        i = e.custom || {},
                        o = n.valueAtIndexOrDefault,
                        s = e._model;
                    s.backgroundColor = i.backgroundColor ? i.backgroundColor : o(a.backgroundColor, r, t.backgroundColor), s.borderColor = i.borderColor ? i.borderColor : o(a.borderColor, r, t.borderColor), s.borderWidth = i.borderWidth ? i.borderWidth : o(a.borderWidth, r, t.borderWidth)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        r = e.custom || {},
                        i = n.valueAtIndexOrDefault,
                        o = n.getHoverColor,
                        s = e._model;
                    s.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : i(t.hoverBackgroundColor, a, o(s.backgroundColor)), s.borderColor = r.hoverBorderColor ? r.hoverBorderColor : i(t.hoverBorderColor, a, o(s.borderColor)), s.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : i(t.hoverBorderWidth, a, s.borderWidth)
                },
                resyncElements: function() {
                    var e = this,
                        t = e.getMeta(),
                        a = e.getDataset().data,
                        n = t.data.length,
                        r = a.length;
                    r < n ? t.data.splice(r, n - r) : r > n && e.insertElements(n, r - n)
                },
                insertElements: function(e, t) {
                    for (var a = 0; a < t; ++a) this.addElementAndReset(e + a)
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
            }), e.DatasetController.extend = n.inherits
        }
    },
    1521: function(e, t, a) {
        "use strict";
        var n = a(822);
        e.exports = function(e) {
            function t(e, t) {
                return n.where(e, function(e) {
                    return e.position === t
                })
            }

            function a(e, t) {
                e.forEach(function(e, t) {
                    return e._tmpIndex_ = t, e
                }), e.sort(function(e, a) {
                    var n = t ? a : e,
                        r = t ? e : a;
                    return n.weight === r.weight ? n._tmpIndex_ - r._tmpIndex_ : n.weight - r.weight
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
                    var a = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== a && e.boxes.splice(a, 1)
                },
                configure: function(e, t, a) {
                    for (var n, r = ["fullWidth", "position", "weight"], i = r.length, o = 0; o < i; ++o) n = r[o], a.hasOwnProperty(n) && (t[n] = a[n])
                },
                update: function(e, r, i) {
                    function o(e) {
                        var t, a = e.isHorizontal();
                        a ? (t = e.update(e.fullWidth ? b : T, x), w -= t.height) : (t = e.update(k, D), T -= t.width), S.push({
                            horizontal: a,
                            minSize: t,
                            box: e
                        })
                    }

                    function s(e) {
                        var t = n.findNextWhere(S, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var a = {
                                    left: Math.max(P, j),
                                    right: Math.max(A, O),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? b : T, L / 2, a)
                            } else e.update(t.minSize.width, w)
                    }

                    function d(e) {
                        var t = n.findNextWhere(S, function(t) {
                                return t.box === e
                            }),
                            a = {
                                left: 0,
                                right: 0,
                                top: F,
                                bottom: E
                            };
                        t && e.update(t.minSize.width, w, a)
                    }

                    function u(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? m : P, e.right = e.fullWidth ? r - _ : P + T, e.top = B, e.bottom = B + e.height, B = e.bottom) : (e.left = N, e.right = N + e.width, e.top = F, e.bottom = F + w, N = e.right)
                    }
                    if (e) {
                        var l = e.options.layout || {},
                            c = n.options.toPadding(l.padding),
                            m = c.left,
                            _ = c.right,
                            h = c.top,
                            f = c.bottom,
                            p = t(e.boxes, "left"),
                            y = t(e.boxes, "right"),
                            g = t(e.boxes, "top"),
                            M = t(e.boxes, "bottom"),
                            v = t(e.boxes, "chartArea");
                        a(p, !0), a(y, !1), a(g, !0), a(M, !1);
                        var b = r - m - _,
                            L = i - h - f,
                            Y = b / 2,
                            D = L / 2,
                            k = (r - Y) / (p.length + y.length),
                            x = (i - D) / (g.length + M.length),
                            T = b,
                            w = L,
                            S = [];
                        n.each(p.concat(y, g, M), o);
                        var j = 0,
                            O = 0,
                            H = 0,
                            C = 0;
                        n.each(g.concat(M), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                j = Math.max(j, t.left), O = Math.max(O, t.right)
                            }
                        }), n.each(p.concat(y), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                H = Math.max(H, t.top), C = Math.max(C, t.bottom)
                            }
                        });
                        var P = m,
                            A = _,
                            F = h,
                            E = f;
                        n.each(p.concat(y), s), n.each(p, function(e) {
                            P += e.width
                        }), n.each(y, function(e) {
                            A += e.width
                        }), n.each(g.concat(M), s), n.each(g, function(e) {
                            F += e.height
                        }), n.each(M, function(e) {
                            E += e.height
                        }), n.each(p.concat(y), d), P = m, A = _, F = h, E = f, n.each(p, function(e) {
                            P += e.width
                        }), n.each(y, function(e) {
                            A += e.width
                        }), n.each(g, function(e) {
                            F += e.height
                        }), n.each(M, function(e) {
                            E += e.height
                        });
                        var W = Math.max(j - P, 0);
                        P += W, A += Math.max(O - A, 0);
                        var I = Math.max(H - F, 0);
                        F += I, E += Math.max(C - E, 0);
                        var z = i - F - E,
                            R = r - P - A;
                        R === T && z === w || (n.each(p, function(e) {
                            e.height = z
                        }), n.each(y, function(e) {
                            e.height = z
                        }), n.each(g, function(e) {
                            e.fullWidth || (e.width = R)
                        }), n.each(M, function(e) {
                            e.fullWidth || (e.width = R)
                        }), w = z, T = R);
                        var N = m + W,
                            B = h + I;
                        n.each(p.concat(g), u), N += T, B += w, n.each(y, u), n.each(M, u), e.chartArea = {
                            left: P,
                            top: F,
                            right: P + T,
                            bottom: F + w
                        }, n.each(v, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(T, w)
                        })
                    }
                }
            }
        }
    },
    1522: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(822);
        e.exports = function(e) {
            e.scaleService = {
                constructors: {},
                defaults: {},
                registerScaleType: function(e, t, a) {
                    this.constructors[e] = t, this.defaults[e] = r.clone(a)
                },
                getScaleConstructor: function(e) {
                    return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                },
                getScaleDefaults: function(e) {
                    return this.defaults.hasOwnProperty(e) ? r.merge({}, [n.scale, this.defaults[e]]) : {}
                },
                updateScaleDefaults: function(e, t) {
                    var a = this;
                    a.defaults.hasOwnProperty(e) && (a.defaults[e] = r.extend(a.defaults[e], t))
                },
                addScalesToLayout: function(t) {
                    r.each(t.scales, function(a) {
                        a.fullWidth = a.options.fullWidth, a.position = a.options.position, a.weight = a.options.weight, e.layoutService.addBox(t, a)
                    })
                }
            }
        }
    },
    1523: function(e, t, a) {
        "use strict";

        function n(e) {
            var t, a, n = [];
            for (t = 0, a = e.length; t < a; ++t) n.push(e[t].label);
            return n
        }

        function r(e, t, a) {
            var n = e.getPixelForTick(t);
            return a && (n -= 0 === t ? (e.getPixelForTick(1) - n) / 2 : (n - e.getPixelForTick(t - 1)) / 2), n
        }
        var i = a(827),
            o = a(851),
            s = a(822),
            d = a(999);
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
            function t(e, t, a) {
                return s.isArray(t) ? s.longestText(e, a, t) : e.measureText(t).width
            }

            function a(e) {
                var t = s.valueOrDefault,
                    a = i.global,
                    n = t(e.fontSize, a.defaultFontSize),
                    r = t(e.fontStyle, a.defaultFontStyle),
                    o = t(e.fontFamily, a.defaultFontFamily);
                return {
                    size: n,
                    style: r,
                    family: o,
                    font: s.fontString(n, r, o)
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
                update: function(e, t, a) {
                    var n, r, i, o, d, u, l = this;
                    for (l.beforeUpdate(), l.maxWidth = e, l.maxHeight = t, l.margins = s.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, a), l.longestTextCache = l.longestTextCache || {}, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), d = l.buildTicks() || [], l.afterBuildTicks(), l.beforeTickToLabelConversion(), i = l.convertTicksToLabels(d) || l.ticks, l.afterTickToLabelConversion(), l.ticks = i, n = 0, r = i.length; n < r; ++n) o = i[n], u = d[n], u ? u.label = o : d.push(u = {
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
                        i = n(e._ticks),
                        o = a(r);
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
                        i = n(e._ticks),
                        o = e.options,
                        u = o.ticks,
                        l = o.scaleLabel,
                        c = o.gridLines,
                        m = o.display,
                        _ = e.isHorizontal(),
                        h = a(u),
                        f = o.gridLines.tickMarkLength;
                    if (r.width = _ ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && c.drawTicks ? f : 0, r.height = _ ? m && c.drawTicks ? f : 0 : e.maxHeight, l.display && m) {
                        var p = d(l),
                            y = s.options.toPadding(l.padding),
                            g = p + y.height;
                        _ ? r.height += g : r.width += g
                    }
                    if (u.display && m) {
                        var M = s.longestText(e.ctx, h.font, i, e.longestTextCache),
                            v = s.numberOfLabelLines(i),
                            b = .5 * h.size,
                            L = e.options.ticks.padding;
                        if (_) {
                            e.longestLabelWidth = M;
                            var Y = s.toRadians(e.labelRotation),
                                D = Math.cos(Y),
                                k = Math.sin(Y),
                                x = k * M + h.size * v + b * (v - 1) + b;
                            r.height = Math.min(e.maxHeight, r.height + x + L), e.ctx.font = h.font;
                            var T = t(e.ctx, i[0], h.font),
                                w = t(e.ctx, i[i.length - 1], h.font);
                            0 !== e.labelRotation ? (e.paddingLeft = "bottom" === o.position ? D * T + 3 : D * b + 3, e.paddingRight = "bottom" === o.position ? D * b + 3 : D * w + 3) : (e.paddingLeft = T / 2 + 3, e.paddingRight = w / 2 + 3)
                        } else u.mirror ? M = 0 : M += L + b, r.width = Math.min(e.maxWidth, r.width + M), e.paddingTop = h.size / 2, e.paddingBottom = h.size / 2
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
                        a = t.options.offset;
                    if (t.isHorizontal()) {
                        var n = t.width - (t.paddingLeft + t.paddingRight),
                            r = n / Math.max(t._ticks.length - (a ? 0 : 1), 1),
                            i = r * e + t.paddingLeft;
                        a && (i += r / 2);
                        var o = t.left + Math.round(i);
                        return o += t.isFullWidth() ? t.margins.left : 0
                    }
                    var s = t.height - (t.paddingTop + t.paddingBottom);
                    return t.top + e * (s / (t._ticks.length - 1))
                },
                getPixelForDecimal: function(e) {
                    var t = this;
                    if (t.isHorizontal()) {
                        var a = t.width - (t.paddingLeft + t.paddingRight),
                            n = a * e + t.paddingLeft,
                            r = t.left + Math.round(n);
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
                        a = e.max;
                    return e.beginAtZero ? 0 : t < 0 && a < 0 ? a : t > 0 && a > 0 ? t : 0
                },
                _autoSkip: function(e) {
                    var t, a, n, r, i, o = this,
                        d = o.isHorizontal(),
                        u = o.options.ticks.minor,
                        l = e.length,
                        c = s.toRadians(o.labelRotation),
                        m = Math.cos(c),
                        _ = o.longestLabelWidth * m,
                        h = [];
                    for (u.maxTicksLimit && (i = u.maxTicksLimit), d && (t = !1, (_ + u.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (t = 1 + Math.floor((_ + u.autoSkipPadding) * l / (o.width - (o.paddingLeft + o.paddingRight)))), i && l > i && (t = Math.max(t, Math.floor(l / i)))), a = 0; a < l; a++) n = e[a], r = t > 1 && a % t > 0 || a % t == 0 && a + t >= l, (r && a !== l - 1 || s.isNullOrUndef(n.label)) && delete n.label, h.push(n);
                    return h
                },
                draw: function(e) {
                    var t = this,
                        n = t.options;
                    if (n.display) {
                        var o = t.ctx,
                            u = i.global,
                            l = n.ticks.minor,
                            c = n.ticks.major || l,
                            m = n.gridLines,
                            _ = n.scaleLabel,
                            h = 0 !== t.labelRotation,
                            f = t.isHorizontal(),
                            p = l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            y = s.valueOrDefault(l.fontColor, u.defaultFontColor),
                            g = a(l),
                            M = s.valueOrDefault(c.fontColor, u.defaultFontColor),
                            v = a(c),
                            b = m.drawTicks ? m.tickMarkLength : 0,
                            L = s.valueOrDefault(_.fontColor, u.defaultFontColor),
                            Y = a(_),
                            D = s.options.toPadding(_.padding),
                            k = s.toRadians(t.labelRotation),
                            x = [],
                            T = "right" === n.position ? t.left : t.right - b,
                            w = "right" === n.position ? t.left + b : t.right,
                            S = "bottom" === n.position ? t.top : t.bottom - b,
                            j = "bottom" === n.position ? t.top + b : t.bottom;
                        if (s.each(p, function(a, i) {
                                if (void 0 !== a.label) {
                                    var o, d, c, _, y = a.label;
                                    i === t.zeroLineIndex && n.offset === m.offsetGridLines ? (o = m.zeroLineWidth, d = m.zeroLineColor, c = m.zeroLineBorderDash, _ = m.zeroLineBorderDashOffset) : (o = s.valueAtIndexOrDefault(m.lineWidth, i), d = s.valueAtIndexOrDefault(m.color, i), c = s.valueOrDefault(m.borderDash, u.borderDash), _ = s.valueOrDefault(m.borderDashOffset, u.borderDashOffset));
                                    var g, M, v, L, Y, D, O, H, C, P, A = "middle",
                                        F = "middle",
                                        E = l.padding;
                                    if (f) {
                                        var W = b + E;
                                        "bottom" === n.position ? (F = h ? "middle" : "top", A = h ? "right" : "center", P = t.top + W) : (F = h ? "middle" : "bottom", A = h ? "left" : "center", P = t.bottom - W);
                                        var I = r(t, i, m.offsetGridLines && p.length > 1);
                                        I < t.left && (d = "rgba(0,0,0,0)"), I += s.aliasPixel(o), C = t.getPixelForTick(i) + l.labelOffset, g = v = Y = O = I, M = S, L = j, D = e.top, H = e.bottom
                                    } else {
                                        var z, R = "left" === n.position;
                                        l.mirror ? (A = R ? "left" : "right", z = E) : (A = R ? "right" : "left", z = b + E), C = R ? t.right - z : t.left + z;
                                        var N = r(t, i, m.offsetGridLines && p.length > 1);
                                        N < t.top && (d = "rgba(0,0,0,0)"), N += s.aliasPixel(o), P = t.getPixelForTick(i) + l.labelOffset, g = T, v = w, Y = e.left, O = e.right, M = L = D = H = N
                                    }
                                    x.push({
                                        tx1: g,
                                        ty1: M,
                                        tx2: v,
                                        ty2: L,
                                        x1: Y,
                                        y1: D,
                                        x2: O,
                                        y2: H,
                                        labelX: C,
                                        labelY: P,
                                        glWidth: o,
                                        glColor: d,
                                        glBorderDash: c,
                                        glBorderDashOffset: _,
                                        rotation: -1 * k,
                                        label: y,
                                        major: a.major,
                                        textBaseline: F,
                                        textAlign: A
                                    })
                                }
                            }), s.each(x, function(e) {
                                if (m.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), l.display) {
                                    o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? v.font : g.font, o.fillStyle = e.major ? M : y, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (s.isArray(t))
                                        for (var a = 0, n = 0; a < t.length; ++a) o.fillText("" + t[a], 0, n), n += 1.5 * g.size;
                                    else o.fillText(t, 0, 0);
                                    o.restore()
                                }
                            }), _.display) {
                            var O, H, C = 0,
                                P = d(_) / 2;
                            if (f) O = t.left + (t.right - t.left) / 2, H = "bottom" === n.position ? t.bottom - P - D.bottom : t.top + P + D.top;
                            else {
                                var A = "left" === n.position;
                                O = A ? t.left + P + D.top : t.right - P - D.top, H = t.top + (t.bottom - t.top) / 2, C = A ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(O, H), o.rotate(C), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = L, o.font = Y.font, o.fillText(_.labelString, 0, 0), o.restore()
                        }
                        if (m.drawBorder) {
                            o.lineWidth = s.valueAtIndexOrDefault(m.lineWidth, 0), o.strokeStyle = s.valueAtIndexOrDefault(m.color, 0);
                            var F = t.left,
                                E = t.right,
                                W = t.top,
                                I = t.bottom,
                                z = s.aliasPixel(o.lineWidth);
                            f ? (W = I = "top" === n.position ? t.bottom : t.top, W += z, I += z) : (F = E = "left" === n.position ? t.right : t.left, F += z, E += z), o.beginPath(), o.moveTo(F, W), o.lineTo(E, I), o.stroke()
                        }
                    }
                }
            })
        }
    },
    1524: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(851),
            i = a(822);
        n._set("global", {
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
                        var a = "",
                            n = t.labels,
                            r = n ? n.length : 0;
                        if (e.length > 0) {
                            var i = e[0];
                            i.xLabel ? a = i.xLabel : r > 0 && i.index < r && (a = n[i.index])
                        }
                        return a
                    },
                    afterTitle: i.noop,
                    beforeBody: i.noop,
                    beforeLabel: i.noop,
                    label: function(e, t) {
                        var a = t.datasets[e.datasetIndex].label || "";
                        return a && (a += ": "), a += e.yLabel
                    },
                    labelColor: function(e, t) {
                        var a = t.getDatasetMeta(e.datasetIndex),
                            n = a.data[e.index],
                            r = n._view;
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
                var a = i.color(e);
                return a.alpha(t * a.alpha()).rgbaString()
            }

            function a(e, t) {
                return t && (i.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
            }

            function o(e) {
                var t = e._xScale,
                    a = e._yScale || e._scale,
                    n = e._index,
                    r = e._datasetIndex;
                return {
                    xLabel: t ? t.getLabelForIndex(n, r) : "",
                    yLabel: a ? a.getLabelForIndex(n, r) : "",
                    index: n,
                    datasetIndex: r,
                    x: e._model.x,
                    y: e._model.y
                }
            }

            function s(e) {
                var t = n.global,
                    a = i.valueOrDefault;
                return {
                    xPadding: e.xPadding,
                    yPadding: e.yPadding,
                    xAlign: e.xAlign,
                    yAlign: e.yAlign,
                    bodyFontColor: e.bodyFontColor,
                    _bodyFontFamily: a(e.bodyFontFamily, t.defaultFontFamily),
                    _bodyFontStyle: a(e.bodyFontStyle, t.defaultFontStyle),
                    _bodyAlign: e.bodyAlign,
                    bodyFontSize: a(e.bodyFontSize, t.defaultFontSize),
                    bodySpacing: e.bodySpacing,
                    titleFontColor: e.titleFontColor,
                    _titleFontFamily: a(e.titleFontFamily, t.defaultFontFamily),
                    _titleFontStyle: a(e.titleFontStyle, t.defaultFontStyle),
                    titleFontSize: a(e.titleFontSize, t.defaultFontSize),
                    _titleAlign: e.titleAlign,
                    titleSpacing: e.titleSpacing,
                    titleMarginBottom: e.titleMarginBottom,
                    footerFontColor: e.footerFontColor,
                    _footerFontFamily: a(e.footerFontFamily, t.defaultFontFamily),
                    _footerFontStyle: a(e.footerFontStyle, t.defaultFontStyle),
                    footerFontSize: a(e.footerFontSize, t.defaultFontSize),
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
                var a = e._chart.ctx,
                    n = 2 * t.yPadding,
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
                n += d * l, n += d ? (d - 1) * t.titleSpacing : 0, n += d ? t.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * t.bodySpacing : 0, n += u ? t.footerMarginTop : 0, n += u * m, n += u ? (u - 1) * t.footerSpacing : 0;
                var _ = 0,
                    h = function(e) {
                        r = Math.max(r, a.measureText(e).width + _)
                    };
                return a.font = i.fontString(l, t._titleFontStyle, t._titleFontFamily), i.each(t.title, h), a.font = i.fontString(c, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), h), _ = t.displayColors ? c + 2 : 0, i.each(o, function(e) {
                    i.each(e.before, h), i.each(e.lines, h), i.each(e.after, h)
                }), _ = 0, a.font = i.fontString(m, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, h), r += 2 * t.xPadding, {
                    width: r,
                    height: n
                }
            }

            function u(e, t) {
                var a = e._model,
                    n = e._chart,
                    r = e._chart.chartArea,
                    i = "center",
                    o = "center";
                a.y < t.height ? o = "top" : a.y > n.height - t.height && (o = "bottom");
                var s, d, u, l, c, m = (r.left + r.right) / 2,
                    _ = (r.top + r.bottom) / 2;
                "center" === o ? (s = function(e) {
                    return e <= m
                }, d = function(e) {
                    return e > m
                }) : (s = function(e) {
                    return e <= t.width / 2
                }, d = function(e) {
                    return e >= n.width - t.width / 2
                }), u = function(e) {
                    return e + t.width > n.width
                }, l = function(e) {
                    return e - t.width < 0
                }, c = function(e) {
                    return e <= _ ? "top" : "bottom"
                }, s(a.x) ? (i = "left", u(a.x) && (i = "center", o = c(a.y))) : d(a.x) && (i = "right", l(a.x) && (i = "center", o = c(a.y)));
                var h = e._options;
                return {
                    xAlign: h.xAlign ? h.xAlign : i,
                    yAlign: h.yAlign ? h.yAlign : o
                }
            }

            function l(e, t, a) {
                var n = e.x,
                    r = e.y,
                    i = e.caretSize,
                    o = e.caretPadding,
                    s = e.cornerRadius,
                    d = a.xAlign,
                    u = a.yAlign,
                    l = i + o,
                    c = s + o;
                return "right" === d ? n -= t.width : "center" === d && (n -= t.width / 2), "top" === u ? r += l : r -= "bottom" === u ? t.height + l : t.height / 2, "center" === u ? "left" === d ? n += l : "right" === d && (n -= l) : "left" === d ? n -= c : "right" === d && (n += c), {
                    x: n,
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
                        n = t.callbacks,
                        r = n.beforeTitle.apply(e, arguments),
                        i = n.title.apply(e, arguments),
                        o = n.afterTitle.apply(e, arguments),
                        s = [];
                    return s = a(s, r), s = a(s, i), s = a(s, o)
                },
                getBeforeBody: function() {
                    var e = this._options.callbacks.beforeBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getBody: function(e, t) {
                    var n = this,
                        r = n._options.callbacks,
                        o = [];
                    return i.each(e, function(e) {
                        var i = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        a(i.before, r.beforeLabel.call(n, e, t)), a(i.lines, r.label.call(n, e, t)), a(i.after, r.afterLabel.call(n, e, t)), o.push(i)
                    }), o
                },
                getAfterBody: function() {
                    var e = this._options.callbacks.afterBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getFooter: function() {
                    var e = this,
                        t = e._options.callbacks,
                        n = t.beforeFooter.apply(e, arguments),
                        r = t.footer.apply(e, arguments),
                        i = t.afterFooter.apply(e, arguments),
                        o = [];
                    return o = a(o, n), o = a(o, r), o = a(o, i)
                },
                update: function(t) {
                    var a, n, r = this,
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
                        g = {
                            width: m.width,
                            height: m.height
                        },
                        M = {
                            x: m.caretX,
                            y: m.caretY
                        };
                    if (h.length) {
                        _.opacity = 1;
                        var v = [],
                            b = [];
                        M = e.Tooltip.positioners[c.position](h, r._eventPosition);
                        var L = [];
                        for (a = 0, n = h.length; a < n; ++a) L.push(o(h[a]));
                        c.filter && (L = L.filter(function(e) {
                            return c.filter(e, f)
                        })), c.itemSort && (L = L.sort(function(e, t) {
                            return c.itemSort(e, t, f)
                        })), i.each(L, function(e) {
                            v.push(c.callbacks.labelColor.call(r, e, r._chart)), b.push(c.callbacks.labelTextColor.call(r, e, r._chart))
                        }), _.title = r.getTitle(L, f), _.beforeBody = r.getBeforeBody(L, f), _.body = r.getBody(L, f), _.afterBody = r.getAfterBody(L, f), _.footer = r.getFooter(L, f), _.x = Math.round(M.x), _.y = Math.round(M.y), _.caretPadding = c.caretPadding, _.labelColors = v, _.labelTextColors = b, _.dataPoints = L, g = d(this, _), p = u(this, g), y = l(_, g, p)
                    } else _.opacity = 0;
                    return _.xAlign = p.xAlign, _.yAlign = p.yAlign, _.x = y.x, _.y = y.y, _.width = g.width, _.height = g.height, _.caretX = M.x, _.caretY = M.y, r._model = _, t && c.custom && c.custom.call(r, _), r
                },
                drawCaret: function(e, t) {
                    var a = this._chart.ctx,
                        n = this._view,
                        r = this.getCaretPosition(e, t, n);
                    a.lineTo(r.x1, r.y1), a.lineTo(r.x2, r.y2), a.lineTo(r.x3, r.y3)
                },
                getCaretPosition: function(e, t, a) {
                    var n, r, i, o, s, d, u = a.caretSize,
                        l = a.cornerRadius,
                        c = a.xAlign,
                        m = a.yAlign,
                        _ = e.x,
                        h = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === m) s = h + p / 2, "left" === c ? (n = _, r = n - u, i = n, o = s + u, d = s - u) : (n = _ + f, r = n + u, i = n, o = s - u, d = s + u);
                    else if ("left" === c ? (r = _ + l + u, n = r - u, i = r + u) : "right" === c ? (r = _ + f - l - u, n = r - u, i = r + u) : (r = _ + f / 2, n = r - u, i = r + u), "top" === m) o = h, s = o - u, d = o;
                    else {
                        o = h + p, s = o + u, d = o;
                        var y = i;
                        i = n, n = y
                    }
                    return {
                        x1: n,
                        x2: r,
                        x3: i,
                        y1: o,
                        y2: s,
                        y3: d
                    }
                },
                drawTitle: function(e, a, n, r) {
                    var o = a.title;
                    if (o.length) {
                        n.textAlign = a._titleAlign, n.textBaseline = "top";
                        var s = a.titleFontSize,
                            d = a.titleSpacing;
                        n.fillStyle = t(a.titleFontColor, r), n.font = i.fontString(s, a._titleFontStyle, a._titleFontFamily);
                        var u, l;
                        for (u = 0, l = o.length; u < l; ++u) n.fillText(o[u], e.x, e.y), e.y += s + d, u + 1 === o.length && (e.y += a.titleMarginBottom - d)
                    }
                },
                drawBody: function(e, a, n, r) {
                    var o = a.bodyFontSize,
                        s = a.bodySpacing,
                        d = a.body;
                    n.textAlign = a._bodyAlign, n.textBaseline = "top", n.font = i.fontString(o, a._bodyFontStyle, a._bodyFontFamily);
                    var u = 0,
                        l = function(t) {
                            n.fillText(t, e.x + u, e.y), e.y += o + s
                        };
                    i.each(a.beforeBody, l);
                    var c = a.displayColors;
                    u = c ? o + 2 : 0, i.each(d, function(s, d) {
                        i.each(s.before, l), i.each(s.lines, function(i) {
                            if (c) {
                                n.fillStyle = t(a.legendColorBackground, r), n.fillRect(e.x, e.y, o, o), n.lineWidth = 1, n.strokeStyle = t(a.labelColors[d].borderColor, r), n.strokeRect(e.x, e.y, o, o), n.fillStyle = t(a.labelColors[d].backgroundColor, r), n.fillRect(e.x + 1, e.y + 1, o - 2, o - 2);
                                var s = t(a.labelTextColors[d], r);
                                n.fillStyle = s
                            }
                            l(i)
                        }), i.each(s.after, l)
                    }), u = 0, i.each(a.afterBody, l), e.y -= s
                },
                drawFooter: function(e, a, n, r) {
                    var o = a.footer;
                    o.length && (e.y += a.footerMarginTop, n.textAlign = a._footerAlign, n.textBaseline = "top", n.fillStyle = t(a.footerFontColor, r), n.font = i.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily), i.each(o, function(t) {
                        n.fillText(t, e.x, e.y), e.y += a.footerFontSize + a.footerSpacing
                    }))
                },
                drawBackground: function(e, a, n, r, i) {
                    n.fillStyle = t(a.backgroundColor, i), n.strokeStyle = t(a.borderColor, i), n.lineWidth = a.borderWidth;
                    var o = a.xAlign,
                        s = a.yAlign,
                        d = e.x,
                        u = e.y,
                        l = r.width,
                        c = r.height,
                        m = a.cornerRadius;
                    n.beginPath(), n.moveTo(d + m, u), "top" === s && this.drawCaret(e, r), n.lineTo(d + l - m, u), n.quadraticCurveTo(d + l, u, d + l, u + m), "center" === s && "right" === o && this.drawCaret(e, r), n.lineTo(d + l, u + c - m), n.quadraticCurveTo(d + l, u + c, d + l - m, u + c), "bottom" === s && this.drawCaret(e, r), n.lineTo(d + m, u + c), n.quadraticCurveTo(d, u + c, d, u + c - m), "center" === s && "left" === o && this.drawCaret(e, r), n.lineTo(d, u + m), n.quadraticCurveTo(d, u, d + m, u), n.closePath(), n.fill(), a.borderWidth > 0 && n.stroke()
                },
                draw: function() {
                    var e = this._chart.ctx,
                        t = this._view;
                    if (0 !== t.opacity) {
                        var a = {
                                width: t.width,
                                height: t.height
                            },
                            n = {
                                x: t.x,
                                y: t.y
                            },
                            r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                            i = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                        this._options.enabled && i && (this.drawBackground(n, t, e, a, r), n.x += t.xPadding, n.y += t.yPadding, this.drawTitle(n, t, e, r), this.drawBody(n, t, e, r), this.drawFooter(n, t, e, r))
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        a = t._options,
                        n = !1;
                    if (t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : t._active = t._chart.getElementsAtEventForMode(e, a.mode, a), !(n = !i.arrayEquals(t._active, t._lastActive))) return !1;
                    if (t._lastActive = t._active, a.enabled || a.custom) {
                        t._eventPosition = {
                            x: e.x,
                            y: e.y
                        };
                        var r = t._model;
                        t.update(!0), t.pivot(), n |= r.x !== t._model.x || r.y !== t._model.y
                    }
                    return n
                }
            }), e.Tooltip.positioners = {
                average: function(e) {
                    if (!e.length) return !1;
                    var t, a, n = 0,
                        r = 0,
                        i = 0;
                    for (t = 0, a = e.length; t < a; ++t) {
                        var o = e[t];
                        if (o && o.hasValue()) {
                            var s = o.tooltipPosition();
                            n += s.x, r += s.y, ++i
                        }
                    }
                    return {
                        x: Math.round(n / i),
                        y: Math.round(r / i)
                    }
                },
                nearest: function(e, t) {
                    var a, n, r, o = t.x,
                        s = t.y,
                        d = Number.POSITIVE_INFINITY;
                    for (a = 0, n = e.length; a < n; ++a) {
                        var u = e[a];
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
    1525: function(e, t, a) {
        "use strict";
        var n = a(822),
            r = a(999);
        e.exports = function(e) {
            var t = n.noop;
            e.LinearScaleBase = e.Scale.extend({
                getRightValue: function(t) {
                    return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                },
                handleTickRangeOptions: function() {
                    var e = this,
                        t = e.options,
                        a = t.ticks;
                    if (a.beginAtZero) {
                        var r = n.sign(e.min),
                            i = n.sign(e.max);
                        r < 0 && i < 0 ? e.max = 0 : r > 0 && i > 0 && (e.min = 0)
                    }
                    var o = void 0 !== a.min || void 0 !== a.suggestedMin,
                        s = void 0 !== a.max || void 0 !== a.suggestedMax;
                    void 0 !== a.min ? e.min = a.min : void 0 !== a.suggestedMin && (null === e.min ? e.min = a.suggestedMin : e.min = Math.min(e.min, a.suggestedMin)), void 0 !== a.max ? e.max = a.max : void 0 !== a.suggestedMax && (null === e.max ? e.max = a.suggestedMax : e.max = Math.max(e.max, a.suggestedMax)), o !== s && e.min >= e.max && (o ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, a.beginAtZero || e.min--)
                },
                getTickLimit: t,
                handleDirectionalChanges: t,
                buildTicks: function() {
                    var e = this,
                        t = e.options,
                        a = t.ticks,
                        i = e.getTickLimit();
                    i = Math.max(2, i);
                    var o = {
                            maxTicks: i,
                            min: a.min,
                            max: a.max,
                            stepSize: n.valueOrDefault(a.fixedStepSize, a.stepSize)
                        },
                        s = e.ticks = r.generators.linear(o, e);
                    e.handleDirectionalChanges(), e.max = n.max(s), e.min = n.min(s), a.reverse ? (s.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                },
                convertTicksToLabels: function() {
                    var t = this;
                    t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                }
            })
        }
    },
    1526: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            var t = {
                    position: "bottom"
                },
                a = e.Scale.extend({
                    getLabels: function() {
                        var e = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                    },
                    determineDataLimits: function() {
                        var e = this,
                            t = e.getLabels();
                        e.minIndex = 0, e.maxIndex = t.length - 1;
                        var a;
                        void 0 !== e.options.ticks.min && (a = t.indexOf(e.options.ticks.min), e.minIndex = -1 !== a ? a : e.minIndex), void 0 !== e.options.ticks.max && (a = t.indexOf(e.options.ticks.max), e.maxIndex = -1 !== a ? a : e.maxIndex), e.min = t[e.minIndex], e.max = t[e.maxIndex]
                    },
                    buildTicks: function() {
                        var e = this,
                            t = e.getLabels();
                        e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                    },
                    getLabelForIndex: function(e, t) {
                        var a = this,
                            n = a.chart.data,
                            r = a.isHorizontal();
                        return n.yLabels && !r ? a.getRightValue(n.datasets[t].data[e]) : a.ticks[e - a.minIndex]
                    },
                    getPixelForValue: function(e, t) {
                        var a, n = this,
                            r = n.options.offset,
                            i = Math.max(n.maxIndex + 1 - n.minIndex - (r ? 0 : 1), 1);
                        if (void 0 !== e && null !== e && (a = n.isHorizontal() ? e.x : e.y), void 0 !== a || void 0 !== e && isNaN(t)) {
                            var o = n.getLabels();
                            e = a || e;
                            var s = o.indexOf(e);
                            t = -1 !== s ? s : t
                        }
                        if (n.isHorizontal()) {
                            var d = n.width / i,
                                u = d * (t - n.minIndex);
                            return r && (u += d / 2), n.left + Math.round(u)
                        }
                        var l = n.height / i,
                            c = l * (t - n.minIndex);
                        return r && (c += l / 2), n.top + Math.round(c)
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            a = t.options.offset,
                            n = Math.max(t._ticks.length - (a ? 0 : 1), 1),
                            r = t.isHorizontal(),
                            i = (r ? t.width : t.height) / n;
                        return e -= r ? t.left : t.top, a && (e -= i / 2), (e <= 0 ? 0 : Math.round(e / i)) + t.minIndex
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
            e.scaleService.registerScaleType("category", a, t)
        }
    },
    1527: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(822),
            i = a(999);
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: i.formatters.linear
                    }
                },
                a = e.LinearScaleBase.extend({
                    determineDataLimits: function() {
                        function e(e) {
                            return s ? e.xAxisID === t.id : e.yAxisID === t.id
                        }
                        var t = this,
                            a = t.options,
                            n = t.chart,
                            i = n.data,
                            o = i.datasets,
                            s = t.isHorizontal();
                        t.min = null, t.max = null;
                        var d = a.stacked;
                        if (void 0 === d && r.each(o, function(t, a) {
                                if (!d) {
                                    var r = n.getDatasetMeta(a);
                                    n.isDatasetVisible(a) && e(r) && void 0 !== r.stack && (d = !0)
                                }
                            }), a.stacked || d) {
                            var u = {};
                            r.each(o, function(i, o) {
                                var s = n.getDatasetMeta(o),
                                    d = [s.type, void 0 === a.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                void 0 === u[d] && (u[d] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var l = u[d].positiveValues,
                                    c = u[d].negativeValues;
                                n.isDatasetVisible(o) && e(s) && r.each(i.data, function(e, n) {
                                    var r = +t.getRightValue(e);
                                    isNaN(r) || s.data[n].hidden || (l[n] = l[n] || 0, c[n] = c[n] || 0, a.relativePoints ? l[n] = 100 : r < 0 ? c[n] += r : l[n] += r)
                                })
                            }), r.each(u, function(e) {
                                var a = e.positiveValues.concat(e.negativeValues),
                                    n = r.min(a),
                                    i = r.max(a);
                                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? i : Math.max(t.max, i)
                            })
                        } else r.each(o, function(a, i) {
                            var o = n.getDatasetMeta(i);
                            n.isDatasetVisible(i) && e(o) && r.each(a.data, function(e, a) {
                                var n = +t.getRightValue(e);
                                isNaN(n) || o.data[a].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                            })
                        });
                        t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e, t = this,
                            a = t.options.ticks;
                        if (t.isHorizontal()) e = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(t.width / 50));
                        else {
                            var i = r.valueOrDefault(a.fontSize, n.global.defaultFontSize);
                            e = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(t.height / (2 * i)))
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
                        var t, a = this,
                            n = a.start,
                            r = +a.getRightValue(e),
                            i = a.end - n;
                        return a.isHorizontal() ? (t = a.left + a.width / i * (r - n), Math.round(t)) : (t = a.bottom - a.height / i * (r - n), Math.round(t))
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            a = t.isHorizontal(),
                            n = a ? t.width : t.height,
                            r = (a ? e - t.left : t.bottom - e) / n;
                        return t.start + (t.end - t.start) * r
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.ticksAsNumbers[e])
                    }
                });
            e.scaleService.registerScaleType("linear", a, t)
        }
    },
    1528: function(e, t, a) {
        "use strict";
        var n = a(822),
            r = a(999);
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: r.formatters.logarithmic
                    }
                },
                a = e.Scale.extend({
                    determineDataLimits: function() {
                        function e(e) {
                            return u ? e.xAxisID === t.id : e.yAxisID === t.id
                        }
                        var t = this,
                            a = t.options,
                            r = a.ticks,
                            i = t.chart,
                            o = i.data,
                            s = o.datasets,
                            d = n.valueOrDefault,
                            u = t.isHorizontal();
                        t.min = null, t.max = null, t.minNotZero = null;
                        var l = a.stacked;
                        if (void 0 === l && n.each(s, function(t, a) {
                                if (!l) {
                                    var n = i.getDatasetMeta(a);
                                    i.isDatasetVisible(a) && e(n) && void 0 !== n.stack && (l = !0)
                                }
                            }), a.stacked || l) {
                            var c = {};
                            n.each(s, function(r, o) {
                                var s = i.getDatasetMeta(o),
                                    d = [s.type, void 0 === a.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                i.isDatasetVisible(o) && e(s) && (void 0 === c[d] && (c[d] = []), n.each(r.data, function(e, n) {
                                    var r = c[d],
                                        i = +t.getRightValue(e);
                                    isNaN(i) || s.data[n].hidden || (r[n] = r[n] || 0, a.relativePoints ? r[n] = 100 : r[n] += i)
                                }))
                            }), n.each(c, function(e) {
                                var a = n.min(e),
                                    r = n.max(e);
                                t.min = null === t.min ? a : Math.min(t.min, a), t.max = null === t.max ? r : Math.max(t.max, r)
                            })
                        } else n.each(s, function(a, r) {
                            var o = i.getDatasetMeta(r);
                            i.isDatasetVisible(r) && e(o) && n.each(a.data, function(e, a) {
                                var n = +t.getRightValue(e);
                                isNaN(n) || o.data[a].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                            })
                        });
                        t.min = d(r.min, t.min), t.max = d(r.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10))
                    },
                    buildTicks: function() {
                        var e = this,
                            t = e.options,
                            a = t.ticks,
                            i = {
                                min: a.min,
                                max: a.max
                            },
                            o = e.ticks = r.generators.logarithmic(i, e);
                        e.isHorizontal() || o.reverse(), e.max = n.max(o), e.min = n.min(o), a.reverse ? (o.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
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
                        var t, a, r, i = this,
                            o = i.start,
                            s = +i.getRightValue(e),
                            d = i.options,
                            u = d.ticks;
                        return i.isHorizontal() ? (r = n.log10(i.end) - n.log10(o), 0 === s ? a = i.left : (t = i.width, a = i.left + t / r * (n.log10(s) - n.log10(o)))) : (t = i.height, 0 !== o || u.reverse ? 0 === i.end && u.reverse ? (r = n.log10(i.start) - n.log10(i.minNotZero), a = s === i.end ? i.top : s === i.minNotZero ? i.top + .02 * t : i.top + .02 * t + .98 * t / r * (n.log10(s) - n.log10(i.minNotZero))) : 0 === s ? a = u.reverse ? i.top : i.bottom : (r = n.log10(i.end) - n.log10(o), t = i.height, a = i.bottom - t / r * (n.log10(s) - n.log10(o))) : (r = n.log10(i.end) - n.log10(i.minNotZero), a = s === o ? i.bottom : s === i.minNotZero ? i.bottom - .02 * t : i.bottom - .02 * t - .98 * t / r * (n.log10(s) - n.log10(i.minNotZero)))), a
                    },
                    getValueForPixel: function(e) {
                        var t, a, r = this,
                            i = n.log10(r.end) - n.log10(r.start);
                        return r.isHorizontal() ? (a = r.width, t = r.start * Math.pow(10, (e - r.left) * i / a)) : (a = r.height, t = Math.pow(10, (r.bottom - e) * i / a) / r.start), t
                    }
                });
            e.scaleService.registerScaleType("logarithmic", a, t)
        }
    },
    1529: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(822),
            i = a(999);
        e.exports = function(e) {
            function t(e) {
                var t = e.options;
                return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
            }

            function a(e) {
                var t = e.options.pointLabels,
                    a = r.valueOrDefault(t.fontSize, p.defaultFontSize),
                    n = r.valueOrDefault(t.fontStyle, p.defaultFontStyle),
                    i = r.valueOrDefault(t.fontFamily, p.defaultFontFamily);
                return {
                    size: a,
                    style: n,
                    family: i,
                    font: r.fontString(a, n, i)
                }
            }

            function o(e, t, a) {
                return r.isArray(a) ? {
                    w: r.longestText(e, e.font, a),
                    h: a.length * t + 1.5 * (a.length - 1) * t
                } : {
                    w: e.measureText(a).width,
                    h: t
                }
            }

            function s(e, t, a, n, r) {
                return e === n || e === r ? {
                    start: t - a / 2,
                    end: t + a / 2
                } : e < n || e > r ? {
                    start: t - a - 5,
                    end: t
                } : {
                    start: t,
                    end: t + a + 5
                }
            }

            function d(e) {
                var n, i, d, u = a(e),
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
                for (n = 0; n < _; n++) {
                    d = e.getPointPosition(n, l), i = o(e.ctx, u.size, e.pointLabels[n] || ""), e._pointLabelSizes[n] = i;
                    var h = e.getIndexAngle(n),
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

            function c(e, t, a, n) {
                if (r.isArray(t))
                    for (var i = a.y, o = 1.5 * n, s = 0; s < t.length; ++s) e.fillText(t[s], a.x, i), i += o;
                else e.fillText(t, a.x, a.y)
            }

            function m(e, t, a) {
                90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
            }

            function _(e) {
                var n = e.ctx,
                    i = r.valueOrDefault,
                    o = e.options,
                    s = o.angleLines,
                    d = o.pointLabels;
                n.lineWidth = s.lineWidth, n.strokeStyle = s.color;
                var u = e.getDistanceFromCenterForValue(o.ticks.reverse ? e.min : e.max),
                    _ = a(e);
                n.textBaseline = "top";
                for (var h = t(e) - 1; h >= 0; h--) {
                    if (s.display) {
                        var f = e.getPointPosition(h, u);
                        n.beginPath(), n.moveTo(e.xCenter, e.yCenter), n.lineTo(f.x, f.y), n.stroke(), n.closePath()
                    }
                    if (d.display) {
                        var y = e.getPointPosition(h, u + 5),
                            g = i(d.fontColor, p.defaultFontColor);
                        n.font = _.font, n.fillStyle = g;
                        var M = e.getIndexAngle(h),
                            v = r.toDegrees(M);
                        n.textAlign = l(v), m(v, e._pointLabelSizes[h], y), c(n, e.pointLabels[h] || "", y, _.size)
                    }
                }
            }

            function h(e, a, n, i) {
                var o = e.ctx;
                if (o.strokeStyle = r.valueAtIndexOrDefault(a.color, i - 1), o.lineWidth = r.valueAtIndexOrDefault(a.lineWidth, i - 1), e.options.gridLines.circular) o.beginPath(), o.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI), o.closePath(), o.stroke();
                else {
                    var s = t(e);
                    if (0 === s) return;
                    o.beginPath();
                    var d = e.getPointPosition(0, n);
                    o.moveTo(d.x, d.y);
                    for (var u = 1; u < s; u++) d = e.getPointPosition(u, n), o.lineTo(d.x, d.y);
                    o.closePath(), o.stroke()
                }
            }

            function f(e) {
                return r.isNumber(e) ? e : 0
            }
            var p = n.global,
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
                g = e.LinearScaleBase.extend({
                    setDimensions: function() {
                        var e = this,
                            t = e.options,
                            a = t.ticks;
                        e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                        var n = r.min([e.height, e.width]),
                            i = r.valueOrDefault(a.fontSize, p.defaultFontSize);
                        e.drawingArea = t.display ? n / 2 - (i / 2 + a.backdropPaddingY) : n / 2
                    },
                    determineDataLimits: function() {
                        var e = this,
                            t = e.chart,
                            a = Number.POSITIVE_INFINITY,
                            n = Number.NEGATIVE_INFINITY;
                        r.each(t.data.datasets, function(i, o) {
                            if (t.isDatasetVisible(o)) {
                                var s = t.getDatasetMeta(o);
                                r.each(i.data, function(t, r) {
                                    var i = +e.getRightValue(t);
                                    isNaN(i) || s.data[r].hidden || (a = Math.min(i, a), n = Math.max(i, n))
                                })
                            }
                        }), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
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
                    setReductions: function(e, t, a) {
                        var n = this,
                            r = t.l / Math.sin(a.l),
                            i = Math.max(t.r - n.width, 0) / Math.sin(a.r),
                            o = -t.t / Math.cos(a.t),
                            s = -Math.max(t.b - n.height, 0) / Math.cos(a.b);
                        r = f(r), i = f(i), o = f(o), s = f(s), n.drawingArea = Math.min(Math.round(e - (r + i) / 2), Math.round(e - (o + s) / 2)), n.setCenterPoint(r, i, o, s)
                    },
                    setCenterPoint: function(e, t, a, n) {
                        var r = this,
                            i = r.width - t - r.drawingArea,
                            o = e + r.drawingArea,
                            s = a + r.drawingArea,
                            d = r.height - n - r.drawingArea;
                        r.xCenter = Math.round((o + i) / 2 + r.left), r.yCenter = Math.round((s + d) / 2 + r.top)
                    },
                    getIndexAngle: function(e) {
                        return e * (2 * Math.PI / t(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(e) {
                        var t = this;
                        if (null === e) return 0;
                        var a = t.drawingArea / (t.max - t.min);
                        return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a
                    },
                    getPointPosition: function(e, t) {
                        var a = this,
                            n = a.getIndexAngle(e) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(n) * t) + a.xCenter,
                            y: Math.round(Math.sin(n) * t) + a.yCenter
                        }
                    },
                    getPointPositionForValue: function(e, t) {
                        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                    },
                    getBasePosition: function() {
                        var e = this,
                            t = e.min,
                            a = e.max;
                        return e.getPointPositionForValue(0, e.beginAtZero ? 0 : t < 0 && a < 0 ? a : t > 0 && a > 0 ? t : 0)
                    },
                    draw: function() {
                        var e = this,
                            t = e.options,
                            a = t.gridLines,
                            n = t.ticks,
                            i = r.valueOrDefault;
                        if (t.display) {
                            var o = e.ctx,
                                s = this.getIndexAngle(0),
                                d = i(n.fontSize, p.defaultFontSize),
                                u = i(n.fontStyle, p.defaultFontStyle),
                                l = i(n.fontFamily, p.defaultFontFamily),
                                c = r.fontString(d, u, l);
                            r.each(e.ticks, function(t, r) {
                                if (r > 0 || n.reverse) {
                                    var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[r]);
                                    if (a.display && 0 !== r && h(e, a, u, r), n.display) {
                                        var l = i(n.fontColor, p.defaultFontColor);
                                        if (o.font = c, o.save(), o.translate(e.xCenter, e.yCenter), o.rotate(s), n.showLabelBackdrop) {
                                            var m = o.measureText(t).width;
                                            o.fillStyle = n.backdropColor, o.fillRect(-m / 2 - n.backdropPaddingX, -u - d / 2 - n.backdropPaddingY, m + 2 * n.backdropPaddingX, d + 2 * n.backdropPaddingY)
                                        }
                                        o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = l, o.fillText(t, 0, -u), o.restore()
                                    }
                                }
                            }), (t.angleLines.display || t.pointLabels.display) && _(e)
                        }
                    }
                });
            e.scaleService.registerScaleType("radialLinear", g, y)
        }
    },
    1530: function(e, t, a) {
        "use strict";

        function n(e, t) {
            return e - t
        }

        function r(e) {
            var t, a, n, r = {},
                i = [];
            for (t = 0, a = e.length; t < a; ++t) n = e[t], r[n] || (r[n] = !0, i.push(n));
            return i
        }

        function i(e, t, a, n) {
            if ("linear" === n || !e.length) return [{
                time: t,
                pos: 0
            }, {
                time: a,
                pos: 1
            }];
            var r, i, o, s, d, u = [],
                l = [t];
            for (r = 0, i = e.length; r < i; ++r)(s = e[r]) > t && s < a && l.push(s);
            for (l.push(a), r = 0, i = l.length; r < i; ++r) d = l[r + 1], o = l[r - 1], s = l[r], void 0 !== o && void 0 !== d && Math.round((d + o) / 2) === s || u.push({
                time: s,
                pos: r / (i - 1)
            });
            return u
        }

        function o(e, t, a) {
            for (var n, r, i, o = 0, s = e.length - 1; o >= 0 && o <= s;) {
                if (n = o + s >> 1, r = e[n - 1] || null, i = e[n], !r) return {
                    lo: null,
                    hi: i
                };
                if (i[t] < a) o = n + 1;
                else {
                    if (!(r[t] > a)) return {
                        lo: r,
                        hi: i
                    };
                    s = n - 1
                }
            }
            return {
                lo: i,
                hi: null
            }
        }

        function s(e, t, a, n) {
            var r = o(e, t, a),
                i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                d = s[t] - i[t],
                u = d ? (a - i[t]) / d : 0,
                l = (s[n] - i[n]) * u;
            return i[n] + l
        }

        function d(e, t) {
            var a = t.parser,
                n = t.parser || t.format;
            return "function" == typeof a ? a(e) : "string" == typeof e && "string" == typeof n ? p(e, n) : (e instanceof p || (e = p(e)), e.isValid() ? e : "function" == typeof n ? n(e) : e)
        }

        function u(e, t) {
            if (g.isNullOrUndef(e)) return null;
            var a = t.options.time,
                n = d(t.getRightValue(e), a);
            return n.isValid() ? (a.round && n.startOf(a.round), n.valueOf()) : null
        }

        function l(e, t, a, n) {
            var r, i, o, s = t - e,
                d = b[a],
                u = d.size,
                l = d.steps;
            if (!l) return Math.ceil(s / ((n || 1) * u));
            for (r = 0, i = l.length; r < i && (o = l[r], !(Math.ceil(s / (u * o)) <= n)); ++r);
            return o
        }

        function c(e, t, a, n) {
            var r, i, o, s = L.length;
            for (r = L.indexOf(e); r < s - 1; ++r)
                if (i = b[L[r]], o = i.steps ? i.steps[i.steps.length - 1] : v, Math.ceil((a - t) / (o * i.size)) <= n) return L[r];
            return L[s - 1]
        }

        function m(e) {
            for (var t = L.indexOf(e) + 1, a = L.length; t < a; ++t)
                if (b[L[t]].major) return L[t]
        }

        function _(e, t, a, n, r, i) {
            var o, s = i.time,
                d = g.valueOrDefault(s.stepSize, s.unitStepSize),
                u = "week" === a && s.isoWeekday,
                c = i.ticks.major.enabled,
                m = b[a],
                _ = p(e),
                h = p(t),
                f = [];
            for (d || (d = l(e, t, a, r)), u && (_ = _.isoWeekday(u), h = h.isoWeekday(u)), _ = _.startOf(u ? "day" : a), h = h.startOf(u ? "day" : a), h < t && h.add(1, a), o = p(_), c && n && !u && !s.round && (o.startOf(n), o.add(~~((_ - o) / (m.size * d)) * d, a)); o < h; o.add(d, a)) f.push(+o);
            return f.push(+o), f
        }

        function h(e, t, a, n, r) {
            var i, o, d = 0,
                u = 0;
            return r.offset && t.length && (r.time.min || (i = t.length > 1 ? t[1] : n, o = t[0], d = (s(e, "time", i, "pos") - s(e, "time", o, "pos")) / 2), r.time.max || (i = t[t.length - 1], o = t.length > 1 ? t[t.length - 2] : a, u = (s(e, "time", i, "pos") - s(e, "time", o, "pos")) / 2)), {
                left: d,
                right: u
            }
        }

        function f(e, t) {
            var a, n, r, i, o = [];
            for (a = 0, n = e.length; a < n; ++a) r = e[a], i = !!t && r === +p(r).startOf(t), o.push({
                value: r,
                major: i
            });
            return o
        }
        var p = a(816);
        p = "function" == typeof p ? p : window.moment;
        var y = a(827),
            g = a(822),
            M = Number.MIN_SAFE_INTEGER || -9007199254740991,
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
                a = e.Scale.extend({
                    initialize: function() {
                        if (!p) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                    },
                    update: function() {
                        var t = this,
                            a = t.options;
                        return a.time && a.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(t, arguments)
                    },
                    getRightValue: function(t) {
                        return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function() {
                        var e, t, a, i, o, s, d = this,
                            l = d.chart,
                            c = d.options.time,
                            m = u(c.min, d) || v,
                            _ = u(c.max, d) || M,
                            h = [],
                            f = [],
                            y = [];
                        for (e = 0, a = l.data.labels.length; e < a; ++e) y.push(u(l.data.labels[e], d));
                        for (e = 0, a = (l.data.datasets || []).length; e < a; ++e)
                            if (l.isDatasetVisible(e))
                                if (o = l.data.datasets[e].data, g.isObject(o[0]))
                                    for (f[e] = [], t = 0, i = o.length; t < i; ++t) s = u(o[t], d), h.push(s), f[e][t] = s;
                                else h.push.apply(h, y), f[e] = y.slice(0);
                        else f[e] = [];
                        y.length && (y = r(y).sort(n), m = Math.min(m, y[0]), _ = Math.max(_, y[y.length - 1])), h.length && (h = r(h).sort(n), m = Math.min(m, h[0]), _ = Math.max(_, h[h.length - 1])), m = m === v ? +p().startOf("day") : m, _ = _ === M ? +p().endOf("day") + 1 : _, d.min = Math.min(m, _), d.max = Math.max(m + 1, _), d._horizontal = d.isHorizontal(), d._table = [], d._timestamps = {
                            data: h,
                            datasets: f,
                            labels: y
                        }
                    },
                    buildTicks: function() {
                        var e, t, a, n = this,
                            r = n.min,
                            o = n.max,
                            s = n.options,
                            d = s.time,
                            l = d.displayFormats,
                            p = n.getLabelCapacity(r),
                            y = d.unit || c(d.minUnit, r, o, p),
                            g = m(y),
                            M = [],
                            v = [];
                        switch (s.ticks.source) {
                            case "data":
                                M = n._timestamps.data;
                                break;
                            case "labels":
                                M = n._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                M = _(r, o, y, g, p, s)
                        }
                        for ("ticks" === s.bounds && M.length && (r = M[0], o = M[M.length - 1]), r = u(d.min, n) || r, o = u(d.max, n) || o, e = 0, t = M.length; e < t; ++e)(a = M[e]) >= r && a <= o && v.push(a);
                        return n.min = r, n.max = o, n._unit = y, n._majorUnit = g, n._minorFormat = l[y], n._majorFormat = l[g], n._table = i(n._timestamps.data, r, o, s.distribution), n._offsets = h(n._table, v, r, o, s), f(v, g)
                    },
                    getLabelForIndex: function(e, t) {
                        var a = this,
                            n = a.chart.data,
                            r = a.options.time,
                            i = n.labels && e < n.labels.length ? n.labels[e] : "",
                            o = n.datasets[t].data[e];
                        return g.isObject(o) && (i = a.getRightValue(o)), r.tooltipFormat && (i = d(i, r).format(r.tooltipFormat)), i
                    },
                    tickFormatFunction: function(e, t, a) {
                        var n = this,
                            r = n.options,
                            i = e.valueOf(),
                            o = n._majorUnit,
                            s = n._majorFormat,
                            d = e.clone().startOf(n._majorUnit).valueOf(),
                            u = r.ticks.major,
                            l = u.enabled && o && s && i === d,
                            c = e.format(l ? s : n._minorFormat),
                            m = l ? u : r.ticks.minor,
                            _ = g.valueOrDefault(m.callback, m.userCallback);
                        return _ ? _(c, t, a) : c
                    },
                    convertTicksToLabels: function(e) {
                        var t, a, n = [];
                        for (t = 0, a = e.length; t < a; ++t) n.push(this.tickFormatFunction(p(e[t].value), t, e));
                        return n
                    },
                    getPixelForOffset: function(e) {
                        var t = this,
                            a = t._horizontal ? t.width : t.height,
                            n = t._horizontal ? t.left : t.top,
                            r = s(t._table, "time", e, "pos");
                        return n + a * (t._offsets.left + r) / (t._offsets.left + 1 + t._offsets.right)
                    },
                    getPixelForValue: function(e, t, a) {
                        var n = this,
                            r = null;
                        if (void 0 !== t && void 0 !== a && (r = n._timestamps.datasets[a][t]), null === r && (r = u(e, n)), null !== r) return n.getPixelForOffset(r)
                    },
                    getPixelForTick: function(e) {
                        var t = this.getTicks();
                        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            a = t._horizontal ? t.width : t.height,
                            n = t._horizontal ? t.left : t.top,
                            r = (a ? (e - n) / a : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                            i = s(t._table, "pos", r, "time");
                        return p(i)
                    },
                    getLabelWidth: function(e) {
                        var t = this,
                            a = t.options.ticks,
                            n = t.ctx.measureText(e).width,
                            r = g.toRadians(a.maxRotation),
                            i = Math.cos(r),
                            o = Math.sin(r);
                        return n * i + g.valueOrDefault(a.fontSize, y.global.defaultFontSize) * o
                    },
                    getLabelCapacity: function(e) {
                        var t = this;
                        t._minorFormat = t.options.time.displayFormats.millisecond;
                        var a = t.tickFormatFunction(p(e), 0, []),
                            n = t.getLabelWidth(a),
                            r = t.isHorizontal() ? t.width : t.height;
                        return Math.floor(r / n)
                    }
                });
            e.scaleService.registerScaleType("time", a, t)
        }
    },
    1531: function(e, t, a) {
        function n(e) {
            return a(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        var i = {
            "./af": 1131,
            "./af.js": 1131,
            "./ar": 1132,
            "./ar-dz": 1133,
            "./ar-dz.js": 1133,
            "./ar-kw": 1134,
            "./ar-kw.js": 1134,
            "./ar-ly": 1135,
            "./ar-ly.js": 1135,
            "./ar-ma": 1136,
            "./ar-ma.js": 1136,
            "./ar-sa": 1137,
            "./ar-sa.js": 1137,
            "./ar-tn": 1138,
            "./ar-tn.js": 1138,
            "./ar.js": 1132,
            "./az": 1139,
            "./az.js": 1139,
            "./be": 1140,
            "./be.js": 1140,
            "./bg": 1141,
            "./bg.js": 1141,
            "./bn": 1142,
            "./bn.js": 1142,
            "./bo": 1143,
            "./bo.js": 1143,
            "./br": 1144,
            "./br.js": 1144,
            "./bs": 1145,
            "./bs.js": 1145,
            "./ca": 1146,
            "./ca.js": 1146,
            "./cs": 1147,
            "./cs.js": 1147,
            "./cv": 1148,
            "./cv.js": 1148,
            "./cy": 1149,
            "./cy.js": 1149,
            "./da": 1150,
            "./da.js": 1150,
            "./de": 1151,
            "./de-at": 1152,
            "./de-at.js": 1152,
            "./de-ch": 1153,
            "./de-ch.js": 1153,
            "./de.js": 1151,
            "./dv": 1154,
            "./dv.js": 1154,
            "./el": 1155,
            "./el.js": 1155,
            "./en-au": 1156,
            "./en-au.js": 1156,
            "./en-ca": 1157,
            "./en-ca.js": 1157,
            "./en-gb": 1158,
            "./en-gb.js": 1158,
            "./en-ie": 1159,
            "./en-ie.js": 1159,
            "./en-nz": 1160,
            "./en-nz.js": 1160,
            "./eo": 1161,
            "./eo.js": 1161,
            "./es": 1162,
            "./es-do": 1163,
            "./es-do.js": 1163,
            "./es.js": 1162,
            "./et": 1164,
            "./et.js": 1164,
            "./eu": 1165,
            "./eu.js": 1165,
            "./fa": 1166,
            "./fa.js": 1166,
            "./fi": 1167,
            "./fi.js": 1167,
            "./fo": 1168,
            "./fo.js": 1168,
            "./fr": 1169,
            "./fr-ca": 1170,
            "./fr-ca.js": 1170,
            "./fr-ch": 1171,
            "./fr-ch.js": 1171,
            "./fr.js": 1169,
            "./fy": 1172,
            "./fy.js": 1172,
            "./gd": 1173,
            "./gd.js": 1173,
            "./gl": 1174,
            "./gl.js": 1174,
            "./gom-latn": 1175,
            "./gom-latn.js": 1175,
            "./he": 1176,
            "./he.js": 1176,
            "./hi": 1177,
            "./hi.js": 1177,
            "./hr": 1178,
            "./hr.js": 1178,
            "./hu": 1179,
            "./hu.js": 1179,
            "./hy-am": 1180,
            "./hy-am.js": 1180,
            "./id": 1181,
            "./id.js": 1181,
            "./is": 1182,
            "./is.js": 1182,
            "./it": 1183,
            "./it.js": 1183,
            "./ja": 1184,
            "./ja.js": 1184,
            "./jv": 1185,
            "./jv.js": 1185,
            "./ka": 1186,
            "./ka.js": 1186,
            "./kk": 1187,
            "./kk.js": 1187,
            "./km": 1188,
            "./km.js": 1188,
            "./kn": 1189,
            "./kn.js": 1189,
            "./ko": 1190,
            "./ko.js": 1190,
            "./ky": 1191,
            "./ky.js": 1191,
            "./lb": 1192,
            "./lb.js": 1192,
            "./lo": 1193,
            "./lo.js": 1193,
            "./lt": 1194,
            "./lt.js": 1194,
            "./lv": 1195,
            "./lv.js": 1195,
            "./me": 1196,
            "./me.js": 1196,
            "./mi": 1197,
            "./mi.js": 1197,
            "./mk": 1198,
            "./mk.js": 1198,
            "./ml": 1199,
            "./ml.js": 1199,
            "./mr": 1200,
            "./mr.js": 1200,
            "./ms": 1201,
            "./ms-my": 1202,
            "./ms-my.js": 1202,
            "./ms.js": 1201,
            "./my": 1203,
            "./my.js": 1203,
            "./nb": 1204,
            "./nb.js": 1204,
            "./ne": 1205,
            "./ne.js": 1205,
            "./nl": 1206,
            "./nl-be": 1207,
            "./nl-be.js": 1207,
            "./nl.js": 1206,
            "./nn": 1208,
            "./nn.js": 1208,
            "./pa-in": 1209,
            "./pa-in.js": 1209,
            "./pl": 1210,
            "./pl.js": 1210,
            "./pt": 1211,
            "./pt-br": 1212,
            "./pt-br.js": 1212,
            "./pt.js": 1211,
            "./ro": 1213,
            "./ro.js": 1213,
            "./ru": 1214,
            "./ru.js": 1214,
            "./sd": 1215,
            "./sd.js": 1215,
            "./se": 1216,
            "./se.js": 1216,
            "./si": 1217,
            "./si.js": 1217,
            "./sk": 1218,
            "./sk.js": 1218,
            "./sl": 1219,
            "./sl.js": 1219,
            "./sq": 1220,
            "./sq.js": 1220,
            "./sr": 1221,
            "./sr-cyrl": 1222,
            "./sr-cyrl.js": 1222,
            "./sr.js": 1221,
            "./ss": 1223,
            "./ss.js": 1223,
            "./sv": 1224,
            "./sv.js": 1224,
            "./sw": 1225,
            "./sw.js": 1225,
            "./ta": 1226,
            "./ta.js": 1226,
            "./te": 1227,
            "./te.js": 1227,
            "./tet": 1228,
            "./tet.js": 1228,
            "./th": 1229,
            "./th.js": 1229,
            "./tl-ph": 1230,
            "./tl-ph.js": 1230,
            "./tlh": 1231,
            "./tlh.js": 1231,
            "./tr": 1232,
            "./tr.js": 1232,
            "./tzl": 1233,
            "./tzl.js": 1233,
            "./tzm": 1234,
            "./tzm-latn": 1235,
            "./tzm-latn.js": 1235,
            "./tzm.js": 1234,
            "./uk": 1236,
            "./uk.js": 1236,
            "./ur": 1237,
            "./ur.js": 1237,
            "./uz": 1238,
            "./uz-latn": 1239,
            "./uz-latn.js": 1239,
            "./uz.js": 1238,
            "./vi": 1240,
            "./vi.js": 1240,
            "./x-pseudo": 1241,
            "./x-pseudo.js": 1241,
            "./yo": 1242,
            "./yo.js": 1242,
            "./zh-cn": 1243,
            "./zh-cn.js": 1243,
            "./zh-hk": 1244,
            "./zh-hk.js": 1244,
            "./zh-tw": 1245,
            "./zh-tw.js": 1245
        };
        n.keys = function() {
            return Object.keys(i)
        }, n.resolve = r, e.exports = n, n.id = 1531
    },
    1532: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(879),
            i = a(822);
        n._set("bar", {
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
        }), n._set("horizontalBar", {
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
                        var a = "";
                        return e.length > 0 && (e[0].yLabel ? a = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (a = t.labels[e[0].index])), a
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
                    var t, a = this;
                    e.DatasetController.prototype.initialize.apply(a, arguments), t = a.getMeta(), t.stack = a.getDataset().stack, t.bar = !0
                },
                update: function(e) {
                    var t, a, n = this,
                        r = n.getMeta().data;
                    for (n._ruler = n.getRuler(), t = 0, a = r.length; t < a; ++t) n.updateElement(r[t], t, e)
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = n.chart,
                        o = n.getMeta(),
                        s = n.getDataset(),
                        d = e.custom || {},
                        u = r.options.elements.rectangle;
                    e._xScale = n.getScaleForId(o.xAxisID), e._yScale = n.getScaleForId(o.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
                        datasetLabel: s.label,
                        label: r.data.labels[t],
                        borderSkipped: d.borderSkipped ? d.borderSkipped : u.borderSkipped,
                        backgroundColor: d.backgroundColor ? d.backgroundColor : i.valueAtIndexOrDefault(s.backgroundColor, t, u.backgroundColor),
                        borderColor: d.borderColor ? d.borderColor : i.valueAtIndexOrDefault(s.borderColor, t, u.borderColor),
                        borderWidth: d.borderWidth ? d.borderWidth : i.valueAtIndexOrDefault(s.borderWidth, t, u.borderWidth)
                    }, n.updateElementGeometry(e, t, a), e.pivot()
                },
                updateElementGeometry: function(e, t, a) {
                    var n = this,
                        r = e._model,
                        i = n.getValueScale(),
                        o = i.getBasePixel(),
                        s = i.isHorizontal(),
                        d = n._ruler || n.getRuler(),
                        u = n.calculateBarValuePixels(n.index, t),
                        l = n.calculateBarIndexPixels(n.index, t, d);
                    r.horizontal = s, r.base = a ? o : u.base, r.x = s ? a ? o : u.head : l.center, r.y = s ? l.center : a ? o : u.head, r.height = s ? l.size : void 0, r.width = s ? void 0 : l.size
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
                    var t, a, n = this,
                        r = n.chart,
                        i = n.getIndexScale(),
                        o = i.options.stacked,
                        s = void 0 === e ? r.data.datasets.length : e + 1,
                        d = [];
                    for (t = 0; t < s; ++t) a = r.getDatasetMeta(t), a.bar && r.isDatasetVisible(t) && (!1 === o || !0 === o && -1 === d.indexOf(a.stack) || void 0 === o && (void 0 === a.stack || -1 === d.indexOf(a.stack))) && d.push(a.stack);
                    return d.length
                },
                getStackIndex: function(e) {
                    return this.getStackCount(e) - 1
                },
                getRuler: function() {
                    var e, t, a = this,
                        n = a.getIndexScale(),
                        r = a.getStackCount(),
                        i = a.index,
                        o = [],
                        s = n.isHorizontal(),
                        d = s ? n.left : n.top,
                        u = d + (s ? n.width : n.height);
                    for (e = 0, t = a.getMeta().data.length; e < t; ++e) o.push(n.getPixelForValue(null, e, i));
                    return {
                        pixels: o,
                        start: d,
                        end: u,
                        stackCount: r,
                        scale: n
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var a, n, r, i, o, s, d = this,
                        u = d.chart,
                        l = d.getMeta(),
                        c = d.getValueScale(),
                        m = u.data.datasets,
                        _ = c.getRightValue(m[e].data[t]),
                        h = c.options.stacked,
                        f = l.stack,
                        p = 0;
                    if (h || void 0 === h && void 0 !== f)
                        for (a = 0; a < e; ++a) n = u.getDatasetMeta(a), n.bar && n.stack === f && n.controller.getValueScaleId() === c.id && u.isDatasetVisible(a) && (r = c.getRightValue(m[a].data[t]), (_ < 0 && r < 0 || _ >= 0 && r > 0) && (p += r));
                    return i = c.getPixelForValue(p), o = c.getPixelForValue(p + _), s = (o - i) / 2, {
                        size: s,
                        base: i,
                        head: o,
                        center: o + s / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, a) {
                    var n, r, o, s, d, u, l = this,
                        c = a.scale.options,
                        m = l.getStackIndex(e),
                        _ = a.pixels,
                        h = _[t],
                        f = _.length,
                        p = a.start,
                        y = a.end;
                    return 1 === f ? (n = h > p ? h - p : y - h, r = h < y ? y - h : h - p) : (t > 0 && (n = (h - _[t - 1]) / 2, t === f - 1 && (r = n)), t < f - 1 && (r = (_[t + 1] - h) / 2, 0 === t && (n = r))), o = n * c.categoryPercentage, s = r * c.categoryPercentage, d = (o + s) / a.stackCount, u = d * c.barPercentage, u = Math.min(i.valueOrDefault(c.barThickness, u), i.valueOrDefault(c.maxBarThickness, 1 / 0)), h -= o, h += d * m, h += (d - u) / 2, {
                        size: u,
                        base: h,
                        head: h + u,
                        center: h + u / 2
                    }
                },
                draw: function() {
                    var e = this,
                        t = e.chart,
                        a = e.getValueScale(),
                        n = e.getMeta().data,
                        r = e.getDataset(),
                        o = n.length,
                        s = 0;
                    for (i.canvas.clipArea(t.ctx, t.chartArea); s < o; ++s) isNaN(a.getRightValue(r.data[s])) || n[s].draw();
                    i.canvas.unclipArea(t.ctx)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        n = e.custom || {},
                        r = e._model;
                    r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : i.valueAtIndexOrDefault(t.hoverBackgroundColor, a, i.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : i.valueAtIndexOrDefault(t.hoverBorderColor, a, i.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : i.valueAtIndexOrDefault(t.hoverBorderWidth, a, r.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        n = e.custom || {},
                        r = e._model,
                        o = this.chart.options.elements.rectangle;
                    r.backgroundColor = n.backgroundColor ? n.backgroundColor : i.valueAtIndexOrDefault(t.backgroundColor, a, o.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : i.valueAtIndexOrDefault(t.borderColor, a, o.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : i.valueAtIndexOrDefault(t.borderWidth, a, o.borderWidth)
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
    1533: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(879),
            i = a(822);
        n._set("bubble", {
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
                        var a = t.datasets[e.datasetIndex].label || "",
                            n = t.datasets[e.datasetIndex].data[e.index];
                        return a + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")"
                    }
                }
            }
        }), e.exports = function(e) {
            e.controllers.bubble = e.DatasetController.extend({
                dataElementType: r.Point,
                update: function(e) {
                    var t = this,
                        a = t.getMeta(),
                        n = a.data;
                    i.each(n, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = n.getMeta(),
                        i = e.custom || {},
                        o = n.getScaleForId(r.xAxisID),
                        s = n.getScaleForId(r.yAxisID),
                        d = n._resolveElementOptions(e, t),
                        u = n.getDataset().data[t],
                        l = n.index,
                        c = a ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, t, l),
                        m = a ? s.getBasePixel() : s.getPixelForValue(u, t, l);
                    e._xScale = o, e._yScale = s, e._options = d, e._datasetIndex = l, e._index = t, e._model = {
                        backgroundColor: d.backgroundColor,
                        borderColor: d.borderColor,
                        borderWidth: d.borderWidth,
                        hitRadius: d.hitRadius,
                        pointStyle: d.pointStyle,
                        radius: a ? 0 : d.radius,
                        skip: i.skip || isNaN(c) || isNaN(m),
                        x: c,
                        y: m
                    }, e.pivot()
                },
                setHoverStyle: function(e) {
                    var t = e._model,
                        a = e._options;
                    t.backgroundColor = i.valueOrDefault(a.hoverBackgroundColor, i.getHoverColor(a.backgroundColor)), t.borderColor = i.valueOrDefault(a.hoverBorderColor, i.getHoverColor(a.borderColor)), t.borderWidth = i.valueOrDefault(a.hoverBorderWidth, a.borderWidth), t.radius = a.radius + a.hoverRadius
                },
                removeHoverStyle: function(e) {
                    var t = e._model,
                        a = e._options;
                    t.backgroundColor = a.backgroundColor, t.borderColor = a.borderColor, t.borderWidth = a.borderWidth, t.radius = a.radius
                },
                _resolveElementOptions: function(e, t) {
                    var a, n, r, o = this,
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
                    for (a = 0, n = p.length; a < n; ++a) r = p[a], h[r] = m([l[r], u[r], c[r]], f, t);
                    return h.radius = m([l.radius, _ ? _.r : void 0, u.radius, c.radius], f, t), h
                }
            })
        }
    },
    1534: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(879),
            i = a(822);
        n._set("doughnut", {
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
                var a = e.data,
                    n = a.datasets,
                    r = a.labels;
                if (n.length)
                    for (var i = 0; i < n[0].data.length; ++i) t.push('<li><span style="background-color:' + n[0].backgroundColor[i] + '"></span>'), r[i] && t.push(r[i]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(a, n) {
                            var r = e.getDatasetMeta(0),
                                o = t.datasets[0],
                                s = r.data[n],
                                d = s && s.custom || {},
                                u = i.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: d.backgroundColor ? d.backgroundColor : u(o.backgroundColor, n, l.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : u(o.borderColor, n, l.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : u(o.borderWidth, n, l.borderWidth),
                                hidden: isNaN(o.data[n]) || r.data[n].hidden,
                                index: n
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, r, i = t.index,
                        o = this.chart;
                    for (a = 0, n = (o.data.datasets || []).length; a < n; ++a) r = o.getDatasetMeta(a), r.data[i] && (r.data[i].hidden = !r.data[i].hidden);
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
                        var a = t.labels[e.index],
                            n = ": " + t.datasets[e.datasetIndex].data[e.index];
                        return i.isArray(a) ? (a = a.slice(), a[0] += n) : a += n, a
                    }
                }
            }
        }), n._set("pie", i.clone(n.doughnut)), n._set("pie", {
            cutoutPercentage: 0
        }), e.exports = function(e) {
            e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                dataElementType: r.Arc,
                linkScales: i.noop,
                getRingIndex: function(e) {
                    for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t;
                    return t
                },
                update: function(e) {
                    var t = this,
                        a = t.chart,
                        n = a.chartArea,
                        r = a.options,
                        o = r.elements.arc,
                        s = n.right - n.left - o.borderWidth,
                        d = n.bottom - n.top - o.borderWidth,
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
                            g = h <= 0 && f >= 0 || h <= 2 * Math.PI && 2 * Math.PI <= f,
                            M = h <= .5 * Math.PI && .5 * Math.PI <= f || h <= 2.5 * Math.PI && 2.5 * Math.PI <= f,
                            v = h <= -Math.PI && -Math.PI <= f || h <= Math.PI && Math.PI <= f,
                            b = h <= .5 * -Math.PI && .5 * -Math.PI <= f || h <= 1.5 * Math.PI && 1.5 * Math.PI <= f,
                            L = m / 100,
                            Y = {
                                x: v ? -1 : Math.min(p.x * (p.x < 0 ? 1 : L), y.x * (y.x < 0 ? 1 : L)),
                                y: b ? -1 : Math.min(p.y * (p.y < 0 ? 1 : L), y.y * (y.y < 0 ? 1 : L))
                            },
                            D = {
                                x: g ? 1 : Math.max(p.x * (p.x > 0 ? 1 : L), y.x * (y.x > 0 ? 1 : L)),
                                y: M ? 1 : Math.max(p.y * (p.y > 0 ? 1 : L), y.y * (y.y > 0 ? 1 : L))
                            },
                            k = {
                                width: .5 * (D.x - Y.x),
                                height: .5 * (D.y - Y.y)
                            };
                        u = Math.min(s / k.width, d / k.height), l = {
                            x: -.5 * (D.x + Y.x),
                            y: -.5 * (D.y + Y.y)
                        }
                    }
                    a.borderWidth = t.getMaxBorderWidth(c.data), a.outerRadius = Math.max((u - a.borderWidth) / 2, 0), a.innerRadius = Math.max(m ? a.outerRadius / 100 * m : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = l.x * a.outerRadius, a.offsetY = l.y * a.outerRadius, c.total = t.calculateTotal(), t.outerRadius = a.outerRadius - a.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - a.radiusLength, 0), i.each(c.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = n.chart,
                        o = r.chartArea,
                        s = r.options,
                        d = s.animation,
                        u = (o.left + o.right) / 2,
                        l = (o.top + o.bottom) / 2,
                        c = s.rotation,
                        m = s.rotation,
                        _ = n.getDataset(),
                        h = a && d.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(_.data[t]) * (s.circumference / (2 * Math.PI)),
                        f = a && d.animateScale ? 0 : n.innerRadius,
                        p = a && d.animateScale ? 0 : n.outerRadius,
                        y = i.valueAtIndexOrDefault;
                    i.extend(e, {
                        _datasetIndex: n.index,
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
                    var g = e._model;
                    this.removeHoverStyle(e), a && d.animateRotate || (g.startAngle = 0 === t ? s.rotation : n.getMeta().data[t - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), e.pivot()
                },
                removeHoverStyle: function(t) {
                    e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                },
                calculateTotal: function() {
                    var e, t = this.getDataset(),
                        a = this.getMeta(),
                        n = 0;
                    return i.each(a.data, function(a, r) {
                        e = t.data[r], isNaN(e) || a.hidden || (n += Math.abs(e))
                    }), n
                },
                calculateCircumference: function(e) {
                    var t = this.getMeta().total;
                    return t > 0 && !isNaN(e) ? 2 * Math.PI * (e / t) : 0
                },
                getMaxBorderWidth: function(e) {
                    for (var t, a, n = 0, r = this.index, i = e.length, o = 0; o < i; o++) t = e[o]._model ? e[o]._model.borderWidth : 0, a = e[o]._chart ? e[o]._chart.config.data.datasets[r].hoverBorderWidth : 0, n = t > n ? t : n, n = a > n ? a : n;
                    return n
                }
            })
        }
    },
    1535: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(879),
            i = a(822);
        n._set("line", {
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
                    var a, n, r, o = this,
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
                        }, d.pivot()), a = 0, n = u.length; a < n; ++a) o.updateElement(u[a], a, e);
                    for (h && 0 !== d._model.tension && o.updateBezierControlPoints(), a = 0, n = u.length; a < n; ++a) u[a].pivot()
                },
                getPointBackgroundColor: function(e, t) {
                    var a = this.chart.options.elements.point.backgroundColor,
                        n = this.getDataset(),
                        r = e.custom || {};
                    return r.backgroundColor ? a = r.backgroundColor : n.pointBackgroundColor ? a = i.valueAtIndexOrDefault(n.pointBackgroundColor, t, a) : n.backgroundColor && (a = n.backgroundColor), a
                },
                getPointBorderColor: function(e, t) {
                    var a = this.chart.options.elements.point.borderColor,
                        n = this.getDataset(),
                        r = e.custom || {};
                    return r.borderColor ? a = r.borderColor : n.pointBorderColor ? a = i.valueAtIndexOrDefault(n.pointBorderColor, t, a) : n.borderColor && (a = n.borderColor), a
                },
                getPointBorderWidth: function(e, t) {
                    var a = this.chart.options.elements.point.borderWidth,
                        n = this.getDataset(),
                        r = e.custom || {};
                    return isNaN(r.borderWidth) ? !isNaN(n.pointBorderWidth) || i.isArray(n.pointBorderWidth) ? a = i.valueAtIndexOrDefault(n.pointBorderWidth, t, a) : isNaN(n.borderWidth) || (a = n.borderWidth) : a = r.borderWidth, a
                },
                updateElement: function(e, t, a) {
                    var n, r, o = this,
                        s = o.getMeta(),
                        d = e.custom || {},
                        u = o.getDataset(),
                        l = o.index,
                        c = u.data[t],
                        m = o.getScaleForId(s.yAxisID),
                        _ = o.getScaleForId(s.xAxisID),
                        h = o.chart.options.elements.point;
                    void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = _.getPixelForValue("object" == typeof c ? c : NaN, t, l), r = a ? m.getBasePixel() : o.calculatePointY(c, t, l), e._xScale = _, e._yScale = m, e._datasetIndex = l, e._index = t, e._model = {
                        x: n,
                        y: r,
                        skip: d.skip || isNaN(n) || isNaN(r),
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
                calculatePointY: function(e, t, a) {
                    var n, r, i, o = this,
                        s = o.chart,
                        d = o.getMeta(),
                        u = o.getScaleForId(d.yAxisID),
                        l = 0,
                        c = 0;
                    if (u.options.stacked) {
                        for (n = 0; n < a; n++)
                            if (r = s.data.datasets[n], i = s.getDatasetMeta(n), "line" === i.type && i.yAxisID === u.id && s.isDatasetVisible(n)) {
                                var m = Number(u.getRightValue(r.data[t]));
                                m < 0 ? c += m || 0 : l += m || 0
                            }
                        var _ = Number(u.getRightValue(e));
                        return _ < 0 ? u.getPixelForValue(c + _) : u.getPixelForValue(l + _)
                    }
                    return u.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    function e(e, t, a) {
                        return Math.max(Math.min(e, a), t)
                    }
                    var t, a, n, r, o, s = this,
                        d = s.getMeta(),
                        u = s.chart.chartArea,
                        l = d.data || [];
                    if (d.dataset._model.spanGaps && (l = l.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === d.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(l);
                    else
                        for (t = 0, a = l.length; t < a; ++t) n = l[t], r = n._model, o = i.splineCurve(i.previousItem(l, t)._model, r, i.nextItem(l, t)._model, d.dataset._model.tension), r.controlPointPreviousX = o.previous.x, r.controlPointPreviousY = o.previous.y, r.controlPointNextX = o.next.x, r.controlPointNextY = o.next.y;
                    if (s.chart.options.elements.line.capBezierPoints)
                        for (t = 0, a = l.length; t < a; ++t) r = l[t]._model, r.controlPointPreviousX = e(r.controlPointPreviousX, u.left, u.right), r.controlPointPreviousY = e(r.controlPointPreviousY, u.top, u.bottom), r.controlPointNextX = e(r.controlPointNextX, u.left, u.right), r.controlPointNextY = e(r.controlPointNextY, u.top, u.bottom)
                },
                draw: function() {
                    var e = this,
                        a = e.chart,
                        n = e.getMeta(),
                        r = n.data || [],
                        o = a.chartArea,
                        s = r.length,
                        d = 0;
                    for (i.canvas.clipArea(a.ctx, o), t(e.getDataset(), a.options) && n.dataset.draw(), i.canvas.unclipArea(a.ctx); d < s; ++d) r[d].draw(o)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        n = e.custom || {},
                        r = e._model;
                    r.radius = n.hoverRadius || i.valueAtIndexOrDefault(t.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor || i.valueAtIndexOrDefault(t.pointHoverBackgroundColor, a, i.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor || i.valueAtIndexOrDefault(t.pointHoverBorderColor, a, i.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth || i.valueAtIndexOrDefault(t.pointHoverBorderWidth, a, r.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this,
                        a = t.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        r = e.custom || {},
                        o = e._model;
                    void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), o.radius = r.radius || i.valueAtIndexOrDefault(a.pointRadius, n, t.chart.options.elements.point.radius), o.backgroundColor = t.getPointBackgroundColor(e, n), o.borderColor = t.getPointBorderColor(e, n), o.borderWidth = t.getPointBorderWidth(e, n)
                }
            })
        }
    },
    1536: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(879),
            i = a(822);
        n._set("polarArea", {
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
                var a = e.data,
                    n = a.datasets,
                    r = a.labels;
                if (n.length)
                    for (var i = 0; i < n[0].data.length; ++i) t.push('<li><span style="background-color:' + n[0].backgroundColor[i] + '"></span>'), r[i] && t.push(r[i]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(a, n) {
                            var r = e.getDatasetMeta(0),
                                o = t.datasets[0],
                                s = r.data[n],
                                d = s.custom || {},
                                u = i.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: d.backgroundColor ? d.backgroundColor : u(o.backgroundColor, n, l.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : u(o.borderColor, n, l.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : u(o.borderWidth, n, l.borderWidth),
                                hidden: isNaN(o.data[n]) || r.data[n].hidden,
                                index: n
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, r, i = t.index,
                        o = this.chart;
                    for (a = 0, n = (o.data.datasets || []).length; a < n; ++a) r = o.getDatasetMeta(a), r.data[i].hidden = !r.data[i].hidden;
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
                        a = t.chart,
                        n = a.chartArea,
                        r = t.getMeta(),
                        o = a.options,
                        s = o.elements.arc,
                        d = Math.min(n.right - n.left, n.bottom - n.top);
                    a.outerRadius = Math.max((d - s.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(o.cutoutPercentage ? a.outerRadius / 100 * o.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), t.outerRadius = a.outerRadius - a.radiusLength * t.index, t.innerRadius = t.outerRadius - a.radiusLength, r.count = t.countVisibleElements(), i.each(r.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    for (var n = this, r = n.chart, o = n.getDataset(), s = r.options, d = s.animation, u = r.scale, l = r.data.labels, c = n.calculateCircumference(o.data[t]), m = u.xCenter, _ = u.yCenter, h = 0, f = n.getMeta(), p = 0; p < t; ++p) isNaN(o.data[p]) || f.data[p].hidden || ++h;
                    var y = s.startAngle,
                        g = e.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[t]),
                        M = y + c * h,
                        v = M + (e.hidden ? 0 : c),
                        b = d.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[t]);
                    i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: u,
                        _model: {
                            x: m,
                            y: _,
                            innerRadius: 0,
                            outerRadius: a ? b : g,
                            startAngle: a && d.animateRotate ? y : M,
                            endAngle: a && d.animateRotate ? y : v,
                            label: i.valueAtIndexOrDefault(l, t, l[t])
                        }
                    }), n.removeHoverStyle(e), e.pivot()
                },
                removeHoverStyle: function(t) {
                    e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                },
                countVisibleElements: function() {
                    var e = this.getDataset(),
                        t = this.getMeta(),
                        a = 0;
                    return i.each(t.data, function(t, n) {
                        isNaN(e.data[n]) || t.hidden || a++
                    }), a
                },
                calculateCircumference: function(e) {
                    var t = this.getMeta().count;
                    return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
                }
            })
        }
    },
    1537: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(879),
            i = a(822);
        n._set("radar", {
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
                        a = t.getMeta(),
                        n = a.dataset,
                        r = a.data,
                        o = n.custom || {},
                        s = t.getDataset(),
                        d = t.chart.options.elements.line,
                        u = t.chart.scale;
                    void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), i.extend(a.dataset, {
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
                    }), a.dataset.pivot(), i.each(r, function(a, n) {
                        t.updateElement(a, n, e)
                    }, t), t.updateBezierControlPoints()
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = e.custom || {},
                        o = n.getDataset(),
                        s = n.chart.scale,
                        d = n.chart.options.elements.point,
                        u = s.getPointPositionForValue(t, o.data[t]);
                    void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: s,
                        _model: {
                            x: a ? s.xCenter : u.x,
                            y: a ? s.yCenter : u.y,
                            tension: r.tension ? r.tension : i.valueOrDefault(o.lineTension, n.chart.options.elements.line.tension),
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
                    i.each(t.data, function(a, n) {
                        var r = a._model,
                            o = i.splineCurve(i.previousItem(t.data, n, !0)._model, r, i.nextItem(t.data, n, !0)._model, r.tension);
                        r.controlPointPreviousX = Math.max(Math.min(o.previous.x, e.right), e.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, e.bottom), e.top), r.controlPointNextX = Math.max(Math.min(o.next.x, e.right), e.left), r.controlPointNextY = Math.max(Math.min(o.next.y, e.bottom), e.top), a.pivot()
                    })
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e.custom || {},
                        n = e._index,
                        r = e._model;
                    r.radius = a.hoverRadius ? a.hoverRadius : i.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : i.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, i.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor ? a.hoverBorderColor : i.valueAtIndexOrDefault(t.pointHoverBorderColor, n, i.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : i.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, r.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e.custom || {},
                        n = e._index,
                        r = e._model,
                        o = this.chart.options.elements.point;
                    r.radius = a.radius ? a.radius : i.valueAtIndexOrDefault(t.pointRadius, n, o.radius), r.backgroundColor = a.backgroundColor ? a.backgroundColor : i.valueAtIndexOrDefault(t.pointBackgroundColor, n, o.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : i.valueAtIndexOrDefault(t.pointBorderColor, n, o.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : i.valueAtIndexOrDefault(t.pointBorderWidth, n, o.borderWidth)
                }
            })
        }
    },
    1538: function(e, t, a) {
        "use strict";
        a(827)._set("scatter", {
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
    1539: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Bar = function(t, a) {
                return a.type = "bar", new e(t, a)
            }
        }
    },
    1540: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Bubble = function(t, a) {
                return a.type = "bubble", new e(t, a)
            }
        }
    },
    1541: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Doughnut = function(t, a) {
                return a.type = "doughnut", new e(t, a)
            }
        }
    },
    1542: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Line = function(t, a) {
                return a.type = "line", new e(t, a)
            }
        }
    },
    1543: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.PolarArea = function(t, a) {
                return a.type = "polarArea", new e(t, a)
            }
        }
    },
    1544: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Radar = function(t, a) {
                return a.type = "radar", new e(t, a)
            }
        }
    },
    1545: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Scatter = function(t, a) {
                return a.type = "scatter", new e(t, a)
            }
        }
    },
    1546: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(879),
            i = a(822);
        n._set("global", {
            plugins: {
                filler: {
                    propagate: !0
                }
            }
        }), e.exports = function() {
            function e(e, t, a) {
                var n, r = e._model || {},
                    i = r.fill;
                if (void 0 === i && (i = !!r.backgroundColor), !1 === i || null === i) return !1;
                if (!0 === i) return "origin";
                if (n = parseFloat(i, 10), isFinite(n) && Math.floor(n) === n) return "-" !== i[0] && "+" !== i[0] || (n = t + n), !(n === t || n < 0 || n >= a) && n;
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
                var t, a = e.el._model || {},
                    n = e.el._scale || {},
                    r = e.fill,
                    i = null;
                if (isFinite(r)) return null;
                if ("start" === r ? i = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === r ? i = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? i = a.scaleZero : n.getBasePosition ? i = n.getBasePosition() : n.getBasePixel && (i = n.getBasePixel()), void 0 !== i && null !== i) {
                    if (void 0 !== i.x && void 0 !== i.y) return i;
                    if ("number" == typeof i && isFinite(i)) return t = n.isHorizontal(), {
                        x: t ? i : null,
                        y: t ? null : i
                    }
                }
                return null
            }

            function a(e, t, a) {
                var n, r = e[t],
                    i = r.fill,
                    o = [t];
                if (!a) return i;
                for (; !1 !== i && -1 === o.indexOf(i);) {
                    if (!isFinite(i)) return i;
                    if (!(n = e[i])) return !1;
                    if (n.visible) return i;
                    o.push(i), i = n.fill
                }
                return !1
            }

            function o(e) {
                var t = e.fill,
                    a = "dataset";
                return !1 === t ? null : (isFinite(t) || (a = "boundary"), l[a](e))
            }

            function s(e) {
                return e && !e.skip
            }

            function d(e, t, a, n, r) {
                var o;
                if (n && r) {
                    for (e.moveTo(t[0].x, t[0].y), o = 1; o < n; ++o) i.canvas.lineTo(e, t[o - 1], t[o]);
                    for (e.lineTo(a[r - 1].x, a[r - 1].y), o = r - 1; o > 0; --o) i.canvas.lineTo(e, a[o], a[o - 1], !0)
                }
            }

            function u(e, t, a, n, r, i) {
                var o, u, l, c, m, _, h, f = t.length,
                    p = n.spanGaps,
                    y = [],
                    g = [],
                    M = 0,
                    v = 0;
                for (e.beginPath(), o = 0, u = f + !!i; o < u; ++o) l = o % f, c = t[l]._view, m = a(c, l, n), _ = s(c), h = s(m), _ && h ? (M = y.push(c), v = g.push(m)) : M && v && (p ? (_ && y.push(c), h && g.push(m)) : (d(e, y, g, M, v), M = v = 0, y = [], g = []));
                d(e, y, g, M, v), e.closePath(), e.fillStyle = r, e.fill()
            }
            var l = {
                dataset: function(e) {
                    var t = e.fill,
                        a = e.chart,
                        n = a.getDatasetMeta(t),
                        r = n && a.isDatasetVisible(t),
                        i = r && n.dataset._children || [],
                        o = i.length || 0;
                    return o ? function(e, t) {
                        return t < o && i[t]._view || null
                    } : null
                },
                boundary: function(e) {
                    var t = e.boundary,
                        a = t ? t.x : null,
                        n = t ? t.y : null;
                    return function(e) {
                        return {
                            x: null === a ? e.x : a,
                            y: null === n ? e.y : n
                        }
                    }
                }
            };
            return {
                id: "filler",
                afterDatasetsUpdate: function(n, i) {
                    var s, d, u, l, c = (n.data.datasets || []).length,
                        m = i.propagate,
                        _ = [];
                    for (d = 0; d < c; ++d) s = n.getDatasetMeta(d), u = s.dataset, l = null, u && u._model && u instanceof r.Line && (l = {
                        visible: n.isDatasetVisible(d),
                        fill: e(u, d, c),
                        chart: n,
                        el: u
                    }), s.$filler = l, _.push(l);
                    for (d = 0; d < c; ++d)(l = _[d]) && (l.fill = a(_, d, m), l.boundary = t(l), l.mapper = o(l))
                },
                beforeDatasetDraw: function(e, t) {
                    var a = t.meta.$filler;
                    if (a) {
                        var r = e.ctx,
                            o = a.el,
                            s = o._view,
                            d = o._children || [],
                            l = a.mapper,
                            c = s.backgroundColor || n.global.defaultColor;
                        l && c && d.length && (i.canvas.clipArea(r, e.chartArea), u(r, d, l, s, c, o._loop), i.canvas.unclipArea(r))
                    }
                }
            }
        }
    },
    1547: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(851),
            i = a(822);
        n._set("global", {
            legend: {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                weight: 1e3,
                onClick: function(e, t) {
                    var a = t.datasetIndex,
                        n = this.chart,
                        r = n.getDatasetMeta(a);
                    r.hidden = null === r.hidden ? !n.data.datasets[a].hidden : null, n.update()
                },
                onHover: null,
                labels: {
                    boxWidth: 40,
                    padding: 10,
                    generateLabels: function(e) {
                        var t = e.data;
                        return i.isArray(t.datasets) ? t.datasets.map(function(t, a) {
                            return {
                                text: t.label,
                                fillStyle: i.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                hidden: !e.isDatasetVisible(a),
                                lineCap: t.borderCapStyle,
                                lineDash: t.borderDash,
                                lineDashOffset: t.borderDashOffset,
                                lineJoin: t.borderJoinStyle,
                                lineWidth: t.borderWidth,
                                strokeStyle: t.borderColor,
                                pointStyle: t.pointStyle,
                                datasetIndex: a
                            }
                        }, this) : []
                    }
                }
            },
            legendCallback: function(e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                for (var a = 0; a < e.data.datasets.length; a++) t.push('<li><span style="background-color:' + e.data.datasets[a].backgroundColor + '"></span>'), e.data.datasets[a].label && t.push(e.data.datasets[a].label), t.push("</li>");
                return t.push("</ul>"), t.join("")
            }
        }), e.exports = function(e) {
            function t(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            function a(t, a) {
                var n = new e.Legend({
                    ctx: t.ctx,
                    options: a,
                    chart: t
                });
                o.configure(t, n, a), o.addBox(t, n), t.legend = n
            }
            var o = e.layoutService,
                s = i.noop;
            return e.Legend = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: s,
                update: function(e, t, a) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
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
                        a = i.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (a = a.filter(function(a) {
                        return t.filter(a, e.chart.data)
                    })), e.options.reverse && a.reverse(), e.legendItems = a
                },
                afterBuildLabels: s,
                beforeFit: s,
                fit: function() {
                    var e = this,
                        a = e.options,
                        r = a.labels,
                        o = a.display,
                        s = e.ctx,
                        d = n.global,
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
                                g = e.legendItems.length ? l + r.padding : 0;
                            s.textAlign = "left", s.textBaseline = "top", i.each(e.legendItems, function(a, n) {
                                var i = t(r, l),
                                    o = i + l / 2 + s.measureText(a.text).width;
                                y[y.length - 1] + o + r.padding >= e.width && (g += l + r.padding, y[y.length] = e.left), h[n] = {
                                    left: 0,
                                    top: 0,
                                    width: o,
                                    height: l
                                }, y[y.length - 1] += o + r.padding
                            }), f.height += g
                        } else {
                            var M = r.padding,
                                v = e.columnWidths = [],
                                b = r.padding,
                                L = 0,
                                Y = 0,
                                D = l + M;
                            i.each(e.legendItems, function(e, a) {
                                var n = t(r, l),
                                    i = n + l / 2 + s.measureText(e.text).width;
                                Y + D > f.height && (b += L + r.padding, v.push(L), L = 0, Y = 0), L = Math.max(L, i), Y += D, h[a] = {
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
                        a = e.options,
                        r = a.labels,
                        o = n.global,
                        s = o.elements.line,
                        d = e.width,
                        u = e.lineWidths;
                    if (a.display) {
                        var l, c = e.ctx,
                            m = i.valueOrDefault,
                            _ = m(r.fontColor, o.defaultFontColor),
                            h = m(r.fontSize, o.defaultFontSize),
                            f = m(r.fontStyle, o.defaultFontStyle),
                            p = m(r.fontFamily, o.defaultFontFamily),
                            y = i.fontString(h, f, p);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = _, c.fillStyle = _, c.font = y;
                        var g = t(r, h),
                            M = e.legendHitBoxes,
                            v = function(e, t, n) {
                                if (!(isNaN(g) || g <= 0)) {
                                    c.save(), c.fillStyle = m(n.fillStyle, o.defaultColor), c.lineCap = m(n.lineCap, s.borderCapStyle), c.lineDashOffset = m(n.lineDashOffset, s.borderDashOffset), c.lineJoin = m(n.lineJoin, s.borderJoinStyle), c.lineWidth = m(n.lineWidth, s.borderWidth), c.strokeStyle = m(n.strokeStyle, o.defaultColor);
                                    var r = 0 === m(n.lineWidth, s.borderWidth);
                                    if (c.setLineDash && c.setLineDash(m(n.lineDash, s.borderDash)), a.labels && a.labels.usePointStyle) {
                                        var d = h * Math.SQRT2 / 2,
                                            u = d / Math.SQRT2,
                                            l = e + u,
                                            _ = t + u;
                                        i.canvas.drawPoint(c, n.pointStyle, d, l, _)
                                    } else r || c.strokeRect(e, t, g, h), c.fillRect(e, t, g, h);
                                    c.restore()
                                }
                            },
                            b = function(e, t, a, n) {
                                var r = h / 2,
                                    i = g + r + e,
                                    o = t + r;
                                c.fillText(a.text, i, o), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, o), c.lineTo(i + n, o), c.stroke())
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
                        i.each(e.legendItems, function(t, a) {
                            var n = c.measureText(t.text).width,
                                i = g + h / 2 + n,
                                o = l.x,
                                s = l.y;
                            L ? o + i >= d && (s = l.y += Y, l.line++, o = l.x = e.left + (d - u[l.line]) / 2) : s + Y > e.bottom && (o = l.x = o + e.columnWidths[l.line] + r.padding, s = l.y = e.top + r.padding, l.line++), v(o, s, t), M[a].left = o, M[a].top = s, b(o, s, t, n), L ? l.x += i + r.padding : l.y += Y
                        })
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        a = t.options,
                        n = "mouseup" === e.type ? "click" : e.type,
                        r = !1;
                    if ("mousemove" === n) {
                        if (!a.onHover) return
                    } else {
                        if ("click" !== n) return;
                        if (!a.onClick) return
                    }
                    var i = e.x,
                        o = e.y;
                    if (i >= t.left && i <= t.right && o >= t.top && o <= t.bottom)
                        for (var s = t.legendHitBoxes, d = 0; d < s.length; ++d) {
                            var u = s[d];
                            if (i >= u.left && i <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                                if ("click" === n) {
                                    a.onClick.call(t, e.native, t.legendItems[d]), r = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    a.onHover.call(t, e.native, t.legendItems[d]), r = !0;
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
                    t && a(e, t)
                },
                beforeUpdate: function(e) {
                    var t = e.options.legend,
                        r = e.legend;
                    t ? (i.mergeIf(t, n.global.legend), r ? (o.configure(e, r, t), r.options = t) : a(e, t)) : r && (o.removeBox(e, r), delete e.legend)
                },
                afterEvent: function(e, t) {
                    var a = e.legend;
                    a && a.handleEvent(t)
                }
            }
        }
    },
    1548: function(e, t, a) {
        "use strict";
        var n = a(827),
            r = a(851),
            i = a(822);
        n._set("global", {
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
            function t(t, n) {
                var r = new e.Title({
                    ctx: t.ctx,
                    options: n,
                    chart: t
                });
                a.configure(t, r, n), a.addBox(t, r), t.titleBlock = r
            }
            var a = e.layoutService,
                o = i.noop;
            return e.Title = r.extend({
                initialize: function(e) {
                    var t = this;
                    i.extend(t, e), t.legendHitBoxes = []
                },
                beforeUpdate: o,
                update: function(e, t, a) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
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
                        a = e.options,
                        r = a.display,
                        o = t(a.fontSize, n.global.defaultFontSize),
                        s = e.minSize,
                        d = i.isArray(a.text) ? a.text.length : 1,
                        u = i.options.toLineHeight(a.lineHeight, o),
                        l = r ? d * u + 2 * a.padding : 0;
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
                        a = i.valueOrDefault,
                        r = e.options,
                        o = n.global;
                    if (r.display) {
                        var s, d, u, l = a(r.fontSize, o.defaultFontSize),
                            c = a(r.fontStyle, o.defaultFontStyle),
                            m = a(r.fontFamily, o.defaultFontFamily),
                            _ = i.fontString(l, c, m),
                            h = i.options.toLineHeight(r.lineHeight, l),
                            f = h / 2 + r.padding,
                            p = 0,
                            y = e.top,
                            g = e.left,
                            M = e.bottom,
                            v = e.right;
                        t.fillStyle = a(r.fontColor, o.defaultFontColor), t.font = _, e.isHorizontal() ? (d = g + (v - g) / 2, u = y + f, s = v - g) : (d = "left" === r.position ? g + f : v - f, u = y + (M - y) / 2, s = M - y, p = Math.PI * ("left" === r.position ? -.5 : .5)), t.save(), t.translate(d, u), t.rotate(p), t.textAlign = "center", t.textBaseline = "middle";
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
                    var a = e.options.title;
                    a && t(e, a)
                },
                beforeUpdate: function(r) {
                    var o = r.options.title,
                        s = r.titleBlock;
                    o ? (i.mergeIf(o, n.global.title), s ? (a.configure(r, s, o), s.options = o) : t(r, o)) : s && (e.layoutService.removeBox(r, s), delete r.titleBlock)
                }
            }
        }
    },
    2077: function(e, t, a) {
        "use strict";

        function n(e) {
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
        var o, s = a(6),
            d = a(9),
            u = a(54),
            l = a(39),
            c = a(17),
            m = a(0),
            _ = a(1),
            h = a(22),
            f = a(821),
            p = a(5),
            y = a(28),
            g = a(3),
            M = function(e) {
                return _.createElement(y.b, null, _.createElement(g.U, {
                    display: g.H.Flex,
                    flexDirection: g.J.Column,
                    alignItems: g.c.Center,
                    padding: 2
                }, _.createElement(g.U, {
                    display: g.H.Flex,
                    padding: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, _.createElement(g._21, {
                    "data-test-selector": e.titleSelector,
                    type: g._26.H1
                }, e.title)), e.children))
            },
            v = M;
        ! function(e) {
            e.BasicInfo = "basic-info", e.Customize = "customize", e.Members = "members", e.FeaturedChannels = "featured-channels", e.Stats = "stats", e.Revenue = "revenue"
        }(o || (o = {}));
        var b, L = a(2),
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
            D = function() {
                return _.createElement(v, {
                    title: Y(o.BasicInfo),
                    titleSelector: "basic-info-page-title"
                })
            },
            k = Object(p.c)("BasicInfoPage", {
                destination: f.a.TeamsDashboardBasicInfo,
                autoReportInteractive: !0
            })(D),
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
            j = (a(1274), function(e) {
                var t = function(e) {
                    var t = Object(L.d)("{displayName}'s Avatar Image", {
                        displayName: e.member.displayName
                    }, "TeamsDashboard");
                    return _.createElement(g._17, {
                        display: g.H.Flex,
                        flexDirection: g.J.Row,
                        padding: 1,
                        borderBottom: !0,
                        fullWidth: !0
                    }, _.createElement(g.l, {
                        imageSrc: e.member.avatarSrc,
                        imageAlt: t,
                        size: 30
                    }), _.createElement(g.U, {
                        display: g.H.Flex,
                        alignSelf: g.d.Center,
                        margin: {
                            left: 1
                        }
                    }, _.createElement(g._21, null, e.member.displayName)))
                };
                return _.createElement(g.U, {
                    fullWidth: !0,
                    margin: {
                        top: 2,
                        bottom: 2
                    }
                }, _.createElement(g._21, {
                    type: g._26.H3
                }, e.header), e.members.length ? function(e) {
                    return _.createElement(y.b, null, _.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Column
                    }, e.map(function(e) {
                        return _.createElement(t, {
                            key: e.id,
                            member: e
                        })
                    })))
                }(e.members) : function() {
                    return _.createElement(g._21, null, "No team members yet.")
                }())
            }),
            O = a(912),
            H = this,
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
                return m.__awaiter(H, void 0, void 0, function() {
                    var a, n, r, i;
                    return m.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return a = t ? "?" + t + "=true" : "", n = "/v5/teams/" + e + "/dashboard/members" + a, [4, Object(O.c)({
                                    path: n
                                })];
                            case 1:
                                return r = o.sent(), i = r.body ? r.body.channels : [], [2, C(i)]
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
            W = function(e) {
                return Object(L.c)(e, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC"
                })
            },
            I = function(e) {
                return Object(L.c)(e, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC"
                })
            },
            z = function(e) {
                return Object(L.c)(e, {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    timeZone: "UTC"
                })
            },
            R = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth()))
            },
            N = function(e, t) {
                var a = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() + 1));
                return a.getTime() > t.getTime() ? t : a
            },
            B = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() - 1))
            },
            V = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleChange = function(e) {
                        var t = new Date(e.currentTarget.value),
                            n = R(t),
                            r = N(n, a.validatedCurrentDate);
                        a.props.onMonthSelection(n, r)
                    }, a.getDropdownOptions = function(e, t) {
                        for (var a = [], n = R(e); n >= t; n = B(n)) {
                            var r = n.toISOString();
                            a.push(_.createElement("option", {
                                key: r,
                                value: r
                            }, Object(L.c)(n, {
                                month: "long",
                                year: "numeric",
                                timeZone: "UTC"
                            })))
                        }
                        return a
                    }, a.validatedCurrentDate = t.currentDate < t.earliestDate ? t.earliestDate : t.currentDate, a
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return _.createElement(g.U, {
                        className: "month-select-menu"
                    }, _.createElement(g._14, {
                        onChange: this.handleChange
                    }, this.getDropdownOptions(this.validatedCurrentDate, this.props.earliestDate)))
                }, t = m.__decorate([Object(p.c)("MonthSelectMenuComponent")], t)
            }(_.Component),
            U = V,
            J = function(e) {
                var t = Math.floor(e.amount),
                    a = Math.round(e.amount % 1 * 100);
                return _.createElement(g.U, {
                    display: g.H.Flex,
                    flexDirection: g.J.Column,
                    margin: 1
                }, _.createElement(g.U, {
                    display: g.H.Flex,
                    padding: e.magnified ? {
                        bottom: 1
                    } : {}
                }, _.createElement(g._21, {
                    color: g.F.Alt2,
                    type: g._26.H5
                }, e.title)), _.createElement(g.U, {
                    display: g.H.Flex,
                    flexDirection: g.J.Row,
                    alignItems: g.c.Start
                }, _.createElement(g._21, {
                    type: e.magnified ? g._26.H4 : g._26.H5
                }, "$ "), _.createElement(g._21, {
                    type: e.magnified ? g._26.H1 : g._26.H2
                }, Object(L.e)(t)), _.createElement(g._21, {
                    type: e.magnified ? g._26.H4 : g._26.H5
                }, Object(L.e)(a, {
                    minimumIntegerDigits: 2
                }))))
            },
            G = function(e) {
                var t = e.revenues.reduce(function(e, t) {
                    return e + t.amount
                }, 0);
                return _.createElement(g._17, {
                    borderMarked: !0,
                    border: !0,
                    fullWidth: !0,
                    background: g.m.Base,
                    display: g.H.Flex,
                    justifyContent: g.T.Between,
                    alignItems: g.c.Center,
                    padding: 1
                }, _.createElement(J, {
                    title: e.totalTitle + " " + e.summaryItemTitleSuffix,
                    amount: t,
                    magnified: !0
                }), e.revenues.map(function(t, a) {
                    return _.createElement(J, {
                        key: a,
                        title: t.title + " " + e.summaryItemTitleSuffix,
                        amount: t.amount
                    })
                }))
            },
            q = a(47),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderMenu = function() {
                        if (t.props.isLoading) return _.createElement(g._1, {
                            width: 180,
                            height: 30
                        });
                        var e = t.props.members.filter(function(e) {
                                return e.checked
                            }).length,
                            a = t.props.members.length > 100 ? "Select First 100" : "Select All";
                        return _.createElement(q.a, {
                            onToggle: t.toggleOpenClose
                        }, _.createElement(g.u, {
                            dropdown: !0,
                            type: g.z.Hollow
                        }, Object(L.d)("{checkedCount, plural, one {Stats for # Team Member} other {Stats for # Team Members}}", {
                            checkedCount: e
                        }, "TeamsDashboard")), _.createElement(g.p, {
                            direction: g.q.BottomLeft,
                            noTail: !0
                        }, _.createElement(y.b, {
                            className: "team-members-select-menu__scroller"
                        }, _.createElement(g.U, null, _.createElement(g._17, {
                            borderBottom: !0,
                            padding: {
                                top: 1,
                                left: .5,
                                right: .5,
                                bottom: .5
                            }
                        }, _.createElement(g.E, {
                            label: a,
                            checked: t.props.groupChecked,
                            onChange: t.props.toggleGroupChecked
                        })), t.props.members.map(function(a) {
                            var n = {
                                label: a.displayName,
                                checked: a.checked,
                                onChange: t.props.toggleMemberChecked.bind(t, a),
                                disabled: e >= 100 && !a.checked
                            };
                            return _.createElement(g._17, {
                                margin: {
                                    x: .5,
                                    y: 0
                                },
                                key: a.id
                            }, _.createElement(g.E, m.__assign({}, n)))
                        })))))
                    }, t.toggleOpenClose = function(e) {
                        e && JSON.stringify(t.props.members) !== t.membersPreviouslyCheckedJSON ? t.props.fetchMembersData(t.props.members) : t.membersPreviouslyCheckedJSON = JSON.stringify(t.props.members)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return _.createElement(g.U, {
                        className: "team-members-select-menu"
                    }, this.renderMenu())
                }, t = m.__decorate([Object(p.c)("TeamMembersSelectMenu", {
                    autoReportInteractive: !0
                })], t)
            }(_.Component),
            K = Z,
            $ = this,
            X = function() {
                return m.__awaiter($, void 0, void 0, function() {
                    var e;
                    return m.__generator(this, function(t) {
                        return e = Q(ne), [2, te(e)]
                    })
                })
            },
            Q = function(e) {
                for (var t = {}, a = 0, n = Object.keys(e); a < n.length; a++)
                    for (var r = n[a], i = 0, o = Object.keys(e[r]); i < o.length; i++)
                        for (var s = o[i], d = ee(e[r][s]), u = 0, l = Object.keys(d); u < l.length; u++) {
                            var c = l[u];
                            t.hasOwnProperty(c) ? t[c].hasOwnProperty(s) ? t[c][s] += d[c] : t[c][s] = d[c] : (t[c] = {}, t[c][s] = d[c])
                        }
                return t
            },
            ee = function(e) {
                var t = {};
                return e.forEach(function(e) {
                    var a = new Date(e.timestamp),
                        n = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())).toISOString();
                    t.hasOwnProperty(n) ? t[n] += e.amount : t[n] = e.amount
                }), t
            },
            te = function(e) {
                for (var t = [], a = {
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
                    }, n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
                    var i = r[n];
                    t.push(i);
                    for (var o = e[i], s = 0, d = Object.keys(a); s < d.length; s++) {
                        var u = d[s];
                        a[u].data.push(o[u] ? o[u] : 0)
                    }
                }
                return {
                    twitch_subscriptions: a.twitch_subscriptions,
                    ads: a.ads,
                    bits: a.bits,
                    prime_subscriptions: a.prime_subscriptions,
                    timestampLabels: t
                }
            },
            ae = function(e) {
                return e.map(function(e) {
                    return {
                        title: e.categoryLabel,
                        amount: e.data.reduce(function(e, t) {
                            return e + t
                        }, 0)
                    }
                })
            },
            ne = {
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
            re = a(1272),
            ie = {
                width: 800,
                height: 380
            },
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setCanvasResolution(), this.myChart = new re(this.canvas, {
                        type: "bar",
                        data: de(this.props.datasets, this.props.timestampLabels),
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
                                        }) + " - " + I(new Date(e[0].xLabel || "1970-01-01Z"))
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
                    this.myChart.data = de(e.datasets, e.timestampLabels), this.myChart.update()
                }, t.prototype.render = function() {
                    var e = this;
                    return _.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    })
                }, t.prototype.setCanvasResolution = function() {
                    var e = ie.width,
                        t = ie.height,
                        a = se(this.canvas.getContext("2d"));
                    this.canvas.width = e * a, this.canvas.height = t * a, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                }, t = m.__decorate([Object(p.c)("RevenueChart")], t)
            }(_.Component),
            se = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            de = function(e, t) {
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
            ue = oe,
            le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMembers: !0,
                        members: [],
                        startTime: R(t.props.currentDate),
                        endTime: t.props.currentDate,
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
                        var a = t.state.members.slice(),
                            n = a.find(function(t) {
                                return t.id === e.id
                            });
                        n.checked = !n.checked, t.setState({
                            members: a,
                            groupChecked: !1
                        })
                    }, t.toggleGroupChecked = function() {
                        var e = !t.state.groupChecked,
                            a = t.state.members.map(function(t, a) {
                                return t.checked = e && a < 100, t
                            });
                        t.setState({
                            groupChecked: e,
                            members: a
                        })
                    }, t.handleTimeRangeChange = function(e, a) {
                        t.setState({
                            startTime: e,
                            endTime: a
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
                        var e, t, a, n;
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
                                        isLoadingMembers: !1,
                                        members: t
                                    }), a = this.setState, n = {}, [4, X()];
                                case 4:
                                    return a.apply(this, [(n.revenues = r.sent(), n)]), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [this.state.revenues.twitch_subscriptions, this.state.revenues.prime_subscriptions, this.state.revenues.bits, this.state.revenues.ads];
                    return _.createElement(v, {
                        title: Y(o.Revenue),
                        titleSelector: "revenue-page-title"
                    }, _.createElement(g._17, {
                        border: !0,
                        fullWidth: !0
                    }, _.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Row,
                        justifyContent: g.T.Between,
                        margin: 2
                    }, _.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Row
                    }, _.createElement(g.U, {
                        margin: {
                            right: 1
                        }
                    }, _.createElement(K, {
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        fetchMembersData: this.fetchMembersData,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), _.createElement(U, {
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), _.createElement(g.U, null, _.createElement(g._21, {
                        color: g.F.Alt2
                    }, Object(L.d)("* All revenue values are estimated (in $USD)", "TeamsDashboard")))), _.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Row,
                        justifyContent: g.T.Between,
                        margin: 2
                    }, _.createElement(G, {
                        revenues: ae(e),
                        totalTitle: Object(L.d)("Total Revenue", "TeamsDashboard"),
                        summaryItemTitleSuffix: "*"
                    })), _.createElement(g._17, {
                        padding: 2,
                        background: g.m.Base,
                        borderTop: !0
                    }, _.createElement(ue, {
                        timestampLabels: this.state.revenues.timestampLabels,
                        datasets: e
                    }))))
                }, t = m.__decorate([Object(p.c)("RevenuePage", {
                    autoReportInteractive: !0,
                    destination: f.a.TeamsDashboardRevenue
                })], t)
            }(_.Component),
            ce = le,
            me = a(4),
            _e = {
                "side-nav-bar__option": !0,
                "side-nav-bar__option--active": !0
            },
            he = function(e) {
                var t = function(t) {
                    return me(e.page === t ? _e : "side-nav-bar__option")
                };
                return _.createElement(g._17, {
                    display: g.H.Block,
                    className: "side-nav-bar",
                    fullHeight: !0,
                    borderRight: !0
                }, _.createElement(g.U, {
                    padding: {
                        top: 2,
                        x: 2
                    },
                    margin: {
                        bottom: .5
                    }
                }, _.createElement(g._21, {
                    type: g._26.H4,
                    fontSize: g.L.Size5
                }, Object(L.d)("Team Dashboard", "TeamsDashboard"))), _.createElement("ul", null, _.createElement("li", null, _.createElement(g.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.BasicInfo
                }, _.createElement(g.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.BasicInfo)
                }, Y(o.BasicInfo)))), _.createElement("li", null, _.createElement(g.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Customize
                }, _.createElement(g.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Customize)
                }, Y(o.Customize)))), _.createElement("li", null, _.createElement(g.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Revenue,
                    "data-test-selector": "side-nav-revenue"
                }, _.createElement(g.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Revenue)
                }, Y(o.Revenue)))), _.createElement("li", null, _.createElement(g.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Stats,
                    "data-test-selector": "side-nav-stats"
                }, _.createElement(g.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Stats)
                }, Y(o.Stats)))), _.createElement("li", null, _.createElement(g.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.Members
                }, _.createElement(g.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.Members)
                }, Y(o.Members)))), _.createElement("li", null, _.createElement(g.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + o.FeaturedChannels
                }, _.createElement(g.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(o.FeaturedChannels)
                }, Y(o.FeaturedChannels))))))
            },
            fe = Object(p.c)("Navbar", {
                autoReportInteractive: !0
            })(he);
        ! function(e) {
            e.AverageViewers = "concurrent_viewers", e.NewFollowers = "follows"
        }(P || (P = {}));
        var pe = function(e) {
                switch (e) {
                    case P.AverageViewers:
                        return Object(L.d)("Avg. Viewers", "TeamsDashboard");
                    case P.NewFollowers:
                        return Object(L.d)("New Followers", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            ye = function(e) {
                var t = function(t) {
                    e.onChange(t.target.value)
                };
                return _.createElement(g.U, {
                    className: "metric-select-menu"
                }, _.createElement(g._14, {
                    value: "" + e.metric,
                    onChange: t
                }, _.createElement("option", {
                    value: P.AverageViewers
                }, pe(P.AverageViewers)), _.createElement("option", {
                    value: P.NewFollowers
                }, pe(P.NewFollowers))))
            },
            ge = ye,
            Me = {
                width: 800,
                height: 380
            },
            ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.setCanvasResolution(), this.myChart = new re(this.canvas, {
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
                                        var a = "",
                                            n = e[0];
                                        return t && t.labels && (a = t.labels[n.index || 0]), z(new Date(a))
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
                                            return 0 === t.getUTCHours() ? W(t) : ""
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
                    var e = Me.width,
                        t = Me.height,
                        a = be(this.canvas.getContext("2d"));
                    this.canvas.width = e * a, this.canvas.height = t * a, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                }, t = m.__decorate([Object(p.c)("StatsCanvas")], t)
            }(_.Component),
            be = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            Le = ve,
            Ye = function(e) {
                var t = e.data,
                    a = e.dataType,
                    n = {
                        chartLabel: pe(a),
                        timeLabels: Object.keys(t).sort(function(e, t) {
                            return e.localeCompare(t, void 0, {
                                numeric: !0
                            })
                        }),
                        data: []
                    };
                switch (a) {
                    case P.AverageViewers:
                        n.data = n.timeLabels.map(function(e) {
                            return t[e]
                        });
                        break;
                    case P.NewFollowers:
                        n.data = n.timeLabels.reduce(function(e, a) {
                            return e.push(t[a] + (e.length ? e[e.length - 1] : 0)), e
                        }, []);
                        break;
                    default:
                        throw new Error
                }
                return _.createElement(Le, {
                    lineChartData: n
                })
            },
            De = function(e) {
                var t = e.columnName;
                return _.createElement(g.N, null, _.createElement(g.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(g.U, null)), _.createElement(g.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(g.U, null, _.createElement(g._21, {
                    bold: !0
                }, t))), _.createElement(g.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(g.U, null, _.createElement(g._21, {
                    bold: !0
                }, Object(L.d)("Views", "TeamsDashboard")))), _.createElement(g.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(g.U, null, _.createElement(g._21, {
                    bold: !0
                }, Object(L.d)("Percent", "TeamsDashboard")))))
            },
            ke = De,
            xe = function(e) {
                var t = e.rowContent;
                return _.createElement(g.N, null, _.createElement(g.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(g.U, {
                    fullHeight: !0,
                    display: g.H.Flex,
                    alignItems: g.c.Center
                }, _.createElement(g._5, {
                    value: t.percent,
                    mask: !0
                }))), _.createElement(g.G, {
                    cols: {
                        default: 4
                    }
                }, _.createElement(g.U, null, _.createElement(g._21, {
                    ellipsis: !0
                }, t.name))), _.createElement(g.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(g.U, null, _.createElement(g._21, null, Object(L.e)(t.views)))), _.createElement(g.G, {
                    cols: {
                        default: 2
                    }
                }, _.createElement(g.U, null, _.createElement(g._21, null, Object(L.e)(t.percent), "%"))))
            },
            Te = xe,
            we = function(e) {
                var t = e.tableName,
                    a = e.columnName,
                    n = e.rowData,
                    r = e.isGeo,
                    i = n.reduce(function(e, t) {
                        return e + t.views
                    }, 0),
                    o = n.sort(function(e, t) {
                        return t.views - e.views || e.name.localeCompare(t.name)
                    });
                return _.createElement(g.U, {
                    display: g.H.Flex,
                    flexDirection: g.J.Column,
                    padding: 2,
                    className: "table",
                    flexWrap: g.K.NoWrap,
                    fullWidth: !0
                }, je(t, o.length), Se(o, i, a, r))
            },
            Se = function(e, t, a, n) {
                return 0 === e.length ? Oe() : n && 1 === e.length ? He(e[0].name) : Ce(e, a, t)
            },
            je = function(e, t) {
                var a = Object(L.d)("{tableName}", {
                    tableName: e
                }, "TeamsDashboard");
                return t > 10 ? a = Object(L.d)("{tableName} (Top 10)", {
                    tableName: e
                }, "TeamsDashboard") : t > 1 && (a = Object(L.d)("{tableName} (All)", {
                    tableName: e
                }, "TeamsDashboard")), _.createElement(g.U, {
                    padding: {
                        bottom: 1
                    }
                }, _.createElement(g._21, {
                    type: g._26.H4
                }, a))
            },
            Oe = function() {
                return _.createElement(g._21, {
                    color: g.F.Alt2
                }, Object(L.d)("Not enough data for us to display", "TeamsDashboard"))
            },
            He = function(e) {
                return _.createElement(g._21, null, Object(L.d)("The top viewer location was {name}", {
                    name: e
                }, "TeamsDashboard"))
            },
            Ce = function(e, t, a) {
                return _.createElement(g.U, null, _.createElement(g.U, null, _.createElement(ke, {
                    columnName: t
                })), e.slice(0, 10).map(function(e, t) {
                    var n = e.name,
                        r = e.views,
                        i = Math.round(r / a * 100);
                    return _.createElement(g.U, {
                        key: t
                    }, _.createElement(Te, {
                        rowContent: {
                            name: n,
                            views: r,
                            percent: i
                        }
                    }))
                }))
            },
            Pe = we,
            Ae = Object(L.d)("Referrer", "TeamsDashboard"),
            Fe = function(e) {
                var t = Object(L.d)("Views by Referrer", "TeamsDashboard"),
                    a = "";
                return e.internalReferral && e.internalReferral.length && (t = Object(L.d)("Views from Outside Twitch", "TeamsDashboard"), a = _.createElement(g._17, {
                    display: g.H.Flex,
                    flexGrow: 1,
                    borderBottom: !0,
                    borderLeft: !0
                }, _.createElement(Pe, {
                    tableName: Object(L.d)("Views from Twitch", "TeamsDashboard"),
                    columnName: Ae,
                    rowData: e.internalReferral
                }))), _.createElement(g._17, {
                    className: "all-tables-wrapper",
                    display: g.H.Flex,
                    flexDirection: g.J.Row,
                    borderTop: !0
                }, _.createElement(g.U, {
                    display: g.H.Flex,
                    flexGrow: 1,
                    flexDirection: g.J.Column,
                    flexWrap: g.K.NoWrap
                }, _.createElement(g._17, {
                    display: g.H.Flex,
                    flexGrow: 1,
                    borderBottom: !0
                }, _.createElement(Pe, {
                    tableName: Object(L.d)("Views by Location", "TeamsDashboard"),
                    columnName: Object(L.d)("Location", "TeamsDashboard"),
                    rowData: e.geographical,
                    isGeo: !0
                })), _.createElement(g._17, {
                    display: g.H.Flex,
                    flexGrow: 1
                }, _.createElement(Pe, {
                    tableName: Object(L.d)("Views by Platform", "TeamsDashboard"),
                    columnName: Object(L.d)("Platform", "TeamsDashboard"),
                    rowData: e.platform
                }))), _.createElement(g.U, {
                    display: g.H.Flex,
                    flexGrow: 1,
                    flexDirection: g.J.Column,
                    flexWrap: g.K.NoWrap
                }, a, _.createElement(g._17, {
                    display: g.H.Flex,
                    flexGrow: 1,
                    borderLeft: !0
                }, _.createElement(Pe, {
                    tableName: t,
                    columnName: Ae,
                    rowData: e.externalReferral
                }))))
            },
            Ee = Fe,
            We = function(e) {
                void 0 === e && (e = "Time,Views\n01 Oct 00:00,360\n01 Oct 01:00,300\n");
                var t = encodeURIComponent(e),
                    a = document.createElement("a");
                a.href = "data:text/csv;charset=utf-8," + t, a.download = "views.csv", document.body.appendChild(a), a.click(), document.body.removeChild(a)
            },
            Ie = function(e) {
                return Object.keys(e).reduce(function(t, a) {
                    return t += a + "," + e[a] + "\n"
                }, "Time,Views\n")
            },
            ze = this,
            Re = function(e, t, a, n) {
                return m.__awaiter(ze, void 0, void 0, function() {
                    var r, i, o, s;
                    return m.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return r = {
                                    geographical: [],
                                    platform: [],
                                    internalReferral: [],
                                    externalReferral: []
                                }, t.length < 1 ? [2, r] : (i = t.join(","), o = "/v5/teams/" + e + "/stats/video_play_demographics?channel_ids=" + i + "&start_time=" + a + "&end_time=" + n, [4, Object(O.c)({
                                    path: o
                                })]);
                            case 1:
                                return s = d.sent(), [2, s.body ? Ne(s.body) : r]
                        }
                    })
                })
            },
            Ne = function(e) {
                for (var t = e.video_play_demographics, a = {
                        geographical: [],
                        platform: [],
                        internalReferral: [],
                        externalReferral: []
                    }, r = 0, i = Object.keys(t.geo); r < i.length; r++) {
                    var o = i[r];
                    a.geographical.push({
                        name: n(o),
                        views: t.geo[o]
                    })
                }
                for (var s = 0, d = Object.keys(t.platform); s < d.length; s++) {
                    var o = d[s];
                    a.platform.push({
                        name: Ve(o),
                        views: t.platform[o]
                    })
                }
                for (var u = 0, l = Object.keys(t.referrer.internal); u < l.length; u++) {
                    var o = l[u];
                    a.internalReferral.push({
                        name: Ue(o),
                        views: t.referrer.internal[o]
                    })
                }
                for (var c = 0, m = Object.keys(t.referrer.external); c < m.length; c++) {
                    var o = m[c];
                    a.externalReferral.push({
                        name: Je(o),
                        views: t.referrer.external[o]
                    })
                }
                return a
            },
            Be = Object(L.d)("Other", "TeamsDashboard"),
            Ve = function(e) {
                return {
                    unknown: Object(L.d)("Unknown", "TeamsDashboard"),
                    tv: Object(L.d)("TV", "TeamsDashboard"),
                    ios: Object(L.d)("iOS App", "TeamsDashboard"),
                    web: Object(L.d)("Web", "TeamsDashboard"),
                    android: Object(L.d)("Android App", "TeamsDashboard"),
                    mobile_web: Object(L.d)("Mobile Web", "TeamsDashboard"),
                    mobile_aggregated: Object(L.d)("Mobile", "TeamsDashboard"),
                    console: Object(L.d)("Console", "TeamsDashboard"),
                    other: Be
                }[e] || e
            },
            Ue = function(e) {
                return {
                    other: Be,
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
            Je = function(e) {
                return (t = {
                    facebook: Object(L.d)("Facebook", "TeamsDashboard"),
                    google: Object(L.d)("Google", "TeamsDashboard"),
                    reddit: Object(L.d)("Reddit", "TeamsDashboard"),
                    youtube: Object(L.d)("Youtube", "TeamsDashboard")
                }, t["t.co"] = Object(L.d)("Twitter", "TeamsDashboard"), t.unknown = Object(L.d)("Direct/Unknown", "TeamsDashboard"), t.twitch_aggregate = Object(L.d)("Twitch", "TeamsDashboard"), t.external_aggregate = Object(L.d)("External", "TeamsDashboard"), t)[e] || e;
                var t
            },
            Ge = this,
            qe = function(e, t, a, n, r) {
                return m.__awaiter(Ge, void 0, void 0, function() {
                    var i, o, s, d;
                    return m.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (0 === a.length) return [2, Promise.resolve({})];
                                switch (i = "/v5/teams/" + t + "/stats/" + e + "?channel_ids=" + a + "&start_time=" + n + "&end_time=" + r, d = e) {
                                    case P.AverageViewers:
                                        return [3, 1];
                                    case P.NewFollowers:
                                        return [3, 3]
                                }
                                return [3, 5];
                            case 1:
                                return [4, Ze(i)];
                            case 2:
                                return o = u.sent(), s = Qe, [3, 6];
                            case 3:
                                return [4, Ke(i)];
                            case 4:
                                return o = u.sent(), s = et, [3, 6];
                            case 5:
                                throw new Error("fetch type is not in StatsEndpoint enum");
                            case 6:
                                return [2, $e(Xe(o, n, r, s))]
                        }
                    })
                })
            },
            Ze = function(e) {
                return m.__awaiter(Ge, void 0, void 0, function() {
                    var t;
                    return m.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(O.c)({
                                    path: e
                                })];
                            case 1:
                                return t = a.sent(), [2, t.body ? t.body.concurrent_viewers : {}]
                        }
                    })
                })
            },
            Ke = function(e) {
                return m.__awaiter(Ge, void 0, void 0, function() {
                    var t;
                    return m.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(O.c)({
                                    path: e
                                })];
                            case 1:
                                return t = a.sent(), [2, t.body ? t.body.follows : {}]
                        }
                    })
                })
            },
            $e = function(e) {
                for (var t = {}, a = Object.keys(e), n = 0, r = a; n < r.length; n++)
                    for (var i = r[n], o = e[i], s = 0, d = o; s < d.length; s++) {
                        var u = d[s],
                            l = u.timestamp,
                            c = u.count;
                        t[l] ? t[l] += c : t[l] = c
                    }
                return t
            },
            Xe = function(e, t, a, n) {
                for (var r = {}, i = Object.keys(e), o = 0, s = i; o < s.length; o++) {
                    var d = s[o];
                    r[d] = n(t, a, e[d])
                }
                return r
            },
            Qe = function(e, t, a) {
                for (var n = tt(e, t), r = n.map(function(e) {
                        return m.__assign({}, e, {
                            sampleSize: 0
                        })
                    }), i = 0, o = a; i < o.length; i++) {
                    var s = o[i],
                        d = s.timestamp,
                        u = s.count;
                    ! function(e, t) {
                        var a = r.find(function(t) {
                            return t.timestamp === at(e)
                        });
                        a && 0 !== t && (a.count += t, a.sampleSize += 1)
                    }(d, u)
                }
                return r.map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0
                    }
                })
            },
            et = function(e, t, a) {
                for (var n = tt(e, t), r = 0, i = a; r < i.length; r++) {
                    var o = i[r],
                        s = o.timestamp,
                        d = o.count;
                    ! function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === at(e)
                        });
                        a && (a.count += t)
                    }(s, d)
                }
                return n
            },
            tt = function(e, t) {
                for (var a = [], n = new Date(at(e)), r = new Date(t); n < r;) a.push({
                    timestamp: n.toISOString(),
                    count: 0
                }), n.setUTCHours(n.getUTCHours() + 4);
                return a
            },
            at = function(e) {
                var t = new Date(e),
                    a = t.getUTCHours() - t.getUTCHours() % 4;
                return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), a)).toISOString()
            },
            nt = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.toggleMemberChecked = function(e) {
                        var t = a.state.members.slice(),
                            n = t.find(function(t) {
                                return t.id === e.id
                            });
                        n.checked = !n.checked, a.setState({
                            members: t,
                            groupChecked: !1
                        })
                    }, a.toggleGroupChecked = function() {
                        var e = !a.state.groupChecked,
                            t = a.state.members.map(function(t, a) {
                                return t.checked = e && a < 100, t
                            });
                        a.setState({
                            groupChecked: e,
                            members: t
                        })
                    }, a.fetchStats = function() {
                        return m.__awaiter(a, void 0, void 0, function() {
                            var e, t, a, n, r;
                            return m.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = this.state.members.filter(function(e) {
                                            return e.checked
                                        }).map(function(e) {
                                            return e.id
                                        }), t = this.state.startTime.toISOString(), a = this.state.endTime.toISOString(), this.state.metric !== P.AverageViewers ? [3, 2] : [4, Re(this.props.teamName, e, t, a)];
                                    case 1:
                                        n = i.sent(), this.setState({
                                            demographics: n
                                        }), i.label = 2;
                                    case 2:
                                        return [4, qe(this.state.metric, this.props.teamName, e, t, a)];
                                    case 3:
                                        return r = i.sent(), this.setState({
                                            data: r
                                        }), [2]
                                }
                            })
                        })
                    }, a.handleTimeRangeChange = function(e, t) {
                        a.setState({
                            startTime: e,
                            endTime: t
                        }, a.fetchStats)
                    }, a.onMetricChange = function(e) {
                        a.setState({
                            metric: e
                        }, a.fetchStats)
                    }, a.state = {
                        isLoadingMembers: !0,
                        members: [],
                        data: {},
                        demographics: {
                            geographical: [],
                            platform: [],
                            internalReferral: [],
                            externalReferral: []
                        },
                        startTime: R(a.props.currentDate),
                        endTime: a.props.currentDate,
                        groupChecked: !0,
                        metric: P.AverageViewers
                    }, a
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return m.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, A(this.props.teamName, b.StatsRevealed)];
                                case 1:
                                    return e = a.sent(), t = e.map(function(e, t) {
                                        return m.__assign({}, e, {
                                            checked: t < 100
                                        })
                                    }), this.setState({
                                        isLoadingMembers: !1,
                                        members: t
                                    }, this.fetchStats), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return _.createElement(v, {
                        title: Y(o.Stats),
                        titleSelector: "stats-page-title"
                    }, _.createElement(g._17, {
                        border: !0,
                        fullWidth: !0
                    }, _.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Row,
                        justifyContent: g.T.Between,
                        margin: 2
                    }, _.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Row
                    }, _.createElement(g.U, {
                        margin: {
                            right: 1
                        }
                    }, _.createElement(K, {
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        fetchMembersData: this.fetchStats,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), _.createElement(ge, {
                        metric: this.state.metric,
                        onChange: this.onMetricChange
                    }), _.createElement(U, {
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), _.createElement(g.U, null, _.createElement(g.u, {
                        "data-test-selector": "export-csv-button",
                        onClick: this.handleCSVClick
                    }, Object(L.d)("Export Data", "TeamsDashboard")))), _.createElement(g.U, {
                        fullWidth: !0
                    }, _.createElement(Ye, {
                        data: this.state.data,
                        dataType: this.state.metric
                    })), this.state.metric === P.AverageViewers ? _.createElement(Ee, m.__assign({}, this.state.demographics)) : ""))
                }, t.prototype.handleCSVClick = function() {
                    var e = Ie(this.state.data);
                    We(e)
                }, t = m.__decorate([Object(p.c)("StatsPage", {
                    autoReportInteractive: !0,
                    destination: f.a.TeamsDashboardStats
                })], t)
            }(_.Component),
            rt = nt,
            it = new Date(Date.UTC(2016, 0)),
            ot = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.renderStatsPage = function() {
                        return _.createElement(rt, {
                            teamName: a.props.match.params.teamName,
                            earliestDataDate: a.earliestDataDate,
                            currentDate: a.currentDate
                        })
                    }, a.renderBasicInfoPage = function() {
                        return _.createElement(k, null)
                    }, a.renderCustomizePage = function() {
                        return _.createElement(T, null)
                    }, a.renderMembersPage = function() {
                        return _.createElement(E, {
                            teamName: a.props.match.params.teamName
                        })
                    }, a.renderFeaturedChannelsPage = function() {
                        return _.createElement(S, null)
                    }, a.renderRevenuePage = function() {
                        return _.createElement(ce, {
                            teamName: a.props.match.params.teamName,
                            earliestDataDate: a.earliestDataDate,
                            currentDate: a.currentDate
                        })
                    }, a.earliestDataDate = it, a.currentDate = t.currentDate || new Date, a.currentDate < a.earliestDataDate && (a.currentDate = a.earliestDataDate), a
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? _.createElement(g.U, {
                        display: g.H.Flex,
                        flexWrap: g.K.NoWrap,
                        fullWidth: !0,
                        fullHeight: !0
                    }, _.createElement(fe, {
                        teamName: this.props.match.params.teamName,
                        page: this.props.match.params.pageName
                    }), _.createElement(g.U, {
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
                    })))) : (this.props.onAnonymousVisit(), _.createElement(g.X, {
                        fillContent: !0
                    }))
                }, t
            }(_.Component),
            st = ot,
            dt = Object(s.a)(i, r)(st);
        a.d(t, "TeamsDashboardRoot", function() {
            return dt
        })
    },
    816: function(e, t, a) {
        (function(e) {
            ! function(t, a) {
                e.exports = a()
            }(0, function() {
                "use strict";

                function t() {
                    return vn.apply(null, arguments)
                }

                function n(e) {
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
                    var a, n = [];
                    for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                    return n
                }

                function l(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function c(e, t) {
                    for (var a in t) l(t, a) && (e[a] = t[a]);
                    return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function m(e, t, a, n) {
                    return Mt(e, t, a, n, !0).utc()
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
                            a = Ln.call(t.parsedDateParts, function(e) {
                                return null != e
                            }),
                            n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                        if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                        e._isValid = n
                    }
                    return e._isValid
                }

                function p(e) {
                    var t = m(NaN);
                    return null != e ? c(h(t), e) : h(t).userInvalidated = !0, t
                }

                function y(e, t) {
                    var a, n, r;
                    if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), Yn.length > 0)
                        for (a = 0; a < Yn.length; a++) n = Yn[a], r = t[n], o(r) || (e[n] = r);
                    return e
                }

                function g(e) {
                    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Dn && (Dn = !0, t.updateOffset(this), Dn = !1)
                }

                function M(e) {
                    return e instanceof g || null != e && null != e._isAMomentObject
                }

                function v(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function b(e) {
                    var t = +e,
                        a = 0;
                    return 0 !== t && isFinite(t) && (a = v(t)), a
                }

                function L(e, t, a) {
                    var n, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        o = 0;
                    for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && b(e[n]) !== b(t[n])) && o++;
                    return o + i
                }

                function Y(e) {
                    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function D(e, a) {
                    var n = !0;
                    return c(function() {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                            for (var r, i = [], o = 0; o < arguments.length; o++) {
                                if (r = "", "object" == typeof arguments[o]) {
                                    r += "\n[" + o + "] ";
                                    for (var s in arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[o];
                                i.push(r)
                            }
                            Y(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), n = !1
                        }
                        return a.apply(this, arguments)
                    }, a)
                }

                function k(e, a) {
                    null != t.deprecationHandler && t.deprecationHandler(e, a), kn[e] || (Y(a), kn[e] = !0)
                }

                function x(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function T(e) {
                    var t, a;
                    for (a in e) t = e[a], x(t) ? this[a] = t : this["_" + a] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function w(e, t) {
                    var a, n = c({}, e);
                    for (a in t) l(t, a) && (r(e[a]) && r(t[a]) ? (n[a] = {}, c(n[a], e[a]), c(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                    for (a in e) l(e, a) && !l(t, a) && r(e[a]) && (n[a] = c({}, n[a]));
                    return n
                }

                function S(e) {
                    null != e && this.set(e)
                }

                function j(e, t, a) {
                    var n = this._calendar[e] || this._calendar.sameElse;
                    return x(n) ? n.call(t, a) : n
                }

                function O(e) {
                    var t = this._longDateFormat[e],
                        a = this._longDateFormat[e.toUpperCase()];
                    return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }

                function H() {
                    return this._invalidDate
                }

                function C(e) {
                    return this._ordinal.replace("%d", e)
                }

                function P(e, t, a, n) {
                    var r = this._relativeTime[a];
                    return x(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
                }

                function A(e, t) {
                    var a = this._relativeTime[e > 0 ? "future" : "past"];
                    return x(a) ? a(t) : a.replace(/%s/i, t)
                }

                function F(e, t) {
                    var a = e.toLowerCase();
                    Cn[a] = Cn[a + "s"] = Cn[t] = e
                }

                function E(e) {
                    return "string" == typeof e ? Cn[e] || Cn[e.toLowerCase()] : void 0
                }

                function W(e) {
                    var t, a, n = {};
                    for (a in e) l(e, a) && (t = E(a)) && (n[t] = e[a]);
                    return n
                }

                function I(e, t) {
                    Pn[e] = t
                }

                function z(e) {
                    var t = [];
                    for (var a in e) t.push({
                        unit: a,
                        priority: Pn[a]
                    });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }), t
                }

                function R(e, a) {
                    return function(n) {
                        return null != n ? (B(this, e, n), t.updateOffset(this, a), this) : N(this, e)
                    }
                }

                function N(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function B(e, t, a) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](a)
                }

                function V(e) {
                    return e = E(e), x(this[e]) ? this[e]() : this
                }

                function U(e, t) {
                    if ("object" == typeof e) {
                        e = W(e);
                        for (var a = z(e), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit])
                    } else if (e = E(e), x(this[e])) return this[e](t);
                    return this
                }

                function J(e, t, a) {
                    var n = "" + Math.abs(e),
                        r = t - n.length;
                    return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
                }

                function G(e, t, a, n) {
                    var r = n;
                    "string" == typeof n && (r = function() {
                        return this[n]()
                    }), e && (Wn[e] = r), t && (Wn[t[0]] = function() {
                        return J(r.apply(this, arguments), t[1], t[2])
                    }), a && (Wn[a] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function q(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function Z(e) {
                    var t, a, n = e.match(An);
                    for (t = 0, a = n.length; t < a; t++) Wn[n[t]] ? n[t] = Wn[n[t]] : n[t] = q(n[t]);
                    return function(t) {
                        var r, i = "";
                        for (r = 0; r < a; r++) i += x(n[r]) ? n[r].call(t, e) : n[r];
                        return i
                    }
                }

                function K(e, t) {
                    return e.isValid() ? (t = $(t, e.localeData()), En[t] = En[t] || Z(t), En[t](e)) : e.localeData().invalidDate()
                }

                function $(e, t) {
                    function a(e) {
                        return t.longDateFormat(e) || e
                    }
                    var n = 5;
                    for (Fn.lastIndex = 0; n >= 0 && Fn.test(e);) e = e.replace(Fn, a), Fn.lastIndex = 0, n -= 1;
                    return e
                }

                function X(e, t, a) {
                    ar[e] = x(t) ? t : function(e, n) {
                        return e && a ? a : t
                    }
                }

                function Q(e, t) {
                    return l(ar, e) ? ar[e](t._strict, t._locale) : new RegExp(ee(e))
                }

                function ee(e) {
                    return te(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, r) {
                        return t || a || n || r
                    }))
                }

                function te(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function ae(e, t) {
                    var a, n = t;
                    for ("string" == typeof e && (e = [e]), s(t) && (n = function(e, a) {
                            a[t] = b(e)
                        }), a = 0; a < e.length; a++) nr[e[a]] = n
                }

                function ne(e, t) {
                    ae(e, function(e, a, n, r) {
                        n._w = n._w || {}, t(e, n._w, n, r)
                    })
                }

                function re(e, t, a) {
                    null != t && l(nr, e) && nr[e](t, a._a, a, e)
                }

                function ie(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }

                function oe(e, t) {
                    return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || hr).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
                }

                function se(e, t) {
                    return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[hr.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }

                function de(e, t, a) {
                    var n, r, i, o = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                    return a ? "MMM" === t ? (r = _r.call(this._shortMonthsParse, o), -1 !== r ? r : null) : (r = _r.call(this._longMonthsParse, o), -1 !== r ? r : null) : "MMM" === t ? -1 !== (r = _r.call(this._shortMonthsParse, o)) ? r : (r = _r.call(this._longMonthsParse, o), -1 !== r ? r : null) : -1 !== (r = _r.call(this._longMonthsParse, o)) ? r : (r = _r.call(this._shortMonthsParse, o), -1 !== r ? r : null)
                }

                function ue(e, t, a) {
                    var n, r, i;
                    if (this._monthsParseExact) return de.call(this, e, t, a);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (r = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                        if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                        if (!a && this._monthsParse[n].test(e)) return n
                    }
                }

                function le(e, t) {
                    var a;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = b(t);
                        else if (t = e.localeData().monthsParse(t), !s(t)) return e;
                    return a = Math.min(e.date(), ie(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
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
                    return this._monthsParseExact ? (l(this, "_monthsRegex") || fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = gr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }

                function fe() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n = [],
                        r = [],
                        i = [];
                    for (t = 0; t < 12; t++) a = m([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), i.push(this.months(a, "")), i.push(this.monthsShort(a, ""));
                    for (n.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) n[t] = te(n[t]), r[t] = te(r[t]);
                    for (t = 0; t < 24; t++) i[t] = te(i[t]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function pe(e) {
                    return ye(e) ? 366 : 365
                }

                function ye(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function ge() {
                    return ye(this.year())
                }

                function Me(e, t, a, n, r, i, o) {
                    var s = new Date(e, t, a, n, r, i, o);
                    return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
                }

                function ve(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function be(e, t, a) {
                    var n = 7 + t - a;
                    return -(7 + ve(e, 0, n).getUTCDay() - t) % 7 + n - 1
                }

                function Le(e, t, a, n, r) {
                    var i, o, s = (7 + a - n) % 7,
                        d = be(e, n, r),
                        u = 1 + 7 * (t - 1) + s + d;
                    return u <= 0 ? (i = e - 1, o = pe(i) + u) : u > pe(e) ? (i = e + 1, o = u - pe(e)) : (i = e, o = u), {
                        year: i,
                        dayOfYear: o
                    }
                }

                function Ye(e, t, a) {
                    var n, r, i = be(e.year(), t, a),
                        o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return o < 1 ? (r = e.year() - 1, n = o + De(r, t, a)) : o > De(e.year(), t, a) ? (n = o - De(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = o), {
                        week: n,
                        year: r
                    }
                }

                function De(e, t, a) {
                    var n = be(e, t, a),
                        r = be(e + 1, t, a);
                    return (pe(e) - n + r) / 7
                }

                function ke(e) {
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

                function Oe(e, t) {
                    return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                }

                function He(e, t) {
                    return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }

                function Ce(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }

                function Pe(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }

                function Ae(e, t, a) {
                    var n, r, i, o = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
                    return a ? "dddd" === t ? (r = _r.call(this._weekdaysParse, o), -1 !== r ? r : null) : "ddd" === t ? (r = _r.call(this._shortWeekdaysParse, o), -1 !== r ? r : null) : (r = _r.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "dddd" === t ? -1 !== (r = _r.call(this._weekdaysParse, o)) ? r : -1 !== (r = _r.call(this._shortWeekdaysParse, o)) ? r : (r = _r.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "ddd" === t ? -1 !== (r = _r.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = _r.call(this._weekdaysParse, o)) ? r : (r = _r.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : -1 !== (r = _r.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = _r.call(this._weekdaysParse, o)) ? r : (r = _r.call(this._shortWeekdaysParse, o), -1 !== r ? r : null)
                }

                function Fe(e, t, a) {
                    var n, r, i;
                    if (this._weekdaysParseExact) return Ae.call(this, e, t, a);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                        if (r = m([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                        if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                        if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                        if (!a && this._weekdaysParse[n].test(e)) return n
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
                        var t = Oe(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }

                function ze(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Dr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Re(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = kr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function Ne(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function Be() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n, r, i, o = [],
                        s = [],
                        d = [],
                        u = [];
                    for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), r = this.weekdaysShort(a, ""), i = this.weekdays(a, ""), o.push(n), s.push(r), d.push(i), u.push(n), u.push(r), u.push(i);
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

                function Ze(e, t, a) {
                    return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
                }

                function Ke(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function $e(e) {
                    for (var t, a, n, r, i = 0; i < e.length;) {
                        for (r = Ke(e[i]).split("-"), t = r.length, a = Ke(e[i + 1]), a = a ? a.split("-") : null; t > 0;) {
                            if (n = Xe(r.slice(0, t).join("-"))) return n;
                            if (a && a.length >= t && L(r, a, !0) >= t - 1) break;
                            t--
                        }
                        i++
                    }
                    return null
                }

                function Xe(t) {
                    var n = null;
                    if (!Or[t] && void 0 !== e && e && e.exports) try {
                        n = Tr._abbr, a(1531)("./" + t), Qe(n)
                    } catch (e) {}
                    return Or[t]
                }

                function Qe(e, t) {
                    var a;
                    return e && (a = o(t) ? at(e) : et(e, t)) && (Tr = a), Tr._abbr
                }

                function et(e, t) {
                    if (null !== t) {
                        var a = jr;
                        if (t.abbr = e, null != Or[e]) k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = Or[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == Or[t.parentLocale]) return Hr[t.parentLocale] || (Hr[t.parentLocale] = []), Hr[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = Or[t.parentLocale]._config
                        }
                        return Or[e] = new S(w(a, t)), Hr[e] && Hr[e].forEach(function(e) {
                            et(e.name, e.config)
                        }), Qe(e), Or[e]
                    }
                    return delete Or[e], null
                }

                function tt(e, t) {
                    if (null != t) {
                        var a, n = jr;
                        null != Or[e] && (n = Or[e]._config), t = w(n, t), a = new S(t), a.parentLocale = Or[e], Or[e] = a, Qe(e)
                    } else null != Or[e] && (null != Or[e].parentLocale ? Or[e] = Or[e].parentLocale : null != Or[e] && delete Or[e]);
                    return Or[e]
                }

                function at(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Tr;
                    if (!n(e)) {
                        if (t = Xe(e)) return t;
                        e = [e]
                    }
                    return $e(e)
                }

                function nt() {
                    return wn(Or)
                }

                function rt(e) {
                    var t, a = e._a;
                    return a && -2 === h(e).overflow && (t = a[ir] < 0 || a[ir] > 11 ? ir : a[or] < 1 || a[or] > ie(a[rr], a[ir]) ? or : a[sr] < 0 || a[sr] > 24 || 24 === a[sr] && (0 !== a[dr] || 0 !== a[ur] || 0 !== a[lr]) ? sr : a[dr] < 0 || a[dr] > 59 ? dr : a[ur] < 0 || a[ur] > 59 ? ur : a[lr] < 0 || a[lr] > 999 ? lr : -1, h(e)._overflowDayOfYear && (t < rr || t > or) && (t = or), h(e)._overflowWeeks && -1 === t && (t = cr), h(e)._overflowWeekday && -1 === t && (t = mr), h(e).overflow = t), e
                }

                function it(e) {
                    var t, a, n, r, i, o, s = e._i,
                        d = Cr.exec(s) || Pr.exec(s);
                    if (d) {
                        for (h(e).iso = !0, t = 0, a = Fr.length; t < a; t++)
                            if (Fr[t][1].exec(d[1])) {
                                r = Fr[t][0], n = !1 !== Fr[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, a = Er.length; t < a; t++)
                                if (Er[t][1].exec(d[3])) {
                                    i = (d[2] || " ") + Er[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!n && null != i) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!Ar.exec(d[4])) return void(e._isValid = !1);
                            o = "Z"
                        }
                        e._f = r + (i || "") + (o || ""), mt(e)
                    } else e._isValid = !1
                }

                function ot(e) {
                    var t, a, n, r, i, o, s, d, u = {
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
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), a = Ir.exec(t)) {
                        if (n = a[1] ? "ddd" + (5 === a[1].length ? ", " : " ") : "", r = "D MMM " + (a[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (a[4] ? ":ss" : ""), a[1]) {
                            var c = new Date(a[2]),
                                m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][c.getDay()];
                            if (a[1].substr(0, 3) !== m) return h(e).weekdayMismatch = !0, void(e._isValid = !1)
                        }
                        switch (a[5].length) {
                            case 2:
                                0 === d ? s = " +0000" : (d = l.indexOf(a[5][1].toUpperCase()) - 12, s = (d < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00");
                                break;
                            case 4:
                                s = u[a[5]];
                                break;
                            default:
                                s = u[" GMT"]
                        }
                        a[5] = s, e._i = a.splice(1).join(""), o = " ZZ", e._f = n + r + i + o, mt(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function st(e) {
                    var a = Wr.exec(e._i);
                    if (null !== a) return void(e._d = new Date(+a[1]));
                    it(e), !1 === e._isValid && (delete e._isValid, ot(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))
                }

                function dt(e, t, a) {
                    return null != e ? e : null != t ? t : a
                }

                function ut(e) {
                    var a = new Date(t.now());
                    return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
                }

                function lt(e) {
                    var t, a, n, r, i = [];
                    if (!e._d) {
                        for (n = ut(e), e._w && null == e._a[or] && null == e._a[ir] && ct(e), null != e._dayOfYear && (r = dt(e._a[rr], n[rr]), (e._dayOfYear > pe(r) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), a = ve(r, 0, e._dayOfYear), e._a[ir] = a.getUTCMonth(), e._a[or] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = i[t] = n[t];
                        for (; t < 7; t++) e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[sr] && 0 === e._a[dr] && 0 === e._a[ur] && 0 === e._a[lr] && (e._nextDay = !0, e._a[sr] = 0), e._d = (e._useUTC ? ve : Me).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[sr] = 24)
                    }
                }

                function ct(e) {
                    var t, a, n, r, i, o, s, d;
                    if (t = e._w, null != t.GG || null != t.W || null != t.E) i = 1, o = 4, a = dt(t.GG, e._a[rr], Ye(vt(), 1, 4).year), n = dt(t.W, 1), ((r = dt(t.E, 1)) < 1 || r > 7) && (d = !0);
                    else {
                        i = e._locale._week.dow, o = e._locale._week.doy;
                        var u = Ye(vt(), i, o);
                        a = dt(t.gg, e._a[rr], u.year), n = dt(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
                    }
                    n < 1 || n > De(a, i, o) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (s = Le(a, n, r, i, o), e._a[rr] = s.year, e._dayOfYear = s.dayOfYear)
                }

                function mt(e) {
                    if (e._f === t.ISO_8601) return void it(e);
                    if (e._f === t.RFC_2822) return void ot(e);
                    e._a = [], h(e).empty = !0;
                    var a, n, r, i, o, s = "" + e._i,
                        d = s.length,
                        u = 0;
                    for (r = $(e._f, e._locale).match(An) || [], a = 0; a < r.length; a++) i = r[a], n = (s.match(Q(i, e)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && h(e).unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), u += n.length), Wn[i] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(i), re(i, n, e)) : e._strict && !n && h(e).unusedTokens.push(i);
                    h(e).charsLeftOver = d - u, s.length > 0 && h(e).unusedInput.push(s), e._a[sr] <= 12 && !0 === h(e).bigHour && e._a[sr] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[sr] = _t(e._locale, e._a[sr], e._meridiem), lt(e), rt(e)
                }

                function _t(e, t, a) {
                    var n;
                    return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? (n = e.isPM(a), n && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                }

                function ht(e) {
                    var t, a, n, r, i;
                    if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) i = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], mt(t), f(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == n || i < n) && (n = i, a = t));
                    c(e, a || t)
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
                    var t = new g(rt(yt(e)));
                    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                }

                function yt(e) {
                    var t = e._i,
                        a = e._f;
                    return e._locale = e._locale || at(e._l), null === t || void 0 === a && "" === t ? p({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), M(t) ? new g(rt(t)) : (d(t) ? e._d = t : n(a) ? ht(e) : a ? mt(e) : gt(e), f(e) || (e._d = null), e))
                }

                function gt(e) {
                    var a = e._i;
                    o(a) ? e._d = new Date(t.now()) : d(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? st(e) : n(a) ? (e._a = u(a.slice(0), function(e) {
                        return parseInt(e, 10)
                    }), lt(e)) : r(a) ? ft(e) : s(a) ? e._d = new Date(a) : t.createFromInputFallback(e)
                }

                function Mt(e, t, a, o, s) {
                    var d = {};
                    return !0 !== a && !1 !== a || (o = a, a = void 0), (r(e) && i(e) || n(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = a, d._i = e, d._f = t, d._strict = o, pt(d)
                }

                function vt(e, t, a, n) {
                    return Mt(e, t, a, n, !1)
                }

                function bt(e, t) {
                    var a, r;
                    if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return vt();
                    for (a = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](a) || (a = t[r]);
                    return a
                }

                function Lt() {
                    return bt("isBefore", [].slice.call(arguments, 0))
                }

                function Yt() {
                    return bt("isAfter", [].slice.call(arguments, 0))
                }

                function Dt(e) {
                    for (var t in e)
                        if (-1 === Br.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var a = !1, n = 0; n < Br.length; ++n)
                        if (e[Br[n]]) {
                            if (a) return !1;
                            parseFloat(e[Br[n]]) !== b(e[Br[n]]) && (a = !0)
                        }
                    return !0
                }

                function kt() {
                    return this._isValid
                }

                function xt() {
                    return Ut(NaN)
                }

                function Tt(e) {
                    var t = W(e),
                        a = t.year || 0,
                        n = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        o = t.day || 0,
                        s = t.hour || 0,
                        d = t.minute || 0,
                        u = t.second || 0,
                        l = t.millisecond || 0;
                    this._isValid = Dt(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * s * 60 * 60, this._days = +o + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = at(), this._bubble()
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
                            a = "+";
                        return e < 0 && (e = -e, a = "-"), a + J(~~(e / 60), 2) + t + J(~~e % 60, 2)
                    })
                }

                function Ot(e, t) {
                    var a = (t || "").match(e);
                    if (null === a) return null;
                    var n = a[a.length - 1] || [],
                        r = (n + "").match(Vr) || ["-", 0, 0],
                        i = 60 * r[1] + b(r[2]);
                    return 0 === i ? 0 : "+" === r[0] ? i : -i
                }

                function Ht(e, a) {
                    var n, r;
                    return a._isUTC ? (n = a.clone(), r = (M(e) || d(e) ? e.valueOf() : vt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), t.updateOffset(n, !1), n) : vt(e).local()
                }

                function Ct(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function Pt(e, a, n) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Ot(Qn, e))) return this
                        } else Math.abs(e) < 16 && !n && (e *= 60);
                        return !this._isUTC && a && (r = Ct(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!a || this._changeInProgress ? Kt(this, Ut(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
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
                        var e = Ot(Xn, this._i);
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
                    var a, n, r, i = e,
                        o = null;
                    return wt(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : s(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (o = Ur.exec(e)) ? (a = "-" === o[1] ? -1 : 1, i = {
                        y: 0,
                        d: b(o[or]) * a,
                        h: b(o[sr]) * a,
                        m: b(o[dr]) * a,
                        s: b(o[ur]) * a,
                        ms: b(St(1e3 * o[lr])) * a
                    }) : (o = Jr.exec(e)) ? (a = "-" === o[1] ? -1 : 1, i = {
                        y: Jt(o[2], a),
                        M: Jt(o[3], a),
                        w: Jt(o[4], a),
                        d: Jt(o[5], a),
                        h: Jt(o[6], a),
                        m: Jt(o[7], a),
                        s: Jt(o[8], a)
                    }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = qt(vt(i.from), vt(i.to)), i = {}, i.ms = r.milliseconds, i.M = r.months), n = new Tt(i), wt(e) && l(e, "_locale") && (n._locale = e._locale), n
                }

                function Jt(e, t) {
                    var a = e && parseFloat(e.replace(",", "."));
                    return (isNaN(a) ? 0 : a) * t
                }

                function Gt(e, t) {
                    var a = {
                        milliseconds: 0,
                        months: 0
                    };
                    return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
                }

                function qt(e, t) {
                    var a;
                    return e.isValid() && t.isValid() ? (t = Ht(t, e), e.isBefore(t) ? a = Gt(e, t) : (a = Gt(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function Zt(e, t) {
                    return function(a, n) {
                        var r, i;
                        return null === n || isNaN(+n) || (k(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = n, n = i), a = "string" == typeof a ? +a : a, r = Ut(a, n), Kt(this, r, e), this
                    }
                }

                function Kt(e, a, n, r) {
                    var i = a._milliseconds,
                        o = St(a._days),
                        s = St(a._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * n), o && B(e, "Date", N(e, "Date") + o * n), s && le(e, N(e, "Month") + s * n), r && t.updateOffset(e, o || s))
                }

                function $t(e, t) {
                    var a = e.diff(t, "days", !0);
                    return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
                }

                function Xt(e, a) {
                    var n = e || vt(),
                        r = Ht(n, this).startOf("day"),
                        i = t.calendarFormat(this, r) || "sameElse",
                        o = a && (x(a[i]) ? a[i].call(this, n) : a[i]);
                    return this.format(o || this.localeData().calendar(i, this, vt(n)))
                }

                function Qt() {
                    return new g(this)
                }

                function ea(e, t) {
                    var a = M(e) ? e : vt(e);
                    return !(!this.isValid() || !a.isValid()) && (t = E(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                }

                function ta(e, t) {
                    var a = M(e) ? e : vt(e);
                    return !(!this.isValid() || !a.isValid()) && (t = E(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                }

                function aa(e, t, a, n) {
                    return n = n || "()", ("(" === n[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
                }

                function na(e, t) {
                    var a, n = M(e) ? e : vt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = E(t || "millisecond"), "millisecond" === t ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                }

                function ra(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }

                function ia(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }

                function oa(e, t, a) {
                    var n, r, i, o;
                    return this.isValid() ? (n = Ht(e, this), n.isValid() ? (r = 6e4 * (n.utcOffset() - this.utcOffset()), t = E(t), "year" === t || "month" === t || "quarter" === t ? (o = sa(this, n), "quarter" === t ? o /= 3 : "year" === t && (o /= 12)) : (i = this - n, o = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), a ? o : v(o)) : NaN) : NaN
                }

                function sa(e, t) {
                    var a, n, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        i = e.clone().add(r, "months");
                    return t - i < 0 ? (a = e.clone().add(r - 1, "months"), n = (t - i) / (i - a)) : (a = e.clone().add(r + 1, "months"), n = (t - i) / (a - i)), -(r + n) || 0
                }

                function da() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function ua() {
                    if (!this.isValid()) return null;
                    var e = this.clone().utc();
                    return e.year() < 0 || e.year() > 9999 ? K(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : x(Date.prototype.toISOString) ? this.toDate().toISOString() : K(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }

                function la() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var a = "[" + e + '("]',
                        n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }

                function ca(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var a = K(this, e);
                    return this.localeData().postformat(a)
                }

                function ma(e, t) {
                    return this.isValid() && (M(e) && e.isValid() || vt(e).isValid()) ? Ut({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function _a(e) {
                    return this.from(vt(), e)
                }

                function ha(e, t) {
                    return this.isValid() && (M(e) && e.isValid() || vt(e).isValid()) ? Ut({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function fa(e) {
                    return this.to(vt(), e)
                }

                function pa(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (t = at(e), null != t && (this._locale = t), this)
                }

                function ya() {
                    return this._locale
                }

                function ga(e) {
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

                function Ma(e) {
                    return void 0 === (e = E(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }

                function va() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function ba() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function La() {
                    return new Date(this.valueOf())
                }

                function Ya() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }

                function Da() {
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

                function ka() {
                    return this.isValid() ? this.toISOString() : null
                }

                function xa() {
                    return f(this)
                }

                function Ta() {
                    return c({}, h(this))
                }

                function wa() {
                    return h(this).overflow
                }

                function Sa() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function ja(e, t) {
                    G(0, [e, e.length], 0, t)
                }

                function Oa(e) {
                    return Aa.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Ha(e) {
                    return Aa.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function Ca() {
                    return De(this.year(), 1, 4)
                }

                function Pa() {
                    var e = this.localeData()._week;
                    return De(this.year(), e.dow, e.doy)
                }

                function Aa(e, t, a, n, r) {
                    var i;
                    return null == e ? Ye(this, n, r).year : (i = De(e, n, r), t > i && (t = i), Fa.call(this, e, t, a, n, r))
                }

                function Fa(e, t, a, n, r) {
                    var i = Le(e, t, a, n, r),
                        o = ve(i.year, 0, i.dayOfYear);
                    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
                }

                function Ea(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }

                function Wa(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Ia(e, t) {
                    t[lr] = b(1e3 * ("0." + e))
                }

                function za() {
                    return this._isUTC ? "UTC" : ""
                }

                function Ra() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Na(e) {
                    return vt(1e3 * e)
                }

                function Ba() {
                    return vt.apply(null, arguments).parseZone()
                }

                function Va(e) {
                    return e
                }

                function Ua(e, t, a, n) {
                    var r = at(),
                        i = m().set(n, t);
                    return r[a](i, e)
                }

                function Ja(e, t, a) {
                    if (s(e) && (t = e, e = void 0), e = e || "", null != t) return Ua(e, t, a, "month");
                    var n, r = [];
                    for (n = 0; n < 12; n++) r[n] = Ua(e, n, a, "month");
                    return r
                }

                function Ga(e, t, a, n) {
                    "boolean" == typeof e ? (s(t) && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, s(t) && (a = t, t = void 0), t = t || "");
                    var r = at(),
                        i = e ? r._week.dow : 0;
                    if (null != a) return Ua(t, (a + i) % 7, n, "day");
                    var o, d = [];
                    for (o = 0; o < 7; o++) d[o] = Ua(t, (o + i) % 7, n, "day");
                    return d
                }

                function qa(e, t) {
                    return Ja(e, t, "months")
                }

                function Za(e, t) {
                    return Ja(e, t, "monthsShort")
                }

                function Ka(e, t, a) {
                    return Ga(e, t, a, "weekdays")
                }

                function $a(e, t, a) {
                    return Ga(e, t, a, "weekdaysShort")
                }

                function Xa(e, t, a) {
                    return Ga(e, t, a, "weekdaysMin")
                }

                function Qa() {
                    var e = this._data;
                    return this._milliseconds = ni(this._milliseconds), this._days = ni(this._days), this._months = ni(this._months), e.milliseconds = ni(e.milliseconds), e.seconds = ni(e.seconds), e.minutes = ni(e.minutes), e.hours = ni(e.hours), e.months = ni(e.months), e.years = ni(e.years), this
                }

                function en(e, t, a, n) {
                    var r = Ut(t, a);
                    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
                }

                function tn(e, t) {
                    return en(this, e, t, 1)
                }

                function an(e, t) {
                    return en(this, e, t, -1)
                }

                function nn(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function rn() {
                    var e, t, a, n, r, i = this._milliseconds,
                        o = this._days,
                        s = this._months,
                        d = this._data;
                    return i >= 0 && o >= 0 && s >= 0 || i <= 0 && o <= 0 && s <= 0 || (i += 864e5 * nn(sn(s) + o), o = 0, s = 0), d.milliseconds = i % 1e3, e = v(i / 1e3), d.seconds = e % 60, t = v(e / 60), d.minutes = t % 60, a = v(t / 60), d.hours = a % 24, o += v(a / 24), r = v(on(o)), s += r, o -= nn(sn(r)), n = v(s / 12), s %= 12, d.days = o, d.months = s, d.years = n, this
                }

                function on(e) {
                    return 4800 * e / 146097
                }

                function sn(e) {
                    return 146097 * e / 4800
                }

                function dn(e) {
                    if (!this.isValid()) return NaN;
                    var t, a, n = this._milliseconds;
                    if ("month" === (e = E(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + on(t), "month" === e ? a : a / 12;
                    switch (t = this._days + Math.round(sn(this._months)), e) {
                        case "week":
                            return t / 7 + n / 6048e5;
                        case "day":
                            return t + n / 864e5;
                        case "hour":
                            return 24 * t + n / 36e5;
                        case "minute":
                            return 1440 * t + n / 6e4;
                        case "second":
                            return 86400 * t + n / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + n;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }

                function un() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
                }

                function ln(e) {
                    return function() {
                        return this.as(e)
                    }
                }

                function cn(e) {
                    return e = E(e), this.isValid() ? this[e + "s"]() : NaN
                }

                function mn(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }

                function _n() {
                    return v(this.days() / 7)
                }

                function hn(e, t, a, n, r) {
                    return r.relativeTime(t || 1, !!a, e, n)
                }

                function fn(e, t, a) {
                    var n = Ut(e).abs(),
                        r = Mi(n.as("s")),
                        i = Mi(n.as("m")),
                        o = Mi(n.as("h")),
                        s = Mi(n.as("d")),
                        d = Mi(n.as("M")),
                        u = Mi(n.as("y")),
                        l = r <= vi.ss && ["s", r] || r < vi.s && ["ss", r] || i <= 1 && ["m"] || i < vi.m && ["mm", i] || o <= 1 && ["h"] || o < vi.h && ["hh", o] || s <= 1 && ["d"] || s < vi.d && ["dd", s] || d <= 1 && ["M"] || d < vi.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                    return l[2] = t, l[3] = +e > 0, l[4] = a, hn.apply(null, l)
                }

                function pn(e) {
                    return void 0 === e ? Mi : "function" == typeof e && (Mi = e, !0)
                }

                function yn(e, t) {
                    return void 0 !== vi[e] && (void 0 === t ? vi[e] : (vi[e] = t, "s" === e && (vi.ss = t - 1), !0))
                }

                function gn(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(),
                        a = fn(this, !e, t);
                    return e && (a = t.pastFuture(+this, a)), t.postformat(a)
                }

                function Mn() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, a, n = bi(this._milliseconds) / 1e3,
                        r = bi(this._days),
                        i = bi(this._months);
                    e = v(n / 60), t = v(e / 60), n %= 60, e %= 60, a = v(i / 12), i %= 12;
                    var o = a,
                        s = i,
                        d = r,
                        u = t,
                        l = e,
                        c = n,
                        m = this.asSeconds();
                    return m ? (m < 0 ? "-" : "") + "P" + (o ? o + "Y" : "") + (s ? s + "M" : "") + (d ? d + "D" : "") + (u || l || c ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
                }
                var vn, bn;
                bn = Array.prototype.some ? Array.prototype.some : function(e) {
                    for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                        if (n in t && e.call(this, t[n], n, t)) return !0;
                    return !1
                };
                var Ln = bn,
                    Yn = t.momentProperties = [],
                    Dn = !1,
                    kn = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var xn;
                xn = Object.keys ? Object.keys : function(e) {
                    var t, a = [];
                    for (t in e) l(e, t) && a.push(t);
                    return a
                };
                var Tn, wn = xn,
                    Sn = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    jn = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    On = /\d{1,2}/,
                    Hn = {
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
                    Cn = {},
                    Pn = {},
                    An = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    Fn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    En = {},
                    Wn = {},
                    In = /\d/,
                    zn = /\d\d/,
                    Rn = /\d{3}/,
                    Nn = /\d{4}/,
                    Bn = /[+-]?\d{6}/,
                    Vn = /\d\d?/,
                    Un = /\d\d\d\d?/,
                    Jn = /\d\d\d\d\d\d?/,
                    Gn = /\d{1,3}/,
                    qn = /\d{1,4}/,
                    Zn = /[+-]?\d{1,6}/,
                    Kn = /\d+/,
                    $n = /[+-]?\d+/,
                    Xn = /Z|[+-]\d\d:?\d\d/gi,
                    Qn = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    er = /[+-]?\d+(\.\d{1,3})?/,
                    tr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    ar = {},
                    nr = {},
                    rr = 0,
                    ir = 1,
                    or = 2,
                    sr = 3,
                    dr = 4,
                    ur = 5,
                    lr = 6,
                    cr = 7,
                    mr = 8;
                Tn = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                    var t;
                    for (t = 0; t < this.length; ++t)
                        if (this[t] === e) return t;
                    return -1
                };
                var _r = Tn;
                G("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), G("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), G("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), F("month", "M"), I("month", 8), X("M", Vn), X("MM", Vn, zn), X("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), X("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ae(["M", "MM"], function(e, t) {
                    t[ir] = b(e) - 1
                }), ae(["MMM", "MMMM"], function(e, t, a, n) {
                    var r = a._locale.monthsParse(e, n, a._strict);
                    null != r ? t[ir] = r : h(a).invalidMonth = e
                });
                var hr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    fr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    pr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    yr = tr,
                    gr = tr;
                G("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), G(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), I("year", 1), X("Y", $n), X("YY", Vn, zn), X("YYYY", qn, Nn), X("YYYYY", Zn, Bn), X("YYYYYY", Zn, Bn), ae(["YYYYY", "YYYYYY"], rr), ae("YYYY", function(e, a) {
                    a[rr] = 2 === e.length ? t.parseTwoDigitYear(e) : b(e)
                }), ae("YY", function(e, a) {
                    a[rr] = t.parseTwoDigitYear(e)
                }), ae("Y", function(e, t) {
                    t[rr] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function(e) {
                    return b(e) + (b(e) > 68 ? 1900 : 2e3)
                };
                var Mr = R("FullYear", !0);
                G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), I("week", 5), I("isoWeek", 5), X("w", Vn), X("ww", Vn, zn), X("W", Vn), X("WW", Vn, zn), ne(["w", "ww", "W", "WW"], function(e, t, a, n) {
                    t[n.substr(0, 1)] = b(e)
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
                }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), X("d", Vn), X("e", Vn), X("E", Vn), X("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), X("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), X("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ne(["dd", "ddd", "dddd"], function(e, t, a, n) {
                    var r = a._locale.weekdaysParse(e, n, a._strict);
                    null != r ? t.d = r : h(a).invalidWeekday = e
                }), ne(["d", "e", "E"], function(e, t, a, n) {
                    t[n] = b(e)
                });
                var br = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Lr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Dr = tr,
                    kr = tr,
                    xr = tr;
                G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, Ve), G("k", ["kk", 2], 0, Ue), G("hmm", 0, 0, function() {
                    return "" + Ve.apply(this) + J(this.minutes(), 2)
                }), G("hmmss", 0, 0, function() {
                    return "" + Ve.apply(this) + J(this.minutes(), 2) + J(this.seconds(), 2)
                }), G("Hmm", 0, 0, function() {
                    return "" + this.hours() + J(this.minutes(), 2)
                }), G("Hmmss", 0, 0, function() {
                    return "" + this.hours() + J(this.minutes(), 2) + J(this.seconds(), 2)
                }), Je("a", !0), Je("A", !1), F("hour", "h"), I("hour", 13), X("a", Ge), X("A", Ge), X("H", Vn), X("h", Vn), X("k", Vn), X("HH", Vn, zn), X("hh", Vn, zn), X("kk", Vn, zn), X("hmm", Un), X("hmmss", Jn), X("Hmm", Un), X("Hmmss", Jn), ae(["H", "HH"], sr), ae(["k", "kk"], function(e, t, a) {
                    var n = b(e);
                    t[sr] = 24 === n ? 0 : n
                }), ae(["a", "A"], function(e, t, a) {
                    a._isPm = a._locale.isPM(e), a._meridiem = e
                }), ae(["h", "hh"], function(e, t, a) {
                    t[sr] = b(e), h(a).bigHour = !0
                }), ae("hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[sr] = b(e.substr(0, n)), t[dr] = b(e.substr(n)), h(a).bigHour = !0
                }), ae("hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[sr] = b(e.substr(0, n)), t[dr] = b(e.substr(n, 2)), t[ur] = b(e.substr(r)), h(a).bigHour = !0
                }), ae("Hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[sr] = b(e.substr(0, n)), t[dr] = b(e.substr(n))
                }), ae("Hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[sr] = b(e.substr(0, n)), t[dr] = b(e.substr(n, 2)), t[ur] = b(e.substr(r))
                });
                var Tr, wr = /[ap]\.?m?\.?/i,
                    Sr = R("Hours", !0),
                    jr = {
                        calendar: Sn,
                        longDateFormat: jn,
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: On,
                        relativeTime: Hn,
                        months: fr,
                        monthsShort: pr,
                        week: vr,
                        weekdays: br,
                        weekdaysMin: Yr,
                        weekdaysShort: Lr,
                        meridiemParse: wr
                    },
                    Or = {},
                    Hr = {},
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
                t.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
                var zr = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = vt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : p()
                    }),
                    Rr = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = vt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : p()
                    }),
                    Nr = function() {
                        return Date.now ? Date.now() : +new Date
                    },
                    Br = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                jt("Z", ":"), jt("ZZ", ""), X("Z", Qn), X("ZZ", Qn), ae(["Z", "ZZ"], function(e, t, a) {
                    a._useUTC = !0, a._tzm = Ot(Qn, e)
                });
                var Vr = /([\+\-]|\d\d)/gi;
                t.updateOffset = function() {};
                var Ur = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Jr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                Ut.fn = Tt.prototype, Ut.invalid = xt;
                var Gr = Zt(1, "add"),
                    qr = Zt(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Zr = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });
                G(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), G(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), ja("gggg", "weekYear"), ja("ggggg", "weekYear"), ja("GGGG", "isoWeekYear"), ja("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), X("G", $n), X("g", $n), X("GG", Vn, zn), X("gg", Vn, zn), X("GGGG", qn, Nn), X("gggg", qn, Nn), X("GGGGG", Zn, Bn), X("ggggg", Zn, Bn), ne(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                    t[n.substr(0, 2)] = b(e)
                }), ne(["gg", "GG"], function(e, a, n, r) {
                    a[r] = t.parseTwoDigitYear(e)
                }), G("Q", 0, "Qo", "quarter"), F("quarter", "Q"), I("quarter", 7), X("Q", In), ae("Q", function(e, t) {
                    t[ir] = 3 * (b(e) - 1)
                }), G("D", ["DD", 2], "Do", "date"), F("date", "D"), I("date", 9), X("D", Vn), X("DD", Vn, zn), X("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), ae(["D", "DD"], or), ae("Do", function(e, t) {
                    t[or] = b(e.match(Vn)[0], 10)
                });
                var Kr = R("Date", !0);
                G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), I("dayOfYear", 4), X("DDD", Gn), X("DDDD", Rn), ae(["DDD", "DDDD"], function(e, t, a) {
                    a._dayOfYear = b(e)
                }), G("m", ["mm", 2], 0, "minute"), F("minute", "m"), I("minute", 14), X("m", Vn), X("mm", Vn, zn), ae(["m", "mm"], dr);
                var $r = R("Minutes", !1);
                G("s", ["ss", 2], 0, "second"), F("second", "s"), I("second", 15), X("s", Vn), X("ss", Vn, zn), ae(["s", "ss"], ur);
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
                }), F("millisecond", "ms"), I("millisecond", 16), X("S", Gn, In), X("SS", Gn, zn), X("SSS", Gn, Rn);
                var Qr;
                for (Qr = "SSSS"; Qr.length <= 9; Qr += "S") X(Qr, Kn);
                for (Qr = "S"; Qr.length <= 9; Qr += "S") ae(Qr, Ia);
                var ei = R("Milliseconds", !1);
                G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
                var ti = g.prototype;
                ti.add = Gr, ti.calendar = Xt, ti.clone = Qt, ti.diff = oa, ti.endOf = Ma, ti.format = ca, ti.from = ma, ti.fromNow = _a, ti.to = ha, ti.toNow = fa, ti.get = V, ti.invalidAt = wa, ti.isAfter = ea, ti.isBefore = ta, ti.isBetween = aa, ti.isSame = na, ti.isSameOrAfter = ra, ti.isSameOrBefore = ia, ti.isValid = xa, ti.lang = Zr, ti.locale = pa, ti.localeData = ya, ti.max = Rr, ti.min = zr, ti.parsingFlags = Ta, ti.set = U, ti.startOf = ga, ti.subtract = qr, ti.toArray = Ya, ti.toObject = Da, ti.toDate = La, ti.toISOString = ua, ti.inspect = la, ti.toJSON = ka, ti.toString = da, ti.unix = ba, ti.valueOf = va, ti.creationData = Sa, ti.year = Mr, ti.isLeapYear = ge, ti.weekYear = Oa, ti.isoWeekYear = Ha, ti.quarter = ti.quarters = Ea, ti.month = ce, ti.daysInMonth = me, ti.week = ti.weeks = we, ti.isoWeek = ti.isoWeeks = Se, ti.weeksInYear = Pa, ti.isoWeeksInYear = Ca, ti.date = Kr, ti.day = ti.days = Ee, ti.weekday = We, ti.isoWeekday = Ie, ti.dayOfYear = Wa, ti.hour = ti.hours = Sr, ti.minute = ti.minutes = $r, ti.second = ti.seconds = Xr, ti.millisecond = ti.milliseconds = ei, ti.utcOffset = Pt, ti.utc = Ft, ti.local = Et, ti.parseZone = Wt, ti.hasAlignedHourOffset = It, ti.isDST = zt, ti.isLocal = Nt, ti.isUtcOffset = Bt, ti.isUtc = Vt, ti.isUTC = Vt, ti.zoneAbbr = za, ti.zoneName = Ra, ti.dates = D("dates accessor is deprecated. Use date instead.", Kr), ti.months = D("months accessor is deprecated. Use month instead", ce), ti.years = D("years accessor is deprecated. Use year instead", Mr), ti.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", At), ti.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Rt);
                var ai = S.prototype;
                ai.calendar = j, ai.longDateFormat = O, ai.invalidDate = H, ai.ordinal = C, ai.preparse = Va, ai.postformat = Va, ai.relativeTime = P, ai.pastFuture = A, ai.set = T, ai.months = oe, ai.monthsShort = se, ai.monthsParse = ue, ai.monthsRegex = he, ai.monthsShortRegex = _e, ai.week = ke, ai.firstDayOfYear = Te, ai.firstDayOfWeek = xe, ai.weekdays = He, ai.weekdaysMin = Pe, ai.weekdaysShort = Ce, ai.weekdaysParse = Fe, ai.weekdaysRegex = ze, ai.weekdaysShortRegex = Re, ai.weekdaysMinRegex = Ne, ai.isPM = qe, ai.meridiem = Ze, Qe("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), t.lang = D("moment.lang is deprecated. Use moment.locale instead.", Qe), t.langData = D("moment.langData is deprecated. Use moment.localeData instead.", at);
                var ni = Math.abs,
                    ri = ln("ms"),
                    ii = ln("s"),
                    oi = ln("m"),
                    si = ln("h"),
                    di = ln("d"),
                    ui = ln("w"),
                    li = ln("M"),
                    ci = ln("y"),
                    mi = mn("milliseconds"),
                    _i = mn("seconds"),
                    hi = mn("minutes"),
                    fi = mn("hours"),
                    pi = mn("days"),
                    yi = mn("months"),
                    gi = mn("years"),
                    Mi = Math.round,
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
                return Li.isValid = kt, Li.abs = Qa, Li.add = tn, Li.subtract = an, Li.as = dn, Li.asMilliseconds = ri, Li.asSeconds = ii, Li.asMinutes = oi, Li.asHours = si, Li.asDays = di, Li.asWeeks = ui, Li.asMonths = li, Li.asYears = ci, Li.valueOf = un, Li._bubble = rn, Li.get = cn, Li.milliseconds = mi, Li.seconds = _i, Li.minutes = hi, Li.hours = fi, Li.days = pi, Li.weeks = _n, Li.months = yi, Li.years = gi, Li.humanize = gn, Li.toISOString = Mn, Li.toString = Mn, Li.toJSON = Mn, Li.locale = pa, Li.localeData = ya, Li.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Mn), Li.lang = Zr, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), X("x", $n), X("X", er), ae("X", function(e, t, a) {
                        a._d = new Date(1e3 * parseFloat(e, 10))
                    }), ae("x", function(e, t, a) {
                        a._d = new Date(b(e))
                    }), t.version = "2.18.1",
                    function(e) {
                        vn = e
                    }(vt), t.fn = ti, t.min = Lt, t.max = Yt, t.now = Nr, t.utc = m, t.unix = Na, t.months = qa, t.isDate = d, t.locale = Qe, t.invalid = p, t.duration = Ut, t.isMoment = M, t.weekdays = Ka, t.parseZone = Ba, t.localeData = at, t.isDuration = wt, t.monthsShort = Za, t.weekdaysMin = Xa, t.defineLocale = et, t.updateLocale = tt, t.locales = nt, t.weekdaysShort = $a, t.normalizeUnits = E, t.relativeTimeRounding = pn, t.relativeTimeThreshold = yn, t.calendarFormat = $t, t.prototype = ti, t
            })
        }).call(t, a(447)(e))
    },
    817: function(e, t, a) {
        function n(e, t) {
            if (l(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var a = t || {},
                n = a.additionalDigits;
            n = null == n ? _ : Number(n);
            var u = r(e),
                c = i(u.date, n),
                h = c.year,
                f = c.restDateString,
                p = o(f, h);
            if (p) {
                var y, g = p.getTime(),
                    M = 0;
                return u.time && (M = s(u.time)), u.timezone ? y = d(u.timezone) : (y = new Date(g + M).getTimezoneOffset(), y = new Date(g + M + y * m).getTimezoneOffset()), new Date(g + M + y * m)
            }
            return new Date(e)
        }

        function r(e) {
            var t, a = {},
                n = e.split(h);
            if (f.test(n[0]) ? (a.date = null, t = n[0]) : (a.date = n[0], t = n[1]), t) {
                var r = w.exec(t);
                r ? (a.time = t.replace(r[1], ""), a.timezone = r[1]) : a.time = t
            }
            return a
        }

        function i(e, t) {
            var a, n = y[t],
                r = M[t];
            if (a = g.exec(e) || r.exec(e)) {
                var i = a[1];
                return {
                    year: parseInt(i, 10),
                    restDateString: e.slice(i.length)
                }
            }
            if (a = p.exec(e) || n.exec(e)) {
                var o = a[1];
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
            var a, n, r, i;
            if (0 === e.length) return n = new Date(0), n.setUTCFullYear(t), n;
            if (a = v.exec(e)) return n = new Date(0), r = parseInt(a[1], 10) - 1, n.setUTCFullYear(t, r), n;
            if (a = b.exec(e)) {
                n = new Date(0);
                var o = parseInt(a[1], 10);
                return n.setUTCFullYear(t, 0, o), n
            }
            if (a = L.exec(e)) {
                n = new Date(0), r = parseInt(a[1], 10) - 1;
                var s = parseInt(a[2], 10);
                return n.setUTCFullYear(t, r, s), n
            }
            if (a = Y.exec(e)) return i = parseInt(a[1], 10) - 1, u(t, i);
            if (a = D.exec(e)) {
                i = parseInt(a[1], 10) - 1;
                return u(t, i, parseInt(a[2], 10) - 1)
            }
            return null
        }

        function s(e) {
            var t, a, n;
            if (t = k.exec(e)) return (a = parseFloat(t[1].replace(",", "."))) % 24 * c;
            if (t = x.exec(e)) return a = parseInt(t[1], 10), n = parseFloat(t[2].replace(",", ".")), a % 24 * c + n * m;
            if (t = T.exec(e)) {
                a = parseInt(t[1], 10), n = parseInt(t[2], 10);
                var r = parseFloat(t[3].replace(",", "."));
                return a % 24 * c + n * m + 1e3 * r
            }
            return null
        }

        function d(e) {
            var t, a;
            return (t = S.exec(e)) ? 0 : (t = j.exec(e)) ? (a = 60 * parseInt(t[2], 10), "+" === t[1] ? -a : a) : (t = O.exec(e), t ? (a = 60 * parseInt(t[2], 10) + parseInt(t[3], 10), "+" === t[1] ? -a : a) : 0)
        }

        function u(e, t, a) {
            t = t || 0, a = a || 0;
            var n = new Date(0);
            n.setUTCFullYear(e, 0, 4);
            var r = n.getUTCDay() || 7,
                i = 7 * t + a + 1 - r;
            return n.setUTCDate(n.getUTCDate() + i), n
        }
        var l = a(1038),
            c = 36e5,
            m = 6e4,
            _ = 2,
            h = /[T ]/,
            f = /:/,
            p = /^(\d{2})$/,
            y = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            g = /^(\d{4})/,
            M = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            v = /^-(\d{2})$/,
            b = /^-?(\d{3})$/,
            L = /^-?(\d{2})-?(\d{2})$/,
            Y = /^-?W(\d{2})$/,
            D = /^-?W(\d{2})-?(\d{1})$/,
            k = /^(\d{2}([.,]\d*)?)$/,
            x = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            T = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            w = /([Z+-].*)$/,
            S = /^(Z)$/,
            j = /^([+-])(\d{2})$/,
            O = /^([+-])(\d{2}):?(\d{2})$/;
        e.exports = n
    },
    821: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = {
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
    822: function(e, t, a) {
        "use strict";
        e.exports = a(1023), e.exports.easing = a(1503), e.exports.canvas = a(1504), e.exports.options = a(1505)
    },
    827: function(e, t, a) {
        "use strict";
        var n = a(822);
        e.exports = {
            _set: function(e, t) {
                return n.merge(this[e] || (this[e] = {}), t)
            }
        }
    },
    831: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        });
        var n = a(0),
            r = a(2),
            i = a(17),
            o = function() {
                function e() {}
                return e.get = function(e, t, a) {
                    return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "GET"
                                    }), a)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, a) {
                    return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "PUT"
                                    }), a)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, a) {
                    return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "POST"
                                    }), a)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, a) {
                    return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, n.__assign({}, t, {
                                        method: "DELETE"
                                    }), a)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, a) {
                    return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, void 0, function() {
                        var r, i;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = this.constructOptions(t, a), r = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, r), [4, this._fetch(e, t)];
                                case 1:
                                    return i = n.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var t, a, r;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return a = n.sent(), e.ok ? t.body = a : t.error = a, [3, 4];
                                case 3:
                                    return r = n.sent(), t.requestError = r, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: n.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var a = r.n.store.getState(),
                        n = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(i.c)(a);
                    return o && (n.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (n["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        n[e] && delete n[e]
                    }), n
                }, e
            }()
    },
    851: function(e, t, a) {
        "use strict";

        function n(e, t, a, n) {
            var i, o, s, d, u, l, c, m, _, h = Object.keys(a);
            for (i = 0, o = h.length; i < o; ++i)
                if (s = h[i], l = a[s], t.hasOwnProperty(s) || (t[s] = l), (d = t[s]) !== l && "_" !== s[0]) {
                    if (e.hasOwnProperty(s) || (e[s] = d), u = e[s], (c = typeof l) === typeof u)
                        if ("string" === c) {
                            if (m = r(u), m.valid && (_ = r(l), _.valid)) {
                                t[s] = _.mix(m, n).rgbString();
                                continue
                            }
                        } else if ("number" === c && isFinite(u) && isFinite(l)) {
                        t[s] = u + (l - u) * n;
                        continue
                    }
                    t[s] = l
                }
        }
        var r = a(1128),
            i = a(822),
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
                    a = t._model,
                    r = t._start,
                    i = t._view;
                return a && 1 !== e ? (i || (i = t._view = {}), r || (r = t._start = {}), n(r, i, a, e), t) : (t._view = a, t._start = null, t)
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
    879: function(e, t, a) {
        "use strict";
        e.exports = {}, e.exports.Arc = a(1511), e.exports.Line = a(1512), e.exports.Point = a(1513), e.exports.Rectangle = a(1514)
    },
    903: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = t.getFullYear(),
                n = new Date(0);
            n.setFullYear(a + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var o = i(n),
                s = new Date(0);
            s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0);
            var d = i(s);
            return t.getTime() >= o.getTime() ? a + 1 : t.getTime() >= d.getTime() ? a : a - 1
        }
        var r = a(817),
            i = a(904);
        e.exports = n
    },
    904: function(e, t, a) {
        function n(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
        var r = a(1019);
        e.exports = n
    },
    905: function(e, t, a) {
        function n(e) {
            var t = r(e);
            return t.setHours(0, 0, 0, 0), t
        }
        var r = a(817);
        e.exports = n
    },
    912: function(e, t, a) {
        "use strict";

        function n(e) {
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
        a.d(o, "channelAchievements", function() {
            return n
        }), a.d(o, "achievement", function() {
            return r
        });
        var s = a(1053),
            d = a(1271),
            u = a(1006),
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
                return e.lastNDays = function(t, a) {
                    return void 0 === a && (a = new Date), new e(Object(u.subDays)(a, t), a)
                }, e.prototype.isSameLengthAs = function(e) {
                    return this.duration.isSameLengthAs(e.duration)
                }, e.prototype.diff = function(e) {
                    return this.duration.diff(e.duration)
                }, e
            }();
        a.d(t, "b", function() {
            return o
        }), a.d(t, "c", function() {
            return s.a
        }), a.d(t, !1, function() {}), a.d(t, !1, function() {
            return d.a
        }), a.d(t, "a", function() {
            return _
        }), a.d(t, "d", function() {
            return i
        }), a.d(t, !1, function() {
            return m
        })
    },
    995: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = Number(t);
            return a.setDate(a.getDate() + n), a
        }
        var r = a(817);
        e.exports = n
    },
    996: function(e, t, a) {
        function n(e, t) {
            var a = r(e).getTime(),
                n = Number(t);
            return new Date(a + n)
        }
        var r = a(817);
        e.exports = n
    },
    997: function(e, t, a) {
        function n(e) {
            var t = r(e),
                a = new Date(0);
            return a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0), i(a)
        }
        var r = a(903),
            i = a(904);
        e.exports = n
    },
    998: function(e, t, a) {
        function n(e, t) {
            var a = r(e),
                n = a.getTime(),
                i = r(t),
                o = i.getTime();
            return n < o ? -1 : n > o ? 1 : 0
        }
        var r = a(817);
        e.exports = n
    },
    999: function(e, t, a) {
        "use strict";
        var n = a(822);
        e.exports = {
            generators: {
                linear: function(e, t) {
                    var a, r = [];
                    if (e.stepSize && e.stepSize > 0) a = e.stepSize;
                    else {
                        var i = n.niceNum(t.max - t.min, !1);
                        a = n.niceNum(i / (e.maxTicks - 1), !0)
                    }
                    var o = Math.floor(t.min / a) * a,
                        s = Math.ceil(t.max / a) * a;
                    e.min && e.max && e.stepSize && n.almostWhole((e.max - e.min) / e.stepSize, a / 1e3) && (o = e.min, s = e.max);
                    var d = (s - o) / a;
                    d = n.almostEquals(d, Math.round(d), a / 1e3) ? Math.round(d) : Math.ceil(d), r.push(void 0 !== e.min ? e.min : o);
                    for (var u = 1; u < d; ++u) r.push(o + u * a);
                    return r.push(void 0 !== e.max ? e.max : s), r
                },
                logarithmic: function(e, t) {
                    var a, r, i = [],
                        o = n.valueOrDefault,
                        s = o(e.min, Math.pow(10, Math.floor(n.log10(t.min)))),
                        d = Math.floor(n.log10(t.max)),
                        u = Math.ceil(t.max / Math.pow(10, d));
                    0 === s ? (a = Math.floor(n.log10(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, a)), i.push(s), s = r * Math.pow(10, a)) : (a = Math.floor(n.log10(s)), r = Math.floor(s / Math.pow(10, a)));
                    do {
                        i.push(s), ++r, 10 === r && (r = 1, ++a), s = r * Math.pow(10, a)
                    } while (a < d || a === d && r < u);
                    var l = o(e.max, s);
                    return i.push(l), i
                }
            },
            formatters: {
                values: function(e) {
                    return n.isArray(e) ? e : "" + e
                },
                linear: function(e, t, a) {
                    var r = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                    Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
                    var i = n.log10(Math.abs(r)),
                        o = "";
                    if (0 !== e) {
                        var s = -1 * Math.floor(i);
                        s = Math.max(Math.min(s, 20), 0), o = e.toFixed(s)
                    } else o = "0";
                    return o
                },
                logarithmic: function(e, t, a) {
                    var r = e / Math.pow(10, Math.floor(n.log10(e)));
                    return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === a.length - 1 ? e.toExponential() : ""
                }
            }
        }
    }
});
//# sourceMappingURL=pages.teams-dashboard-b1d228c246ba1be68787d563baae1a92.js.map