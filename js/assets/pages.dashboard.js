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
                var n, c, u, l;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return n = "/v5/channels/" + e.id + "/analytics/sessions_summary", c = a.stringify(Object(o.i)(t)), u = [n, c].join("?"), [4, Object(i.a)({
                                path: u
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
            o = (n.n(a), n("u4Vk")),
            i = n("6w0d"),
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
    "/ute": function(e, t) {},
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
            o = n("6sO2"),
            i = n("vH/s"),
            s = n("zDNk"),
            c = n("ytWG"),
            u = n("pD3p"),
            l = n("CIox"),
            d = n("7qqA"),
            m = n("wuJz"),
            f = n("lbHh"),
            h = {
                get: function(e) {
                    var t = f.get("streamSummary" + e),
                        n = 0;
                    if (t) try {
                        n = JSON.parse(t).endTime
                    } catch (e) {}
                    return n
                },
                set: function(e, t) {
                    f.set("streamSummary" + e, {
                        wasSeen: !0,
                        endTime: t
                    }, {
                        expires: Object(m.addDays)(new Date, 30),
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
                    var r = t.lastSeenStore || h,
                        a = n.channel.id,
                        o = n.streamSummaries[n.streamSummaries.length - 1],
                        i = o && o.interval.end.getTime() || 0;
                    if (e && !e.params.sessionID) return r.set(a, i), !1;
                    var s = e && e.params.sessionID && d.b.intervalFromID(e.params.sessionID),
                        c = s && s.end.getTime();
                    if (c && c === i) return r.set(a, i), !1;
                    var u = r.get(a);
                    if (i <= u) return !1;
                    return !0
                }(t.match, e) && e.children
            })
        };
        var g = {
                "data-test-selector": "stream-summary-hotspot-selector"
            },
            b = {
                "data-test-selector": "stats-link-selector"
            },
            v = {
                "data-test-selector": "revenue-link-selector"
            },
            y = {
                "data-test-selector": "channel-analytics-hotspot-selector"
            },
            O = {
                "data-test-selector": "channel-analytics-link-selector"
            },
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(a.Fragment, null, a.createElement(s.a, null, Object(o.d)("Analytics", "DashboardNav")), a.createElement("ul", null, a.createElement("li", null, a.createElement(u.a, r.__assign({}, O, {
                        linkTo: {
                            pathname: "/" + this.props.channelName + "/dashboard/channel-analytics",
                            state: {
                                medium: i.PageviewMedium.DashboardLeftNav
                            }
                        }
                    }), Object(o.d)("Channel", "DashboardNav"), this.isChannelAnalyticsNew && a.createElement(c.a, r.__assign({}, y)))), a.createElement("li", null, a.createElement(u.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard/stream-summary"
                    }, Object(o.d)("Stream Summary", "DashboardNav"), a.createElement(p, {
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }, a.createElement(c.a, r.__assign({}, g))))), this.canAccessStats && a.createElement("li", null, a.createElement(u.a, r.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/stats",
                        external: !0
                    }, b), Object(o.d)("Stats", "DashboardNav"))), this.canAccessRevenue && a.createElement("li", null, a.createElement(u.a, r.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/revenue",
                        external: !0
                    }, v), Object(o.d)("Revenue", "DashboardNav")))))
                }, Object.defineProperty(t.prototype, "isChannelAnalyticsNew", {
                    get: function() {
                        return !o.l.get("seenChannelAnalytics", !1)
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
            return g
        }), n.d(t, !1, function() {
            return b
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, !1, function() {
            return O
        }), n.d(t, "b", function() {
            return D
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
            o = 6048e5;
        e.exports = function(e, t) {
            var n = r(e),
                i = r(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                c = i.getTime() - i.getTimezoneOffset() * a;
            return Math.round((s - c) / o)
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
            var o = r(e).getTime(),
                i = r(t).getTime(),
                s = r(n).getTime(),
                c = r(a).getTime();
            if (o > i || s > c) throw new Error("The start of the range cannot be after the end of the range");
            return o < c && s < i
        }
    },
    "3EIC": function(e, t, n) {
        var r = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t),
                i = n.getMonth() + o,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), i, 1), s.setHours(0, 0, 0, 0);
            var c = a(s);
            return n.setMonth(i, Math.min(c, n.getDate())), n
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
                o = r(t).getTime(),
                i = r(n).getTime();
            if (o > i) throw new Error("The start of the range cannot be after the end of the range");
            return a >= o && a <= i
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
                o = function(e, t, r, a) {
                    n ? e.addEventListener(t, r, !!a) : e.attachEvent("on" + t, r)
                },
                i = function(e, t, r, a) {
                    n ? e.removeEventListener(t, r, !!a) : e.detachEvent("on" + t, r)
                },
                s = function(e, t) {
                    return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
                },
                c = function(e) {
                    return /Array/.test(Object.prototype.toString.call(e))
                },
                u = function(e) {
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
                m = function(e) {
                    u(e) && e.setHours(0, 0, 0, 0)
                },
                f = function(e, t) {
                    return e.getTime() === t.getTime()
                },
                h = function(e, t, n) {
                    var r, a;
                    for (r in t)(a = void 0 !== e[r]) && "object" == typeof t[r] && null !== t[r] && void 0 === t[r].nodeName ? u(t[r]) ? n && (e[r] = new Date(t[r].getTime())) : c(t[r]) ? n && (e[r] = t[r].slice(0)) : e[r] = h({}, t[r], n) : !n && a || (e[r] = t[r]);
                    return e
                },
                p = function(e, t, n) {
                    var a;
                    r.createEvent ? ((a = r.createEvent("HTMLEvents")).initEvent(t, !0, !1), a = h(a, n), e.dispatchEvent(a)) : r.createEventObject && (a = r.createEventObject(), a = h(a, n), e.fireEvent("on" + t, a))
                },
                g = function(e) {
                    return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12), e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12), e
                },
                b = {
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
                v = function(e, t, n) {
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
                O = function(e, t, n, r) {
                    return '<tr class="pika-row' + (n ? " pick-whole-week" : "") + (r ? " is-selected" : "") + '">' + (t ? e.reverse() : e).join("") + "</tr>"
                },
                D = function(e, t, n, r, a, o) {
                    var i, s, u, l, d, m = e._o,
                        f = n === m.minYear,
                        h = n === m.maxYear,
                        p = '<div id="' + o + '" class="pika-title" role="heading" aria-live="assertive">',
                        g = !0,
                        b = !0;
                    for (u = [], i = 0; i < 12; i++) u.push('<option value="' + (n === a ? i - t : 12 + i - t) + '"' + (i === r ? ' selected="selected"' : "") + (f && i < m.minMonth || h && i > m.maxMonth ? 'disabled="disabled"' : "") + ">" + m.i18n.months[i] + "</option>");
                    for (l = '<div class="pika-label">' + m.i18n.months[r] + '<select class="pika-select pika-select-month" tabindex="-1">' + u.join("") + "</select></div>", c(m.yearRange) ? (i = m.yearRange[0], s = m.yearRange[1] + 1) : (i = n - m.yearRange, s = 1 + n + m.yearRange), u = []; i < s && i <= m.maxYear; i++) i >= m.minYear && u.push('<option value="' + i + '"' + (i === n ? ' selected="selected"' : "") + ">" + i + "</option>");
                    return d = '<div class="pika-label">' + n + m.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + u.join("") + "</select></div>", m.showMonthAfterYear ? p += d + l : p += l + d, f && (0 === r || m.minMonth >= r) && (g = !1), h && (11 === r || m.maxMonth <= r) && (b = !1), 0 === t && (p += '<button class="pika-prev' + (g ? "" : " is-disabled") + '" type="button">' + m.i18n.previousMonth + "</button>"), t === e._o.numberOfMonths - 1 && (p += '<button class="pika-next' + (b ? "" : " is-disabled") + '" type="button">' + m.i18n.nextMonth + "</button>"), p + "</div>"
                },
                S = function(e, t, n) {
                    return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + n + '">' + function(e) {
                        var t, n = [];
                        for (e.showWeekNumber && n.push("<th></th>"), t = 0; t < 7; t++) n.push('<th scope="col"><abbr title="' + v(e, t) + '">' + v(e, t, !0) + "</abbr></th>");
                        return "<thead><tr>" + (e.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
                    }(e) + ("<tbody>" + t.join("") + "</tbody>") + "</table>"
                },
                w = function(i) {
                    var c = this,
                        l = c.config(i);
                    c._onMouseDown = function(e) {
                        if (c._v) {
                            var t = (e = e || window.event).target || e.srcElement;
                            if (t)
                                if (s(t, "is-disabled") || (!s(t, "pika-button") || s(t, "is-empty") || s(t.parentNode, "is-disabled") ? s(t, "pika-prev") ? c.prevMonth() : s(t, "pika-next") && c.nextMonth() : (c.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day"))), l.bound && a(function() {
                                        c.hide(), l.blurFieldOnSelect && l.field && l.field.blur()
                                    }, 100))), s(t, "pika-select")) c._c = !0;
                                else {
                                    if (!e.preventDefault) return e.returnValue = !1, !1;
                                    e.preventDefault()
                                }
                        }
                    }, c._onChange = function(e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        t && (s(t, "pika-select-month") ? c.gotoMonth(t.value) : s(t, "pika-select-year") && c.gotoYear(t.value))
                    }, c._onKeyChange = function(e) {
                        if (e = e || window.event, c.isVisible()) switch (e.keyCode) {
                            case 13:
                            case 27:
                                l.field && l.field.blur();
                                break;
                            case 37:
                                e.preventDefault(), c.adjustDate("subtract", 1);
                                break;
                            case 38:
                                c.adjustDate("subtract", 7);
                                break;
                            case 39:
                                c.adjustDate("add", 1);
                                break;
                            case 40:
                                c.adjustDate("add", 7)
                        }
                    }, c._onInputChange = function(n) {
                        var r;
                        n.firedBy !== c && (r = l.parse ? l.parse(l.field.value, l.format) : t ? (r = e(l.field.value, l.format, l.formatStrict)) && r.isValid() ? r.toDate() : null : new Date(Date.parse(l.field.value)), u(r) && c.setDate(r), c._v || c.show())
                    }, c._onInputFocus = function() {
                        c.show()
                    }, c._onInputClick = function() {
                        c.show()
                    }, c._onInputBlur = function() {
                        var e = r.activeElement;
                        do {
                            if (s(e, "pika-single")) return
                        } while (e = e.parentNode);
                        c._c || (c._b = a(function() {
                            c.hide()
                        }, 50)), c._c = !1
                    }, c._onClick = function(e) {
                        var t = (e = e || window.event).target || e.srcElement,
                            r = t;
                        if (t) {
                            !n && s(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), o(t, "change", c._onChange)));
                            do {
                                if (s(r, "pika-single") || r === l.trigger) return
                            } while (r = r.parentNode);
                            c._v && t !== l.trigger && r !== l.trigger && c.hide()
                        }
                    }, c.el = r.createElement("div"), c.el.className = "pika-single" + (l.isRTL ? " is-rtl" : "") + (l.theme ? " " + l.theme : ""), o(c.el, "mousedown", c._onMouseDown, !0), o(c.el, "touchend", c._onMouseDown, !0), o(c.el, "change", c._onChange), l.keyboardInput && o(r, "keydown", c._onKeyChange), l.field && (l.container ? l.container.appendChild(c.el) : l.bound ? r.body.appendChild(c.el) : l.field.parentNode.insertBefore(c.el, l.field.nextSibling), o(l.field, "change", c._onInputChange), l.defaultDate || (t && l.field.value ? l.defaultDate = e(l.field.value, l.format).toDate() : l.defaultDate = new Date(Date.parse(l.field.value)), l.setDefaultDate = !0));
                    var d = l.defaultDate;
                    u(d) ? l.setDefaultDate ? c.setDate(d, !0) : c.gotoDate(d) : c.gotoDate(new Date), l.bound ? (this.hide(), c.el.className += " is-bound", o(l.trigger, "click", c._onInputClick), o(l.trigger, "focus", c._onInputFocus), o(l.trigger, "blur", c._onInputBlur)) : this.show()
                };
            return w.prototype = {
                config: function(e) {
                    this._o || (this._o = h({}, b, !0));
                    var t = h(this._o, e, !0);
                    t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null;
                    var n = parseInt(t.numberOfMonths, 10) || 1;
                    if (t.numberOfMonths = n > 4 ? 4 : n, u(t.minDate) || (t.minDate = !1), u(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && this.setMaxDate(t.maxDate), c(t.yearRange)) {
                        var r = (new Date).getFullYear() - 10;
                        t.yearRange[0] = parseInt(t.yearRange[0], 10) || r, t.yearRange[1] = parseInt(t.yearRange[1], 10) || r
                    } else t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || b.yearRange, t.yearRange > 100 && (t.yearRange = 100);
                    return t
                },
                toString: function(n) {
                    return n = n || this._o.format, u(this._d) ? this._o.toString ? this._o.toString(this._d, n) : t ? e(this._d).format(n) : this._d.toDateString() : ""
                },
                getMoment: function() {
                    return t ? e(this._d) : null
                },
                setMoment: function(n, r) {
                    t && e.isMoment(n) && this.setDate(n.toDate(), r)
                },
                getDate: function() {
                    return u(this._d) ? new Date(this._d.getTime()) : null
                },
                setDate: function(e, t) {
                    if (!e) return this._d = null, this._o.field && (this._o.field.value = "", p(this._o.field, "change", {
                        firedBy: this
                    })), this.draw();
                    if ("string" == typeof e && (e = new Date(Date.parse(e))), u(e)) {
                        var n = this._o.minDate,
                            r = this._o.maxDate;
                        u(n) && e < n ? e = n : u(r) && e > r && (e = r), this._d = new Date(e.getTime()), m(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), p(this._o.field, "change", {
                            firedBy: this
                        })), t || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                    }
                },
                gotoDate: function(e) {
                    var t = !0;
                    if (u(e)) {
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
                    this.calendars[0] = g(this.calendars[0]);
                    for (var e = 1; e < this._o.numberOfMonths; e++) this.calendars[e] = g({
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
                    e instanceof Date ? (m(e), this._o.minDate = e, this._o.minYear = e.getFullYear(), this._o.minMonth = e.getMonth()) : (this._o.minDate = b.minDate, this._o.minYear = b.minYear, this._o.minMonth = b.minMonth, this._o.startRange = b.startRange), this.draw()
                },
                setMaxDate: function(e) {
                    e instanceof Date ? (m(e), this._o.maxDate = e, this._o.maxYear = e.getFullYear(), this._o.maxMonth = e.getMonth()) : (this._o.maxDate = b.maxDate, this._o.maxYear = b.maxYear, this._o.maxMonth = b.maxMonth, this._o.endRange = b.endRange), this.draw()
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
                            o = n.maxYear,
                            i = n.minMonth,
                            s = n.maxMonth,
                            c = "";
                        this._y <= r && (this._y = r, !isNaN(i) && this._m < i && (this._m = i)), this._y >= o && (this._y = o, !isNaN(s) && this._m > s && (this._m = s)), t = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                        for (var u = 0; u < n.numberOfMonths; u++) c += '<div class="pika-lendar">' + D(this, u, this.calendars[u].year, this.calendars[u].month, this.calendars[0].year, t) + this.render(this.calendars[u].year, this.calendars[u].month, t) + "</div>";
                        this.el.innerHTML = c, n.bound && "hidden" !== n.field.type && a(function() {
                            n.trigger.focus()
                        }, 1), "function" == typeof this._o.onDraw && this._o.onDraw(this), n.bound && n.field.setAttribute("aria-label", "Use the arrow keys to pick a date")
                    }
                },
                adjustPosition: function() {
                    var e, t, n, a, o, i, s, c, u, l;
                    if (!this._o.container) {
                        if (this.el.style.position = "absolute", t = e = this._o.trigger, n = this.el.offsetWidth, a = this.el.offsetHeight, o = window.innerWidth || r.documentElement.clientWidth, i = window.innerHeight || r.documentElement.clientHeight, s = window.pageYOffset || r.body.scrollTop || r.documentElement.scrollTop, "function" == typeof e.getBoundingClientRect) c = (l = e.getBoundingClientRect()).left + window.pageXOffset, u = l.bottom + window.pageYOffset;
                        else
                            for (c = t.offsetLeft, u = t.offsetTop + t.offsetHeight; t = t.offsetParent;) c += t.offsetLeft, u += t.offsetTop;
                        (this._o.reposition && c + n > o || this._o.position.indexOf("right") > -1 && c - n + e.offsetWidth > 0) && (c = c - n + e.offsetWidth), (this._o.reposition && u + a > i + s || this._o.position.indexOf("top") > -1 && u - a - e.offsetHeight > 0) && (u = u - a - e.offsetHeight), this.el.style.left = c + "px", this.el.style.top = u + "px"
                    }
                },
                render: function(e, t, n) {
                    var r = this._o,
                        a = new Date,
                        o = d(e, t),
                        i = new Date(e, t, 1).getDay(),
                        s = [],
                        c = [];
                    m(a), r.firstDay > 0 && (i -= r.firstDay) < 0 && (i += 7);
                    for (var h = 0 === t ? 11 : t - 1, p = 11 === t ? 0 : t + 1, g = 0 === t ? e - 1 : e, b = 11 === t ? e + 1 : e, v = d(g, h), D = o + i, w = D; w > 7;) w -= 7;
                    D += 7 - w;
                    for (var x, _, j, N, M = !1, E = 0, T = 0; E < D; E++) {
                        var A = new Date(e, t, E - i + 1),
                            k = !!u(this._d) && f(A, this._d),
                            C = f(A, a),
                            I = -1 !== r.events.indexOf(A.toDateString()),
                            R = E < i || E >= o + i,
                            P = E - i + 1,
                            F = t,
                            L = e,
                            Y = r.startRange && f(r.startRange, A),
                            G = r.endRange && f(r.endRange, A),
                            B = r.startRange && r.endRange && r.startRange < A && A < r.endRange,
                            W = r.minDate && A < r.minDate || r.maxDate && A > r.maxDate || r.disableWeekends && l(A) || r.disableDayFn && r.disableDayFn(A);
                        R && (E < i ? (P = v + P, F = h, L = g) : (P -= o, F = p, L = b));
                        var H = {
                            day: P,
                            month: F,
                            year: L,
                            hasEvent: I,
                            isSelected: k,
                            isToday: C,
                            isDisabled: W,
                            isEmpty: R,
                            isStartRange: Y,
                            isEndRange: G,
                            isInRange: B,
                            showDaysInNextAndPreviousMonths: r.showDaysInNextAndPreviousMonths,
                            enableSelectionDaysInNextAndPreviousMonths: r.enableSelectionDaysInNextAndPreviousMonths
                        };
                        r.pickWholeWeek && k && (M = !0), c.push(y(H)), 7 == ++T && (r.showWeekNumber && c.unshift((x = E - i, _ = t, j = e, N = void 0, N = new Date(j, 0, 1), '<td class="pika-week">' + Math.ceil(((new Date(j, _, x) - N) / 864e5 + N.getDay() + 1) / 7) + "</td>")), s.push(O(c, r.isRTL, r.pickWholeWeek, M)), c = [], T = 0, M = !1)
                    }
                    return S(r, s, n)
                },
                isVisible: function() {
                    return this._v
                },
                show: function() {
                    var e, t, n;
                    this.isVisible() || (this._v = !0, this.draw(), e = this.el, t = "is-hidden", e.className = (n = (" " + e.className + " ").replace(" " + t + " ", " ")).trim ? n.trim() : n.replace(/^\s+|\s+$/g, ""), this._o.bound && (o(r, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
                },
                hide: function() {
                    var e, t, n = this._v;
                    !1 !== n && (this._o.bound && i(r, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", e = this.el, s(e, t = "is-hidden") || (e.className = "" === e.className ? t : e.className + " " + t), this._v = !1, void 0 !== n && "function" == typeof this._o.onClose && this._o.onClose.call(this))
                },
                destroy: function() {
                    var e = this._o;
                    this.hide(), i(this.el, "mousedown", this._onMouseDown, !0), i(this.el, "touchend", this._onMouseDown, !0), i(this.el, "change", this._onChange), e.keyboardInput && i(r, "keydown", this._onKeyChange), e.field && (i(e.field, "change", this._onInputChange), e.bound && (i(e.trigger, "click", this._onInputClick), i(e.trigger, "focus", this._onInputFocus), i(e.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
                }
            }, w
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
                            return n = r.sent(), [2, new o(n, e)]
                    }
                })
            })
        };
        var r = n("TToO"),
            a = n("9u8h");
        var o = function() {
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
            o = n("7vx8"),
            i = n("AJEV"),
            s = n("v5lG"),
            c = n("+TF1"),
            u = function(e) {
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
                    (e.data.channel && e.data.channel.id) === (this.props.data.channel && this.props.data.channel.id) && Object(i.f)(e.interval, this.props.interval) || this.query()
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t.prototype.query = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.data.channel ? (e = i.c.fromChannelData(this.props.data.channel), this.setState({
                                        isLoading: !0,
                                        channel: e
                                    }), [4, Object(c.b)(e, this.props.interval)]) : [2];
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
            l = Object(o.a)(s, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            })(u);
        n("uYc/");
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return c.a
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
                o = r(t, n);
            return a.getTime() === o.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var r = n("xA5w"),
            a = 864e5;
        e.exports = function(e, t, n, o) {
            var i = r(e).getTime(),
                s = r(t).getTime(),
                c = r(n).getTime(),
                u = r(o).getTime();
            if (i > s || c > u) throw new Error("The start of the range cannot be after the end of the range");
            if (!(i < u && c < s)) return 0;
            var l = (u > s ? s : u) - (c < i ? i : c);
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
    "9Yaz": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            o = n("F8kA"),
            i = n("7qqA"),
            s = n("+TF1"),
            c = n("u4Vk"),
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = i.b.intervalFromID(n.props.summaryID);
                    return r && Object(c.e)(r) && (n.summaryInterval = r), n.needsQuery = Boolean(n.summaryInterval && Object(c.c)(n.props.streamSummaryQuery.interval, n.summaryInterval)), n.state = {
                        isLoading: n.needsQuery,
                        streamSummaries: []
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.query()
                }, t.prototype.componentDidUpdate = function() {
                    this.query()
                }, t.prototype.render = function() {
                    return this.props.children(r.__assign({}, this.props.streamSummaryQuery, {
                        isLoading: this.props.streamSummaryQuery.isLoading || this.state.isLoading,
                        historicalStreamSummary: this.state.streamSummaries[0]
                    }))
                }, t.prototype.query = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.needsQuery && this.props.streamSummaryQuery.channel ? (this.needsQuery = !1, [4, Object(s.b)(this.props.streamSummaryQuery.channel, this.summaryInterval)]) : [2];
                                case 1:
                                    return (e = t.sent()).isError && this.setState({
                                        isLoading: !1
                                    }), this.setState({
                                        streamSummaries: e.streamSummaries,
                                        isLoading: !1
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(a.Component),
            l = n("CIox"),
            d = n("6sO2"),
            m = n("9uzc"),
            f = n("ylrR"),
            h = n("Odds"),
            p = {
                "data-test-selector": "stream-summary-date-time"
            },
            g = function(e) {
                var t = e.currentStreamSummary,
                    n = e.streamSummaries,
                    o = e.getURLForStreamSummary;
                return a.createElement(h._8, {
                    position: h._15.Relative,
                    fullWidth: !0
                }, a.createElement(f.a, {
                    control: function(e) {
                        var n, o = e.toggle;
                        return a.createElement(h.v, r.__assign({
                            type: h.B.Text
                        }, p, {
                            onClick: o,
                            fullWidth: !0
                        }), a.createElement(h.Q, {
                            fontSize: h.V.Size4
                        }, Object(d.c)(t.interval.start, {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        })), a.createElement(h.Q, {
                            fontSize: h.V.Size6,
                            color: h.K.Alt2
                        }, (n = t.interval, Object(d.d)("{start, time, short} – {end, time, short}", {
                            start: n.start,
                            end: n.end
                        }, "StreamSummaryNav"))))
                    }
                }, function(e) {
                    var r = e.close;
                    return a.createElement(h.q, {
                        direction: h.r.BottomCenter,
                        noTail: !0,
                        offsetY: "-2rem",
                        size: h.s.Medium,
                        show: !0
                    }, a.createElement(h._8, {
                        padding: {
                            y: .5
                        }
                    }, n.slice().reverse().map(function(e) {
                        return a.createElement(b, {
                            href: o(e),
                            isActive: t === e,
                            key: e.id,
                            onClick: r
                        }, v(e.interval))
                    }), !n.includes(t) && a.createElement(a.Fragment, null, a.createElement(h._14, {
                        height: 5
                    }), a.createElement(b, {
                        href: o(t),
                        isActive: !0,
                        onClick: r
                    }, v(t.interval)))))
                }))
            },
            b = function(e) {
                var t, n = e.href,
                    r = e.isActive,
                    o = e.children,
                    i = e.onClick;
                return t = r ? a.createElement(h._8, {
                    display: h.R.Flex
                }, a.createElement(h._8, {
                    display: h.R.Flex,
                    padding: {
                        right: 1
                    }
                }, a.createElement(h._24, {
                    asset: h._25.Check,
                    width: 10,
                    height: 10,
                    type: h._26.Alt2
                })), a.createElement(h.Q, {
                    fontSize: h.V.Size6,
                    color: h.K.Alt2
                }, o)) : a.createElement(h._8, {
                    display: h.R.Flex
                }, a.createElement(h.Q, {
                    fontSize: h.V.Size6
                }, o)), a.createElement(h._6, {
                    linkTo: n,
                    onClick: i,
                    disabled: r
                }, a.createElement(h._8, {
                    display: h.R.Flex,
                    flexDirection: h.T.Row,
                    alignItems: h.c.Center,
                    justifyContent: h._7.Between,
                    padding: {
                        y: .5,
                        x: 1
                    }
                }, t))
            };

        function v(e) {
            var t = Object(d.c)(e.start, {
                weekday: "short",
                month: "short",
                day: "numeric"
            });
            return Object(d.d)("{localizedStartDate} {start, time, short} – {end, time, short}", {
                localizedStartDate: t,
                start: e.start,
                end: e.end
            }, "StreamSummaryNav")
        }
        var y = function() {
                return function(e, t) {
                    if (this.isLast = !1, this.streamSummaries = e, this.last = this.streamSummaries[this.streamSummaries.length - 1], this.current = this.streamSummaries.find(function(e) {
                            return e.id === t
                        }), this.current && this.current) {
                        var n = this.streamSummaries.indexOf(this.current);
                        this.previous = this.streamSummaries[n - 1], this.next = this.streamSummaries[n + 1], this.isLast = this.last === this.current
                    }
                }
            }(),
            O = (n("vU5Q"), function(e) {
                var t, n = new y(e.query.streamSummaries, e.summaryID);
                if (!n.current && e.query.historicalStreamSummary) {
                    var r = e.query.historicalStreamSummary;
                    n = new y([r], e.summaryID)
                }
                if (e.query.isLoading) t = a.createElement("div", null, a.createElement(h._14, {
                    width: 200,
                    lineCount: 2
                }));
                else if (n.current) t = a.createElement(g, {
                    currentStreamSummary: n.current,
                    streamSummaries: e.query.streamSummaries,
                    getURLForStreamSummary: e.getURLForStreamSummary
                });
                else if (e.query.streamSummaries.length) {
                    var o = e.query.streamSummaries[e.query.streamSummaries.length - 1];
                    t = a.createElement(l.b, {
                        to: e.getURLForStreamSummary(o)
                    })
                } else t = a.createElement(D, null);
                return a.createElement(h._8, {
                    position: h._15.Relative
                }, a.createElement(h._8, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(m.a, {
                    previousPath: n.previous ? e.getURLForStreamSummary(n.previous) : "",
                    nextPath: n.next ? e.getURLForStreamSummary(n.next) : ""
                }, t)), e.children(n))
            }),
            D = function() {
                return a.createElement(h.Q, {
                    className: "sm-nav__placeholder-text",
                    type: h._49.H4,
                    color: h.K.Alt2,
                    ellipsis: !0
                }, Object(d.d)("Today would be a good day to start streaming!", "StreamSummaryNav"))
            },
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getURLForStreamSummary = function(e) {
                        return e ? t.props.parentPath + "/" + e.id : ""
                    }, t.handleRedirect = function(e) {
                        t.props.replace(t.getURLForStreamSummary(e))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return a.createElement(u, {
                        streamSummaryQuery: this.props.query,
                        summaryID: this.props.summaryID,
                        onRedirect: this.handleRedirect
                    }, function(t) {
                        return a.createElement(O, {
                            summaryID: e.props.summaryID,
                            query: t,
                            getURLForStreamSummary: e.getURLForStreamSummary
                        }, e.props.children)
                    })
                }, t
            }(a.Component),
            w = function(e) {
                return a.createElement(o.d, null, function(t) {
                    var n = t.match;
                    return a.createElement(o.d, {
                        path: n.url + "/:summaryID"
                    }, function(t) {
                        var o = t.match,
                            i = t.history;
                        return a.createElement(S, r.__assign({
                            summaryID: o && o.params.summaryID || "",
                            parentPath: n.url,
                            replace: i.replace
                        }, e))
                    })
                })
            };
        n.d(t, !1, function() {
            return S
        }), n.d(t, "a", function() {
            return w
        })
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
            return i
        });
        var r = n("TToO"),
            a = n("6sO2"),
            o = n("Aj/L"),
            i = function() {
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
                        var a, o, i, s;
                        return r.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, a), i = r.__assign({}, t, {
                                        body: o
                                    }), [4, this._fetch(e, i)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var a, o;
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((a = i.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return o = r.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(o)];
                                case 2:
                                    throw i.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, o;
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
                                    return a = r.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = a), [3, 4];
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
                    var i = Object(o.c)(n);
                    return i && (r.Authorization = "OAuth " + i.authToken, i.legacyCSRFToken && (r["Twitch-Api-Token"] = i.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = a.o.logger.withCategory("legacy-api"), e
            }()
    },
    "9uzc": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("HW6M"),
            o = n("GiK3"),
            i = n("F8kA"),
            s = n("Odds"),
            c = (n("KVLd"), {
                "data-test-selector": "nav-bar-navigate-back"
            }),
            u = {
                "data-test-selector": "nav-bar-navigate-forward"
            },
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(s._35, {
                        elevation: 1,
                        background: s.n.Base,
                        display: s.R.Flex,
                        flexWrap: s.U.NoWrap,
                        className: "nav-bar-layout__height"
                    }, o.createElement(d, r.__assign({}, c, {
                        to: this.props.previousPath,
                        onClick: this.props.onPrevious
                    }), "◀"), o.createElement(s._35, {
                        display: s.R.Flex,
                        flexGrow: 1,
                        flexWrap: s.U.NoWrap,
                        justifyContent: s._7.Center,
                        alignItems: s.c.Center,
                        borderRight: !0,
                        borderLeft: !0
                    }, this.props.children), o.createElement(d, r.__assign({}, u, {
                        to: this.props.nextPath,
                        onClick: this.props.onNext
                    }), "▶"))
                }, t
            }(o.Component),
            d = function(e) {
                var t = a("tw-button", "tw-button--text", {
                    "tw-button--disabled": !e.to
                });
                return o.createElement(s._2, {
                    display: s.R.Flex,
                    flexGrow: 0,
                    padding: {
                        top: 1,
                        right: 2,
                        bottom: 1,
                        left: 2
                    },
                    flexWrap: s.U.NoWrap
                }, o.createElement(i.a, r.__assign({
                    to: e.to,
                    className: t,
                    onClick: function(t) {
                        e.to || t.preventDefault(), e.onClick && e.onClick()
                    }
                }, Object(s._63)(e)), o.createElement(s.Q, {
                    fontSize: s.V.Size8
                }, e.children)))
            };
        n.d(t, !1, function() {
            return c
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return l
        })
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
            o = n("heIq"),
            i = function() {
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
                    }), this.completedAchievementsCount = this.completedAchievements.length, this.isCompleteByRole = this.getIsCompletedByRole(), this.isComplete = this.isCompleteByRole || Boolean(this.completedAt), this.isFinished = this.isCompleteByRole || Boolean(this.key === o.a && this.completedAt)
                }, e.prototype.getIsCompletedByRole = function() {
                    return this.role !== r.None && (this.role !== r.Affiliate || (this.key === o.a || this.key === o.b))
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
            c = n("PGY2"),
            u = function() {
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
                    this.topRecentlyCompleted = Object(c.d)(Array.from(this.topRecentlyCompletedMap.values()), [function(e) {
                        return e.completedAt
                    }, function(e) {
                        return e.level
                    }, function(e) {
                        return e.title
                    }], [c.a.Descending, c.a.Descending, c.a.Ascending]), this.notCompleted = Object(c.d)(this.notCompleted, [function(e) {
                        return e.progressRatio
                    }, function(e) {
                        return e.level
                    }, function(e) {
                        return e.title
                    }], [c.a.Descending, c.a.Ascending, c.a.Ascending]), this.pastCompleted = Object(c.d)(this.pastCompleted, [function(e) {
                        return e.completedAt
                    }, function(e) {
                        return e.level
                    }, function(e) {
                        return e.title
                    }], [c.a.Descending, c.a.Descending, c.a.Ascending])
                }, e
            }(),
            l = n("K/WB");
        ! function(e) {
            e[e.None = 0] = "None", e[e.Affiliate = 1] = "Affiliate", e[e.Partner = 2] = "Partner"
        }(r || (r = {}));
        n("LxVS");
        var d = n("u4Vk");
        n.d(t, "e", function() {
            return i
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return u
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
    BoWu: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return s
        });
        var r = n("6sO2"),
            a = function() {
                return Object(r.d)("Other", "DemographicsData")
            },
            o = function(e) {
                return {
                    unknown: Object(r.d)("Unknown", "DemographicsData"),
                    tv: Object(r.d)("TV", "DemographicsData"),
                    ios: Object(r.d)("iOS App", "DemographicsData"),
                    web: Object(r.d)("Web", "DemographicsData"),
                    android: Object(r.d)("Android App", "DemographicsData"),
                    mobile_web: Object(r.d)("Mobile Web", "DemographicsData"),
                    mobile_aggregated: Object(r.d)("Mobile", "DemographicsData"),
                    console: Object(r.d)("Console", "DemographicsData"),
                    other: a()
                }[e] || e
            },
            i = function(e) {
                return {
                    other: a(),
                    front_page_featured: Object(r.d)("Featured Section - Front Page", "DemographicsData"),
                    creative_page_featured: Object(r.d)("Featured Section - Creative Page", "DemographicsData"),
                    hosted: Object(r.d)("Hosts", "DemographicsData"),
                    email_live_notification: Object(r.d)("Notifications - Email", "DemographicsData"),
                    onsite_notification: Object(r.d)("Notifications - Onsite", "DemographicsData"),
                    followed_channel: Object(r.d)("Followers", "DemographicsData"),
                    directory_browse: Object(r.d)("Browse Page", "DemographicsData"),
                    search: Object(r.d)("Searches", "DemographicsData"),
                    clips_live: Object(r.d)("Clips", "DemographicsData"),
                    friend_presence: Object(r.d)("Friends", "DemographicsData"),
                    top_nav_bar: Object(r.d)("Your Channel Page", "DemographicsData"),
                    recommended_channel: Object(r.d)("Recommendations", "DemographicsData"),
                    other_channel_page: Object(r.d)("Other Channel Page", "DemographicsData")
                }[e] || Object(r.d)("{name}'s Channel Page", {
                    name: e
                }, "DemographicsData")
            },
            s = function(e) {
                var t;
                return ((t = {
                    facebook: Object(r.d)("Facebook", "DemographicsData"),
                    google: Object(r.d)("Google", "DemographicsData"),
                    reddit: Object(r.d)("Reddit", "DemographicsData"),
                    youtube: Object(r.d)("Youtube", "DemographicsData")
                })["t.co"] = Object(r.d)("Twitter", "DemographicsData"), t.unknown = Object(r.d)("Direct", "DemographicsData"), t.twitch_aggregate = Object(r.d)("Twitch", "DemographicsData"), t.external_aggregate = Object(r.d)("External", "DemographicsData"), t)[e] || e
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
    Cd7A: function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            a = n("6sO2"),
            o = n("yLtb"),
            i = n("BoWu"),
            s = n("xygp"),
            c = n("vTHh"),
            u = n("Odds"),
            l = (n("/ute"), function(e) {
                return e
            }),
            d = function(e) {
                var t = e.streamSummaries,
                    n = e.isLoading,
                    c = Object(s.a)(t.map(function(e) {
                        return e.videoPlayPlatforms
                    })),
                    d = Object(s.a)(t.map(function(e) {
                        return e.videoPlayGeographics
                    })),
                    f = Object(s.a)(t.map(function(e) {
                        return e.videoPlayInternalChannelsReferrers
                    })),
                    h = Object(s.a)(t.map(function(e) {
                        return e.videoPlayInternalTwitchReferrers
                    })),
                    p = Object(s.a)(t.map(function(e) {
                        return e.videoPlayExternalReferrers
                    }));
                return r.createElement(u._8, {
                    className: "referral-detail-panels",
                    display: u.R.Flex,
                    flexDirection: u.T.Column,
                    flexWrap: u.U.NoWrap,
                    alignItems: u.c.Stretch,
                    breakpointMedium: {
                        flexDirection: u.T.Row
                    },
                    margin: {
                        top: 3
                    }
                }, r.createElement(u._8, {
                    className: "referral-detail-panels__col",
                    display: u.R.Flex,
                    flexWrap: u.U.NoWrap,
                    flexDirection: u.T.Column,
                    padding: {
                        left: 1,
                        right: 1
                    }
                }, r.createElement(m, {
                    isLoading: n,
                    referrals: d.items.slice(0, 15),
                    totals: d.totals,
                    translationFunc: o.b,
                    title: Object(a.d)("Views by Location", "ChannelAnalyticsReferralPage")
                }), r.createElement(m, {
                    isLoading: n,
                    referrals: c.items.slice(0, 15),
                    totals: c.totals,
                    translationFunc: i.c,
                    title: Object(a.d)("Views by Platform", "ChannelAnalyticsReferralPage")
                })), r.createElement(u._8, {
                    className: "referral-detail-panels__col",
                    display: u.R.Flex,
                    flexWrap: u.U.NoWrap,
                    flexDirection: u.T.Column,
                    padding: {
                        left: 1,
                        right: 1
                    }
                }, r.createElement(m, {
                    isLoading: n,
                    referrals: h.items.slice(0, 15),
                    totals: h.totals,
                    translationFunc: i.b,
                    title: Object(a.d)("Views from Twitch", "ChannelAnalyticsReferralPage")
                }), r.createElement(m, {
                    isLoading: n,
                    referrals: f.items.slice(0, 15),
                    totals: f.totals,
                    translationFunc: l,
                    title: Object(a.d)("Views from Channels", "ChannelAnalyticsReferralPage")
                }), r.createElement(m, {
                    isLoading: n,
                    referrals: p.items.slice(0, 15),
                    totals: p.totals,
                    translationFunc: i.a,
                    title: Object(a.d)("Views from Outside Twitch", "ChannelAnalyticsReferralPage")
                })))
            };

        function m(e) {
            var t = e.isLoading,
                n = e.referrals,
                a = e.totals,
                o = e.translationFunc,
                i = e.title;
            return t ? r.createElement(u._8, {
                margin: {
                    bottom: 2
                }
            }, r.createElement(u._14, {
                height: 350
            })) : r.createElement(u._35, {
                padding: {
                    bottom: 1
                },
                margin: {
                    bottom: 2
                },
                elevation: 1,
                background: u.n.Base
            }, r.createElement(c.a, {
                referrals: n,
                totals: a,
                translationFunc: o,
                title: i
            }))
        }
        n.d(t, "a", function() {
            return d
        })
    },
    D6ie: function(e, t, n) {
        var r = n("xA5w"),
            a = n("3znZ"),
            o = n("iRXW"),
            i = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = a(t).getTime() - o(t).getTime();
            return Math.round(n / i) + 1
        }
    },
    DOXR: function(e, t) {},
    EkQQ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("3zLD"),
            a = n("RH2O"),
            o = n("2KeS"),
            i = n("7vx8"),
            s = n("+xm8"),
            c = n("f2i/"),
            u = n("7enT"),
            l = n("Aj/L"),
            d = n("QwuA"),
            m = n("TToO"),
            f = n("GiK3"),
            h = n("CIox"),
            p = n("F8kA"),
            g = n("6sO2"),
            b = n("bZTi"),
            v = n("yWCw"),
            y = n("68hr"),
            O = n("Ejve"),
            D = n("TP6L"),
            S = n("H+d0"),
            w = n("7qqA"),
            x = n("zCIC"),
            _ = n("06ME"),
            j = n("q7Ag"),
            N = n("ytWG"),
            M = n("pD3p"),
            E = n("Odds"),
            T = "extensions_dashboard_notification_dismissed",
            A = function(e) {
                var t = e.channelName,
                    n = Object(g.d)("Extensions", "DashboardNav"),
                    r = Object(j.b)(t);
                return f.createElement(h.c, {
                    path: "/:channelName/dashboard/extensions"
                }, function(e) {
                    return function(e) {
                        if (e) return g.l.set(T, !0), !1;
                        return !g.l.get(T, !1)
                    }(e.match) ? f.createElement(E._2, {
                        position: E._15.Relative
                    }, f.createElement("li", {
                        className: "side-nav-dashboard-section__tooltip__wrapper"
                    }, f.createElement(M.a, {
                        linkTo: r
                    }, n, f.createElement(N.a, {
                        "data-test-selector": "extensions-nav-hotspot"
                    })), f.createElement("div", {
                        className: "side-nav-dashboard-section__tooltip",
                        "data-test-selector": "extensions-nav-tooltip"
                    }, f.createElement(E.q, {
                        direction: E.r.RightCenter,
                        size: E.s.Large,
                        show: !0
                    }, f.createElement(E._8, {
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }, f.createElement(E.Q, {
                        type: E._49.Span
                    }, f.createElement(N.a, null), Object(g.d)("Customize your stream with extensions! ", "DashboardNav"), f.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                    }, Object(g.d)("Learn more here.", "DashboardNav")))))))) : f.createElement("li", null, f.createElement(M.a, {
                        linkTo: r
                    }, n))
                })
            };
        var k, C = n("zDNk"),
            I = (n("uwYd"), {
                "data-test-selector": "activity-link-selector"
            }),
            R = {
                "data-test-selector": "bounties-link-selector"
            },
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(f.Fragment, null, f.createElement(C.a, null, Object(g.d)("Dashboard", "DashboardNav")), f.createElement("ul", null, f.createElement("li", null, f.createElement(M.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard",
                        external: !0,
                        exact: !0
                    }, Object(g.d)("Live", "DashboardNav"))), f.createElement(A, {
                        channelName: this.props.channelName
                    }), f.createElement("li", null, f.createElement(M.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard/achievements"
                    }, Object(g.d)("Achievements", "DashboardNav"))), f.createElement("li", null, f.createElement(M.a, {
                        linkTo: "/" + this.props.channelName + "/dashboard/events"
                    }, Object(g.d)("Events", "DashboardNav"))), this.canAccessActivity && f.createElement("li", null, f.createElement(M.a, m.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/activity",
                        external: !0
                    }, I), Object(g.d)("Activity", "DashboardNav"))), this.canAccessBounties && f.createElement("li", null, f.createElement(M.a, m.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/bounties"
                    }, R), Object(g.d)("Bounty Board", "DashboardNav")))))
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
            }(f.Component),
            F = n("YDbY"),
            L = {
                "data-test-selector": "revenue-settings-link-selector"
            },
            Y = {
                "data-test-selector": "settings-link-selector"
            },
            G = {
                "data-test-selector": "moderation-link-selector"
            },
            B = {
                "data-test-selector": "permissions-link-selector"
            },
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return this.canSeeSettingsSection ? f.createElement(f.Fragment, null, f.createElement(C.a, null, Object(g.d)("Settings", "SettingsDashboardNav")), f.createElement("ul", null, this.canAccessSettings && f.createElement("li", null, f.createElement(M.a, m.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/settings",
                        exact: !0,
                        external: !this.useNewRevenueSettings
                    }, Y), Object(g.d)("Channel", "SettingsDashboardNav"))), this.props.permissions.isOwner && f.createElement("li", null, f.createElement(M.a, m.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/permissions",
                        external: !0
                    }, B), Object(g.d)("Permissions", "DashboardNav"))), this.canSeeAutoModSettings && f.createElement(E._2, {
                        position: E._15.Relative
                    }, f.createElement("li", {
                        className: "side-nav-dashboard-section__tooltip__wrapper"
                    }, f.createElement(M.a, m.__assign({
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/automod",
                        external: !Object(F.a)()
                    }, G), Object(g.d)("Moderation", "SettingsDashboardNav"), f.createElement(N.a, null)), f.createElement("div", {
                        className: "side-nav-dashboard-section__tooltip"
                    }, f.createElement(E.q, {
                        direction: E.r.RightCenter,
                        size: E.s.Large,
                        show: !0
                    }, f.createElement(E._8, {
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }, f.createElement(E.Q, {
                        type: E._49.Span
                    }, f.createElement(N.a, null), Object(g.d)("Streamers and mods can set custom AutoMod levels, and update Blocked and Permitted Terms.", "AutoModSettings"))))))), this.canAccessRevenueSettings && f.createElement("li", null, f.createElement(M.a, m.__assign({
                        linkTo: this.revenueSettingsLink,
                        external: !this.useNewRevenueSettings
                    }, L), this.revenueSettingsLabel)))) : null
                }, Object.defineProperty(t.prototype, "canSeeSettingsSection", {
                    get: function() {
                        return this.canAccessSettings || this.canAccessRevenueSettings || this.canSeeAutoModSettings
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canSeeAutoModSettings", {
                    get: function() {
                        return Object(F.a)() && (this.props.permissions.isOwner || this.props.permissions.isModerator || this.props.permissions.isStaff || this.props.permissions.isSiteAdmin)
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
                        return "on" === g.b.get("dashboard_settings_launch", "off")
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
                        return this.useNewRevenueSettings ? this.props.permissions.hasExtensionsDeveloperInvite ? Object(g.d)("Extensions Developer", "SettingsDashboardNav") : Object(g.d)("Affiliate / Partner", "SettingsDashboardNav") : Object(g.d)("Revenue", "SettingsDashboardNav")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(f.Component),
            H = n("NY9D"),
            z = n("L2R7");
        ! function(e) {
            e[e.CollectionManagerLink = 0] = "CollectionManagerLink"
        }(k || (k = {}));
        var U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(f.Fragment, null, f.createElement(C.a, null, Object(g.d)("Videos", "DashboardNav")), f.createElement("ul", null, f.createElement("li", null, f.createElement(M.a, {
                        linkTo: Object(H.d)(this.props.creatorLogin),
                        exact: !0
                    }, Object(g.d)("Video Producer", "DashboardNav"))), f.createElement("li", null, f.createElement(M.a, {
                        linkTo: "/" + this.props.creatorLogin + "/dashboard/moderation"
                    }, Object(g.d)("Video Moderation", "DashboardNav"))), f.createElement("li", null, f.createElement(M.a, {
                        "data-test-selector": k.CollectionManagerLink,
                        external: !Object(z.a)(),
                        linkTo: "/" + this.props.creatorLogin + "/manager/collections"
                    }, Object(g.d)("Collections", "DashboardNav"))), f.createElement("li", null, f.createElement(M.a, {
                        linkTo: "/" + this.props.creatorLogin + "/manager/clips"
                    }, Object(g.d)("Clips", "DashboardNav")))))
                }, t
            }(f.Component),
            V = n("CC3/"),
            K = {
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
            Q = (n("9DtG"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = this.getPermissions();
                    return f.createElement(E._35, {
                        className: "dashboard-side-nav",
                        background: E.n.Alt2,
                        borderRight: !0,
                        flexShrink: 0,
                        flexGrow: 0,
                        fullHeight: !0,
                        position: E._15.Relative
                    }, f.createElement(x.b, null, f.createElement("nav", null, f.createElement(P, {
                        channelName: this.props.channelName,
                        permissions: e,
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }), f.createElement(_.b, {
                        channelName: this.props.channelName,
                        permissions: e,
                        streamSummaryQuery: this.props.streamSummaryQuery
                    }), f.createElement(U, {
                        creatorLogin: this.props.channelName,
                        permissions: e
                    }), f.createElement(W, {
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
                    } : K
                }, t
            }(f.Component)),
            q = Object(i.a)(V, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelName
                        }
                    }
                }
            })(Q),
            Z = n("j7/Y"),
            J = n("w9tK"),
            X = n("vH/s"),
            $ = n("CSlQ"),
            ee = n("pK/l"),
            te = n("Cd7A"),
            ne = n("9Yaz"),
            re = (n("e/z2"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(ee.a, null, f.createElement(E._35, {
                        elevation: 1,
                        background: E.n.Base,
                        display: E.R.Flex,
                        position: E._15.Relative,
                        flexDirection: E.T.Row,
                        flexWrap: E.U.NoWrap,
                        className: "referrals-page-nav-bar",
                        borderBottom: !0
                    }, f.createElement(E._35, {
                        position: E._15.Absolute,
                        display: E.R.Flex,
                        flexDirection: E.T.Row,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, f.createElement(E.v, {
                        type: E.B.Text,
                        linkTo: {
                            pathname: "/" + this.props.channelName + "/dashboard/stream-summary",
                            state: {
                                content: X.PageviewContent.ReferralsBack,
                                medium: X.PageviewMedium.StreamSummary
                            }
                        }
                    }, f.createElement(E._8, {
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, f.createElement(E.Q, null, Object(g.d)("Back", "StreamSummaryReferralPage"))))), f.createElement(E._35, {
                        display: E.R.Flex,
                        flexGrow: 1,
                        flexWrap: E.U.NoWrap,
                        justifyContent: E._7.Center,
                        alignItems: E.c.Center
                    }, f.createElement(E.Q, {
                        type: E._49.H2,
                        fontSize: E.V.Size4,
                        bold: !0
                    }, Object(g.d)("Views by Source", "StreamSummaryReferralPage")))), f.createElement(ne.a, {
                        query: this.props.streamSummaryQuery
                    }, function(e) {
                        return f.createElement(te.a, {
                            isLoading: !e.current,
                            streamSummaries: e.current ? [e.current] : []
                        })
                    }))
                }, t
            }(f.Component)),
            ae = Object(o.d)(Object($.d)("StreamSummaryReferralsPage", {
                destination: J.a.ChannelDashboardStreamSummaryReferrals,
                autoReportInteractive: !0
            }), Object(Z.a)({
                location: X.PageviewLocation.DashboardStreamSummaryReferrals
            }))(re),
            oe = n("u4Vk"),
            ie = b.a.wrap(function() {
                return n.e(106).then(n.bind(null, "rE/F"))
            }, "AchievementsPage"),
            se = b.a.wrap(function() {
                return n.e(109).then(n.bind(null, "RdZX"))
            }, "AutoModPage"),
            ce = b.a.wrap(function() {
                return n.e(107).then(n.bind(null, "EOq4"))
            }, "BountiesPage"),
            ue = b.a.wrap(function() {
                return n.e(89).then(n.bind(null, "ehuU"))
            }, "ChannelAnalyticsPageRoot"),
            le = b.a.wrap(function() {
                return n.e(87).then(n.bind(null, "aeDV"))
            }, "ChannelClipsManagerPage"),
            de = b.a.wrap(function() {
                return n.e(92).then(n.bind(null, "KO2S"))
            }, "CollectionEditorPage"),
            me = b.a.wrap(function() {
                return n.e(105).then(n.bind(null, "Dk8+"))
            }, "CollectionManagerPage"),
            fe = b.a.wrap(function() {
                return n.e(99).then(n.bind(null, "rFlM"))
            }, "CommentModeratorPage"),
            he = b.a.wrap(function() {
                return n.e(93).then(n.bind(null, "xM3a"))
            }, "DashboardEventsRoot"),
            pe = b.a.wrap(function() {
                return n.e(98).then(n.bind(null, "yuX3"))
            }, "DashboardRevenueSettingsRoot"),
            ge = b.a.wrap(function() {
                return n.e(95).then(n.bind(null, "gIJZ"))
            }, "DashboardSettingsRoot"),
            be = b.a.wrap(function() {
                return n.e(119).then(n.bind(null, "bcqU"))
            }, "ExtensionConfigurePage"),
            ve = b.a.wrap(function() {
                return n.e(108).then(n.bind(null, "yJuJ"))
            }, "ExtensionManagerPage"),
            ye = b.a.wrap(function() {
                return n.e(101).then(n.bind(null, "Il1C"))
            }, "HighlighterPage"),
            Oe = b.a.wrap(function() {
                return n.e(88).then(n.bind(null, "c1gU"))
            }, "LivePage"),
            De = b.a.wrap(function() {
                return n.e(87).then(n.bind(null, "aeDV"))
            }, "MyClipsManagerPage"),
            Se = b.a.wrap(function() {
                return n.e(100).then(n.bind(null, "/fDj"))
            }, "RedirectToLatestArchiveHighlighter"),
            we = b.a.wrap(function() {
                return n.e(90).then(n.bind(null, "tVPZ"))
            }, "StreamSummaryPage"),
            xe = b.a.wrap(function() {
                return n.e(91).then(n.bind(null, "a9Y8"))
            }, "VideoManagerPage"),
            _e = function(e) {
                var t = e.match.params.pageName,
                    n = t ? "/" + encodeURIComponent(t) : "";
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.channelName) + "/dashboard" + n), null
            },
            je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isError: !1
                    }, t.logger = g.o.logger.withCategory("dashboard-root"), t.renderAchievementsPage = function() {
                        return f.createElement(ie, {
                            channelName: t.props.match.params.channelName
                        })
                    }, t.renderExtensionsManagerPage = function() {
                        return f.createElement(ve, {
                            channelName: t.props.match.params.channelName
                        })
                    }, t.renderLivePage = function(e) {
                        return t.props.data.channel && t.props.data.channel.id ? f.createElement(Oe, {
                            channelID: t.props.data.channel.id,
                            channelName: t.props.match.params.channelName,
                            streamSummariesQuery: e
                        }) : null
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
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
                    if (this.state.isError || this.props.data.error) return f.createElement(v.a, {
                        message: Object(g.d)("An error occurred on this page", "DashboardRoot")
                    });
                    if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), f.createElement(v.a, {
                        message: Object(g.d)("You must be logged in to view this page", "DashboardRoot")
                    });
                    if ("broadcast" === this.props.match.params.channelName) {
                        var t = this.props.match.params.pageName,
                            n = this.props.userLogin;
                        return f.createElement(h.b, {
                            to: "/" + n + "/dashboard/" + t
                        })
                    }
                    return this.props.data.loading || this.props.data.channel.id ? f.createElement(w.a, {
                        interval: Object(oe.g)(30),
                        channelName: this.props.match.params.channelName
                    }, function(t) {
                        return f.createElement(E._8, {
                            display: E.R.Flex,
                            flexDirection: E.T.Column,
                            flexWrap: E.U.NoWrap,
                            fullHeight: !0
                        }, f.createElement(D.a, null), e.props.firstPageLoaded && e.props.isLoggedIn && f.createElement(S.a, null), f.createElement(E._8, {
                            display: E.R.Flex,
                            flexWrap: E.U.NoWrap,
                            position: E._15.Relative,
                            overflow: E._11.Hidden,
                            fullHeight: !0
                        }, f.createElement(q, {
                            channelName: e.props.match.params.channelName,
                            streamSummaryQuery: t
                        }), f.createElement(E._8, {
                            position: E._15.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, f.createElement(p.e, null, f.createElement(h.c, {
                            path: "/:channelName/dashboard/achievements",
                            render: e.renderAchievementsPage
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/channel-analytics",
                            component: ue
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/moderation",
                            component: fe
                        }), g.a.buildType !== O.a.Production && f.createElement(h.c, {
                            path: "/:channelName/dashboard/live",
                            render: function() {
                                return e.renderLivePage(t)
                            }
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/stream-summary/referrals",
                            render: function() {
                                return f.createElement(ae, {
                                    channelName: e.props.match.params.channelName,
                                    streamSummaryQuery: t
                                })
                            }
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/stream-summary",
                            render: function() {
                                return f.createElement(we, {
                                    channelName: e.props.match.params.channelName,
                                    streamSummaryQuery: t
                                })
                            }
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/extensions/:extensionID/configure",
                            component: be
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/extensions",
                            render: e.renderExtensionsManagerPage
                        }), e.props.isStaff && f.createElement(h.c, {
                            path: "/:channelName/dashboard/bounties/:selectedID",
                            component: ce
                        }), e.props.isStaff && f.createElement(h.c, {
                            path: "/:channelName/dashboard/bounties",
                            component: ce
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/bounties/:selectedID",
                            component: y.a
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/bounties",
                            component: y.a
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/events",
                            component: he
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/settings/automod",
                            component: se
                        }), e.showNewDashboardSettings && f.createElement(h.c, {
                            path: "/:channelName/dashboard/settings/revenue",
                            component: pe
                        }), e.showNewDashboardSettings && f.createElement(h.c, {
                            path: "/:channelName/dashboard/settings",
                            component: ge
                        }), f.createElement(h.c, {
                            path: "/:channelName/dashboard/:pageName?",
                            render: _e
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/schedule/:videoID",
                            component: xe
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/edit/:videoID",
                            component: xe
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/publish/:videoID",
                            component: xe
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/appeal/:videoID",
                            component: xe
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/clips/channel",
                            component: le
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/clips",
                            component: De
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/highlighter/:videoID",
                            component: ye
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager/highlighter",
                            component: Se
                        }), f.createElement(h.c, {
                            path: "/:creatorLogin/manager/collections/:collectionID",
                            component: de
                        }), f.createElement(h.c, {
                            path: "/:creatorLogin/manager/collections",
                            component: me
                        }), f.createElement(h.c, {
                            path: "/:channelName/manager",
                            component: xe
                        })))))
                    }) : f.createElement(y.a, null)
                }, Object.defineProperty(t.prototype, "showNewDashboardSettings", {
                    get: function() {
                        return "on" === g.b.get("dashboard_settings_launch", "off")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(f.Component);
        var Ne = Object(r.compose)(Object(i.a)(d, {
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
            return Object(o.b)({
                onAnonymousVisit: function() {
                    return Object(c.f)(s.a.DashboardPage)
                },
                collapseSideNav: u.r,
                expandSideNav: u.y
            }, e)
        }))(je);
        n.d(t, "DashboardRoot", function() {
            return Ne
        })
    },
    "Eoz/": function(e, t, n) {
        var r = n("ymQ7"),
            a = n("D6ie"),
            o = n("zZbG"),
            i = n("xA5w"),
            s = n("dH3X"),
            c = n("uyaC");
        var u = {
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
                return String(o(e)).substr(2)
            },
            GGGG: function(e) {
                return o(e)
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
                return d(u.h(e), 2)
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
                o = c.format.formatters,
                l = c.format.formattingTokensRegExp;
            a && a.format && a.format.formatters && (o = a.format.formatters, a.format.formattingTokensRegExp && (l = a.format.formattingTokensRegExp));
            var d = i(e);
            return s(d) ? function(e, t, n) {
                var r, a, o, i = e.match(n),
                    s = i.length;
                for (r = 0; r < s; r++) a = t[i[r]] || u[i[r]], i[r] = a || ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, "") : o.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", n = 0; n < s; n++) i[n] instanceof Function ? t += i[n](e, u) : t += i[n];
                    return t
                }
            }(r, o, l)(d) : "Invalid Date"
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
            o = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                i = r(t),
                s = o(n, i),
                c = Math.abs(a(n, i));
            return n.setMonth(n.getMonth() - s * c), s * (c - (o(n, i) === -s))
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
                o = a.getDay(),
                i = 6 + (o < n ? -7 : 0) - (o - n);
            return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a
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
                o = a(t);
            return 4 * (n.getFullYear() - o.getFullYear()) + (r(n) - r(o))
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
            var o = a(n);
            return o.setMilliseconds(o.getMilliseconds() - 1), o
        }
    },
    KVLd: function(e, t) {},
    L2R7: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = r.a.buildType === a.a.Dev,
                t = r.b.get(o, !1);
            return e || t
        };
        var r = n("6sO2"),
            a = n("Ejve"),
            o = "twilight_collections_manager_enabled"
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
                o = r(t),
                i = void 0 !== n ? n : 1,
                s = o.getTime();
            if (a.getTime() > s) throw new Error("The first date cannot be after the second date");
            var c = [],
                u = a;
            for (u.setHours(0, 0, 0, 0); u.getTime() <= s;) c.push(r(u)), u.setDate(u.getDate() + i);
            return c
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
                o = new Date(0);
            return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
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

        function o(e) {
            return "/" + e.channelName + "/dashboard/achievements/" + e.id
        }
        n.d(r, "channelAchievements", function() {
            return a
        }), n.d(r, "achievement", function() {
            return o
        });
        var i, s = n("6w0d"),
            c = n("yiqh"),
            u = n("b9IH");

        function l(e, t, n) {
            return e.sort(function(e, r) {
                for (var a = 0; a < t.length; a++) {
                    var o = t[a],
                        s = n[a] || i.Ascending,
                        c = d(o(e), o(r)) * s;
                    if (0 !== c) return c
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
        }(i || (i = {})), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return s.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return c.a
        }), n.d(t, !1, function() {
            return u.a
        }), n.d(t, "a", function() {
            return i
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
            o = 6048e5;
        e.exports = function(e, t, n) {
            var i = r(e, n),
                s = r(t, n),
                c = i.getTime() - i.getTimezoneOffset() * a,
                u = s.getTime() - s.getTimezoneOffset() * a;
            return Math.round((c - u) / o)
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
            var o = n && Number(n.weekStartsOn) || 0,
                i = r(e),
                s = Number(t),
                c = i.getDay();
            return a(i, ((s % 7 + 7) % 7 < o ? 7 : 0) + s - c)
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
            var n, a, o = r(e).getTime();
            return t.forEach(function(e) {
                var t = r(e),
                    i = Math.abs(o - t.getTime());
                (void 0 === n || i < a) && (n = t, a = i)
            }), n
        }
    },
    "Uu+E": function(e, t, n) {
        var r = n("xA5w"),
            a = n("iRXW"),
            o = n("nizW");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                s = o(n, a(n)),
                c = new Date(0);
            return c.setFullYear(i, 0, 4), c.setHours(0, 0, 0, 0), (n = a(c)).setDate(n.getDate() + s), n
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
            o = n("AZvW");
        e.exports = function(e, t) {
            var n = r(e),
                i = Number(t),
                s = o(n);
            return a(n, i - s)
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
                i = t.getBoundingClientRect();
            n.bottom > i.bottom && o(e, a);
            n.top < i.top && o(e, r)
        };
        var r = !0,
            a = !1;

        function o(e, t) {
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
                o = Number(t),
                i = n.getFullYear(),
                s = n.getDate(),
                c = new Date(0);
            c.setFullYear(i, o, 15), c.setHours(0, 0, 0, 0);
            var u = a(c);
            return n.setMonth(o, Math.min(s, u)), n
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
    "e/z2": function(e, t) {},
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
            o = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = r(a(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / o)
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
            o = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                i = r(t),
                s = o(n, i),
                c = Math.abs(a(n, i));
            return n.setDate(n.getDate() - s * c), s * (c - (o(n, i) === -s))
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
    gWfK: function(e, t) {},
    hUHO: function(e, t, n) {
        var r = n("4LxA");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    heIq: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return i
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
            o = "it_begins",
            i = "path_to_affiliate",
            s = "path_to_partner"
    },
    hico: function(e, t, n) {
        var r = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var o = a(n);
            return o.setDate(o.getDate() - 1), o
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
                o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                i = ["AM", "PM"],
                s = ["am", "pm"],
                c = ["a.m.", "p.m."],
                u = {
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
                        return e.getHours() / 12 >= 1 ? i[1] : i[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? c[1] : c[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                u[e + "o"] = function(t, n) {
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
                formatters: u,
                formattingTokensRegExp: r(u)
            }
        }
    },
    jy2q: function(e, t, n) {
        var r = n("xA5w"),
            a = n("balU");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return a(n, n.getMonth() + 3 * o)
        }
    },
    kDuD: function(e, t, n) {
        var r = n("xA5w"),
            a = n("MIQa"),
            o = n("xKy+");
        e.exports = function(e) {
            var t = r(e);
            return a(t).getTime() === o(t).getTime()
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
            o = n("25hp"),
            i = n("GI7G"),
            s = n("uyaC"),
            c = 1440,
            u = 2520,
            l = 43200,
            d = 86400;
        e.exports = function(e, t, n) {
            var m = n || {},
                f = r(e, t),
                h = m.locale,
                p = s.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (p = h.distanceInWords.localize);
            var g, b, v = {
                addSuffix: Boolean(m.addSuffix),
                comparison: f
            };
            f > 0 ? (g = a(e), b = a(t)) : (g = a(t), b = a(e));
            var y, O = o(b, g),
                D = b.getTimezoneOffset() - g.getTimezoneOffset(),
                S = Math.round(O / 60) - D;
            if (S < 2) return m.includeSeconds ? O < 5 ? p("lessThanXSeconds", 5, v) : O < 10 ? p("lessThanXSeconds", 10, v) : O < 20 ? p("lessThanXSeconds", 20, v) : O < 40 ? p("halfAMinute", null, v) : p(O < 60 ? "lessThanXMinutes" : "xMinutes", 1, v) : 0 === S ? p("lessThanXMinutes", 1, v) : p("xMinutes", S, v);
            if (S < 45) return p("xMinutes", S, v);
            if (S < 90) return p("aboutXHours", 1, v);
            if (S < c) return p("aboutXHours", Math.round(S / 60), v);
            if (S < u) return p("xDays", 1, v);
            if (S < l) return p("xDays", Math.round(S / c), v);
            if (S < d) return p("aboutXMonths", y = Math.round(S / l), v);
            if ((y = i(b, g)) < 12) return p("xMonths", Math.round(S / l), v);
            var w = y % 12,
                x = Math.floor(y / 12);
            return w < 3 ? p("aboutXYears", x, v) : w < 9 ? p("overXYears", x, v) : p("almostXYears", x + 1, v)
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
            o = 864e5;
        e.exports = function(e, t) {
            var n = r(e),
                i = r(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                c = i.getTime() - i.getTimezoneOffset() * a;
            return Math.round((s - c) / o)
        }
    },
    nk30: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                a = r(e),
                o = a.getDay(),
                i = 6 + (o < n ? -7 : 0) - (o - n);
            return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + i), a
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
            o = n("+Hq5"),
            i = n("GiK3"),
            s = n("CIox"),
            c = n("F8kA"),
            u = n("Odds"),
            l = (n("lqN2"), function(e) {
                if (e.external) {
                    var t = "string" == typeof e.linkTo ? e.linkTo : Object(o.b)(e.linkTo);
                    return i.createElement(s.c, {
                        path: t,
                        exact: e.exact
                    }, function(n) {
                        var o, s = n.match;
                        return i.createElement(u._2, {
                            padding: {
                                x: 2,
                                y: .5
                            },
                            display: u.R.Block
                        }, i.createElement("a", r.__assign({
                            className: a("dashboard-side-nav__link", (o = {}, o["dashboard-side-nav__link--active"] = Boolean(s), o)),
                            href: t
                        }, Object(u._63)(e)), e.children))
                    })
                }
                return i.createElement(u._2, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    display: u.R.Block
                }, i.createElement(c.b, r.__assign({
                    to: e.linkTo,
                    className: "dashboard-side-nav__link",
                    activeClassName: "dashboard-side-nav__link--active",
                    exact: e.exact
                }, Object(u._63)(e)), e.children))
            });
        n.d(t, "a", function() {
            return l
        })
    },
    "pK/l": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            o = n("zCIC"),
            i = n("Odds"),
            s = (n("DOXR"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o.b, null, a.createElement(i._8, {
                        padding: 4,
                        className: "dashboard-centered-page"
                    }, this.props.children))
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return s
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
            o = n("NKE6"),
            i = n("MKc+");
        e.exports = function(e, t) {
            var n = r(e),
                s = r(t),
                c = o(n, s),
                u = Math.abs(a(n, s));
            return n = i(n, c * u), c * (u - (o(n, s) === -c))
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
            o = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                i = r(t),
                s = o(n, i),
                c = Math.abs(a(n, i));
            return n.setFullYear(n.getFullYear() - s * c), s * (c - (o(n, i) === -s))
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
            o = n("25hp"),
            i = n("uyaC"),
            s = 1440,
            c = 43200,
            u = 525600;
        e.exports = function(e, t, n) {
            var l = n || {},
                d = r(e, t),
                m = l.locale,
                f = i.distanceInWords.localize;
            m && m.distanceInWords && m.distanceInWords.localize && (f = m.distanceInWords.localize);
            var h, p, g, b = {
                addSuffix: Boolean(l.addSuffix),
                comparison: d
            };
            d > 0 ? (h = a(e), p = a(t)) : (h = a(t), p = a(e));
            var v = Math[l.partialMethod ? String(l.partialMethod) : "floor"],
                y = o(p, h),
                O = p.getTimezoneOffset() - h.getTimezoneOffset(),
                D = v(y / 60) - O;
            if ("s" === (g = l.unit ? String(l.unit) : D < 1 ? "s" : D < 60 ? "m" : D < s ? "h" : D < c ? "d" : D < u ? "M" : "Y")) return f("xSeconds", y, b);
            if ("m" === g) return f("xMinutes", D, b);
            if ("h" === g) return f("xHours", v(D / 60), b);
            if ("d" === g) return f("xDays", v(D / s), b);
            if ("M" === g) return f("xMonths", v(D / c), b);
            if ("Y" === g) return f("xYears", v(D / u), b);
            throw new Error("Unknown unit: " + g)
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
                o = a.getDay(),
                i = (o < n ? 7 : 0) + o - n;
            return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a
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
                var r = c.fromPayload(e, t);
                r.isCompleted && n.push(r)
            }), n
        }, n.d(t, "a", function() {
            return c
        });
        var r = n("wuJz"),
            a = (n.n(r), n("u4Vk")),
            o = n("xygp");
        var i = ["google", "youtube", "facebook", "t.co", "reddit"];

        function s(e) {
            return i.find(function(t) {
                return e.indexOf(t) >= 0
            }) || e
        }
        var c = function() {
            function e(e) {
                this.interval = {
                    start: e.start,
                    end: e.end
                }, this.now = new Date, this.id = e.start.getTime() + "-" + e.end.getTime(), this.isCompleted = this.getIsCompleted(), this.channel = e.channel, this.avgViewerCount = e.avgViewerCount, this.maxViewerCount = e.maxViewerCount, this.followersChange = e.followersChange, this.totalViewers = e.totalViewers, this.uniqueViewers = e.uniqueViewers, this.totalMinutesWatched = e.totalMinutesWatched, this.uniqueChatters = e.uniqueChatters, this.incomingRaids = e.incomingRaids, this.peakViewershipTime = e.peakViewershipTime, this.startChannelStatus = e.startChannelStatus, this.messagesTotal = e.messagesTotal, this.videoThumbnail = e.videoThumbnail, this.clipCreatesTotal = e.clipCreatesTotal, this.clipPlaysTotal = e.clipPlaysTotal, this.clipPlaysBreakdown = e.clipPlaysBreakdown, this.commercialCount = e.commercialCount, this.commercialDensity = e.commercialDensity, this.commercialLengthTotal = e.commercialLengthTotal, this.subscriptionsNew = e.subscriptionsNew, this.videoPlayExternalReferrers = e.videoPlayExternalReferrers, this.videoPlayInternalChannelsReferrers = e.videoPlayInternalChannelsReferrers, this.videoPlayInternalTwitchReferrers = e.videoPlayInternalTwitchReferrers, this.videoPlayAllReferrers = e.videoPlayAllReferrers, this.videoPlayGeographics = e.videoPlayGeographics, this.videoPlayPlatforms = e.videoPlayPlatforms
            }
            return e.fromPayload = function(t, n) {
                var r = t.videos[0],
                    a = r && r.thumbnails && r.thumbnails.small && r.thumbnails.small.length && r.thumbnails.small[0].url || "",
                    i = r && r.title || "",
                    c = {
                        twitch: 0,
                        reddit: 0,
                        facebook: 0,
                        twitter: 0,
                        other: 0
                    };
                (t.stats.clip_plays_breakdown || []).forEach(function(e) {
                    return c[e.key] = Number(e.value)
                });
                var u = t.summary,
                    l = t.stats,
                    d = Object(o.b)((l.video_play_external_referrers || []).concat(l.video_play_internal_channels_referrers || [], l.video_play_internal_twitch_referrers || []));
                return new e({
                    start: new Date(t.start_time),
                    end: new Date(t.end_time),
                    avgViewerCount: Number(u.concurrents_average),
                    maxViewerCount: Number(u.concurrents_max),
                    followersChange: Number(u.followers_change),
                    totalViewers: Number(u.video_play_total),
                    uniqueViewers: Number(u.video_play_unique),
                    totalMinutesWatched: Number(u.minutes_watched_total),
                    clipCreatesTotal: Number(u.clip_creates_total),
                    clipPlaysTotal: Number(u.clip_plays_total),
                    clipPlaysBreakdown: c,
                    commercialCount: Number(u.commercial_count),
                    commercialDensity: Number(u.commercial_density),
                    commercialLengthTotal: Number(u.commercial_length_total),
                    subscriptionsNew: Number(u.subscriptions_new),
                    uniqueChatters: Number(u.chatters_unique),
                    peakViewershipTime: new Date(u.concurrents_peak_time),
                    incomingRaids: Number(u.raids_incoming),
                    startChannelStatus: i,
                    messagesTotal: Number(u.messages_total),
                    videoThumbnail: a,
                    channel: n,
                    videoPlayExternalReferrers: Object(o.b)(l.video_play_external_referrers, s),
                    videoPlayInternalChannelsReferrers: Object(o.b)(l.video_play_internal_channels_referrers),
                    videoPlayInternalTwitchReferrers: Object(o.b)(l.video_play_internal_twitch_referrers),
                    videoPlayAllReferrers: d,
                    videoPlayGeographics: Object(o.b)(l.video_play_geographics),
                    videoPlayPlatforms: Object(o.b)(l.video_play_platforms)
                })
            }, e.intervalFromID = function(e) {
                var t = e.split("-"),
                    n = t[0],
                    r = t[1],
                    o = {
                        start: new Date(Number(n)),
                        end: new Date(Number(r))
                    };
                if (Object(a.e)(o)) return o
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
    vTHh: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            i = n("Odds"),
            s = (n("gWfK"), {
                "data-test-selector": "referral-percentage"
            }),
            c = {
                "data-test-selector": "report-item-name"
            },
            u = {
                "data-test-selector": "referral-subtitle"
            };

        function l(e) {
            return Object(o.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                totalViewCount: e
            }, "ReferralGroup")
        }
        var d = function(e) {
            var t = e.referrals,
                n = e.totals,
                s = e.translationFunc,
                c = e.title,
                d = e.subtitle;
            return 0 === n ? function(e) {
                var t = e.title,
                    n = e.subtitle;
                return a.createElement(a.Fragment, null, a.createElement(i._8, {
                    padding: {
                        top: 2,
                        bottom: 1,
                        x: 2
                    }
                }, t && a.createElement(i.Q, {
                    type: i._49.H3,
                    fontSize: i.V.Size5,
                    bold: !0
                }, t)), a.createElement(i._8, {
                    margin: {
                        x: 2,
                        bottom: 1
                    }
                }, a.createElement(i.Q, r.__assign({}, u, {
                    fontSize: i.V.Size5,
                    color: i.K.Alt2
                }), void 0 !== n ? n : Object(o.d)("Not enough data for us to display", "ReferralGroup"))))
            }({
                subtitle: d,
                title: c
            }) : a.createElement(a.Fragment, null, a.createElement(i._8, {
                margin: {
                    top: .5
                },
                padding: {
                    top: 2,
                    bottom: 1,
                    x: 2
                }
            }, c && a.createElement(i.Q, {
                type: i._49.H3,
                fontSize: i.V.Size5,
                bold: !0
            }, c), a.createElement(i.Q, r.__assign({}, u, {
                fontSize: i.V.Size5,
                color: i.K.Alt2
            }), void 0 !== d ? d : l(n))), a.createElement(i._8, {
                margin: {
                    bottom: 1
                }
            }, t.map(function(e, t) {
                return a.createElement(m, {
                    referral: e,
                    translationFunc: s,
                    key: t
                })
            })))
        };

        function m(e) {
            var t, n = e.referral,
                u = e.translationFunc;
            return t = n.share > 0 ? Object(o.d)("{share, number, percent}", {
                share: n.share / 100
            }, "ReferralGroup") : Object(o.d)("< 1%", "ReferralGroup"), a.createElement(i._35, {
                className: "referral-group-row",
                padding: {
                    y: 1,
                    right: 2,
                    left: 2
                },
                fontSize: i.V.Size5
            }, a.createElement(i.Y, null, a.createElement(i.L, {
                cols: {
                    default: 5,
                    xs: 5,
                    sm: 5
                }
            }, a.createElement(i._8, {
                padding: {
                    left: 0,
                    right: 1
                }
            }, a.createElement(i.Q, r.__assign({
                fontSize: i.V.Size5,
                ellipsis: !0
            }, c), u(n.name)))), a.createElement(i.L, {
                cols: {
                    default: 2,
                    xs: 3,
                    sm: 2
                }
            }, a.createElement(i._8, {
                padding: {
                    right: 1
                },
                textAlign: i._45.Right
            }, a.createElement(i.Q, r.__assign({
                color: i.K.Alt2,
                ellipsis: !0
            }, s), t))), a.createElement(i.L, {
                cols: {
                    default: 5,
                    xs: 4,
                    sm: 5
                }
            }, a.createElement(i._8, {
                padding: {
                    top: .5
                }
            }, a.createElement(i._52, {
                label: l(n.count),
                direction: i._54.Top,
                align: i._53.Center,
                display: i.R.Block
            }, a.createElement(i._35, {
                background: i.n.Alt2
            }, a.createElement(i._18, {
                value: Math.max(n.share, 1)
            })))))))
        }
        n.d(t, !1, function() {
            return s
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return d
        })
    },
    vU5Q: function(e, t) {},
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
                o = Number(t),
                i = a(n) - o;
            return n.setDate(n.getDate() - 7 * i), n
        }
    },
    wiYS: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, o = r(e).getTime();
            return t.forEach(function(e, t) {
                var i = r(e),
                    s = Math.abs(o - i.getTime());
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
            o = 6e4,
            i = 2,
            s = /[T ]/,
            c = /:/,
            u = /^(\d{2})$/,
            l = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            d = /^(\d{4})/,
            m = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            f = /^-(\d{2})$/,
            h = /^-?(\d{3})$/,
            p = /^-?(\d{2})-?(\d{2})$/,
            g = /^-?W(\d{2})$/,
            b = /^-?W(\d{2})-?(\d{1})$/,
            v = /^(\d{2}([.,]\d*)?)$/,
            y = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            O = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            D = /([Z+-].*)$/,
            S = /^(Z)$/,
            w = /^([+-])(\d{2})$/,
            x = /^([+-])(\d{2}):?(\d{2})$/;

        function _(e, t, n) {
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
            n = null == n ? i : Number(n);
            var j = function(e) {
                    var t, n = {},
                        r = e.split(s);
                    if (c.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1]), t) {
                        var a = D.exec(t);
                        a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
                    }
                    return n
                }(e),
                N = function(e, t) {
                    var n, r = l[t],
                        a = m[t];
                    if (n = d.exec(e) || a.exec(e)) {
                        var o = n[1];
                        return {
                            year: parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        }
                    }
                    if (n = u.exec(e) || r.exec(e)) {
                        var i = n[1];
                        return {
                            year: 100 * parseInt(i, 10),
                            restDateString: e.slice(i.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(j.date, n),
                M = N.year,
                E = function(e, t) {
                    if (null === t) return null;
                    var n, r, a, o;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (n = f.exec(e)) return r = new Date(0), a = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, a), r;
                    if (n = h.exec(e)) {
                        r = new Date(0);
                        var i = parseInt(n[1], 10);
                        return r.setUTCFullYear(t, 0, i), r
                    }
                    if (n = p.exec(e)) {
                        r = new Date(0), a = parseInt(n[1], 10) - 1;
                        var s = parseInt(n[2], 10);
                        return r.setUTCFullYear(t, a, s), r
                    }
                    if (n = g.exec(e)) return o = parseInt(n[1], 10) - 1, _(t, o);
                    if (n = b.exec(e)) {
                        o = parseInt(n[1], 10) - 1;
                        var c = parseInt(n[2], 10) - 1;
                        return _(t, o, c)
                    }
                    return null
                }(N.restDateString, M);
            if (E) {
                var T, A = E.getTime(),
                    k = 0;
                return j.time && (k = function(e) {
                    var t, n, r;
                    if (t = v.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * a;
                    if (t = y.exec(e)) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), n % 24 * a + r * o;
                    if (t = O.exec(e)) {
                        n = parseInt(t[1], 10), r = parseInt(t[2], 10);
                        var i = parseFloat(t[3].replace(",", "."));
                        return n % 24 * a + r * o + 1e3 * i
                    }
                    return null
                }(j.time)), j.timezone ? (C = j.timezone, T = (I = S.exec(C)) ? 0 : (I = w.exec(C)) ? (R = 60 * parseInt(I[2], 10), "+" === I[1] ? -R : R) : (I = x.exec(C)) ? (R = 60 * parseInt(I[2], 10) + parseInt(I[3], 10), "+" === I[1] ? -R : R) : 0) : (T = new Date(A + k).getTimezoneOffset(), T = new Date(A + k + T * o).getTimezoneOffset()), new Date(A + k + T * o)
            }
            var C, I, R;
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
                e.share = o(e.count / n.totals)
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
                    share: o(e / t.totals)
                })
            }), t.items = t.items.sort(a), t
        };
        var r = function(e) {
            return e
        };

        function a(e, t) {
            return e.count === t.count ? e.name.localeCompare(t.name) : e.count > t.count ? -1 : 1
        }

        function o(e) {
            return Math.round(100 * e)
        }
    },
    yLtb: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            switch (e.toUpperCase()) {
                case "A1":
                    return Object(r.d)("Anonymous Proxy", "format-country");
                case "A2":
                    return Object(r.d)("Satellite Provider", "format-country");
                case "AD":
                    return Object(r.d)("Andorra", "format-country");
                case "AE":
                    return Object(r.d)("United Arab Emirates", "format-country");
                case "AF":
                    return Object(r.d)("Afghanistan", "format-country");
                case "AG":
                    return Object(r.d)("Antigua and Barbuda", "format-country");
                case "AI":
                    return Object(r.d)("Anguilla", "format-country");
                case "AL":
                    return Object(r.d)("Albania", "format-country");
                case "AM":
                    return Object(r.d)("Armenia", "format-country");
                case "AO":
                    return Object(r.d)("Angola", "format-country");
                case "AP":
                    return Object(r.d)("Asia/Pacific Region", "format-country");
                case "AQ":
                    return Object(r.d)("Antarctica", "format-country");
                case "AR":
                    return Object(r.d)("Argentina", "format-country");
                case "AS":
                    return Object(r.d)("American Samoa", "format-country");
                case "AT":
                    return Object(r.d)("Austria", "format-country");
                case "AU":
                    return Object(r.d)("Australia", "format-country");
                case "AW":
                    return Object(r.d)("Aruba", "format-country");
                case "AX":
                    return Object(r.d)("Aland Islands", "format-country");
                case "AZ":
                    return Object(r.d)("Azerbaijan", "format-country");
                case "BA":
                    return Object(r.d)("Bosnia and Herzegovina", "format-country");
                case "BB":
                    return Object(r.d)("Barbados", "format-country");
                case "BD":
                    return Object(r.d)("Bangladesh", "format-country");
                case "BE":
                    return Object(r.d)("Belgium", "format-country");
                case "BF":
                    return Object(r.d)("Burkina Faso", "format-country");
                case "BG":
                    return Object(r.d)("Bulgaria", "format-country");
                case "BH":
                    return Object(r.d)("Bahrain", "format-country");
                case "BI":
                    return Object(r.d)("Burundi", "format-country");
                case "BJ":
                    return Object(r.d)("Benin", "format-country");
                case "BL":
                    return Object(r.d)("Saint Bartelemey", "format-country");
                case "BM":
                    return Object(r.d)("Bermuda", "format-country");
                case "BN":
                    return Object(r.d)("Brunei", "format-country");
                case "BO":
                    return Object(r.d)("Bolivia", "format-country");
                case "BQ":
                    return Object(r.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                case "BR":
                    return Object(r.d)("Brazil", "format-country");
                case "BS":
                    return Object(r.d)("Bahamas", "format-country");
                case "BT":
                    return Object(r.d)("Bhutan", "format-country");
                case "BV":
                    return Object(r.d)("Bouvet Island", "format-country");
                case "BW":
                    return Object(r.d)("Botswana", "format-country");
                case "BY":
                    return Object(r.d)("Belarus", "format-country");
                case "BZ":
                    return Object(r.d)("Belize", "format-country");
                case "CA":
                    return Object(r.d)("Canada", "format-country");
                case "CC":
                    return Object(r.d)("Cocos (Keeling) Islands", "format-country");
                case "CD":
                    return Object(r.d)("Congo, The Democratic Republic of the", "format-country");
                case "CF":
                    return Object(r.d)("Central African Republic", "format-country");
                case "CG":
                    return Object(r.d)("Congo", "format-country");
                case "CH":
                    return Object(r.d)("Switzerland", "format-country");
                case "CI":
                    return Object(r.d)("Ivory Coast", "format-country");
                case "CK":
                    return Object(r.d)("Cook Islands", "format-country");
                case "CL":
                    return Object(r.d)("Chile", "format-country");
                case "CM":
                    return Object(r.d)("Cameroon", "format-country");
                case "CN":
                    return Object(r.d)("China", "format-country");
                case "CO":
                    return Object(r.d)("Colombia", "format-country");
                case "CR":
                    return Object(r.d)("Costa Rica", "format-country");
                case "CU":
                    return Object(r.d)("Cuba", "format-country");
                case "CV":
                    return Object(r.d)("Cape Verde", "format-country");
                case "CW":
                    return Object(r.d)("Curacao", "format-country");
                case "CX":
                    return Object(r.d)("Christmas Island", "format-country");
                case "CY":
                    return Object(r.d)("Cyprus", "format-country");
                case "CZ":
                    return Object(r.d)("Czech Republic", "format-country");
                case "DE":
                    return Object(r.d)("Germany", "format-country");
                case "DJ":
                    return Object(r.d)("Djibouti", "format-country");
                case "DK":
                    return Object(r.d)("Denmark", "format-country");
                case "DM":
                    return Object(r.d)("Dominica", "format-country");
                case "DO":
                    return Object(r.d)("Dominican Republic", "format-country");
                case "DZ":
                    return Object(r.d)("Algeria", "format-country");
                case "EC":
                    return Object(r.d)("Ecuador", "format-country");
                case "EE":
                    return Object(r.d)("Estonia", "format-country");
                case "EG":
                    return Object(r.d)("Egypt", "format-country");
                case "EH":
                    return Object(r.d)("Western Sahara", "format-country");
                case "ER":
                    return Object(r.d)("Eritrea", "format-country");
                case "ES":
                    return Object(r.d)("Spain", "format-country");
                case "ET":
                    return Object(r.d)("Ethiopia", "format-country");
                case "EU":
                    return Object(r.d)("Europe", "format-country");
                case "FI":
                    return Object(r.d)("Finland", "format-country");
                case "FJ":
                    return Object(r.d)("Fiji", "format-country");
                case "FK":
                    return Object(r.d)("Falkland Islands (Malvinas)", "format-country");
                case "FM":
                    return Object(r.d)("Micronesia", "format-country");
                case "FO":
                    return Object(r.d)("Faroe Islands", "format-country");
                case "FR":
                    return Object(r.d)("France", "format-country");
                case "GA":
                    return Object(r.d)("Gabon", "format-country");
                case "GB":
                    return Object(r.d)("United Kingdom", "format-country");
                case "GD":
                    return Object(r.d)("Grenada", "format-country");
                case "GE":
                    return Object(r.d)("Georgia", "format-country");
                case "GF":
                    return Object(r.d)("French Guiana", "format-country");
                case "GG":
                    return Object(r.d)("Guernsey", "format-country");
                case "GH":
                    return Object(r.d)("Ghana", "format-country");
                case "GI":
                    return Object(r.d)("Gibraltar", "format-country");
                case "GL":
                    return Object(r.d)("Greenland", "format-country");
                case "GM":
                    return Object(r.d)("Gambia", "format-country");
                case "GN":
                    return Object(r.d)("Guinea", "format-country");
                case "GP":
                    return Object(r.d)("Guadeloupe", "format-country");
                case "GQ":
                    return Object(r.d)("Equatorial Guinea", "format-country");
                case "GR":
                    return Object(r.d)("Greece", "format-country");
                case "GS":
                    return Object(r.d)("South Georgia and the South Sandwich Islands", "format-country");
                case "GT":
                    return Object(r.d)("Guatemala", "format-country");
                case "GU":
                    return Object(r.d)("Guam", "format-country");
                case "GW":
                    return Object(r.d)("Guinea-Bissau", "format-country");
                case "GY":
                    return Object(r.d)("Guyana", "format-country");
                case "HK":
                    return Object(r.d)("Hong Kong", "format-country");
                case "HM":
                    return Object(r.d)("Heard Island and McDonald Islands", "format-country");
                case "HN":
                    return Object(r.d)("Honduras", "format-country");
                case "HR":
                    return Object(r.d)("Croatia", "format-country");
                case "HT":
                    return Object(r.d)("Haiti", "format-country");
                case "HU":
                    return Object(r.d)("Hungary", "format-country");
                case "ID":
                    return Object(r.d)("Indonesia", "format-country");
                case "IE":
                    return Object(r.d)("Ireland", "format-country");
                case "IL":
                    return Object(r.d)("Israel", "format-country");
                case "IM":
                    return Object(r.d)("Isle of Man", "format-country");
                case "IN":
                    return Object(r.d)("India", "format-country");
                case "IO":
                    return Object(r.d)("British Indian Ocean Territory", "format-country");
                case "IQ":
                    return Object(r.d)("Iraq", "format-country");
                case "IR":
                    return Object(r.d)("Iran", "format-country");
                case "IS":
                    return Object(r.d)("Iceland", "format-country");
                case "IT":
                    return Object(r.d)("Italy", "format-country");
                case "JE":
                    return Object(r.d)("Jersey", "format-country");
                case "JM":
                    return Object(r.d)("Jamaica", "format-country");
                case "JO":
                    return Object(r.d)("Jordan", "format-country");
                case "JP":
                    return Object(r.d)("Japan", "format-country");
                case "KE":
                    return Object(r.d)("Kenya", "format-country");
                case "KG":
                    return Object(r.d)("Kyrgyzstan", "format-country");
                case "KH":
                    return Object(r.d)("Cambodia", "format-country");
                case "KI":
                    return Object(r.d)("Kiribati", "format-country");
                case "KM":
                    return Object(r.d)("Comoros", "format-country");
                case "KN":
                    return Object(r.d)("Saint Kitts and Nevis", "format-country");
                case "KP":
                    return Object(r.d)("North Korea", "format-country");
                case "KR":
                    return Object(r.d)("South Korea", "format-country");
                case "KW":
                    return Object(r.d)("Kuwait", "format-country");
                case "KY":
                    return Object(r.d)("Cayman Islands", "format-country");
                case "KZ":
                    return Object(r.d)("Kazakhstan", "format-country");
                case "LA":
                    return Object(r.d)("Laos", "format-country");
                case "LB":
                    return Object(r.d)("Lebanon", "format-country");
                case "LC":
                    return Object(r.d)("Saint Lucia", "format-country");
                case "LI":
                    return Object(r.d)("Liechtenstein", "format-country");
                case "LK":
                    return Object(r.d)("Sri Lanka", "format-country");
                case "LR":
                    return Object(r.d)("Liberia", "format-country");
                case "LS":
                    return Object(r.d)("Lesotho", "format-country");
                case "LT":
                    return Object(r.d)("Lithuania", "format-country");
                case "LU":
                    return Object(r.d)("Luxembourg", "format-country");
                case "LV":
                    return Object(r.d)("Latvia", "format-country");
                case "LY":
                    return Object(r.d)("Libya", "format-country");
                case "MA":
                    return Object(r.d)("Morocco", "format-country");
                case "MC":
                    return Object(r.d)("Monaco", "format-country");
                case "MD":
                    return Object(r.d)("Moldova", "format-country");
                case "ME":
                    return Object(r.d)("Montenegro", "format-country");
                case "MF":
                    return Object(r.d)("Saint Martin", "format-country");
                case "MG":
                    return Object(r.d)("Madagascar", "format-country");
                case "MH":
                    return Object(r.d)("Marshall Islands", "format-country");
                case "MK":
                    return Object(r.d)("Macedonia", "format-country");
                case "ML":
                    return Object(r.d)("Mali", "format-country");
                case "MM":
                    return Object(r.d)("Myanmar", "format-country");
                case "MN":
                    return Object(r.d)("Mongolia", "format-country");
                case "MO":
                    return Object(r.d)("Macao", "format-country");
                case "MP":
                    return Object(r.d)("Northern Mariana Islands", "format-country");
                case "MQ":
                    return Object(r.d)("Martinique", "format-country");
                case "MR":
                    return Object(r.d)("Mauritania", "format-country");
                case "MS":
                    return Object(r.d)("Montserrat", "format-country");
                case "MT":
                    return Object(r.d)("Malta", "format-country");
                case "MU":
                    return Object(r.d)("Mauritius", "format-country");
                case "MV":
                    return Object(r.d)("Maldives", "format-country");
                case "MW":
                    return Object(r.d)("Malawi", "format-country");
                case "MX":
                    return Object(r.d)("Mexico", "format-country");
                case "MY":
                    return Object(r.d)("Malaysia", "format-country");
                case "MZ":
                    return Object(r.d)("Mozambique", "format-country");
                case "NA":
                    return Object(r.d)("Namibia", "format-country");
                case "NC":
                    return Object(r.d)("New Caledonia", "format-country");
                case "NE":
                    return Object(r.d)("Niger", "format-country");
                case "NF":
                    return Object(r.d)("Norfolk Island", "format-country");
                case "NG":
                    return Object(r.d)("Nigeria", "format-country");
                case "NI":
                    return Object(r.d)("Nicaragua", "format-country");
                case "NL":
                    return Object(r.d)("Netherlands", "format-country");
                case "NO":
                    return Object(r.d)("Norway", "format-country");
                case "NP":
                    return Object(r.d)("Nepal", "format-country");
                case "NR":
                    return Object(r.d)("Nauru", "format-country");
                case "NU":
                    return Object(r.d)("Niue", "format-country");
                case "NZ":
                    return Object(r.d)("New Zealand", "format-country");
                case "O1":
                    return Object(r.d)("Other Country", "format-country");
                case "OM":
                    return Object(r.d)("Oman", "format-country");
                case "PA":
                    return Object(r.d)("Panama", "format-country");
                case "PE":
                    return Object(r.d)("Peru", "format-country");
                case "PF":
                    return Object(r.d)("French Polynesia", "format-country");
                case "PG":
                    return Object(r.d)("Papua New Guinea", "format-country");
                case "PH":
                    return Object(r.d)("Philippines", "format-country");
                case "PK":
                    return Object(r.d)("Pakistan", "format-country");
                case "PL":
                    return Object(r.d)("Poland", "format-country");
                case "PM":
                    return Object(r.d)("Saint Pierre and Miquelon", "format-country");
                case "PN":
                    return Object(r.d)("Pitcairn", "format-country");
                case "PR":
                    return Object(r.d)("Puerto Rico", "format-country");
                case "PS":
                    return Object(r.d)("Palestine", "format-country");
                case "PT":
                    return Object(r.d)("Portugal", "format-country");
                case "PW":
                    return Object(r.d)("Palau", "format-country");
                case "PY":
                    return Object(r.d)("Paraguay", "format-country");
                case "QA":
                    return Object(r.d)("Qatar", "format-country");
                case "RE":
                    return Object(r.d)("Reunion", "format-country");
                case "RO":
                    return Object(r.d)("Romania", "format-country");
                case "RS":
                    return Object(r.d)("Serbia", "format-country");
                case "RU":
                    return Object(r.d)("Russia", "format-country");
                case "RW":
                    return Object(r.d)("Rwanda", "format-country");
                case "SA":
                    return Object(r.d)("Saudi Arabia", "format-country");
                case "SB":
                    return Object(r.d)("Solomon Islands", "format-country");
                case "SC":
                    return Object(r.d)("Seychelles", "format-country");
                case "SD":
                    return Object(r.d)("Sudan", "format-country");
                case "SE":
                    return Object(r.d)("Sweden", "format-country");
                case "SG":
                    return Object(r.d)("Singapore", "format-country");
                case "SH":
                    return Object(r.d)("Saint Helena", "format-country");
                case "SI":
                    return Object(r.d)("Slovenia", "format-country");
                case "SJ":
                    return Object(r.d)("Svalbard and Jan Mayen", "format-country");
                case "SK":
                    return Object(r.d)("Slovakia", "format-country");
                case "SL":
                    return Object(r.d)("Sierra Leone", "format-country");
                case "SM":
                    return Object(r.d)("San Marino", "format-country");
                case "SN":
                    return Object(r.d)("Senegal", "format-country");
                case "SO":
                    return Object(r.d)("Somalia", "format-country");
                case "SR":
                    return Object(r.d)("Suriname", "format-country");
                case "SS":
                    return Object(r.d)("South Sudan", "format-country");
                case "ST":
                    return Object(r.d)("Sao Tome and Principe", "format-country");
                case "SV":
                    return Object(r.d)("El Salvador", "format-country");
                case "SX":
                    return Object(r.d)("Sint Maarten", "format-country");
                case "SY":
                    return Object(r.d)("Syria", "format-country");
                case "SZ":
                    return Object(r.d)("Swaziland", "format-country");
                case "TC":
                    return Object(r.d)("Turks and Caicos Islands", "format-country");
                case "TD":
                    return Object(r.d)("Chad", "format-country");
                case "TF":
                    return Object(r.d)("French Southern Territories", "format-country");
                case "TG":
                    return Object(r.d)("Togo", "format-country");
                case "TH":
                    return Object(r.d)("Thailand", "format-country");
                case "TJ":
                    return Object(r.d)("Tajikistan", "format-country");
                case "TK":
                    return Object(r.d)("Tokelau", "format-country");
                case "TL":
                    return Object(r.d)("East Timor", "format-country");
                case "TM":
                    return Object(r.d)("Turkmenistan", "format-country");
                case "TN":
                    return Object(r.d)("Tunisia", "format-country");
                case "TO":
                    return Object(r.d)("Tonga", "format-country");
                case "TR":
                    return Object(r.d)("Turkey", "format-country");
                case "TT":
                    return Object(r.d)("Trinidad and Tobago", "format-country");
                case "TV":
                    return Object(r.d)("Tuvalu", "format-country");
                case "TW":
                    return Object(r.d)("Taiwan", "format-country");
                case "TZ":
                    return Object(r.d)("Tanzania", "format-country");
                case "UA":
                    return Object(r.d)("Ukraine", "format-country");
                case "UG":
                    return Object(r.d)("Uganda", "format-country");
                case "UM":
                    return Object(r.d)("United States Minor Outlying Islands", "format-country");
                case "US":
                    return Object(r.d)("United States", "format-country");
                case "UY":
                    return Object(r.d)("Uruguay", "format-country");
                case "UZ":
                    return Object(r.d)("Uzbekistan", "format-country");
                case "VA":
                    return Object(r.d)("Vatican City", "format-country");
                case "VC":
                    return Object(r.d)("Saint Vincent and the Grenadines", "format-country");
                case "VE":
                    return Object(r.d)("Venezuela", "format-country");
                case "VG":
                    return Object(r.d)("British Virgin Islands", "format-country");
                case "VI":
                    return Object(r.d)("U.S. Virgin Islands", "format-country");
                case "VN":
                    return Object(r.d)("Vietnam", "format-country");
                case "VU":
                    return Object(r.d)("Vanuatu", "format-country");
                case "WF":
                    return Object(r.d)("Wallis and Futuna", "format-country");
                case "WS":
                    return Object(r.d)("Samoa", "format-country");
                case "YE":
                    return Object(r.d)("Yemen", "format-country");
                case "YT":
                    return Object(r.d)("Mayotte", "format-country");
                case "ZA":
                    return Object(r.d)("South Africa", "format-country");
                case "ZM":
                    return Object(r.d)("Zambia", "format-country");
                case "ZW":
                    return Object(r.d)("Zimbabwe", "format-country");
                default:
                    return e
            }
        }, n.d(t, "a", function() {
            return a
        });
        var r = n("6sO2");
        var a = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
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
    ylrR: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            o = n("rCmJ"),
            i = n("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDisclosed: !1
                    }, t.toggle = function() {
                        t.setState(function(e) {
                            return e.isDisclosed || t.handleOpen(), {
                                isDisclosed: !e.isDisclosed
                            }
                        })
                    }, t.close = function() {
                        t.setState({
                            isDisclosed: !1
                        })
                    }, t.handleOpen = function() {
                        t.props.onOpen && t.props.onOpen()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        toggle: this.toggle,
                        close: this.close
                    };
                    return a.createElement(i._2, {
                        fullHeight: !0
                    }, a.createElement(o.a, {
                        onClickOut: this.close
                    }, this.props.control(e), this.state.isDisclosed && this.props.children(e)))
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return s
        })
    },
    ymQ7: function(e, t, n) {
        var r = n("xA5w"),
            a = n("JURy"),
            o = n("nizW");
        e.exports = function(e) {
            var t = r(e);
            return o(t, a(t)) + 1
        }
    },
    ytWG: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
            o = n("5kgt"),
            i = n("Odds"),
            s = (n("XeQJ"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(i._8, r.__assign({
                        display: i.R.InlineBlock,
                        margin: {
                            left: .5
                        },
                        className: "side-nav-hotspot"
                    }, Object(o.a)(this.props)))
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
            return i
        });
        var r = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("Odds")),
            i = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o._8, {
                        padding: {
                            top: 2,
                            x: 2
                        },
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(o.Q, {
                        type: o._49.H4,
                        fontSize: o.V.Size5
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
                o = new Date(0);
            o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
            var i = a(o),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var c = a(s);
            return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
        }
    }
});
//# sourceMappingURL=pages.dashboard-3e38e6b1d55126a90dc56ee444071a78.js.map