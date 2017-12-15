webpackJsonp([35], {
    "+/J2": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setMilliseconds(r), a
        }
    },
    "+27R": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "+7/x": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "+sSA": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setMilliseconds(999), t
        }
    },
    "/6P1": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, r) {
                return t ? n(a)[0] : r ? n(a)[1] : n(a)[2]
            }

            function a(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function n(e) {
                return i[e].split("_")
            }

            function r(e, r, i, s) {
                var o = e + " ";
                return 1 === e ? o + t(0, r, i[0], s) : r ? o + (a(e) ? n(i)[1] : n(i)[0]) : s ? o + n(i)[1] : o + (a(e) ? n(i)[1] : n(i)[2])
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
                    s: function(e, t, a, n) {
                        return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
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
    "/bsm": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "/dIK": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setDate(r), a
        }
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

            function o(e) {
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
                    this._model = o(this._options)
                },
                getTitle: function() {
                    var e = this._options.callbacks,
                        t = e.beforeTitle.apply(this, arguments),
                        n = e.title.apply(this, arguments),
                        r = e.afterTitle.apply(this, arguments),
                        i = [];
                    return i = a(i, t), i = a(i, n), i = a(i, r)
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
                    return i = a(i, t), i = a(i, n), i = a(i, r)
                },
                update: function(t) {
                    var a, n, r = this,
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
                        for (a = 0, n = c.length; a < n; ++a) M.push(s(c[a]));
                        d.filter && (M = M.filter(function(e) {
                            return d.filter(e, h)
                        })), d.itemSort && (M = M.sort(function(e, t) {
                            return d.itemSort(e, t, h)
                        })), i.each(M, function(e) {
                            g.push(d.callbacks.labelColor.call(r, e, r._chart)), y.push(d.callbacks.labelTextColor.call(r, e, r._chart))
                        }), l.title = r.getTitle(M, h), l.beforeBody = r.getBeforeBody(M, h), l.body = r.getBody(M, h), l.afterBody = r.getAfterBody(M, h), l.footer = r.getFooter(M, h), l.x = Math.round(p.x), l.y = Math.round(p.y), l.caretPadding = d.caretPadding, l.labelColors = g, l.labelTextColors = y, l.dataPoints = M, _ = function(e, t, a) {
                            var n = e.x,
                                r = e.y,
                                i = e.caretSize,
                                s = e.caretPadding,
                                o = e.cornerRadius,
                                d = a.xAlign,
                                u = a.yAlign,
                                l = i + s,
                                c = o + s;
                            return "right" === d ? n -= t.width : "center" === d && (n -= t.width / 2), "top" === u ? r += l : r -= "bottom" === u ? t.height + l : t.height / 2, "center" === u ? "left" === d ? n += l : "right" === d && (n -= l) : "left" === d ? n -= c : "right" === d && (n += c), {
                                x: n,
                                y: r
                            }
                        }(l, f = function(e, t) {
                            var a = e._chart.ctx,
                                n = 2 * t.yPadding,
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
                            n += d * l, n += d ? (d - 1) * t.titleSpacing : 0, n += d ? t.titleMarginBottom : 0, n += o * c, n += o ? (o - 1) * t.bodySpacing : 0, n += u ? t.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * t.footerSpacing : 0;
                            var m = 0,
                                _ = function(e) {
                                    r = Math.max(r, a.measureText(e).width + m)
                                };
                            return a.font = i.fontString(l, t._titleFontStyle, t._titleFontFamily), i.each(t.title, _), a.font = i.fontString(c, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), _), m = t.displayColors ? c + 2 : 0, i.each(s, function(e) {
                                i.each(e.before, _), i.each(e.lines, _), i.each(e.after, _)
                            }), m = 0, a.font = i.fontString(h, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, _), r += 2 * t.xPadding, {
                                width: r,
                                height: n
                            }
                        }(this, l), m = function(e, t) {
                            var a = e._model,
                                n = e._chart,
                                r = e._chart.chartArea,
                                i = "center",
                                s = "center";
                            a.y < t.height ? s = "top" : a.y > n.height - t.height && (s = "bottom");
                            var o, d, u, l, c, h = (r.left + r.right) / 2,
                                m = (r.top + r.bottom) / 2;
                            "center" === s ? (o = function(e) {
                                return e <= h
                            }, d = function(e) {
                                return e > h
                            }) : (o = function(e) {
                                return e <= t.width / 2
                            }, d = function(e) {
                                return e >= n.width - t.width / 2
                            }), u = function(e) {
                                return e + t.width > n.width
                            }, l = function(e) {
                                return e - t.width < 0
                            }, c = function(e) {
                                return e <= m ? "top" : "bottom"
                            }, o(a.x) ? (i = "left", u(a.x) && (i = "center", s = c(a.y))) : d(a.x) && (i = "right", l(a.x) && (i = "center", s = c(a.y)));
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
                    var a = this._chart.ctx,
                        n = this._view,
                        r = this.getCaretPosition(e, t, n);
                    a.lineTo(r.x1, r.y1), a.lineTo(r.x2, r.y2), a.lineTo(r.x3, r.y3)
                },
                getCaretPosition: function(e, t, a) {
                    var n, r, i, s, o, d, u = a.caretSize,
                        l = a.cornerRadius,
                        c = a.xAlign,
                        h = a.yAlign,
                        m = e.x,
                        _ = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === h) o = _ + p / 2, "left" === c ? (r = (n = m) - u, i = n, s = o + u, d = o - u) : (r = (n = m + f) + u, i = n, s = o - u, d = o + u);
                    else if ("left" === c ? (n = (r = m + l + u) - u, i = r + u) : "right" === c ? (n = (r = m + f - l - u) - u, i = r + u) : (n = (r = m + f / 2) - u, i = r + u), "top" === h) o = (s = _) - u, d = s;
                    else {
                        o = (s = _ + p) + u, d = s;
                        var g = i;
                        i = n, n = g
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
                        var o = a.titleFontSize,
                            d = a.titleSpacing;
                        n.fillStyle = t(a.titleFontColor, r), n.font = i.fontString(o, a._titleFontStyle, a._titleFontFamily);
                        var u, l;
                        for (u = 0, l = s.length; u < l; ++u) n.fillText(s[u], e.x, e.y), e.y += o + d, u + 1 === s.length && (e.y += a.titleMarginBottom - d)
                    }
                },
                drawBody: function(e, a, n, r) {
                    var s = a.bodyFontSize,
                        o = a.bodySpacing,
                        d = a.body;
                    n.textAlign = a._bodyAlign, n.textBaseline = "top", n.font = i.fontString(s, a._bodyFontStyle, a._bodyFontFamily);
                    var u = 0,
                        l = function(t) {
                            n.fillText(t, e.x + u, e.y), e.y += s + o
                        };
                    i.each(a.beforeBody, l);
                    var c = a.displayColors;
                    u = c ? s + 2 : 0, i.each(d, function(o, d) {
                        i.each(o.before, l), i.each(o.lines, function(i) {
                            if (c) {
                                n.fillStyle = t(a.legendColorBackground, r), n.fillRect(e.x, e.y, s, s), n.lineWidth = 1, n.strokeStyle = t(a.labelColors[d].borderColor, r), n.strokeRect(e.x, e.y, s, s), n.fillStyle = t(a.labelColors[d].backgroundColor, r), n.fillRect(e.x + 1, e.y + 1, s - 2, s - 2);
                                var o = t(a.labelTextColors[d], r);
                                n.fillStyle = o
                            }
                            l(i)
                        }), i.each(o.after, l)
                    }), u = 0, i.each(a.afterBody, l), e.y -= o
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
                        u = e.y,
                        l = r.width,
                        c = r.height,
                        h = a.cornerRadius;
                    n.beginPath(), n.moveTo(d + h, u), "top" === o && this.drawCaret(e, r), n.lineTo(d + l - h, u), n.quadraticCurveTo(d + l, u, d + l, u + h), "center" === o && "right" === s && this.drawCaret(e, r), n.lineTo(d + l, u + c - h), n.quadraticCurveTo(d + l, u + c, d + l - h, u + c), "bottom" === o && this.drawCaret(e, r), n.lineTo(d + h, u + c), n.quadraticCurveTo(d, u + c, d, u + c - h), "center" === o && "left" === s && this.drawCaret(e, r), n.lineTo(d, u + h), n.quadraticCurveTo(d, u, d + h, u), n.closePath(), n.fill(), a.borderWidth > 0 && n.stroke()
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
                    var t = this._options,
                        a = !1;
                    if (this._lastActive = this._lastActive || [], "mouseout" === e.type ? this._active = [] : this._active = this._chart.getElementsAtEventForMode(e, t.mode, t), !(a = !i.arrayEquals(this._active, this._lastActive))) return !1;
                    if (this._lastActive = this._active, t.enabled || t.custom) {
                        this._eventPosition = {
                            x: e.x,
                            y: e.y
                        };
                        var n = this._model;
                        this.update(!0), this.pivot(), a |= n.x !== this._model.x || n.y !== this._model.y
                    }
                    return a
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
                        var u = e[a];
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
    "/mhn": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "024F": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getMilliseconds()
        }
    },
    "0C1O": function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Radar = function(t, a) {
                return a.type = "radar", new e(t, a)
            }
        }
    },
    "0LAu": function(e, t, a) {
        var n = a("MIQa");
        e.exports = function() {
            return n(new Date)
        }
    },
    "0UyA": function(e, t, a) {
        var n = a("4Z4o");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    "0X8Q": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "0YGC": function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n - 1), r.setHours(23, 59, 59, 999), r
        }
    },
    "0aH9": function(e, t, a) {
        var n = a("3znZ"),
            r = 6e4,
            i = 6048e5;
        e.exports = function(e, t) {
            var a = n(e),
                s = n(t),
                o = a.getTime() - a.getTimezoneOffset() * r,
                d = s.getTime() - s.getTimezoneOffset() * r;
            return Math.round((o - d) / i)
        }
    },
    "0gJx": function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Line = function(t, a) {
                return a.type = "line", new e(t, a)
            }
        }
    },
    "0oN5": function(e, t, a) {
        var n = a("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), n(e).getTime() === n(t).getTime()
        }
    },
    "11Bn": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return n(e)
                }),
                t = Math.max.apply(null, e);
            return new Date(t)
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
                    var n = this.getMeta(),
                        r = e.custom || {},
                        i = this.getScaleForId(n.xAxisID),
                        s = this.getScaleForId(n.yAxisID),
                        o = this._resolveElementOptions(e, t),
                        d = this.getDataset().data[t],
                        u = this.index,
                        l = a ? i.getPixelForDecimal(.5) : i.getPixelForValue("object" == typeof d ? d : NaN, t, u),
                        c = a ? s.getBasePixel() : s.getPixelForValue(d, t, u);
                    e._xScale = i, e._yScale = s, e._options = o, e._datasetIndex = u, e._index = t, e._model = {
                        backgroundColor: o.backgroundColor,
                        borderColor: o.borderColor,
                        borderWidth: o.borderWidth,
                        hitRadius: o.hitRadius,
                        pointStyle: o.pointStyle,
                        radius: a ? 0 : o.radius,
                        skip: r.skip || isNaN(l) || isNaN(c),
                        x: l,
                        y: c
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
                    for (a = 0, n = _.length; a < n; ++a) h[r = _[a]] = l([d[r], o[r], u[r]], m, t);
                    return h.radius = l([d.radius, c ? c.r : void 0, o.radius, u.radius], m, t), h
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
                        function e(e) {
                            return d ? e.xAxisID === t.id : e.yAxisID === t.id
                        }
                        var t = this,
                            a = t.options,
                            r = a.ticks,
                            i = t.chart,
                            s = i.data.datasets,
                            o = n.valueOrDefault,
                            d = t.isHorizontal();
                        t.min = null, t.max = null, t.minNotZero = null;
                        var u = a.stacked;
                        if (void 0 === u && n.each(s, function(t, a) {
                                if (!u) {
                                    var n = i.getDatasetMeta(a);
                                    i.isDatasetVisible(a) && e(n) && void 0 !== n.stack && (u = !0)
                                }
                            }), a.stacked || u) {
                            var l = {};
                            n.each(s, function(r, s) {
                                var o = i.getDatasetMeta(s),
                                    d = [o.type, void 0 === a.stacked && void 0 === o.stack ? s : "", o.stack].join(".");
                                i.isDatasetVisible(s) && e(o) && (void 0 === l[d] && (l[d] = []), n.each(r.data, function(e, n) {
                                    var r = l[d],
                                        i = +t.getRightValue(e);
                                    isNaN(i) || o.data[n].hidden || (r[n] = r[n] || 0, a.relativePoints ? r[n] = 100 : r[n] += i)
                                }))
                            }), n.each(l, function(e) {
                                var a = n.min(e),
                                    r = n.max(e);
                                t.min = null === t.min ? a : Math.min(t.min, a), t.max = null === t.max ? r : Math.max(t.max, r)
                            })
                        } else n.each(s, function(a, r) {
                            var s = i.getDatasetMeta(r);
                            i.isDatasetVisible(r) && e(s) && n.each(a.data, function(e, a) {
                                var n = +t.getRightValue(e);
                                isNaN(n) || s.data[a].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                            })
                        });
                        t.min = o(r.min, t.min), t.max = o(r.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10))
                    },
                    buildTicks: function() {
                        var e = this.options.ticks,
                            t = {
                                min: e.min,
                                max: e.max
                            },
                            a = this.ticks = r.generators.logarithmic(t, this);
                        this.isHorizontal() || a.reverse(), this.max = n.max(a), this.min = n.min(a), e.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
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
                        var t, a, r, i = this.start,
                            s = +this.getRightValue(e),
                            o = this.options.ticks;
                        return this.isHorizontal() ? (r = n.log10(this.end) - n.log10(i), 0 === s ? a = this.left : (t = this.width, a = this.left + t / r * (n.log10(s) - n.log10(i)))) : (t = this.height, 0 !== i || o.reverse ? 0 === this.end && o.reverse ? (r = n.log10(this.start) - n.log10(this.minNotZero), a = s === this.end ? this.top : s === this.minNotZero ? this.top + .02 * t : this.top + .02 * t + .98 * t / r * (n.log10(s) - n.log10(this.minNotZero))) : 0 === s ? a = o.reverse ? this.top : this.bottom : (r = n.log10(this.end) - n.log10(i), t = this.height, a = this.bottom - t / r * (n.log10(s) - n.log10(i))) : (r = n.log10(this.end) - n.log10(this.minNotZero), a = s === i ? this.bottom : s === this.minNotZero ? this.bottom - .02 * t : this.bottom - .02 * t - .98 * t / r * (n.log10(s) - n.log10(this.minNotZero)))), a
                    },
                    getValueForPixel: function(e) {
                        var t, a, r = n.log10(this.end) - n.log10(this.start);
                        return this.isHorizontal() ? (a = this.width, t = this.start * Math.pow(10, (e - this.left) * r / a)) : (a = this.height, t = Math.pow(10, (this.bottom - e) * r / a) / this.start), t
                    }
                });
            e.scaleService.registerScaleType("logarithmic", a, t)
        }
    },
    "1gtq": function(e, t, a) {
        var n = a("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), n(e).getTime() === n(t).getTime()
        }
    },
    "1rLR": function(e, t, a) {
        var n = a("3EIC");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, 3 * a)
        }
    },
    "1udo": function(e, t, a) {
        var n = a("WNGz");
        e.exports = function() {
            return n(new Date)
        }
    },
    "25hp": function(e, t, a) {
        var n = a("G7No");
        e.exports = function(e, t) {
            var a = n(e, t) / 1e3;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
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
                        u = t.chart.scale;
                    void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension), i.extend(a.dataset, {
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
                    }), a.dataset.pivot(), i.each(r, function(a, n) {
                        t.updateElement(a, n, e)
                    }, t), t.updateBezierControlPoints()
                },
                updateElement: function(e, t, a) {
                    var n = e.custom || {},
                        r = this.getDataset(),
                        s = this.chart.scale,
                        o = this.chart.options.elements.point,
                        d = s.getPointPositionForValue(t, r.data[t]);
                    void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), i.extend(e, {
                        _datasetIndex: this.index,
                        _index: t,
                        _scale: s,
                        _model: {
                            x: a ? s.xCenter : d.x,
                            y: a ? s.yCenter : d.y,
                            tension: n.tension ? n.tension : i.valueOrDefault(r.lineTension, this.chart.options.elements.line.tension),
                            radius: n.radius ? n.radius : i.valueAtIndexOrDefault(r.pointRadius, t, o.radius),
                            backgroundColor: n.backgroundColor ? n.backgroundColor : i.valueAtIndexOrDefault(r.pointBackgroundColor, t, o.backgroundColor),
                            borderColor: n.borderColor ? n.borderColor : i.valueAtIndexOrDefault(r.pointBorderColor, t, o.borderColor),
                            borderWidth: n.borderWidth ? n.borderWidth : i.valueAtIndexOrDefault(r.pointBorderWidth, t, o.borderWidth),
                            pointStyle: n.pointStyle ? n.pointStyle : i.valueAtIndexOrDefault(r.pointStyle, t, o.pointStyle),
                            hitRadius: n.hitRadius ? n.hitRadius : i.valueAtIndexOrDefault(r.pointHitRadius, t, o.hitRadius)
                        }
                    }), e._model.skip = n.skip ? n.skip : isNaN(e._model.x) || isNaN(e._model.y)
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
    "2lB6": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t, a, r) {
            var i = n(e).getTime(),
                s = n(t).getTime(),
                o = n(a).getTime(),
                d = n(r).getTime();
            if (i > s || o > d) throw new Error("The start of the range cannot be after the end of the range");
            return i < d && o < s
        }
    },
    "2pmY": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "2s1U": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
        ! function(e, t) {
            t(a("PJh5"))
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
    "3EIC": function(e, t, a) {
        var n = a("xA5w"),
            r = a("Mdww");
        e.exports = function(e, t) {
            var a = n(e),
                i = Number(t),
                s = a.getMonth() + i,
                o = new Date(0);
            o.setFullYear(a.getFullYear(), s, 1), o.setHours(0, 0, 0, 0);
            var d = r(o);
            return a.setMonth(s, Math.min(d, a.getDate())), a
        }
    },
    "3K28": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "3LKG": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "3MVc": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                    return function(t, a, i, s) {
                        var o = n(t),
                            d = r[e][n(t)];
                        return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
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
    "3g9B": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getDate()
        }
    },
    "3hfc": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + function(e, t) {
                    var a = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
                }({
                    mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                }[a], +e)
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
    "3n1n": function(e, t, a) {
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
                var i, s, o;
                if (n.isArray(e))
                    if (s = e.length, r)
                        for (i = s - 1; i >= 0; i--) t.call(a, e[i], i);
                    else
                        for (i = 0; i < s; i++) t.call(a, e[i], i);
                else if (n.isObject(e))
                    for (s = (o = Object.keys(e)).length, i = 0; i < s; i++) t.call(a, e[o[i]], o[i])
            },
            arrayEquals: function(e, t) {
                var a, r, i, s;
                if (!e || !t || e.length !== t.length) return !1;
                for (a = 0, r = e.length; a < r; ++a)
                    if (i = e[a], s = t[a], i instanceof Array && s instanceof Array) {
                        if (!n.arrayEquals(i, s)) return !1
                    } else if (i !== s) return !1;
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
                    s = a[e];
                n.isObject(i) && n.isObject(s) ? n.merge(i, s, r) : t[e] = n.clone(s)
            },
            _mergerIf: function(e, t, a) {
                var r = t[e],
                    i = a[e];
                n.isObject(r) && n.isObject(i) ? n.mergeIf(r, i) : t.hasOwnProperty(e) || (t[e] = n.clone(i))
            },
            merge: function(e, t, a) {
                var r, i, s, o, d, u = n.isArray(t) ? t : [t],
                    l = u.length;
                if (!n.isObject(e)) return e;
                for (r = (a = a || {}).merger || n._merger, i = 0; i < l; ++i)
                    if (t = u[i], n.isObject(t))
                        for (d = 0, o = (s = Object.keys(t)).length; d < o; ++d) r(s[d], e, t, a);
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
    "3nPg": function(e, t, a) {
        var n = a("G7No"),
            r = 6e4;
        e.exports = function(e, t) {
            var a = n(e, t) / r;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
    },
    "3znZ": function(e, t, a) {
        var n = a("u/4p");
        e.exports = function(e) {
            return n(e, {
                weekStartsOn: 1
            })
        }
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
                    var a = this.chart.data,
                        n = this.isHorizontal();
                    return a.yLabels && !n ? this.getRightValue(a.datasets[t].data[e]) : this.ticks[e - this.minIndex]
                },
                getPixelForValue: function(e, t) {
                    var a, n = this.options.offset,
                        r = Math.max(this.maxIndex + 1 - this.minIndex - (n ? 0 : 1), 1);
                    if (void 0 !== e && null !== e && (a = this.isHorizontal() ? e.x : e.y), void 0 !== a || void 0 !== e && isNaN(t)) {
                        var i = this.getLabels();
                        e = a || e;
                        var s = i.indexOf(e);
                        t = -1 !== s ? s : t
                    }
                    if (this.isHorizontal()) {
                        var o = this.width / r,
                            d = o * (t - this.minIndex);
                        return n && (d += o / 2), this.left + Math.round(d)
                    }
                    var u = this.height / r,
                        l = u * (t - this.minIndex);
                    return n && (l += u / 2), this.top + Math.round(l)
                },
                getPixelForTick: function(e) {
                    return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                },
                getValueForPixel: function(e) {
                    var t = this.options.offset,
                        a = Math.max(this._ticks.length - (t ? 0 : 1), 1),
                        n = this.isHorizontal(),
                        r = (n ? this.width : this.height) / a;
                    return e -= n ? this.left : this.top, t && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + this.minIndex
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
    "4LxA": function(e, t, a) {
        var n = a("iRXW");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
    "4OFc": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e).getDay();
            return 0 === t || 6 === t
        }
    },
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
                        u = d.length;
                    for (n = 0; n < u; ++n)
                        if (r = d[n], i = r.plugin, "function" == typeof(o = i[t]) && ((s = [e].concat(a || [])).push(r.options), !1 === o.apply(i, s))) return !1;
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
    "4Z4o": function(e, t, a) {
        var n = a("3EIC");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, 12 * a)
        }
    },
    "4zIR": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t, a) {
            var r = n(e).getTime(),
                i = n(t).getTime(),
                s = n(a).getTime();
            if (i > s) throw new Error("The start of the range cannot be after the end of the range");
            return r >= i && r <= s
        }
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
                    var u = r >= o && r <= d,
                        l = s >= a.innerRadius && s <= a.outerRadius;
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
    "5Omq": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "5j66": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "5qwL": function(e, t, a) {
        var n = a("VaeB");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
    "5vPg": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
    },
    "6CZb": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getTime() > (new Date).getTime()
        }
    },
    "6SO/": function(e, t, a) {
        var n = a("gAt4");
        e.exports = function(e, t) {
            var a = n(e, t) / 7;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
    },
    "6Zhv": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e).getTime(),
                r = Number(t);
            return new Date(a + r)
        }
    },
    "6axH": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 6 === n(e).getDay()
        }
    },
    "6cf8": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                    var e = Date.now(),
                        t = 0;
                    this.dropFrames > 1 && (t = Math.floor(this.dropFrames), this.dropFrames = this.dropFrames % 1), this.advance(1 + t);
                    var a = Date.now();
                    this.dropFrames += (a - e) / this.frameDuration, this.animations.length > 0 && this.requestAnimationFrame()
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
    "6udH": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 1 === n(e).getDate()
        }
    },
    "6w0d": function(e, t, a) {
        "use strict";
        t.a = function(e) {
            return n.__awaiter(this, void 0, void 0, function() {
                var t;
                return n.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, r.a.request(e.path, e)];
                        case 1:
                            return t = a.sent(), [2, new i(t, e)]
                    }
                })
            })
        };
        var n = a("TToO"),
            r = a("9u8h"),
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
    "7EGB": function(e, t, a) {
        var n = a("Jvcu");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, 7 * a)
        }
    },
    "7LV+": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "7MHZ": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "7OnE": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "7Q8x": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "7Swd": function(e, t, a) {
        var n = a("3EIC");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    "7Xwz": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
    },
    "7yyf": function(e, t, a) {
        var n = a("rBmI");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
    "8Gpr": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getHours()
        }
    },
    "8KV+": function(e, t, a) {
        var n = a("u/4p");
        e.exports = function(e, t, a) {
            var r = n(e, a),
                i = n(t, a);
            return r.getTime() === i.getTime()
        }
    },
    "8QR2": function(e, t, a) {
        var n = a("xA5w"),
            r = 864e5;
        e.exports = function(e, t, a, i) {
            var s = n(e).getTime(),
                o = n(t).getTime(),
                d = n(a).getTime(),
                u = n(i).getTime();
            if (s > o || d > u) throw new Error("The start of the range cannot be after the end of the range");
            if (!(s < u && d < o)) return 0;
            var l = (u > o ? o : u) - (d < s ? s : d);
            return Math.ceil(l / r)
        }
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
                    var a, n, r, s = this.getMeta(),
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
                        }, o.pivot()), a = 0, n = d.length; a < n; ++a) this.updateElement(d[a], a, e);
                    for (m && 0 !== o._model.tension && this.updateBezierControlPoints(), a = 0, n = d.length; a < n; ++a) d[a].pivot()
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
                    var n, r, s = this.getMeta(),
                        o = e.custom || {},
                        d = this.getDataset(),
                        u = this.index,
                        l = d.data[t],
                        c = this.getScaleForId(s.yAxisID),
                        h = this.getScaleForId(s.xAxisID),
                        m = this.chart.options.elements.point;
                    void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), n = h.getPixelForValue("object" == typeof l ? l : NaN, t, u), r = a ? c.getBasePixel() : this.calculatePointY(l, t, u), e._xScale = h, e._yScale = c, e._datasetIndex = u, e._index = t, e._model = {
                        x: n,
                        y: r,
                        skip: o.skip || isNaN(n) || isNaN(r),
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
                calculatePointY: function(e, t, a) {
                    var n, r, i, s = this.chart,
                        o = this.getMeta(),
                        d = this.getScaleForId(o.yAxisID),
                        u = 0,
                        l = 0;
                    if (d.options.stacked) {
                        for (n = 0; n < a; n++)
                            if (r = s.data.datasets[n], "line" === (i = s.getDatasetMeta(n)).type && i.yAxisID === d.id && s.isDatasetVisible(n)) {
                                var c = Number(d.getRightValue(r.data[t]));
                                c < 0 ? l += c || 0 : u += c || 0
                            }
                        var h = Number(d.getRightValue(e));
                        return h < 0 ? d.getPixelForValue(l + h) : d.getPixelForValue(u + h)
                    }
                    return d.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    function e(e, t, a) {
                        return Math.max(Math.min(e, a), t)
                    }
                    var t, a, n, r, s = this.getMeta(),
                        o = this.chart.chartArea,
                        d = s.data || [];
                    if (s.dataset._model.spanGaps && (d = d.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === s.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(d);
                    else
                        for (t = 0, a = d.length; t < a; ++t) n = d[t]._model, r = i.splineCurve(i.previousItem(d, t)._model, n, i.nextItem(d, t)._model, s.dataset._model.tension), n.controlPointPreviousX = r.previous.x, n.controlPointPreviousY = r.previous.y, n.controlPointNextX = r.next.x, n.controlPointNextY = r.next.y;
                    if (this.chart.options.elements.line.capBezierPoints)
                        for (t = 0, a = d.length; t < a; ++t)(n = d[t]._model).controlPointPreviousX = e(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = e(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = e(n.controlPointNextX, o.left, o.right), n.controlPointNextY = e(n.controlPointNextY, o.top, o.bottom)
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
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        n = e.custom || {},
                        r = e._model;
                    void 0 !== t.radius && void 0 === t.pointRadius && (t.pointRadius = t.radius), r.radius = n.radius || i.valueAtIndexOrDefault(t.pointRadius, a, this.chart.options.elements.point.radius), r.backgroundColor = this.getPointBackgroundColor(e, a), r.borderColor = this.getPointBorderColor(e, a), r.borderWidth = this.getPointBorderWidth(e, a)
                }
            })
        }
    },
    "8v14": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "9Jn5": function(e, t, a) {
        var n = a("zZbG");
        e.exports = function(e, t) {
            return n(e) - n(t)
        }
    },
    "9r5b": function(e, t, a) {
        var n = a("nfOx");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    "9u8h": function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        });
        var n = a("TToO"),
            r = a("6sO2"),
            i = a("Aj/L"),
            s = "application/json; charset=UTF-8",
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
                    return t === s ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var a = r.n.store.getState(),
                        n = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = s);
                    var o = Object(i.c)(a);
                    return o && (n.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (n["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        n[e] && delete n[e]
                    }), n
                }, e
            }()
    },
    A2zO: function(e, t, a) {
        var n = a("Be26");
        e.exports = function(e) {
            return n(new Date, e)
        }
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

            function s(e) {
                var t = e.fill,
                    a = "dataset";
                return !1 === t ? null : (isFinite(t) || (a = "boundary"), u[a](e))
            }

            function o(e) {
                return e && !e.skip
            }

            function d(e, t, a, n, r) {
                var s;
                if (n && r) {
                    for (e.moveTo(t[0].x, t[0].y), s = 1; s < n; ++s) i.canvas.lineTo(e, t[s - 1], t[s]);
                    for (e.lineTo(a[r - 1].x, a[r - 1].y), s = r - 1; s > 0; --s) i.canvas.lineTo(e, a[s], a[s - 1], !0)
                }
            }
            var u = {
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
            return {
                id: "filler",
                afterDatasetsUpdate: function(n, i) {
                    var o, d, u, l, c = (n.data.datasets || []).length,
                        h = i.propagate,
                        m = [];
                    for (d = 0; d < c; ++d) l = null, (u = (o = n.getDatasetMeta(d)).dataset) && u._model && u instanceof r.Line && (l = {
                        visible: n.isDatasetVisible(d),
                        fill: e(u, d, c),
                        chart: n,
                        el: u
                    }), o.$filler = l, m.push(l);
                    for (d = 0; d < c; ++d)(l = m[d]) && (l.fill = a(m, d, h), l.boundary = t(l), l.mapper = s(l))
                },
                beforeDatasetDraw: function(e, t) {
                    var a = t.meta.$filler;
                    if (a) {
                        var r = e.ctx,
                            s = a.el,
                            u = s._view,
                            l = s._children || [],
                            c = a.mapper,
                            h = u.backgroundColor || n.global.defaultColor;
                        c && h && l.length && (i.canvas.clipArea(r, e.chartArea), function(e, t, a, n, r, i) {
                            var s, u, l, c, h, m, _, f = t.length,
                                p = n.spanGaps,
                                g = [],
                                y = [],
                                M = 0,
                                v = 0;
                            for (e.beginPath(), s = 0, u = f + !!i; s < u; ++s) h = a(c = t[l = s % f]._view, l, n), m = o(c), _ = o(h), m && _ ? (M = g.push(c), v = y.push(h)) : M && v && (p ? (m && g.push(c), _ && y.push(h)) : (d(e, g, y, M, v), M = v = 0, g = [], y = []));
                            d(e, g, y, M, v), e.closePath(), e.fillStyle = r, e.fill()
                        }(r, l, c, u, h, s._loop), i.canvas.unclipArea(r))
                    }
                }
            }
        }
    },
    A5K9: function(e, t) {},
    AFDx: function(e, t, a) {
        "use strict";

        function n(e) {
            return void 0 !== e._view.width
        }

        function r(e) {
            var t, a, r, i, s = e._view;
            if (n(e)) {
                var o = s.width / 2;
                t = s.x - o, a = s.x + o, r = Math.min(s.y, s.base), i = Math.max(s.y, s.base)
            } else {
                var d = s.height / 2;
                t = Math.min(s.x, s.base), a = Math.max(s.x, s.base), r = s.y - d, i = s.y + d
            }
            return {
                left: t,
                top: r,
                right: a,
                bottom: i
            }
        }
        var i = a("k7DW"),
            s = a("wGD1");
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
                var t, a, n, r, i, s, o, d = this._chart.ctx,
                    u = this._view,
                    l = u.borderWidth;
                if (u.horizontal ? (t = u.base, a = u.x, n = u.y - u.height / 2, r = u.y + u.height / 2, i = a > t ? 1 : -1, s = 1, o = u.borderSkipped || "left") : (t = u.x - u.width / 2, a = u.x + u.width / 2, n = u.y, i = 1, s = (r = u.base) > n ? 1 : -1, o = u.borderSkipped || "bottom"), l) {
                    var c = Math.min(Math.abs(t - a), Math.abs(n - r)),
                        h = (l = l > c ? c : l) / 2,
                        m = t + ("left" !== o ? h * i : 0),
                        _ = a + ("right" !== o ? -h * i : 0),
                        f = n + ("top" !== o ? h * s : 0),
                        p = r + ("bottom" !== o ? -h * s : 0);
                    m !== _ && (n = f, r = p), f !== p && (t = m, a = _)
                }
                d.beginPath(), d.fillStyle = u.backgroundColor, d.strokeStyle = u.borderColor, d.lineWidth = l;
                var g = [
                        [t, r],
                        [t, n],
                        [a, n],
                        [a, r]
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
                var a = !1;
                if (this._view) {
                    var n = r(this);
                    a = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                }
                return a
            },
            inLabelRange: function(e, t) {
                if (!this._view) return !1;
                var a = r(this);
                return n(this) ? e >= a.left && e <= a.right : t >= a.top && t <= a.bottom
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
    ALEw: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    AZvW: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e).getDay();
            return 0 === t && (t = 7), t
        }
    },
    Ab7C: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Akl5: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getMonth();
            return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    AoDM: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    BEem: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Bb5e: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getFullYear() - r.getFullYear()
        }
    },
    BbgG: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Be26: function(e, t, a) {
        var n = a("8KV+");
        e.exports = function(e, t) {
            return n(e, t, {
                weekStartsOn: 1
            })
        }
    },
    Bp2f: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    C7av: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    CFqe: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                    var a = this._calendarEl[e],
                        n = t && t.hours();
                    return function(e) {
                        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                    }(a) && (a = a.apply(t)), a.replace("{}", n % 12 == 1 ? "στη" : "στις")
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
    CVNg: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setMonth(0), a.setDate(r), a
        }
    },
    D6ie: function(e, t, a) {
        var n = a("xA5w"),
            r = a("3znZ"),
            i = a("iRXW"),
            s = 6048e5;
        e.exports = function(e) {
            var t = n(e),
                a = r(t).getTime() - i(t).getTime();
            return Math.round(a / s) + 1
        }
    },
    DN1M: function(e, t, a) {
        "use strict";

        function n(e, t) {
            var a = u.getStyle(e, t),
                n = a && a.match(/^(\d+)(\.\d+)?px$/);
            return n ? Number(n[1]) : void 0
        }

        function r(e, t, a) {
            e.addEventListener(t, a, p)
        }

        function i(e, t, a) {
            e.removeEventListener(t, a, p)
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

        function o(e, t, a) {
            var n = e[l] || (e[l] = {}),
                i = n.resizer = function(e) {
                    var t = document.createElement("div"),
                        a = c + "size-monitor",
                        n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    t.style.cssText = n, t.className = a, t.innerHTML = '<div class="' + a + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + a + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
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
                    var a = !1,
                        n = [];
                    return function() {
                        n = Array.prototype.slice.call(arguments), t = t || this, a || (a = !0, u.requestAnimFrame.call(window, function() {
                            a = !1, e.apply(t, n)
                        }))
                    }
                }(function() {
                    if (n.resizer) return t(s("resize", a))
                }));
            ! function(e, t) {
                var a = (e[l] || (e[l] = {})).renderProxy = function(e) {
                    e.animationName === m && t()
                };
                u.each(_, function(t) {
                    r(e, t, a)
                }), e.classList.add(h)
            }(e, function() {
                if (n.resizer) {
                    var t = e.parentNode;
                    t && t !== i.parentNode && t.insertBefore(i, t.firstChild), i._reset()
                }
            })
        }

        function d(e) {
            var t = e[l] || {},
                a = t.resizer;
            delete t.resizer,
                function(e) {
                    var t = e[l] || {},
                        a = t.renderProxy;
                    a && (u.each(_, function(t) {
                        i(e, t, a)
                    }), delete t.renderProxy), e.classList.remove(h)
                }(e), a && a.parentNode && a.parentNode.removeChild(a)
        }
        var u = a("iO9N"),
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
                    var a = e._style || document.createElement("style");
                    e._style || (e._style = a, t = "/* Chart.js */\n" + t, a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a)), a.appendChild(document.createTextNode(t))
                }(this, "@-webkit-keyframes " + m + "{" + e + "}@keyframes " + m + "{" + e + "}." + h + "{-webkit-animation:" + m + " 0.001s;animation:" + m + " 0.001s;}")
            },
            acquireContext: function(e, t) {
                "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                var a = e && e.getContext && e.getContext("2d");
                return a && a.canvas === e ? (function(e, t) {
                    var a = e.style,
                        r = e.getAttribute("height"),
                        i = e.getAttribute("width");
                    if (e[l] = {
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
                        var s = n(e, "width");
                        void 0 !== s && (e.width = s)
                    }
                    if (null === r || "" === r)
                        if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                        else {
                            var o = n(e, "height");
                            void 0 !== s && (e.height = o)
                        }
                }(e, t), a) : null
            },
            releaseContext: function(e) {
                var t = e.canvas;
                if (t[l]) {
                    var a = t[l].initial;
                    ["height", "width"].forEach(function(e) {
                        var n = a[e];
                        u.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
                    }), u.each(a.style || {}, function(e, a) {
                        t.style[a] = e
                    }), t.width = t.width, delete t[l]
                }
            },
            addEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" !== t) {
                    var i = a[l] || (a[l] = {});
                    r(n, t, (i.proxies || (i.proxies = {}))[e.id + "_" + t] = function(t) {
                        a(function(e, t) {
                            var a = f[e.type] || e.type,
                                n = u.getRelativePosition(e, t);
                            return s(a, t, n.x, n.y, e)
                        }(t, e))
                    })
                } else o(n, a, e)
            },
            removeEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" !== t) {
                    var r = ((a[l] || {}).proxies || {})[e.id + "_" + t];
                    r && i(n, t, r)
                } else d(n)
            }
        }, u.addEvent = r, u.removeEvent = i
    },
    DOkx: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    DSXN: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Db81: function(e, t, a) {
        "use strict";

        function n(e, t) {
            return e - t
        }

        function r(e) {
            var t, a, n, r = {},
                i = [];
            for (t = 0, a = e.length; t < a; ++t) r[n = e[t]] || (r[n] = !0, i.push(n));
            return i
        }

        function i(e, t, a, n) {
            var r = function(e, t, a) {
                    for (var n, r, i, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                        if (n = s + o >> 1, r = e[n - 1] || null, i = e[n], !r) return {
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
                u = (s[n] - i[n]) * d;
            return i[n] + u
        }

        function s(e, t) {
            var a = t.parser,
                n = t.parser || t.format;
            return "function" == typeof a ? a(e) : "string" == typeof e && "string" == typeof n ? u(e, n) : (e instanceof u || (e = u(e)), e.isValid() ? e : "function" == typeof n ? n(e) : e)
        }

        function o(e, t) {
            if (c.isNullOrUndef(e)) return null;
            var a = t.options.time,
                n = s(t.getRightValue(e), a);
            return n.isValid() ? (a.round && n.startOf(a.round), n.valueOf()) : null
        }

        function d(e, t, a, n, r, i) {
            var s, o = i.time,
                d = c.valueOrDefault(o.stepSize, o.unitStepSize),
                l = "week" === a && o.isoWeekday,
                h = i.ticks.major.enabled,
                m = _[a],
                f = u(e),
                p = u(t),
                g = [];
            for (d || (d = function(e, t, a, n) {
                    var r, i, s, o = t - e,
                        d = _[a],
                        u = d.size,
                        l = d.steps;
                    if (!l) return Math.ceil(o / ((n || 1) * u));
                    for (r = 0, i = l.length; r < i && (s = l[r], !(Math.ceil(o / (u * s)) <= n)); ++r);
                    return s
                }(e, t, a, r)), l && (f = f.isoWeekday(l), p = p.isoWeekday(l)), f = f.startOf(l ? "day" : a), (p = p.startOf(l ? "day" : a)) < t && p.add(1, a), s = u(f), h && n && !l && !o.round && (s.startOf(n), s.add(~~((f - s) / (m.size * d)) * d, a)); s < p; s.add(d, a)) g.push(+s);
            return g.push(+s), g
        }
        var u = a("PJh5");
        u = "function" == typeof u ? u : window.moment;
        var l = a("k7DW"),
            c = a("iO9N"),
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
                    var e, t, a, i, s, d, l = this.chart,
                        _ = this.options.time,
                        f = o(_.min, this) || m,
                        p = o(_.max, this) || h,
                        g = [],
                        y = [],
                        M = [];
                    for (e = 0, a = l.data.labels.length; e < a; ++e) M.push(o(l.data.labels[e], this));
                    for (e = 0, a = (l.data.datasets || []).length; e < a; ++e)
                        if (l.isDatasetVisible(e))
                            if (s = l.data.datasets[e].data, c.isObject(s[0]))
                                for (y[e] = [], t = 0, i = s.length; t < i; ++t) d = o(s[t], this), g.push(d), y[e][t] = d;
                            else g.push.apply(g, M), y[e] = M.slice(0);
                    else y[e] = [];
                    M.length && (M = r(M).sort(n), f = Math.min(f, M[0]), p = Math.max(p, M[M.length - 1])), g.length && (g = r(g).sort(n), f = Math.min(f, g[0]), p = Math.max(p, g[g.length - 1])), f = f === m ? +u().startOf("day") : f, p = p === h ? +u().endOf("day") + 1 : p, this.min = Math.min(f, p), this.max = Math.max(f + 1, p), this._horizontal = this.isHorizontal(), this._table = [], this._timestamps = {
                        data: g,
                        datasets: y,
                        labels: M
                    }
                },
                buildTicks: function() {
                    var e, t, a, n = this.min,
                        r = this.max,
                        s = this.options,
                        l = s.time,
                        c = l.displayFormats,
                        h = this.getLabelCapacity(n),
                        p = l.unit || function(e, t, a, n) {
                            var r, i, s, o = f.length;
                            for (r = f.indexOf(e); r < o - 1; ++r)
                                if (i = _[f[r]], s = i.steps ? i.steps[i.steps.length - 1] : m, Math.ceil((a - t) / (s * i.size)) <= n) return f[r];
                            return f[o - 1]
                        }(l.minUnit, n, r, h),
                        g = function(e) {
                            for (var t = f.indexOf(e) + 1, a = f.length; t < a; ++t)
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
                            y = d(n, r, p, g, h, s)
                    }
                    for ("ticks" === s.bounds && y.length && (n = y[0], r = y[y.length - 1]), n = o(l.min, this) || n, r = o(l.max, this) || r, e = 0, t = y.length; e < t; ++e)(a = y[e]) >= n && a <= r && M.push(a);
                    return this.min = n, this.max = r, this._unit = p, this._majorUnit = g, this._minorFormat = c[p], this._majorFormat = c[g], this._table = function(e, t, a, n) {
                            if ("linear" === n || !e.length) return [{
                                time: t,
                                pos: 0
                            }, {
                                time: a,
                                pos: 1
                            }];
                            var r, i, s, o, d, u = [],
                                l = [t];
                            for (r = 0, i = e.length; r < i; ++r)(o = e[r]) > t && o < a && l.push(o);
                            for (l.push(a), r = 0, i = l.length; r < i; ++r) d = l[r + 1], s = l[r - 1], o = l[r], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || u.push({
                                time: o,
                                pos: r / (i - 1)
                            });
                            return u
                        }(this._timestamps.data, n, r, s.distribution), this._offsets = function(e, t, a, n, r) {
                            var s, o, d = 0,
                                u = 0;
                            return r.offset && t.length && (r.time.min || (s = t.length > 1 ? t[1] : n, o = t[0], d = (i(e, "time", s, "pos") - i(e, "time", o, "pos")) / 2), r.time.max || (s = t[t.length - 1], o = t.length > 1 ? t[t.length - 2] : a, u = (i(e, "time", s, "pos") - i(e, "time", o, "pos")) / 2)), {
                                left: d,
                                right: u
                            }
                        }(this._table, M, n, r, s),
                        function(e, t) {
                            var a, n, r, i, s = [];
                            for (a = 0, n = e.length; a < n; ++a) r = e[a], i = !!t && r === +u(r).startOf(t), s.push({
                                value: r,
                                major: i
                            });
                            return s
                        }(M, g)
                },
                getLabelForIndex: function(e, t) {
                    var a = this.chart.data,
                        n = this.options.time,
                        r = a.labels && e < a.labels.length ? a.labels[e] : "",
                        i = a.datasets[t].data[e];
                    return c.isObject(i) && (r = this.getRightValue(i)), n.tooltipFormat && (r = s(r, n).format(n.tooltipFormat)), r
                },
                tickFormatFunction: function(e, t, a) {
                    var n = this.options,
                        r = e.valueOf(),
                        i = this._majorUnit,
                        s = this._majorFormat,
                        o = e.clone().startOf(this._majorUnit).valueOf(),
                        d = n.ticks.major,
                        u = d.enabled && i && s && r === o,
                        l = e.format(u ? s : this._minorFormat),
                        h = u ? d : n.ticks.minor,
                        m = c.valueOrDefault(h.callback, h.userCallback);
                    return m ? m(l, t, a) : l
                },
                convertTicksToLabels: function(e) {
                    var t, a, n = [];
                    for (t = 0, a = e.length; t < a; ++t) n.push(this.tickFormatFunction(u(e[t].value), t, e));
                    return n
                },
                getPixelForOffset: function(e) {
                    var t = this._horizontal ? this.width : this.height,
                        a = this._horizontal ? this.left : this.top,
                        n = i(this._table, "time", e, "pos");
                    return a + t * (this._offsets.left + n) / (this._offsets.left + 1 + this._offsets.right)
                },
                getPixelForValue: function(e, t, a) {
                    var n = null;
                    if (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]), null === n && (n = o(e, this)), null !== n) return this.getPixelForOffset(n)
                },
                getPixelForTick: function(e) {
                    var t = this.getTicks();
                    return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                },
                getValueForPixel: function(e) {
                    var t = this._horizontal ? this.width : this.height,
                        a = this._horizontal ? this.left : this.top,
                        n = (t ? (e - a) / t : 0) * (this._offsets.left + 1 + this._offsets.left) - this._offsets.right,
                        r = i(this._table, "pos", n, "time");
                    return u(r)
                },
                getLabelWidth: function(e) {
                    var t = this.options.ticks,
                        a = this.ctx.measureText(e).width,
                        n = c.toRadians(t.maxRotation),
                        r = Math.cos(n),
                        i = Math.sin(n);
                    return a * r + c.valueOrDefault(t.fontSize, l.global.defaultFontSize) * i
                },
                getLabelCapacity: function(e) {
                    this._minorFormat = this.options.time.displayFormats.millisecond;
                    var t = this.tickFormatFunction(u(e), 0, []),
                        a = this.getLabelWidth(t),
                        n = this.isHorizontal() ? this.width : this.height;
                    return Math.floor(n / a)
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
        ! function(e, t) {
            t(a("PJh5"))
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
    "Eoz/": function(e, t, a) {
        function n(e, t) {
            t = t || "";
            var a = e > 0 ? "-" : "+",
                n = Math.abs(e),
                i = n % 60;
            return a + r(Math.floor(n / 60), 2) + t + r(i, 2)
        }

        function r(e, t) {
            for (var a = Math.abs(e).toString(); a.length < t;) a = "0" + a;
            return a
        }
        var i = a("ymQ7"),
            s = a("D6ie"),
            o = a("zZbG"),
            d = a("xA5w"),
            u = a("dH3X"),
            l = a("uyaC"),
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
                    return n(e.getTimezoneOffset(), ":")
                },
                ZZ: function(e) {
                    return n(e.getTimezoneOffset())
                },
                X: function(e) {
                    return Math.floor(e.getTime() / 1e3)
                },
                x: function(e) {
                    return e.getTime()
                }
            };
        e.exports = function(e, t, a) {
            var n = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                r = (a || {}).locale,
                i = l.format.formatters,
                s = l.format.formattingTokensRegExp;
            r && r.format && r.format.formatters && (i = r.format.formatters, r.format.formattingTokensRegExp && (s = r.format.formattingTokensRegExp));
            var o = d(e);
            return u(o) ? function(e, t, a) {
                var n, r, i = e.match(a),
                    s = i.length;
                for (n = 0; n < s; n++) r = t[i[n]] || c[i[n]], i[n] = r || function(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, "") : e.replace(/\\/g, "")
                }(i[n]);
                return function(e) {
                    for (var t = "", a = 0; a < s; a++) i[a] instanceof Function ? t += i[a](e, c) : t += i[a];
                    return t
                }
            }(n, i, s)(o) : "Invalid Date"
        }
    },
    Epw6: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getFullYear();
            return t.setFullYear(a + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    "F+2e": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                var i, s, o, d, u, l;
                if ("object" != typeof t || "[object HTMLImageElement]" !== (i = t.toString()) && "[object HTMLCanvasElement]" !== i) {
                    if (!(isNaN(a) || a <= 0)) {
                        switch (t) {
                            default: e.beginPath(),
                            e.arc(n, r, a, 0, 2 * Math.PI),
                            e.closePath(),
                            e.fill();
                            break;
                            case "triangle":
                                    e.beginPath(),
                                u = (s = 3 * a / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                e.moveTo(n - s / 2, r + u / 3),
                                e.lineTo(n + s / 2, r + u / 3),
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
                                    h = n - c,
                                    m = r - c,
                                    _ = Math.SQRT2 * a;e.beginPath(),
                                this.roundedRect(e, h, m, _, _, a / 2),
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
                    u = this._children.slice(),
                    l = s.elements.line,
                    c = -1;
                for (this._loop && u.length && u.push(u[0]), o.save(), o.lineCap = r.borderCapStyle || l.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || l.borderDash), o.lineDashOffset = r.borderDashOffset || l.borderDashOffset, o.lineJoin = r.borderJoinStyle || l.borderJoinStyle, o.lineWidth = r.borderWidth || l.borderWidth, o.strokeStyle = r.borderColor || s.defaultColor, o.beginPath(), c = -1, e = 0; e < u.length; ++e) t = u[e], a = i.previousItem(u, e), n = t._view, 0 === e ? n.skip || (o.moveTo(n.x, n.y), c = e) : (a = -1 === c ? a : u[c], n.skip || (c !== e - 1 && !d || -1 === c ? o.moveTo(n.x, n.y) : i.canvas.lineTo(o, a._view, t._view), c = e));
                o.stroke(), o.restore()
            }
        })
    },
    FKXc: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    FRPF: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    FlzV: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Fpqq: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Frex: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    FuaP: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                                u = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: o.backgroundColor ? o.backgroundColor : d(s.backgroundColor, n, u.backgroundColor),
                                strokeStyle: o.borderColor ? o.borderColor : d(s.borderColor, n, u.borderColor),
                                lineWidth: o.borderWidth ? o.borderWidth : d(s.borderWidth, n, u.borderWidth),
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
                    for (var n = this.chart, r = this.getDataset(), s = n.options, o = s.animation, d = n.scale, u = n.data.labels, l = this.calculateCircumference(r.data[t]), c = d.xCenter, h = d.yCenter, m = 0, _ = this.getMeta(), f = 0; f < t; ++f) isNaN(r.data[f]) || _.data[f].hidden || ++m;
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
                            outerRadius: a ? v : g,
                            startAngle: a && o.animateRotate ? p : y,
                            endAngle: a && o.animateRotate ? p : M,
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
        ! function(e, t) {
            t(a("PJh5"))
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
    G7No: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() - r.getTime()
        }
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
                    var n = this.chart,
                        r = this.getMeta(),
                        s = this.getDataset(),
                        o = e.custom || {},
                        d = n.options.elements.rectangle;
                    e._xScale = this.getScaleForId(r.xAxisID), e._yScale = this.getScaleForId(r.yAxisID), e._datasetIndex = this.index, e._index = t, e._model = {
                        datasetLabel: s.label,
                        label: n.data.labels[t],
                        borderSkipped: o.borderSkipped ? o.borderSkipped : d.borderSkipped,
                        backgroundColor: o.backgroundColor ? o.backgroundColor : i.valueAtIndexOrDefault(s.backgroundColor, t, d.backgroundColor),
                        borderColor: o.borderColor ? o.borderColor : i.valueAtIndexOrDefault(s.borderColor, t, d.borderColor),
                        borderWidth: o.borderWidth ? o.borderWidth : i.valueAtIndexOrDefault(s.borderWidth, t, d.borderWidth)
                    }, this.updateElementGeometry(e, t, a), e.pivot()
                },
                updateElementGeometry: function(e, t, a) {
                    var n = e._model,
                        r = this.getValueScale(),
                        i = r.getBasePixel(),
                        s = r.isHorizontal(),
                        o = this._ruler || this.getRuler(),
                        d = this.calculateBarValuePixels(this.index, t),
                        u = this.calculateBarIndexPixels(this.index, t, o);
                    n.horizontal = s, n.base = a ? i : d.base, n.x = s ? a ? i : d.head : u.center, n.y = s ? u.center : a ? i : d.head, n.height = s ? u.size : void 0, n.width = s ? void 0 : u.size
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
                        u = this.getMeta(),
                        l = this.getValueScale(),
                        c = d.data.datasets,
                        h = l.getRightValue(c[e].data[t]),
                        m = l.options.stacked,
                        _ = u.stack,
                        f = 0;
                    if (m || void 0 === m && void 0 !== _)
                        for (a = 0; a < e; ++a)(n = d.getDatasetMeta(a)).bar && n.stack === _ && n.controller.getValueScaleId() === l.id && d.isDatasetVisible(a) && (r = l.getRightValue(c[a].data[t]), (h < 0 && r < 0 || h >= 0 && r > 0) && (f += r));
                    return i = l.getPixelForValue(f), s = l.getPixelForValue(f + h), o = (s - i) / 2, {
                        size: o,
                        base: i,
                        head: s,
                        center: s + o / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, a) {
                    var n, r, s, o, d, u, l = a.scale.options,
                        c = this.getStackIndex(e),
                        h = a.pixels,
                        m = h[t],
                        _ = h.length,
                        f = a.start,
                        p = a.end;
                    return 1 === _ ? (n = m > f ? m - f : p - m, r = m < p ? p - m : m - f) : (t > 0 && (n = (m - h[t - 1]) / 2, t === _ - 1 && (r = n)), t < _ - 1 && (r = (h[t + 1] - m) / 2, 0 === t && (n = r))), s = n * l.categoryPercentage, o = r * l.categoryPercentage, d = (s + o) / a.stackCount, u = d * l.barPercentage, u = Math.min(i.valueOrDefault(l.barThickness, u), i.valueOrDefault(l.maxBarThickness, 1 / 0)), m -= s, m += d * c, m += (d - u) / 2, {
                        size: u,
                        base: m,
                        head: m + u,
                        center: m + u / 2
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
    GI7G: function(e, t, a) {
        var n = a("xA5w"),
            r = a("orNa"),
            i = a("NKE6");
        e.exports = function(e, t) {
            var a = n(e),
                s = n(t),
                o = i(a, s),
                d = Math.abs(r(a, s));
            return a.setMonth(a.getMonth() - o * d), o * (d - (i(a, s) === -o))
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
        ! function(e, t) {
            t(a("PJh5"))
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
    GvNH: function(e, t, a) {
        var n = a("WNGz");
        e.exports = function(e) {
            return n(e).getTime() === n(new Date).getTime()
        }
    },
    HXCM: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n + 1), r.setHours(23, 59, 59, 999), r
        }
    },
    I7cV: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = t ? Number(t.weekStartsOn) || 0 : 0,
                r = n(e),
                i = r.getDay(),
                s = 6 + (i < a ? -7 : 0) - (i - a);
            return r.setDate(r.getDate() + s), r.setHours(23, 59, 59, 999), r
        }
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
                    for (var u = 1; u < d; ++u) r.push(s + u * a);
                    return r.push(void 0 !== e.max ? e.max : o), r
                },
                logarithmic: function(e, t) {
                    var a, r, i = [],
                        s = n.valueOrDefault,
                        o = s(e.min, Math.pow(10, Math.floor(n.log10(t.min)))),
                        d = Math.floor(n.log10(t.max)),
                        u = Math.ceil(t.max / Math.pow(10, d));
                    0 === o ? (a = Math.floor(n.log10(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, a)), i.push(o), o = r * Math.pow(10, a)) : (a = Math.floor(n.log10(o)), r = Math.floor(o / Math.pow(10, a)));
                    do {
                        i.push(o), 10 === ++r && (r = 1, ++a), o = r * Math.pow(10, a)
                    } while (a < d || a === d && r < u);
                    var l = s(e.max, o);
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
    JNsx: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getMinutes()
        }
    },
    JURy: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = new Date(0);
            return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a
        }
    },
    Javx: function(e, t, a) {
        var n = a("b7g8");
        e.exports = function(e) {
            return n(e) ? 366 : 365
        }
    },
    Jtuq: function(e, t, a) {
        var n = a("lQzg"),
            r = a("xA5w");
        e.exports = function(e, t) {
            var a = r(e),
                i = r(t);
            return 4 * (a.getFullYear() - i.getFullYear()) + (n(a) - n(i))
        }
    },
    Jvcu: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setDate(a.getDate() + r), a
        }
    },
    JwiF: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    K7ZZ: function(e, t, a) {
        var n = a("zZbG"),
            r = a("3znZ");
        e.exports = function(e) {
            var t = n(e),
                a = new Date(0);
            a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var i = r(a);
            return i.setMilliseconds(i.getMilliseconds() - 1), i
        }
    },
    KC8c: function(e, t, a) {
        "use strict";

        function n(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : u.getRelativePosition(e, t)
        }

        function r(e, t) {
            var a, n, r, i, s;
            for (n = 0, i = e.data.datasets.length; n < i; ++n)
                if (e.isDatasetVisible(n))
                    for (r = 0, s = (a = e.getDatasetMeta(n)).data.length; r < s; ++r) {
                        var o = a.data[r];
                        o._view.skip || t(o)
                    }
        }

        function i(e, t) {
            var a = [];
            return r(e, function(e) {
                e.inRange(t.x, t.y) && a.push(e)
            }), a
        }

        function s(e, t, a, n) {
            var i = Number.POSITIVE_INFINITY,
                s = [];
            return r(e, function(e) {
                if (!a || e.inRange(t.x, t.y)) {
                    var r = e.getCenterPoint(),
                        o = n(t, r);
                    o < i ? (s = [e], i = o) : o === i && s.push(e)
                }
            }), s
        }

        function o(e) {
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
            var d = o(a.axis),
                u = a.intersect ? i(e, r) : s(e, r, !1, d),
                l = [];
            return u.length ? (e.data.datasets.forEach(function(t, a) {
                if (e.isDatasetVisible(a)) {
                    var n = e.getDatasetMeta(a).data[u[0]._index];
                    n && !n._view.skip && l.push(n)
                }
            }), l) : []
        }
        var u = a("iO9N");
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
                    var d = o(a.axis),
                        u = a.intersect ? i(e, r) : s(e, r, !1, d);
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
                    var i = o(a.axis),
                        d = s(e, r, a.intersect, i);
                    return d.length > 1 && d.sort(function(e, t) {
                        var a = e.getArea() - t.getArea();
                        return 0 === a && (a = e._datasetIndex - t._datasetIndex), a
                    }), d.slice(0, 1)
                },
                x: function(e, t, a) {
                    var i = n(t, e),
                        s = [],
                        o = !1;
                    return r(e, function(e) {
                        e.inXRange(i.x) && s.push(e), e.inRange(i.x, i.y) && (o = !0)
                    }), a.intersect && !o && (s = []), s
                },
                y: function(e, t, a) {
                    var i = n(t, e),
                        s = [],
                        o = !1;
                    return r(e, function(e) {
                        e.inYRange(i.y) && s.push(e), e.inRange(i.x, i.y) && (o = !0)
                    }), a.intersect && !o && (s = []), s
                }
            }
        }
    },
    L5rj: function(e, t, a) {
        "use strict";
        e.exports = {}, e.exports.Arc = a("5ImO"), e.exports.Line = a("FDK5"), e.exports.Point = a("Qor1"), e.exports.Rectangle = a("AFDx")
    },
    LLTj: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setMinutes(0, 0, 0), t
        }
    },
    LT9G: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    LU20: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setSeconds(59, 999), t
        }
    },
    Lgqo: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    M5Oo: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t).getTime();
            if (a.getTime() > r) throw new Error("The first date cannot be after the second date");
            var i = [],
                s = a;
            for (s.setHours(0, 0, 0, 0); s.getTime() <= r;) i.push(n(s)), s.setDate(s.getDate() + 1);
            return i
        }
    },
    MIQa: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setHours(23, 59, 59, 999), t
        }
    },
    "MKc+": function(e, t, a) {
        var n = a("oNnY");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    Mbb9: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getDay()
        }
    },
    Mdww: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getFullYear(),
                r = t.getMonth(),
                i = new Date(0);
            return i.setFullYear(a, r + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
        }
    },
    Moxe: function(e, t, a) {
        var n = a("M5Oo");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
    N3vo: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    NKE6: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e).getTime(),
                r = n(t).getTime();
            return a < r ? -1 : a > r ? 1 : 0
        }
    },
    NSOL: function(e, t, a) {
        var n = a("6Zhv"),
            r = 6e4;
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, a * r)
        }
    },
    Nd3h: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Nlnz: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Nzt2: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ORgI: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    OSsP: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
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

            function a(e) {
                return e > 9 ? a(e % 10) : e
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
    OUMt: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    OVPi: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    PGY2: function(e, t, a) {
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
        var s = {};
        a.d(s, "channelAchievements", function() {
            return n
        }), a.d(s, "achievement", function() {
            return r
        });
        var o = a("6w0d"),
            d = a("b9IH"),
            u = a("wuJz"),
            l = 6e4,
            c = 60 * l,
            h = function() {
                function e(e) {
                    this.totalMilliseconds = e, this.hours = Math.floor(e / c), this.minutes = Math.floor(e % c / l)
                }
                return e.prototype.isSameLengthAs = function(e) {
                    return this.minutes === e.minutes && this.hours === e.hours
                }, e.prototype.diff = function(t) {
                    return new e(this.totalMilliseconds - t.totalMilliseconds)
                }, e
            }(),
            m = function() {
                function e(e, t) {
                    this.start = "string" == typeof e ? new Date(e) : e, this.end = "string" == typeof t ? new Date(t) : t, this.duration = new h(this.end.getTime() - this.start.getTime()), this.hours = this.duration.hours, this.minutes = this.duration.minutes
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
            return s
        }), a.d(t, "c", function() {
            return o.a
        }), a.d(t, !1, function() {}), a.d(t, !1, function() {
            return d.a
        }), a.d(t, "a", function() {
            return m
        }), a.d(t, "d", function() {
            return i
        }), a.d(t, !1, function() {
            return h
        })
    },
    PJh5: function(e, t, a) {
        (function(e) {
            ! function(t, a) {
                e.exports = a()
            }(0, function() {
                "use strict";

                function t() {
                    return Ke.apply(null, arguments)
                }

                function n(e) {
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
                    var a, n = [];
                    for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                    return n
                }

                function u(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function l(e, t) {
                    for (var a in t) u(t, a) && (e[a] = t[a]);
                    return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function c(e, t, a, n) {
                    return ye(e, t, a, n, !0).utc()
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
                            a = Xe.call(t.parsedDateParts, function(e) {
                                return null != e
                            }),
                            n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                        if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                        e._isValid = n
                    }
                    return e._isValid
                }

                function _(e) {
                    var t = c(NaN);
                    return null != e ? l(h(t), e) : h(t).userInvalidated = !0, t
                }

                function f(e, t) {
                    var a, n, r;
                    if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), i(t._pf) || (e._pf = h(t)), i(t._locale) || (e._locale = t._locale), Qe.length > 0)
                        for (a = 0; a < Qe.length; a++) i(r = t[n = Qe[a]]) || (e[n] = r);
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
                        a = 0;
                    return 0 !== t && isFinite(t) && (a = y(t)), a
                }

                function v(e, t, a) {
                    var n, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        s = 0;
                    for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && M(e[n]) !== M(t[n])) && s++;
                    return s + i
                }

                function b(e) {
                    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function L(e, a) {
                    var n = !0;
                    return l(function() {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                            for (var r, i = [], s = 0; s < arguments.length; s++) {
                                if (r = "", "object" == typeof arguments[s]) {
                                    r += "\n[" + s + "] ";
                                    for (var o in arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[s];
                                i.push(r)
                            }
                            b(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), n = !1
                        }
                        return a.apply(this, arguments)
                    }, a)
                }

                function Y(e, a) {
                    null != t.deprecationHandler && t.deprecationHandler(e, a), et[e] || (b(a), et[e] = !0)
                }

                function D(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function k(e, t) {
                    var a, n = l({}, e);
                    for (a in t) u(t, a) && (r(e[a]) && r(t[a]) ? (n[a] = {}, l(n[a], e[a]), l(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                    for (a in e) u(e, a) && !u(t, a) && r(e[a]) && (n[a] = l({}, n[a]));
                    return n
                }

                function w(e) {
                    null != e && this.set(e)
                }

                function x(e, t) {
                    var a = e.toLowerCase();
                    at[a] = at[a + "s"] = at[t] = e
                }

                function T(e) {
                    return "string" == typeof e ? at[e] || at[e.toLowerCase()] : void 0
                }

                function S(e) {
                    var t, a, n = {};
                    for (a in e) u(e, a) && (t = T(a)) && (n[t] = e[a]);
                    return n
                }

                function O(e, t) {
                    nt[e] = t
                }

                function j(e, a) {
                    return function(n) {
                        return null != n ? (P(this, e, n), t.updateOffset(this, a), this) : H(this, e)
                    }
                }

                function H(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function P(e, t, a) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](a)
                }

                function C(e, t, a) {
                    var n = "" + Math.abs(e),
                        r = t - n.length;
                    return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
                }

                function A(e, t, a, n) {
                    var r = n;
                    "string" == typeof n && (r = function() {
                        return this[n]()
                    }), e && (ot[e] = r), t && (ot[t[0]] = function() {
                        return C(r.apply(this, arguments), t[1], t[2])
                    }), a && (ot[a] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function F(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function W(e, t) {
                    return e.isValid() ? (t = E(t, e.localeData()), st[t] = st[t] || function(e) {
                        var t, a, n = e.match(rt);
                        for (t = 0, a = n.length; t < a; t++) ot[n[t]] ? n[t] = ot[n[t]] : n[t] = F(n[t]);
                        return function(t) {
                            var r, i = "";
                            for (r = 0; r < a; r++) i += D(n[r]) ? n[r].call(t, e) : n[r];
                            return i
                        }
                    }(t), st[t](e)) : e.localeData().invalidDate()
                }

                function E(e, t) {
                    function a(e) {
                        return t.longDateFormat(e) || e
                    }
                    var n = 5;
                    for (it.lastIndex = 0; n >= 0 && it.test(e);) e = e.replace(it, a), it.lastIndex = 0, n -= 1;
                    return e
                }

                function I(e, t, a) {
                    Dt[e] = D(t) ? t : function(e, n) {
                        return e && a ? a : t
                    }
                }

                function z(e, t) {
                    return u(Dt, e) ? Dt[e](t._strict, t._locale) : new RegExp(function(e) {
                        return N(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, r) {
                            return t || a || n || r
                        }))
                    }(e))
                }

                function N(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function R(e, t) {
                    var a, n = t;
                    for ("string" == typeof e && (e = [e]), s(t) && (n = function(e, a) {
                            a[t] = M(e)
                        }), a = 0; a < e.length; a++) kt[e[a]] = n
                }

                function B(e, t) {
                    R(e, function(e, a, n, r) {
                        n._w = n._w || {}, t(e, n._w, n, r)
                    })
                }

                function J(e, t, a) {
                    null != t && u(kt, e) && kt[e](t, a._a, a, e)
                }

                function V(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }

                function U(e, t) {
                    var a;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = M(t);
                        else if (t = e.localeData().monthsParse(t), !s(t)) return e;
                    return a = Math.min(e.date(), V(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                }

                function G(e) {
                    return null != e ? (U(this, e), t.updateOffset(this, !0), this) : H(this, "Month")
                }

                function Z() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n = [],
                        r = [],
                        i = [];
                    for (t = 0; t < 12; t++) a = c([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), i.push(this.months(a, "")), i.push(this.monthsShort(a, ""));
                    for (n.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) n[t] = N(n[t]), r[t] = N(r[t]);
                    for (t = 0; t < 24; t++) i[t] = N(i[t]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function q(e) {
                    return K(e) ? 366 : 365
                }

                function K(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function X(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function Q(e, t, a) {
                    var n = 7 + t - a;
                    return -((7 + X(e, 0, n).getUTCDay() - t) % 7) + n - 1
                }

                function $(e, t, a, n, r) {
                    var i, s, o = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Q(e, n, r);
                    return o <= 0 ? s = q(i = e - 1) + o : o > q(e) ? (i = e + 1, s = o - q(e)) : (i = e, s = o), {
                        year: i,
                        dayOfYear: s
                    }
                }

                function ee(e, t, a) {
                    var n, r, i = Q(e.year(), t, a),
                        s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return s < 1 ? n = s + te(r = e.year() - 1, t, a) : s > te(e.year(), t, a) ? (n = s - te(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = s), {
                        week: n,
                        year: r
                    }
                }

                function te(e, t, a) {
                    var n = Q(e, t, a),
                        r = Q(e + 1, t, a);
                    return (q(e) - n + r) / 7
                }

                function ae() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n, r, i, s = [],
                        o = [],
                        d = [],
                        u = [];
                    for (t = 0; t < 7; t++) a = c([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), r = this.weekdaysShort(a, ""), i = this.weekdays(a, ""), s.push(n), o.push(r), d.push(i), u.push(n), u.push(r), u.push(i);
                    for (s.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) o[t] = N(o[t]), d[t] = N(d[t]), u[t] = N(u[t]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                }

                function ne() {
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
                    var n = null;
                    if (!Xt[t] && void 0 !== e && e && e.exports) try {
                        n = Zt._abbr, a("uslO")("./" + t), de(n)
                    } catch (e) {}
                    return Xt[t]
                }

                function de(e, t) {
                    var a;
                    return e && (a = i(t) ? le(e) : ue(e, t)) && (Zt = a), Zt._abbr
                }

                function ue(e, t) {
                    if (null !== t) {
                        var a = Kt;
                        if (t.abbr = e, null != Xt[e]) Y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = Xt[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == Xt[t.parentLocale]) return Qt[t.parentLocale] || (Qt[t.parentLocale] = []), Qt[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = Xt[t.parentLocale]._config
                        }
                        return Xt[e] = new w(k(a, t)), Qt[e] && Qt[e].forEach(function(e) {
                            ue(e.name, e.config)
                        }), de(e), Xt[e]
                    }
                    return delete Xt[e], null
                }

                function le(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Zt;
                    if (!n(e)) {
                        if (t = oe(e)) return t;
                        e = [e]
                    }
                    return function(e) {
                        for (var t, a, n, r, i = 0; i < e.length;) {
                            for (t = (r = se(e[i]).split("-")).length, a = (a = se(e[i + 1])) ? a.split("-") : null; t > 0;) {
                                if (n = oe(r.slice(0, t).join("-"))) return n;
                                if (a && a.length >= t && v(r, a, !0) >= t - 1) break;
                                t--
                            }
                            i++
                        }
                        return null
                    }(e)
                }

                function ce(e) {
                    var t, a = e._a;
                    return a && -2 === h(e).overflow && (t = a[xt] < 0 || a[xt] > 11 ? xt : a[Tt] < 1 || a[Tt] > V(a[wt], a[xt]) ? Tt : a[St] < 0 || a[St] > 24 || 24 === a[St] && (0 !== a[Ot] || 0 !== a[jt] || 0 !== a[Ht]) ? St : a[Ot] < 0 || a[Ot] > 59 ? Ot : a[jt] < 0 || a[jt] > 59 ? jt : a[Ht] < 0 || a[Ht] > 999 ? Ht : -1, h(e)._overflowDayOfYear && (t < wt || t > Tt) && (t = Tt), h(e)._overflowWeeks && -1 === t && (t = Pt), h(e)._overflowWeekday && -1 === t && (t = Ct), h(e).overflow = t), e
                }

                function he(e) {
                    var t, a, n, r, i, s, o = e._i,
                        d = $t.exec(o) || ea.exec(o);
                    if (d) {
                        for (h(e).iso = !0, t = 0, a = aa.length; t < a; t++)
                            if (aa[t][1].exec(d[1])) {
                                r = aa[t][0], n = !1 !== aa[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, a = na.length; t < a; t++)
                                if (na[t][1].exec(d[3])) {
                                    i = (d[2] || " ") + na[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!n && null != i) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!ta.exec(d[4])) return void(e._isValid = !1);
                            s = "Z"
                        }
                        e._f = r + (i || "") + (s || ""), pe(e)
                    } else e._isValid = !1
                }

                function me(e) {
                    var t, a, n, r, i, s, o, d, u = {
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
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), a = ia.exec(t)) {
                        if (n = a[1] ? "ddd" + (5 === a[1].length ? ", " : " ") : "", r = "D MMM " + (a[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (a[4] ? ":ss" : ""), a[1]) {
                            var l = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(a[2]).getDay()];
                            if (a[1].substr(0, 3) !== l) return h(e).weekdayMismatch = !0, void(e._isValid = !1)
                        }
                        switch (a[5].length) {
                            case 2:
                                o = 0 === d ? " +0000" : ((d = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(a[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00";
                                break;
                            case 4:
                                o = u[a[5]];
                                break;
                            default:
                                o = u[" GMT"]
                        }
                        a[5] = o, e._i = a.splice(1).join(""), s = " ZZ", e._f = n + r + i + s, pe(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function _e(e, t, a) {
                    return null != e ? e : null != t ? t : a
                }

                function fe(e) {
                    var a, n, r, i, s = [];
                    if (!e._d) {
                        for (r = function(e) {
                                var a = new Date(t.now());
                                return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
                            }(e), e._w && null == e._a[Tt] && null == e._a[xt] && function(e) {
                                var t, a, n, r, i, s, o, d;
                                if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, s = 4, a = _e(t.GG, e._a[wt], ee(Me(), 1, 4).year), n = _e(t.W, 1), ((r = _e(t.E, 1)) < 1 || r > 7) && (d = !0);
                                else {
                                    i = e._locale._week.dow, s = e._locale._week.doy;
                                    var u = ee(Me(), i, s);
                                    a = _e(t.gg, e._a[wt], u.year), n = _e(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
                                }
                                n < 1 || n > te(a, i, s) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = $(a, n, r, i, s), e._a[wt] = o.year, e._dayOfYear = o.dayOfYear)
                            }(e), null != e._dayOfYear && (i = _e(e._a[wt], r[wt]), (e._dayOfYear > q(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = X(i, 0, e._dayOfYear), e._a[xt] = n.getUTCMonth(), e._a[Tt] = n.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) e._a[a] = s[a] = r[a];
                        for (; a < 7; a++) e._a[a] = s[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
                        24 === e._a[St] && 0 === e._a[Ot] && 0 === e._a[jt] && 0 === e._a[Ht] && (e._nextDay = !0, e._a[St] = 0), e._d = (e._useUTC ? X : function(e, t, a, n, r, i, s) {
                            var o = new Date(e, t, a, n, r, i, s);
                            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                        }).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[St] = 24)
                    }
                }

                function pe(e) {
                    if (e._f !== t.ISO_8601)
                        if (e._f !== t.RFC_2822) {
                            e._a = [], h(e).empty = !0;
                            var a, n, r, i, s, o = "" + e._i,
                                d = o.length,
                                u = 0;
                            for (r = E(e._f, e._locale).match(rt) || [], a = 0; a < r.length; a++) i = r[a], (n = (o.match(z(i, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(n))).length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(n) + n.length), u += n.length), ot[i] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(i), J(i, n, e)) : e._strict && !n && h(e).unusedTokens.push(i);
                            h(e).charsLeftOver = d - u, o.length > 0 && h(e).unusedInput.push(o), e._a[St] <= 12 && !0 === h(e).bigHour && e._a[St] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[St] = function(e, t, a) {
                                var n;
                                if (null == a) return t;
                                return null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                            }(e._locale, e._a[St], e._meridiem), fe(e), ce(e)
                        } else me(e);
                    else he(e)
                }

                function ge(e) {
                    var a = e._i,
                        u = e._f;
                    return e._locale = e._locale || le(e._l), null === a || void 0 === u && "" === a ? _({
                        nullInput: !0
                    }) : ("string" == typeof a && (e._i = a = e._locale.preparse(a)), g(a) ? new p(ce(a)) : (o(a) ? e._d = a : n(u) ? function(e) {
                        var t, a, n, r, i;
                        if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                        for (r = 0; r < e._f.length; r++) i = 0, t = f({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], pe(t), m(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == n || i < n) && (n = i, a = t));
                        l(e, a || t)
                    }(e) : u ? pe(e) : function(e) {
                        var a = e._i;
                        i(a) ? e._d = new Date(t.now()) : o(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? function(e) {
                            var a = ra.exec(e._i);
                            null === a ? (he(e), !1 === e._isValid && (delete e._isValid, me(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))) : e._d = new Date(+a[1])
                        }(e) : n(a) ? (e._a = d(a.slice(0), function(e) {
                            return parseInt(e, 10)
                        }), fe(e)) : r(a) ? function(e) {
                            if (!e._d) {
                                var t = S(e._i);
                                e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                    return e && parseInt(e, 10)
                                }), fe(e)
                            }
                        }(e) : s(a) ? e._d = new Date(a) : t.createFromInputFallback(e)
                    }(e), m(e) || (e._d = null), e))
                }

                function ye(e, t, a, i, s) {
                    var o = {};
                    return !0 !== a && !1 !== a || (i = a, a = void 0), (r(e) && function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        }(e) || n(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = s, o._l = a, o._i = e, o._f = t, o._strict = i,
                        function(e) {
                            var t = new p(ce(ge(e)));
                            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                        }(o)
                }

                function Me(e, t, a, n) {
                    return ye(e, t, a, n, !1)
                }

                function ve(e, t) {
                    var a, r;
                    if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Me();
                    for (a = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](a) || (a = t[r]);
                    return a
                }

                function be(e) {
                    var t = S(e),
                        a = t.year || 0,
                        n = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        s = t.day || 0,
                        o = t.hour || 0,
                        d = t.minute || 0,
                        u = t.second || 0,
                        l = t.millisecond || 0;
                    this._isValid = function(e) {
                        for (var t in e)
                            if (-1 === da.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                        for (var a = !1, n = 0; n < da.length; ++n)
                            if (e[da[n]]) {
                                if (a) return !1;
                                parseFloat(e[da[n]]) !== M(e[da[n]]) && (a = !0)
                            }
                        return !0
                    }(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = le(), this._bubble()
                }

                function Le(e) {
                    return e instanceof be
                }

                function Ye(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function De(e, t) {
                    A(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            a = "+";
                        return e < 0 && (e = -e, a = "-"), a + C(~~(e / 60), 2) + t + C(~~e % 60, 2)
                    })
                }

                function ke(e, t) {
                    var a = (t || "").match(e);
                    if (null === a) return null;
                    var n = ((a[a.length - 1] || []) + "").match(ua) || ["-", 0, 0],
                        r = 60 * n[1] + M(n[2]);
                    return 0 === r ? 0 : "+" === n[0] ? r : -r
                }

                function we(e, a) {
                    var n, r;
                    return a._isUTC ? (n = a.clone(), r = (g(e) || o(e) ? e.valueOf() : Me(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), t.updateOffset(n, !1), n) : Me(e).local()
                }

                function xe(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function Te() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Se(e, t) {
                    var a, n, r, i = e,
                        o = null;
                    return Le(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : s(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (o = la.exec(e)) ? (a = "-" === o[1] ? -1 : 1, i = {
                        y: 0,
                        d: M(o[Tt]) * a,
                        h: M(o[St]) * a,
                        m: M(o[Ot]) * a,
                        s: M(o[jt]) * a,
                        ms: M(Ye(1e3 * o[Ht])) * a
                    }) : (o = ca.exec(e)) ? (a = "-" === o[1] ? -1 : 1, i = {
                        y: Oe(o[2], a),
                        M: Oe(o[3], a),
                        w: Oe(o[4], a),
                        d: Oe(o[5], a),
                        h: Oe(o[6], a),
                        m: Oe(o[7], a),
                        s: Oe(o[8], a)
                    }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = function(e, t) {
                        var a;
                        if (!e.isValid() || !t.isValid()) return {
                            milliseconds: 0,
                            months: 0
                        };
                        t = we(t, e), e.isBefore(t) ? a = je(e, t) : ((a = je(t, e)).milliseconds = -a.milliseconds, a.months = -a.months);
                        return a
                    }(Me(i.from), Me(i.to)), (i = {}).ms = r.milliseconds, i.M = r.months), n = new be(i), Le(e) && u(e, "_locale") && (n._locale = e._locale), n
                }

                function Oe(e, t) {
                    var a = e && parseFloat(e.replace(",", "."));
                    return (isNaN(a) ? 0 : a) * t
                }

                function je(e, t) {
                    var a = {
                        milliseconds: 0,
                        months: 0
                    };
                    return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
                }

                function He(e, t) {
                    return function(a, n) {
                        var r, i;
                        return null === n || isNaN(+n) || (Y(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = n, n = i), a = "string" == typeof a ? +a : a, r = Se(a, n), Pe(this, r, e), this
                    }
                }

                function Pe(e, a, n, r) {
                    var i = a._milliseconds,
                        s = Ye(a._days),
                        o = Ye(a._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * n), s && P(e, "Date", H(e, "Date") + s * n), o && U(e, H(e, "Month") + o * n), r && t.updateOffset(e, s || o))
                }

                function Ce(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = le(e)) && (this._locale = t), this)
                }

                function Ae() {
                    return this._locale
                }

                function Fe(e, t) {
                    A(0, [e, e.length], 0, t)
                }

                function We(e, t, a, n, r) {
                    var i;
                    return null == e ? ee(this, n, r).year : (i = te(e, n, r), t > i && (t = i), function(e, t, a, n, r) {
                        var i = $(e, t, a, n, r),
                            s = X(i.year, 0, i.dayOfYear);
                        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                    }.call(this, e, t, a, n, r))
                }

                function Ee(e, t) {
                    t[Ht] = M(1e3 * ("0." + e))
                }

                function Ie(e) {
                    return e
                }

                function ze(e, t, a, n) {
                    var r = le(),
                        i = c().set(n, t);
                    return r[a](i, e)
                }

                function Ne(e, t, a) {
                    if (s(e) && (t = e, e = void 0), e = e || "", null != t) return ze(e, t, a, "month");
                    var n, r = [];
                    for (n = 0; n < 12; n++) r[n] = ze(e, n, a, "month");
                    return r
                }

                function Re(e, t, a, n) {
                    "boolean" == typeof e ? (s(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, s(t) && (a = t, t = void 0), t = t || "");
                    var r = le(),
                        i = e ? r._week.dow : 0;
                    if (null != a) return ze(t, (a + i) % 7, n, "day");
                    var o, d = [];
                    for (o = 0; o < 7; o++) d[o] = ze(t, (o + i) % 7, n, "day");
                    return d
                }

                function Be(e, t, a, n) {
                    var r = Se(t, a);
                    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
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

                function Ze(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }

                function qe() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, a = za(this._milliseconds) / 1e3,
                        n = za(this._days),
                        r = za(this._months);
                    t = y((e = y(a / 60)) / 60), a %= 60, e %= 60;
                    var i = y(r / 12),
                        s = r %= 12,
                        o = n,
                        d = t,
                        u = e,
                        l = a,
                        c = this.asSeconds();
                    return c ? (c < 0 ? "-" : "") + "P" + (i ? i + "Y" : "") + (s ? s + "M" : "") + (o ? o + "D" : "") + (d || u || l ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (l ? l + "S" : "") : "P0D"
                }
                var Ke, Xe = Array.prototype.some ? Array.prototype.some : function(e) {
                        for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                            if (n in t && e.call(this, t[n], n, t)) return !0;
                        return !1
                    },
                    Qe = t.momentProperties = [],
                    $e = !1,
                    et = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var tt = Object.keys ? Object.keys : function(e) {
                        var t, a = [];
                        for (t in e) u(e, t) && a.push(t);
                        return a
                    },
                    at = {},
                    nt = {},
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
                    Yt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    Dt = {},
                    kt = {},
                    wt = 0,
                    xt = 1,
                    Tt = 2,
                    St = 3,
                    Ot = 4,
                    jt = 5,
                    Ht = 6,
                    Pt = 7,
                    Ct = 8,
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
                }), R(["M", "MM"], function(e, t) {
                    t[xt] = M(e) - 1
                }), R(["MMM", "MMMM"], function(e, t, a, n) {
                    var r = a._locale.monthsParse(e, n, a._strict);
                    null != r ? t[xt] = r : h(a).invalidMonth = e
                });
                var Ft = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Wt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Et = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    It = Yt,
                    zt = Yt;
                A("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), A(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), A(0, ["YYYY", 4], 0, "year"), A(0, ["YYYYY", 5], 0, "year"), A(0, ["YYYYYY", 6, !0], 0, "year"), x("year", "y"), O("year", 1), I("Y", vt), I("YY", mt, ut), I("YYYY", gt, ct), I("YYYYY", yt, ht), I("YYYYYY", yt, ht), R(["YYYYY", "YYYYYY"], wt), R("YYYY", function(e, a) {
                    a[wt] = 2 === e.length ? t.parseTwoDigitYear(e) : M(e)
                }), R("YY", function(e, a) {
                    a[wt] = t.parseTwoDigitYear(e)
                }), R("Y", function(e, t) {
                    t[wt] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function(e) {
                    return M(e) + (M(e) > 68 ? 1900 : 2e3)
                };
                var Nt = j("FullYear", !0);
                A("w", ["ww", 2], "wo", "week"), A("W", ["WW", 2], "Wo", "isoWeek"), x("week", "w"), x("isoWeek", "W"), O("week", 5), O("isoWeek", 5), I("w", mt), I("ww", mt, ut), I("W", mt), I("WW", mt, ut), B(["w", "ww", "W", "WW"], function(e, t, a, n) {
                    t[n.substr(0, 1)] = M(e)
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
                }), B(["dd", "ddd", "dddd"], function(e, t, a, n) {
                    var r = a._locale.weekdaysParse(e, n, a._strict);
                    null != r ? t.d = r : h(a).invalidWeekday = e
                }), B(["d", "e", "E"], function(e, t, a, n) {
                    t[n] = M(e)
                });
                var Rt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Vt = Yt,
                    Ut = Yt,
                    Gt = Yt;
                A("H", ["HH", 2], 0, "hour"), A("h", ["hh", 2], 0, ne), A("k", ["kk", 2], 0, function() {
                    return this.hours() || 24
                }), A("hmm", 0, 0, function() {
                    return "" + ne.apply(this) + C(this.minutes(), 2)
                }), A("hmmss", 0, 0, function() {
                    return "" + ne.apply(this) + C(this.minutes(), 2) + C(this.seconds(), 2)
                }), A("Hmm", 0, 0, function() {
                    return "" + this.hours() + C(this.minutes(), 2)
                }), A("Hmmss", 0, 0, function() {
                    return "" + this.hours() + C(this.minutes(), 2) + C(this.seconds(), 2)
                }), re("a", !0), re("A", !1), x("hour", "h"), O("hour", 13), I("a", ie), I("A", ie), I("H", mt), I("h", mt), I("k", mt), I("HH", mt, ut), I("hh", mt, ut), I("kk", mt, ut), I("hmm", _t), I("hmmss", ft), I("Hmm", _t), I("Hmmss", ft), R(["H", "HH"], St), R(["k", "kk"], function(e, t, a) {
                    var n = M(e);
                    t[St] = 24 === n ? 0 : n
                }), R(["a", "A"], function(e, t, a) {
                    a._isPm = a._locale.isPM(e), a._meridiem = e
                }), R(["h", "hh"], function(e, t, a) {
                    t[St] = M(e), h(a).bigHour = !0
                }), R("hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[St] = M(e.substr(0, n)), t[Ot] = M(e.substr(n)), h(a).bigHour = !0
                }), R("hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[St] = M(e.substr(0, n)), t[Ot] = M(e.substr(n, 2)), t[jt] = M(e.substr(r)), h(a).bigHour = !0
                }), R("Hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[St] = M(e.substr(0, n)), t[Ot] = M(e.substr(n))
                }), R("Hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[St] = M(e.substr(0, n)), t[Ot] = M(e.substr(n, 2)), t[jt] = M(e.substr(r))
                });
                var Zt, qt = j("Hours", !0),
                    Kt = {
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
                        months: Wt,
                        monthsShort: Et,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: Rt,
                        weekdaysMin: Jt,
                        weekdaysShort: Bt,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    Xt = {},
                    Qt = {},
                    $t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ea = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ta = /Z|[+-]\d\d(?::?\d\d)?/,
                    aa = [
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
                    na = [
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
                    ra = /^\/?Date\((\-?\d+)/i,
                    ia = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
                t.createFromInputFallback = L("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
                var sa = L("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Me.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : _()
                    }),
                    oa = L("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Me.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : _()
                    }),
                    da = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                De("Z", ":"), De("ZZ", ""), I("Z", Lt), I("ZZ", Lt), R(["Z", "ZZ"], function(e, t, a) {
                    a._useUTC = !0, a._tzm = ke(Lt, e)
                });
                var ua = /([\+\-]|\d\d)/gi;
                t.updateOffset = function() {};
                var la = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    ca = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                Se.fn = be.prototype, Se.invalid = function() {
                    return Se(NaN)
                };
                var ha = He(1, "add"),
                    ma = He(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var _a = L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });
                A(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), A(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), Fe("gggg", "weekYear"), Fe("ggggg", "weekYear"), Fe("GGGG", "isoWeekYear"), Fe("GGGGG", "isoWeekYear"), x("weekYear", "gg"), x("isoWeekYear", "GG"), O("weekYear", 1), O("isoWeekYear", 1), I("G", vt), I("g", vt), I("GG", mt, ut), I("gg", mt, ut), I("GGGG", gt, ct), I("gggg", gt, ct), I("GGGGG", yt, ht), I("ggggg", yt, ht), B(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                    t[n.substr(0, 2)] = M(e)
                }), B(["gg", "GG"], function(e, a, n, r) {
                    a[r] = t.parseTwoDigitYear(e)
                }), A("Q", 0, "Qo", "quarter"), x("quarter", "Q"), O("quarter", 7), I("Q", dt), R("Q", function(e, t) {
                    t[xt] = 3 * (M(e) - 1)
                }), A("D", ["DD", 2], "Do", "date"), x("date", "D"), O("date", 9), I("D", mt), I("DD", mt, ut), I("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), R(["D", "DD"], Tt), R("Do", function(e, t) {
                    t[Tt] = M(e.match(mt)[0])
                });
                var fa = j("Date", !0);
                A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), x("dayOfYear", "DDD"), O("dayOfYear", 4), I("DDD", pt), I("DDDD", lt), R(["DDD", "DDDD"], function(e, t, a) {
                    a._dayOfYear = M(e)
                }), A("m", ["mm", 2], 0, "minute"), x("minute", "m"), O("minute", 14), I("m", mt), I("mm", mt, ut), R(["m", "mm"], Ot);
                var pa = j("Minutes", !1);
                A("s", ["ss", 2], 0, "second"), x("second", "s"), O("second", 15), I("s", mt), I("ss", mt, ut), R(["s", "ss"], jt);
                var ga = j("Seconds", !1);
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
                var ya;
                for (ya = "SSSS"; ya.length <= 9; ya += "S") I(ya, Mt);
                for (ya = "S"; ya.length <= 9; ya += "S") R(ya, Ee);
                var Ma = j("Milliseconds", !1);
                A("z", 0, 0, "zoneAbbr"), A("zz", 0, 0, "zoneName");
                var va = p.prototype;
                va.add = ha, va.calendar = function(e, a) {
                    var n = e || Me(),
                        r = we(n, this).startOf("day"),
                        i = t.calendarFormat(this, r) || "sameElse",
                        s = a && (D(a[i]) ? a[i].call(this, n) : a[i]);
                    return this.format(s || this.localeData().calendar(i, this, Me(n)))
                }, va.clone = function() {
                    return new p(this)
                }, va.diff = function(e, t, a) {
                    var n, r, i, s;
                    return this.isValid() && (n = we(e, this)).isValid() ? (r = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (t = T(t)) || "month" === t || "quarter" === t ? (s = function(e, t) {
                        var a, n, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            i = e.clone().add(r, "months");
                        return t - i < 0 ? (a = e.clone().add(r - 1, "months"), n = (t - i) / (i - a)) : (a = e.clone().add(r + 1, "months"), n = (t - i) / (a - i)), -(r + n) || 0
                    }(this, n), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - n, s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), a ? s : y(s)) : NaN
                }, va.endOf = function(e) {
                    return void 0 === (e = T(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }, va.format = function(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var a = W(this, e);
                    return this.localeData().postformat(a)
                }, va.from = function(e, t) {
                    return this.isValid() && (g(e) && e.isValid() || Me(e).isValid()) ? Se({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, va.fromNow = function(e) {
                    return this.from(Me(), e)
                }, va.to = function(e, t) {
                    return this.isValid() && (g(e) && e.isValid() || Me(e).isValid()) ? Se({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, va.toNow = function(e) {
                    return this.to(Me(), e)
                }, va.get = function(e) {
                    return e = T(e), D(this[e]) ? this[e]() : this
                }, va.invalidAt = function() {
                    return h(this).overflow
                }, va.isAfter = function(e, t) {
                    var a = g(e) ? e : Me(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = T(i(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                }, va.isBefore = function(e, t) {
                    var a = g(e) ? e : Me(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = T(i(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                }, va.isBetween = function(e, t, a, n) {
                    return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
                }, va.isSame = function(e, t) {
                    var a, n = g(e) ? e : Me(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = T(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                }, va.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, va.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, va.isValid = function() {
                    return m(this)
                }, va.lang = _a, va.locale = Ce, va.localeData = Ae, va.max = oa, va.min = sa, va.parsingFlags = function() {
                    return l({}, h(this))
                }, va.set = function(e, t) {
                    if ("object" == typeof e)
                        for (var a = function(e) {
                                var t = [];
                                for (var a in e) t.push({
                                    unit: a,
                                    priority: nt[a]
                                });
                                return t.sort(function(e, t) {
                                    return e.priority - t.priority
                                }), t
                            }(e = S(e)), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
                    else if (e = T(e), D(this[e])) return this[e](t);
                    return this
                }, va.startOf = function(e) {
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
                }, va.subtract = ma, va.toArray = function() {
                    return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
                }, va.toObject = function() {
                    return {
                        years: this.year(),
                        months: this.month(),
                        date: this.date(),
                        hours: this.hours(),
                        minutes: this.minutes(),
                        seconds: this.seconds(),
                        milliseconds: this.milliseconds()
                    }
                }, va.toDate = function() {
                    return new Date(this.valueOf())
                }, va.toISOString = function() {
                    if (!this.isValid()) return null;
                    var e = this.clone().utc();
                    return e.year() < 0 || e.year() > 9999 ? W(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : D(Date.prototype.toISOString) ? this.toDate().toISOString() : W(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }, va.inspect = function() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var a = "[" + e + '("]',
                        n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }, va.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, va.toString = function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, va.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, va.valueOf = function() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }, va.creationData = function() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }, va.year = Nt, va.isLeapYear = function() {
                    return K(this.year())
                }, va.weekYear = function(e) {
                    return We.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, va.isoWeekYear = function(e) {
                    return We.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, va.quarter = va.quarters = function(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }, va.month = G, va.daysInMonth = function() {
                    return V(this.year(), this.month())
                }, va.week = va.weeks = function(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, va.isoWeek = va.isoWeeks = function(e) {
                    var t = ee(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, va.weeksInYear = function() {
                    var e = this.localeData()._week;
                    return te(this.year(), e.dow, e.doy)
                }, va.isoWeeksInYear = function() {
                    return te(this.year(), 1, 4)
                }, va.date = fa, va.day = va.days = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = function(e, t) {
                        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                    }(e, this.localeData()), this.add(e - t, "d")) : t
                }, va.weekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }, va.isoWeekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = function(e, t) {
                            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                        }(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }, va.dayOfYear = function(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }, va.hour = va.hours = qt, va.minute = va.minutes = pa, va.second = va.seconds = ga, va.millisecond = va.milliseconds = Ma, va.utcOffset = function(e, a, n) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = ke(Lt, e))) return this
                        } else Math.abs(e) < 16 && !n && (e *= 60);
                        return !this._isUTC && a && (r = xe(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!a || this._changeInProgress ? Pe(this, Se(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? i : xe(this)
                }, va.utc = function(e) {
                    return this.utcOffset(0, e)
                }, va.local = function(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(xe(this), "m")), this
                }, va.parseZone = function() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = ke(bt, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }, va.hasAlignedHourOffset = function(e) {
                    return !!this.isValid() && (e = e ? Me(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }, va.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, va.isLocal = function() {
                    return !!this.isValid() && !this._isUTC
                }, va.isUtcOffset = function() {
                    return !!this.isValid() && this._isUTC
                }, va.isUtc = Te, va.isUTC = Te, va.zoneAbbr = function() {
                    return this._isUTC ? "UTC" : ""
                }, va.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, va.dates = L("dates accessor is deprecated. Use date instead.", fa), va.months = L("months accessor is deprecated. Use month instead", G), va.years = L("years accessor is deprecated. Use year instead", Nt), va.zone = L("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }), va.isDSTShifted = L("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                    if (!i(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (f(e, this), (e = ge(e))._a) {
                        var t = e._isUTC ? c(e._a) : Me(e._a);
                        this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                });
                var ba = w.prototype;
                ba.calendar = function(e, t, a) {
                    var n = this._calendar[e] || this._calendar.sameElse;
                    return D(n) ? n.call(t, a) : n
                }, ba.longDateFormat = function(e) {
                    var t = this._longDateFormat[e],
                        a = this._longDateFormat[e.toUpperCase()];
                    return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }, ba.invalidDate = function() {
                    return this._invalidDate
                }, ba.ordinal = function(e) {
                    return this._ordinal.replace("%d", e)
                }, ba.preparse = Ie, ba.postformat = Ie, ba.relativeTime = function(e, t, a, n) {
                    var r = this._relativeTime[a];
                    return D(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
                }, ba.pastFuture = function(e, t) {
                    var a = this._relativeTime[e > 0 ? "future" : "past"];
                    return D(a) ? a(t) : a.replace(/%s/i, t)
                }, ba.set = function(e) {
                    var t, a;
                    for (a in e) D(t = e[a]) ? this[a] = t : this["_" + a] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, ba.months = function(e, t) {
                    return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ft).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
                }, ba.monthsShort = function(e, t) {
                    return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ft.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, ba.monthsParse = function(e, t, a) {
                    var n, r, i;
                    if (this._monthsParseExact) return function(e, t, a) {
                        var n, r, i, s = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = c([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                        return a ? "MMM" === t ? -1 !== (r = At.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = At.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = At.call(this._shortMonthsParse, s)) ? r : -1 !== (r = At.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = At.call(this._longMonthsParse, s)) ? r : -1 !== (r = At.call(this._shortMonthsParse, s)) ? r : null
                    }.call(this, e, t, a);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (r = c([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                        if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                        if (!a && this._monthsParse[n].test(e)) return n
                    }
                }, ba.monthsRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || Z.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = zt), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, ba.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || Z.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = It), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, ba.week = function(e) {
                    return ee(e, this._week.dow, this._week.doy).week
                }, ba.firstDayOfYear = function() {
                    return this._week.doy
                }, ba.firstDayOfWeek = function() {
                    return this._week.dow
                }, ba.weekdays = function(e, t) {
                    return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }, ba.weekdaysMin = function(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }, ba.weekdaysShort = function(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }, ba.weekdaysParse = function(e, t, a) {
                    var n, r, i;
                    if (this._weekdaysParseExact) return function(e, t, a) {
                        var n, r, i, s = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = c([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
                        return a ? "dddd" === t ? -1 !== (r = At.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = At.call(this._weekdaysParse, s)) ? r : -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = At.call(this._weekdaysParse, s)) ? r : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = At.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = At.call(this._weekdaysParse, s)) ? r : -1 !== (r = At.call(this._shortWeekdaysParse, s)) ? r : null
                    }.call(this, e, t, a);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                        if (r = c([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                        if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                        if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                        if (!a && this._weekdaysParse[n].test(e)) return n
                    }
                }, ba.weekdaysRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || ae.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Vt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, ba.weekdaysShortRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || ae.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ut), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, ba.weekdaysMinRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || ae.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }, ba.isPM = function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }, ba.meridiem = function(e, t, a) {
                    return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
                }, de("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === M(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), t.lang = L("moment.lang is deprecated. Use moment.locale instead.", de), t.langData = L("moment.langData is deprecated. Use moment.localeData instead.", le);
                var La = Math.abs,
                    Ya = Ge("ms"),
                    Da = Ge("s"),
                    ka = Ge("m"),
                    wa = Ge("h"),
                    xa = Ge("d"),
                    Ta = Ge("w"),
                    Sa = Ge("M"),
                    Oa = Ge("y"),
                    ja = Ze("milliseconds"),
                    Ha = Ze("seconds"),
                    Pa = Ze("minutes"),
                    Ca = Ze("hours"),
                    Aa = Ze("days"),
                    Fa = Ze("months"),
                    Wa = Ze("years"),
                    Ea = Math.round,
                    Ia = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    za = Math.abs,
                    Na = be.prototype;
                return Na.isValid = function() {
                        return this._isValid
                    }, Na.abs = function() {
                        var e = this._data;
                        return this._milliseconds = La(this._milliseconds), this._days = La(this._days), this._months = La(this._months), e.milliseconds = La(e.milliseconds), e.seconds = La(e.seconds), e.minutes = La(e.minutes), e.hours = La(e.hours), e.months = La(e.months), e.years = La(e.years), this
                    }, Na.add = function(e, t) {
                        return Be(this, e, t, 1)
                    }, Na.subtract = function(e, t) {
                        return Be(this, e, t, -1)
                    }, Na.as = function(e) {
                        if (!this.isValid()) return NaN;
                        var t, a, n = this._milliseconds;
                        if ("month" === (e = T(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + Ve(t), "month" === e ? a : a / 12;
                        switch (t = this._days + Math.round(Ue(this._months)), e) {
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
                    }, Na.asMilliseconds = Ya, Na.asSeconds = Da, Na.asMinutes = ka, Na.asHours = wa, Na.asDays = xa, Na.asWeeks = Ta, Na.asMonths = Sa, Na.asYears = Oa, Na.valueOf = function() {
                        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN
                    }, Na._bubble = function() {
                        var e, t, a, n, r, i = this._milliseconds,
                            s = this._days,
                            o = this._months,
                            d = this._data;
                        return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * Je(Ue(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = y(i / 1e3), d.seconds = e % 60, t = y(e / 60), d.minutes = t % 60, a = y(t / 60), d.hours = a % 24, s += y(a / 24), r = y(Ve(s)), o += r, s -= Je(Ue(r)), n = y(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this
                    }, Na.get = function(e) {
                        return e = T(e), this.isValid() ? this[e + "s"]() : NaN
                    }, Na.milliseconds = ja, Na.seconds = Ha, Na.minutes = Pa, Na.hours = Ca, Na.days = Aa, Na.weeks = function() {
                        return y(this.days() / 7)
                    }, Na.months = Fa, Na.years = Wa, Na.humanize = function(e) {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var t = this.localeData(),
                            a = function(e, t, a) {
                                var n = Se(e).abs(),
                                    r = Ea(n.as("s")),
                                    i = Ea(n.as("m")),
                                    s = Ea(n.as("h")),
                                    o = Ea(n.as("d")),
                                    d = Ea(n.as("M")),
                                    u = Ea(n.as("y")),
                                    l = r <= Ia.ss && ["s", r] || r < Ia.s && ["ss", r] || i <= 1 && ["m"] || i < Ia.m && ["mm", i] || s <= 1 && ["h"] || s < Ia.h && ["hh", s] || o <= 1 && ["d"] || o < Ia.d && ["dd", o] || d <= 1 && ["M"] || d < Ia.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                                return l[2] = t, l[3] = +e > 0, l[4] = a,
                                    function(e, t, a, n, r) {
                                        return r.relativeTime(t || 1, !!a, e, n)
                                    }.apply(null, l)
                            }(this, !e, t);
                        return e && (a = t.pastFuture(+this, a)), t.postformat(a)
                    }, Na.toISOString = qe, Na.toString = qe, Na.toJSON = qe, Na.locale = Ce, Na.localeData = Ae, Na.toIsoString = L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qe), Na.lang = _a, A("X", 0, 0, "unix"), A("x", 0, 0, "valueOf"), I("x", vt), I("X", /[+-]?\d+(\.\d{1,3})?/), R("X", function(e, t, a) {
                        a._d = new Date(1e3 * parseFloat(e, 10))
                    }), R("x", function(e, t, a) {
                        a._d = new Date(M(e))
                    }), t.version = "2.18.1",
                    function(e) {
                        Ke = e
                    }(Me), t.fn = va, t.min = function() {
                        return ve("isBefore", [].slice.call(arguments, 0))
                    }, t.max = function() {
                        return ve("isAfter", [].slice.call(arguments, 0))
                    }, t.now = function() {
                        return Date.now ? Date.now() : +new Date
                    }, t.utc = c, t.unix = function(e) {
                        return Me(1e3 * e)
                    }, t.months = function(e, t) {
                        return Ne(e, t, "months")
                    }, t.isDate = o, t.locale = de, t.invalid = _, t.duration = Se, t.isMoment = g, t.weekdays = function(e, t, a) {
                        return Re(e, t, a, "weekdays")
                    }, t.parseZone = function() {
                        return Me.apply(null, arguments).parseZone()
                    }, t.localeData = le, t.isDuration = Le, t.monthsShort = function(e, t) {
                        return Ne(e, t, "monthsShort")
                    }, t.weekdaysMin = function(e, t, a) {
                        return Re(e, t, a, "weekdaysMin")
                    }, t.defineLocale = ue, t.updateLocale = function(e, t) {
                        if (null != t) {
                            var a, n = Kt;
                            null != Xt[e] && (n = Xt[e]._config), (a = new w(t = k(n, t))).parentLocale = Xt[e], Xt[e] = a, de(e)
                        } else null != Xt[e] && (null != Xt[e].parentLocale ? Xt[e] = Xt[e].parentLocale : null != Xt[e] && delete Xt[e]);
                        return Xt[e]
                    }, t.locales = function() {
                        return tt(Xt)
                    }, t.weekdaysShort = function(e, t, a) {
                        return Re(e, t, a, "weekdaysShort")
                    }, t.normalizeUnits = T, t.relativeTimeRounding = function(e) {
                        return void 0 === e ? Ea : "function" == typeof e && (Ea = e, !0)
                    }, t.relativeTimeThreshold = function(e, t) {
                        return void 0 !== Ia[e] && (void 0 === t ? Ia[e] : (Ia[e] = t, "s" === e && (Ia.ss = t - 1), !0))
                    }, t.calendarFormat = function(e, t) {
                        var a = e.diff(t, "days", !0);
                        return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
                    }, t.prototype = va, t
            })
        }).call(t, a("3IRH")(e))
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
                localize: function(t, a, n) {
                    n = n || {};
                    var r;
                    return r = "string" == typeof e[t] ? e[t] : 1 === a ? e[t].one : e[t].other.replace("{{count}}", a), n.addSuffix ? n.comparison > 0 ? "in " + r : r + " ago" : r
                }
            }
        }
    },
    Q2rx: function(e, t, a) {
        var n = a("u/4p"),
            r = 6e4,
            i = 6048e5;
        e.exports = function(e, t, a) {
            var s = n(e, a),
                o = n(t, a),
                d = s.getTime() - s.getTimezoneOffset() * r,
                u = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((d - u) / i)
        }
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
                    var e = this.options.ticks;
                    if (e.beginAtZero) {
                        var t = n.sign(this.min),
                            a = n.sign(this.max);
                        t < 0 && a < 0 ? this.max = 0 : t > 0 && a > 0 && (this.min = 0)
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
                        a = {
                            maxTicks: t = Math.max(2, t),
                            min: e.min,
                            max: e.max,
                            stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
                        },
                        i = this.ticks = r.generators.linear(a, this);
                    this.handleDirectionalChanges(), this.max = n.max(i), this.min = n.min(i), e.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
                },
                convertTicksToLabels: function() {
                    this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(this)
                }
            })
        }
    },
    Qbo9: function(e, t, a) {
        var n = a("Moxe");
        e.exports = function(e) {
            return n(new Date, e)
        }
    },
    Qor1: function(e, t, a) {
        "use strict";

        function n(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }
        var r = a("k7DW"),
            i = a("wGD1"),
            s = a("iO9N"),
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
                var a = this._view;
                return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
            },
            inLabelRange: n,
            inXRange: n,
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
                    n = this._chart.ctx,
                    i = t.pointStyle,
                    d = t.radius,
                    u = t.x,
                    l = t.y,
                    c = s.color,
                    h = 0;
                t.skip || (n.strokeStyle = t.borderColor || o, n.lineWidth = s.valueOrDefault(t.borderWidth, r.global.elements.point.borderWidth), n.fillStyle = t.backgroundColor || o, void 0 !== e && (a.x < e.left || 1.01 * e.right < a.x || a.y < e.top || 1.01 * e.bottom < a.y) && (a.x < e.left ? h = (u - a.x) / (e.left - a.x) : 1.01 * e.right < a.x ? h = (a.x - u) / (a.x - e.right) : a.y < e.top ? h = (l - a.y) / (e.top - a.y) : 1.01 * e.bottom < a.y && (h = (a.y - l) / (a.y - e.bottom)), h = Math.round(100 * h) / 100, n.strokeStyle = c(n.strokeStyle).alpha(h).rgbString(), n.fillStyle = c(n.fillStyle).alpha(h).rgbString()), s.canvas.drawPoint(n, i, d, u, l))
            }
        })
    },
    Qxz6: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getFullYear() === r.getFullYear()
        }
    },
    RnJI: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    SHOI: function(e, t, a) {
        var n = a("xA5w"),
            r = a("Jvcu");
        e.exports = function(e, t, a) {
            var i = a ? Number(a.weekStartsOn) || 0 : 0,
                s = n(e),
                o = Number(t),
                d = s.getDay();
            return r(s, ((o % 7 + 7) % 7 < i ? 7 : 0) + o - d)
        }
    },
    SJLv: function(e, t) {
        var a = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            var r = a.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + r.join("|") + "|.)", "g")
        }
    },
    SZZR: function(e, t, a) {
        var n = a("I7cV");
        e.exports = function(e) {
            return n(e, {
                weekStartsOn: 1
            })
        }
    },
    Sjoy: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "T/Ln": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getMonth(),
                r = a - a % 3 + 3;
            return t.setMonth(r, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    TWHA: function(e, t, a) {
        var n = a("YjuW"),
            r = function() {
                return new u
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
    ToRI: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setSeconds(r), a
        }
    },
    Tqun: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    Tv4R: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var a, r, i = n(e).getTime();
            return t.forEach(function(e) {
                var t = n(e),
                    s = Math.abs(i - t.getTime());
                (void 0 === a || s < r) && (a = t, r = s)
            }), a
        }
    },
    "Uu+E": function(e, t, a) {
        var n = a("xA5w"),
            r = a("iRXW"),
            i = a("nizW");
        e.exports = function(e, t) {
            var a = n(e),
                s = Number(t),
                o = i(a, r(a)),
                d = new Date(0);
            return d.setFullYear(s, 0, 4), d.setHours(0, 0, 0, 0), (a = r(d)).setDate(a.getDate() + o), a
        }
    },
    V0td: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    V4qH: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    VK9h: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    VRu6: function(e, t, a) {
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
        var i = a("k7DW"),
            s = a("wGD1"),
            o = a("iO9N"),
            d = a("IbXy");
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
                return o.isArray(t) ? o.longestText(e, a, t) : e.measureText(t).width
            }

            function a(e) {
                var t = o.valueOrDefault,
                    a = i.global,
                    n = t(e.fontSize, a.defaultFontSize),
                    r = t(e.fontStyle, a.defaultFontStyle),
                    s = t(e.fontFamily, a.defaultFontFamily);
                return {
                    size: n,
                    style: r,
                    family: s,
                    font: o.fontString(n, r, s)
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
                update: function(e, t, a) {
                    var n, r, i, s, d, u;
                    for (this.beforeUpdate(), this.maxWidth = e, this.maxHeight = t, this.margins = o.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, a), this.longestTextCache = this.longestTextCache || {}, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.beforeBuildTicks(), d = this.buildTicks() || [], this.afterBuildTicks(), this.beforeTickToLabelConversion(), i = this.convertTicksToLabels(d) || this.ticks, this.afterTickToLabelConversion(), this.ticks = i, n = 0, r = i.length; n < r; ++n) s = i[n], (u = d[n]) ? u.label = s : d.push(u = {
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
                        r = n(this._ticks),
                        i = a(t);
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
                        r = n(this._ticks),
                        i = this.options,
                        s = i.ticks,
                        u = i.scaleLabel,
                        l = i.gridLines,
                        c = i.display,
                        h = this.isHorizontal(),
                        m = a(s),
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
                            var Y = t(this.ctx, r[0], m.font),
                                D = t(this.ctx, r[r.length - 1], m.font);
                            0 !== this.labelRotation ? (this.paddingLeft = "bottom" === i.position ? b * Y + 3 : b * y + 3, this.paddingRight = "bottom" === i.position ? b * y + 3 : b * D + 3) : (this.paddingLeft = Y / 2 + 3, this.paddingRight = D / 2 + 3)
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
                        var a = (this.width - (this.paddingLeft + this.paddingRight)) / Math.max(this._ticks.length - (t ? 0 : 1), 1),
                            n = a * e + this.paddingLeft;
                        t && (n += a / 2);
                        var r = this.left + Math.round(n);
                        return r += this.isFullWidth() ? this.margins.left : 0
                    }
                    var i = this.height - (this.paddingTop + this.paddingBottom);
                    return this.top + e * (i / (this._ticks.length - 1))
                },
                getPixelForDecimal: function(e) {
                    if (this.isHorizontal()) {
                        var t = (this.width - (this.paddingLeft + this.paddingRight)) * e + this.paddingLeft,
                            a = this.left + Math.round(t);
                        return a += this.isFullWidth() ? this.margins.left : 0
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
                    var t, a, n, r, i = this.isHorizontal(),
                        s = this.options.ticks.minor,
                        d = e.length,
                        u = o.toRadians(this.labelRotation),
                        l = Math.cos(u),
                        c = this.longestLabelWidth * l,
                        h = [];
                    for (s.maxTicksLimit && (r = s.maxTicksLimit), i && (t = !1, (c + s.autoSkipPadding) * d > this.width - (this.paddingLeft + this.paddingRight) && (t = 1 + Math.floor((c + s.autoSkipPadding) * d / (this.width - (this.paddingLeft + this.paddingRight)))), r && d > r && (t = Math.max(t, Math.floor(d / r)))), a = 0; a < d; a++) n = e[a], ((t > 1 && a % t > 0 || a % t == 0 && a + t >= d) && a !== d - 1 || o.isNullOrUndef(n.label)) && delete n.label, h.push(n);
                    return h
                },
                draw: function(e) {
                    var t = this,
                        n = t.options;
                    if (n.display) {
                        var s = t.ctx,
                            u = i.global,
                            l = n.ticks.minor,
                            c = n.ticks.major || l,
                            h = n.gridLines,
                            m = n.scaleLabel,
                            _ = 0 !== t.labelRotation,
                            f = t.isHorizontal(),
                            p = l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            g = o.valueOrDefault(l.fontColor, u.defaultFontColor),
                            y = a(l),
                            M = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                            v = a(c),
                            b = h.drawTicks ? h.tickMarkLength : 0,
                            L = o.valueOrDefault(m.fontColor, u.defaultFontColor),
                            Y = a(m),
                            D = o.options.toPadding(m.padding),
                            k = o.toRadians(t.labelRotation),
                            w = [],
                            x = "right" === n.position ? t.left : t.right - b,
                            T = "right" === n.position ? t.left + b : t.right,
                            S = "bottom" === n.position ? t.top : t.bottom - b,
                            O = "bottom" === n.position ? t.top + b : t.bottom;
                        if (o.each(p, function(a, i) {
                                if (void 0 !== a.label) {
                                    var s, d, c, m, g = a.label;
                                    i === t.zeroLineIndex && n.offset === h.offsetGridLines ? (s = h.zeroLineWidth, d = h.zeroLineColor, c = h.zeroLineBorderDash, m = h.zeroLineBorderDashOffset) : (s = o.valueAtIndexOrDefault(h.lineWidth, i), d = o.valueAtIndexOrDefault(h.color, i), c = o.valueOrDefault(h.borderDash, u.borderDash), m = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                                    var y, M, v, L, Y, D, j, H, P, C, A = "middle",
                                        F = "middle",
                                        W = l.padding;
                                    if (f) {
                                        var E = b + W;
                                        "bottom" === n.position ? (F = _ ? "middle" : "top", A = _ ? "right" : "center", C = t.top + E) : (F = _ ? "middle" : "bottom", A = _ ? "left" : "center", C = t.bottom - E);
                                        var I = r(t, i, h.offsetGridLines && p.length > 1);
                                        I < t.left && (d = "rgba(0,0,0,0)"), I += o.aliasPixel(s), P = t.getPixelForTick(i) + l.labelOffset, y = v = Y = j = I, M = S, L = O, D = e.top, H = e.bottom
                                    } else {
                                        var z, N = "left" === n.position;
                                        l.mirror ? (A = N ? "left" : "right", z = W) : (A = N ? "right" : "left", z = b + W), P = N ? t.right - z : t.left + z;
                                        var R = r(t, i, h.offsetGridLines && p.length > 1);
                                        R < t.top && (d = "rgba(0,0,0,0)"), R += o.aliasPixel(s), C = t.getPixelForTick(i) + l.labelOffset, y = x, v = T, Y = e.left, j = e.right, M = L = D = H = R
                                    }
                                    w.push({
                                        tx1: y,
                                        ty1: M,
                                        tx2: v,
                                        ty2: L,
                                        x1: Y,
                                        y1: D,
                                        x2: j,
                                        y2: H,
                                        labelX: P,
                                        labelY: C,
                                        glWidth: s,
                                        glColor: d,
                                        glBorderDash: c,
                                        glBorderDashOffset: m,
                                        rotation: -1 * k,
                                        label: g,
                                        major: a.major,
                                        textBaseline: F,
                                        textAlign: A
                                    })
                                }
                            }), o.each(w, function(e) {
                                if (h.display && (s.save(), s.lineWidth = e.glWidth, s.strokeStyle = e.glColor, s.setLineDash && (s.setLineDash(e.glBorderDash), s.lineDashOffset = e.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(e.tx1, e.ty1), s.lineTo(e.tx2, e.ty2)), h.drawOnChartArea && (s.moveTo(e.x1, e.y1), s.lineTo(e.x2, e.y2)), s.stroke(), s.restore()), l.display) {
                                    s.save(), s.translate(e.labelX, e.labelY), s.rotate(e.rotation), s.font = e.major ? v.font : y.font, s.fillStyle = e.major ? M : g, s.textBaseline = e.textBaseline, s.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (o.isArray(t))
                                        for (var a = 0, n = 0; a < t.length; ++a) s.fillText("" + t[a], 0, n), n += 1.5 * y.size;
                                    else s.fillText(t, 0, 0);
                                    s.restore()
                                }
                            }), m.display) {
                            var j, H, P = 0,
                                C = d(m) / 2;
                            if (f) j = t.left + (t.right - t.left) / 2, H = "bottom" === n.position ? t.bottom - C - D.bottom : t.top + C + D.top;
                            else {
                                var A = "left" === n.position;
                                j = A ? t.left + C + D.top : t.right - C - D.top, H = t.top + (t.bottom - t.top) / 2, P = A ? -.5 * Math.PI : .5 * Math.PI
                            }
                            s.save(), s.translate(j, H), s.rotate(P), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = L, s.font = Y.font, s.fillText(m.labelString, 0, 0), s.restore()
                        }
                        if (h.drawBorder) {
                            s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0);
                            var F = t.left,
                                W = t.right,
                                E = t.top,
                                I = t.bottom,
                                z = o.aliasPixel(s.lineWidth);
                            f ? (E = I = "top" === n.position ? t.bottom : t.top, E += z, I += z) : (F = W = "left" === n.position ? t.right : t.left, F += z, W += z), s.beginPath(), s.moveTo(F, E), s.lineTo(W, I), s.stroke()
                        }
                    }
                }
            })
        }
    },
    VaeB: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setMilliseconds(0), t
        }
    },
    Vz2w: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    WNGz: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setHours(0, 0, 0, 0), t
        }
    },
    WaEV: function(e, t, a) {
        var n = a("+ItH")();
        n.helpers = a("iO9N"), a("lG75")(n), n.defaults = a("k7DW"), n.Element = a("wGD1"), n.elements = a("L5rj"), n.Interaction = a("KC8c"), n.platform = a("2xI1"), a("4Uxm")(n), a("6rMk")(n), a("ghsk")(n), a("oQMP")(n), a("hAmm")(n), a("jJ84")(n), a("VRu6")(n), a("/jKm")(n), a("QV34")(n), a("40fB")(n), a("XhZS")(n), a("1Nt4")(n), a("sFo6")(n), a("Db81")(n), a("GBuA")(n), a("19SQ")(n), a("sFj2")(n), a("8uqi")(n), a("Fv8P")(n), a("2ddL")(n), a("mC8W")(n), a("vvdA")(n), a("wPWQ")(n), a("mg6x")(n), a("0gJx")(n), a("gCP2")(n), a("0C1O")(n), a("GqGk")(n);
        var r = [];
        r.push(a("A5K1")(n), a("ZmvM")(n), a("lRs/")(n)), n.plugins.register(r), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
    },
    XFzU: function(e, t, a) {
        var n = a("GI7G");
        e.exports = function(e, t) {
            var a = n(e, t) / 3;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
    },
    XU1s: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                        function e(e) {
                            return s ? e.xAxisID === t.id : e.yAxisID === t.id
                        }
                        var t = this,
                            a = t.options,
                            n = t.chart,
                            i = n.data.datasets,
                            s = t.isHorizontal();
                        t.min = null, t.max = null;
                        var o = a.stacked;
                        if (void 0 === o && r.each(i, function(t, a) {
                                if (!o) {
                                    var r = n.getDatasetMeta(a);
                                    n.isDatasetVisible(a) && e(r) && void 0 !== r.stack && (o = !0)
                                }
                            }), a.stacked || o) {
                            var d = {};
                            r.each(i, function(i, s) {
                                var o = n.getDatasetMeta(s),
                                    u = [o.type, void 0 === a.stacked && void 0 === o.stack ? s : "", o.stack].join(".");
                                void 0 === d[u] && (d[u] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var l = d[u].positiveValues,
                                    c = d[u].negativeValues;
                                n.isDatasetVisible(s) && e(o) && r.each(i.data, function(e, n) {
                                    var r = +t.getRightValue(e);
                                    isNaN(r) || o.data[n].hidden || (l[n] = l[n] || 0, c[n] = c[n] || 0, a.relativePoints ? l[n] = 100 : r < 0 ? c[n] += r : l[n] += r)
                                })
                            }), r.each(d, function(e) {
                                var a = e.positiveValues.concat(e.negativeValues),
                                    n = r.min(a),
                                    i = r.max(a);
                                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? i : Math.max(t.max, i)
                            })
                        } else r.each(i, function(a, i) {
                            var s = n.getDatasetMeta(i);
                            n.isDatasetVisible(i) && e(s) && r.each(a.data, function(e, a) {
                                var n = +t.getRightValue(e);
                                isNaN(n) || s.data[a].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                            })
                        });
                        t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
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
                        var t, a = this.start,
                            n = +this.getRightValue(e),
                            r = this.end - a;
                        return this.isHorizontal() ? (t = this.left + this.width / r * (n - a), Math.round(t)) : (t = this.bottom - this.height / r * (n - a), Math.round(t))
                    },
                    getValueForPixel: function(e) {
                        var t = this.isHorizontal(),
                            a = t ? this.width : this.height,
                            n = (t ? e - this.left : this.bottom - e) / a;
                        return this.start + (this.end - this.start) * n
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.ticksAsNumbers[e])
                    }
                });
            e.scaleService.registerScaleType("linear", a, t)
        }
    },
    XlWM: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "XzD+": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "YBA/": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    YPf8: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 5 === n(e).getDay()
        }
    },
    YPjl: function(e, t, a) {
        var n = a("xA5w"),
            r = a("Jvcu"),
            i = a("AZvW");
        e.exports = function(e, t) {
            var a = n(e),
                s = Number(t),
                o = i(a);
            return r(a, s - o)
        }
    },
    YRFD: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e).getTime(),
                r = n(t).getTime();
            return a > r ? -1 : a < r ? 1 : 0
        }
    },
    YXlc: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
        function a(e) {
            var t, a, n, r = e[0] / 255,
                i = e[1] / 255,
                s = e[2] / 255,
                o = Math.min(r, i, s),
                d = Math.max(r, i, s),
                u = d - o;
            return d == o ? t = 0 : r == d ? t = (i - s) / u : i == d ? t = 2 + (s - r) / u : s == d && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (o + d) / 2, a = d == o ? 0 : n <= .5 ? u / (d + o) : u / (2 - d - o), [t, 100 * a, 100 * n]
        }

        function n(e) {
            var t, a, n, r = e[0],
                i = e[1],
                s = e[2],
                o = Math.min(r, i, s),
                d = Math.max(r, i, s),
                u = d - o;
            return a = 0 == d ? 0 : u / d * 1e3 / 10, d == o ? t = 0 : r == d ? t = (i - s) / u : i == d ? t = 2 + (s - r) / u : s == d && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = d / 255 * 1e3 / 10, [t, a, n]
        }

        function i(e) {
            var t = e[0],
                n = e[1],
                r = e[2];
            return [a(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))]
        }

        function s(e) {
            var t, a, n, r, i = e[0] / 255,
                s = e[1] / 255,
                o = e[2] / 255;
            return r = Math.min(1 - i, 1 - s, 1 - o), t = (1 - i - r) / (1 - r) || 0, a = (1 - s - r) / (1 - r) || 0, n = (1 - o - r) / (1 - r) || 0, [100 * t, 100 * a, 100 * n, 100 * r]
        }

        function o(e) {
            return D[JSON.stringify(e)]
        }

        function d(e) {
            var t = e[0] / 255,
                a = e[1] / 255,
                n = e[2] / 255;
            return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
        }

        function u(e) {
            var t, a, n, r = d(e),
                i = r[0],
                s = r[1],
                o = r[2];
            return i /= 95.047, s /= 100, o /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, t = 116 * s - 16, a = 500 * (i - s), n = 200 * (s - o), [t, a, n]
        }

        function l(e) {
            var t, a, n, r, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100;
            if (0 == o) return i = 255 * d, [i, i, i];
            t = 2 * d - (a = d < .5 ? d * (1 + o) : d + o - d * o), r = [0, 0, 0];
            for (var u = 0; u < 3; u++)(n = s + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, i = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, r[u] = 255 * i;
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

        function h(e) {
            var t, a, n, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100,
                u = o + d;
            switch (u > 1 && (o /= u, d /= u), t = Math.floor(6 * s), a = 1 - d, n = 6 * s - t, 0 != (1 & t) && (n = 1 - n), i = o + n * (a - o), t) {
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

        function m(e) {
            var t, a, n, r = e[0] / 100,
                i = e[1] / 100,
                s = e[2] / 100,
                o = e[3] / 100;
            return t = 1 - Math.min(1, r * (1 - o) + o), a = 1 - Math.min(1, i * (1 - o) + o), n = 1 - Math.min(1, s * (1 - o) + o), [255 * t, 255 * a, 255 * n]
        }

        function _(e) {
            var t, a, n, r = e[0] / 100,
                i = e[1] / 100,
                s = e[2] / 100;
            return t = 3.2406 * r + -1.5372 * i + -.4986 * s, a = -.9689 * r + 1.8758 * i + .0415 * s, n = .0557 * r + -.204 * i + 1.057 * s, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, t = Math.min(Math.max(0, t), 1), a = Math.min(Math.max(0, a), 1), n = Math.min(Math.max(0, n), 1), [255 * t, 255 * a, 255 * n]
        }

        function f(e) {
            var t, a, n, r = e[0],
                i = e[1],
                s = e[2];
            return r /= 95.047, i /= 100, s /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * i - 16, a = 500 * (r - i), n = 200 * (i - s), [t, a, n]
        }

        function p(e) {
            var t, a, n, r, i = e[0],
                s = e[1],
                o = e[2];
            return i <= 8 ? r = (a = 100 * i / 903.3) / 100 * 7.787 + 16 / 116 : (a = 100 * Math.pow((i + 16) / 116, 3), r = Math.pow(a / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (s / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(s / 500 + r, 3), n = n / 108.883 <= .008859 ? n = 108.883 * (r - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - o / 200, 3), [t, a, n]
        }

        function y(e) {
            var t, a, n, r = e[0],
                i = e[1],
                s = e[2];
            return t = Math.atan2(s, i), (a = 360 * t / 2 / Math.PI) < 0 && (a += 360), n = Math.sqrt(i * i + s * s), [r, n, a]
        }

        function M(e) {
            return _(p(e))
        }

        function v(e) {
            var t, a, n, r = e[0],
                i = e[1];
            return n = e[2] / 360 * 2 * Math.PI, t = i * Math.cos(n), a = i * Math.sin(n), [r, t, a]
        }

        function L(e) {
            return Y[e]
        }
        e.exports = {
            rgb2hsl: a,
            rgb2hsv: n,
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
                var t, a, n = e[0],
                    r = e[1] / 100,
                    i = e[2] / 100;
                return 0 === i ? [0, 0, 0] : (i *= 2, r *= i <= 1 ? i : 2 - i, a = (i + r) / 2, t = 2 * r / (i + r), [n, 100 * t, 100 * a])
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
                var t, a, n = e[0],
                    r = e[1] / 100,
                    i = e[2] / 100;
                return a = (2 - r) * i, t = r * i, t /= a <= 1 ? a : 2 - a, t = t || 0, a /= 2, [n, 100 * t, 100 * a]
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
                return a(h(e))
            },
            hwb2hsv: function(e) {
                return n(h(e))
            },
            hwb2cmyk: function(e) {
                return s(h(e))
            },
            hwb2keyword: function(e) {
                return o(h(e))
            },
            cmyk2rgb: m,
            cmyk2hsl: function(e) {
                return a(m(e))
            },
            cmyk2hsv: function(e) {
                return n(m(e))
            },
            cmyk2hwb: function(e) {
                return i(m(e))
            },
            cmyk2keyword: function(e) {
                return o(m(e))
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
        var Y = {
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
            D = {};
        for (var k in Y) D[JSON.stringify(Y[k])] = k
    },
    ZFGz: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ZUMa: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 0 === n(e).getDay()
        }
    },
    ZUyn: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
            function t(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            function a(t, a) {
                var n = new e.Legend({
                    ctx: t.ctx,
                    options: a,
                    chart: t
                });
                s.configure(t, n, a), s.addBox(t, n), t.legend = n
            }
            var s = e.layoutService,
                o = i.noop;
            return e.Legend = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: o,
                update: function(e, t, a) {
                    return this.beforeUpdate(), this.maxWidth = e, this.maxHeight = t, this.margins = a, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
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
                        a = i.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (a = a.filter(function(a) {
                        return t.filter(a, e.chart.data)
                    })), e.options.reverse && a.reverse(), e.legendItems = a
                },
                afterBuildLabels: o,
                beforeFit: o,
                fit: function() {
                    var e = this,
                        a = e.options,
                        r = a.labels,
                        s = a.display,
                        o = e.ctx,
                        d = n.global,
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
                            o.textAlign = "left", o.textBaseline = "top", i.each(e.legendItems, function(a, n) {
                                var i = t(r, l) + l / 2 + o.measureText(a.text).width;
                                g[g.length - 1] + i + r.padding >= e.width && (y += l + r.padding, g[g.length] = e.left), _[n] = {
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
                                Y = 0,
                                D = l + M;
                            i.each(e.legendItems, function(e, a) {
                                var n = t(r, l) + l / 2 + o.measureText(e.text).width;
                                Y + D > f.height && (b += L + r.padding, v.push(L), L = 0, Y = 0), L = Math.max(L, n), Y += D, _[a] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
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
                        a = e.options,
                        r = a.labels,
                        s = n.global,
                        o = s.elements.line,
                        d = e.width,
                        u = e.lineWidths;
                    if (a.display) {
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
                        i.each(e.legendItems, function(t, n) {
                            var m = c.measureText(t.text).width,
                                f = y + _ / 2 + m,
                                p = l.x,
                                g = l.y;
                            v ? p + f >= d && (g = l.y += b, l.line++, p = l.x = e.left + (d - u[l.line]) / 2) : g + b > e.bottom && (p = l.x = p + e.columnWidths[l.line] + r.padding, g = l.y = e.top + r.padding, l.line++),
                                function(e, t, n) {
                                    if (!(isNaN(y) || y <= 0)) {
                                        c.save(), c.fillStyle = h(n.fillStyle, s.defaultColor), c.lineCap = h(n.lineCap, o.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, o.borderDashOffset), c.lineJoin = h(n.lineJoin, o.borderJoinStyle), c.lineWidth = h(n.lineWidth, o.borderWidth), c.strokeStyle = h(n.strokeStyle, s.defaultColor);
                                        var r = 0 === h(n.lineWidth, o.borderWidth);
                                        if (c.setLineDash && c.setLineDash(h(n.lineDash, o.borderDash)), a.labels && a.labels.usePointStyle) {
                                            var d = _ * Math.SQRT2 / 2,
                                                u = d / Math.SQRT2,
                                                l = e + u,
                                                m = t + u;
                                            i.canvas.drawPoint(c, n.pointStyle, d, l, m)
                                        } else r || c.strokeRect(e, t, y, _), c.fillRect(e, t, y, _);
                                        c.restore()
                                    }
                                }(p, g, t), M[n].left = p, M[n].top = g,
                                function(e, t, a, n) {
                                    var r = _ / 2,
                                        i = y + r + e,
                                        s = t + r;
                                    c.fillText(a.text, i, s), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, s), c.lineTo(i + n, s), c.stroke())
                                }(p, g, t, m), v ? l.x += f + r.padding : l.y += b
                        })
                    }
                },
                handleEvent: function(e) {
                    var t = this.options,
                        a = "mouseup" === e.type ? "click" : e.type,
                        n = !1;
                    if ("mousemove" === a) {
                        if (!t.onHover) return
                    } else {
                        if ("click" !== a) return;
                        if (!t.onClick) return
                    }
                    var r = e.x,
                        i = e.y;
                    if (r >= this.left && r <= this.right && i >= this.top && i <= this.bottom)
                        for (var s = this.legendHitBoxes, o = 0; o < s.length; ++o) {
                            var d = s[o];
                            if (r >= d.left && r <= d.left + d.width && i >= d.top && i <= d.top + d.height) {
                                if ("click" === a) {
                                    t.onClick.call(this, e.native, this.legendItems[o]), n = !0;
                                    break
                                }
                                if ("mousemove" === a) {
                                    t.onHover.call(this, e.native, this.legendItems[o]), n = !0;
                                    break
                                }
                            }
                        }
                    return n
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
                    t ? (i.mergeIf(t, n.global.legend), r ? (s.configure(e, r, t), r.options = t) : a(e, t)) : r && (s.removeBox(e, r), delete e.legend)
                },
                afterEvent: function(e, t) {
                    var a = e.legend;
                    a && a.handleEvent(t)
                }
            }
        }
    },
    ZoSI: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    a7Cs: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setFullYear(r), a
        }
    },
    aHtT: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return n(e)
                }),
                t = Math.min.apply(null, e);
            return new Date(t)
        }
    },
    aM0x: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ajDi: function(e, t, a) {
        function n(e) {
            if (e) {
                var t = [0, 0, 0],
                    a = 1,
                    n = e.match(/^#([a-fA-F0-9]{3})$/i);
                if (n) {
                    n = n[1];
                    for (var r = 0; r < t.length; r++) t[r] = parseInt(n[r] + n[r], 16)
                } else if (n = e.match(/^#([a-fA-F0-9]{6})$/i)) {
                    n = n[1];
                    for (r = 0; r < t.length; r++) t[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16)
                } else if (n = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (r = 0; r < t.length; r++) t[r] = parseInt(n[r + 1]);
                    a = parseFloat(n[4])
                } else if (n = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(n[r + 1]));
                    a = parseFloat(n[4])
                } else if (n = e.match(/(\w+)/)) {
                    if ("transparent" == n[1]) return [0, 0, 0, 0];
                    if (!(t = c[n[1]])) return
                }
                for (r = 0; r < t.length; r++) t[r] = u(t[r], 0, 255);
                return a = a || 0 == a ? u(a, 0, 1) : 1, t[3] = a, t
            }
        }

        function r(e) {
            if (e) {
                var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }

        function i(e) {
            if (e) {
                var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
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

        function u(e, t, a) {
            return Math.min(Math.max(t, e), a)
        }

        function l(e) {
            var t = e.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t
        }
        var c = a("72Lu");
        e.exports = {
            getRgba: n,
            getHsla: r,
            getRgb: function(e) {
                var t = n(e);
                return t && t.slice(0, 3)
            },
            getHsl: function(e) {
                var t = r(e);
                return t && t.slice(0, 3)
            },
            getHwb: i,
            getAlpha: function(e) {
                var t = n(e);
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
    aqvp: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    b7g8: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    b9IH: function(e, t, a) {
        "use strict";

        function n(e, t) {
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
                    var a = e.getBoundingClientRect(),
                        o = t.getBoundingClientRect();
                    a.bottom > o.bottom && n(e, s), a.top < o.top && n(e, i)
                }
            }
        };
        var i = !0,
            s = !1
    },
    bXQP: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    balU: function(e, t, a) {
        var n = a("xA5w"),
            r = a("Mdww");
        e.exports = function(e, t) {
            var a = n(e),
                i = Number(t),
                s = a.getFullYear(),
                o = a.getDate(),
                d = new Date(0);
            d.setFullYear(s, i, 15), d.setHours(0, 0, 0, 0);
            var u = r(d);
            return a.setMonth(i, Math.min(o, u)), a
        }
    },
    bbdo: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setMinutes(59, 59, 999), t
        }
    },
    c1x4: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "cA+x": function(e, t, a) {
        var n = a("Jvcu");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    cONr: function(e, t, a) {
        var n = a("f+sD");
        e.exports = function(e) {
            return n(new Date, e)
        }
    },
    cw9o: function(e, t, a) {
        var n = a("7EGB");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    cwv1: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getTime()
        }
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
        }, n.easingEffects = r
    },
    dH3X: function(e, t, a) {
        var n = a("607n");
        e.exports = function(e) {
            if (n(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
    },
    dURR: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    danj: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setMinutes(r), a
        }
    },
    dyB6: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "e/EH": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 3 === n(e).getDay()
        }
    },
    "e/KL": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "eBB/": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    eCZG: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getTime() < (new Date).getTime()
        }
    },
    eHwN: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                    var a = e % 10;
                    return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    eKpK: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getSeconds()
        }
    },
    "f+sD": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getFullYear() === r.getFullYear() && a.getMonth() === r.getMonth()
        }
    },
    f4W3: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    f4ga: function(e, t, a) {
        var n = a("WNGz");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
    fK0I: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() > r.getTime()
        }
    },
    fUo1: function(e, t, a) {
        var n = a("iRXW"),
            r = a("7EGB"),
            i = 6048e5;
        e.exports = function(e) {
            var t = n(e),
                a = n(r(t, 60)).valueOf() - t.valueOf();
            return Math.round(a / i)
        }
    },
    fW1y: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    fo7E: function(e, t, a) {
        var n = a("w4by");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    g7KF: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    gAt4: function(e, t, a) {
        var n = a("xA5w"),
            r = a("nizW"),
            i = a("NKE6");
        e.exports = function(e, t) {
            var a = n(e),
                s = n(t),
                o = i(a, s),
                d = Math.abs(r(a, s));
            return a.setDate(a.getDate() - o * d), o * (d - (i(a, s) === -o))
        }
    },
    gCP2: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.PolarArea = function(t, a) {
                return a.type = "polarArea", new e(t, a)
            }
        }
    },
    gDPd: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() < r.getTime()
        }
    },
    gEQe: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    gEU3: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n + 1), r.setHours(0, 0, 0, 0), r
        }
    },
    gUgh: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ghsk: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("iO9N"),
            i = a("KC8c"),
            s = a("2xI1");
        e.exports = function(e) {
            function t(e) {
                return "top" === e || "bottom" === e
            }
            var a = e.plugins;
            e.types = {}, e.instances = {}, e.controllers = {}, r.extend(e.prototype, {
                construct: function(t, a) {
                    var i = this;
                    a = function(e) {
                        var t = (e = e || {}).data = e.data || {};
                        return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = r.configMerge(n.global, n[e.type], e.options || {}), e
                    }(a);
                    var o = s.acquireContext(t, a),
                        d = o && o.canvas,
                        u = d && d.height,
                        l = d && d.width;
                    i.id = r.uid(), i.ctx = o, i.canvas = d, i.config = a, i.width = l, i.height = u, i.aspectRatio = u ? l / u : null, i.options = a.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
                        get: function() {
                            return i.config.data
                        },
                        set: function(e) {
                            i.config.data = e
                        }
                    }), o && d ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                },
                initialize: function() {
                    return a.notify(this, "beforeInit"), r.retinaScale(this, this.options.devicePixelRatio), this.bindEvents(), this.options.responsive && this.resize(!0), this.ensureScalesHaveIDs(), this.buildScales(), this.initToolTip(), a.notify(this, "afterInit"), this
                },
                clear: function() {
                    return r.canvas.clear(this), this
                },
                stop: function() {
                    return e.animationService.cancelAnimation(this), this
                },
                resize: function(e) {
                    var t = this.options,
                        n = this.canvas,
                        i = t.maintainAspectRatio && this.aspectRatio || null,
                        s = Math.max(0, Math.floor(r.getMaximumWidth(n))),
                        o = Math.max(0, Math.floor(i ? s / i : r.getMaximumHeight(n)));
                    if ((this.width !== s || this.height !== o) && (n.width = this.width = s, n.height = this.height = o, n.style.width = s + "px", n.style.height = o + "px", r.retinaScale(this, t.devicePixelRatio), !e)) {
                        var d = {
                            width: s,
                            height: o
                        };
                        a.notify(this, "resize", [d]), this.options.onResize && this.options.onResize(this, d), this.stop(), this.update(this.options.responsiveAnimationDuration)
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
                    var a = this,
                        n = a.options,
                        i = a.scales = {},
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
                            t(s.position) !== t(n.dposition) && (s.position = n.dposition);
                            var u = new d({
                                id: s.id,
                                options: s,
                                ctx: a.ctx,
                                chart: a
                            });
                            i[u.id] = u, u.mergeTicksOptions(), n.isDefault && (a.scale = u)
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
                    var t = this;
                    if (e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        }), function(e) {
                            var t = e.options;
                            t.scale ? e.scale.options = t.scale : t.scales && t.scales.xAxes.concat(t.scales.yAxes).forEach(function(t) {
                                e.scales[t.id].options = t
                            }), e.tooltip._options = t.tooltips
                        }(t), !1 !== a.notify(t, "beforeUpdate")) {
                        t.tooltip._data = t.data;
                        var n = t.buildOrUpdateControllers();
                        r.each(t.data.datasets, function(e, a) {
                            t.getDatasetMeta(a).controller.buildOrUpdateElements()
                        }, t), t.updateLayout(), r.each(n, function(e) {
                            e.reset()
                        }), t.updateDatasets(), a.notify(t, "afterUpdate"), t._bufferedRender ? t._bufferedRequest = {
                            duration: e.duration,
                            easing: e.easing,
                            lazy: e.lazy
                        } : t.render(e)
                    }
                },
                updateLayout: function() {
                    !1 !== a.notify(this, "beforeLayout") && (e.layoutService.update(this, this.width, this.height), a.notify(this, "afterScaleUpdate"), a.notify(this, "afterLayout"))
                },
                updateDatasets: function() {
                    if (!1 !== a.notify(this, "beforeDatasetsUpdate")) {
                        for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                        a.notify(this, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function(e) {
                    var t = this.getDatasetMeta(e),
                        n = {
                            meta: t,
                            index: e
                        };
                    !1 !== a.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), a.notify(this, "afterDatasetUpdate", [n]))
                },
                render: function(t) {
                    var n = this;
                    t && "object" == typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    });
                    var i = t.duration,
                        s = t.lazy;
                    if (!1 !== a.notify(n, "beforeRender")) {
                        var o = n.options.animation,
                            d = function(e) {
                                a.notify(n, "afterRender"), r.callback(o && o.onComplete, [e], n)
                            };
                        if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                            var u = new e.Animation({
                                numSteps: (i || o.duration) / 16.66,
                                easing: t.easing || o.easing,
                                render: function(e, t) {
                                    var a = r.easing.effects[t.easing],
                                        n = t.currentStep,
                                        i = n / t.numSteps;
                                    e.draw(a(i), i, n)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: d
                            });
                            e.animationService.addAnimation(n, u, i, s)
                        } else n.draw(), d(new e.Animation({
                            numSteps: 0,
                            chart: n
                        }));
                        return n
                    }
                },
                draw: function(e) {
                    var t = this;
                    t.clear(), r.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== a.notify(t, "beforeDraw", [e]) && (r.each(t.boxes, function(e) {
                        e.draw(t.chartArea)
                    }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t.tooltip.draw(), a.notify(t, "afterDraw", [e]))
                },
                transition: function(e) {
                    for (var t = 0, a = (this.data.datasets || []).length; t < a; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                    this.tooltip.transition(e)
                },
                drawDatasets: function(e) {
                    if (!1 !== a.notify(this, "beforeDatasetsDraw", [e])) {
                        for (var t = (this.data.datasets || []).length - 1; t >= 0; --t) this.isDatasetVisible(t) && this.drawDataset(t, e);
                        a.notify(this, "afterDatasetsDraw", [e])
                    }
                },
                drawDataset: function(e, t) {
                    var n = this.getDatasetMeta(e),
                        r = {
                            meta: n,
                            index: e,
                            easingValue: t
                        };
                    !1 !== a.notify(this, "beforeDatasetDraw", [r]) && (n.controller.draw(t), a.notify(this, "afterDatasetDraw", [r]))
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
                    var t, n, i = this.canvas;
                    for (this.stop(), t = 0, n = this.data.datasets.length; t < n; ++t) this.destroyDatasetMeta(t);
                    i && (this.unbindEvents(), r.canvas.clear(this), s.releaseContext(this.ctx), this.canvas = null, this.ctx = null), a.notify(this, "destroy"), delete e.instances[this.id]
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
                    var t = this.tooltip;
                    if (!1 !== a.notify(this, "beforeEvent", [e])) {
                        this._bufferedRender = !0, this._bufferedRequest = null;
                        var n = this.handleEvent(e);
                        n |= t && t.handleEvent(e), a.notify(this, "afterEvent", [e]);
                        var r = this._bufferedRequest;
                        return r ? this.render(r) : n && !this.animating && (this.stop(), this.render(this.options.hover.animationDuration, !0)), this._bufferedRender = !1, this._bufferedRequest = null, this
                    }
                },
                handleEvent: function(e) {
                    var t = this.options || {},
                        a = t.hover,
                        n = !1;
                    return this.lastActive = this.lastActive || [], "mouseout" === e.type ? this.active = [] : this.active = this.getElementsAtEventForMode(e, a.mode, a), r.callback(t.onHover || t.hover.onHover, [e.native, this.active], this), "mouseup" !== e.type && "click" !== e.type || t.onClick && t.onClick.call(this, e.native, this.active), this.lastActive.length && this.updateHoverStyle(this.lastActive, a.mode, !1), this.active.length && a.mode && this.updateHoverStyle(this.active, a.mode, !0), n = !r.arrayEquals(this.active, this.lastActive), this.lastActive = this.active, n
                }
            }), e.Controller = e
        }
    },
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
                    function s(e) {
                        var t = n.findNextWhere(w, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var a = {
                                    left: Math.max(j, x),
                                    right: Math.max(H, T),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? M : D, v / 2, a)
                            } else e.update(t.minSize.width, k)
                    }

                    function o(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? l : j, e.right = e.fullWidth ? r - c : j + D, e.top = z, e.bottom = z + e.height, z = e.bottom) : (e.left = I, e.right = I + e.width, e.top = P, e.bottom = P + k, I = e.right)
                    }
                    if (e) {
                        var d = e.options.layout || {},
                            u = n.options.toPadding(d.padding),
                            l = u.left,
                            c = u.right,
                            h = u.top,
                            m = u.bottom,
                            _ = t(e.boxes, "left"),
                            f = t(e.boxes, "right"),
                            p = t(e.boxes, "top"),
                            g = t(e.boxes, "bottom"),
                            y = t(e.boxes, "chartArea");
                        a(_, !0), a(f, !1), a(p, !0), a(g, !1);
                        var M = r - l - c,
                            v = i - h - m,
                            b = v / 2,
                            L = (r - M / 2) / (_.length + f.length),
                            Y = (i - b) / (p.length + g.length),
                            D = M,
                            k = v,
                            w = [];
                        n.each(_.concat(f, p, g), function(e) {
                            var t, a = e.isHorizontal();
                            a ? (t = e.update(e.fullWidth ? M : D, Y), k -= t.height) : (t = e.update(L, b), D -= t.width), w.push({
                                horizontal: a,
                                minSize: t,
                                box: e
                            })
                        });
                        var x = 0,
                            T = 0,
                            S = 0,
                            O = 0;
                        n.each(p.concat(g), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                x = Math.max(x, t.left), T = Math.max(T, t.right)
                            }
                        }), n.each(_.concat(f), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                S = Math.max(S, t.top), O = Math.max(O, t.bottom)
                            }
                        });
                        var j = l,
                            H = c,
                            P = h,
                            C = m;
                        n.each(_.concat(f), s), n.each(_, function(e) {
                            j += e.width
                        }), n.each(f, function(e) {
                            H += e.width
                        }), n.each(p.concat(g), s), n.each(p, function(e) {
                            P += e.height
                        }), n.each(g, function(e) {
                            C += e.height
                        }), n.each(_.concat(f), function(e) {
                            var t = n.findNextWhere(w, function(t) {
                                    return t.box === e
                                }),
                                a = {
                                    left: 0,
                                    right: 0,
                                    top: P,
                                    bottom: C
                                };
                            t && e.update(t.minSize.width, k, a)
                        }), j = l, H = c, P = h, C = m, n.each(_, function(e) {
                            j += e.width
                        }), n.each(f, function(e) {
                            H += e.width
                        }), n.each(p, function(e) {
                            P += e.height
                        }), n.each(g, function(e) {
                            C += e.height
                        });
                        var A = Math.max(x - j, 0);
                        j += A, H += Math.max(T - H, 0);
                        var F = Math.max(S - P, 0);
                        P += F, C += Math.max(O - C, 0);
                        var W = i - P - C,
                            E = r - j - H;
                        E === D && W === k || (n.each(_, function(e) {
                            e.height = W
                        }), n.each(f, function(e) {
                            e.height = W
                        }), n.each(p, function(e) {
                            e.fullWidth || (e.width = E)
                        }), n.each(g, function(e) {
                            e.fullWidth || (e.width = E)
                        }), k = W, D = E);
                        var I = l + A,
                            z = h + F;
                        n.each(_.concat(p), o), I += D, z += k, n.each(f, o), n.each(g, o), e.chartArea = {
                            left: j,
                            top: P,
                            right: j + D,
                            bottom: P + k
                        }, n.each(y, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(D, k)
                        })
                    }
                }
            }
        }
    },
    hPuz: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    hUHO: function(e, t, a) {
        var n = a("4LxA");
        e.exports = function(e) {
            return n(new Date, e)
        }
    },
    hico: function(e, t, a) {
        var n = a("zZbG"),
            r = a("3znZ");
        e.exports = function(e) {
            var t = n(e),
                a = new Date(0);
            a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var i = r(a);
            return i.setDate(i.getDate() - 1), i
        }
    },
    hj5Y: function(e, t, a) {
        var n = a("5qwL");
        e.exports = function(e) {
            return n(new Date, e)
        }
    },
    iNtv: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    iO9N: function(e, t, a) {
        "use strict";
        e.exports = a("3n1n"), e.exports.easing = a("d1/4"), e.exports.canvas = a("F4U8"), e.exports.options = a("u1o0")
    },
    iRXW: function(e, t, a) {
        var n = a("zZbG"),
            r = a("3znZ");
        e.exports = function(e) {
            var t = n(e),
                a = new Date(0);
            return a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0), r(a)
        }
    },
    "j+vx": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    j8cJ: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    jQas: function(e, t, a) {
        var n = a("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                a = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
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
                        return a[e.getDay()]
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
                u[e + "o"] = function(t, a) {
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
                    }(a[e](t))
                }
            }), {
                formatters: u,
                formattingTokensRegExp: n(u)
            }
        }
    },
    jxEH: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }

            function a(e, a, n) {
                return e + " " + t(r[n], e, a)
            }

            function n(e, a, n) {
                return t(r[n], e, a)
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
    jy2q: function(e, t, a) {
        var n = a("xA5w"),
            r = a("balU");
        e.exports = function(e, t) {
            var a = n(e),
                i = Number(t) - (Math.floor(a.getMonth() / 3) + 1);
            return r(a, a.getMonth() + 3 * i)
        }
    },
    "k+5o": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                    var a = e % 10;
                    return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
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
    kDuD: function(e, t, a) {
        var n = a("xA5w"),
            r = a("MIQa"),
            i = a("xKy+");
        e.exports = function(e) {
            var t = n(e);
            return r(t).getTime() === i(t).getTime()
        }
    },
    kIFi: function(e, t, a) {
        var n = a("NSOL");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    kRs6: function(e, t, a) {
        var n = a("Qxz6");
        e.exports = function(e) {
            return n(new Date, e)
        }
    },
    kjlQ: function(e, t, a) {
        var n = a("G7No"),
            r = 36e5;
        e.exports = function(e, t) {
            var a = n(e, t) / r;
            return a > 0 ? Math.floor(a) : Math.ceil(a)
        }
    },
    kkVd: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 1 === n(e).getDay()
        }
    },
    krPU: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    l85J: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getMonth()
        }
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
                    u = a(o),
                    l = a(d),
                    c = Number.POSITIVE_INFINITY;
                return u || l ? Math.min(u ? t(o, e, r) : c, l ? t(d, s, r) : c) : "none"
            }
            i.extend = function(e) {
                for (var t = function(t, a) {
                        e[a] = t
                    }, a = 1, n = arguments.length; a < n; a++) i.each(arguments[a], t);
                return e
            }, i.configMerge = function() {
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
                            var s, o, d, u = n[t].length;
                            for (a[t] || (a[t] = []), s = 0; s < u; ++s) d = n[t][s], o = i.valueOrDefault(d.type, "xAxes" === t ? "category" : "linear"), s >= a[t].length && a[t].push({}), !a[t][s].type || d.type && d.type !== a[t][s].type ? i.merge(a[t][s], [e.scaleService.getScaleDefaults(o), d]) : i.merge(a[t][s], d)
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
                    u = o / (o + d),
                    l = d / (o + d),
                    c = n * (u = isNaN(u) ? 0 : u),
                    h = n * (l = isNaN(l) ? 0 : l);
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
                var t, a, n, r, s = (e || []).map(function(e) {
                        return {
                            model: e._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                    o = s.length;
                for (t = 0; t < o; ++t)
                    if (!(n = s[t]).model.skip) {
                        if (a = t > 0 ? s[t - 1] : null, (r = t < o - 1 ? s[t + 1] : null) && !r.model.skip) {
                            var d = r.model.x - n.model.x;
                            n.deltaK = 0 !== d ? (r.model.y - n.model.y) / d : 0
                        }!a || a.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
                    }
                var u, l, c, h;
                for (t = 0; t < o - 1; ++t) n = s[t], r = s[t + 1], n.model.skip || r.model.skip || (i.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (u = n.mK / n.deltaK, l = r.mK / n.deltaK, (h = Math.pow(u, 2) + Math.pow(l, 2)) <= 9 || (c = 3 / Math.sqrt(h), n.mK = u * c * n.deltaK, r.mK = l * c * n.deltaK)));
                var m;
                for (t = 0; t < o; ++t)(n = s[t]).model.skip || (a = t > 0 ? s[t - 1] : null, r = t < o - 1 ? s[t + 1] : null, a && !a.model.skip && (m = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - m, n.model.controlPointPreviousY = n.model.y - m * n.mK), r && !r.model.skip && (m = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + m, n.model.controlPointNextY = n.model.y + m * n.mK))
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
                var u = parseFloat(i.getStyle(s, "padding-left")),
                    l = parseFloat(i.getStyle(s, "padding-top")),
                    c = parseFloat(i.getStyle(s, "padding-right")),
                    h = parseFloat(i.getStyle(s, "padding-bottom")),
                    m = o.right - o.left - u - c,
                    _ = o.bottom - o.top - l - h;
                return a = Math.round((a - o.left - u) / m * s.width / t.currentDevicePixelRatio), n = Math.round((n - o.top - l) / _ * s.height / t.currentDevicePixelRatio), {
                    x: a,
                    y: n
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
                    for (var u = 0; u < d; u++) delete r[s[u]];
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
        ! function(e, t) {
            t(a("PJh5"))
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
    lQzg: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
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
            function t(t, n) {
                var r = new e.Title({
                    ctx: t.ctx,
                    options: n,
                    chart: t
                });
                a.configure(t, r, n), a.addBox(t, r), t.titleBlock = r
            }
            var a = e.layoutService,
                s = i.noop;
            return e.Title = r.extend({
                initialize: function(e) {
                    i.extend(this, e), this.legendHitBoxes = []
                },
                beforeUpdate: s,
                update: function(e, t, a) {
                    return this.beforeUpdate(), this.maxWidth = e, this.maxHeight = t, this.margins = a, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
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
                        a = t.display,
                        r = e(t.fontSize, n.global.defaultFontSize),
                        s = this.minSize,
                        o = i.isArray(t.text) ? t.text.length : 1,
                        d = i.options.toLineHeight(t.lineHeight, r),
                        u = a ? o * d + 2 * t.padding : 0;
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
                        a = this.options,
                        r = n.global;
                    if (a.display) {
                        var s, o, d, u = t(a.fontSize, r.defaultFontSize),
                            l = t(a.fontStyle, r.defaultFontStyle),
                            c = t(a.fontFamily, r.defaultFontFamily),
                            h = i.fontString(u, l, c),
                            m = i.options.toLineHeight(a.lineHeight, u),
                            _ = m / 2 + a.padding,
                            f = 0,
                            p = this.top,
                            g = this.left,
                            y = this.bottom,
                            M = this.right;
                        e.fillStyle = t(a.fontColor, r.defaultFontColor), e.font = h, this.isHorizontal() ? (o = g + (M - g) / 2, d = p + _, s = M - g) : (o = "left" === a.position ? g + _ : M - _, d = p + (y - p) / 2, s = y - p, f = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(o, d), e.rotate(f), e.textAlign = "center", e.textBaseline = "middle";
                        var v = a.text;
                        if (i.isArray(v))
                            for (var b = 0, L = 0; L < v.length; ++L) e.fillText(v[L], 0, b, s), b += m;
                        else e.fillText(v, 0, 0, s);
                        e.restore()
                    }
                }
            }), {
                id: "title",
                beforeInit: function(e) {
                    var a = e.options.title;
                    a && t(e, a)
                },
                beforeUpdate: function(r) {
                    var s = r.options.title,
                        o = r.titleBlock;
                    s ? (i.mergeIf(s, n.global.title), o ? (a.configure(r, o, s), o.options = s) : t(r, s)) : o && (e.layoutService.removeBox(r, o), delete r.titleBlock)
                }
            }
        }
    },
    m7yE: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, r) {
                var i = function(e) {
                    var t = Math.floor(e % 1e3 / 100),
                        n = Math.floor(e % 100 / 10),
                        r = e % 10,
                        i = "";
                    t > 0 && (i += a[t] + "vatlh");
                    n > 0 && (i += ("" !== i ? " " : "") + a[n] + "maH");
                    r > 0 && (i += ("" !== i ? " " : "") + a[r]);
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
            var a = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
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
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                a = e.getMonth(),
                n = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, a, n - 1), r.setHours(0, 0, 0, 0), r
        }
    },
    mXYp: function(e, t, a) {
        var n = a("YRFD"),
            r = a("xA5w"),
            i = a("25hp"),
            s = a("GI7G"),
            o = a("uyaC"),
            d = 1440,
            u = 2520,
            l = 43200,
            c = 86400;
        e.exports = function(e, t, a) {
            var h = a || {},
                m = n(e, t),
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
            var Y = M % 12,
                D = Math.floor(M / 12);
            return Y < 3 ? f("aboutXYears", D, y) : Y < 9 ? f("overXYears", D, y) : f("almostXYears", D + 1, y)
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
        ! function(e, t) {
            t(a("PJh5"))
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
    nLOz: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    nS2h: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                    return e < 10 ? t ? n[e] : a[e] : e
                }(e, i) + " " + s
            }
            var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
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
    nZeo: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getFullYear()
        }
    },
    nfOx: function(e, t, a) {
        var n = a("6Zhv");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, 1e3 * a)
        }
    },
    nizW: function(e, t, a) {
        var n = a("WNGz"),
            r = 6e4,
            i = 864e5;
        e.exports = function(e, t) {
            var a = n(e),
                s = n(t),
                o = a.getTime() - a.getTimezoneOffset() * r,
                d = s.getTime() - s.getTimezoneOffset() * r;
            return Math.round((o - d) / i)
        }
    },
    nk30: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = t ? Number(t.weekStartsOn) || 0 : 0,
                r = n(e),
                i = r.getDay(),
                s = 6 + (i < a ? -7 : 0) - (i - a);
            return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + s), r
        }
    },
    ntHu: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + function(e, t) {
                    var a = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
                }({
                    mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: t ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                }[a], +e)
            }

            function a(e) {
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
        })
    },
    oNnY: function(e, t, a) {
        var n = a("zZbG"),
            r = a("Uu+E");
        e.exports = function(e, t) {
            var a = Number(t);
            return r(e, n(e) + a)
        }
    },
    oQMP: function(e, t, a) {
        "use strict";
        var n = a("iO9N");
        e.exports = function(e) {
            function t(e, t) {
                var n = e._chartjs;
                if (n) {
                    var r = n.listeners,
                        i = r.indexOf(t); - 1 !== i && r.splice(i, 1), r.length > 0 || (a.forEach(function(t) {
                        delete e[t]
                    }), delete e._chartjs)
                }
            }
            var a = ["push", "pop", "shift", "splice", "unshift"];
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
                    var e = this.getDataset(),
                        r = e.data || (e.data = []);
                    this._data !== r && (this._data && t(this._data, this), function(e, t) {
                        e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [t]
                            }
                        }), a.forEach(function(t) {
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
                        }))
                    }(r, this), this._data = r), this.resyncElements()
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
    oke8: function(e, t, a) {
        var n = a("1rLR");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    oo1B: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ooba: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    orNa: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return 12 * (a.getFullYear() - r.getFullYear()) + (a.getMonth() - r.getMonth())
        }
    },
    pe7V: function(e, t, a) {
        var n = a("8KV+");
        e.exports = function(e, t) {
            return n(new Date, e, t)
        }
    },
    pfs9: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    qNYo: function(e, t, a) {
        var n = a("xA5w"),
            r = a("9Jn5"),
            i = a("NKE6"),
            s = a("MKc+");
        e.exports = function(e, t) {
            var a = n(e),
                o = n(t),
                d = i(a, o),
                u = Math.abs(r(a, o));
            return a = s(a, d * u), d * (u - (i(a, o) === -d))
        }
    },
    qPxx: function(e, t, a) {
        var n = a("LLTj");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
    r7VP: function(e, t, a) {
        "use strict";

        function n(e) {
            switch (e.toUpperCase()) {
                case "A1":
                    return Object(M.d)("Anonymous Proxy", "format-country");
                case "A2":
                    return Object(M.d)("Satellite Provider", "format-country");
                case "AD":
                    return Object(M.d)("Andorra", "format-country");
                case "AE":
                    return Object(M.d)("United Arab Emirates", "format-country");
                case "AF":
                    return Object(M.d)("Afghanistan", "format-country");
                case "AG":
                    return Object(M.d)("Antigua and Barbuda", "format-country");
                case "AI":
                    return Object(M.d)("Anguilla", "format-country");
                case "AL":
                    return Object(M.d)("Albania", "format-country");
                case "AM":
                    return Object(M.d)("Armenia", "format-country");
                case "AO":
                    return Object(M.d)("Angola", "format-country");
                case "AP":
                    return Object(M.d)("Asia/Pacific Region", "format-country");
                case "AQ":
                    return Object(M.d)("Antarctica", "format-country");
                case "AR":
                    return Object(M.d)("Argentina", "format-country");
                case "AS":
                    return Object(M.d)("American Samoa", "format-country");
                case "AT":
                    return Object(M.d)("Austria", "format-country");
                case "AU":
                    return Object(M.d)("Australia", "format-country");
                case "AW":
                    return Object(M.d)("Aruba", "format-country");
                case "AX":
                    return Object(M.d)("Aland Islands", "format-country");
                case "AZ":
                    return Object(M.d)("Azerbaijan", "format-country");
                case "BA":
                    return Object(M.d)("Bosnia and Herzegovina", "format-country");
                case "BB":
                    return Object(M.d)("Barbados", "format-country");
                case "BD":
                    return Object(M.d)("Bangladesh", "format-country");
                case "BE":
                    return Object(M.d)("Belgium", "format-country");
                case "BF":
                    return Object(M.d)("Burkina Faso", "format-country");
                case "BG":
                    return Object(M.d)("Bulgaria", "format-country");
                case "BH":
                    return Object(M.d)("Bahrain", "format-country");
                case "BI":
                    return Object(M.d)("Burundi", "format-country");
                case "BJ":
                    return Object(M.d)("Benin", "format-country");
                case "BL":
                    return Object(M.d)("Saint Bartelemey", "format-country");
                case "BM":
                    return Object(M.d)("Bermuda", "format-country");
                case "BN":
                    return Object(M.d)("Brunei", "format-country");
                case "BO":
                    return Object(M.d)("Bolivia", "format-country");
                case "BQ":
                    return Object(M.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                case "BR":
                    return Object(M.d)("Brazil", "format-country");
                case "BS":
                    return Object(M.d)("Bahamas", "format-country");
                case "BT":
                    return Object(M.d)("Bhutan", "format-country");
                case "BV":
                    return Object(M.d)("Bouvet Island", "format-country");
                case "BW":
                    return Object(M.d)("Botswana", "format-country");
                case "BY":
                    return Object(M.d)("Belarus", "format-country");
                case "BZ":
                    return Object(M.d)("Belize", "format-country");
                case "CA":
                    return Object(M.d)("Canada", "format-country");
                case "CC":
                    return Object(M.d)("Cocos (Keeling) Islands", "format-country");
                case "CD":
                    return Object(M.d)("Congo, The Democratic Republic of the", "format-country");
                case "CF":
                    return Object(M.d)("Central African Republic", "format-country");
                case "CG":
                    return Object(M.d)("Congo", "format-country");
                case "CH":
                    return Object(M.d)("Switzerland", "format-country");
                case "CI":
                    return Object(M.d)("Ivory Coast", "format-country");
                case "CK":
                    return Object(M.d)("Cook Islands", "format-country");
                case "CL":
                    return Object(M.d)("Chile", "format-country");
                case "CM":
                    return Object(M.d)("Cameroon", "format-country");
                case "CN":
                    return Object(M.d)("China", "format-country");
                case "CO":
                    return Object(M.d)("Colombia", "format-country");
                case "CR":
                    return Object(M.d)("Costa Rica", "format-country");
                case "CU":
                    return Object(M.d)("Cuba", "format-country");
                case "CV":
                    return Object(M.d)("Cape Verde", "format-country");
                case "CW":
                    return Object(M.d)("Curacao", "format-country");
                case "CX":
                    return Object(M.d)("Christmas Island", "format-country");
                case "CY":
                    return Object(M.d)("Cyprus", "format-country");
                case "CZ":
                    return Object(M.d)("Czech Republic", "format-country");
                case "DE":
                    return Object(M.d)("Germany", "format-country");
                case "DJ":
                    return Object(M.d)("Djibouti", "format-country");
                case "DK":
                    return Object(M.d)("Denmark", "format-country");
                case "DM":
                    return Object(M.d)("Dominica", "format-country");
                case "DO":
                    return Object(M.d)("Dominican Republic", "format-country");
                case "DZ":
                    return Object(M.d)("Algeria", "format-country");
                case "EC":
                    return Object(M.d)("Ecuador", "format-country");
                case "EE":
                    return Object(M.d)("Estonia", "format-country");
                case "EG":
                    return Object(M.d)("Egypt", "format-country");
                case "EH":
                    return Object(M.d)("Western Sahara", "format-country");
                case "ER":
                    return Object(M.d)("Eritrea", "format-country");
                case "ES":
                    return Object(M.d)("Spain", "format-country");
                case "ET":
                    return Object(M.d)("Ethiopia", "format-country");
                case "EU":
                    return Object(M.d)("Europe", "format-country");
                case "FI":
                    return Object(M.d)("Finland", "format-country");
                case "FJ":
                    return Object(M.d)("Fiji", "format-country");
                case "FK":
                    return Object(M.d)("Falkland Islands (Malvinas)", "format-country");
                case "FM":
                    return Object(M.d)("Micronesia", "format-country");
                case "FO":
                    return Object(M.d)("Faroe Islands", "format-country");
                case "FR":
                    return Object(M.d)("France", "format-country");
                case "GA":
                    return Object(M.d)("Gabon", "format-country");
                case "GB":
                    return Object(M.d)("United Kingdom", "format-country");
                case "GD":
                    return Object(M.d)("Grenada", "format-country");
                case "GE":
                    return Object(M.d)("Georgia", "format-country");
                case "GF":
                    return Object(M.d)("French Guiana", "format-country");
                case "GG":
                    return Object(M.d)("Guernsey", "format-country");
                case "GH":
                    return Object(M.d)("Ghana", "format-country");
                case "GI":
                    return Object(M.d)("Gibraltar", "format-country");
                case "GL":
                    return Object(M.d)("Greenland", "format-country");
                case "GM":
                    return Object(M.d)("Gambia", "format-country");
                case "GN":
                    return Object(M.d)("Guinea", "format-country");
                case "GP":
                    return Object(M.d)("Guadeloupe", "format-country");
                case "GQ":
                    return Object(M.d)("Equatorial Guinea", "format-country");
                case "GR":
                    return Object(M.d)("Greece", "format-country");
                case "GS":
                    return Object(M.d)("South Georgia and the South Sandwich Islands", "format-country");
                case "GT":
                    return Object(M.d)("Guatemala", "format-country");
                case "GU":
                    return Object(M.d)("Guam", "format-country");
                case "GW":
                    return Object(M.d)("Guinea-Bissau", "format-country");
                case "GY":
                    return Object(M.d)("Guyana", "format-country");
                case "HK":
                    return Object(M.d)("Hong Kong", "format-country");
                case "HM":
                    return Object(M.d)("Heard Island and McDonald Islands", "format-country");
                case "HN":
                    return Object(M.d)("Honduras", "format-country");
                case "HR":
                    return Object(M.d)("Croatia", "format-country");
                case "HT":
                    return Object(M.d)("Haiti", "format-country");
                case "HU":
                    return Object(M.d)("Hungary", "format-country");
                case "ID":
                    return Object(M.d)("Indonesia", "format-country");
                case "IE":
                    return Object(M.d)("Ireland", "format-country");
                case "IL":
                    return Object(M.d)("Israel", "format-country");
                case "IM":
                    return Object(M.d)("Isle of Man", "format-country");
                case "IN":
                    return Object(M.d)("India", "format-country");
                case "IO":
                    return Object(M.d)("British Indian Ocean Territory", "format-country");
                case "IQ":
                    return Object(M.d)("Iraq", "format-country");
                case "IR":
                    return Object(M.d)("Iran", "format-country");
                case "IS":
                    return Object(M.d)("Iceland", "format-country");
                case "IT":
                    return Object(M.d)("Italy", "format-country");
                case "JE":
                    return Object(M.d)("Jersey", "format-country");
                case "JM":
                    return Object(M.d)("Jamaica", "format-country");
                case "JO":
                    return Object(M.d)("Jordan", "format-country");
                case "JP":
                    return Object(M.d)("Japan", "format-country");
                case "KE":
                    return Object(M.d)("Kenya", "format-country");
                case "KG":
                    return Object(M.d)("Kyrgyzstan", "format-country");
                case "KH":
                    return Object(M.d)("Cambodia", "format-country");
                case "KI":
                    return Object(M.d)("Kiribati", "format-country");
                case "KM":
                    return Object(M.d)("Comoros", "format-country");
                case "KN":
                    return Object(M.d)("Saint Kitts and Nevis", "format-country");
                case "KP":
                    return Object(M.d)("North Korea", "format-country");
                case "KR":
                    return Object(M.d)("South Korea", "format-country");
                case "KW":
                    return Object(M.d)("Kuwait", "format-country");
                case "KY":
                    return Object(M.d)("Cayman Islands", "format-country");
                case "KZ":
                    return Object(M.d)("Kazakhstan", "format-country");
                case "LA":
                    return Object(M.d)("Laos", "format-country");
                case "LB":
                    return Object(M.d)("Lebanon", "format-country");
                case "LC":
                    return Object(M.d)("Saint Lucia", "format-country");
                case "LI":
                    return Object(M.d)("Liechtenstein", "format-country");
                case "LK":
                    return Object(M.d)("Sri Lanka", "format-country");
                case "LR":
                    return Object(M.d)("Liberia", "format-country");
                case "LS":
                    return Object(M.d)("Lesotho", "format-country");
                case "LT":
                    return Object(M.d)("Lithuania", "format-country");
                case "LU":
                    return Object(M.d)("Luxembourg", "format-country");
                case "LV":
                    return Object(M.d)("Latvia", "format-country");
                case "LY":
                    return Object(M.d)("Libya", "format-country");
                case "MA":
                    return Object(M.d)("Morocco", "format-country");
                case "MC":
                    return Object(M.d)("Monaco", "format-country");
                case "MD":
                    return Object(M.d)("Moldova", "format-country");
                case "ME":
                    return Object(M.d)("Montenegro", "format-country");
                case "MF":
                    return Object(M.d)("Saint Martin", "format-country");
                case "MG":
                    return Object(M.d)("Madagascar", "format-country");
                case "MH":
                    return Object(M.d)("Marshall Islands", "format-country");
                case "MK":
                    return Object(M.d)("Macedonia", "format-country");
                case "ML":
                    return Object(M.d)("Mali", "format-country");
                case "MM":
                    return Object(M.d)("Myanmar", "format-country");
                case "MN":
                    return Object(M.d)("Mongolia", "format-country");
                case "MO":
                    return Object(M.d)("Macao", "format-country");
                case "MP":
                    return Object(M.d)("Northern Mariana Islands", "format-country");
                case "MQ":
                    return Object(M.d)("Martinique", "format-country");
                case "MR":
                    return Object(M.d)("Mauritania", "format-country");
                case "MS":
                    return Object(M.d)("Montserrat", "format-country");
                case "MT":
                    return Object(M.d)("Malta", "format-country");
                case "MU":
                    return Object(M.d)("Mauritius", "format-country");
                case "MV":
                    return Object(M.d)("Maldives", "format-country");
                case "MW":
                    return Object(M.d)("Malawi", "format-country");
                case "MX":
                    return Object(M.d)("Mexico", "format-country");
                case "MY":
                    return Object(M.d)("Malaysia", "format-country");
                case "MZ":
                    return Object(M.d)("Mozambique", "format-country");
                case "NA":
                    return Object(M.d)("Namibia", "format-country");
                case "NC":
                    return Object(M.d)("New Caledonia", "format-country");
                case "NE":
                    return Object(M.d)("Niger", "format-country");
                case "NF":
                    return Object(M.d)("Norfolk Island", "format-country");
                case "NG":
                    return Object(M.d)("Nigeria", "format-country");
                case "NI":
                    return Object(M.d)("Nicaragua", "format-country");
                case "NL":
                    return Object(M.d)("Netherlands", "format-country");
                case "NO":
                    return Object(M.d)("Norway", "format-country");
                case "NP":
                    return Object(M.d)("Nepal", "format-country");
                case "NR":
                    return Object(M.d)("Nauru", "format-country");
                case "NU":
                    return Object(M.d)("Niue", "format-country");
                case "NZ":
                    return Object(M.d)("New Zealand", "format-country");
                case "O1":
                    return Object(M.d)("Other Country", "format-country");
                case "OM":
                    return Object(M.d)("Oman", "format-country");
                case "PA":
                    return Object(M.d)("Panama", "format-country");
                case "PE":
                    return Object(M.d)("Peru", "format-country");
                case "PF":
                    return Object(M.d)("French Polynesia", "format-country");
                case "PG":
                    return Object(M.d)("Papua New Guinea", "format-country");
                case "PH":
                    return Object(M.d)("Philippines", "format-country");
                case "PK":
                    return Object(M.d)("Pakistan", "format-country");
                case "PL":
                    return Object(M.d)("Poland", "format-country");
                case "PM":
                    return Object(M.d)("Saint Pierre and Miquelon", "format-country");
                case "PN":
                    return Object(M.d)("Pitcairn", "format-country");
                case "PR":
                    return Object(M.d)("Puerto Rico", "format-country");
                case "PS":
                    return Object(M.d)("Palestine", "format-country");
                case "PT":
                    return Object(M.d)("Portugal", "format-country");
                case "PW":
                    return Object(M.d)("Palau", "format-country");
                case "PY":
                    return Object(M.d)("Paraguay", "format-country");
                case "QA":
                    return Object(M.d)("Qatar", "format-country");
                case "RE":
                    return Object(M.d)("Reunion", "format-country");
                case "RO":
                    return Object(M.d)("Romania", "format-country");
                case "RS":
                    return Object(M.d)("Serbia", "format-country");
                case "RU":
                    return Object(M.d)("Russia", "format-country");
                case "RW":
                    return Object(M.d)("Rwanda", "format-country");
                case "SA":
                    return Object(M.d)("Saudi Arabia", "format-country");
                case "SB":
                    return Object(M.d)("Solomon Islands", "format-country");
                case "SC":
                    return Object(M.d)("Seychelles", "format-country");
                case "SD":
                    return Object(M.d)("Sudan", "format-country");
                case "SE":
                    return Object(M.d)("Sweden", "format-country");
                case "SG":
                    return Object(M.d)("Singapore", "format-country");
                case "SH":
                    return Object(M.d)("Saint Helena", "format-country");
                case "SI":
                    return Object(M.d)("Slovenia", "format-country");
                case "SJ":
                    return Object(M.d)("Svalbard and Jan Mayen", "format-country");
                case "SK":
                    return Object(M.d)("Slovakia", "format-country");
                case "SL":
                    return Object(M.d)("Sierra Leone", "format-country");
                case "SM":
                    return Object(M.d)("San Marino", "format-country");
                case "SN":
                    return Object(M.d)("Senegal", "format-country");
                case "SO":
                    return Object(M.d)("Somalia", "format-country");
                case "SR":
                    return Object(M.d)("Suriname", "format-country");
                case "SS":
                    return Object(M.d)("South Sudan", "format-country");
                case "ST":
                    return Object(M.d)("Sao Tome and Principe", "format-country");
                case "SV":
                    return Object(M.d)("El Salvador", "format-country");
                case "SX":
                    return Object(M.d)("Sint Maarten", "format-country");
                case "SY":
                    return Object(M.d)("Syria", "format-country");
                case "SZ":
                    return Object(M.d)("Swaziland", "format-country");
                case "TC":
                    return Object(M.d)("Turks and Caicos Islands", "format-country");
                case "TD":
                    return Object(M.d)("Chad", "format-country");
                case "TF":
                    return Object(M.d)("French Southern Territories", "format-country");
                case "TG":
                    return Object(M.d)("Togo", "format-country");
                case "TH":
                    return Object(M.d)("Thailand", "format-country");
                case "TJ":
                    return Object(M.d)("Tajikistan", "format-country");
                case "TK":
                    return Object(M.d)("Tokelau", "format-country");
                case "TL":
                    return Object(M.d)("East Timor", "format-country");
                case "TM":
                    return Object(M.d)("Turkmenistan", "format-country");
                case "TN":
                    return Object(M.d)("Tunisia", "format-country");
                case "TO":
                    return Object(M.d)("Tonga", "format-country");
                case "TR":
                    return Object(M.d)("Turkey", "format-country");
                case "TT":
                    return Object(M.d)("Trinidad and Tobago", "format-country");
                case "TV":
                    return Object(M.d)("Tuvalu", "format-country");
                case "TW":
                    return Object(M.d)("Taiwan", "format-country");
                case "TZ":
                    return Object(M.d)("Tanzania", "format-country");
                case "UA":
                    return Object(M.d)("Ukraine", "format-country");
                case "UG":
                    return Object(M.d)("Uganda", "format-country");
                case "UM":
                    return Object(M.d)("United States Minor Outlying Islands", "format-country");
                case "US":
                    return Object(M.d)("United States", "format-country");
                case "UY":
                    return Object(M.d)("Uruguay", "format-country");
                case "UZ":
                    return Object(M.d)("Uzbekistan", "format-country");
                case "VA":
                    return Object(M.d)("Vatican City", "format-country");
                case "VC":
                    return Object(M.d)("Saint Vincent and the Grenadines", "format-country");
                case "VE":
                    return Object(M.d)("Venezuela", "format-country");
                case "VG":
                    return Object(M.d)("British Virgin Islands", "format-country");
                case "VI":
                    return Object(M.d)("U.S. Virgin Islands", "format-country");
                case "VN":
                    return Object(M.d)("Vietnam", "format-country");
                case "VU":
                    return Object(M.d)("Vanuatu", "format-country");
                case "WF":
                    return Object(M.d)("Wallis and Futuna", "format-country");
                case "WS":
                    return Object(M.d)("Samoa", "format-country");
                case "YE":
                    return Object(M.d)("Yemen", "format-country");
                case "YT":
                    return Object(M.d)("Mayotte", "format-country");
                case "ZA":
                    return Object(M.d)("South Africa", "format-country");
                case "ZM":
                    return Object(M.d)("Zambia", "format-country");
                case "ZW":
                    return Object(M.d)("Zimbabwe", "format-country");
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, i = a("RH2O"),
            s = a("2KeS"),
            o = a("+xm8"),
            d = a("f2i/"),
            u = a("Aj/L"),
            l = a("TToO"),
            c = a("U7vG"),
            h = a("CIox"),
            m = a("w9tK"),
            _ = a("CSlQ"),
            f = a("zCIC"),
            p = a("Odds"),
            g = function(e) {
                return c.createElement(f.b, null, c.createElement(p.U, {
                    display: p.H.Flex,
                    flexDirection: p.J.Column,
                    alignItems: p.c.Center,
                    padding: 2
                }, c.createElement(p.U, {
                    display: p.H.Flex,
                    padding: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, c.createElement(p._22, {
                    "data-test-selector": e.titleSelector,
                    type: p._27.H1
                }, e.title)), e.children))
            };
        ! function(e) {
            e.BasicInfo = "basic-info", e.Customize = "customize", e.Members = "members", e.FeaturedChannels = "featured-channels", e.Stats = "stats", e.Revenue = "revenue"
        }(r || (r = {}));
        var y, M = a("6sO2"),
            v = function(e) {
                switch (e) {
                    case r.BasicInfo:
                        return Object(M.d)("Basic Info", "TeamsDashboard");
                    case r.Customize:
                        return Object(M.d)("Customize", "TeamsDashboard");
                    case r.Members:
                        return Object(M.d)("Members", "TeamsDashboard");
                    case r.FeaturedChannels:
                        return Object(M.d)("Featured Channels", "TeamsDashboard");
                    case r.Stats:
                        return Object(M.d)("Stats", "TeamsDashboard");
                    case r.Revenue:
                        return Object(M.d)("Revenue", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            b = Object(_.c)("BasicInfoPage", {
                destination: m.a.TeamsDashboardBasicInfo,
                autoReportInteractive: !0
            })(function() {
                return c.createElement(g, {
                    title: v(r.BasicInfo),
                    titleSelector: "basic-info-page-title"
                })
            }),
            L = Object(_.c)("CustomizePage", {
                destination: m.a.TeamsDashboardCustomize,
                autoReportInteractive: !0
            })(function() {
                return c.createElement(g, {
                    title: v(r.Customize),
                    titleSelector: "customize-page-title"
                })
            }),
            Y = Object(_.c)("FeaturedChannelsPage", {
                destination: m.a.TeamsDashboardFeaturedChannels,
                autoReportInteractive: !0
            })(function() {
                return c.createElement(g, {
                    title: v(r.FeaturedChannels),
                    titleSelector: "featured-channels-page-title"
                })
            }),
            D = (a("A5K9"), function(e) {
                var t = function(e) {
                    var t = Object(M.d)("{displayName}'s Avatar Image", {
                        displayName: e.member.displayName
                    }, "TeamsDashboard");
                    return c.createElement(p._18, {
                        display: p.H.Flex,
                        flexDirection: p.J.Row,
                        padding: 1,
                        borderBottom: !0,
                        fullWidth: !0
                    }, c.createElement(p.l, {
                        imageSrc: e.member.avatarSrc,
                        imageAlt: t,
                        size: 30
                    }), c.createElement(p.U, {
                        display: p.H.Flex,
                        alignSelf: p.d.Center,
                        margin: {
                            left: 1
                        }
                    }, c.createElement(p._22, null, e.member.displayName)))
                };
                return c.createElement(p.U, {
                    fullWidth: !0,
                    margin: {
                        top: 2,
                        bottom: 2
                    }
                }, c.createElement(p._22, {
                    type: p._27.H3
                }, e.header), e.members.length ? function(e) {
                    return c.createElement(f.b, null, c.createElement(p.U, {
                        display: p.H.Flex,
                        flexDirection: p.J.Column
                    }, e.map(function(e) {
                        return c.createElement(t, {
                            key: e.id,
                            member: e
                        })
                    })))
                }(e.members) : c.createElement(p._22, null, "No team members yet."))
            }),
            k = a("PGY2"),
            w = this;
        ! function(e) {
            e.StatsRevealed = "stats_revealed", e.RevenueRevealed = "revenue_revealed"
        }(y || (y = {}));
        var x, T = function(e, t) {
                return l.__awaiter(w, void 0, void 0, function() {
                    var a, n, r, i;
                    return l.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return a = t ? "?" + t + "=true" : "", n = "/v5/teams/" + e + "/dashboard/members" + a, [4, Object(k.c)({
                                    path: n
                                })];
                            case 1:
                                return r = s.sent(), i = r.body ? r.body.channels : [], [2, function(e) {
                                    return e.map(function(e) {
                                        return {
                                            id: e._id,
                                            displayName: e.display_name,
                                            avatarSrc: e.logo
                                        }
                                    })
                                }(i)]
                        }
                    })
                })
            },
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        members: []
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, T(this.props.teamName)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        members: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return c.createElement(g, {
                        title: v(r.Members),
                        titleSelector: "members-page-title"
                    }, c.createElement(D, {
                        header: Object(M.d)("Pending Team Invitations", "TeamsDashboard"),
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
                    }), c.createElement(D, {
                        header: Object(M.d)("Current Members", "TeamsDashboard"),
                        members: this.state.members
                    }))
                }, t = l.__decorate([Object(_.c)("MembersPage", {
                    autoReportInteractive: !0,
                    destination: m.a.TeamsDashboardMembers
                })], t)
            }(c.Component),
            O = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth()))
            },
            j = function(e, t) {
                var a = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() + 1));
                return a.getTime() > t.getTime() ? t : a
            },
            H = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() - 1))
            },
            P = function(e) {
                var t = new Date(e.toISOString());
                return t.setUTCHours(e.getUTCHours() + 4), t
            },
            C = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleChange = function(e) {
                        var t = new Date(e.currentTarget.value),
                            n = O(t),
                            r = j(n, a.validatedCurrentDate);
                        a.props.onMonthSelection(n, r)
                    }, a.getDropdownOptions = function(e, t) {
                        for (var a = [], n = O(e); n >= t; n = H(n)) {
                            var r = n.toISOString();
                            a.push(c.createElement("option", {
                                key: r,
                                value: r
                            }, Object(M.c)(n, {
                                month: "long",
                                year: "numeric",
                                timeZone: "UTC"
                            })))
                        }
                        return a
                    }, a.validatedCurrentDate = t.currentDate < t.earliestDate ? t.earliestDate : t.currentDate, a
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return c.createElement(p.U, {
                        className: "month-select-menu"
                    }, c.createElement(p._15, {
                        onChange: this.handleChange
                    }, this.getDropdownOptions(this.validatedCurrentDate, this.props.earliestDate)))
                }, t = l.__decorate([Object(_.c)("MonthSelectMenuComponent")], t)
            }(c.Component),
            A = function(e) {
                var t, a = e.isLoading ? c.createElement(p._2, {
                    width: 90
                }) : e.title;
                if (e.isLoading) t = c.createElement(p.U, null, c.createElement(p._2, {
                    width: 140,
                    height: e.magnified ? 40 : 30
                }));
                else {
                    var n = Math.floor(e.amount),
                        r = Math.round(e.amount % 1 * 100);
                    t = c.createElement(p.U, {
                        alignItems: p.c.Start,
                        display: p.H.Flex,
                        flexDirection: p.J.Row
                    }, c.createElement(p._22, {
                        type: e.magnified ? p._27.H4 : p._27.H5
                    }, "$ "), c.createElement(p._22, {
                        type: e.magnified ? p._27.H1 : p._27.H2
                    }, Object(M.e)(n)), c.createElement(p._22, {
                        type: e.magnified ? p._27.H4 : p._27.H5
                    }, Object(M.e)(r, {
                        minimumIntegerDigits: 2
                    })))
                }
                return c.createElement(p.U, {
                    display: p.H.Flex,
                    flexDirection: p.J.Column,
                    flexGrow: 1,
                    margin: 1
                }, c.createElement(p.U, {
                    margin: e.magnified ? {
                        bottom: .5
                    } : {}
                }, c.createElement(p._22, {
                    color: p.F.Alt2,
                    type: p._27.H5
                }, a)), t)
            },
            F = function(e) {
                var t = e.revenues.reduce(function(e, t) {
                        return e + t.amount
                    }, 0),
                    a = e.revenues.map(function(t, a) {
                        return c.createElement(A, {
                            key: a,
                            isLoading: e.isLoading,
                            title: t.title + " " + e.summaryItemTitleSuffix,
                            amount: t.amount
                        })
                    });
                return c.createElement(p._18, {
                    borderMarked: !0,
                    border: !0,
                    fullWidth: !0,
                    background: p.m.Base,
                    display: p.H.Flex,
                    justifyContent: p.T.Between,
                    alignItems: p.c.Center,
                    padding: 1
                }, c.createElement(A, {
                    isLoading: e.isLoading,
                    title: e.totalTitle + " " + e.summaryItemTitleSuffix,
                    amount: t,
                    magnified: !0
                }), a)
            },
            W = a("+Znq"),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderMenu = function() {
                        if (t.props.isLoading) return c.createElement(p._2, {
                            width: 180,
                            height: 30
                        });
                        var e = t.props.members.filter(function(e) {
                                return e.checked
                            }).length,
                            a = t.props.members.length > 100 ? "Select First 100" : "Select All";
                        return c.createElement(W.a, {
                            onToggle: t.toggleOpenClose
                        }, c.createElement(p.u, {
                            dropdown: !0,
                            type: p.z.Hollow
                        }, Object(M.d)("{checkedCount, plural, one {Stats for # Team Member} other {Stats for # Team Members}}", {
                            checkedCount: e
                        }, "TeamsDashboard")), c.createElement(p.p, {
                            direction: p.q.BottomLeft,
                            noTail: !0
                        }, c.createElement(f.b, {
                            className: "team-members-select-menu__scroller"
                        }, c.createElement(p.U, null, c.createElement(p._18, {
                            borderBottom: !0,
                            padding: {
                                top: 1,
                                left: .5,
                                right: .5,
                                bottom: .5
                            }
                        }, c.createElement(p.E, {
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
                            return c.createElement(p._18, {
                                margin: {
                                    x: .5,
                                    y: 0
                                },
                                key: a.id
                            }, c.createElement(p.E, l.__assign({}, n)))
                        })))))
                    }, t.toggleOpenClose = function(e) {
                        e && JSON.stringify(t.props.members) !== t.membersPreviouslyCheckedJSON ? t.props.fetchMembersData(t.props.members) : t.membersPreviouslyCheckedJSON = JSON.stringify(t.props.members)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(p.U, {
                        className: "team-members-select-menu"
                    }, this.renderMenu())
                }, t = l.__decorate([Object(_.c)("TeamMembersSelectMenu", {
                    autoReportInteractive: !0
                })], t)
            }(c.Component),
            I = this,
            z = function(e) {
                for (var t = {}, a = 0, n = Object.keys(e); a < n.length; a++)
                    for (var r = n[a], i = 0, s = Object.keys(e[r]); i < s.length; i++)
                        for (var o = s[i], d = N(e[r][o]), u = 0, l = Object.keys(d); u < l.length; u++) {
                            var c = l[u];
                            t.hasOwnProperty(c) ? t[c].hasOwnProperty(o) ? t[c][o] += d[c] : t[c][o] = d[c] : (t[c] = {}, t[c][o] = d[c])
                        }
                return t
            },
            N = function(e) {
                var t = {};
                return e.forEach(function(e) {
                    var a = new Date(e.timestamp),
                        n = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())).toISOString();
                    t.hasOwnProperty(n) ? t[n] += e.amount : t[n] = e.amount
                }), t
            },
            R = function(e) {
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
                    for (var s = e[i], o = 0, d = Object.keys(a); o < d.length; o++) {
                        var u = d[o];
                        a[u].data.push(s[u] ? s[u] : 0)
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
            B = {
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
            J = a("WaEV"),
            V = 800,
            U = 380,
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setCanvasResolution(), this.myChart = new J(this.canvas, {
                        type: "bar",
                        data: q(this.props.datasets, this.props.timestampLabels),
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
                                        return Object(M.e)(t, {
                                            style: "currency",
                                            currency: "USD"
                                        }) + " - " + function(e) {
                                            return Object(M.c)(e, {
                                                weekday: "short",
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                timeZone: "UTC"
                                            })
                                        }(new Date(e[0].xLabel || "1970-01-01Z"))
                                    },
                                    label: function(e, t) {
                                        return " " + Object(M.e)(parseInt(e.yLabel || "0", 10), {
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
                                            return Object(M.e)(e, {
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
                    this.myChart.data = q(e.datasets, e.timestampLabels), this.myChart.update()
                }, t.prototype.render = function() {
                    var e = this;
                    return c.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    })
                }, t.prototype.setCanvasResolution = function() {
                    var e = V,
                        t = U,
                        a = Z(this.canvas.getContext("2d"));
                    this.canvas.width = e * a, this.canvas.height = t * a, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                }, t = l.__decorate([Object(_.c)("RevenueChart")], t)
            }(c.Component),
            Z = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            q = function(e, t) {
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
            K = G,
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMembers: !0,
                        members: [],
                        startTime: O(t.props.currentDate),
                        endTime: t.props.currentDate,
                        groupChecked: !0,
                        isLoadingRevenues: !0,
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
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                return this.setState({}), [2]
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t, a, n;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.props.optionalData && this.props.optionalData.members ? (e = this.props.optionalData.members, [3, 3]) : [3, 1];
                                case 1:
                                    return [4, T(this.props.teamName, y.RevenueRevealed)];
                                case 2:
                                    e = r.sent(), r.label = 3;
                                case 3:
                                    return t = e.map(function(e, t) {
                                        return l.__assign({}, e, {
                                            checked: t < 100
                                        })
                                    }), this.setState({
                                        isLoadingMembers: !1,
                                        members: t
                                    }), a = this.setState, n = {
                                        isLoadingRevenues: !1
                                    }, [4, l.__awaiter(I, void 0, void 0, function() {
                                        var e;
                                        return l.__generator(this, function(t) {
                                            return e = z(B), [2, R(e)]
                                        })
                                    })];
                                case 4:
                                    return a.apply(this, [(n.revenues = r.sent(), n)]), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [this.state.revenues.twitch_subscriptions, this.state.revenues.prime_subscriptions, this.state.revenues.bits, this.state.revenues.ads];
                    return c.createElement(g, {
                        title: v(r.Revenue),
                        titleSelector: "revenue-page-title"
                    }, c.createElement(p._18, {
                        border: !0,
                        fullWidth: !0
                    }, c.createElement(p.U, {
                        display: p.H.Flex,
                        flexDirection: p.J.Row,
                        justifyContent: p.T.Between,
                        margin: 2
                    }, c.createElement(p.U, {
                        display: p.H.Flex,
                        flexDirection: p.J.Row
                    }, c.createElement(p.U, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(E, {
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        fetchMembersData: this.fetchMembersData,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), c.createElement(C, {
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), c.createElement(p.U, null, c.createElement(p._22, {
                        color: p.F.Alt2
                    }, Object(M.d)("* All revenue values are estimated (in $USD)", "TeamsDashboard")))), c.createElement(p.U, {
                        display: p.H.Flex,
                        flexDirection: p.J.Row,
                        justifyContent: p.T.Between,
                        margin: 2
                    }, c.createElement(F, {
                        isLoading: this.state.isLoadingRevenues,
                        revenues: function(e) {
                            return e.map(function(e) {
                                return {
                                    title: e.categoryLabel,
                                    amount: e.data.reduce(function(e, t) {
                                        return e + t
                                    }, 0)
                                }
                            })
                        }(e),
                        totalTitle: Object(M.d)("Total Revenue", "TeamsDashboard"),
                        summaryItemTitleSuffix: "*"
                    })), c.createElement(p._18, {
                        padding: 2,
                        background: p.m.Base,
                        borderTop: !0
                    }, c.createElement(K, {
                        timestampLabels: this.state.revenues.timestampLabels,
                        datasets: e
                    }))))
                }, t = l.__decorate([Object(_.c)("RevenuePage", {
                    autoReportInteractive: !0,
                    destination: m.a.TeamsDashboardRevenue
                })], t)
            }(c.Component),
            Q = a("HW6M"),
            $ = {
                "side-nav-bar__option": !0,
                "side-nav-bar__option--active": !0
            },
            ee = Object(_.c)("Navbar", {
                autoReportInteractive: !0
            })(function(e) {
                var t = function(t) {
                    return Q(e.page === t ? $ : "side-nav-bar__option")
                };
                return c.createElement(p._18, {
                    display: p.H.Block,
                    className: "side-nav-bar",
                    fullHeight: !0,
                    borderRight: !0
                }, c.createElement(p.U, {
                    padding: {
                        top: 2,
                        x: 2
                    },
                    margin: {
                        bottom: .5
                    }
                }, c.createElement(p._22, {
                    type: p._27.H4,
                    fontSize: p.L.Size5
                }, Object(M.d)("Team Dashboard", "TeamsDashboard"))), c.createElement("ul", null, c.createElement("li", null, c.createElement(p.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + r.BasicInfo
                }, c.createElement(p.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(r.BasicInfo)
                }, v(r.BasicInfo)))), c.createElement("li", null, c.createElement(p.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + r.Customize
                }, c.createElement(p.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(r.Customize)
                }, v(r.Customize)))), c.createElement("li", null, c.createElement(p.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + r.Revenue,
                    "data-test-selector": "side-nav-revenue"
                }, c.createElement(p.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(r.Revenue)
                }, v(r.Revenue)))), c.createElement("li", null, c.createElement(p.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + r.Stats,
                    "data-test-selector": "side-nav-stats"
                }, c.createElement(p.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(r.Stats)
                }, v(r.Stats)))), c.createElement("li", null, c.createElement(p.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + r.Members
                }, c.createElement(p.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(r.Members)
                }, v(r.Members)))), c.createElement("li", null, c.createElement(p.S, {
                    linkTo: "/teams/" + e.teamName + "/dashboard/" + r.FeaturedChannels
                }, c.createElement(p.U, {
                    padding: {
                        x: 2,
                        y: .5
                    },
                    className: t(r.FeaturedChannels)
                }, v(r.FeaturedChannels))))))
            });
        ! function(e) {
            e.AverageViewers = "AverageViewers", e.NewFollowers = "NewFollowers", e.AverageChatters = "AverageChatters", e.ChatMessages = "ChatMessages", e.AdBreakDuration = "AdBreakDuration", e.AdBreaks = "AdBreaks"
        }(x || (x = {}));
        var te, ae, ne = (te = {}, te[x.AverageViewers] = "concurrent_viewers", te[x.NewFollowers] = "follows", te[x.AverageChatters] = "chat_activities", te[x.ChatMessages] = "chat_activities", te[x.AdBreakDuration] = "commercials", te),
            re = (ae = {}, ae[x.AverageViewers] = "line", ae[x.NewFollowers] = "line", ae[x.AverageChatters] = "bar", ae[x.ChatMessages] = "bar", ae[x.AdBreakDuration] = "bar", ae),
            ie = function(e) {
                switch (e) {
                    case x.AverageViewers:
                        return Object(M.d)("Avg. Viewers", "TeamsDashboard");
                    case x.NewFollowers:
                        return Object(M.d)("New Followers", "TeamsDashboard");
                    case x.AverageChatters:
                        return Object(M.d)("Avg. Chatters", "TeamsDashboard");
                    case x.ChatMessages:
                        return Object(M.d)("Chat Messages", "TeamsDashboard");
                    case x.AdBreakDuration:
                        return Object(M.d)("Ad Break Duration", "TeamsDashboard");
                    case x.AdBreaks:
                        return Object(M.d)("Ad Breaks", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            se = function(e) {
                return c.createElement(p.U, {
                    className: "metric-select-menu"
                }, c.createElement(p._15, {
                    value: "" + e.metric,
                    onChange: function(t) {
                        e.onChange(t.target.value)
                    }
                }, c.createElement("optgroup", {
                    label: "Ads"
                }, c.createElement("option", {
                    value: x.AdBreakDuration
                }, ie(x.AdBreakDuration))), c.createElement("optgroup", {
                    label: "Audience"
                }, c.createElement("option", {
                    value: x.AverageViewers
                }, ie(x.AverageViewers)), c.createElement("option", {
                    value: x.NewFollowers
                }, ie(x.NewFollowers))), c.createElement("optgroup", {
                    label: "Chat"
                }, c.createElement("option", {
                    value: x.AverageChatters
                }, ie(x.AverageChatters)), c.createElement("option", {
                    value: x.ChatMessages
                }, ie(x.ChatMessages)))))
            },
            oe = 800,
            de = 380,
            ue = function(e) {
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
                    return c.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    })
                }, t.prototype.rebuildChart = function(e) {
                    var t = this;
                    this.myChart && this.myChart.destroy(), this.setCanvasResolution(), this.myChart = new J(this.canvas, {
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
                                        var a = "",
                                            n = e[0];
                                        return t && t.labels && (a = t.labels[n.index || 0]),
                                            function(e) {
                                                var t = P(e);
                                                return Object(M.c)(e, {
                                                    weekday: "short",
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                    timeZone: "UTC"
                                                }) + " | " + Object(M.c)(e, {
                                                    hour: "numeric",
                                                    timeZone: "UTC"
                                                }) + " - " + Object(M.c)(t, {
                                                    hour: "numeric",
                                                    timeZone: "UTC"
                                                }) + " (4h)"
                                            }(new Date(a))
                                    },
                                    label: function(e) {
                                        return t.props.chartData.dataLabels[e.index || 0]
                                    },
                                    footer: function(e) {
                                        var a = e[0];
                                        return t.props.chartData.dataFooters[a.index || 0]
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
                                                return Object(M.c)(e, {
                                                    weekday: "long",
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
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
                    var e = oe,
                        t = de,
                        a = le(this.canvas.getContext("2d"));
                    this.canvas.width = e * a, this.canvas.height = t * a, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                }, t = l.__decorate([Object(_.c)("StatsCanvas")], t)
            }(c.Component),
            le = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            ce = ue,
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.data,
                        a = e.dataType,
                        n = {
                            chartType: re[a],
                            chartLabel: ie(a),
                            timeLabels: Object.keys(t).sort(function(e, t) {
                                return e.localeCompare(t, void 0, {
                                    numeric: !0
                                })
                            }),
                            data: [],
                            dataLabels: [],
                            dataFooters: []
                        };
                    switch (a) {
                        case x.AverageViewers:
                        case x.ChatMessages:
                        case x.AverageChatters:
                            n.data = n.timeLabels.map(function(e) {
                                return t[e].count
                            }), n.dataLabels = n.data.map(function(e) {
                                return "" + Math.floor(e)
                            }), n.dataFooters = Array(n.data.length).fill("");
                            break;
                        case x.AdBreakDuration:
                            n.data = n.timeLabels.map(function(e) {
                                return t[e].count
                            }), n.dataLabels = n.data.map(function(e) {
                                return function(e) {
                                    var t = Math.floor(e / 3600),
                                        a = Math.floor(e % 3600 / 60),
                                        n = e % 60 + "s";
                                    return a && (n = a + "m" + n), t && (n = t + "h" + n), n
                                }(e)
                            }), n.dataFooters = n.timeLabels.map(function(e) {
                                return Object(M.d)("{adBreakCount, plural, one {# Ad Break} other {# Ad Breaks}}", {
                                    adBreakCount: t[e].numberOfDatapoints
                                }, "TeamsDashboard")
                            });
                            break;
                        case x.NewFollowers:
                            n.data = n.timeLabels.reduce(function(e, a) {
                                return e.push(t[a].count + (e.length ? e[e.length - 1] : 0)), e
                            }, []), n.dataLabels = n.data.map(function(e) {
                                return "" + Math.floor(e)
                            }), n.dataFooters = Array(n.data.length).fill("");
                            break;
                        default:
                            throw new Error("Data type: " + a + " is unrecognized")
                    }
                    return c.createElement(ce, {
                        chartData: n
                    })
                }, t
            }(c.PureComponent),
            me = function(e) {
                var t = e.columnName;
                return c.createElement(p.N, null, c.createElement(p.G, {
                    cols: {
                        default: 4
                    }
                }), c.createElement(p.G, {
                    cols: {
                        default: 4
                    }
                }, c.createElement(p._22, {
                    bold: !0
                }, t)), c.createElement(p.G, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._22, {
                    bold: !0
                }, Object(M.d)("Views", "TeamsDashboard"))), c.createElement(p.G, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._22, {
                    bold: !0
                }, Object(M.d)("Percent", "TeamsDashboard"))))
            },
            _e = function(e) {
                var t = e.rowContent;
                return c.createElement(p.N, null, c.createElement(p.G, {
                    cols: {
                        default: 4
                    }
                }, c.createElement(p.U, {
                    fullHeight: !0,
                    display: p.H.Flex,
                    alignItems: p.c.Center
                }, c.createElement(p._6, {
                    value: t.percent,
                    mask: !0
                }))), c.createElement(p.G, {
                    cols: {
                        default: 4
                    }
                }, c.createElement(p._22, {
                    ellipsis: !0
                }, t.name)), c.createElement(p.G, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._22, null, Object(M.e)(t.views))), c.createElement(p.G, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(p._22, null, Object(M.e)(t.percent), "%")))
            },
            fe = function(e, t, a, n) {
                return 0 === e.length ? ge() : n && 1 === e.length ? ye(e[0].name) : Me(e, a, t)
            },
            pe = function(e, t) {
                return t > 10 ? Object(M.d)("{tableName} (Top 10)", {
                    tableName: e
                }, "TeamsDashboard") : t > 1 ? Object(M.d)("{tableName} (All)", {
                    tableName: e
                }, "TeamsDashboard") : Object(M.d)("{tableName}", {
                    tableName: e
                }, "TeamsDashboard")
            },
            ge = function() {
                return c.createElement(p._22, {
                    color: p.F.Alt2
                }, Object(M.d)("Not enough data for us to display", "TeamsDashboard"))
            },
            ye = function(e) {
                return c.createElement(p._22, null, Object(M.d)("The top viewer location was {name}", {
                    name: e
                }, "TeamsDashboard"))
            },
            Me = function(e, t, a) {
                var n = e.slice(0, 10).map(function(e, t) {
                    var n = e.name,
                        r = e.views,
                        i = Math.round(r / a * 100);
                    return c.createElement(_e, {
                        key: t,
                        rowContent: {
                            name: n,
                            views: r,
                            percent: i
                        }
                    })
                });
                return c.createElement(p.U, null, c.createElement(me, {
                    columnName: t
                }), n)
            },
            ve = function(e) {
                var t, a = e.rowData.reduce(function(e, t) {
                        return e + t.views
                    }, 0),
                    n = e.rowData.sort(function(e, t) {
                        return t.views - e.views || e.name.localeCompare(t.name)
                    });
                t = e.isLoading ? c.createElement(p._2, {
                    width: 180
                }) : pe(e.tableName, n.length);
                var r;
                return r = e.isLoading ? c.createElement(p.U, null, c.createElement(p._22, null, c.createElement(p._2, null)), c.createElement(p._22, null, c.createElement(p._2, null))) : fe(n, a, e.columnName, e.isGeo), c.createElement(p.U, {
                    display: p.H.Flex,
                    flexDirection: p.J.Column,
                    padding: 2,
                    className: "table",
                    flexWrap: p.K.NoWrap,
                    fullWidth: !0
                }, c.createElement(p.U, {
                    margin: {
                        bottom: 1
                    }
                }, c.createElement(p._22, {
                    type: p._27.H4
                }, t)), r)
            },
            be = Object(M.d)("Referrer", "TeamsDashboard"),
            Le = function(e) {
                var t = Object(M.d)("Views by Referrer", "TeamsDashboard"),
                    a = "";
                return e.internalReferral && e.internalReferral.length && (t = Object(M.d)("Views from Outside Twitch", "TeamsDashboard"), a = c.createElement(p._18, {
                    display: p.H.Flex,
                    flexGrow: 1,
                    borderBottom: !0,
                    borderLeft: !0
                }, c.createElement(ve, {
                    isLoading: e.isLoading,
                    tableName: Object(M.d)("Views from Twitch", "TeamsDashboard"),
                    columnName: be,
                    rowData: e.internalReferral
                }))), c.createElement(p._18, {
                    className: "all-tables-wrapper",
                    display: p.H.Flex,
                    flexDirection: p.J.Row,
                    borderTop: !0
                }, c.createElement(p.U, {
                    display: p.H.Flex,
                    flexGrow: 1,
                    flexDirection: p.J.Column,
                    flexWrap: p.K.NoWrap
                }, c.createElement(p._18, {
                    display: p.H.Flex,
                    flexGrow: 1,
                    borderBottom: !0
                }, c.createElement(ve, {
                    isLoading: e.isLoading,
                    tableName: Object(M.d)("Views by Location", "TeamsDashboard"),
                    columnName: Object(M.d)("Location", "TeamsDashboard"),
                    rowData: e.geographical,
                    isGeo: !0
                })), c.createElement(p._18, {
                    display: p.H.Flex,
                    flexGrow: 1
                }, c.createElement(ve, {
                    isLoading: e.isLoading,
                    tableName: Object(M.d)("Views by Platform", "TeamsDashboard"),
                    columnName: Object(M.d)("Platform", "TeamsDashboard"),
                    rowData: e.platform
                }))), c.createElement(p.U, {
                    display: p.H.Flex,
                    flexGrow: 1,
                    flexDirection: p.J.Column,
                    flexWrap: p.K.NoWrap
                }, a, c.createElement(p._18, {
                    display: p.H.Flex,
                    flexGrow: 1,
                    borderLeft: !0
                }, c.createElement(ve, {
                    isLoading: e.isLoading,
                    tableName: t,
                    columnName: be,
                    rowData: e.externalReferral
                }))))
            },
            Ye = this,
            De = function(e, t, a, n, r) {
                return l.__awaiter(Ye, void 0, void 0, function() {
                    var i, s, o, d, u, c, h;
                    return l.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                if (0 === a.length) return [2, Promise.resolve({})];
                                switch (i = "/v5/teams/" + t + "/stats/" + ne[e] + "?channel_ids=" + a + "&start_time=" + n + "&end_time=" + r, e) {
                                    case x.AverageViewers:
                                        return [3, 1];
                                    case x.NewFollowers:
                                        return [3, 3];
                                    case x.AverageChatters:
                                        return [3, 5];
                                    case x.ChatMessages:
                                        return [3, 7];
                                    case x.AdBreakDuration:
                                        return [3, 9]
                                }
                                return [3, 11];
                            case 1:
                                return o = Oe, [4, ke(i)];
                            case 2:
                                return s = o.apply(void 0, [l.sent(), n, r, He]), [3, 12];
                            case 3:
                                return d = Oe, [4, xe(i)];
                            case 4:
                                return s = d.apply(void 0, [l.sent(), n, r, Pe]), [3, 12];
                            case 5:
                                return u = Oe, [4, we(i)];
                            case 6:
                                return s = u.apply(void 0, [l.sent(), n, r, Ce]), [3, 12];
                            case 7:
                                return c = Oe, [4, we(i)];
                            case 8:
                                return s = c.apply(void 0, [l.sent(), n, r, Ae]), [3, 12];
                            case 9:
                                return h = je, [4, Te(i)];
                            case 10:
                                return s = h.apply(void 0, [l.sent(), n, r, Fe]), [3, 12];
                            case 11:
                                throw new Error("fetch type is not in StatsMetric enum");
                            case 12:
                                return [2, Se(s)]
                        }
                    })
                })
            },
            ke = function(e) {
                return l.__awaiter(Ye, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(k.c)({
                                    path: e
                                })];
                            case 1:
                                return t = a.sent(), [2, t.body ? t.body.concurrent_viewers : {}]
                        }
                    })
                })
            },
            we = function(e) {
                return l.__awaiter(Ye, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(k.c)({
                                    path: e
                                })];
                            case 1:
                                return t = a.sent(), [2, t.body ? t.body.chat_activities : {}]
                        }
                    })
                })
            },
            xe = function(e) {
                return l.__awaiter(Ye, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(k.c)({
                                    path: e
                                })];
                            case 1:
                                return t = a.sent(), [2, t.body ? t.body.follows : {}]
                        }
                    })
                })
            },
            Te = function(e) {
                return l.__awaiter(Ye, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(k.c)({
                                    path: e
                                })];
                            case 1:
                                return t = a.sent(), [2, t.body ? t.body.commercials : {}]
                        }
                    })
                })
            },
            Se = function(e) {
                for (var t = {}, a = 0, n = Object.keys(e); a < n.length; a++)
                    for (var r = 0, i = e[n[a]]; r < i.length; r++) {
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
            Oe = function(e, t, a, n) {
                for (var r = {}, i = 0, s = Object.keys(e); i < s.length; i++) {
                    var o = s[i];
                    r[o] = n(t, a, e[o])
                }
                return r
            },
            je = function(e, t, a, n) {
                for (var r = {}, i = 0, s = Object.keys(e); i < s.length; i++) {
                    var o = s[i];
                    r[o] = n(t, a, e[o])
                }
                return r
            },
            He = function(e, t, a) {
                for (var n = We(e, t).map(function(e) {
                        return l.__assign({}, e, {
                            sampleSize: 0
                        })
                    }), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === Ee(e)
                        });
                        a && 0 !== t && (a.count += t, a.sampleSize += 1)
                    }, i = 0, s = a; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.count)
                }
                return n.map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0,
                        numberOfDatapoints: 0
                    }
                })
            },
            Pe = function(e, t, a) {
                for (var n = We(e, t), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === Ee(e)
                        });
                        a && (a.count += t)
                    }, i = 0, s = a; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.count)
                }
                return n
            },
            Ce = function(e, t, a) {
                for (var n = We(e, t).map(function(e) {
                        return l.__assign({}, e, {
                            sampleSize: 0
                        })
                    }), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === Ee(e)
                        });
                        a && 0 !== t && (a.count += t, a.sampleSize += 1)
                    }, i = 0, s = a; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.participant_count)
                }
                return n.map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0,
                        numberOfDatapoints: 0
                    }
                })
            },
            Ae = function(e, t, a) {
                for (var n = We(e, t), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === Ee(e)
                        });
                        a && (a.count += t)
                    }, i = 0, s = a; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.message_count)
                }
                return n
            },
            Fe = function(e, t, a) {
                for (var n = We(e, t), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === Ee(e)
                        });
                        a && (a.count += t, a.numberOfDatapoints += 1)
                    }, i = 0, s = a; i < s.length; i++) {
                    var o = s[i];
                    r(o.timestamp, o.duration_seconds)
                }
                return n
            },
            We = function(e, t) {
                for (var a = [], n = new Date(Ee(e)), r = new Date(t); n < r;) a.push({
                    timestamp: n.toISOString(),
                    count: 0,
                    numberOfDatapoints: 0
                }), n = P(n);
                return a
            },
            Ee = function(e) {
                var t = new Date(e),
                    a = t.getUTCHours() - t.getUTCHours() % 4;
                return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), a)).toISOString()
            },
            Ie = this,
            ze = [x.AverageViewers, x.NewFollowers, x.AverageChatters, x.ChatMessages, x.AdBreaks, x.AdBreakDuration],
            Ne = Object.keys(ne),
            Re = function(e) {
                var t = encodeURIComponent(e),
                    a = document.createElement("a");
                a.href = "data:text/csv;charset=utf-8," + t, a.download = "views.csv", document.body.appendChild(a), a.click(), document.body.removeChild(a)
            },
            Be = function(e) {
                return Object.keys(e).reduce(function(t, a) {
                    return t += Ue(new Date(a), e[a])
                }, Ve())
            },
            Je = function(e, t, a, n) {
                return l.__awaiter(Ie, void 0, void 0, function() {
                    var r, i, s;
                    return l.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return r = {}, i = !1, s = [], Ne.forEach(function(r) {
                                    s.push(De(r, e, t, a, n))
                                }), [4, Promise.all(s).then(function(e) {
                                    e.forEach(function(e, t) {
                                        0 === Object.keys(e).length && (i = !0);
                                        for (var a = Ne[t], n = 0, s = Object.keys(e); n < s.length; n++) {
                                            var o = s[n];
                                            r[o] || (r[o] = {}), r[o][a] = e[o].count, a === x.AdBreakDuration && (r[o][x.AdBreaks] = e[o].numberOfDatapoints)
                                        }
                                    })
                                })];
                            case 1:
                                return o.sent(), [2, i ? {} : r]
                        }
                    })
                })
            },
            Ve = function() {
                var e = Object(M.d)("Start Time", "TeamsDashboard"),
                    t = Object(M.d)("End Time", "TeamsDashboard"),
                    a = Object(M.d)("Time Zone", "TeamsDashboard");
                return ze.reduce(function(e, t) {
                    return e + "," + ie(t)
                }, e + "," + t + "," + a) + "\n"
            },
            Ue = function(e, t) {
                var a = P(e);
                return ze.reduce(function(e, a) {
                    return e + "," + t[a]
                }, Ge(e) + "," + Ge(a) + ",UTC") + "\n"
            },
            Ge = function(e) {
                return e.getUTCFullYear() + "-" + Ze(e.getUTCMonth() + 1) + "-" + Ze(e.getUTCDate()) + " " + Ze(e.getUTCHours()) + ":" + Ze(e.getUTCMinutes()) + ":" + Ze(e.getUTCSeconds())
            },
            Ze = function(e) {
                return (e < 10 ? "0" : "") + e.toString()
            },
            qe = this,
            Ke = {
                geographical: [],
                platform: [],
                internalReferral: [],
                externalReferral: []
            },
            Xe = function(e, t, a, n) {
                return l.__awaiter(qe, void 0, void 0, function() {
                    var r, i, s, o;
                    return l.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return r = Ke, t.length < 1 ? [2, r] : (i = t.join(","), s = "/v5/teams/" + e + "/stats/video_play_demographics?channel_ids=" + i + "&start_time=" + a + "&end_time=" + n, [4, Object(k.c)({
                                    path: s
                                })]);
                            case 1:
                                return o = d.sent(), [2, o.body ? Qe(o.body) : r]
                        }
                    })
                })
            },
            Qe = function(e) {
                for (var t = e.video_play_demographics, a = {
                        geographical: [],
                        platform: [],
                        internalReferral: [],
                        externalReferral: []
                    }, r = 0, i = Object.keys(t.geo); r < i.length; r++) {
                    var s = i[r];
                    a.geographical.push({
                        name: n(s),
                        views: t.geo[s]
                    })
                }
                for (var o = 0, d = Object.keys(t.platform); o < d.length; o++) {
                    s = d[o];
                    a.platform.push({
                        name: et(s),
                        views: t.platform[s]
                    })
                }
                for (var u = 0, l = Object.keys(t.referrer.internal); u < l.length; u++) {
                    s = l[u];
                    a.internalReferral.push({
                        name: tt(s),
                        views: t.referrer.internal[s]
                    })
                }
                for (var c = 0, h = Object.keys(t.referrer.external); c < h.length; c++) {
                    s = h[c];
                    a.externalReferral.push({
                        name: at(s),
                        views: t.referrer.external[s]
                    })
                }
                return a
            },
            $e = Object(M.d)("Other", "TeamsDashboard"),
            et = function(e) {
                return {
                    unknown: Object(M.d)("Unknown", "TeamsDashboard"),
                    tv: Object(M.d)("TV", "TeamsDashboard"),
                    ios: Object(M.d)("iOS App", "TeamsDashboard"),
                    web: Object(M.d)("Web", "TeamsDashboard"),
                    android: Object(M.d)("Android App", "TeamsDashboard"),
                    mobile_web: Object(M.d)("Mobile Web", "TeamsDashboard"),
                    mobile_aggregated: Object(M.d)("Mobile", "TeamsDashboard"),
                    console: Object(M.d)("Console", "TeamsDashboard"),
                    other: $e
                }[e] || e
            },
            tt = function(e) {
                return {
                    other: $e,
                    front_page_featured: Object(M.d)("Featured Section - Front Page", "TeamsDashboard"),
                    creative_page_featured: Object(M.d)("Featured Section - Creative Page", "TeamsDashboard"),
                    hosted: Object(M.d)("Hosts", "TeamsDashboard"),
                    email_live_notification: Object(M.d)("Notifications - Email", "TeamsDashboard"),
                    onsite_notification: Object(M.d)("Notifications - Onsite", "TeamsDashboard"),
                    followed_channel: Object(M.d)("Followers", "TeamsDashboard"),
                    directory_browse: Object(M.d)("Browse Page", "TeamsDashboard"),
                    search: Object(M.d)("Searches", "TeamsDashboard"),
                    clips_live: Object(M.d)("Clips", "TeamsDashboard"),
                    friend_presence: Object(M.d)("Friends", "TeamsDashboard"),
                    top_nav_bar: Object(M.d)("Your Channel Page", "TeamsDashboard"),
                    recommended_channel: Object(M.d)("Recommendations", "TeamsDashboard"),
                    other_channel_page: Object(M.d)("Other Channel Page", "TeamsDashboard")
                }[e] || Object(M.d)("{name}'s Channel Page", {
                    name: e
                }, "TeamsDashboard")
            },
            at = function(e) {
                return (t = {
                    facebook: Object(M.d)("Facebook", "TeamsDashboard"),
                    google: Object(M.d)("Google", "TeamsDashboard"),
                    reddit: Object(M.d)("Reddit", "TeamsDashboard"),
                    youtube: Object(M.d)("Youtube", "TeamsDashboard")
                }, t["t.co"] = Object(M.d)("Twitter", "TeamsDashboard"), t.unknown = Object(M.d)("Direct/Unknown", "TeamsDashboard"), t.twitch_aggregate = Object(M.d)("Twitch", "TeamsDashboard"), t.external_aggregate = Object(M.d)("External", "TeamsDashboard"), t)[e] || e;
                var t
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
                    }, a.fetchMembersData = function() {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = this.setState, t = [{}], [4, this.fetchStats(this.state.startTime, this.state.endTime, this.state.metric)];
                                    case 1:
                                        return [2, e.apply(this, [l.__assign.apply(void 0, t.concat([a.sent()]))])]
                                }
                            })
                        })
                    }, a.fetchStats = function(e, t, n) {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var a, r, i, s, o, d;
                            return l.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return a = this.selectedMemberIDs(), r = e.toISOString(), i = t.toISOString(), s = {
                                            isLoadingDemographics: !1,
                                            demographics: Ke,
                                            data: {}
                                        }, n !== x.AverageViewers ? [3, 2] : (this.setState({
                                            isLoadingDemographics: !0
                                        }), o = s, [4, Xe(this.props.teamName, a, r, i)]);
                                    case 1:
                                        o.demographics = u.sent(), u.label = 2;
                                    case 2:
                                        return d = s, [4, De(n, this.props.teamName, a, r, i)];
                                    case 3:
                                        return d.data = u.sent(), [2, s]
                                }
                            })
                        })
                    }, a.handleCSVClick = function() {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Je(this.props.teamName, this.selectedMemberIDs(), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                    case 1:
                                        return e = a.sent(), 0 === Object.keys(e).length ? [2] : (t = Be(e), Re(t), [2])
                                }
                            })
                        })
                    }, a.handleTimeRangeChange = function(e, t) {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var a;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.fetchStats(e, t, this.state.metric)];
                                    case 1:
                                        return a = n.sent(), this.setState(l.__assign({
                                            startTime: e,
                                            endTime: t
                                        }, a)), [2]
                                }
                            })
                        })
                    }, a.onMetricChange = function(e) {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var t;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.fetchStats(this.state.startTime, this.state.endTime, e)];
                                    case 1:
                                        return t = a.sent(), this.setState(l.__assign({
                                            metric: e
                                        }, t)), [2]
                                }
                            })
                        })
                    }, a.renderViewershipTables = function() {
                        return c.createElement(Le, l.__assign({
                            isLoading: a.state.isLoadingDemographics
                        }, a.state.demographics))
                    }, a.selectedMemberIDs = function() {
                        return a.state.members.filter(function(e) {
                            return e.checked
                        }).map(function(e) {
                            return e.id
                        })
                    }, a.state = {
                        isLoadingMembers: !0,
                        members: [],
                        data: {},
                        isLoadingDemographics: !0,
                        demographics: Ke,
                        startTime: O(a.props.currentDate),
                        endTime: a.props.currentDate,
                        groupChecked: !0,
                        metric: x.AverageViewers
                    }, a
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t, a = this;
                        return l.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, T(this.props.teamName, y.StatsRevealed)];
                                case 1:
                                    return e = n.sent(), t = e.map(function(e, t) {
                                        return l.__assign({}, e, {
                                            checked: t < 100
                                        })
                                    }), this.setState({
                                        isLoadingMembers: !1,
                                        members: t
                                    }, function() {
                                        return l.__awaiter(a, void 0, void 0, function() {
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
                    return c.createElement(g, {
                        title: v(r.Stats),
                        titleSelector: "stats-page-title"
                    }, c.createElement(p._18, {
                        border: !0,
                        fullWidth: !0
                    }, c.createElement(p.U, {
                        display: p.H.Flex,
                        flexDirection: p.J.Row,
                        justifyContent: p.T.Between,
                        margin: 2
                    }, c.createElement(p.U, {
                        display: p.H.Flex,
                        flexDirection: p.J.Row
                    }, c.createElement(p.U, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(E, {
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        fetchMembersData: this.fetchMembersData,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), c.createElement(se, {
                        metric: this.state.metric,
                        onChange: this.onMetricChange
                    }), c.createElement(C, {
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), c.createElement(p.U, null, c.createElement(p.u, {
                        "data-test-selector": "export-csv-button",
                        onClick: this.handleCSVClick
                    }, Object(M.d)("Export Data", "TeamsDashboard")))), c.createElement(p.U, {
                        fullWidth: !0
                    }, c.createElement(he, {
                        data: this.state.data,
                        dataType: this.state.metric
                    })), this.state.metric === x.AverageViewers ? this.renderViewershipTables() : ""))
                }, t = l.__decorate([Object(_.c)("StatsPage", {
                    autoReportInteractive: !0,
                    destination: m.a.TeamsDashboardStats
                })], t)
            }(c.Component),
            rt = new Date(Date.UTC(2016, 0)),
            it = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.renderStatsPage = function() {
                        return c.createElement(nt, {
                            teamName: a.props.match.params.teamName,
                            earliestDataDate: a.earliestDataDate,
                            currentDate: a.currentDate
                        })
                    }, a.renderBasicInfoPage = function() {
                        return c.createElement(b, null)
                    }, a.renderCustomizePage = function() {
                        return c.createElement(L, null)
                    }, a.renderMembersPage = function() {
                        return c.createElement(S, {
                            teamName: a.props.match.params.teamName
                        })
                    }, a.renderFeaturedChannelsPage = function() {
                        return c.createElement(Y, null)
                    }, a.renderRevenuePage = function() {
                        return c.createElement(X, {
                            teamName: a.props.match.params.teamName,
                            earliestDataDate: a.earliestDataDate,
                            currentDate: a.currentDate
                        })
                    }, a.earliestDataDate = rt, a.currentDate = t.currentDate || new Date, a.currentDate < a.earliestDataDate && (a.currentDate = a.earliestDataDate), a
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? c.createElement(p.U, {
                        display: p.H.Flex,
                        flexWrap: p.K.NoWrap,
                        fullWidth: !0,
                        fullHeight: !0
                    }, c.createElement(ee, {
                        teamName: this.props.match.params.teamName,
                        page: this.props.match.params.pageName
                    }), c.createElement(p.U, {
                        fullWidth: !0
                    }, c.createElement(h.d, null, c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + r.Stats,
                        render: this.renderStatsPage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + r.BasicInfo,
                        render: this.renderBasicInfoPage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + r.Customize,
                        render: this.renderCustomizePage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + r.Members,
                        render: this.renderMembersPage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + r.FeaturedChannels,
                        render: this.renderFeaturedChannelsPage
                    }), c.createElement(h.b, {
                        path: "/teams/" + this.props.match.params.teamName + "/dashboard/" + r.Revenue,
                        render: this.renderRevenuePage
                    }), c.createElement(h.a, {
                        to: "/teams/" + this.props.match.params.teamName + "/dashboard/" + r.Stats
                    })))) : (this.props.onAnonymousVisit(), c.createElement(p.Y, {
                        fillContent: !0
                    }))
                }, t
            }(c.Component),
            st = Object(i.a)(function(e) {
                return {
                    isLoggedIn: Object(u.d)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    onAnonymousVisit: function() {
                        return Object(d.f)(o.a.DashboardPage)
                    }
                }, e)
            })(it);
        a.d(t, "TeamsDashboardRoot", function() {
            return st
        })
    },
    rBmI: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getMonth(),
                r = a - a % 3;
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
    rIuo: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    rO5X: function(e, t, a) {
        var n = a("xA5w"),
            r = a("Bb5e"),
            i = a("NKE6");
        e.exports = function(e, t) {
            var a = n(e),
                s = n(t),
                o = i(a, s),
                d = Math.abs(r(a, s));
            return a.setFullYear(a.getFullYear() - o * d), o * (d - (i(a, s) === -o))
        }
    },
    rWJA: function(e, t, a) {
        var n = a("TWHA"),
            r = a("ajDi"),
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
            var a, r = this.values,
                i = this.spaces,
                s = this.maxes,
                o = 1;
            if (this.valid = !0, "alpha" === e) o = t;
            else if (t.length) r[e] = t.slice(0, e.length), o = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (a = 0; a < e.length; a++) r[e][a] = t[e.charAt(a)];
                o = t.a
            } else if (void 0 !== t[i[e][0]]) {
                var d = i[e];
                for (a = 0; a < e.length; a++) r[e][a] = t[d[a]];
                o = t.alpha
            }
            if (r.alpha = Math.max(0, Math.min(1, void 0 === o ? r.alpha : o)), "alpha" === e) return !1;
            var u;
            for (a = 0; a < e.length; a++) u = Math.max(0, Math.min(s[e][a], r[e][a])), r[e][a] = Math.round(u);
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
                                u = i.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: d.backgroundColor ? d.backgroundColor : u(s.backgroundColor, n, l.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : u(s.borderColor, n, l.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : u(s.borderWidth, n, l.borderWidth),
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
                            Y = {
                                x: v ? -1 : Math.min(p.x * (p.x < 0 ? 1 : L), g.x * (g.x < 0 ? 1 : L)),
                                y: b ? -1 : Math.min(p.y * (p.y < 0 ? 1 : L), g.y * (g.y < 0 ? 1 : L))
                            },
                            D = {
                                x: y ? 1 : Math.max(p.x * (p.x > 0 ? 1 : L), g.x * (g.x > 0 ? 1 : L)),
                                y: M ? 1 : Math.max(p.y * (p.y > 0 ? 1 : L), g.y * (g.y > 0 ? 1 : L))
                            },
                            k = {
                                width: .5 * (D.x - Y.x),
                                height: .5 * (D.y - Y.y)
                            };
                        u = Math.min(o / k.width, d / k.height), l = {
                            x: -.5 * (D.x + Y.x),
                            y: -.5 * (D.y + Y.y)
                        }
                    }
                    a.borderWidth = t.getMaxBorderWidth(c.data), a.outerRadius = Math.max((u - a.borderWidth) / 2, 0), a.innerRadius = Math.max(h ? a.outerRadius / 100 * h : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = l.x * a.outerRadius, a.offsetY = l.y * a.outerRadius, c.total = t.calculateTotal(), t.outerRadius = a.outerRadius - a.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - a.radiusLength, 0), i.each(c.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this.chart,
                        r = n.chartArea,
                        s = n.options,
                        o = s.animation,
                        d = (r.left + r.right) / 2,
                        u = (r.top + r.bottom) / 2,
                        l = s.rotation,
                        c = s.rotation,
                        h = this.getDataset(),
                        m = a && o.animateRotate ? 0 : e.hidden ? 0 : this.calculateCircumference(h.data[t]) * (s.circumference / (2 * Math.PI)),
                        _ = a && o.animateScale ? 0 : this.innerRadius,
                        f = a && o.animateScale ? 0 : this.outerRadius,
                        p = i.valueAtIndexOrDefault;
                    i.extend(e, {
                        _datasetIndex: this.index,
                        _index: t,
                        _model: {
                            x: d + n.offsetX,
                            y: u + n.offsetY,
                            startAngle: l,
                            endAngle: c,
                            circumference: m,
                            outerRadius: f,
                            innerRadius: _,
                            label: p(h.label, t, n.data.labels[t])
                        }
                    });
                    var g = e._model;
                    this.removeHoverStyle(e), a && o.animateRotate || (g.startAngle = 0 === t ? s.rotation : this.getMeta().data[t - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), e.pivot()
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
            function t(e) {
                var t = e.options;
                return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
            }

            function a(e) {
                var t = e.options.pointLabels,
                    a = r.valueOrDefault(t.fontSize, h.defaultFontSize),
                    n = r.valueOrDefault(t.fontStyle, h.defaultFontStyle),
                    i = r.valueOrDefault(t.fontFamily, h.defaultFontFamily);
                return {
                    size: a,
                    style: n,
                    family: i,
                    font: r.fontString(a, n, i)
                }
            }

            function s(e, t, a) {
                return r.isArray(a) ? {
                    w: r.longestText(e, e.font, a),
                    h: a.length * t + 1.5 * (a.length - 1) * t
                } : {
                    w: e.measureText(a).width,
                    h: t
                }
            }

            function o(e, t, a, n, r) {
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
                return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
            }

            function u(e, t, a, n) {
                if (r.isArray(t))
                    for (var i = a.y, s = 1.5 * n, o = 0; o < t.length; ++o) e.fillText(t[o], a.x, i), i += s;
                else e.fillText(t, a.x, a.y)
            }

            function l(e, t, a) {
                90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
            }

            function c(e) {
                return r.isNumber(e) ? e : 0
            }
            var h = n.global,
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
                        var a = r.min([this.height, this.width]),
                            n = r.valueOrDefault(t.fontSize, h.defaultFontSize);
                        this.drawingArea = e.display ? a / 2 - (n / 2 + t.backdropPaddingY) : a / 2
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
                            var n, i, d, u = a(e),
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
                            for (n = 0; n < m; n++) {
                                d = e.getPointPosition(n, l), i = s(e.ctx, u.size, e.pointLabels[n] || ""), e._pointLabelSizes[n] = i;
                                var _ = e.getIndexAngle(n),
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
                    setReductions: function(e, t, a) {
                        var n = t.l / Math.sin(a.l),
                            r = Math.max(t.r - this.width, 0) / Math.sin(a.r),
                            i = -t.t / Math.cos(a.t),
                            s = -Math.max(t.b - this.height, 0) / Math.cos(a.b);
                        n = c(n), r = c(r), i = c(i), s = c(s), this.drawingArea = Math.min(Math.round(e - (n + r) / 2), Math.round(e - (i + s) / 2)), this.setCenterPoint(n, r, i, s)
                    },
                    setCenterPoint: function(e, t, a, n) {
                        var r = this.width - t - this.drawingArea,
                            i = e + this.drawingArea,
                            s = a + this.drawingArea,
                            o = this.height - n - this.drawingArea;
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
                            n = e.options,
                            i = n.gridLines,
                            s = n.ticks,
                            o = r.valueOrDefault;
                        if (n.display) {
                            var c = e.ctx,
                                m = this.getIndexAngle(0),
                                _ = o(s.fontSize, h.defaultFontSize),
                                f = o(s.fontStyle, h.defaultFontStyle),
                                p = o(s.fontFamily, h.defaultFontFamily),
                                g = r.fontString(_, f, p);
                            r.each(e.ticks, function(a, n) {
                                if (n > 0 || s.reverse) {
                                    var d = e.getDistanceFromCenterForValue(e.ticksAsNumbers[n]);
                                    if (i.display && 0 !== n && function(e, a, n, i) {
                                            var s = e.ctx;
                                            if (s.strokeStyle = r.valueAtIndexOrDefault(a.color, i - 1), s.lineWidth = r.valueAtIndexOrDefault(a.lineWidth, i - 1), e.options.gridLines.circular) s.beginPath(), s.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI), s.closePath(), s.stroke();
                                            else {
                                                var o = t(e);
                                                if (0 === o) return;
                                                s.beginPath();
                                                var d = e.getPointPosition(0, n);
                                                s.moveTo(d.x, d.y);
                                                for (var u = 1; u < o; u++) d = e.getPointPosition(u, n), s.lineTo(d.x, d.y);
                                                s.closePath(), s.stroke()
                                            }
                                        }(e, i, d, n), s.display) {
                                        var u = o(s.fontColor, h.defaultFontColor);
                                        if (c.font = g, c.save(), c.translate(e.xCenter, e.yCenter), c.rotate(m), s.showLabelBackdrop) {
                                            var l = c.measureText(a).width;
                                            c.fillStyle = s.backdropColor, c.fillRect(-l / 2 - s.backdropPaddingX, -d - _ / 2 - s.backdropPaddingY, l + 2 * s.backdropPaddingX, _ + 2 * s.backdropPaddingY)
                                        }
                                        c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = u, c.fillText(a, 0, -d), c.restore()
                                    }
                                }
                            }), (n.angleLines.display || n.pointLabels.display) && function(e) {
                                var n = e.ctx,
                                    i = r.valueOrDefault,
                                    s = e.options,
                                    o = s.angleLines,
                                    c = s.pointLabels;
                                n.lineWidth = o.lineWidth, n.strokeStyle = o.color;
                                var m = e.getDistanceFromCenterForValue(s.ticks.reverse ? e.min : e.max),
                                    _ = a(e);
                                n.textBaseline = "top";
                                for (var f = t(e) - 1; f >= 0; f--) {
                                    if (o.display) {
                                        var p = e.getPointPosition(f, m);
                                        n.beginPath(), n.moveTo(e.xCenter, e.yCenter), n.lineTo(p.x, p.y), n.stroke(), n.closePath()
                                    }
                                    if (c.display) {
                                        var g = e.getPointPosition(f, m + 5),
                                            y = i(c.fontColor, h.defaultFontColor);
                                        n.font = _.font, n.fillStyle = y;
                                        var M = e.getIndexAngle(f),
                                            v = r.toDegrees(M);
                                        n.textAlign = d(v), l(v, e._pointLabelSizes[f], g), u(n, e.pointLabels[f] || "", g, _.size)
                                    }
                                }
                            }(e)
                        }
                    }
                });
            e.scaleService.registerScaleType("radialLinear", _, m)
        }
    },
    sdTe: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
    sqLM: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ssxj: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    svD2: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    t6pj: function(e, t, a) {
        var n = a("YRFD"),
            r = a("xA5w"),
            i = a("25hp"),
            s = a("uyaC"),
            o = 1440,
            d = 43200,
            u = 525600;
        e.exports = function(e, t, a) {
            var l = a || {},
                c = n(e, t),
                h = l.locale,
                m = s.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (m = h.distanceInWords.localize);
            var _, f, p = {
                addSuffix: Boolean(l.addSuffix),
                comparison: c
            };
            c > 0 ? (_ = r(e), f = r(t)) : (_ = r(t), f = r(e));
            var g, y, M, v, b, L = Math[l.partialMethod ? String(l.partialMethod) : "floor"],
                Y = i(f, _),
                D = f.getTimezoneOffset() - _.getTimezoneOffset(),
                k = L(Y / 60) - D;
            if ("s" === (g = l.unit ? String(l.unit) : k < 1 ? "s" : k < 60 ? "m" : k < o ? "h" : k < d ? "d" : k < u ? "M" : "Y")) return m("xSeconds", Y, p);
            if ("m" === g) return m("xMinutes", k, p);
            if ("h" === g) return y = L(k / 60), m("xHours", y, p);
            if ("d" === g) return M = L(k / o), m("xDays", M, p);
            if ("M" === g) return v = L(k / d), m("xMonths", v, p);
            if ("Y" === g) return b = L(k / u), m("xYears", b, p);
            throw new Error("Unknown unit: " + g)
        }
    },
    t8zS: function(e, t, a) {
        var n = a("nk30");
        e.exports = function(e) {
            return n(e, {
                weekStartsOn: 1
            })
        }
    },
    tkWw: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    tzHd: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    "u/4p": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = t ? Number(t.weekStartsOn) || 0 : 0,
                r = n(e),
                i = r.getDay(),
                s = (i < a ? 7 : 0) + i - a;
            return r.setDate(r.getDate() - s), r.setHours(0, 0, 0, 0), r
        }
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
    uSe8: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ulq9: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
            "use strict";

            function t(e, t, a) {
                return "m" === a ? t ? "минута" : "минуту" : e + " " + function(e, t) {
                    var a = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
                }({
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[a], +e)
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
        })
    },
    upln: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    uslO: function(e, t, a) {
        function n(e) {
            return a(r(e))
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
        n.keys = function() {
            return Object.keys(i)
        }, n.resolve = r, e.exports = n, n.id = "uslO"
    },
    uwZN: function(e, t, a) {
        var n = a("7yyf");
        e.exports = function(e) {
            return n(new Date, e)
        }
    },
    uyaC: function(e, t, a) {
        var n = a("Ptqd"),
            r = a("jQas");
        e.exports = {
            distanceInWords: n(),
            format: r()
        }
    },
    vBvW: function(e, t, a) {
        var n = a("mXYp");
        e.exports = function(e, t) {
            return n(Date.now(), e, t)
        }
    },
    ve2D: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 2 === n(e).getDay()
        }
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
        ! function(e, t) {
            t(a("PJh5"))
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
    w4by: function(e, t, a) {
        var n = a("6Zhv"),
            r = 36e5;
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, a * r)
        }
    },
    w9tK: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
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
            ForYou: "for-you",
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
    wAFH: function(e, t, a) {
        var n = a("6Zhv");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
    },
    wGD1: function(e, t, a) {
        "use strict";
        var n = a("rWJA"),
            r = a("iO9N"),
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
                    a = this._start,
                    r = this._view;
                return t && 1 !== e ? (r || (r = this._view = {}), a || (a = this._start = {}), function(e, t, a, r) {
                    var i, s, o, d, u, l, c, h, m, _ = Object.keys(a);
                    for (i = 0, s = _.length; i < s; ++i)
                        if (o = _[i], l = a[o], t.hasOwnProperty(o) || (t[o] = l), (d = t[o]) !== l && "_" !== o[0]) {
                            if (e.hasOwnProperty(o) || (e[o] = d), u = e[o], (c = typeof l) == typeof u)
                                if ("string" === c) {
                                    if ((h = n(u)).valid && (m = n(l)).valid) {
                                        t[o] = m.mix(h, r).rgbString();
                                        continue
                                    }
                                } else if ("number" === c && isFinite(u) && isFinite(l)) {
                                t[o] = u + (l - u) * r;
                                continue
                            }
                            t[o] = l
                        }
                }(a, r, t, e), this) : (this._view = t, this._start = null, this)
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
        ! function(e, t) {
            t(a("PJh5"))
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
    wPWQ: function(e, t, a) {
        "use strict";
        e.exports = function(e) {
            e.Bubble = function(t, a) {
                return a.type = "bubble", new e(t, a)
            }
        }
    },
    wPo5: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setHours(r), a
        }
    },
    wPpW: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                    return function(t, r, i, s) {
                        var o = a(t),
                            d = n[e][a(t)];
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
    wT5f: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
        }(0, function(e) {
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
    wajf: function(e, t, a) {
        var n = a("xA5w"),
            r = a("D6ie");
        e.exports = function(e, t) {
            var a = n(e),
                i = Number(t),
                s = r(a) - i;
            return a.setDate(a.getDate() - 7 * s), a
        }
    },
    wiYS: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var a, r, i = n(e).getTime();
            return t.forEach(function(e, t) {
                var s = n(e),
                    o = Math.abs(i - s.getTime());
                (void 0 === a || o < r) && (a = t, r = o)
            }), a
        }
    },
    wuJz: function(e, t, a) {
        e.exports = {
            addDays: a("Jvcu"),
            addHours: a("w4by"),
            addISOYears: a("oNnY"),
            addMilliseconds: a("6Zhv"),
            addMinutes: a("NSOL"),
            addMonths: a("3EIC"),
            addQuarters: a("1rLR"),
            addSeconds: a("nfOx"),
            addWeeks: a("7EGB"),
            addYears: a("4Z4o"),
            areRangesOverlapping: a("2lB6"),
            closestIndexTo: a("wiYS"),
            closestTo: a("Tv4R"),
            compareAsc: a("NKE6"),
            compareDesc: a("YRFD"),
            differenceInCalendarDays: a("nizW"),
            differenceInCalendarISOWeeks: a("0aH9"),
            differenceInCalendarISOYears: a("9Jn5"),
            differenceInCalendarMonths: a("orNa"),
            differenceInCalendarQuarters: a("Jtuq"),
            differenceInCalendarWeeks: a("Q2rx"),
            differenceInCalendarYears: a("Bb5e"),
            differenceInDays: a("gAt4"),
            differenceInHours: a("kjlQ"),
            differenceInISOYears: a("qNYo"),
            differenceInMilliseconds: a("G7No"),
            differenceInMinutes: a("3nPg"),
            differenceInMonths: a("GI7G"),
            differenceInQuarters: a("XFzU"),
            differenceInSeconds: a("25hp"),
            differenceInWeeks: a("6SO/"),
            differenceInYears: a("rO5X"),
            distanceInWords: a("mXYp"),
            distanceInWordsStrict: a("t6pj"),
            distanceInWordsToNow: a("vBvW"),
            eachDay: a("M9Ev"),
            endOfDay: a("MIQa"),
            endOfHour: a("bbdo"),
            endOfISOWeek: a("SZZR"),
            endOfISOYear: a("K7ZZ"),
            endOfMinute: a("LU20"),
            endOfMonth: a("xKy+"),
            endOfQuarter: a("zQFw"),
            endOfSecond: a("+sSA"),
            endOfToday: a("0LAu"),
            endOfTomorrow: a("HXCM"),
            endOfWeek: a("I7cV"),
            endOfYear: a("Epw6"),
            endOfYesterday: a("0YGC"),
            format: a("Eoz/"),
            getDate: a("3g9B"),
            getDay: a("Mbb9"),
            getDayOfYear: a("ymQ7"),
            getDaysInMonth: a("Mdww"),
            getDaysInYear: a("Javx"),
            getHours: a("8Gpr"),
            getISODay: a("AZvW"),
            getISOWeek: a("D6ie"),
            getISOWeeksInYear: a("fUo1"),
            getISOYear: a("zZbG"),
            getMilliseconds: a("024F"),
            getMinutes: a("JNsx"),
            getMonth: a("l85J"),
            getOverlappingDaysInRanges: a("8QR2"),
            getQuarter: a("lQzg"),
            getSeconds: a("eKpK"),
            getTime: a("cwv1"),
            getYear: a("nZeo"),
            isAfter: a("fK0I"),
            isBefore: a("gDPd"),
            isDate: a("607n"),
            isEqual: a("sdTe"),
            isFirstDayOfMonth: a("6udH"),
            isFriday: a("YPf8"),
            isFuture: a("6CZb"),
            isLastDayOfMonth: a("kDuD"),
            isLeapYear: a("b7g8"),
            isMonday: a("kkVd"),
            isPast: a("eCZG"),
            isSameDay: a("f4ga"),
            isSameHour: a("qPxx"),
            isSameISOWeek: a("Be26"),
            isSameISOYear: a("4LxA"),
            isSameMinute: a("Moxe"),
            isSameMonth: a("f+sD"),
            isSameQuarter: a("7yyf"),
            isSameSecond: a("5qwL"),
            isSameWeek: a("8KV+"),
            isSameYear: a("Qxz6"),
            isSaturday: a("6axH"),
            isSunday: a("ZUMa"),
            isThisHour: a("z3wv"),
            isThisISOWeek: a("A2zO"),
            isThisISOYear: a("hUHO"),
            isThisMinute: a("Qbo9"),
            isThisMonth: a("cONr"),
            isThisQuarter: a("uwZN"),
            isThisSecond: a("hj5Y"),
            isThisWeek: a("pe7V"),
            isThisYear: a("kRs6"),
            isThursday: a("yu3m"),
            isToday: a("GvNH"),
            isTomorrow: a("0oN5"),
            isTuesday: a("ve2D"),
            isValid: a("dH3X"),
            isWednesday: a("e/EH"),
            isWeekend: a("4OFc"),
            isWithinRange: a("4zIR"),
            isYesterday: a("1gtq"),
            lastDayOfISOWeek: a("t8zS"),
            lastDayOfISOYear: a("hico"),
            lastDayOfMonth: a("Akl5"),
            lastDayOfQuarter: a("T/Ln"),
            lastDayOfWeek: a("nk30"),
            lastDayOfYear: a("xLg3"),
            max: a("11Bn"),
            min: a("aHtT"),
            parse: a("xA5w"),
            setDate: a("/dIK"),
            setDay: a("SHOI"),
            setDayOfYear: a("CVNg"),
            setHours: a("wPo5"),
            setISODay: a("YPjl"),
            setISOWeek: a("wajf"),
            setISOYear: a("Uu+E"),
            setMilliseconds: a("+/J2"),
            setMinutes: a("danj"),
            setMonth: a("balU"),
            setQuarter: a("jy2q"),
            setSeconds: a("ToRI"),
            setYear: a("a7Cs"),
            startOfDay: a("WNGz"),
            startOfHour: a("LLTj"),
            startOfISOWeek: a("3znZ"),
            startOfISOYear: a("iRXW"),
            startOfMinute: a("M5Oo"),
            startOfMonth: a("7Xwz"),
            startOfQuarter: a("rBmI"),
            startOfSecond: a("VaeB"),
            startOfToday: a("1udo"),
            startOfTomorrow: a("gUEJ"),
            startOfWeek: a("u/4p"),
            startOfYear: a("JURy"),
            startOfYesterday: a("mSFb"),
            subDays: a("cA+x"),
            subHours: a("fo7E"),
            subISOYears: a("MKc+"),
            subMilliseconds: a("wAFH"),
            subMinutes: a("kIFi"),
            subMonths: a("7Swd"),
            subQuarters: a("oke8"),
            subSeconds: a("9r5b"),
            subWeeks: a("cw9o"),
            subYears: a("0UyA")
        }
    },
    xA5w: function(e, t, a) {
        function n(e, t, a) {
            t = t || 0, a = a || 0;
            var n = new Date(0);
            n.setUTCFullYear(e, 0, 4);
            var r = 7 * t + a + 1 - (n.getUTCDay() || 7);
            return n.setUTCDate(n.getUTCDate() + r), n
        }
        var r = a("607n"),
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
            Y = /^(Z)$/,
            D = /^([+-])(\d{2})$/,
            k = /^([+-])(\d{2}):?(\d{2})$/;
        e.exports = function(e, t) {
            if (r(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var a = (t || {}).additionalDigits;
            a = null == a ? o : Number(a);
            var w = function(e) {
                    var t, a = {},
                        n = e.split(d);
                    if (u.test(n[0]) ? (a.date = null, t = n[0]) : (a.date = n[0], t = n[1]), t) {
                        var r = L.exec(t);
                        r ? (a.time = t.replace(r[1], ""), a.timezone = r[1]) : a.time = t
                    }
                    return a
                }(e),
                x = function(e, t) {
                    var a, n = c[t],
                        r = m[t];
                    if (a = h.exec(e) || r.exec(e)) {
                        var i = a[1];
                        return {
                            year: parseInt(i, 10),
                            restDateString: e.slice(i.length)
                        }
                    }
                    if (a = l.exec(e) || n.exec(e)) {
                        var s = a[1];
                        return {
                            year: 100 * parseInt(s, 10),
                            restDateString: e.slice(s.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(w.date, a),
                T = x.year,
                S = function(e, t) {
                    if (null === t) return null;
                    var a, r, i, s;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (a = _.exec(e)) return r = new Date(0), i = parseInt(a[1], 10) - 1, r.setUTCFullYear(t, i), r;
                    if (a = f.exec(e)) {
                        r = new Date(0);
                        var o = parseInt(a[1], 10);
                        return r.setUTCFullYear(t, 0, o), r
                    }
                    if (a = p.exec(e)) {
                        r = new Date(0), i = parseInt(a[1], 10) - 1;
                        var d = parseInt(a[2], 10);
                        return r.setUTCFullYear(t, i, d), r
                    }
                    if (a = g.exec(e)) return s = parseInt(a[1], 10) - 1, n(t, s);
                    if (a = y.exec(e)) {
                        s = parseInt(a[1], 10) - 1;
                        var u = parseInt(a[2], 10) - 1;
                        return n(t, s, u)
                    }
                    return null
                }(x.restDateString, T);
            if (S) {
                var O, j = S.getTime(),
                    H = 0;
                return w.time && (H = function(e) {
                    var t, a, n;
                    if (t = M.exec(e)) return (a = parseFloat(t[1].replace(",", "."))) % 24 * i;
                    if (t = v.exec(e)) return a = parseInt(t[1], 10), n = parseFloat(t[2].replace(",", ".")), a % 24 * i + n * s;
                    if (t = b.exec(e)) {
                        a = parseInt(t[1], 10), n = parseInt(t[2], 10);
                        var r = parseFloat(t[3].replace(",", "."));
                        return a % 24 * i + n * s + 1e3 * r
                    }
                    return null
                }(w.time)), w.timezone ? O = function(e) {
                    var t, a;
                    return (t = Y.exec(e)) ? 0 : (t = D.exec(e)) ? (a = 60 * parseInt(t[2], 10), "+" === t[1] ? -a : a) : (t = k.exec(e)) ? (a = 60 * parseInt(t[2], 10) + parseInt(t[3], 10), "+" === t[1] ? -a : a) : 0
                }(w.timezone) : (O = new Date(j + H).getTimezoneOffset(), O = new Date(j + H + O * s).getTimezoneOffset()), new Date(j + H + O * s)
            }
            return new Date(e)
        }
    },
    "xKy+": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getMonth();
            return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    xLg3: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getFullYear();
            return t.setFullYear(a + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    "xne+": function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    yRTJ: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
    ymQ7: function(e, t, a) {
        var n = a("xA5w"),
            r = a("JURy"),
            i = a("nizW");
        e.exports = function(e) {
            var t = n(e);
            return i(t, r(t)) + 1
        }
    },
    yu3m: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 4 === n(e).getDay()
        }
    },
    z3hR: function(e, t, a) {
        ! function(e, t) {
            t(a("PJh5"))
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
                return e /= 1e3, a(e)
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
        })
    },
    z3wv: function(e, t, a) {
        var n = a("qPxx");
        e.exports = function(e) {
            return n(new Date, e)
        }
    },
    zQFw: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getMonth(),
                r = a - a % 3 + 3;
            return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, a) {
        var n = a("xA5w"),
            r = a("3znZ");
        e.exports = function(e) {
            var t = n(e),
                a = t.getFullYear(),
                i = new Date(0);
            i.setFullYear(a + 1, 0, 4), i.setHours(0, 0, 0, 0);
            var s = r(i),
                o = new Date(0);
            o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0);
            var d = r(o);
            return t.getTime() >= s.getTime() ? a + 1 : t.getTime() >= d.getTime() ? a : a - 1
        }
    }
});
//# sourceMappingURL=pages.teams-dashboard-1667694903f7d3480e5e337dc3fb3b58.js.map