webpackJsonp([46], {
    "+/J2": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMilliseconds(a), n
        }
    },
    "+TF1": function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n, u, c, l;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return n = "/v5/channels/" + e.id + "/analytics/sessions_summary", u = a.stringify(Object(i.i)(t)), c = [n, u].join("?"), [4, Object(o.a)({
                                path: c
                            })];
                        case 1:
                            return (l = r.sent()).isError() ? [2, {
                                isError: !0,
                                streamSummaries: []
                            }] : [2, {
                                isError: !1,
                                streamSummaries: Object(s.b)(l.body, e)
                            }]
                    }
                })
            })
        };
        var r = n("TToO"),
            a = n("OAwv"),
            i = (n.n(a), n("u4Vk")),
            o = n("6w0d"),
            s = n("uYc/");
        n.d(t, "a", function() {
            return s.a
        })
    },
    "+sSA": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(999), t
        }
    },
    "/dIK": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setDate(a), n
        }
    },
    "024F": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMilliseconds()
        }
    },
    "06ME": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = n("6sO2"),
            o = n("vH/s"),
            s = n("zDNk"),
            u = n("ytWG"),
            c = n("pD3p"),
            l = n("CIox"),
            d = n("7qqA"),
            f = n("wuJz"),
            h = n("lbHh"),
            m = {
                get: function(e) {
                    var t = h.get("streamSummary" + e),
                        n = 0;
                    if (t) try {
                        n = JSON.parse(t).endTime
                    } catch (e) {}
                    return n
                },
                set: function(e, t) {
                    h.set("streamSummary" + e, {
                        wasSeen: !0,
                        endTime: t
                    }, {
                        expires: Object(f.addDays)(new Date, 30),
                        domain: "." + location.hostname.split(".").reverse().slice(0, 2).reverse().join(".")
                    })
                }
            };
        var p = function(e) {
            return a.createElement(l.c, {
                path: "/:channelName/dashboard/stream-summary/:sessionID?"
            }, function(t) {
                return function(e, t) {
                    var n = t.streamSummaryQuery;
                    if (n.isLoading) return !1;
                    var r = t.lastSeenStore || m,
                        a = n.channel.id,
                        i = n.streamSummaries[n.streamSummaries.length - 1],
                        o = i && i.interval.end.getTime() || 0;
                    if (e && !e.params.sessionID) return r.set(a, o), !1;
                    var s = e && e.params.sessionID && d.b.intervalFromID(e.params.sessionID),
                        u = s && s.end.getTime();
                    if (u && u === o) return r.set(a, o), !1;
                    var c = r.get(a);
                    if (o <= c) return !1;
                    return !0
                }(t.match, e) && e.children
            })
        };
        var v = {
                "data-test-selector": "stream-summary-hotspot-selector"
            },
            g = {
                "data-test-selector": "stats-link-selector"
            },
            b = {
                "data-test-selector": "revenue-link-selector"
            },
            y = {
                "data-test-selector": "channel-analytics-hotspot-selector"
            },
            w = {
                "data-test-selector": "channel-analytics-link-selector"
            },
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(a.Fragment, null, a.createElement(s.a, null, Object(i.d)("Analytics", "DashboardNav")), a.createElement("ul", null, a.createElement("li", null, a.createElement(c.a, r.__assign({}, w, {
                        linkTo: {
                            pathname: "/" + this.props.channelName + "/dashboard/channel-analytics",
                            state: {
                                medium: o.PageviewMedium.DashboardLeftNav
                            }
                        }
                    }), Object(i.d)("Channel", "DashboardNav"), this.isChannelAnalyticsNew && a.createElement(u.a, r.__assign({}, y)))), a.createElement("li", null, a.createElement(c.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard/stream-summary"
                    }, Object(i.d)("Stream Summary", "DashboardNav"), a.createElement(p, {
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }, a.createElement(u.a, r.__assign({}, v))))), this.canAccessStats && a.createElement("li", null, a.createElement(c.a, r.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/stats",
                        external: !0
                    }, g), Object(i.d)("Stats", "DashboardNav"))), this.canAccessRevenue && a.createElement("li", null, a.createElement(c.a, r.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/revenue",
                        external: !0
                    }, b), Object(i.d)("Revenue", "DashboardNav")))))
                }, Object.defineProperty(t.prototype, "isChannelAnalyticsNew", {
                    get: function() {
                        return !i.l.get("seenChannelAnalytics", !1)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canAccessRevenue", {
                    get: function() {
                        var e = this.props.permissions,
                            t = e.isOwner,
                            n = e.isStaff,
                            r = e.isPartner,
                            a = e.isAffiliate;
                        return (t || n) && (r || a)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canAccessStats", {
                    get: function() {
                        return this.props.permissions.isOwner || this.props.permissions.isStaff
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component);
        n.d(t, "a", function() {
            return "seenChannelAnalytics"
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, !1, function() {
            return b
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, !1, function() {
            return w
        }), n.d(t, "b", function() {
            return x
        })
    },
    "0LAu": function(e, t, n) {
        var r = n("MIQa");
        e.exports = function() {
            return r(new Date)
        }
    },
    "0UyA": function(e, t, n) {
        var r = n("4Z4o");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "0YGC": function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r - 1), a.setHours(23, 59, 59, 999), a
        }
    },
    "0aH9": function(e, t, n) {
        var r = n("3znZ"),
            a = 6e4,
            i = 6048e5;
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                u = o.getTime() - o.getTimezoneOffset() * a;
            return Math.round((s - u) / i)
        }
    },
    "0oN5": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), r(e).getTime() === r(t).getTime()
        }
    },
    "11Bn": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return r(e)
                }),
                t = Math.max.apply(null, e);
            return new Date(t)
        }
    },
    "1gtq": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), r(e).getTime() === r(t).getTime()
        }
    },
    "1rLR": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 3 * n)
        }
    },
    "1udo": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function() {
            return r(new Date)
        }
    },
    "25hp": function(e, t, n) {
        var r = n("G7No");
        e.exports = function(e, t) {
            var n = r(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "2lB6": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n, a) {
            var i = r(e).getTime(),
                o = r(t).getTime(),
                s = r(n).getTime(),
                u = r(a).getTime();
            if (i > o || s > u) throw new Error("The start of the range cannot be after the end of the range");
            return i < u && s < o
        }
    },
    "3EIC": function(e, t, n) {
        var r = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                o = n.getMonth() + i,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var u = a(s);
            return n.setMonth(o, Math.min(u, n.getDate())), n
        }
    },
    "3g9B": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getDate()
        }
    },
    "3nPg": function(e, t, n) {
        var r = n("G7No"),
            a = 6e4;
        e.exports = function(e, t) {
            var n = r(e, t) / a;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3znZ": function(e, t, n) {
        var r = n("u/4p");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "4LxA": function(e, t, n) {
        var r = n("iRXW");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t || 6 === t
        }
    },
    "4Z4o": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 12 * n)
        }
    },
    "4zIR": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n) {
            var a = r(e).getTime(),
                i = r(t).getTime(),
                o = r(n).getTime();
            if (i > o) throw new Error("The start of the range cannot be after the end of the range");
            return a >= i && a <= o
        }
    },
    "5qwL": function(e, t, n) {
        var r = n("VaeB");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
    },
    "6CZb": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime() > (new Date).getTime()
        }
    },
    "6SO/": function(e, t, n) {
        var r = n("gAt4");
        e.exports = function(e, t) {
            var n = r(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "6UW8": function(e, t, n) {
        /*!
         * Pikaday
         *
         * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
         */
        ! function(t, r) {
            "use strict";
            var a;
            try {
                a = n("PJh5")
            } catch (e) {}
            e.exports = r(a)
        }(0, function(e) {
            "use strict";
            var t = "function" == typeof e,
                n = !!window.addEventListener,
                r = window.document,
                a = window.setTimeout,
                i = function(e, t, r, a) {
                    n ? e.addEventListener(t, r, !!a) : e.attachEvent("on" + t, r)
                },
                o = function(e, t, r, a) {
                    n ? e.removeEventListener(t, r, !!a) : e.detachEvent("on" + t, r)
                },
                s = function(e, t) {
                    return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
                },
                u = function(e) {
                    return /Array/.test(Object.prototype.toString.call(e))
                },
                c = function(e) {
                    return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime())
                },
                l = function(e) {
                    var t = e.getDay();
                    return 0 === t || 6 === t
                },
                d = function(e, t) {
                    return [31, function(e) {
                        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                    }(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                f = function(e) {
                    c(e) && e.setHours(0, 0, 0, 0)
                },
                h = function(e, t) {
                    return e.getTime() === t.getTime()
                },
                m = function(e, t, n) {
                    var r, a;
                    for (r in t)(a = void 0 !== e[r]) && "object" == typeof t[r] && null !== t[r] && void 0 === t[r].nodeName ? c(t[r]) ? n && (e[r] = new Date(t[r].getTime())) : u(t[r]) ? n && (e[r] = t[r].slice(0)) : e[r] = m({}, t[r], n) : !n && a || (e[r] = t[r]);
                    return e
                },
                p = function(e, t, n) {
                    var a;
                    r.createEvent ? ((a = r.createEvent("HTMLEvents")).initEvent(t, !0, !1), a = m(a, n), e.dispatchEvent(a)) : r.createEventObject && (a = r.createEventObject(), a = m(a, n), e.fireEvent("on" + t, a))
                },
                v = function(e) {
                    return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12), e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12), e
                },
                g = {
                    field: null,
                    bound: void 0,
                    position: "bottom left",
                    reposition: !0,
                    format: "YYYY-MM-DD",
                    toString: null,
                    parse: null,
                    defaultDate: null,
                    setDefaultDate: !1,
                    firstDay: 0,
                    formatStrict: !1,
                    minDate: null,
                    maxDate: null,
                    yearRange: 10,
                    showWeekNumber: !1,
                    pickWholeWeek: !1,
                    minYear: 0,
                    maxYear: 9999,
                    minMonth: void 0,
                    maxMonth: void 0,
                    startRange: null,
                    endRange: null,
                    isRTL: !1,
                    yearSuffix: "",
                    showMonthAfterYear: !1,
                    showDaysInNextAndPreviousMonths: !1,
                    enableSelectionDaysInNextAndPreviousMonths: !1,
                    numberOfMonths: 1,
                    mainCalendar: "left",
                    container: void 0,
                    blurFieldOnSelect: !0,
                    i18n: {
                        previousMonth: "Previous Month",
                        nextMonth: "Next Month",
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    },
                    theme: null,
                    events: [],
                    onSelect: null,
                    onOpen: null,
                    onClose: null,
                    onDraw: null,
                    keyboardInput: !0
                },
                b = function(e, t, n) {
                    for (t += e.firstDay; t >= 7;) t -= 7;
                    return n ? e.i18n.weekdaysShort[t] : e.i18n.weekdays[t]
                },
                y = function(e) {
                    var t = [],
                        n = "false";
                    if (e.isEmpty) {
                        if (!e.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
                        t.push("is-outside-current-month"), e.enableSelectionDaysInNextAndPreviousMonths || t.push("is-selection-disabled")
                    }
                    return e.isDisabled && t.push("is-disabled"), e.isToday && t.push("is-today"), e.isSelected && (t.push("is-selected"), n = "true"), e.hasEvent && t.push("has-event"), e.isInRange && t.push("is-inrange"), e.isStartRange && t.push("is-startrange"), e.isEndRange && t.push("is-endrange"), '<td data-day="' + e.day + '" class="' + t.join(" ") + '" aria-selected="' + n + '"><button class="pika-button pika-day" type="button" data-pika-year="' + e.year + '" data-pika-month="' + e.month + '" data-pika-day="' + e.day + '">' + e.day + "</button></td>"
                },
                w = function(e, t, n, r) {
                    return '<tr class="pika-row' + (n ? " pick-whole-week" : "") + (r ? " is-selected" : "") + '">' + (t ? e.reverse() : e).join("") + "</tr>"
                },
                x = function(e, t, n, r, a, i) {
                    var o, s, c, l, d, f = e._o,
                        h = n === f.minYear,
                        m = n === f.maxYear,
                        p = '<div id="' + i + '" class="pika-title" role="heading" aria-live="assertive">',
                        v = !0,
                        g = !0;
                    for (c = [], o = 0; o < 12; o++) c.push('<option value="' + (n === a ? o - t : 12 + o - t) + '"' + (o === r ? ' selected="selected"' : "") + (h && o < f.minMonth || m && o > f.maxMonth ? 'disabled="disabled"' : "") + ">" + f.i18n.months[o] + "</option>");
                    for (l = '<div class="pika-label">' + f.i18n.months[r] + '<select class="pika-select pika-select-month" tabindex="-1">' + c.join("") + "</select></div>", u(f.yearRange) ? (o = f.yearRange[0], s = f.yearRange[1] + 1) : (o = n - f.yearRange, s = 1 + n + f.yearRange), c = []; o < s && o <= f.maxYear; o++) o >= f.minYear && c.push('<option value="' + o + '"' + (o === n ? ' selected="selected"' : "") + ">" + o + "</option>");
                    return d = '<div class="pika-label">' + n + f.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + c.join("") + "</select></div>", f.showMonthAfterYear ? p += d + l : p += l + d, h && (0 === r || f.minMonth >= r) && (v = !1), m && (11 === r || f.maxMonth <= r) && (g = !1), 0 === t && (p += '<button class="pika-prev' + (v ? "" : " is-disabled") + '" type="button">' + f.i18n.previousMonth + "</button>"), t === e._o.numberOfMonths - 1 && (p += '<button class="pika-next' + (g ? "" : " is-disabled") + '" type="button">' + f.i18n.nextMonth + "</button>"), p + "</div>"
                },
                D = function(e, t, n) {
                    return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + n + '">' + function(e) {
                        var t, n = [];
                        for (e.showWeekNumber && n.push("<th></th>"), t = 0; t < 7; t++) n.push('<th scope="col"><abbr title="' + b(e, t) + '">' + b(e, t, !0) + "</abbr></th>");
                        return "<thead><tr>" + (e.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
                    }(e) + ("<tbody>" + t.join("") + "</tbody>") + "</table>"
                },
                _ = function(o) {
                    var u = this,
                        l = u.config(o);
                    u._onMouseDown = function(e) {
                        if (u._v) {
                            var t = (e = e || window.event).target || e.srcElement;
                            if (t)
                                if (s(t, "is-disabled") || (!s(t, "pika-button") || s(t, "is-empty") || s(t.parentNode, "is-disabled") ? s(t, "pika-prev") ? u.prevMonth() : s(t, "pika-next") && u.nextMonth() : (u.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day"))), l.bound && a(function() {
                                        u.hide(), l.blurFieldOnSelect && l.field && l.field.blur()
                                    }, 100))), s(t, "pika-select")) u._c = !0;
                                else {
                                    if (!e.preventDefault) return e.returnValue = !1, !1;
                                    e.preventDefault()
                                }
                        }
                    }, u._onChange = function(e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        t && (s(t, "pika-select-month") ? u.gotoMonth(t.value) : s(t, "pika-select-year") && u.gotoYear(t.value))
                    }, u._onKeyChange = function(e) {
                        if (e = e || window.event, u.isVisible()) switch (e.keyCode) {
                            case 13:
                            case 27:
                                l.field && l.field.blur();
                                break;
                            case 37:
                                e.preventDefault(), u.adjustDate("subtract", 1);
                                break;
                            case 38:
                                u.adjustDate("subtract", 7);
                                break;
                            case 39:
                                u.adjustDate("add", 1);
                                break;
                            case 40:
                                u.adjustDate("add", 7)
                        }
                    }, u._onInputChange = function(n) {
                        var r;
                        n.firedBy !== u && (r = l.parse ? l.parse(l.field.value, l.format) : t ? (r = e(l.field.value, l.format, l.formatStrict)) && r.isValid() ? r.toDate() : null : new Date(Date.parse(l.field.value)), c(r) && u.setDate(r), u._v || u.show())
                    }, u._onInputFocus = function() {
                        u.show()
                    }, u._onInputClick = function() {
                        u.show()
                    }, u._onInputBlur = function() {
                        var e = r.activeElement;
                        do {
                            if (s(e, "pika-single")) return
                        } while (e = e.parentNode);
                        u._c || (u._b = a(function() {
                            u.hide()
                        }, 50)), u._c = !1
                    }, u._onClick = function(e) {
                        var t = (e = e || window.event).target || e.srcElement,
                            r = t;
                        if (t) {
                            !n && s(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), i(t, "change", u._onChange)));
                            do {
                                if (s(r, "pika-single") || r === l.trigger) return
                            } while (r = r.parentNode);
                            u._v && t !== l.trigger && r !== l.trigger && u.hide()
                        }
                    }, u.el = r.createElement("div"), u.el.className = "pika-single" + (l.isRTL ? " is-rtl" : "") + (l.theme ? " " + l.theme : ""), i(u.el, "mousedown", u._onMouseDown, !0), i(u.el, "touchend", u._onMouseDown, !0), i(u.el, "change", u._onChange), l.keyboardInput && i(r, "keydown", u._onKeyChange), l.field && (l.container ? l.container.appendChild(u.el) : l.bound ? r.body.appendChild(u.el) : l.field.parentNode.insertBefore(u.el, l.field.nextSibling), i(l.field, "change", u._onInputChange), l.defaultDate || (t && l.field.value ? l.defaultDate = e(l.field.value, l.format).toDate() : l.defaultDate = new Date(Date.parse(l.field.value)), l.setDefaultDate = !0));
                    var d = l.defaultDate;
                    c(d) ? l.setDefaultDate ? u.setDate(d, !0) : u.gotoDate(d) : u.gotoDate(new Date), l.bound ? (this.hide(), u.el.className += " is-bound", i(l.trigger, "click", u._onInputClick), i(l.trigger, "focus", u._onInputFocus), i(l.trigger, "blur", u._onInputBlur)) : this.show()
                };
            return _.prototype = {
                config: function(e) {
                    this._o || (this._o = m({}, g, !0));
                    var t = m(this._o, e, !0);
                    t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null;
                    var n = parseInt(t.numberOfMonths, 10) || 1;
                    if (t.numberOfMonths = n > 4 ? 4 : n, c(t.minDate) || (t.minDate = !1), c(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && this.setMaxDate(t.maxDate), u(t.yearRange)) {
                        var r = (new Date).getFullYear() - 10;
                        t.yearRange[0] = parseInt(t.yearRange[0], 10) || r, t.yearRange[1] = parseInt(t.yearRange[1], 10) || r
                    } else t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || g.yearRange, t.yearRange > 100 && (t.yearRange = 100);
                    return t
                },
                toString: function(n) {
                    return n = n || this._o.format, c(this._d) ? this._o.toString ? this._o.toString(this._d, n) : t ? e(this._d).format(n) : this._d.toDateString() : ""
                },
                getMoment: function() {
                    return t ? e(this._d) : null
                },
                setMoment: function(n, r) {
                    t && e.isMoment(n) && this.setDate(n.toDate(), r)
                },
                getDate: function() {
                    return c(this._d) ? new Date(this._d.getTime()) : null
                },
                setDate: function(e, t) {
                    if (!e) return this._d = null, this._o.field && (this._o.field.value = "", p(this._o.field, "change", {
                        firedBy: this
                    })), this.draw();
                    if ("string" == typeof e && (e = new Date(Date.parse(e))), c(e)) {
                        var n = this._o.minDate,
                            r = this._o.maxDate;
                        c(n) && e < n ? e = n : c(r) && e > r && (e = r), this._d = new Date(e.getTime()), f(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), p(this._o.field, "change", {
                            firedBy: this
                        })), t || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                    }
                },
                gotoDate: function(e) {
                    var t = !0;
                    if (c(e)) {
                        if (this.calendars) {
                            var n = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                                r = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                                a = e.getTime();
                            r.setMonth(r.getMonth() + 1), r.setDate(r.getDate() - 1), t = a < n.getTime() || r.getTime() < a
                        }
                        t && (this.calendars = [{
                            month: e.getMonth(),
                            year: e.getFullYear()
                        }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars()
                    }
                },
                adjustDate: function(e, t) {
                    var n, r = this.getDate() || new Date,
                        a = 24 * parseInt(t) * 60 * 60 * 1e3;
                    "add" === e ? n = new Date(r.valueOf() + a) : "subtract" === e && (n = new Date(r.valueOf() - a)), this.setDate(n)
                },
                adjustCalendars: function() {
                    this.calendars[0] = v(this.calendars[0]);
                    for (var e = 1; e < this._o.numberOfMonths; e++) this.calendars[e] = v({
                        month: this.calendars[0].month + e,
                        year: this.calendars[0].year
                    });
                    this.draw()
                },
                gotoToday: function() {
                    this.gotoDate(new Date)
                },
                gotoMonth: function(e) {
                    isNaN(e) || (this.calendars[0].month = parseInt(e, 10), this.adjustCalendars())
                },
                nextMonth: function() {
                    this.calendars[0].month++, this.adjustCalendars()
                },
                prevMonth: function() {
                    this.calendars[0].month--, this.adjustCalendars()
                },
                gotoYear: function(e) {
                    isNaN(e) || (this.calendars[0].year = parseInt(e, 10), this.adjustCalendars())
                },
                setMinDate: function(e) {
                    e instanceof Date ? (f(e), this._o.minDate = e, this._o.minYear = e.getFullYear(), this._o.minMonth = e.getMonth()) : (this._o.minDate = g.minDate, this._o.minYear = g.minYear, this._o.minMonth = g.minMonth, this._o.startRange = g.startRange), this.draw()
                },
                setMaxDate: function(e) {
                    e instanceof Date ? (f(e), this._o.maxDate = e, this._o.maxYear = e.getFullYear(), this._o.maxMonth = e.getMonth()) : (this._o.maxDate = g.maxDate, this._o.maxYear = g.maxYear, this._o.maxMonth = g.maxMonth, this._o.endRange = g.endRange), this.draw()
                },
                setStartRange: function(e) {
                    this._o.startRange = e
                },
                setEndRange: function(e) {
                    this._o.endRange = e
                },
                draw: function(e) {
                    if (this._v || e) {
                        var t, n = this._o,
                            r = n.minYear,
                            i = n.maxYear,
                            o = n.minMonth,
                            s = n.maxMonth,
                            u = "";
                        this._y <= r && (this._y = r, !isNaN(o) && this._m < o && (this._m = o)), this._y >= i && (this._y = i, !isNaN(s) && this._m > s && (this._m = s)), t = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                        for (var c = 0; c < n.numberOfMonths; c++) u += '<div class="pika-lendar">' + x(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, t) + this.render(this.calendars[c].year, this.calendars[c].month, t) + "</div>";
                        this.el.innerHTML = u, n.bound && "hidden" !== n.field.type && a(function() {
                            n.trigger.focus()
                        }, 1), "function" == typeof this._o.onDraw && this._o.onDraw(this), n.bound && n.field.setAttribute("aria-label", "Use the arrow keys to pick a date")
                    }
                },
                adjustPosition: function() {
                    var e, t, n, a, i, o, s, u, c, l;
                    if (!this._o.container) {
                        if (this.el.style.position = "absolute", t = e = this._o.trigger, n = this.el.offsetWidth, a = this.el.offsetHeight, i = window.innerWidth || r.documentElement.clientWidth, o = window.innerHeight || r.documentElement.clientHeight, s = window.pageYOffset || r.body.scrollTop || r.documentElement.scrollTop, "function" == typeof e.getBoundingClientRect) u = (l = e.getBoundingClientRect()).left + window.pageXOffset, c = l.bottom + window.pageYOffset;
                        else
                            for (u = t.offsetLeft, c = t.offsetTop + t.offsetHeight; t = t.offsetParent;) u += t.offsetLeft, c += t.offsetTop;
                        (this._o.reposition && u + n > i || this._o.position.indexOf("right") > -1 && u - n + e.offsetWidth > 0) && (u = u - n + e.offsetWidth), (this._o.reposition && c + a > o + s || this._o.position.indexOf("top") > -1 && c - a - e.offsetHeight > 0) && (c = c - a - e.offsetHeight), this.el.style.left = u + "px", this.el.style.top = c + "px"
                    }
                },
                render: function(e, t, n) {
                    var r = this._o,
                        a = new Date,
                        i = d(e, t),
                        o = new Date(e, t, 1).getDay(),
                        s = [],
                        u = [];
                    f(a), r.firstDay > 0 && (o -= r.firstDay) < 0 && (o += 7);
                    for (var m = 0 === t ? 11 : t - 1, p = 11 === t ? 0 : t + 1, v = 0 === t ? e - 1 : e, g = 11 === t ? e + 1 : e, b = d(v, m), x = i + o, _ = x; _ > 7;) _ -= 7;
                    x += 7 - _;
                    for (var N, S, k, T, M = !1, O = 0, A = 0; O < x; O++) {
                        var E = new Date(e, t, O - o + 1),
                            I = !!c(this._d) && h(E, this._d),
                            C = h(E, a),
                            R = -1 !== r.events.indexOf(E.toDateString()),
                            Y = O < o || O >= i + o,
                            j = O - o + 1,
                            P = t,
                            F = e,
                            L = r.startRange && h(r.startRange, E),
                            W = r.endRange && h(r.endRange, E),
                            H = r.startRange && r.endRange && r.startRange < E && E < r.endRange,
                            z = r.minDate && E < r.minDate || r.maxDate && E > r.maxDate || r.disableWeekends && l(E) || r.disableDayFn && r.disableDayFn(E);
                        Y && (O < o ? (j = b + j, P = m, F = v) : (j -= i, P = p, F = g));
                        var q = {
                            day: j,
                            month: P,
                            year: F,
                            hasEvent: R,
                            isSelected: I,
                            isToday: C,
                            isDisabled: z,
                            isEmpty: Y,
                            isStartRange: L,
                            isEndRange: W,
                            isInRange: H,
                            showDaysInNextAndPreviousMonths: r.showDaysInNextAndPreviousMonths,
                            enableSelectionDaysInNextAndPreviousMonths: r.enableSelectionDaysInNextAndPreviousMonths
                        };
                        r.pickWholeWeek && I && (M = !0), u.push(y(q)), 7 == ++A && (r.showWeekNumber && u.unshift((N = O - o, S = t, k = e, T = void 0, T = new Date(k, 0, 1), '<td class="pika-week">' + Math.ceil(((new Date(k, S, N) - T) / 864e5 + T.getDay() + 1) / 7) + "</td>")), s.push(w(u, r.isRTL, r.pickWholeWeek, M)), u = [], A = 0, M = !1)
                    }
                    return D(r, s, n)
                },
                isVisible: function() {
                    return this._v
                },
                show: function() {
                    var e, t, n;
                    this.isVisible() || (this._v = !0, this.draw(), e = this.el, t = "is-hidden", e.className = (n = (" " + e.className + " ").replace(" " + t + " ", " ")).trim ? n.trim() : n.replace(/^\s+|\s+$/g, ""), this._o.bound && (i(r, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
                },
                hide: function() {
                    var e, t, n = this._v;
                    !1 !== n && (this._o.bound && o(r, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", e = this.el, s(e, t = "is-hidden") || (e.className = "" === e.className ? t : e.className + " " + t), this._v = !1, void 0 !== n && "function" == typeof this._o.onClose && this._o.onClose.call(this))
                },
                destroy: function() {
                    var e = this._o;
                    this.hide(), o(this.el, "mousedown", this._onMouseDown, !0), o(this.el, "touchend", this._onMouseDown, !0), o(this.el, "change", this._onChange), e.keyboardInput && o(r, "keydown", this._onKeyChange), e.field && (o(e.field, "change", this._onInputChange), e.bound && (o(e.trigger, "click", this._onInputClick), o(e.trigger, "focus", this._onInputFocus), o(e.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
                }
            }, _
        })
    },
    "6Zhv": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                a = Number(t);
            return new Date(n + a)
        }
    },
    "6axH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 6 === r(e).getDay()
        }
    },
    "6udH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 1 === r(e).getDate()
        }
    },
    "6w0d": function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            void 0 === t && (t = {});
            return r.__awaiter(this, void 0, void 0, function() {
                var n;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, a.a.request(e.path, e, t)];
                        case 1:
                            return n = r.sent(), [2, new i(n, e)]
                    }
                })
            })
        };
        var r = n("TToO"),
            a = n("9u8h");
        var i = function() {
            function e(e, t) {
                this.status = e.status, this.body = e.body, this.error = e.error, this.requestError = e.requestError, this.request = t
            }
            return e.prototype.isSuccess = function() {
                return this.status >= 200 && this.status < 400 && !this.requestError
            }, e.prototype.isError = function() {
                return !this.isSuccess()
            }, e
        }()
    },
    "7EGB": function(e, t, n) {
        var r = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 7 * n)
        }
    },
    "7Swd": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "7Xwz": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
    },
    "7qqA": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = n("7vx8"),
            o = n("AJEV"),
            s = n("v5lG"),
            u = n("+TF1"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        channel: void 0,
                        streamSummaries: [],
                        interval: t.props.interval,
                        isLoading: !0
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.query()
                }, t.prototype.componentDidUpdate = function(e) {
                    (e.data.channel && e.data.channel.id) === (this.props.data.channel && this.props.data.channel.id) && Object(o.f)(e.interval, this.props.interval) || this.query()
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t.prototype.query = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.data.channel ? (e = o.c.fromChannelData(this.props.data.channel), this.setState({
                                        isLoading: !0,
                                        channel: e
                                    }), [4, Object(u.b)(e, this.props.interval)]) : [2];
                                case 1:
                                    return t = n.sent(), this.setState({
                                        streamSummaries: t.streamSummaries,
                                        isLoading: !1
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(a.Component),
            l = Object(i.a)(s, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            })(c);
        n("uYc/");
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return u.a
        }), n.d(t, !1, function() {})
    },
    "7yyf": function(e, t, n) {
        var r = n("rBmI");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    "8Gpr": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getHours()
        }
    },
    "8KV+": function(e, t, n) {
        var r = n("u/4p");
        e.exports = function(e, t, n) {
            var a = r(e, n),
                i = r(t, n);
            return a.getTime() === i.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var r = n("xA5w"),
            a = 864e5;
        e.exports = function(e, t, n, i) {
            var o = r(e).getTime(),
                s = r(t).getTime(),
                u = r(n).getTime(),
                c = r(i).getTime();
            if (o > s || u > c) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < c && u < s)) return 0;
            var l = (c > s ? s : c) - (u < o ? o : u);
            return Math.ceil(l / a)
        }
    },
    "9DtG": function(e, t) {},
    "9Jn5": function(e, t, n) {
        var r = n("zZbG");
        e.exports = function(e, t) {
            return r(e) - r(t)
        }
    },
    "9r5b": function(e, t, n) {
        var r = n("nfOx");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("TToO"),
            a = n("6sO2"),
            i = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var a, i, o, s;
                        return r.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = r.__assign({}, t, {
                                        body: i
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = u.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, u.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var a, i;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((a = o.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return i = r.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(i)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return a = r.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = a), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
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
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(i.c)(n);
                    return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = a.o.logger.withCategory("legacy-api"), e
            }()
    },
    A2zO: function(e, t, n) {
        var r = n("Be26");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    AJEV: function(e, t, n) {
        "use strict";
        var r, a = n("wuJz"),
            i = n("heIq"),
            o = function() {
                function e(e) {
                    Object.assign(this, e)
                }
                return e.sort = function(e) {
                    var t = [],
                        n = [];
                    return e.forEach(function(e) {
                        e.isFinished ? t.push(e) : n.push(e)
                    }), t.sort(function(e, t) {
                        return t.position - e.position
                    }), n.sort(function(e, t) {
                        return e.position - t.position
                    }), n.concat(t)
                }, e.topCelebratable = function(e) {
                    return e.filter(function(e) {
                        return e.completedAt && !e.isCompleteByRole
                    }).reduce(function(e, t) {
                        return e && e.position >= t.position ? e : t
                    }, null)
                }, e.prototype.finalize = function() {
                    var e = this;
                    this.completedAchievements = this.achievements.filter(function(t) {
                        var n = e.wasCompletedWithinTimeWindow(t),
                            r = e.wasCompletedForTimedQuestButIsMissingLastCompletedAt(t);
                        return n || r
                    }), this.completedAchievementsCount = this.completedAchievements.length, this.isCompleteByRole = this.getIsCompletedByRole(), this.isComplete = this.isCompleteByRole || Boolean(this.completedAt), this.isFinished = this.isCompleteByRole || Boolean(this.key === i.a && this.completedAt)
                }, e.prototype.getIsCompletedByRole = function() {
                    return this.role !== r.None && (this.role !== r.Affiliate || (this.key === i.a || this.key === i.b))
                }, e.prototype.wasCompletedWithinTimeWindow = function(e) {
                    var t = Object(a.subDays)(new Date, 1);
                    return Boolean(e.lastCompletedAt && Object(a.isBefore)(t, e.lastCompletedAt))
                }, e.prototype.wasCompletedForTimedQuestButIsMissingLastCompletedAt = function(e) {
                    return Boolean(e.completedAt && this.hasTimedCompletionWindow && !e.lastCompletedAt)
                }, e
            }(),
            s = function() {
                function e(e) {
                    Object.assign(this, e), this.progressRatio = e.progress / e.progressCap, this.isComplete = Boolean(this.completedAt)
                }
                return e.prototype.wasRecentlyCompleted = function(e) {
                    return void 0 === e && (e = new Date), !!this.completedAt && Object(a.isAfter)(this.completedAt, Object(a.subDays)(e, 14))
                }, e
            }(),
            u = n("PGY2"),
            c = function() {
                function e(e) {
                    void 0 === e && (e = []), this.topRecentlyCompleted = [], this.notCompleted = [], this.pastCompleted = [], this.all = [], this.topRecentlyCompletedMap = new Map, this.all = e, this.buildExclusiveGroups(), this.sortExclusiveGroups()
                }
                return e.prototype.nCompletedInRange = function(e, t) {
                    return this.all.filter(function(e) {
                        return e.completedAt && Object(a.isWithinRange)(e.completedAt, t.start, t.end)
                    }).sort(function(e, t) {
                        return Object(a.compareDesc)(e.completedAt, t.completedAt)
                    }).slice(0, e)
                }, e.prototype.topNInProgress = function(e) {
                    return this.all.filter(function(e) {
                        return !e.completedAt && e.progressRatio
                    }).sort(function(e, t) {
                        return t.progressRatio - e.progressRatio
                    }).slice(0, e)
                }, e.prototype.buildExclusiveGroups = function() {
                    var e = this;
                    this.all.forEach(function(t) {
                        if (t.wasRecentlyCompleted()) {
                            var n = e.topRecentlyCompletedMap.get(t.key);
                            n ? n.level < t.level ? (e.topRecentlyCompletedMap.set(t.key, t), e.pastCompleted.push(n)) : e.pastCompleted.push(t) : e.topRecentlyCompletedMap.set(t.key, t)
                        } else t.isComplete ? e.pastCompleted.push(t) : e.notCompleted.push(t)
                    })
                }, e.prototype.sortExclusiveGroups = function() {
                    this.topRecentlyCompleted = Object(u.d)(Array.from(this.topRecentlyCompletedMap.values()), [function(e) {
                        return e.completedAt
                    }, function(e) {
                        return e.level
                    }, function(e) {
                        return e.title
                    }], [u.a.Descending, u.a.Descending, u.a.Ascending]), this.notCompleted = Object(u.d)(this.notCompleted, [function(e) {
                        return e.progressRatio
                    }, function(e) {
                        return e.level
                    }, function(e) {
                        return e.title
                    }], [u.a.Descending, u.a.Ascending, u.a.Ascending]), this.pastCompleted = Object(u.d)(this.pastCompleted, [function(e) {
                        return e.completedAt
                    }, function(e) {
                        return e.level
                    }, function(e) {
                        return e.title
                    }], [u.a.Descending, u.a.Descending, u.a.Ascending])
                }, e
            }(),
            l = n("K/WB");
        ! function(e) {
            e[e.None = 0] = "None", e[e.Affiliate = 1] = "Affiliate", e[e.Partner = 2] = "Partner"
        }(r || (r = {}));
        n("LxVS");
        var d = n("u4Vk");
        n.d(t, "e", function() {
            return o
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return l.a
        }), n.d(t, !1, function() {}), n.d(t, "d", function() {
            return r
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "f", function() {
            return d.d
        })
    },
    AZvW: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t && (t = 7), t
        }
    },
    Akl5: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    Bb5e: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() - a.getFullYear()
        }
    },
    Be26: function(e, t, n) {
        var r = n("8KV+");
        e.exports = function(e, t) {
            return r(e, t, {
                weekStartsOn: 1
            })
        }
    },
    "CC3/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardNav_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelLogin"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isStaff"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isSiteAdmin"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelLogin"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutInvite"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isForPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isForExtensionsDeveloper"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isModerator"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bountyBoardSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isEnabled"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 281
            }
        };
        n.loc.source = {
            body: "query DashboardNav_CurrentUser($channelLogin: String) {\ncurrentUser {\nid\nlogin\nisStaff\nisSiteAdmin\n}\nuser(login: $channelLogin) {\nid\nroles {\nisPartner\nisAffiliate\n}\npayoutInvite {\nid\nisForPartner\nisForExtensionsDeveloper\n}\nself {\nisModerator\n}\nbountyBoardSettings {\nisEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    CVNg: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMonth(0), n.setDate(a), n
        }
    },
    D6ie: function(e, t, n) {
        var r = n("xA5w"),
            a = n("3znZ"),
            i = n("iRXW"),
            o = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = a(t).getTime() - i(t).getTime();
            return Math.round(n / o) + 1
        }
    },
    EkQQ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("3zLD"),
            a = n("RH2O"),
            i = n("2KeS"),
            o = n("7vx8"),
            s = n("+xm8"),
            u = n("f2i/"),
            c = n("7enT"),
            l = n("Aj/L"),
            d = n("QwuA"),
            f = n("TToO"),
            h = n("GiK3"),
            m = n("CIox"),
            p = n("F8kA"),
            v = n("6sO2"),
            g = n("bZTi"),
            b = n("yWCw"),
            y = n("68hr"),
            w = n("Ejve"),
            x = n("TP6L"),
            D = n("H+d0"),
            _ = n("7qqA"),
            N = n("zCIC"),
            S = n("06ME"),
            k = n("q7Ag"),
            T = n("ytWG"),
            M = n("pD3p"),
            O = n("Odds"),
            A = "extensions_dashboard_notification_dismissed",
            E = function(e) {
                var t = e.channelName,
                    n = Object(v.d)("Extensions", "DashboardNav"),
                    r = Object(k.b)(t);
                return h.createElement(m.c, {
                    path: "/:channelName/dashboard/extensions"
                }, function(e) {
                    return function(e) {
                        if (e) return v.l.set(A, !0), !1;
                        return !v.l.get(A, !1)
                    }(e.match) ? h.createElement(O._2, {
                        position: O._15.Relative
                    }, h.createElement("li", {
                        className: "side-nav-dashboard-section__tooltip__wrapper"
                    }, h.createElement(M.a, {
                        linkTo: r
                    }, n, h.createElement(T.a, {
                        "data-test-selector": "extensions-nav-hotspot"
                    })), h.createElement("div", {
                        className: "side-nav-dashboard-section__tooltip",
                        "data-test-selector": "extensions-nav-tooltip"
                    }, h.createElement(O.q, {
                        direction: O.r.RightCenter,
                        size: O.s.Large,
                        show: !0
                    }, h.createElement(O._8, {
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }, h.createElement(O.Q, {
                        type: O._47.Span
                    }, h.createElement(T.a, null), Object(v.d)("Customize your stream with extensions! ", "DashboardNav"), h.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                    }, Object(v.d)("Learn more here.", "DashboardNav")))))))) : h.createElement("li", null, h.createElement(M.a, {
                        linkTo: r
                    }, n))
                })
            };
        var I, C = n("zDNk"),
            R = (n("uwYd"), {
                "data-test-selector": "activity-link-selector"
            }),
            Y = {
                "data-test-selector": "bounties-link-selector"
            },
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(h.Fragment, null, h.createElement(C.a, null, Object(v.d)("Dashboard", "DashboardNav")), h.createElement("ul", null, h.createElement("li", null, h.createElement(M.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard",
                        external: !0,
                        exact: !0
                    }, Object(v.d)("Live", "DashboardNav"))), h.createElement(E, {
                        channelName: this.props.channelName
                    }), h.createElement("li", null, h.createElement(M.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard/achievements"
                    }, Object(v.d)("Achievements", "DashboardNav"))), h.createElement("li", null, h.createElement(M.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard/events"
                    }, Object(v.d)("Events", "DashboardNav"))), this.canAccessActivity && h.createElement("li", null, h.createElement(M.a, f.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/activity",
                        external: !0
                    }, R), Object(v.d)("Activity", "DashboardNav"))), this.canAccessBounties && h.createElement("li", null, h.createElement(M.a, f.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/bounties"
                    }, Y), Object(v.d)("Bounty Board", "DashboardNav")))))
                }, Object.defineProperty(t.prototype, "canAccessBounties", {
                    get: function() {
                        var e = this.props.permissions,
                            t = e.isOwner,
                            n = e.isStaff,
                            r = e.isInBountyProgram;
                        return (t || n) && r
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canAccessActivity", {
                    get: function() {
                        var e = this.props.permissions,
                            t = e.isOwner,
                            n = e.isStaff,
                            r = e.isSiteAdmin;
                        return t || n || r
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(h.Component),
            P = n("YDbY"),
            F = {
                "data-test-selector": "revenue-settings-link-selector"
            },
            L = {
                "data-test-selector": "settings-link-selector"
            },
            W = {
                "data-test-selector": "moderation-link-selector"
            },
            H = {
                "data-test-selector": "permissions-link-selector"
            },
            z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return this.canSeeSettingsSection ? h.createElement(h.Fragment, null, h.createElement(C.a, null, Object(v.d)("Settings", "SettingsDashboardNav")), h.createElement("ul", null, this.canAccessSettings && h.createElement("li", null, h.createElement(M.a, f.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/settings",
                        exact: !0,
                        external: !this.useNewRevenueSettings
                    }, L), Object(v.d)("Channel", "SettingsDashboardNav"))), this.props.permissions.isOwner && h.createElement("li", null, h.createElement(M.a, f.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/permissions",
                        external: !0
                    }, H), Object(v.d)("Permissions", "DashboardNav"))), this.canSeeAutoModSettings && h.createElement(O._2, {
                        position: O._15.Relative
                    }, h.createElement("li", {
                        className: "side-nav-dashboard-section__tooltip__wrapper"
                    }, h.createElement(M.a, f.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/automod",
                        external: !Object(P.a)()
                    }, W), Object(v.d)("Moderation", "SettingsDashboardNav"), h.createElement(T.a, null)), h.createElement("div", {
                        className: "side-nav-dashboard-section__tooltip"
                    }, h.createElement(O.q, {
                        direction: O.r.RightCenter,
                        size: O.s.Large,
                        show: !0
                    }, h.createElement(O._8, {
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }, h.createElement(O.Q, {
                        type: O._47.Span
                    }, h.createElement(T.a, null), Object(v.d)("Streamers and mods can set custom AutoMod levels, and update Blocked and Permitted Terms.", "AutoModSettings"))))))), this.canAccessRevenueSettings && h.createElement("li", null, h.createElement(M.a, f.__assign({
                        linkTo: this.revenueSettingsLink,
                        external: !this.useNewRevenueSettings
                    }, F), this.revenueSettingsLabel)))) : null
                }, Object.defineProperty(t.prototype, "canSeeSettingsSection", {
                    get: function() {
                        return this.canAccessSettings || this.canAccessRevenueSettings || this.canSeeAutoModSettings
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canSeeAutoModSettings", {
                    get: function() {
                        return Object(P.a)() && (this.props.permissions.isOwner || this.props.permissions.isModerator || this.props.permissions.isStaff || this.props.permissions.isSiteAdmin)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canAccessSettings", {
                    get: function() {
                        return this.props.permissions.isOwner || this.props.permissions.isStaff
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "useNewRevenueSettings", {
                    get: function() {
                        return "on" === v.b.get("dashboard_settings_launch", "off")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canAccessRevenueSettings", {
                    get: function() {
                        return this.useNewRevenueSettings ? this.canAccessNewRevenueSettings : this.canAccessLegacyPartnerSettings
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canAccessNewRevenueSettings", {
                    get: function() {
                        var e = this.props.permissions,
                            t = e.isOwner,
                            n = e.isStaff,
                            r = e.hasPayoutInvite;
                        return (t || n) && r
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canAccessLegacyPartnerSettings", {
                    get: function() {
                        var e = this.props.permissions,
                            t = e.isOwner,
                            n = e.isStaff,
                            r = e.isPartner,
                            a = e.hasPartnerInvitation;
                        return (t || n) && (r || a)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "revenueSettingsLink", {
                    get: function() {
                        return this.useNewRevenueSettings ? "/" + this.props.channelName + "/dashboard/settings/revenue" : "/" + this.props.channelName + "/dashboard/subscription"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "revenueSettingsLabel", {
                    get: function() {
                        return this.useNewRevenueSettings ? this.props.permissions.hasExtensionsDeveloperInvite ? Object(v.d)("Extensions Developer", "SettingsDashboardNav") : Object(v.d)("Affiliate / Partner", "SettingsDashboardNav") : Object(v.d)("Revenue", "SettingsDashboardNav")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(h.Component),
            q = n("NY9D"),
            G = n("L2R7");
        ! function(e) {
            e[e.CollectionManagerLink = 0] = "CollectionManagerLink"
        }(I || (I = {}));
        var B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(h.Fragment, null, h.createElement(C.a, null, Object(v.d)("Videos", "DashboardNav")), h.createElement("ul", null, h.createElement("li", null, h.createElement(M.a, {
                        linkTo: Object(q.d)(this.props.creatorLogin),
                        exact: !0
                    }, Object(v.d)("Video Producer", "DashboardNav"))), h.createElement("li", null, h.createElement(M.a, {
                        linkTo: "/" + this.props.creatorLogin + "/dashboard/moderation"
                    }, Object(v.d)("Video Moderation", "DashboardNav"))), h.createElement("li", null, h.createElement(M.a, {
                        "data-test-selector": I.CollectionManagerLink,
                        external: !Object(G.a)(),
                        linkTo: "/" + this.props.creatorLogin + "/manager/collections"
                    }, Object(v.d)("Collections", "DashboardNav"))), h.createElement("li", null, h.createElement(M.a, {
                        linkTo: "/" + this.props.creatorLogin + "/manager/clips"
                    }, Object(v.d)("Clips", "DashboardNav")))))
                }, t
            }(h.Component),
            V = n("CC3/"),
            Q = {
                isOwner: !1,
                isSiteAdmin: !1,
                isStaff: !1,
                isPartner: !1,
                isAffiliate: !1,
                hasPartnerInvitation: !1,
                hasPayoutInvite: !1,
                hasExtensionsDeveloperInvite: !1,
                isModerator: !1,
                isInBountyProgram: !1
            },
            U = (n("9DtG"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = this.getPermissions();
                    return h.createElement(O._33, {
                        className: "dashboard-side-nav",
                        background: O.n.Alt2,
                        borderRight: !0,
                        flexShrink: 0,
                        flexGrow: 0,
                        fullHeight: !0,
                        position: O._15.Relative
                    }, h.createElement(N.b, null, h.createElement("nav", null, h.createElement(j, {
                        channelName: this.props.channelName,
                        permissions: e,
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }), h.createElement(S.b, {
                        channelName: this.props.channelName,
                        permissions: e,
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }), h.createElement(B, {
                        creatorLogin: this.props.channelName,
                        permissions: e
                    }), h.createElement(z, {
                        channelName: this.props.channelName,
                        permissions: e
                    }))))
                }, t.prototype.getPermissions = function() {
                    return this.props.data.currentUser && this.props.data.user && this.props.data.user.roles && this.props.data.user.self ? {
                        isOwner: this.props.channelName === this.props.data.currentUser.login,
                        isSiteAdmin: this.props.data.currentUser.isSiteAdmin,
                        isStaff: this.props.data.currentUser.isStaff,
                        isPartner: this.props.data.user.roles.isPartner,
                        isAffiliate: this.props.data.user.roles.isAffiliate,
                        hasPartnerInvitation: Boolean(this.props.data.user.payoutInvite && this.props.data.user.payoutInvite.isForPartner),
                        hasPayoutInvite: Boolean(this.props.data.user.payoutInvite),
                        hasExtensionsDeveloperInvite: Boolean(this.props.data.user.payoutInvite && this.props.data.user.payoutInvite.isForExtensionsDeveloper),
                        isInBountyProgram: this.props.data.user.bountyBoardSettings.isEnabled,
                        isModerator: this.props.data.user.self.isModerator
                    } : Q
                }, t
            }(h.Component)),
            Z = Object(o.a)(V, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelName
                        }
                    }
                }
            })(U),
            J = n("u4Vk"),
            X = g.a.wrap(function() {
                return n.e(102).then(n.bind(null, "rE/F"))
            }, "AchievementsPage"),
            K = g.a.wrap(function() {
                return n.e(105).then(n.bind(null, "RdZX"))
            }, "AutoModPage"),
            $ = g.a.wrap(function() {
                return n.e(103).then(n.bind(null, "EOq4"))
            }, "BountiesPage"),
            ee = g.a.wrap(function() {
                return n.e(85).then(n.bind(null, "ehuU"))
            }, "ChannelAnalyticsPageRoot"),
            te = g.a.wrap(function() {
                return n.e(83).then(n.bind(null, "aeDV"))
            }, "ChannelClipsManagerPage"),
            ne = g.a.wrap(function() {
                return n.e(88).then(n.bind(null, "KO2S"))
            }, "CollectionEditorPage"),
            re = g.a.wrap(function() {
                return n.e(101).then(n.bind(null, "Dk8+"))
            }, "CollectionManagerPage"),
            ae = g.a.wrap(function() {
                return n.e(95).then(n.bind(null, "rFlM"))
            }, "CommentModeratorPage"),
            ie = g.a.wrap(function() {
                return n.e(89).then(n.bind(null, "xM3a"))
            }, "DashboardEventsRoot"),
            oe = g.a.wrap(function() {
                return n.e(94).then(n.bind(null, "yuX3"))
            }, "DashboardRevenueSettingsRoot"),
            se = g.a.wrap(function() {
                return n.e(91).then(n.bind(null, "gIJZ"))
            }, "DashboardSettingsRoot"),
            ue = g.a.wrap(function() {
                return n.e(115).then(n.bind(null, "bcqU"))
            }, "ExtensionConfigurePage"),
            ce = g.a.wrap(function() {
                return n.e(104).then(n.bind(null, "yJuJ"))
            }, "ExtensionManagerPage"),
            le = g.a.wrap(function() {
                return n.e(98).then(n.bind(null, "Il1C"))
            }, "HighlighterPage"),
            de = g.a.wrap(function() {
                return n.e(84).then(n.bind(null, "c1gU"))
            }, "LivePage"),
            fe = g.a.wrap(function() {
                return n.e(83).then(n.bind(null, "aeDV"))
            }, "MyClipsManagerPage"),
            he = g.a.wrap(function() {
                return n.e(96).then(n.bind(null, "/fDj"))
            }, "RedirectToLatestArchiveHighlighter"),
            me = g.a.wrap(function() {
                return n.e(86).then(n.bind(null, "tVPZ"))
            }, "StreamSummaryPage"),
            pe = g.a.wrap(function() {
                return n.e(87).then(n.bind(null, "a9Y8"))
            }, "VideoManagerPage"),
            ve = function(e) {
                var t = e.match.params.pageName,
                    n = t ? "/" + encodeURIComponent(t) : "";
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.channelName) + "/dashboard" + n), null
            },
            ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isError: !1
                    }, t.logger = v.o.logger.withCategory("dashboard-root"), t.renderAchievementsPage = function() {
                        return h.createElement(X, {
                            channelName: t.props.match.params.channelName
                        })
                    }, t.renderExtensionsManagerPage = function() {
                        return h.createElement(ce, {
                            channelName: t.props.match.params.channelName
                        })
                    }, t.renderLivePage = function(e) {
                        return t.props.data.channel && t.props.data.channel.id ? h.createElement(de, {
                            channelID: t.props.data.channel.id,
                            channelName: t.props.match.params.channelName,
                            streamSummariesQuery: e
                        }) : null
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                    var n = this;
                    this.setState({
                        isError: !0
                    }, function() {
                        n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                            info: t
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.state.isError || this.props.data.error) return h.createElement(b.a, {
                        message: Object(v.d)("An error occurred on this page", "DashboardRoot")
                    });
                    if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), h.createElement(b.a, {
                        message: Object(v.d)("You must be logged in to view this page", "DashboardRoot")
                    });
                    if ("broadcast" === this.props.match.params.channelName) {
                        var t = this.props.match.params.pageName,
                            n = this.props.userLogin;
                        return h.createElement(m.b, {
                            to: "/" + n + "/dashboard/" + t
                        })
                    }
                    return this.props.data.loading || this.props.data.channel.id ? h.createElement(_.a, {
                        interval: Object(J.g)(30),
                        channelName: this.props.match.params.channelName
                    }, function(t) {
                        return h.createElement(O._8, {
                            display: O.R.Flex,
                            flexDirection: O.T.Column,
                            flexWrap: O.U.NoWrap,
                            fullHeight: !0
                        }, h.createElement(x.a, null), e.props.firstPageLoaded && e.props.isLoggedIn && h.createElement(D.a, null), h.createElement(O._8, {
                            display: O.R.Flex,
                            flexWrap: O.U.NoWrap,
                            position: O._15.Relative,
                            overflow: O._11.Hidden,
                            fullHeight: !0
                        }, h.createElement(Z, {
                            channelName: e.props.match.params.channelName,
                            streamSummaryQuery: t
                        }), h.createElement(O._8, {
                            position: O._15.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, h.createElement(p.e, null, h.createElement(m.c, {
                            path: "/:channelName/dashboard/achievements",
                            render: e.renderAchievementsPage
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/channel-analytics",
                            component: ee
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/moderation",
                            component: ae
                        }), v.a.buildType !== w.a.Production && h.createElement(m.c, {
                            path: "/:channelName/dashboard/live",
                            render: function() {
                                return e.renderLivePage(t)
                            }
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/stream-summary",
                            render: function() {
                                return h.createElement(me, {
                                    channelName: e.props.match.params.channelName,
                                    streamSummaryQuery: t
                                })
                            }
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/extensions/:extensionID/configure",
                            component: ue
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/extensions",
                            render: e.renderExtensionsManagerPage
                        }), e.props.isStaff && h.createElement(m.c, {
                            path: "/:channelName/dashboard/bounties/:selectedID",
                            component: $
                        }), e.props.isStaff && h.createElement(m.c, {
                            path: "/:channelName/dashboard/bounties",
                            component: $
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/bounties/:selectedID",
                            component: y.a
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/bounties",
                            component: y.a
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/events",
                            component: ie
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/settings/automod",
                            component: K
                        }), e.showNewDashboardSettings && h.createElement(m.c, {
                            path: "/:channelName/dashboard/settings/revenue",
                            component: oe
                        }), e.showNewDashboardSettings && h.createElement(m.c, {
                            path: "/:channelName/dashboard/settings",
                            component: se
                        }), h.createElement(m.c, {
                            path: "/:channelName/dashboard/:pageName?",
                            render: ve
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/schedule/:videoID",
                            component: pe
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/edit/:videoID",
                            component: pe
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/publish/:videoID",
                            component: pe
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/appeal/:videoID",
                            component: pe
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/clips/channel",
                            component: te
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/clips",
                            component: fe
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/highlighter/:videoID",
                            component: le
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager/highlighter",
                            component: he
                        }), h.createElement(m.c, {
                            path: "/:creatorLogin/manager/collections/:collectionID",
                            component: ne
                        }), h.createElement(m.c, {
                            path: "/:creatorLogin/manager/collections",
                            component: re
                        }), h.createElement(m.c, {
                            path: "/:channelName/manager",
                            component: pe
                        })))))
                    }) : h.createElement(y.a, null)
                }, Object.defineProperty(t.prototype, "showNewDashboardSettings", {
                    get: function() {
                        return "on" === v.b.get("dashboard_settings_launch", "off")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(h.Component);
        var be = Object(r.compose)(Object(o.a)(d, {
            options: function(e) {
                return {
                    variables: {
                        channelName: e.match.params.channelName
                    }
                }
            }
        }), Object(a.b)(function(e) {
            var t = Object(l.c)(e);
            return {
                isLoggedIn: Object(l.d)(e),
                firstPageLoaded: e.session.firstPageLoaded,
                userLogin: t && t.login,
                isStaff: !!(t && t.roles && t.roles.isStaff)
            }
        }, function(e) {
            return Object(i.b)({
                onAnonymousVisit: function() {
                    return Object(u.f)(s.a.DashboardPage)
                },
                collapseSideNav: c.r,
                expandSideNav: c.y
            }, e)
        }))(ge);
        n.d(t, "DashboardRoot", function() {
            return be
        })
    },
    "Eoz/": function(e, t, n) {
        var r = n("ymQ7"),
            a = n("D6ie"),
            i = n("zZbG"),
            o = n("xA5w"),
            s = n("dH3X"),
            u = n("uyaC");
        var c = {
            M: function(e) {
                return e.getMonth() + 1
            },
            MM: function(e) {
                return d(e.getMonth() + 1, 2)
            },
            Q: function(e) {
                return Math.ceil((e.getMonth() + 1) / 3)
            },
            D: function(e) {
                return e.getDate()
            },
            DD: function(e) {
                return d(e.getDate(), 2)
            },
            DDD: function(e) {
                return r(e)
            },
            DDDD: function(e) {
                return d(r(e), 3)
            },
            d: function(e) {
                return e.getDay()
            },
            E: function(e) {
                return e.getDay() || 7
            },
            W: function(e) {
                return a(e)
            },
            WW: function(e) {
                return d(a(e), 2)
            },
            YY: function(e) {
                return d(e.getFullYear(), 4).substr(2)
            },
            YYYY: function(e) {
                return d(e.getFullYear(), 4)
            },
            GG: function(e) {
                return String(i(e)).substr(2)
            },
            GGGG: function(e) {
                return i(e)
            },
            H: function(e) {
                return e.getHours()
            },
            HH: function(e) {
                return d(e.getHours(), 2)
            },
            h: function(e) {
                var t = e.getHours();
                return 0 === t ? 12 : t > 12 ? t % 12 : t
            },
            hh: function(e) {
                return d(c.h(e), 2)
            },
            m: function(e) {
                return e.getMinutes()
            },
            mm: function(e) {
                return d(e.getMinutes(), 2)
            },
            s: function(e) {
                return e.getSeconds()
            },
            ss: function(e) {
                return d(e.getSeconds(), 2)
            },
            S: function(e) {
                return Math.floor(e.getMilliseconds() / 100)
            },
            SS: function(e) {
                return d(Math.floor(e.getMilliseconds() / 10), 2)
            },
            SSS: function(e) {
                return d(e.getMilliseconds(), 3)
            },
            Z: function(e) {
                return l(e.getTimezoneOffset(), ":")
            },
            ZZ: function(e) {
                return l(e.getTimezoneOffset())
            },
            X: function(e) {
                return Math.floor(e.getTime() / 1e3)
            },
            x: function(e) {
                return e.getTime()
            }
        };

        function l(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                r = Math.abs(e),
                a = r % 60;
            return n + d(Math.floor(r / 60), 2) + t + d(a, 2)
        }

        function d(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        e.exports = function(e, t, n) {
            var r = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                a = (n || {}).locale,
                i = u.format.formatters,
                l = u.format.formattingTokensRegExp;
            a && a.format && a.format.formatters && (i = a.format.formatters, a.format.formattingTokensRegExp && (l = a.format.formattingTokensRegExp));
            var d = o(e);
            return s(d) ? function(e, t, n) {
                var r, a, i, o = e.match(n),
                    s = o.length;
                for (r = 0; r < s; r++) a = t[o[r]] || c[o[r]], o[r] = a || ((i = o[r]).match(/\[[\s\S]/) ? i.replace(/^\[|]$/g, "") : i.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", n = 0; n < s; n++) o[n] instanceof Function ? t += o[n](e, c) : t += o[n];
                    return t
                }
            }(r, i, l)(d) : "Invalid Date"
        }
    },
    Epw6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    G7No: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() - a.getTime()
        }
    },
    GI7G: function(e, t, n) {
        var r = n("xA5w"),
            a = n("orNa"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t),
                s = i(n, o),
                u = Math.abs(a(n, o));
            return n.setMonth(n.getMonth() - s * u), s * (u - (i(n, o) === -s))
        }
    },
    GvNH: function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            return r(e).getTime() === r(new Date).getTime()
        }
    },
    HXCM: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r + 1), a.setHours(23, 59, 59, 999), a
        }
    },
    I7cV: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                o = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a
        }
    },
    JNsx: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMinutes()
        }
    },
    JURy: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
    },
    Javx: function(e, t, n) {
        var r = n("b7g8");
        e.exports = function(e) {
            return r(e) ? 366 : 365
        }
    },
    Jtuq: function(e, t, n) {
        var r = n("lQzg"),
            a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                i = a(t);
            return 4 * (n.getFullYear() - i.getFullYear()) + (r(n) - r(i))
        }
    },
    Jvcu: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setDate(n.getDate() + a), n
        }
    },
    "K/WB": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n("AJEV"),
            a = function() {
                function e(e) {
                    Object.assign(this, e)
                }
                return e.fromChannelData = function(t) {
                    return new e({
                        id: t.id,
                        name: t.login,
                        role: function(e) {
                            if (e.roles.isAffiliate) return r.d.Affiliate;
                            if (e.roles.isPartner) return r.d.Partner;
                            return r.d.None
                        }(t)
                    })
                }, e
            }()
    },
    K7ZZ: function(e, t, n) {
        var r = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = a(n);
            return i.setMilliseconds(i.getMilliseconds() - 1), i
        }
    },
    L2R7: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = r.a.buildType === a.a.Dev,
                t = r.b.get(i, !1);
            return e || t
        };
        var r = n("6sO2"),
            a = n("Ejve"),
            i = "twilight_collections_manager_enabled"
    },
    LLTj: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(0, 0, 0), t
        }
    },
    LU20: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(59, 999), t
        }
    },
    LxVS: function(e, t) {},
    M5Oo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n) {
            var a = r(e),
                i = r(t),
                o = void 0 !== n ? n : 1,
                s = i.getTime();
            if (a.getTime() > s) throw new Error("The first date cannot be after the second date");
            var u = [],
                c = a;
            for (c.setHours(0, 0, 0, 0); c.getTime() <= s;) u.push(r(c)), c.setDate(c.getDate() + o);
            return u
        }
    },
    MIQa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(23, 59, 59, 999), t
        }
    },
    "MKc+": function(e, t, n) {
        var r = n("oNnY");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    Mbb9: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getDay()
        }
    },
    Mdww: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear(),
                a = t.getMonth(),
                i = new Date(0);
            return i.setFullYear(n, a + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
        }
    },
    Moxe: function(e, t, n) {
        var r = n("M5Oo");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    NKE6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                a = r(t).getTime();
            return n < a ? -1 : n > a ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var r = n("6Zhv"),
            a = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * a)
        }
    },
    PGY2: function(e, t, n) {
        "use strict";
        var r = {};

        function a(e) {
            return "/" + e + "/dashboard/achievements/"
        }

        function i(e) {
            return "/" + e.channelName + "/dashboard/achievements/" + e.id
        }
        n.d(r, "channelAchievements", function() {
            return a
        }), n.d(r, "achievement", function() {
            return i
        });
        var o, s = n("6w0d"),
            u = n("yiqh"),
            c = n("b9IH");

        function l(e, t, n) {
            return e.sort(function(e, r) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a],
                        s = n[a] || o.Ascending,
                        u = d(i(e), i(r)) * s;
                    if (0 !== u) return u
                }
                return 0
            })
        }

        function d(e, t) {
            var n = null !== e && void 0 !== e,
                r = null !== t && void 0 !== t;
            return n && r ? e > t ? 1 : e < t ? -1 : 0 : n ? -1 : r ? 1 : 0
        }! function(e) {
            e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
        }(o || (o = {})), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return s.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return u.a
        }), n.d(t, !1, function() {
            return c.a
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "d", function() {
            return l
        })
    },
    Ptqd: function(e, t) {
        e.exports = function() {
            var e = {
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
                localize: function(t, n, r) {
                    var a;
                    return r = r || {}, a = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), r.addSuffix ? r.comparison > 0 ? "in " + a : a + " ago" : a
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var r = n("u/4p"),
            a = 6e4,
            i = 6048e5;
        e.exports = function(e, t, n) {
            var o = r(e, n),
                s = r(t, n),
                u = o.getTime() - o.getTimezoneOffset() * a,
                c = s.getTime() - s.getTimezoneOffset() * a;
            return Math.round((u - c) / i)
        }
    },
    Qbo9: function(e, t, n) {
        var r = n("Moxe");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    QwuA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardRoot_Channel"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelName"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "channel"
                        },
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelName"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 96
            }
        };
        n.loc.source = {
            body: "query DashboardRoot_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Qxz6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() === a.getFullYear()
        }
    },
    SHOI: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Jvcu");
        e.exports = function(e, t, n) {
            var i = n && Number(n.weekStartsOn) || 0,
                o = r(e),
                s = Number(t),
                u = o.getDay();
            return a(o, ((s % 7 + 7) % 7 < i ? 7 : 0) + s - u)
        }
    },
    SJLv: function(e, t) {
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(r);
            var a = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + a.join("|") + "|.)", "g")
        }
    },
    SZZR: function(e, t, n) {
        var r = n("I7cV");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "T/Ln": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    ToRI: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setSeconds(a), n
        }
    },
    Tv4R: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, i = r(e).getTime();
            return t.forEach(function(e) {
                var t = r(e),
                    o = Math.abs(i - t.getTime());
                (void 0 === n || o < a) && (n = t, a = o)
            }), n
        }
    },
    "Uu+E": function(e, t, n) {
        var r = n("xA5w"),
            a = n("iRXW"),
            i = n("nizW");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t),
                s = i(n, a(n)),
                u = new Date(0);
            return u.setFullYear(o, 0, 4), u.setHours(0, 0, 0, 0), (n = a(u)).setDate(n.getDate() + s), n
        }
    },
    VaeB: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(0), t
        }
    },
    WNGz: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(0, 0, 0, 0), t
        }
    },
    XFzU: function(e, t, n) {
        var r = n("GI7G");
        e.exports = function(e, t) {
            var n = r(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    XeQJ: function(e, t) {},
    YDbY: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n("6sO2"),
            a = function() {
                return r.b.get("dashboard_moderation_settings_enabled", !1)
            }
    },
    YPf8: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 5 === r(e).getDay()
        }
    },
    YPjl: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Jvcu"),
            i = n("AZvW");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t),
                s = i(n);
            return a(n, o - s)
        }
    },
    YRFD: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                a = r(t).getTime();
            return n > a ? -1 : n < a ? 1 : 0
        }
    },
    ZUMa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 0 === r(e).getDay()
        }
    },
    a7Cs: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setFullYear(a), n
        }
    },
    aHtT: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return r(e)
                }),
                t = Math.min.apply(null, e);
            return new Date(t)
        }
    },
    b7g8: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    b9IH: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (!e) return;
            var t = function e(t) {
                if (null === t) return null;
                return function(e) {
                    var t = getComputedStyle(e).overflowY;
                    return "visible" !== t && "hidden" !== t
                }(t) ? t : e(t.parentElement)
            }(e);
            if (!t) return;
            var n = e.getBoundingClientRect(),
                o = t.getBoundingClientRect();
            n.bottom > o.bottom && i(e, a);
            n.top < o.top && i(e, r)
        };
        var r = !0,
            a = !1;

        function i(e, t) {
            requestAnimationFrame(function() {
                e.scrollIntoView(t)
            })
        }
    },
    balU: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                o = n.getFullYear(),
                s = n.getDate(),
                u = new Date(0);
            u.setFullYear(o, i, 15), u.setHours(0, 0, 0, 0);
            var c = a(u);
            return n.setMonth(i, Math.min(s, c)), n
        }
    },
    bbdo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(59, 59, 999), t
        }
    },
    "cA+x": function(e, t, n) {
        var r = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    cONr: function(e, t, n) {
        var r = n("f+sD");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    cw9o: function(e, t, n) {
        var r = n("7EGB");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    cwv1: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime()
        }
    },
    dH3X: function(e, t, n) {
        var r = n("607n");
        e.exports = function(e) {
            if (r(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
    },
    danj: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setMinutes(a), n
        }
    },
    "e/EH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 3 === r(e).getDay()
        }
    },
    eCZG: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime() < (new Date).getTime()
        }
    },
    eKpK: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getSeconds()
        }
    },
    "f+sD": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth()
        }
    },
    f4ga: function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    fK0I: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() > a.getTime()
        }
    },
    fUo1: function(e, t, n) {
        var r = n("iRXW"),
            a = n("7EGB"),
            i = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = r(a(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / i)
        }
    },
    fo7E: function(e, t, n) {
        var r = n("w4by");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    gAt4: function(e, t, n) {
        var r = n("xA5w"),
            a = n("nizW"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t),
                s = i(n, o),
                u = Math.abs(a(n, o));
            return n.setDate(n.getDate() - s * u), s * (u - (i(n, o) === -s))
        }
    },
    gDPd: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() < a.getTime()
        }
    },
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r + 1), a.setHours(0, 0, 0, 0), a
        }
    },
    hUHO: function(e, t, n) {
        var r = n("4LxA");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    heIq: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), t.d = function(e) {
            return function() {
                if (r) return r;
                return r = {
                    it_begins: {
                        title: Object(a.d)("It Begins", "StreamSummaryQuestPanel"),
                        getInstructions: function() {
                            return Object(a.d)("Try streaming on Twitch for the first time.", "AchievementsItBegins")
                        },
                        learnMoreURL: "https://help.twitch.tv/customer/en/portal/topics/925393-beginner-broadcasting/articles",
                        hasTimedCompletionWindow: !1,
                        position: 0
                    },
                    path_to_affiliate: {
                        title: Object(a.d)("Path to Affiliate", "AchievementsPathToAffiliate"),
                        getInstructions: function(e) {
                            return Object(a.d)("{checkmarkIcon} A checkmark shows you met the requirement in the last 30 days. For an Affiliate Program invite, you need all 4 checkmarks.", {
                                checkmarkIcon: e
                            }, "AchievementsPathToAffiliate")
                        },
                        hasTimedCompletionWindow: !0,
                        learnMoreURL: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles",
                        position: 1
                    },
                    path_to_partner: {
                        title: Object(a.d)("Path to Partner", "StreamSummaryQuestPanel"),
                        getInstructions: function(e) {
                            return Object(a.d)("{checkmarkIcon} A checkmark shows you met the requirement in the last 30 days. For a Partner Application invite, you need all 3 checkmarks.", {
                                checkmarkIcon: e
                            }, "AchievementsPathToPartner")
                        },
                        learnMoreURL: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                        hasTimedCompletionWindow: !0,
                        position: 2
                    }
                }
            }()[e] || {
                title: e,
                getInstructions: function() {
                    return ""
                },
                learnMoreURL: "",
                hasTimedCompletionWindow: !1,
                position: 0
            }
        };
        var r, a = n("6sO2"),
            i = "it_begins",
            o = "path_to_affiliate",
            s = "path_to_partner"
    },
    hico: function(e, t, n) {
        var r = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = a(n);
            return i.setDate(i.getDate() - 1), i
        }
    },
    hj5Y: function(e, t, n) {
        var r = n("5qwL");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    iRXW: function(e, t, n) {
        var r = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), a(n)
        }
    },
    jQas: function(e, t, n) {
        var r = n("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                o = ["AM", "PM"],
                s = ["am", "pm"],
                u = ["a.m.", "p.m."],
                c = {
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
                        return i[e.getDay()]
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? o[1] : o[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? u[1] : u[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                c[e + "o"] = function(t, n) {
                    return function(e) {
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
                    }(n[e](t))
                }
            }), {
                formatters: c,
                formattingTokensRegExp: r(c)
            }
        }
    },
    jy2q: function(e, t, n) {
        var r = n("xA5w"),
            a = n("balU");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return a(n, n.getMonth() + 3 * i)
        }
    },
    kDuD: function(e, t, n) {
        var r = n("xA5w"),
            a = n("MIQa"),
            i = n("xKy+");
        e.exports = function(e) {
            var t = r(e);
            return a(t).getTime() === i(t).getTime()
        }
    },
    kIFi: function(e, t, n) {
        var r = n("NSOL");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    kRs6: function(e, t, n) {
        var r = n("Qxz6");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    kjlQ: function(e, t, n) {
        var r = n("G7No"),
            a = 36e5;
        e.exports = function(e, t) {
            var n = r(e, t) / a;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    kkVd: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 1 === r(e).getDay()
        }
    },
    l85J: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMonth()
        }
    },
    lQzg: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
    },
    lqN2: function(e, t) {},
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, r - 1), a.setHours(0, 0, 0, 0), a
        }
    },
    mXYp: function(e, t, n) {
        var r = n("YRFD"),
            a = n("xA5w"),
            i = n("25hp"),
            o = n("GI7G"),
            s = n("uyaC"),
            u = 1440,
            c = 2520,
            l = 43200,
            d = 86400;
        e.exports = function(e, t, n) {
            var f = n || {},
                h = r(e, t),
                m = f.locale,
                p = s.distanceInWords.localize;
            m && m.distanceInWords && m.distanceInWords.localize && (p = m.distanceInWords.localize);
            var v, g, b = {
                addSuffix: Boolean(f.addSuffix),
                comparison: h
            };
            h > 0 ? (v = a(e), g = a(t)) : (v = a(t), g = a(e));
            var y, w = i(g, v),
                x = g.getTimezoneOffset() - v.getTimezoneOffset(),
                D = Math.round(w / 60) - x;
            if (D < 2) return f.includeSeconds ? w < 5 ? p("lessThanXSeconds", 5, b) : w < 10 ? p("lessThanXSeconds", 10, b) : w < 20 ? p("lessThanXSeconds", 20, b) : w < 40 ? p("halfAMinute", null, b) : p(w < 60 ? "lessThanXMinutes" : "xMinutes", 1, b) : 0 === D ? p("lessThanXMinutes", 1, b) : p("xMinutes", D, b);
            if (D < 45) return p("xMinutes", D, b);
            if (D < 90) return p("aboutXHours", 1, b);
            if (D < u) return p("aboutXHours", Math.round(D / 60), b);
            if (D < c) return p("xDays", 1, b);
            if (D < l) return p("xDays", Math.round(D / u), b);
            if (D < d) return p("aboutXMonths", y = Math.round(D / l), b);
            if ((y = o(g, v)) < 12) return p("xMonths", Math.round(D / l), b);
            var _ = y % 12,
                N = Math.floor(y / 12);
            return _ < 3 ? p("aboutXYears", N, b) : _ < 9 ? p("overXYears", N, b) : p("almostXYears", N + 1, b)
        }
    },
    nZeo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getFullYear()
        }
    },
    nfOx: function(e, t, n) {
        var r = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 1e3 * n)
        }
    },
    nizW: function(e, t, n) {
        var r = n("WNGz"),
            a = 6e4,
            i = 864e5;
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                u = o.getTime() - o.getTimezoneOffset() * a;
            return Math.round((s - u) / i)
        }
    },
    nk30: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                o = 6 + (i < n ? -7 : 0) - (i - n);
            return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + o), a
        }
    },
    oNnY: function(e, t, n) {
        var r = n("zZbG"),
            a = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, r(e) + n)
        }
    },
    oke8: function(e, t, n) {
        var r = n("1rLR");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    orNa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return 12 * (n.getFullYear() - a.getFullYear()) + (n.getMonth() - a.getMonth())
        }
    },
    pD3p: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("HW6M"),
            i = n("+Hq5"),
            o = n("GiK3"),
            s = n("CIox"),
            u = n("F8kA"),
            c = n("Odds"),
            l = (n("lqN2"), function(e) {
                if (e.external) {
                    var t = "string" == typeof e.linkTo ? e.linkTo : Object(i.b)(e.linkTo);
                    return o.createElement(s.c, {
                        path: t,
                        exact: e.exact
                    }, function(n) {
                        var i, s = n.match;
                        return o.createElement(c._2, {
                            padding: {
                                x: 2,
                                y: .5
                            },
                            display: c.R.Block
                        }, o.createElement("a", r.__assign({
                            className: a("dashboard-side-nav__link", (i = {}, i["dashboard-side-nav__link--active"] = Boolean(s), i)),
                            href: t
                        }, Object(c._61)(e)), e.children))
                    })
                }
                return o.createElement(c._2, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    display: c.R.Block
                }, o.createElement(u.b, r.__assign({
                    to: e.linkTo,
                    className: "dashboard-side-nav__link",
                    activeClassName: "dashboard-side-nav__link--active",
                    exact: e.exact
                }, Object(c._61)(e)), e.children))
            });
        n.d(t, "a", function() {
            return l
        })
    },
    pe7V: function(e, t, n) {
        var r = n("8KV+");
        e.exports = function(e, t) {
            return r(new Date, e, t)
        }
    },
    qNYo: function(e, t, n) {
        var r = n("xA5w"),
            a = n("9Jn5"),
            i = n("NKE6"),
            o = n("MKc+");
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                u = i(n, s),
                c = Math.abs(a(n, s));
            return n = o(n, u * c), u * (c - (i(n, s) === -u))
        }
    },
    qPxx: function(e, t, n) {
        var r = n("LLTj");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    rBmI: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3;
            return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rO5X: function(e, t, n) {
        var r = n("xA5w"),
            a = n("Bb5e"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t),
                s = i(n, o),
                u = Math.abs(a(n, o));
            return n.setFullYear(n.getFullYear() - s * u), s * (u - (i(n, o) === -s))
        }
    },
    sdTe: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return n.getTime() === a.getTime()
        }
    },
    t6pj: function(e, t, n) {
        var r = n("YRFD"),
            a = n("xA5w"),
            i = n("25hp"),
            o = n("uyaC"),
            s = 1440,
            u = 43200,
            c = 525600;
        e.exports = function(e, t, n) {
            var l = n || {},
                d = r(e, t),
                f = l.locale,
                h = o.distanceInWords.localize;
            f && f.distanceInWords && f.distanceInWords.localize && (h = f.distanceInWords.localize);
            var m, p, v, g = {
                addSuffix: Boolean(l.addSuffix),
                comparison: d
            };
            d > 0 ? (m = a(e), p = a(t)) : (m = a(t), p = a(e));
            var b = Math[l.partialMethod ? String(l.partialMethod) : "floor"],
                y = i(p, m),
                w = p.getTimezoneOffset() - m.getTimezoneOffset(),
                x = b(y / 60) - w;
            if ("s" === (v = l.unit ? String(l.unit) : x < 1 ? "s" : x < 60 ? "m" : x < s ? "h" : x < u ? "d" : x < c ? "M" : "Y")) return h("xSeconds", y, g);
            if ("m" === v) return h("xMinutes", x, g);
            if ("h" === v) return h("xHours", b(x / 60), g);
            if ("d" === v) return h("xDays", b(x / s), g);
            if ("M" === v) return h("xMonths", b(x / u), g);
            if ("Y" === v) return h("xYears", b(x / c), g);
            throw new Error("Unknown unit: " + v)
        }
    },
    t8zS: function(e, t, n) {
        var r = n("nk30");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "u/4p": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                i = a.getDay(),
                o = (i < n ? 7 : 0) + i - n;
            return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a
        }
    },
    u4Vk: function(e, t, n) {
        "use strict";
        t.d = function(e, t) {
            return Object(r.isEqual)(e.start, t.start) && Object(r.isEqual)(e.end, t.end)
        }, t.f = function(e, t) {
            return e.end.getTime() - e.start.getTime() == t.end.getTime() - t.start.getTime()
        }, t.a = function(e) {
            return Object(r.differenceInMinutes)(e.end, e.start)
        }, t.i = function(e) {
            return {
                start_time: e.start.toJSON(),
                end_time: e.end.toJSON()
            }
        }, t.b = function(e) {
            var t = Object(r.differenceInMinutes)(e.end, e.start);
            return Object(a.a)(t)
        }, t.g = function(e, t) {
            void 0 === t && (t = new Date);
            var n = Object(r.endOfDay)(t);
            return {
                start: Object(r.subDays)(n, e),
                end: n
            }
        }, t.h = function(e, t) {
            var n = (Object(r.differenceInDays)(e.end, e.start) + 1) * t;
            return {
                start: Object(r.addDays)(e.start, n),
                end: Object(r.addDays)(e.end, n)
            }
        }, t.c = function(e, t) {
            return t.start.getTime() < e.start.getTime()
        }, t.e = function(e) {
            return Object(r.isValid)(e.start) && Object(r.isValid)(e.end) && e.start.getTime() <= e.end.getTime()
        };
        var r = n("wuJz"),
            a = (n.n(r), n("yiqh"))
    },
    "uYc/": function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = [];
            return e.sessions.forEach(function(e) {
                var r = u.fromPayload(e, t);
                r.isCompleted && n.push(r)
            }), n
        }, n.d(t, "a", function() {
            return u
        });
        var r = n("wuJz"),
            a = (n.n(r), n("u4Vk")),
            i = n("xygp");
        var o = ["google", "youtube", "facebook", "t.co", "reddit"];

        function s(e) {
            return o.find(function(t) {
                return e.indexOf(t) >= 0
            }) || e
        }
        var u = function() {
            function e(e) {
                this.interval = {
                    start: e.start,
                    end: e.end
                }, this.now = new Date, this.id = e.start.getTime() + "-" + e.end.getTime(), this.isCompleted = this.getIsCompleted(), this.channel = e.channel, this.avgViewerCount = e.avgViewerCount, this.maxViewerCount = e.maxViewerCount, this.followersChange = e.followersChange, this.totalViewers = e.totalViewers, this.uniqueViewers = e.uniqueViewers, this.totalMinutesWatched = e.totalMinutesWatched, this.uniqueChatters = e.uniqueChatters, this.incomingRaids = e.incomingRaids, this.peakViewershipTime = e.peakViewershipTime, this.startChannelStatus = e.startChannelStatus, this.messagesTotal = e.messagesTotal, this.videoThumbnail = e.videoThumbnail, this.clipCreatesTotal = e.clipCreatesTotal, this.clipPlaysTotal = e.clipPlaysTotal, this.clipPlaysBreakdown = e.clipPlaysBreakdown, this.commercialCount = e.commercialCount, this.commercialDensity = e.commercialDensity, this.commercialLengthTotal = e.commercialLengthTotal, this.subscriptionsNew = e.subscriptionsNew, this.videoPlayExternalReferrers = e.videoPlayExternalReferrers, this.videoPlayInternalChannelsReferrers = e.videoPlayInternalChannelsReferrers, this.videoPlayInternalTwitchReferrers = e.videoPlayInternalTwitchReferrers, this.videoPlayAllReferrers = e.videoPlayAllReferrers, this.videoPlayGeographics = e.videoPlayGeographics, this.videoPlayPlatforms = e.videoPlayPlatforms
            }
            return e.fromPayload = function(t, n) {
                var r = t.videos[0],
                    a = r && r.thumbnails && r.thumbnails.small && r.thumbnails.small.length && r.thumbnails.small[0].url || "",
                    o = r && r.title || "",
                    u = {
                        twitch: 0,
                        reddit: 0,
                        facebook: 0,
                        twitter: 0,
                        other: 0
                    };
                (t.stats.clip_plays_breakdown || []).forEach(function(e) {
                    return u[e.key] = Number(e.value)
                });
                var c = t.summary,
                    l = t.stats,
                    d = Object(i.b)((l.video_play_external_referrers || []).concat(l.video_play_internal_channels_referrers || [], l.video_play_internal_twitch_referrers || []));
                return new e({
                    start: new Date(t.start_time),
                    end: new Date(t.end_time),
                    avgViewerCount: Number(c.concurrents_average),
                    maxViewerCount: Number(c.concurrents_max),
                    followersChange: Number(c.followers_change),
                    totalViewers: Number(c.video_play_total),
                    uniqueViewers: Number(c.video_play_unique),
                    totalMinutesWatched: Number(c.minutes_watched_total),
                    clipCreatesTotal: Number(c.clip_creates_total),
                    clipPlaysTotal: Number(c.clip_plays_total),
                    clipPlaysBreakdown: u,
                    commercialCount: Number(c.commercial_count),
                    commercialDensity: Number(c.commercial_density),
                    commercialLengthTotal: Number(c.commercial_length_total),
                    subscriptionsNew: Number(c.subscriptions_new),
                    uniqueChatters: Number(c.chatters_unique),
                    peakViewershipTime: new Date(c.concurrents_peak_time),
                    incomingRaids: Number(c.raids_incoming),
                    startChannelStatus: o,
                    messagesTotal: Number(c.messages_total),
                    videoThumbnail: a,
                    channel: n,
                    videoPlayExternalReferrers: Object(i.b)(l.video_play_external_referrers, s),
                    videoPlayInternalChannelsReferrers: Object(i.b)(l.video_play_internal_channels_referrers),
                    videoPlayInternalTwitchReferrers: Object(i.b)(l.video_play_internal_twitch_referrers),
                    videoPlayAllReferrers: d,
                    videoPlayGeographics: Object(i.b)(l.video_play_geographics),
                    videoPlayPlatforms: Object(i.b)(l.video_play_platforms)
                })
            }, e.intervalFromID = function(e) {
                var t = e.split("-"),
                    n = t[0],
                    r = t[1],
                    i = {
                        start: new Date(Number(n)),
                        end: new Date(Number(r))
                    };
                if (Object(a.e)(i)) return i
            }, e.prototype.getIsCompleted = function() {
                return this.interval.end < Object(r.subMinutes)(this.now, 15)
            }, e
        }()
    },
    uwYd: function(e, t) {},
    uwZN: function(e, t, n) {
        var r = n("7yyf");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    uyaC: function(e, t, n) {
        var r = n("Ptqd"),
            a = n("jQas");
        e.exports = {
            distanceInWords: r(),
            format: a()
        }
    },
    v5lG: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardStreamSummary_Channel"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelName"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "channel"
                        },
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelName"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "query DashboardStreamSummary_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    vBvW: function(e, t, n) {
        var r = n("mXYp");
        e.exports = function(e, t) {
            return r(Date.now(), e, t)
        }
    },
    ve2D: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 2 === r(e).getDay()
        }
    },
    w4by: function(e, t, n) {
        var r = n("6Zhv"),
            a = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * a)
        }
    },
    wAFH: function(e, t, n) {
        var r = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    wPo5: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t);
            return n.setHours(a), n
        }
    },
    wajf: function(e, t, n) {
        var r = n("xA5w"),
            a = n("D6ie");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                o = a(n) - i;
            return n.setDate(n.getDate() - 7 * o), n
        }
    },
    wiYS: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, i = r(e).getTime();
            return t.forEach(function(e, t) {
                var o = r(e),
                    s = Math.abs(i - o.getTime());
                (void 0 === n || s < a) && (n = t, a = s)
            }), n
        }
    },
    wuJz: function(e, t, n) {
        e.exports = {
            addDays: n("Jvcu"),
            addHours: n("w4by"),
            addISOYears: n("oNnY"),
            addMilliseconds: n("6Zhv"),
            addMinutes: n("NSOL"),
            addMonths: n("3EIC"),
            addQuarters: n("1rLR"),
            addSeconds: n("nfOx"),
            addWeeks: n("7EGB"),
            addYears: n("4Z4o"),
            areRangesOverlapping: n("2lB6"),
            closestIndexTo: n("wiYS"),
            closestTo: n("Tv4R"),
            compareAsc: n("NKE6"),
            compareDesc: n("YRFD"),
            differenceInCalendarDays: n("nizW"),
            differenceInCalendarISOWeeks: n("0aH9"),
            differenceInCalendarISOYears: n("9Jn5"),
            differenceInCalendarMonths: n("orNa"),
            differenceInCalendarQuarters: n("Jtuq"),
            differenceInCalendarWeeks: n("Q2rx"),
            differenceInCalendarYears: n("Bb5e"),
            differenceInDays: n("gAt4"),
            differenceInHours: n("kjlQ"),
            differenceInISOYears: n("qNYo"),
            differenceInMilliseconds: n("G7No"),
            differenceInMinutes: n("3nPg"),
            differenceInMonths: n("GI7G"),
            differenceInQuarters: n("XFzU"),
            differenceInSeconds: n("25hp"),
            differenceInWeeks: n("6SO/"),
            differenceInYears: n("rO5X"),
            distanceInWords: n("mXYp"),
            distanceInWordsStrict: n("t6pj"),
            distanceInWordsToNow: n("vBvW"),
            eachDay: n("M9Ev"),
            endOfDay: n("MIQa"),
            endOfHour: n("bbdo"),
            endOfISOWeek: n("SZZR"),
            endOfISOYear: n("K7ZZ"),
            endOfMinute: n("LU20"),
            endOfMonth: n("xKy+"),
            endOfQuarter: n("zQFw"),
            endOfSecond: n("+sSA"),
            endOfToday: n("0LAu"),
            endOfTomorrow: n("HXCM"),
            endOfWeek: n("I7cV"),
            endOfYear: n("Epw6"),
            endOfYesterday: n("0YGC"),
            format: n("Eoz/"),
            getDate: n("3g9B"),
            getDay: n("Mbb9"),
            getDayOfYear: n("ymQ7"),
            getDaysInMonth: n("Mdww"),
            getDaysInYear: n("Javx"),
            getHours: n("8Gpr"),
            getISODay: n("AZvW"),
            getISOWeek: n("D6ie"),
            getISOWeeksInYear: n("fUo1"),
            getISOYear: n("zZbG"),
            getMilliseconds: n("024F"),
            getMinutes: n("JNsx"),
            getMonth: n("l85J"),
            getOverlappingDaysInRanges: n("8QR2"),
            getQuarter: n("lQzg"),
            getSeconds: n("eKpK"),
            getTime: n("cwv1"),
            getYear: n("nZeo"),
            isAfter: n("fK0I"),
            isBefore: n("gDPd"),
            isDate: n("607n"),
            isEqual: n("sdTe"),
            isFirstDayOfMonth: n("6udH"),
            isFriday: n("YPf8"),
            isFuture: n("6CZb"),
            isLastDayOfMonth: n("kDuD"),
            isLeapYear: n("b7g8"),
            isMonday: n("kkVd"),
            isPast: n("eCZG"),
            isSameDay: n("f4ga"),
            isSameHour: n("qPxx"),
            isSameISOWeek: n("Be26"),
            isSameISOYear: n("4LxA"),
            isSameMinute: n("Moxe"),
            isSameMonth: n("f+sD"),
            isSameQuarter: n("7yyf"),
            isSameSecond: n("5qwL"),
            isSameWeek: n("8KV+"),
            isSameYear: n("Qxz6"),
            isSaturday: n("6axH"),
            isSunday: n("ZUMa"),
            isThisHour: n("z3wv"),
            isThisISOWeek: n("A2zO"),
            isThisISOYear: n("hUHO"),
            isThisMinute: n("Qbo9"),
            isThisMonth: n("cONr"),
            isThisQuarter: n("uwZN"),
            isThisSecond: n("hj5Y"),
            isThisWeek: n("pe7V"),
            isThisYear: n("kRs6"),
            isThursday: n("yu3m"),
            isToday: n("GvNH"),
            isTomorrow: n("0oN5"),
            isTuesday: n("ve2D"),
            isValid: n("dH3X"),
            isWednesday: n("e/EH"),
            isWeekend: n("4OFc"),
            isWithinRange: n("4zIR"),
            isYesterday: n("1gtq"),
            lastDayOfISOWeek: n("t8zS"),
            lastDayOfISOYear: n("hico"),
            lastDayOfMonth: n("Akl5"),
            lastDayOfQuarter: n("T/Ln"),
            lastDayOfWeek: n("nk30"),
            lastDayOfYear: n("xLg3"),
            max: n("11Bn"),
            min: n("aHtT"),
            parse: n("xA5w"),
            setDate: n("/dIK"),
            setDay: n("SHOI"),
            setDayOfYear: n("CVNg"),
            setHours: n("wPo5"),
            setISODay: n("YPjl"),
            setISOWeek: n("wajf"),
            setISOYear: n("Uu+E"),
            setMilliseconds: n("+/J2"),
            setMinutes: n("danj"),
            setMonth: n("balU"),
            setQuarter: n("jy2q"),
            setSeconds: n("ToRI"),
            setYear: n("a7Cs"),
            startOfDay: n("WNGz"),
            startOfHour: n("LLTj"),
            startOfISOWeek: n("3znZ"),
            startOfISOYear: n("iRXW"),
            startOfMinute: n("M5Oo"),
            startOfMonth: n("7Xwz"),
            startOfQuarter: n("rBmI"),
            startOfSecond: n("VaeB"),
            startOfToday: n("1udo"),
            startOfTomorrow: n("gUEJ"),
            startOfWeek: n("u/4p"),
            startOfYear: n("JURy"),
            startOfYesterday: n("mSFb"),
            subDays: n("cA+x"),
            subHours: n("fo7E"),
            subISOYears: n("MKc+"),
            subMilliseconds: n("wAFH"),
            subMinutes: n("kIFi"),
            subMonths: n("7Swd"),
            subQuarters: n("oke8"),
            subSeconds: n("9r5b"),
            subWeeks: n("cw9o"),
            subYears: n("0UyA")
        }
    },
    xA5w: function(e, t, n) {
        var r = n("607n"),
            a = 36e5,
            i = 6e4,
            o = 2,
            s = /[T ]/,
            u = /:/,
            c = /^(\d{2})$/,
            l = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            d = /^(\d{4})/,
            f = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            h = /^-(\d{2})$/,
            m = /^-?(\d{3})$/,
            p = /^-?(\d{2})-?(\d{2})$/,
            v = /^-?W(\d{2})$/,
            g = /^-?W(\d{2})-?(\d{1})$/,
            b = /^(\d{2}([.,]\d*)?)$/,
            y = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            w = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            x = /([Z+-].*)$/,
            D = /^(Z)$/,
            _ = /^([+-])(\d{2})$/,
            N = /^([+-])(\d{2}):?(\d{2})$/;

        function S(e, t, n) {
            t = t || 0, n = n || 0;
            var r = new Date(0);
            r.setUTCFullYear(e, 0, 4);
            var a = 7 * t + n + 1 - (r.getUTCDay() || 7);
            return r.setUTCDate(r.getUTCDate() + a), r
        }
        e.exports = function(e, t) {
            if (r(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? o : Number(n);
            var k = function(e) {
                    var t, n = {},
                        r = e.split(s);
                    if (u.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1]), t) {
                        var a = x.exec(t);
                        a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
                    }
                    return n
                }(e),
                T = function(e, t) {
                    var n, r = l[t],
                        a = f[t];
                    if (n = d.exec(e) || a.exec(e)) {
                        var i = n[1];
                        return {
                            year: parseInt(i, 10),
                            restDateString: e.slice(i.length)
                        }
                    }
                    if (n = c.exec(e) || r.exec(e)) {
                        var o = n[1];
                        return {
                            year: 100 * parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(k.date, n),
                M = T.year,
                O = function(e, t) {
                    if (null === t) return null;
                    var n, r, a, i;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (n = h.exec(e)) return r = new Date(0), a = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, a), r;
                    if (n = m.exec(e)) {
                        r = new Date(0);
                        var o = parseInt(n[1], 10);
                        return r.setUTCFullYear(t, 0, o), r
                    }
                    if (n = p.exec(e)) {
                        r = new Date(0), a = parseInt(n[1], 10) - 1;
                        var s = parseInt(n[2], 10);
                        return r.setUTCFullYear(t, a, s), r
                    }
                    if (n = v.exec(e)) return i = parseInt(n[1], 10) - 1, S(t, i);
                    if (n = g.exec(e)) {
                        i = parseInt(n[1], 10) - 1;
                        var u = parseInt(n[2], 10) - 1;
                        return S(t, i, u)
                    }
                    return null
                }(T.restDateString, M);
            if (O) {
                var A, E = O.getTime(),
                    I = 0;
                return k.time && (I = function(e) {
                    var t, n, r;
                    if (t = b.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * a;
                    if (t = y.exec(e)) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), n % 24 * a + r * i;
                    if (t = w.exec(e)) {
                        n = parseInt(t[1], 10), r = parseInt(t[2], 10);
                        var o = parseFloat(t[3].replace(",", "."));
                        return n % 24 * a + r * i + 1e3 * o
                    }
                    return null
                }(k.time)), k.timezone ? (C = k.timezone, A = (R = D.exec(C)) ? 0 : (R = _.exec(C)) ? (Y = 60 * parseInt(R[2], 10), "+" === R[1] ? -Y : Y) : (R = N.exec(C)) ? (Y = 60 * parseInt(R[2], 10) + parseInt(R[3], 10), "+" === R[1] ? -Y : Y) : 0) : (A = new Date(E + I).getTimezoneOffset(), A = new Date(E + I + A * i).getTimezoneOffset()), new Date(E + I + A * i)
            }
            var C, R, Y;
            return new Date(e)
        }
    },
    "xKy+": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    xLg3: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    xygp: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            void 0 === t && (t = r);
            var n = {
                totals: 0,
                items: []
            };
            if (!e) return n;
            return n.items = e.map(function(e) {
                return n.totals += Number(e.value), {
                    name: t(e.key),
                    count: Number(e.value),
                    share: 0
                }
            }), n.items.forEach(function(e) {
                e.share = i(e.count / n.totals)
            }), n.items = n.items.sort(a), n
        }, t.a = function(e) {
            var t = {
                    totals: 0,
                    items: []
                },
                n = new Map;
            return e.forEach(function(e) {
                t.totals += e.totals, e.items.forEach(function(e) {
                    n.set(e.name, (n.get(e.name) || 0) + e.count)
                })
            }), n.forEach(function(e, n) {
                t.items.push({
                    name: n,
                    count: e,
                    share: i(e / t.totals)
                })
            }), t.items = t.items.sort(a), t
        };
        var r = function(e) {
            return e
        };

        function a(e, t) {
            return e.count === t.count ? e.name.localeCompare(t.name) : e.count > t.count ? -1 : 1
        }

        function i(e) {
            return Math.round(100 * e)
        }
    },
    yiqh: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t, n = Math.floor(e / 60),
                a = e % 60;
            t = n && a ? Object(r.d)("{hours, number}h{minutes, number}m", {
                hours: n,
                minutes: a
            }, "StreamSummaryDuration") : n ? Object(r.d)("{hours, number}h", {
                hours: n
            }, "StreamSummaryDuration") : Object(r.d)("{minutes, number}m", {
                minutes: a
            }, "StreamSummaryDuration");
            return t
        };
        var r = n("6sO2")
    },
    ymQ7: function(e, t, n) {
        var r = n("xA5w"),
            a = n("JURy"),
            i = n("nizW");
        e.exports = function(e) {
            var t = r(e);
            return i(t, a(t)) + 1
        }
    },
    ytWG: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            i = n("5kgt"),
            o = n("Odds"),
            s = (n("XeQJ"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o._8, r.__assign({
                        display: o.R.InlineBlock,
                        margin: {
                            left: .5
                        },
                        className: "side-nav-hotspot"
                    }, Object(i.a)(this.props)))
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return s
        })
    },
    yu3m: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 4 === r(e).getDay()
        }
    },
    z3wv: function(e, t, n) {
        var r = n("qPxx");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    zDNk: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("TToO"),
            a = n("GiK3"),
            i = (n.n(a), n("Odds")),
            o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(i._8, {
                        padding: {
                            top: 2,
                            x: 2
                        },
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(i.Q, {
                        type: i._47.H4,
                        fontSize: i.V.Size5
                    }, this.props.children))
                }, t
            }(a.Component)
    },
    zQFw: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var r = n("xA5w"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear(),
                i = new Date(0);
            i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
            var o = a(i),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var u = a(s);
            return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1
        }
    }
});
//# sourceMappingURL=pages.dashboard-c672f311d28dd608b2662ba4ba0add04.js.map