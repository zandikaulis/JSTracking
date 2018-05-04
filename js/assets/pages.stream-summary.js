webpackJsonp([91], {
    "+27R": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("gom-latn", {
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
        })(a("PJh5"))
    },
    "+7/x": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("ta", {
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
        })(a("PJh5"))
    },
    "+ItH": function(e, t, a) {
        "use strict";
        a("k7DW")._set("global", {
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
    "/6P1": function(e, t, a) {
        (function(e) {
            "use strict";
            var t = {
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

            function a(e, t, a, n) {
                return t ? r(a)[0] : n ? r(a)[1] : r(a)[2]
            }

            function n(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function r(e) {
                return t[e].split("_")
            }

            function i(e, t, i, s) {
                var o = e + " ";
                return 1 === e ? o + a(0, t, i[0], s) : t ? o + (n(e) ? r(i)[1] : r(i)[0]) : s ? o + r(i)[1] : o + (n(e) ? r(i)[1] : r(i)[2])
            }
            e.defineLocale("lt", {
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
                    s: function(e, t, a, n) {
                        return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
                    },
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
        })(a("PJh5"))
    },
    "/bsm": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("uz-latn", {
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
        })(a("PJh5"))
    },
    "/jKm": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N");
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
                        var a = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                        return {
                            borderColor: a.borderColor,
                            backgroundColor: a.backgroundColor
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
            e.Tooltip = r.extend({
                initialize: function() {
                    this._model = s(this._options), this._lastActive = []
                },
                getTitle: function() {
                    var e = this._options.callbacks,
                        t = e.beforeTitle.apply(this, arguments),
                        n = e.title.apply(this, arguments),
                        r = e.afterTitle.apply(this, arguments),
                        i = [];
                    return i = a(i = a(i = a(i, t), n), r)
                },
                getBeforeBody: function() {
                    var e = this._options.callbacks.beforeBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getBody: function(e, t) {
                    var n = this,
                        r = n._options.callbacks,
                        s = [];
                    return i.each(e, function(e) {
                        var i = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        a(i.before, r.beforeLabel.call(n, e, t)), a(i.lines, r.label.call(n, e, t)), a(i.after, r.afterLabel.call(n, e, t)), s.push(i)
                    }), s
                },
                getAfterBody: function() {
                    var e = this._options.callbacks.afterBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getFooter: function() {
                    var e = this._options.callbacks,
                        t = e.beforeFooter.apply(this, arguments),
                        n = e.footer.apply(this, arguments),
                        r = e.afterFooter.apply(this, arguments),
                        i = [];
                    return i = a(i = a(i = a(i, t), n), r)
                },
                update: function(t) {
                    var a, n, r, o, d, l, u, c = this,
                        m = c._options,
                        h = c._model,
                        _ = c._model = s(m),
                        f = c._active,
                        p = c._data,
                        y = {
                            xAlign: h.xAlign,
                            yAlign: h.yAlign
                        },
                        g = {
                            x: h.x,
                            y: h.y
                        },
                        M = {
                            width: h.width,
                            height: h.height
                        },
                        v = {
                            x: h.caretX,
                            y: h.caretY
                        };
                    if (f.length) {
                        _.opacity = 1;
                        var b = [],
                            L = [];
                        v = e.Tooltip.positioners[m.position].call(c, f, c._eventPosition);
                        var k = [];
                        for (a = 0, n = f.length; a < n; ++a) k.push((r = f[a], o = void 0, d = void 0, void 0, void 0, o = r._xScale, d = r._yScale || r._scale, l = r._index, u = r._datasetIndex, {
                            xLabel: o ? o.getLabelForIndex(l, u) : "",
                            yLabel: d ? d.getLabelForIndex(l, u) : "",
                            index: l,
                            datasetIndex: u,
                            x: r._model.x,
                            y: r._model.y
                        }));
                        m.filter && (k = k.filter(function(e) {
                            return m.filter(e, p)
                        })), m.itemSort && (k = k.sort(function(e, t) {
                            return m.itemSort(e, t, p)
                        })), i.each(k, function(e) {
                            b.push(m.callbacks.labelColor.call(c, e, c._chart)), L.push(m.callbacks.labelTextColor.call(c, e, c._chart))
                        }), _.title = c.getTitle(k, p), _.beforeBody = c.getBeforeBody(k, p), _.body = c.getBody(k, p), _.afterBody = c.getAfterBody(k, p), _.footer = c.getFooter(k, p), _.x = Math.round(v.x), _.y = Math.round(v.y), _.caretPadding = m.caretPadding, _.labelColors = b, _.labelTextColors = L, _.dataPoints = k, g = function(e, t, a) {
                            var n = e.x,
                                r = e.y,
                                i = e.caretSize,
                                s = e.caretPadding,
                                o = e.cornerRadius,
                                d = a.xAlign,
                                l = a.yAlign,
                                u = i + s,
                                c = o + s;
                            return "right" === d ? n -= t.width : "center" === d && (n -= t.width / 2), "top" === l ? r += u : r -= "bottom" === l ? t.height + u : t.height / 2, "center" === l ? "left" === d ? n += u : "right" === d && (n -= u) : "left" === d ? n -= c : "right" === d && (n += c), {
                                x: n,
                                y: r
                            }
                        }(_, M = function(e, t) {
                            var a = e._chart.ctx,
                                n = 2 * t.yPadding,
                                r = 0,
                                s = t.body,
                                o = s.reduce(function(e, t) {
                                    return e + t.before.length + t.lines.length + t.after.length
                                }, 0);
                            o += t.beforeBody.length + t.afterBody.length;
                            var d = t.title.length,
                                l = t.footer.length,
                                u = t.titleFontSize,
                                c = t.bodyFontSize,
                                m = t.footerFontSize;
                            n += d * u, n += d ? (d - 1) * t.titleSpacing : 0, n += d ? t.titleMarginBottom : 0, n += o * c, n += o ? (o - 1) * t.bodySpacing : 0, n += l ? t.footerMarginTop : 0, n += l * m, n += l ? (l - 1) * t.footerSpacing : 0;
                            var h = 0,
                                _ = function(e) {
                                    r = Math.max(r, a.measureText(e).width + h)
                                };
                            return a.font = i.fontString(u, t._titleFontStyle, t._titleFontFamily), i.each(t.title, _), a.font = i.fontString(c, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), _), h = t.displayColors ? c + 2 : 0, i.each(s, function(e) {
                                i.each(e.before, _), i.each(e.lines, _), i.each(e.after, _)
                            }), h = 0, a.font = i.fontString(m, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, _), {
                                width: r += 2 * t.xPadding,
                                height: n
                            }
                        }(this, _), y = function(e, t) {
                            var a, n, r, i, s, o = e._model,
                                d = e._chart,
                                l = e._chart.chartArea,
                                u = "center",
                                c = "center";
                            o.y < t.height ? c = "top" : o.y > d.height - t.height && (c = "bottom");
                            var m = (l.left + l.right) / 2,
                                h = (l.top + l.bottom) / 2;
                            "center" === c ? (a = function(e) {
                                return e <= m
                            }, n = function(e) {
                                return e > m
                            }) : (a = function(e) {
                                return e <= t.width / 2
                            }, n = function(e) {
                                return e >= d.width - t.width / 2
                            }), r = function(e) {
                                return e + t.width > d.width
                            }, i = function(e) {
                                return e - t.width < 0
                            }, s = function(e) {
                                return e <= h ? "top" : "bottom"
                            }, a(o.x) ? (u = "left", r(o.x) && (u = "center", c = s(o.y))) : n(o.x) && (u = "right", i(o.x) && (u = "center", c = s(o.y)));
                            var _ = e._options;
                            return {
                                xAlign: _.xAlign ? _.xAlign : u,
                                yAlign: _.yAlign ? _.yAlign : c
                            }
                        }(this, M))
                    } else _.opacity = 0;
                    return _.xAlign = y.xAlign, _.yAlign = y.yAlign, _.x = g.x, _.y = g.y, _.width = M.width, _.height = M.height, _.caretX = v.x, _.caretY = v.y, c._model = _, t && m.custom && m.custom.call(c, _), c
                },
                drawCaret: function(e, t) {
                    var a = this._chart.ctx,
                        n = this._view,
                        r = this.getCaretPosition(e, t, n);
                    a.lineTo(r.x1, r.y1), a.lineTo(r.x2, r.y2), a.lineTo(r.x3, r.y3)
                },
                getCaretPosition: function(e, t, a) {
                    var n, r, i, s, o, d, l = a.caretSize,
                        u = a.cornerRadius,
                        c = a.xAlign,
                        m = a.yAlign,
                        h = e.x,
                        _ = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === m) o = _ + p / 2, "left" === c ? (r = (n = h) - l, i = n, s = o + l, d = o - l) : (r = (n = h + f) + l, i = n, s = o - l, d = o + l);
                    else if ("left" === c ? (n = (r = h + u + l) - l, i = r + l) : "right" === c ? (n = (r = h + f - u - l) - l, i = r + l) : (n = (r = h + f / 2) - l, i = r + l), "top" === m) o = (s = _) - l, d = s;
                    else {
                        o = (s = _ + p) + l, d = s;
                        var y = i;
                        i = n, n = y
                    }
                    return {
                        x1: n,
                        x2: r,
                        x3: i,
                        y1: s,
                        y2: o,
                        y3: d
                    }
                },
                drawTitle: function(e, a, n, r) {
                    var s = a.title;
                    if (s.length) {
                        n.textAlign = a._titleAlign, n.textBaseline = "top";
                        var o, d, l = a.titleFontSize,
                            u = a.titleSpacing;
                        for (n.fillStyle = t(a.titleFontColor, r), n.font = i.fontString(l, a._titleFontStyle, a._titleFontFamily), o = 0, d = s.length; o < d; ++o) n.fillText(s[o], e.x, e.y), e.y += l + u, o + 1 === s.length && (e.y += a.titleMarginBottom - u)
                    }
                },
                drawBody: function(e, a, n, r) {
                    var s = a.bodyFontSize,
                        o = a.bodySpacing,
                        d = a.body;
                    n.textAlign = a._bodyAlign, n.textBaseline = "top", n.font = i.fontString(s, a._bodyFontStyle, a._bodyFontFamily);
                    var l = 0,
                        u = function(t) {
                            n.fillText(t, e.x + l, e.y), e.y += s + o
                        };
                    n.fillStyle = t(a.bodyFontColor, r), i.each(a.beforeBody, u);
                    var c = a.displayColors;
                    l = c ? s + 2 : 0, i.each(d, function(o, d) {
                        var l = t(a.labelTextColors[d], r);
                        n.fillStyle = l, i.each(o.before, u), i.each(o.lines, function(i) {
                            c && (n.fillStyle = t(a.legendColorBackground, r), n.fillRect(e.x, e.y, s, s), n.lineWidth = 1, n.strokeStyle = t(a.labelColors[d].borderColor, r), n.strokeRect(e.x, e.y, s, s), n.fillStyle = t(a.labelColors[d].backgroundColor, r), n.fillRect(e.x + 1, e.y + 1, s - 2, s - 2), n.fillStyle = l), u(i)
                        }), i.each(o.after, u)
                    }), l = 0, i.each(a.afterBody, u), e.y -= o
                },
                drawFooter: function(e, a, n, r) {
                    var s = a.footer;
                    s.length && (e.y += a.footerMarginTop, n.textAlign = a._footerAlign, n.textBaseline = "top", n.fillStyle = t(a.footerFontColor, r), n.font = i.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily), i.each(s, function(t) {
                        n.fillText(t, e.x, e.y), e.y += a.footerFontSize + a.footerSpacing
                    }))
                },
                drawBackground: function(e, a, n, r, i) {
                    n.fillStyle = t(a.backgroundColor, i), n.strokeStyle = t(a.borderColor, i), n.lineWidth = a.borderWidth;
                    var s = a.xAlign,
                        o = a.yAlign,
                        d = e.x,
                        l = e.y,
                        u = r.width,
                        c = r.height,
                        m = a.cornerRadius;
                    n.beginPath(), n.moveTo(d + m, l), "top" === o && this.drawCaret(e, r), n.lineTo(d + u - m, l), n.quadraticCurveTo(d + u, l, d + u, l + m), "center" === o && "right" === s && this.drawCaret(e, r), n.lineTo(d + u, l + c - m), n.quadraticCurveTo(d + u, l + c, d + u - m, l + c), "bottom" === o && this.drawCaret(e, r), n.lineTo(d + m, l + c), n.quadraticCurveTo(d, l + c, d, l + c - m), "center" === o && "left" === s && this.drawCaret(e, r), n.lineTo(d, l + m), n.quadraticCurveTo(d, l, d + m, l), n.closePath(), n.fill(), a.borderWidth > 0 && n.stroke()
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
                        var s = e[t];
                        if (s && s.hasValue()) {
                            var o = s.tooltipPosition();
                            n += o.x, r += o.y, ++i
                        }
                    }
                    return {
                        x: Math.round(n / i),
                        y: Math.round(r / i)
                    }
                },
                nearest: function(e, t) {
                    var a, n, r, s = t.x,
                        o = t.y,
                        d = Number.POSITIVE_INFINITY;
                    for (a = 0, n = e.length; a < n; ++a) {
                        var l = e[a];
                        if (l && l.hasValue()) {
                            var u = l.getCenterPoint(),
                                c = i.distanceBetweenPoints(t, u);
                            c < d && (d = c, r = l)
                        }
                    }
                    if (r) {
                        var m = r.tooltipPosition();
                        s = m.x, o = m.y
                    }
                    return {
                        x: s,
                        y: o
                    }
                }
            }
        }
    },
    "/mhn": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("ne", {
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
        })(a("PJh5"))
    },
    "0C1O": function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Radar = function(t, a) {
                return a.type = "radar", new e(t, a)
            }
        }
    },
    "0X8Q": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("vi", {
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
        })(a("PJh5"))
    },
    "0gJx": function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Line = function(t, a) {
                return a.type = "line", new e(t, a)
            }
        }
    },
    "19SQ": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("L5rj"),
            i = a("iO9N");
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
                        a = t.getMeta().data;
                    i.each(a, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = n.getMeta(),
                        i = e.custom || {},
                        s = n.getScaleForId(r.xAxisID),
                        o = n.getScaleForId(r.yAxisID),
                        d = n._resolveElementOptions(e, t),
                        l = n.getDataset().data[t],
                        u = n.index,
                        c = a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof l ? l : NaN, t, u),
                        m = a ? o.getBasePixel() : o.getPixelForValue(l, t, u);
                    e._xScale = s, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = {
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
                    var a, n, r, s = this.chart,
                        o = s.data.datasets[this.index],
                        d = e.custom || {},
                        l = s.options.elements.point,
                        u = i.options.resolve,
                        c = o.data[t],
                        m = {},
                        h = {
                            chart: s,
                            dataIndex: t,
                            dataset: o,
                            datasetIndex: this.index
                        },
                        _ = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                    for (a = 0, n = _.length; a < n; ++a) m[r = _[a]] = u([d[r], o[r], l[r]], h, t);
                    return m.radius = u([d.radius, c ? c.r : void 0, o.radius, l.radius], h, t), m
                }
            })
        }
    },
    "1Nt4": function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            r = a("IbXy");
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: r.formatters.logarithmic
                    }
                },
                a = e.Scale.extend({
                    determineDataLimits: function() {
                        var e = this,
                            t = e.options,
                            a = t.ticks,
                            r = e.chart,
                            i = r.data.datasets,
                            s = n.valueOrDefault,
                            o = e.isHorizontal();

                        function d(t) {
                            return o ? t.xAxisID === e.id : t.yAxisID === e.id
                        }
                        e.min = null, e.max = null, e.minNotZero = null;
                        var l = t.stacked;
                        if (void 0 === l && n.each(i, function(e, t) {
                                if (!l) {
                                    var a = r.getDatasetMeta(t);
                                    r.isDatasetVisible(t) && d(a) && void 0 !== a.stack && (l = !0)
                                }
                            }), t.stacked || l) {
                            var u = {};
                            n.each(i, function(a, i) {
                                var s = r.getDatasetMeta(i),
                                    o = [s.type, void 0 === t.stacked && void 0 === s.stack ? i : "", s.stack].join(".");
                                r.isDatasetVisible(i) && d(s) && (void 0 === u[o] && (u[o] = []), n.each(a.data, function(a, n) {
                                    var r = u[o],
                                        i = +e.getRightValue(a);
                                    isNaN(i) || s.data[n].hidden || (r[n] = r[n] || 0, t.relativePoints ? r[n] = 100 : r[n] += i)
                                }))
                            }), n.each(u, function(t) {
                                var a = n.min(t),
                                    r = n.max(t);
                                e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? r : Math.max(e.max, r)
                            })
                        } else n.each(i, function(t, a) {
                            var i = r.getDatasetMeta(a);
                            r.isDatasetVisible(a) && d(i) && n.each(t.data, function(t, a) {
                                var n = +e.getRightValue(t);
                                isNaN(n) || i.data[a].hidden || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n), 0 !== n && (null === e.minNotZero || n < e.minNotZero) && (e.minNotZero = n))
                            })
                        });
                        e.min = s(a.min, e.min), e.max = s(a.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(n.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(n.log10(e.max)) + 1)) : (e.min = 1, e.max = 10))
                    },
                    buildTicks: function() {
                        var e = this,
                            t = e.options.ticks,
                            a = {
                                min: t.min,
                                max: t.max
                            },
                            i = e.ticks = r.generators.logarithmic(a, e);
                        e.isHorizontal() || i.reverse(), e.max = n.max(i), e.min = n.min(i), t.reverse ? (i.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
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
                            s = i.start,
                            o = +i.getRightValue(e),
                            d = i.options.ticks;
                        return i.isHorizontal() ? (r = n.log10(i.end) - n.log10(s), 0 === o ? a = i.left : (t = i.width, a = i.left + t / r * (n.log10(o) - n.log10(s)))) : (t = i.height, 0 !== s || d.reverse ? 0 === i.end && d.reverse ? (r = n.log10(i.start) - n.log10(i.minNotZero), a = o === i.end ? i.top : o === i.minNotZero ? i.top + .02 * t : i.top + .02 * t + .98 * t / r * (n.log10(o) - n.log10(i.minNotZero))) : 0 === o ? a = d.reverse ? i.top : i.bottom : (r = n.log10(i.end) - n.log10(s), t = i.height, a = i.bottom - t / r * (n.log10(o) - n.log10(s))) : (r = n.log10(i.end) - n.log10(i.minNotZero), a = o === s ? i.bottom : o === i.minNotZero ? i.bottom - .02 * t : i.bottom - .02 * t - .98 * t / r * (n.log10(o) - n.log10(i.minNotZero)))), a
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
    "2ddL": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("L5rj"),
            i = a("iO9N");
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
                        s = n.custom || {},
                        o = t.getDataset(),
                        d = t.chart.options.elements.line,
                        l = t.chart.scale;
                    void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension), i.extend(a.dataset, {
                        _datasetIndex: t.index,
                        _scale: l,
                        _children: r,
                        _loop: !0,
                        _model: {
                            tension: s.tension ? s.tension : i.valueOrDefault(o.lineTension, d.tension),
                            backgroundColor: s.backgroundColor ? s.backgroundColor : o.backgroundColor || d.backgroundColor,
                            borderWidth: s.borderWidth ? s.borderWidth : o.borderWidth || d.borderWidth,
                            borderColor: s.borderColor ? s.borderColor : o.borderColor || d.borderColor,
                            fill: s.fill ? s.fill : void 0 !== o.fill ? o.fill : d.fill,
                            borderCapStyle: s.borderCapStyle ? s.borderCapStyle : o.borderCapStyle || d.borderCapStyle,
                            borderDash: s.borderDash ? s.borderDash : o.borderDash || d.borderDash,
                            borderDashOffset: s.borderDashOffset ? s.borderDashOffset : o.borderDashOffset || d.borderDashOffset,
                            borderJoinStyle: s.borderJoinStyle ? s.borderJoinStyle : o.borderJoinStyle || d.borderJoinStyle
                        }
                    }), a.dataset.pivot(), i.each(r, function(a, n) {
                        t.updateElement(a, n, e)
                    }, t), t.updateBezierControlPoints()
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = e.custom || {},
                        s = n.getDataset(),
                        o = n.chart.scale,
                        d = n.chart.options.elements.point,
                        l = o.getPointPositionForValue(t, s.data[t]);
                    void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: o,
                        _model: {
                            x: a ? o.xCenter : l.x,
                            y: a ? o.yCenter : l.y,
                            tension: r.tension ? r.tension : i.valueOrDefault(s.lineTension, n.chart.options.elements.line.tension),
                            radius: r.radius ? r.radius : i.valueAtIndexOrDefault(s.pointRadius, t, d.radius),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : i.valueAtIndexOrDefault(s.pointBackgroundColor, t, d.backgroundColor),
                            borderColor: r.borderColor ? r.borderColor : i.valueAtIndexOrDefault(s.pointBorderColor, t, d.borderColor),
                            borderWidth: r.borderWidth ? r.borderWidth : i.valueAtIndexOrDefault(s.pointBorderWidth, t, d.borderWidth),
                            pointStyle: r.pointStyle ? r.pointStyle : i.valueAtIndexOrDefault(s.pointStyle, t, d.pointStyle),
                            hitRadius: r.hitRadius ? r.hitRadius : i.valueAtIndexOrDefault(s.pointHitRadius, t, d.hitRadius)
                        }
                    }), e._model.skip = r.skip ? r.skip : isNaN(e._model.x) || isNaN(e._model.y)
                },
                updateBezierControlPoints: function() {
                    var e = this.chart.chartArea,
                        t = this.getMeta();
                    i.each(t.data, function(a, n) {
                        var r = a._model,
                            s = i.splineCurve(i.previousItem(t.data, n, !0)._model, r, i.nextItem(t.data, n, !0)._model, r.tension);
                        r.controlPointPreviousX = Math.max(Math.min(s.previous.x, e.right), e.left), r.controlPointPreviousY = Math.max(Math.min(s.previous.y, e.bottom), e.top), r.controlPointNextX = Math.max(Math.min(s.next.x, e.right), e.left), r.controlPointNextY = Math.max(Math.min(s.next.y, e.bottom), e.top), a.pivot()
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
                        s = this.chart.options.elements.point;
                    r.radius = a.radius ? a.radius : i.valueAtIndexOrDefault(t.pointRadius, n, s.radius), r.backgroundColor = a.backgroundColor ? a.backgroundColor : i.valueAtIndexOrDefault(t.pointBackgroundColor, n, s.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : i.valueAtIndexOrDefault(t.pointBorderColor, n, s.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : i.valueAtIndexOrDefault(t.pointBorderWidth, n, s.borderWidth)
                }
            })
        }
    },
    "2pmY": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("fa", {
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
        })(a("PJh5"))
    },
    "2s1U": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("sl", {
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
        })(a("PJh5"))
    },
    "2xI1": function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            r = a("rGYv"),
            i = a("DN1M"),
            s = i._enabled ? i : r;
        e.exports = n.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, s)
    },
    "3CJN": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("af", {
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
        })(a("PJh5"))
    },
    "3K28": function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl", {
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
        })(a("PJh5"))
    },
    "3LKG": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("tl-ph", {
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
        })(a("PJh5"))
    },
    "3MVc": function(e, t, a) {
        (function(e) {
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
                    return function(t, a, i, s) {
                        var o = n(t),
                            d = r[e][n(t)];
                        return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
            e.defineLocale("ar", {
                months: s,
                monthsShort: s,
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
        })(a("PJh5"))
    },
    "3hfc": function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a) {
                var n, r;
                return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = +e, r = {
                    mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? r[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? r[1] : r[2])
            }
            e.defineLocale("be", {
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
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "дзень",
                    dd: t,
                    M: "месяц",
                    MM: t,
                    y: "год",
                    yy: t
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
        })(a("PJh5"))
    },
    "3n1n": function(e, t, a) {
        "use strict";
        var n, r = {
            noop: function() {},
            uid: (n = 0, function() {
                return n++
            }),
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
                return r.valueOrDefault(r.isArray(e) ? e[t] : e, a)
            },
            callback: function(e, t, a) {
                if (e && "function" == typeof e.call) return e.apply(a, t)
            },
            each: function(e, t, a, n) {
                var i, s, o;
                if (r.isArray(e))
                    if (s = e.length, n)
                        for (i = s - 1; i >= 0; i--) t.call(a, e[i], i);
                    else
                        for (i = 0; i < s; i++) t.call(a, e[i], i);
                else if (r.isObject(e))
                    for (s = (o = Object.keys(e)).length, i = 0; i < s; i++) t.call(a, e[o[i]], o[i])
            },
            arrayEquals: function(e, t) {
                var a, n, i, s;
                if (!e || !t || e.length !== t.length) return !1;
                for (a = 0, n = e.length; a < n; ++a)
                    if (i = e[a], s = t[a], i instanceof Array && s instanceof Array) {
                        if (!r.arrayEquals(i, s)) return !1
                    } else if (i !== s) return !1;
                return !0
            },
            clone: function(e) {
                if (r.isArray(e)) return e.map(r.clone);
                if (r.isObject(e)) {
                    for (var t = {}, a = Object.keys(e), n = a.length, i = 0; i < n; ++i) t[a[i]] = r.clone(e[a[i]]);
                    return t
                }
                return e
            },
            _merger: function(e, t, a, n) {
                var i = t[e],
                    s = a[e];
                r.isObject(i) && r.isObject(s) ? r.merge(i, s, n) : t[e] = r.clone(s)
            },
            _mergerIf: function(e, t, a) {
                var n = t[e],
                    i = a[e];
                r.isObject(n) && r.isObject(i) ? r.mergeIf(n, i) : t.hasOwnProperty(e) || (t[e] = r.clone(i))
            },
            merge: function(e, t, a) {
                var n, i, s, o, d, l = r.isArray(t) ? t : [t],
                    u = l.length;
                if (!r.isObject(e)) return e;
                for (n = (a = a || {}).merger || r._merger, i = 0; i < u; ++i)
                    if (t = l[i], r.isObject(t))
                        for (d = 0, o = (s = Object.keys(t)).length; d < o; ++d) n(s[d], e, t, a);
                return e
            },
            mergeIf: function(e, t) {
                return r.merge(e, t, {
                    merger: r._mergerIf
                })
            },
            extend: function(e) {
                for (var t = function(t, a) {
                        e[a] = t
                    }, a = 1, n = arguments.length; a < n; ++a) r.each(arguments[a], t);
                return e
            },
            inherits: function(e) {
                var t = this,
                    a = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                        return t.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = a
                    };
                return n.prototype = t.prototype, a.prototype = new n, a.extend = r.inherits, e && r.extend(a.prototype, e), a.__super__ = t.prototype, a
            }
        };
        e.exports = r, r.callCallback = r.callback, r.indexOf = function(e, t, a) {
            return Array.prototype.indexOf.call(e, t, a)
        }, r.getValueOrDefault = r.valueOrDefault, r.getValueAtIndexOrDefault = r.valueAtIndexOrDefault
    },
    "40fB": function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            var t = e.Scale.extend({
                getLabels: function() {
                    var e = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                },
                determineDataLimits: function() {
                    var e, t = this,
                        a = t.getLabels();
                    t.minIndex = 0, t.maxIndex = a.length - 1, void 0 !== t.options.ticks.min && (e = a.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = a.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = a[t.minIndex], t.max = a[t.maxIndex]
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
                        var s = n.getLabels();
                        e = a || e;
                        var o = s.indexOf(e);
                        t = -1 !== o ? o : t
                    }
                    if (n.isHorizontal()) {
                        var d = n.width / i,
                            l = d * (t - n.minIndex);
                        return r && (l += d / 2), n.left + Math.round(l)
                    }
                    var u = n.height / i,
                        c = u * (t - n.minIndex);
                    return r && (c += u / 2), n.top + Math.round(c)
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
            e.scaleService.registerScaleType("category", t, {
                position: "bottom"
            })
        }
    },
    "49jV": function(e, t) {},
    "4CR3": function(e, t) {},
    "4Uxm": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N");
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
                    var n, r, i, s, o, d = this.descriptors(e),
                        l = d.length;
                    for (n = 0; n < l; ++n)
                        if ("function" == typeof(o = (i = (r = d[n]).plugin)[t]) && ((s = [e].concat(a || [])).push(r.options), !1 === o.apply(i, s))) return !1;
                    return !0
                },
                descriptors: function(e) {
                    var t = e._plugins || (e._plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var a = [],
                        r = [],
                        s = e && e.config || {},
                        o = s.options && s.options.plugins || {};
                    return this._plugins.concat(s.plugins || []).forEach(function(e) {
                        if (-1 === a.indexOf(e)) {
                            var t = e.id,
                                s = o[t];
                            !1 !== s && (!0 === s && (s = i.clone(n.global.plugins[t])), a.push(e), r.push({
                                plugin: e,
                                options: s || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                }
            }, e.pluginService = e.plugins, e.PluginBase = r.extend({})
        }
    },
    "5CG2": function(e, t) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardStreamSummaryPage_StatCardGrid"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 138
            }
        };
        a.loc.source = {
            body: "query DashboardStreamSummaryPage_StatCardGrid($channelLogin: String) {\nuser(login: $channelLogin) {\nid\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = a
    },
    "5ImO": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N");
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
                        }), r = n.angle, s = n.distance, o = a.startAngle, d = a.endAngle; d < o;) d += 2 * Math.PI;
                    for (; r > d;) r -= 2 * Math.PI;
                    for (; r < o;) r += 2 * Math.PI;
                    var l = r >= o && r <= d,
                        u = s >= a.innerRadius && s <= a.outerRadius;
                    return l && u
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
    "5Omq": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("se", {
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
        })(a("PJh5"))
    },
    "5j66": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("km", {
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
        })(a("PJh5"))
    },
    "5rtz": function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("6sO2"),
            i = a("BoWu"),
            s = a("dPMn"),
            o = a("BSOV"),
            d = a("zjE0"),
            l = a("FeZP"),
            u = a("xygp"),
            c = a("vTHh"),
            m = a("Odds"),
            h = {
                "data-test-selector": "referral-percentage"
            },
            _ = function(e) {
                return e
            },
            f = function(e) {
                var t = e.streamSummaries,
                    a = e.isLoading,
                    o = e.linkToDetails;
                if (a) return n.createElement(m._8, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, n.createElement(m._14, {
                    height: 448
                }));
                var h = Object(u.a)(t.map(function(e) {
                        return e.videoPlayInternalTwitchReferrers
                    })),
                    f = Object(u.a)(t.map(function(e) {
                        return e.videoPlayInternalChannelsReferrers
                    })),
                    y = Object(u.a)(t.map(function(e) {
                        return e.videoPlayExternalReferrers
                    })),
                    g = n.createElement(s.a, null);
                return (h.totals || f.totals || y.totals) && (g = n.createElement(n.Fragment, null, n.createElement(m._35, {
                    borderBottom: !0,
                    padding: {
                        bottom: 1
                    }
                }, n.createElement(c.a, {
                    referrals: h.items.slice(0, 3),
                    totals: h.totals,
                    translationFunc: i.b,
                    title: Object(r.d)("Twitch", "ChannelAnalyticsReferralPanel")
                }), n.createElement(c.a, {
                    referrals: f.items.slice(0, 3),
                    totals: f.totals,
                    translationFunc: _,
                    title: Object(r.d)("Channels", "ChannelAnalyticsReferralPanel")
                }), n.createElement(c.a, {
                    referrals: y.items.slice(0, 3),
                    totals: y.totals,
                    translationFunc: i.a,
                    title: Object(r.d)("External", "ChannelAnalyticsReferralPanel")
                })), n.createElement(l.a, {
                    onClick: p,
                    message: Object(r.d)("View details", "ChannelAnalyticsReferralPanel"),
                    linkTo: o
                }))), n.createElement(d.a, {
                    title: Object(r.d)("Where did my views come from?", "ChannelAnalyticsReferralPanel")
                }, g)
            };

        function p() {
            Object(o.b)({
                action: o.a.ViewDetailsReferrers
            })
        }
        a.d(t, !1, function() {
            return h
        }), a.d(t, "a", function() {
            return f
        })
    },
    "5t69": function(e, t) {},
    "5vPg": function(e, t, a) {
        (function(e) {
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

            function n(e, t, a, n) {
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
            e.defineLocale("mr", {
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
        })(a("PJh5"))
    },
    "6cf8": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("ky", {
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
                    return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })(a("PJh5"))
    },
    "6rMk": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N");
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
                    var r, i, s = this.animations;
                    for (t.chart = e, n || (e.animating = !0), r = 0, i = s.length; r < i; ++r)
                        if (s[r].chart === e) return void(s[r] = t);
                    s.push(t), 1 === s.length && this.requestAnimationFrame()
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
                    for (var t, a, n = this.animations, r = 0; r < n.length;) a = (t = n[r]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), i.callback(t.render, [a, t], a), i.callback(t.onAnimationProgress, [t], a), t.currentStep >= t.numSteps ? (i.callback(t.onAnimationComplete, [t], a), a.animating = !1, n.splice(r, 1)) : ++r
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
    "72Lu": function(e, t, a) {
        "use strict";
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
    "7LV+": function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

            function n(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }

            function r(e, t, a) {
                var r = e + " ";
                switch (a) {
                    case "m":
                        return t ? "minuta" : "minutę";
                    case "mm":
                        return r + (n(e) ? "minuty" : "minut");
                    case "h":
                        return t ? "godzina" : "godzinę";
                    case "hh":
                        return r + (n(e) ? "godziny" : "godzin");
                    case "MM":
                        return r + (n(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return r + (n(e) ? "lata" : "lat")
                }
            }
            e.defineLocale("pl", {
                months: function(e, n) {
                    return e ? "" === n ? "(" + a[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t
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
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: r,
                    y: "rok",
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })(a("PJh5"))
    },
    "7MHZ": function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            e.defineLocale("es-do", {
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
        })(a("PJh5"))
    },
    "7OnE": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("ar-sa", {
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
        })(a("PJh5"))
    },
    "7Q8x": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ss", {
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
        })(a("PJh5"))
    },
    "8uqi": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("L5rj"),
            i = a("iO9N");
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
                    var a, n, r, s = this,
                        o = s.getMeta(),
                        d = o.dataset,
                        l = o.data || [],
                        u = s.chart.options,
                        c = u.elements.line,
                        m = s.getScaleForId(o.yAxisID),
                        h = s.getDataset(),
                        _ = t(h, u);
                    for (_ && (r = d.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), d._scale = m, d._datasetIndex = s.index, d._children = l, d._model = {
                            spanGaps: h.spanGaps ? h.spanGaps : u.spanGaps,
                            tension: r.tension ? r.tension : i.valueOrDefault(h.lineTension, c.tension),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : h.backgroundColor || c.backgroundColor,
                            borderWidth: r.borderWidth ? r.borderWidth : h.borderWidth || c.borderWidth,
                            borderColor: r.borderColor ? r.borderColor : h.borderColor || c.borderColor,
                            borderCapStyle: r.borderCapStyle ? r.borderCapStyle : h.borderCapStyle || c.borderCapStyle,
                            borderDash: r.borderDash ? r.borderDash : h.borderDash || c.borderDash,
                            borderDashOffset: r.borderDashOffset ? r.borderDashOffset : h.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : h.borderJoinStyle || c.borderJoinStyle,
                            fill: r.fill ? r.fill : void 0 !== h.fill ? h.fill : c.fill,
                            steppedLine: r.steppedLine ? r.steppedLine : i.valueOrDefault(h.steppedLine, c.stepped),
                            cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : i.valueOrDefault(h.cubicInterpolationMode, c.cubicInterpolationMode)
                        }, d.pivot()), a = 0, n = l.length; a < n; ++a) s.updateElement(l[a], a, e);
                    for (_ && 0 !== d._model.tension && s.updateBezierControlPoints(), a = 0, n = l.length; a < n; ++a) l[a].pivot()
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
                    var n, r, s = this,
                        o = s.getMeta(),
                        d = e.custom || {},
                        l = s.getDataset(),
                        u = s.index,
                        c = l.data[t],
                        m = s.getScaleForId(o.yAxisID),
                        h = s.getScaleForId(o.xAxisID),
                        _ = s.chart.options.elements.point;
                    void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), n = h.getPixelForValue("object" == typeof c ? c : NaN, t, u), r = a ? m.getBasePixel() : s.calculatePointY(c, t, u), e._xScale = h, e._yScale = m, e._datasetIndex = u, e._index = t, e._model = {
                        x: n,
                        y: r,
                        skip: d.skip || isNaN(n) || isNaN(r),
                        radius: d.radius || i.valueAtIndexOrDefault(l.pointRadius, t, _.radius),
                        pointStyle: d.pointStyle || i.valueAtIndexOrDefault(l.pointStyle, t, _.pointStyle),
                        backgroundColor: s.getPointBackgroundColor(e, t),
                        borderColor: s.getPointBorderColor(e, t),
                        borderWidth: s.getPointBorderWidth(e, t),
                        tension: o.dataset._model ? o.dataset._model.tension : 0,
                        steppedLine: !!o.dataset._model && o.dataset._model.steppedLine,
                        hitRadius: d.hitRadius || i.valueAtIndexOrDefault(l.pointHitRadius, t, _.hitRadius)
                    }
                },
                calculatePointY: function(e, t, a) {
                    var n, r, i, s = this.chart,
                        o = this.getMeta(),
                        d = this.getScaleForId(o.yAxisID),
                        l = 0,
                        u = 0;
                    if (d.options.stacked) {
                        for (n = 0; n < a; n++)
                            if (r = s.data.datasets[n], "line" === (i = s.getDatasetMeta(n)).type && i.yAxisID === d.id && s.isDatasetVisible(n)) {
                                var c = Number(d.getRightValue(r.data[t]));
                                c < 0 ? u += c || 0 : l += c || 0
                            }
                        var m = Number(d.getRightValue(e));
                        return m < 0 ? d.getPixelForValue(u + m) : d.getPixelForValue(l + m)
                    }
                    return d.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    var e, t, a, n, r = this.getMeta(),
                        s = this.chart.chartArea,
                        o = r.data || [];

                    function d(e, t, a) {
                        return Math.max(Math.min(e, a), t)
                    }
                    if (r.dataset._model.spanGaps && (o = o.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === r.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(o);
                    else
                        for (e = 0, t = o.length; e < t; ++e) a = o[e]._model, n = i.splineCurve(i.previousItem(o, e)._model, a, i.nextItem(o, e)._model, r.dataset._model.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
                    if (this.chart.options.elements.line.capBezierPoints)
                        for (e = 0, t = o.length; e < t; ++e)(a = o[e]._model).controlPointPreviousX = d(a.controlPointPreviousX, s.left, s.right), a.controlPointPreviousY = d(a.controlPointPreviousY, s.top, s.bottom), a.controlPointNextX = d(a.controlPointNextX, s.left, s.right), a.controlPointNextY = d(a.controlPointNextY, s.top, s.bottom)
                },
                draw: function() {
                    var e = this.chart,
                        a = this.getMeta(),
                        n = a.data || [],
                        r = e.chartArea,
                        s = n.length,
                        o = 0;
                    for (i.canvas.clipArea(e.ctx, r), t(this.getDataset(), e.options) && a.dataset.draw(), i.canvas.unclipArea(e.ctx); o < s; ++o) n[o].draw(r)
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
                        s = e._model;
                    void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), s.radius = r.radius || i.valueAtIndexOrDefault(a.pointRadius, n, t.chart.options.elements.point.radius), s.backgroundColor = t.getPointBackgroundColor(e, n), s.borderColor = t.getPointBorderColor(e, n), s.borderWidth = t.getPointBorderWidth(e, n)
                }
            })
        }
    },
    "8v14": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("de-at", {
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
        })(a("PJh5"))
    },
    A5K1: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("L5rj"),
            i = a("iO9N");
        n._set("global", {
            plugins: {
                filler: {
                    propagate: !0
                }
            }
        }), e.exports = function() {
            var e = {
                dataset: function(e) {
                    var t = e.fill,
                        a = e.chart,
                        n = a.getDatasetMeta(t),
                        r = n && a.isDatasetVisible(t) && n.dataset._children || [],
                        i = r.length || 0;
                    return i ? function(e, t) {
                        return t < i && r[t]._view || null
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

            function t(e, t, a) {
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

            function a(e) {
                var t, a = e.el._model || {},
                    n = e.el._scale || {},
                    r = e.fill,
                    i = null;
                if (isFinite(r)) return null;
                if ("start" === r ? i = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === r ? i = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? i = a.scaleZero : n.getBasePosition ? i = n.getBasePosition() : n.getBasePixel && (i = n.getBasePixel()), void 0 !== i && null !== i) {
                    if (void 0 !== i.x && void 0 !== i.y) return i;
                    if ("number" == typeof i && isFinite(i)) return {
                        x: (t = n.isHorizontal()) ? i : null,
                        y: t ? null : i
                    }
                }
                return null
            }

            function s(e, t, a) {
                var n, r = e[t].fill,
                    i = [t];
                if (!a) return r;
                for (; !1 !== r && -1 === i.indexOf(r);) {
                    if (!isFinite(r)) return r;
                    if (!(n = e[r])) return !1;
                    if (n.visible) return r;
                    i.push(r), r = n.fill
                }
                return !1
            }

            function o(t) {
                var a = t.fill,
                    n = "dataset";
                return !1 === a ? null : (isFinite(a) || (n = "boundary"), e[n](t))
            }

            function d(e) {
                return e && !e.skip
            }

            function l(e, t, a, n, r) {
                var s;
                if (n && r) {
                    for (e.moveTo(t[0].x, t[0].y), s = 1; s < n; ++s) i.canvas.lineTo(e, t[s - 1], t[s]);
                    for (e.lineTo(a[r - 1].x, a[r - 1].y), s = r - 1; s > 0; --s) i.canvas.lineTo(e, a[s], a[s - 1], !0)
                }
            }
            return {
                id: "filler",
                afterDatasetsUpdate: function(e, n) {
                    var i, d, l, u, c = (e.data.datasets || []).length,
                        m = n.propagate,
                        h = [];
                    for (d = 0; d < c; ++d) u = null, (l = (i = e.getDatasetMeta(d)).dataset) && l._model && l instanceof r.Line && (u = {
                        visible: e.isDatasetVisible(d),
                        fill: t(l, d, c),
                        chart: e,
                        el: l
                    }), i.$filler = u, h.push(u);
                    for (d = 0; d < c; ++d)(u = h[d]) && (u.fill = s(h, d, m), u.boundary = a(u), u.mapper = o(u))
                },
                beforeDatasetDraw: function(e, t) {
                    var a = t.meta.$filler;
                    if (a) {
                        var r = e.ctx,
                            s = a.el,
                            o = s._view,
                            u = s._children || [],
                            c = a.mapper,
                            m = o.backgroundColor || n.global.defaultColor;
                        c && m && u.length && (i.canvas.clipArea(r, e.chartArea), function(e, t, a, n, r, i) {
                            var s, o, u, c, m, h, _, f = t.length,
                                p = n.spanGaps,
                                y = [],
                                g = [],
                                M = 0,
                                v = 0;
                            for (e.beginPath(), s = 0, o = f + !!i; s < o; ++s) m = a(c = t[u = s % f]._view, u, n), h = d(c), _ = d(m), h && _ ? (M = y.push(c), v = g.push(m)) : M && v && (p ? (h && y.push(c), _ && g.push(m)) : (l(e, y, g, M, v), M = v = 0, y = [], g = []));
                            l(e, y, g, M, v), e.closePath(), e.fillStyle = r, e.fill()
                        }(r, u, c, o, m, s._loop), i.canvas.unclipArea(r))
                    }
                }
            }
        }
    },
    AFDx: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1");

        function i(e) {
            return void 0 !== e._view.width
        }

        function s(e) {
            var t, a, n, r, s = e._view;
            if (i(e)) {
                var o = s.width / 2;
                t = s.x - o, a = s.x + o, n = Math.min(s.y, s.base), r = Math.max(s.y, s.base)
            } else {
                var d = s.height / 2;
                t = Math.min(s.x, s.base), a = Math.max(s.x, s.base), n = s.y - d, r = s.y + d
            }
            return {
                left: t,
                top: n,
                right: a,
                bottom: r
            }
        }
        n._set("global", {
            elements: {
                rectangle: {
                    backgroundColor: n.global.defaultColor,
                    borderColor: n.global.defaultColor,
                    borderSkipped: "bottom",
                    borderWidth: 0
                }
            }
        }), e.exports = r.extend({
            draw: function() {
                var e, t, a, n, r, i, s, o = this._chart.ctx,
                    d = this._view,
                    l = d.borderWidth;
                if (d.horizontal ? (e = d.base, t = d.x, a = d.y - d.height / 2, n = d.y + d.height / 2, r = t > e ? 1 : -1, i = 1, s = d.borderSkipped || "left") : (e = d.x - d.width / 2, t = d.x + d.width / 2, a = d.y, r = 1, i = (n = d.base) > a ? 1 : -1, s = d.borderSkipped || "bottom"), l) {
                    var u = Math.min(Math.abs(e - t), Math.abs(a - n)),
                        c = (l = l > u ? u : l) / 2,
                        m = e + ("left" !== s ? c * r : 0),
                        h = t + ("right" !== s ? -c * r : 0),
                        _ = a + ("top" !== s ? c * i : 0),
                        f = n + ("bottom" !== s ? -c * i : 0);
                    m !== h && (a = _, n = f), _ !== f && (e = m, t = h)
                }
                o.beginPath(), o.fillStyle = d.backgroundColor, o.strokeStyle = d.borderColor, o.lineWidth = l;
                var p = [
                        [e, n],
                        [e, a],
                        [t, a],
                        [t, n]
                    ],
                    y = ["bottom", "left", "top", "right"].indexOf(s, 0);

                function g(e) {
                    return p[(y + e) % 4]
                } - 1 === y && (y = 0);
                var M = g(0);
                o.moveTo(M[0], M[1]);
                for (var v = 1; v < 4; v++) M = g(v), o.lineTo(M[0], M[1]);
                o.fill(), l && o.stroke()
            },
            height: function() {
                var e = this._view;
                return e.base - e.y
            },
            inRange: function(e, t) {
                var a = !1;
                if (this._view) {
                    var n = s(this);
                    a = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                }
                return a
            },
            inLabelRange: function(e, t) {
                if (!this._view) return !1;
                var a = s(this);
                return i(this) ? e >= a.left && e <= a.right : t >= a.top && t <= a.bottom
            },
            inXRange: function(e) {
                var t = s(this);
                return e >= t.left && e <= t.right
            },
            inYRange: function(e) {
                var t = s(this);
                return e >= t.top && e <= t.bottom
            },
            getCenterPoint: function() {
                var e, t, a = this._view;
                return i(this) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), {
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
    ALEw: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("en-ie", {
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
        })(a("PJh5"))
    },
    Ab7C: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("mk", {
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
        })(a("PJh5"))
    },
    AoDM: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("pt-br", {
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
        })(a("PJh5"))
    },
    BEem: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ar-tn", {
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
        })(a("PJh5"))
    },
    BSOV: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        }), t.b = function(e) {
            r.n.track(i.SpadeEventType.ChannelAnalyticsInteraction, e)
        };
        var n, r = a("6sO2"),
            i = a("vH/s");
        ! function(e) {
            e.OpenDatePicker = "open_date_picker", e.VisitPreviousDateRange = "visit_previous_date_range", e.VisitNextDateRange = "visit_next_date_range", e.ExportDataRevenue = "export_data_revenue", e.ExportDataStream = "export_data_stream", e.ViewDetailsReferrers = "view_details_referrers", e.ViewDetailsClips = "view_details_clips", e.TopStreamsSelectAvgViewers = "topstreams_select_avg_viewers", e.TopStreamsSelectNewFollowers = "topstreams_select_new_followers", e.TopStreamsSelectNewSubscribers = "topstreams_select_new_subscribers", e.TopStreamsStream = "topstreams_stream", e.TopClipsClip = "topclips_clip", e.EmailMeMySubs = "email_me_my_subs", e.EmailToSubs = "email_to_subs"
        }(n || (n = {}))
    },
    BbgG: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("zh-tw", {
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
        })(a("PJh5"))
    },
    Bp2f: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl-be", {
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
        })(a("PJh5"))
    },
    C7av: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("nn", {
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
        })(a("PJh5"))
    },
    CFqe: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("el", {
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
                calendar: function(e, t) {
                    var a, n = this._calendarEl[e],
                        r = t && t.hours();
                    return ((a = n) instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)), n.replace("{}", r % 12 == 1 ? "στη" : "στις")
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
        })(a("PJh5"))
    },
    D6QB: function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("6sO2"),
            i = a("MDGG"),
            s = a("Odds"),
            o = function(e) {
                return 0 === e.achievement.progress ? n.createElement("span", null) : e.achievement.completedAt ? n.createElement(s._8, {
                    display: s.R.InlineFlex,
                    alignItems: s.c.Center
                }, n.createElement(i.a, {
                    date: e.achievement.completedAt
                })) : n.createElement(s._35, {
                    className: "ach-card__pill-wrapper",
                    fontSize: s.V.Size5
                }, n.createElement(s._12, {
                    label: Object(r.e)(e.achievement.progressRatio, "percent")
                }))
            };
        a.d(t, "a", function() {
            return o
        })
    },
    DN1M: function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            r = "$chartjs",
            i = "chartjs-",
            s = i + "render-monitor",
            o = i + "render-animation",
            d = ["animationstart", "webkitAnimationStart"],
            l = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            };

        function u(e, t) {
            var a = n.getStyle(e, t),
                r = a && a.match(/^(\d+)(\.\d+)?px$/);
            return r ? Number(r[1]) : void 0
        }
        var c = !! function() {
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
        }() && {
            passive: !0
        };

        function m(e, t, a) {
            e.addEventListener(t, a, c)
        }

        function h(e, t, a) {
            e.removeEventListener(t, a, c)
        }

        function _(e, t, a, n, r) {
            return {
                type: e,
                chart: t,
                native: r || null,
                x: void 0 !== a ? a : null,
                y: void 0 !== n ? n : null
            }
        }

        function f(e, t, a) {
            var l, u, c, h, f = e[r] || (e[r] = {}),
                p = f.resizer = function(e) {
                    var t = document.createElement("div"),
                        a = i + "size-monitor",
                        n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    t.style.cssText = n, t.className = a, t.innerHTML = '<div class="' + a + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + a + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                    var r = t.childNodes[0],
                        s = t.childNodes[1];
                    t._reset = function() {
                        r.scrollLeft = 1e6, r.scrollTop = 1e6, s.scrollLeft = 1e6, s.scrollTop = 1e6
                    };
                    var o = function() {
                        t._reset(), e()
                    };
                    return m(r, "scroll", o.bind(r, "expand")), m(s, "scroll", o.bind(s, "shrink")), t
                }((l = function() {
                    if (f.resizer) return t(_("resize", a))
                }, c = !1, h = [], function() {
                    h = Array.prototype.slice.call(arguments), u = u || this, c || (c = !0, n.requestAnimFrame.call(window, function() {
                        c = !1, l.apply(u, h)
                    }))
                }));
            ! function(e, t) {
                var a = e[r] || (e[r] = {}),
                    i = a.renderProxy = function(e) {
                        e.animationName === o && t()
                    };
                n.each(d, function(t) {
                    m(e, t, i)
                }), a.reflow = !!e.offsetParent, e.classList.add(s)
            }(e, function() {
                if (f.resizer) {
                    var t = e.parentNode;
                    t && t !== p.parentNode && t.insertBefore(p, t.firstChild), p._reset()
                }
            })
        }

        function p(e) {
            var t = e[r] || {},
                a = t.resizer;
            delete t.resizer,
                function(e) {
                    var t = e[r] || {},
                        a = t.renderProxy;
                    a && (n.each(d, function(t) {
                        h(e, t, a)
                    }), delete t.renderProxy), e.classList.remove(s)
                }(e), a && a.parentNode && a.parentNode.removeChild(a)
        }
        e.exports = {
            _enabled: "undefined" != typeof window && "undefined" != typeof document,
            initialize: function() {
                var e, t, a, n = "from{opacity:0.99}to{opacity:1}";
                t = "@-webkit-keyframes " + o + "{" + n + "}@keyframes " + o + "{" + n + "}." + s + "{-webkit-animation:" + o + " 0.001s;animation:" + o + " 0.001s;}", a = (e = this)._style || document.createElement("style"), e._style || (e._style = a, t = "/* Chart.js */\n" + t, a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a)), a.appendChild(document.createTextNode(t))
            },
            acquireContext: function(e, t) {
                "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                var a = e && e.getContext && e.getContext("2d");
                return a && a.canvas === e ? (function(e, t) {
                    var a = e.style,
                        n = e.getAttribute("height"),
                        i = e.getAttribute("width");
                    if (e[r] = {
                            initial: {
                                height: n,
                                width: i,
                                style: {
                                    display: a.display,
                                    height: a.height,
                                    width: a.width
                                }
                            }
                        }, a.display = a.display || "block", null === i || "" === i) {
                        var s = u(e, "width");
                        void 0 !== s && (e.width = s)
                    }
                    if (null === n || "" === n)
                        if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                        else {
                            var o = u(e, "height");
                            void 0 !== s && (e.height = o)
                        }
                }(e, t), a) : null
            },
            releaseContext: function(e) {
                var t = e.canvas;
                if (t[r]) {
                    var a = t[r].initial;
                    ["height", "width"].forEach(function(e) {
                        var r = a[e];
                        n.isNullOrUndef(r) ? t.removeAttribute(e) : t.setAttribute(e, r)
                    }), n.each(a.style || {}, function(e, a) {
                        t.style[a] = e
                    }), t.width = t.width, delete t[r]
                }
            },
            addEventListener: function(e, t, a) {
                var i = e.canvas;
                if ("resize" !== t) {
                    var s = a[r] || (a[r] = {});
                    m(i, t, (s.proxies || (s.proxies = {}))[e.id + "_" + t] = function(t) {
                        a(function(e, t) {
                            var a = l[e.type] || e.type,
                                r = n.getRelativePosition(e, t);
                            return _(a, t, r.x, r.y, e)
                        }(t, e))
                    })
                } else f(i, a, e)
            },
            removeEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" !== t) {
                    var i = ((a[r] || {}).proxies || {})[e.id + "_" + t];
                    i && h(n, t, i)
                } else p(n)
            }
        }, n.addEvent = m, n.removeEvent = h
    },
    DNvj: function(e, t, a) {
        "use strict";
        t.a = function(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, o, d, l;
                return n.__generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return a = "/kraken/clips/top", o = r.stringify(n.__assign({
                                channel: e
                            }, Object(i.i)(t))), d = [a, o].join("?"), [4, Object(s.c)({
                                path: d
                            })];
                        case 1:
                            return (l = u.sent()).isError() ? [2, {
                                isError: !0,
                                topClips: []
                            }] : [2, {
                                isError: !1,
                                topClips: (c = l.body, c.clips.map(function(e) {
                                    var t = {
                                        title: e.title,
                                        views: e.views,
                                        url: e.url,
                                        curatorName: e.curator.display_name,
                                        thumbnailURL: e.thumbnails.tiny
                                    };
                                    return t
                                }))
                            }]
                    }
                    var c
                })
            })
        };
        var n = a("TToO"),
            r = a("OAwv"),
            i = (a.n(r), a("u4Vk")),
            s = a("PGY2")
    },
    DOkx: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("de", {
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
        })(a("PJh5"))
    },
    DSXN: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("sw", {
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
        })(a("PJh5"))
    },
    Db81: function(e, t, a) {
        "use strict";
        var n = a("PJh5");
        n = "function" == typeof n ? n : window.moment;
        var r = a("k7DW"),
            i = a("iO9N"),
            s = Number.MIN_SAFE_INTEGER || -9007199254740991,
            o = Number.MAX_SAFE_INTEGER || 9007199254740991,
            d = {
                millisecond: {
                    common: !0,
                    size: 1,
                    steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                },
                second: {
                    common: !0,
                    size: 1e3,
                    steps: [1, 2, 5, 10, 30]
                },
                minute: {
                    common: !0,
                    size: 6e4,
                    steps: [1, 2, 5, 10, 30]
                },
                hour: {
                    common: !0,
                    size: 36e5,
                    steps: [1, 2, 3, 6, 12]
                },
                day: {
                    common: !0,
                    size: 864e5,
                    steps: [1, 2, 5]
                },
                week: {
                    common: !1,
                    size: 6048e5,
                    steps: [1, 2, 3, 4]
                },
                month: {
                    common: !0,
                    size: 2628e6,
                    steps: [1, 2, 3]
                },
                quarter: {
                    common: !1,
                    size: 7884e6,
                    steps: [1, 2, 3, 4]
                },
                year: {
                    common: !0,
                    size: 3154e7
                }
            },
            l = Object.keys(d);

        function u(e, t) {
            return e - t
        }

        function c(e) {
            var t, a, n, r = {},
                i = [];
            for (t = 0, a = e.length; t < a; ++t) r[n = e[t]] || (r[n] = !0, i.push(n));
            return i
        }

        function m(e, t, a, n) {
            var r = function(e, t, a) {
                    for (var n, r, i, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                        if (r = e[(n = s + o >> 1) - 1] || null, i = e[n], !r) return {
                            lo: null,
                            hi: i
                        };
                        if (i[t] < a) s = n + 1;
                        else {
                            if (!(r[t] > a)) return {
                                lo: r,
                                hi: i
                            };
                            o = n - 1
                        }
                    }
                    return {
                        lo: i,
                        hi: null
                    }
                }(e, t, a),
                i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                o = s[t] - i[t],
                d = o ? (a - i[t]) / o : 0,
                l = (s[n] - i[n]) * d;
            return i[n] + l
        }

        function h(e, t) {
            var a = t.parser,
                r = t.parser || t.format;
            return "function" == typeof a ? a(e) : "string" == typeof e && "string" == typeof r ? n(e, r) : (e instanceof n || (e = n(e)), e.isValid() ? e : "function" == typeof r ? r(e) : e)
        }

        function _(e, t) {
            if (i.isNullOrUndef(e)) return null;
            var a = t.options.time,
                n = h(t.getRightValue(e), a);
            return n.isValid() ? (a.round && n.startOf(a.round), n.valueOf()) : null
        }

        function f(e) {
            for (var t = l.indexOf(e) + 1, a = l.length; t < a; ++t)
                if (d[l[t]].common) return l[t]
        }

        function p(e, t, a, r) {
            var s, u = r.time,
                c = u.unit || function(e, t, a, n) {
                    var r, i, s, u = l.length;
                    for (r = l.indexOf(e); r < u - 1; ++r)
                        if (s = (i = d[l[r]]).steps ? i.steps[i.steps.length - 1] : o, i.common && Math.ceil((a - t) / (s * i.size)) <= n) return l[r];
                    return l[u - 1]
                }(u.minUnit, e, t, a),
                m = f(c),
                h = i.valueOrDefault(u.stepSize, u.unitStepSize),
                _ = "week" === c && u.isoWeekday,
                p = r.ticks.major.enabled,
                y = d[c],
                g = n(e),
                M = n(t),
                v = [];
            for (h || (h = function(e, t, a, n) {
                    var r, i, s, o = t - e,
                        l = d[a],
                        u = l.size,
                        c = l.steps;
                    if (!c) return Math.ceil(o / ((n || 1) * u));
                    for (r = 0, i = c.length; r < i && (s = c[r], !(Math.ceil(o / (u * s)) <= n)); ++r);
                    return s
                }(e, t, c, a)), _ && (g = g.isoWeekday(_), M = M.isoWeekday(_)), g = g.startOf(_ ? "day" : c), (M = M.startOf(_ ? "day" : c)) < t && M.add(1, c), s = n(g), p && m && !_ && !u.round && (s.startOf(m), s.add(~~((g - s) / (y.size * h)) * h, c)); s < M; s.add(h, c)) v.push(+s);
            return v.push(+s), v
        }
        e.exports = function(e) {
            var t = e.Scale.extend({
                initialize: function() {
                    if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                    this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                },
                update: function() {
                    var t = this.options;
                    return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(this, arguments)
                },
                getRightValue: function(t) {
                    return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                },
                determineDataLimits: function() {
                    var e, t, a, r, d, l, m = this,
                        h = m.chart,
                        f = m.options.time,
                        p = o,
                        y = s,
                        g = [],
                        M = [],
                        v = [];
                    for (e = 0, a = h.data.labels.length; e < a; ++e) v.push(_(h.data.labels[e], m));
                    for (e = 0, a = (h.data.datasets || []).length; e < a; ++e)
                        if (h.isDatasetVisible(e))
                            if (d = h.data.datasets[e].data, i.isObject(d[0]))
                                for (M[e] = [], t = 0, r = d.length; t < r; ++t) l = _(d[t], m), g.push(l), M[e][t] = l;
                            else g.push.apply(g, v), M[e] = v.slice(0);
                    else M[e] = [];
                    v.length && (v = c(v).sort(u), p = Math.min(p, v[0]), y = Math.max(y, v[v.length - 1])), g.length && (g = c(g).sort(u), p = Math.min(p, g[0]), y = Math.max(y, g[g.length - 1])), p = _(f.min, m) || p, y = _(f.max, m) || y, p = p === o ? +n().startOf("day") : p, y = y === s ? +n().endOf("day") + 1 : y, m.min = Math.min(p, y), m.max = Math.max(p + 1, y), m._horizontal = m.isHorizontal(), m._table = [], m._timestamps = {
                        data: g,
                        datasets: M,
                        labels: v
                    }
                },
                buildTicks: function() {
                    var e, t, a, r = this,
                        i = r.min,
                        s = r.max,
                        o = r.options,
                        u = o.time,
                        c = [],
                        h = [];
                    switch (o.ticks.source) {
                        case "data":
                            c = r._timestamps.data;
                            break;
                        case "labels":
                            c = r._timestamps.labels;
                            break;
                        case "auto":
                        default:
                            c = p(i, s, r.getLabelCapacity(i), o)
                    }
                    for ("ticks" === o.bounds && c.length && (i = c[0], s = c[c.length - 1]), i = _(u.min, r) || i, s = _(u.max, r) || s, e = 0, t = c.length; e < t; ++e)(a = c[e]) >= i && a <= s && h.push(a);
                    return r.min = i, r.max = s, r._unit = u.unit || function(e, t, a, r) {
                            var i, s, o = n.duration(n(r).diff(n(a)));
                            for (i = l.length - 1; i >= l.indexOf(t); i--)
                                if (s = l[i], d[s].common && o.as(s) >= e.length) return s;
                            return l[t ? l.indexOf(t) : 0]
                        }(h, u.minUnit, r.min, r.max), r._majorUnit = f(r._unit), r._table = function(e, t, a, n) {
                            if ("linear" === n || !e.length) return [{
                                time: t,
                                pos: 0
                            }, {
                                time: a,
                                pos: 1
                            }];
                            var r, i, s, o, d, l = [],
                                u = [t];
                            for (r = 0, i = e.length; r < i; ++r)(o = e[r]) > t && o < a && u.push(o);
                            for (u.push(a), r = 0, i = u.length; r < i; ++r) d = u[r + 1], s = u[r - 1], o = u[r], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({
                                time: o,
                                pos: r / (i - 1)
                            });
                            return l
                        }(r._timestamps.data, i, s, o.distribution), r._offsets = function(e, t, a, n, r) {
                            var i, s, o = 0,
                                d = 0;
                            return r.offset && t.length && (r.time.min || (i = t.length > 1 ? t[1] : n, s = t[0], o = (m(e, "time", i, "pos") - m(e, "time", s, "pos")) / 2), r.time.max || (i = t[t.length - 1], s = t.length > 1 ? t[t.length - 2] : a, d = (m(e, "time", i, "pos") - m(e, "time", s, "pos")) / 2)), {
                                left: o,
                                right: d
                            }
                        }(r._table, h, i, s, o),
                        function(e, t) {
                            var a, r, i, s, o = [];
                            for (a = 0, r = e.length; a < r; ++a) i = e[a], s = !!t && i === +n(i).startOf(t), o.push({
                                value: i,
                                major: s
                            });
                            return o
                        }(h, r._majorUnit)
                },
                getLabelForIndex: function(e, t) {
                    var a = this.chart.data,
                        n = this.options.time,
                        r = a.labels && e < a.labels.length ? a.labels[e] : "",
                        s = a.datasets[t].data[e];
                    return i.isObject(s) && (r = this.getRightValue(s)), n.tooltipFormat && (r = h(r, n).format(n.tooltipFormat)), r
                },
                tickFormatFunction: function(e, t, a, n) {
                    var r = this.options,
                        s = e.valueOf(),
                        o = r.time.displayFormats,
                        d = o[this._unit],
                        l = this._majorUnit,
                        u = o[l],
                        c = e.clone().startOf(l).valueOf(),
                        m = r.ticks.major,
                        h = m.enabled && l && u && s === c,
                        _ = e.format(n || (h ? u : d)),
                        f = h ? m : r.ticks.minor,
                        p = i.valueOrDefault(f.callback, f.userCallback);
                    return p ? p(_, t, a) : _
                },
                convertTicksToLabels: function(e) {
                    var t, a, r = [];
                    for (t = 0, a = e.length; t < a; ++t) r.push(this.tickFormatFunction(n(e[t].value), t, e));
                    return r
                },
                getPixelForOffset: function(e) {
                    var t = this,
                        a = t._horizontal ? t.width : t.height,
                        n = t._horizontal ? t.left : t.top,
                        r = m(t._table, "time", e, "pos");
                    return n + a * (t._offsets.left + r) / (t._offsets.left + 1 + t._offsets.right)
                },
                getPixelForValue: function(e, t, a) {
                    var n = null;
                    if (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]), null === n && (n = _(e, this)), null !== n) return this.getPixelForOffset(n)
                },
                getPixelForTick: function(e) {
                    var t = this.getTicks();
                    return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                },
                getValueForPixel: function(e) {
                    var t = this,
                        a = t._horizontal ? t.width : t.height,
                        r = t._horizontal ? t.left : t.top,
                        i = (a ? (e - r) / a : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                        s = m(t._table, "pos", i, "time");
                    return n(s)
                },
                getLabelWidth: function(e) {
                    var t = this.options.ticks,
                        a = this.ctx.measureText(e).width,
                        n = i.toRadians(t.maxRotation),
                        s = Math.cos(n),
                        o = Math.sin(n);
                    return a * s + i.valueOrDefault(t.fontSize, r.global.defaultFontSize) * o
                },
                getLabelCapacity: function(e) {
                    var t = this,
                        a = t.options.time.displayFormats.millisecond,
                        r = t.tickFormatFunction(n(e), 0, [], a),
                        i = t.getLabelWidth(r),
                        s = t.isHorizontal() ? t.width : t.height;
                    return Math.floor(s / i)
                }
            });
            e.scaleService.registerScaleType("time", t, {
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
            })
        }
    },
    ETHv: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("hi", {
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
        })(a("PJh5"))
    },
    "F+2e": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("my", {
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
        })(a("PJh5"))
    },
    F4U8: function(e, t, a) {
        "use strict";
        var n = a("3n1n");
        t = e.exports = {
            clear: function(e) {
                e.ctx.clearRect(0, 0, e.width, e.height)
            },
            roundedRect: function(e, t, a, n, r, i) {
                if (i) {
                    var s = Math.min(i, n / 2),
                        o = Math.min(i, r / 2);
                    e.moveTo(t + s, a), e.lineTo(t + n - s, a), e.quadraticCurveTo(t + n, a, t + n, a + o), e.lineTo(t + n, a + r - o), e.quadraticCurveTo(t + n, a + r, t + n - s, a + r), e.lineTo(t + s, a + r), e.quadraticCurveTo(t, a + r, t, a + r - o), e.lineTo(t, a + o), e.quadraticCurveTo(t, a, t + s, a)
                } else e.rect(t, a, n, r)
            },
            drawPoint: function(e, t, a, n, r) {
                var i, s, o, d, l, u;
                if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (i = t.toString()) && "[object HTMLCanvasElement]" !== i) {
                    if (!(isNaN(a) || a <= 0)) {
                        switch (t) {
                            default: e.beginPath(),
                            e.arc(n, r, a, 0, 2 * Math.PI),
                            e.closePath(),
                            e.fill();
                            break;
                            case "triangle":
                                    e.beginPath(),
                                l = (s = 3 * a / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                e.moveTo(n - s / 2, r + l / 3),
                                e.lineTo(n + s / 2, r + l / 3),
                                e.lineTo(n, r - 2 * l / 3),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rect":
                                    u = 1 / Math.SQRT2 * a,
                                e.beginPath(),
                                e.fillRect(n - u, r - u, 2 * u, 2 * u),
                                e.strokeRect(n - u, r - u, 2 * u, 2 * u);
                                break;
                            case "rectRounded":
                                    var c = a / Math.SQRT2,
                                    m = n - c,
                                    h = r - c,
                                    _ = Math.SQRT2 * a;e.beginPath(),
                                this.roundedRect(e, m, h, _, _, a / 2),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rectRot":
                                    u = 1 / Math.SQRT2 * a,
                                e.beginPath(),
                                e.moveTo(n - u, r),
                                e.lineTo(n, r + u),
                                e.lineTo(n + u, r),
                                e.lineTo(n, r - u),
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
                                o = Math.cos(Math.PI / 4) * a,
                                d = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - o, r - d),
                                e.lineTo(n + o, r + d),
                                e.moveTo(n - o, r + d),
                                e.lineTo(n + o, r - d),
                                e.closePath();
                                break;
                            case "star":
                                    e.beginPath(),
                                e.moveTo(n, r + a),
                                e.lineTo(n, r - a),
                                e.moveTo(n - a, r),
                                e.lineTo(n + a, r),
                                o = Math.cos(Math.PI / 4) * a,
                                d = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - o, r - d),
                                e.lineTo(n + o, r + d),
                                e.moveTo(n - o, r + d),
                                e.lineTo(n + o, r - d),
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
                } else e.drawImage(t, n - t.width / 2, r - t.height / 2, t.width, t.height)
            },
            clipArea: function(e, t) {
                e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
            },
            unclipArea: function(e) {
                e.restore()
            },
            lineTo: function(e, t, a, n) {
                if (a.steppedLine) return "after" === a.steppedLine && !n || "after" !== a.steppedLine && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y), void e.lineTo(a.x, a.y);
                a.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : e.lineTo(a.x, a.y)
            }
        };
        n.clear = t.clear, n.drawRoundedRectangle = function(e) {
            e.beginPath(), t.roundedRect.apply(t, arguments), e.closePath()
        }
    },
    FDK5: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N"),
            s = n.global;
        n._set("global", {
            elements: {
                line: {
                    tension: .4,
                    backgroundColor: s.defaultColor,
                    borderWidth: 3,
                    borderColor: s.defaultColor,
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
                var e, t, a, n, r = this._view,
                    o = this._chart.ctx,
                    d = r.spanGaps,
                    l = this._children.slice(),
                    u = s.elements.line,
                    c = -1;
                for (this._loop && l.length && l.push(l[0]), o.save(), o.lineCap = r.borderCapStyle || u.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || u.borderDash), o.lineDashOffset = r.borderDashOffset || u.borderDashOffset, o.lineJoin = r.borderJoinStyle || u.borderJoinStyle, o.lineWidth = r.borderWidth || u.borderWidth, o.strokeStyle = r.borderColor || s.defaultColor, o.beginPath(), c = -1, e = 0; e < l.length; ++e) t = l[e], a = i.previousItem(l, e), n = t._view, 0 === e ? n.skip || (o.moveTo(n.x, n.y), c = e) : (a = -1 === c ? a : l[c], n.skip || (c !== e - 1 && !d || -1 === c ? o.moveTo(n.x, n.y) : i.canvas.lineTo(o, a._view, t._view), c = e));
                o.stroke(), o.restore()
            }
        })
    },
    FKXc: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("it", {
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
        })(a("PJh5"))
    },
    FRPF: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("tzm", {
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
        })(a("PJh5"))
    },
    FeZP: function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("Odds");
        a("J9dY");

        function i(e) {
            return n.createElement(r._35, {
                className: "insight-panel-btn",
                background: r.n.Alt,
                display: r.R.Flex,
                flexGrow: 1,
                flexWrap: r.U.NoWrap
            }, n.createElement(r.v, {
                disabled: e.disabled,
                type: r.B.Text,
                linkTo: e.linkTo,
                onClick: e.onClick,
                targetBlank: e.targetBlank,
                fullWidth: !0
            }, n.createElement(r.Q, null, e.message)))
        }
        a.d(t, "a", function() {
            return i
        })
    },
    FlzV: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("nb", {
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
        })(a("PJh5"))
    },
    Fpqq: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("sv", {
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
        })(a("PJh5"))
    },
    Frex: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("de-ch", {
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
        })(a("PJh5"))
    },
    FsFC: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return r
        }), t.b = function(e, t) {
            void 0 === t && (t = r.Humanized);
            var a;
            t === r.ClockAuto && (t = e >= 3600 ? r.ClockHMS : r.ClockMS);
            switch (t) {
                case r.ClockHM:
                case r.ClockHMS:
                    a = n.Hour;
                    break;
                case r.ClockMS:
                    a = n.Minute
            }
            var l = 2;
            t === r.ClockHMS && (l = 3);
            var u = function(e, t) {
                    void 0 === t && (t = n.Month);
                    var a = {};
                    if (a.seconds = e, e < 60 || t === n.Second) return a;
                    if (a.minutes = Math.floor(e / 60), a.seconds = e % 60, a.minutes < 60 || t === n.Minute) return a;
                    if (a.hours = Math.floor(a.minutes / 60), a.minutes = a.minutes % 60, a.hours < 24 || t === n.Hour) return a;
                    if (a.days = Math.floor(a.hours / 24), a.hours = a.hours % 24, a.days < 7 || t === n.Day) return a;
                    if (a.days <= 26 || t === n.Week) return a.weeks = Math.floor(a.days / 7), a.days = a.days % 7, a;
                    return a.months = Math.round((a.days + 3) / 30), a
                }(e, a),
                c = Object.keys(u);
            if (c.forEach(function(e, a) {
                    t !== r.Humanized && t !== r.HumanizedShort || u[e] || delete u[e], a < c.length - l && delete u[e]
                }), t === r.Humanized) return function(e) {
                return e.months ? s(n.Month, e.months) : e.weeks && e.days ? s(n.Week, e.weeks) + " " + s(n.Day, e.days) : e.weeks ? s(n.Week, e.weeks) : e.days && e.hours ? s(n.Day, e.days) + " " + s(n.Hour, e.hours) : e.days ? s(n.Day, e.days) : e.hours && e.minutes ? s(n.Hour, e.hours) + " " + s(n.Minute, e.minutes) : e.hours ? s(n.Hour, e.hours) : e.minutes && e.seconds ? s(n.Minute, e.minutes) + " " + s(n.Second, e.seconds) : e.minutes ? s(n.Minute, e.minutes) : s(n.Second, e.seconds || 0)
            }(u);
            if (t === r.HumanizedShort) return function(e) {
                return e.months ? o(n.Month, e.months) : e.weeks && e.days ? "" + o(n.Week, e.weeks) + o(n.Day, e.days) : e.weeks ? o(n.Week, e.weeks) : e.days && e.hours ? "" + o(n.Day, e.days) + o(n.Hour, e.hours) : e.days ? o(n.Day, e.days) : e.hours && e.minutes ? "" + o(n.Hour, e.hours) + o(n.Minute, e.minutes) : e.hours ? o(n.Hour, e.hours) : e.minutes && e.seconds ? "" + o(n.Minute, e.minutes) + o(n.Second, e.seconds) : e.minutes ? o(n.Minute, e.minutes) : o(n.Second, e.seconds || 0)
            }(u);
            var m = ":",
                h = !1;
            switch (i.o.intl.getLanguageCode()) {
                case "cy":
                case "da":
                case "fi":
                case "id":
                case "nb":
                case "si":
                    m = ".";
                    break;
                case "af":
                case "fr":
                case "lt":
                    h = !0
            }
            var _ = u.seconds || 0,
                f = u.minutes || 0,
                p = u.hours || 0;
            switch (t) {
                case r.ClockHM:
                case r.ClockHMS:
                    var y = h ? d(p, 2) : p,
                        g = y + m + d(f, 2);
                    return t === r.ClockHMS && (g += m + d(_, 2)), g;
                case r.ClockMS:
                    var y = h ? d(f, 2) : f;
                    return y + m + d(_, 2)
            }
        };
        var n, r, i = a("6sO2");

        function s(e, t) {
            switch (e) {
                case n.Second:
                    return Object(i.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case n.Minute:
                    return Object(i.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case n.Hour:
                    return Object(i.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case n.Day:
                    return Object(i.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case n.Week:
                    return Object(i.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case n.Month:
                    return Object(i.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function o(e, t) {
            switch (e) {
                case n.Second:
                    return Object(i.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case n.Minute:
                    return Object(i.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case n.Hour:
                    return Object(i.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case n.Day:
                    return Object(i.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case n.Week:
                    return Object(i.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case n.Month:
                    return Object(i.d)("{monthCount}mo", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function d(e, t) {
            var a = e.toString();
            return a.length < t ? "0".repeat(t - a.length) + a : a
        }! function(e) {
            e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
        }(n || (n = {})),
        function(e) {
            e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
        }(r || (r = {}))
    },
    FuaP: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("gl", {
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
        })(a("PJh5"))
    },
    Fv8P: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("L5rj"),
            i = a("iO9N");
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
                                s = t.datasets[0],
                                o = r.data[n].custom || {},
                                d = i.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: o.backgroundColor ? o.backgroundColor : d(s.backgroundColor, n, l.backgroundColor),
                                strokeStyle: o.borderColor ? o.borderColor : d(s.borderColor, n, l.borderColor),
                                lineWidth: o.borderWidth ? o.borderWidth : d(s.borderWidth, n, l.borderWidth),
                                hidden: isNaN(s.data[n]) || r.data[n].hidden,
                                index: n
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, r, i = t.index,
                        s = this.chart;
                    for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(r = s.getDatasetMeta(a)).data[i].hidden = !r.data[i].hidden;
                    s.update()
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
                        s = a.options,
                        o = s.elements.arc,
                        d = Math.min(n.right - n.left, n.bottom - n.top);
                    a.outerRadius = Math.max((d - o.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(s.cutoutPercentage ? a.outerRadius / 100 * s.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), t.outerRadius = a.outerRadius - a.radiusLength * t.index, t.innerRadius = t.outerRadius - a.radiusLength, r.count = t.countVisibleElements(), i.each(r.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    for (var n = this, r = n.chart, s = n.getDataset(), o = r.options, d = o.animation, l = r.scale, u = r.data.labels, c = n.calculateCircumference(s.data[t]), m = l.xCenter, h = l.yCenter, _ = 0, f = n.getMeta(), p = 0; p < t; ++p) isNaN(s.data[p]) || f.data[p].hidden || ++_;
                    var y = o.startAngle,
                        g = e.hidden ? 0 : l.getDistanceFromCenterForValue(s.data[t]),
                        M = y + c * _,
                        v = M + (e.hidden ? 0 : c),
                        b = d.animateScale ? 0 : l.getDistanceFromCenterForValue(s.data[t]);
                    i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: l,
                        _model: {
                            x: m,
                            y: h,
                            innerRadius: 0,
                            outerRadius: a ? b : g,
                            startAngle: a && d.animateRotate ? y : M,
                            endAngle: a && d.animateRotate ? y : v,
                            label: i.valueAtIndexOrDefault(u, t, u[t])
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
    "G++c": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ms-my", {
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
        })(a("PJh5"))
    },
    GBuA: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("L5rj"),
            i = a("iO9N");
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
                    var t;
                    e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                },
                update: function(e) {
                    var t, a, n = this.getMeta().data;
                    for (this._ruler = this.getRuler(), t = 0, a = n.length; t < a; ++t) this.updateElement(n[t], t, e)
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = n.chart,
                        s = n.getMeta(),
                        o = n.getDataset(),
                        d = e.custom || {},
                        l = r.options.elements.rectangle;
                    e._xScale = n.getScaleForId(s.xAxisID), e._yScale = n.getScaleForId(s.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
                        datasetLabel: o.label,
                        label: r.data.labels[t],
                        borderSkipped: d.borderSkipped ? d.borderSkipped : l.borderSkipped,
                        backgroundColor: d.backgroundColor ? d.backgroundColor : i.valueAtIndexOrDefault(o.backgroundColor, t, l.backgroundColor),
                        borderColor: d.borderColor ? d.borderColor : i.valueAtIndexOrDefault(o.borderColor, t, l.borderColor),
                        borderWidth: d.borderWidth ? d.borderWidth : i.valueAtIndexOrDefault(o.borderWidth, t, l.borderWidth)
                    }, n.updateElementGeometry(e, t, a), e.pivot()
                },
                updateElementGeometry: function(e, t, a) {
                    var n = this,
                        r = e._model,
                        i = n.getValueScale(),
                        s = i.getBasePixel(),
                        o = i.isHorizontal(),
                        d = n._ruler || n.getRuler(),
                        l = n.calculateBarValuePixels(n.index, t),
                        u = n.calculateBarIndexPixels(n.index, t, d);
                    r.horizontal = o, r.base = a ? s : l.base, r.x = o ? a ? s : l.head : u.center, r.y = o ? u.center : a ? s : l.head, r.height = o ? u.size : void 0, r.width = o ? void 0 : u.size
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
                    var t, a, n = this.chart,
                        r = this.getIndexScale().options.stacked,
                        i = void 0 === e ? n.data.datasets.length : e + 1,
                        s = [];
                    for (t = 0; t < i; ++t)(a = n.getDatasetMeta(t)).bar && n.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === s.indexOf(a.stack) || void 0 === r && (void 0 === a.stack || -1 === s.indexOf(a.stack))) && s.push(a.stack);
                    return s.length
                },
                getStackIndex: function(e) {
                    return this.getStackCount(e) - 1
                },
                getRuler: function() {
                    var e, t, a = this.getIndexScale(),
                        n = this.getStackCount(),
                        r = this.index,
                        i = [],
                        s = a.isHorizontal(),
                        o = s ? a.left : a.top,
                        d = o + (s ? a.width : a.height);
                    for (e = 0, t = this.getMeta().data.length; e < t; ++e) i.push(a.getPixelForValue(null, e, r));
                    return {
                        pixels: i,
                        start: o,
                        end: d,
                        stackCount: n,
                        scale: a
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var a, n, r, i, s, o, d = this.chart,
                        l = this.getMeta(),
                        u = this.getValueScale(),
                        c = d.data.datasets,
                        m = u.getRightValue(c[e].data[t]),
                        h = u.options.stacked,
                        _ = l.stack,
                        f = 0;
                    if (h || void 0 === h && void 0 !== _)
                        for (a = 0; a < e; ++a)(n = d.getDatasetMeta(a)).bar && n.stack === _ && n.controller.getValueScaleId() === u.id && d.isDatasetVisible(a) && (r = u.getRightValue(c[a].data[t]), (m < 0 && r < 0 || m >= 0 && r > 0) && (f += r));
                    return i = u.getPixelForValue(f), {
                        size: o = ((s = u.getPixelForValue(f + m)) - i) / 2,
                        base: i,
                        head: s,
                        center: s + o / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, a) {
                    var n, r, s, o, d, l = a.scale.options,
                        u = this.getStackIndex(e),
                        c = a.pixels,
                        m = c[t],
                        h = c.length,
                        _ = a.start,
                        f = a.end;
                    return 1 === h ? (n = m > _ ? m - _ : f - m, r = m < f ? f - m : m - _) : (t > 0 && (n = (m - c[t - 1]) / 2, t === h - 1 && (r = n)), t < h - 1 && (r = (c[t + 1] - m) / 2, 0 === t && (n = r))), d = (o = ((s = n * l.categoryPercentage) + r * l.categoryPercentage) / a.stackCount) * l.barPercentage, m -= s, m += o * u, {
                        size: d = Math.min(i.valueOrDefault(l.barThickness, d), i.valueOrDefault(l.maxBarThickness, 1 / 0)),
                        base: m += (o - d) / 2,
                        head: m + d,
                        center: m + d / 2
                    }
                },
                draw: function() {
                    var e = this.chart,
                        t = this.getValueScale(),
                        a = this.getMeta().data,
                        n = this.getDataset(),
                        r = a.length,
                        s = 0;
                    for (i.canvas.clipArea(e.ctx, e.chartArea); s < r; ++s) isNaN(t.getRightValue(n.data[s])) || a[s].draw();
                    i.canvas.unclipArea(e.ctx)
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
                        s = this.chart.options.elements.rectangle;
                    r.backgroundColor = n.backgroundColor ? n.backgroundColor : i.valueAtIndexOrDefault(t.backgroundColor, a, s.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : i.valueAtIndexOrDefault(t.borderColor, a, s.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : i.valueAtIndexOrDefault(t.borderWidth, a, s.borderWidth)
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
    GqGk: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Scatter = function(t, a) {
                return a.type = "scatter", new e(t, a)
            }
        }
    },
    GrS7: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("hy-am", {
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
        })(a("PJh5"))
    },
    IbXy: function(e, t, a) {
        "use strict";
        var n = a("iO9N");
        e.exports = {
            generators: {
                linear: function(e, t) {
                    var a, r = [];
                    if (e.stepSize && e.stepSize > 0) a = e.stepSize;
                    else {
                        var i = n.niceNum(t.max - t.min, !1);
                        a = n.niceNum(i / (e.maxTicks - 1), !0)
                    }
                    var s = Math.floor(t.min / a) * a,
                        o = Math.ceil(t.max / a) * a;
                    e.min && e.max && e.stepSize && n.almostWhole((e.max - e.min) / e.stepSize, a / 1e3) && (s = e.min, o = e.max);
                    var d = (o - s) / a;
                    d = n.almostEquals(d, Math.round(d), a / 1e3) ? Math.round(d) : Math.ceil(d), r.push(void 0 !== e.min ? e.min : s);
                    for (var l = 1; l < d; ++l) r.push(s + l * a);
                    return r.push(void 0 !== e.max ? e.max : o), r
                },
                logarithmic: function(e, t) {
                    var a, r, i = [],
                        s = n.valueOrDefault,
                        o = s(e.min, Math.pow(10, Math.floor(n.log10(t.min)))),
                        d = Math.floor(n.log10(t.max)),
                        l = Math.ceil(t.max / Math.pow(10, d));
                    0 === o ? (a = Math.floor(n.log10(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, a)), i.push(o), o = r * Math.pow(10, a)) : (a = Math.floor(n.log10(o)), r = Math.floor(o / Math.pow(10, a)));
                    do {
                        i.push(o), 10 === ++r && (r = 1, ++a), o = r * Math.pow(10, a)
                    } while (a < d || a === d && r < l);
                    var u = s(e.max, o);
                    return i.push(u), i
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
                        s = "";
                    if (0 !== e) {
                        var o = -1 * Math.floor(i);
                        o = Math.max(Math.min(o, 20), 0), s = e.toFixed(o)
                    } else s = "0";
                    return s
                },
                logarithmic: function(e, t, a) {
                    var r = e / Math.pow(10, Math.floor(n.log10(e)));
                    return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === a.length - 1 ? e.toExponential() : ""
                }
            }
        }
    },
    ItYp: function(e, t) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardStreamSummaryPage"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 125
            }
        };
        a.loc.source = {
            body: "query DashboardStreamSummaryPage($channelLogin: String) {\nuser(login: $channelLogin) {\nid\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = a
    },
    J9dY: function(e, t) {},
    JwiF: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("jv", {
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
        })(a("PJh5"))
    },
    KC8c: function(e, t, a) {
        "use strict";
        var n = a("iO9N");

        function r(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : n.getRelativePosition(e, t)
        }

        function i(e, t) {
            var a, n, r, i, s;
            for (n = 0, i = e.data.datasets.length; n < i; ++n)
                if (e.isDatasetVisible(n))
                    for (r = 0, s = (a = e.getDatasetMeta(n)).data.length; r < s; ++r) {
                        var o = a.data[r];
                        o._view.skip || t(o)
                    }
        }

        function s(e, t) {
            var a = [];
            return i(e, function(e) {
                e.inRange(t.x, t.y) && a.push(e)
            }), a
        }

        function o(e, t, a, n) {
            var r = Number.POSITIVE_INFINITY,
                s = [];
            return i(e, function(e) {
                if (!a || e.inRange(t.x, t.y)) {
                    var i = e.getCenterPoint(),
                        o = n(t, i);
                    o < r ? (s = [e], r = o) : o === r && s.push(e)
                }
            }), s
        }

        function d(e) {
            var t = -1 !== e.indexOf("x"),
                a = -1 !== e.indexOf("y");
            return function(e, n) {
                var r = t ? Math.abs(e.x - n.x) : 0,
                    i = a ? Math.abs(e.y - n.y) : 0;
                return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2))
            }
        }

        function l(e, t, a) {
            var n = r(t, e);
            a.axis = a.axis || "x";
            var i = d(a.axis),
                l = a.intersect ? s(e, n) : o(e, n, !1, i),
                u = [];
            return l.length ? (e.data.datasets.forEach(function(t, a) {
                if (e.isDatasetVisible(a)) {
                    var n = e.getDatasetMeta(a).data[l[0]._index];
                    n && !n._view.skip && u.push(n)
                }
            }), u) : []
        }
        e.exports = {
            modes: {
                single: function(e, t) {
                    var a = r(t, e),
                        n = [];
                    return i(e, function(e) {
                        if (e.inRange(a.x, a.y)) return n.push(e), n
                    }), n.slice(0, 1)
                },
                label: l,
                index: l,
                dataset: function(e, t, a) {
                    var n = r(t, e);
                    a.axis = a.axis || "xy";
                    var i = d(a.axis),
                        l = a.intersect ? s(e, n) : o(e, n, !1, i);
                    return l.length > 0 && (l = e.getDatasetMeta(l[0]._datasetIndex).data), l
                },
                "x-axis": function(e, t) {
                    return l(e, t, {
                        intersect: !1
                    })
                },
                point: function(e, t) {
                    return s(e, r(t, e))
                },
                nearest: function(e, t, a) {
                    var n = r(t, e);
                    a.axis = a.axis || "xy";
                    var i = d(a.axis),
                        s = o(e, n, a.intersect, i);
                    return s.length > 1 && s.sort(function(e, t) {
                        var a = e.getArea() - t.getArea();
                        return 0 === a && (a = e._datasetIndex - t._datasetIndex), a
                    }), s.slice(0, 1)
                },
                x: function(e, t, a) {
                    var n = r(t, e),
                        s = [],
                        o = !1;
                    return i(e, function(e) {
                        e.inXRange(n.x) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                    }), a.intersect && !o && (s = []), s
                },
                y: function(e, t, a) {
                    var n = r(t, e),
                        s = [],
                        o = !1;
                    return i(e, function(e) {
                        e.inYRange(n.y) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                    }), a.intersect && !o && (s = []), s
                }
            }
        }
    },
    KMD5: function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("6sO2"),
            i = a("rEvf"),
            s = a("Odds"),
            o = function(e) {
                return e.quest.completedAchievements.includes(e.achievement) ? n.createElement("span", {
                    title: Object(r.d)("Completed within the last 30 days", "AchievementsQuests")
                }, n.createElement(i.a, null)) : e.achievement.completedAt ? null : e.achievement.progress ? n.createElement(s._35, {
                    className: "ach-card__pill-wrapper",
                    fontSize: s.V.Size5
                }, n.createElement(s._12, {
                    label: Object(r.e)(e.achievement.progressRatio, "percent")
                })) : null
            };
        a.d(t, "a", function() {
            return o
        })
    },
    L5rj: function(e, t, a) {
        "use strict";
        e.exports = {}, e.exports.Arc = a("5ImO"), e.exports.Line = a("FDK5"), e.exports.Point = a("Qor1"), e.exports.Rectangle = a("AFDx")
    },
    LT9G: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            e.defineLocale("es", {
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
        })(a("PJh5"))
    },
    Lgqo: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("si", {
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
        })(a("PJh5"))
    },
    MDGG: function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("6sO2"),
            i = a("Odds"),
            s = function(e) {
                var t = Object(r.d)("Completed on {completedAt, date, short}", {
                        completedAt: e.date
                    }, "AchievementCard"),
                    a = Object(r.c)(e.date, "short");
                return n.createElement(i.Q, {
                    fontSize: i.V.Size5,
                    color: i.K.Alt2,
                    title: t
                }, a)
            };
        a.d(t, "a", function() {
            return s
        })
    },
    Mbk8: function(e, t) {},
    N3vo: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("cv", {
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
        })(a("PJh5"))
    },
    Nd3h: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("eo", {
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
        })(a("PJh5"))
    },
    Nlnz: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("te", {
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
        })(a("PJh5"))
    },
    Nwhx: function(e, t) {},
    Nzt2: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("he", {
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
        })(a("PJh5"))
    },
    ORgI: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ja", {
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
        })(a("PJh5"))
    },
    OSsP: function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a) {
                return e + " " + function(e, t) {
                    if (2 === t) return function(e) {
                        var t = {
                            m: "v",
                            b: "v",
                            d: "z"
                        };
                        if (void 0 === t[e.charAt(0)]) return e;
                        return t[e.charAt(0)] + e.substring(1)
                    }(e);
                    return e
                }({
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                }[a], e)
            }
            e.defineLocale("br", {
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
                    yy: function(e) {
                        switch (function e(t) {
                            return t > 9 ? e(t % 10) : t
                        }(e)) {
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
        })(a("PJh5"))
    },
    OUMt: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

            function n(e) {
                return e > 1 && e < 5
            }

            function r(e, t, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return t || r ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return t ? "minúta" : r ? "minútu" : "minútou";
                    case "mm":
                        return t || r ? i + (n(e) ? "minúty" : "minút") : i + "minútami";
                    case "h":
                        return t ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return t || r ? i + (n(e) ? "hodiny" : "hodín") : i + "hodinami";
                    case "d":
                        return t || r ? "deň" : "dňom";
                    case "dd":
                        return t || r ? i + (n(e) ? "dni" : "dní") : i + "dňami";
                    case "M":
                        return t || r ? "mesiac" : "mesiacom";
                    case "MM":
                        return t || r ? i + (n(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                    case "y":
                        return t || r ? "rok" : "rokom";
                    case "yy":
                        return t || r ? i + (n(e) ? "roky" : "rokov") : i + "rokmi"
                }
            }
            e.defineLocale("sk", {
                months: t,
                monthsShort: a,
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
                    s: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })(a("PJh5"))
    },
    OVPi: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("fo", {
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
        })(a("PJh5"))
    },
    PJh5: function(e, t, a) {
        (function(e) {
            var t;
            t = function() {
                "use strict";
                var t;

                function n() {
                    return t.apply(null, arguments)
                }

                function r(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function i(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function s(e) {
                    return void 0 === e
                }

                function o(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function d(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function l(e, t) {
                    var a, n = [];
                    for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                    return n
                }

                function u(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function c(e, t) {
                    for (var a in t) u(t, a) && (e[a] = t[a]);
                    return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function m(e, t, a, n) {
                    return St(e, t, a, n, !0).utc()
                }

                function h(e) {
                    return null == e._pf && (e._pf = {
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
                    }), e._pf
                }
                var _ = Array.prototype.some ? Array.prototype.some : function(e) {
                    for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                        if (n in t && e.call(this, t[n], n, t)) return !0;
                    return !1
                };

                function f(e) {
                    if (null == e._isValid) {
                        var t = h(e),
                            a = _.call(t.parsedDateParts, function(e) {
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
                var y = n.momentProperties = [];

                function g(e, t) {
                    var a, n, r;
                    if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = h(t)), s(t._locale) || (e._locale = t._locale), y.length > 0)
                        for (a = 0; a < y.length; a++) s(r = t[n = y[a]]) || (e[n] = r);
                    return e
                }
                var M = !1;

                function v(e) {
                    g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === M && (M = !0, n.updateOffset(this), M = !1)
                }

                function b(e) {
                    return e instanceof v || null != e && null != e._isAMomentObject
                }

                function L(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function k(e) {
                    var t = +e,
                        a = 0;
                    return 0 !== t && isFinite(t) && (a = L(t)), a
                }

                function Y(e, t, a) {
                    var n, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        s = 0;
                    for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && k(e[n]) !== k(t[n])) && s++;
                    return s + i
                }

                function D(e) {
                    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function w(e, t) {
                    var a = !0;
                    return c(function() {
                        if (null != n.deprecationHandler && n.deprecationHandler(null, e), a) {
                            for (var r, i = [], s = 0; s < arguments.length; s++) {
                                if (r = "", "object" == typeof arguments[s]) {
                                    for (var o in r += "\n[" + s + "] ", arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[s];
                                i.push(r)
                            }
                            D(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
                        }
                        return t.apply(this, arguments)
                    }, t)
                }
                var S = {};

                function x(e, t) {
                    null != n.deprecationHandler && n.deprecationHandler(e, t), S[e] || (D(t), S[e] = !0)
                }

                function T(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function j(e, t) {
                    var a, n = c({}, e);
                    for (a in t) u(t, a) && (i(e[a]) && i(t[a]) ? (n[a] = {}, c(n[a], e[a]), c(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                    for (a in e) u(e, a) && !u(t, a) && i(e[a]) && (n[a] = c({}, n[a]));
                    return n
                }

                function H(e) {
                    null != e && this.set(e)
                }
                n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
                var O = Object.keys ? Object.keys : function(e) {
                    var t, a = [];
                    for (t in e) u(e, t) && a.push(t);
                    return a
                };
                var P = {};

                function C(e, t) {
                    var a = e.toLowerCase();
                    P[a] = P[a + "s"] = P[t] = e
                }

                function A(e) {
                    return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0
                }

                function E(e) {
                    var t, a, n = {};
                    for (a in e) u(e, a) && (t = A(a)) && (n[t] = e[a]);
                    return n
                }
                var F = {};

                function W(e, t) {
                    F[e] = t
                }

                function I(e, t) {
                    return function(a) {
                        return null != a ? (z(this, e, a), n.updateOffset(this, t), this) : R(this, e)
                    }
                }

                function R(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function z(e, t, a) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](a)
                }

                function N(e, t, a) {
                    var n = "" + Math.abs(e),
                        r = t - n.length;
                    return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
                }
                var V = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    B = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    J = {},
                    G = {};

                function q(e, t, a, n) {
                    var r = n;
                    "string" == typeof n && (r = function() {
                        return this[n]()
                    }), e && (G[e] = r), t && (G[t[0]] = function() {
                        return N(r.apply(this, arguments), t[1], t[2])
                    }), a && (G[a] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function U(e, t) {
                    return e.isValid() ? (t = K(t, e.localeData()), J[t] = J[t] || function(e) {
                        var t, a, n, r = e.match(V);
                        for (t = 0, a = r.length; t < a; t++) G[r[t]] ? r[t] = G[r[t]] : r[t] = (n = r[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                        return function(t) {
                            var n, i = "";
                            for (n = 0; n < a; n++) i += T(r[n]) ? r[n].call(t, e) : r[n];
                            return i
                        }
                    }(t), J[t](e)) : e.localeData().invalidDate()
                }

                function K(e, t) {
                    var a = 5;

                    function n(e) {
                        return t.longDateFormat(e) || e
                    }
                    for (B.lastIndex = 0; a >= 0 && B.test(e);) e = e.replace(B, n), B.lastIndex = 0, a -= 1;
                    return e
                }
                var Q = /\d/,
                    X = /\d\d/,
                    Z = /\d{3}/,
                    $ = /\d{4}/,
                    ee = /[+-]?\d{6}/,
                    te = /\d\d?/,
                    ae = /\d\d\d\d?/,
                    ne = /\d\d\d\d\d\d?/,
                    re = /\d{1,3}/,
                    ie = /\d{1,4}/,
                    se = /[+-]?\d{1,6}/,
                    oe = /\d+/,
                    de = /[+-]?\d+/,
                    le = /Z|[+-]\d\d:?\d\d/gi,
                    ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    ce = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    me = {};

                function he(e, t, a) {
                    me[e] = T(t) ? t : function(e, n) {
                        return e && a ? a : t
                    }
                }

                function _e(e, t) {
                    return u(me, e) ? me[e](t._strict, t._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, r) {
                        return t || a || n || r
                    })))
                }

                function fe(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                var pe = {};

                function ye(e, t) {
                    var a, n = t;
                    for ("string" == typeof e && (e = [e]), o(t) && (n = function(e, a) {
                            a[t] = k(e)
                        }), a = 0; a < e.length; a++) pe[e[a]] = n
                }

                function ge(e, t) {
                    ye(e, function(e, a, n, r) {
                        n._w = n._w || {}, t(e, n._w, n, r)
                    })
                }

                function Me(e, t, a) {
                    null != t && u(pe, e) && pe[e](t, a._a, a, e)
                }
                var ve = 0,
                    be = 1,
                    Le = 2,
                    ke = 3,
                    Ye = 4,
                    De = 5,
                    we = 6,
                    Se = 7,
                    xe = 8,
                    Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1
                    };

                function je(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }
                q("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), q("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), q("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), C("month", "M"), W("month", 8), he("M", te), he("MM", te, X), he("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), he("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ye(["M", "MM"], function(e, t) {
                    t[be] = k(e) - 1
                }), ye(["MMM", "MMMM"], function(e, t, a, n) {
                    var r = a._locale.monthsParse(e, n, a._strict);
                    null != r ? t[be] = r : h(a).invalidMonth = e
                });
                var He = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Oe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
                var Pe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                function Ce(e, t) {
                    var a;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = k(t);
                        else if (!o(t = e.localeData().monthsParse(t))) return e;
                    return a = Math.min(e.date(), je(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                }

                function Ae(e) {
                    return null != e ? (Ce(this, e), n.updateOffset(this, !0), this) : R(this, "Month")
                }
                var Ee = ce;
                var Fe = ce;

                function We() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n = [],
                        r = [],
                        i = [];
                    for (t = 0; t < 12; t++) a = m([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), i.push(this.months(a, "")), i.push(this.monthsShort(a, ""));
                    for (n.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) n[t] = fe(n[t]), r[t] = fe(r[t]);
                    for (t = 0; t < 24; t++) i[t] = fe(i[t]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function Ie(e) {
                    return Re(e) ? 366 : 365
                }

                function Re(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }
                q("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), q(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), W("year", 1), he("Y", de), he("YY", te, X), he("YYYY", ie, $), he("YYYYY", se, ee), he("YYYYYY", se, ee), ye(["YYYYY", "YYYYYY"], ve), ye("YYYY", function(e, t) {
                    t[ve] = 2 === e.length ? n.parseTwoDigitYear(e) : k(e)
                }), ye("YY", function(e, t) {
                    t[ve] = n.parseTwoDigitYear(e)
                }), ye("Y", function(e, t) {
                    t[ve] = parseInt(e, 10)
                }), n.parseTwoDigitYear = function(e) {
                    return k(e) + (k(e) > 68 ? 1900 : 2e3)
                };
                var ze = I("FullYear", !0);

                function Ne(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function Ve(e, t, a) {
                    var n = 7 + t - a;
                    return -((7 + Ne(e, 0, n).getUTCDay() - t) % 7) + n - 1
                }

                function Be(e, t, a, n, r) {
                    var i, s, o = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Ve(e, n, r);
                    return o <= 0 ? s = Ie(i = e - 1) + o : o > Ie(e) ? (i = e + 1, s = o - Ie(e)) : (i = e, s = o), {
                        year: i,
                        dayOfYear: s
                    }
                }

                function Je(e, t, a) {
                    var n, r, i = Ve(e.year(), t, a),
                        s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return s < 1 ? n = s + Ge(r = e.year() - 1, t, a) : s > Ge(e.year(), t, a) ? (n = s - Ge(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = s), {
                        week: n,
                        year: r
                    }
                }

                function Ge(e, t, a) {
                    var n = Ve(e, t, a),
                        r = Ve(e + 1, t, a);
                    return (Ie(e) - n + r) / 7
                }
                q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), W("week", 5), W("isoWeek", 5), he("w", te), he("ww", te, X), he("W", te), he("WW", te, X), ge(["w", "ww", "W", "WW"], function(e, t, a, n) {
                    t[n.substr(0, 1)] = k(e)
                });
                q("d", 0, "do", "day"), q("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), q("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), q("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), he("d", te), he("e", te), he("E", te), he("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), he("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), he("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ge(["dd", "ddd", "dddd"], function(e, t, a, n) {
                    var r = a._locale.weekdaysParse(e, n, a._strict);
                    null != r ? t.d = r : h(a).invalidWeekday = e
                }), ge(["d", "e", "E"], function(e, t, a, n) {
                    t[n] = k(e)
                });
                var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
                var Ue = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
                var Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
                var Qe = ce;
                var Xe = ce;
                var Ze = ce;

                function $e() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n, r, i, s = [],
                        o = [],
                        d = [],
                        l = [];
                    for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), r = this.weekdaysShort(a, ""), i = this.weekdays(a, ""), s.push(n), o.push(r), d.push(i), l.push(n), l.push(r), l.push(i);
                    for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = fe(o[t]), d[t] = fe(d[t]), l[t] = fe(l[t]);
                    this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                }

                function et() {
                    return this.hours() % 12 || 12
                }

                function tt(e, t) {
                    q(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function at(e, t) {
                    return t._meridiemParse
                }
                q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, et), q("k", ["kk", 2], 0, function() {
                    return this.hours() || 24
                }), q("hmm", 0, 0, function() {
                    return "" + et.apply(this) + N(this.minutes(), 2)
                }), q("hmmss", 0, 0, function() {
                    return "" + et.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
                }), q("Hmm", 0, 0, function() {
                    return "" + this.hours() + N(this.minutes(), 2)
                }), q("Hmmss", 0, 0, function() {
                    return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
                }), tt("a", !0), tt("A", !1), C("hour", "h"), W("hour", 13), he("a", at), he("A", at), he("H", te), he("h", te), he("k", te), he("HH", te, X), he("hh", te, X), he("kk", te, X), he("hmm", ae), he("hmmss", ne), he("Hmm", ae), he("Hmmss", ne), ye(["H", "HH"], ke), ye(["k", "kk"], function(e, t, a) {
                    var n = k(e);
                    t[ke] = 24 === n ? 0 : n
                }), ye(["a", "A"], function(e, t, a) {
                    a._isPm = a._locale.isPM(e), a._meridiem = e
                }), ye(["h", "hh"], function(e, t, a) {
                    t[ke] = k(e), h(a).bigHour = !0
                }), ye("hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n)), h(a).bigHour = !0
                }), ye("hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n, 2)), t[De] = k(e.substr(r)), h(a).bigHour = !0
                }), ye("Hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n))
                }), ye("Hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n, 2)), t[De] = k(e.substr(r))
                });
                var nt, rt = I("Hours", !0),
                    it = {
                        calendar: {
                            sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                        },
                        longDateFormat: {
                            LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY h:mm A",
                            LLLL: "dddd, MMMM D, YYYY h:mm A"
                        },
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: /\d{1,2}/,
                        relativeTime: {
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
                        months: Oe,
                        monthsShort: Pe,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: qe,
                        weekdaysMin: Ke,
                        weekdaysShort: Ue,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    st = {},
                    ot = {};

                function dt(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function lt(t) {
                    var n = null;
                    if (!st[t] && void 0 !== e && e && e.exports) try {
                        n = nt._abbr, a("uslO")("./" + t), ut(n)
                    } catch (e) {}
                    return st[t]
                }

                function ut(e, t) {
                    var a;
                    return e && (a = s(t) ? mt(e) : ct(e, t)) && (nt = a), nt._abbr
                }

                function ct(e, t) {
                    if (null !== t) {
                        var a = it;
                        if (t.abbr = e, null != st[e]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = st[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == st[t.parentLocale]) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = st[t.parentLocale]._config
                        }
                        return st[e] = new H(j(a, t)), ot[e] && ot[e].forEach(function(e) {
                            ct(e.name, e.config)
                        }), ut(e), st[e]
                    }
                    return delete st[e], null
                }

                function mt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return nt;
                    if (!r(e)) {
                        if (t = lt(e)) return t;
                        e = [e]
                    }
                    return function(e) {
                        for (var t, a, n, r, i = 0; i < e.length;) {
                            for (t = (r = dt(e[i]).split("-")).length, a = (a = dt(e[i + 1])) ? a.split("-") : null; t > 0;) {
                                if (n = lt(r.slice(0, t).join("-"))) return n;
                                if (a && a.length >= t && Y(r, a, !0) >= t - 1) break;
                                t--
                            }
                            i++
                        }
                        return null
                    }(e)
                }

                function ht(e) {
                    var t, a = e._a;
                    return a && -2 === h(e).overflow && (t = a[be] < 0 || a[be] > 11 ? be : a[Le] < 1 || a[Le] > je(a[ve], a[be]) ? Le : a[ke] < 0 || a[ke] > 24 || 24 === a[ke] && (0 !== a[Ye] || 0 !== a[De] || 0 !== a[we]) ? ke : a[Ye] < 0 || a[Ye] > 59 ? Ye : a[De] < 0 || a[De] > 59 ? De : a[we] < 0 || a[we] > 999 ? we : -1, h(e)._overflowDayOfYear && (t < ve || t > Le) && (t = Le), h(e)._overflowWeeks && -1 === t && (t = Se), h(e)._overflowWeekday && -1 === t && (t = xe), h(e).overflow = t), e
                }
                var _t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ft = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    pt = /Z|[+-]\d\d(?::?\d\d)?/,
                    yt = [
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
                    gt = [
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
                    Mt = /^\/?Date\((\-?\d+)/i;

                function vt(e) {
                    var t, a, n, r, i, s, o = e._i,
                        d = _t.exec(o) || ft.exec(o);
                    if (d) {
                        for (h(e).iso = !0, t = 0, a = yt.length; t < a; t++)
                            if (yt[t][1].exec(d[1])) {
                                r = yt[t][0], n = !1 !== yt[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, a = gt.length; t < a; t++)
                                if (gt[t][1].exec(d[3])) {
                                    i = (d[2] || " ") + gt[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!n && null != i) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!pt.exec(d[4])) return void(e._isValid = !1);
                            s = "Z"
                        }
                        e._f = r + (i || "") + (s || ""), Dt(e)
                    } else e._isValid = !1
                }
                var bt = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

                function Lt(e) {
                    var t, a, n, r, i, s, o, d, l = {
                        " GMT": " +0000",
                        " EDT": " -0400",
                        " EST": " -0500",
                        " CDT": " -0500",
                        " CST": " -0600",
                        " MDT": " -0600",
                        " MST": " -0700",
                        " PDT": " -0700",
                        " PST": " -0800"
                    };
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), a = bt.exec(t)) {
                        if (n = a[1] ? "ddd" + (5 === a[1].length ? ", " : " ") : "", r = "D MMM " + (a[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (a[4] ? ":ss" : ""), a[1]) {
                            var u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(a[2]).getDay()];
                            if (a[1].substr(0, 3) !== u) return h(e).weekdayMismatch = !0, void(e._isValid = !1)
                        }
                        switch (a[5].length) {
                            case 2:
                                o = 0 === d ? " +0000" : ((d = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(a[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00";
                                break;
                            case 4:
                                o = l[a[5]];
                                break;
                            default:
                                o = l[" GMT"]
                        }
                        a[5] = o, e._i = a.splice(1).join(""), s = " ZZ", e._f = n + r + i + s, Dt(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function kt(e, t, a) {
                    return null != e ? e : null != t ? t : a
                }

                function Yt(e) {
                    var t, a, r, i, s = [];
                    if (!e._d) {
                        for (r = function(e) {
                                var t = new Date(n.now());
                                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                            }(e), e._w && null == e._a[Le] && null == e._a[be] && function(e) {
                                var t, a, n, r, i, s, o, d;
                                if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, s = 4, a = kt(t.GG, e._a[ve], Je(xt(), 1, 4).year), n = kt(t.W, 1), ((r = kt(t.E, 1)) < 1 || r > 7) && (d = !0);
                                else {
                                    i = e._locale._week.dow, s = e._locale._week.doy;
                                    var l = Je(xt(), i, s);
                                    a = kt(t.gg, e._a[ve], l.year), n = kt(t.w, l.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
                                }
                                n < 1 || n > Ge(a, i, s) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = Be(a, n, r, i, s), e._a[ve] = o.year, e._dayOfYear = o.dayOfYear)
                            }(e), null != e._dayOfYear && (i = kt(e._a[ve], r[ve]), (e._dayOfYear > Ie(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), a = Ne(i, 0, e._dayOfYear), e._a[be] = a.getUTCMonth(), e._a[Le] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
                        for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[ke] && 0 === e._a[Ye] && 0 === e._a[De] && 0 === e._a[we] && (e._nextDay = !0, e._a[ke] = 0), e._d = (e._useUTC ? Ne : function(e, t, a, n, r, i, s) {
                            var o = new Date(e, t, a, n, r, i, s);
                            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                        }).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ke] = 24)
                    }
                }

                function Dt(e) {
                    if (e._f !== n.ISO_8601)
                        if (e._f !== n.RFC_2822) {
                            e._a = [], h(e).empty = !0;
                            var t, a, r, i, s, o = "" + e._i,
                                d = o.length,
                                l = 0;
                            for (r = K(e._f, e._locale).match(V) || [], t = 0; t < r.length; t++) i = r[t], (a = (o.match(_e(i, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(a))).length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), l += a.length), G[i] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(i), Me(i, a, e)) : e._strict && !a && h(e).unusedTokens.push(i);
                            h(e).charsLeftOver = d - l, o.length > 0 && h(e).unusedInput.push(o), e._a[ke] <= 12 && !0 === h(e).bigHour && e._a[ke] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[ke] = function(e, t, a) {
                                var n;
                                if (null == a) return t;
                                return null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                            }(e._locale, e._a[ke], e._meridiem), Yt(e), ht(e)
                        } else Lt(e);
                    else vt(e)
                }

                function wt(e) {
                    var t = e._i,
                        a = e._f;
                    return e._locale = e._locale || mt(e._l), null === t || void 0 === a && "" === t ? p({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t) ? new v(ht(t)) : (d(t) ? e._d = t : r(a) ? function(e) {
                        var t, a, n, r, i;
                        if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                        for (r = 0; r < e._f.length; r++) i = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Dt(t), f(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == n || i < n) && (n = i, a = t));
                        c(e, a || t)
                    }(e) : a ? Dt(e) : function(e) {
                        var t = e._i;
                        s(t) ? e._d = new Date(n.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                            var t = Mt.exec(e._i);
                            null === t ? (vt(e), !1 === e._isValid && (delete e._isValid, Lt(e), !1 === e._isValid && (delete e._isValid, n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                        }(e) : r(t) ? (e._a = l(t.slice(0), function(e) {
                            return parseInt(e, 10)
                        }), Yt(e)) : i(t) ? function(e) {
                            if (!e._d) {
                                var t = E(e._i);
                                e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                    return e && parseInt(e, 10)
                                }), Yt(e)
                            }
                        }(e) : o(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
                    }(e), f(e) || (e._d = null), e))
                }

                function St(e, t, a, n, s) {
                    var o, d = {};
                    return !0 !== a && !1 !== a || (n = a, a = void 0), (i(e) && function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    }(e) || r(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = a, d._i = e, d._f = t, d._strict = n, (o = new v(ht(wt(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
                }

                function xt(e, t, a, n) {
                    return St(e, t, a, n, !1)
                }
                n.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), n.ISO_8601 = function() {}, n.RFC_2822 = function() {};
                var Tt = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = xt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : p()
                    }),
                    jt = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = xt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : p()
                    });

                function Ht(e, t) {
                    var a, n;
                    if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return xt();
                    for (a = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](a) || (a = t[n]);
                    return a
                }
                var Ot = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function Pt(e) {
                    var t = E(e),
                        a = t.year || 0,
                        n = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        s = t.day || 0,
                        o = t.hour || 0,
                        d = t.minute || 0,
                        l = t.second || 0,
                        u = t.millisecond || 0;
                    this._isValid = function(e) {
                        for (var t in e)
                            if (-1 === Ot.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                        for (var a = !1, n = 0; n < Ot.length; ++n)
                            if (e[Ot[n]]) {
                                if (a) return !1;
                                parseFloat(e[Ot[n]]) !== k(e[Ot[n]]) && (a = !0)
                            }
                        return !0
                    }(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = mt(), this._bubble()
                }

                function Ct(e) {
                    return e instanceof Pt
                }

                function At(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function Et(e, t) {
                    q(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            a = "+";
                        return e < 0 && (e = -e, a = "-"), a + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
                    })
                }
                Et("Z", ":"), Et("ZZ", ""), he("Z", ue), he("ZZ", ue), ye(["Z", "ZZ"], function(e, t, a) {
                    a._useUTC = !0, a._tzm = Wt(ue, e)
                });
                var Ft = /([\+\-]|\d\d)/gi;

                function Wt(e, t) {
                    var a = (t || "").match(e);
                    if (null === a) return null;
                    var n = ((a[a.length - 1] || []) + "").match(Ft) || ["-", 0, 0],
                        r = 60 * n[1] + k(n[2]);
                    return 0 === r ? 0 : "+" === n[0] ? r : -r
                }

                function It(e, t) {
                    var a, r;
                    return t._isUTC ? (a = t.clone(), r = (b(e) || d(e) ? e.valueOf() : xt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), n.updateOffset(a, !1), a) : xt(e).local()
                }

                function Rt(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function zt() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }
                n.updateOffset = function() {};
                var Nt = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Vt = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

                function Bt(e, t) {
                    var a, n, r, i = e,
                        s = null;
                    return Ct(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : o(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (s = Nt.exec(e)) ? (a = "-" === s[1] ? -1 : 1, i = {
                        y: 0,
                        d: k(s[Le]) * a,
                        h: k(s[ke]) * a,
                        m: k(s[Ye]) * a,
                        s: k(s[De]) * a,
                        ms: k(At(1e3 * s[we])) * a
                    }) : (s = Vt.exec(e)) ? (a = "-" === s[1] ? -1 : 1, i = {
                        y: Jt(s[2], a),
                        M: Jt(s[3], a),
                        w: Jt(s[4], a),
                        d: Jt(s[5], a),
                        h: Jt(s[6], a),
                        m: Jt(s[7], a),
                        s: Jt(s[8], a)
                    }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = function(e, t) {
                        var a;
                        if (!e.isValid() || !t.isValid()) return {
                            milliseconds: 0,
                            months: 0
                        };
                        t = It(t, e), e.isBefore(t) ? a = Gt(e, t) : ((a = Gt(t, e)).milliseconds = -a.milliseconds, a.months = -a.months);
                        return a
                    }(xt(i.from), xt(i.to)), (i = {}).ms = r.milliseconds, i.M = r.months), n = new Pt(i), Ct(e) && u(e, "_locale") && (n._locale = e._locale), n
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
                    return function(a, n) {
                        var r;
                        return null === n || isNaN(+n) || (x(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = a, a = n, n = r), Ut(this, Bt(a = "string" == typeof a ? +a : a, n), e), this
                    }
                }

                function Ut(e, t, a, r) {
                    var i = t._milliseconds,
                        s = At(t._days),
                        o = At(t._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * a), s && z(e, "Date", R(e, "Date") + s * a), o && Ce(e, R(e, "Month") + o * a), r && n.updateOffset(e, s || o))
                }
                Bt.fn = Pt.prototype, Bt.invalid = function() {
                    return Bt(NaN)
                };
                var Kt = qt(1, "add"),
                    Qt = qt(-1, "subtract");

                function Xt(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = mt(e)) && (this._locale = t), this)
                }
                n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Zt = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });

                function $t() {
                    return this._locale
                }

                function ea(e, t) {
                    q(0, [e, e.length], 0, t)
                }

                function ta(e, t, a, n, r) {
                    var i;
                    return null == e ? Je(this, n, r).year : (t > (i = Ge(e, n, r)) && (t = i), function(e, t, a, n, r) {
                        var i = Be(e, t, a, n, r),
                            s = Ne(i.year, 0, i.dayOfYear);
                        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                    }.call(this, e, t, a, n, r))
                }
                q(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), q(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), ea("gggg", "weekYear"), ea("ggggg", "weekYear"), ea("GGGG", "isoWeekYear"), ea("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), he("G", de), he("g", de), he("GG", te, X), he("gg", te, X), he("GGGG", ie, $), he("gggg", ie, $), he("GGGGG", se, ee), he("ggggg", se, ee), ge(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                    t[n.substr(0, 2)] = k(e)
                }), ge(["gg", "GG"], function(e, t, a, r) {
                    t[r] = n.parseTwoDigitYear(e)
                }), q("Q", 0, "Qo", "quarter"), C("quarter", "Q"), W("quarter", 7), he("Q", Q), ye("Q", function(e, t) {
                    t[be] = 3 * (k(e) - 1)
                }), q("D", ["DD", 2], "Do", "date"), C("date", "D"), W("date", 9), he("D", te), he("DD", te, X), he("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), ye(["D", "DD"], Le), ye("Do", function(e, t) {
                    t[Le] = k(e.match(te)[0])
                });
                var aa = I("Date", !0);
                q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), W("dayOfYear", 4), he("DDD", re), he("DDDD", Z), ye(["DDD", "DDDD"], function(e, t, a) {
                    a._dayOfYear = k(e)
                }), q("m", ["mm", 2], 0, "minute"), C("minute", "m"), W("minute", 14), he("m", te), he("mm", te, X), ye(["m", "mm"], Ye);
                var na = I("Minutes", !1);
                q("s", ["ss", 2], 0, "second"), C("second", "s"), W("second", 15), he("s", te), he("ss", te, X), ye(["s", "ss"], De);
                var ra, ia = I("Seconds", !1);
                for (q("S", 0, 0, function() {
                        return ~~(this.millisecond() / 100)
                    }), q(0, ["SS", 2], 0, function() {
                        return ~~(this.millisecond() / 10)
                    }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function() {
                        return 10 * this.millisecond()
                    }), q(0, ["SSSSS", 5], 0, function() {
                        return 100 * this.millisecond()
                    }), q(0, ["SSSSSS", 6], 0, function() {
                        return 1e3 * this.millisecond()
                    }), q(0, ["SSSSSSS", 7], 0, function() {
                        return 1e4 * this.millisecond()
                    }), q(0, ["SSSSSSSS", 8], 0, function() {
                        return 1e5 * this.millisecond()
                    }), q(0, ["SSSSSSSSS", 9], 0, function() {
                        return 1e6 * this.millisecond()
                    }), C("millisecond", "ms"), W("millisecond", 16), he("S", re, Q), he("SS", re, X), he("SSS", re, Z), ra = "SSSS"; ra.length <= 9; ra += "S") he(ra, oe);

                function sa(e, t) {
                    t[we] = k(1e3 * ("0." + e))
                }
                for (ra = "S"; ra.length <= 9; ra += "S") ye(ra, sa);
                var oa = I("Milliseconds", !1);
                q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
                var da = v.prototype;

                function la(e) {
                    return e
                }
                da.add = Kt, da.calendar = function(e, t) {
                    var a = e || xt(),
                        r = It(a, this).startOf("day"),
                        i = n.calendarFormat(this, r) || "sameElse",
                        s = t && (T(t[i]) ? t[i].call(this, a) : t[i]);
                    return this.format(s || this.localeData().calendar(i, this, xt(a)))
                }, da.clone = function() {
                    return new v(this)
                }, da.diff = function(e, t, a) {
                    var n, r, i, s;
                    return this.isValid() && (n = It(e, this)).isValid() ? (r = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (t = A(t)) || "month" === t || "quarter" === t ? (o = this, d = n, c = 12 * (d.year() - o.year()) + (d.month() - o.month()), m = o.clone().add(c, "months"), d - m < 0 ? (l = o.clone().add(c - 1, "months"), u = (d - m) / (m - l)) : (l = o.clone().add(c + 1, "months"), u = (d - m) / (l - m)), s = -(c + u) || 0, "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - n, s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), a ? s : L(s)) : NaN;
                    var o, d, l, u, c, m
                }, da.endOf = function(e) {
                    return void 0 === (e = A(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }, da.format = function(e) {
                    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                    var t = U(this, e);
                    return this.localeData().postformat(t)
                }, da.from = function(e, t) {
                    return this.isValid() && (b(e) && e.isValid() || xt(e).isValid()) ? Bt({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, da.fromNow = function(e) {
                    return this.from(xt(), e)
                }, da.to = function(e, t) {
                    return this.isValid() && (b(e) && e.isValid() || xt(e).isValid()) ? Bt({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, da.toNow = function(e) {
                    return this.to(xt(), e)
                }, da.get = function(e) {
                    return T(this[e = A(e)]) ? this[e]() : this
                }, da.invalidAt = function() {
                    return h(this).overflow
                }, da.isAfter = function(e, t) {
                    var a = b(e) ? e : xt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(s(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                }, da.isBefore = function(e, t) {
                    var a = b(e) ? e : xt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(s(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                }, da.isBetween = function(e, t, a, n) {
                    return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
                }, da.isSame = function(e, t) {
                    var a, n = b(e) ? e : xt(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                }, da.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, da.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, da.isValid = function() {
                    return f(this)
                }, da.lang = Zt, da.locale = Xt, da.localeData = $t, da.max = jt, da.min = Tt, da.parsingFlags = function() {
                    return c({}, h(this))
                }, da.set = function(e, t) {
                    if ("object" == typeof e)
                        for (var a = function(e) {
                                var t = [];
                                for (var a in e) t.push({
                                    unit: a,
                                    priority: F[a]
                                });
                                return t.sort(function(e, t) {
                                    return e.priority - t.priority
                                }), t
                            }(e = E(e)), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
                    else if (T(this[e = A(e)])) return this[e](t);
                    return this
                }, da.startOf = function(e) {
                    switch (e = A(e)) {
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
                }, da.subtract = Qt, da.toArray = function() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }, da.toObject = function() {
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
                }, da.toDate = function() {
                    return new Date(this.valueOf())
                }, da.toISOString = function() {
                    if (!this.isValid()) return null;
                    var e = this.clone().utc();
                    return e.year() < 0 || e.year() > 9999 ? U(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(Date.prototype.toISOString) ? this.toDate().toISOString() : U(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }, da.inspect = function() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var a = "[" + e + '("]',
                        n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }, da.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, da.toString = function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, da.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, da.valueOf = function() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }, da.creationData = function() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }, da.year = ze, da.isLeapYear = function() {
                    return Re(this.year())
                }, da.weekYear = function(e) {
                    return ta.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, da.isoWeekYear = function(e) {
                    return ta.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, da.quarter = da.quarters = function(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }, da.month = Ae, da.daysInMonth = function() {
                    return je(this.year(), this.month())
                }, da.week = da.weeks = function(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, da.isoWeek = da.isoWeeks = function(e) {
                    var t = Je(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, da.weeksInYear = function() {
                    var e = this.localeData()._week;
                    return Ge(this.year(), e.dow, e.doy)
                }, da.isoWeeksInYear = function() {
                    return Ge(this.year(), 1, 4)
                }, da.date = aa, da.day = da.days = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = function(e, t) {
                        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                    }(e, this.localeData()), this.add(e - t, "d")) : t
                }, da.weekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }, da.isoWeekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = function(e, t) {
                            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                        }(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }, da.dayOfYear = function(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }, da.hour = da.hours = rt, da.minute = da.minutes = na, da.second = da.seconds = ia, da.millisecond = da.milliseconds = oa, da.utcOffset = function(e, t, a) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Wt(ue, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && t && (r = Rt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!t || this._changeInProgress ? Ut(this, Bt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? i : Rt(this)
                }, da.utc = function(e) {
                    return this.utcOffset(0, e)
                }, da.local = function(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Rt(this), "m")), this
                }, da.parseZone = function() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = Wt(le, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }, da.hasAlignedHourOffset = function(e) {
                    return !!this.isValid() && (e = e ? xt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }, da.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, da.isLocal = function() {
                    return !!this.isValid() && !this._isUTC
                }, da.isUtcOffset = function() {
                    return !!this.isValid() && this._isUTC
                }, da.isUtc = zt, da.isUTC = zt, da.zoneAbbr = function() {
                    return this._isUTC ? "UTC" : ""
                }, da.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, da.dates = w("dates accessor is deprecated. Use date instead.", aa), da.months = w("months accessor is deprecated. Use month instead", Ae), da.years = w("years accessor is deprecated. Use year instead", ze), da.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }), da.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                    if (!s(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (g(e, this), (e = wt(e))._a) {
                        var t = e._isUTC ? m(e._a) : xt(e._a);
                        this._isDSTShifted = this.isValid() && Y(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                });
                var ua = H.prototype;

                function ca(e, t, a, n) {
                    var r = mt(),
                        i = m().set(n, t);
                    return r[a](i, e)
                }

                function ma(e, t, a) {
                    if (o(e) && (t = e, e = void 0), e = e || "", null != t) return ca(e, t, a, "month");
                    var n, r = [];
                    for (n = 0; n < 12; n++) r[n] = ca(e, n, a, "month");
                    return r
                }

                function ha(e, t, a, n) {
                    "boolean" == typeof e ? (o(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, o(t) && (a = t, t = void 0), t = t || "");
                    var r, i = mt(),
                        s = e ? i._week.dow : 0;
                    if (null != a) return ca(t, (a + s) % 7, n, "day");
                    var d = [];
                    for (r = 0; r < 7; r++) d[r] = ca(t, (r + s) % 7, n, "day");
                    return d
                }
                ua.calendar = function(e, t, a) {
                    var n = this._calendar[e] || this._calendar.sameElse;
                    return T(n) ? n.call(t, a) : n
                }, ua.longDateFormat = function(e) {
                    var t = this._longDateFormat[e],
                        a = this._longDateFormat[e.toUpperCase()];
                    return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }, ua.invalidDate = function() {
                    return this._invalidDate
                }, ua.ordinal = function(e) {
                    return this._ordinal.replace("%d", e)
                }, ua.preparse = la, ua.postformat = la, ua.relativeTime = function(e, t, a, n) {
                    var r = this._relativeTime[a];
                    return T(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
                }, ua.pastFuture = function(e, t) {
                    var a = this._relativeTime[e > 0 ? "future" : "past"];
                    return T(a) ? a(t) : a.replace(/%s/i, t)
                }, ua.set = function(e) {
                    var t, a;
                    for (a in e) T(t = e[a]) ? this[a] = t : this["_" + a] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, ua.months = function(e, t) {
                    return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || He).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
                }, ua.monthsShort = function(e, t) {
                    return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[He.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, ua.monthsParse = function(e, t, a) {
                    var n, r, i;
                    if (this._monthsParseExact) return function(e, t, a) {
                        var n, r, i, s = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                        return a ? "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = Te.call(this._shortMonthsParse, s)) ? r : -1 !== (r = Te.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = Te.call(this._longMonthsParse, s)) ? r : -1 !== (r = Te.call(this._shortMonthsParse, s)) ? r : null
                    }.call(this, e, t, a);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (r = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                        if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                        if (!a && this._monthsParse[n].test(e)) return n
                    }
                }, ua.monthsRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || We.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, ua.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || We.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Ee), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, ua.week = function(e) {
                    return Je(e, this._week.dow, this._week.doy).week
                }, ua.firstDayOfYear = function() {
                    return this._week.doy
                }, ua.firstDayOfWeek = function() {
                    return this._week.dow
                }, ua.weekdays = function(e, t) {
                    return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }, ua.weekdaysMin = function(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }, ua.weekdaysShort = function(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }, ua.weekdaysParse = function(e, t, a) {
                    var n, r, i;
                    if (this._weekdaysParseExact) return function(e, t, a) {
                        var n, r, i, s = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
                        return a ? "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = Te.call(this._weekdaysParse, s)) ? r : -1 !== (r = Te.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = Te.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = Te.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = Te.call(this._weekdaysParse, s)) ? r : -1 !== (r = Te.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = Te.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = Te.call(this._weekdaysParse, s)) ? r : -1 !== (r = Te.call(this._shortWeekdaysParse, s)) ? r : null
                    }.call(this, e, t, a);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                        if (r = m([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                        if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                        if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                        if (!a && this._weekdaysParse[n].test(e)) return n
                    }
                }, ua.weekdaysRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, ua.weekdaysShortRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, ua.weekdaysMinRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }, ua.isPM = function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }, ua.meridiem = function(e, t, a) {
                    return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
                }, ut("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), n.lang = w("moment.lang is deprecated. Use moment.locale instead.", ut), n.langData = w("moment.langData is deprecated. Use moment.localeData instead.", mt);
                var _a = Math.abs;

                function fa(e, t, a, n) {
                    var r = Bt(t, a);
                    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
                }

                function pa(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function ya(e) {
                    return 4800 * e / 146097
                }

                function ga(e) {
                    return 146097 * e / 4800
                }

                function Ma(e) {
                    return function() {
                        return this.as(e)
                    }
                }
                var va = Ma("ms"),
                    ba = Ma("s"),
                    La = Ma("m"),
                    ka = Ma("h"),
                    Ya = Ma("d"),
                    Da = Ma("w"),
                    wa = Ma("M"),
                    Sa = Ma("y");

                function xa(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }
                var Ta = xa("milliseconds"),
                    ja = xa("seconds"),
                    Ha = xa("minutes"),
                    Oa = xa("hours"),
                    Pa = xa("days"),
                    Ca = xa("months"),
                    Aa = xa("years");
                var Ea = Math.round,
                    Fa = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    };
                var Wa = Math.abs;

                function Ia() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, a = Wa(this._milliseconds) / 1e3,
                        n = Wa(this._days),
                        r = Wa(this._months);
                    t = L((e = L(a / 60)) / 60), a %= 60, e %= 60;
                    var i = L(r / 12),
                        s = r %= 12,
                        o = n,
                        d = t,
                        l = e,
                        u = a,
                        c = this.asSeconds();
                    return c ? (c < 0 ? "-" : "") + "P" + (i ? i + "Y" : "") + (s ? s + "M" : "") + (o ? o + "D" : "") + (d || l || u ? "T" : "") + (d ? d + "H" : "") + (l ? l + "M" : "") + (u ? u + "S" : "") : "P0D"
                }
                var Ra = Pt.prototype;
                return Ra.isValid = function() {
                    return this._isValid
                }, Ra.abs = function() {
                    var e = this._data;
                    return this._milliseconds = _a(this._milliseconds), this._days = _a(this._days), this._months = _a(this._months), e.milliseconds = _a(e.milliseconds), e.seconds = _a(e.seconds), e.minutes = _a(e.minutes), e.hours = _a(e.hours), e.months = _a(e.months), e.years = _a(e.years), this
                }, Ra.add = function(e, t) {
                    return fa(this, e, t, 1)
                }, Ra.subtract = function(e, t) {
                    return fa(this, e, t, -1)
                }, Ra.as = function(e) {
                    if (!this.isValid()) return NaN;
                    var t, a, n = this._milliseconds;
                    if ("month" === (e = A(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + ya(t), "month" === e ? a : a / 12;
                    switch (t = this._days + Math.round(ga(this._months)), e) {
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
                }, Ra.asMilliseconds = va, Ra.asSeconds = ba, Ra.asMinutes = La, Ra.asHours = ka, Ra.asDays = Ya, Ra.asWeeks = Da, Ra.asMonths = wa, Ra.asYears = Sa, Ra.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
                }, Ra._bubble = function() {
                    var e, t, a, n, r, i = this._milliseconds,
                        s = this._days,
                        o = this._months,
                        d = this._data;
                    return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * pa(ga(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = L(i / 1e3), d.seconds = e % 60, t = L(e / 60), d.minutes = t % 60, a = L(t / 60), d.hours = a % 24, o += r = L(ya(s += L(a / 24))), s -= pa(ga(r)), n = L(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this
                }, Ra.get = function(e) {
                    return e = A(e), this.isValid() ? this[e + "s"]() : NaN
                }, Ra.milliseconds = Ta, Ra.seconds = ja, Ra.minutes = Ha, Ra.hours = Oa, Ra.days = Pa, Ra.weeks = function() {
                    return L(this.days() / 7)
                }, Ra.months = Ca, Ra.years = Aa, Ra.humanize = function(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(),
                        a = function(e, t, a) {
                            var n = Bt(e).abs(),
                                r = Ea(n.as("s")),
                                i = Ea(n.as("m")),
                                s = Ea(n.as("h")),
                                o = Ea(n.as("d")),
                                d = Ea(n.as("M")),
                                l = Ea(n.as("y")),
                                u = r <= Fa.ss && ["s", r] || r < Fa.s && ["ss", r] || i <= 1 && ["m"] || i < Fa.m && ["mm", i] || s <= 1 && ["h"] || s < Fa.h && ["hh", s] || o <= 1 && ["d"] || o < Fa.d && ["dd", o] || d <= 1 && ["M"] || d < Fa.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
                            return u[2] = t, u[3] = +e > 0, u[4] = a,
                                function(e, t, a, n, r) {
                                    return r.relativeTime(t || 1, !!a, e, n)
                                }.apply(null, u)
                        }(this, !e, t);
                    return e && (a = t.pastFuture(+this, a)), t.postformat(a)
                }, Ra.toISOString = Ia, Ra.toString = Ia, Ra.toJSON = Ia, Ra.locale = Xt, Ra.localeData = $t, Ra.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ia), Ra.lang = Zt, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), he("x", de), he("X", /[+-]?\d+(\.\d{1,3})?/), ye("X", function(e, t, a) {
                    a._d = new Date(1e3 * parseFloat(e, 10))
                }), ye("x", function(e, t, a) {
                    a._d = new Date(k(e))
                }), n.version = "2.18.1", t = xt, n.fn = da, n.min = function() {
                    return Ht("isBefore", [].slice.call(arguments, 0))
                }, n.max = function() {
                    return Ht("isAfter", [].slice.call(arguments, 0))
                }, n.now = function() {
                    return Date.now ? Date.now() : +new Date
                }, n.utc = m, n.unix = function(e) {
                    return xt(1e3 * e)
                }, n.months = function(e, t) {
                    return ma(e, t, "months")
                }, n.isDate = d, n.locale = ut, n.invalid = p, n.duration = Bt, n.isMoment = b, n.weekdays = function(e, t, a) {
                    return ha(e, t, a, "weekdays")
                }, n.parseZone = function() {
                    return xt.apply(null, arguments).parseZone()
                }, n.localeData = mt, n.isDuration = Ct, n.monthsShort = function(e, t) {
                    return ma(e, t, "monthsShort")
                }, n.weekdaysMin = function(e, t, a) {
                    return ha(e, t, a, "weekdaysMin")
                }, n.defineLocale = ct, n.updateLocale = function(e, t) {
                    if (null != t) {
                        var a, n = it;
                        null != st[e] && (n = st[e]._config), (a = new H(t = j(n, t))).parentLocale = st[e], st[e] = a, ut(e)
                    } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);
                    return st[e]
                }, n.locales = function() {
                    return O(st)
                }, n.weekdaysShort = function(e, t, a) {
                    return ha(e, t, a, "weekdaysShort")
                }, n.normalizeUnits = A, n.relativeTimeRounding = function(e) {
                    return void 0 === e ? Ea : "function" == typeof e && (Ea = e, !0)
                }, n.relativeTimeThreshold = function(e, t) {
                    return void 0 !== Fa[e] && (void 0 === t ? Fa[e] : (Fa[e] = t, "s" === e && (Fa.ss = t - 1), !0))
                }, n.calendarFormat = function(e, t) {
                    var a = e.diff(t, "days", !0);
                    return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
                }, n.prototype = da, n
            }, e.exports = t()
        }).call(t, a("3IRH")(e))
    },
    Q65K: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            r = a("GiK3"),
            i = a("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(i._2, {
                        fullWidth: !0
                    }, r.createElement("canvas", {
                        ref: this.handleCanvasReady
                    }))
                }, t.prototype.setCanvasResolution = function(e) {
                    var t = e.width,
                        a = e.height,
                        n = this.getPixelRatio(e.getContext("2d"));
                    e.width = t * n, e.height = a * n, e.style.width = t + "px", e.style.height = a + "px", e.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t.prototype.getPixelRatio = function(e) {
                    return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                }, t
            }(r.Component);
        a.d(t, "a", function() {
            return s
        })
    },
    QV34: function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            r = a("IbXy");
        e.exports = function(e) {
            var t = n.noop;
            e.LinearScaleBase = e.Scale.extend({
                getRightValue: function(t) {
                    return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                },
                handleTickRangeOptions: function() {
                    var e = this,
                        t = e.options.ticks;
                    if (t.beginAtZero) {
                        var a = n.sign(e.min),
                            r = n.sign(e.max);
                        a < 0 && r < 0 ? e.max = 0 : a > 0 && r > 0 && (e.min = 0)
                    }
                    var i = void 0 !== t.min || void 0 !== t.suggestedMin,
                        s = void 0 !== t.max || void 0 !== t.suggestedMax;
                    void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), i !== s && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
                },
                getTickLimit: t,
                handleDirectionalChanges: t,
                buildTicks: function() {
                    var e = this,
                        t = e.options.ticks,
                        a = e.getTickLimit(),
                        i = {
                            maxTicks: a = Math.max(2, a),
                            min: t.min,
                            max: t.max,
                            stepSize: n.valueOrDefault(t.fixedStepSize, t.stepSize)
                        },
                        s = e.ticks = r.generators.linear(i, e);
                    e.handleDirectionalChanges(), e.max = n.max(s), e.min = n.min(s), t.reverse ? (s.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                },
                convertTicksToLabels: function() {
                    var t = this;
                    t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                }
            })
        }
    },
    Qor1: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N"),
            s = n.global.defaultColor;

        function o(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }
        n._set("global", {
            elements: {
                point: {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: s,
                    borderColor: s,
                    borderWidth: 1,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }
            }
        }), e.exports = r.extend({
            inRange: function(e, t) {
                var a = this._view;
                return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
            },
            inLabelRange: o,
            inXRange: o,
            inYRange: function(e) {
                var t = this._view;
                return !!t && Math.pow(e - t.y, 2) < Math.pow(t.radius + t.hitRadius, 2)
            },
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
                    r = this._chart.ctx,
                    o = t.pointStyle,
                    d = t.radius,
                    l = t.x,
                    u = t.y,
                    c = i.color,
                    m = 0;
                t.skip || (r.strokeStyle = t.borderColor || s, r.lineWidth = i.valueOrDefault(t.borderWidth, n.global.elements.point.borderWidth), r.fillStyle = t.backgroundColor || s, void 0 !== e && (a.x < e.left || 1.01 * e.right < a.x || a.y < e.top || 1.01 * e.bottom < a.y) && (a.x < e.left ? m = (l - a.x) / (e.left - a.x) : 1.01 * e.right < a.x ? m = (a.x - l) / (a.x - e.right) : a.y < e.top ? m = (u - a.y) / (e.top - a.y) : 1.01 * e.bottom < a.y && (m = (a.y - u) / (a.y - e.bottom)), m = Math.round(100 * m) / 100, r.strokeStyle = c(r.strokeStyle).alpha(m).rgbString(), r.fillStyle = c(r.fillStyle).alpha(m).rgbString()), i.canvas.drawPoint(r, o, d, l, u))
            }
        })
    },
    RVgG: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            r = a("HW6M"),
            i = a("GiK3"),
            s = a("F8kA"),
            o = a("i3Vq"),
            d = a("PGY2"),
            l = a("Odds"),
            u = {
                "data-test-selector": "achievement-card"
            },
            c = function(e) {
                return i.createElement(s.a, n.__assign({
                    className: "ach-link",
                    "aria-hidden": e.isHidden,
                    tabIndex: e.isHidden ? -1 : void 0,
                    to: d.b.achievement(e.achievement)
                }, u), i.createElement(m, {
                    achievement: e.achievement,
                    className: e.layoutClassName
                }, e.children))
            },
            m = function(e) {
                var t, a = r(e.className, {
                    "ach-card": !0,
                    "ach-card--completed": Boolean(e.achievement.completedAt),
                    "ach-card--recent": e.achievement.wasRecentlyCompleted()
                });
                return e.achievement.completedAt || (t = i.createElement(l._8, {
                    position: l._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, i.createElement(l._18, {
                    size: l._20.ExtraSmall,
                    value: 100 * e.achievement.progressRatio
                }))), i.createElement(l._35, {
                    className: a,
                    position: l._15.Relative
                }, i.createElement(l._35, {
                    className: "ach-card__inner"
                }, i.createElement(o.a, {
                    achievement: e.achievement
                }, i.createElement("div", null, t, e.children))))
            };
        a.d(t, !1, function() {
            return u
        }), a.d(t, "a", function() {
            return c
        })
    },
    RnJI: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ka", {
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
        })(a("PJh5"))
    },
    Rra7: function(e, t) {},
    Sjoy: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("en-au", {
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
        })(a("PJh5"))
    },
    TWHA: function(e, t, a) {
        var n = a("YjuW"),
            r = function() {
                return new l
            };
        for (var i in n) {
            r[i + "Raw"] = function(e) {
                return function(t) {
                    return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), n[e](t)
                }
            }(i);
            var s = /(\w+)2(\w+)/.exec(i),
                o = s[1],
                d = s[2];
            (r[o] = r[o] || {})[d] = r[i] = function(e) {
                return function(t) {
                    "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                    var a = n[e](t);
                    if ("string" == typeof a || void 0 === a) return a;
                    for (var r = 0; r < a.length; r++) a[r] = Math.round(a[r]);
                    return a
                }
            }(i)
        }
        var l = function() {
            this.convs = {}
        };
        l.prototype.routeSpace = function(e, t) {
            var a = t[0];
            return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a))
        }, l.prototype.setValues = function(e, t) {
            return this.space = e, this.convs = {}, this.convs[e] = t, this
        }, l.prototype.getValues = function(e) {
            var t = this.convs[e];
            if (!t) {
                var a = this.space,
                    n = this.convs[a];
                t = r[a][e](n), this.convs[e] = t
            }
            return t
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
            l.prototype[e] = function(t) {
                return this.routeSpace(e, arguments)
            }
        }), e.exports = r
    },
    Tqun: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("en-ca", {
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
        })(a("PJh5"))
    },
    V0td: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("sq", {
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
        })(a("PJh5"))
    },
    V4qH: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("hr", {
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
        })(a("PJh5"))
    },
    VK9h: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("fr-ch", {
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
        })(a("PJh5"))
    },
    VRu6: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N"),
            s = a("IbXy");

        function o(e) {
            var t, a, n = [];
            for (t = 0, a = e.length; t < a; ++t) n.push(e[t].label);
            return n
        }

        function d(e, t, a) {
            var n = e.getPixelForTick(t);
            return a && (n -= 0 === t ? (e.getPixelForTick(1) - n) / 2 : (n - e.getPixelForTick(t - 1)) / 2), n
        }
        n._set("scale", {
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
                callback: s.formatters.values,
                minor: {},
                major: {}
            }
        }), e.exports = function(e) {
            function t(e, t, a) {
                return i.isArray(t) ? i.longestText(e, a, t) : e.measureText(t).width
            }

            function a(e) {
                var t = i.valueOrDefault,
                    a = n.global,
                    r = t(e.fontSize, a.defaultFontSize),
                    s = t(e.fontStyle, a.defaultFontStyle),
                    o = t(e.fontFamily, a.defaultFontFamily);
                return {
                    size: r,
                    style: s,
                    family: o,
                    font: i.fontString(r, s, o)
                }
            }

            function s(e) {
                return i.options.toLineHeight(i.valueOrDefault(e.lineHeight, 1.2), i.valueOrDefault(e.fontSize, n.global.defaultFontSize))
            }
            e.Scale = r.extend({
                getPadding: function() {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                },
                getTicks: function() {
                    return this._ticks
                },
                mergeTicksOptions: function() {
                    var e = this.options.ticks;
                    for (var t in !1 === e.minor && (e.minor = {
                            display: !1
                        }), !1 === e.major && (e.major = {
                            display: !1
                        }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                },
                beforeUpdate: function() {
                    i.callback(this.options.beforeUpdate, [this])
                },
                update: function(e, t, a) {
                    var n, r, s, o, d, l, u = this;
                    for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = i.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, a), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), d = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), s = u.convertTicksToLabels(d) || u.ticks, u.afterTickToLabelConversion(), u.ticks = s, n = 0, r = s.length; n < r; ++n) o = s[n], (l = d[n]) ? l.label = o : d.push(l = {
                        label: o,
                        major: !1
                    });
                    return u._ticks = d, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                },
                afterUpdate: function() {
                    i.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function() {
                    i.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                },
                afterSetDimensions: function() {
                    i.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function() {
                    i.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: i.noop,
                afterDataLimits: function() {
                    i.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function() {
                    i.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: i.noop,
                afterBuildTicks: function() {
                    i.callback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function() {
                    i.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function() {
                    var e = this.options.ticks;
                    this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                },
                afterTickToLabelConversion: function() {
                    i.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function() {
                    i.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function() {
                    var e = this,
                        t = e.ctx,
                        n = e.options.ticks,
                        r = o(e._ticks),
                        s = a(n);
                    t.font = s.font;
                    var d = n.minRotation || 0;
                    if (r.length && e.options.display && e.isHorizontal())
                        for (var l, u = i.longestText(t, s.font, r, e.longestTextCache), c = u, m = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > m && d < n.maxRotation;) {
                            var h = i.toRadians(d);
                            if (l = Math.cos(h), Math.sin(h) * u > e.maxHeight) {
                                d--;
                                break
                            }
                            d++, c = l * u
                        }
                    e.labelRotation = d
                },
                afterCalculateTickRotation: function() {
                    i.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function() {
                    i.callback(this.options.beforeFit, [this])
                },
                fit: function() {
                    var e = this,
                        n = e.minSize = {
                            width: 0,
                            height: 0
                        },
                        r = o(e._ticks),
                        d = e.options,
                        l = d.ticks,
                        u = d.scaleLabel,
                        c = d.gridLines,
                        m = d.display,
                        h = e.isHorizontal(),
                        _ = a(l),
                        f = d.gridLines.tickMarkLength;
                    if (n.width = h ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && c.drawTicks ? f : 0, n.height = h ? m && c.drawTicks ? f : 0 : e.maxHeight, u.display && m) {
                        var p = s(u) + i.options.toPadding(u.padding).height;
                        h ? n.height += p : n.width += p
                    }
                    if (l.display && m) {
                        var y = i.longestText(e.ctx, _.font, r, e.longestTextCache),
                            g = i.numberOfLabelLines(r),
                            M = .5 * _.size,
                            v = e.options.ticks.padding;
                        if (h) {
                            e.longestLabelWidth = y;
                            var b = i.toRadians(e.labelRotation),
                                L = Math.cos(b),
                                k = Math.sin(b) * y + _.size * g + M * (g - 1) + M;
                            n.height = Math.min(e.maxHeight, n.height + k + v), e.ctx.font = _.font;
                            var Y = t(e.ctx, r[0], _.font),
                                D = t(e.ctx, r[r.length - 1], _.font);
                            0 !== e.labelRotation ? (e.paddingLeft = "bottom" === d.position ? L * Y + 3 : L * M + 3, e.paddingRight = "bottom" === d.position ? L * M + 3 : L * D + 3) : (e.paddingLeft = Y / 2 + 3, e.paddingRight = D / 2 + 3)
                        } else l.mirror ? y = 0 : y += v + M, n.width = Math.min(e.maxWidth, n.width + y), e.paddingTop = _.size / 2, e.paddingBottom = _.size / 2
                    }
                    e.handleMargins(), e.width = n.width, e.height = n.height
                },
                handleMargins: function() {
                    var e = this;
                    e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                },
                afterFit: function() {
                    i.callback(this.options.afterFit, [this])
                },
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function() {
                    return this.options.fullWidth
                },
                getRightValue: function(e) {
                    if (i.isNullOrUndef(e)) return NaN;
                    if ("number" == typeof e && !isFinite(e)) return NaN;
                    if (e)
                        if (this.isHorizontal()) {
                            if (void 0 !== e.x) return this.getRightValue(e.x)
                        } else if (void 0 !== e.y) return this.getRightValue(e.y);
                    return e
                },
                getLabelForIndex: i.noop,
                getPixelForValue: i.noop,
                getValueForPixel: i.noop,
                getPixelForTick: function(e) {
                    var t = this,
                        a = t.options.offset;
                    if (t.isHorizontal()) {
                        var n = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (a ? 0 : 1), 1),
                            r = n * e + t.paddingLeft;
                        a && (r += n / 2);
                        var i = t.left + Math.round(r);
                        return i += t.isFullWidth() ? t.margins.left : 0
                    }
                    var s = t.height - (t.paddingTop + t.paddingBottom);
                    return t.top + e * (s / (t._ticks.length - 1))
                },
                getPixelForDecimal: function(e) {
                    var t = this;
                    if (t.isHorizontal()) {
                        var a = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
                            n = t.left + Math.round(a);
                        return n += t.isFullWidth() ? t.margins.left : 0
                    }
                    return t.top + e * t.height
                },
                getBasePixel: function() {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function() {
                    var e = this.min,
                        t = this.max;
                    return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
                },
                _autoSkip: function(e) {
                    var t, a, n, r, s = this,
                        o = s.isHorizontal(),
                        d = s.options.ticks.minor,
                        l = e.length,
                        u = i.toRadians(s.labelRotation),
                        c = Math.cos(u),
                        m = s.longestLabelWidth * c,
                        h = [];
                    for (d.maxTicksLimit && (r = d.maxTicksLimit), o && (t = !1, (m + d.autoSkipPadding) * l > s.width - (s.paddingLeft + s.paddingRight) && (t = 1 + Math.floor((m + d.autoSkipPadding) * l / (s.width - (s.paddingLeft + s.paddingRight)))), r && l > r && (t = Math.max(t, Math.floor(l / r)))), a = 0; a < l; a++) n = e[a], (t > 1 && a % t > 0 || a % t == 0 && a + t >= l) && a !== l - 1 && delete n.label, h.push(n);
                    return h
                },
                draw: function(e) {
                    var t = this,
                        r = t.options;
                    if (r.display) {
                        var o = t.ctx,
                            l = n.global,
                            u = r.ticks.minor,
                            c = r.ticks.major || u,
                            m = r.gridLines,
                            h = r.scaleLabel,
                            _ = 0 !== t.labelRotation,
                            f = t.isHorizontal(),
                            p = u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            y = i.valueOrDefault(u.fontColor, l.defaultFontColor),
                            g = a(u),
                            M = i.valueOrDefault(c.fontColor, l.defaultFontColor),
                            v = a(c),
                            b = m.drawTicks ? m.tickMarkLength : 0,
                            L = i.valueOrDefault(h.fontColor, l.defaultFontColor),
                            k = a(h),
                            Y = i.options.toPadding(h.padding),
                            D = i.toRadians(t.labelRotation),
                            w = [],
                            S = "right" === r.position ? t.left : t.right - b,
                            x = "right" === r.position ? t.left + b : t.right,
                            T = "bottom" === r.position ? t.top : t.bottom - b,
                            j = "bottom" === r.position ? t.top + b : t.bottom;
                        if (i.each(p, function(a, n) {
                                if (!i.isNullOrUndef(a.label)) {
                                    var s, o, c, h, y, g, M, v, L, k, Y, H, O, P, C = a.label;
                                    n === t.zeroLineIndex && r.offset === m.offsetGridLines ? (s = m.zeroLineWidth, o = m.zeroLineColor, c = m.zeroLineBorderDash, h = m.zeroLineBorderDashOffset) : (s = i.valueAtIndexOrDefault(m.lineWidth, n), o = i.valueAtIndexOrDefault(m.color, n), c = i.valueOrDefault(m.borderDash, l.borderDash), h = i.valueOrDefault(m.borderDashOffset, l.borderDashOffset));
                                    var A = "middle",
                                        E = "middle",
                                        F = u.padding;
                                    if (f) {
                                        var W = b + F;
                                        "bottom" === r.position ? (E = _ ? "middle" : "top", A = _ ? "right" : "center", P = t.top + W) : (E = _ ? "middle" : "bottom", A = _ ? "left" : "center", P = t.bottom - W);
                                        var I = d(t, n, m.offsetGridLines && p.length > 1);
                                        I < t.left && (o = "rgba(0,0,0,0)"), I += i.aliasPixel(s), O = t.getPixelForTick(n) + u.labelOffset, y = M = L = Y = I, g = T, v = j, k = e.top, H = e.bottom
                                    } else {
                                        var R, z = "left" === r.position;
                                        u.mirror ? (A = z ? "left" : "right", R = F) : (A = z ? "right" : "left", R = b + F), O = z ? t.right - R : t.left + R;
                                        var N = d(t, n, m.offsetGridLines && p.length > 1);
                                        N < t.top && (o = "rgba(0,0,0,0)"), N += i.aliasPixel(s), P = t.getPixelForTick(n) + u.labelOffset, y = S, M = x, L = e.left, Y = e.right, g = v = k = H = N
                                    }
                                    w.push({
                                        tx1: y,
                                        ty1: g,
                                        tx2: M,
                                        ty2: v,
                                        x1: L,
                                        y1: k,
                                        x2: Y,
                                        y2: H,
                                        labelX: O,
                                        labelY: P,
                                        glWidth: s,
                                        glColor: o,
                                        glBorderDash: c,
                                        glBorderDashOffset: h,
                                        rotation: -1 * D,
                                        label: C,
                                        major: a.major,
                                        textBaseline: E,
                                        textAlign: A
                                    })
                                }
                            }), i.each(w, function(e) {
                                if (m.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), u.display) {
                                    o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? v.font : g.font, o.fillStyle = e.major ? M : y, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (i.isArray(t))
                                        for (var a = 0, n = 0; a < t.length; ++a) o.fillText("" + t[a], 0, n), n += 1.5 * g.size;
                                    else o.fillText(t, 0, 0);
                                    o.restore()
                                }
                            }), h.display) {
                            var H, O, P = 0,
                                C = s(h) / 2;
                            if (f) H = t.left + (t.right - t.left) / 2, O = "bottom" === r.position ? t.bottom - C - Y.bottom : t.top + C + Y.top;
                            else {
                                var A = "left" === r.position;
                                H = A ? t.left + C + Y.top : t.right - C - Y.top, O = t.top + (t.bottom - t.top) / 2, P = A ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(H, O), o.rotate(P), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = L, o.font = k.font, o.fillText(h.labelString, 0, 0), o.restore()
                        }
                        if (m.drawBorder) {
                            o.lineWidth = i.valueAtIndexOrDefault(m.lineWidth, 0), o.strokeStyle = i.valueAtIndexOrDefault(m.color, 0);
                            var E = t.left,
                                F = t.right,
                                W = t.top,
                                I = t.bottom,
                                R = i.aliasPixel(o.lineWidth);
                            f ? (W = I = "top" === r.position ? t.bottom : t.top, W += R, I += R) : (E = F = "left" === r.position ? t.right : t.left, E += R, F += R), o.beginPath(), o.moveTo(E, W), o.lineTo(F, I), o.stroke()
                        }
                    }
                }
            })
        }
    },
    Vz2w: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("zh-cn", {
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
        })(a("PJh5"))
    },
    WaEV: function(e, t, a) {
        var n = a("+ItH")();
        n.helpers = a("iO9N"), a("lG75")(n), n.defaults = a("k7DW"), n.Element = a("wGD1"), n.elements = a("L5rj"), n.Interaction = a("KC8c"), n.platform = a("2xI1"), a("4Uxm")(n), a("6rMk")(n), a("ghsk")(n), a("oQMP")(n), a("hAmm")(n), a("jJ84")(n), a("VRu6")(n), a("/jKm")(n), a("QV34")(n), a("40fB")(n), a("XhZS")(n), a("1Nt4")(n), a("sFo6")(n), a("Db81")(n), a("GBuA")(n), a("19SQ")(n), a("sFj2")(n), a("8uqi")(n), a("Fv8P")(n), a("2ddL")(n), a("mC8W")(n), a("vvdA")(n), a("wPWQ")(n), a("mg6x")(n), a("0gJx")(n), a("gCP2")(n), a("0C1O")(n), a("GqGk")(n);
        var r = [];
        r.push(a("A5K1")(n), a("ZmvM")(n), a("lRs/")(n)), n.plugins.register(r), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
    },
    WmaG: function(e, t, a) {
        "use strict";
        var n, r = a("TToO"),
            i = a("GiK3"),
            s = a("6sO2"),
            o = a("+Znq"),
            d = a("RH2O"),
            l = a("PGY2"),
            u = a("vH/s");

        function c(e) {
            s.n.track(u.SpadeEventType.DashboardHelpInteraction, e)
        }! function(e) {
            e.OpenHelp = "open_help", e.LearnMore = "learn_more", e.OpenSendFeedback = "open_send_feedback", e.CancelFeedback = "cancel_feedback", e.SentFeedback = "sent_feedback"
        }(n || (n = {}));
        var m = a("Odds"),
            h = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleCancel = function() {
                        c({
                            action: n.CancelFeedback,
                            location: "dashboard/" + a.props.page
                        }), a.props.onClose()
                    }, a.handleChange = function(e) {
                        a.setState({
                            body: e.currentTarget.value
                        })
                    }, a.sendFeedback = function() {
                        return r.__awaiter(a, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.setState({
                                            inFlight: !0,
                                            errorMessage: ""
                                        }), e = "https://api.twitch.tv/kraken/users/" + this.props.currentUserID + "/stats_feedbacks", [4, Object(l.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                message: this.state.body,
                                                page: this.props.page
                                            }
                                        })];
                                    case 1:
                                        return t = a.sent(), c({
                                            action: n.SentFeedback,
                                            location: "dashboard/" + this.props.page
                                        }), t.isError() ? this.setState({
                                            inFlight: !1,
                                            errorMessage: t.error.message
                                        }) : this.setState({
                                            body: "",
                                            inFlight: !1,
                                            errorMessage: "",
                                            successTimeout: setTimeout(this.props.onClose, 2e3)
                                        }), [2]
                                }
                            })
                        })
                    }, a.state = {
                        body: "",
                        inFlight: !1,
                        errorMessage: "",
                        successTimeout: 0
                    }, a
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.state.successTimeout)
                }, t.prototype.render = function() {
                    return i.createElement(m._8, {
                        padding: 2
                    }, i.createElement(m.W, {
                        label: Object(s.d)("How can we improve this page for you?", "DashboardFeedbackForm"),
                        error: Boolean(this.state.errorMessage.length),
                        errorMessage: this.state.errorMessage
                    }, i.createElement(m._8, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(m._46, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0,
                        onChange: this.handleChange,
                        placeholder: Object(s.d)("It would help me if this page...", "DashboardFeedbackForm"),
                        rows: 4,
                        noResize: !0
                    }))), i.createElement(m._8, {
                        display: m.R.Flex,
                        flexGrow: 1,
                        flexWrap: m.U.NoWrap,
                        justifyContent: m._7.End,
                        padding: {
                            top: 2
                        }
                    }, i.createElement(m._8, {
                        padding: {
                            right: 1
                        }
                    }, i.createElement(m.v, {
                        onClick: this.handleCancel,
                        type: m.B.Text,
                        "data-test-selector": "feedback-form-cancel"
                    }, Object(s.d)("Cancel", "DashboardFeedbackForm"))), i.createElement(m.v, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0 || 0 === this.state.body.length,
                        onClick: this.sendFeedback,
                        "data-test-selector": "feedback-form-submit"
                    }, this.state.successTimeout > 0 ? Object(s.d)("Sent", "DashboardFeedbackForm") : Object(s.d)("Send Feedback", "DashboardFeedbackForm"))))
                }, t
            }(i.Component);
        var _ = Object(d.b)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            })(h),
            f = (a("Nwhx"), function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.selectFeedbackForm = function() {
                        a.setState({
                            isFeedbackFormSelected: !0
                        }), c({
                            action: n.OpenSendFeedback,
                            location: "dashboard/" + a.props.page
                        })
                    }, a.unselectFeedbackForm = function() {
                        a.setState({
                            isFeedbackFormSelected: !1
                        })
                    }, a.handleLearnMoreClick = function() {
                        c({
                            action: n.LearnMore,
                            location: "dashboard/" + a.props.page
                        })
                    }, a.handleToggle = function(e) {
                        e ? a.setState({
                            isFeedbackFormSelected: !1
                        }) : c({
                            action: n.OpenHelp,
                            location: "dashboard/" + a.props.page
                        })
                    }, a.state = {
                        isFeedbackFormSelected: !1
                    }, a
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.state.isFeedbackFormSelected ? i.createElement(_, {
                        page: this.props.page,
                        onClose: this.unselectFeedbackForm,
                        key: 0
                    }) : i.createElement(m._35, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        color: m.K.Base
                    }, i.createElement(m._6, {
                        linkTo: this.props.learnMoreUrl,
                        onClick: this.handleLearnMoreClick,
                        targetBlank: !0
                    }, i.createElement(m._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement(m.Q, null, Object(s.d)("Learn More", "DashboardHelpMenu")))), i.createElement(m._6, {
                        onClick: this.selectFeedbackForm
                    }, i.createElement(m._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement(m.Q, null, Object(s.d)("Send Feedback", "DashboardHelpMenu"))))), i.createElement(m._35, {
                        className: "help-menu",
                        position: m._15.Absolute,
                        margin: {
                            bottom: 2,
                            right: 2
                        },
                        zIndex: m._62.Above,
                        background: m.n.Overlay,
                        elevation: 3,
                        attachBottom: !0,
                        attachRight: !0
                    }, i.createElement(o.a, {
                        onToggle: this.handleToggle,
                        tooltipProps: {
                            align: m._53.Right,
                            direction: m._54.Top,
                            label: Object(s.d)("Help & Feedback", "DashboardHelpMenu"),
                            offsetX: "6px",
                            offsetY: "10px"
                        }
                    }, i.createElement(m.w, {
                        ariaLabel: Object(s.d)("Feedback", "DashboardHelpMenu"),
                        icon: m._25.QuestionMark,
                        "data-a-target": "help-button",
                        overlay: !0
                    }), i.createElement(m.q, {
                        direction: m.r.TopRight,
                        size: this.state.isFeedbackFormSelected ? m.s.Large : m.s.Small,
                        "data-a-target": "help-balloon",
                        offsetX: "6px"
                    }, e)))
                }, t
            }(i.Component));
        a.d(t, "a", function() {
            return f
        })
    },
    "XU/q": function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return s
        });
        var n = a("GiK3"),
            r = (a.n(n), a("jnhC")),
            i = a("Odds"),
            s = function(e) {
                var t = e.children,
                    a = e.tooltip,
                    r = e.title;
                return n.createElement(i._8, {
                    margin: {
                        bottom: 4
                    }
                }, n.createElement(o, {
                    tooltip: a
                }, r), n.createElement(i._35, {
                    elevation: 1,
                    background: i.n.Base
                }, t))
            },
            o = function(e) {
                var t = e.children,
                    a = e.tooltip;
                return n.createElement(i._8, {
                    alignItems: i.c.Center,
                    display: i.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, n.createElement(i.Q, {
                    type: i._49.H5,
                    bold: !0
                }, t), a && n.createElement(r.a, {
                    direction: i.r.Top
                }, a))
            }
    },
    XU1s: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("uz", {
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
        })(a("PJh5"))
    },
    Xcw2: function(e, t, a) {
        "use strict";
        var n, r = a("TToO"),
            i = a("GiK3"),
            s = a("AJEV"),
            o = a("6w0d"),
            d = a("6sO2");

        function l(e, t) {
            var a = function() {
                    if (n) return n;
                    return n = {
                        broadcast_n_hours_30_days: {
                            title: Object(d.d)("New day, new stream", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Stream for {numOfHours, number} hours in the last 30 days", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Stream on a regular schedule to help draw in more viewers. Find the balance that works for you.", "AchievementLongDescription"),
                            levelGoals: [4, 8, 25, 40]
                        },
                        n_followers: {
                            title: Object(d.d)("What is thy bidding?", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Reach {numOfFollowers, number} followers", {
                                    numOfFollowers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Followers can opt in to be notified when you stream or share an update.", "AchievementLongDescription"),
                            levelGoals: [2, 10, 50, 200]
                        },
                        n_broadcast_days_30_days: {
                            title: Object(d.d)("Like clockwork", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Stream for {numOfDays, number} unique days in the last 30 days", {
                                    numOfDays: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Stream on different days to reach different viewers. Unique days are based on GMT.", "AchievementLongDescription"),
                            levelGoals: [2, 7, 12, 25]
                        },
                        n_concurrents_30_days: {
                            title: Object(d.d)("Who watches the watchers?", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Reach {numOfViewers, number} average viewers in the last 30 days", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Check average viewers on your stats page. If you notice a spike, try to replicate that magic!", "AchievementLongDescription"),
                            levelGoals: [3, 10, 15, 75]
                        },
                        first_stream: {
                            title: Object(d.d)("It's happening", "AchievementTitle"),
                            description: function() {
                                return Object(d.d)("Start your first stream", "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Start your first stream on Twitch to complete this achievement.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_dashboard_visit: {
                            title: Object(d.d)("Know your stuff", "AchievementTitle"),
                            description: function() {
                                return Object(d.d)("Explore your dashboard", "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Your dashboard is the best place to update your stream settings, monitor stats, and more.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_broadcast_title: {
                            title: Object(d.d)("Name of the game", "AchievementTitle"),
                            description: function() {
                                return Object(d.d)("Update your stream title", "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Add a compelling title to draw viewers to your stream.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_select_game_community: {
                            title: Object(d.d)("We belong", "AchievementTitle"),
                            description: function() {
                                return Object(d.d)("Update your Game/Category and Community", "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Tag your stream with a Game/Category and Community to help viewers find your channel.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        n_hours_lifetime: {
                            title: Object(d.d)("The empire business", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Stream for {numOfHours, number} hours total", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("The more you stream, the more often viewers can tune in. Take a break whenever you need to.", "AchievementLongDescription"),
                            levelGoals: [250, 500, 1e3, 2e3]
                        },
                        n_same_week_stream_start_time: {
                            title: Object(d.d)("Same time next week", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Start a stream on the same day of week and time for {numOfWeeks, number} weeks in a row", {
                                    numOfWeeks: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("When you stream on the same day and time each week, viewers know when to tune in.", "AchievementLongDescription"),
                            levelGoals: [2, 4, 8, 16]
                        },
                        n_minute_watched_lifetime: {
                            title: Object(d.d)("Kind of a big deal", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Reach {numOfHours, number} hours watched total on your channel", {
                                    numOfHours: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("The more you stream, the more often viewers can tune in. If you're partner and unlock this achievement, you'll have a chance to get swag!", "AchievementLongDescription"),
                            levelGoals: [25e4, 5e5, 1e6, 1e7]
                        },
                        n_viewers_lifetime: {
                            title: Object(d.d)("People know me", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Have {numOfViewers, number} viewers at the same time", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Keep your viewers around by welcoming them to your channel and responding to their comments.", "AchievementLongDescription"),
                            levelGoals: [50, 100, 250, 1e3]
                        },
                        n_unique_chatter_broadcast: {
                            title: Object(d.d)("Talk to me", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Get {numOfPeople, number} people chatting at the same time", {
                                    numOfPeople: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Chat with your viewers to engage them. Engaged viewers are more likely to return.", "AchievementLongDescription"),
                            levelGoals: [25, 50, 100, 200]
                        },
                        n_raid_consecutive_broadcast: {
                            title: Object(d.d)("Raiding party", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Raid {numOfStreams, number} times with 2 or more raiders", {
                                    numOfStreams: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)('Type "/raid (channel)" in chat to bring your viewers to another awesome streamer.', "AchievementLongDescription"),
                            levelGoals: [100]
                        },
                        n_days_since_first_stream: {
                            title: Object(d.d)("Happy Twitchiversary", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Reach your {numOfYears, number}-year streaming anniversary on Twitch", {
                                    numOfYears: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("We really wanted to send you some cake, but this Achievement will have to do. See you again next year!", "AchievementLongDescription"),
                            levelGoals: [1, 2, 3, 4]
                        },
                        n_autohost: {
                            title: Object(d.d)("Mr. Roboto", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Add {numOfChannels, number} channels to your auto host list", {
                                    numOfChannels: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Add to your auto host list from channel settings to highlight another channel whenever you're offline.", "AchievementLongDescription"),
                            levelGoals: [5]
                        },
                        single_twitchcon2017: {
                            title: Object(d.d)("TwitchCon get", "AchievementTitle"),
                            description: function() {
                                return Object(d.d)("Purchase a TwitchCon ticket", "AchievementDescription")
                            },
                            longDescription: Object(d.d)("You provided your Twitch ID when you purchased your TwitchCon ticket. If you missed this year, hopefully you can make it next year!", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        single_chat: {
                            title: Object(d.d)("Message in a bottle", "AchievementTitle"),
                            description: function() {
                                return Object(d.d)("Send a chat message in your own channel", "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Talking while streaming is great, but also try chatting and emoting in your own channel.", "AchievementLongDescription"),
                            levelGoals: []
                        },
                        n_days_no_viewers: {
                            title: Object(d.d)("Hang in there", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Had < {numOfViewers, number} viewers for two streams and kept at it", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("Streaming isn't easy and it takes time to attract viewers. Try inviting your friends to get started.", "AchievementLongDescription"),
                            levelGoals: [3]
                        },
                        n_max_concurrents_m_streams: {
                            title: Object(d.d)("The horde descends", "AchievementTitle"),
                            description: function(e) {
                                return Object(d.d)("Reach at least {numOfViewers, number} viewers over five streams.", {
                                    numOfViewers: e
                                }, "AchievementDescription")
                            },
                            longDescription: Object(d.d)("They'll tell two friends. And they'll tell two friends. And they'll tell two friends. See a pattern?", "AchievementLongDescription"),
                            levelGoals: [9999]
                        }
                    }
                }()[e],
                r = (t || 1) - 1;
            return a ? {
                title: a.title,
                description: a.description(a.levelGoals[r]),
                longDescription: a.longDescription,
                longDescriptionAlt: a.longDescriptionAlt
            } : {
                title: e,
                description: e,
                longDescription: e
            }
        }
        var u = a("heIq");

        function c(e, t) {
            var a = new Map,
                n = [];
            e.achievements.forEach(function(e) {
                var n = function(e, t) {
                    var a = l(e.key, e.level);
                    return new s.a({
                        channelName: t.name,
                        id: e._id,
                        completedAt: e.completed_at ? new Date(e.completed_at) : null,
                        lastCompletedAt: e.last_completed_at ? new Date(e.last_completed_at) : null,
                        key: e.key,
                        progress: e.progress,
                        progressCap: e.progress_cap,
                        level: e.level,
                        title: a.title,
                        description: a.description,
                        longDescription: a.longDescription,
                        image: {
                            scale1x: e.image,
                            scale2x: e.image_2x,
                            scale3x: e.image_3x,
                            small: e.image_sm
                        }
                    })
                }(e, t);
                a.set(n.id, n)
            });
            var r = new s.b(Array.from(a.values()));
            return e.quests.forEach(function(e) {
                var r, i, o, d = (r = e, i = t.role, o = Object(u.d)(r.key), new s.e({
                    id: r._id,
                    key: r.key,
                    completedAt: r.completed_at ? new Date(r.completed_at) : null,
                    title: o.title,
                    getInstructions: o.getInstructions,
                    learnMoreURL: o.learnMoreURL,
                    hasTimedCompletionWindow: o.hasTimedCompletionWindow,
                    position: o.position,
                    role: i,
                    achievements: []
                }));
                n.push(d), e.achievements.forEach(function(e) {
                    var t = e._id,
                        n = a.get(t);
                    n && (d.achievements.push(n), n.quest = d)
                }), d.finalize()
            }), {
                quests: s.e.sort(n),
                achievements: r
            }
        }
        var m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    quests: [],
                    achievements: new s.b,
                    isLoading: !0,
                    channelName: void 0
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.query()
            }, t.prototype.componentDidUpdate = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(t) {
                        return (!e.channel && this.props.channel || (e.channel && e.channel.id) !== (this.props.channel && this.props.channel.id)) && this.query(), [2]
                    })
                })
            }, t.prototype.render = function() {
                return this.props.children(this.state)
            }, t.prototype.query = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return r.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.props.channel ? (this.setState({
                                    isLoading: !0
                                }), [4, function(e) {
                                    return r.__awaiter(this, void 0, void 0, function() {
                                        var t, a, n;
                                        return r.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return t = "/v5/channels/" + e.id + "/achievement_progressions", [4, Object(o.a)({
                                                        path: t
                                                    })];
                                                case 1:
                                                    return (a = i.sent()).isError() ? [2, {
                                                        isError: !0,
                                                        quests: [],
                                                        achievements: new s.b
                                                    }] : (n = c(a.body, e), [2, r.__assign({
                                                        isError: !1
                                                    }, n)])
                                            }
                                        })
                                    })
                                }(this.props.channel)]) : [2];
                            case 1:
                                return e = t.sent(), this.setState({
                                    quests: e.quests,
                                    achievements: e.achievements,
                                    isLoading: !1
                                }), [2]
                        }
                    })
                })
            }, t
        }(i.Component);
        a.d(t, "a", function() {
            return m
        })
    },
    XhZS: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("iO9N"),
            i = a("IbXy");
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: i.formatters.linear
                    }
                },
                a = e.LinearScaleBase.extend({
                    determineDataLimits: function() {
                        var e = this,
                            t = e.options,
                            a = e.chart,
                            n = a.data.datasets,
                            i = e.isHorizontal();

                        function s(t) {
                            return i ? t.xAxisID === e.id : t.yAxisID === e.id
                        }
                        e.min = null, e.max = null;
                        var o = t.stacked;
                        if (void 0 === o && r.each(n, function(e, t) {
                                if (!o) {
                                    var n = a.getDatasetMeta(t);
                                    a.isDatasetVisible(t) && s(n) && void 0 !== n.stack && (o = !0)
                                }
                            }), t.stacked || o) {
                            var d = {};
                            r.each(n, function(n, i) {
                                var o = a.getDatasetMeta(i),
                                    l = [o.type, void 0 === t.stacked && void 0 === o.stack ? i : "", o.stack].join(".");
                                void 0 === d[l] && (d[l] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var u = d[l].positiveValues,
                                    c = d[l].negativeValues;
                                a.isDatasetVisible(i) && s(o) && r.each(n.data, function(a, n) {
                                    var r = +e.getRightValue(a);
                                    isNaN(r) || o.data[n].hidden || (u[n] = u[n] || 0, c[n] = c[n] || 0, t.relativePoints ? u[n] = 100 : r < 0 ? c[n] += r : u[n] += r)
                                })
                            }), r.each(d, function(t) {
                                var a = t.positiveValues.concat(t.negativeValues),
                                    n = r.min(a),
                                    i = r.max(a);
                                e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? i : Math.max(e.max, i)
                            })
                        } else r.each(n, function(t, n) {
                            var i = a.getDatasetMeta(n);
                            a.isDatasetVisible(n) && s(i) && r.each(t.data, function(t, a) {
                                var n = +e.getRightValue(t);
                                isNaN(n) || i.data[a].hidden || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n))
                            })
                        });
                        e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e, t = this.options.ticks;
                        if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50));
                        else {
                            var a = r.valueOrDefault(t.fontSize, n.global.defaultFontSize);
                            e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * a)))
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
    XlWM: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("et", {
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
        })(a("PJh5"))
    },
    "XzD+": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("th", {
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
        })(a("PJh5"))
    },
    "YBA/": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("da", {
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
        })(a("PJh5"))
    },
    YXlc: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("yo", {
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
        })(a("PJh5"))
    },
    YjuW: function(e, t) {
        function a(e) {
            var t, a, n = e[0] / 255,
                r = e[1] / 255,
                i = e[2] / 255,
                s = Math.min(n, r, i),
                o = Math.max(n, r, i),
                d = o - s;
            return o == s ? t = 0 : n == o ? t = (r - i) / d : r == o ? t = 2 + (i - n) / d : i == o && (t = 4 + (n - r) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = (s + o) / 2, [t, 100 * (o == s ? 0 : a <= .5 ? d / (o + s) : d / (2 - o - s)), 100 * a]
        }

        function n(e) {
            var t, a, n = e[0],
                r = e[1],
                i = e[2],
                s = Math.min(n, r, i),
                o = Math.max(n, r, i),
                d = o - s;
            return a = 0 == o ? 0 : d / o * 1e3 / 10, o == s ? t = 0 : n == o ? t = (r - i) / d : r == o ? t = 2 + (i - n) / d : i == o && (t = 4 + (n - r) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, a, o / 255 * 1e3 / 10]
        }

        function i(e) {
            var t = e[0],
                n = e[1],
                r = e[2];
            return [a(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))]
        }

        function s(e) {
            var t, a = e[0] / 255,
                n = e[1] / 255,
                r = e[2] / 255;
            return [100 * ((1 - a - (t = Math.min(1 - a, 1 - n, 1 - r))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t]
        }

        function o(e) {
            return Y[JSON.stringify(e)]
        }

        function d(e) {
            var t = e[0] / 255,
                a = e[1] / 255,
                n = e[2] / 255;
            return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
        }

        function l(e) {
            var t = d(e),
                a = t[0],
                n = t[1],
                r = t[2];
            return n /= 100, r /= 108.883, a = (a /= 95.047) > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (a - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
        }

        function u(e) {
            var t, a, n, r, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100;
            if (0 == o) return [i = 255 * d, i, i];
            t = 2 * d - (a = d < .5 ? d * (1 + o) : d + o - d * o), r = [0, 0, 0];
            for (var l = 0; l < 3; l++)(n = s + 1 / 3 * -(l - 1)) < 0 && n++, n > 1 && n--, i = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, r[l] = 255 * i;
            return r
        }

        function c(e) {
            var t = e[0] / 60,
                a = e[1] / 100,
                n = e[2] / 100,
                r = Math.floor(t) % 6,
                i = t - Math.floor(t),
                s = 255 * n * (1 - a),
                o = 255 * n * (1 - a * i),
                d = 255 * n * (1 - a * (1 - i));
            n *= 255;
            switch (r) {
                case 0:
                    return [n, d, s];
                case 1:
                    return [o, n, s];
                case 2:
                    return [s, n, d];
                case 3:
                    return [s, o, n];
                case 4:
                    return [d, s, n];
                case 5:
                    return [n, s, o]
            }
        }

        function m(e) {
            var t, a, n, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100,
                l = o + d;
            switch (l > 1 && (o /= l, d /= l), a = 1 - d, n = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (n = 1 - n), i = o + n * (a - o), t) {
                default:
                    case 6:
                    case 0:
                    r = a,
                g = i,
                b = o;
                break;
                case 1:
                        r = i,
                    g = a,
                    b = o;
                    break;
                case 2:
                        r = o,
                    g = a,
                    b = i;
                    break;
                case 3:
                        r = o,
                    g = i,
                    b = a;
                    break;
                case 4:
                        r = i,
                    g = o,
                    b = a;
                    break;
                case 5:
                        r = a,
                    g = o,
                    b = i
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function h(e) {
            var t = e[0] / 100,
                a = e[1] / 100,
                n = e[2] / 100,
                r = e[3] / 100;
            return [255 * (1 - Math.min(1, t * (1 - r) + r)), 255 * (1 - Math.min(1, a * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r))]
        }

        function _(e) {
            var t, a, n, r = e[0] / 100,
                i = e[1] / 100,
                s = e[2] / 100;
            return a = -.9689 * r + 1.8758 * i + .0415 * s, n = .0557 * r + -.204 * i + 1.057 * s, t = (t = 3.2406 * r + -1.5372 * i + -.4986 * s) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (a = Math.min(Math.max(0, a), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
        }

        function f(e) {
            var t = e[0],
                a = e[1],
                n = e[2];
            return a /= 100, n /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (t - a), 200 * (a - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
        }

        function p(e) {
            var t, a, n, r, i = e[0],
                s = e[1],
                o = e[2];
            return i <= 8 ? r = (a = 100 * i / 903.3) / 100 * 7.787 + 16 / 116 : (a = 100 * Math.pow((i + 16) / 116, 3), r = Math.pow(a / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (s / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(s / 500 + r, 3), a, n = n / 108.883 <= .008859 ? n = 108.883 * (r - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - o / 200, 3)]
        }

        function y(e) {
            var t, a = e[0],
                n = e[1],
                r = e[2];
            return (t = 360 * Math.atan2(r, n) / 2 / Math.PI) < 0 && (t += 360), [a, Math.sqrt(n * n + r * r), t]
        }

        function M(e) {
            return _(p(e))
        }

        function v(e) {
            var t, a = e[0],
                n = e[1];
            return t = e[2] / 360 * 2 * Math.PI, [a, n * Math.cos(t), n * Math.sin(t)]
        }

        function L(e) {
            return k[e]
        }
        e.exports = {
            rgb2hsl: a,
            rgb2hsv: n,
            rgb2hwb: i,
            rgb2cmyk: s,
            rgb2keyword: o,
            rgb2xyz: d,
            rgb2lab: l,
            rgb2lch: function(e) {
                return y(l(e))
            },
            hsl2rgb: u,
            hsl2hsv: function(e) {
                var t = e[0],
                    a = e[1] / 100,
                    n = e[2] / 100;
                if (0 === n) return [0, 0, 0];
                return [t, 100 * (2 * (a *= (n *= 2) <= 1 ? n : 2 - n) / (n + a)), 100 * ((n + a) / 2)]
            },
            hsl2hwb: function(e) {
                return i(u(e))
            },
            hsl2cmyk: function(e) {
                return s(u(e))
            },
            hsl2keyword: function(e) {
                return o(u(e))
            },
            hsv2rgb: c,
            hsv2hsl: function(e) {
                var t, a, n = e[0],
                    r = e[1] / 100,
                    i = e[2] / 100;
                return t = r * i, [n, 100 * (t = (t /= (a = (2 - r) * i) <= 1 ? a : 2 - a) || 0), 100 * (a /= 2)]
            },
            hsv2hwb: function(e) {
                return i(c(e))
            },
            hsv2cmyk: function(e) {
                return s(c(e))
            },
            hsv2keyword: function(e) {
                return o(c(e))
            },
            hwb2rgb: m,
            hwb2hsl: function(e) {
                return a(m(e))
            },
            hwb2hsv: function(e) {
                return n(m(e))
            },
            hwb2cmyk: function(e) {
                return s(m(e))
            },
            hwb2keyword: function(e) {
                return o(m(e))
            },
            cmyk2rgb: h,
            cmyk2hsl: function(e) {
                return a(h(e))
            },
            cmyk2hsv: function(e) {
                return n(h(e))
            },
            cmyk2hwb: function(e) {
                return i(h(e))
            },
            cmyk2keyword: function(e) {
                return o(h(e))
            },
            keyword2rgb: L,
            keyword2hsl: function(e) {
                return a(L(e))
            },
            keyword2hsv: function(e) {
                return n(L(e))
            },
            keyword2hwb: function(e) {
                return i(L(e))
            },
            keyword2cmyk: function(e) {
                return s(L(e))
            },
            keyword2lab: function(e) {
                return l(L(e))
            },
            keyword2xyz: function(e) {
                return d(L(e))
            },
            xyz2rgb: _,
            xyz2lab: f,
            xyz2lch: function(e) {
                return y(f(e))
            },
            lab2xyz: p,
            lab2rgb: M,
            lab2lch: y,
            lch2lab: v,
            lch2xyz: function(e) {
                return p(v(e))
            },
            lch2rgb: function(e) {
                return M(v(e))
            }
        };
        var k = {
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
            Y = {};
        for (var D in k) Y[JSON.stringify(k[D])] = D
    },
    ZFGz: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("cy", {
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
                    var t = "";
                    return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })(a("PJh5"))
    },
    ZUyn: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("zh-hk", {
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
        })(a("PJh5"))
    },
    ZmvM: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N");
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
            var t = e.layoutService,
                a = i.noop;

            function s(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            function o(a, n) {
                var r = new e.Legend({
                    ctx: a.ctx,
                    options: n,
                    chart: a
                });
                t.configure(a, r, n), t.addBox(a, r), a.legend = r
            }
            return e.Legend = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: a,
                update: function(e, t, a) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: a,
                beforeSetDimensions: a,
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: a,
                beforeBuildLabels: a,
                buildLabels: function() {
                    var e = this,
                        t = e.options.labels || {},
                        a = i.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (a = a.filter(function(a) {
                        return t.filter(a, e.chart.data)
                    })), e.options.reverse && a.reverse(), e.legendItems = a
                },
                afterBuildLabels: a,
                beforeFit: a,
                fit: function() {
                    var e = this,
                        t = e.options,
                        a = t.labels,
                        r = t.display,
                        o = e.ctx,
                        d = n.global,
                        l = i.valueOrDefault,
                        u = l(a.fontSize, d.defaultFontSize),
                        c = l(a.fontStyle, d.defaultFontStyle),
                        m = l(a.fontFamily, d.defaultFontFamily),
                        h = i.fontString(u, c, m),
                        _ = e.legendHitBoxes = [],
                        f = e.minSize,
                        p = e.isHorizontal();
                    if (p ? (f.width = e.maxWidth, f.height = r ? 10 : 0) : (f.width = r ? 10 : 0, f.height = e.maxHeight), r)
                        if (o.font = h, p) {
                            var y = e.lineWidths = [0],
                                g = e.legendItems.length ? u + a.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", i.each(e.legendItems, function(t, n) {
                                var r = s(a, u) + u / 2 + o.measureText(t.text).width;
                                y[y.length - 1] + r + a.padding >= e.width && (g += u + a.padding, y[y.length] = e.left), _[n] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: u
                                }, y[y.length - 1] += r + a.padding
                            }), f.height += g
                        } else {
                            var M = a.padding,
                                v = e.columnWidths = [],
                                b = a.padding,
                                L = 0,
                                k = 0,
                                Y = u + M;
                            i.each(e.legendItems, function(e, t) {
                                var n = s(a, u) + u / 2 + o.measureText(e.text).width;
                                k + Y > f.height && (b += L + a.padding, v.push(L), L = 0, k = 0), L = Math.max(L, n), k += Y, _[t] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: u
                                }
                            }), b += L, v.push(L), f.width += b
                        }
                    e.width = f.width, e.height = f.height
                },
                afterFit: a,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var e = this,
                        t = e.options,
                        a = t.labels,
                        r = n.global,
                        o = r.elements.line,
                        d = e.width,
                        l = e.lineWidths;
                    if (t.display) {
                        var u, c = e.ctx,
                            m = i.valueOrDefault,
                            h = m(a.fontColor, r.defaultFontColor),
                            _ = m(a.fontSize, r.defaultFontSize),
                            f = m(a.fontStyle, r.defaultFontStyle),
                            p = m(a.fontFamily, r.defaultFontFamily),
                            y = i.fontString(_, f, p);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = h, c.fillStyle = h, c.font = y;
                        var g = s(a, _),
                            M = e.legendHitBoxes,
                            v = e.isHorizontal();
                        u = v ? {
                            x: e.left + (d - l[0]) / 2,
                            y: e.top + a.padding,
                            line: 0
                        } : {
                            x: e.left + a.padding,
                            y: e.top + a.padding,
                            line: 0
                        };
                        var b = _ + a.padding;
                        i.each(e.legendItems, function(n, s) {
                            var h = c.measureText(n.text).width,
                                f = g + _ / 2 + h,
                                p = u.x,
                                y = u.y;
                            v ? p + f >= d && (y = u.y += b, u.line++, p = u.x = e.left + (d - l[u.line]) / 2) : y + b > e.bottom && (p = u.x = p + e.columnWidths[u.line] + a.padding, y = u.y = e.top + a.padding, u.line++),
                                function(e, a, n) {
                                    if (!(isNaN(g) || g <= 0)) {
                                        c.save(), c.fillStyle = m(n.fillStyle, r.defaultColor), c.lineCap = m(n.lineCap, o.borderCapStyle), c.lineDashOffset = m(n.lineDashOffset, o.borderDashOffset), c.lineJoin = m(n.lineJoin, o.borderJoinStyle), c.lineWidth = m(n.lineWidth, o.borderWidth), c.strokeStyle = m(n.strokeStyle, r.defaultColor);
                                        var s = 0 === m(n.lineWidth, o.borderWidth);
                                        if (c.setLineDash && c.setLineDash(m(n.lineDash, o.borderDash)), t.labels && t.labels.usePointStyle) {
                                            var d = _ * Math.SQRT2 / 2,
                                                l = d / Math.SQRT2,
                                                u = e + l,
                                                h = a + l;
                                            i.canvas.drawPoint(c, n.pointStyle, d, u, h)
                                        } else s || c.strokeRect(e, a, g, _), c.fillRect(e, a, g, _);
                                        c.restore()
                                    }
                                }(p, y, n), M[s].left = p, M[s].top = y,
                                function(e, t, a, n) {
                                    var r = _ / 2,
                                        i = g + r + e,
                                        s = t + r;
                                    c.fillText(a.text, i, s), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, s), c.lineTo(i + n, s), c.stroke())
                                }(p, y, n, h), v ? u.x += f + a.padding : u.y += b
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
                        s = e.y;
                    if (i >= t.left && i <= t.right && s >= t.top && s <= t.bottom)
                        for (var o = t.legendHitBoxes, d = 0; d < o.length; ++d) {
                            var l = o[d];
                            if (i >= l.left && i <= l.left + l.width && s >= l.top && s <= l.top + l.height) {
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
                    t && o(e, t)
                },
                beforeUpdate: function(e) {
                    var a = e.options.legend,
                        r = e.legend;
                    a ? (i.mergeIf(a, n.global.legend), r ? (t.configure(e, r, a), r.options = a) : o(e, a)) : r && (t.removeBox(e, r), delete e.legend)
                },
                afterEvent: function(e, t) {
                    var a = e.legend;
                    a && a.handleEvent(t)
                }
            }
        }
    },
    ZoSI: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("pt", {
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
        })(a("PJh5"))
    },
    "a+9f": function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("6sO2"),
            i = a("vH/s"),
            s = a("Odds"),
            o = (a("wLsQ"), function(e) {
                return n.createElement(s._8, {
                    className: "clip-card-row"
                }, n.createElement(s._6, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: e.url + "?tt_content=" + i.PageviewContent.TopClips + "&tt_medium=" + i.PageviewMedium.ChannelAnalytics,
                    onClick: e.onClick
                }, n.createElement(s._35, {
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, n.createElement(s.C, {
                    row: !0
                }, n.createElement(s.E, {
                    src: e.thumbnailURL,
                    alt: e.title,
                    size: s.F.Size8,
                    aspect: s.l.Aspect16x9
                }), n.createElement(s.D, {
                    overflow: s._11.Hidden
                }, n.createElement(s._8, {
                    display: s.R.Flex,
                    flexGrow: 1,
                    alignItems: s.c.Center,
                    justifyContent: s._7.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, n.createElement(s._8, {
                    display: s.R.Flex,
                    flexDirection: s.T.Column,
                    ellipsis: !0
                }, n.createElement(s.Q, {
                    color: s.K.Base,
                    type: s._49.H5,
                    ellipsis: !0
                }, e.title), n.createElement(s._8, {
                    display: s.R.Flex,
                    flexWrap: s.U.NoWrap
                }, n.createElement(s._24, {
                    asset: s._25.GlyphLive,
                    type: s._26.Alt2
                }), n.createElement(s._8, {
                    display: s.R.Inline,
                    padding: {
                        left: .5
                    },
                    ellipsis: !0
                }, n.createElement(s.Q, {
                    type: s._49.Span
                }, e.curatorName)))))), n.createElement(s._8, {
                    display: s.R.Flex,
                    flexGrow: 1,
                    justifyContent: s._7.End,
                    padding: {
                        left: 2
                    }
                }, n.createElement(s._24, {
                    asset: s._25.GlyphViews,
                    type: s._26.Alt2
                }), n.createElement(s._8, {
                    display: s.R.Flex,
                    padding: {
                        left: .5
                    }
                }, n.createElement(s.Q, {
                    bold: !0,
                    fontSize: s.V.Size5,
                    color: s.K.Alt,
                    type: s._49.Span
                }, Object(r.d)("{views, number}", {
                    views: e.views
                }, "StreamSummaryClipViews"))))))))
            });
        a.d(t, "a", function() {
            return o
        })
    },
    aM0x: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("bn", {
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
        })(a("PJh5"))
    },
    ajDi: function(e, t, a) {
        var n = a("72Lu");

        function r(e) {
            if (e) {
                var t = [0, 0, 0],
                    a = 1,
                    r = e.match(/^#([a-fA-F0-9]{3})$/i);
                if (r) {
                    r = r[1];
                    for (var i = 0; i < t.length; i++) t[i] = parseInt(r[i] + r[i], 16)
                } else if (r = e.match(/^#([a-fA-F0-9]{6})$/i)) {
                    r = r[1];
                    for (i = 0; i < t.length; i++) t[i] = parseInt(r.slice(2 * i, 2 * i + 2), 16)
                } else if (r = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (i = 0; i < t.length; i++) t[i] = parseInt(r[i + 1]);
                    a = parseFloat(r[4])
                } else if (r = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (i = 0; i < t.length; i++) t[i] = Math.round(2.55 * parseFloat(r[i + 1]));
                    a = parseFloat(r[4])
                } else if (r = e.match(/(\w+)/)) {
                    if ("transparent" == r[1]) return [0, 0, 0, 0];
                    if (!(t = n[r[1]])) return
                }
                for (i = 0; i < t.length; i++) t[i] = u(t[i], 0, 255);
                return a = a || 0 == a ? u(a, 0, 1) : 1, t[3] = a, t
            }
        }

        function i(e) {
            if (e) {
                var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }

        function s(e) {
            if (e) {
                var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }

        function o(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
        }

        function d(e, t) {
            return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
        }

        function l(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
        }

        function u(e, t, a) {
            return Math.min(Math.max(t, e), a)
        }

        function c(e) {
            var t = e.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t
        }
        e.exports = {
            getRgba: r,
            getHsla: i,
            getRgb: function(e) {
                var t = r(e);
                return t && t.slice(0, 3)
            },
            getHsl: function(e) {
                var t = i(e);
                return t && t.slice(0, 3)
            },
            getHwb: s,
            getAlpha: function(e) {
                var t = r(e);
                if (t) return t[3];
                if (t = i(e)) return t[3];
                if (t = s(e)) return t[3]
            },
            hexString: function(e) {
                return "#" + c(e[0]) + c(e[1]) + c(e[2])
            },
            rgbString: function(e, t) {
                if (t < 1 || e[3] && e[3] < 1) return o(e, t);
                return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
            },
            rgbaString: o,
            percentString: function(e, t) {
                if (t < 1 || e[3] && e[3] < 1) return d(e, t);
                var a = Math.round(e[0] / 255 * 100),
                    n = Math.round(e[1] / 255 * 100),
                    r = Math.round(e[2] / 255 * 100);
                return "rgb(" + a + "%, " + n + "%, " + r + "%)"
            },
            percentaString: d,
            hslString: function(e, t) {
                if (t < 1 || e[3] && e[3] < 1) return l(e, t);
                return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            },
            hslaString: l,
            hwbString: function(e, t) {
                void 0 === t && (t = void 0 !== e[3] ? e[3] : 1);
                return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
            },
            keyword: function(e) {
                return m[e.slice(0, 3)]
            }
        };
        var m = {};
        for (var h in n) m[n[h]] = h
    },
    aqvp: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("bs", {
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
        })(a("PJh5"))
    },
    bQ8d: function(e, t, a) {
        "use strict";

        function n(e, t) {
            if (void 0 === t && (t = 0), t > e) {
                var a = t;
                t = e, e = a
            }
            return t + Math.floor(Math.random() * (e - t + 1))
        }
        t.a = n, t.b = function(e) {
            return e[n(e.length - 1)]
        }, t.c = function(e, t) {
            var a = 0,
                n = [];
            for (; a < e;) n.push(t(a)), a += 1;
            return n
        }
    },
    bXQP: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("fr-ca", {
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
        })(a("PJh5"))
    },
    c1x4: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("sr-cyrl", {
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
        })(a("PJh5"))
    },
    "d1/4": function(e, t, a) {
        "use strict";
        var n = a("3n1n"),
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
    dPMn: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            r = a("GiK3"),
            i = a("6sO2"),
            s = a("Odds"),
            o = {
                "data-test-selector": "no-data"
            },
            d = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0",
                alt: "TearGlove"
            },
            l = function() {
                return r.createElement(s._8, n.__assign({
                    alignItems: s.c.Center,
                    display: s.R.Flex,
                    flexDirection: s.T.Column,
                    justifyContent: s._7.Center,
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    padding: {
                        top: 5,
                        bottom: 5
                    }
                }, o), r.createElement(s._8, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement(s.m, n.__assign({}, d, {
                    size: 50
                }))), r.createElement(s.Q, {
                    color: s.K.Alt2,
                    fontSize: s.V.Size5
                }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsNoData")))
            };
        a.d(t, !1, function() {
            return o
        }), a.d(t, "a", function() {
            return l
        })
    },
    dURR: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ar-ma", {
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
        })(a("PJh5"))
    },
    db2S: function(e, t) {},
    dyB6: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("en-nz", {
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
        })(a("PJh5"))
    },
    "e/KL": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("x-pseudo", {
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
        })(a("PJh5"))
    },
    "eBB/": function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ko", {
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
        })(a("PJh5"))
    },
    eHwN: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("az", {
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
                    var a = e % 10;
                    return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })(a("PJh5"))
    },
    f4W3: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("sr", {
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
        })(a("PJh5"))
    },
    fW1y: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
                a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            e.defineLocale("sd", {
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
        })(a("PJh5"))
    },
    g7KF: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            e.defineLocale("fy", {
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
        })(a("PJh5"))
    },
    gCP2: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.PolarArea = function(t, a) {
                return a.type = "polarArea", new e(t, a)
            }
        }
    },
    gEQe: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("kn", {
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
        })(a("PJh5"))
    },
    gEU3: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("mi", {
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
        })(a("PJh5"))
    },
    gUgh: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("tet", {
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
        })(a("PJh5"))
    },
    ghsk: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("iO9N"),
            i = a("KC8c"),
            s = a("2xI1");
        e.exports = function(e) {
            var t = e.plugins;

            function a(e) {
                return "top" === e || "bottom" === e
            }
            e.types = {}, e.instances = {}, e.controllers = {}, r.extend(e.prototype, {
                construct: function(t, a) {
                    var i = this;
                    a = function(e) {
                        var t = (e = e || {}).data = e.data || {};
                        return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = r.configMerge(n.global, n[e.type], e.options || {}), e
                    }(a);
                    var o = s.acquireContext(t, a),
                        d = o && o.canvas,
                        l = d && d.height,
                        u = d && d.width;
                    i.id = r.uid(), i.ctx = o, i.canvas = d, i.config = a, i.width = u, i.height = l, i.aspectRatio = l ? u / l : null, i.options = a.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
                        get: function() {
                            return i.config.data
                        },
                        set: function(e) {
                            i.config.data = e
                        }
                    }), o && d ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                },
                initialize: function() {
                    var e = this;
                    return t.notify(e, "beforeInit"), r.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildScales(), e.initToolTip(), t.notify(e, "afterInit"), e
                },
                clear: function() {
                    return r.canvas.clear(this), this
                },
                stop: function() {
                    return e.animationService.cancelAnimation(this), this
                },
                resize: function(e) {
                    var a = this,
                        n = a.options,
                        i = a.canvas,
                        s = n.maintainAspectRatio && a.aspectRatio || null,
                        o = Math.max(0, Math.floor(r.getMaximumWidth(i))),
                        d = Math.max(0, Math.floor(s ? o / s : r.getMaximumHeight(i)));
                    if ((a.width !== o || a.height !== d) && (i.width = a.width = o, i.height = a.height = d, i.style.width = o + "px", i.style.height = d + "px", r.retinaScale(a, n.devicePixelRatio), !e)) {
                        var l = {
                            width: o,
                            height: d
                        };
                        t.notify(a, "resize", [l]), a.options.onResize && a.options.onResize(a, l), a.stop(), a.update(a.options.responsiveAnimationDuration)
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
                        n = t.options,
                        i = t.scales = {},
                        s = [];
                    n.scales && (s = s.concat((n.scales.xAxes || []).map(function(e) {
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
                    }))), n.scale && s.push({
                        options: n.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }), r.each(s, function(n) {
                        var s = n.options,
                            o = r.valueOrDefault(s.type, n.dtype),
                            d = e.scaleService.getScaleConstructor(o);
                        if (d) {
                            a(s.position) !== a(n.dposition) && (s.position = n.dposition);
                            var l = new d({
                                id: s.id,
                                options: s,
                                ctx: t.ctx,
                                chart: t
                            });
                            i[l.id] = l, l.mergeTicksOptions(), n.isDefault && (t.scale = l)
                        }
                    }), e.scaleService.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function() {
                    var t = this,
                        a = [],
                        n = [];
                    return r.each(t.data.datasets, function(r, i) {
                        var s = t.getDatasetMeta(i),
                            o = r.type || t.config.type;
                        if (s.type && s.type !== o && (t.destroyDatasetMeta(i), s = t.getDatasetMeta(i)), s.type = o, a.push(s.type), s.controller) s.controller.updateIndex(i);
                        else {
                            var d = e.controllers[s.type];
                            if (void 0 === d) throw new Error('"' + s.type + '" is not a chart type.');
                            s.controller = new d(t, i), n.push(s.controller)
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
                    var a, n, i = this;
                    if (e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        }), (n = (a = i).options).scale ? a.scale.options = n.scale : n.scales && n.scales.xAxes.concat(n.scales.yAxes).forEach(function(e) {
                            a.scales[e.id].options = e
                        }), a.tooltip._options = n.tooltips, !1 !== t.notify(i, "beforeUpdate")) {
                        i.tooltip._data = i.data;
                        var s = i.buildOrUpdateControllers();
                        r.each(i.data.datasets, function(e, t) {
                            i.getDatasetMeta(t).controller.buildOrUpdateElements()
                        }, i), i.updateLayout(), r.each(s, function(e) {
                            e.reset()
                        }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], t.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {
                            duration: e.duration,
                            easing: e.easing,
                            lazy: e.lazy
                        } : i.render(e)
                    }
                },
                updateLayout: function() {
                    !1 !== t.notify(this, "beforeLayout") && (e.layoutService.update(this, this.width, this.height), t.notify(this, "afterScaleUpdate"), t.notify(this, "afterLayout"))
                },
                updateDatasets: function() {
                    if (!1 !== t.notify(this, "beforeDatasetsUpdate")) {
                        for (var e = 0, a = this.data.datasets.length; e < a; ++e) this.updateDataset(e);
                        t.notify(this, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function(e) {
                    var a = this.getDatasetMeta(e),
                        n = {
                            meta: a,
                            index: e
                        };
                    !1 !== t.notify(this, "beforeDatasetUpdate", [n]) && (a.controller.update(), t.notify(this, "afterDatasetUpdate", [n]))
                },
                render: function(a) {
                    var n = this;
                    a && "object" == typeof a || (a = {
                        duration: a,
                        lazy: arguments[1]
                    });
                    var i = a.duration,
                        s = a.lazy;
                    if (!1 !== t.notify(n, "beforeRender")) {
                        var o = n.options.animation,
                            d = function(e) {
                                t.notify(n, "afterRender"), r.callback(o && o.onComplete, [e], n)
                            };
                        if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                            var l = new e.Animation({
                                numSteps: (i || o.duration) / 16.66,
                                easing: a.easing || o.easing,
                                render: function(e, t) {
                                    var a = r.easing.effects[t.easing],
                                        n = t.currentStep,
                                        i = n / t.numSteps;
                                    e.draw(a(i), i, n)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: d
                            });
                            e.animationService.addAnimation(n, l, i, s)
                        } else n.draw(), d(new e.Animation({
                            numSteps: 0,
                            chart: n
                        }));
                        return n
                    }
                },
                draw: function(e) {
                    var a = this;
                    a.clear(), r.isNullOrUndef(e) && (e = 1), a.transition(e), !1 !== t.notify(a, "beforeDraw", [e]) && (r.each(a.boxes, function(e) {
                        e.draw(a.chartArea)
                    }, a), a.scale && a.scale.draw(), a.drawDatasets(e), a._drawTooltip(e), t.notify(a, "afterDraw", [e]))
                },
                transition: function(e) {
                    for (var t = 0, a = (this.data.datasets || []).length; t < a; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                    this.tooltip.transition(e)
                },
                drawDatasets: function(e) {
                    var a = this;
                    if (!1 !== t.notify(a, "beforeDatasetsDraw", [e])) {
                        for (var n = (a.data.datasets || []).length - 1; n >= 0; --n) a.isDatasetVisible(n) && a.drawDataset(n, e);
                        t.notify(a, "afterDatasetsDraw", [e])
                    }
                },
                drawDataset: function(e, a) {
                    var n = this.getDatasetMeta(e),
                        r = {
                            meta: n,
                            index: e,
                            easingValue: a
                        };
                    !1 !== t.notify(this, "beforeDatasetDraw", [r]) && (n.controller.draw(a), t.notify(this, "afterDatasetDraw", [r]))
                },
                _drawTooltip: function(e) {
                    var a = this.tooltip,
                        n = {
                            tooltip: a,
                            easingValue: e
                        };
                    !1 !== t.notify(this, "beforeTooltipDraw", [n]) && (a.draw(), t.notify(this, "afterTooltipDraw", [n]))
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
                    var t = this.data.datasets[e];
                    t._meta || (t._meta = {});
                    var a = t._meta[this.id];
                    return a || (a = t._meta[this.id] = {
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
                    var a, n, i = this,
                        o = i.canvas;
                    for (i.stop(), a = 0, n = i.data.datasets.length; a < n; ++a) i.destroyDatasetMeta(a);
                    o && (i.unbindEvents(), r.canvas.clear(i), s.releaseContext(i.ctx), i.canvas = null, i.ctx = null), t.notify(i, "destroy"), delete e.instances[i.id]
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
                        s.addEventListener(e, n, a), t[n] = a
                    }), e.options.responsive && (a = function() {
                        e.resize()
                    }, s.addEventListener(e, "resize", a), t.resize = a)
                },
                unbindEvents: function() {
                    var e = this,
                        t = e._listeners;
                    t && (delete e._listeners, r.each(t, function(t, a) {
                        s.removeEventListener(e, a, t)
                    }))
                },
                updateHoverStyle: function(e, t, a) {
                    var n, r, i, s = a ? "setHoverStyle" : "removeHoverStyle";
                    for (r = 0, i = e.length; r < i; ++r)(n = e[r]) && this.getDatasetMeta(n._datasetIndex).controller[s](n)
                },
                eventHandler: function(e) {
                    var a = this,
                        n = a.tooltip;
                    if (!1 !== t.notify(a, "beforeEvent", [e])) {
                        a._bufferedRender = !0, a._bufferedRequest = null;
                        var r = a.handleEvent(e);
                        r |= n && n.handleEvent(e), t.notify(a, "afterEvent", [e]);
                        var i = a._bufferedRequest;
                        return i ? a.render(i) : r && !a.animating && (a.stop(), a.render(a.options.hover.animationDuration, !0)), a._bufferedRender = !1, a._bufferedRequest = null, a
                    }
                },
                handleEvent: function(e) {
                    var t, a = this,
                        n = a.options || {},
                        i = n.hover;
                    return a.lastActive = a.lastActive || [], "mouseout" === e.type ? a.active = [] : a.active = a.getElementsAtEventForMode(e, i.mode, i), r.callback(n.onHover || n.hover.onHover, [e.native, a.active], a), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(a, e.native, a.active), a.lastActive.length && a.updateHoverStyle(a.lastActive, i.mode, !1), a.active.length && i.mode && a.updateHoverStyle(a.active, i.mode, !0), t = !r.arrayEquals(a.active, a.lastActive), a.lastActive = a.active, t
                }
            }), e.Controller = e
        }
    },
    h2tJ: function(e, t) {},
    hAmm: function(e, t, a) {
        "use strict";
        var n = a("iO9N");
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
                    for (var n, r = ["fullWidth", "position", "weight"], i = r.length, s = 0; s < i; ++s) n = r[s], a.hasOwnProperty(n) && (t[n] = a[n])
                },
                update: function(e, r, i) {
                    if (e) {
                        var s = e.options.layout || {},
                            o = n.options.toPadding(s.padding),
                            d = o.left,
                            l = o.right,
                            u = o.top,
                            c = o.bottom,
                            m = t(e.boxes, "left"),
                            h = t(e.boxes, "right"),
                            _ = t(e.boxes, "top"),
                            f = t(e.boxes, "bottom"),
                            p = t(e.boxes, "chartArea");
                        a(m, !0), a(h, !1), a(_, !0), a(f, !1);
                        var y = r - d - l,
                            g = i - u - c,
                            M = g / 2,
                            v = (r - y / 2) / (m.length + h.length),
                            b = (i - M) / (_.length + f.length),
                            L = y,
                            k = g,
                            Y = [];
                        n.each(m.concat(h, _, f), function(e) {
                            var t, a = e.isHorizontal();
                            a ? (t = e.update(e.fullWidth ? y : L, b), k -= t.height) : (t = e.update(v, M), L -= t.width), Y.push({
                                horizontal: a,
                                minSize: t,
                                box: e
                            })
                        });
                        var D = 0,
                            w = 0,
                            S = 0,
                            x = 0;
                        n.each(_.concat(f), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                D = Math.max(D, t.left), w = Math.max(w, t.right)
                            }
                        }), n.each(m.concat(h), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                S = Math.max(S, t.top), x = Math.max(x, t.bottom)
                            }
                        });
                        var T = d,
                            j = l,
                            H = u,
                            O = c;
                        n.each(m.concat(h), I), n.each(m, function(e) {
                            T += e.width
                        }), n.each(h, function(e) {
                            j += e.width
                        }), n.each(_.concat(f), I), n.each(_, function(e) {
                            H += e.height
                        }), n.each(f, function(e) {
                            O += e.height
                        }), n.each(m.concat(h), function(e) {
                            var t = n.findNextWhere(Y, function(t) {
                                    return t.box === e
                                }),
                                a = {
                                    left: 0,
                                    right: 0,
                                    top: H,
                                    bottom: O
                                };
                            t && e.update(t.minSize.width, k, a)
                        }), T = d, j = l, H = u, O = c, n.each(m, function(e) {
                            T += e.width
                        }), n.each(h, function(e) {
                            j += e.width
                        }), n.each(_, function(e) {
                            H += e.height
                        }), n.each(f, function(e) {
                            O += e.height
                        });
                        var P = Math.max(D - T, 0);
                        T += P, j += Math.max(w - j, 0);
                        var C = Math.max(S - H, 0);
                        H += C, O += Math.max(x - O, 0);
                        var A = i - H - O,
                            E = r - T - j;
                        E === L && A === k || (n.each(m, function(e) {
                            e.height = A
                        }), n.each(h, function(e) {
                            e.height = A
                        }), n.each(_, function(e) {
                            e.fullWidth || (e.width = E)
                        }), n.each(f, function(e) {
                            e.fullWidth || (e.width = E)
                        }), k = A, L = E);
                        var F = d + P,
                            W = u + C;
                        n.each(m.concat(_), R), F += L, W += k, n.each(h, R), n.each(f, R), e.chartArea = {
                            left: T,
                            top: H,
                            right: T + L,
                            bottom: H + k
                        }, n.each(p, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(L, k)
                        })
                    }

                    function I(e) {
                        var t = n.findNextWhere(Y, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var a = {
                                    left: Math.max(T, D),
                                    right: Math.max(j, w),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? y : L, g / 2, a)
                            } else e.update(t.minSize.width, k)
                    }

                    function R(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? d : T, e.right = e.fullWidth ? r - l : T + L, e.top = W, e.bottom = W + e.height, W = e.bottom) : (e.left = F, e.right = F + e.width, e.top = H, e.bottom = H + k, F = e.right)
                    }
                }
            }
        }
    },
    hPuz: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("en-gb", {
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
        })(a("PJh5"))
    },
    i3Vq: function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("sjgK"),
            i = a("Odds"),
            s = function(e) {
                return n.createElement(i._8, {
                    display: i.R.Flex,
                    flexWrap: i.U.NoWrap,
                    flexShrink: 0,
                    position: i._15.Relative
                }, n.createElement(i._8, {
                    className: "ach-card__badge-wrap",
                    position: i._15.Relative,
                    flexShrink: 0
                }, n.createElement(i._35, {
                    className: "ach-card__badge",
                    background: i.n.Alt2
                }, n.createElement("img", {
                    alt: e.achievement.title,
                    className: "ach-card__img",
                    src: e.achievement.image.scale1x,
                    srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                })), Boolean(e.achievement.level) && n.createElement(i._35, {
                    className: "ach-card__lvl",
                    position: i._15.Absolute,
                    background: i.n.Alt
                }, n.createElement(i.o, {
                    border: !0,
                    icon: Object(r.a)(e.achievement.level),
                    size: 20,
                    type: i.p.Dashboard
                }))), n.createElement(i._35, {
                    overflow: i._11.Hidden,
                    display: i.R.Flex,
                    justifyContent: i._7.Center,
                    flexDirection: i.T.Column,
                    margin: {
                        left: 2
                    }
                }, n.createElement(i.Q, {
                    fontSize: i.V.Size4,
                    color: i.K.Alt,
                    bold: !0,
                    ellipsis: !0
                }, e.achievement.title), n.createElement(i.Q, {
                    fontSize: i.V.Size5,
                    color: i.K.Alt2,
                    ellipsis: !0
                }, e.achievement.description)), n.createElement(i._35, {
                    className: "ach-card__progress-meta",
                    display: i.R.Flex,
                    alignContent: i.b.Center,
                    alignItems: i.c.Center,
                    justifyContent: i._7.End,
                    flexGrow: 1,
                    flexShrink: 0,
                    margin: {
                        left: 1
                    }
                }, e.children))
            };
        a.d(t, "a", function() {
            return s
        })
    },
    iNtv: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("tzl", {
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
        })(a("PJh5"))
    },
    iO9N: function(e, t, a) {
        "use strict";
        e.exports = a("3n1n"), e.exports.easing = a("d1/4"), e.exports.canvas = a("F4U8"), e.exports.options = a("u1o0")
    },
    "j+vx": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("kk", {
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
                    return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })(a("PJh5"))
    },
    j8cJ: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ar-kw", {
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
        })(a("PJh5"))
    },
    jJ84: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("iO9N");
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
                    this.defaults.hasOwnProperty(e) && (this.defaults[e] = r.extend(this.defaults[e], t))
                },
                addScalesToLayout: function(t) {
                    r.each(t.scales, function(a) {
                        a.fullWidth = a.options.fullWidth, a.position = a.options.position, a.weight = a.options.weight, e.layoutService.addBox(t, a)
                    })
                }
            }
        }
    },
    jQxI: function(e, t) {},
    jnhC: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            r = a("GiK3"),
            i = a("Odds"),
            s = (a("Mbk8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHovered: !1
                    }, t.handleHover = function() {
                        t.setState(function(e) {
                            return {
                                isHovered: !e.isHovered
                            }
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        a = e.direction;
                    return r.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, r.createElement(i._35, {
                        display: i.R.Flex,
                        padding: {
                            x: 1
                        },
                        position: i._15.Relative
                    }, r.createElement(i._35, {
                        className: "hoverable-icon",
                        display: i.R.InlineFlex,
                        color: i.K.Alt2,
                        alignItems: i.c.Center,
                        justifyContent: i._7.Center
                    }, r.createElement(i._24, {
                        asset: i._25.NotificationInfo,
                        width: 16,
                        height: 16
                    })), r.createElement(i.q, {
                        show: this.state.isHovered,
                        direction: a,
                        offsetX: "1rem"
                    }, r.createElement(i._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: i.r.Bottom
                }, t
            }(r.Component));
        a.d(t, "a", function() {
            return s
        })
    },
    jxEH: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = {
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

            function a(e, t, a) {
                return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }

            function n(e, n, r) {
                return e + " " + a(t[r], e, n)
            }

            function r(e, n, r) {
                return a(t[r], e, n)
            }
            e.defineLocale("lv", {
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
                    s: function(e, t) {
                        return t ? "dažas sekundes" : "dažām sekundēm"
                    },
                    m: r,
                    mm: n,
                    h: r,
                    hh: n,
                    d: r,
                    dd: n,
                    M: r,
                    MM: n,
                    y: r,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })(a("PJh5"))
    },
    "k+5o": function(e, t, a) {
        (function(e) {
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
            e.defineLocale("tr", {
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
                    var a = e % 10;
                    return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })(a("PJh5"))
    },
    k7DW: function(e, t, a) {
        "use strict";
        var n = a("iO9N");
        e.exports = {
            _set: function(e, t) {
                return n.merge(this[e] || (this[e] = {}), t)
            }
        }
    },
    krPU: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("tzm-latn", {
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
        })(a("PJh5"))
    },
    lG75: function(e, t, a) {
        "use strict";
        var n = a("rWJA"),
            r = a("k7DW"),
            i = a("iO9N");
        e.exports = function(e) {
            function t(e, t, a) {
                var n;
                return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e, n
            }

            function a(e) {
                return void 0 !== e && null !== e && "none" !== e
            }

            function s(e, n, r) {
                var i = document.defaultView,
                    s = e.parentNode,
                    o = i.getComputedStyle(e)[n],
                    d = i.getComputedStyle(s)[n],
                    l = a(o),
                    u = a(d),
                    c = Number.POSITIVE_INFINITY;
                return l || u ? Math.min(l ? t(o, e, r) : c, u ? t(d, s, r) : c) : "none"
            }
            i.configMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, a, n, r) {
                        var s = a[t] || {},
                            o = n[t];
                        "scales" === t ? a[t] = i.scaleMerge(s, o) : "scale" === t ? a[t] = i.merge(s, [e.scaleService.getScaleDefaults(o.type), o]) : i._merger(t, a, n, r)
                    }
                })
            }, i.scaleMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, a, n, r) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var s, o, d, l = n[t].length;
                            for (a[t] || (a[t] = []), s = 0; s < l; ++s) d = n[t][s], o = i.valueOrDefault(d.type, "xAxes" === t ? "category" : "linear"), s >= a[t].length && a[t].push({}), !a[t][s].type || d.type && d.type !== a[t][s].type ? i.merge(a[t][s], [e.scaleService.getScaleDefaults(o), d]) : i.merge(a[t][s], d)
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
                return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
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
                    s = a.skip ? t : a,
                    o = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
                    d = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2)),
                    l = o / (o + d),
                    u = d / (o + d),
                    c = n * (l = isNaN(l) ? 0 : l),
                    m = n * (u = isNaN(u) ? 0 : u);
                return {
                    previous: {
                        x: i.x - c * (s.x - r.x),
                        y: i.y - c * (s.y - r.y)
                    },
                    next: {
                        x: i.x + m * (s.x - r.x),
                        y: i.y + m * (s.y - r.y)
                    }
                }
            }, i.EPSILON = Number.EPSILON || 1e-14, i.splineCurveMonotone = function(e) {
                var t, a, n, r, s, o, d, l, u, c = (e || []).map(function(e) {
                        return {
                            model: e._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                    m = c.length;
                for (t = 0; t < m; ++t)
                    if (!(n = c[t]).model.skip) {
                        if (a = t > 0 ? c[t - 1] : null, (r = t < m - 1 ? c[t + 1] : null) && !r.model.skip) {
                            var h = r.model.x - n.model.x;
                            n.deltaK = 0 !== h ? (r.model.y - n.model.y) / h : 0
                        }!a || a.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
                    }
                for (t = 0; t < m - 1; ++t) n = c[t], r = c[t + 1], n.model.skip || r.model.skip || (i.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (s = n.mK / n.deltaK, o = r.mK / n.deltaK, (l = Math.pow(s, 2) + Math.pow(o, 2)) <= 9 || (d = 3 / Math.sqrt(l), n.mK = s * d * n.deltaK, r.mK = o * d * n.deltaK)));
                for (t = 0; t < m; ++t)(n = c[t]).model.skip || (a = t > 0 ? c[t - 1] : null, r = t < m - 1 ? c[t + 1] : null, a && !a.model.skip && (u = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), r && !r.model.skip && (u = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
            }, i.nextItem = function(e, t, a) {
                return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
            }, i.previousItem = function(e, t, a) {
                return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
            }, i.niceNum = function(e, t) {
                var a = Math.floor(i.log10(e)),
                    n = e / Math.pow(10, a);
                return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, a)
            }, i.requestAnimFrame = "undefined" == typeof window ? function(e) {
                e()
            } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }, i.getRelativePosition = function(e, t) {
                var a, n, r = e.originalEvent || e,
                    s = e.currentTarget || e.srcElement,
                    o = s.getBoundingClientRect(),
                    d = r.touches;
                d && d.length > 0 ? (a = d[0].clientX, n = d[0].clientY) : (a = r.clientX, n = r.clientY);
                var l = parseFloat(i.getStyle(s, "padding-left")),
                    u = parseFloat(i.getStyle(s, "padding-top")),
                    c = parseFloat(i.getStyle(s, "padding-right")),
                    m = parseFloat(i.getStyle(s, "padding-bottom")),
                    h = o.right - o.left - l - c,
                    _ = o.bottom - o.top - u - m;
                return {
                    x: a = Math.round((a - o.left - l) / h * s.width / t.currentDevicePixelRatio),
                    y: n = Math.round((n - o.top - u) / _ * s.height / t.currentDevicePixelRatio)
                }
            }, i.getConstraintWidth = function(e) {
                return s(e, "max-width", "clientWidth")
            }, i.getConstraintHeight = function(e) {
                return s(e, "max-height", "clientHeight")
            }, i.getMaximumWidth = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientWidth;
                var a = parseInt(i.getStyle(t, "padding-left"), 10),
                    n = parseInt(i.getStyle(t, "padding-right"), 10),
                    r = t.clientWidth - a - n,
                    s = i.getConstraintWidth(e);
                return isNaN(s) ? r : Math.min(r, s)
            }, i.getMaximumHeight = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientHeight;
                var a = parseInt(i.getStyle(t, "padding-top"), 10),
                    n = parseInt(i.getStyle(t, "padding-bottom"), 10),
                    r = t.clientHeight - a - n,
                    s = i.getConstraintHeight(e);
                return isNaN(s) ? r : Math.min(r, s)
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
                var r = (n = n || {}).data = n.data || {},
                    s = n.garbageCollect = n.garbageCollect || [];
                n.font !== t && (r = n.data = {}, s = n.garbageCollect = [], n.font = t), e.font = t;
                var o = 0;
                i.each(a, function(t) {
                    void 0 !== t && null !== t && !0 !== i.isArray(t) ? o = i.measureText(e, r, s, o, t) : i.isArray(t) && i.each(t, function(t) {
                        void 0 === t || null === t || i.isArray(t) || (o = i.measureText(e, r, s, o, t))
                    })
                });
                var d = s.length / 2;
                if (d > a.length) {
                    for (var l = 0; l < d; l++) delete r[s[l]];
                    s.splice(0, d)
                }
                return o
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
    lOED: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("bg", {
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
        })(a("PJh5"))
    },
    "lRs/": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N");
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
            var t = e.layoutService,
                a = i.noop;

            function s(a, n) {
                var r = new e.Title({
                    ctx: a.ctx,
                    options: n,
                    chart: a
                });
                t.configure(a, r, n), t.addBox(a, r), a.titleBlock = r
            }
            return e.Title = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = []
                },
                beforeUpdate: a,
                update: function(e, t, a) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: a,
                beforeSetDimensions: a,
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: a,
                beforeBuildLabels: a,
                buildLabels: a,
                afterBuildLabels: a,
                beforeFit: a,
                fit: function() {
                    var e = this,
                        t = i.valueOrDefault,
                        a = e.options,
                        r = a.display,
                        s = t(a.fontSize, n.global.defaultFontSize),
                        o = e.minSize,
                        d = i.isArray(a.text) ? a.text.length : 1,
                        l = i.options.toLineHeight(a.lineHeight, s),
                        u = r ? d * l + 2 * a.padding : 0;
                    e.isHorizontal() ? (o.width = e.maxWidth, o.height = u) : (o.width = u, o.height = e.maxHeight), e.width = o.width, e.height = o.height
                },
                afterFit: a,
                isHorizontal: function() {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function() {
                    var e = this,
                        t = e.ctx,
                        a = i.valueOrDefault,
                        r = e.options,
                        s = n.global;
                    if (r.display) {
                        var o, d, l, u = a(r.fontSize, s.defaultFontSize),
                            c = a(r.fontStyle, s.defaultFontStyle),
                            m = a(r.fontFamily, s.defaultFontFamily),
                            h = i.fontString(u, c, m),
                            _ = i.options.toLineHeight(r.lineHeight, u),
                            f = _ / 2 + r.padding,
                            p = 0,
                            y = e.top,
                            g = e.left,
                            M = e.bottom,
                            v = e.right;
                        t.fillStyle = a(r.fontColor, s.defaultFontColor), t.font = h, e.isHorizontal() ? (d = g + (v - g) / 2, l = y + f, o = v - g) : (d = "left" === r.position ? g + f : v - f, l = y + (M - y) / 2, o = M - y, p = Math.PI * ("left" === r.position ? -.5 : .5)), t.save(), t.translate(d, l), t.rotate(p), t.textAlign = "center", t.textBaseline = "middle";
                        var b = r.text;
                        if (i.isArray(b))
                            for (var L = 0, k = 0; k < b.length; ++k) t.fillText(b[k], 0, L, o), L += _;
                        else t.fillText(b, 0, 0, o);
                        t.restore()
                    }
                }
            }), {
                id: "title",
                beforeInit: function(e) {
                    var t = e.options.title;
                    t && s(e, t)
                },
                beforeUpdate: function(a) {
                    var r = a.options.title,
                        o = a.titleBlock;
                    r ? (i.mergeIf(r, n.global.title), o ? (t.configure(a, o, r), o.options = r) : s(a, r)) : o && (e.layoutService.removeBox(a, o), delete a.titleBlock)
                }
            }
        }
    },
    m7yE: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

            function a(e, a, n, r) {
                var i = function(e) {
                    var a = Math.floor(e % 1e3 / 100),
                        n = Math.floor(e % 100 / 10),
                        r = e % 10,
                        i = "";
                    a > 0 && (i += t[a] + "vatlh");
                    n > 0 && (i += ("" !== i ? " " : "") + t[n] + "maH");
                    r > 0 && (i += ("" !== i ? " " : "") + t[r]);
                    return "" === i ? "pagh" : i
                }(e);
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
            e.defineLocale("tlh", {
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
                    future: function(e) {
                        var t = e;
                        return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                    },
                    past: function(e) {
                        var t = e;
                        return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                    },
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
        })(a("PJh5"))
    },
    mC8W: function(e, t, a) {
        "use strict";
        a("k7DW")._set("scatter", {
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
    mg6x: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Doughnut = function(t, a) {
                return a.type = "doughnut", new e(t, a)
            }
        }
    },
    nE8X: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("lo", {
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
        })(a("PJh5"))
    },
    nLOz: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("gd", {
                months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
                monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
                monthsParseExact: !0,
                weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
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
        })(a("PJh5"))
    },
    nS2h: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

            function n(e, n, r, i) {
                var s = "";
                switch (r) {
                    case "s":
                        return i ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return i ? "minuutin" : "minuutti";
                    case "mm":
                        s = i ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return i ? "tunnin" : "tunti";
                    case "hh":
                        s = i ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return i ? "päivän" : "päivä";
                    case "dd":
                        s = i ? "päivän" : "päivää";
                        break;
                    case "M":
                        return i ? "kuukauden" : "kuukausi";
                    case "MM":
                        s = i ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return i ? "vuoden" : "vuosi";
                    case "yy":
                        s = i ? "vuoden" : "vuotta"
                }
                return s = function(e, n) {
                    return e < 10 ? n ? a[e] : t[e] : e
                }(e, i) + " " + s
            }
            e.defineLocale("fi", {
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
        })(a("PJh5"))
    },
    ntHu: function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a) {
                var n, r;
                return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = +e, r = {
                    mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: t ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? r[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? r[1] : r[2])
            }

            function a(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: function(e, t) {
                    var a = {
                        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                    };
                    return e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
                },
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
                    sameDay: a("[Сьогодні "),
                    nextDay: a("[Завтра "),
                    lastDay: a("[Вчора "),
                    nextWeek: a("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return a("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return a("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    m: t,
                    mm: t,
                    h: "годину",
                    hh: t,
                    d: "день",
                    dd: t,
                    M: "місяць",
                    MM: t,
                    y: "рік",
                    yy: t
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
        })(a("PJh5"))
    },
    o8tO: function(e, t) {},
    oQMP: function(e, t, a) {
        "use strict";
        var n = a("iO9N");
        e.exports = function(e) {
            var t = ["push", "pop", "shift", "splice", "unshift"];

            function a(e, a) {
                var n = e._chartjs;
                if (n) {
                    var r = n.listeners,
                        i = r.indexOf(a); - 1 !== i && r.splice(i, 1), r.length > 0 || (t.forEach(function(t) {
                        delete e[t]
                    }), delete e._chartjs)
                }
            }
            e.DatasetController = function(e, t) {
                this.initialize(e, t)
            }, n.extend(e.DatasetController.prototype, {
                datasetElementType: null,
                dataElementType: null,
                initialize: function(e, t) {
                    this.chart = e, this.index = t, this.linkScales(), this.addElements()
                },
                updateIndex: function(e) {
                    this.index = e
                },
                linkScales: function() {
                    var e = this.getMeta(),
                        t = this.getDataset();
                    null === e.xAxisID && (e.xAxisID = t.xAxisID || this.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = t.yAxisID || this.chart.options.scales.yAxes[0].id)
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
                    var e = this.datasetElementType;
                    return e && new e({
                        _chart: this.chart,
                        _datasetIndex: this.index
                    })
                },
                createMetaData: function(e) {
                    var t = this.dataElementType;
                    return t && new t({
                        _chart: this.chart,
                        _datasetIndex: this.index,
                        _index: e
                    })
                },
                addElements: function() {
                    var e, t, a = this.getMeta(),
                        n = this.getDataset().data || [],
                        r = a.data;
                    for (e = 0, t = n.length; e < t; ++e) r[e] = r[e] || this.createMetaData(e);
                    a.dataset = a.dataset || this.createMetaDataset()
                },
                addElementAndReset: function(e) {
                    var t = this.createMetaData(e);
                    this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                },
                buildOrUpdateElements: function() {
                    var e, r, i = this,
                        s = i.getDataset(),
                        o = s.data || (s.data = []);
                    i._data !== o && (i._data && a(i._data, i), r = i, (e = o)._chartjs ? e._chartjs.listeners.push(r) : (Object.defineProperty(e, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [r]
                        }
                    }), t.forEach(function(t) {
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
                    })), i._data = o), i.resyncElements()
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
                        s = n.valueAtIndexOrDefault,
                        o = e._model;
                    o.backgroundColor = i.backgroundColor ? i.backgroundColor : s(a.backgroundColor, r, t.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : s(a.borderColor, r, t.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : s(a.borderWidth, r, t.borderWidth)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        r = e.custom || {},
                        i = n.valueAtIndexOrDefault,
                        s = n.getHoverColor,
                        o = e._model;
                    o.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : i(t.hoverBackgroundColor, a, s(o.backgroundColor)), o.borderColor = r.hoverBorderColor ? r.hoverBorderColor : i(t.hoverBorderColor, a, s(o.borderColor)), o.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : i(t.hoverBorderWidth, a, o.borderWidth)
                },
                resyncElements: function() {
                    var e = this.getMeta(),
                        t = this.getDataset().data,
                        a = e.data.length,
                        n = t.length;
                    n < a ? e.data.splice(n, a - n) : n > a && this.insertElements(a, n - a)
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
    oo1B: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ml", {
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
        })(a("PJh5"))
    },
    ooba: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ms", {
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
        })(a("PJh5"))
    },
    pfs9: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("pa-in", {
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
        })(a("PJh5"))
    },
    rEvf: function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            r = a("Odds"),
            i = function() {
                return n.createElement(r._35, {
                    className: "ach-checkmark",
                    textAlign: r._45.Center,
                    display: r.R.InlineFlex,
                    justifyContent: r._7.Center,
                    alignItems: r.c.Center,
                    color: r.K.Overlay
                }, n.createElement(r._35, {
                    className: "ach-checkmark__inner",
                    display: r.R.Flex,
                    justifyContent: r._7.Center,
                    alignItems: r.c.Center
                }, n.createElement(r._24, {
                    asset: r._25.Check,
                    width: 8,
                    height: 8
                })))
            };
        a.d(t, "a", function() {
            return i
        })
    },
    rGYv: function(e, t) {
        e.exports = {
            acquireContext: function(e) {
                return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
            }
        }
    },
    rIuo: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            e.defineLocale("dv", {
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
        })(a("PJh5"))
    },
    rWJA: function(e, t, a) {
        var n = a("TWHA"),
            r = a("ajDi"),
            i = function(e) {
                return e instanceof i ? e : this instanceof i ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void("string" == typeof e ? (t = r.getRgba(e)) ? this.setValues("rgb", t) : (t = r.getHsla(e)) ? this.setValues("hsl", t) : (t = r.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new i(e);
                var t
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
                return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
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
                var a = e,
                    n = void 0 === t ? .5 : t,
                    r = 2 * n - 1,
                    i = this.alpha() - a.alpha(),
                    s = ((r * i == -1 ? r : (r + i) / (1 + r * i)) + 1) / 2,
                    o = 1 - s;
                return this.rgb(s * this.red() + o * a.red(), s * this.green() + o * a.green(), s * this.blue() + o * a.blue()).alpha(this.alpha() * n + a.alpha() * (1 - n))
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                var e, t, a = new i,
                    n = this.values,
                    r = a.values;
                for (var s in n) n.hasOwnProperty(s) && (e = n[s], "[object Array]" === (t = {}.toString.call(e)) ? r[s] = e.slice(0) : "[object Number]" === t ? r[s] = e : console.error("unexpected color value:", e));
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
            var a, r, i = this.values,
                s = this.spaces,
                o = this.maxes,
                d = 1;
            if (this.valid = !0, "alpha" === e) d = t;
            else if (t.length) i[e] = t.slice(0, e.length), d = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (a = 0; a < e.length; a++) i[e][a] = t[e.charAt(a)];
                d = t.a
            } else if (void 0 !== t[s[e][0]]) {
                var l = s[e];
                for (a = 0; a < e.length; a++) i[e][a] = t[l[a]];
                d = t.alpha
            }
            if (i.alpha = Math.max(0, Math.min(1, void 0 === d ? i.alpha : d)), "alpha" === e) return !1;
            for (a = 0; a < e.length; a++) r = Math.max(0, Math.min(o[e][a], i[e][a])), i[e][a] = Math.round(r);
            for (var u in s) u !== e && (i[u] = n[e][u](i[e]));
            return !0
        }, i.prototype.setSpace = function(e, t) {
            var a = t[0];
            return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a), this)
        }, i.prototype.setChannel = function(e, t, a) {
            var n = this.values[e];
            return void 0 === a ? n[t] : a === n[t] ? this : (n[t] = a, this.setValues(e, n), this)
        }, "undefined" != typeof window && (window.Color = i), e.exports = i
    },
    raKi: function(e, t) {},
    sFj2: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("L5rj"),
            i = a("iO9N");
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
                                s = t.datasets[0],
                                o = r.data[n],
                                d = o && o.custom || {},
                                l = i.valueAtIndexOrDefault,
                                u = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: d.backgroundColor ? d.backgroundColor : l(s.backgroundColor, n, u.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : l(s.borderColor, n, u.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : l(s.borderWidth, n, u.borderWidth),
                                hidden: isNaN(s.data[n]) || r.data[n].hidden,
                                index: n
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, r, i = t.index,
                        s = this.chart;
                    for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(r = s.getDatasetMeta(a)).data[i] && (r.data[i].hidden = !r.data[i].hidden);
                    s.update()
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
                        return i.isArray(a) ? (a = a.slice())[0] += n : a += n, a
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
                        s = r.elements.arc,
                        o = n.right - n.left - s.borderWidth,
                        d = n.bottom - n.top - s.borderWidth,
                        l = Math.min(o, d),
                        u = {
                            x: 0,
                            y: 0
                        },
                        c = t.getMeta(),
                        m = r.cutoutPercentage,
                        h = r.circumference;
                    if (h < 2 * Math.PI) {
                        var _ = r.rotation % (2 * Math.PI),
                            f = (_ += 2 * Math.PI * (_ >= Math.PI ? -1 : _ < -Math.PI ? 1 : 0)) + h,
                            p = {
                                x: Math.cos(_),
                                y: Math.sin(_)
                            },
                            y = {
                                x: Math.cos(f),
                                y: Math.sin(f)
                            },
                            g = _ <= 0 && f >= 0 || _ <= 2 * Math.PI && 2 * Math.PI <= f,
                            M = _ <= .5 * Math.PI && .5 * Math.PI <= f || _ <= 2.5 * Math.PI && 2.5 * Math.PI <= f,
                            v = _ <= -Math.PI && -Math.PI <= f || _ <= Math.PI && Math.PI <= f,
                            b = _ <= .5 * -Math.PI && .5 * -Math.PI <= f || _ <= 1.5 * Math.PI && 1.5 * Math.PI <= f,
                            L = m / 100,
                            k = {
                                x: v ? -1 : Math.min(p.x * (p.x < 0 ? 1 : L), y.x * (y.x < 0 ? 1 : L)),
                                y: b ? -1 : Math.min(p.y * (p.y < 0 ? 1 : L), y.y * (y.y < 0 ? 1 : L))
                            },
                            Y = {
                                x: g ? 1 : Math.max(p.x * (p.x > 0 ? 1 : L), y.x * (y.x > 0 ? 1 : L)),
                                y: M ? 1 : Math.max(p.y * (p.y > 0 ? 1 : L), y.y * (y.y > 0 ? 1 : L))
                            },
                            D = {
                                width: .5 * (Y.x - k.x),
                                height: .5 * (Y.y - k.y)
                            };
                        l = Math.min(o / D.width, d / D.height), u = {
                            x: -.5 * (Y.x + k.x),
                            y: -.5 * (Y.y + k.y)
                        }
                    }
                    a.borderWidth = t.getMaxBorderWidth(c.data), a.outerRadius = Math.max((l - a.borderWidth) / 2, 0), a.innerRadius = Math.max(m ? a.outerRadius / 100 * m : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, c.total = t.calculateTotal(), t.outerRadius = a.outerRadius - a.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - a.radiusLength, 0), i.each(c.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = n.chart,
                        s = r.chartArea,
                        o = r.options,
                        d = o.animation,
                        l = (s.left + s.right) / 2,
                        u = (s.top + s.bottom) / 2,
                        c = o.rotation,
                        m = o.rotation,
                        h = n.getDataset(),
                        _ = a && d.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(h.data[t]) * (o.circumference / (2 * Math.PI)),
                        f = a && d.animateScale ? 0 : n.innerRadius,
                        p = a && d.animateScale ? 0 : n.outerRadius,
                        y = i.valueAtIndexOrDefault;
                    i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _model: {
                            x: l + r.offsetX,
                            y: u + r.offsetY,
                            startAngle: c,
                            endAngle: m,
                            circumference: _,
                            outerRadius: p,
                            innerRadius: f,
                            label: y(h.label, t, r.data.labels[t])
                        }
                    });
                    var g = e._model;
                    this.removeHoverStyle(e), a && d.animateRotate || (g.startAngle = 0 === t ? o.rotation : n.getMeta().data[t - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), e.pivot()
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
                    for (var t, a, n = 0, r = this.index, i = e.length, s = 0; s < i; s++) t = e[s]._model ? e[s]._model.borderWidth : 0, n = (a = e[s]._chart ? e[s]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (n = t > n ? t : n) ? a : n;
                    return n
                }
            })
        }
    },
    sFo6: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("iO9N"),
            i = a("IbXy");
        e.exports = function(e) {
            var t = n.global,
                a = {
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
                };

            function s(e) {
                var t = e.options;
                return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
            }

            function o(e) {
                var a = e.options.pointLabels,
                    n = r.valueOrDefault(a.fontSize, t.defaultFontSize),
                    i = r.valueOrDefault(a.fontStyle, t.defaultFontStyle),
                    s = r.valueOrDefault(a.fontFamily, t.defaultFontFamily);
                return {
                    size: n,
                    style: i,
                    family: s,
                    font: r.fontString(n, i, s)
                }
            }

            function d(e, t, a, n, r) {
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

            function l(e) {
                return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
            }

            function u(e, t, a, n) {
                if (r.isArray(t))
                    for (var i = a.y, s = 1.5 * n, o = 0; o < t.length; ++o) e.fillText(t[o], a.x, i), i += s;
                else e.fillText(t, a.x, a.y)
            }

            function c(e, t, a) {
                90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
            }

            function m(e) {
                return r.isNumber(e) ? e : 0
            }
            var h = e.LinearScaleBase.extend({
                setDimensions: function() {
                    var e = this,
                        a = e.options,
                        n = a.ticks;
                    e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                    var i = r.min([e.height, e.width]),
                        s = r.valueOrDefault(n.fontSize, t.defaultFontSize);
                    e.drawingArea = a.display ? i / 2 - (s / 2 + n.backdropPaddingY) : i / 2
                },
                determineDataLimits: function() {
                    var e = this,
                        t = e.chart,
                        a = Number.POSITIVE_INFINITY,
                        n = Number.NEGATIVE_INFINITY;
                    r.each(t.data.datasets, function(i, s) {
                        if (t.isDatasetVisible(s)) {
                            var o = t.getDatasetMeta(s);
                            r.each(i.data, function(t, r) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || o.data[r].hidden || (a = Math.min(i, a), n = Math.max(i, n))
                            })
                        }
                    }), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
                },
                getTickLimit: function() {
                    var e = this.options.ticks,
                        a = r.valueOrDefault(e.fontSize, t.defaultFontSize);
                    return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * a)))
                },
                convertTicksToLabels: function() {
                    var t = this;
                    e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                },
                getLabelForIndex: function(e, t) {
                    return +this.getRightValue(this.chart.data.datasets[t].data[e])
                },
                fit: function() {
                    var e, t;
                    this.options.pointLabels.display ? function(e) {
                        var t, a, n, i = o(e),
                            l = Math.min(e.height / 2, e.width / 2),
                            u = {
                                r: e.width,
                                l: 0,
                                t: e.height,
                                b: 0
                            },
                            c = {};
                        e.ctx.font = i.font, e._pointLabelSizes = [];
                        var m, h, _, f = s(e);
                        for (t = 0; t < f; t++) {
                            n = e.getPointPosition(t, l), m = e.ctx, h = i.size, _ = e.pointLabels[t] || "", a = r.isArray(_) ? {
                                w: r.longestText(m, m.font, _),
                                h: _.length * h + 1.5 * (_.length - 1) * h
                            } : {
                                w: m.measureText(_).width,
                                h: h
                            }, e._pointLabelSizes[t] = a;
                            var p = e.getIndexAngle(t),
                                y = r.toDegrees(p) % 360,
                                g = d(y, n.x, a.w, 0, 180),
                                M = d(y, n.y, a.h, 90, 270);
                            g.start < u.l && (u.l = g.start, c.l = p), g.end > u.r && (u.r = g.end, c.r = p), M.start < u.t && (u.t = M.start, c.t = p), M.end > u.b && (u.b = M.end, c.b = p)
                        }
                        e.setReductions(l, u, c)
                    }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
                },
                setReductions: function(e, t, a) {
                    var n = t.l / Math.sin(a.l),
                        r = Math.max(t.r - this.width, 0) / Math.sin(a.r),
                        i = -t.t / Math.cos(a.t),
                        s = -Math.max(t.b - this.height, 0) / Math.cos(a.b);
                    n = m(n), r = m(r), i = m(i), s = m(s), this.drawingArea = Math.min(Math.round(e - (n + r) / 2), Math.round(e - (i + s) / 2)), this.setCenterPoint(n, r, i, s)
                },
                setCenterPoint: function(e, t, a, n) {
                    var r = this,
                        i = r.width - t - r.drawingArea,
                        s = e + r.drawingArea,
                        o = a + r.drawingArea,
                        d = r.height - n - r.drawingArea;
                    r.xCenter = Math.round((s + i) / 2 + r.left), r.yCenter = Math.round((o + d) / 2 + r.top)
                },
                getIndexAngle: function(e) {
                    return e * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                },
                getDistanceFromCenterForValue: function(e) {
                    var t = this;
                    if (null === e) return 0;
                    var a = t.drawingArea / (t.max - t.min);
                    return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a
                },
                getPointPosition: function(e, t) {
                    var a = this.getIndexAngle(e) - Math.PI / 2;
                    return {
                        x: Math.round(Math.cos(a) * t) + this.xCenter,
                        y: Math.round(Math.sin(a) * t) + this.yCenter
                    }
                },
                getPointPositionForValue: function(e, t) {
                    return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                },
                getBasePosition: function() {
                    var e = this.min,
                        t = this.max;
                    return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
                },
                draw: function() {
                    var e = this,
                        a = e.options,
                        n = a.gridLines,
                        i = a.ticks,
                        d = r.valueOrDefault;
                    if (a.display) {
                        var m = e.ctx,
                            h = this.getIndexAngle(0),
                            _ = d(i.fontSize, t.defaultFontSize),
                            f = d(i.fontStyle, t.defaultFontStyle),
                            p = d(i.fontFamily, t.defaultFontFamily),
                            y = r.fontString(_, f, p);
                        r.each(e.ticks, function(a, o) {
                            if (o > 0 || i.reverse) {
                                var l = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]);
                                if (n.display && 0 !== o && function(e, t, a, n) {
                                        var i = e.ctx;
                                        if (i.strokeStyle = r.valueAtIndexOrDefault(t.color, n - 1), i.lineWidth = r.valueAtIndexOrDefault(t.lineWidth, n - 1), e.options.gridLines.circular) i.beginPath(), i.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), i.closePath(), i.stroke();
                                        else {
                                            var o = s(e);
                                            if (0 === o) return;
                                            i.beginPath();
                                            var d = e.getPointPosition(0, a);
                                            i.moveTo(d.x, d.y);
                                            for (var l = 1; l < o; l++) d = e.getPointPosition(l, a), i.lineTo(d.x, d.y);
                                            i.closePath(), i.stroke()
                                        }
                                    }(e, n, l, o), i.display) {
                                    var u = d(i.fontColor, t.defaultFontColor);
                                    if (m.font = y, m.save(), m.translate(e.xCenter, e.yCenter), m.rotate(h), i.showLabelBackdrop) {
                                        var c = m.measureText(a).width;
                                        m.fillStyle = i.backdropColor, m.fillRect(-c / 2 - i.backdropPaddingX, -l - _ / 2 - i.backdropPaddingY, c + 2 * i.backdropPaddingX, _ + 2 * i.backdropPaddingY)
                                    }
                                    m.textAlign = "center", m.textBaseline = "middle", m.fillStyle = u, m.fillText(a, 0, -l), m.restore()
                                }
                            }
                        }), (a.angleLines.display || a.pointLabels.display) && function(e) {
                            var a = e.ctx,
                                n = r.valueOrDefault,
                                i = e.options,
                                d = i.angleLines,
                                m = i.pointLabels;
                            a.lineWidth = d.lineWidth, a.strokeStyle = d.color;
                            var h = e.getDistanceFromCenterForValue(i.ticks.reverse ? e.min : e.max),
                                _ = o(e);
                            a.textBaseline = "top";
                            for (var f = s(e) - 1; f >= 0; f--) {
                                if (d.display) {
                                    var p = e.getPointPosition(f, h);
                                    a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(p.x, p.y), a.stroke(), a.closePath()
                                }
                                if (m.display) {
                                    var y = e.getPointPosition(f, h + 5),
                                        g = n(m.fontColor, t.defaultFontColor);
                                    a.font = _.font, a.fillStyle = g;
                                    var M = e.getIndexAngle(f),
                                        v = r.toDegrees(M);
                                    a.textAlign = l(v), c(v, e._pointLabelSizes[f], y), u(a, e.pointLabels[f] || "", y, _.size)
                                }
                            }
                        }(e)
                    }
                }
            });
            e.scaleService.registerScaleType("radialLinear", h, a)
        }
    },
    sjgK: function(e, t, a) {
        "use strict";
        var n = a("Odds"),
            r = {
                1: n._25.Roman1,
                2: n._25.Roman2,
                3: n._25.Roman3,
                4: n._25.Roman4,
                5: n._25.Roman5
            };

        function i(e) {
            return r[e]
        }
        var s = {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V"
        };

        function o(e) {
            return s[e]
        }
        var d = a("heIq");
        a.d(t, "a", function() {
            return i
        }), a.d(t, "b", function() {
            return o
        }), a.d(t, !1, function() {
            return d.a
        }), a.d(t, !1, function() {
            return d.b
        }), a.d(t, !1, function() {
            return d.c
        })
    },
    sqLM: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("eu", {
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
        })(a("PJh5"))
    },
    ssxj: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");

            function n(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }

            function r(e, t, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return t || r ? "pár sekund" : "pár sekundami";
                    case "m":
                        return t ? "minuta" : r ? "minutu" : "minutou";
                    case "mm":
                        return t || r ? i + (n(e) ? "minuty" : "minut") : i + "minutami";
                    case "h":
                        return t ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return t || r ? i + (n(e) ? "hodiny" : "hodin") : i + "hodinami";
                    case "d":
                        return t || r ? "den" : "dnem";
                    case "dd":
                        return t || r ? i + (n(e) ? "dny" : "dní") : i + "dny";
                    case "M":
                        return t || r ? "měsíc" : "měsícem";
                    case "MM":
                        return t || r ? i + (n(e) ? "měsíce" : "měsíců") : i + "měsíci";
                    case "y":
                        return t || r ? "rok" : "rokem";
                    case "yy":
                        return t || r ? i + (n(e) ? "roky" : "let") : i + "lety"
                }
            }
            e.defineLocale("cs", {
                months: t,
                monthsShort: a,
                monthsParse: function(e, t) {
                    var a, n = [];
                    for (a = 0; a < 12; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
                    return n
                }(t, a),
                shortMonthsParse: function(e) {
                    var t, a = [];
                    for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                    return a
                }(a),
                longMonthsParse: function(e) {
                    var t, a = [];
                    for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                    return a
                }(t),
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
                    s: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })(a("PJh5"))
    },
    svD2: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("me", {
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
        })(a("PJh5"))
    },
    tVPZ: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("TToO"),
            r = a("GiK3"),
            i = a("3zLD"),
            s = a("6sO2"),
            o = a("7vx8"),
            d = a("j7/Y"),
            l = a("w9tK"),
            u = a("vH/s"),
            c = a("CSlQ"),
            m = a("pK/l"),
            h = a("WmaG"),
            _ = a("5rtz"),
            f = a("Odds"),
            p = a("HW6M"),
            y = a("WaEV"),
            g = 400,
            M = 190,
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.viewerGraph) {
                        var e = this.getBarGradient();
                        this.setCanvasResolution(), this.myChart = new y(this.viewerGraph, {
                            type: "bar",
                            data: {
                                labels: this.props.timeLabels,
                                datasets: [{
                                    label: Object(s.d)("Avg. viewers", "StreamSummaryViewerGraphBarLabel"),
                                    data: this.props.viewerCounts,
                                    backgroundColor: e,
                                    hoverBackgroundColor: "#B19CDA",
                                    hoverBorderColor: "#7D5BBE",
                                    hoverBorderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            maxRotation: 0,
                                            minRotation: 0,
                                            maxTicksLimit: 4,
                                            fontColor: "#D7CCEB",
                                            fontSize: 10,
                                            padding: 5
                                        },
                                        gridLines: {
                                            color: "rgba(255, 255, 255, 0)",
                                            lineWidth: 1,
                                            drawBorder: !1,
                                            display: !1
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            min: 0,
                                            maxTicksLimit: 6,
                                            fontColor: "#D7CCEB",
                                            fontSize: 10,
                                            padding: 5,
                                            callback: function(e) {
                                                if (Math.floor(e) === e) return e
                                            }
                                        },
                                        gridLines: {
                                            color: "rgba(255, 255, 255, 0.1)",
                                            lineWidth: 1,
                                            drawBorder: !1
                                        }
                                    }]
                                },
                                legend: {
                                    display: !1
                                },
                                tooltips: {
                                    backgroundColor: "rgba(0,0,0,0.95)",
                                    titleFontColor: "#FAF9FA",
                                    bodyFontColor: "#CBC8D0",
                                    cornerRadius: 3,
                                    displayColors: !1,
                                    callbacks: {
                                        label: function(e, t) {
                                            return t.datasets[e.datasetIndex].label + ": " + Object(s.e)(Number(e.yLabel))
                                        }
                                    }
                                },
                                responsive: !0
                            }
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this;
                    return r.createElement(f._2, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, r.createElement("canvas", {
                        ref: function(t) {
                            return e.viewerGraph = t
                        }
                    }))
                }, t.prototype.getBarGradient = function() {
                    if (this.viewerGraph) {
                        var e = this.viewerGraph.getContext("2d").createLinearGradient(0, 0, 0, 190);
                        return e.addColorStop(0, "#F9F8FC"), e.addColorStop(1, "#C5B6E2"), e
                    }
                }, t.prototype.setCanvasResolution = function() {
                    if (this.viewerGraph) {
                        var e = g,
                            t = M,
                            a = b(this.viewerGraph.getContext("2d"));
                        this.viewerGraph.width = e * a, this.viewerGraph.height = t * a, this.viewerGraph.style.width = e + "px", this.viewerGraph.style.height = t + "px", this.viewerGraph.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                    }
                }, t
            }(r.Component),
            b = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            L = (a("db2S"), {
                "data-test-selector": "vg-peak-message"
            }),
            k = {
                "data-test-selector": "no-data"
            },
            Y = "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
            D = "StinkyCheese",
            w = function(e) {
                var t = p({
                    "sm-graph-panel": !0,
                    "sm-graph-panel--no-data": e.viewerGraph.isEmpty
                });
                return r.createElement("div", null, r.createElement(f._35, {
                    className: t,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2
                }, r.createElement(f._35, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(f.Q, {
                    fontSize: f.V.Size4,
                    color: f.K.Overlay,
                    bold: !0
                }, Object(s.d)("Your Viewers", "StreamSummaryViewerGraphTitle")), r.createElement(S, n.__assign({}, e))), r.createElement(x, n.__assign({}, e))))
            },
            S = function(e) {
                var t = e.viewerGraph,
                    a = e.peak;
                if (t.isEmpty) return null;
                var i = Object(s.c)(a.peakViewershipTime, {
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    o = Object(s.d)("{peakViewers, plural, one {# viewer} other {# viewers}}", {
                        peakViewers: a.maxViewerCount
                    }, "StreamSummaryViewerGraphPeakCount"),
                    d = Object(s.d)("Peaked at {peakViewersTxt} at {time}", {
                        peakViewersTxt: r.createElement("strong", null, o),
                        time: i
                    }, "StreamSummaryViewerGraphPeakViewersMsg");
                return r.createElement(f.Q, n.__assign({
                    fontSize: f.V.Size5,
                    color: f.K.OverlayAlt
                }, L), d)
            },
            x = function(e) {
                var t = e.viewerGraph;
                return t.isEmpty ? r.createElement(f._8, n.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    className: "sm-graph-panel__no-data-content"
                }, k), r.createElement(f.m, {
                    src: Y,
                    alt: D,
                    size: 50
                }), r.createElement(f.Q, {
                    color: f.K.OverlayAlt,
                    fontSize: f.V.Size5
                }, Object(s.d)("Not enough data for us to display", "StreamSummaryViewerGraphNoData"))) : r.createElement(v, n.__assign({}, t))
            },
            T = a("OAwv"),
            j = a("u4Vk"),
            H = a("PGY2"),
            O = function() {
                function e(e) {
                    this.timeLabels = e.timeLabels, this.viewerCounts = e.viewerCounts, this.interpolationChunkMinutes = e.interpolationChunkMinutes, this.isEmpty = !(e.viewerCounts && e.viewerCounts.length)
                }
                return e.fromPayload = function(t) {
                    var a = function(e) {
                        var t = [],
                            a = [];
                        return e.forEach(function(e) {
                            t.push(function(e, t) {
                                void 0 === t && (t = {});
                                var a = s.o.intl.getLanguageCode() || "en";
                                return Intl.DateTimeFormat(a, t).format(e)
                            }(new Date(e.timestamp), {
                                hour: "numeric",
                                minute: "numeric"
                            }));
                            var n = e.count < 10 ? Math.round(10 * e.count) / 10 : Math.round(e.count);
                            a.push(n)
                        }), {
                            timeLabels: t,
                            viewerCounts: a
                        }
                    }(t.concurrent_viewers);
                    return new e({
                        timeLabels: a.timeLabels,
                        viewerCounts: a.viewerCounts,
                        interpolationChunkMinutes: t.interpolation_chunk_minutes
                    })
                }, e
            }();
        var P = {
            timeLabels: [],
            viewerCounts: [],
            interpolationChunkMinutes: 0
        };

        function C(e) {
            return n.__awaiter(this, void 0, void 0, function() {
                var t, a, r, i;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = "https://api.twitch.tv/v5/channels/" + e.channel.id + "/analytics/stats_time_series", a = T.stringify(Object(j.i)(e.interval)), r = [t, a].join("?"), [4, Object(H.c)({
                                path: r
                            })];
                        case 1:
                            return (i = n.sent()).isError() ? [2, {
                                isError: !0,
                                statsTimeSeries: new O(P)
                            }] : [2, {
                                isError: !1,
                                statsTimeSeries: (s = i.body, O.fromPayload(s))
                            }]
                    }
                    var s
                })
            })
        }
        var A = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        viewerGraph: new O(P),
                        isLoading: !0
                    }, a
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchStatsTimeSeries()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.streamSummary !== this.props.streamSummary && this.fetchStatsTimeSeries()
                }, t.prototype.render = function() {
                    var e = this.props.streamSummary,
                        t = this.state,
                        a = t.viewerGraph;
                    if (t.isLoading || !e) return r.createElement(f._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(f._14, {
                        height: 300
                    }));
                    var n = {
                        maxViewerCount: e.maxViewerCount,
                        peakViewershipTime: e.peakViewershipTime
                    };
                    return r.createElement(w, {
                        viewerGraph: a,
                        peak: n
                    })
                }, t.prototype.fetchStatsTimeSeries = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return (e = this.props.streamSummary) ? (this.setState({
                                        isLoading: !0
                                    }), [4, C(e)]) : [2];
                                case 1:
                                    return (t = a.sent()).isError ? [2] : (this.setState({
                                        viewerGraph: t.statsTimeSeries,
                                        isLoading: !1
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(r.Component),
            E = a("AOOj"),
            F = a("RVgG"),
            W = a("D6QB"),
            I = a("zjE0"),
            R = a("FeZP"),
            z = function(e) {
                if (e.query.isLoading || !e.streamSummaryCursor.current) return r.createElement(f._14, {
                    height: 400
                });
                var t = e.streamSummaryCursor.current.interval,
                    a = e.query.achievements.nCompletedInRange(3, t);
                if (e.streamSummaryCursor.isLast && a.length < 3) {
                    var n = e.query.achievements.topNInProgress(3 - a.length);
                    a.push.apply(a, n)
                }
                return a.length ? r.createElement(I.a, {
                    title: Object(s.d)("What is my achievements progress?", "StreamSummaryAchievementsPanel")
                }, r.createElement(f._35, {
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    background: f.n.Base
                }, r.createElement(f._35, {
                    padding: 2,
                    borderBottom: !0
                }, a.map(function(e) {
                    return r.createElement(F.a, {
                        key: e.id,
                        achievement: e
                    }, r.createElement(W.a, {
                        achievement: e
                    }))
                })), r.createElement(R.a, {
                    message: Object(s.d)("View Achievements", "StreamSummaryAchievementsPanel"),
                    linkTo: H.b.channelAchievements(e.streamSummaryCursor.current.channel.name),
                    targetBlank: !0
                }))) : r.createElement("span", null)
            },
            N = a("Xcw2"),
            V = a("DNvj"),
            B = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        topClipsByStreamSummary: new Map,
                        isLoading: !0
                    }, a
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.streamSummary !== this.props.streamSummary && this.fetchTopClips()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.streamSummary && this.props.streamSummary.id,
                        a = t && this.state.topClipsByStreamSummary.get(t) || [];
                    return r.createElement(N.a, {
                        channel: this.props.channel
                    }, function(t) {
                        return e.props.children({
                            topClips: {
                                clips: a,
                                isLoading: e.state.isLoading
                            },
                            achievementProgressionsQuery: t
                        })
                    })
                }, t.prototype.fetchTopClips = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return !(e = this.props.streamSummary) || this.state.topClipsByStreamSummary.get(e.id) ? [2] : (this.setState({
                                        isLoading: !0
                                    }), [4, Object(V.a)(e.channel.name, e.interval)]);
                                case 1:
                                    return (t = a.sent()).isError ? [2] : (this.setState(function(a) {
                                        return {
                                            topClipsByStreamSummary: new Map(a.topClipsByStreamSummary).set(e.id, t.topClips),
                                            isLoading: !1
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(r.Component),
            J = a("9Yaz"),
            G = (a("h2tJ"), {
                "data-test-selector": "live-dashboard-link"
            }),
            q = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                alt: "VoHiYo"
            },
            U = "https://help.twitch.tv/customer/portal/articles/2877822";

        function K(e) {
            var t = e.query;
            return t.isLoading || t.streamSummaries.length || !t.channel ? r.createElement("div", null) : r.createElement(f._8, {
                position: f._15.Absolute,
                fullWidth: !0,
                margin: {
                    top: 5
                },
                zIndex: f._62.Above
            }, r.createElement(f._55, {
                childWidth: f._56.Medium,
                center: !0
            }, r.createElement("div", {
                className: "sm-welcome-modal"
            }, r.createElement(f.e, {
                type: f.j.SlideInBottom,
                duration: f.g.Medium,
                enabled: !0,
                timing: f.i.EaseInOut
            }, r.createElement(f._35, {
                border: !0,
                padding: 2,
                background: f.n.Base,
                elevation: 3
            }, r.createElement(f._8, {
                display: f.R.Flex,
                alignItems: f.c.Center,
                margin: {
                    bottom: 1
                }
            }, r.createElement(f.m, n.__assign({}, q, {
                size: 30
            })), r.createElement(f._8, {
                margin: {
                    left: .5
                }
            }, r.createElement(f.Q, {
                type: f._49.H4,
                bold: !0
            }, Object(s.d)("Welcome to Stream Summary", "StreamSummaryNoAvailableStreamSummariesNotice")))), r.createElement(f._58, null, r.createElement(f.Q, {
                fontSize: f.V.Size5
            }, Object(s.d)("See a summary of your past streams with stats, clips, achievements, and more. Stream to get started!", "StreamSummaryNoAvailableStreamSummariesNotice"))), r.createElement(f._8, {
                padding: {
                    top: 1
                }
            }, r.createElement(f._8, {
                margin: {
                    right: 1
                },
                display: f.R.InlineBlock
            }, r.createElement(f.v, n.__assign({
                linkTo: "https://twitch.tv/" + t.channel.name + "/dashboard"
            }, G), Object(s.d)("Go to Live Dashboard", "StreamSummaryNoAvailableStreamSummariesNotice"))), r.createElement(f.v, {
                linkTo: U,
                type: f.B.Text
            }, Object(s.d)("Learn More", "StreamSummaryNoAvailableStreamSummariesNotice"))))))))
        }
        a("jQxI");
        var Q, X = a("KMD5"),
            Z = function(e) {
                return e.quest && !e.quest.isFinished ? r.createElement(f._35, {
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2,
                    background: f.n.Base
                }, r.createElement(f._8, {
                    padding: {
                        bottom: 2
                    }
                }, r.createElement(f.Q, {
                    type: f._49.H4,
                    bold: !0
                }, e.quest.title)), e.quest.achievements.map(function(t) {
                    return r.createElement(F.a, {
                        key: t.id,
                        achievement: t
                    }, r.createElement(X.a, {
                        achievement: t,
                        quest: e.quest
                    }))
                })) : e.quest ? r.createElement("span", null) : r.createElement(f._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(f._14, {
                    height: 400
                }))
            },
            $ = a("vTHh");

        function ee(e) {
            return (Q || (Q = {
                other: Object(s.d)("Other", "DashboardStatsReferralKey"),
                front_page_featured: Object(s.d)("Featured Section - Front Page", "DashboardStatsReferralKey"),
                creative_page_featured: Object(s.d)("Featured Section - Creative Page", "DashboardStatsReferralKey"),
                hosted: Object(s.d)("Hosts", "DashboardStatsReferralKey"),
                email_live_notification: Object(s.d)("Notifications - Email", "DashboardStatsReferralKey"),
                onsite_notification: Object(s.d)("Notifications - Onsite", "DashboardStatsReferralKey"),
                followed_channel: Object(s.d)("Followers", "DashboardStatsReferralKey"),
                directory_browse: Object(s.d)("Browse Page", "DashboardStatsReferralKey"),
                search: Object(s.d)("Searches", "DashboardStatsReferralKey"),
                clips_live: Object(s.d)("Clips", "DashboardStatsReferralKey"),
                friend_presence: Object(s.d)("Friends", "DashboardStatsReferralKey"),
                top_nav_bar: Object(s.d)("Your Channel Page", "DashboardStatsReferralKey"),
                recommended_channel: Object(s.d)("Recommendations", "DashboardStatsReferralKey"),
                other_channel_page: Object(s.d)("Other Channel Page", "DashboardStatsReferralKey"),
                facebook: Object(s.d)("Facebook", "DashboardStatsReferralKey"),
                google: Object(s.d)("Google", "DashboardStatsReferralKey"),
                reddit: Object(s.d)("Reddit", "DashboardStatsReferralKey"),
                youtube: Object(s.d)("Youtube", "DashboardStatsReferralKey"),
                "t.co": Object(s.d)("Twitter", "DashboardStatsReferralKey"),
                unknown: Object(s.d)("Direct", "DashboardStatsReferralKey"),
                twitch_aggregate: Object(s.d)("Twitch", "DashboardStatsReferralKey"),
                external_aggregate: Object(s.d)("External", "DashboardStatsReferralKey"),
                raid_channel: Object(s.d)("Raids", "DashboardStatsReferralKey")
            }), Q)[e] || e
        }
        a("o8tO");
        var te = 5,
            ae = {
                "data-test-selector": "no-data"
            },
            ne = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
                alt: "StinkyCheese"
            };

        function re(e) {
            var t = e.streamSummary;
            if (!t) return r.createElement(f._8, {
                margin: {
                    bottom: 2
                }
            }, r.createElement(f._14, {
                height: 375
            }));
            var a = t.videoPlayAllReferrers;
            return r.createElement(I.a, {
                title: Object(s.d)("Where did my views come from?", "StreamSummaryReferralPanel")
            }, r.createElement(f._35, {
                className: "referral-panel",
                flexDirection: a.totals ? void 0 : f.T.Column,
                margin: {
                    bottom: 2
                },
                elevation: 1,
                background: f.n.Base
            }, r.createElement(f._35, {
                borderBottom: !0,
                padding: {
                    bottom: 1
                }
            }, r.createElement($.a, {
                referrals: a.items.slice(0, te),
                totals: a.totals,
                translationFunc: ee,
                subtitle: function(e) {
                    if (!e) return "";
                    return Object(s.d)("{viewCount, plural, one {# view across all web sources} other {# views across all web sources}}", {
                        viewCount: e
                    }, "StreamSummaryReferralPanel")
                }(a.totals)
            }), !a.totals && r.createElement(ie, null)), r.createElement(se, {
                streamSummary: t
            })))
        }

        function ie() {
            return r.createElement(f._35, n.__assign({
                className: "referral-panel--no-data",
                display: f.R.Flex,
                flexGrow: 1,
                flexDirection: f.T.Column,
                alignItems: f.c.Center,
                alignContent: f.b.Center,
                justifyContent: f._7.Center,
                padding: {
                    left: 2,
                    right: 2
                }
            }, ae), r.createElement(f.m, {
                src: ne.src,
                alt: ne.alt,
                size: 50
            }), r.createElement(f.Q, {
                color: f.K.Alt2,
                fontSize: f.V.Size5
            }, Object(s.d)("Not enough data for us to display", "StreamSummaryReferralPanel")))
        }

        function se(e) {
            var t, a = e.streamSummary;
            return a ? (t = a.videoPlayAllReferrers.totals ? Object(s.d)("View More Stats", "StreamSummaryReferralPanel") : Object(s.d)("View Stats", "StreamSummaryReferralPanel"), r.createElement(R.a, {
                message: t,
                linkTo: "https://twitch.tv/" + a.channel.name + "/dashboard/stats",
                targetBlank: !0
            })) : null
        }
        var oe = a("wuJz"),
            de = a("sjgK"),
            le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTrackClick = function() {
                        Object(E.f)(E.a, t.props.streamSummary)
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    Object(E.g)(E.a, this.props.streamSummary)
                }, Object.defineProperty(t.prototype, "bannerTitle", {
                    get: function() {
                        var e = this.props.achievement,
                            t = e.title,
                            a = e.level,
                            n = r.createElement("span", null, Object(de.b)(a));
                        return a ? Object(s.d)("Achievement Unlocked! {title} {romanNumeralLevel}", {
                            title: t,
                            romanNumeralLevel: n
                        }, "SpotlightAchievementUnlockedWithLevel") : Object(s.d)("Achievement Unlocked! {title}", {
                            title: t
                        }, "SpotlightAchievementUnlocked")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return r.createElement(je, {
                        title: this.bannerTitle,
                        subtitle: this.props.achievement.description,
                        url: H.b.achievement(this.props.achievement),
                        purpleScale: !0,
                        onSpotlightDismiss: this.props.onSpotlightDismiss,
                        onSpotlightClick: this.handleTrackClick
                    })
                }, t
            }(r.PureComponent),
            ue = a("zLjR"),
            ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTrackClick = function() {
                        Object(E.f)(E.c, t.props.streamSummary)
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    Object(E.g)(E.c, this.props.streamSummary)
                }, t.prototype.render = function() {
                    var e = Object(ue.b)(this.props.quest.key),
                        t = r.createElement(me, {
                            title: e.title
                        }),
                        a = e.bannerTitle(t);
                    return r.createElement(je, {
                        title: a,
                        subtitle: e.subtitle,
                        url: H.b.channelAchievements(this.props.streamSummary.channel.name),
                        onSpotlightDismiss: this.props.onSpotlightDismiss,
                        onSpotlightClick: this.handleTrackClick
                    })
                }, t
            }(r.PureComponent),
            me = function(e) {
                var t = e.title;
                return r.createElement(f.Q, {
                    type: f._49.Span,
                    color: f.K.OverlayAlt
                }, t)
            },
            he = a("bQ8d"),
            _e = ["0s", "0.2s", "0.4s", "0.6s"],
            fe = ["3%", "14%", "26%", "42%", "55%", "66%", "78%", "90%"],
            pe = [{
                src: "https://static-cdn.jtvnw.net/emoticons/v1/192363/3.0",
                alt: "ClappyHype"
            }, {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/192361/3.0",
                alt: "Clappy"
            }],
            ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTrackClick = function() {
                        Object(E.f)(E.b, t.props.streamSummary)
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    Object(E.g)(E.b, this.props.streamSummary)
                }, t.prototype.render = function() {
                    return r.createElement(we, {
                        title: Object(s.d)("Top Clip of the Stream", "StreamSummarySpotlightClip"),
                        subtitle: this.subtitleMessage,
                        url: this.props.topClip.url,
                        onSpotlightDismiss: this.props.onSpotlightDismiss,
                        onSpotlightClick: this.handleTrackClick,
                        flourish: Object(he.c)(8, function(e) {
                            return r.createElement(ge, n.__assign({}, Object(he.b)(pe), {
                                key: e,
                                style: (t = e, {
                                    left: "" + fe[t],
                                    top: Object(he.a)(-10, 58) + "%",
                                    width: Object(he.a)(3, 7) + "rem",
                                    animationDelay: "" + Object(he.b)(_e)
                                })
                            }));
                            var t
                        })
                    })
                }, Object.defineProperty(t.prototype, "subtitleMessage", {
                    get: function() {
                        return Object(s.d)("{clipTitle}, clipped by {curatorName}", {
                            clipTitle: this.props.topClip.title,
                            curatorName: this.props.topClip.curatorName
                        }, "StreamSummarySpotlightClipSubtitle")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.PureComponent);
        var ge = function(e) {
            return r.createElement("div", {
                className: "sm-sb-flourish-emotes__float",
                style: n.__assign({}, e.style)
            }, r.createElement("img", {
                className: "sm-sb-flourish-emotes__img",
                src: e.src,
                alt: e.alt,
                style: {
                    transform: "rotate(" + Object(he.a)(65) + "deg)"
                }
            }))
        };
        var Me = a("AJEV"),
            ve = "stream-summary-spotlights",
            be = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleSpotlightDismiss = function() {
                        a.setState({
                            show: !1
                        }, function() {
                            var e = s.l.get(ve, {});
                            e[a.streamSummaryKey] = "dismissed", s.l.set(ve, e)
                        })
                    }, a.state = {
                        show: !0
                    }, a
                }
                return n.__extends(t, e), Object.defineProperty(t.prototype, "streamSummaryKey", {
                    get: function() {
                        return this.props.streamSummary && this.props.streamSummary.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLoading", {
                    get: function() {
                        return this.props.topClips.isLoading && this.props.query.isLoading
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.componentDidMount = function() {
                    var e = s.l.get(ve, {});
                    this.streamSummaryKey && e[this.streamSummaryKey] && this.setState({
                        show: !1
                    })
                }, t.prototype.componentDidUpdate = function(e) {
                    e.streamSummary !== this.props.streamSummary && (s.l.get(ve, {})[this.streamSummaryKey] && this.setState({
                        show: !1
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.query.quests[0];
                    if (this.isLoading || !this.state.show || !this.props.streamSummary || !e) return null;
                    var t = this.props.topClips.clips[0],
                        a = this.completedQuest,
                        n = this.completedAchievement;
                    return a ? r.createElement(ce, {
                        quest: a,
                        onSpotlightDismiss: this.handleSpotlightDismiss,
                        streamSummary: this.props.streamSummary
                    }) : n ? r.createElement(le, {
                        achievement: n,
                        onSpotlightDismiss: this.handleSpotlightDismiss,
                        streamSummary: this.props.streamSummary
                    }) : t && t.views > 1 ? r.createElement(ye, {
                        topClip: t,
                        onSpotlightDismiss: this.handleSpotlightDismiss,
                        streamSummary: this.props.streamSummary
                    }) : null
                }, Object.defineProperty(t.prototype, "completedQuest", {
                    get: function() {
                        var e = this.props.streamSummary.interval,
                            t = this.props.query.quests.filter(function(t) {
                                return t.completedAt && Object(oe.isWithinRange)(t.completedAt, e.start, e.end)
                            });
                        return Me.e.topCelebratable(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "completedAchievement", {
                    get: function() {
                        var e = this.props.streamSummary.interval;
                        return this.props.query.achievements.nCompletedInRange(1, e)[0]
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Le = {
                "data-test-selector": "title"
            },
            ke = {
                "data-test-selector": "subtitle"
            },
            Ye = {
                "data-test-selector": "cta-link"
            },
            De = {
                "data-test-selector": "dismiss"
            },
            we = (a("raKi"), function(e) {
                return r.createElement(f._8, {
                    className: "sm-sb-flourish-emotes",
                    position: f._15.Relative
                }, r.createElement(f.e, {
                    type: f.j.BounceIn,
                    duration: f.g.Medium,
                    enabled: !0,
                    timing: f.i.EaseInOut
                }, r.createElement(Se, n.__assign({}, e)), r.createElement(f._8, {
                    className: "sm-sb-flourish-emotes__dismiss",
                    position: f._15.Absolute,
                    zIndex: f._62.Above,
                    attachTop: !0,
                    attachRight: !0
                }, r.createElement(f.w, n.__assign({}, De, {
                    ariaLabel: Object(ue.a)().spotlightDismiss,
                    size: f.x.Large,
                    icon: f._25.Close,
                    onClick: e.onSpotlightDismiss,
                    overlay: !0
                })))))
            }),
            Se = function(e) {
                return r.createElement("a", n.__assign({}, Ye, {
                    href: e.url,
                    className: "sm-sb-flourish-emotes__link",
                    target: "_blank",
                    onClick: e.onSpotlightClick
                }), r.createElement(f._35, {
                    className: "sm-sb-flourish-emotes__content",
                    position: f._15.Relative,
                    zIndex: f._62.Default,
                    color: f.K.Overlay,
                    textAlign: f._45.Center,
                    margin: {
                        bottom: 2
                    },
                    padding: 2,
                    borderRadius: f.t.Small
                }, r.createElement(f._35, {
                    className: "sm-sb-flourish-emotes__emotes-layer",
                    position: f._15.Absolute,
                    overflow: f._11.Hidden,
                    attachTop: !0,
                    attachRight: !0,
                    attachBottom: !0,
                    attachLeft: !0,
                    borderRadius: f.t.Small
                }, e.flourish), r.createElement(f._35, {
                    className: "sm-sb-flourish-emotes__text",
                    position: f._15.Relative,
                    zIndex: f._62.Above,
                    padding: {
                        x: .5,
                        y: 0
                    },
                    borderRadius: f.t.Medium
                }, r.createElement(f.Q, n.__assign({}, Le, {
                    fontSize: f.V.Size4,
                    bold: !0,
                    ellipsis: !0
                }), e.title), r.createElement(f.Q, n.__assign({}, ke, {
                    fontSize: f.V.Size5,
                    color: f.K.OverlayAlt,
                    ellipsis: !0
                }), e.subtitle))))
            },
            xe = a("u3ZQ"),
            Te = (a("5t69"), ["rgba(168, 136, 230, 1)", "rgba(158, 128, 221, 1)", "rgba(136, 109, 200, 1)", "rgba(129, 104, 193, 1)"]),
            je = function(e) {
                return r.createElement(f._8, {
                    className: "sm-sb-flourish-confetti",
                    position: f._15.Relative
                }, r.createElement(f.e, {
                    type: f.j.BounceIn,
                    duration: f.g.Medium,
                    enabled: !0,
                    timing: f.i.EaseInOut
                }, r.createElement(f._35, {
                    className: "sm-sb-flourish-confetti__wrap",
                    position: f._15.Relative,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    border: !0,
                    borderRadius: f.t.Small
                }, r.createElement(He, n.__assign({}, e)), r.createElement(f._8, {
                    className: "sm-sb-flourish-confetti__dismiss",
                    position: f._15.Absolute,
                    zIndex: f._62.Above,
                    attachTop: !0,
                    attachRight: !0
                }, r.createElement(f.w, n.__assign({}, De, {
                    ariaLabel: Object(ue.a)().spotlightDismiss,
                    type: f.y.Default,
                    size: f.x.Large,
                    icon: f._25.Close,
                    onClick: e.onSpotlightDismiss,
                    overlay: e.purpleScale
                }))), r.createElement(xe.a, {
                    confettiCount: 40,
                    infinite: !0,
                    colors: e.purpleScale ? Te : void 0
                }))))
            },
            He = function(e) {
                var t = p({
                    "sm-sb-flourish-confetti__content": !0,
                    "sm-sb-flourish-confetti__content--purple-scale": e.purpleScale
                });
                return r.createElement("a", n.__assign({}, Ye, {
                    className: "sm-sb-flourish-confetti__link",
                    href: e.url,
                    target: "_blank",
                    onClick: e.onSpotlightClick
                }), r.createElement(f._35, {
                    className: t,
                    position: f._15.Relative,
                    zIndex: f._62.Default,
                    textAlign: f._45.Center,
                    padding: 2,
                    fullWidth: !0,
                    borderRadius: f.t.Small
                }, r.createElement(f.Q, n.__assign({}, Le, {
                    type: f._49.Span,
                    fontSize: f.V.Size4,
                    color: e.purpleScale ? f.K.Overlay : f.K.Base,
                    bold: !0,
                    ellipsis: !0
                }), e.title), r.createElement(f.Q, n.__assign({}, ke, {
                    fontSize: f.V.Size5,
                    color: e.purpleScale ? f.K.OverlayAlt : f.K.Alt2,
                    ellipsis: !0
                }), e.subtitle)))
            },
            Oe = a("5kgt"),
            Pe = {
                "data-test-selector": "subtitle"
            },
            Ce = {
                "data-test-selector": "value"
            },
            Ae = {
                "data-test-selector": "increase"
            },
            Ee = function(e) {
                return r.createElement(f._8, n.__assign({
                    display: f.R.Flex,
                    flexDirection: f.T.Column
                }, Object(Oe.a)(e)), r.createElement(f._35, {
                    display: f.R.Flex,
                    flexGrow: 1,
                    flexDirection: f.T.Column,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2,
                    background: f.n.Base
                }, r.createElement(f._35, {
                    display: f.R.Flex,
                    flexDirection: f.T.Column
                }, r.createElement(f.Q, {
                    fontSize: f.V.Size4,
                    bold: !0
                }, e.title), r.createElement(f.Q, n.__assign({
                    fontSize: f.V.Size5,
                    color: f.K.Alt2
                }, Pe), e.subtitle || r.createElement("br", null))), r.createElement(f._35, {
                    display: f.R.Flex,
                    flexGrow: 1,
                    alignItems: f.c.End,
                    padding: {
                        top: 2
                    }
                }, r.createElement(f.Q, n.__assign({
                    type: f._49.Span,
                    fontSize: f.V.Size2,
                    bold: !0,
                    color: f.K.Link
                }, Ce), e.value, e.isIncrease && r.createElement(Fe, null)))))
            };

        function Fe() {
            return r.createElement(f._24, n.__assign({
                asset: f._25.GlyphArrUp,
                type: f._26.Success
            }, Ae))
        }

        function We(e) {
            var t = Math.floor(e.currentValue),
                a = e.previousValue && Math.floor(e.previousValue),
                i = "number" == typeof a && t - a;
            return r.createElement(Ee, n.__assign({
                title: e.title,
                subtitle: function(e) {
                    if ("number" != typeof e) return "";
                    var t = e < 0 ? "-" : "+";
                    return Object(s.d)("{sign}{avgViewerDiff, number} from last stream", {
                        avgViewerDiff: Math.abs(e),
                        sign: t
                    }, "StreamSummaryNumericComparison")
                }(i),
                value: Object(s.e)(t),
                isIncrease: Boolean(i && i > 0)
            }, Object(Oe.a)(e)))
        }
        var Ie = {
            "data-test-selector": "stream-summary-stream-duration"
        };

        function Re(e) {
            var t = e.currentStreamSummary,
                a = e.previousStreamSummary;
            return r.createElement(Ee, n.__assign({
                title: Object(s.d)("Stream Duration", "StreamSummaryDuration"),
                subtitle: function(e, t) {
                    if (!t) return "";
                    if (Object(j.f)(e.interval, t.interval)) return Object(s.d)("same as last stream", "StreamSummaryDuration");
                    return Object(s.d)("{shortDuration} last stream", {
                        shortDuration: Object(j.b)(t.interval)
                    }, "StreamSummaryDuration")
                }(t, a),
                value: Object(j.b)(t.interval),
                isIncrease: !1
            }, Ie))
        }
        var ze = a("5CG2"),
            Ne = {
                "data-test-selector": "stream-summary-avg-viewer-stat-card"
            },
            Ve = {
                "data-test-selector": "stream-summary-max-viewer-stat-card"
            },
            Be = {
                "data-test-selector": "stream-summary-new-follower-stat-card"
            },
            Je = {
                "data-test-selector": "stream-summary-unique-chatters-stat-card"
            },
            Ge = {
                "data-test-selector": "stream-summary-clips-created-stat-card"
            },
            qe = {
                "data-test-selector": "stream-summary-unique-viewers-stat-card"
            },
            Ue = {
                "data-test-selector": "stream-summary-live-views-stat-card"
            },
            Ke = {
                "data-test-selector": "stream-summary-new-subscriptions-stat-card"
            },
            Qe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(f._55, {
                        childWidth: f._56.Medium,
                        gutterSize: f._57.Small,
                        placeholderItems: 3
                    }, this.cards())
                }, t.prototype.cards = function() {
                    var e = this.props,
                        t = e.streamSummary,
                        a = e.previousStreamSummary,
                        i = e.data.user;
                    if (!t) return Array(8).fill("").map(function(e, t) {
                        return r.createElement(f._8, {
                            key: "placeholder-" + t,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(f._14, {
                            height: 131
                        }))
                    });
                    var o = [r.createElement(Re, {
                        key: "stream-duration",
                        currentStreamSummary: t,
                        previousStreamSummary: a
                    }), r.createElement(We, n.__assign({
                        key: "avg-viewers",
                        title: Object(s.d)("Average Viewers", "StreamSummaryStatCard"),
                        currentValue: t.avgViewerCount,
                        previousValue: a && a.avgViewerCount
                    }, Ne)), r.createElement(We, n.__assign({
                        key: "max-viewers",
                        title: Object(s.d)("Max Viewers", "StreamSummaryStatCard"),
                        currentValue: t.maxViewerCount,
                        previousValue: a && a.maxViewerCount
                    }, Ve)), r.createElement(We, n.__assign({
                        key: "unique-viewers",
                        title: Object(s.d)("Unique Viewers", "StreamSummaryStatCard"),
                        currentValue: t.uniqueViewers,
                        previousValue: a && a.uniqueViewers
                    }, qe)), r.createElement(We, n.__assign({
                        key: "unique-chatters",
                        title: Object(s.d)("Unique Chatters", "StreamSummaryStatCard"),
                        currentValue: t.uniqueChatters,
                        previousValue: a && a.uniqueChatters
                    }, Je)), r.createElement(We, n.__assign({
                        key: "live-views",
                        title: Object(s.d)("Live Views", "StreamSummaryStatCard"),
                        currentValue: t.totalViewers,
                        previousValue: a && a.totalViewers
                    }, Ue)), r.createElement(We, n.__assign({
                        key: "new-followers",
                        title: Object(s.d)("New Followers", "StreamSummaryStatCard"),
                        currentValue: t.followersChange,
                        previousValue: a && a.followersChange
                    }, Be))];
                    return o = i && i.roles && (i.roles.isAffiliate || i.roles.isPartner) ? o.concat([r.createElement(We, n.__assign({
                        key: "new-subscriptions",
                        title: Object(s.d)("New Subscriptions", "StreamSummaryStatCard"),
                        currentValue: t.subscriptionsNew,
                        previousValue: a && a.subscriptionsNew
                    }, Ke))]) : o.concat([r.createElement(We, n.__assign({
                        key: "clips-created",
                        title: Object(s.d)("Clips", "StreamSummaryStatCard"),
                        currentValue: t.clipCreatesTotal,
                        previousValue: a && a.clipCreatesTotal
                    }, Ge))])
                }, t
            }(r.Component),
            Xe = Object(o.a)(ze, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelName
                        }
                    }
                }
            })(Qe),
            Ze = a("NXs7"),
            $e = a("VAT8"),
            et = a("Q65K"),
            tt = f.M.Purple12,
            at = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        t.chart = new y(e, {
                            type: "bar",
                            data: t.getData(e),
                            options: {
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            maxRotation: 0,
                                            minRotation: 0,
                                            maxTicksLimit: 4,
                                            fontColor: tt,
                                            fontSize: 10,
                                            padding: 5
                                        },
                                        gridLines: {
                                            color: f.M.White,
                                            lineWidth: 1,
                                            drawBorder: !1,
                                            display: !1
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            min: 0,
                                            maxTicksLimit: 6,
                                            fontColor: tt,
                                            fontSize: 10,
                                            padding: 5
                                        },
                                        gridLines: {
                                            color: "rgba(255, 255, 255, 0.1)",
                                            lineWidth: 1,
                                            drawBorder: !1
                                        }
                                    }]
                                },
                                legend: {
                                    display: !1
                                },
                                tooltips: {
                                    backgroundColor: "rgba(0,0,0,0.95)",
                                    titleFontColor: f.M.HintedGrey15,
                                    bodyFontColor: f.M.HintedGrey11,
                                    cornerRadius: 3,
                                    displayColors: !1,
                                    callbacks: {
                                        label: t.formatTooltipLabel
                                    }
                                },
                                responsive: !0
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        return t.props.formatTooltipLabel(Number(e.yLabel))
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(et.a, {
                        onCanvasReady: this.handleCanvasReady
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.chart && (this.chart.data = this.getData(this.chart.canvas), this.chart.update())
                }, t.prototype.getData = function(e) {
                    return {
                        labels: this.props.labels,
                        datasets: [{
                            label: this.props.datasetLabel,
                            data: this.props.values,
                            backgroundColor: this.getBarGradient(e),
                            hoverBackgroundColor: f.M.Purple10,
                            hoverBorderColor: f.M.Purple8,
                            hoverBorderWidth: 1
                        }]
                    }
                }, t.prototype.getBarGradient = function(e) {
                    var t = e.getContext("2d").createLinearGradient(0, 0, 0, 190);
                    return t.addColorStop(0, f.M.Purple15), t.addColorStop(1, f.M.Purple11), t
                }, t
            }(r.Component);
        a("Rra7");
        var nt, rt = {
                "data-test-selector": "subtitle"
            },
            it = {
                "data-test-selector": "error"
            },
            st = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentStatIndex: 0,
                        statData: {
                            values: [],
                            dates: []
                        },
                        didError: !1
                    }, t.handleStatChange = function(e) {
                        t.setState({
                            currentStatIndex: Number(e.currentTarget.value)
                        }, function() {
                            return t.fetchCurrentStatData()
                        })
                    }, t.formatTooltipLabel = function(e) {
                        return t.currentStat.formatTooltipLabel ? t.currentStat.formatTooltipLabel(e) : Object(s.d)("{label}: {value, number}", {
                            label: t.currentStat.titleMessage(),
                            value: e > 10 ? Math.round(e) : e
                        }, "StreamSummaryTimeseriesPanel")
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchCurrentStatData()
                }, t.prototype.componentDidUpdate = function(e) {
                    e.streamSummary !== this.props.streamSummary && this.fetchCurrentStatData()
                }, t.prototype.render = function() {
                    return this.props.streamSummary ? r.createElement(f._35, {
                        className: "timeseries-panel",
                        background: f.n.Accent,
                        borderRadius: f.t.Small,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1,
                        padding: 2
                    }, r.createElement(f._35, {
                        margin: {
                            bottom: 2
                        },
                        display: f.R.Flex,
                        color: f.K.Overlay,
                        justifyContent: f._7.Between,
                        alignItems: f.c.Center
                    }, r.createElement(f._35, {
                        className: Object($e.c)(Ze.a.Dark),
                        background: f.n.AccentAlt2
                    }, r.createElement(f._30, {
                        onChange: this.handleStatChange,
                        type: f._31.Hollow
                    }, this.props.timeseriesStats.map(function(e, t) {
                        return r.createElement("option", {
                            key: t,
                            value: t
                        }, e.titleMessage())
                    }))), r.createElement("div", n.__assign({}, rt), Boolean(this.state.statData.values.length) && this.currentStat.subtitleMessage(this.props.streamSummary))), r.createElement("div", {
                        className: "timeseries-panel__chart-area"
                    }, this.chartContent())) : r.createElement(f._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(f._14, {
                        height: 300
                    }))
                }, t.prototype.chartContent = function() {
                    return this.state.inFlightStatRequest ? r.createElement(f._35, {
                        className: Object($e.c)(Ze.a.Dark),
                        fullHeight: !0
                    }, r.createElement(f._10, {
                        fillContent: !0
                    })) : this.state.didError ? r.createElement(f.Q, n.__assign({
                        color: f.K.OverlayAlt,
                        fontSize: f.V.Size5
                    }, it), Object(s.d)("Whoops. Something went wrong.", "StreamSummaryTimeseriesPanel")) : 0 === this.state.statData.values.length ? r.createElement(f._8, {
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        alignContent: f.b.Center,
                        justifyContent: f._7.Center,
                        fullHeight: !0
                    }, r.createElement(f._8, {
                        padding: {
                            bottom: .5
                        }
                    }, r.createElement(f.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
                        alt: "StinkyCheese",
                        size: 50
                    })), r.createElement(f.Q, {
                        color: f.K.OverlayAlt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("Not enough data for us to display", "StreamSummaryTimeseriesPanel"))) : r.createElement(at, {
                        datasetLabel: this.currentStat.titleMessage(),
                        labels: this.formattedDates,
                        values: this.state.statData.values,
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, Object.defineProperty(t.prototype, "currentStat", {
                    get: function() {
                        return this.props.timeseriesStats[this.state.currentStatIndex]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "formattedDates", {
                    get: function() {
                        return this.state.statData.dates.map(function(e) {
                            return Object(s.c)(e, {
                                hour: "numeric",
                                minute: "numeric"
                            })
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.fetchCurrentStatData = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t, a, r;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.streamSummary ? (e = this.props.streamSummary.interval, t = this.currentStat.fetch(this.props.streamSummary.channel.id, e), this.setState({
                                        inFlightStatRequest: t
                                    }), [4, t]) : [2];
                                case 1:
                                    return a = n.sent(), t !== this.state.inFlightStatRequest ? [2] : a.isError ? (this.setState({
                                        inFlightStatRequest: void 0,
                                        didError: !0
                                    }), [2]) : (r = function(e, t) {
                                        var a = {
                                                dates: [],
                                                values: []
                                            },
                                            n = e.dates[0];
                                        if (!n) return a;
                                        for (var r = e.interpolationChunkMinutes, i = Object(oe.subMinutes)(n, r); i.getTime() >= t.start.getTime();) a.dates.push(i), a.values.push(0), i = Object(oe.subMinutes)(i, r);
                                        a.dates.reverse();
                                        var s = 0;
                                        for (i = n; i.getTime() <= t.end.getTime();) {
                                            var o = e.dates[s];
                                            o && o.getTime() === i.getTime() ? (a.dates.push(e.dates[s]), a.values.push(e.values[s]), s++) : (a.dates.push(i), a.values.push(0)), i = Object(oe.addMinutes)(i, r)
                                        }
                                        return a
                                    }(a.data, this.props.streamSummary.interval), this.setState({
                                        statData: r,
                                        inFlightStatRequest: void 0
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(r.Component),
            ot = a("FsFC"),
            dt = 5;

        function lt(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, r, i, s, o, d, l, u, c;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(H.c)({
                                path: "/v5/channels/" + e + "/analytics/chat_time_series?" + a
                            })];
                        case 1:
                            if (r = n.sent(), i = {
                                    messages: [],
                                    participants: [],
                                    dates: [],
                                    interpolationChunkMinutes: dt
                                }, r.isError()) return [2, {
                                isError: !0,
                                data: i
                            }];
                            for (s = 0, o = r.body.chat_activity; s < o.length; s++) d = o[s], l = d.messages, u = d.participants, c = d.timestamp, i.messages.push(l), i.participants.push(u), i.dates.push(new Date(c));
                            return i.interpolationChunkMinutes = r.body.interpolation_chunk_minutes, [2, {
                                isError: !1,
                                data: i
                            }]
                    }
                })
            })
        }

        function ut(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, r, i, s, o, d, l, u, c;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(H.c)({
                                path: "/v5/channels/" + e + "/analytics/clips_time_series?" + a
                            })];
                        case 1:
                            if (r = n.sent(), i = {
                                    creates: [],
                                    plays: [],
                                    dates: [],
                                    interpolationChunkMinutes: dt
                                }, r.isError()) return [2, {
                                isError: !0,
                                data: i
                            }];
                            for (s = 0, o = r.body.clips; s < o.length; s++) d = o[s], l = d.creates, u = d.plays, c = d.timestamp, i.creates.push(l), i.plays.push(u), i.dates.push(new Date(c));
                            return [2, {
                                isError: !1,
                                data: i
                            }]
                    }
                })
            })
        }! function(e) {
            e.AverageViewers = "average-viewers", e.NewFollowers = "new-followers"
        }(nt || (nt = {}));
        var ct = [{
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a, r, i, s, o, d, l, u;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return a = T.stringify(Object(j.i)(t)), [4, Object(H.c)({
                                        path: "/v5/channels/" + e + "/analytics/stats_time_series?" + a
                                    })];
                                case 1:
                                    if (r = n.sent(), i = {
                                            values: [],
                                            dates: [],
                                            interpolationChunkMinutes: dt
                                        }, r.isError()) return [2, {
                                        isError: !0,
                                        data: i
                                    }];
                                    for (s = 0, o = r.body.concurrent_viewers; s < o.length; s++) d = o[s], l = d.count, u = d.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                    return i.interpolationChunkMinutes = r.body.interpolation_chunk_minutes, [2, {
                                        isError: !1,
                                        data: i
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("Average Viewers", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{peakViewers, plural, one {Peaked at <x:viewers># viewer</x:viewers> at {formattedTime}} other {Peaked at <x:viewers># viewers</x:viewers> at {formattedTime}}}", {
                        peakViewers: e.maxViewerCount,
                        "x:viewers": function(e) {
                            return r.createElement("strong", {
                                key: "viewers"
                            }, e)
                        },
                        formattedTime: Object(s.c)(e.peakViewershipTime, {
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }, "StreamSummaryTimeseriesStats")
                }
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a, r, i, s, o, d, l, u;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return a = T.stringify(Object(j.i)(t)), [4, Object(H.c)({
                                        path: "/v5/channels/" + e + "/analytics/followers_time_series?" + a
                                    })];
                                case 1:
                                    if (r = n.sent(), i = {
                                            values: [],
                                            dates: [],
                                            interpolationChunkMinutes: dt
                                        }, r.isError()) return [2, {
                                        isError: !0,
                                        data: i
                                    }];
                                    for (s = 0, o = r.body.followers_change; s < o.length; s++) d = o[s], l = d.count, u = d.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                    return i.interpolationChunkMinutes = r.body.interpolation_chunk_minutes, [2, {
                                        isError: !1,
                                        data: i
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("New Followers", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:followers># new follower</x:followers> for this stream} other {<x:followers># new followers</x:followers> for this stream}}", {
                        count: e.followersChange,
                        "x:followers": function(e) {
                            return r.createElement("strong", {
                                key: "followers"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                }
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a, r, i, s, o, d, l, u;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return a = T.stringify(Object(j.i)(t)), [4, Object(H.c)({
                                        path: "/v5/channels/" + e + "/analytics/subscription_purchase?" + a
                                    })];
                                case 1:
                                    if (r = n.sent(), i = {
                                            values: [],
                                            dates: [],
                                            interpolationChunkMinutes: dt
                                        }, r.isError()) return [2, {
                                        isError: !0,
                                        data: i
                                    }];
                                    for (s = 0, o = r.body.subscription_purchase_activities; s < o.length; s++) d = o[s], l = d.count, u = d.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                    return i.interpolationChunkMinutes = r.body.interpolation_chunk_minutes, [2, {
                                        isError: !1,
                                        data: i
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("New Subscriptions", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:subscriptions># new subscription</x:subscriptions> for this stream} other {<x:subscriptions># new subscriptions</x:subscriptions> for this stream}}", {
                        count: e.subscriptionsNew,
                        "x:subscriptions": function(e) {
                            return r.createElement("strong", {
                                key: "subscriptions"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                }
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, lt(e, t)];
                                case 1:
                                    return [2, {
                                        isError: (a = n.sent()).isError,
                                        data: {
                                            values: a.data.participants,
                                            dates: a.data.dates,
                                            interpolationChunkMinutes: a.data.interpolationChunkMinutes
                                        }
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("Chatters", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:chatters># chatter</x:chatters> for this stream} other {<x:chatters># chatters</x:chatters> for this stream}}", {
                        count: e.uniqueChatters,
                        "x:chatters": function(e) {
                            return r.createElement("strong", {
                                key: "chatters"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                }
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, lt(e, t)];
                                case 1:
                                    return [2, {
                                        isError: (a = n.sent()).isError,
                                        data: {
                                            values: a.data.messages,
                                            dates: a.data.dates,
                                            interpolationChunkMinutes: a.data.interpolationChunkMinutes
                                        }
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("Chat Messages", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:messages># chat message</x:messages> for this stream} other {<x:messages># chat messages</x:messages> for this stream}}", {
                        count: e.messagesTotal,
                        "x:messages": function(e) {
                            return r.createElement("strong", {
                                key: "messages"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                }
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a, r, i, s, o, d, l, u;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return a = T.stringify(Object(j.i)(t)), [4, Object(H.c)({
                                        path: "/v5/channels/" + e + "/analytics/commercials_time_series?" + a
                                    })];
                                case 1:
                                    if (r = n.sent(), i = {
                                            values: [],
                                            dates: [],
                                            interpolationChunkMinutes: dt
                                        }, r.isError()) return [2, {
                                        isError: !0,
                                        data: i
                                    }];
                                    for (s = 0, o = r.body.commercial; s < o.length; s++) d = o[s], l = d.length, u = d.timestamp, i.values.push(l), i.dates.push(new Date(u));
                                    return i.interpolationChunkMinutes = r.body.interpolation_chunk_minutes, [2, {
                                        isError: !1,
                                        data: i
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("Ad Breaks", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("<x:time>{time} of ad breaks</x:time> for this stream", {
                        time: Object(ot.b)(e.commercialLengthTotal, ot.a.HumanizedShort),
                        "x:time": function(e) {
                            return r.createElement("strong", {
                                key: "time"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                formatTooltipLabel: function(e) {
                    return Object(ot.b)(e, ot.a.HumanizedShort)
                }
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, ut(e, t)];
                                case 1:
                                    return [2, {
                                        isError: (a = n.sent()).isError,
                                        data: {
                                            values: a.data.creates,
                                            dates: a.data.dates,
                                            interpolationChunkMinutes: a.data.interpolationChunkMinutes
                                        }
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("Clips Created", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:clips># clip created</x:clips> for this stream} other {<x:clips># clips created</x:clips> for this stream}}", {
                        count: e.clipCreatesTotal,
                        "x:clips": function(e) {
                            return r.createElement("strong", {
                                key: "clips"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                }
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, ut(e, t)];
                                case 1:
                                    return [2, {
                                        isError: (a = n.sent()).isError,
                                        data: {
                                            values: a.data.plays,
                                            dates: a.data.dates,
                                            interpolationChunkMinutes: a.data.interpolationChunkMinutes
                                        }
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("Clip Views", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:views># clip view</x:views> for this stream} other {<x:views># clip views</x:views> for this stream}}", {
                        count: e.clipPlaysTotal,
                        "x:views": function(e) {
                            return r.createElement("strong", {
                                key: "views"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                }
            }],
            mt = a("FuaS"),
            ht = a("6w0d"),
            _t = {
                "data-test-selector": "summary-tip-message"
            },
            ft = {
                "data-test-selector": "summary-learn-more-cta"
            },
            pt = "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
            yt = "VoHiYo",
            gt = function(e) {
                var t = e.tip;
                return e.isLoading ? r.createElement(f._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(f._14, {
                    height: 121
                })) : r.createElement("div", null, r.createElement(I.a, {
                    title: Object(s.d)("What is my tip of the day?", "StreamSummaryTipsPanel")
                }, r.createElement(f._35, {
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2,
                    background: f.n.Base
                }, r.createElement(f._8, {
                    display: f.R.Flex,
                    alignItems: f.c.Center,
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(f.m, {
                    src: pt,
                    alt: yt,
                    size: 30
                }), r.createElement(f._8, {
                    margin: {
                        left: .5
                    }
                }, r.createElement(f.Q, n.__assign({
                    type: f._49.Span,
                    fontSize: f.V.Size5
                }, _t), t.body), r.createElement(Mt, {
                    url: t.url
                }))))))
            },
            Mt = function(e) {
                var t = e.url;
                return t ? r.createElement(f.Q, n.__assign({
                    type: f._49.Span,
                    fontSize: f.V.Size5
                }, ft), " ", r.createElement("a", {
                    target: "_blank",
                    href: t
                }, Object(s.d)("Learn More", "StreamTipsLearnMoreCTA"))) : null
            },
            vt = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        tip: void 0
                    }, a
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.requestTip()
                }, t.prototype.render = function() {
                    return this.state.tip ? r.createElement(gt, {
                        tip: this.state.tip,
                        isLoading: this.props.isLoading
                    }) : null
                }, t.prototype.requestTip = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return n.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Object(ht.a)({
                                        path: "/v5/stream_summary/tip",
                                        headers: {
                                            "Accept-Language": Object(mt.a)() || "en"
                                        }
                                    })];
                                case 1:
                                    return (e = t.sent()).isSuccess() && this.setState(e.body), [2]
                            }
                        })
                    })
                }, t
            }(r.Component),
            bt = a("a+9f"),
            Lt = function(e) {
                var t = e.streamSummary,
                    a = e.topClips;
                if (a.isLoading) return r.createElement(f._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(f._14, {
                    height: 448
                }));
                if (!a.isLoading && !a.clips.length) return r.createElement("span", null);
                var n = Object(s.d)("View More Clips", "StreamSummaryTopClipsPanelCTA");
                return r.createElement(I.a, {
                    title: Object(s.d)("What were my top clips?", "StreamSummaryTopClipsPanel")
                }, r.createElement(kt, {
                    clipsAttrs: a
                }), t ? r.createElement(R.a, {
                    message: n,
                    linkTo: "/" + t.channel.name + "/manager/clips/channel",
                    targetBlank: !0
                }) : r.createElement("p", null, n))
            },
            kt = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], a = 0; a < 5; a++) t.push(r.createElement(f._35, {
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: a,
                        borderBottom: !0
                    }, r.createElement(f._14, {
                        height: 50
                    })));
                return r.createElement(f._35, {
                    borderBottom: !0
                }, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return r.createElement(bt.a, n.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            Yt = a("ItYp"),
            Dt = (a("4CR3"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.o.setPageTitle(Object(s.d)("Stream Summary", "DashboardStreamSummaryPage"))
                }, t.prototype.render = function() {
                    var e = this;
                    return r.createElement(m.a, null, r.createElement(J.a, {
                        query: this.props.streamSummaryQuery,
                        summaryID: this.props.streamSummaryID,
                        getURLForStreamSummary: E.d
                    }, function(t) {
                        return r.createElement(B, {
                            previousStreamSummary: t.previous,
                            streamSummary: t.current,
                            channel: e.props.streamSummaryQuery.channel
                        }, function(a) {
                            return r.createElement("div", null, t.isLast && r.createElement(be, {
                                query: a.achievementProgressionsQuery,
                                streamSummary: t.current,
                                topClips: a.topClips
                            }), r.createElement(K, {
                                query: e.props.streamSummaryQuery
                            }), r.createElement(Xe, {
                                channelName: e.props.channelName,
                                previousStreamSummary: t.previous,
                                streamSummary: t.current
                            }), r.createElement(St, {
                                channelName: e.props.channelName,
                                streamSummaryID: e.props.streamSummaryID,
                                data: e.props.data,
                                streamSummaryCursor: t,
                                topClips: a.topClips,
                                achievementProgressionsQuery: a.achievementProgressionsQuery
                            }))
                        })
                    }), r.createElement(h.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2877822",
                        page: "stream-summary"
                    }))
                }, t
            }(r.Component)),
            wt = Object(i.compose)(Object(c.d)("StreamSummaryPage", {
                destination: l.a.ChannelDashboardStreamSummary,
                autoReportInteractive: !0
            }), Object(d.a)({
                location: u.PageviewLocation.DashboardStreamSummary
            }), Object(o.a)(Yt, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelName
                        }
                    }
                }
            }))(Dt);

        function St(e) {
            var t = e.streamSummaryCursor,
                a = e.data,
                n = s.b.get("stream_summary_new_referrals", !1),
                i = a.user && a.user.roles && (a.user.roles.isAffiliate || a.user.roles.isPartner);
            return r.createElement("div", null, r.createElement(f._35, {
                className: "sm-mw",
                margin: {
                    bottom: 1
                },
                display: f.R.Flex,
                flexDirection: f.T.Column,
                flexWrap: f.U.NoWrap,
                alignItems: f.c.Stretch,
                breakpointMedium: {
                    flexDirection: f.T.Row
                }
            }, r.createElement(f._8, {
                className: "sm-mw__col",
                display: f.R.Flex,
                flexGrow: 1,
                flexWrap: f.U.NoWrap,
                flexDirection: f.T.Column,
                padding: {
                    left: 1,
                    right: 1
                }
            }, s.b.get("stream_summary_timeseries_panel", !1) ? r.createElement(st, {
                streamSummary: t.current,
                timeseriesStats: ct
            }) : r.createElement(A, {
                streamSummary: t.current
            }), r.createElement(Lt, {
                streamSummary: t.current,
                topClips: e.topClips
            }), n && r.createElement(_.a, {
                streamSummaries: t.current ? [t.current] : [],
                isLoading: !Boolean(t.current),
                linkToDetails: {
                    pathname: "/" + e.channelName + "/dashboard/stream-summary/" + e.streamSummaryID + "/referrals",
                    state: {
                        content: u.PageviewContent.ReferralsDetails,
                        medium: u.PageviewMedium.StreamSummary
                    }
                }
            }), !n && r.createElement(re, {
                streamSummary: t.current
            })), r.createElement(f._8, {
                className: "sm-mw__col",
                display: f.R.Flex,
                flexGrow: 1,
                flexWrap: f.U.NoWrap,
                flexDirection: f.T.Column,
                padding: {
                    left: 1,
                    right: 1
                }
            }, !i && r.createElement(vt, {
                isLoading: !t.current
            }), r.createElement(Z, {
                quest: t.current && e.achievementProgressionsQuery.quests[0]
            }), r.createElement(z, {
                query: e.achievementProgressionsQuery,
                streamSummaryCursor: t
            }))))
        }
        a.d(t, "StreamSummaryPage", function() {
            return wt
        }), a.d(t, "PublicProps", function() {})
    },
    tkWw: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ar-dz", {
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
        })(a("PJh5"))
    },
    tzHd: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("fr", {
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
        })(a("PJh5"))
    },
    u1o0: function(e, t, a) {
        "use strict";
        var n = a("3n1n");
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
                var r, i, s;
                for (r = 0, i = e.length; r < i; ++r)
                    if (void 0 !== (s = e[r]) && (void 0 !== t && "function" == typeof s && (s = s(t)), void 0 !== a && n.isArray(s) && (s = s[a]), void 0 !== s)) return s
            }
        }
    },
    u3ZQ: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            r = a("HW6M"),
            i = a("GiK3"),
            s = a("bQ8d"),
            o = a("Odds"),
            d = (a("49jV"), ["confetti-layer__confetti--slow", "confetti-layer__confetti--medium", "confetti-layer__confetti--fast"]),
            l = ["rgba(247, 42, 107, 1)", "rgba(255, 113, 105, 1)", "rgba(253, 226, 132, 1)", "rgba(181, 138, 242, 1)"],
            u = ["0.011s", "0.176s", "0.321s", "0.446s", "0.849s", "1.056s", "1.229s", "1.333s", "1.379s", "1.828s"],
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = r({
                            "confetti-layer__confetti": !0,
                            "confetti-layer__confetti--infinite": this.props.infinite
                        });
                    return i.createElement(o._8, {
                        className: "confetti-layer",
                        position: o._15.Absolute,
                        overflow: o._11.Hidden,
                        zIndex: o._62.Default,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0
                    }, Object(s.c)(this.props.confettiCount, function(a) {
                        return i.createElement("div", {
                            key: a,
                            className: t + " " + Object(s.b)(d),
                            style: {
                                position: "absolute",
                                left: Object(s.a)(2, 95) + "%",
                                width: Object(s.a)(4, 10) + "px",
                                height: Object(s.a)(4, 10) + "px",
                                backgroundColor: "" + Object(s.b)(e.props.colors),
                                animationDelay: "" + Object(s.b)(u)
                            }
                        })
                    }))
                }, t.defaultProps = {
                    colors: l
                }, t
            }(i.PureComponent);
        a.d(t, "a", function() {
            return c
        })
    },
    uSe8: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            e.defineLocale("ur", {
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
        })(a("PJh5"))
    },
    ulq9: function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a) {
                var n, r;
                return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = +e, r = {
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? r[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? r[1] : r[2])
            }
            var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            e.defineLocale("ru", {
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
                    m: t,
                    mm: t,
                    h: "час",
                    hh: t,
                    d: "день",
                    dd: t,
                    M: "месяц",
                    MM: t,
                    y: "год",
                    yy: t
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
        })(a("PJh5"))
    },
    upln: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("is", {
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
        })(a("PJh5"))
    },
    uslO: function(e, t, a) {
        var n = {
            "./af": "3CJN",
            "./af.js": "3CJN",
            "./ar": "3MVc",
            "./ar-dz": "tkWw",
            "./ar-dz.js": "tkWw",
            "./ar-kw": "j8cJ",
            "./ar-kw.js": "j8cJ",
            "./ar-ly": "wPpW",
            "./ar-ly.js": "wPpW",
            "./ar-ma": "dURR",
            "./ar-ma.js": "dURR",
            "./ar-sa": "7OnE",
            "./ar-sa.js": "7OnE",
            "./ar-tn": "BEem",
            "./ar-tn.js": "BEem",
            "./ar.js": "3MVc",
            "./az": "eHwN",
            "./az.js": "eHwN",
            "./be": "3hfc",
            "./be.js": "3hfc",
            "./bg": "lOED",
            "./bg.js": "lOED",
            "./bn": "aM0x",
            "./bn.js": "aM0x",
            "./bo": "w2Hs",
            "./bo.js": "w2Hs",
            "./br": "OSsP",
            "./br.js": "OSsP",
            "./bs": "aqvp",
            "./bs.js": "aqvp",
            "./ca": "wIgY",
            "./ca.js": "wIgY",
            "./cs": "ssxj",
            "./cs.js": "ssxj",
            "./cv": "N3vo",
            "./cv.js": "N3vo",
            "./cy": "ZFGz",
            "./cy.js": "ZFGz",
            "./da": "YBA/",
            "./da.js": "YBA/",
            "./de": "DOkx",
            "./de-at": "8v14",
            "./de-at.js": "8v14",
            "./de-ch": "Frex",
            "./de-ch.js": "Frex",
            "./de.js": "DOkx",
            "./dv": "rIuo",
            "./dv.js": "rIuo",
            "./el": "CFqe",
            "./el.js": "CFqe",
            "./en-au": "Sjoy",
            "./en-au.js": "Sjoy",
            "./en-ca": "Tqun",
            "./en-ca.js": "Tqun",
            "./en-gb": "hPuz",
            "./en-gb.js": "hPuz",
            "./en-ie": "ALEw",
            "./en-ie.js": "ALEw",
            "./en-nz": "dyB6",
            "./en-nz.js": "dyB6",
            "./eo": "Nd3h",
            "./eo.js": "Nd3h",
            "./es": "LT9G",
            "./es-do": "7MHZ",
            "./es-do.js": "7MHZ",
            "./es.js": "LT9G",
            "./et": "XlWM",
            "./et.js": "XlWM",
            "./eu": "sqLM",
            "./eu.js": "sqLM",
            "./fa": "2pmY",
            "./fa.js": "2pmY",
            "./fi": "nS2h",
            "./fi.js": "nS2h",
            "./fo": "OVPi",
            "./fo.js": "OVPi",
            "./fr": "tzHd",
            "./fr-ca": "bXQP",
            "./fr-ca.js": "bXQP",
            "./fr-ch": "VK9h",
            "./fr-ch.js": "VK9h",
            "./fr.js": "tzHd",
            "./fy": "g7KF",
            "./fy.js": "g7KF",
            "./gd": "nLOz",
            "./gd.js": "nLOz",
            "./gl": "FuaP",
            "./gl.js": "FuaP",
            "./gom-latn": "+27R",
            "./gom-latn.js": "+27R",
            "./he": "Nzt2",
            "./he.js": "Nzt2",
            "./hi": "ETHv",
            "./hi.js": "ETHv",
            "./hr": "V4qH",
            "./hr.js": "V4qH",
            "./hu": "xne+",
            "./hu.js": "xne+",
            "./hy-am": "GrS7",
            "./hy-am.js": "GrS7",
            "./id": "yRTJ",
            "./id.js": "yRTJ",
            "./is": "upln",
            "./is.js": "upln",
            "./it": "FKXc",
            "./it.js": "FKXc",
            "./ja": "ORgI",
            "./ja.js": "ORgI",
            "./jv": "JwiF",
            "./jv.js": "JwiF",
            "./ka": "RnJI",
            "./ka.js": "RnJI",
            "./kk": "j+vx",
            "./kk.js": "j+vx",
            "./km": "5j66",
            "./km.js": "5j66",
            "./kn": "gEQe",
            "./kn.js": "gEQe",
            "./ko": "eBB/",
            "./ko.js": "eBB/",
            "./ky": "6cf8",
            "./ky.js": "6cf8",
            "./lb": "z3hR",
            "./lb.js": "z3hR",
            "./lo": "nE8X",
            "./lo.js": "nE8X",
            "./lt": "/6P1",
            "./lt.js": "/6P1",
            "./lv": "jxEH",
            "./lv.js": "jxEH",
            "./me": "svD2",
            "./me.js": "svD2",
            "./mi": "gEU3",
            "./mi.js": "gEU3",
            "./mk": "Ab7C",
            "./mk.js": "Ab7C",
            "./ml": "oo1B",
            "./ml.js": "oo1B",
            "./mr": "5vPg",
            "./mr.js": "5vPg",
            "./ms": "ooba",
            "./ms-my": "G++c",
            "./ms-my.js": "G++c",
            "./ms.js": "ooba",
            "./my": "F+2e",
            "./my.js": "F+2e",
            "./nb": "FlzV",
            "./nb.js": "FlzV",
            "./ne": "/mhn",
            "./ne.js": "/mhn",
            "./nl": "3K28",
            "./nl-be": "Bp2f",
            "./nl-be.js": "Bp2f",
            "./nl.js": "3K28",
            "./nn": "C7av",
            "./nn.js": "C7av",
            "./pa-in": "pfs9",
            "./pa-in.js": "pfs9",
            "./pl": "7LV+",
            "./pl.js": "7LV+",
            "./pt": "ZoSI",
            "./pt-br": "AoDM",
            "./pt-br.js": "AoDM",
            "./pt.js": "ZoSI",
            "./ro": "wT5f",
            "./ro.js": "wT5f",
            "./ru": "ulq9",
            "./ru.js": "ulq9",
            "./sd": "fW1y",
            "./sd.js": "fW1y",
            "./se": "5Omq",
            "./se.js": "5Omq",
            "./si": "Lgqo",
            "./si.js": "Lgqo",
            "./sk": "OUMt",
            "./sk.js": "OUMt",
            "./sl": "2s1U",
            "./sl.js": "2s1U",
            "./sq": "V0td",
            "./sq.js": "V0td",
            "./sr": "f4W3",
            "./sr-cyrl": "c1x4",
            "./sr-cyrl.js": "c1x4",
            "./sr.js": "f4W3",
            "./ss": "7Q8x",
            "./ss.js": "7Q8x",
            "./sv": "Fpqq",
            "./sv.js": "Fpqq",
            "./sw": "DSXN",
            "./sw.js": "DSXN",
            "./ta": "+7/x",
            "./ta.js": "+7/x",
            "./te": "Nlnz",
            "./te.js": "Nlnz",
            "./tet": "gUgh",
            "./tet.js": "gUgh",
            "./th": "XzD+",
            "./th.js": "XzD+",
            "./tl-ph": "3LKG",
            "./tl-ph.js": "3LKG",
            "./tlh": "m7yE",
            "./tlh.js": "m7yE",
            "./tr": "k+5o",
            "./tr.js": "k+5o",
            "./tzl": "iNtv",
            "./tzl.js": "iNtv",
            "./tzm": "FRPF",
            "./tzm-latn": "krPU",
            "./tzm-latn.js": "krPU",
            "./tzm.js": "FRPF",
            "./uk": "ntHu",
            "./uk.js": "ntHu",
            "./ur": "uSe8",
            "./ur.js": "uSe8",
            "./uz": "XU1s",
            "./uz-latn": "/bsm",
            "./uz-latn.js": "/bsm",
            "./uz.js": "XU1s",
            "./vi": "0X8Q",
            "./vi.js": "0X8Q",
            "./x-pseudo": "e/KL",
            "./x-pseudo.js": "e/KL",
            "./yo": "YXlc",
            "./yo.js": "YXlc",
            "./zh-cn": "Vz2w",
            "./zh-cn.js": "Vz2w",
            "./zh-hk": "ZUyn",
            "./zh-hk.js": "ZUyn",
            "./zh-tw": "BbgG",
            "./zh-tw.js": "BbgG"
        };

        function r(e) {
            return a(i(e))
        }

        function i(e) {
            var t = n[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        r.keys = function() {
            return Object.keys(n)
        }, r.resolve = i, e.exports = r, r.id = "uslO"
    },
    vvdA: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Bar = function(t, a) {
                return a.type = "bar", new e(t, a)
            }
        }
    },
    w2Hs: function(e, t, a) {
        (function(e) {
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
            e.defineLocale("bo", {
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
        })(a("PJh5"))
    },
    wGD1: function(e, t, a) {
        "use strict";
        var n = a("rWJA"),
            r = a("iO9N");
        var i = function(e) {
            r.extend(this, e), this.initialize.apply(this, arguments)
        };
        r.extend(i.prototype, {
            initialize: function() {
                this.hidden = !1
            },
            pivot: function() {
                var e = this;
                return e._view || (e._view = r.clone(e._model)), e._start = {}, e
            },
            transition: function(e) {
                var t = this,
                    a = t._model,
                    r = t._start,
                    i = t._view;
                return a && 1 !== e ? (i || (i = t._view = {}), r || (r = t._start = {}), function(e, t, a, r) {
                    var i, s, o, d, l, u, c, m, h, _ = Object.keys(a);
                    for (i = 0, s = _.length; i < s; ++i)
                        if (u = a[o = _[i]], t.hasOwnProperty(o) || (t[o] = u), (d = t[o]) !== u && "_" !== o[0]) {
                            if (e.hasOwnProperty(o) || (e[o] = d), (c = typeof u) == typeof(l = e[o]))
                                if ("string" === c) {
                                    if ((m = n(l)).valid && (h = n(u)).valid) {
                                        t[o] = h.mix(m, r).rgbString();
                                        continue
                                    }
                                } else if ("number" === c && isFinite(l) && isFinite(u)) {
                                t[o] = l + (u - l) * r;
                                continue
                            }
                            t[o] = u
                        }
                }(r, i, a, e), t) : (t._view = a, t._start = null, t)
            },
            tooltipPosition: function() {
                return {
                    x: this._model.x,
                    y: this._model.y
                }
            },
            hasValue: function() {
                return r.isNumber(this._model.x) && r.isNumber(this._model.y)
            }
        }), i.extend = r.inherits, e.exports = i
    },
    wIgY: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("ca", {
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
        })(a("PJh5"))
    },
    wLsQ: function(e, t) {},
    wPWQ: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Bubble = function(t, a) {
                return a.type = "bubble", new e(t, a)
            }
        }
    },
    wPpW: function(e, t, a) {
        (function(e) {
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
                    return function(t, r, i, s) {
                        var o = a(t),
                            d = n[e][a(t)];
                        return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar-ly", {
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
        })(a("PJh5"))
    },
    wT5f: function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a) {
                var n = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "), e + n + {
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    MM: "luni",
                    yy: "ani"
                }[a]
            }
            e.defineLocale("ro", {
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
        })(a("PJh5"))
    },
    "xne+": function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

            function a(e, t, a, n) {
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

            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
            }
            e.defineLocale("hu", {
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
        })(a("PJh5"))
    },
    yRTJ: function(e, t, a) {
        (function(e) {
            "use strict";
            e.defineLocale("id", {
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
        })(a("PJh5"))
    },
    z3hR: function(e, t, a) {
        (function(e) {
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
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (e < 0) return !0;
                if (e < 10) return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10;
                    return a(0 === t ? e / 10 : t)
                }
                if (e < 1e4) {
                    for (; e >= 10;) e /= 10;
                    return a(e)
                }
                return a(e /= 1e3)
            }
            e.defineLocale("lb", {
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
                    future: function(e) {
                        return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                    },
                    past: function(e) {
                        return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                    },
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
        })(a("PJh5"))
    },
    zLjR: function(e, t, a) {
        "use strict";
        t.b = function(e) {
            return function() {
                n || (n = {
                    path_to_partner: {
                        title: Object(r.d)("Path to Partner", "AchievementsSpotlightPathToPartner"),
                        bannerTitle: function(e) {
                            return Object(r.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToPartner")
                        },
                        subtitle: Object(r.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                    },
                    path_to_affiliate: {
                        title: Object(r.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate"),
                        bannerTitle: function(e) {
                            return Object(r.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToAffiliate")
                        },
                        subtitle: Object(r.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                    },
                    it_begins: {
                        title: Object(r.d)("It Begins", "AchievementsSpotlightItBegins"),
                        bannerTitle: function(e) {
                            return Object(r.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightItBegins")
                        },
                        subtitle: Object(r.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                    }
                });
                return n
            }()[e] || e
        }, t.a = function() {
            return {
                spotlightDismiss: Object(r.d)("Close", "StreamSummarySpotlightDismiss")
            }
        };
        var n, r = a("6sO2")
    },
    zjE0: function(e, t, a) {
        "use strict";
        var n = a("XU/q");
        a.d(t, "a", function() {
            return n.a
        })
    }
});
//# sourceMappingURL=pages.stream-summary-6b10beba9a990f6b5b6125e50de520b8.js.map