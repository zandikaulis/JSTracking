webpackJsonp([36], {
    "+/J2": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setMilliseconds(r), n
        }
    },
    "+27R": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "+7/x": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "+ItH": function(e, t, n) {
        "use strict";
        n("k7DW")._set("global", {
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
    "+sSA": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setMilliseconds(999), t
        }
    },
    "/6P1": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, r) {
                return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
            }

            function n(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function a(e) {
                return i[e].split("_")
            }

            function r(e, r, i, s) {
                var o = e + " ";
                return 1 === e ? o + t(0, r, i[0], s) : r ? o + (n(e) ? a(i)[1] : a(i)[0]) : s ? o + a(i)[1] : o + (n(e) ? a(i)[1] : a(i)[2])
            }
            var i = {
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
                    s: function(e, t, n, a) {
                        return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
                    },
                    m: t,
                    mm: r,
                    h: t,
                    hh: r,
                    d: t,
                    dd: r,
                    M: t,
                    MM: r,
                    y: t,
                    yy: r
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
    "/bsm": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "/dIK": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setDate(r), n
        }
    },
    "/jKm": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("wGD1"),
            i = n("iO9N");
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
                        var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                        return {
                            borderColor: n.borderColor,
                            backgroundColor: n.backgroundColor
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

            function s(e) {
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

            function o(e) {
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
            e.Tooltip = r.extend({
                initialize: function() {
                    this._model = o(this._options)
                },
                getTitle: function() {
                    var e = this._options.callbacks,
                        t = e.beforeTitle.apply(this, arguments),
                        a = e.title.apply(this, arguments),
                        r = e.afterTitle.apply(this, arguments),
                        i = [];
                    return i = n(i, t), i = n(i, a), i = n(i, r)
                },
                getBeforeBody: function() {
                    var e = this._options.callbacks.beforeBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getBody: function(e, t) {
                    var a = this,
                        r = a._options.callbacks,
                        s = [];
                    return i.each(e, function(e) {
                        var i = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        n(i.before, r.beforeLabel.call(a, e, t)), n(i.lines, r.label.call(a, e, t)), n(i.after, r.afterLabel.call(a, e, t)), s.push(i)
                    }), s
                },
                getAfterBody: function() {
                    var e = this._options.callbacks.afterBody.apply(this, arguments);
                    return i.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getFooter: function() {
                    var e = this._options.callbacks,
                        t = e.beforeFooter.apply(this, arguments),
                        a = e.footer.apply(this, arguments),
                        r = e.afterFooter.apply(this, arguments),
                        i = [];
                    return i = n(i, t), i = n(i, a), i = n(i, r)
                },
                update: function(t) {
                    var n, a, r = this,
                        d = r._options,
                        u = r._model,
                        l = r._model = o(d),
                        c = r._active,
                        h = r._data,
                        m = {
                            xAlign: u.xAlign,
                            yAlign: u.yAlign
                        },
                        _ = {
                            x: u.x,
                            y: u.y
                        },
                        f = {
                            width: u.width,
                            height: u.height
                        },
                        p = {
                            x: u.caretX,
                            y: u.caretY
                        };
                    if (c.length) {
                        l.opacity = 1;
                        var g = [],
                            y = [];
                        p = e.Tooltip.positioners[d.position](c, r._eventPosition);
                        var M = [];
                        for (n = 0, a = c.length; n < a; ++n) M.push(s(c[n]));
                        d.filter && (M = M.filter(function(e) {
                            return d.filter(e, h)
                        })), d.itemSort && (M = M.sort(function(e, t) {
                            return d.itemSort(e, t, h)
                        })), i.each(M, function(e) {
                            g.push(d.callbacks.labelColor.call(r, e, r._chart)), y.push(d.callbacks.labelTextColor.call(r, e, r._chart))
                        }), l.title = r.getTitle(M, h), l.beforeBody = r.getBeforeBody(M, h), l.body = r.getBody(M, h), l.afterBody = r.getAfterBody(M, h), l.footer = r.getFooter(M, h), l.x = Math.round(p.x), l.y = Math.round(p.y), l.caretPadding = d.caretPadding, l.labelColors = g, l.labelTextColors = y, l.dataPoints = M, _ = function(e, t, n) {
                            var a = e.x,
                                r = e.y,
                                i = e.caretSize,
                                s = e.caretPadding,
                                o = e.cornerRadius,
                                d = n.xAlign,
                                u = n.yAlign,
                                l = i + s,
                                c = o + s;
                            return "right" === d ? a -= t.width : "center" === d && (a -= t.width / 2), "top" === u ? r += l : r -= "bottom" === u ? t.height + l : t.height / 2, "center" === u ? "left" === d ? a += l : "right" === d && (a -= l) : "left" === d ? a -= c : "right" === d && (a += c), {
                                x: a,
                                y: r
                            }
                        }(l, f = function(e, t) {
                            var n = e._chart.ctx,
                                a = 2 * t.yPadding,
                                r = 0,
                                s = t.body,
                                o = s.reduce(function(e, t) {
                                    return e + t.before.length + t.lines.length + t.after.length
                                }, 0);
                            o += t.beforeBody.length + t.afterBody.length;
                            var d = t.title.length,
                                u = t.footer.length,
                                l = t.titleFontSize,
                                c = t.bodyFontSize,
                                h = t.footerFontSize;
                            a += d * l, a += d ? (d - 1) * t.titleSpacing : 0, a += d ? t.titleMarginBottom : 0, a += o * c, a += o ? (o - 1) * t.bodySpacing : 0, a += u ? t.footerMarginTop : 0, a += u * h, a += u ? (u - 1) * t.footerSpacing : 0;
                            var m = 0,
                                _ = function(e) {
                                    r = Math.max(r, n.measureText(e).width + m)
                                };
                            return n.font = i.fontString(l, t._titleFontStyle, t._titleFontFamily), i.each(t.title, _), n.font = i.fontString(c, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), _), m = t.displayColors ? c + 2 : 0, i.each(s, function(e) {
                                i.each(e.before, _), i.each(e.lines, _), i.each(e.after, _)
                            }), m = 0, n.font = i.fontString(h, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, _), r += 2 * t.xPadding, {
                                width: r,
                                height: a
                            }
                        }(this, l), m = function(e, t) {
                            var n = e._model,
                                a = e._chart,
                                r = e._chart.chartArea,
                                i = "center",
                                s = "center";
                            n.y < t.height ? s = "top" : n.y > a.height - t.height && (s = "bottom");
                            var o, d, u, l, c, h = (r.left + r.right) / 2,
                                m = (r.top + r.bottom) / 2;
                            "center" === s ? (o = function(e) {
                                return e <= h
                            }, d = function(e) {
                                return e > h
                            }) : (o = function(e) {
                                return e <= t.width / 2
                            }, d = function(e) {
                                return e >= a.width - t.width / 2
                            }), u = function(e) {
                                return e + t.width > a.width
                            }, l = function(e) {
                                return e - t.width < 0
                            }, c = function(e) {
                                return e <= m ? "top" : "bottom"
                            }, o(n.x) ? (i = "left", u(n.x) && (i = "center", s = c(n.y))) : d(n.x) && (i = "right", l(n.x) && (i = "center", s = c(n.y)));
                            var _ = e._options;
                            return {
                                xAlign: _.xAlign ? _.xAlign : i,
                                yAlign: _.yAlign ? _.yAlign : s
                            }
                        }(this, f))
                    } else l.opacity = 0;
                    return l.xAlign = m.xAlign, l.yAlign = m.yAlign, l.x = _.x, l.y = _.y, l.width = f.width, l.height = f.height, l.caretX = p.x, l.caretY = p.y, r._model = l, t && d.custom && d.custom.call(r, l), r
                },
                drawCaret: function(e, t) {
                    var n = this._chart.ctx,
                        a = this._view,
                        r = this.getCaretPosition(e, t, a);
                    n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
                },
                getCaretPosition: function(e, t, n) {
                    var a, r, i, s, o, d, u = n.caretSize,
                        l = n.cornerRadius,
                        c = n.xAlign,
                        h = n.yAlign,
                        m = e.x,
                        _ = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === h) o = _ + p / 2, "left" === c ? (r = (a = m) - u, i = a, s = o + u, d = o - u) : (r = (a = m + f) + u, i = a, s = o - u, d = o + u);
                    else if ("left" === c ? (a = (r = m + l + u) - u, i = r + u) : "right" === c ? (a = (r = m + f - l - u) - u, i = r + u) : (a = (r = m + f / 2) - u, i = r + u), "top" === h) o = (s = _) - u, d = s;
                    else {
                        o = (s = _ + p) + u, d = s;
                        var g = i;
                        i = a, a = g
                    }
                    return {
                        x1: a,
                        x2: r,
                        x3: i,
                        y1: s,
                        y2: o,
                        y3: d
                    }
                },
                drawTitle: function(e, n, a, r) {
                    var s = n.title;
                    if (s.length) {
                        a.textAlign = n._titleAlign, a.textBaseline = "top";
                        var o = n.titleFontSize,
                            d = n.titleSpacing;
                        a.fillStyle = t(n.titleFontColor, r), a.font = i.fontString(o, n._titleFontStyle, n._titleFontFamily);
                        var u, l;
                        for (u = 0, l = s.length; u < l; ++u) a.fillText(s[u], e.x, e.y), e.y += o + d, u + 1 === s.length && (e.y += n.titleMarginBottom - d)
                    }
                },
                drawBody: function(e, n, a, r) {
                    var s = n.bodyFontSize,
                        o = n.bodySpacing,
                        d = n.body;
                    a.textAlign = n._bodyAlign, a.textBaseline = "top", a.font = i.fontString(s, n._bodyFontStyle, n._bodyFontFamily);
                    var u = 0,
                        l = function(t) {
                            a.fillText(t, e.x + u, e.y), e.y += s + o
                        };
                    i.each(n.beforeBody, l);
                    var c = n.displayColors;
                    u = c ? s + 2 : 0, i.each(d, function(o, d) {
                        i.each(o.before, l), i.each(o.lines, function(i) {
                            if (c) {
                                a.fillStyle = t(n.legendColorBackground, r), a.fillRect(e.x, e.y, s, s), a.lineWidth = 1, a.strokeStyle = t(n.labelColors[d].borderColor, r), a.strokeRect(e.x, e.y, s, s), a.fillStyle = t(n.labelColors[d].backgroundColor, r), a.fillRect(e.x + 1, e.y + 1, s - 2, s - 2);
                                var o = t(n.labelTextColors[d], r);
                                a.fillStyle = o
                            }
                            l(i)
                        }), i.each(o.after, l)
                    }), u = 0, i.each(n.afterBody, l), e.y -= o
                },
                drawFooter: function(e, n, a, r) {
                    var s = n.footer;
                    s.length && (e.y += n.footerMarginTop, a.textAlign = n._footerAlign, a.textBaseline = "top", a.fillStyle = t(n.footerFontColor, r), a.font = i.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), i.each(s, function(t) {
                        a.fillText(t, e.x, e.y), e.y += n.footerFontSize + n.footerSpacing
                    }))
                },
                drawBackground: function(e, n, a, r, i) {
                    a.fillStyle = t(n.backgroundColor, i), a.strokeStyle = t(n.borderColor, i), a.lineWidth = n.borderWidth;
                    var s = n.xAlign,
                        o = n.yAlign,
                        d = e.x,
                        u = e.y,
                        l = r.width,
                        c = r.height,
                        h = n.cornerRadius;
                    a.beginPath(), a.moveTo(d + h, u), "top" === o && this.drawCaret(e, r), a.lineTo(d + l - h, u), a.quadraticCurveTo(d + l, u, d + l, u + h), "center" === o && "right" === s && this.drawCaret(e, r), a.lineTo(d + l, u + c - h), a.quadraticCurveTo(d + l, u + c, d + l - h, u + c), "bottom" === o && this.drawCaret(e, r), a.lineTo(d + h, u + c), a.quadraticCurveTo(d, u + c, d, u + c - h), "center" === o && "left" === s && this.drawCaret(e, r), a.lineTo(d, u + h), a.quadraticCurveTo(d, u, d + h, u), a.closePath(), a.fill(), n.borderWidth > 0 && a.stroke()
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
                    var t = this._options,
                        n = !1;
                    if (this._lastActive = this._lastActive || [], "mouseout" === e.type ? this._active = [] : this._active = this._chart.getElementsAtEventForMode(e, t.mode, t), !(n = !i.arrayEquals(this._active, this._lastActive))) return !1;
                    if (this._lastActive = this._active, t.enabled || t.custom) {
                        this._eventPosition = {
                            x: e.x,
                            y: e.y
                        };
                        var a = this._model;
                        this.update(!0), this.pivot(), n |= a.x !== this._model.x || a.y !== this._model.y
                    }
                    return n
                }
            }), e.Tooltip.positioners = {
                average: function(e) {
                    if (!e.length) return !1;
                    var t, n, a = 0,
                        r = 0,
                        i = 0;
                    for (t = 0, n = e.length; t < n; ++t) {
                        var s = e[t];
                        if (s && s.hasValue()) {
                            var o = s.tooltipPosition();
                            a += o.x, r += o.y, ++i
                        }
                    }
                    return {
                        x: Math.round(a / i),
                        y: Math.round(r / i)
                    }
                },
                nearest: function(e, t) {
                    var n, a, r, s = t.x,
                        o = t.y,
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
                        var h = r.tooltipPosition();
                        s = h.x, o = h.y
                    }
                    return {
                        x: s,
                        y: o
                    }
                }
            }
        }
    },
    "/mhn": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "024F": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getMilliseconds()
        }
    },
    "0C1O": function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Radar = function(t, n) {
                return n.type = "radar", new e(t, n)
            }
        }
    },
    "0LAu": function(e, t, n) {
        var a = n("MIQa");
        e.exports = function() {
            return a(new Date)
        }
    },
    "0UyA": function(e, t, n) {
        var a = n("4Z4o");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    "0X8Q": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "0YGC": function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a - 1), r.setHours(23, 59, 59, 999), r
        }
    },
    "0aH9": function(e, t, n) {
        var a = n("3znZ"),
            r = 6e4,
            i = 6048e5;
        e.exports = function(e, t) {
            var n = a(e),
                s = a(t),
                o = n.getTime() - n.getTimezoneOffset() * r,
                d = s.getTime() - s.getTimezoneOffset() * r;
            return Math.round((o - d) / i)
        }
    },
    "0gJx": function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Line = function(t, n) {
                return n.type = "line", new e(t, n)
            }
        }
    },
    "0oN5": function(e, t, n) {
        var a = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), a(e).getTime() === a(t).getTime()
        }
    },
    "11Bn": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return a(e)
                }),
                t = Math.max.apply(null, e);
            return new Date(t)
        }
    },
    "19SQ": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("L5rj"),
            i = n("iO9N");
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
                        n = t.getMeta().data;
                    i.each(n, function(n, a) {
                        t.updateElement(n, a, e)
                    })
                },
                updateElement: function(e, t, n) {
                    var a = this.getMeta(),
                        r = e.custom || {},
                        i = this.getScaleForId(a.xAxisID),
                        s = this.getScaleForId(a.yAxisID),
                        o = this._resolveElementOptions(e, t),
                        d = this.getDataset().data[t],
                        u = this.index,
                        l = n ? i.getPixelForDecimal(.5) : i.getPixelForValue("object" == typeof d ? d : NaN, t, u),
                        c = n ? s.getBasePixel() : s.getPixelForValue(d, t, u);
                    e._xScale = i, e._yScale = s, e._options = o, e._datasetIndex = u, e._index = t, e._model = {
                        backgroundColor: o.backgroundColor,
                        borderColor: o.borderColor,
                        borderWidth: o.borderWidth,
                        hitRadius: o.hitRadius,
                        pointStyle: o.pointStyle,
                        radius: n ? 0 : o.radius,
                        skip: r.skip || isNaN(l) || isNaN(c),
                        x: l,
                        y: c
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
                    var n, a, r, s = this.chart,
                        o = s.data.datasets[this.index],
                        d = e.custom || {},
                        u = s.options.elements.point,
                        l = i.options.resolve,
                        c = o.data[t],
                        h = {},
                        m = {
                            chart: s,
                            dataIndex: t,
                            dataset: o,
                            datasetIndex: this.index
                        },
                        _ = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                    for (n = 0, a = _.length; n < a; ++n) h[r = _[n]] = l([d[r], o[r], u[r]], m, t);
                    return h.radius = l([d.radius, c ? c.r : void 0, o.radius, u.radius], m, t), h
                }
            })
        }
    },
    "1Nt4": function(e, t, n) {
        "use strict";
        var a = n("iO9N"),
            r = n("IbXy");
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
                            return d ? e.xAxisID === t.id : e.yAxisID === t.id
                        }
                        var t = this,
                            n = t.options,
                            r = n.ticks,
                            i = t.chart,
                            s = i.data.datasets,
                            o = a.valueOrDefault,
                            d = t.isHorizontal();
                        t.min = null, t.max = null, t.minNotZero = null;
                        var u = n.stacked;
                        if (void 0 === u && a.each(s, function(t, n) {
                                if (!u) {
                                    var a = i.getDatasetMeta(n);
                                    i.isDatasetVisible(n) && e(a) && void 0 !== a.stack && (u = !0)
                                }
                            }), n.stacked || u) {
                            var l = {};
                            a.each(s, function(r, s) {
                                var o = i.getDatasetMeta(s),
                                    d = [o.type, void 0 === n.stacked && void 0 === o.stack ? s : "", o.stack].join(".");
                                i.isDatasetVisible(s) && e(o) && (void 0 === l[d] && (l[d] = []), a.each(r.data, function(e, a) {
                                    var r = l[d],
                                        i = +t.getRightValue(e);
                                    isNaN(i) || o.data[a].hidden || (r[a] = r[a] || 0, n.relativePoints ? r[a] = 100 : r[a] += i)
                                }))
                            }), a.each(l, function(e) {
                                var n = a.min(e),
                                    r = a.max(e);
                                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r)
                            })
                        } else a.each(s, function(n, r) {
                            var s = i.getDatasetMeta(r);
                            i.isDatasetVisible(r) && e(s) && a.each(n.data, function(e, n) {
                                var a = +t.getRightValue(e);
                                isNaN(a) || s.data[n].hidden || (null === t.min ? t.min = a : a < t.min && (t.min = a), null === t.max ? t.max = a : a > t.max && (t.max = a), 0 !== a && (null === t.minNotZero || a < t.minNotZero) && (t.minNotZero = a))
                            })
                        });
                        t.min = o(r.min, t.min), t.max = o(r.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(a.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(a.log10(t.max)) + 1)) : (t.min = 1, t.max = 10))
                    },
                    buildTicks: function() {
                        var e = this.options.ticks,
                            t = {
                                min: e.min,
                                max: e.max
                            },
                            n = this.ticks = r.generators.logarithmic(t, this);
                        this.isHorizontal() || n.reverse(), this.max = a.max(n), this.min = a.min(n), e.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
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
                        var t, n, r, i = this.start,
                            s = +this.getRightValue(e),
                            o = this.options.ticks;
                        return this.isHorizontal() ? (r = a.log10(this.end) - a.log10(i), 0 === s ? n = this.left : (t = this.width, n = this.left + t / r * (a.log10(s) - a.log10(i)))) : (t = this.height, 0 !== i || o.reverse ? 0 === this.end && o.reverse ? (r = a.log10(this.start) - a.log10(this.minNotZero), n = s === this.end ? this.top : s === this.minNotZero ? this.top + .02 * t : this.top + .02 * t + .98 * t / r * (a.log10(s) - a.log10(this.minNotZero))) : 0 === s ? n = o.reverse ? this.top : this.bottom : (r = a.log10(this.end) - a.log10(i), t = this.height, n = this.bottom - t / r * (a.log10(s) - a.log10(i))) : (r = a.log10(this.end) - a.log10(this.minNotZero), n = s === i ? this.bottom : s === this.minNotZero ? this.bottom - .02 * t : this.bottom - .02 * t - .98 * t / r * (a.log10(s) - a.log10(this.minNotZero)))), n
                    },
                    getValueForPixel: function(e) {
                        var t, n, r = a.log10(this.end) - a.log10(this.start);
                        return this.isHorizontal() ? (n = this.width, t = this.start * Math.pow(10, (e - this.left) * r / n)) : (n = this.height, t = Math.pow(10, (this.bottom - e) * r / n) / this.start), t
                    }
                });
            e.scaleService.registerScaleType("logarithmic", n, t)
        }
    },
    "1gtq": function(e, t, n) {
        var a = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), a(e).getTime() === a(t).getTime()
        }
    },
    "1rLR": function(e, t, n) {
        var a = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, 3 * n)
        }
    },
    "1udo": function(e, t, n) {
        var a = n("WNGz");
        e.exports = function() {
            return a(new Date)
        }
    },
    "25hp": function(e, t, n) {
        var a = n("G7No");
        e.exports = function(e, t) {
            var n = a(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "2ddL": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("L5rj"),
            i = n("iO9N");
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
                        s = a.custom || {},
                        o = t.getDataset(),
                        d = t.chart.options.elements.line,
                        u = t.chart.scale;
                    void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension), i.extend(n.dataset, {
                        _datasetIndex: t.index,
                        _scale: u,
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
                    }), n.dataset.pivot(), i.each(r, function(n, a) {
                        t.updateElement(n, a, e)
                    }, t), t.updateBezierControlPoints()
                },
                updateElement: function(e, t, n) {
                    var a = e.custom || {},
                        r = this.getDataset(),
                        s = this.chart.scale,
                        o = this.chart.options.elements.point,
                        d = s.getPointPositionForValue(t, r.data[t]);
                    void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), i.extend(e, {
                        _datasetIndex: this.index,
                        _index: t,
                        _scale: s,
                        _model: {
                            x: n ? s.xCenter : d.x,
                            y: n ? s.yCenter : d.y,
                            tension: a.tension ? a.tension : i.valueOrDefault(r.lineTension, this.chart.options.elements.line.tension),
                            radius: a.radius ? a.radius : i.valueAtIndexOrDefault(r.pointRadius, t, o.radius),
                            backgroundColor: a.backgroundColor ? a.backgroundColor : i.valueAtIndexOrDefault(r.pointBackgroundColor, t, o.backgroundColor),
                            borderColor: a.borderColor ? a.borderColor : i.valueAtIndexOrDefault(r.pointBorderColor, t, o.borderColor),
                            borderWidth: a.borderWidth ? a.borderWidth : i.valueAtIndexOrDefault(r.pointBorderWidth, t, o.borderWidth),
                            pointStyle: a.pointStyle ? a.pointStyle : i.valueAtIndexOrDefault(r.pointStyle, t, o.pointStyle),
                            hitRadius: a.hitRadius ? a.hitRadius : i.valueAtIndexOrDefault(r.pointHitRadius, t, o.hitRadius)
                        }
                    }), e._model.skip = a.skip ? a.skip : isNaN(e._model.x) || isNaN(e._model.y)
                },
                updateBezierControlPoints: function() {
                    var e = this.chart.chartArea,
                        t = this.getMeta();
                    i.each(t.data, function(n, a) {
                        var r = n._model,
                            s = i.splineCurve(i.previousItem(t.data, a, !0)._model, r, i.nextItem(t.data, a, !0)._model, r.tension);
                        r.controlPointPreviousX = Math.max(Math.min(s.previous.x, e.right), e.left), r.controlPointPreviousY = Math.max(Math.min(s.previous.y, e.bottom), e.top), r.controlPointNextX = Math.max(Math.min(s.next.x, e.right), e.left), r.controlPointNextY = Math.max(Math.min(s.next.y, e.bottom), e.top), n.pivot()
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
                        s = this.chart.options.elements.point;
                    r.radius = n.radius ? n.radius : i.valueAtIndexOrDefault(t.pointRadius, a, s.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : i.valueAtIndexOrDefault(t.pointBackgroundColor, a, s.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : i.valueAtIndexOrDefault(t.pointBorderColor, a, s.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : i.valueAtIndexOrDefault(t.pointBorderWidth, a, s.borderWidth)
                }
            })
        }
    },
    "2lB6": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t, n, r) {
            var i = a(e).getTime(),
                s = a(t).getTime(),
                o = a(n).getTime(),
                d = a(r).getTime();
            if (i > s || o > d) throw new Error("The start of the range cannot be after the end of the range");
            return i < d && o < s
        }
    },
    "2pmY": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "2s1U": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "2xI1": function(e, t, n) {
        "use strict";
        var a = n("iO9N"),
            r = n("rGYv"),
            i = n("DN1M"),
            s = i._enabled ? i : r;
        e.exports = a.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, s)
    },
    "3CJN": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "3EIC": function(e, t, n) {
        var a = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = a(e),
                i = Number(t),
                s = n.getMonth() + i,
                o = new Date(0);
            o.setFullYear(n.getFullYear(), s, 1), o.setHours(0, 0, 0, 0);
            var d = r(o);
            return n.setMonth(s, Math.min(d, n.getDate())), n
        }
    },
    "3K28": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "3LKG": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "3MVc": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                    return function(t, n, i, s) {
                        var o = a(t),
                            d = r[e][a(t)];
                        return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
            return e.defineLocale("ar", {
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
    "3g9B": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getDate()
        }
    },
    "3hfc": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + function(e, t) {
                    var n = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }({
                    mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                }[n], +e)
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
    "3n1n": function(e, t, n) {
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
                var i, s, o;
                if (a.isArray(e))
                    if (s = e.length, r)
                        for (i = s - 1; i >= 0; i--) t.call(n, e[i], i);
                    else
                        for (i = 0; i < s; i++) t.call(n, e[i], i);
                else if (a.isObject(e))
                    for (s = (o = Object.keys(e)).length, i = 0; i < s; i++) t.call(n, e[o[i]], o[i])
            },
            arrayEquals: function(e, t) {
                var n, r, i, s;
                if (!e || !t || e.length !== t.length) return !1;
                for (n = 0, r = e.length; n < r; ++n)
                    if (i = e[n], s = t[n], i instanceof Array && s instanceof Array) {
                        if (!a.arrayEquals(i, s)) return !1
                    } else if (i !== s) return !1;
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
                    s = n[e];
                a.isObject(i) && a.isObject(s) ? a.merge(i, s, r) : t[e] = a.clone(s)
            },
            _mergerIf: function(e, t, n) {
                var r = t[e],
                    i = n[e];
                a.isObject(r) && a.isObject(i) ? a.mergeIf(r, i) : t.hasOwnProperty(e) || (t[e] = a.clone(i))
            },
            merge: function(e, t, n) {
                var r, i, s, o, d, u = a.isArray(t) ? t : [t],
                    l = u.length;
                if (!a.isObject(e)) return e;
                for (r = (n = n || {}).merger || a._merger, i = 0; i < l; ++i)
                    if (t = u[i], a.isObject(t))
                        for (d = 0, o = (s = Object.keys(t)).length; d < o; ++d) r(s[d], e, t, n);
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
    "3nPg": function(e, t, n) {
        var a = n("G7No"),
            r = 6e4;
        e.exports = function(e, t) {
            var n = a(e, t) / r;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3znZ": function(e, t, n) {
        var a = n("u/4p");
        e.exports = function(e) {
            return a(e, {
                weekStartsOn: 1
            })
        }
    },
    "40fB": function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = e.Scale.extend({
                getLabels: function() {
                    var e = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                },
                determineDataLimits: function() {
                    var e = this.getLabels();
                    this.minIndex = 0, this.maxIndex = e.length - 1;
                    var t;
                    void 0 !== this.options.ticks.min && (t = e.indexOf(this.options.ticks.min), this.minIndex = -1 !== t ? t : this.minIndex), void 0 !== this.options.ticks.max && (t = e.indexOf(this.options.ticks.max), this.maxIndex = -1 !== t ? t : this.maxIndex), this.min = e[this.minIndex], this.max = e[this.maxIndex]
                },
                buildTicks: function() {
                    var e = this.getLabels();
                    this.ticks = 0 === this.minIndex && this.maxIndex === e.length - 1 ? e : e.slice(this.minIndex, this.maxIndex + 1)
                },
                getLabelForIndex: function(e, t) {
                    var n = this.chart.data,
                        a = this.isHorizontal();
                    return n.yLabels && !a ? this.getRightValue(n.datasets[t].data[e]) : this.ticks[e - this.minIndex]
                },
                getPixelForValue: function(e, t) {
                    var n, a = this.options.offset,
                        r = Math.max(this.maxIndex + 1 - this.minIndex - (a ? 0 : 1), 1);
                    if (void 0 !== e && null !== e && (n = this.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) {
                        var i = this.getLabels();
                        e = n || e;
                        var s = i.indexOf(e);
                        t = -1 !== s ? s : t
                    }
                    if (this.isHorizontal()) {
                        var o = this.width / r,
                            d = o * (t - this.minIndex);
                        return a && (d += o / 2), this.left + Math.round(d)
                    }
                    var u = this.height / r,
                        l = u * (t - this.minIndex);
                    return a && (l += u / 2), this.top + Math.round(l)
                },
                getPixelForTick: function(e) {
                    return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                },
                getValueForPixel: function(e) {
                    var t = this.options.offset,
                        n = Math.max(this._ticks.length - (t ? 0 : 1), 1),
                        a = this.isHorizontal(),
                        r = (a ? this.width : this.height) / n;
                    return e -= a ? this.left : this.top, t && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + this.minIndex
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
    "4LxA": function(e, t, n) {
        var a = n("iRXW");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() === r.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e).getDay();
            return 0 === t || 6 === t
        }
    },
    "4Uxm": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("wGD1"),
            i = n("iO9N");
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
                    var a, r, i, s, o, d = this.descriptors(e),
                        u = d.length;
                    for (a = 0; a < u; ++a)
                        if (r = d[a], i = r.plugin, "function" == typeof(o = i[t]) && ((s = [e].concat(n || [])).push(r.options), !1 === o.apply(i, s))) return !1;
                    return !0
                },
                descriptors: function(e) {
                    var t = e._plugins || (e._plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var n = [],
                        r = [],
                        s = e && e.config || {},
                        o = s.options && s.options.plugins || {};
                    return this._plugins.concat(s.plugins || []).forEach(function(e) {
                        if (-1 === n.indexOf(e)) {
                            var t = e.id,
                                s = o[t];
                            !1 !== s && (!0 === s && (s = i.clone(a.global.plugins[t])), n.push(e), r.push({
                                plugin: e,
                                options: s || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                }
            }, e.pluginService = e.plugins, e.PluginBase = r.extend({})
        }
    },
    "4Z4o": function(e, t, n) {
        var a = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, 12 * n)
        }
    },
    "4zIR": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t, n) {
            var r = a(e).getTime(),
                i = a(t).getTime(),
                s = a(n).getTime();
            if (i > s) throw new Error("The start of the range cannot be after the end of the range");
            return r >= i && r <= s
        }
    },
    "5ImO": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("wGD1"),
            i = n("iO9N");
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
                        }), r = a.angle, s = a.distance, o = n.startAngle, d = n.endAngle; d < o;) d += 2 * Math.PI;
                    for (; r > d;) r -= 2 * Math.PI;
                    for (; r < o;) r += 2 * Math.PI;
                    var u = r >= o && r <= d,
                        l = s >= n.innerRadius && s <= n.outerRadius;
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
    "5Omq": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "5j66": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "5qwL": function(e, t, n) {
        var a = n("VaeB");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() === r.getTime()
        }
    },
    "5vPg": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
    },
    "6CZb": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getTime() > (new Date).getTime()
        }
    },
    "6SO/": function(e, t, n) {
        var a = n("gAt4");
        e.exports = function(e, t) {
            var n = a(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "6Zhv": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e).getTime(),
                r = Number(t);
            return new Date(n + r)
        }
    },
    "6axH": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 6 === a(e).getDay()
        }
    },
    "6cf8": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                    return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    "6rMk": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("wGD1"),
            i = n("iO9N");
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
                    var r, i, s = this.animations;
                    for (t.chart = e, a || (e.animating = !0), r = 0, i = s.length; r < i; ++r)
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
                    var e = Date.now(),
                        t = 0;
                    this.dropFrames > 1 && (t = Math.floor(this.dropFrames), this.dropFrames = this.dropFrames % 1), this.advance(1 + t);
                    var n = Date.now();
                    this.dropFrames += (n - e) / this.frameDuration, this.animations.length > 0 && this.requestAnimationFrame()
                },
                advance: function(e) {
                    for (var t, n, a = this.animations, r = 0; r < a.length;) n = (t = a[r]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), i.callback(t.render, [n, t], n), i.callback(t.onAnimationProgress, [t], n), t.currentStep >= t.numSteps ? (i.callback(t.onAnimationComplete, [t], n), n.animating = !1, a.splice(r, 1)) : ++r
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
    "6udH": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 1 === a(e).getDate()
        }
    },
    "6w0d": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return a.__awaiter(this, void 0, void 0, function() {
                var t;
                return a.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, r.a.request(e.path, e)];
                        case 1:
                            return t = n.sent(), [2, new i(t, e)]
                    }
                })
            })
        };
        var a = n("TToO"),
            r = n("9u8h"),
            i = function() {
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
    "72Lu": function(e, t) {
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
    "7EGB": function(e, t, n) {
        var a = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, 7 * n)
        }
    },
    "7LV+": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "7MHZ": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "7OnE": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "7Q8x": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "7Swd": function(e, t, n) {
        var a = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    "7Xwz": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
    },
    "7yyf": function(e, t, n) {
        var a = n("rBmI");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() === r.getTime()
        }
    },
    "8Gpr": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getHours()
        }
    },
    "8KV+": function(e, t, n) {
        var a = n("u/4p");
        e.exports = function(e, t, n) {
            var r = a(e, n),
                i = a(t, n);
            return r.getTime() === i.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var a = n("xA5w"),
            r = 864e5;
        e.exports = function(e, t, n, i) {
            var s = a(e).getTime(),
                o = a(t).getTime(),
                d = a(n).getTime(),
                u = a(i).getTime();
            if (s > o || d > u) throw new Error("The start of the range cannot be after the end of the range");
            if (!(s < u && d < o)) return 0;
            var l = (u > o ? o : u) - (d < s ? s : d);
            return Math.ceil(l / r)
        }
    },
    "8uqi": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("L5rj"),
            i = n("iO9N");
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
                    var n, a, r, s = this.getMeta(),
                        o = s.dataset,
                        d = s.data || [],
                        u = this.chart.options,
                        l = u.elements.line,
                        c = this.getScaleForId(s.yAxisID),
                        h = this.getDataset(),
                        m = t(h, u);
                    for (m && (r = o.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), o._scale = c, o._datasetIndex = this.index, o._children = d, o._model = {
                            spanGaps: h.spanGaps ? h.spanGaps : u.spanGaps,
                            tension: r.tension ? r.tension : i.valueOrDefault(h.lineTension, l.tension),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : h.backgroundColor || l.backgroundColor,
                            borderWidth: r.borderWidth ? r.borderWidth : h.borderWidth || l.borderWidth,
                            borderColor: r.borderColor ? r.borderColor : h.borderColor || l.borderColor,
                            borderCapStyle: r.borderCapStyle ? r.borderCapStyle : h.borderCapStyle || l.borderCapStyle,
                            borderDash: r.borderDash ? r.borderDash : h.borderDash || l.borderDash,
                            borderDashOffset: r.borderDashOffset ? r.borderDashOffset : h.borderDashOffset || l.borderDashOffset,
                            borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : h.borderJoinStyle || l.borderJoinStyle,
                            fill: r.fill ? r.fill : void 0 !== h.fill ? h.fill : l.fill,
                            steppedLine: r.steppedLine ? r.steppedLine : i.valueOrDefault(h.steppedLine, l.stepped),
                            cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : i.valueOrDefault(h.cubicInterpolationMode, l.cubicInterpolationMode)
                        }, o.pivot()), n = 0, a = d.length; n < a; ++n) this.updateElement(d[n], n, e);
                    for (m && 0 !== o._model.tension && this.updateBezierControlPoints(), n = 0, a = d.length; n < a; ++n) d[n].pivot()
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
                    var a, r, s = this.getMeta(),
                        o = e.custom || {},
                        d = this.getDataset(),
                        u = this.index,
                        l = d.data[t],
                        c = this.getScaleForId(s.yAxisID),
                        h = this.getScaleForId(s.xAxisID),
                        m = this.chart.options.elements.point;
                    void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), a = h.getPixelForValue("object" == typeof l ? l : NaN, t, u), r = n ? c.getBasePixel() : this.calculatePointY(l, t, u), e._xScale = h, e._yScale = c, e._datasetIndex = u, e._index = t, e._model = {
                        x: a,
                        y: r,
                        skip: o.skip || isNaN(a) || isNaN(r),
                        radius: o.radius || i.valueAtIndexOrDefault(d.pointRadius, t, m.radius),
                        pointStyle: o.pointStyle || i.valueAtIndexOrDefault(d.pointStyle, t, m.pointStyle),
                        backgroundColor: this.getPointBackgroundColor(e, t),
                        borderColor: this.getPointBorderColor(e, t),
                        borderWidth: this.getPointBorderWidth(e, t),
                        tension: s.dataset._model ? s.dataset._model.tension : 0,
                        steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                        hitRadius: o.hitRadius || i.valueAtIndexOrDefault(d.pointHitRadius, t, m.hitRadius)
                    }
                },
                calculatePointY: function(e, t, n) {
                    var a, r, i, s = this.chart,
                        o = this.getMeta(),
                        d = this.getScaleForId(o.yAxisID),
                        u = 0,
                        l = 0;
                    if (d.options.stacked) {
                        for (a = 0; a < n; a++)
                            if (r = s.data.datasets[a], "line" === (i = s.getDatasetMeta(a)).type && i.yAxisID === d.id && s.isDatasetVisible(a)) {
                                var c = Number(d.getRightValue(r.data[t]));
                                c < 0 ? l += c || 0 : u += c || 0
                            }
                        var h = Number(d.getRightValue(e));
                        return h < 0 ? d.getPixelForValue(l + h) : d.getPixelForValue(u + h)
                    }
                    return d.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    function e(e, t, n) {
                        return Math.max(Math.min(e, n), t)
                    }
                    var t, n, a, r, s = this.getMeta(),
                        o = this.chart.chartArea,
                        d = s.data || [];
                    if (s.dataset._model.spanGaps && (d = d.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === s.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(d);
                    else
                        for (t = 0, n = d.length; t < n; ++t) a = d[t]._model, r = i.splineCurve(i.previousItem(d, t)._model, a, i.nextItem(d, t)._model, s.dataset._model.tension), a.controlPointPreviousX = r.previous.x, a.controlPointPreviousY = r.previous.y, a.controlPointNextX = r.next.x, a.controlPointNextY = r.next.y;
                    if (this.chart.options.elements.line.capBezierPoints)
                        for (t = 0, n = d.length; t < n; ++t)(a = d[t]._model).controlPointPreviousX = e(a.controlPointPreviousX, o.left, o.right), a.controlPointPreviousY = e(a.controlPointPreviousY, o.top, o.bottom), a.controlPointNextX = e(a.controlPointNextX, o.left, o.right), a.controlPointNextY = e(a.controlPointNextY, o.top, o.bottom)
                },
                draw: function() {
                    var e = this.chart,
                        n = this.getMeta(),
                        a = n.data || [],
                        r = e.chartArea,
                        s = a.length,
                        o = 0;
                    for (i.canvas.clipArea(e.ctx, r), t(this.getDataset(), e.options) && n.dataset.draw(), i.canvas.unclipArea(e.ctx); o < s; ++o) a[o].draw(r)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        a = e.custom || {},
                        r = e._model;
                    r.radius = a.hoverRadius || i.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = a.hoverBackgroundColor || i.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, i.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor || i.valueAtIndexOrDefault(t.pointHoverBorderColor, n, i.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth || i.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, r.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        a = e.custom || {},
                        r = e._model;
                    void 0 !== t.radius && void 0 === t.pointRadius && (t.pointRadius = t.radius), r.radius = a.radius || i.valueAtIndexOrDefault(t.pointRadius, n, this.chart.options.elements.point.radius), r.backgroundColor = this.getPointBackgroundColor(e, n), r.borderColor = this.getPointBorderColor(e, n), r.borderWidth = this.getPointBorderWidth(e, n)
                }
            })
        }
    },
    "8v14": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "9Jn5": function(e, t, n) {
        var a = n("zZbG");
        e.exports = function(e, t) {
            return a(e) - a(t)
        }
    },
    "9r5b": function(e, t, n) {
        var a = n("nfOx");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("Aj/L"),
            s = "application/json; charset=UTF-8",
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
                    return t === s ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.n.store.getState(),
                        a = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = s);
                    var o = Object(i.c)(n);
                    return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        a[e] && delete a[e]
                    }), a
                }, e
            }()
    },
    A2zO: function(e, t, n) {
        var a = n("Be26");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    A5K1: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("L5rj"),
            i = n("iO9N");
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
                var a, r = e[t].fill,
                    i = [t];
                if (!n) return r;
                for (; !1 !== r && -1 === i.indexOf(r);) {
                    if (!isFinite(r)) return r;
                    if (!(a = e[r])) return !1;
                    if (a.visible) return r;
                    i.push(r), r = a.fill
                }
                return !1
            }

            function s(e) {
                var t = e.fill,
                    n = "dataset";
                return !1 === t ? null : (isFinite(t) || (n = "boundary"), u[n](e))
            }

            function o(e) {
                return e && !e.skip
            }

            function d(e, t, n, a, r) {
                var s;
                if (a && r) {
                    for (e.moveTo(t[0].x, t[0].y), s = 1; s < a; ++s) i.canvas.lineTo(e, t[s - 1], t[s]);
                    for (e.lineTo(n[r - 1].x, n[r - 1].y), s = r - 1; s > 0; --s) i.canvas.lineTo(e, n[s], n[s - 1], !0)
                }
            }
            var u = {
                dataset: function(e) {
                    var t = e.fill,
                        n = e.chart,
                        a = n.getDatasetMeta(t),
                        r = a && n.isDatasetVisible(t) && a.dataset._children || [],
                        i = r.length || 0;
                    return i ? function(e, t) {
                        return t < i && r[t]._view || null
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
                    var o, d, u, l, c = (a.data.datasets || []).length,
                        h = i.propagate,
                        m = [];
                    for (d = 0; d < c; ++d) l = null, (u = (o = a.getDatasetMeta(d)).dataset) && u._model && u instanceof r.Line && (l = {
                        visible: a.isDatasetVisible(d),
                        fill: e(u, d, c),
                        chart: a,
                        el: u
                    }), o.$filler = l, m.push(l);
                    for (d = 0; d < c; ++d)(l = m[d]) && (l.fill = n(m, d, h), l.boundary = t(l), l.mapper = s(l))
                },
                beforeDatasetDraw: function(e, t) {
                    var n = t.meta.$filler;
                    if (n) {
                        var r = e.ctx,
                            s = n.el,
                            u = s._view,
                            l = s._children || [],
                            c = n.mapper,
                            h = u.backgroundColor || a.global.defaultColor;
                        c && h && l.length && (i.canvas.clipArea(r, e.chartArea), function(e, t, n, a, r, i) {
                            var s, u, l, c, h, m, _, f = t.length,
                                p = a.spanGaps,
                                g = [],
                                y = [],
                                M = 0,
                                v = 0;
                            for (e.beginPath(), s = 0, u = f + !!i; s < u; ++s) h = n(c = t[l = s % f]._view, l, a), m = o(c), _ = o(h), m && _ ? (M = g.push(c), v = y.push(h)) : M && v && (p ? (m && g.push(c), _ && y.push(h)) : (d(e, g, y, M, v), M = v = 0, g = [], y = []));
                            d(e, g, y, M, v), e.closePath(), e.fillStyle = r, e.fill()
                        }(r, l, c, u, h, s._loop), i.canvas.unclipArea(r))
                    }
                }
            }
        }
    },
    A5K9: function(e, t) {},
    AFDx: function(e, t, n) {
        "use strict";

        function a(e) {
            return void 0 !== e._view.width
        }

        function r(e) {
            var t, n, r, i, s = e._view;
            if (a(e)) {
                var o = s.width / 2;
                t = s.x - o, n = s.x + o, r = Math.min(s.y, s.base), i = Math.max(s.y, s.base)
            } else {
                var d = s.height / 2;
                t = Math.min(s.x, s.base), n = Math.max(s.x, s.base), r = s.y - d, i = s.y + d
            }
            return {
                left: t,
                top: r,
                right: n,
                bottom: i
            }
        }
        var i = n("k7DW"),
            s = n("wGD1");
        i._set("global", {
            elements: {
                rectangle: {
                    backgroundColor: i.global.defaultColor,
                    borderColor: i.global.defaultColor,
                    borderSkipped: "bottom",
                    borderWidth: 0
                }
            }
        }), e.exports = s.extend({
            draw: function() {
                function e(e) {
                    return g[(y + e) % 4]
                }
                var t, n, a, r, i, s, o, d = this._chart.ctx,
                    u = this._view,
                    l = u.borderWidth;
                if (u.horizontal ? (t = u.base, n = u.x, a = u.y - u.height / 2, r = u.y + u.height / 2, i = n > t ? 1 : -1, s = 1, o = u.borderSkipped || "left") : (t = u.x - u.width / 2, n = u.x + u.width / 2, a = u.y, i = 1, s = (r = u.base) > a ? 1 : -1, o = u.borderSkipped || "bottom"), l) {
                    var c = Math.min(Math.abs(t - n), Math.abs(a - r)),
                        h = (l = l > c ? c : l) / 2,
                        m = t + ("left" !== o ? h * i : 0),
                        _ = n + ("right" !== o ? -h * i : 0),
                        f = a + ("top" !== o ? h * s : 0),
                        p = r + ("bottom" !== o ? -h * s : 0);
                    m !== _ && (a = f, r = p), f !== p && (t = m, n = _)
                }
                d.beginPath(), d.fillStyle = u.backgroundColor, d.strokeStyle = u.borderColor, d.lineWidth = l;
                var g = [
                        [t, r],
                        [t, a],
                        [n, a],
                        [n, r]
                    ],
                    y = ["bottom", "left", "top", "right"].indexOf(o, 0); - 1 === y && (y = 0);
                var M = e(0);
                d.moveTo(M[0], M[1]);
                for (var v = 1; v < 4; v++) M = e(v), d.lineTo(M[0], M[1]);
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
                if (!this._view) return !1;
                var n = r(this);
                return a(this) ? e >= n.left && e <= n.right : t >= n.top && t <= n.bottom
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
    ALEw: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    AZvW: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e).getDay();
            return 0 === t && (t = 7), t
        }
    },
    Ab7C: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Akl5: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    AoDM: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    BEem: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Bb5e: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getFullYear() - r.getFullYear()
        }
    },
    BbgG: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Be26: function(e, t, n) {
        var a = n("8KV+");
        e.exports = function(e, t) {
            return a(e, t, {
                weekStartsOn: 1
            })
        }
    },
    Bp2f: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    C7av: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    CFqe: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";
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
                calendar: function(e, t) {
                    var n = this._calendarEl[e],
                        a = t && t.hours();
                    return function(e) {
                        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                    }(n) && (n = n.apply(t)), n.replace("{}", a % 12 == 1 ? "στη" : "στις")
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
    CVNg: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setMonth(0), n.setDate(r), n
        }
    },
    D6ie: function(e, t, n) {
        var a = n("xA5w"),
            r = n("3znZ"),
            i = n("iRXW"),
            s = 6048e5;
        e.exports = function(e) {
            var t = a(e),
                n = r(t).getTime() - i(t).getTime();
            return Math.round(n / s) + 1
        }
    },
    DN1M: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = u.getStyle(e, t),
                a = n && n.match(/^(\d+)(\.\d+)?px$/);
            return a ? Number(a[1]) : void 0
        }

        function r(e, t, n) {
            e.addEventListener(t, n, p)
        }

        function i(e, t, n) {
            e.removeEventListener(t, n, p)
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

        function o(e, t, n) {
            var a = e[l] || (e[l] = {}),
                i = a.resizer = function(e) {
                    var t = document.createElement("div"),
                        n = c + "size-monitor",
                        a = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    t.style.cssText = a, t.className = n, t.innerHTML = '<div class="' + n + '-expand" style="' + a + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + a + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                    var i = t.childNodes[0],
                        s = t.childNodes[1];
                    t._reset = function() {
                        i.scrollLeft = 1e6, i.scrollTop = 1e6, s.scrollLeft = 1e6, s.scrollTop = 1e6
                    };
                    var o = function() {
                        t._reset(), e()
                    };
                    return r(i, "scroll", o.bind(i, "expand")), r(s, "scroll", o.bind(s, "shrink")), t
                }(function(e, t) {
                    var n = !1,
                        a = [];
                    return function() {
                        a = Array.prototype.slice.call(arguments), t = t || this, n || (n = !0, u.requestAnimFrame.call(window, function() {
                            n = !1, e.apply(t, a)
                        }))
                    }
                }(function() {
                    if (a.resizer) return t(s("resize", n))
                }));
            ! function(e, t) {
                var n = (e[l] || (e[l] = {})).renderProxy = function(e) {
                    e.animationName === m && t()
                };
                u.each(_, function(t) {
                    r(e, t, n)
                }), e.classList.add(h)
            }(e, function() {
                if (a.resizer) {
                    var t = e.parentNode;
                    t && t !== i.parentNode && t.insertBefore(i, t.firstChild), i._reset()
                }
            })
        }

        function d(e) {
            var t = e[l] || {},
                n = t.resizer;
            delete t.resizer,
                function(e) {
                    var t = e[l] || {},
                        n = t.renderProxy;
                    n && (u.each(_, function(t) {
                        i(e, t, n)
                    }), delete t.renderProxy), e.classList.remove(h)
                }(e), n && n.parentNode && n.parentNode.removeChild(n)
        }
        var u = n("iO9N"),
            l = "$chartjs",
            c = "chartjs-",
            h = c + "render-monitor",
            m = c + "render-animation",
            _ = ["animationstart", "webkitAnimationStart"],
            f = {
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
            p = !! function() {
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
        e.exports = {
            _enabled: "undefined" != typeof window && "undefined" != typeof document,
            initialize: function() {
                var e = "from{opacity:0.99}to{opacity:1}";
                ! function(e, t) {
                    var n = e._style || document.createElement("style");
                    e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t))
                }(this, "@-webkit-keyframes " + m + "{" + e + "}@keyframes " + m + "{" + e + "}." + h + "{-webkit-animation:" + m + " 0.001s;animation:" + m + " 0.001s;}")
            },
            acquireContext: function(e, t) {
                "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                var n = e && e.getContext && e.getContext("2d");
                return n && n.canvas === e ? (function(e, t) {
                    var n = e.style,
                        r = e.getAttribute("height"),
                        i = e.getAttribute("width");
                    if (e[l] = {
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
                        var s = a(e, "width");
                        void 0 !== s && (e.width = s)
                    }
                    if (null === r || "" === r)
                        if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                        else {
                            var o = a(e, "height");
                            void 0 !== s && (e.height = o)
                        }
                }(e, t), n) : null
            },
            releaseContext: function(e) {
                var t = e.canvas;
                if (t[l]) {
                    var n = t[l].initial;
                    ["height", "width"].forEach(function(e) {
                        var a = n[e];
                        u.isNullOrUndef(a) ? t.removeAttribute(e) : t.setAttribute(e, a)
                    }), u.each(n.style || {}, function(e, n) {
                        t.style[n] = e
                    }), t.width = t.width, delete t[l]
                }
            },
            addEventListener: function(e, t, n) {
                var a = e.canvas;
                if ("resize" !== t) {
                    var i = n[l] || (n[l] = {});
                    r(a, t, (i.proxies || (i.proxies = {}))[e.id + "_" + t] = function(t) {
                        n(function(e, t) {
                            var n = f[e.type] || e.type,
                                a = u.getRelativePosition(e, t);
                            return s(n, t, a.x, a.y, e)
                        }(t, e))
                    })
                } else o(a, n, e)
            },
            removeEventListener: function(e, t, n) {
                var a = e.canvas;
                if ("resize" !== t) {
                    var r = ((n[l] || {}).proxies || {})[e.id + "_" + t];
                    r && i(a, t, r)
                } else d(a)
            }
        }, u.addEvent = r, u.removeEvent = i
    },
    DOkx: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    DSXN: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Db81: function(e, t, n) {
        "use strict";

        function a(e, t) {
            return e - t
        }

        function r(e) {
            var t, n, a, r = {},
                i = [];
            for (t = 0, n = e.length; t < n; ++t) r[a = e[t]] || (r[a] = !0, i.push(a));
            return i
        }

        function i(e, t, n, a) {
            var r = function(e, t, n) {
                    for (var a, r, i, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                        if (a = s + o >> 1, r = e[a - 1] || null, i = e[a], !r) return {
                            lo: null,
                            hi: i
                        };
                        if (i[t] < n) s = a + 1;
                        else {
                            if (!(r[t] > n)) return {
                                lo: r,
                                hi: i
                            };
                            o = a - 1
                        }
                    }
                    return {
                        lo: i,
                        hi: null
                    }
                }(e, t, n),
                i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                o = s[t] - i[t],
                d = o ? (n - i[t]) / o : 0,
                u = (s[a] - i[a]) * d;
            return i[a] + u
        }

        function s(e, t) {
            var n = t.parser,
                a = t.parser || t.format;
            return "function" == typeof n ? n(e) : "string" == typeof e && "string" == typeof a ? u(e, a) : (e instanceof u || (e = u(e)), e.isValid() ? e : "function" == typeof a ? a(e) : e)
        }

        function o(e, t) {
            if (c.isNullOrUndef(e)) return null;
            var n = t.options.time,
                a = s(t.getRightValue(e), n);
            return a.isValid() ? (n.round && a.startOf(n.round), a.valueOf()) : null
        }

        function d(e, t, n, a, r, i) {
            var s, o = i.time,
                d = c.valueOrDefault(o.stepSize, o.unitStepSize),
                l = "week" === n && o.isoWeekday,
                h = i.ticks.major.enabled,
                m = _[n],
                f = u(e),
                p = u(t),
                g = [];
            for (d || (d = function(e, t, n, a) {
                    var r, i, s, o = t - e,
                        d = _[n],
                        u = d.size,
                        l = d.steps;
                    if (!l) return Math.ceil(o / ((a || 1) * u));
                    for (r = 0, i = l.length; r < i && (s = l[r], !(Math.ceil(o / (u * s)) <= a)); ++r);
                    return s
                }(e, t, n, r)), l && (f = f.isoWeekday(l), p = p.isoWeekday(l)), f = f.startOf(l ? "day" : n), (p = p.startOf(l ? "day" : n)) < t && p.add(1, n), s = u(f), h && a && !l && !o.round && (s.startOf(a), s.add(~~((f - s) / (m.size * d)) * d, n)); s < p; s.add(d, n)) g.push(+s);
            return g.push(+s), g
        }
        var u = n("PJh5");
        u = "function" == typeof u ? u : window.moment;
        var l = n("k7DW"),
            c = n("iO9N"),
            h = Number.MIN_SAFE_INTEGER || -9007199254740991,
            m = Number.MAX_SAFE_INTEGER || 9007199254740991,
            _ = {
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
            f = Object.keys(_);
        e.exports = function(e) {
            var t = e.Scale.extend({
                initialize: function() {
                    if (!u) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
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
                    var e, t, n, i, s, d, l = this.chart,
                        _ = this.options.time,
                        f = o(_.min, this) || m,
                        p = o(_.max, this) || h,
                        g = [],
                        y = [],
                        M = [];
                    for (e = 0, n = l.data.labels.length; e < n; ++e) M.push(o(l.data.labels[e], this));
                    for (e = 0, n = (l.data.datasets || []).length; e < n; ++e)
                        if (l.isDatasetVisible(e))
                            if (s = l.data.datasets[e].data, c.isObject(s[0]))
                                for (y[e] = [], t = 0, i = s.length; t < i; ++t) d = o(s[t], this), g.push(d), y[e][t] = d;
                            else g.push.apply(g, M), y[e] = M.slice(0);
                    else y[e] = [];
                    M.length && (M = r(M).sort(a), f = Math.min(f, M[0]), p = Math.max(p, M[M.length - 1])), g.length && (g = r(g).sort(a), f = Math.min(f, g[0]), p = Math.max(p, g[g.length - 1])), f = f === m ? +u().startOf("day") : f, p = p === h ? +u().endOf("day") + 1 : p, this.min = Math.min(f, p), this.max = Math.max(f + 1, p), this._horizontal = this.isHorizontal(), this._table = [], this._timestamps = {
                        data: g,
                        datasets: y,
                        labels: M
                    }
                },
                buildTicks: function() {
                    var e, t, n, a = this.min,
                        r = this.max,
                        s = this.options,
                        l = s.time,
                        c = l.displayFormats,
                        h = this.getLabelCapacity(a),
                        p = l.unit || function(e, t, n, a) {
                            var r, i, s, o = f.length;
                            for (r = f.indexOf(e); r < o - 1; ++r)
                                if (i = _[f[r]], s = i.steps ? i.steps[i.steps.length - 1] : m, Math.ceil((n - t) / (s * i.size)) <= a) return f[r];
                            return f[o - 1]
                        }(l.minUnit, a, r, h),
                        g = function(e) {
                            for (var t = f.indexOf(e) + 1, n = f.length; t < n; ++t)
                                if (_[f[t]].major) return f[t]
                        }(p),
                        y = [],
                        M = [];
                    switch (s.ticks.source) {
                        case "data":
                            y = this._timestamps.data;
                            break;
                        case "labels":
                            y = this._timestamps.labels;
                            break;
                        case "auto":
                        default:
                            y = d(a, r, p, g, h, s)
                    }
                    for ("ticks" === s.bounds && y.length && (a = y[0], r = y[y.length - 1]), a = o(l.min, this) || a, r = o(l.max, this) || r, e = 0, t = y.length; e < t; ++e)(n = y[e]) >= a && n <= r && M.push(n);
                    return this.min = a, this.max = r, this._unit = p, this._majorUnit = g, this._minorFormat = c[p], this._majorFormat = c[g], this._table = function(e, t, n, a) {
                            if ("linear" === a || !e.length) return [{
                                time: t,
                                pos: 0
                            }, {
                                time: n,
                                pos: 1
                            }];
                            var r, i, s, o, d, u = [],
                                l = [t];
                            for (r = 0, i = e.length; r < i; ++r)(o = e[r]) > t && o < n && l.push(o);
                            for (l.push(n), r = 0, i = l.length; r < i; ++r) d = l[r + 1], s = l[r - 1], o = l[r], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || u.push({
                                time: o,
                                pos: r / (i - 1)
                            });
                            return u
                        }(this._timestamps.data, a, r, s.distribution), this._offsets = function(e, t, n, a, r) {
                            var s, o, d = 0,
                                u = 0;
                            return r.offset && t.length && (r.time.min || (s = t.length > 1 ? t[1] : a, o = t[0], d = (i(e, "time", s, "pos") - i(e, "time", o, "pos")) / 2), r.time.max || (s = t[t.length - 1], o = t.length > 1 ? t[t.length - 2] : n, u = (i(e, "time", s, "pos") - i(e, "time", o, "pos")) / 2)), {
                                left: d,
                                right: u
                            }
                        }(this._table, M, a, r, s),
                        function(e, t) {
                            var n, a, r, i, s = [];
                            for (n = 0, a = e.length; n < a; ++n) r = e[n], i = !!t && r === +u(r).startOf(t), s.push({
                                value: r,
                                major: i
                            });
                            return s
                        }(M, g)
                },
                getLabelForIndex: function(e, t) {
                    var n = this.chart.data,
                        a = this.options.time,
                        r = n.labels && e < n.labels.length ? n.labels[e] : "",
                        i = n.datasets[t].data[e];
                    return c.isObject(i) && (r = this.getRightValue(i)), a.tooltipFormat && (r = s(r, a).format(a.tooltipFormat)), r
                },
                tickFormatFunction: function(e, t, n) {
                    var a = this.options,
                        r = e.valueOf(),
                        i = this._majorUnit,
                        s = this._majorFormat,
                        o = e.clone().startOf(this._majorUnit).valueOf(),
                        d = a.ticks.major,
                        u = d.enabled && i && s && r === o,
                        l = e.format(u ? s : this._minorFormat),
                        h = u ? d : a.ticks.minor,
                        m = c.valueOrDefault(h.callback, h.userCallback);
                    return m ? m(l, t, n) : l
                },
                convertTicksToLabels: function(e) {
                    var t, n, a = [];
                    for (t = 0, n = e.length; t < n; ++t) a.push(this.tickFormatFunction(u(e[t].value), t, e));
                    return a
                },
                getPixelForOffset: function(e) {
                    var t = this._horizontal ? this.width : this.height,
                        n = this._horizontal ? this.left : this.top,
                        a = i(this._table, "time", e, "pos");
                    return n + t * (this._offsets.left + a) / (this._offsets.left + 1 + this._offsets.right)
                },
                getPixelForValue: function(e, t, n) {
                    var a = null;
                    if (void 0 !== t && void 0 !== n && (a = this._timestamps.datasets[n][t]), null === a && (a = o(e, this)), null !== a) return this.getPixelForOffset(a)
                },
                getPixelForTick: function(e) {
                    var t = this.getTicks();
                    return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                },
                getValueForPixel: function(e) {
                    var t = this._horizontal ? this.width : this.height,
                        n = this._horizontal ? this.left : this.top,
                        a = (t ? (e - n) / t : 0) * (this._offsets.left + 1 + this._offsets.left) - this._offsets.right,
                        r = i(this._table, "pos", a, "time");
                    return u(r)
                },
                getLabelWidth: function(e) {
                    var t = this.options.ticks,
                        n = this.ctx.measureText(e).width,
                        a = c.toRadians(t.maxRotation),
                        r = Math.cos(a),
                        i = Math.sin(a);
                    return n * r + c.valueOrDefault(t.fontSize, l.global.defaultFontSize) * i
                },
                getLabelCapacity: function(e) {
                    this._minorFormat = this.options.time.displayFormats.millisecond;
                    var t = this.tickFormatFunction(u(e), 0, []),
                        n = this.getLabelWidth(t),
                        a = this.isHorizontal() ? this.width : this.height;
                    return Math.floor(a / n)
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
    ETHv: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "Eoz/": function(e, t, n) {
        function a(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                a = Math.abs(e),
                i = a % 60;
            return n + r(Math.floor(a / 60), 2) + t + r(i, 2)
        }

        function r(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        var i = n("ymQ7"),
            s = n("D6ie"),
            o = n("zZbG"),
            d = n("xA5w"),
            u = n("dH3X"),
            l = n("uyaC"),
            c = {
                M: function(e) {
                    return e.getMonth() + 1
                },
                MM: function(e) {
                    return r(e.getMonth() + 1, 2)
                },
                Q: function(e) {
                    return Math.ceil((e.getMonth() + 1) / 3)
                },
                D: function(e) {
                    return e.getDate()
                },
                DD: function(e) {
                    return r(e.getDate(), 2)
                },
                DDD: function(e) {
                    return i(e)
                },
                DDDD: function(e) {
                    return r(i(e), 3)
                },
                d: function(e) {
                    return e.getDay()
                },
                E: function(e) {
                    return e.getDay() || 7
                },
                W: function(e) {
                    return s(e)
                },
                WW: function(e) {
                    return r(s(e), 2)
                },
                YY: function(e) {
                    return r(e.getFullYear(), 4).substr(2)
                },
                YYYY: function(e) {
                    return r(e.getFullYear(), 4)
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
                    return r(e.getHours(), 2)
                },
                h: function(e) {
                    var t = e.getHours();
                    return 0 === t ? 12 : t > 12 ? t % 12 : t
                },
                hh: function(e) {
                    return r(c.h(e), 2)
                },
                m: function(e) {
                    return e.getMinutes()
                },
                mm: function(e) {
                    return r(e.getMinutes(), 2)
                },
                s: function(e) {
                    return e.getSeconds()
                },
                ss: function(e) {
                    return r(e.getSeconds(), 2)
                },
                S: function(e) {
                    return Math.floor(e.getMilliseconds() / 100)
                },
                SS: function(e) {
                    return r(Math.floor(e.getMilliseconds() / 10), 2)
                },
                SSS: function(e) {
                    return r(e.getMilliseconds(), 3)
                },
                Z: function(e) {
                    return a(e.getTimezoneOffset(), ":")
                },
                ZZ: function(e) {
                    return a(e.getTimezoneOffset())
                },
                X: function(e) {
                    return Math.floor(e.getTime() / 1e3)
                },
                x: function(e) {
                    return e.getTime()
                }
            };
        e.exports = function(e, t, n) {
            var a = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                r = (n || {}).locale,
                i = l.format.formatters,
                s = l.format.formattingTokensRegExp;
            r && r.format && r.format.formatters && (i = r.format.formatters, r.format.formattingTokensRegExp && (s = r.format.formattingTokensRegExp));
            var o = d(e);
            return u(o) ? function(e, t, n) {
                var a, r, i = e.match(n),
                    s = i.length;
                for (a = 0; a < s; a++) r = t[i[a]] || c[i[a]], i[a] = r || function(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, "") : e.replace(/\\/g, "")
                }(i[a]);
                return function(e) {
                    for (var t = "", n = 0; n < s; n++) i[n] instanceof Function ? t += i[n](e, c) : t += i[n];
                    return t
                }
            }(a, i, s)(o) : "Invalid Date"
        }
    },
    Epw6: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    "F+2e": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    F4U8: function(e, t, n) {
        "use strict";
        var a = n("3n1n");
        t = e.exports = {
            clear: function(e) {
                e.ctx.clearRect(0, 0, e.width, e.height)
            },
            roundedRect: function(e, t, n, a, r, i) {
                if (i) {
                    var s = Math.min(i, a / 2),
                        o = Math.min(i, r / 2);
                    e.moveTo(t + s, n), e.lineTo(t + a - s, n), e.quadraticCurveTo(t + a, n, t + a, n + o), e.lineTo(t + a, n + r - o), e.quadraticCurveTo(t + a, n + r, t + a - s, n + r), e.lineTo(t + s, n + r), e.quadraticCurveTo(t, n + r, t, n + r - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + s, n)
                } else e.rect(t, n, a, r)
            },
            drawPoint: function(e, t, n, a, r) {
                var i, s, o, d, u, l;
                if ("object" != typeof t || "[object HTMLImageElement]" !== (i = t.toString()) && "[object HTMLCanvasElement]" !== i) {
                    if (!(isNaN(n) || n <= 0)) {
                        switch (t) {
                            default: e.beginPath(),
                            e.arc(a, r, n, 0, 2 * Math.PI),
                            e.closePath(),
                            e.fill();
                            break;
                            case "triangle":
                                    e.beginPath(),
                                u = (s = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                e.moveTo(a - s / 2, r + u / 3),
                                e.lineTo(a + s / 2, r + u / 3),
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
                                    h = a - c,
                                    m = r - c,
                                    _ = Math.SQRT2 * n;e.beginPath(),
                                this.roundedRect(e, h, m, _, _, n / 2),
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
                                o = Math.cos(Math.PI / 4) * n,
                                d = Math.sin(Math.PI / 4) * n,
                                e.moveTo(a - o, r - d),
                                e.lineTo(a + o, r + d),
                                e.moveTo(a - o, r + d),
                                e.lineTo(a + o, r - d),
                                e.closePath();
                                break;
                            case "star":
                                    e.beginPath(),
                                e.moveTo(a, r + n),
                                e.lineTo(a, r - n),
                                e.moveTo(a - n, r),
                                e.lineTo(a + n, r),
                                o = Math.cos(Math.PI / 4) * n,
                                d = Math.sin(Math.PI / 4) * n,
                                e.moveTo(a - o, r - d),
                                e.lineTo(a + o, r + d),
                                e.moveTo(a - o, r + d),
                                e.lineTo(a + o, r - d),
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
                } else e.drawImage(t, a - t.width / 2, r - t.height / 2, t.width, t.height)
            },
            clipArea: function(e, t) {
                e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
            },
            unclipArea: function(e) {
                e.restore()
            },
            lineTo: function(e, t, n, a) {
                if (n.steppedLine) return "after" === n.steppedLine && !a || "after" !== n.steppedLine && a ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y), void e.lineTo(n.x, n.y);
                n.tension ? e.bezierCurveTo(a ? t.controlPointPreviousX : t.controlPointNextX, a ? t.controlPointPreviousY : t.controlPointNextY, a ? n.controlPointNextX : n.controlPointPreviousX, a ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
            }
        };
        a.clear = t.clear, a.drawRoundedRectangle = function(e) {
            e.beginPath(), t.roundedRect.apply(t, arguments), e.closePath()
        }
    },
    FDK5: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("wGD1"),
            i = n("iO9N"),
            s = a.global;
        a._set("global", {
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
                var e, t, n, a, r = this._view,
                    o = this._chart.ctx,
                    d = r.spanGaps,
                    u = this._children.slice(),
                    l = s.elements.line,
                    c = -1;
                for (this._loop && u.length && u.push(u[0]), o.save(), o.lineCap = r.borderCapStyle || l.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || l.borderDash), o.lineDashOffset = r.borderDashOffset || l.borderDashOffset, o.lineJoin = r.borderJoinStyle || l.borderJoinStyle, o.lineWidth = r.borderWidth || l.borderWidth, o.strokeStyle = r.borderColor || s.defaultColor, o.beginPath(), c = -1, e = 0; e < u.length; ++e) t = u[e], n = i.previousItem(u, e), a = t._view, 0 === e ? a.skip || (o.moveTo(a.x, a.y), c = e) : (n = -1 === c ? n : u[c], a.skip || (c !== e - 1 && !d || -1 === c ? o.moveTo(a.x, a.y) : i.canvas.lineTo(o, n._view, t._view), c = e));
                o.stroke(), o.restore()
            }
        })
    },
    FKXc: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    FRPF: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    FlzV: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Fpqq: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Frex: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    FuaP: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Fv8P: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("L5rj"),
            i = n("iO9N");
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
                                s = t.datasets[0],
                                o = r.data[a].custom || {},
                                d = i.valueAtIndexOrDefault,
                                u = e.options.elements.arc;
                            return {
                                text: n,
                                fillStyle: o.backgroundColor ? o.backgroundColor : d(s.backgroundColor, a, u.backgroundColor),
                                strokeStyle: o.borderColor ? o.borderColor : d(s.borderColor, a, u.borderColor),
                                lineWidth: o.borderWidth ? o.borderWidth : d(s.borderWidth, a, u.borderWidth),
                                hidden: isNaN(s.data[a]) || r.data[a].hidden,
                                index: a
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var n, a, r, i = t.index,
                        s = this.chart;
                    for (n = 0, a = (s.data.datasets || []).length; n < a; ++n)(r = s.getDatasetMeta(n)).data[i].hidden = !r.data[i].hidden;
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
                        n = t.chart,
                        a = n.chartArea,
                        r = t.getMeta(),
                        s = n.options,
                        o = s.elements.arc,
                        d = Math.min(a.right - a.left, a.bottom - a.top);
                    n.outerRadius = Math.max((d - o.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(s.cutoutPercentage ? n.outerRadius / 100 * s.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), t.outerRadius = n.outerRadius - n.radiusLength * t.index, t.innerRadius = t.outerRadius - n.radiusLength, r.count = t.countVisibleElements(), i.each(r.data, function(n, a) {
                        t.updateElement(n, a, e)
                    })
                },
                updateElement: function(e, t, n) {
                    for (var a = this.chart, r = this.getDataset(), s = a.options, o = s.animation, d = a.scale, u = a.data.labels, l = this.calculateCircumference(r.data[t]), c = d.xCenter, h = d.yCenter, m = 0, _ = this.getMeta(), f = 0; f < t; ++f) isNaN(r.data[f]) || _.data[f].hidden || ++m;
                    var p = s.startAngle,
                        g = e.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[t]),
                        y = p + l * m,
                        M = y + (e.hidden ? 0 : l),
                        v = o.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[t]);
                    i.extend(e, {
                        _datasetIndex: this.index,
                        _index: t,
                        _scale: d,
                        _model: {
                            x: c,
                            y: h,
                            innerRadius: 0,
                            outerRadius: n ? v : g,
                            startAngle: n && o.animateRotate ? p : y,
                            endAngle: n && o.animateRotate ? p : M,
                            label: i.valueAtIndexOrDefault(u, t, u[t])
                        }
                    }), this.removeHoverStyle(e), e.pivot()
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
    "G++c": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    G7No: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() - r.getTime()
        }
    },
    GBuA: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("L5rj"),
            i = n("iO9N");
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
                    var t;
                    e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                },
                update: function(e) {
                    var t, n, a = this.getMeta().data;
                    for (this._ruler = this.getRuler(), t = 0, n = a.length; t < n; ++t) this.updateElement(a[t], t, e)
                },
                updateElement: function(e, t, n) {
                    var a = this.chart,
                        r = this.getMeta(),
                        s = this.getDataset(),
                        o = e.custom || {},
                        d = a.options.elements.rectangle;
                    e._xScale = this.getScaleForId(r.xAxisID), e._yScale = this.getScaleForId(r.yAxisID), e._datasetIndex = this.index, e._index = t, e._model = {
                        datasetLabel: s.label,
                        label: a.data.labels[t],
                        borderSkipped: o.borderSkipped ? o.borderSkipped : d.borderSkipped,
                        backgroundColor: o.backgroundColor ? o.backgroundColor : i.valueAtIndexOrDefault(s.backgroundColor, t, d.backgroundColor),
                        borderColor: o.borderColor ? o.borderColor : i.valueAtIndexOrDefault(s.borderColor, t, d.borderColor),
                        borderWidth: o.borderWidth ? o.borderWidth : i.valueAtIndexOrDefault(s.borderWidth, t, d.borderWidth)
                    }, this.updateElementGeometry(e, t, n), e.pivot()
                },
                updateElementGeometry: function(e, t, n) {
                    var a = e._model,
                        r = this.getValueScale(),
                        i = r.getBasePixel(),
                        s = r.isHorizontal(),
                        o = this._ruler || this.getRuler(),
                        d = this.calculateBarValuePixels(this.index, t),
                        u = this.calculateBarIndexPixels(this.index, t, o);
                    a.horizontal = s, a.base = n ? i : d.base, a.x = s ? n ? i : d.head : u.center, a.y = s ? u.center : n ? i : d.head, a.height = s ? u.size : void 0, a.width = s ? void 0 : u.size
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
                    var t, n, a = this.chart,
                        r = this.getIndexScale().options.stacked,
                        i = void 0 === e ? a.data.datasets.length : e + 1,
                        s = [];
                    for (t = 0; t < i; ++t)(n = a.getDatasetMeta(t)).bar && a.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === s.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === s.indexOf(n.stack))) && s.push(n.stack);
                    return s.length
                },
                getStackIndex: function(e) {
                    return this.getStackCount(e) - 1
                },
                getRuler: function() {
                    var e, t, n = this.getIndexScale(),
                        a = this.getStackCount(),
                        r = this.index,
                        i = [],
                        s = n.isHorizontal(),
                        o = s ? n.left : n.top,
                        d = o + (s ? n.width : n.height);
                    for (e = 0, t = this.getMeta().data.length; e < t; ++e) i.push(n.getPixelForValue(null, e, r));
                    return {
                        pixels: i,
                        start: o,
                        end: d,
                        stackCount: a,
                        scale: n
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var n, a, r, i, s, o, d = this.chart,
                        u = this.getMeta(),
                        l = this.getValueScale(),
                        c = d.data.datasets,
                        h = l.getRightValue(c[e].data[t]),
                        m = l.options.stacked,
                        _ = u.stack,
                        f = 0;
                    if (m || void 0 === m && void 0 !== _)
                        for (n = 0; n < e; ++n)(a = d.getDatasetMeta(n)).bar && a.stack === _ && a.controller.getValueScaleId() === l.id && d.isDatasetVisible(n) && (r = l.getRightValue(c[n].data[t]), (h < 0 && r < 0 || h >= 0 && r > 0) && (f += r));
                    return i = l.getPixelForValue(f), s = l.getPixelForValue(f + h), o = (s - i) / 2, {
                        size: o,
                        base: i,
                        head: s,
                        center: s + o / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, n) {
                    var a, r, s, o, d, u, l = n.scale.options,
                        c = this.getStackIndex(e),
                        h = n.pixels,
                        m = h[t],
                        _ = h.length,
                        f = n.start,
                        p = n.end;
                    return 1 === _ ? (a = m > f ? m - f : p - m, r = m < p ? p - m : m - f) : (t > 0 && (a = (m - h[t - 1]) / 2, t === _ - 1 && (r = a)), t < _ - 1 && (r = (h[t + 1] - m) / 2, 0 === t && (a = r))), s = a * l.categoryPercentage, o = r * l.categoryPercentage, d = (s + o) / n.stackCount, u = d * l.barPercentage, u = Math.min(i.valueOrDefault(l.barThickness, u), i.valueOrDefault(l.maxBarThickness, 1 / 0)), m -= s, m += d * c, m += (d - u) / 2, {
                        size: u,
                        base: m,
                        head: m + u,
                        center: m + u / 2
                    }
                },
                draw: function() {
                    var e = this.chart,
                        t = this.getValueScale(),
                        n = this.getMeta().data,
                        a = this.getDataset(),
                        r = n.length,
                        s = 0;
                    for (i.canvas.clipArea(e.ctx, e.chartArea); s < r; ++s) isNaN(t.getRightValue(a.data[s])) || n[s].draw();
                    i.canvas.unclipArea(e.ctx)
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
                        s = this.chart.options.elements.rectangle;
                    r.backgroundColor = a.backgroundColor ? a.backgroundColor : i.valueAtIndexOrDefault(t.backgroundColor, n, s.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : i.valueAtIndexOrDefault(t.borderColor, n, s.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : i.valueAtIndexOrDefault(t.borderWidth, n, s.borderWidth)
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
    GI7G: function(e, t, n) {
        var a = n("xA5w"),
            r = n("orNa"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = a(e),
                s = a(t),
                o = i(n, s),
                d = Math.abs(r(n, s));
            return n.setMonth(n.getMonth() - o * d), o * (d - (i(n, s) === -o))
        }
    },
    GqGk: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Scatter = function(t, n) {
                return n.type = "scatter", new e(t, n)
            }
        }
    },
    GrS7: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    GvNH: function(e, t, n) {
        var a = n("WNGz");
        e.exports = function(e) {
            return a(e).getTime() === a(new Date).getTime()
        }
    },
    HXCM: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a + 1), r.setHours(23, 59, 59, 999), r
        }
    },
    I7cV: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                r = a(e),
                i = r.getDay(),
                s = 6 + (i < n ? -7 : 0) - (i - n);
            return r.setDate(r.getDate() + s), r.setHours(23, 59, 59, 999), r
        }
    },
    IbXy: function(e, t, n) {
        "use strict";
        var a = n("iO9N");
        e.exports = {
            generators: {
                linear: function(e, t) {
                    var n, r = [];
                    if (e.stepSize && e.stepSize > 0) n = e.stepSize;
                    else {
                        var i = a.niceNum(t.max - t.min, !1);
                        n = a.niceNum(i / (e.maxTicks - 1), !0)
                    }
                    var s = Math.floor(t.min / n) * n,
                        o = Math.ceil(t.max / n) * n;
                    e.min && e.max && e.stepSize && a.almostWhole((e.max - e.min) / e.stepSize, n / 1e3) && (s = e.min, o = e.max);
                    var d = (o - s) / n;
                    d = a.almostEquals(d, Math.round(d), n / 1e3) ? Math.round(d) : Math.ceil(d), r.push(void 0 !== e.min ? e.min : s);
                    for (var u = 1; u < d; ++u) r.push(s + u * n);
                    return r.push(void 0 !== e.max ? e.max : o), r
                },
                logarithmic: function(e, t) {
                    var n, r, i = [],
                        s = a.valueOrDefault,
                        o = s(e.min, Math.pow(10, Math.floor(a.log10(t.min)))),
                        d = Math.floor(a.log10(t.max)),
                        u = Math.ceil(t.max / Math.pow(10, d));
                    0 === o ? (n = Math.floor(a.log10(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, n)), i.push(o), o = r * Math.pow(10, n)) : (n = Math.floor(a.log10(o)), r = Math.floor(o / Math.pow(10, n)));
                    do {
                        i.push(o), 10 === ++r && (r = 1, ++n), o = r * Math.pow(10, n)
                    } while (n < d || n === d && r < u);
                    var l = s(e.max, o);
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
                        s = "";
                    if (0 !== e) {
                        var o = -1 * Math.floor(i);
                        o = Math.max(Math.min(o, 20), 0), s = e.toFixed(o)
                    } else s = "0";
                    return s
                },
                logarithmic: function(e, t, n) {
                    var r = e / Math.pow(10, Math.floor(a.log10(e)));
                    return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === n.length - 1 ? e.toExponential() : ""
                }
            }
        }
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n("TToO"),
            r = n("U7vG"),
            i = (n.n(r), n("Odds")),
            s = n("yU6t"),
            o = (n.n(s), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.onDragEnter = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(i.N, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(i.V, {
                        position: i._8.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: i._44.Above
                    }, r.createElement("input", {
                        "data-test-selector": "file-picker-input",
                        className: "drag-and-drop-file-picker__input",
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        type: "file",
                        onDragLeave: this.onDragLeave,
                        onDragEnter: this.onDragEnter,
                        onDrop: this.onFileDrop
                    })), this.props.children)
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(r.Component))
    },
    JNsx: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getMinutes()
        }
    },
    JURy: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
    },
    Javx: function(e, t, n) {
        var a = n("b7g8");
        e.exports = function(e) {
            return a(e) ? 366 : 365
        }
    },
    Jtuq: function(e, t, n) {
        var a = n("lQzg"),
            r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                i = r(t);
            return 4 * (n.getFullYear() - i.getFullYear()) + (a(n) - a(i))
        }
    },
    Jvcu: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setDate(n.getDate() + r), n
        }
    },
    JwiF: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    K7ZZ: function(e, t, n) {
        var a = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = a(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = r(n);
            return i.setMilliseconds(i.getMilliseconds() - 1), i
        }
    },
    KC8c: function(e, t, n) {
        "use strict";

        function a(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : u.getRelativePosition(e, t)
        }

        function r(e, t) {
            var n, a, r, i, s;
            for (a = 0, i = e.data.datasets.length; a < i; ++a)
                if (e.isDatasetVisible(a))
                    for (r = 0, s = (n = e.getDatasetMeta(a)).data.length; r < s; ++r) {
                        var o = n.data[r];
                        o._view.skip || t(o)
                    }
        }

        function i(e, t) {
            var n = [];
            return r(e, function(e) {
                e.inRange(t.x, t.y) && n.push(e)
            }), n
        }

        function s(e, t, n, a) {
            var i = Number.POSITIVE_INFINITY,
                s = [];
            return r(e, function(e) {
                if (!n || e.inRange(t.x, t.y)) {
                    var r = e.getCenterPoint(),
                        o = a(t, r);
                    o < i ? (s = [e], i = o) : o === i && s.push(e)
                }
            }), s
        }

        function o(e) {
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
            var d = o(n.axis),
                u = n.intersect ? i(e, r) : s(e, r, !1, d),
                l = [];
            return u.length ? (e.data.datasets.forEach(function(t, n) {
                if (e.isDatasetVisible(n)) {
                    var a = e.getDatasetMeta(n).data[u[0]._index];
                    a && !a._view.skip && l.push(a)
                }
            }), l) : []
        }
        var u = n("iO9N");
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
                    var d = o(n.axis),
                        u = n.intersect ? i(e, r) : s(e, r, !1, d);
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
                    var i = o(n.axis),
                        d = s(e, r, n.intersect, i);
                    return d.length > 1 && d.sort(function(e, t) {
                        var n = e.getArea() - t.getArea();
                        return 0 === n && (n = e._datasetIndex - t._datasetIndex), n
                    }), d.slice(0, 1)
                },
                x: function(e, t, n) {
                    var i = a(t, e),
                        s = [],
                        o = !1;
                    return r(e, function(e) {
                        e.inXRange(i.x) && s.push(e), e.inRange(i.x, i.y) && (o = !0)
                    }), n.intersect && !o && (s = []), s
                },
                y: function(e, t, n) {
                    var i = a(t, e),
                        s = [],
                        o = !1;
                    return r(e, function(e) {
                        e.inYRange(i.y) && s.push(e), e.inRange(i.x, i.y) && (o = !0)
                    }), n.intersect && !o && (s = []), s
                }
            }
        }
    },
    L5rj: function(e, t, n) {
        "use strict";
        e.exports = {}, e.exports.Arc = n("5ImO"), e.exports.Line = n("FDK5"), e.exports.Point = n("Qor1"), e.exports.Rectangle = n("AFDx")
    },
    LLTj: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setMinutes(0, 0, 0), t
        }
    },
    LT9G: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    LU20: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setSeconds(59, 999), t
        }
    },
    Lgqo: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    M5Oo: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t).getTime();
            if (n.getTime() > r) throw new Error("The first date cannot be after the second date");
            var i = [],
                s = n;
            for (s.setHours(0, 0, 0, 0); s.getTime() <= r;) i.push(a(s)), s.setDate(s.getDate() + 1);
            return i
        }
    },
    MIQa: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setHours(23, 59, 59, 999), t
        }
    },
    "MKc+": function(e, t, n) {
        var a = n("oNnY");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    Mbb9: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getDay()
        }
    },
    Mdww: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getFullYear(),
                r = t.getMonth(),
                i = new Date(0);
            return i.setFullYear(n, r + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
        }
    },
    Moxe: function(e, t, n) {
        var a = n("M5Oo");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() === r.getTime()
        }
    },
    N3vo: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    NKE6: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e).getTime(),
                r = a(t).getTime();
            return n < r ? -1 : n > r ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var a = n("6Zhv"),
            r = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, n * r)
        }
    },
    Nd3h: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Nlnz: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Nzt2: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    ORgI: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    OSsP: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
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
                }[n], e)
            }

            function n(e) {
                return e > 9 ? n(e % 10) : e
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
                    yy: function(e) {
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
    OUMt: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    OVPi: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    PGY2: function(e, t, n) {
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

        function s(e, t, n) {
            return e.sort(function(e, a) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r],
                        s = n[r] || d.Ascending,
                        o = function(e, t) {
                            var n = null !== e && void 0 !== e,
                                a = null !== t && void 0 !== t;
                            return n && a ? e > t ? 1 : e < t ? -1 : 0 : n ? -1 : a ? 1 : 0
                        }(i(e), i(a)) * s;
                    if (0 !== o) return o
                }
                return 0
            })
        }
        var o = {};
        n.d(o, "channelAchievements", function() {
            return a
        }), n.d(o, "achievement", function() {
            return r
        });
        var d, u = n("6w0d"),
            l = n("b9IH"),
            c = n("wuJz"),
            h = 6e4,
            m = 60 * h,
            _ = function() {
                function e(e) {
                    this.totalMilliseconds = e, this.hours = Math.floor(e / m), this.minutes = Math.floor(e % m / h)
                }
                return e.prototype.isSameLengthAs = function(e) {
                    return this.minutes === e.minutes && this.hours === e.hours
                }, e.prototype.diff = function(t) {
                    return new e(this.totalMilliseconds - t.totalMilliseconds)
                }, e
            }(),
            f = function() {
                function e(e, t) {
                    this.start = "string" == typeof e ? new Date(e) : e, this.end = "string" == typeof t ? new Date(t) : t, this.duration = new _(this.end.getTime() - this.start.getTime()), this.hours = this.duration.hours, this.minutes = this.duration.minutes
                }
                return e.lastNDays = function(t, n) {
                    return void 0 === n && (n = new Date), new e(Object(c.subDays)(n, t), n)
                }, e.prototype.isSameLengthAs = function(e) {
                    return this.duration.isSameLengthAs(e.duration)
                }, e.prototype.diff = function(e) {
                    return this.duration.diff(e.duration)
                }, e
            }();
        ! function(e) {
            e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
        }(d || (d = {})), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return u.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return l.a
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "f", function() {
            return i
        }), n.d(t, !1, function() {
            return _
        }), n.d(t, "a", function() {
            return d
        }), n.d(t, "e", function() {
            return s
        })
    },
    PJh5: function(e, t, n) {
        (function(e) {
            ! function(t, n) {
                e.exports = n()
            }(0, function() {
                "use strict";

                function t() {
                    return Ze.apply(null, arguments)
                }

                function a(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function i(e) {
                    return void 0 === e
                }

                function s(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function o(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function d(e, t) {
                    var n, a = [];
                    for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                    return a
                }

                function u(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function l(e, t) {
                    for (var n in t) u(t, n) && (e[n] = t[n]);
                    return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function c(e, t, n, a) {
                    return ye(e, t, n, a, !0).utc()
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

                function m(e) {
                    if (null == e._isValid) {
                        var t = h(e),
                            n = Xe.call(t.parsedDateParts, function(e) {
                                return null != e
                            }),
                            a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                        if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                        e._isValid = a
                    }
                    return e._isValid
                }

                function _(e) {
                    var t = c(NaN);
                    return null != e ? l(h(t), e) : h(t).userInvalidated = !0, t
                }

                function f(e, t) {
                    var n, a, r;
                    if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), i(t._pf) || (e._pf = h(t)), i(t._locale) || (e._locale = t._locale), Qe.length > 0)
                        for (n = 0; n < Qe.length; n++) i(r = t[a = Qe[n]]) || (e[a] = r);
                    return e
                }

                function p(e) {
                    f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === $e && ($e = !0, t.updateOffset(this), $e = !1)
                }

                function g(e) {
                    return e instanceof p || null != e && null != e._isAMomentObject
                }

                function y(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function M(e) {
                    var t = +e,
                        n = 0;
                    return 0 !== t && isFinite(t) && (n = y(t)), n
                }

                function v(e, t, n) {
                    var a, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        s = 0;
                    for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && M(e[a]) !== M(t[a])) && s++;
                    return s + i
                }

                function b(e) {
                    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function L(e, n) {
                    var a = !0;
                    return l(function() {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
                            for (var r, i = [], s = 0; s < arguments.length; s++) {
                                if (r = "", "object" == typeof arguments[s]) {
                                    r += "\n[" + s + "] ";
                                    for (var o in arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[s];
                                i.push(r)
                            }
                            b(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
                        }
                        return n.apply(this, arguments)
                    }, n)
                }

                function D(e, n) {
                    null != t.deprecationHandler && t.deprecationHandler(e, n), et[e] || (b(n), et[e] = !0)
                }

                function k(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function Y(e, t) {
                    var n, a = l({}, e);
                    for (n in t) u(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, l(a[n], e[n]), l(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                    for (n in e) u(e, n) && !u(t, n) && r(e[n]) && (a[n] = l({}, a[n]));
                    return a
                }

                function w(e) {
                    null != e && this.set(e)
                }

                function x(e, t) {
                    var n = e.toLowerCase();
                    nt[n] = nt[n + "s"] = nt[t] = e
                }

                function T(e) {
                    return "string" == typeof e ? nt[e] || nt[e.toLowerCase()] : void 0
                }

                function S(e) {
                    var t, n, a = {};
                    for (n in e) u(e, n) && (t = T(n)) && (a[t] = e[n]);
                    return a
                }

                function O(e, t) {
                    at[e] = t
                }

                function j(e, n) {
                    return function(a) {
                        return null != a ? (C(this, e, a), t.updateOffset(this, n), this) : H(this, e)
                    }
                }

                function H(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function C(e, t, n) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
                }

                function P(e, t, n) {
                    var a = "" + Math.abs(e),
                        r = t - a.length;
                    return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
                }

                function A(e, t, n, a) {
                    var r = a;
                    "string" == typeof a && (r = function() {
                        return this[a]()
                    }), e && (ot[e] = r), t && (ot[t[0]] = function() {
                        return P(r.apply(this, arguments), t[1], t[2])
                    }), n && (ot[n] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function F(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function E(e, t) {
                    return e.isValid() ? (t = W(t, e.localeData()), st[t] = st[t] || function(e) {
                        var t, n, a = e.match(rt);
                        for (t = 0, n = a.length; t < n; t++) ot[a[t]] ? a[t] = ot[a[t]] : a[t] = F(a[t]);
                        return function(t) {
                            var r, i = "";
                            for (r = 0; r < n; r++) i += k(a[r]) ? a[r].call(t, e) : a[r];
                            return i
                        }
                    }(t), st[t](e)) : e.localeData().invalidDate()
                }

                function W(e, t) {
                    function n(e) {
                        return t.longDateFormat(e) || e
                    }
                    var a = 5;
                    for (it.lastIndex = 0; a >= 0 && it.test(e);) e = e.replace(it, n), it.lastIndex = 0, a -= 1;
                    return e
                }

                function I(e, t, n) {
                    kt[e] = k(t) ? t : function(e, a) {
                        return e && n ? n : t
                    }
                }

                function N(e, t) {
                    return u(kt, e) ? kt[e](t._strict, t._locale) : new RegExp(function(e) {
                        return R(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) {
                            return t || n || a || r
                        }))
                    }(e))
                }

                function R(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function z(e, t) {
                    var n, a = t;
                    for ("string" == typeof e && (e = [e]), s(t) && (a = function(e, n) {
                            n[t] = M(e)
                        }), n = 0; n < e.length; n++) Yt[e[n]] = a
                }

                function B(e, t) {
                    z(e, function(e, n, a, r) {
                        a._w = a._w || {}, t(e, a._w, a, r)
                    })
                }

                function J(e, t, n) {
                    null != t && u(Yt, e) && Yt[e](t, n._a, n, e)
                }

                function V(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }

                function U(e, t) {
                    var n;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = M(t);
                        else if (t = e.localeData().monthsParse(t), !s(t)) return e;
                    return n = Math.min(e.date(), V(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
                }

                function G(e) {
                    return null != e ? (U(this, e), t.updateOffset(this, !0), this) : H(this, "Month")
                }

                function q() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a = [],
                        r = [],
                        i = [];
                    for (t = 0; t < 12; t++) n = c([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                    for (a.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) a[t] = R(a[t]), r[t] = R(r[t]);
                    for (t = 0; t < 24; t++) i[t] = R(i[t]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
                }

                function K(e) {
                    return Z(e) ? 366 : 365
                }

                function Z(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function X(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function Q(e, t, n) {
                    var a = 7 + t - n;
                    return -((7 + X(e, 0, a).getUTCDay() - t) % 7) + a - 1
                }

                function $(e, t, n, a, r) {
                    var i, s, o = 1 + 7 * (t - 1) + (7 + n - a) % 7 + Q(e, a, r);
                    return o <= 0 ? s = K(i = e - 1) + o : o > K(e) ? (i = e + 1, s = o - K(e)) : (i = e, s = o), {
                        year: i,
                        dayOfYear: s
                    }
                }

                function ee(e, t, n) {
                    var a, r, i = Q(e.year(), t, n),
                        s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return s < 1 ? a = s + te(r = e.year() - 1, t, n) : s > te(e.year(), t, n) ? (a = s - te(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = s), {
                        week: a,
                        year: r
                    }
                }

                function te(e, t, n) {
                    var a = Q(e, t, n),
                        r = Q(e + 1, t, n);
                    return (K(e) - a + r) / 7
                }

                function ne() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a, r, i, s = [],
                        o = [],
                        d = [],
                        u = [];
                    for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), s.push(a), o.push(r), d.push(i), u.push(a), u.push(r), u.push(i);
                    for (s.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) o[t] = R(o[t]), d[t] = R(d[t]), u[t] = R(u[t]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                }

                function ae() {
                    return this.hours() % 12 || 12
                }

                function re(e, t) {
                    A(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function ie(e, t) {
                    return t._meridiemParse
                }

                function se(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function oe(t) {
                    var a = null;
                    if (!Xt[t] && void 0 !== e && e && e.exports) try {
                        a = qt._abbr, n("uslO")("./" + t), de(a)
                    } catch (e) {}
                    return Xt[t]
                }

                function de(e, t) {
                    var n;
                    return e && (n = i(t) ? le(e) : ue(e, t)) && (qt = n), qt._abbr
                }

                function ue(e, t) {
                    if (null !== t) {
                        var n = Zt;
                        if (t.abbr = e, null != Xt[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Xt[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == Xt[t.parentLocale]) return Qt[t.parentLocale] || (Qt[t.parentLocale] = []), Qt[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            n = Xt[t.parentLocale]._config
                        }
                        return Xt[e] = new w(Y(n, t)), Qt[e] && Qt[e].forEach(function(e) {
                            ue(e.name, e.config)
                        }), de(e), Xt[e]
                    }
                    return delete Xt[e], null
                }

                function le(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return qt;
                    if (!a(e)) {
                        if (t = oe(e)) return t;
                        e = [e]
                    }
                    return function(e) {
                        for (var t, n, a, r, i = 0; i < e.length;) {
                            for (t = (r = se(e[i]).split("-")).length, n = (n = se(e[i + 1])) ? n.split("-") : null; t > 0;) {
                                if (a = oe(r.slice(0, t).join("-"))) return a;
                                if (n && n.length >= t && v(r, n, !0) >= t - 1) break;
                                t--
                            }
                            i++
                        }
                        return null
                    }(e)
                }

                function ce(e) {
                    var t, n = e._a;
                    return n && -2 === h(e).overflow && (t = n[xt] < 0 || n[xt] > 11 ? xt : n[Tt] < 1 || n[Tt] > V(n[wt], n[xt]) ? Tt : n[St] < 0 || n[St] > 24 || 24 === n[St] && (0 !== n[Ot] || 0 !== n[jt] || 0 !== n[Ht]) ? St : n[Ot] < 0 || n[Ot] > 59 ? Ot : n[jt] < 0 || n[jt] > 59 ? jt : n[Ht] < 0 || n[Ht] > 999 ? Ht : -1, h(e)._overflowDayOfYear && (t < wt || t > Tt) && (t = Tt), h(e)._overflowWeeks && -1 === t && (t = Ct), h(e)._overflowWeekday && -1 === t && (t = Pt), h(e).overflow = t), e
                }

                function he(e) {
                    var t, n, a, r, i, s, o = e._i,
                        d = $t.exec(o) || en.exec(o);
                    if (d) {
                        for (h(e).iso = !0, t = 0, n = nn.length; t < n; t++)
                            if (nn[t][1].exec(d[1])) {
                                r = nn[t][0], a = !1 !== nn[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, n = an.length; t < n; t++)
                                if (an[t][1].exec(d[3])) {
                                    i = (d[2] || " ") + an[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!a && null != i) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!tn.exec(d[4])) return void(e._isValid = !1);
                            s = "Z"
                        }
                        e._f = r + (i || "") + (s || ""), pe(e)
                    } else e._isValid = !1
                }

                function me(e) {
                    var t, n, a, r, i, s, o, d, u = {
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
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = sn.exec(t)) {
                        if (a = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", r = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
                            var l = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(n[2]).getDay()];
                            if (n[1].substr(0, 3) !== l) return h(e).weekdayMismatch = !0, void(e._isValid = !1)
                        }
                        switch (n[5].length) {
                            case 2:
                                o = 0 === d ? " +0000" : ((d = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(n[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00";
                                break;
                            case 4:
                                o = u[n[5]];
                                break;
                            default:
                                o = u[" GMT"]
                        }
                        n[5] = o, e._i = n.splice(1).join(""), s = " ZZ", e._f = a + r + i + s, pe(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function _e(e, t, n) {
                    return null != e ? e : null != t ? t : n
                }

                function fe(e) {
                    var n, a, r, i, s = [];
                    if (!e._d) {
                        for (r = function(e) {
                                var n = new Date(t.now());
                                return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                            }(e), e._w && null == e._a[Tt] && null == e._a[xt] && function(e) {
                                var t, n, a, r, i, s, o, d;
                                if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, s = 4, n = _e(t.GG, e._a[wt], ee(Me(), 1, 4).year), a = _e(t.W, 1), ((r = _e(t.E, 1)) < 1 || r > 7) && (d = !0);
                                else {
                                    i = e._locale._week.dow, s = e._locale._week.doy;
                                    var u = ee(Me(), i, s);
                                    n = _e(t.gg, e._a[wt], u.year), a = _e(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
                                }
                                a < 1 || a > te(n, i, s) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = $(n, a, r, i, s), e._a[wt] = o.year, e._dayOfYear = o.dayOfYear)
                            }(e), null != e._dayOfYear && (i = _e(e._a[wt], r[wt]), (e._dayOfYear > K(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), a = X(i, 0, e._dayOfYear), e._a[xt] = a.getUTCMonth(), e._a[Tt] = a.getUTCDate()), n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = s[n] = r[n];
                        for (; n < 7; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
                        24 === e._a[St] && 0 === e._a[Ot] && 0 === e._a[jt] && 0 === e._a[Ht] && (e._nextDay = !0, e._a[St] = 0), e._d = (e._useUTC ? X : function(e, t, n, a, r, i, s) {
                            var o = new Date(e, t, n, a, r, i, s);
                            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                        }).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[St] = 24)
                    }
                }

                function pe(e) {
                    if (e._f !== t.ISO_8601)
                        if (e._f !== t.RFC_2822) {
                            e._a = [], h(e).empty = !0;
                            var n, a, r, i, s, o = "" + e._i,
                                d = o.length,
                                u = 0;
                            for (r = W(e._f, e._locale).match(rt) || [], n = 0; n < r.length; n++) i = r[n], (a = (o.match(N(i, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(a))).length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), u += a.length), ot[i] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(i), J(i, a, e)) : e._strict && !a && h(e).unusedTokens.push(i);
                            h(e).charsLeftOver = d - u, o.length > 0 && h(e).unusedInput.push(o), e._a[St] <= 12 && !0 === h(e).bigHour && e._a[St] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[St] = function(e, t, n) {
                                var a;
                                if (null == n) return t;
                                return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((a = e.isPM(n)) && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
                            }(e._locale, e._a[St], e._meridiem), fe(e), ce(e)
                        } else me(e);
                    else he(e)
                }

                function ge(e) {
                    var n = e._i,
                        u = e._f;
                    return e._locale = e._locale || le(e._l), null === n || void 0 === u && "" === n ? _({
                        nullInput: !0
                    }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), g(n) ? new p(ce(n)) : (o(n) ? e._d = n : a(u) ? function(e) {
                        var t, n, a, r, i;
                        if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                        for (r = 0; r < e._f.length; r++) i = 0, t = f({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], pe(t), m(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == a || i < a) && (a = i, n = t));
                        l(e, n || t)
                    }(e) : u ? pe(e) : function(e) {
                        var n = e._i;
                        i(n) ? e._d = new Date(t.now()) : o(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? function(e) {
                            var n = rn.exec(e._i);
                            null === n ? (he(e), !1 === e._isValid && (delete e._isValid, me(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))) : e._d = new Date(+n[1])
                        }(e) : a(n) ? (e._a = d(n.slice(0), function(e) {
                            return parseInt(e, 10)
                        }), fe(e)) : r(n) ? function(e) {
                            if (!e._d) {
                                var t = S(e._i);
                                e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                    return e && parseInt(e, 10)
                                }), fe(e)
                            }
                        }(e) : s(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
                    }(e), m(e) || (e._d = null), e))
                }

                function ye(e, t, n, i, s) {
                    var o = {};
                    return !0 !== n && !1 !== n || (i = n, n = void 0), (r(e) && function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        }(e) || a(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = s, o._l = n, o._i = e, o._f = t, o._strict = i,
                        function(e) {
                            var t = new p(ce(ge(e)));
                            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                        }(o)
                }

                function Me(e, t, n, a) {
                    return ye(e, t, n, a, !1)
                }

                function ve(e, t) {
                    var n, r;
                    if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return Me();
                    for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                    return n
                }

                function be(e) {
                    var t = S(e),
                        n = t.year || 0,
                        a = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        s = t.day || 0,
                        o = t.hour || 0,
                        d = t.minute || 0,
                        u = t.second || 0,
                        l = t.millisecond || 0;
                    this._isValid = function(e) {
                        for (var t in e)
                            if (-1 === un.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                        for (var n = !1, a = 0; a < un.length; ++a)
                            if (e[un[a]]) {
                                if (n) return !1;
                                parseFloat(e[un[a]]) !== M(e[un[a]]) && (n = !0)
                            }
                        return !0
                    }(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = le(), this._bubble()
                }

                function Le(e) {
                    return e instanceof be
                }

                function De(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function ke(e, t) {
                    A(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            n = "+";
                        return e < 0 && (e = -e, n = "-"), n + P(~~(e / 60), 2) + t + P(~~e % 60, 2)
                    })
                }

                function Ye(e, t) {
                    var n = (t || "").match(e);
                    if (null === n) return null;
                    var a = ((n[n.length - 1] || []) + "").match(ln) || ["-", 0, 0],
                        r = 60 * a[1] + M(a[2]);
                    return 0 === r ? 0 : "+" === a[0] ? r : -r
                }

                function we(e, n) {
                    var a, r;
                    return n._isUTC ? (a = n.clone(), r = (g(e) || o(e) ? e.valueOf() : Me(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), t.updateOffset(a, !1), a) : Me(e).local()
                }

                function xe(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function Te() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Se(e, t) {
                    var n, a, r, i = e,
                        o = null;
                    return Le(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : s(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (o = cn.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
                        y: 0,
                        d: M(o[Tt]) * n,
                        h: M(o[St]) * n,
                        m: M(o[Ot]) * n,
                        s: M(o[jt]) * n,
                        ms: M(De(1e3 * o[Ht])) * n
                    }) : (o = hn.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
                        y: Oe(o[2], n),
                        M: Oe(o[3], n),
                        w: Oe(o[4], n),
                        d: Oe(o[5], n),
                        h: Oe(o[6], n),
                        m: Oe(o[7], n),
                        s: Oe(o[8], n)
                    }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = function(e, t) {
                        var n;
                        if (!e.isValid() || !t.isValid()) return {
                            milliseconds: 0,
                            months: 0
                        };
                        t = we(t, e), e.isBefore(t) ? n = je(e, t) : ((n = je(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
                        return n
                    }(Me(i.from), Me(i.to)), (i = {}).ms = r.milliseconds, i.M = r.months), a = new be(i), Le(e) && u(e, "_locale") && (a._locale = e._locale), a
                }

                function Oe(e, t) {
                    var n = e && parseFloat(e.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * t
                }

                function je(e, t) {
                    var n = {
                        milliseconds: 0,
                        months: 0
                    };
                    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
                }

                function He(e, t) {
                    return function(n, a) {
                        var r, i;
                        return null === a || isNaN(+a) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = a, a = i), n = "string" == typeof n ? +n : n, r = Se(n, a), Ce(this, r, e), this
                    }
                }

                function Ce(e, n, a, r) {
                    var i = n._milliseconds,
                        s = De(n._days),
                        o = De(n._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * a), s && C(e, "Date", H(e, "Date") + s * a), o && U(e, H(e, "Month") + o * a), r && t.updateOffset(e, s || o))
                }

                function Pe(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = le(e)) && (this._locale = t), this)
                }

                function Ae() {
                    return this._locale
                }

                function Fe(e, t) {
                    A(0, [e, e.length], 0, t)
                }

                function Ee(e, t, n, a, r) {
                    var i;
                    return null == e ? ee(this, a, r).year : (i = te(e, a, r), t > i && (t = i), function(e, t, n, a, r) {
                        var i = $(e, t, n, a, r),
                            s = X(i.year, 0, i.dayOfYear);
                        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                    }.call(this, e, t, n, a, r))
                }

                function We(e, t) {
                    t[Ht] = M(1e3 * ("0." + e))
                }

                function Ie(e) {
                    return e
                }

                function Ne(e, t, n, a) {
                    var r = le(),
                        i = c().set(a, t);
                    return r[n](i, e)
                }

                function Re(e, t, n) {
                    if (s(e) && (t = e, e = void 0), e = e || "", null != t) return Ne(e, t, n, "month");
                    var a, r = [];
                    for (a = 0; a < 12; a++) r[a] = Ne(e, a, n, "month");
                    return r
                }

                function ze(e, t, n, a) {
                    "boolean" == typeof e ? (s(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, s(t) && (n = t, t = void 0), t = t || "");
                    var r = le(),
                        i = e ? r._week.dow : 0;
                    if (null != n) return Ne(t, (n + i) % 7, a, "day");
                    var o, d = [];
                    for (o = 0; o < 7; o++) d[o] = Ne(t, (o + i) % 7, a, "day");
                    return d
                }

                function Be(e, t, n, a) {
                    var r = Se(t, n);
                    return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble()
                }

                function Je(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function Ve(e) {
                    return 4800 * e / 146097
                }

                function Ue(e) {
                    return 146097 * e / 4800
                }

                function Ge(e) {
                    return function() {
                        return this.as(e)
                    }
                }

                function qe(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }

                function Ke() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, n = Rn(this._milliseconds) / 1e3,
                        a = Rn(this._days),
                        r = Rn(this._months);
                    t = y((e = y(n / 60)) / 60), n %= 60, e %= 60;
                    var i = y(r / 12),
                        s = r %= 12,
                        o = a,
                        d = t,
                        u = e,
                        l = n,
                        c = this.asSeconds();
                    return c ? (c < 0 ? "-" : "") + "P" + (i ? i + "Y" : "") + (s ? s + "M" : "") + (o ? o + "D" : "") + (d || u || l ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (l ? l + "S" : "") : "P0D"
                }
                var Ze, Xe = Array.prototype.some ? Array.prototype.some : function(e) {
                        for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                            if (a in t && e.call(this, t[a], a, t)) return !0;
                        return !1
                    },
                    Qe = t.momentProperties = [],
                    $e = !1,
                    et = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var tt = Object.keys ? Object.keys : function(e) {
                        var t, n = [];
                        for (t in e) u(e, t) && n.push(t);
                        return n
                    },
                    nt = {},
                    at = {},
                    rt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    it = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    st = {},
                    ot = {},
                    dt = /\d/,
                    ut = /\d\d/,
                    lt = /\d{3}/,
                    ct = /\d{4}/,
                    ht = /[+-]?\d{6}/,
                    mt = /\d\d?/,
                    _t = /\d\d\d\d?/,
                    ft = /\d\d\d\d\d\d?/,
                    pt = /\d{1,3}/,
                    gt = /\d{1,4}/,
                    yt = /[+-]?\d{1,6}/,
                    Mt = /\d+/,
                    vt = /[+-]?\d+/,
                    bt = /Z|[+-]\d\d:?\d\d/gi,
                    Lt = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    Dt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    kt = {},
                    Yt = {},
                    wt = 0,
                    xt = 1,
                    Tt = 2,
                    St = 3,
                    Ot = 4,
                    jt = 5,
                    Ht = 6,
                    Ct = 7,
                    Pt = 8,
                    At = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1
                    };
                A("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), A("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), A("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), x("month", "M"), O("month", 8), I("M", mt), I("MM", mt, ut), I("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), I("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), z(["M", "MM"], function(e, t) {
                    t[xt] = M(e) - 1
                }), z(["MMM", "MMMM"], function(e, t, n, a) {
                    var r = n._locale.monthsParse(e, a, n._strict);
                    null != r ? t[xt] = r : h(n).invalidMonth = e
                });
                var Ft = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Et = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Wt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    It = Dt,
                    Nt = Dt;
                A("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), A(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), A(0, ["YYYY", 4], 0, "year"), A(0, ["YYYYY", 5], 0, "year"), A(0, ["YYYYYY", 6, !0], 0, "year"), x("year", "y"), O("year", 1), I("Y", vt), I("YY", mt, ut), I("YYYY", gt, ct), I("YYYYY", yt, ht), I("YYYYYY", yt, ht), z(["YYYYY", "YYYYYY"], wt), z("YYYY", function(e, n) {
                    n[wt] = 2 === e.length ? t.parseTwoDigitYear(e) : M(e)
                }), z("YY", function(e, n) {
                    n[wt] = t.parseTwoDigitYear(e)
                }), z("Y", function(e, t) {
                    t[wt] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function(e) {
                    return M(e) + (M(e) > 68 ? 1900 : 2e3)
                };
                var Rt = j("FullYear", !0);
                A("w", ["ww", 2], "wo", "week"), A("W", ["WW", 2], "Wo", "isoWeek"), x("week", "w"), x("isoWeek", "W"), O("week", 5), O("isoWeek", 5), I("w", mt), I("ww", mt, ut), I("W", mt), I("WW", mt, ut), B(["w", "ww", "W", "WW"], function(e, t, n, a) {
                    t[a.substr(0, 1)] = M(e)
                });
                A("d", 0, "do", "day"), A("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), A("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), A("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), A("e", 0, 0, "weekday"), A("E", 0, 0, "isoWeekday"), x("day", "d"), x("weekday", "e"), x("isoWeekday", "E"), O("day", 11), O("weekday", 11), O("isoWeekday", 11), I("d", mt), I("e", mt), I("E", mt), I("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), I("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), I("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), B(["dd", "ddd", "dddd"], function(e, t, n, a) {
                    var r = n._locale.weekdaysParse(e, a, n._strict);
                    null != r ? t.d = r : h(n).invalidWeekday = e
                }), B(["d", "e", "E"], function(e, t, n, a) {
                    t[a] = M(e)
                });
                var zt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Vt = Dt,
                    Ut = Dt,
                    Gt = Dt;
                A("H", ["HH", 2], 0, "hour"), A("h", ["hh", 2], 0, ae), A("k", ["kk", 2], 0, function() {
                    return this.hours() || 24
                }), A("hmm", 0, 0, function() {
                    return "" + ae.apply(this) + P(this.minutes(), 2)
                }), A("hmmss", 0, 0, function() {
                    return "" + ae.apply(this) + P(this.minutes(), 2) + P(this.seconds(), 2)
                }), A("Hmm", 0, 0, function() {
                    return "" + this.hours() + P(this.minutes(), 2)
                }), A("Hmmss", 0, 0, function() {
                    return "" + this.hours() + P(this.minutes(), 2) + P(this.seconds(), 2)
                }), re("a", !0), re("A", !1), x("hour", "h"), O("hour", 13), I("a", ie), I("A", ie), I("H", mt), I("h", mt), I("k", mt), I("HH", mt, ut), I("hh", mt, ut), I("kk", mt, ut), I("hmm", _t), I("hmmss", ft), I("Hmm", _t), I("Hmmss", ft), z(["H", "HH"], St), z(["k", "kk"], function(e, t, n) {
                    var a = M(e);
                    t[St] = 24 === a ? 0 : a
                }), z(["a", "A"], function(e, t, n) {
                    n._isPm = n._locale.isPM(e), n._meridiem = e
                }), z(["h", "hh"], function(e, t, n) {
                    t[St] = M(e), h(n).bigHour = !0
                }), z("hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[St] = M(e.substr(0, a)), t[Ot] = M(e.substr(a)), h(n).bigHour = !0
                }), z("hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[St] = M(e.substr(0, a)), t[Ot] = M(e.substr(a, 2)), t[jt] = M(e.substr(r)), h(n).bigHour = !0
                }), z("Hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[St] = M(e.substr(0, a)), t[Ot] = M(e.substr(a))
                }), z("Hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[St] = M(e.substr(0, a)), t[Ot] = M(e.substr(a, 2)), t[jt] = M(e.substr(r))
                });
                var qt, Kt = j("Hours", !0),
                    Zt = {
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
                        months: Et,
                        monthsShort: Wt,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: zt,
                        weekdaysMin: Jt,
                        weekdaysShort: Bt,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    Xt = {},
                    Qt = {},
                    $t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    en = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    tn = /Z|[+-]\d\d(?::?\d\d)?/,
                    nn = [
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
                    an = [
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
                    rn = /^\/?Date\((\-?\d+)/i,
                    sn = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
                t.createFromInputFallback = L("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
                var on = L("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Me.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : _()
                    }),
                    dn = L("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Me.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : _()
                    }),
                    un = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                ke("Z", ":"), ke("ZZ", ""), I("Z", Lt), I("ZZ", Lt), z(["Z", "ZZ"], function(e, t, n) {
                    n._useUTC = !0, n._tzm = Ye(Lt, e)
                });
                var ln = /([\+\-]|\d\d)/gi;
                t.updateOffset = function() {};
                var cn = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    hn = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                Se.fn = be.prototype, Se.invalid = function() {
                    return Se(NaN)
                };
                var mn = He(1, "add"),
                    _n = He(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var fn = L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });
                A(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), A(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), Fe("gggg", "weekYear"), Fe("ggggg", "weekYear"), Fe("GGGG", "isoWeekYear"), Fe("GGGGG", "isoWeekYear"), x("weekYear", "gg"), x("isoWeekYear", "GG"), O("weekYear", 1), O("isoWeekYear", 1), I("G", vt), I("g", vt), I("GG", mt, ut), I("gg", mt, ut), I("GGGG", gt, ct), I("gggg", gt, ct), I("GGGGG", yt, ht), I("ggggg", yt, ht), B(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
                    t[a.substr(0, 2)] = M(e)
                }), B(["gg", "GG"], function(e, n, a, r) {
                    n[r] = t.parseTwoDigitYear(e)
                }), A("Q", 0, "Qo", "quarter"), x("quarter", "Q"), O("quarter", 7), I("Q", dt), z("Q", function(e, t) {
                    t[xt] = 3 * (M(e) - 1)
                }), A("D", ["DD", 2], "Do", "date"), x("date", "D"), O("date", 9), I("D", mt), I("DD", mt, ut), I("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), z(["D", "DD"], Tt), z("Do", function(e, t) {
                    t[Tt] = M(e.match(mt)[0])
                });
                var pn = j("Date", !0);
                A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), x("dayOfYear", "DDD"), O("dayOfYear", 4), I("DDD", pt), I("DDDD", lt), z(["DDD", "DDDD"], function(e, t, n) {
                    n._dayOfYear = M(e)
                }), A("m", ["mm", 2], 0, "minute"), x("minute", "m"), O("minute", 14), I("m", mt), I("mm", mt, ut), z(["m", "mm"], Ot);
                var gn = j("Minutes", !1);
                A("s", ["ss", 2], 0, "second"), x("second", "s"), O("second", 15), I("s", mt), I("ss", mt, ut), z(["s", "ss"], jt);
                var yn = j("Seconds", !1);
                A("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), A(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), A(0, ["SSS", 3], 0, "millisecond"), A(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), A(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), A(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), A(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), A(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), A(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), x("millisecond", "ms"), O("millisecond", 16), I("S", pt, dt), I("SS", pt, ut), I("SSS", pt, lt);
                var Mn;
                for (Mn = "SSSS"; Mn.length <= 9; Mn += "S") I(Mn, Mt);
                for (Mn = "S"; Mn.length <= 9; Mn += "S") z(Mn, We);
                var vn = j("Milliseconds", !1);
                A("z", 0, 0, "zoneAbbr"), A("zz", 0, 0, "zoneName");
                var bn = p.prototype;
                bn.add = mn, bn.calendar = function(e, n) {
                    var a = e || Me(),
                        r = we(a, this).startOf("day"),
                        i = t.calendarFormat(this, r) || "sameElse",
                        s = n && (k(n[i]) ? n[i].call(this, a) : n[i]);
                    return this.format(s || this.localeData().calendar(i, this, Me(a)))
                }, bn.clone = function() {
                    return new p(this)
                }, bn.diff = function(e, t, n) {
                    var a, r, i, s;
                    return this.isValid() && (a = we(e, this)).isValid() ? (r = 6e4 * (a.utcOffset() - this.utcOffset()), "year" === (t = T(t)) || "month" === t || "quarter" === t ? (s = function(e, t) {
                        var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            i = e.clone().add(r, "months");
                        return t - i < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(r + 1, "months"), a = (t - i) / (n - i)), -(r + a) || 0
                    }(this, a), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - a, s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), n ? s : y(s)) : NaN
                }, bn.endOf = function(e) {
                    return void 0 === (e = T(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }, bn.format = function(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var n = E(this, e);
                    return this.localeData().postformat(n)
                }, bn.from = function(e, t) {
                    return this.isValid() && (g(e) && e.isValid() || Me(e).isValid()) ? Se({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, bn.fromNow = function(e) {
                    return this.from(Me(), e)
                }, bn.to = function(e, t) {
                    return this.isValid() && (g(e) && e.isValid() || Me(e).isValid()) ? Se({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, bn.toNow = function(e) {
                    return this.to(Me(), e)
                }, bn.get = function(e) {
                    return e = T(e), k(this[e]) ? this[e]() : this
                }, bn.invalidAt = function() {
                    return h(this).overflow
                }, bn.isAfter = function(e, t) {
                    var n = g(e) ? e : Me(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = T(i(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
                }, bn.isBefore = function(e, t) {
                    var n = g(e) ? e : Me(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = T(i(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
                }, bn.isBetween = function(e, t, n, a) {
                    return ("(" === (a = a || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
                }, bn.isSame = function(e, t) {
                    var n, a = g(e) ? e : Me(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = T(t || "millisecond")) ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
                }, bn.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, bn.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, bn.isValid = function() {
                    return m(this)
                }, bn.lang = fn, bn.locale = Pe, bn.localeData = Ae, bn.max = dn, bn.min = on, bn.parsingFlags = function() {
                    return l({}, h(this))
                }, bn.set = function(e, t) {
                    if ("object" == typeof e)
                        for (var n = function(e) {
                                var t = [];
                                for (var n in e) t.push({
                                    unit: n,
                                    priority: at[n]
                                });
                                return t.sort(function(e, t) {
                                    return e.priority - t.priority
                                }), t
                            }(e = S(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]);
                    else if (e = T(e), k(this[e])) return this[e](t);
                    return this
                }, bn.startOf = function(e) {
                    switch (e = T(e)) {
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
                }, bn.subtract = _n, bn.toArray = function() {
                    return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
                }, bn.toObject = function() {
                    return {
                        years: this.year(),
                        months: this.month(),
                        date: this.date(),
                        hours: this.hours(),
                        minutes: this.minutes(),
                        seconds: this.seconds(),
                        milliseconds: this.milliseconds()
                    }
                }, bn.toDate = function() {
                    return new Date(this.valueOf())
                }, bn.toISOString = function() {
                    if (!this.isValid()) return null;
                    var e = this.clone().utc();
                    return e.year() < 0 || e.year() > 9999 ? E(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : k(Date.prototype.toISOString) ? this.toDate().toISOString() : E(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }, bn.inspect = function() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var n = "[" + e + '("]',
                        a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }, bn.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, bn.toString = function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, bn.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, bn.valueOf = function() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }, bn.creationData = function() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }, bn.year = Rt, bn.isLeapYear = function() {
                    return Z(this.year())
                }, bn.weekYear = function(e) {
                    return Ee.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, bn.isoWeekYear = function(e) {
                    return Ee.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, bn.quarter = bn.quarters = function(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }, bn.month = G, bn.daysInMonth = function() {
                    return V(this.year(), this.month())
                }, bn.week = bn.weeks = function(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, bn.isoWeek = bn.isoWeeks = function(e) {
                    var t = ee(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, bn.weeksInYear = function() {
                    var e = this.localeData()._week;
                    return te(this.year(), e.dow, e.doy)
                }, bn.isoWeeksInYear = function() {
                    return te(this.year(), 1, 4)
                }, bn.date = pn, bn.day = bn.days = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = function(e, t) {
                        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                    }(e, this.localeData()), this.add(e - t, "d")) : t
                }, bn.weekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }, bn.isoWeekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = function(e, t) {
                            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                        }(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }, bn.dayOfYear = function(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }, bn.hour = bn.hours = Kt, bn.minute = bn.minutes = gn, bn.second = bn.seconds = yn, bn.millisecond = bn.milliseconds = vn, bn.utcOffset = function(e, n, a) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Ye(Lt, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && n && (r = xe(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!n || this._changeInProgress ? Ce(this, Se(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? i : xe(this)
                }, bn.utc = function(e) {
                    return this.utcOffset(0, e)
                }, bn.local = function(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(xe(this), "m")), this
                }, bn.parseZone = function() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = Ye(bt, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }, bn.hasAlignedHourOffset = function(e) {
                    return !!this.isValid() && (e = e ? Me(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }, bn.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, bn.isLocal = function() {
                    return !!this.isValid() && !this._isUTC
                }, bn.isUtcOffset = function() {
                    return !!this.isValid() && this._isUTC
                }, bn.isUtc = Te, bn.isUTC = Te, bn.zoneAbbr = function() {
                    return this._isUTC ? "UTC" : ""
                }, bn.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, bn.dates = L("dates accessor is deprecated. Use date instead.", pn), bn.months = L("months accessor is deprecated. Use month instead", G), bn.years = L("years accessor is deprecated. Use year instead", Rt), bn.zone = L("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }), bn.isDSTShifted = L("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                    if (!i(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (f(e, this), (e = ge(e))._a) {
                        var t = e._isUTC ? c(e._a) : Me(e._a);
                        this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                });
                var Ln = w.prototype;
                Ln.calendar = function(e, t, n) {
                    var a = this._calendar[e] || this._calendar.sameElse;
                    return k(a) ? a.call(t, n) : a
                }, Ln.longDateFormat = function(e) {
                    var t = this._longDateFormat[e],
                        n = this._longDateFormat[e.toUpperCase()];
                    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }, Ln.invalidDate = function() {
                    return this._invalidDate
                }, Ln.ordinal = function(e) {
                    return this._ordinal.replace("%d", e)
                }, Ln.preparse = Ie, Ln.postformat = Ie, Ln.relativeTime = function(e, t, n, a) {
                    var r = this._relativeTime[n];
                    return k(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
                }, Ln.pastFuture = function(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return k(n) ? n(t) : n.replace(/%s/i, t)
                }, Ln.set = function(e) {
                    var t, n;
                    for (n in e) k(t = e[n]) ? this[n] = t : this["_" + n] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, Ln.months = function(e, t) {
                    return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ft).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
                }, Ln.monthsShort = function(e, t) {
                    return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ft.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, Ln.monthsParse = function(e, t, n) {
                    var a, r, i;
                    if (this._monthsParseExact) return function(e, t, n) {
                        var a, r, i, s = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) i = c([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
                        return n ? "MMM" === t ? -1 !== (r = At.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = At.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = At.call(this._shortMonthsParse, s)) ? r : -1 !== (r = At.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = At.call(this._longMonthsParse, s)) ? r : -1 !== (r = At.call(this._shortMonthsParse, s)) ? r : null
                    }.call(this, e, t, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                        if (r = c([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                        if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                        if (!n && this._monthsParse[a].test(e)) return a
                    }
                }, Ln.monthsRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || q.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Nt), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, Ln.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || q.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = It), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, Ln.week = function(e) {
                    return ee(e, this._week.dow, this._week.doy).week
                }, Ln.firstDayOfYear = function() {
                    return this._week.doy
                }, Ln.firstDayOfWeek = function() {
                    return this._week.dow
                }, Ln.weekdays = function(e, t) {
                    return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }, Ln.weekdaysMin = function(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }, Ln.weekdaysShort = function(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }, Ln.weekdaysParse = function(e, t, n) {
                    var a, r, i;
                    if (this._weekdaysParseExact) return function(e, t, n) {
                        var a, r, i, s = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) i = c([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
                        return n ? "dddd" === t ? -1 !== (r = At.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = At.call(this._weekdaysParse, s)) ? r : -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = At.call(this._weekdaysParse, s)) ? r : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = At.call(this._weekdaysParse, s)) ? r : -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : null
                    }.call(this, e, t, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                        if (r = c([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                        if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                        if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                        if (!n && this._weekdaysParse[a].test(e)) return a
                    }
                }, Ln.weekdaysRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || ne.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Vt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, Ln.weekdaysShortRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || ne.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ut), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, Ln.weekdaysMinRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || ne.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }, Ln.isPM = function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }, Ln.meridiem = function(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }, de("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === M(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), t.lang = L("moment.lang is deprecated. Use moment.locale instead.", de), t.langData = L("moment.langData is deprecated. Use moment.localeData instead.", le);
                var Dn = Math.abs,
                    kn = Ge("ms"),
                    Yn = Ge("s"),
                    wn = Ge("m"),
                    xn = Ge("h"),
                    Tn = Ge("d"),
                    Sn = Ge("w"),
                    On = Ge("M"),
                    jn = Ge("y"),
                    Hn = qe("milliseconds"),
                    Cn = qe("seconds"),
                    Pn = qe("minutes"),
                    An = qe("hours"),
                    Fn = qe("days"),
                    En = qe("months"),
                    Wn = qe("years"),
                    In = Math.round,
                    Nn = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    Rn = Math.abs,
                    zn = be.prototype;
                return zn.isValid = function() {
                        return this._isValid
                    }, zn.abs = function() {
                        var e = this._data;
                        return this._milliseconds = Dn(this._milliseconds), this._days = Dn(this._days), this._months = Dn(this._months), e.milliseconds = Dn(e.milliseconds), e.seconds = Dn(e.seconds), e.minutes = Dn(e.minutes), e.hours = Dn(e.hours), e.months = Dn(e.months), e.years = Dn(e.years), this
                    }, zn.add = function(e, t) {
                        return Be(this, e, t, 1)
                    }, zn.subtract = function(e, t) {
                        return Be(this, e, t, -1)
                    }, zn.as = function(e) {
                        if (!this.isValid()) return NaN;
                        var t, n, a = this._milliseconds;
                        if ("month" === (e = T(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + Ve(t), "month" === e ? n : n / 12;
                        switch (t = this._days + Math.round(Ue(this._months)), e) {
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
                    }, zn.asMilliseconds = kn, zn.asSeconds = Yn, zn.asMinutes = wn, zn.asHours = xn, zn.asDays = Tn, zn.asWeeks = Sn, zn.asMonths = On, zn.asYears = jn, zn.valueOf = function() {
                        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN
                    }, zn._bubble = function() {
                        var e, t, n, a, r, i = this._milliseconds,
                            s = this._days,
                            o = this._months,
                            d = this._data;
                        return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * Je(Ue(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = y(i / 1e3), d.seconds = e % 60, t = y(e / 60), d.minutes = t % 60, n = y(t / 60), d.hours = n % 24, s += y(n / 24), r = y(Ve(s)), o += r, s -= Je(Ue(r)), a = y(o / 12), o %= 12, d.days = s, d.months = o, d.years = a, this
                    }, zn.get = function(e) {
                        return e = T(e), this.isValid() ? this[e + "s"]() : NaN
                    }, zn.milliseconds = Hn, zn.seconds = Cn, zn.minutes = Pn, zn.hours = An, zn.days = Fn, zn.weeks = function() {
                        return y(this.days() / 7)
                    }, zn.months = En, zn.years = Wn, zn.humanize = function(e) {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var t = this.localeData(),
                            n = function(e, t, n) {
                                var a = Se(e).abs(),
                                    r = In(a.as("s")),
                                    i = In(a.as("m")),
                                    s = In(a.as("h")),
                                    o = In(a.as("d")),
                                    d = In(a.as("M")),
                                    u = In(a.as("y")),
                                    l = r <= Nn.ss && ["s", r] || r < Nn.s && ["ss", r] || i <= 1 && ["m"] || i < Nn.m && ["mm", i] || s <= 1 && ["h"] || s < Nn.h && ["hh", s] || o <= 1 && ["d"] || o < Nn.d && ["dd", o] || d <= 1 && ["M"] || d < Nn.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                                return l[2] = t, l[3] = +e > 0, l[4] = n,
                                    function(e, t, n, a, r) {
                                        return r.relativeTime(t || 1, !!n, e, a)
                                    }.apply(null, l)
                            }(this, !e, t);
                        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
                    }, zn.toISOString = Ke, zn.toString = Ke, zn.toJSON = Ke, zn.locale = Pe, zn.localeData = Ae, zn.toIsoString = L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ke), zn.lang = fn, A("X", 0, 0, "unix"), A("x", 0, 0, "valueOf"), I("x", vt), I("X", /[+-]?\d+(\.\d{1,3})?/), z("X", function(e, t, n) {
                        n._d = new Date(1e3 * parseFloat(e, 10))
                    }), z("x", function(e, t, n) {
                        n._d = new Date(M(e))
                    }), t.version = "2.18.1",
                    function(e) {
                        Ze = e
                    }(Me), t.fn = bn, t.min = function() {
                        return ve("isBefore", [].slice.call(arguments, 0))
                    }, t.max = function() {
                        return ve("isAfter", [].slice.call(arguments, 0))
                    }, t.now = function() {
                        return Date.now ? Date.now() : +new Date
                    }, t.utc = c, t.unix = function(e) {
                        return Me(1e3 * e)
                    }, t.months = function(e, t) {
                        return Re(e, t, "months")
                    }, t.isDate = o, t.locale = de, t.invalid = _, t.duration = Se, t.isMoment = g, t.weekdays = function(e, t, n) {
                        return ze(e, t, n, "weekdays")
                    }, t.parseZone = function() {
                        return Me.apply(null, arguments).parseZone()
                    }, t.localeData = le, t.isDuration = Le, t.monthsShort = function(e, t) {
                        return Re(e, t, "monthsShort")
                    }, t.weekdaysMin = function(e, t, n) {
                        return ze(e, t, n, "weekdaysMin")
                    }, t.defineLocale = ue, t.updateLocale = function(e, t) {
                        if (null != t) {
                            var n, a = Zt;
                            null != Xt[e] && (a = Xt[e]._config), (n = new w(t = Y(a, t))).parentLocale = Xt[e], Xt[e] = n, de(e)
                        } else null != Xt[e] && (null != Xt[e].parentLocale ? Xt[e] = Xt[e].parentLocale : null != Xt[e] && delete Xt[e]);
                        return Xt[e]
                    }, t.locales = function() {
                        return tt(Xt)
                    }, t.weekdaysShort = function(e, t, n) {
                        return ze(e, t, n, "weekdaysShort")
                    }, t.normalizeUnits = T, t.relativeTimeRounding = function(e) {
                        return void 0 === e ? In : "function" == typeof e && (In = e, !0)
                    }, t.relativeTimeThreshold = function(e, t) {
                        return void 0 !== Nn[e] && (void 0 === t ? Nn[e] : (Nn[e] = t, "s" === e && (Nn.ss = t - 1), !0))
                    }, t.calendarFormat = function(e, t) {
                        var n = e.diff(t, "days", !0);
                        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                    }, t.prototype = bn, t
            })
        }).call(t, n("3IRH")(e))
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
                localize: function(t, n, a) {
                    a = a || {};
                    var r;
                    return r = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), a.addSuffix ? a.comparison > 0 ? "in " + r : r + " ago" : r
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var a = n("u/4p"),
            r = 6e4,
            i = 6048e5;
        e.exports = function(e, t, n) {
            var s = a(e, n),
                o = a(t, n),
                d = s.getTime() - s.getTimezoneOffset() * r,
                u = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((d - u) / i)
        }
    },
    QV34: function(e, t, n) {
        "use strict";
        var a = n("iO9N"),
            r = n("IbXy");
        e.exports = function(e) {
            var t = a.noop;
            e.LinearScaleBase = e.Scale.extend({
                getRightValue: function(t) {
                    return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                },
                handleTickRangeOptions: function() {
                    var e = this.options.ticks;
                    if (e.beginAtZero) {
                        var t = a.sign(this.min),
                            n = a.sign(this.max);
                        t < 0 && n < 0 ? this.max = 0 : t > 0 && n > 0 && (this.min = 0)
                    }
                    var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                        i = void 0 !== e.max || void 0 !== e.suggestedMax;
                    void 0 !== e.min ? this.min = e.min : void 0 !== e.suggestedMin && (null === this.min ? this.min = e.suggestedMin : this.min = Math.min(this.min, e.suggestedMin)), void 0 !== e.max ? this.max = e.max : void 0 !== e.suggestedMax && (null === this.max ? this.max = e.suggestedMax : this.max = Math.max(this.max, e.suggestedMax)), r !== i && this.min >= this.max && (r ? this.max = this.min + 1 : this.min = this.max - 1), this.min === this.max && (this.max++, e.beginAtZero || this.min--)
                },
                getTickLimit: t,
                handleDirectionalChanges: t,
                buildTicks: function() {
                    var e = this.options.ticks,
                        t = this.getTickLimit(),
                        n = {
                            maxTicks: t = Math.max(2, t),
                            min: e.min,
                            max: e.max,
                            stepSize: a.valueOrDefault(e.fixedStepSize, e.stepSize)
                        },
                        i = this.ticks = r.generators.linear(n, this);
                    this.handleDirectionalChanges(), this.max = a.max(i), this.min = a.min(i), e.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
                },
                convertTicksToLabels: function() {
                    this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(this)
                }
            })
        }
    },
    Qbo9: function(e, t, n) {
        var a = n("Moxe");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    Qor1: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }
        var r = n("k7DW"),
            i = n("wGD1"),
            s = n("iO9N"),
            o = r.global.defaultColor;
        r._set("global", {
            elements: {
                point: {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: o,
                    borderColor: o,
                    borderWidth: 1,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }
            }
        }), e.exports = i.extend({
            inRange: function(e, t) {
                var n = this._view;
                return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
            },
            inLabelRange: a,
            inXRange: a,
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
                    n = this._model,
                    a = this._chart.ctx,
                    i = t.pointStyle,
                    d = t.radius,
                    u = t.x,
                    l = t.y,
                    c = s.color,
                    h = 0;
                t.skip || (a.strokeStyle = t.borderColor || o, a.lineWidth = s.valueOrDefault(t.borderWidth, r.global.elements.point.borderWidth), a.fillStyle = t.backgroundColor || o, void 0 !== e && (n.x < e.left || 1.01 * e.right < n.x || n.y < e.top || 1.01 * e.bottom < n.y) && (n.x < e.left ? h = (u - n.x) / (e.left - n.x) : 1.01 * e.right < n.x ? h = (n.x - u) / (n.x - e.right) : n.y < e.top ? h = (l - n.y) / (e.top - n.y) : 1.01 * e.bottom < n.y && (h = (n.y - l) / (n.y - e.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), s.canvas.drawPoint(a, i, d, u, l))
            }
        })
    },
    Qxz6: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getFullYear() === r.getFullYear()
        }
    },
    RnJI: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    SHOI: function(e, t, n) {
        var a = n("xA5w"),
            r = n("Jvcu");
        e.exports = function(e, t, n) {
            var i = n ? Number(n.weekStartsOn) || 0 : 0,
                s = a(e),
                o = Number(t),
                d = s.getDay();
            return r(s, ((o % 7 + 7) % 7 < i ? 7 : 0) + o - d)
        }
    },
    SJLv: function(e, t) {
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var a in e) e.hasOwnProperty(a) && t.push(a);
            var r = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + r.join("|") + "|.)", "g")
        }
    },
    SZZR: function(e, t, n) {
        var a = n("I7cV");
        e.exports = function(e) {
            return a(e, {
                weekStartsOn: 1
            })
        }
    },
    Sjoy: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "T/Ln": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getMonth(),
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    TWHA: function(e, t, n) {
        var a = n("YjuW"),
            r = function() {
                return new u
            };
        for (var i in a) {
            r[i + "Raw"] = function(e) {
                return function(t) {
                    return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
                }
            }(i);
            var s = /(\w+)2(\w+)/.exec(i),
                o = s[1],
                d = s[2];
            (r[o] = r[o] || {})[d] = r[i] = function(e) {
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
    ToRI: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setSeconds(r), n
        }
    },
    Tqun: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    Tv4R: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, i = a(e).getTime();
            return t.forEach(function(e) {
                var t = a(e),
                    s = Math.abs(i - t.getTime());
                (void 0 === n || s < r) && (n = t, r = s)
            }), n
        }
    },
    "Uu+E": function(e, t, n) {
        var a = n("xA5w"),
            r = n("iRXW"),
            i = n("nizW");
        e.exports = function(e, t) {
            var n = a(e),
                s = Number(t),
                o = i(n, r(n)),
                d = new Date(0);
            return d.setFullYear(s, 0, 4), d.setHours(0, 0, 0, 0), (n = r(d)).setDate(n.getDate() + o), n
        }
    },
    V0td: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    V4qH: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    VK9h: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    VRu6: function(e, t, n) {
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
        var i = n("k7DW"),
            s = n("wGD1"),
            o = n("iO9N"),
            d = n("IbXy");
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
                return o.isArray(t) ? o.longestText(e, n, t) : e.measureText(t).width
            }

            function n(e) {
                var t = o.valueOrDefault,
                    n = i.global,
                    a = t(e.fontSize, n.defaultFontSize),
                    r = t(e.fontStyle, n.defaultFontStyle),
                    s = t(e.fontFamily, n.defaultFontFamily);
                return {
                    size: a,
                    style: r,
                    family: s,
                    font: o.fontString(a, r, s)
                }
            }

            function d(e) {
                return o.options.toLineHeight(o.valueOrDefault(e.lineHeight, 1.2), o.valueOrDefault(e.fontSize, i.global.defaultFontSize))
            }
            e.Scale = s.extend({
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
                    !1 === e.minor && (e.minor = {
                        display: !1
                    }), !1 === e.major && (e.major = {
                        display: !1
                    });
                    for (var t in e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                },
                beforeUpdate: function() {
                    o.callback(this.options.beforeUpdate, [this])
                },
                update: function(e, t, n) {
                    var a, r, i, s, d, u;
                    for (this.beforeUpdate(), this.maxWidth = e, this.maxHeight = t, this.margins = o.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n), this.longestTextCache = this.longestTextCache || {}, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.beforeBuildTicks(), d = this.buildTicks() || [], this.afterBuildTicks(), this.beforeTickToLabelConversion(), i = this.convertTicksToLabels(d) || this.ticks, this.afterTickToLabelConversion(), this.ticks = i, a = 0, r = i.length; a < r; ++a) s = i[a], (u = d[a]) ? u.label = s : d.push(u = {
                        label: s,
                        major: !1
                    });
                    return this._ticks = d, this.beforeCalculateTickRotation(), this.calculateTickRotation(), this.afterCalculateTickRotation(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: function() {
                    o.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function() {
                    o.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                },
                afterSetDimensions: function() {
                    o.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function() {
                    o.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: o.noop,
                afterDataLimits: function() {
                    o.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function() {
                    o.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: o.noop,
                afterBuildTicks: function() {
                    o.callback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function() {
                    o.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function() {
                    var e = this.options.ticks;
                    this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                },
                afterTickToLabelConversion: function() {
                    o.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function() {
                    o.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function() {
                    var e = this.ctx,
                        t = this.options.ticks,
                        r = a(this._ticks),
                        i = n(t);
                    e.font = i.font;
                    var s = t.minRotation || 0;
                    if (r.length && this.options.display && this.isHorizontal())
                        for (var d, u = o.longestText(e, i.font, r, this.longestTextCache), l = u, c = this.getPixelForTick(1) - this.getPixelForTick(0) - 6; l > c && s < t.maxRotation;) {
                            var h = o.toRadians(s);
                            if (d = Math.cos(h), Math.sin(h) * u > this.maxHeight) {
                                s--;
                                break
                            }
                            s++, l = d * u
                        }
                    this.labelRotation = s
                },
                afterCalculateTickRotation: function() {
                    o.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function() {
                    o.callback(this.options.beforeFit, [this])
                },
                fit: function() {
                    var e = this.minSize = {
                            width: 0,
                            height: 0
                        },
                        r = a(this._ticks),
                        i = this.options,
                        s = i.ticks,
                        u = i.scaleLabel,
                        l = i.gridLines,
                        c = i.display,
                        h = this.isHorizontal(),
                        m = n(s),
                        _ = i.gridLines.tickMarkLength;
                    if (e.width = h ? this.isFullWidth() ? this.maxWidth - this.margins.left - this.margins.right : this.maxWidth : c && l.drawTicks ? _ : 0, e.height = h ? c && l.drawTicks ? _ : 0 : this.maxHeight, u.display && c) {
                        var f = d(u) + o.options.toPadding(u.padding).height;
                        h ? e.height += f : e.width += f
                    }
                    if (s.display && c) {
                        var p = o.longestText(this.ctx, m.font, r, this.longestTextCache),
                            g = o.numberOfLabelLines(r),
                            y = .5 * m.size,
                            M = this.options.ticks.padding;
                        if (h) {
                            this.longestLabelWidth = p;
                            var v = o.toRadians(this.labelRotation),
                                b = Math.cos(v),
                                L = Math.sin(v) * p + m.size * g + y * (g - 1) + y;
                            e.height = Math.min(this.maxHeight, e.height + L + M), this.ctx.font = m.font;
                            var D = t(this.ctx, r[0], m.font),
                                k = t(this.ctx, r[r.length - 1], m.font);
                            0 !== this.labelRotation ? (this.paddingLeft = "bottom" === i.position ? b * D + 3 : b * y + 3, this.paddingRight = "bottom" === i.position ? b * y + 3 : b * k + 3) : (this.paddingLeft = D / 2 + 3, this.paddingRight = k / 2 + 3)
                        } else s.mirror ? p = 0 : p += M + y, e.width = Math.min(this.maxWidth, e.width + p), this.paddingTop = m.size / 2, this.paddingBottom = m.size / 2
                    }
                    this.handleMargins(), this.width = e.width, this.height = e.height
                },
                handleMargins: function() {
                    this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingTop = Math.max(this.paddingTop - this.margins.top, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0), this.paddingBottom = Math.max(this.paddingBottom - this.margins.bottom, 0))
                },
                afterFit: function() {
                    o.callback(this.options.afterFit, [this])
                },
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function() {
                    return this.options.fullWidth
                },
                getRightValue: function(e) {
                    if (o.isNullOrUndef(e)) return NaN;
                    if ("number" == typeof e && !isFinite(e)) return NaN;
                    if (e)
                        if (this.isHorizontal()) {
                            if (void 0 !== e.x) return this.getRightValue(e.x)
                        } else if (void 0 !== e.y) return this.getRightValue(e.y);
                    return e
                },
                getLabelForIndex: o.noop,
                getPixelForValue: o.noop,
                getValueForPixel: o.noop,
                getPixelForTick: function(e) {
                    var t = this.options.offset;
                    if (this.isHorizontal()) {
                        var n = (this.width - (this.paddingLeft + this.paddingRight)) / Math.max(this._ticks.length - (t ? 0 : 1), 1),
                            a = n * e + this.paddingLeft;
                        t && (a += n / 2);
                        var r = this.left + Math.round(a);
                        return r += this.isFullWidth() ? this.margins.left : 0
                    }
                    var i = this.height - (this.paddingTop + this.paddingBottom);
                    return this.top + e * (i / (this._ticks.length - 1))
                },
                getPixelForDecimal: function(e) {
                    if (this.isHorizontal()) {
                        var t = (this.width - (this.paddingLeft + this.paddingRight)) * e + this.paddingLeft,
                            n = this.left + Math.round(t);
                        return n += this.isFullWidth() ? this.margins.left : 0
                    }
                    return this.top + e * this.height
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
                    var t, n, a, r, i = this.isHorizontal(),
                        s = this.options.ticks.minor,
                        d = e.length,
                        u = o.toRadians(this.labelRotation),
                        l = Math.cos(u),
                        c = this.longestLabelWidth * l,
                        h = [];
                    for (s.maxTicksLimit && (r = s.maxTicksLimit), i && (t = !1, (c + s.autoSkipPadding) * d > this.width - (this.paddingLeft + this.paddingRight) && (t = 1 + Math.floor((c + s.autoSkipPadding) * d / (this.width - (this.paddingLeft + this.paddingRight)))), r && d > r && (t = Math.max(t, Math.floor(d / r)))), n = 0; n < d; n++) a = e[n], ((t > 1 && n % t > 0 || n % t == 0 && n + t >= d) && n !== d - 1 || o.isNullOrUndef(a.label)) && delete a.label, h.push(a);
                    return h
                },
                draw: function(e) {
                    var t = this,
                        a = t.options;
                    if (a.display) {
                        var s = t.ctx,
                            u = i.global,
                            l = a.ticks.minor,
                            c = a.ticks.major || l,
                            h = a.gridLines,
                            m = a.scaleLabel,
                            _ = 0 !== t.labelRotation,
                            f = t.isHorizontal(),
                            p = l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            g = o.valueOrDefault(l.fontColor, u.defaultFontColor),
                            y = n(l),
                            M = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                            v = n(c),
                            b = h.drawTicks ? h.tickMarkLength : 0,
                            L = o.valueOrDefault(m.fontColor, u.defaultFontColor),
                            D = n(m),
                            k = o.options.toPadding(m.padding),
                            Y = o.toRadians(t.labelRotation),
                            w = [],
                            x = "right" === a.position ? t.left : t.right - b,
                            T = "right" === a.position ? t.left + b : t.right,
                            S = "bottom" === a.position ? t.top : t.bottom - b,
                            O = "bottom" === a.position ? t.top + b : t.bottom;
                        if (o.each(p, function(n, i) {
                                if (void 0 !== n.label) {
                                    var s, d, c, m, g = n.label;
                                    i === t.zeroLineIndex && a.offset === h.offsetGridLines ? (s = h.zeroLineWidth, d = h.zeroLineColor, c = h.zeroLineBorderDash, m = h.zeroLineBorderDashOffset) : (s = o.valueAtIndexOrDefault(h.lineWidth, i), d = o.valueAtIndexOrDefault(h.color, i), c = o.valueOrDefault(h.borderDash, u.borderDash), m = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                                    var y, M, v, L, D, k, j, H, C, P, A = "middle",
                                        F = "middle",
                                        E = l.padding;
                                    if (f) {
                                        var W = b + E;
                                        "bottom" === a.position ? (F = _ ? "middle" : "top", A = _ ? "right" : "center", P = t.top + W) : (F = _ ? "middle" : "bottom", A = _ ? "left" : "center", P = t.bottom - W);
                                        var I = r(t, i, h.offsetGridLines && p.length > 1);
                                        I < t.left && (d = "rgba(0,0,0,0)"), I += o.aliasPixel(s), C = t.getPixelForTick(i) + l.labelOffset, y = v = D = j = I, M = S, L = O, k = e.top, H = e.bottom
                                    } else {
                                        var N, R = "left" === a.position;
                                        l.mirror ? (A = R ? "left" : "right", N = E) : (A = R ? "right" : "left", N = b + E), C = R ? t.right - N : t.left + N;
                                        var z = r(t, i, h.offsetGridLines && p.length > 1);
                                        z < t.top && (d = "rgba(0,0,0,0)"), z += o.aliasPixel(s), P = t.getPixelForTick(i) + l.labelOffset, y = x, v = T, D = e.left, j = e.right, M = L = k = H = z
                                    }
                                    w.push({
                                        tx1: y,
                                        ty1: M,
                                        tx2: v,
                                        ty2: L,
                                        x1: D,
                                        y1: k,
                                        x2: j,
                                        y2: H,
                                        labelX: C,
                                        labelY: P,
                                        glWidth: s,
                                        glColor: d,
                                        glBorderDash: c,
                                        glBorderDashOffset: m,
                                        rotation: -1 * Y,
                                        label: g,
                                        major: n.major,
                                        textBaseline: F,
                                        textAlign: A
                                    })
                                }
                            }), o.each(w, function(e) {
                                if (h.display && (s.save(), s.lineWidth = e.glWidth, s.strokeStyle = e.glColor, s.setLineDash && (s.setLineDash(e.glBorderDash), s.lineDashOffset = e.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(e.tx1, e.ty1), s.lineTo(e.tx2, e.ty2)), h.drawOnChartArea && (s.moveTo(e.x1, e.y1), s.lineTo(e.x2, e.y2)), s.stroke(), s.restore()), l.display) {
                                    s.save(), s.translate(e.labelX, e.labelY), s.rotate(e.rotation), s.font = e.major ? v.font : y.font, s.fillStyle = e.major ? M : g, s.textBaseline = e.textBaseline, s.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (o.isArray(t))
                                        for (var n = 0, a = 0; n < t.length; ++n) s.fillText("" + t[n], 0, a), a += 1.5 * y.size;
                                    else s.fillText(t, 0, 0);
                                    s.restore()
                                }
                            }), m.display) {
                            var j, H, C = 0,
                                P = d(m) / 2;
                            if (f) j = t.left + (t.right - t.left) / 2, H = "bottom" === a.position ? t.bottom - P - k.bottom : t.top + P + k.top;
                            else {
                                var A = "left" === a.position;
                                j = A ? t.left + P + k.top : t.right - P - k.top, H = t.top + (t.bottom - t.top) / 2, C = A ? -.5 * Math.PI : .5 * Math.PI
                            }
                            s.save(), s.translate(j, H), s.rotate(C), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = L, s.font = D.font, s.fillText(m.labelString, 0, 0), s.restore()
                        }
                        if (h.drawBorder) {
                            s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0);
                            var F = t.left,
                                E = t.right,
                                W = t.top,
                                I = t.bottom,
                                N = o.aliasPixel(s.lineWidth);
                            f ? (W = I = "top" === a.position ? t.bottom : t.top, W += N, I += N) : (F = E = "left" === a.position ? t.right : t.left, F += N, E += N), s.beginPath(), s.moveTo(F, W), s.lineTo(E, I), s.stroke()
                        }
                    }
                }
            })
        }
    },
    VaeB: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setMilliseconds(0), t
        }
    },
    Vz2w: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    WNGz: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setHours(0, 0, 0, 0), t
        }
    },
    WaEV: function(e, t, n) {
        var a = n("+ItH")();
        a.helpers = n("iO9N"), n("lG75")(a), a.defaults = n("k7DW"), a.Element = n("wGD1"), a.elements = n("L5rj"), a.Interaction = n("KC8c"), a.platform = n("2xI1"), n("4Uxm")(a), n("6rMk")(a), n("ghsk")(a), n("oQMP")(a), n("hAmm")(a), n("jJ84")(a), n("VRu6")(a), n("/jKm")(a), n("QV34")(a), n("40fB")(a), n("XhZS")(a), n("1Nt4")(a), n("sFo6")(a), n("Db81")(a), n("GBuA")(a), n("19SQ")(a), n("sFj2")(a), n("8uqi")(a), n("Fv8P")(a), n("2ddL")(a), n("mC8W")(a), n("vvdA")(a), n("wPWQ")(a), n("mg6x")(a), n("0gJx")(a), n("gCP2")(a), n("0C1O")(a), n("GqGk")(a);
        var r = [];
        r.push(n("A5K1")(a), n("ZmvM")(a), n("lRs/")(a)), a.plugins.register(r), a.platform.initialize(), e.exports = a, "undefined" != typeof window && (window.Chart = a), a.canvasHelpers = a.helpers.canvas
    },
    XFzU: function(e, t, n) {
        var a = n("GI7G");
        e.exports = function(e, t) {
            var n = a(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    XU1s: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    XhZS: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("iO9N"),
            i = n("IbXy");
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
                            i = a.data.datasets,
                            s = t.isHorizontal();
                        t.min = null, t.max = null;
                        var o = n.stacked;
                        if (void 0 === o && r.each(i, function(t, n) {
                                if (!o) {
                                    var r = a.getDatasetMeta(n);
                                    a.isDatasetVisible(n) && e(r) && void 0 !== r.stack && (o = !0)
                                }
                            }), n.stacked || o) {
                            var d = {};
                            r.each(i, function(i, s) {
                                var o = a.getDatasetMeta(s),
                                    u = [o.type, void 0 === n.stacked && void 0 === o.stack ? s : "", o.stack].join(".");
                                void 0 === d[u] && (d[u] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var l = d[u].positiveValues,
                                    c = d[u].negativeValues;
                                a.isDatasetVisible(s) && e(o) && r.each(i.data, function(e, a) {
                                    var r = +t.getRightValue(e);
                                    isNaN(r) || o.data[a].hidden || (l[a] = l[a] || 0, c[a] = c[a] || 0, n.relativePoints ? l[a] = 100 : r < 0 ? c[a] += r : l[a] += r)
                                })
                            }), r.each(d, function(e) {
                                var n = e.positiveValues.concat(e.negativeValues),
                                    a = r.min(n),
                                    i = r.max(n);
                                t.min = null === t.min ? a : Math.min(t.min, a), t.max = null === t.max ? i : Math.max(t.max, i)
                            })
                        } else r.each(i, function(n, i) {
                            var s = a.getDatasetMeta(i);
                            a.isDatasetVisible(i) && e(s) && r.each(n.data, function(e, n) {
                                var a = +t.getRightValue(e);
                                isNaN(a) || s.data[n].hidden || (null === t.min ? t.min = a : a < t.min && (t.min = a), null === t.max ? t.max = a : a > t.max && (t.max = a))
                            })
                        });
                        t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e, t = this.options.ticks;
                        if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50));
                        else {
                            var n = r.valueOrDefault(t.fontSize, a.global.defaultFontSize);
                            e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
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
                        var t, n = this.start,
                            a = +this.getRightValue(e),
                            r = this.end - n;
                        return this.isHorizontal() ? (t = this.left + this.width / r * (a - n), Math.round(t)) : (t = this.bottom - this.height / r * (a - n), Math.round(t))
                    },
                    getValueForPixel: function(e) {
                        var t = this.isHorizontal(),
                            n = t ? this.width : this.height,
                            a = (t ? e - this.left : this.bottom - e) / n;
                        return this.start + (this.end - this.start) * a
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.ticksAsNumbers[e])
                    }
                });
            e.scaleService.registerScaleType("linear", n, t)
        }
    },
    XlWM: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "XzD+": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "YBA/": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    YPf8: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 5 === a(e).getDay()
        }
    },
    YPjl: function(e, t, n) {
        var a = n("xA5w"),
            r = n("Jvcu"),
            i = n("AZvW");
        e.exports = function(e, t) {
            var n = a(e),
                s = Number(t),
                o = i(n);
            return r(n, s - o)
        }
    },
    YRFD: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e).getTime(),
                r = a(t).getTime();
            return n > r ? -1 : n < r ? 1 : 0
        }
    },
    YXlc: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    YjuW: function(e, t) {
        function n(e) {
            var t, n, a, r = e[0] / 255,
                i = e[1] / 255,
                s = e[2] / 255,
                o = Math.min(r, i, s),
                d = Math.max(r, i, s),
                u = d - o;
            return d == o ? t = 0 : r == d ? t = (i - s) / u : i == d ? t = 2 + (s - r) / u : s == d && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = (o + d) / 2, n = d == o ? 0 : a <= .5 ? u / (d + o) : u / (2 - d - o), [t, 100 * n, 100 * a]
        }

        function a(e) {
            var t, n, a, r = e[0],
                i = e[1],
                s = e[2],
                o = Math.min(r, i, s),
                d = Math.max(r, i, s),
                u = d - o;
            return n = 0 == d ? 0 : u / d * 1e3 / 10, d == o ? t = 0 : r == d ? t = (i - s) / u : i == d ? t = 2 + (s - r) / u : s == d && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = d / 255 * 1e3 / 10, [t, n, a]
        }

        function i(e) {
            var t = e[0],
                a = e[1],
                r = e[2];
            return [n(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(a, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(a, r)))]
        }

        function s(e) {
            var t, n, a, r, i = e[0] / 255,
                s = e[1] / 255,
                o = e[2] / 255;
            return r = Math.min(1 - i, 1 - s, 1 - o), t = (1 - i - r) / (1 - r) || 0, n = (1 - s - r) / (1 - r) || 0, a = (1 - o - r) / (1 - r) || 0, [100 * t, 100 * n, 100 * a, 100 * r]
        }

        function o(e) {
            return k[JSON.stringify(e)]
        }

        function d(e) {
            var t = e[0] / 255,
                n = e[1] / 255,
                a = e[2] / 255;
            return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * a), 100 * (.0193 * t + .1192 * n + .9505 * a)]
        }

        function u(e) {
            var t, n, a, r = d(e),
                i = r[0],
                s = r[1],
                o = r[2];
            return i /= 95.047, s /= 100, o /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, t = 116 * s - 16, n = 500 * (i - s), a = 200 * (s - o), [t, n, a]
        }

        function l(e) {
            var t, n, a, r, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100;
            if (0 == o) return i = 255 * d, [i, i, i];
            t = 2 * d - (n = d < .5 ? d * (1 + o) : d + o - d * o), r = [0, 0, 0];
            for (var u = 0; u < 3; u++)(a = s + 1 / 3 * -(u - 1)) < 0 && a++, a > 1 && a--, i = 6 * a < 1 ? t + 6 * (n - t) * a : 2 * a < 1 ? n : 3 * a < 2 ? t + (n - t) * (2 / 3 - a) * 6 : t, r[u] = 255 * i;
            return r
        }

        function c(e) {
            var t = e[0] / 60,
                n = e[1] / 100,
                a = e[2] / 100,
                r = Math.floor(t) % 6,
                i = t - Math.floor(t),
                s = 255 * a * (1 - n),
                o = 255 * a * (1 - n * i),
                d = 255 * a * (1 - n * (1 - i));
            a *= 255;
            switch (r) {
                case 0:
                    return [a, d, s];
                case 1:
                    return [o, a, s];
                case 2:
                    return [s, a, d];
                case 3:
                    return [s, o, a];
                case 4:
                    return [d, s, a];
                case 5:
                    return [a, s, o]
            }
        }

        function h(e) {
            var t, n, a, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100,
                u = o + d;
            switch (u > 1 && (o /= u, d /= u), t = Math.floor(6 * s), n = 1 - d, a = 6 * s - t, 0 != (1 & t) && (a = 1 - a), i = o + a * (n - o), t) {
                default:
                    case 6:
                    case 0:
                    r = n,
                g = i,
                b = o;
                break;
                case 1:
                        r = i,
                    g = n,
                    b = o;
                    break;
                case 2:
                        r = o,
                    g = n,
                    b = i;
                    break;
                case 3:
                        r = o,
                    g = i,
                    b = n;
                    break;
                case 4:
                        r = i,
                    g = o,
                    b = n;
                    break;
                case 5:
                        r = n,
                    g = o,
                    b = i
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function m(e) {
            var t, n, a, r = e[0] / 100,
                i = e[1] / 100,
                s = e[2] / 100,
                o = e[3] / 100;
            return t = 1 - Math.min(1, r * (1 - o) + o), n = 1 - Math.min(1, i * (1 - o) + o), a = 1 - Math.min(1, s * (1 - o) + o), [255 * t, 255 * n, 255 * a]
        }

        function _(e) {
            var t, n, a, r = e[0] / 100,
                i = e[1] / 100,
                s = e[2] / 100;
            return t = 3.2406 * r + -1.5372 * i + -.4986 * s, n = -.9689 * r + 1.8758 * i + .0415 * s, a = .0557 * r + -.204 * i + 1.057 * s, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, t = Math.min(Math.max(0, t), 1), n = Math.min(Math.max(0, n), 1), a = Math.min(Math.max(0, a), 1), [255 * t, 255 * n, 255 * a]
        }

        function f(e) {
            var t, n, a, r = e[0],
                i = e[1],
                s = e[2];
            return r /= 95.047, i /= 100, s /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * i - 16, n = 500 * (r - i), a = 200 * (i - s), [t, n, a]
        }

        function p(e) {
            var t, n, a, r, i = e[0],
                s = e[1],
                o = e[2];
            return i <= 8 ? r = (n = 100 * i / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((i + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (s / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(s / 500 + r, 3), a = a / 108.883 <= .008859 ? a = 108.883 * (r - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - o / 200, 3), [t, n, a]
        }

        function y(e) {
            var t, n, a, r = e[0],
                i = e[1],
                s = e[2];
            return t = Math.atan2(s, i), (n = 360 * t / 2 / Math.PI) < 0 && (n += 360), a = Math.sqrt(i * i + s * s), [r, a, n]
        }

        function M(e) {
            return _(p(e))
        }

        function v(e) {
            var t, n, a, r = e[0],
                i = e[1];
            return a = e[2] / 360 * 2 * Math.PI, t = i * Math.cos(a), n = i * Math.sin(a), [r, t, n]
        }

        function L(e) {
            return D[e]
        }
        e.exports = {
            rgb2hsl: n,
            rgb2hsv: a,
            rgb2hwb: i,
            rgb2cmyk: s,
            rgb2keyword: o,
            rgb2xyz: d,
            rgb2lab: u,
            rgb2lch: function(e) {
                return y(u(e))
            },
            hsl2rgb: l,
            hsl2hsv: function(e) {
                var t, n, a = e[0],
                    r = e[1] / 100,
                    i = e[2] / 100;
                return 0 === i ? [0, 0, 0] : (i *= 2, r *= i <= 1 ? i : 2 - i, n = (i + r) / 2, t = 2 * r / (i + r), [a, 100 * t, 100 * n])
            },
            hsl2hwb: function(e) {
                return i(l(e))
            },
            hsl2cmyk: function(e) {
                return s(l(e))
            },
            hsl2keyword: function(e) {
                return o(l(e))
            },
            hsv2rgb: c,
            hsv2hsl: function(e) {
                var t, n, a = e[0],
                    r = e[1] / 100,
                    i = e[2] / 100;
                return n = (2 - r) * i, t = r * i, t /= n <= 1 ? n : 2 - n, t = t || 0, n /= 2, [a, 100 * t, 100 * n]
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
            hwb2rgb: h,
            hwb2hsl: function(e) {
                return n(h(e))
            },
            hwb2hsv: function(e) {
                return a(h(e))
            },
            hwb2cmyk: function(e) {
                return s(h(e))
            },
            hwb2keyword: function(e) {
                return o(h(e))
            },
            cmyk2rgb: m,
            cmyk2hsl: function(e) {
                return n(m(e))
            },
            cmyk2hsv: function(e) {
                return a(m(e))
            },
            cmyk2hwb: function(e) {
                return i(m(e))
            },
            cmyk2keyword: function(e) {
                return o(m(e))
            },
            keyword2rgb: L,
            keyword2hsl: function(e) {
                return n(L(e))
            },
            keyword2hsv: function(e) {
                return a(L(e))
            },
            keyword2hwb: function(e) {
                return i(L(e))
            },
            keyword2cmyk: function(e) {
                return s(L(e))
            },
            keyword2lab: function(e) {
                return u(L(e))
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
        var D = {
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
            k = {};
        for (var Y in D) k[JSON.stringify(D[Y])] = Y
    },
    ZFGz: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                    var t = "";
                    return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    ZUMa: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 0 === a(e).getDay()
        }
    },
    ZUyn: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    ZmvM: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("wGD1"),
            i = n("iO9N");
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
                s.configure(t, a, n), s.addBox(t, a), t.legend = a
            }
            var s = e.layoutService,
                o = i.noop;
            return e.Legend = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: o,
                update: function(e, t, n) {
                    return this.beforeUpdate(), this.maxWidth = e, this.maxHeight = t, this.margins = n, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: function() {
                    var e = this,
                        t = e.options.labels || {},
                        n = i.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (n = n.filter(function(n) {
                        return t.filter(n, e.chart.data)
                    })), e.options.reverse && n.reverse(), e.legendItems = n
                },
                afterBuildLabels: o,
                beforeFit: o,
                fit: function() {
                    var e = this,
                        n = e.options,
                        r = n.labels,
                        s = n.display,
                        o = e.ctx,
                        d = a.global,
                        u = i.valueOrDefault,
                        l = u(r.fontSize, d.defaultFontSize),
                        c = u(r.fontStyle, d.defaultFontStyle),
                        h = u(r.fontFamily, d.defaultFontFamily),
                        m = i.fontString(l, c, h),
                        _ = e.legendHitBoxes = [],
                        f = e.minSize,
                        p = e.isHorizontal();
                    if (p ? (f.width = e.maxWidth, f.height = s ? 10 : 0) : (f.width = s ? 10 : 0, f.height = e.maxHeight), s)
                        if (o.font = m, p) {
                            var g = e.lineWidths = [0],
                                y = e.legendItems.length ? l + r.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", i.each(e.legendItems, function(n, a) {
                                var i = t(r, l) + l / 2 + o.measureText(n.text).width;
                                g[g.length - 1] + i + r.padding >= e.width && (y += l + r.padding, g[g.length] = e.left), _[a] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: l
                                }, g[g.length - 1] += i + r.padding
                            }), f.height += y
                        } else {
                            var M = r.padding,
                                v = e.columnWidths = [],
                                b = r.padding,
                                L = 0,
                                D = 0,
                                k = l + M;
                            i.each(e.legendItems, function(e, n) {
                                var a = t(r, l) + l / 2 + o.measureText(e.text).width;
                                D + k > f.height && (b += L + r.padding, v.push(L), L = 0, D = 0), L = Math.max(L, a), D += k, _[n] = {
                                    left: 0,
                                    top: 0,
                                    width: a,
                                    height: l
                                }
                            }), b += L, v.push(L), f.width += b
                        }
                    e.width = f.width, e.height = f.height
                },
                afterFit: o,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var e = this,
                        n = e.options,
                        r = n.labels,
                        s = a.global,
                        o = s.elements.line,
                        d = e.width,
                        u = e.lineWidths;
                    if (n.display) {
                        var l, c = e.ctx,
                            h = i.valueOrDefault,
                            m = h(r.fontColor, s.defaultFontColor),
                            _ = h(r.fontSize, s.defaultFontSize),
                            f = h(r.fontStyle, s.defaultFontStyle),
                            p = h(r.fontFamily, s.defaultFontFamily),
                            g = i.fontString(_, f, p);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = m, c.fillStyle = m, c.font = g;
                        var y = t(r, _),
                            M = e.legendHitBoxes,
                            v = e.isHorizontal();
                        l = v ? {
                            x: e.left + (d - u[0]) / 2,
                            y: e.top + r.padding,
                            line: 0
                        } : {
                            x: e.left + r.padding,
                            y: e.top + r.padding,
                            line: 0
                        };
                        var b = _ + r.padding;
                        i.each(e.legendItems, function(t, a) {
                            var m = c.measureText(t.text).width,
                                f = y + _ / 2 + m,
                                p = l.x,
                                g = l.y;
                            v ? p + f >= d && (g = l.y += b, l.line++, p = l.x = e.left + (d - u[l.line]) / 2) : g + b > e.bottom && (p = l.x = p + e.columnWidths[l.line] + r.padding, g = l.y = e.top + r.padding, l.line++),
                                function(e, t, a) {
                                    if (!(isNaN(y) || y <= 0)) {
                                        c.save(), c.fillStyle = h(a.fillStyle, s.defaultColor), c.lineCap = h(a.lineCap, o.borderCapStyle), c.lineDashOffset = h(a.lineDashOffset, o.borderDashOffset), c.lineJoin = h(a.lineJoin, o.borderJoinStyle), c.lineWidth = h(a.lineWidth, o.borderWidth), c.strokeStyle = h(a.strokeStyle, s.defaultColor);
                                        var r = 0 === h(a.lineWidth, o.borderWidth);
                                        if (c.setLineDash && c.setLineDash(h(a.lineDash, o.borderDash)), n.labels && n.labels.usePointStyle) {
                                            var d = _ * Math.SQRT2 / 2,
                                                u = d / Math.SQRT2,
                                                l = e + u,
                                                m = t + u;
                                            i.canvas.drawPoint(c, a.pointStyle, d, l, m)
                                        } else r || c.strokeRect(e, t, y, _), c.fillRect(e, t, y, _);
                                        c.restore()
                                    }
                                }(p, g, t), M[a].left = p, M[a].top = g,
                                function(e, t, n, a) {
                                    var r = _ / 2,
                                        i = y + r + e,
                                        s = t + r;
                                    c.fillText(n.text, i, s), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, s), c.lineTo(i + a, s), c.stroke())
                                }(p, g, t, m), v ? l.x += f + r.padding : l.y += b
                        })
                    }
                },
                handleEvent: function(e) {
                    var t = this.options,
                        n = "mouseup" === e.type ? "click" : e.type,
                        a = !1;
                    if ("mousemove" === n) {
                        if (!t.onHover) return
                    } else {
                        if ("click" !== n) return;
                        if (!t.onClick) return
                    }
                    var r = e.x,
                        i = e.y;
                    if (r >= this.left && r <= this.right && i >= this.top && i <= this.bottom)
                        for (var s = this.legendHitBoxes, o = 0; o < s.length; ++o) {
                            var d = s[o];
                            if (r >= d.left && r <= d.left + d.width && i >= d.top && i <= d.top + d.height) {
                                if ("click" === n) {
                                    t.onClick.call(this, e.native, this.legendItems[o]), a = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    t.onHover.call(this, e.native, this.legendItems[o]), a = !0;
                                    break
                                }
                            }
                        }
                    return a
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
                    t ? (i.mergeIf(t, a.global.legend), r ? (s.configure(e, r, t), r.options = t) : n(e, t)) : r && (s.removeBox(e, r), delete e.legend)
                },
                afterEvent: function(e, t) {
                    var n = e.legend;
                    n && n.handleEvent(t)
                }
            }
        }
    },
    ZoSI: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    a7Cs: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setFullYear(r), n
        }
    },
    aHtT: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return a(e)
                }),
                t = Math.min.apply(null, e);
            return new Date(t)
        }
    },
    aM0x: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    ajDi: function(e, t, n) {
        function a(e) {
            if (e) {
                var t = [0, 0, 0],
                    n = 1,
                    a = e.match(/^#([a-fA-F0-9]{3})$/i);
                if (a) {
                    a = a[1];
                    for (var r = 0; r < t.length; r++) t[r] = parseInt(a[r] + a[r], 16)
                } else if (a = e.match(/^#([a-fA-F0-9]{6})$/i)) {
                    a = a[1];
                    for (r = 0; r < t.length; r++) t[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16)
                } else if (a = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (r = 0; r < t.length; r++) t[r] = parseInt(a[r + 1]);
                    n = parseFloat(a[4])
                } else if (a = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(a[r + 1]));
                    n = parseFloat(a[4])
                } else if (a = e.match(/(\w+)/)) {
                    if ("transparent" == a[1]) return [0, 0, 0, 0];
                    if (!(t = c[a[1]])) return
                }
                for (r = 0; r < t.length; r++) t[r] = u(t[r], 0, 255);
                return n = n || 0 == n ? u(n, 0, 1) : 1, t[3] = n, t
            }
        }

        function r(e) {
            if (e) {
                var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var n = parseFloat(t[4]);
                    return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
                }
            }
        }

        function i(e) {
            if (e) {
                var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var n = parseFloat(t[4]);
                    return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
                }
            }
        }

        function s(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
        }

        function o(e, t) {
            return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
        }

        function d(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
        }

        function u(e, t, n) {
            return Math.min(Math.max(t, e), n)
        }

        function l(e) {
            var t = e.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t
        }
        var c = n("72Lu");
        e.exports = {
            getRgba: a,
            getHsla: r,
            getRgb: function(e) {
                var t = a(e);
                return t && t.slice(0, 3)
            },
            getHsl: function(e) {
                var t = r(e);
                return t && t.slice(0, 3)
            },
            getHwb: i,
            getAlpha: function(e) {
                var t = a(e);
                return t ? t[3] : (t = r(e)) ? t[3] : (t = i(e)) ? t[3] : void 0
            },
            hexString: function(e) {
                return "#" + l(e[0]) + l(e[1]) + l(e[2])
            },
            rgbString: function(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? s(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
            },
            rgbaString: s,
            percentString: function(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? o(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)"
            },
            percentaString: o,
            hslString: function(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? d(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            },
            hslaString: d,
            hwbString: function(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
            },
            keyword: function(e) {
                return h[e.slice(0, 3)]
            }
        };
        var h = {};
        for (var m in c) h[c[m]] = m
    },
    aqvp: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    b7g8: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    b9IH: function(e, t, n) {
        "use strict";

        function a(e, t) {
            requestAnimationFrame(function() {
                e.scrollIntoView(t)
            })
        }

        function r(e) {
            return null === e ? null : function(e) {
                var t = getComputedStyle(e).overflowY;
                return "visible" !== t && "hidden" !== t
            }(e) ? e : r(e.parentElement)
        }
        t.a = function(e) {
            if (e) {
                var t = r(e);
                if (t) {
                    var n = e.getBoundingClientRect(),
                        o = t.getBoundingClientRect();
                    n.bottom > o.bottom && a(e, s), n.top < o.top && a(e, i)
                }
            }
        };
        var i = !0,
            s = !1
    },
    bXQP: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    balU: function(e, t, n) {
        var a = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = a(e),
                i = Number(t),
                s = n.getFullYear(),
                o = n.getDate(),
                d = new Date(0);
            d.setFullYear(s, i, 15), d.setHours(0, 0, 0, 0);
            var u = r(d);
            return n.setMonth(i, Math.min(o, u)), n
        }
    },
    bbdo: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return t.setMinutes(59, 59, 999), t
        }
    },
    c1x4: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "cA+x": function(e, t, n) {
        var a = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    cONr: function(e, t, n) {
        var a = n("f+sD");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    cw9o: function(e, t, n) {
        var a = n("7EGB");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    cwv1: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getTime()
        }
    },
    "d1/4": function(e, t, n) {
        "use strict";
        var a = n("3n1n"),
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
                    return e * e * (2.70158 * e - 1.70158)
                },
                easeOutBack: function(e) {
                    return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
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
    dH3X: function(e, t, n) {
        var a = n("607n");
        e.exports = function(e) {
            if (a(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
    },
    dURR: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    danj: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setMinutes(r), n
        }
    },
    dyB6: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "e/EH": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 3 === a(e).getDay()
        }
    },
    "e/KL": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "eBB/": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    eCZG: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getTime() < (new Date).getTime()
        }
    },
    eHwN: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                    var n = e % 10;
                    return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    eKpK: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getSeconds()
        }
    },
    "f+sD": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
        }
    },
    f4W3: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    f4ga: function(e, t, n) {
        var a = n("WNGz");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() === r.getTime()
        }
    },
    fK0I: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() > r.getTime()
        }
    },
    fUo1: function(e, t, n) {
        var a = n("iRXW"),
            r = n("7EGB"),
            i = 6048e5;
        e.exports = function(e) {
            var t = a(e),
                n = a(r(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / i)
        }
    },
    fW1y: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    fo7E: function(e, t, n) {
        var a = n("w4by");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    g7KF: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    gAt4: function(e, t, n) {
        var a = n("xA5w"),
            r = n("nizW"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = a(e),
                s = a(t),
                o = i(n, s),
                d = Math.abs(r(n, s));
            return n.setDate(n.getDate() - o * d), o * (d - (i(n, s) === -o))
        }
    },
    gCP2: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.PolarArea = function(t, n) {
                return n.type = "polarArea", new e(t, n)
            }
        }
    },
    gDPd: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() < r.getTime()
        }
    },
    gEQe: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    gEU3: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a + 1), r.setHours(0, 0, 0, 0), r
        }
    },
    gUgh: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    ghsk: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("iO9N"),
            i = n("KC8c"),
            s = n("2xI1");
        e.exports = function(e) {
            function t(e) {
                return "top" === e || "bottom" === e
            }
            var n = e.plugins;
            e.types = {}, e.instances = {}, e.controllers = {}, r.extend(e.prototype, {
                construct: function(t, n) {
                    var i = this;
                    n = function(e) {
                        var t = (e = e || {}).data = e.data || {};
                        return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = r.configMerge(a.global, a[e.type], e.options || {}), e
                    }(n);
                    var o = s.acquireContext(t, n),
                        d = o && o.canvas,
                        u = d && d.height,
                        l = d && d.width;
                    i.id = r.uid(), i.ctx = o, i.canvas = d, i.config = n, i.width = l, i.height = u, i.aspectRatio = u ? l / u : null, i.options = n.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
                        get: function() {
                            return i.config.data
                        },
                        set: function(e) {
                            i.config.data = e
                        }
                    }), o && d ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                },
                initialize: function() {
                    return n.notify(this, "beforeInit"), r.retinaScale(this, this.options.devicePixelRatio), this.bindEvents(), this.options.responsive && this.resize(!0), this.ensureScalesHaveIDs(), this.buildScales(), this.initToolTip(), n.notify(this, "afterInit"), this
                },
                clear: function() {
                    return r.canvas.clear(this), this
                },
                stop: function() {
                    return e.animationService.cancelAnimation(this), this
                },
                resize: function(e) {
                    var t = this.options,
                        a = this.canvas,
                        i = t.maintainAspectRatio && this.aspectRatio || null,
                        s = Math.max(0, Math.floor(r.getMaximumWidth(a))),
                        o = Math.max(0, Math.floor(i ? s / i : r.getMaximumHeight(a)));
                    if ((this.width !== s || this.height !== o) && (a.width = this.width = s, a.height = this.height = o, a.style.width = s + "px", a.style.height = o + "px", r.retinaScale(this, t.devicePixelRatio), !e)) {
                        var d = {
                            width: s,
                            height: o
                        };
                        n.notify(this, "resize", [d]), this.options.onResize && this.options.onResize(this, d), this.stop(), this.update(this.options.responsiveAnimationDuration)
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
                    var n = this,
                        a = n.options,
                        i = n.scales = {},
                        s = [];
                    a.scales && (s = s.concat((a.scales.xAxes || []).map(function(e) {
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
                    }))), a.scale && s.push({
                        options: a.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }), r.each(s, function(a) {
                        var s = a.options,
                            o = r.valueOrDefault(s.type, a.dtype),
                            d = e.scaleService.getScaleConstructor(o);
                        if (d) {
                            t(s.position) !== t(a.dposition) && (s.position = a.dposition);
                            var u = new d({
                                id: s.id,
                                options: s,
                                ctx: n.ctx,
                                chart: n
                            });
                            i[u.id] = u, u.mergeTicksOptions(), a.isDefault && (n.scale = u)
                        }
                    }), e.scaleService.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function() {
                    var t = this,
                        n = [],
                        a = [];
                    return r.each(t.data.datasets, function(r, i) {
                        var s = t.getDatasetMeta(i),
                            o = r.type || t.config.type;
                        if (s.type && s.type !== o && (t.destroyDatasetMeta(i), s = t.getDatasetMeta(i)), s.type = o, n.push(s.type), s.controller) s.controller.updateIndex(i);
                        else {
                            var d = e.controllers[s.type];
                            if (void 0 === d) throw new Error('"' + s.type + '" is not a chart type.');
                            s.controller = new d(t, i), a.push(s.controller)
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
                        }), function(e) {
                            var t = e.options;
                            t.scale ? e.scale.options = t.scale : t.scales && t.scales.xAxes.concat(t.scales.yAxes).forEach(function(t) {
                                e.scales[t.id].options = t
                            }), e.tooltip._options = t.tooltips
                        }(t), !1 !== n.notify(t, "beforeUpdate")) {
                        t.tooltip._data = t.data;
                        var a = t.buildOrUpdateControllers();
                        r.each(t.data.datasets, function(e, n) {
                            t.getDatasetMeta(n).controller.buildOrUpdateElements()
                        }, t), t.updateLayout(), r.each(a, function(e) {
                            e.reset()
                        }), t.updateDatasets(), n.notify(t, "afterUpdate"), t._bufferedRender ? t._bufferedRequest = {
                            duration: e.duration,
                            easing: e.easing,
                            lazy: e.lazy
                        } : t.render(e)
                    }
                },
                updateLayout: function() {
                    !1 !== n.notify(this, "beforeLayout") && (e.layoutService.update(this, this.width, this.height), n.notify(this, "afterScaleUpdate"), n.notify(this, "afterLayout"))
                },
                updateDatasets: function() {
                    if (!1 !== n.notify(this, "beforeDatasetsUpdate")) {
                        for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                        n.notify(this, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function(e) {
                    var t = this.getDatasetMeta(e),
                        a = {
                            meta: t,
                            index: e
                        };
                    !1 !== n.notify(this, "beforeDatasetUpdate", [a]) && (t.controller.update(), n.notify(this, "afterDatasetUpdate", [a]))
                },
                render: function(t) {
                    var a = this;
                    t && "object" == typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    });
                    var i = t.duration,
                        s = t.lazy;
                    if (!1 !== n.notify(a, "beforeRender")) {
                        var o = a.options.animation,
                            d = function(e) {
                                n.notify(a, "afterRender"), r.callback(o && o.onComplete, [e], a)
                            };
                        if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                            var u = new e.Animation({
                                numSteps: (i || o.duration) / 16.66,
                                easing: t.easing || o.easing,
                                render: function(e, t) {
                                    var n = r.easing.effects[t.easing],
                                        a = t.currentStep,
                                        i = a / t.numSteps;
                                    e.draw(n(i), i, a)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: d
                            });
                            e.animationService.addAnimation(a, u, i, s)
                        } else a.draw(), d(new e.Animation({
                            numSteps: 0,
                            chart: a
                        }));
                        return a
                    }
                },
                draw: function(e) {
                    var t = this;
                    t.clear(), r.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== n.notify(t, "beforeDraw", [e]) && (r.each(t.boxes, function(e) {
                        e.draw(t.chartArea)
                    }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t.tooltip.draw(), n.notify(t, "afterDraw", [e]))
                },
                transition: function(e) {
                    for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                    this.tooltip.transition(e)
                },
                drawDatasets: function(e) {
                    if (!1 !== n.notify(this, "beforeDatasetsDraw", [e])) {
                        for (var t = (this.data.datasets || []).length - 1; t >= 0; --t) this.isDatasetVisible(t) && this.drawDataset(t, e);
                        n.notify(this, "afterDatasetsDraw", [e])
                    }
                },
                drawDataset: function(e, t) {
                    var a = this.getDatasetMeta(e),
                        r = {
                            meta: a,
                            index: e,
                            easingValue: t
                        };
                    !1 !== n.notify(this, "beforeDatasetDraw", [r]) && (a.controller.draw(t), n.notify(this, "afterDatasetDraw", [r]))
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
                    var t = this.data.datasets[e];
                    t._meta || (t._meta = {});
                    var n = t._meta[this.id];
                    return n || (n = t._meta[this.id] = {
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
                    var t, a, i = this.canvas;
                    for (this.stop(), t = 0, a = this.data.datasets.length; t < a; ++t) this.destroyDatasetMeta(t);
                    i && (this.unbindEvents(), r.canvas.clear(this), s.releaseContext(this.ctx), this.canvas = null, this.ctx = null), n.notify(this, "destroy"), delete e.instances[this.id]
                },
                toBase64Image: function() {
                    return this.canvas.toDataURL.apply(this.canvas, arguments)
                },
                initToolTip: function() {
                    this.tooltip = new e.Tooltip({
                        _chart: this,
                        _chartInstance: this,
                        _data: this.data,
                        _options: this.options.tooltips
                    }, this)
                },
                bindEvents: function() {
                    var e = this,
                        t = e._listeners = {},
                        n = function() {
                            e.eventHandler.apply(e, arguments)
                        };
                    r.each(e.options.events, function(a) {
                        s.addEventListener(e, a, n), t[a] = n
                    }), e.options.responsive && (n = function() {
                        e.resize()
                    }, s.addEventListener(e, "resize", n), t.resize = n)
                },
                unbindEvents: function() {
                    var e = this,
                        t = e._listeners;
                    t && (delete e._listeners, r.each(t, function(t, n) {
                        s.removeEventListener(e, n, t)
                    }))
                },
                updateHoverStyle: function(e, t, n) {
                    var a, r, i, s = n ? "setHoverStyle" : "removeHoverStyle";
                    for (r = 0, i = e.length; r < i; ++r)(a = e[r]) && this.getDatasetMeta(a._datasetIndex).controller[s](a)
                },
                eventHandler: function(e) {
                    var t = this.tooltip;
                    if (!1 !== n.notify(this, "beforeEvent", [e])) {
                        this._bufferedRender = !0, this._bufferedRequest = null;
                        var a = this.handleEvent(e);
                        a |= t && t.handleEvent(e), n.notify(this, "afterEvent", [e]);
                        var r = this._bufferedRequest;
                        return r ? this.render(r) : a && !this.animating && (this.stop(), this.render(this.options.hover.animationDuration, !0)), this._bufferedRender = !1, this._bufferedRequest = null, this
                    }
                },
                handleEvent: function(e) {
                    var t = this.options || {},
                        n = t.hover,
                        a = !1;
                    return this.lastActive = this.lastActive || [], "mouseout" === e.type ? this.active = [] : this.active = this.getElementsAtEventForMode(e, n.mode, n), r.callback(t.onHover || t.hover.onHover, [e.native, this.active], this), "mouseup" !== e.type && "click" !== e.type || t.onClick && t.onClick.call(this, e.native, this.active), this.lastActive.length && this.updateHoverStyle(this.lastActive, n.mode, !1), this.active.length && n.mode && this.updateHoverStyle(this.active, n.mode, !0), a = !r.arrayEquals(this.active, this.lastActive), this.lastActive = this.active, a
                }
            }), e.Controller = e
        }
    },
    hAmm: function(e, t, n) {
        "use strict";
        var a = n("iO9N");
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
                    for (var a, r = ["fullWidth", "position", "weight"], i = r.length, s = 0; s < i; ++s) a = r[s], n.hasOwnProperty(a) && (t[a] = n[a])
                },
                update: function(e, r, i) {
                    function s(e) {
                        var t = a.findNextWhere(w, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var n = {
                                    left: Math.max(j, x),
                                    right: Math.max(H, T),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? M : k, v / 2, n)
                            } else e.update(t.minSize.width, Y)
                    }

                    function o(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? l : j, e.right = e.fullWidth ? r - c : j + k, e.top = N, e.bottom = N + e.height, N = e.bottom) : (e.left = I, e.right = I + e.width, e.top = C, e.bottom = C + Y, I = e.right)
                    }
                    if (e) {
                        var d = e.options.layout || {},
                            u = a.options.toPadding(d.padding),
                            l = u.left,
                            c = u.right,
                            h = u.top,
                            m = u.bottom,
                            _ = t(e.boxes, "left"),
                            f = t(e.boxes, "right"),
                            p = t(e.boxes, "top"),
                            g = t(e.boxes, "bottom"),
                            y = t(e.boxes, "chartArea");
                        n(_, !0), n(f, !1), n(p, !0), n(g, !1);
                        var M = r - l - c,
                            v = i - h - m,
                            b = v / 2,
                            L = (r - M / 2) / (_.length + f.length),
                            D = (i - b) / (p.length + g.length),
                            k = M,
                            Y = v,
                            w = [];
                        a.each(_.concat(f, p, g), function(e) {
                            var t, n = e.isHorizontal();
                            n ? (t = e.update(e.fullWidth ? M : k, D), Y -= t.height) : (t = e.update(L, b), k -= t.width), w.push({
                                horizontal: n,
                                minSize: t,
                                box: e
                            })
                        });
                        var x = 0,
                            T = 0,
                            S = 0,
                            O = 0;
                        a.each(p.concat(g), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                x = Math.max(x, t.left), T = Math.max(T, t.right)
                            }
                        }), a.each(_.concat(f), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                S = Math.max(S, t.top), O = Math.max(O, t.bottom)
                            }
                        });
                        var j = l,
                            H = c,
                            C = h,
                            P = m;
                        a.each(_.concat(f), s), a.each(_, function(e) {
                            j += e.width
                        }), a.each(f, function(e) {
                            H += e.width
                        }), a.each(p.concat(g), s), a.each(p, function(e) {
                            C += e.height
                        }), a.each(g, function(e) {
                            P += e.height
                        }), a.each(_.concat(f), function(e) {
                            var t = a.findNextWhere(w, function(t) {
                                    return t.box === e
                                }),
                                n = {
                                    left: 0,
                                    right: 0,
                                    top: C,
                                    bottom: P
                                };
                            t && e.update(t.minSize.width, Y, n)
                        }), j = l, H = c, C = h, P = m, a.each(_, function(e) {
                            j += e.width
                        }), a.each(f, function(e) {
                            H += e.width
                        }), a.each(p, function(e) {
                            C += e.height
                        }), a.each(g, function(e) {
                            P += e.height
                        });
                        var A = Math.max(x - j, 0);
                        j += A, H += Math.max(T - H, 0);
                        var F = Math.max(S - C, 0);
                        C += F, P += Math.max(O - P, 0);
                        var E = i - C - P,
                            W = r - j - H;
                        W === k && E === Y || (a.each(_, function(e) {
                            e.height = E
                        }), a.each(f, function(e) {
                            e.height = E
                        }), a.each(p, function(e) {
                            e.fullWidth || (e.width = W)
                        }), a.each(g, function(e) {
                            e.fullWidth || (e.width = W)
                        }), Y = E, k = W);
                        var I = l + A,
                            N = h + F;
                        a.each(_.concat(p), o), I += k, N += Y, a.each(f, o), a.each(g, o), e.chartArea = {
                            left: j,
                            top: C,
                            right: j + k,
                            bottom: C + Y
                        }, a.each(y, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(k, Y)
                        })
                    }
                }
            }
        }
    },
    hPuz: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    hUHO: function(e, t, n) {
        var a = n("4LxA");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    hico: function(e, t, n) {
        var a = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = a(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = r(n);
            return i.setDate(i.getDate() - 1), i
        }
    },
    hj5Y: function(e, t, n) {
        var a = n("5qwL");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    iNtv: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    iO9N: function(e, t, n) {
        "use strict";
        e.exports = n("3n1n"), e.exports.easing = n("d1/4"), e.exports.canvas = n("F4U8"), e.exports.options = n("u1o0")
    },
    iRXW: function(e, t, n) {
        var a = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = a(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), r(n)
        }
    },
    "j+vx": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                    return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    j8cJ: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    jJ84: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("iO9N");
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
                    this.defaults.hasOwnProperty(e) && (this.defaults[e] = r.extend(this.defaults[e], t))
                },
                addScalesToLayout: function(t) {
                    r.each(t.scales, function(n) {
                        n.fullWidth = n.options.fullWidth, n.position = n.options.position, n.weight = n.options.weight, e.layoutService.addBox(t, n)
                    })
                }
            }
        }
    },
    jQas: function(e, t, n) {
        var a = n("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                s = ["AM", "PM"],
                o = ["am", "pm"],
                d = ["a.m.", "p.m."],
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
                        return r[e.getDay()]
                    },
                    dddd: function(e) {
                        return i[e.getDay()]
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? o[1] : o[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? d[1] : d[0]
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
                formattingTokensRegExp: a(u)
            }
        }
    },
    jxEH: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }

            function n(e, n, a) {
                return e + " " + t(r[a], e, n)
            }

            function a(e, n, a) {
                return t(r[a], e, n)
            }
            var r = {
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
                    s: function(e, t) {
                        return t ? "dažas sekundes" : "dažām sekundēm"
                    },
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
    jy2q: function(e, t, n) {
        var a = n("xA5w"),
            r = n("balU");
        e.exports = function(e, t) {
            var n = a(e),
                i = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return r(n, n.getMonth() + 3 * i)
        }
    },
    "k+5o": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                    var n = e % 10;
                    return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    k7DW: function(e, t, n) {
        "use strict";
        var a = n("iO9N");
        e.exports = {
            _set: function(e, t) {
                return a.merge(this[e] || (this[e] = {}), t)
            }
        }
    },
    kDuD: function(e, t, n) {
        var a = n("xA5w"),
            r = n("MIQa"),
            i = n("xKy+");
        e.exports = function(e) {
            var t = a(e);
            return r(t).getTime() === i(t).getTime()
        }
    },
    kIFi: function(e, t, n) {
        var a = n("NSOL");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    kRs6: function(e, t, n) {
        var a = n("Qxz6");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    kjlQ: function(e, t, n) {
        var a = n("G7No"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = a(e, t) / r;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    kkVd: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 1 === a(e).getDay()
        }
    },
    krPU: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    l85J: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getMonth()
        }
    },
    lG75: function(e, t, n) {
        "use strict";
        var a = n("rWJA"),
            r = n("k7DW"),
            i = n("iO9N");
        e.exports = function(e) {
            function t(e, t, n) {
                var a;
                return "string" == typeof e ? (a = parseInt(e, 10), -1 !== e.indexOf("%") && (a = a / 100 * t.parentNode[n])) : a = e, a
            }

            function n(e) {
                return void 0 !== e && null !== e && "none" !== e
            }

            function s(e, a, r) {
                var i = document.defaultView,
                    s = e.parentNode,
                    o = i.getComputedStyle(e)[a],
                    d = i.getComputedStyle(s)[a],
                    u = n(o),
                    l = n(d),
                    c = Number.POSITIVE_INFINITY;
                return u || l ? Math.min(u ? t(o, e, r) : c, l ? t(d, s, r) : c) : "none"
            }
            i.extend = function(e) {
                for (var t = function(t, n) {
                        e[n] = t
                    }, n = 1, a = arguments.length; n < a; n++) i.each(arguments[n], t);
                return e
            }, i.configMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, n, a, r) {
                        var s = n[t] || {},
                            o = a[t];
                        "scales" === t ? n[t] = i.scaleMerge(s, o) : "scale" === t ? n[t] = i.merge(s, [e.scaleService.getScaleDefaults(o.type), o]) : i._merger(t, n, a, r)
                    }
                })
            }, i.scaleMerge = function() {
                return i.merge(i.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, n, a, r) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var s, o, d, u = a[t].length;
                            for (n[t] || (n[t] = []), s = 0; s < u; ++s) d = a[t][s], o = i.valueOrDefault(d.type, "xAxes" === t ? "category" : "linear"), s >= n[t].length && n[t].push({}), !n[t][s].type || d.type && d.type !== n[t][s].type ? i.merge(n[t][s], [e.scaleService.getScaleDefaults(o), d]) : i.merge(n[t][s], d)
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
                return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
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
                    s = n.skip ? t : n,
                    o = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
                    d = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2)),
                    u = o / (o + d),
                    l = d / (o + d),
                    c = a * (u = isNaN(u) ? 0 : u),
                    h = a * (l = isNaN(l) ? 0 : l);
                return {
                    previous: {
                        x: i.x - c * (s.x - r.x),
                        y: i.y - c * (s.y - r.y)
                    },
                    next: {
                        x: i.x + h * (s.x - r.x),
                        y: i.y + h * (s.y - r.y)
                    }
                }
            }, i.EPSILON = Number.EPSILON || 1e-14, i.splineCurveMonotone = function(e) {
                var t, n, a, r, s = (e || []).map(function(e) {
                        return {
                            model: e._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                    o = s.length;
                for (t = 0; t < o; ++t)
                    if (!(a = s[t]).model.skip) {
                        if (n = t > 0 ? s[t - 1] : null, (r = t < o - 1 ? s[t + 1] : null) && !r.model.skip) {
                            var d = r.model.x - a.model.x;
                            a.deltaK = 0 !== d ? (r.model.y - a.model.y) / d : 0
                        }!n || n.model.skip ? a.mK = a.deltaK : !r || r.model.skip ? a.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (n.deltaK + a.deltaK) / 2
                    }
                var u, l, c, h;
                for (t = 0; t < o - 1; ++t) a = s[t], r = s[t + 1], a.model.skip || r.model.skip || (i.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = r.mK = 0 : (u = a.mK / a.deltaK, l = r.mK / a.deltaK, (h = Math.pow(u, 2) + Math.pow(l, 2)) <= 9 || (c = 3 / Math.sqrt(h), a.mK = u * c * a.deltaK, r.mK = l * c * a.deltaK)));
                var m;
                for (t = 0; t < o; ++t)(a = s[t]).model.skip || (n = t > 0 ? s[t - 1] : null, r = t < o - 1 ? s[t + 1] : null, n && !n.model.skip && (m = (a.model.x - n.model.x) / 3, a.model.controlPointPreviousX = a.model.x - m, a.model.controlPointPreviousY = a.model.y - m * a.mK), r && !r.model.skip && (m = (r.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + m, a.model.controlPointNextY = a.model.y + m * a.mK))
            }, i.nextItem = function(e, t, n) {
                return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
            }, i.previousItem = function(e, t, n) {
                return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
            }, i.niceNum = function(e, t) {
                var n = Math.floor(i.log10(e)),
                    a = e / Math.pow(10, n);
                return (t ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * Math.pow(10, n)
            }, i.requestAnimFrame = "undefined" == typeof window ? function(e) {
                e()
            } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }, i.getRelativePosition = function(e, t) {
                var n, a, r = e.originalEvent || e,
                    s = e.currentTarget || e.srcElement,
                    o = s.getBoundingClientRect(),
                    d = r.touches;
                d && d.length > 0 ? (n = d[0].clientX, a = d[0].clientY) : (n = r.clientX, a = r.clientY);
                var u = parseFloat(i.getStyle(s, "padding-left")),
                    l = parseFloat(i.getStyle(s, "padding-top")),
                    c = parseFloat(i.getStyle(s, "padding-right")),
                    h = parseFloat(i.getStyle(s, "padding-bottom")),
                    m = o.right - o.left - u - c,
                    _ = o.bottom - o.top - l - h;
                return n = Math.round((n - o.left - u) / m * s.width / t.currentDevicePixelRatio), a = Math.round((a - o.top - l) / _ * s.height / t.currentDevicePixelRatio), {
                    x: n,
                    y: a
                }
            }, i.getConstraintWidth = function(e) {
                return s(e, "max-width", "clientWidth")
            }, i.getConstraintHeight = function(e) {
                return s(e, "max-height", "clientHeight")
            }, i.getMaximumWidth = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientWidth;
                var n = parseInt(i.getStyle(t, "padding-left"), 10),
                    a = parseInt(i.getStyle(t, "padding-right"), 10),
                    r = t.clientWidth - n - a,
                    s = i.getConstraintWidth(e);
                return isNaN(s) ? r : Math.min(r, s)
            }, i.getMaximumHeight = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientHeight;
                var n = parseInt(i.getStyle(t, "padding-top"), 10),
                    a = parseInt(i.getStyle(t, "padding-bottom"), 10),
                    r = t.clientHeight - n - a,
                    s = i.getConstraintHeight(e);
                return isNaN(s) ? r : Math.min(r, s)
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
                var r = (a = a || {}).data = a.data || {},
                    s = a.garbageCollect = a.garbageCollect || [];
                a.font !== t && (r = a.data = {}, s = a.garbageCollect = [], a.font = t), e.font = t;
                var o = 0;
                i.each(n, function(t) {
                    void 0 !== t && null !== t && !0 !== i.isArray(t) ? o = i.measureText(e, r, s, o, t) : i.isArray(t) && i.each(t, function(t) {
                        void 0 === t || null === t || i.isArray(t) || (o = i.measureText(e, r, s, o, t))
                    })
                });
                var d = s.length / 2;
                if (d > n.length) {
                    for (var u = 0; u < d; u++) delete r[s[u]];
                    s.splice(0, d)
                }
                return o
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
    lOED: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    lQzg: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
    },
    "lRs/": function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("wGD1"),
            i = n("iO9N");
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
                s = i.noop;
            return e.Title = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = []
                },
                beforeUpdate: s,
                update: function(e, t, n) {
                    return this.beforeUpdate(), this.maxWidth = e, this.maxHeight = t, this.margins = n, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: s,
                afterBuildLabels: s,
                beforeFit: s,
                fit: function() {
                    var e = i.valueOrDefault,
                        t = this.options,
                        n = t.display,
                        r = e(t.fontSize, a.global.defaultFontSize),
                        s = this.minSize,
                        o = i.isArray(t.text) ? t.text.length : 1,
                        d = i.options.toLineHeight(t.lineHeight, r),
                        u = n ? o * d + 2 * t.padding : 0;
                    this.isHorizontal() ? (s.width = this.maxWidth, s.height = u) : (s.width = u, s.height = this.maxHeight), this.width = s.width, this.height = s.height
                },
                afterFit: s,
                isHorizontal: function() {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function() {
                    var e = this.ctx,
                        t = i.valueOrDefault,
                        n = this.options,
                        r = a.global;
                    if (n.display) {
                        var s, o, d, u = t(n.fontSize, r.defaultFontSize),
                            l = t(n.fontStyle, r.defaultFontStyle),
                            c = t(n.fontFamily, r.defaultFontFamily),
                            h = i.fontString(u, l, c),
                            m = i.options.toLineHeight(n.lineHeight, u),
                            _ = m / 2 + n.padding,
                            f = 0,
                            p = this.top,
                            g = this.left,
                            y = this.bottom,
                            M = this.right;
                        e.fillStyle = t(n.fontColor, r.defaultFontColor), e.font = h, this.isHorizontal() ? (o = g + (M - g) / 2, d = p + _, s = M - g) : (o = "left" === n.position ? g + _ : M - _, d = p + (y - p) / 2, s = y - p, f = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(o, d), e.rotate(f), e.textAlign = "center", e.textBaseline = "middle";
                        var v = n.text;
                        if (i.isArray(v))
                            for (var b = 0, L = 0; L < v.length; ++L) e.fillText(v[L], 0, b, s), b += m;
                        else e.fillText(v, 0, 0, s);
                        e.restore()
                    }
                }
            }), {
                id: "title",
                beforeInit: function(e) {
                    var n = e.options.title;
                    n && t(e, n)
                },
                beforeUpdate: function(r) {
                    var s = r.options.title,
                        o = r.titleBlock;
                    s ? (i.mergeIf(s, a.global.title), o ? (n.configure(r, o, s), o.options = s) : t(r, s)) : o && (e.layoutService.removeBox(r, o), delete r.titleBlock)
                }
            }
        }
    },
    m7yE: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, r) {
                var i = function(e) {
                    var t = Math.floor(e % 1e3 / 100),
                        a = Math.floor(e % 100 / 10),
                        r = e % 10,
                        i = "";
                    t > 0 && (i += n[t] + "vatlh");
                    a > 0 && (i += ("" !== i ? " " : "") + n[a] + "maH");
                    r > 0 && (i += ("" !== i ? " " : "") + n[r]);
                    return "" === i ? "pagh" : i
                }(e);
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
            var n = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
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
                    mm: t,
                    h: "wa’ rep",
                    hh: t,
                    d: "wa’ jaj",
                    dd: t,
                    M: "wa’ jar",
                    MM: t,
                    y: "wa’ DIS",
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
    mC8W: function(e, t, n) {
        "use strict";
        n("k7DW")._set("scatter", {
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
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                a = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, a - 1), r.setHours(0, 0, 0, 0), r
        }
    },
    mXYp: function(e, t, n) {
        var a = n("YRFD"),
            r = n("xA5w"),
            i = n("25hp"),
            s = n("GI7G"),
            o = n("uyaC"),
            d = 1440,
            u = 2520,
            l = 43200,
            c = 86400;
        e.exports = function(e, t, n) {
            var h = n || {},
                m = a(e, t),
                _ = h.locale,
                f = o.distanceInWords.localize;
            _ && _.distanceInWords && _.distanceInWords.localize && (f = _.distanceInWords.localize);
            var p, g, y = {
                addSuffix: Boolean(h.addSuffix),
                comparison: m
            };
            m > 0 ? (p = r(e), g = r(t)) : (p = r(t), g = r(e));
            var M, v = i(g, p),
                b = g.getTimezoneOffset() - p.getTimezoneOffset(),
                L = Math.round(v / 60) - b;
            if (L < 2) return h.includeSeconds ? v < 5 ? f("lessThanXSeconds", 5, y) : v < 10 ? f("lessThanXSeconds", 10, y) : v < 20 ? f("lessThanXSeconds", 20, y) : v < 40 ? f("halfAMinute", null, y) : f(v < 60 ? "lessThanXMinutes" : "xMinutes", 1, y) : 0 === L ? f("lessThanXMinutes", 1, y) : f("xMinutes", L, y);
            if (L < 45) return f("xMinutes", L, y);
            if (L < 90) return f("aboutXHours", 1, y);
            if (L < d) return f("aboutXHours", Math.round(L / 60), y);
            if (L < u) return f("xDays", 1, y);
            if (L < l) return f("xDays", Math.round(L / d), y);
            if (L < c) return M = Math.round(L / l), f("aboutXMonths", M, y);
            if ((M = s(g, p)) < 12) return f("xMonths", Math.round(L / l), y);
            var D = M % 12,
                k = Math.floor(M / 12);
            return D < 3 ? f("aboutXYears", k, y) : D < 9 ? f("overXYears", k, y) : f("almostXYears", k + 1, y)
        }
    },
    mg6x: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Doughnut = function(t, n) {
                return n.type = "doughnut", new e(t, n)
            }
        }
    },
    nE8X: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    nLOz: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("gd", {
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
        })
    },
    nS2h: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, r, i) {
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
                return s = function(e, t) {
                    return e < 10 ? t ? a[e] : n[e] : e
                }(e, i) + " " + s
            }
            var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];
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
    nZeo: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return a(e).getFullYear()
        }
    },
    nfOx: function(e, t, n) {
        var a = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, 1e3 * n)
        }
    },
    nizW: function(e, t, n) {
        var a = n("WNGz"),
            r = 6e4,
            i = 864e5;
        e.exports = function(e, t) {
            var n = a(e),
                s = a(t),
                o = n.getTime() - n.getTimezoneOffset() * r,
                d = s.getTime() - s.getTimezoneOffset() * r;
            return Math.round((o - d) / i)
        }
    },
    nk30: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                r = a(e),
                i = r.getDay(),
                s = 6 + (i < n ? -7 : 0) - (i - n);
            return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + s), r
        }
    },
    ntHu: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + function(e, t) {
                    var n = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }({
                    mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: t ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                }[n], +e)
            }

            function n(e) {
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
                weekdays: function(e, t) {
                    var n = {
                        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                    };
                    return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
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
                    sameDay: n("[Сьогодні "),
                    nextDay: n("[Завтра "),
                    lastDay: n("[Вчора "),
                    nextWeek: n("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return n("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return n("[Минулого] dddd [").call(this)
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
    oNnY: function(e, t, n) {
        var a = n("zZbG"),
            r = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, a(e) + n)
        }
    },
    oQMP: function(e, t, n) {
        "use strict";
        var a = n("iO9N");
        e.exports = function(e) {
            function t(e, t) {
                var a = e._chartjs;
                if (a) {
                    var r = a.listeners,
                        i = r.indexOf(t); - 1 !== i && r.splice(i, 1), r.length > 0 || (n.forEach(function(t) {
                        delete e[t]
                    }), delete e._chartjs)
                }
            }
            var n = ["push", "pop", "shift", "splice", "unshift"];
            e.DatasetController = function(e, t) {
                this.initialize(e, t)
            }, a.extend(e.DatasetController.prototype, {
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
                    this._data && t(this._data, this)
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
                    var e, t, n = this.getMeta(),
                        a = this.getDataset().data || [],
                        r = n.data;
                    for (e = 0, t = a.length; e < t; ++e) r[e] = r[e] || this.createMetaData(e);
                    n.dataset = n.dataset || this.createMetaDataset()
                },
                addElementAndReset: function(e) {
                    var t = this.createMetaData(e);
                    this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                },
                buildOrUpdateElements: function() {
                    var e = this.getDataset(),
                        r = e.data || (e.data = []);
                    this._data !== r && (this._data && t(this._data, this), function(e, t) {
                        e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [t]
                            }
                        }), n.forEach(function(t) {
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
                        }))
                    }(r, this), this._data = r), this.resyncElements()
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
                        s = a.valueAtIndexOrDefault,
                        o = e._model;
                    o.backgroundColor = i.backgroundColor ? i.backgroundColor : s(n.backgroundColor, r, t.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : s(n.borderColor, r, t.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : s(n.borderWidth, r, t.borderWidth)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        r = e.custom || {},
                        i = a.valueAtIndexOrDefault,
                        s = a.getHoverColor,
                        o = e._model;
                    o.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : i(t.hoverBackgroundColor, n, s(o.backgroundColor)), o.borderColor = r.hoverBorderColor ? r.hoverBorderColor : i(t.hoverBorderColor, n, s(o.borderColor)), o.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : i(t.hoverBorderWidth, n, o.borderWidth)
                },
                resyncElements: function() {
                    var e = this.getMeta(),
                        t = this.getDataset().data,
                        n = e.data.length,
                        a = t.length;
                    a < n ? e.data.splice(a, n - a) : a > n && this.insertElements(n, a - n)
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
    oke8: function(e, t, n) {
        var a = n("1rLR");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    oo1B: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    ooba: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    orNa: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return 12 * (n.getFullYear() - r.getFullYear()) + (n.getMonth() - r.getMonth())
        }
    },
    pe7V: function(e, t, n) {
        var a = n("8KV+");
        e.exports = function(e, t) {
            return a(new Date, e, t)
        }
    },
    pfs9: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    qNYo: function(e, t, n) {
        var a = n("xA5w"),
            r = n("9Jn5"),
            i = n("NKE6"),
            s = n("MKc+");
        e.exports = function(e, t) {
            var n = a(e),
                o = a(t),
                d = i(n, o),
                u = Math.abs(r(n, o));
            return n = s(n, d * u), d * (u - (i(n, o) === -d))
        }
    },
    qPxx: function(e, t, n) {
        var a = n("LLTj");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() === r.getTime()
        }
    },
    r7VP: function(e, t, n) {
        "use strict";

        function a(e) {
            switch (e.toUpperCase()) {
                case "A1":
                    return Object(m.d)("Anonymous Proxy", "format-country");
                case "A2":
                    return Object(m.d)("Satellite Provider", "format-country");
                case "AD":
                    return Object(m.d)("Andorra", "format-country");
                case "AE":
                    return Object(m.d)("United Arab Emirates", "format-country");
                case "AF":
                    return Object(m.d)("Afghanistan", "format-country");
                case "AG":
                    return Object(m.d)("Antigua and Barbuda", "format-country");
                case "AI":
                    return Object(m.d)("Anguilla", "format-country");
                case "AL":
                    return Object(m.d)("Albania", "format-country");
                case "AM":
                    return Object(m.d)("Armenia", "format-country");
                case "AO":
                    return Object(m.d)("Angola", "format-country");
                case "AP":
                    return Object(m.d)("Asia/Pacific Region", "format-country");
                case "AQ":
                    return Object(m.d)("Antarctica", "format-country");
                case "AR":
                    return Object(m.d)("Argentina", "format-country");
                case "AS":
                    return Object(m.d)("American Samoa", "format-country");
                case "AT":
                    return Object(m.d)("Austria", "format-country");
                case "AU":
                    return Object(m.d)("Australia", "format-country");
                case "AW":
                    return Object(m.d)("Aruba", "format-country");
                case "AX":
                    return Object(m.d)("Aland Islands", "format-country");
                case "AZ":
                    return Object(m.d)("Azerbaijan", "format-country");
                case "BA":
                    return Object(m.d)("Bosnia and Herzegovina", "format-country");
                case "BB":
                    return Object(m.d)("Barbados", "format-country");
                case "BD":
                    return Object(m.d)("Bangladesh", "format-country");
                case "BE":
                    return Object(m.d)("Belgium", "format-country");
                case "BF":
                    return Object(m.d)("Burkina Faso", "format-country");
                case "BG":
                    return Object(m.d)("Bulgaria", "format-country");
                case "BH":
                    return Object(m.d)("Bahrain", "format-country");
                case "BI":
                    return Object(m.d)("Burundi", "format-country");
                case "BJ":
                    return Object(m.d)("Benin", "format-country");
                case "BL":
                    return Object(m.d)("Saint Bartelemey", "format-country");
                case "BM":
                    return Object(m.d)("Bermuda", "format-country");
                case "BN":
                    return Object(m.d)("Brunei", "format-country");
                case "BO":
                    return Object(m.d)("Bolivia", "format-country");
                case "BQ":
                    return Object(m.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                case "BR":
                    return Object(m.d)("Brazil", "format-country");
                case "BS":
                    return Object(m.d)("Bahamas", "format-country");
                case "BT":
                    return Object(m.d)("Bhutan", "format-country");
                case "BV":
                    return Object(m.d)("Bouvet Island", "format-country");
                case "BW":
                    return Object(m.d)("Botswana", "format-country");
                case "BY":
                    return Object(m.d)("Belarus", "format-country");
                case "BZ":
                    return Object(m.d)("Belize", "format-country");
                case "CA":
                    return Object(m.d)("Canada", "format-country");
                case "CC":
                    return Object(m.d)("Cocos (Keeling) Islands", "format-country");
                case "CD":
                    return Object(m.d)("Congo, The Democratic Republic of the", "format-country");
                case "CF":
                    return Object(m.d)("Central African Republic", "format-country");
                case "CG":
                    return Object(m.d)("Congo", "format-country");
                case "CH":
                    return Object(m.d)("Switzerland", "format-country");
                case "CI":
                    return Object(m.d)("Ivory Coast", "format-country");
                case "CK":
                    return Object(m.d)("Cook Islands", "format-country");
                case "CL":
                    return Object(m.d)("Chile", "format-country");
                case "CM":
                    return Object(m.d)("Cameroon", "format-country");
                case "CN":
                    return Object(m.d)("China", "format-country");
                case "CO":
                    return Object(m.d)("Colombia", "format-country");
                case "CR":
                    return Object(m.d)("Costa Rica", "format-country");
                case "CU":
                    return Object(m.d)("Cuba", "format-country");
                case "CV":
                    return Object(m.d)("Cape Verde", "format-country");
                case "CW":
                    return Object(m.d)("Curacao", "format-country");
                case "CX":
                    return Object(m.d)("Christmas Island", "format-country");
                case "CY":
                    return Object(m.d)("Cyprus", "format-country");
                case "CZ":
                    return Object(m.d)("Czech Republic", "format-country");
                case "DE":
                    return Object(m.d)("Germany", "format-country");
                case "DJ":
                    return Object(m.d)("Djibouti", "format-country");
                case "DK":
                    return Object(m.d)("Denmark", "format-country");
                case "DM":
                    return Object(m.d)("Dominica", "format-country");
                case "DO":
                    return Object(m.d)("Dominican Republic", "format-country");
                case "DZ":
                    return Object(m.d)("Algeria", "format-country");
                case "EC":
                    return Object(m.d)("Ecuador", "format-country");
                case "EE":
                    return Object(m.d)("Estonia", "format-country");
                case "EG":
                    return Object(m.d)("Egypt", "format-country");
                case "EH":
                    return Object(m.d)("Western Sahara", "format-country");
                case "ER":
                    return Object(m.d)("Eritrea", "format-country");
                case "ES":
                    return Object(m.d)("Spain", "format-country");
                case "ET":
                    return Object(m.d)("Ethiopia", "format-country");
                case "EU":
                    return Object(m.d)("Europe", "format-country");
                case "FI":
                    return Object(m.d)("Finland", "format-country");
                case "FJ":
                    return Object(m.d)("Fiji", "format-country");
                case "FK":
                    return Object(m.d)("Falkland Islands (Malvinas)", "format-country");
                case "FM":
                    return Object(m.d)("Micronesia", "format-country");
                case "FO":
                    return Object(m.d)("Faroe Islands", "format-country");
                case "FR":
                    return Object(m.d)("France", "format-country");
                case "GA":
                    return Object(m.d)("Gabon", "format-country");
                case "GB":
                    return Object(m.d)("United Kingdom", "format-country");
                case "GD":
                    return Object(m.d)("Grenada", "format-country");
                case "GE":
                    return Object(m.d)("Georgia", "format-country");
                case "GF":
                    return Object(m.d)("French Guiana", "format-country");
                case "GG":
                    return Object(m.d)("Guernsey", "format-country");
                case "GH":
                    return Object(m.d)("Ghana", "format-country");
                case "GI":
                    return Object(m.d)("Gibraltar", "format-country");
                case "GL":
                    return Object(m.d)("Greenland", "format-country");
                case "GM":
                    return Object(m.d)("Gambia", "format-country");
                case "GN":
                    return Object(m.d)("Guinea", "format-country");
                case "GP":
                    return Object(m.d)("Guadeloupe", "format-country");
                case "GQ":
                    return Object(m.d)("Equatorial Guinea", "format-country");
                case "GR":
                    return Object(m.d)("Greece", "format-country");
                case "GS":
                    return Object(m.d)("South Georgia and the South Sandwich Islands", "format-country");
                case "GT":
                    return Object(m.d)("Guatemala", "format-country");
                case "GU":
                    return Object(m.d)("Guam", "format-country");
                case "GW":
                    return Object(m.d)("Guinea-Bissau", "format-country");
                case "GY":
                    return Object(m.d)("Guyana", "format-country");
                case "HK":
                    return Object(m.d)("Hong Kong", "format-country");
                case "HM":
                    return Object(m.d)("Heard Island and McDonald Islands", "format-country");
                case "HN":
                    return Object(m.d)("Honduras", "format-country");
                case "HR":
                    return Object(m.d)("Croatia", "format-country");
                case "HT":
                    return Object(m.d)("Haiti", "format-country");
                case "HU":
                    return Object(m.d)("Hungary", "format-country");
                case "ID":
                    return Object(m.d)("Indonesia", "format-country");
                case "IE":
                    return Object(m.d)("Ireland", "format-country");
                case "IL":
                    return Object(m.d)("Israel", "format-country");
                case "IM":
                    return Object(m.d)("Isle of Man", "format-country");
                case "IN":
                    return Object(m.d)("India", "format-country");
                case "IO":
                    return Object(m.d)("British Indian Ocean Territory", "format-country");
                case "IQ":
                    return Object(m.d)("Iraq", "format-country");
                case "IR":
                    return Object(m.d)("Iran", "format-country");
                case "IS":
                    return Object(m.d)("Iceland", "format-country");
                case "IT":
                    return Object(m.d)("Italy", "format-country");
                case "JE":
                    return Object(m.d)("Jersey", "format-country");
                case "JM":
                    return Object(m.d)("Jamaica", "format-country");
                case "JO":
                    return Object(m.d)("Jordan", "format-country");
                case "JP":
                    return Object(m.d)("Japan", "format-country");
                case "KE":
                    return Object(m.d)("Kenya", "format-country");
                case "KG":
                    return Object(m.d)("Kyrgyzstan", "format-country");
                case "KH":
                    return Object(m.d)("Cambodia", "format-country");
                case "KI":
                    return Object(m.d)("Kiribati", "format-country");
                case "KM":
                    return Object(m.d)("Comoros", "format-country");
                case "KN":
                    return Object(m.d)("Saint Kitts and Nevis", "format-country");
                case "KP":
                    return Object(m.d)("North Korea", "format-country");
                case "KR":
                    return Object(m.d)("South Korea", "format-country");
                case "KW":
                    return Object(m.d)("Kuwait", "format-country");
                case "KY":
                    return Object(m.d)("Cayman Islands", "format-country");
                case "KZ":
                    return Object(m.d)("Kazakhstan", "format-country");
                case "LA":
                    return Object(m.d)("Laos", "format-country");
                case "LB":
                    return Object(m.d)("Lebanon", "format-country");
                case "LC":
                    return Object(m.d)("Saint Lucia", "format-country");
                case "LI":
                    return Object(m.d)("Liechtenstein", "format-country");
                case "LK":
                    return Object(m.d)("Sri Lanka", "format-country");
                case "LR":
                    return Object(m.d)("Liberia", "format-country");
                case "LS":
                    return Object(m.d)("Lesotho", "format-country");
                case "LT":
                    return Object(m.d)("Lithuania", "format-country");
                case "LU":
                    return Object(m.d)("Luxembourg", "format-country");
                case "LV":
                    return Object(m.d)("Latvia", "format-country");
                case "LY":
                    return Object(m.d)("Libya", "format-country");
                case "MA":
                    return Object(m.d)("Morocco", "format-country");
                case "MC":
                    return Object(m.d)("Monaco", "format-country");
                case "MD":
                    return Object(m.d)("Moldova", "format-country");
                case "ME":
                    return Object(m.d)("Montenegro", "format-country");
                case "MF":
                    return Object(m.d)("Saint Martin", "format-country");
                case "MG":
                    return Object(m.d)("Madagascar", "format-country");
                case "MH":
                    return Object(m.d)("Marshall Islands", "format-country");
                case "MK":
                    return Object(m.d)("Macedonia", "format-country");
                case "ML":
                    return Object(m.d)("Mali", "format-country");
                case "MM":
                    return Object(m.d)("Myanmar", "format-country");
                case "MN":
                    return Object(m.d)("Mongolia", "format-country");
                case "MO":
                    return Object(m.d)("Macao", "format-country");
                case "MP":
                    return Object(m.d)("Northern Mariana Islands", "format-country");
                case "MQ":
                    return Object(m.d)("Martinique", "format-country");
                case "MR":
                    return Object(m.d)("Mauritania", "format-country");
                case "MS":
                    return Object(m.d)("Montserrat", "format-country");
                case "MT":
                    return Object(m.d)("Malta", "format-country");
                case "MU":
                    return Object(m.d)("Mauritius", "format-country");
                case "MV":
                    return Object(m.d)("Maldives", "format-country");
                case "MW":
                    return Object(m.d)("Malawi", "format-country");
                case "MX":
                    return Object(m.d)("Mexico", "format-country");
                case "MY":
                    return Object(m.d)("Malaysia", "format-country");
                case "MZ":
                    return Object(m.d)("Mozambique", "format-country");
                case "NA":
                    return Object(m.d)("Namibia", "format-country");
                case "NC":
                    return Object(m.d)("New Caledonia", "format-country");
                case "NE":
                    return Object(m.d)("Niger", "format-country");
                case "NF":
                    return Object(m.d)("Norfolk Island", "format-country");
                case "NG":
                    return Object(m.d)("Nigeria", "format-country");
                case "NI":
                    return Object(m.d)("Nicaragua", "format-country");
                case "NL":
                    return Object(m.d)("Netherlands", "format-country");
                case "NO":
                    return Object(m.d)("Norway", "format-country");
                case "NP":
                    return Object(m.d)("Nepal", "format-country");
                case "NR":
                    return Object(m.d)("Nauru", "format-country");
                case "NU":
                    return Object(m.d)("Niue", "format-country");
                case "NZ":
                    return Object(m.d)("New Zealand", "format-country");
                case "O1":
                    return Object(m.d)("Other Country", "format-country");
                case "OM":
                    return Object(m.d)("Oman", "format-country");
                case "PA":
                    return Object(m.d)("Panama", "format-country");
                case "PE":
                    return Object(m.d)("Peru", "format-country");
                case "PF":
                    return Object(m.d)("French Polynesia", "format-country");
                case "PG":
                    return Object(m.d)("Papua New Guinea", "format-country");
                case "PH":
                    return Object(m.d)("Philippines", "format-country");
                case "PK":
                    return Object(m.d)("Pakistan", "format-country");
                case "PL":
                    return Object(m.d)("Poland", "format-country");
                case "PM":
                    return Object(m.d)("Saint Pierre and Miquelon", "format-country");
                case "PN":
                    return Object(m.d)("Pitcairn", "format-country");
                case "PR":
                    return Object(m.d)("Puerto Rico", "format-country");
                case "PS":
                    return Object(m.d)("Palestine", "format-country");
                case "PT":
                    return Object(m.d)("Portugal", "format-country");
                case "PW":
                    return Object(m.d)("Palau", "format-country");
                case "PY":
                    return Object(m.d)("Paraguay", "format-country");
                case "QA":
                    return Object(m.d)("Qatar", "format-country");
                case "RE":
                    return Object(m.d)("Reunion", "format-country");
                case "RO":
                    return Object(m.d)("Romania", "format-country");
                case "RS":
                    return Object(m.d)("Serbia", "format-country");
                case "RU":
                    return Object(m.d)("Russia", "format-country");
                case "RW":
                    return Object(m.d)("Rwanda", "format-country");
                case "SA":
                    return Object(m.d)("Saudi Arabia", "format-country");
                case "SB":
                    return Object(m.d)("Solomon Islands", "format-country");
                case "SC":
                    return Object(m.d)("Seychelles", "format-country");
                case "SD":
                    return Object(m.d)("Sudan", "format-country");
                case "SE":
                    return Object(m.d)("Sweden", "format-country");
                case "SG":
                    return Object(m.d)("Singapore", "format-country");
                case "SH":
                    return Object(m.d)("Saint Helena", "format-country");
                case "SI":
                    return Object(m.d)("Slovenia", "format-country");
                case "SJ":
                    return Object(m.d)("Svalbard and Jan Mayen", "format-country");
                case "SK":
                    return Object(m.d)("Slovakia", "format-country");
                case "SL":
                    return Object(m.d)("Sierra Leone", "format-country");
                case "SM":
                    return Object(m.d)("San Marino", "format-country");
                case "SN":
                    return Object(m.d)("Senegal", "format-country");
                case "SO":
                    return Object(m.d)("Somalia", "format-country");
                case "SR":
                    return Object(m.d)("Suriname", "format-country");
                case "SS":
                    return Object(m.d)("South Sudan", "format-country");
                case "ST":
                    return Object(m.d)("Sao Tome and Principe", "format-country");
                case "SV":
                    return Object(m.d)("El Salvador", "format-country");
                case "SX":
                    return Object(m.d)("Sint Maarten", "format-country");
                case "SY":
                    return Object(m.d)("Syria", "format-country");
                case "SZ":
                    return Object(m.d)("Swaziland", "format-country");
                case "TC":
                    return Object(m.d)("Turks and Caicos Islands", "format-country");
                case "TD":
                    return Object(m.d)("Chad", "format-country");
                case "TF":
                    return Object(m.d)("French Southern Territories", "format-country");
                case "TG":
                    return Object(m.d)("Togo", "format-country");
                case "TH":
                    return Object(m.d)("Thailand", "format-country");
                case "TJ":
                    return Object(m.d)("Tajikistan", "format-country");
                case "TK":
                    return Object(m.d)("Tokelau", "format-country");
                case "TL":
                    return Object(m.d)("East Timor", "format-country");
                case "TM":
                    return Object(m.d)("Turkmenistan", "format-country");
                case "TN":
                    return Object(m.d)("Tunisia", "format-country");
                case "TO":
                    return Object(m.d)("Tonga", "format-country");
                case "TR":
                    return Object(m.d)("Turkey", "format-country");
                case "TT":
                    return Object(m.d)("Trinidad and Tobago", "format-country");
                case "TV":
                    return Object(m.d)("Tuvalu", "format-country");
                case "TW":
                    return Object(m.d)("Taiwan", "format-country");
                case "TZ":
                    return Object(m.d)("Tanzania", "format-country");
                case "UA":
                    return Object(m.d)("Ukraine", "format-country");
                case "UG":
                    return Object(m.d)("Uganda", "format-country");
                case "UM":
                    return Object(m.d)("United States Minor Outlying Islands", "format-country");
                case "US":
                    return Object(m.d)("United States", "format-country");
                case "UY":
                    return Object(m.d)("Uruguay", "format-country");
                case "UZ":
                    return Object(m.d)("Uzbekistan", "format-country");
                case "VA":
                    return Object(m.d)("Vatican City", "format-country");
                case "VC":
                    return Object(m.d)("Saint Vincent and the Grenadines", "format-country");
                case "VE":
                    return Object(m.d)("Venezuela", "format-country");
                case "VG":
                    return Object(m.d)("British Virgin Islands", "format-country");
                case "VI":
                    return Object(m.d)("U.S. Virgin Islands", "format-country");
                case "VN":
                    return Object(m.d)("Vietnam", "format-country");
                case "VU":
                    return Object(m.d)("Vanuatu", "format-country");
                case "WF":
                    return Object(m.d)("Wallis and Futuna", "format-country");
                case "WS":
                    return Object(m.d)("Samoa", "format-country");
                case "YE":
                    return Object(m.d)("Yemen", "format-country");
                case "YT":
                    return Object(m.d)("Mayotte", "format-country");
                case "ZA":
                    return Object(m.d)("South Africa", "format-country");
                case "ZM":
                    return Object(m.d)("Zambia", "format-country");
                case "ZW":
                    return Object(m.d)("Zimbabwe", "format-country");
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, i = n("RH2O"),
            s = n("2KeS"),
            o = n("+xm8"),
            d = n("f2i/"),
            u = n("Aj/L"),
            l = n("TToO"),
            c = n("U7vG"),
            h = n("CIox"),
            m = n("6sO2"),
            _ = n("w9tK"),
            f = n("CSlQ"),
            p = n("Odds"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        inputValue: "",
                        buttonDisabled: !0,
                        changedSinceSubmit: !1
                    }, t.renderDescriptor = function() {
                        return t.props.descriptor.split("\n").map(function(e, t) {
                            return c.createElement(p._27, {
                                key: t
                            }, e)
                        })
                    }, t.renderButton = function() {
                        var e = c.createElement(p.u, {
                                disabled: t.state.buttonDisabled,
                                onClick: t.handleSubmit
                            }, t.props.buttonText),
                            n = c.createElement(p._35, {
                                label: t.props.errorString,
                                direction: p._37.Right,
                                show: !0
                            }, e);
                        return t.props.errorString.length && !t.state.changedSinceSubmit ? n : e
                    }, t.handleChangeInput = function(e) {
                        var n = e.target.value;
                        t.setState({
                            inputValue: n,
                            buttonDisabled: 0 === n.length,
                            changedSinceSubmit: !0
                        })
                    }, t.handleSubmit = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.setState({
                                            buttonDisabled: !0
                                        }), [4, this.props.submitAction(this.state.inputValue.toLowerCase())];
                                    case 1:
                                        return e.sent(), this.setState({
                                            buttonDisabled: !1,
                                            changedSinceSubmit: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(p._1, {
                        alignSelf: p.d.Start,
                        display: p.M.Flex,
                        flexDirection: p.O.Column
                    }, this.renderDescriptor(), c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row
                    }, c.createElement(p._1, null, c.createElement(p.X, {
                        type: p.Y.Text,
                        placeholder: this.props.placeholder,
                        value: this.state.inputValue,
                        onChange: this.handleChangeInput,
                        maxLength: 25
                    })), this.renderButton()))
                }, t
            }(c.Component),
            y = n("zCIC");
        n("A5K9");
        ! function(e) {
            e.ToTop = "move-to-top", e.Up = "move-up", e.Down = "move-down", e.ToBottom = "move-to-bottom"
        }(r || (r = {}));
        var M;
        ! function(e) {
            e.AllButtons = "all-buttons", e.RemoveOnly = "remove-button-only", e.MoveUpAndRemoveOnly = "move-up-and-remove-buttons-only", e.MoveDownAndRemoveOnly = "move-down-and-remove-buttons-only"
        }(M || (M = {}));
        var v, b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHovered: !1
                    }, t.renderButtons = function() {
                        var e = t.props.buttonConfiguration === M.AllButtons,
                            n = e || t.props.buttonConfiguration === M.MoveUpAndRemoveOnly,
                            a = e || t.props.buttonConfiguration === M.MoveDownAndRemoveOnly;
                        return c.createElement(p._1, null, n && c.createElement(p._35, {
                            label: Object(m.d)("Move To Top", "TeamsDashboard"),
                            direction: p._37.Left
                        }, c.createElement(p.u, {
                            type: p.z.Text,
                            blurAfterClick: !0,
                            icon: p._15.ToTop,
                            onClick: t.handleOnMoveClick(r.ToTop),
                            disabled: t.props.isDisabled
                        })), n && c.createElement(p._35, {
                            label: Object(m.d)("Move Up", "TeamsDashboard"),
                            direction: p._37.Left
                        }, c.createElement(p.u, {
                            type: p.z.Text,
                            blurAfterClick: !0,
                            icon: p._15.ArrowUp,
                            onClick: t.handleOnMoveClick(r.Up),
                            disabled: t.props.isDisabled
                        })), a && c.createElement(p._35, {
                            label: Object(m.d)("Move Down", "TeamsDashboard"),
                            direction: p._37.Left
                        }, c.createElement(p.u, {
                            type: p.z.Text,
                            blurAfterClick: !0,
                            icon: p._15.ArrowDown,
                            onClick: t.handleOnMoveClick(r.Down),
                            disabled: t.props.isDisabled
                        })), a && c.createElement(p._35, {
                            label: Object(m.d)("Move To Bottom", "TeamsDashboard"),
                            direction: p._37.Left
                        }, c.createElement(p.u, {
                            type: p.z.Text,
                            blurAfterClick: !0,
                            icon: p._15.ToBottom,
                            onClick: t.handleOnMoveClick(r.ToBottom),
                            disabled: t.props.isDisabled
                        })), c.createElement(p._35, {
                            label: Object(m.d)("Remove", "TeamsDashboard"),
                            direction: p._37.Left
                        }, c.createElement(p.u, {
                            type: p.z.Text,
                            blurAfterClick: !0,
                            icon: p._15.Trash,
                            onClick: t.handleDeleteClick,
                            disabled: t.props.isDisabled
                        })))
                    }, t.handleMouseEnter = function() {
                        return t.setState({
                            isHovered: !0
                        })
                    }, t.handleMouseLeave = function() {
                        return t.setState({
                            isHovered: !1
                        })
                    }, t.handleDeleteClick = function() {
                        return t.props.onDeleteClick(t.props.member.id)
                    }, t.handleOnMoveClick = function(e) {
                        return function() {
                            t.props.onMoveClick(t.props.member.id, e)
                        }
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("{displayName}'s Avatar Image", {
                        displayName: this.props.member.displayName
                    }, "TeamsDashboard");
                    return c.createElement("div", {
                        "data-test-selector": this.props.listItemsSelector,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                    }, c.createElement(p._23, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        justifyContent: p._0.Between,
                        padding: 1,
                        borderBottom: !0,
                        fullWidth: !0
                    }, c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        alignItems: p.c.Center
                    }, c.createElement(p.l, {
                        src: this.props.member.avatarSrc,
                        alt: e,
                        size: 30
                    }), c.createElement(p._1, {
                        margin: {
                            left: 1
                        }
                    }, c.createElement(p._27, null, this.props.member.displayName))), c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        alignItems: p.c.Center
                    }, this.state.isHovered && this.renderButtons())))
                }, t
            }(c.Component),
            L = function(e) {
                var t = function(t, n) {
                    var a, i = e.members.findIndex(function(e) {
                        return e.id === t
                    });
                    switch (n) {
                        case r.ToTop:
                            a = 0;
                            break;
                        case r.Up:
                            a = i - 1;
                            break;
                        case r.Down:
                            a = i + 1;
                            break;
                        case r.ToBottom:
                            a = e.members.length - 1;
                            break;
                        default:
                            a = i
                    }
                    e.onMoveClick(t, a)
                };
                return c.createElement(p._1, {
                    fullWidth: !0,
                    margin: {
                        top: 2,
                        bottom: 2
                    }
                }, e.header && c.createElement(p._27, {
                    type: p._32.H3
                }, e.header), e.members.length ? function(n) {
                    var a = e.onMoveClick ? t : void 0;
                    return c.createElement(y.b, null, c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Column
                    }, n.map(function(t, r) {
                        return c.createElement(b, {
                            key: t.id,
                            buttonConfiguration: function(t, n) {
                                if (!e.onMoveClick) return M.RemoveOnly;
                                var a = 0 === t,
                                    r = t === n - 1;
                                return a && r ? M.RemoveOnly : a ? M.MoveDownAndRemoveOnly : r ? M.MoveUpAndRemoveOnly : M.AllButtons
                            }(r, n.length),
                            member: t,
                            listItemsSelector: e.listItemsSelector,
                            onDeleteClick: e.onDeleteClick,
                            onMoveClick: a,
                            isDisabled: e.isDisabled
                        })
                    })))
                }(e.members) : c.createElement(p._27, null, e.emptyStateText))
            },
            D = function(e) {
                return c.createElement(y.b, null, c.createElement(p._1, {
                    display: p.M.Flex,
                    flexDirection: p.O.Column,
                    alignItems: p.c.Start,
                    padding: 2
                }, c.createElement(p._1, {
                    display: p.M.Flex,
                    padding: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, c.createElement(p._27, {
                    "data-test-selector": e.titleSelector,
                    type: p._32.H1
                }, e.title)), e.children))
            };
        ! function(e) {
            e.Revenue = "revenue", e.Stats = "stats", e.Members = "members", e.FeaturedChannels = "featured-channels", e.Settings = "settings"
        }(v || (v = {}));
        var k;
        ! function(e) {
            e.ChannelNotFoundByLogin = "CHANNEL_NOT_FOUND_BY_LOGIN", e.ChannelPendingInvitation = "CHANNEL_PENDING_INVITATION", e.ChannelAlreadyMember = "CHANNEL_ALREADY_MEMBER", e.ChannelAlreadyFeatured = "CHANNEL_ALREADY_FEATURED"
        }(k || (k = {}));
        var Y, w = function(e) {
                for (var t in k)
                    if (e.includes(k[t])) return k[t];
                return ""
            },
            x = function(e) {
                switch (e) {
                    case k.ChannelNotFoundByLogin:
                        return Object(m.d)("Channel not found", "TeamsDashboard");
                    case k.ChannelPendingInvitation:
                        return Object(m.d)("Channel has a pending invitation", "TeamsDashboard");
                    case k.ChannelAlreadyMember:
                        return Object(m.d)("Channel is already a member", "TeamsDashboard");
                    case k.ChannelAlreadyFeatured:
                        return Object(m.d)("Channel is already featured", "TeamsDashboard");
                    default:
                        return Object(m.d)("Unknown Error", "TeamsDashboard")
                }
            },
            T = 100,
            S = function(e) {
                return e.map(O)
            },
            O = function(e) {
                return {
                    id: e._id,
                    displayName: e.display_name,
                    avatarSrc: e.logo
                }
            },
            j = function(e, t) {
                return e.map(function(e, n) {
                    return {
                        id: e.id,
                        displayName: e.displayName,
                        avatarSrc: e.avatarSrc,
                        checked: t && n < T
                    }
                })
            },
            H = function(e) {
                return e.filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                })
            },
            C = function() {
                return Object(m.d)("Enter channel login", "TeamsDashboard")
            },
            P = function(e) {
                switch (e) {
                    case v.Revenue:
                        return Object(m.d)("Revenue", "TeamsDashboard");
                    case v.Stats:
                        return Object(m.d)("Stats", "TeamsDashboard");
                    case v.Members:
                        return Object(m.d)("Members", "TeamsDashboard");
                    case v.FeaturedChannels:
                        return Object(m.d)("Featured Channels", "TeamsDashboard");
                    case v.Settings:
                        return Object(m.d)("Settings", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            A = n("9u8h"),
            F = this,
            E = function(e, t) {
                return l.__awaiter(F, void 0, void 0, function() {
                    var n, a, r, i;
                    return l.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return n = "/v5/teams/" + e + "/dashboard/featured_channels", [4, A.a.post(n, {
                                    body: {
                                        channel_login: t
                                    }
                                })];
                            case 1:
                                return (a = s.sent()).body && 200 === a.status ? [2, O(a.body.featured_channel.channel)] : (r = a.error.message) && "" !== (i = w(r)) ? [2, Promise.reject(i)] : [2, Promise.reject(JSON.stringify(a.error))]
                        }
                    })
                })
            },
            W = this,
            I = this,
            N = function(e, t) {
                return B("/v5/teams/" + e + "/dashboard/channels/" + t + "/membership")
            },
            R = function(e, t) {
                return B("/v5/teams/" + e + "/dashboard/featured_channels/" + t)
            },
            z = function(e, t) {
                return B("/v5/teams/" + e + "/dashboard/channels/" + t + "/invitation")
            },
            B = function(e) {
                return l.__awaiter(I, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, A.a.delete(e)];
                            case 1:
                                return t = n.sent(), [2, 204 === t.status]
                        }
                    })
                })
            },
            J = this,
            V = function(e, t, n) {
                return G("/v5/teams/" + e + "/dashboard/channels/" + t + "/membership", n)
            },
            U = function(e, t, n) {
                return G("/v5/teams/" + e + "/dashboard/featured_channels/" + t, n)
            },
            G = function(e, t) {
                return l.__awaiter(J, void 0, void 0, function() {
                    var n;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, A.a.put(e, {
                                    body: {
                                        display_position: t
                                    }
                                })];
                            case 1:
                                return n = a.sent(), [2, 204 === n.status]
                        }
                    })
                })
            },
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        featuredChannels: [],
                        tooltipError: "",
                        isDisabled: !1
                    }, t.handleAddFeaturedChannel = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            tooltipError: ""
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, E(this.props.teamName, e)];
                                    case 2:
                                        return t = a.sent(), this.setState({
                                            featuredChannels: this.state.featuredChannels.concat(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.setState({
                                            tooltipError: x(n)
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleDeleteFeaturedChannel = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            isDisabled: !0
                                        }), [4, R(this.props.teamName, e)];
                                    case 1:
                                        return t.sent() && this.setState({
                                            featuredChannels: this.state.featuredChannels.filter(function(t) {
                                                return t.id !== e
                                            })
                                        }), this.setState({
                                            isDisabled: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.handleMoveFeaturedChannel = function(e, n) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, a;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.setState({
                                            isDisabled: !0
                                        }), [4, U(this.props.teamName, e, n)];
                                    case 1:
                                        return r.sent() && (t = this.state.featuredChannels.findIndex(function(t) {
                                            return t.id === e
                                        }), (a = this.state.featuredChannels.slice()).splice(n, 0, a.splice(t, 1)[0]), this.setState({
                                            featuredChannels: a
                                        })), this.setState({
                                            isDisabled: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return l.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = this.setState, t = {}, [4, function(e) {
                                        return l.__awaiter(W, void 0, void 0, function() {
                                            var t, n, a;
                                            return l.__generator(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return t = "/v5/teams/" + e + "/dashboard/featured_channels", [4, A.a.get(t)];
                                                    case 1:
                                                        return !(n = r.sent()).body || 200 !== n.status || n.error || n.requestError ? [2, []] : (a = n.body.featured_channels.map(function(e) {
                                                            return e.channel
                                                        }), [2, S(a)])
                                                }
                                            })
                                        })
                                    }(this.props.teamName)];
                                case 1:
                                    return e.apply(this, [(t.featuredChannels = n.sent(), t)]), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return c.createElement(D, {
                        title: P(v.FeaturedChannels),
                        titleSelector: "featured-channels-page-title"
                    }, c.createElement(g, {
                        descriptor: Object(m.d)("Pick channels to feature. Featured channels do not need to be a member of the team.\nIf none of the featured channels are live, your team will feature a live member based on member ordering.", "TeamsDashboard"),
                        placeholder: C(),
                        buttonText: Object(m.d)("Add", "TeamsDashboard"),
                        submitAction: this.handleAddFeaturedChannel,
                        errorString: this.state.tooltipError
                    }), c.createElement(L, {
                        emptyStateText: Object(m.d)("No featured channels.", "TeamsDashboard"),
                        members: this.state.featuredChannels,
                        listItemsSelector: "featured-channels-list-items",
                        onDeleteClick: this.handleDeleteFeaturedChannel,
                        isDisabled: this.state.isDisabled,
                        onMoveClick: this.handleMoveFeaturedChannel
                    }))
                }, t = l.__decorate([Object(f.d)("FeaturedChannelsPage", {
                    autoReportInteractive: !0,
                    destination: _.a.TeamsDashboardFeaturedChannels
                })], t)
            }(c.Component),
            K = n("PGY2"),
            Z = this,
            X = this;
        ! function(e) {
            e.StatsRevealed = "stats_revealed", e.RevenueRevealed = "revenue_revealed"
        }(Y || (Y = {}));
        var Q, $ = function(e, t) {
                return l.__awaiter(X, void 0, void 0, function() {
                    var n, a, r, i;
                    return l.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return n = t ? "?" + t + "=true" : "", a = "/v5/teams/" + e + "/dashboard/members" + n, [4, Object(K.d)({
                                    path: a
                                })];
                            case 1:
                                return r = s.sent(), i = r.body ? r.body.channels : [], [2, S(i)]
                        }
                    })
                })
            },
            ee = this,
            te = function(e, t) {
                return l.__awaiter(ee, void 0, void 0, function() {
                    var n, a, r, i;
                    return l.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return n = "/v5/teams/" + e + "/dashboard/invitations", [4, A.a.post(n, {
                                    body: {
                                        channel_login: t
                                    }
                                })];
                            case 1:
                                return (a = s.sent()).body && 200 === a.status ? [2, O(a.body.invitation.channel)] : (r = a.error.message) && "" !== (i = w(r)) ? [2, Promise.reject(i)] : [2, Promise.reject(JSON.stringify(a.error))]
                        }
                    })
                })
            },
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        members: [],
                        invitations: [],
                        invitationError: "",
                        isDisabled: !1
                    }, t.onInviteClick = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, n, a;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            invitationError: ""
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, te(this.props.teamName, e)];
                                    case 2:
                                        return t = r.sent(), n = this.state.invitations.concat(t), this.setState({
                                            invitations: n
                                        }), [3, 4];
                                    case 3:
                                        return a = r.sent(), this.setState({
                                            invitationError: x(a)
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleMoveMember = function(e, n) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, a;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.setState({
                                            isDisabled: !0
                                        }), [4, V(this.props.teamName, e, n)];
                                    case 1:
                                        return r.sent() && (t = this.state.members.findIndex(function(t) {
                                            return t.id === e
                                        }), (a = this.state.members.slice()).splice(n, 0, a.splice(t, 1)[0]), this.setState({
                                            members: a
                                        })), this.setState({
                                            isDisabled: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.handleDeleteInvitation = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            isDisabled: !0
                                        }), [4, z(this.props.teamName, e)];
                                    case 1:
                                        return t.sent() && this.setState({
                                            invitations: this.state.invitations.filter(function(t) {
                                                return t.id !== e
                                            }),
                                            isDisabled: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.handleDeleteMember = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            isDisabled: !0
                                        }), [4, N(this.props.teamName, e)];
                                    case 1:
                                        return t.sent() && this.setState({
                                            members: this.state.members.filter(function(t) {
                                                return t.id !== e
                                            }),
                                            isDisabled: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([$(this.props.teamName), function(e) {
                                        return l.__awaiter(Z, void 0, void 0, function() {
                                            var t, n, a;
                                            return l.__generator(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return t = "/v5/teams/" + e + "/dashboard/invitations", [4, Object(K.d)({
                                                            path: t
                                                        })];
                                                    case 1:
                                                        return n = r.sent(), a = n.body ? n.body.invitations.map(function(e) {
                                                            return e.channel
                                                        }) : [], [2, S(a)]
                                                }
                                            })
                                        })
                                    }(this.props.teamName)])];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        members: e[0],
                                        invitations: e[1]
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return c.createElement(D, {
                        title: P(v.Members),
                        titleSelector: "members-page-title"
                    }, c.createElement(g, {
                        descriptor: Object(m.d)("Live team members will always be at the top. Order is respected for live members and offline members.\nOrder also determines which member will be featured in the video player.", "TeamsDashboard"),
                        placeholder: C(),
                        buttonText: Object(m.d)("Invite", "TeamsDashboard"),
                        submitAction: this.onInviteClick,
                        errorString: this.state.invitationError
                    }), c.createElement(L, {
                        emptyStateText: Object(m.d)("No pending invitations.", "TeamsDashboard"),
                        header: Object(m.d)("Pending Team Invitations", "TeamsDashboard"),
                        members: this.state.invitations,
                        listItemsSelector: "invitations-list-items",
                        onDeleteClick: this.handleDeleteInvitation,
                        isDisabled: this.state.isDisabled
                    }), c.createElement(L, {
                        emptyStateText: Object(m.d)("No team members yet.", "TeamsDashboard"),
                        header: Object(m.d)("Current Members", "TeamsDashboard"),
                        members: this.state.members,
                        listItemsSelector: "members-list-items",
                        onDeleteClick: this.handleDeleteMember,
                        onMoveClick: this.handleMoveMember,
                        isDisabled: this.state.isDisabled
                    }))
                }, t = l.__decorate([Object(f.d)("MembersPage", {
                    autoReportInteractive: !0,
                    destination: _.a.TeamsDashboardMembers
                })], t)
            }(c.Component),
            ae = function(e) {
                return Object(m.c)(e, {
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC"
                })
            },
            re = function(e) {
                var t = Math.floor(e / 3600),
                    n = Math.floor(e % 3600 / 60),
                    a = e % 60 + "s";
                return n && (a = n + "m" + a), t && (a = t + "h" + a), a
            },
            ie = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth()))
            },
            se = function(e, t) {
                var n = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() + 1));
                return n.getTime() > t.getTime() ? t : n
            },
            oe = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() - 1))
            },
            de = function(e) {
                var t = new Date(e.toISOString());
                return t.setUTCHours(e.getUTCHours() + 4), t
            },
            ue = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleChange = function(e) {
                        var t = new Date(e.currentTarget.value),
                            a = ie(t),
                            r = se(a, n.validatedCurrentDate);
                        n.props.onMonthSelection(a, r)
                    }, n.getDropdownOptions = function(e, t) {
                        for (var n = [], a = ie(e); a >= t; a = oe(a)) {
                            var r = a.toISOString();
                            n.push(c.createElement("option", {
                                key: r,
                                value: r
                            }, ae(a)))
                        }
                        return n
                    }, n.validatedCurrentDate = t.currentDate < t.earliestDate ? t.earliestDate : t.currentDate, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return c.createElement(p._1, {
                        className: "month-select-menu"
                    }, c.createElement(p._20, {
                        disabled: this.props.isDisabled,
                        onChange: this.handleChange
                    }, this.getDropdownOptions(this.validatedCurrentDate, this.props.earliestDate)))
                }, t = l.__decorate([Object(f.d)("MonthSelectMenuComponent")], t)
            }(c.Component),
            le = ["twitch_subscriptions", "prime_subscriptions", "bits", "ads"],
            ce = function(e) {
                switch (e) {
                    case "twitch_subscriptions":
                        return Object(m.d)("Sub Revenue", "TeamsDashboard");
                    case "prime_subscriptions":
                        return Object(m.d)("Twitch Prime Revenue", "TeamsDashboard");
                    case "bits":
                        return Object(m.d)("Bits Revenue", "TeamsDashboard");
                    case "ads":
                        return Object(m.d)("Ad Revenue", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            he = n("WaEV"),
            me = function(e) {
                return Object(m.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            _e = 800,
            fe = 380,
            pe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setCanvasResolution(), this.myChart = new he(this.canvas, {
                        type: "bar",
                        data: ye(this.props.datasets, this.props.timestampLabels),
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
                                            return e + Math.round(parseFloat(t))
                                        }, 0);
                                        return me(t) + " - " + function(e) {
                                            return Object(m.c)(e, {
                                                weekday: "short",
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                timeZone: "UTC"
                                            })
                                        }(new Date(e[0].xLabel || "1970-01-01Z"))
                                    },
                                    label: function(e, t) {
                                        return " " + me(Math.round(parseFloat(e.yLabel || "0"))) + " " + (void 0 !== e.datasetIndex && t.datasets ? t.datasets[e.datasetIndex].label : "")
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
                                            return me(e)
                                        }
                                    }
                                }]
                            }
                        }
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.myChart && this.myChart.destroy()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.myChart.data = ye(e.datasets, e.timestampLabels), this.myChart.update()
                }, t.prototype.render = function() {
                    var e = this;
                    return c.createElement(p.V, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, c.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    }))
                }, t.prototype.setCanvasResolution = function() {
                    var e = _e,
                        t = fe,
                        n = ge(this.canvas.getContext("2d"));
                    this.canvas.width = e * n, this.canvas.height = t * n, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t = l.__decorate([Object(f.d)("RevenueCanvas")], t)
            }(c.Component),
            ge = function(e) {
                return 1 / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            ye = function(e, t) {
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
            Me = pe,
            ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatRevenueChartData = function(e) {
                        var t = {
                            twitch_subscriptions: {
                                categoryLabel: ce("twitch_subscriptions"),
                                color: "#7752ba",
                                data: []
                            },
                            prime_subscriptions: {
                                categoryLabel: ce("prime_subscriptions"),
                                color: "#059bdc",
                                data: []
                            },
                            bits: {
                                categoryLabel: ce("bits"),
                                color: "#3dc7ae",
                                data: []
                            },
                            ads: {
                                categoryLabel: ce("ads"),
                                color: "#c5b6e2",
                                data: []
                            },
                            timestampLabels: []
                        };
                        return Object.keys(e).sort().reduce(function(t, n) {
                            return t.timestampLabels.push(n), le.forEach(function(a) {
                                t[a].data.push(e[n][a])
                            }), t
                        }, t)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.formatRevenueChartData(this.props.data),
                        t = le.map(function(t) {
                            return e[t]
                        });
                    return c.createElement(Me, {
                        datasets: t,
                        timestampLabels: e.timestampLabels
                    })
                }, t
            }(c.PureComponent);
        ! function(e) {
            e.Title = "revenue-summary-item-title", e.Symbol = "revenue-summary-item-symbol", e.Dollars = "revenue-summary-item-dollars", e.Cents = "revenue-summary-item-cents"
        }(Q || (Q = {}));
        var be, Le = function(e) {
                var t, n;
                return e.isLoading ? (t = c.createElement(p._27, {
                    type: p._32.H5
                }, c.createElement(p._7, {
                    width: 90
                })), n = c.createElement(p._1, null, c.createElement(p._7, {
                    width: 140,
                    height: e.magnified ? 40 : 30
                }))) : (t = c.createElement(p._27, {
                    color: p.I.Alt2,
                    type: p._32.H5,
                    "data-test-selector": Q.Title
                }, e.title), n = c.createElement(p._1, {
                    alignItems: p.c.Start,
                    display: p.M.Flex,
                    flexDirection: p.O.Row
                }, c.createElement(p._27, {
                    type: e.magnified ? p._32.H4 : p._32.H5,
                    "data-test-selector": Q.Symbol
                }, "$ "), c.createElement(p._27, {
                    type: e.magnified ? p._32.H1 : p._32.H2,
                    "data-test-selector": Q.Dollars
                }, Object(m.e)(Math.floor(e.cents / 100))), c.createElement(p._27, {
                    type: e.magnified ? p._32.H4 : p._32.H5,
                    "data-test-selector": Q.Cents
                }, Object(m.e)(Math.round(e.cents % 100), {
                    minimumIntegerDigits: 2
                })))), c.createElement(p._1, {
                    display: p.M.Flex,
                    flexDirection: p.O.Column,
                    flexGrow: 1,
                    margin: 1
                }, c.createElement(p._1, {
                    margin: e.magnified ? {
                        bottom: .5
                    } : {}
                }, t), n)
            },
            De = function(e) {
                var t = e.revenues.reduce(function(e, t) {
                        return e + t.cents
                    }, 0),
                    n = e.revenues.map(function(t, n) {
                        return c.createElement(Le, {
                            key: n,
                            isLoading: e.isLoading,
                            title: t.title + " " + e.summaryItemTitleSuffix,
                            cents: t.cents
                        })
                    });
                return c.createElement(p._23, {
                    borderMarked: !0,
                    border: !0,
                    fullWidth: !0,
                    background: p.m.Base,
                    display: p.M.Flex,
                    justifyContent: p._0.Between,
                    alignItems: p.c.Center,
                    padding: 1
                }, c.createElement(Le, {
                    isLoading: e.isLoading,
                    title: e.totalTitle + " " + e.summaryItemTitleSuffix,
                    cents: t,
                    magnified: !0
                }), n)
            },
            ke = function(e) {
                return c.createElement(De, {
                    isLoading: e.isLoading,
                    revenues: function(e) {
                        var t = {
                            twitch_subscriptions: 0,
                            prime_subscriptions: 0,
                            bits: 0,
                            ads: 0
                        };
                        return Object.keys(e).forEach(function(n) {
                            var a = e[n];
                            le.forEach(function(e) {
                                t[e] += Math.round(a[e])
                            })
                        }), le.map(function(e) {
                            return {
                                title: ce(e),
                                cents: t[e]
                            }
                        })
                    }(e.data),
                    totalTitle: e.totalTitle,
                    summaryItemTitleSuffix: e.summaryItemTitleSuffix
                })
            },
            Ye = n("+Znq"),
            we = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderMenu = function() {
                        if (t.props.isLoading) return c.createElement(p._7, {
                            width: 180,
                            height: 30
                        });
                        var e = t.props.members.filter(function(e) {
                                return e.checked
                            }).length,
                            n = Object(m.d)("Select All", "TeamsDashboard");
                        return t.props.members.length > T && (n = Object(m.d)("Select First {maxSelected, number}", {
                            maxSelected: T
                        }, "TeamsDashboard")), c.createElement(Ye.a, {
                            onToggle: t.toggleOpenClose
                        }, c.createElement(p.u, {
                            dropdown: !0,
                            type: p.z.Hollow,
                            disabled: t.props.isDisabled
                        }, Object(m.d)("{checkedCount, plural, one {Stats for # Team Member} other {Stats for # Team Members}}", {
                            checkedCount: e
                        }, "TeamsDashboard")), c.createElement(p.p, {
                            direction: p.q.BottomLeft,
                            noTail: !0
                        }, c.createElement(y.b, {
                            className: "team-members-select-menu__scroller"
                        }, c.createElement(p._1, null, c.createElement(p._23, {
                            borderBottom: !0,
                            padding: {
                                top: 1,
                                left: .5,
                                right: .5,
                                bottom: .5
                            }
                        }, c.createElement(p.H, {
                            label: n,
                            checked: t.props.groupChecked,
                            onChange: t.props.toggleGroupChecked
                        })), t.props.members.map(function(n) {
                            var a = {
                                label: n.displayName,
                                checked: n.checked,
                                onChange: t.props.toggleMemberChecked.bind(t, n),
                                disabled: e >= T && !n.checked
                            };
                            return c.createElement(p._23, {
                                margin: {
                                    x: .5,
                                    y: 0
                                },
                                key: n.id
                            }, c.createElement(p.H, l.__assign({}, a)))
                        })))))
                    }, t.toggleOpenClose = function(e) {
                        e && JSON.stringify(t.props.members) !== t.membersPreviouslyCheckedJSON ? t.props.onMemberSelectClose(t.props.members) : t.membersPreviouslyCheckedJSON = JSON.stringify(t.props.members)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(p._1, {
                        className: "team-members-select-menu"
                    }, this.renderMenu())
                }, t = l.__decorate([Object(f.d)("TeamMembersSelectMenu", {
                    autoReportInteractive: !0
                })], t)
            }(c.Component),
            xe = function(e, t, n) {
                return Object.keys(e).reduce(function(n, a) {
                    return n + t(new Date(a), e[a])
                }, n)
            },
            Te = function(e, t) {
                var n = encodeURIComponent(e),
                    a = document.createElement("a");
                a.href = "data:text/csv;charset=utf-8," + n, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a)
            },
            Se = function() {
                return Object(m.d)("Time Zone", "TeamsDashboard")
            },
            Oe = function() {
                return Object(m.d)("Export Data", "TeamsDashboard")
            },
            je = function(e) {
                return He(e) + " " + Ce(e)
            },
            He = function(e) {
                return e.getUTCFullYear() + "-" + Pe(e.getUTCMonth() + 1) + "-" + Pe(e.getUTCDate())
            },
            Ce = function(e) {
                return Pe(e.getUTCHours()) + ":" + Pe(e.getUTCMinutes()) + ":" + Pe(e.getUTCSeconds())
            },
            Pe = function(e) {
                return Object(m.e)(e, {
                    minimumIntegerDigits: 2,
                    maximumFractionDigits: 0
                })
            },
            Ae = this,
            Fe = function(e, t, n, a) {
                return l.__awaiter(Ae, void 0, void 0, function() {
                    var r, i, s;
                    return l.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return r = "/v5/teams/" + e + "/revenues?channel_ids=" + t + "&start_date=" + n + "&end_date=" + a + "&fraction=day", [4, Object(K.d)({
                                    path: r
                                })];
                            case 1:
                                return i = o.sent(), s = Ee(n, a, i.body && i.body.revenues ? i.body.revenues : {}), [2, s]
                        }
                    })
                })
            },
            Ee = function(e, t, n) {
                for (var a = We(e, t), r = 0, i = Object.keys(n); r < i.length; r++)
                    for (var s = i[r], o = 0, d = Object.keys(n[s]); o < d.length; o++) {
                        var u = d[o];
                        if (le.includes(u))
                            for (var l = 0, c = n[s][u]; l < c.length; l++) {
                                var h = c[l],
                                    m = Ie(h.timestamp);
                                a[m] && (a[m][u] += h.cents)
                            }
                    }
                return a
            },
            We = function(e, t) {
                for (var n = {}, a = new Date(Ie(e)); a < new Date(t); a.setUTCDate(a.getUTCDate() + 1)) n[a.toISOString()] = {
                    twitch_subscriptions: 0,
                    prime_subscriptions: 0,
                    bits: 0,
                    ads: 0
                };
                return n
            },
            Ie = function(e) {
                var t = new Date(e);
                return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())).toISOString()
            },
            Ne = function() {
                var e = Object(m.d)("Date", "TeamsDashboard") + "," + Se(),
                    t = "," + Object(m.d)("Total", "TeamsDashboard") + "\n";
                return le.reduce(function(e, t) {
                    return e + "," + ce(t)
                }, e) + t
            },
            Re = function(e, t) {
                var n = He(e) + ",UTC",
                    a = le.reduce(function(e, n) {
                        return e + Math.round(t[n])
                    }, 0),
                    r = "," + ze(a) + "\n";
                return le.reduce(function(e, n) {
                    return e + "," + ze(t[n])
                }, n) + r
            },
            ze = function(e) {
                return Object(m.e)(e / 100, {
                    useGrouping: !1,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
            },
            Be = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleMemberChecked = function(e) {
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
                            t = j(n.state.members, e);
                        n.setState({
                            groupChecked: e,
                            members: t
                        })
                    }, n.handleTimeRangeChange = function(e, t) {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.setState({
                                            isLoadingRevenues: !0
                                        }), [4, Fe(this.props.teamName, H(this.state.members), e.toISOString(), t.toISOString())];
                                    case 1:
                                        return n = a.sent(), this.setState({
                                            startTime: e,
                                            endTime: t,
                                            revenues: n,
                                            isLoadingRevenues: !1
                                        }), [2]
                                }
                            })
                        })
                    }, n.handleMemberSelectionChange = function() {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            isLoadingRevenues: !0
                                        }), [4, Fe(this.props.teamName, H(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            revenues: e,
                                            isLoadingRevenues: !1
                                        }), [2]
                                }
                            })
                        })
                    }, n.handleCSVClick = function() {
                        var e = xe(n.state.revenues, Re, Ne());
                        Te(e, P(v.Revenue) + " - " + ae(n.state.startTime) + ".csv")
                    }, n.state = {
                        isLoadingMembers: !0,
                        members: [],
                        startTime: ie(n.props.currentDate),
                        endTime: n.props.currentDate,
                        groupChecked: !0,
                        isLoadingRevenues: !0,
                        revenues: {}
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t = this;
                        return l.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, $(this.props.teamName, Y.RevenueRevealed)];
                                case 1:
                                    return e = n.sent(), this.setState({
                                        isLoadingMembers: !1,
                                        members: j(e, !0)
                                    }, function() {
                                        return l.__awaiter(t, void 0, void 0, function() {
                                            var e;
                                            return l.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, Fe(this.props.teamName, H(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                                    case 1:
                                                        return e = t.sent(), this.setState({
                                                            isLoadingRevenues: !1,
                                                            revenues: e
                                                        }), [2]
                                                }
                                            })
                                        })
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.state.isLoadingMembers || this.state.isLoadingRevenues;
                    return c.createElement(D, {
                        title: P(v.Revenue),
                        titleSelector: "revenue-page-title"
                    }, c.createElement(p._23, {
                        border: !0,
                        fullWidth: !0
                    }, c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        justifyContent: p._0.Between,
                        margin: 2
                    }, c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row
                    }, c.createElement(p._1, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(we, {
                        isDisabled: e,
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        onMemberSelectClose: this.handleMemberSelectionChange,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), c.createElement(ue, {
                        isDisabled: e,
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), c.createElement(p._1, null, c.createElement(p._27, {
                        color: p.I.Alt2
                    }, Object(m.d)("* All revenue values are estimated (in $USD)", "TeamsDashboard")))), c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        justifyContent: p._0.Between,
                        margin: 2
                    }, c.createElement(ke, {
                        isLoading: e,
                        data: this.state.revenues,
                        totalTitle: Object(m.d)("Total Revenue", "TeamsDashboard"),
                        summaryItemTitleSuffix: "*"
                    })), c.createElement(p._23, {
                        padding: 2,
                        background: p.m.Base,
                        borderTop: !0
                    }, c.createElement(ve, {
                        data: this.state.revenues
                    }), c.createElement(p._1, {
                        textAlign: p._28.Right
                    }, c.createElement(p.u, {
                        disabled: e,
                        "data-test-selector": "revenue-csv-button",
                        icon: p._15.Download,
                        onClick: this.handleCSVClick
                    }, Oe())))))
                }, t = l.__decorate([Object(f.d)("RevenuePage", {
                    autoReportInteractive: !0,
                    destination: _.a.TeamsDashboardRevenue
                })], t)
            }(c.Component),
            Je = n("HW6M"),
            Ve = {
                "side-nav-bar__option": !0,
                "side-nav-bar__option--active": !0
            },
            Ue = Object(f.d)("Navbar", {
                autoReportInteractive: !0
            })(function(e) {
                var t = function(t) {
                    return Je(e.page === t ? Ve : "side-nav-bar__option")
                };
                return c.createElement(p._23, {
                    display: p.M.Block,
                    className: "side-nav-bar",
                    fullHeight: !0,
                    borderRight: !0
                }, c.createElement(p._1, {
                    padding: {
                        top: 2,
                        x: 2
                    },
                    margin: {
                        bottom: .5
                    }
                }, c.createElement(p._27, {
                    type: p._32.H4,
                    fontSize: p.Q.Size5
                }, Object(m.d)("Team Dashboard", "TeamsDashboard"))), c.createElement("ul", null, c.createElement("li", null, c.createElement(p.Z, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + v.Revenue,
                    "data-test-selector": "side-nav-revenue"
                }, c.createElement(p._1, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(v.Revenue)
                }, P(v.Revenue)))), c.createElement("li", null, c.createElement(p.Z, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + v.Stats,
                    "data-test-selector": "side-nav-stats"
                }, c.createElement(p._1, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(v.Stats)
                }, P(v.Stats)))), c.createElement("li", null, c.createElement(p.Z, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + v.Members
                }, c.createElement(p._1, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(v.Members)
                }, P(v.Members)))), c.createElement("li", null, c.createElement(p.Z, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + v.FeaturedChannels
                }, c.createElement(p._1, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(v.FeaturedChannels)
                }, P(v.FeaturedChannels)))), c.createElement("li", null, c.createElement(p.Z, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + v.Settings
                }, c.createElement(p._1, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(v.Settings)
                }, P(v.Settings))))))
            }),
            Ge = n("J8WN"),
            qe = this,
            Ke = function(e) {
                var t = e.team;
                return {
                    name: t.name,
                    displayName: t.display_name,
                    description: t.description,
                    logoURL: t.logo_url,
                    bannerURL: t.banner_url,
                    backgroundImageURL: t.background_image_url
                }
            },
            Ze = function() {
                return l.__awaiter(qe, void 0, void 0, function() {
                    var e;
                    return l.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = Ke, [4, l.__awaiter(qe, void 0, void 0, function() {
                                    return l.__generator(this, function(e) {
                                        return [2, Promise.resolve({
                                            team: {
                                                name: "c9",
                                                display_name: "Cloud 9",
                                                description: "nine clouds playing games",
                                                user_id: "1234",
                                                logo_id: "6789",
                                                logo_url: "aws.s3.com/logos/6789",
                                                banner_id: "1011",
                                                banner_url: "aws.s3.com/banners/1011",
                                                background_image_id: "1213",
                                                background_image_url: "aws.s3.com/background_images/1213"
                                            }
                                        })]
                                    })
                                })];
                            case 1:
                                return [2, e.apply(void 0, [t.sent()])]
                        }
                    })
                })
            };
        ! function(e) {
            e.Logo = "logoURL", e.Banner = "bannerURL", e.BackgroundImage = "backgroundImageURL"
        }(be || (be = {}));
        var Xe, Qe = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.state = {
                    team: {
                        name: "",
                        displayName: "",
                        description: "",
                        logoURL: "",
                        bannerURL: "",
                        backgroundImageURL: ""
                    }
                }, n
            }
            return l.__extends(t, e), t.prototype.componentDidMount = function() {
                return l.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return l.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Ze()];
                            case 1:
                                return e = t.sent(), this.setState({
                                    team: e
                                }), [2]
                        }
                    })
                })
            }, t.prototype.render = function() {
                var e = this.state.team;
                return c.createElement(D, {
                    title: P(v.Settings),
                    titleSelector: "settings-page-title"
                }, c.createElement(p._1, {
                    className: "settings-page"
                }, c.createElement(p._1, {
                    fullWidth: !0
                }, c.createElement(p.R, {
                    label: Object(m.d)("Display Name", "TeamsDashboard")
                }, c.createElement(p.X, {
                    type: p.Y.Text,
                    value: e.displayName
                }))), c.createElement(p._1, {
                    margin: {
                        top: 2
                    },
                    fullWidth: !0
                }, c.createElement(p.R, {
                    label: Object(m.d)("Description", "TeamsDashboard"),
                    hint: Object(m.d)("Supports most HTML", "TeamsDashboard")
                }, c.createElement(p._29, {
                    noResize: !0,
                    rows: 5,
                    value: e.description
                }))), c.createElement(p._1, {
                    margin: {
                        top: 2
                    }
                }, c.createElement(p.R, {
                    label: Object(m.d)("Logo", "TeamsDashboard"),
                    hint: Object(m.d)("Square JPG or PNG at least 600x600px. Max 500 KB.", "TeamsDashboard")
                }, c.createElement(p._1, {
                    className: "logo"
                }, c.createElement(Ge.a, {
                    allowedFileTypes: [".jpg", ".png"],
                    onFilesSubmitted: this.onFilesSubmitted.bind(this, be.Logo)
                }, this.filePickerChildrenGenerator(e.logoURL))))), c.createElement(p._1, {
                    margin: {
                        top: 2
                    }
                }, c.createElement(p.R, {
                    label: Object(m.d)("Banner", "TeamsDashboard"),
                    hint: Object(m.d)("JPG or PNG at least 640x125px. Max 500 KB.", "TeamsDashboard")
                }, c.createElement(p._1, {
                    fullWidth: !0,
                    className: "banner"
                }, c.createElement(Ge.a, {
                    allowedFileTypes: [".jpg", ".png"],
                    onFilesSubmitted: this.onFilesSubmitted.bind(this, be.Banner)
                }, this.filePickerChildrenGenerator(e.bannerURL))))), c.createElement(p._1, {
                    margin: {
                        top: 2
                    }
                }, c.createElement(p.R, {
                    label: Object(m.d)("Background Image", "TeamsDashboard"),
                    hint: Object(m.d)("JPG or PNG. Max 500 KB.", "TeamsDashboard")
                }, c.createElement(p._1, {
                    fullWidth: !0,
                    className: "background-image"
                }, c.createElement(Ge.a, {
                    allowedFileTypes: [".jpg", ".png"],
                    onFilesSubmitted: this.onFilesSubmitted.bind(this, be.BackgroundImage)
                }, this.filePickerChildrenGenerator(e.backgroundImageURL))))), c.createElement(p._1, {
                    margin: {
                        top: 2
                    }
                }, c.createElement(p.u, null, Object(m.d)("Save Changes", "TeamsDashboard")))))
            }, t.prototype.filePickerChildrenGenerator = function(e) {
                return e ? c.createElement("img", {
                    src: e
                }) : c.createElement(p._1, {
                    textAlign: p._28.Center
                }, c.createElement(p._14, {
                    asset: p._15.Upload,
                    type: p._16.Alt2,
                    height: 36,
                    width: 36
                }), c.createElement(p._27, {
                    fontSize: p.Q.Size6,
                    color: p.I.Alt2
                }, Object(m.d)("Choose a file", "TeamDashboard")))
            }, t.prototype.onFilesSubmitted = function(e, t) {
                var n = this,
                    a = new FileReader;
                a.onloadend = function() {
                    n.setState({
                        team: l.__assign({}, n.state.team, (t = {}, t[e] = a.result, t))
                    });
                    var t
                }, a.readAsDataURL(t[0])
            }, t = l.__decorate([Object(f.d)("SettingsPage", {
                autoReportInteractive: !0,
                destination: _.a.TeamsDashboardRevenue
            })], t)
        }(c.Component);
        ! function(e) {
            e.AverageViewers = "AverageViewers", e.NewFollowers = "NewFollowers", e.AverageChatters = "AverageChatters", e.ChatMessages = "ChatMessages", e.AdBreakDuration = "AdBreakDuration", e.AdBreaks = "AdBreaks"
        }(Xe || (Xe = {}));
        var $e;
        ! function(e) {
            e.Ads = "Ads", e.Audience = "Audience", e.Chat = "Chat"
        }($e || ($e = {}));
        var et, tt, nt = (et = {}, et[Xe.AverageViewers] = "concurrent_viewers", et[Xe.NewFollowers] = "follows", et[Xe.AverageChatters] = "chat_activities", et[Xe.ChatMessages] = "chat_activities", et[Xe.AdBreakDuration] = "commercials", et),
            at = (tt = {}, tt[Xe.AverageViewers] = "line", tt[Xe.NewFollowers] = "line", tt[Xe.AverageChatters] = "bar", tt[Xe.ChatMessages] = "bar", tt[Xe.AdBreakDuration] = "bar", tt),
            rt = function(e) {
                switch (e) {
                    case $e.Ads:
                        return Object(m.d)("Ads", "TeamsDashboard");
                    case $e.Audience:
                        return Object(m.d)("Audience", "TeamsDashboard");
                    case $e.Chat:
                        return Object(m.d)("Chat", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            it = function(e) {
                switch (e) {
                    case Xe.AverageViewers:
                        return Object(m.d)("Avg. Viewers", "TeamsDashboard");
                    case Xe.NewFollowers:
                        return Object(m.d)("New Followers", "TeamsDashboard");
                    case Xe.AverageChatters:
                        return Object(m.d)("Avg. Chatters", "TeamsDashboard");
                    case Xe.ChatMessages:
                        return Object(m.d)("Chat Messages", "TeamsDashboard");
                    case Xe.AdBreakDuration:
                        return Object(m.d)("Ad Break Duration", "TeamsDashboard");
                    case Xe.AdBreaks:
                        return Object(m.d)("Ad Breaks", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            st = function(e) {
                return c.createElement(p._1, {
                    className: "metric-select-menu"
                }, c.createElement(p._20, {
                    disabled: e.isDisabled,
                    value: "" + e.metric,
                    onChange: function(t) {
                        e.onChange(t.target.value)
                    }
                }, c.createElement("optgroup", {
                    label: rt($e.Ads)
                }, c.createElement("option", {
                    value: Xe.AdBreakDuration
                }, it(Xe.AdBreakDuration))), c.createElement("optgroup", {
                    label: rt($e.Audience)
                }, c.createElement("option", {
                    value: Xe.AverageViewers
                }, it(Xe.AverageViewers)), c.createElement("option", {
                    value: Xe.NewFollowers
                }, it(Xe.NewFollowers))), c.createElement("optgroup", {
                    label: rt($e.Chat)
                }, c.createElement("option", {
                    value: Xe.AverageChatters
                }, it(Xe.AverageChatters)), c.createElement("option", {
                    value: Xe.ChatMessages
                }, it(Xe.ChatMessages)))))
            },
            ot = 800,
            dt = 380,
            ut = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.myChart && this.myChart.destroy()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.myChart && this.props.chartData.chartType === e.chartData.chartType ? this.updateChartData(e.chartData) : this.rebuildChart(e)
                }, t.prototype.render = function() {
                    var e = this;
                    return c.createElement(p.V, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, c.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    }))
                }, t.prototype.rebuildChart = function(e) {
                    var t = this;
                    this.myChart && this.myChart.destroy(), this.setCanvasResolution(), this.myChart = new he(this.canvas, {
                        type: e.chartData.chartType,
                        data: {
                            datasets: [{
                                label: e.chartData.chartLabel,
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
                                data: e.chartData.data,
                                spanGaps: !0
                            }],
                            labels: e.chartData.timeLabels
                        },
                        options: {
                            tooltips: {
                                callbacks: {
                                    title: function(e, t) {
                                        var n = "",
                                            a = e[0];
                                        return t && t.labels && (n = t.labels[a.index || 0]),
                                            function(e) {
                                                var t = de(e);
                                                return Object(m.c)(e, {
                                                    weekday: "short",
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                    timeZone: "UTC"
                                                }) + " | " + Object(m.c)(e, {
                                                    hour: "numeric",
                                                    timeZone: "UTC"
                                                }) + " - " + Object(m.c)(t, {
                                                    hour: "numeric",
                                                    timeZone: "UTC"
                                                }) + " (4h)"
                                            }(new Date(n))
                                    },
                                    label: function(e) {
                                        return t.props.chartData.dataLabels[e.index || 0]
                                    },
                                    footer: function(e) {
                                        var n = e[0];
                                        return t.props.chartData.dataFooters[n.index || 0]
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
                                            return 0 === t.getUTCHours() ? function(e) {
                                                return Object(m.c)(e, {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric",
                                                    timeZone: "UTC"
                                                })
                                            }(t) : ""
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
                }, t.prototype.updateChartData = function(e) {
                    this.myChart.data.datasets && (this.myChart.data.labels = e.timeLabels, this.myChart.data.datasets[0].label = e.chartLabel, this.myChart.data.datasets[0].data = e.data, this.myChart.update())
                }, t.prototype.setCanvasResolution = function() {
                    var e = ot,
                        t = dt,
                        n = lt(this.canvas.getContext("2d"));
                    this.canvas.width = e * n, this.canvas.height = t * n, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(n, 0, 0, n, 0, 0)
                }, t = l.__decorate([Object(f.d)("StatsCanvas")], t)
            }(c.Component),
            lt = function(e) {
                return 1 / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            ct = ut,
            ht = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.data,
                        n = e.dataType,
                        a = {
                            chartType: at[n],
                            chartLabel: it(n),
                            timeLabels: Object.keys(t).sort(function(e, t) {
                                return e.localeCompare(t, void 0, {
                                    numeric: !0
                                })
                            }),
                            data: [],
                            dataLabels: [],
                            dataFooters: []
                        };
                    switch (n) {
                        case Xe.AverageViewers:
                        case Xe.ChatMessages:
                        case Xe.AverageChatters:
                            a.data = a.timeLabels.map(function(e) {
                                return t[e].count
                            }), a.dataLabels = a.data.map(function(e) {
                                return "" + Math.floor(e)
                            }), a.dataFooters = Array(a.data.length).fill("");
                            break;
                        case Xe.AdBreakDuration:
                            a.data = a.timeLabels.map(function(e) {
                                return t[e].count
                            }), a.dataLabels = a.data.map(function(e) {
                                return re(e)
                            }), a.dataFooters = a.timeLabels.map(function(e) {
                                return Object(m.d)("{adBreakCount, plural, one {# Ad Break} other {# Ad Breaks}}", {
                                    adBreakCount: t[e].numberOfDatapoints
                                }, "TeamsDashboard")
                            });
                            break;
                        case Xe.NewFollowers:
                            a.data = a.timeLabels.reduce(function(e, n) {
                                return e.push(t[n].count + (e.length ? e[e.length - 1] : 0)), e
                            }, []), a.dataLabels = a.data.map(function(e) {
                                return "" + Math.floor(e)
                            }), a.dataFooters = Array(a.data.length).fill("");
                            break;
                        default:
                            throw new Error("Data type: " + n + " is unrecognized")
                    }
                    return c.createElement(ct, {
                        chartData: a
                    })
                }, t
            }(c.PureComponent),
            mt = function(e) {
                var t = e.columnName;
                return c.createElement(p.T, null, c.createElement(p.J, {
                    cols: {
                        default: 4
                    }
                }), c.createElement(p.J, {
                    cols: {
                        default: 4
                    }
                }, c.createElement(p._27, {
                    bold: !0
                }, t)), c.createElement(p.J, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._27, {
                    bold: !0
                }, Object(m.d)("Views", "TeamsDashboard"))), c.createElement(p.J, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._27, {
                    bold: !0
                }, Object(m.d)("Percent", "TeamsDashboard"))))
            },
            _t = function(e) {
                var t = e.rowContent;
                return c.createElement(p.T, null, c.createElement(p.J, {
                    cols: {
                        default: 4
                    }
                }, c.createElement(p._1, {
                    fullHeight: !0,
                    display: p.M.Flex,
                    alignItems: p.c.Center
                }, c.createElement(p._11, {
                    value: t.percent,
                    mask: !0
                }))), c.createElement(p.J, {
                    cols: {
                        default: 4
                    }
                }, c.createElement(p._27, {
                    ellipsis: !0
                }, t.name)), c.createElement(p.J, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._27, null, Object(m.e)(t.views))), c.createElement(p.J, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._27, null, Object(m.e)(t.percent), "%")))
            },
            ft = function(e, t, n, a) {
                return 0 === e.length ? gt() : a && 1 === e.length ? yt(e[0].name) : Mt(e, n, t)
            },
            pt = function(e, t) {
                return t > 10 ? Object(m.d)("{tableName} (Top 10)", {
                    tableName: e
                }, "TeamsDashboard") : t > 1 ? Object(m.d)("{tableName} (All)", {
                    tableName: e
                }, "TeamsDashboard") : Object(m.d)("{tableName}", {
                    tableName: e
                }, "TeamsDashboard")
            },
            gt = function() {
                return c.createElement(p._27, {
                    color: p.I.Alt2
                }, Object(m.d)("Not enough data for us to display", "TeamsDashboard"))
            },
            yt = function(e) {
                return c.createElement(p._27, null, Object(m.d)("The top viewer location was {name}", {
                    name: e
                }, "TeamsDashboard"))
            },
            Mt = function(e, t, n) {
                var a = e.slice(0, 10).map(function(e, t) {
                    var a = e.name,
                        r = e.views,
                        i = Math.round(r / n * 100);
                    return c.createElement(_t, {
                        key: t,
                        rowContent: {
                            name: a,
                            views: r,
                            percent: i
                        }
                    })
                });
                return c.createElement(p._1, null, c.createElement(mt, {
                    columnName: t
                }), a)
            },
            vt = function(e) {
                var t, n = e.rowData.reduce(function(e, t) {
                        return e + t.views
                    }, 0),
                    a = e.rowData.sort(function(e, t) {
                        return t.views - e.views || e.name.localeCompare(t.name)
                    });
                t = e.isLoading ? c.createElement(p._7, {
                    width: 180
                }) : pt(e.tableName, a.length);
                var r;
                return r = e.isLoading ? c.createElement(p._1, null, c.createElement(p._27, null, c.createElement(p._7, null)), c.createElement(p._27, null, c.createElement(p._7, null))) : ft(a, n, e.columnName, e.isGeo), c.createElement(p._1, {
                    display: p.M.Flex,
                    flexDirection: p.O.Column,
                    padding: 2,
                    className: "table",
                    flexWrap: p.P.NoWrap,
                    fullWidth: !0
                }, c.createElement(p._1, {
                    margin: {
                        bottom: 1
                    }
                }, c.createElement(p._27, {
                    type: p._32.H4
                }, t)), r)
            },
            bt = Object(m.d)("Referrer", "TeamsDashboard"),
            Lt = function(e) {
                var t = Object(m.d)("Views by Referrer", "TeamsDashboard"),
                    n = "";
                return e.internalReferral && e.internalReferral.length && (t = Object(m.d)("Views from Outside Twitch", "TeamsDashboard"), n = c.createElement(p._23, {
                    display: p.M.Flex,
                    flexGrow: 1,
                    borderBottom: !0,
                    borderLeft: !0
                }, c.createElement(vt, {
                    isLoading: e.isLoading,
                    tableName: Object(m.d)("Views from Twitch", "TeamsDashboard"),
                    columnName: bt,
                    rowData: e.internalReferral
                }))), c.createElement(p._23, {
                    className: "all-tables-wrapper",
                    display: p.M.Flex,
                    flexDirection: p.O.Row,
                    borderTop: !0
                }, c.createElement(p._1, {
                    display: p.M.Flex,
                    flexGrow: 1,
                    flexDirection: p.O.Column,
                    flexWrap: p.P.NoWrap
                }, c.createElement(p._23, {
                    display: p.M.Flex,
                    flexGrow: 1,
                    borderBottom: !0
                }, c.createElement(vt, {
                    isLoading: e.isLoading,
                    tableName: Object(m.d)("Views by Location", "TeamsDashboard"),
                    columnName: Object(m.d)("Location", "TeamsDashboard"),
                    rowData: e.geographical,
                    isGeo: !0
                })), c.createElement(p._23, {
                    display: p.M.Flex,
                    flexGrow: 1
                }, c.createElement(vt, {
                    isLoading: e.isLoading,
                    tableName: Object(m.d)("Views by Platform", "TeamsDashboard"),
                    columnName: Object(m.d)("Platform", "TeamsDashboard"),
                    rowData: e.platform
                }))), c.createElement(p._1, {
                    display: p.M.Flex,
                    flexGrow: 1,
                    flexDirection: p.O.Column,
                    flexWrap: p.P.NoWrap
                }, n, c.createElement(p._23, {
                    display: p.M.Flex,
                    flexGrow: 1,
                    borderLeft: !0
                }, c.createElement(vt, {
                    isLoading: e.isLoading,
                    tableName: t,
                    columnName: bt,
                    rowData: e.externalReferral
                }))))
            },
            Dt = this,
            kt = {
                geographical: [],
                platform: [],
                internalReferral: [],
                externalReferral: []
            },
            Yt = function(e, t, n, a) {
                return l.__awaiter(Dt, void 0, void 0, function() {
                    var r, i, s, o;
                    return l.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return r = kt, t.length < 1 ? [2, r] : (i = t.join(","), s = "/v5/teams/" + e + "/stats/video_play_demographics?channel_ids=" + i + "&start_time=" + n + "&end_time=" + a, [4, Object(K.d)({
                                    path: s
                                })]);
                            case 1:
                                return o = d.sent(), [2, o.body ? wt(o.body) : r]
                        }
                    })
                })
            },
            wt = function(e) {
                for (var t = e.video_play_demographics, n = {
                        geographical: [],
                        platform: [],
                        internalReferral: [],
                        externalReferral: []
                    }, r = 0, i = Object.keys(t.geo); r < i.length; r++) {
                    var s = i[r];
                    n.geographical.push({
                        name: a(s),
                        views: t.geo[s]
                    })
                }
                for (var o = 0, d = Object.keys(t.platform); o < d.length; o++) {
                    s = d[o];
                    n.platform.push({
                        name: Tt(s),
                        views: t.platform[s]
                    })
                }
                for (var u = 0, l = Object.keys(t.referrer.internal); u < l.length; u++) {
                    s = l[u];
                    n.internalReferral.push({
                        name: St(s),
                        views: t.referrer.internal[s]
                    })
                }
                for (var c = 0, h = Object.keys(t.referrer.external); c < h.length; c++) {
                    s = h[c];
                    n.externalReferral.push({
                        name: Ot(s),
                        views: t.referrer.external[s]
                    })
                }
                return n
            },
            xt = Object(m.d)("Other", "TeamsDashboard"),
            Tt = function(e) {
                return {
                    unknown: Object(m.d)("Unknown", "TeamsDashboard"),
                    tv: Object(m.d)("TV", "TeamsDashboard"),
                    ios: Object(m.d)("iOS App", "TeamsDashboard"),
                    web: Object(m.d)("Web", "TeamsDashboard"),
                    android: Object(m.d)("Android App", "TeamsDashboard"),
                    mobile_web: Object(m.d)("Mobile Web", "TeamsDashboard"),
                    mobile_aggregated: Object(m.d)("Mobile", "TeamsDashboard"),
                    console: Object(m.d)("Console", "TeamsDashboard"),
                    other: xt
                }[e] || e
            },
            St = function(e) {
                return {
                    other: xt,
                    front_page_featured: Object(m.d)("Featured Section - Front Page", "TeamsDashboard"),
                    creative_page_featured: Object(m.d)("Featured Section - Creative Page", "TeamsDashboard"),
                    hosted: Object(m.d)("Hosts", "TeamsDashboard"),
                    email_live_notification: Object(m.d)("Notifications - Email", "TeamsDashboard"),
                    onsite_notification: Object(m.d)("Notifications - Onsite", "TeamsDashboard"),
                    followed_channel: Object(m.d)("Followers", "TeamsDashboard"),
                    directory_browse: Object(m.d)("Browse Page", "TeamsDashboard"),
                    search: Object(m.d)("Searches", "TeamsDashboard"),
                    clips_live: Object(m.d)("Clips", "TeamsDashboard"),
                    friend_presence: Object(m.d)("Friends", "TeamsDashboard"),
                    top_nav_bar: Object(m.d)("Your Channel Page", "TeamsDashboard"),
                    recommended_channel: Object(m.d)("Recommendations", "TeamsDashboard"),
                    other_channel_page: Object(m.d)("Other Channel Page", "TeamsDashboard")
                }[e] || Object(m.d)("{name}'s Channel Page", {
                    name: e
                }, "TeamsDashboard")
            },
            Ot = function(e) {
                return (t = {
                    facebook: Object(m.d)("Facebook", "TeamsDashboard"),
                    google: Object(m.d)("Google", "TeamsDashboard"),
                    reddit: Object(m.d)("Reddit", "TeamsDashboard"),
                    youtube: Object(m.d)("Youtube", "TeamsDashboard")
                }, t["t.co"] = Object(m.d)("Twitter", "TeamsDashboard"), t.unknown = Object(m.d)("Direct/Unknown", "TeamsDashboard"), t.twitch_aggregate = Object(m.d)("Twitch", "TeamsDashboard"), t.external_aggregate = Object(m.d)("External", "TeamsDashboard"), t)[e] || e;
                var t
            },
            jt = this,
            Ht = function(e, t, n, a, r) {
                return l.__awaiter(jt, void 0, void 0, function() {
                    var i, s, o, d, u, c, h;
                    return l.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                if (0 === n.length) return [2, Promise.resolve({})];
                                switch (i = "/v5/teams/" + t + "/stats/" + nt[e] + "?channel_ids=" + n + "&start_time=" + a + "&end_time=" + r, e) {
                                    case Xe.AverageViewers:
                                        return [3, 1];
                                    case Xe.NewFollowers:
                                        return [3, 3];
                                    case Xe.AverageChatters:
                                        return [3, 5];
                                    case Xe.ChatMessages:
                                        return [3, 7];
                                    case Xe.AdBreakDuration:
                                        return [3, 9]
                                }
                                return [3, 11];
                            case 1:
                                return o = Wt, [4, Ct(i)];
                            case 2:
                                return s = o.apply(void 0, [l.sent(), a, r, Nt]), [3, 12];
                            case 3:
                                return d = Wt, [4, At(i)];
                            case 4:
                                return s = d.apply(void 0, [l.sent(), a, r, Rt]), [3, 12];
                            case 5:
                                return u = Wt, [4, Pt(i)];
                            case 6:
                                return s = u.apply(void 0, [l.sent(), a, r, zt]), [3, 12];
                            case 7:
                                return c = Wt, [4, Pt(i)];
                            case 8:
                                return s = c.apply(void 0, [l.sent(), a, r, Bt]), [3, 12];
                            case 9:
                                return h = It, [4, Ft(i)];
                            case 10:
                                return s = h.apply(void 0, [l.sent(), a, r, Jt]), [3, 12];
                            case 11:
                                throw new Error("fetch type is not in StatsMetric enum");
                            case 12:
                                return [2, Et(s)]
                        }
                    })
                })
            },
            Ct = function(e) {
                return l.__awaiter(jt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Object(K.d)({
                                    path: e
                                })];
                            case 1:
                                return t = n.sent(), [2, t.body ? t.body.concurrent_viewers : {}]
                        }
                    })
                })
            },
            Pt = function(e) {
                return l.__awaiter(jt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Object(K.d)({
                                    path: e
                                })];
                            case 1:
                                return t = n.sent(), [2, t.body ? t.body.chat_activities : {}]
                        }
                    })
                })
            },
            At = function(e) {
                return l.__awaiter(jt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Object(K.d)({
                                    path: e
                                })];
                            case 1:
                                return t = n.sent(), [2, t.body ? t.body.follows : {}]
                        }
                    })
                })
            },
            Ft = function(e) {
                return l.__awaiter(jt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Object(K.d)({
                                    path: e
                                })];
                            case 1:
                                return t = n.sent(), [2, t.body ? t.body.commercials : {}]
                        }
                    })
                })
            },
            Et = function(e) {
                for (var t = {}, n = 0, a = Object.keys(e); n < a.length; n++)
                    for (var r = 0, i = e[a[n]]; r < i.length; r++) {
                        var s = i[r],
                            o = s.timestamp,
                            d = s.count,
                            u = s.numberOfDatapoints;
                        t[o] ? (t[o].count += d, t[o].numberOfDatapoints += u) : t[o] = {
                            count: d,
                            numberOfDatapoints: u
                        }
                    }
                return t
            },
            Wt = function(e, t, n, a) {
                for (var r = {}, i = 0, s = Object.keys(e); i < s.length; i++) {
                    var o = s[i];
                    r[o] = a(t, n, e[o])
                }
                return r
            },
            It = function(e, t, n, a) {
                for (var r = {}, i = 0, s = Object.keys(e); i < s.length; i++) {
                    var o = s[i];
                    r[o] = a(t, n, e[o])
                }
                return r
            },
            Nt = function(e, t, n) {
                for (var a = Vt(e, t).map(function(e) {
                        return l.__assign({}, e, {
                            sampleSize: 0
                        })
                    }), r = function(e, t) {
                        var n = a.find(function(t) {
                            return t.timestamp === Ut(e)
                        });
                        n && 0 !== t && (n.count += t, n.sampleSize += 1)
                    }, i = 0, s = n; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.count)
                }
                return a.map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0,
                        numberOfDatapoints: 0
                    }
                })
            },
            Rt = function(e, t, n) {
                for (var a = Vt(e, t), r = function(e, t) {
                        var n = a.find(function(t) {
                            return t.timestamp === Ut(e)
                        });
                        n && (n.count += t)
                    }, i = 0, s = n; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.count)
                }
                return a
            },
            zt = function(e, t, n) {
                for (var a = Vt(e, t).map(function(e) {
                        return l.__assign({}, e, {
                            sampleSize: 0
                        })
                    }), r = function(e, t) {
                        var n = a.find(function(t) {
                            return t.timestamp === Ut(e)
                        });
                        n && 0 !== t && (n.count += t, n.sampleSize += 1)
                    }, i = 0, s = n; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.participant_count)
                }
                return a.map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0,
                        numberOfDatapoints: 0
                    }
                })
            },
            Bt = function(e, t, n) {
                for (var a = Vt(e, t), r = function(e, t) {
                        var n = a.find(function(t) {
                            return t.timestamp === Ut(e)
                        });
                        n && (n.count += t)
                    }, i = 0, s = n; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.message_count)
                }
                return a
            },
            Jt = function(e, t, n) {
                for (var a = Vt(e, t), r = function(e, t) {
                        var n = a.find(function(t) {
                            return t.timestamp === Ut(e)
                        });
                        n && (n.count += t, n.numberOfDatapoints += 1)
                    }, i = 0, s = n; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.duration_seconds)
                }
                return a
            },
            Vt = function(e, t) {
                for (var n = [], a = new Date(Ut(e)), r = new Date(t); a < r;) n.push({
                    timestamp: a.toISOString(),
                    count: 0,
                    numberOfDatapoints: 0
                }), a = de(a);
                return n
            },
            Ut = function(e) {
                var t = new Date(e),
                    n = t.getUTCHours() - t.getUTCHours() % 4;
                return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), n)).toISOString()
            },
            Gt = this,
            qt = [Xe.AverageViewers, Xe.NewFollowers, Xe.AverageChatters, Xe.ChatMessages, Xe.AdBreaks, Xe.AdBreakDuration],
            Kt = Object.keys(nt),
            Zt = function(e, t, n, a) {
                return l.__awaiter(Gt, void 0, void 0, function() {
                    var r, i, s, o, d, u, c, h, m, _, f, p;
                    return l.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                for (r = {}, i = [], s = 0, o = Kt; s < o.length; s++) h = o[s], i.push(Ht(h, e, t, n, a));
                                return [4, Promise.all(i)];
                            case 1:
                                for (d = l.sent(), u = 0, c = Kt; u < c.length; u++) {
                                    if (h = c[u], m = d.shift() || {}, 0 === Object.keys(m).length) return [2, {}];
                                    for (_ = 0, f = Object.keys(m); _ < f.length; _++) p = f[_], r[p] || (r[p] = {}), r[p][h] = m[p].count, h === Xe.AdBreakDuration && (r[p][Xe.AdBreaks] = m[p].numberOfDatapoints)
                                }
                                return [2, r]
                        }
                    })
                })
            },
            Xt = function() {
                var e = Object(m.d)("Start Time", "TeamsDashboard") + "," + Object(m.d)("End Time", "TeamsDashboard") + "," + Se();
                return qt.reduce(function(e, t) {
                    return e + "," + it(t)
                }, e) + "\n"
            },
            Qt = function(e, t) {
                var n = de(e),
                    a = je(e) + "," + je(n) + ",UTC";
                return qt.reduce(function(e, n) {
                    var a = "" + t[n];
                    return n === Xe.AdBreakDuration && (a = re(t[n])), e + "," + a
                }, a) + "\n"
            },
            $t = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleMemberChecked = function(e) {
                        var t = n.state.members.slice(),
                            a = t.find(function(t) {
                                return t.id === e.id
                            });
                        a && (a.checked = !a.checked, n.setState({
                            members: t,
                            groupChecked: !1
                        }))
                    }, n.toggleGroupChecked = function() {
                        var e = !n.state.groupChecked,
                            t = j(n.state.members, e);
                        n.setState({
                            groupChecked: e,
                            members: t
                        })
                    }, n.handleMemberSelectionChange = function() {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e = this.setState, t = [{}], [4, this.fetchStats(this.state.startTime, this.state.endTime, this.state.metric)];
                                    case 1:
                                        return [2, e.apply(this, [l.__assign.apply(void 0, t.concat([n.sent()]))])]
                                }
                            })
                        })
                    }, n.fetchStats = function(e, t, a) {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var n, r, i, s, o, d;
                            return l.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return n = H(this.state.members), r = e.toISOString(), i = t.toISOString(), s = {
                                            isLoadingDemographics: !1,
                                            demographics: kt,
                                            isLoadingStats: !1,
                                            data: {}
                                        }, a !== Xe.AverageViewers ? [3, 2] : (this.setState({
                                            isLoadingDemographics: !0
                                        }), o = s, [4, Yt(this.props.teamName, n, r, i)]);
                                    case 1:
                                        o.demographics = u.sent(), u.label = 2;
                                    case 2:
                                        return this.setState({
                                            isLoadingStats: !0
                                        }), d = s, [4, Ht(a, this.props.teamName, n, r, i)];
                                    case 3:
                                        return d.data = u.sent(), [2, s]
                                }
                            })
                        })
                    }, n.handleCSVClick = function() {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Zt(this.props.teamName, H(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                    case 1:
                                        return e = n.sent(), 0 === Object.keys(e).length ? [2] : (t = xe(e, Qt, Xt()), Te(t, P(v.Stats) + " - " + ae(this.state.startTime) + ".csv"), [2])
                                }
                            })
                        })
                    }, n.handleTimeRangeChange = function(e, t) {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.fetchStats(e, t, this.state.metric)];
                                    case 1:
                                        return n = a.sent(), this.setState(l.__assign({
                                            startTime: e,
                                            endTime: t
                                        }, n)), [2]
                                }
                            })
                        })
                    }, n.onMetricChange = function(e) {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.fetchStats(this.state.startTime, this.state.endTime, e)];
                                    case 1:
                                        return t = n.sent(), this.setState(l.__assign({
                                            metric: e
                                        }, t)), [2]
                                }
                            })
                        })
                    }, n.renderViewershipTables = function() {
                        return c.createElement(Lt, l.__assign({
                            isLoading: n.state.isLoadingDemographics
                        }, n.state.demographics))
                    }, n.state = {
                        isLoadingMembers: !0,
                        members: [],
                        isLoadingStats: !0,
                        data: {},
                        isLoadingDemographics: !0,
                        demographics: kt,
                        startTime: ie(n.props.currentDate),
                        endTime: n.props.currentDate,
                        groupChecked: !0,
                        metric: Xe.AverageViewers
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t = this;
                        return l.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, $(this.props.teamName, Y.StatsRevealed)];
                                case 1:
                                    return e = n.sent(), this.setState({
                                        isLoadingMembers: !1,
                                        members: j(e, !0)
                                    }, function() {
                                        return l.__awaiter(t, void 0, void 0, function() {
                                            var e;
                                            return l.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, this.fetchStats(this.state.startTime, this.state.endTime, this.state.metric)];
                                                    case 1:
                                                        return e = t.sent(), this.setState(l.__assign({}, e)), [2]
                                                }
                                            })
                                        })
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.state.isLoadingMembers || this.state.isLoadingStats || this.state.isLoadingDemographics;
                    return c.createElement(D, {
                        title: P(v.Stats),
                        titleSelector: "stats-page-title"
                    }, c.createElement(p._23, {
                        border: !0,
                        fullWidth: !0
                    }, c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        justifyContent: p._0.Between,
                        margin: 2
                    }, c.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Row
                    }, c.createElement(p._1, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(we, {
                        isDisabled: e,
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        onMemberSelectClose: this.handleMemberSelectionChange,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), c.createElement(st, {
                        isDisabled: e,
                        metric: this.state.metric,
                        onChange: this.onMetricChange
                    }), c.createElement(ue, {
                        isDisabled: e,
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), c.createElement(p._1, null, c.createElement(p.u, {
                        disabled: e,
                        "data-test-selector": "stats-csv-button",
                        icon: p._15.Download,
                        onClick: this.handleCSVClick
                    }, Oe()))), c.createElement(p._1, {
                        fullWidth: !0
                    }, c.createElement(ht, {
                        data: this.state.data,
                        dataType: this.state.metric
                    })), this.state.metric === Xe.AverageViewers ? this.renderViewershipTables() : ""))
                }, t = l.__decorate([Object(f.d)("StatsPage", {
                    autoReportInteractive: !0,
                    destination: _.a.TeamsDashboardStats
                })], t)
            }(c.Component),
            en = new Date(Date.UTC(2016, 0)),
            tn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderRevenuePage = function() {
                        return c.createElement(Be, {
                            teamName: n.props.match.params.teamName,
                            earliestDataDate: n.earliestDataDate,
                            currentDate: n.currentDate
                        })
                    }, n.renderStatsPage = function() {
                        return c.createElement($t, {
                            teamName: n.props.match.params.teamName,
                            earliestDataDate: n.earliestDataDate,
                            currentDate: n.currentDate
                        })
                    }, n.renderMembersPage = function() {
                        return c.createElement(ne, {
                            teamName: n.props.match.params.teamName
                        })
                    }, n.renderFeaturedChannelsPage = function() {
                        return c.createElement(q, {
                            teamName: n.props.match.params.teamName
                        })
                    }, n.renderSettingsPage = function() {
                        return c.createElement(Qe, null)
                    }, n.earliestDataDate = en, n.currentDate = t.currentDate || new Date, n.currentDate < n.earliestDataDate && (n.currentDate = n.earliestDataDate), n
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? c.createElement(p._1, {
                        display: p.M.Flex,
                        flexWrap: p.P.NoWrap,
                        fullWidth: !0,
                        fullHeight: !0
                    }, c.createElement(Ue, {
                        teamName: this.props.match.params.teamName,
                        page: this.props.match.params.pageName
                    }), c.createElement(p._1, {
                        fullWidth: !0
                    }, c.createElement(h.d, null, c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + v.Revenue,
                        render: this.renderRevenuePage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + v.Stats,
                        render: this.renderStatsPage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + v.Members,
                        render: this.renderMembersPage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + v.FeaturedChannels,
                        render: this.renderFeaturedChannelsPage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + v.Settings,
                        render: this.renderSettingsPage
                    }), c.createElement(h.a, {
                        to: "/teams/" + this.props.match.params.teamName + "/dashboard/" + v.Revenue
                    })))) : (this.props.onAnonymousVisit(), c.createElement(p._3, {
                        fillContent: !0
                    }))
                }, t
            }(c.Component),
            nn = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(u.d)(e)
                }
            }, function(e) {
                return Object(s.b)({
                    onAnonymousVisit: function() {
                        return Object(d.f)(o.a.DashboardPage)
                    }
                }, e)
            })(tn);
        n.d(t, "TeamsDashboardRoot", function() {
            return nn
        })
    },
    rBmI: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getMonth(),
                r = n - n % 3;
            return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rGYv: function(e, t) {
        e.exports = {
            acquireContext: function(e) {
                return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
            }
        }
    },
    rIuo: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    rO5X: function(e, t, n) {
        var a = n("xA5w"),
            r = n("Bb5e"),
            i = n("NKE6");
        e.exports = function(e, t) {
            var n = a(e),
                s = a(t),
                o = i(n, s),
                d = Math.abs(r(n, s));
            return n.setFullYear(n.getFullYear() - o * d), o * (d - (i(n, s) === -o))
        }
    },
    rWJA: function(e, t, n) {
        var a = n("TWHA"),
            r = n("ajDi"),
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
                "string" == typeof e ? (t = r.getRgba(e)) ? this.setValues("rgb", t) : (t = r.getHsla(e)) ? this.setValues("hsl", t) : (t = r.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t))
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
                var n = e,
                    a = void 0 === t ? .5 : t,
                    r = 2 * a - 1,
                    i = this.alpha() - n.alpha(),
                    s = ((r * i == -1 ? r : (r + i) / (1 + r * i)) + 1) / 2,
                    o = 1 - s;
                return this.rgb(s * this.red() + o * n.red(), s * this.green() + o * n.green(), s * this.blue() + o * n.blue()).alpha(this.alpha() * a + n.alpha() * (1 - a))
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                var e, t, n = new i,
                    a = this.values,
                    r = n.values;
                for (var s in a) a.hasOwnProperty(s) && (e = a[s], "[object Array]" === (t = {}.toString.call(e)) ? r[s] = e.slice(0) : "[object Number]" === t ? r[s] = e : console.error("unexpected color value:", e));
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
                s = this.maxes,
                o = 1;
            if (this.valid = !0, "alpha" === e) o = t;
            else if (t.length) r[e] = t.slice(0, e.length), o = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                o = t.a
            } else if (void 0 !== t[i[e][0]]) {
                var d = i[e];
                for (n = 0; n < e.length; n++) r[e][n] = t[d[n]];
                o = t.alpha
            }
            if (r.alpha = Math.max(0, Math.min(1, void 0 === o ? r.alpha : o)), "alpha" === e) return !1;
            var u;
            for (n = 0; n < e.length; n++) u = Math.max(0, Math.min(s[e][n], r[e][n])), r[e][n] = Math.round(u);
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
    sFj2: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("L5rj"),
            i = n("iO9N");
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
                                s = t.datasets[0],
                                o = r.data[a],
                                d = o && o.custom || {},
                                u = i.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: n,
                                fillStyle: d.backgroundColor ? d.backgroundColor : u(s.backgroundColor, a, l.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : u(s.borderColor, a, l.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : u(s.borderWidth, a, l.borderWidth),
                                hidden: isNaN(s.data[a]) || r.data[a].hidden,
                                index: a
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var n, a, r, i = t.index,
                        s = this.chart;
                    for (n = 0, a = (s.data.datasets || []).length; n < a; ++n)(r = s.getDatasetMeta(n)).data[i] && (r.data[i].hidden = !r.data[i].hidden);
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
                        var n = t.labels[e.index],
                            a = ": " + t.datasets[e.datasetIndex].data[e.index];
                        return i.isArray(n) ? (n = n.slice())[0] += a : n += a, n
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
                        s = r.elements.arc,
                        o = a.right - a.left - s.borderWidth,
                        d = a.bottom - a.top - s.borderWidth,
                        u = Math.min(o, d),
                        l = {
                            x: 0,
                            y: 0
                        },
                        c = t.getMeta(),
                        h = r.cutoutPercentage,
                        m = r.circumference;
                    if (m < 2 * Math.PI) {
                        var _ = r.rotation % (2 * Math.PI),
                            f = (_ += 2 * Math.PI * (_ >= Math.PI ? -1 : _ < -Math.PI ? 1 : 0)) + m,
                            p = {
                                x: Math.cos(_),
                                y: Math.sin(_)
                            },
                            g = {
                                x: Math.cos(f),
                                y: Math.sin(f)
                            },
                            y = _ <= 0 && f >= 0 || _ <= 2 * Math.PI && 2 * Math.PI <= f,
                            M = _ <= .5 * Math.PI && .5 * Math.PI <= f || _ <= 2.5 * Math.PI && 2.5 * Math.PI <= f,
                            v = _ <= -Math.PI && -Math.PI <= f || _ <= Math.PI && Math.PI <= f,
                            b = _ <= .5 * -Math.PI && .5 * -Math.PI <= f || _ <= 1.5 * Math.PI && 1.5 * Math.PI <= f,
                            L = h / 100,
                            D = {
                                x: v ? -1 : Math.min(p.x * (p.x < 0 ? 1 : L), g.x * (g.x < 0 ? 1 : L)),
                                y: b ? -1 : Math.min(p.y * (p.y < 0 ? 1 : L), g.y * (g.y < 0 ? 1 : L))
                            },
                            k = {
                                x: y ? 1 : Math.max(p.x * (p.x > 0 ? 1 : L), g.x * (g.x > 0 ? 1 : L)),
                                y: M ? 1 : Math.max(p.y * (p.y > 0 ? 1 : L), g.y * (g.y > 0 ? 1 : L))
                            },
                            Y = {
                                width: .5 * (k.x - D.x),
                                height: .5 * (k.y - D.y)
                            };
                        u = Math.min(o / Y.width, d / Y.height), l = {
                            x: -.5 * (k.x + D.x),
                            y: -.5 * (k.y + D.y)
                        }
                    }
                    n.borderWidth = t.getMaxBorderWidth(c.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = l.x * n.outerRadius, n.offsetY = l.y * n.outerRadius, c.total = t.calculateTotal(), t.outerRadius = n.outerRadius - n.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - n.radiusLength, 0), i.each(c.data, function(n, a) {
                        t.updateElement(n, a, e)
                    })
                },
                updateElement: function(e, t, n) {
                    var a = this.chart,
                        r = a.chartArea,
                        s = a.options,
                        o = s.animation,
                        d = (r.left + r.right) / 2,
                        u = (r.top + r.bottom) / 2,
                        l = s.rotation,
                        c = s.rotation,
                        h = this.getDataset(),
                        m = n && o.animateRotate ? 0 : e.hidden ? 0 : this.calculateCircumference(h.data[t]) * (s.circumference / (2 * Math.PI)),
                        _ = n && o.animateScale ? 0 : this.innerRadius,
                        f = n && o.animateScale ? 0 : this.outerRadius,
                        p = i.valueAtIndexOrDefault;
                    i.extend(e, {
                        _datasetIndex: this.index,
                        _index: t,
                        _model: {
                            x: d + a.offsetX,
                            y: u + a.offsetY,
                            startAngle: l,
                            endAngle: c,
                            circumference: m,
                            outerRadius: f,
                            innerRadius: _,
                            label: p(h.label, t, a.data.labels[t])
                        }
                    });
                    var g = e._model;
                    this.removeHoverStyle(e), n && o.animateRotate || (g.startAngle = 0 === t ? s.rotation : this.getMeta().data[t - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), e.pivot()
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
                    for (var t, n, a = 0, r = this.index, i = e.length, s = 0; s < i; s++) t = e[s]._model ? e[s]._model.borderWidth : 0, a = (n = e[s]._chart ? e[s]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (a = t > a ? t : a) ? n : a;
                    return a
                }
            })
        }
    },
    sFo6: function(e, t, n) {
        "use strict";
        var a = n("k7DW"),
            r = n("iO9N"),
            i = n("IbXy");
        e.exports = function(e) {
            function t(e) {
                var t = e.options;
                return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
            }

            function n(e) {
                var t = e.options.pointLabels,
                    n = r.valueOrDefault(t.fontSize, h.defaultFontSize),
                    a = r.valueOrDefault(t.fontStyle, h.defaultFontStyle),
                    i = r.valueOrDefault(t.fontFamily, h.defaultFontFamily);
                return {
                    size: n,
                    style: a,
                    family: i,
                    font: r.fontString(n, a, i)
                }
            }

            function s(e, t, n) {
                return r.isArray(n) ? {
                    w: r.longestText(e, e.font, n),
                    h: n.length * t + 1.5 * (n.length - 1) * t
                } : {
                    w: e.measureText(n).width,
                    h: t
                }
            }

            function o(e, t, n, a, r) {
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
                return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
            }

            function u(e, t, n, a) {
                if (r.isArray(t))
                    for (var i = n.y, s = 1.5 * a, o = 0; o < t.length; ++o) e.fillText(t[o], n.x, i), i += s;
                else e.fillText(t, n.x, n.y)
            }

            function l(e, t, n) {
                90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
            }

            function c(e) {
                return r.isNumber(e) ? e : 0
            }
            var h = a.global,
                m = {
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
                _ = e.LinearScaleBase.extend({
                    setDimensions: function() {
                        var e = this.options,
                            t = e.ticks;
                        this.width = this.maxWidth, this.height = this.maxHeight, this.xCenter = Math.round(this.width / 2), this.yCenter = Math.round(this.height / 2);
                        var n = r.min([this.height, this.width]),
                            a = r.valueOrDefault(t.fontSize, h.defaultFontSize);
                        this.drawingArea = e.display ? n / 2 - (a / 2 + t.backdropPaddingY) : n / 2
                    },
                    determineDataLimits: function() {
                        var e = this,
                            t = e.chart,
                            n = Number.POSITIVE_INFINITY,
                            a = Number.NEGATIVE_INFINITY;
                        r.each(t.data.datasets, function(i, s) {
                            if (t.isDatasetVisible(s)) {
                                var o = t.getDatasetMeta(s);
                                r.each(i.data, function(t, r) {
                                    var i = +e.getRightValue(t);
                                    isNaN(i) || o.data[r].hidden || (n = Math.min(i, n), a = Math.max(i, a))
                                })
                            }
                        }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = a === Number.NEGATIVE_INFINITY ? 0 : a, e.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e = this.options.ticks,
                            t = r.valueOrDefault(e.fontSize, h.defaultFontSize);
                        return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)))
                    },
                    convertTicksToLabels: function() {
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this)
                    },
                    getLabelForIndex: function(e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    },
                    fit: function() {
                        this.options.pointLabels.display ? function(e) {
                            var a, i, d, u = n(e),
                                l = Math.min(e.height / 2, e.width / 2),
                                c = {
                                    r: e.width,
                                    l: 0,
                                    t: e.height,
                                    b: 0
                                },
                                h = {};
                            e.ctx.font = u.font, e._pointLabelSizes = [];
                            var m = t(e);
                            for (a = 0; a < m; a++) {
                                d = e.getPointPosition(a, l), i = s(e.ctx, u.size, e.pointLabels[a] || ""), e._pointLabelSizes[a] = i;
                                var _ = e.getIndexAngle(a),
                                    f = r.toDegrees(_) % 360,
                                    p = o(f, d.x, i.w, 0, 180),
                                    g = o(f, d.y, i.h, 90, 270);
                                p.start < c.l && (c.l = p.start, h.l = _), p.end > c.r && (c.r = p.end, h.r = _), g.start < c.t && (c.t = g.start, h.t = _), g.end > c.b && (c.b = g.end, h.b = _)
                            }
                            e.setReductions(l, c, h)
                        }(this) : function(e) {
                            var t = Math.min(e.height / 2, e.width / 2);
                            e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0)
                        }(this)
                    },
                    setReductions: function(e, t, n) {
                        var a = t.l / Math.sin(n.l),
                            r = Math.max(t.r - this.width, 0) / Math.sin(n.r),
                            i = -t.t / Math.cos(n.t),
                            s = -Math.max(t.b - this.height, 0) / Math.cos(n.b);
                        a = c(a), r = c(r), i = c(i), s = c(s), this.drawingArea = Math.min(Math.round(e - (a + r) / 2), Math.round(e - (i + s) / 2)), this.setCenterPoint(a, r, i, s)
                    },
                    setCenterPoint: function(e, t, n, a) {
                        var r = this.width - t - this.drawingArea,
                            i = e + this.drawingArea,
                            s = n + this.drawingArea,
                            o = this.height - a - this.drawingArea;
                        this.xCenter = Math.round((i + r) / 2 + this.left), this.yCenter = Math.round((s + o) / 2 + this.top)
                    },
                    getIndexAngle: function(e) {
                        return e * (2 * Math.PI / t(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(e) {
                        if (null === e) return 0;
                        var t = this.drawingArea / (this.max - this.min);
                        return this.options.ticks.reverse ? (this.max - e) * t : (e - this.min) * t
                    },
                    getPointPosition: function(e, t) {
                        var n = this.getIndexAngle(e) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(n) * t) + this.xCenter,
                            y: Math.round(Math.sin(n) * t) + this.yCenter
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
                            i = a.gridLines,
                            s = a.ticks,
                            o = r.valueOrDefault;
                        if (a.display) {
                            var c = e.ctx,
                                m = this.getIndexAngle(0),
                                _ = o(s.fontSize, h.defaultFontSize),
                                f = o(s.fontStyle, h.defaultFontStyle),
                                p = o(s.fontFamily, h.defaultFontFamily),
                                g = r.fontString(_, f, p);
                            r.each(e.ticks, function(n, a) {
                                if (a > 0 || s.reverse) {
                                    var d = e.getDistanceFromCenterForValue(e.ticksAsNumbers[a]);
                                    if (i.display && 0 !== a && function(e, n, a, i) {
                                            var s = e.ctx;
                                            if (s.strokeStyle = r.valueAtIndexOrDefault(n.color, i - 1), s.lineWidth = r.valueAtIndexOrDefault(n.lineWidth, i - 1), e.options.gridLines.circular) s.beginPath(), s.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), s.closePath(), s.stroke();
                                            else {
                                                var o = t(e);
                                                if (0 === o) return;
                                                s.beginPath();
                                                var d = e.getPointPosition(0, a);
                                                s.moveTo(d.x, d.y);
                                                for (var u = 1; u < o; u++) d = e.getPointPosition(u, a), s.lineTo(d.x, d.y);
                                                s.closePath(), s.stroke()
                                            }
                                        }(e, i, d, a), s.display) {
                                        var u = o(s.fontColor, h.defaultFontColor);
                                        if (c.font = g, c.save(), c.translate(e.xCenter, e.yCenter), c.rotate(m), s.showLabelBackdrop) {
                                            var l = c.measureText(n).width;
                                            c.fillStyle = s.backdropColor, c.fillRect(-l / 2 - s.backdropPaddingX, -d - _ / 2 - s.backdropPaddingY, l + 2 * s.backdropPaddingX, _ + 2 * s.backdropPaddingY)
                                        }
                                        c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = u, c.fillText(n, 0, -d), c.restore()
                                    }
                                }
                            }), (a.angleLines.display || a.pointLabels.display) && function(e) {
                                var a = e.ctx,
                                    i = r.valueOrDefault,
                                    s = e.options,
                                    o = s.angleLines,
                                    c = s.pointLabels;
                                a.lineWidth = o.lineWidth, a.strokeStyle = o.color;
                                var m = e.getDistanceFromCenterForValue(s.ticks.reverse ? e.min : e.max),
                                    _ = n(e);
                                a.textBaseline = "top";
                                for (var f = t(e) - 1; f >= 0; f--) {
                                    if (o.display) {
                                        var p = e.getPointPosition(f, m);
                                        a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(p.x, p.y), a.stroke(), a.closePath()
                                    }
                                    if (c.display) {
                                        var g = e.getPointPosition(f, m + 5),
                                            y = i(c.fontColor, h.defaultFontColor);
                                        a.font = _.font, a.fillStyle = y;
                                        var M = e.getIndexAngle(f),
                                            v = r.toDegrees(M);
                                        a.textAlign = d(v), l(v, e._pointLabelSizes[f], g), u(a, e.pointLabels[f] || "", g, _.size)
                                    }
                                }
                            }(e)
                        }
                    }
                });
            e.scaleService.registerScaleType("radialLinear", _, m)
        }
    },
    sdTe: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return n.getTime() === r.getTime()
        }
    },
    sqLM: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    ssxj: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    svD2: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    t6pj: function(e, t, n) {
        var a = n("YRFD"),
            r = n("xA5w"),
            i = n("25hp"),
            s = n("uyaC"),
            o = 1440,
            d = 43200,
            u = 525600;
        e.exports = function(e, t, n) {
            var l = n || {},
                c = a(e, t),
                h = l.locale,
                m = s.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (m = h.distanceInWords.localize);
            var _, f, p = {
                addSuffix: Boolean(l.addSuffix),
                comparison: c
            };
            c > 0 ? (_ = r(e), f = r(t)) : (_ = r(t), f = r(e));
            var g, y, M, v, b, L = Math[l.partialMethod ? String(l.partialMethod) : "floor"],
                D = i(f, _),
                k = f.getTimezoneOffset() - _.getTimezoneOffset(),
                Y = L(D / 60) - k;
            if ("s" === (g = l.unit ? String(l.unit) : Y < 1 ? "s" : Y < 60 ? "m" : Y < o ? "h" : Y < d ? "d" : Y < u ? "M" : "Y")) return m("xSeconds", D, p);
            if ("m" === g) return m("xMinutes", Y, p);
            if ("h" === g) return y = L(Y / 60), m("xHours", y, p);
            if ("d" === g) return M = L(Y / o), m("xDays", M, p);
            if ("M" === g) return v = L(Y / d), m("xMonths", v, p);
            if ("Y" === g) return b = L(Y / u), m("xYears", b, p);
            throw new Error("Unknown unit: " + g)
        }
    },
    t8zS: function(e, t, n) {
        var a = n("nk30");
        e.exports = function(e) {
            return a(e, {
                weekStartsOn: 1
            })
        }
    },
    tkWw: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    tzHd: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    "u/4p": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                r = a(e),
                i = r.getDay(),
                s = (i < n ? 7 : 0) + i - n;
            return r.setDate(r.getDate() - s), r.setHours(0, 0, 0, 0), r
        }
    },
    u1o0: function(e, t, n) {
        "use strict";
        var a = n("3n1n");
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
                var r, i, s;
                for (r = 0, i = e.length; r < i; ++r)
                    if (void 0 !== (s = e[r]) && (void 0 !== t && "function" == typeof s && (s = s(t)), void 0 !== n && a.isArray(s) && (s = s[n]), void 0 !== s)) return s
            }
        }
    },
    uSe8: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    ulq9: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return "m" === n ? t ? "минута" : "минуту" : e + " " + function(e, t) {
                    var n = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }({
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[n], +e)
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
    upln: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    uslO: function(e, t, n) {
        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        var i = {
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
        a.keys = function() {
            return Object.keys(i)
        }, a.resolve = r, e.exports = a, a.id = "uslO"
    },
    uwZN: function(e, t, n) {
        var a = n("7yyf");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    uyaC: function(e, t, n) {
        var a = n("Ptqd"),
            r = n("jQas");
        e.exports = {
            distanceInWords: a(),
            format: r()
        }
    },
    vBvW: function(e, t, n) {
        var a = n("mXYp");
        e.exports = function(e, t) {
            return a(Date.now(), e, t)
        }
    },
    ve2D: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 2 === a(e).getDay()
        }
    },
    vvdA: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Bar = function(t, n) {
                return n.type = "bar", new e(t, n)
            }
        }
    },
    w2Hs: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    w4by: function(e, t, n) {
        var a = n("6Zhv"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, n * r)
        }
    },
    wAFH: function(e, t, n) {
        var a = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, -n)
        }
    },
    wGD1: function(e, t, n) {
        "use strict";
        var a = n("rWJA"),
            r = n("iO9N"),
            i = function(e) {
                r.extend(this, e), this.initialize.apply(this, arguments)
            };
        r.extend(i.prototype, {
            initialize: function() {
                this.hidden = !1
            },
            pivot: function() {
                return this._view || (this._view = r.clone(this._model)), this._start = {}, this
            },
            transition: function(e) {
                var t = this._model,
                    n = this._start,
                    r = this._view;
                return t && 1 !== e ? (r || (r = this._view = {}), n || (n = this._start = {}), function(e, t, n, r) {
                    var i, s, o, d, u, l, c, h, m, _ = Object.keys(n);
                    for (i = 0, s = _.length; i < s; ++i)
                        if (o = _[i], l = n[o], t.hasOwnProperty(o) || (t[o] = l), (d = t[o]) !== l && "_" !== o[0]) {
                            if (e.hasOwnProperty(o) || (e[o] = d), u = e[o], (c = typeof l) == typeof u)
                                if ("string" === c) {
                                    if ((h = a(u)).valid && (m = a(l)).valid) {
                                        t[o] = m.mix(h, r).rgbString();
                                        continue
                                    }
                                } else if ("number" === c && isFinite(u) && isFinite(l)) {
                                t[o] = u + (l - u) * r;
                                continue
                            }
                            t[o] = l
                        }
                }(n, r, t, e), this) : (this._view = t, this._start = null, this)
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
    wIgY: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    wPWQ: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            e.Bubble = function(t, n) {
                return n.type = "bubble", new e(t, n)
            }
        }
    },
    wPo5: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = Number(t);
            return n.setHours(r), n
        }
    },
    wPpW: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                    return function(t, r, i, s) {
                        var o = n(t),
                            d = a[e][n(t)];
                        return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
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
    wT5f: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + {
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    MM: "luni",
                    yy: "ani"
                }[n]
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
    wajf: function(e, t, n) {
        var a = n("xA5w"),
            r = n("D6ie");
        e.exports = function(e, t) {
            var n = a(e),
                i = Number(t),
                s = r(n) - i;
            return n.setDate(n.getDate() - 7 * s), n
        }
    },
    wiYS: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, i = a(e).getTime();
            return t.forEach(function(e, t) {
                var s = a(e),
                    o = Math.abs(i - s.getTime());
                (void 0 === n || o < r) && (n = t, r = o)
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
        function a(e, t, n) {
            t = t || 0, n = n || 0;
            var a = new Date(0);
            a.setUTCFullYear(e, 0, 4);
            var r = 7 * t + n + 1 - (a.getUTCDay() || 7);
            return a.setUTCDate(a.getUTCDate() + r), a
        }
        var r = n("607n"),
            i = 36e5,
            s = 6e4,
            o = 2,
            d = /[T ]/,
            u = /:/,
            l = /^(\d{2})$/,
            c = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            h = /^(\d{4})/,
            m = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            _ = /^-(\d{2})$/,
            f = /^-?(\d{3})$/,
            p = /^-?(\d{2})-?(\d{2})$/,
            g = /^-?W(\d{2})$/,
            y = /^-?W(\d{2})-?(\d{1})$/,
            M = /^(\d{2}([.,]\d*)?)$/,
            v = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            b = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            L = /([Z+-].*)$/,
            D = /^(Z)$/,
            k = /^([+-])(\d{2})$/,
            Y = /^([+-])(\d{2}):?(\d{2})$/;
        e.exports = function(e, t) {
            if (r(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? o : Number(n);
            var w = function(e) {
                    var t, n = {},
                        a = e.split(d);
                    if (u.test(a[0]) ? (n.date = null, t = a[0]) : (n.date = a[0], t = a[1]), t) {
                        var r = L.exec(t);
                        r ? (n.time = t.replace(r[1], ""), n.timezone = r[1]) : n.time = t
                    }
                    return n
                }(e),
                x = function(e, t) {
                    var n, a = c[t],
                        r = m[t];
                    if (n = h.exec(e) || r.exec(e)) {
                        var i = n[1];
                        return {
                            year: parseInt(i, 10),
                            restDateString: e.slice(i.length)
                        }
                    }
                    if (n = l.exec(e) || a.exec(e)) {
                        var s = n[1];
                        return {
                            year: 100 * parseInt(s, 10),
                            restDateString: e.slice(s.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(w.date, n),
                T = x.year,
                S = function(e, t) {
                    if (null === t) return null;
                    var n, r, i, s;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (n = _.exec(e)) return r = new Date(0), i = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, i), r;
                    if (n = f.exec(e)) {
                        r = new Date(0);
                        var o = parseInt(n[1], 10);
                        return r.setUTCFullYear(t, 0, o), r
                    }
                    if (n = p.exec(e)) {
                        r = new Date(0), i = parseInt(n[1], 10) - 1;
                        var d = parseInt(n[2], 10);
                        return r.setUTCFullYear(t, i, d), r
                    }
                    if (n = g.exec(e)) return s = parseInt(n[1], 10) - 1, a(t, s);
                    if (n = y.exec(e)) {
                        s = parseInt(n[1], 10) - 1;
                        var u = parseInt(n[2], 10) - 1;
                        return a(t, s, u)
                    }
                    return null
                }(x.restDateString, T);
            if (S) {
                var O, j = S.getTime(),
                    H = 0;
                return w.time && (H = function(e) {
                    var t, n, a;
                    if (t = M.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * i;
                    if (t = v.exec(e)) return n = parseInt(t[1], 10), a = parseFloat(t[2].replace(",", ".")), n % 24 * i + a * s;
                    if (t = b.exec(e)) {
                        n = parseInt(t[1], 10), a = parseInt(t[2], 10);
                        var r = parseFloat(t[3].replace(",", "."));
                        return n % 24 * i + a * s + 1e3 * r
                    }
                    return null
                }(w.time)), w.timezone ? O = function(e) {
                    var t, n;
                    return (t = D.exec(e)) ? 0 : (t = k.exec(e)) ? (n = 60 * parseInt(t[2], 10), "+" === t[1] ? -n : n) : (t = Y.exec(e)) ? (n = 60 * parseInt(t[2], 10) + parseInt(t[3], 10), "+" === t[1] ? -n : n) : 0
                }(w.timezone) : (O = new Date(j + H).getTimezoneOffset(), O = new Date(j + H + O * s).getTimezoneOffset()), new Date(j + H + O * s)
            }
            return new Date(e)
        }
    },
    "xKy+": function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    xLg3: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    "xne+": function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    yRTJ: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
    yU6t: function(e, t) {},
    ymQ7: function(e, t, n) {
        var a = n("xA5w"),
            r = n("JURy"),
            i = n("nizW");
        e.exports = function(e) {
            var t = a(e);
            return i(t, r(t)) + 1
        }
    },
    yu3m: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            return 4 === a(e).getDay()
        }
    },
    z3hR: function(e, t, n) {
        ! function(e, t) {
            t(n("PJh5"))
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
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (e < 0) return !0;
                if (e < 10) return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10;
                    return n(0 === t ? e / 10 : t)
                }
                if (e < 1e4) {
                    for (; e >= 10;) e /= 10;
                    return n(e)
                }
                return e /= 1e3, n(e)
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
                    future: function(e) {
                        return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                    },
                    past: function(e) {
                        return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
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
        })
    },
    z3wv: function(e, t, n) {
        var a = n("qPxx");
        e.exports = function(e) {
            return a(new Date, e)
        }
    },
    zQFw: function(e, t, n) {
        var a = n("xA5w");
        e.exports = function(e) {
            var t = a(e),
                n = t.getMonth(),
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var a = n("xA5w"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = a(e),
                n = t.getFullYear(),
                i = new Date(0);
            i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
            var s = r(i),
                o = new Date(0);
            o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
            var d = r(o);
            return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= d.getTime() ? n : n - 1
        }
    }
});
//# sourceMappingURL=pages.teams-dashboard-cc652189f46b1721a4cc61ec1af3f486.js.map