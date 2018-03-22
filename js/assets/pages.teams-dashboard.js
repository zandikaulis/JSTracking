webpackJsonp([36], {
    "+/J2": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setMilliseconds(r), a
        }
    },
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
    "+sSA": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setMilliseconds(999), t
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

            function i(e, t, i, o) {
                var s = e + " ";
                return 1 === e ? s + a(0, t, i[0], o) : t ? s + (n(e) ? r(i)[1] : r(i)[0]) : o ? s + r(i)[1] : s + (n(e) ? r(i)[1] : r(i)[2])
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
                    this._model = o(this._options), this._lastActive = []
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
                    var e = this._options.callbacks,
                        t = e.beforeFooter.apply(this, arguments),
                        n = e.footer.apply(this, arguments),
                        r = e.afterFooter.apply(this, arguments),
                        i = [];
                    return i = a(i = a(i = a(i, t), n), r)
                },
                update: function(t) {
                    var a, n, r, s, d, u, l, c = this,
                        m = c._options,
                        h = c._model,
                        _ = c._model = o(m),
                        f = c._active,
                        p = c._data,
                        g = {
                            xAlign: h.xAlign,
                            yAlign: h.yAlign
                        },
                        y = {
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
                        var D = [];
                        for (a = 0, n = f.length; a < n; ++a) D.push((r = f[a], s = void 0, d = void 0, void 0, void 0, s = r._xScale, d = r._yScale || r._scale, u = r._index, l = r._datasetIndex, {
                            xLabel: s ? s.getLabelForIndex(u, l) : "",
                            yLabel: d ? d.getLabelForIndex(u, l) : "",
                            index: u,
                            datasetIndex: l,
                            x: r._model.x,
                            y: r._model.y
                        }));
                        m.filter && (D = D.filter(function(e) {
                            return m.filter(e, p)
                        })), m.itemSort && (D = D.sort(function(e, t) {
                            return m.itemSort(e, t, p)
                        })), i.each(D, function(e) {
                            b.push(m.callbacks.labelColor.call(c, e, c._chart)), L.push(m.callbacks.labelTextColor.call(c, e, c._chart))
                        }), _.title = c.getTitle(D, p), _.beforeBody = c.getBeforeBody(D, p), _.body = c.getBody(D, p), _.afterBody = c.getAfterBody(D, p), _.footer = c.getFooter(D, p), _.x = Math.round(v.x), _.y = Math.round(v.y), _.caretPadding = m.caretPadding, _.labelColors = b, _.labelTextColors = L, _.dataPoints = D, y = function(e, t, a) {
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
                        }(_, M = function(e, t) {
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
                            var h = 0,
                                _ = function(e) {
                                    r = Math.max(r, a.measureText(e).width + h)
                                };
                            return a.font = i.fontString(l, t._titleFontStyle, t._titleFontFamily), i.each(t.title, _), a.font = i.fontString(c, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), _), h = t.displayColors ? c + 2 : 0, i.each(o, function(e) {
                                i.each(e.before, _), i.each(e.lines, _), i.each(e.after, _)
                            }), h = 0, a.font = i.fontString(m, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, _), {
                                width: r += 2 * t.xPadding,
                                height: n
                            }
                        }(this, _), g = function(e, t) {
                            var a, n, r, i, o, s = e._model,
                                d = e._chart,
                                u = e._chart.chartArea,
                                l = "center",
                                c = "center";
                            s.y < t.height ? c = "top" : s.y > d.height - t.height && (c = "bottom");
                            var m = (u.left + u.right) / 2,
                                h = (u.top + u.bottom) / 2;
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
                            }, o = function(e) {
                                return e <= h ? "top" : "bottom"
                            }, a(s.x) ? (l = "left", r(s.x) && (l = "center", c = o(s.y))) : n(s.x) && (l = "right", i(s.x) && (l = "center", c = o(s.y)));
                            var _ = e._options;
                            return {
                                xAlign: _.xAlign ? _.xAlign : l,
                                yAlign: _.yAlign ? _.yAlign : c
                            }
                        }(this, M))
                    } else _.opacity = 0;
                    return _.xAlign = g.xAlign, _.yAlign = g.yAlign, _.x = y.x, _.y = y.y, _.width = M.width, _.height = M.height, _.caretX = v.x, _.caretY = v.y, c._model = _, t && m.custom && m.custom.call(c, _), c
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
                        h = e.x,
                        _ = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === m) s = _ + p / 2, "left" === c ? (r = (n = h) - u, i = n, o = s + u, d = s - u) : (r = (n = h + f) + u, i = n, o = s - u, d = s + u);
                    else if ("left" === c ? (n = (r = h + l + u) - u, i = r + u) : "right" === c ? (n = (r = h + f - l - u) - u, i = r + u) : (n = (r = h + f / 2) - u, i = r + u), "top" === m) s = (o = _) - u, d = o;
                    else {
                        s = (o = _ + p) + u, d = o;
                        var g = i;
                        i = n, n = g
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
                        var s, d, u = a.titleFontSize,
                            l = a.titleSpacing;
                        for (n.fillStyle = t(a.titleFontColor, r), n.font = i.fontString(u, a._titleFontStyle, a._titleFontFamily), s = 0, d = o.length; s < d; ++s) n.fillText(o[s], e.x, e.y), e.y += u + l, s + 1 === o.length && (e.y += a.titleMarginBottom - l)
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
                    n.fillStyle = t(a.bodyFontColor, r), i.each(a.beforeBody, l);
                    var c = a.displayColors;
                    u = c ? o + 2 : 0, i.each(d, function(s, d) {
                        var u = t(a.labelTextColors[d], r);
                        n.fillStyle = u, i.each(s.before, l), i.each(s.lines, function(i) {
                            c && (n.fillStyle = t(a.legendColorBackground, r), n.fillRect(e.x, e.y, o, o), n.lineWidth = 1, n.strokeStyle = t(a.labelColors[d].borderColor, r), n.strokeRect(e.x, e.y, o, o), n.fillStyle = t(a.labelColors[d].backgroundColor, r), n.fillRect(e.x + 1, e.y + 1, o - 2, o - 2), n.fillStyle = u), l(i)
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
                o = n(t),
                s = a.getTime() - a.getTimezoneOffset() * r,
                d = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - d) / i)
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
                    var a, n, r, o = this.chart,
                        s = o.data.datasets[this.index],
                        d = e.custom || {},
                        u = o.options.elements.point,
                        l = i.options.resolve,
                        c = s.data[t],
                        m = {},
                        h = {
                            chart: o,
                            dataIndex: t,
                            dataset: s,
                            datasetIndex: this.index
                        },
                        _ = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                    for (a = 0, n = _.length; a < n; ++a) m[r = _[a]] = l([d[r], s[r], u[r]], h, t);
                    return m.radius = l([d.radius, c ? c.r : void 0, s.radius, u.radius], h, t), m
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
                            o = n.valueOrDefault,
                            s = e.isHorizontal();

                        function d(t) {
                            return s ? t.xAxisID === e.id : t.yAxisID === e.id
                        }
                        e.min = null, e.max = null, e.minNotZero = null;
                        var u = t.stacked;
                        if (void 0 === u && n.each(i, function(e, t) {
                                if (!u) {
                                    var a = r.getDatasetMeta(t);
                                    r.isDatasetVisible(t) && d(a) && void 0 !== a.stack && (u = !0)
                                }
                            }), t.stacked || u) {
                            var l = {};
                            n.each(i, function(a, i) {
                                var o = r.getDatasetMeta(i),
                                    s = [o.type, void 0 === t.stacked && void 0 === o.stack ? i : "", o.stack].join(".");
                                r.isDatasetVisible(i) && d(o) && (void 0 === l[s] && (l[s] = []), n.each(a.data, function(a, n) {
                                    var r = l[s],
                                        i = +e.getRightValue(a);
                                    isNaN(i) || o.data[n].hidden || (r[n] = r[n] || 0, t.relativePoints ? r[n] = 100 : r[n] += i)
                                }))
                            }), n.each(l, function(t) {
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
                        e.min = o(a.min, e.min), e.max = o(a.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(n.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(n.log10(e.max)) + 1)) : (e.min = 1, e.max = 10))
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
                            o = i.start,
                            s = +i.getRightValue(e),
                            d = i.options.ticks;
                        return i.isHorizontal() ? (r = n.log10(i.end) - n.log10(o), 0 === s ? a = i.left : (t = i.width, a = i.left + t / r * (n.log10(s) - n.log10(o)))) : (t = i.height, 0 !== o || d.reverse ? 0 === i.end && d.reverse ? (r = n.log10(i.start) - n.log10(i.minNotZero), a = s === i.end ? i.top : s === i.minNotZero ? i.top + .02 * t : i.top + .02 * t + .98 * t / r * (n.log10(s) - n.log10(i.minNotZero))) : 0 === s ? a = d.reverse ? i.top : i.bottom : (r = n.log10(i.end) - n.log10(o), t = i.height, a = i.bottom - t / r * (n.log10(s) - n.log10(o))) : (r = n.log10(i.end) - n.log10(i.minNotZero), a = s === o ? i.bottom : s === i.minNotZero ? i.bottom - .02 * t : i.bottom - .02 * t - .98 * t / r * (n.log10(s) - n.log10(i.minNotZero)))), a
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
    "2lB6": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t, a, r) {
            var i = n(e).getTime(),
                o = n(t).getTime(),
                s = n(a).getTime(),
                d = n(r).getTime();
            if (i > o || s > d) throw new Error("The start of the range cannot be after the end of the range");
            return i < d && s < o
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
            o = i._enabled ? i : r;
        e.exports = n.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, o)
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
    "3EIC": function(e, t, a) {
        var n = a("xA5w"),
            r = a("Mdww");
        e.exports = function(e, t) {
            var a = n(e),
                i = Number(t),
                o = a.getMonth() + i,
                s = new Date(0);
            s.setFullYear(a.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var d = r(s);
            return a.setMonth(o, Math.min(d, a.getDate())), a
        }
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
                    return function(t, a, i, o) {
                        var s = n(t),
                            d = r[e][n(t)];
                        return 2 === s && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                o = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
            e.defineLocale("ar", {
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
        })(a("PJh5"))
    },
    "3g9B": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getDate()
        }
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
                return null == e
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
                var i, o, s;
                if (r.isArray(e))
                    if (o = e.length, n)
                        for (i = o - 1; i >= 0; i--) t.call(a, e[i], i);
                    else
                        for (i = 0; i < o; i++) t.call(a, e[i], i);
                else if (r.isObject(e))
                    for (o = (s = Object.keys(e)).length, i = 0; i < o; i++) t.call(a, e[s[i]], s[i])
            },
            arrayEquals: function(e, t) {
                var a, n, i, o;
                if (!e || !t || e.length !== t.length) return !1;
                for (a = 0, n = e.length; a < n; ++a)
                    if (i = e[a], o = t[a], i instanceof Array && o instanceof Array) {
                        if (!r.arrayEquals(i, o)) return !1
                    } else if (i !== o) return !1;
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
                    o = a[e];
                r.isObject(i) && r.isObject(o) ? r.merge(i, o, n) : t[e] = r.clone(o)
            },
            _mergerIf: function(e, t, a) {
                var n = t[e],
                    i = a[e];
                r.isObject(n) && r.isObject(i) ? r.mergeIf(n, i) : t.hasOwnProperty(e) || (t[e] = r.clone(i))
            },
            merge: function(e, t, a) {
                var n, i, o, s, d, u = r.isArray(t) ? t : [t],
                    l = u.length;
                if (!r.isObject(e)) return e;
                for (n = (a = a || {}).merger || r._merger, i = 0; i < l; ++i)
                    if (t = u[i], r.isObject(t))
                        for (d = 0, s = (o = Object.keys(t)).length; d < s; ++d) n(o[d], e, t, a);
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
                    if (null != e && (a = n.isHorizontal() ? e.x : e.y), void 0 !== a || void 0 !== e && isNaN(t)) {
                        e = a || e;
                        var o = n.getLabels().indexOf(e);
                        t = -1 !== o ? o : t
                    }
                    if (n.isHorizontal()) {
                        var s = n.width / i,
                            d = s * (t - n.minIndex);
                        return r && (d += s / 2), n.left + Math.round(d)
                    }
                    var u = n.height / i,
                        l = u * (t - n.minIndex);
                    return r && (l += u / 2), n.top + Math.round(l)
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
                    var n, r, i, o, s, d = this.descriptors(e),
                        u = d.length;
                    for (n = 0; n < u; ++n)
                        if ("function" == typeof(s = (i = (r = d[n]).plugin)[t]) && ((o = [e].concat(a || [])).push(r.options), !1 === s.apply(i, o))) return !1;
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
                o = n(a).getTime();
            if (i > o) throw new Error("The start of the range cannot be after the end of the range");
            return r >= i && r <= o
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
    "5qwL": function(e, t, a) {
        var n = a("VaeB");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getTime() === r.getTime()
        }
    },
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
            r = a("9u8h");
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
            var o = n(e).getTime(),
                s = n(t).getTime(),
                d = n(a).getTime(),
                u = n(i).getTime();
            if (o > s || d > u) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < u && d < s)) return 0;
            var l = (u > s ? s : u) - (d < o ? o : d);
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
                    var a, n, r, o = this,
                        s = o.getMeta(),
                        d = s.dataset,
                        u = s.data || [],
                        l = o.chart.options,
                        c = l.elements.line,
                        m = o.getScaleForId(s.yAxisID),
                        h = o.getDataset(),
                        _ = t(h, l);
                    for (_ && (r = d.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), d._scale = m, d._datasetIndex = o.index, d._children = u, d._model = {
                            spanGaps: h.spanGaps ? h.spanGaps : l.spanGaps,
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
                        }, d.pivot()), a = 0, n = u.length; a < n; ++a) o.updateElement(u[a], a, e);
                    for (_ && 0 !== d._model.tension && o.updateBezierControlPoints(), a = 0, n = u.length; a < n; ++a) u[a].pivot()
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
                        h = o.getScaleForId(s.xAxisID),
                        _ = o.chart.options.elements.point;
                    void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = h.getPixelForValue("object" == typeof c ? c : NaN, t, l), r = a ? m.getBasePixel() : o.calculatePointY(c, t, l), e._xScale = h, e._yScale = m, e._datasetIndex = l, e._index = t, e._model = {
                        x: n,
                        y: r,
                        skip: d.skip || isNaN(n) || isNaN(r),
                        radius: d.radius || i.valueAtIndexOrDefault(u.pointRadius, t, _.radius),
                        pointStyle: d.pointStyle || i.valueAtIndexOrDefault(u.pointStyle, t, _.pointStyle),
                        backgroundColor: o.getPointBackgroundColor(e, t),
                        borderColor: o.getPointBorderColor(e, t),
                        borderWidth: o.getPointBorderWidth(e, t),
                        tension: s.dataset._model ? s.dataset._model.tension : 0,
                        steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                        hitRadius: d.hitRadius || i.valueAtIndexOrDefault(u.pointHitRadius, t, _.hitRadius)
                    }
                },
                calculatePointY: function(e, t, a) {
                    var n, r, i, o = this.chart,
                        s = this.getMeta(),
                        d = this.getScaleForId(s.yAxisID),
                        u = 0,
                        l = 0;
                    if (d.options.stacked) {
                        for (n = 0; n < a; n++)
                            if (r = o.data.datasets[n], "line" === (i = o.getDatasetMeta(n)).type && i.yAxisID === d.id && o.isDatasetVisible(n)) {
                                var c = Number(d.getRightValue(r.data[t]));
                                c < 0 ? l += c || 0 : u += c || 0
                            }
                        var m = Number(d.getRightValue(e));
                        return m < 0 ? d.getPixelForValue(l + m) : d.getPixelForValue(u + m)
                    }
                    return d.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    var e, t, a, n, r = this.getMeta(),
                        o = this.chart.chartArea,
                        s = r.data || [];

                    function d(e, t, a) {
                        return Math.max(Math.min(e, a), t)
                    }
                    if (r.dataset._model.spanGaps && (s = s.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === r.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(s);
                    else
                        for (e = 0, t = s.length; e < t; ++e) a = s[e]._model, n = i.splineCurve(i.previousItem(s, e)._model, a, i.nextItem(s, e)._model, r.dataset._model.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
                    if (this.chart.options.elements.line.capBezierPoints)
                        for (e = 0, t = s.length; e < t; ++e)(a = s[e]._model).controlPointPreviousX = d(a.controlPointPreviousX, o.left, o.right), a.controlPointPreviousY = d(a.controlPointPreviousY, o.top, o.bottom), a.controlPointNextX = d(a.controlPointNextX, o.left, o.right), a.controlPointNextY = d(a.controlPointNextY, o.top, o.bottom)
                },
                draw: function() {
                    var e = this.chart,
                        a = this.getMeta(),
                        n = a.data || [],
                        r = e.chartArea,
                        o = n.length,
                        s = 0;
                    for (i.canvas.clipArea(e.ctx, r), t(this.getDataset(), e.options) && a.dataset.draw(), i.canvas.unclipArea(e.ctx); s < o; ++s) n[s].draw(r)
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
                    return new URL(e, r.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var t, a, r, i;
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
                                    return r = n.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = r), [3, 4];
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
                    var a = r.o.store.getState(),
                        n = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
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
                if ("start" === r ? i = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === r ? i = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? i = a.scaleZero : n.getBasePosition ? i = n.getBasePosition() : n.getBasePixel && (i = n.getBasePixel()), null != i) {
                    if (void 0 !== i.x && void 0 !== i.y) return i;
                    if ("number" == typeof i && isFinite(i)) return {
                        x: (t = n.isHorizontal()) ? i : null,
                        y: t ? null : i
                    }
                }
                return null
            }

            function o(e, t, a) {
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

            function s(t) {
                var a = t.fill,
                    n = "dataset";
                return !1 === a ? null : (isFinite(a) || (n = "boundary"), e[n](t))
            }

            function d(e) {
                return e && !e.skip
            }

            function u(e, t, a, n, r) {
                var o;
                if (n && r) {
                    for (e.moveTo(t[0].x, t[0].y), o = 1; o < n; ++o) i.canvas.lineTo(e, t[o - 1], t[o]);
                    for (e.lineTo(a[r - 1].x, a[r - 1].y), o = r - 1; o > 0; --o) i.canvas.lineTo(e, a[o], a[o - 1], !0)
                }
            }
            return {
                id: "filler",
                afterDatasetsUpdate: function(e, n) {
                    var i, d, u, l, c = (e.data.datasets || []).length,
                        m = n.propagate,
                        h = [];
                    for (d = 0; d < c; ++d) l = null, (u = (i = e.getDatasetMeta(d)).dataset) && u._model && u instanceof r.Line && (l = {
                        visible: e.isDatasetVisible(d),
                        fill: t(u, d, c),
                        chart: e,
                        el: u
                    }), i.$filler = l, h.push(l);
                    for (d = 0; d < c; ++d)(l = h[d]) && (l.fill = o(h, d, m), l.boundary = a(l), l.mapper = s(l))
                },
                beforeDatasetDraw: function(e, t) {
                    var a = t.meta.$filler;
                    if (a) {
                        var r = e.ctx,
                            o = a.el,
                            s = o._view,
                            l = o._children || [],
                            c = a.mapper,
                            m = s.backgroundColor || n.global.defaultColor;
                        c && m && l.length && (i.canvas.clipArea(r, e.chartArea), function(e, t, a, n, r, i) {
                            var o, s, l, c, m, h, _, f = t.length,
                                p = n.spanGaps,
                                g = [],
                                y = [],
                                M = 0,
                                v = 0;
                            for (e.beginPath(), o = 0, s = f + !!i; o < s; ++o) m = a(c = t[l = o % f]._view, l, n), h = d(c), _ = d(m), h && _ ? (M = g.push(c), v = y.push(m)) : M && v && (p ? (h && g.push(c), _ && y.push(m)) : (u(e, g, y, M, v), M = v = 0, g = [], y = []));
                            u(e, g, y, M, v), e.closePath(), e.fillStyle = r, e.fill()
                        }(r, l, c, s, m, o._loop), i.canvas.unclipArea(r))
                    }
                }
            }
        }
    },
    A5K9: function(e, t) {},
    AFDx: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            r = a("wGD1");

        function i(e) {
            return void 0 !== e._view.width
        }

        function o(e) {
            var t, a, n, r, o = e._view;
            if (i(e)) {
                var s = o.width / 2;
                t = o.x - s, a = o.x + s, n = Math.min(o.y, o.base), r = Math.max(o.y, o.base)
            } else {
                var d = o.height / 2;
                t = Math.min(o.x, o.base), a = Math.max(o.x, o.base), n = o.y - d, r = o.y + d
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
                var e, t, a, n, r, i, o, s = this._chart.ctx,
                    d = this._view,
                    u = d.borderWidth;
                if (d.horizontal ? (e = d.base, t = d.x, a = d.y - d.height / 2, n = d.y + d.height / 2, r = t > e ? 1 : -1, i = 1, o = d.borderSkipped || "left") : (e = d.x - d.width / 2, t = d.x + d.width / 2, a = d.y, r = 1, i = (n = d.base) > a ? 1 : -1, o = d.borderSkipped || "bottom"), u) {
                    var l = Math.min(Math.abs(e - t), Math.abs(a - n)),
                        c = (u = u > l ? l : u) / 2,
                        m = e + ("left" !== o ? c * r : 0),
                        h = t + ("right" !== o ? -c * r : 0),
                        _ = a + ("top" !== o ? c * i : 0),
                        f = n + ("bottom" !== o ? -c * i : 0);
                    m !== h && (a = _, n = f), _ !== f && (e = m, t = h)
                }
                s.beginPath(), s.fillStyle = d.backgroundColor, s.strokeStyle = d.borderColor, s.lineWidth = u;
                var p = [
                        [e, n],
                        [e, a],
                        [t, a],
                        [t, n]
                    ],
                    g = ["bottom", "left", "top", "right"].indexOf(o, 0);

                function y(e) {
                    return p[(g + e) % 4]
                } - 1 === g && (g = 0);
                var M = y(0);
                s.moveTo(M[0], M[1]);
                for (var v = 1; v < 4; v++) M = y(v), s.lineTo(M[0], M[1]);
                s.fill(), u && s.stroke()
            },
            height: function() {
                var e = this._view;
                return e.base - e.y
            },
            inRange: function(e, t) {
                var a = !1;
                if (this._view) {
                    var n = o(this);
                    a = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                }
                return a
            },
            inLabelRange: function(e, t) {
                if (!this._view) return !1;
                var a = o(this);
                return i(this) ? e >= a.left && e <= a.right : t >= a.top && t <= a.bottom
            },
            inXRange: function(e) {
                var t = o(this);
                return e >= t.left && e <= t.right
            },
            inYRange: function(e) {
                var t = o(this);
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
    AZvW: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e).getDay();
            return 0 === t && (t = 7), t
        }
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
    Akl5: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e),
                a = t.getMonth();
            return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(0, 0, 0, 0), t
        }
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
    Bb5e: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = n(t);
            return a.getFullYear() - r.getFullYear()
        }
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
    Be26: function(e, t, a) {
        var n = a("8KV+");
        e.exports = function(e, t) {
            return n(e, t, {
                weekStartsOn: 1
            })
        }
    },
    BoWu: function(e, t, a) {
        "use strict";
        a.d(t, "c", function() {
            return i
        }), a.d(t, "b", function() {
            return o
        }), a.d(t, "a", function() {
            return s
        });
        var n = a("6sO2"),
            r = function() {
                return Object(n.d)("Other", "DemographicsData")
            },
            i = function(e) {
                return {
                    unknown: Object(n.d)("Unknown", "DemographicsData"),
                    tv: Object(n.d)("TV", "DemographicsData"),
                    ios: Object(n.d)("iOS App", "DemographicsData"),
                    web: Object(n.d)("Web", "DemographicsData"),
                    android: Object(n.d)("Android App", "DemographicsData"),
                    mobile_web: Object(n.d)("Mobile Web", "DemographicsData"),
                    mobile_aggregated: Object(n.d)("Mobile", "DemographicsData"),
                    console: Object(n.d)("Console", "DemographicsData"),
                    other: r()
                }[e] || e
            },
            o = function(e) {
                return {
                    other: r(),
                    front_page_featured: Object(n.d)("Featured Section - Front Page", "DemographicsData"),
                    creative_page_featured: Object(n.d)("Featured Section - Creative Page", "DemographicsData"),
                    hosted: Object(n.d)("Hosts", "DemographicsData"),
                    email_live_notification: Object(n.d)("Notifications - Email", "DemographicsData"),
                    onsite_notification: Object(n.d)("Notifications - Onsite", "DemographicsData"),
                    followed_channel: Object(n.d)("Followers", "DemographicsData"),
                    directory_browse: Object(n.d)("Browse Page", "DemographicsData"),
                    search: Object(n.d)("Searches", "DemographicsData"),
                    clips_live: Object(n.d)("Clips", "DemographicsData"),
                    friend_presence: Object(n.d)("Friends", "DemographicsData"),
                    top_nav_bar: Object(n.d)("Your Channel Page", "DemographicsData"),
                    recommended_channel: Object(n.d)("Recommendations", "DemographicsData"),
                    other_channel_page: Object(n.d)("Other Channel Page", "DemographicsData")
                }[e] || Object(n.d)("{name}'s Channel Page", {
                    name: e
                }, "DemographicsData")
            },
            s = function(e) {
                var t;
                return ((t = {
                    facebook: Object(n.d)("Facebook", "DemographicsData"),
                    google: Object(n.d)("Google", "DemographicsData"),
                    reddit: Object(n.d)("Reddit", "DemographicsData"),
                    youtube: Object(n.d)("Youtube", "DemographicsData")
                })["t.co"] = Object(n.d)("Twitter", "DemographicsData"), t.unknown = Object(n.d)("Direct/Unknown", "DemographicsData"), t.twitch_aggregate = Object(n.d)("Twitch", "DemographicsData"), t.external_aggregate = Object(n.d)("External", "DemographicsData"), t)[e] || e
            }
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
            o = 6048e5;
        e.exports = function(e) {
            var t = n(e),
                a = r(t).getTime() - i(t).getTime();
            return Math.round(a / o) + 1
        }
    },
    DN1M: function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            r = "$chartjs",
            i = "chartjs-",
            o = i + "render-monitor",
            s = i + "render-animation",
            d = ["animationstart", "webkitAnimationStart"],
            u = {
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

        function l(e, t) {
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
            var u, l, c, h, f = e[r] || (e[r] = {}),
                p = f.resizer = function(e) {
                    var t = document.createElement("div"),
                        a = i + "size-monitor",
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
                    return m(r, "scroll", s.bind(r, "expand")), m(o, "scroll", s.bind(o, "shrink")), t
                }((u = function() {
                    if (f.resizer) return t(_("resize", a))
                }, c = !1, h = [], function() {
                    h = Array.prototype.slice.call(arguments), l = l || this, c || (c = !0, n.requestAnimFrame.call(window, function() {
                        c = !1, u.apply(l, h)
                    }))
                }));
            ! function(e, t) {
                var a = e[r] || (e[r] = {}),
                    i = a.renderProxy = function(e) {
                        e.animationName === s && t()
                    };
                n.each(d, function(t) {
                    m(e, t, i)
                }), a.reflow = !!e.offsetParent, e.classList.add(o)
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
                    }), delete t.renderProxy), e.classList.remove(o)
                }(e), a && a.parentNode && a.parentNode.removeChild(a)
        }
        e.exports = {
            _enabled: "undefined" != typeof window && "undefined" != typeof document,
            initialize: function() {
                var e, t, a, n = "from{opacity:0.99}to{opacity:1}";
                t = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + o + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", a = (e = this)._style || document.createElement("style"), e._style || (e._style = a, t = "/* Chart.js */\n" + t, a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a)), a.appendChild(document.createTextNode(t))
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
                        var o = l(e, "width");
                        void 0 !== o && (e.width = o)
                    }
                    if (null === n || "" === n)
                        if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                        else {
                            var s = l(e, "height");
                            void 0 !== o && (e.height = s)
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
                    var o = a[r] || (a[r] = {});
                    m(i, t, (o.proxies || (o.proxies = {}))[e.id + "_" + t] = function(t) {
                        a(function(e, t) {
                            var a = u[e.type] || e.type,
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
            o = Number.MIN_SAFE_INTEGER || -9007199254740991,
            s = Number.MAX_SAFE_INTEGER || 9007199254740991,
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
            u = Object.keys(d);

        function l(e, t) {
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
                    for (var n, r, i, o = 0, s = e.length - 1; o >= 0 && o <= s;) {
                        if (r = e[(n = o + s >> 1) - 1] || null, i = e[n], !r) return {
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
                }(e, t, a),
                i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                o = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                s = o[t] - i[t],
                d = s ? (a - i[t]) / s : 0,
                u = (o[n] - i[n]) * d;
            return i[n] + u
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
            for (var t = u.indexOf(e) + 1, a = u.length; t < a; ++t)
                if (d[u[t]].common) return u[t]
        }

        function p(e, t, a, r) {
            var o, l = r.time,
                c = l.unit || function(e, t, a, n) {
                    var r, i, o, l = u.length;
                    for (r = u.indexOf(e); r < l - 1; ++r)
                        if (o = (i = d[u[r]]).steps ? i.steps[i.steps.length - 1] : s, i.common && Math.ceil((a - t) / (o * i.size)) <= n) return u[r];
                    return u[l - 1]
                }(l.minUnit, e, t, a),
                m = f(c),
                h = i.valueOrDefault(l.stepSize, l.unitStepSize),
                _ = "week" === c && l.isoWeekday,
                p = r.ticks.major.enabled,
                g = d[c],
                y = n(e),
                M = n(t),
                v = [];
            for (h || (h = function(e, t, a, n) {
                    var r, i, o, s = t - e,
                        u = d[a],
                        l = u.size,
                        c = u.steps;
                    if (!c) return Math.ceil(s / ((n || 1) * l));
                    for (r = 0, i = c.length; r < i && (o = c[r], !(Math.ceil(s / (l * o)) <= n)); ++r);
                    return o
                }(e, t, c, a)), _ && (y = y.isoWeekday(_), M = M.isoWeekday(_)), y = y.startOf(_ ? "day" : c), (M = M.startOf(_ ? "day" : c)) < t && M.add(1, c), o = n(y), p && m && !_ && !l.round && (o.startOf(m), o.add(~~((y - o) / (g.size * h)) * h, c)); o < M; o.add(h, c)) v.push(+o);
            return v.push(+o), v
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
                    var e, t, a, r, d, u, m = this,
                        h = m.chart,
                        f = m.options.time,
                        p = s,
                        g = o,
                        y = [],
                        M = [],
                        v = [];
                    for (e = 0, a = h.data.labels.length; e < a; ++e) v.push(_(h.data.labels[e], m));
                    for (e = 0, a = (h.data.datasets || []).length; e < a; ++e)
                        if (h.isDatasetVisible(e))
                            if (d = h.data.datasets[e].data, i.isObject(d[0]))
                                for (M[e] = [], t = 0, r = d.length; t < r; ++t) u = _(d[t], m), y.push(u), M[e][t] = u;
                            else y.push.apply(y, v), M[e] = v.slice(0);
                    else M[e] = [];
                    v.length && (v = c(v).sort(l), p = Math.min(p, v[0]), g = Math.max(g, v[v.length - 1])), y.length && (y = c(y).sort(l), p = Math.min(p, y[0]), g = Math.max(g, y[y.length - 1])), p = _(f.min, m) || p, g = _(f.max, m) || g, p = p === s ? +n().startOf("day") : p, g = g === o ? +n().endOf("day") + 1 : g, m.min = Math.min(p, g), m.max = Math.max(p + 1, g), m._horizontal = m.isHorizontal(), m._table = [], m._timestamps = {
                        data: y,
                        datasets: M,
                        labels: v
                    }
                },
                buildTicks: function() {
                    var e, t, a, r = this,
                        i = r.min,
                        o = r.max,
                        s = r.options,
                        l = s.time,
                        c = [],
                        h = [];
                    switch (s.ticks.source) {
                        case "data":
                            c = r._timestamps.data;
                            break;
                        case "labels":
                            c = r._timestamps.labels;
                            break;
                        case "auto":
                        default:
                            c = p(i, o, r.getLabelCapacity(i), s)
                    }
                    for ("ticks" === s.bounds && c.length && (i = c[0], o = c[c.length - 1]), i = _(l.min, r) || i, o = _(l.max, r) || o, e = 0, t = c.length; e < t; ++e)(a = c[e]) >= i && a <= o && h.push(a);
                    return r.min = i, r.max = o, r._unit = l.unit || function(e, t, a, r) {
                            var i, o, s = n.duration(n(r).diff(n(a)));
                            for (i = u.length - 1; i >= u.indexOf(t); i--)
                                if (o = u[i], d[o].common && s.as(o) >= e.length) return o;
                            return u[t ? u.indexOf(t) : 0]
                        }(h, l.minUnit, r.min, r.max), r._majorUnit = f(r._unit), r._table = function(e, t, a, n) {
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
                        }(r._timestamps.data, i, o, s.distribution), r._offsets = function(e, t, a, n, r) {
                            var i, o, s = 0,
                                d = 0;
                            return r.offset && t.length && (r.time.min || (i = t.length > 1 ? t[1] : n, o = t[0], s = (m(e, "time", i, "pos") - m(e, "time", o, "pos")) / 2), r.time.max || (i = t[t.length - 1], o = t.length > 1 ? t[t.length - 2] : a, d = (m(e, "time", i, "pos") - m(e, "time", o, "pos")) / 2)), {
                                left: s,
                                right: d
                            }
                        }(r._table, h, i, o, s),
                        function(e, t) {
                            var a, r, i, o, s = [];
                            for (a = 0, r = e.length; a < r; ++a) i = e[a], o = !!t && i === +n(i).startOf(t), s.push({
                                value: i,
                                major: o
                            });
                            return s
                        }(h, r._majorUnit)
                },
                getLabelForIndex: function(e, t) {
                    var a = this.chart.data,
                        n = this.options.time,
                        r = a.labels && e < a.labels.length ? a.labels[e] : "",
                        o = a.datasets[t].data[e];
                    return i.isObject(o) && (r = this.getRightValue(o)), n.tooltipFormat && (r = h(r, n).format(n.tooltipFormat)), r
                },
                tickFormatFunction: function(e, t, a, n) {
                    var r = this.options,
                        o = e.valueOf(),
                        s = r.time.displayFormats,
                        d = s[this._unit],
                        u = this._majorUnit,
                        l = s[u],
                        c = e.clone().startOf(u).valueOf(),
                        m = r.ticks.major,
                        h = m.enabled && u && l && o === c,
                        _ = e.format(n || (h ? l : d)),
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
                        o = m(t._table, "pos", i, "time");
                    return n(o)
                },
                getLabelWidth: function(e) {
                    var t = this.options.ticks,
                        a = this.ctx.measureText(e).width,
                        n = i.toRadians(t.maxRotation),
                        o = Math.cos(n),
                        s = Math.sin(n);
                    return a * o + i.valueOrDefault(t.fontSize, r.global.defaultFontSize) * s
                },
                getLabelCapacity: function(e) {
                    var t = this,
                        a = t.options.time.displayFormats.millisecond,
                        r = t.tickFormatFunction(n(e), 0, [], a),
                        i = t.getLabelWidth(r),
                        o = t.isHorizontal() ? t.width : t.height;
                    return Math.floor(o / i)
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
    "Eoz/": function(e, t, a) {
        var n = a("ymQ7"),
            r = a("D6ie"),
            i = a("zZbG"),
            o = a("xA5w"),
            s = a("dH3X"),
            d = a("uyaC");
        var u = {
            M: function(e) {
                return e.getMonth() + 1
            },
            MM: function(e) {
                return c(e.getMonth() + 1, 2)
            },
            Q: function(e) {
                return Math.ceil((e.getMonth() + 1) / 3)
            },
            D: function(e) {
                return e.getDate()
            },
            DD: function(e) {
                return c(e.getDate(), 2)
            },
            DDD: function(e) {
                return n(e)
            },
            DDDD: function(e) {
                return c(n(e), 3)
            },
            d: function(e) {
                return e.getDay()
            },
            E: function(e) {
                return e.getDay() || 7
            },
            W: function(e) {
                return r(e)
            },
            WW: function(e) {
                return c(r(e), 2)
            },
            YY: function(e) {
                return c(e.getFullYear(), 4).substr(2)
            },
            YYYY: function(e) {
                return c(e.getFullYear(), 4)
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
                return c(e.getHours(), 2)
            },
            h: function(e) {
                var t = e.getHours();
                return 0 === t ? 12 : t > 12 ? t % 12 : t
            },
            hh: function(e) {
                return c(u.h(e), 2)
            },
            m: function(e) {
                return e.getMinutes()
            },
            mm: function(e) {
                return c(e.getMinutes(), 2)
            },
            s: function(e) {
                return e.getSeconds()
            },
            ss: function(e) {
                return c(e.getSeconds(), 2)
            },
            S: function(e) {
                return Math.floor(e.getMilliseconds() / 100)
            },
            SS: function(e) {
                return c(Math.floor(e.getMilliseconds() / 10), 2)
            },
            SSS: function(e) {
                return c(e.getMilliseconds(), 3)
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
            var a = e > 0 ? "-" : "+",
                n = Math.abs(e),
                r = n % 60;
            return a + c(Math.floor(n / 60), 2) + t + c(r, 2)
        }

        function c(e, t) {
            for (var a = Math.abs(e).toString(); a.length < t;) a = "0" + a;
            return a
        }
        e.exports = function(e, t, a) {
            var n = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                r = (a || {}).locale,
                i = d.format.formatters,
                l = d.format.formattingTokensRegExp;
            r && r.format && r.format.formatters && (i = r.format.formatters, r.format.formattingTokensRegExp && (l = r.format.formattingTokensRegExp));
            var c = o(e);
            return s(c) ? function(e, t, a) {
                var n, r, i, o = e.match(a),
                    s = o.length;
                for (n = 0; n < s; n++) r = t[o[n]] || u[o[n]], o[n] = r || ((i = o[n]).match(/\[[\s\S]/) ? i.replace(/^\[|]$/g, "") : i.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", a = 0; a < s; a++) o[a] instanceof Function ? t += o[a](e, u) : t += o[a];
                    return t
                }
            }(n, i, l)(c) : "Invalid Date"
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
                    var o = Math.min(i, n / 2),
                        s = Math.min(i, r / 2);
                    e.moveTo(t + o, a), e.lineTo(t + n - o, a), e.quadraticCurveTo(t + n, a, t + n, a + s), e.lineTo(t + n, a + r - s), e.quadraticCurveTo(t + n, a + r, t + n - o, a + r), e.lineTo(t + o, a + r), e.quadraticCurveTo(t, a + r, t, a + r - s), e.lineTo(t, a + s), e.quadraticCurveTo(t, a, t + o, a)
                } else e.rect(t, a, n, r)
            },
            drawPoint: function(e, t, a, n, r) {
                var i, o, s, d, u, l;
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
                                u = (o = 3 * a / Math.sqrt(3)) * Math.sqrt(3) / 2,
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
                                    h = r - c,
                                    _ = Math.SQRT2 * a;e.beginPath(),
                                this.roundedRect(e, m, h, _, _, a / 2),
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
                var e, t, a, n, r = this._view,
                    s = this._chart.ctx,
                    d = r.spanGaps,
                    u = this._children.slice(),
                    l = o.elements.line,
                    c = -1;
                for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = r.borderCapStyle || l.borderCapStyle, s.setLineDash && s.setLineDash(r.borderDash || l.borderDash), s.lineDashOffset = r.borderDashOffset || l.borderDashOffset, s.lineJoin = r.borderJoinStyle || l.borderJoinStyle, s.lineWidth = r.borderWidth || l.borderWidth, s.strokeStyle = r.borderColor || o.defaultColor, s.beginPath(), c = -1, e = 0; e < u.length; ++e) t = u[e], a = i.previousItem(u, e), n = t._view, 0 === e ? n.skip || (s.moveTo(n.x, n.y), c = e) : (a = -1 === c ? a : u[c], n.skip || (c !== e - 1 && !d || -1 === c ? s.moveTo(n.x, n.y) : i.canvas.lineTo(s, a._view, t._view), c = e));
                s.stroke(), s.restore()
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
                                o = t.datasets[0],
                                s = r.data[n].custom || {},
                                d = i.valueAtIndexOrDefault,
                                u = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: s.backgroundColor ? s.backgroundColor : d(o.backgroundColor, n, u.backgroundColor),
                                strokeStyle: s.borderColor ? s.borderColor : d(o.borderColor, n, u.borderColor),
                                lineWidth: s.borderWidth ? s.borderWidth : d(o.borderWidth, n, u.borderWidth),
                                hidden: isNaN(o.data[n]) || r.data[n].hidden,
                                index: n
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, r, i = t.index,
                        o = this.chart;
                    for (a = 0, n = (o.data.datasets || []).length; a < n; ++a)(r = o.getDatasetMeta(a)).data[i].hidden = !r.data[i].hidden;
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
                    for (var n = this, r = n.chart, o = n.getDataset(), s = r.options, d = s.animation, u = r.scale, l = r.data.labels, c = n.calculateCircumference(o.data[t]), m = u.xCenter, h = u.yCenter, _ = 0, f = n.getMeta(), p = 0; p < t; ++p) isNaN(o.data[p]) || f.data[p].hidden || ++_;
                    var g = s.startAngle,
                        y = e.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[t]),
                        M = g + c * _,
                        v = M + (e.hidden ? 0 : c),
                        b = d.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[t]);
                    i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: u,
                        _model: {
                            x: m,
                            y: h,
                            innerRadius: 0,
                            outerRadius: a ? b : y,
                            startAngle: a && d.animateRotate ? g : M,
                            endAngle: a && d.animateRotate ? g : v,
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
                    var t, a, n = this.chart,
                        r = this.getIndexScale().options.stacked,
                        i = void 0 === e ? n.data.datasets.length : e + 1,
                        o = [];
                    for (t = 0; t < i; ++t)(a = n.getDatasetMeta(t)).bar && n.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === o.indexOf(a.stack) || void 0 === r && (void 0 === a.stack || -1 === o.indexOf(a.stack))) && o.push(a.stack);
                    return o.length
                },
                getStackIndex: function(e) {
                    return this.getStackCount(e) - 1
                },
                getRuler: function() {
                    var e, t, a = this.getIndexScale(),
                        n = this.getStackCount(),
                        r = this.index,
                        i = [],
                        o = a.isHorizontal(),
                        s = o ? a.left : a.top,
                        d = s + (o ? a.width : a.height);
                    for (e = 0, t = this.getMeta().data.length; e < t; ++e) i.push(a.getPixelForValue(null, e, r));
                    return {
                        pixels: i,
                        start: s,
                        end: d,
                        stackCount: n,
                        scale: a
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var a, n, r, i, o, s, d = this.chart,
                        u = this.getMeta(),
                        l = this.getValueScale(),
                        c = d.data.datasets,
                        m = l.getRightValue(c[e].data[t]),
                        h = l.options.stacked,
                        _ = u.stack,
                        f = 0;
                    if (h || void 0 === h && void 0 !== _)
                        for (a = 0; a < e; ++a)(n = d.getDatasetMeta(a)).bar && n.stack === _ && n.controller.getValueScaleId() === l.id && d.isDatasetVisible(a) && (r = l.getRightValue(c[a].data[t]), (m < 0 && r < 0 || m >= 0 && r > 0) && (f += r));
                    return i = l.getPixelForValue(f), {
                        size: s = ((o = l.getPixelForValue(f + m)) - i) / 2,
                        base: i,
                        head: o,
                        center: o + s / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, a) {
                    var n, r, o, s, d, u = a.scale.options,
                        l = this.getStackIndex(e),
                        c = a.pixels,
                        m = c[t],
                        h = c.length,
                        _ = a.start,
                        f = a.end;
                    return 1 === h ? (n = m > _ ? m - _ : f - m, r = m < f ? f - m : m - _) : (t > 0 && (n = (m - c[t - 1]) / 2, t === h - 1 && (r = n)), t < h - 1 && (r = (c[t + 1] - m) / 2, 0 === t && (n = r))), d = (s = ((o = n * u.categoryPercentage) + r * u.categoryPercentage) / a.stackCount) * u.barPercentage, m -= o, m += s * l, {
                        size: d = Math.min(i.valueOrDefault(u.barThickness, d), i.valueOrDefault(u.maxBarThickness, 1 / 0)),
                        base: m += (s - d) / 2,
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
                        o = 0;
                    for (i.canvas.clipArea(e.ctx, e.chartArea); o < r; ++o) isNaN(t.getRightValue(n.data[o])) || a[o].draw();
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
    GI7G: function(e, t, a) {
        var n = a("xA5w"),
            r = a("orNa"),
            i = a("NKE6");
        e.exports = function(e, t) {
            var a = n(e),
                o = n(t),
                s = i(a, o),
                d = Math.abs(r(a, o));
            return a.setMonth(a.getMonth() - s * d), s * (d - (i(a, o) === -s))
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
            var a = t && Number(t.weekStartsOn) || 0,
                r = n(e),
                i = r.getDay(),
                o = 6 + (i < a ? -7 : 0) - (i - a);
            return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
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
                        i.push(s), 10 === ++r && (r = 1, ++a), s = r * Math.pow(10, a)
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
    },
    J8WN: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return s
        });
        var n = a("TToO"),
            r = a("GiK3"),
            i = (a.n(r), a("Odds")),
            o = a("yU6t"),
            s = (a.n(o), function(e) {
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
                return n.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(i.Q, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(i.Y, {
                        position: i._11.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: i._53.Above
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
        var n = a("iO9N");

        function r(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : n.getRelativePosition(e, t)
        }

        function i(e, t) {
            var a, n, r, i, o;
            for (n = 0, i = e.data.datasets.length; n < i; ++n)
                if (e.isDatasetVisible(n))
                    for (r = 0, o = (a = e.getDatasetMeta(n)).data.length; r < o; ++r) {
                        var s = a.data[r];
                        s._view.skip || t(s)
                    }
        }

        function o(e, t) {
            var a = [];
            return i(e, function(e) {
                e.inRange(t.x, t.y) && a.push(e)
            }), a
        }

        function s(e, t, a, n) {
            var r = Number.POSITIVE_INFINITY,
                o = [];
            return i(e, function(e) {
                if (!a || e.inRange(t.x, t.y)) {
                    var i = e.getCenterPoint(),
                        s = n(t, i);
                    s < r ? (o = [e], r = s) : s === r && o.push(e)
                }
            }), o
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

        function u(e, t, a) {
            var n = r(t, e);
            a.axis = a.axis || "x";
            var i = d(a.axis),
                u = a.intersect ? o(e, n) : s(e, n, !1, i),
                l = [];
            return u.length ? (e.data.datasets.forEach(function(t, a) {
                if (e.isDatasetVisible(a)) {
                    var n = e.getDatasetMeta(a).data[u[0]._index];
                    n && !n._view.skip && l.push(n)
                }
            }), l) : []
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
                label: u,
                index: u,
                dataset: function(e, t, a) {
                    var n = r(t, e);
                    a.axis = a.axis || "xy";
                    var i = d(a.axis),
                        u = a.intersect ? o(e, n) : s(e, n, !1, i);
                    return u.length > 0 && (u = e.getDatasetMeta(u[0]._datasetIndex).data), u
                },
                "x-axis": function(e, t) {
                    return u(e, t, {
                        intersect: !1
                    })
                },
                point: function(e, t) {
                    return o(e, r(t, e))
                },
                nearest: function(e, t, a) {
                    var n = r(t, e);
                    a.axis = a.axis || "xy";
                    var i = d(a.axis),
                        o = s(e, n, a.intersect, i);
                    return o.length > 1 && o.sort(function(e, t) {
                        var a = e.getArea() - t.getArea();
                        return 0 === a && (a = e._datasetIndex - t._datasetIndex), a
                    }), o.slice(0, 1)
                },
                x: function(e, t, a) {
                    var n = r(t, e),
                        o = [],
                        s = !1;
                    return i(e, function(e) {
                        e.inXRange(n.x) && o.push(e), e.inRange(n.x, n.y) && (s = !0)
                    }), a.intersect && !s && (o = []), o
                },
                y: function(e, t, a) {
                    var n = r(t, e),
                        o = [],
                        s = !1;
                    return i(e, function(e) {
                        e.inYRange(n.y) && o.push(e), e.inRange(n.x, n.y) && (s = !0)
                    }), a.intersect && !s && (o = []), o
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
    LU20: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setSeconds(59, 999), t
        }
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
    M5Oo: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t, a) {
            var r = n(e),
                i = void 0 !== a ? a : 1,
                o = n(t).getTime();
            if (r.getTime() > o) throw new Error("The first date cannot be after the second date");
            var s = [],
                d = r;
            for (d.setHours(0, 0, 0, 0); d.getTime() <= o;) s.push(n(d)), d.setDate(d.getDate() + i);
            return s
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
    PGY2: function(e, t, a) {
        "use strict";
        var n = {};

        function r(e) {
            return "/" + e + "/dashboard/achievements/"
        }

        function i(e) {
            return "/" + e.channelName + "/dashboard/achievements/" + e.id
        }
        a.d(n, "channelAchievements", function() {
            return r
        }), a.d(n, "achievement", function() {
            return i
        });
        var o = a("TToO"),
            s = a("OAwv"),
            d = a("u4Vk"),
            u = {
                referral: {
                    internalChannel: function(e) {
                        return e
                    },
                    internalTwitch: function(e) {
                        return e
                    },
                    external: function(e) {
                        return e
                    }
                }
            };

        function l(e, t) {
            void 0 === t && (t = u);
            var a, n = e.video_play_demographics.reduce(function(e, t) {
                return e.totals.geographical += m(e.counts.geographical, t.geographical), e.totals.referral.internalChannel += m(e.counts.referral.internalChannel, t.referral.internal_channel || {}), e.totals.referral.internalTwitch += m(e.counts.referral.internalTwitch, t.referral.internal_twitch || {}), e.totals.referral.external += m(e.counts.referral.external, t.referral.external || {}), e.totals.platform += m(e.counts.platform, t.platform), e
            }, {
                counts: {
                    geographical: {},
                    referral: {
                        internalChannel: {},
                        internalTwitch: {},
                        external: {}
                    },
                    platform: {}
                },
                totals: {
                    geographical: 0,
                    referral: {
                        internalChannel: 0,
                        internalTwitch: 0,
                        external: 0
                    },
                    platform: 0
                }
            });
            return n.counts.referral = {
                internalChannel: c(n.counts.referral.internalChannel, t.referral.internalChannel),
                internalTwitch: c(n.counts.referral.internalTwitch, t.referral.internalTwitch),
                external: c(n.counts.referral.external, t.referral.external)
            }, {
                videoPlayCount: e.video_play_count,
                totals: {
                    location: n.totals.geographical,
                    platform: n.totals.platform,
                    referrer: {
                        internalChannel: n.totals.referral.internalChannel,
                        internalTwitch: n.totals.referral.internalTwitch,
                        external: n.totals.referral.external,
                        all: n.totals.referral.internalChannel + n.totals.referral.internalTwitch + n.totals.referral.external
                    }
                },
                byLocation: (a = n, f(a.counts.geographical, function(e, t) {
                    return {
                        name: e,
                        count: t,
                        share: _(t / a.totals.geographical)
                    }
                })).sort(h),
                byReferralType: {
                    internalChannel: function(e) {
                        return f(e.counts.referral.internalChannel, function(t, a) {
                            return {
                                name: t,
                                count: a,
                                share: _(a / e.totals.referral.internalChannel)
                            }
                        })
                    }(n).sort(h),
                    internalTwitch: function(e) {
                        return f(e.counts.referral.internalTwitch, function(t, a) {
                            return {
                                name: t,
                                count: a,
                                share: _(a / e.totals.referral.internalTwitch)
                            }
                        })
                    }(n).sort(h),
                    external: function(e) {
                        return f(e.counts.referral.external, function(t, a) {
                            return {
                                name: t,
                                count: a,
                                share: _(a / e.totals.referral.external)
                            }
                        })
                    }(n).sort(h),
                    all: function(e) {
                        var t = o.__assign({}, e.counts.referral.internalChannel, e.counts.referral.internalTwitch, e.counts.referral.external),
                            a = e.totals.referral.internalChannel + e.totals.referral.internalTwitch + e.totals.referral.external;
                        return f(t, function(e, t) {
                            return {
                                name: e,
                                count: t,
                                share: _(t / a)
                            }
                        })
                    }(n).sort(h)
                },
                byPlatform: function(e) {
                    return f(e.counts.platform, function(t, a) {
                        return {
                            name: t,
                            count: a,
                            share: _(a / e.totals.platform)
                        }
                    })
                }(n).sort(h)
            }
        }

        function c(e, t) {
            var a = {};
            for (var n in e) {
                var r = t(n),
                    i = a[r] || 0;
                a[r] = i + e[n]
            }
            return a
        }

        function m(e, t) {
            var a = 0;
            for (var n in t) e[n] = (e[n] || 0) + t[n], a += t[n];
            return a
        }

        function h(e, t) {
            return e.count === t.count ? e.name.localeCompare(t.name) : e.count > t.count ? -1 : 1
        }

        function _(e) {
            return Math.round(100 * e)
        }

        function f(e, t) {
            var a = [];
            for (var n in e) a.push(t(n, e[n]));
            return a
        }
        var p = {
            videoPlayCount: 0,
            totals: {
                location: 0,
                platform: 0,
                referrer: {
                    internalChannel: 0,
                    internalTwitch: 0,
                    external: 0,
                    all: 0
                }
            },
            byLocation: [],
            byPlatform: [],
            byReferralType: {
                internalChannel: [],
                internalTwitch: [],
                external: [],
                all: []
            }
        };

        function g(e, t) {
            return o.__awaiter(this, void 0, void 0, function() {
                var a, n, r, i, u;
                return o.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return a = "/v5/channels/" + e.id + "/analytics/video_play_demographics", n = Object(d.g)(t), r = [a, s.stringify(n)].join("?"), i = {
                                referral: {
                                    internalChannel: function(t) {
                                        return t === e.name ? "top_nav_bar" : t
                                    },
                                    internalTwitch: function(e) {
                                        return e
                                    },
                                    external: M
                                }
                            }, [4, Object(b.a)({
                                path: r
                            })];
                        case 1:
                            return (u = o.sent()).isError() ? [2, {
                                isError: !0,
                                referrals: p
                            }] : [2, {
                                isError: !1,
                                referrals: l(u.body, i)
                            }]
                    }
                })
            })
        }
        var y = ["google", "youtube", "facebook", "t.co", "reddit"];

        function M(e) {
            return y.find(function(t) {
                return e.indexOf(t) >= 0
            }) || e
        }
        var v, b = a("6w0d"),
            L = a("yiqh"),
            D = a("b9IH");

        function k(e, t, a) {
            return e.sort(function(e, n) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = a[r] || v.Ascending,
                        s = Y(i(e), i(n)) * o;
                    if (0 !== s) return s
                }
                return 0
            })
        }

        function Y(e, t) {
            var a = null != e,
                n = null != t;
            return a && n ? e > t ? 1 : e < t ? -1 : 0 : a ? -1 : n ? 1 : 0
        }! function(e) {
            e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
        }(v || (v = {})), a.d(t, "c", function() {
            return n
        }), a.d(t, "b", function() {
            return p
        }), a.d(t, "d", function() {
            return g
        }), a.d(t, "e", function() {
            return b.a
        }), a.d(t, !1, function() {}), a.d(t, !1, function() {
            return L.a
        }), a.d(t, !1, function() {
            return l
        }), a.d(t, !1, function() {
            return D.a
        }), a.d(t, "a", function() {
            return v
        }), a.d(t, "f", function() {
            return k
        })
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
                    return xt(e, t, a, n, !0).utc()
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
                var g = n.momentProperties = [];

                function y(e, t) {
                    var a, n, r;
                    if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), g.length > 0)
                        for (a = 0; a < g.length; a++) o(r = t[n = g[a]]) || (e[n] = r);
                    return e
                }
                var M = !1;

                function v(e) {
                    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === M && (M = !0, n.updateOffset(this), M = !1)
                }

                function b(e) {
                    return e instanceof v || null != e && null != e._isAMomentObject
                }

                function L(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function D(e) {
                    var t = +e,
                        a = 0;
                    return 0 !== t && isFinite(t) && (a = L(t)), a
                }

                function k(e, t, a) {
                    var n, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        o = 0;
                    for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && D(e[n]) !== D(t[n])) && o++;
                    return o + i
                }

                function Y(e) {
                    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function w(e, t) {
                    var a = !0;
                    return c(function() {
                        if (null != n.deprecationHandler && n.deprecationHandler(null, e), a) {
                            for (var r, i = [], o = 0; o < arguments.length; o++) {
                                if (r = "", "object" == typeof arguments[o]) {
                                    for (var s in r += "\n[" + o + "] ", arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[o];
                                i.push(r)
                            }
                            Y(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
                        }
                        return t.apply(this, arguments)
                    }, t)
                }
                var x = {};

                function T(e, t) {
                    null != n.deprecationHandler && n.deprecationHandler(e, t), x[e] || (Y(t), x[e] = !0)
                }

                function S(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function O(e, t) {
                    var a, n = c({}, e);
                    for (a in t) l(t, a) && (i(e[a]) && i(t[a]) ? (n[a] = {}, c(n[a], e[a]), c(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                    for (a in e) l(e, a) && !l(t, a) && i(e[a]) && (n[a] = c({}, n[a]));
                    return n
                }

                function j(e) {
                    null != e && this.set(e)
                }
                n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
                var H = Object.keys ? Object.keys : function(e) {
                    var t, a = [];
                    for (t in e) l(e, t) && a.push(t);
                    return a
                };
                var C = {};

                function P(e, t) {
                    var a = e.toLowerCase();
                    C[a] = C[a + "s"] = C[t] = e
                }

                function A(e) {
                    return "string" == typeof e ? C[e] || C[e.toLowerCase()] : void 0
                }

                function F(e) {
                    var t, a, n = {};
                    for (a in e) l(e, a) && (t = A(a)) && (n[t] = e[a]);
                    return n
                }
                var E = {};

                function W(e, t) {
                    E[e] = t
                }

                function I(e, t) {
                    return function(a) {
                        return null != a ? (R(this, e, a), n.updateOffset(this, t), this) : N(this, e)
                    }
                }

                function N(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function R(e, t, a) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](a)
                }

                function z(e, t, a) {
                    var n = "" + Math.abs(e),
                        r = t - n.length;
                    return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
                }
                var B = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    V = {},
                    U = {};

                function G(e, t, a, n) {
                    var r = n;
                    "string" == typeof n && (r = function() {
                        return this[n]()
                    }), e && (U[e] = r), t && (U[t[0]] = function() {
                        return z(r.apply(this, arguments), t[1], t[2])
                    }), a && (U[a] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function q(e, t) {
                    return e.isValid() ? (t = K(t, e.localeData()), V[t] = V[t] || function(e) {
                        var t, a, n, r = e.match(B);
                        for (t = 0, a = r.length; t < a; t++) U[r[t]] ? r[t] = U[r[t]] : r[t] = (n = r[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                        return function(t) {
                            var n, i = "";
                            for (n = 0; n < a; n++) i += S(r[n]) ? r[n].call(t, e) : r[n];
                            return i
                        }
                    }(t), V[t](e)) : e.localeData().invalidDate()
                }

                function K(e, t) {
                    var a = 5;

                    function n(e) {
                        return t.longDateFormat(e) || e
                    }
                    for (J.lastIndex = 0; a >= 0 && J.test(e);) e = e.replace(J, n), J.lastIndex = 0, a -= 1;
                    return e
                }
                var Z = /\d/,
                    X = /\d\d/,
                    Q = /\d{3}/,
                    $ = /\d{4}/,
                    ee = /[+-]?\d{6}/,
                    te = /\d\d?/,
                    ae = /\d\d\d\d?/,
                    ne = /\d\d\d\d\d\d?/,
                    re = /\d{1,3}/,
                    ie = /\d{1,4}/,
                    oe = /[+-]?\d{1,6}/,
                    se = /\d+/,
                    de = /[+-]?\d+/,
                    ue = /Z|[+-]\d\d:?\d\d/gi,
                    le = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    ce = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    me = {};

                function he(e, t, a) {
                    me[e] = S(t) ? t : function(e, n) {
                        return e && a ? a : t
                    }
                }

                function _e(e, t) {
                    return l(me, e) ? me[e](t._strict, t._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, r) {
                        return t || a || n || r
                    })))
                }

                function fe(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                var pe = {};

                function ge(e, t) {
                    var a, n = t;
                    for ("string" == typeof e && (e = [e]), s(t) && (n = function(e, a) {
                            a[t] = D(e)
                        }), a = 0; a < e.length; a++) pe[e[a]] = n
                }

                function ye(e, t) {
                    ge(e, function(e, a, n, r) {
                        n._w = n._w || {}, t(e, n._w, n, r)
                    })
                }

                function Me(e, t, a) {
                    null != t && l(pe, e) && pe[e](t, a._a, a, e)
                }
                var ve = 0,
                    be = 1,
                    Le = 2,
                    De = 3,
                    ke = 4,
                    Ye = 5,
                    we = 6,
                    xe = 7,
                    Te = 8,
                    Se = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1
                    };

                function Oe(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }
                G("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), G("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), G("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), P("month", "M"), W("month", 8), he("M", te), he("MM", te, X), he("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), he("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ge(["M", "MM"], function(e, t) {
                    t[be] = D(e) - 1
                }), ge(["MMM", "MMMM"], function(e, t, a, n) {
                    var r = a._locale.monthsParse(e, n, a._strict);
                    null != r ? t[be] = r : h(a).invalidMonth = e
                });
                var je = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
                var Ce = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                function Pe(e, t) {
                    var a;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = D(t);
                        else if (!s(t = e.localeData().monthsParse(t))) return e;
                    return a = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                }

                function Ae(e) {
                    return null != e ? (Pe(this, e), n.updateOffset(this, !0), this) : N(this, "Month")
                }
                var Fe = ce;
                var Ee = ce;

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
                    return Ne(e) ? 366 : 365
                }

                function Ne(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }
                G("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), G(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), W("year", 1), he("Y", de), he("YY", te, X), he("YYYY", ie, $), he("YYYYY", oe, ee), he("YYYYYY", oe, ee), ge(["YYYYY", "YYYYYY"], ve), ge("YYYY", function(e, t) {
                    t[ve] = 2 === e.length ? n.parseTwoDigitYear(e) : D(e)
                }), ge("YY", function(e, t) {
                    t[ve] = n.parseTwoDigitYear(e)
                }), ge("Y", function(e, t) {
                    t[ve] = parseInt(e, 10)
                }), n.parseTwoDigitYear = function(e) {
                    return D(e) + (D(e) > 68 ? 1900 : 2e3)
                };
                var Re = I("FullYear", !0);

                function ze(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function Be(e, t, a) {
                    var n = 7 + t - a;
                    return -((7 + ze(e, 0, n).getUTCDay() - t) % 7) + n - 1
                }

                function Je(e, t, a, n, r) {
                    var i, o, s = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Be(e, n, r);
                    return s <= 0 ? o = Ie(i = e - 1) + s : s > Ie(e) ? (i = e + 1, o = s - Ie(e)) : (i = e, o = s), {
                        year: i,
                        dayOfYear: o
                    }
                }

                function Ve(e, t, a) {
                    var n, r, i = Be(e.year(), t, a),
                        o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return o < 1 ? n = o + Ue(r = e.year() - 1, t, a) : o > Ue(e.year(), t, a) ? (n = o - Ue(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = o), {
                        week: n,
                        year: r
                    }
                }

                function Ue(e, t, a) {
                    var n = Be(e, t, a),
                        r = Be(e + 1, t, a);
                    return (Ie(e) - n + r) / 7
                }
                G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), W("week", 5), W("isoWeek", 5), he("w", te), he("ww", te, X), he("W", te), he("WW", te, X), ye(["w", "ww", "W", "WW"], function(e, t, a, n) {
                    t[n.substr(0, 1)] = D(e)
                });
                G("d", 0, "do", "day"), G("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), G("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), G("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), he("d", te), he("e", te), he("E", te), he("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), he("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), he("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ye(["dd", "ddd", "dddd"], function(e, t, a, n) {
                    var r = a._locale.weekdaysParse(e, n, a._strict);
                    null != r ? t.d = r : h(a).invalidWeekday = e
                }), ye(["d", "e", "E"], function(e, t, a, n) {
                    t[n] = D(e)
                });
                var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
                var qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
                var Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
                var Ze = ce;
                var Xe = ce;
                var Qe = ce;

                function $e() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n, r, i, o = [],
                        s = [],
                        d = [],
                        u = [];
                    for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), r = this.weekdaysShort(a, ""), i = this.weekdays(a, ""), o.push(n), s.push(r), d.push(i), u.push(n), u.push(r), u.push(i);
                    for (o.sort(e), s.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = fe(s[t]), d[t] = fe(d[t]), u[t] = fe(u[t]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
                }

                function et() {
                    return this.hours() % 12 || 12
                }

                function tt(e, t) {
                    G(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function at(e, t) {
                    return t._meridiemParse
                }
                G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, et), G("k", ["kk", 2], 0, function() {
                    return this.hours() || 24
                }), G("hmm", 0, 0, function() {
                    return "" + et.apply(this) + z(this.minutes(), 2)
                }), G("hmmss", 0, 0, function() {
                    return "" + et.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
                }), G("Hmm", 0, 0, function() {
                    return "" + this.hours() + z(this.minutes(), 2)
                }), G("Hmmss", 0, 0, function() {
                    return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
                }), tt("a", !0), tt("A", !1), P("hour", "h"), W("hour", 13), he("a", at), he("A", at), he("H", te), he("h", te), he("k", te), he("HH", te, X), he("hh", te, X), he("kk", te, X), he("hmm", ae), he("hmmss", ne), he("Hmm", ae), he("Hmmss", ne), ge(["H", "HH"], De), ge(["k", "kk"], function(e, t, a) {
                    var n = D(e);
                    t[De] = 24 === n ? 0 : n
                }), ge(["a", "A"], function(e, t, a) {
                    a._isPm = a._locale.isPM(e), a._meridiem = e
                }), ge(["h", "hh"], function(e, t, a) {
                    t[De] = D(e), h(a).bigHour = !0
                }), ge("hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[De] = D(e.substr(0, n)), t[ke] = D(e.substr(n)), h(a).bigHour = !0
                }), ge("hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[De] = D(e.substr(0, n)), t[ke] = D(e.substr(n, 2)), t[Ye] = D(e.substr(r)), h(a).bigHour = !0
                }), ge("Hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[De] = D(e.substr(0, n)), t[ke] = D(e.substr(n))
                }), ge("Hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[De] = D(e.substr(0, n)), t[ke] = D(e.substr(n, 2)), t[Ye] = D(e.substr(r))
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
                        months: He,
                        monthsShort: Ce,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: Ge,
                        weekdaysMin: Ke,
                        weekdaysShort: qe,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    ot = {},
                    st = {};

                function dt(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function ut(t) {
                    var n = null;
                    if (!ot[t] && void 0 !== e && e && e.exports) try {
                        n = nt._abbr, a("uslO")("./" + t), lt(n)
                    } catch (e) {}
                    return ot[t]
                }

                function lt(e, t) {
                    var a;
                    return e && (a = o(t) ? mt(e) : ct(e, t)) && (nt = a), nt._abbr
                }

                function ct(e, t) {
                    if (null !== t) {
                        var a = it;
                        if (t.abbr = e, null != ot[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = ot[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == ot[t.parentLocale]) return st[t.parentLocale] || (st[t.parentLocale] = []), st[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = ot[t.parentLocale]._config
                        }
                        return ot[e] = new j(O(a, t)), st[e] && st[e].forEach(function(e) {
                            ct(e.name, e.config)
                        }), lt(e), ot[e]
                    }
                    return delete ot[e], null
                }

                function mt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return nt;
                    if (!r(e)) {
                        if (t = ut(e)) return t;
                        e = [e]
                    }
                    return function(e) {
                        for (var t, a, n, r, i = 0; i < e.length;) {
                            for (t = (r = dt(e[i]).split("-")).length, a = (a = dt(e[i + 1])) ? a.split("-") : null; t > 0;) {
                                if (n = ut(r.slice(0, t).join("-"))) return n;
                                if (a && a.length >= t && k(r, a, !0) >= t - 1) break;
                                t--
                            }
                            i++
                        }
                        return null
                    }(e)
                }

                function ht(e) {
                    var t, a = e._a;
                    return a && -2 === h(e).overflow && (t = a[be] < 0 || a[be] > 11 ? be : a[Le] < 1 || a[Le] > Oe(a[ve], a[be]) ? Le : a[De] < 0 || a[De] > 24 || 24 === a[De] && (0 !== a[ke] || 0 !== a[Ye] || 0 !== a[we]) ? De : a[ke] < 0 || a[ke] > 59 ? ke : a[Ye] < 0 || a[Ye] > 59 ? Ye : a[we] < 0 || a[we] > 999 ? we : -1, h(e)._overflowDayOfYear && (t < ve || t > Le) && (t = Le), h(e)._overflowWeeks && -1 === t && (t = xe), h(e)._overflowWeekday && -1 === t && (t = Te), h(e).overflow = t), e
                }
                var _t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ft = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    pt = /Z|[+-]\d\d(?::?\d\d)?/,
                    gt = [
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
                    yt = [
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
                    var t, a, n, r, i, o, s = e._i,
                        d = _t.exec(s) || ft.exec(s);
                    if (d) {
                        for (h(e).iso = !0, t = 0, a = gt.length; t < a; t++)
                            if (gt[t][1].exec(d[1])) {
                                r = gt[t][0], n = !1 !== gt[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, a = yt.length; t < a; t++)
                                if (yt[t][1].exec(d[3])) {
                                    i = (d[2] || " ") + yt[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!n && null != i) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!pt.exec(d[4])) return void(e._isValid = !1);
                            o = "Z"
                        }
                        e._f = r + (i || "") + (o || ""), Yt(e)
                    } else e._isValid = !1
                }
                var bt = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

                function Lt(e) {
                    var t, a, n, r, i, o, s, d = {
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
                                o = 0 === s ? " +0000" : ((s = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(a[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + s).replace(/^-?/, "0").match(/..$/)[0] + "00";
                                break;
                            case 4:
                                o = d[a[5]];
                                break;
                            default:
                                o = d[" GMT"]
                        }
                        a[5] = o, e._i = a.splice(1).join(""), " ZZ", e._f = n + r + i + " ZZ", Yt(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function Dt(e, t, a) {
                    return null != e ? e : null != t ? t : a
                }

                function kt(e) {
                    var t, a, r, i, o = [];
                    if (!e._d) {
                        for (r = function(e) {
                                var t = new Date(n.now());
                                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                            }(e), e._w && null == e._a[Le] && null == e._a[be] && function(e) {
                                var t, a, n, r, i, o, s, d;
                                if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, o = 4, a = Dt(t.GG, e._a[ve], Ve(Tt(), 1, 4).year), n = Dt(t.W, 1), ((r = Dt(t.E, 1)) < 1 || r > 7) && (d = !0);
                                else {
                                    i = e._locale._week.dow, o = e._locale._week.doy;
                                    var u = Ve(Tt(), i, o);
                                    a = Dt(t.gg, e._a[ve], u.year), n = Dt(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
                                }
                                n < 1 || n > Ue(a, i, o) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (s = Je(a, n, r, i, o), e._a[ve] = s.year, e._dayOfYear = s.dayOfYear)
                            }(e), null != e._dayOfYear && (i = Dt(e._a[ve], r[ve]), (e._dayOfYear > Ie(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), a = ze(i, 0, e._dayOfYear), e._a[be] = a.getUTCMonth(), e._a[Le] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
                        for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[De] && 0 === e._a[ke] && 0 === e._a[Ye] && 0 === e._a[we] && (e._nextDay = !0, e._a[De] = 0), e._d = (e._useUTC ? ze : function(e, t, a, n, r, i, o) {
                            var s = new Date(e, t, a, n, r, i, o);
                            return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
                        }).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[De] = 24)
                    }
                }

                function Yt(e) {
                    if (e._f !== n.ISO_8601)
                        if (e._f !== n.RFC_2822) {
                            e._a = [], h(e).empty = !0;
                            var t, a, r, i, o, s = "" + e._i,
                                d = s.length,
                                u = 0;
                            for (r = K(e._f, e._locale).match(B) || [], t = 0; t < r.length; t++) i = r[t], (a = (s.match(_e(i, e)) || [])[0]) && ((o = s.substr(0, s.indexOf(a))).length > 0 && h(e).unusedInput.push(o), s = s.slice(s.indexOf(a) + a.length), u += a.length), U[i] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(i), Me(i, a, e)) : e._strict && !a && h(e).unusedTokens.push(i);
                            h(e).charsLeftOver = d - u, s.length > 0 && h(e).unusedInput.push(s), e._a[De] <= 12 && !0 === h(e).bigHour && e._a[De] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[De] = function(e, t, a) {
                                var n;
                                if (null == a) return t;
                                return null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                            }(e._locale, e._a[De], e._meridiem), kt(e), ht(e)
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
                        for (r = 0; r < e._f.length; r++) i = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Yt(t), f(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == n || i < n) && (n = i, a = t));
                        c(e, a || t)
                    }(e) : a ? Yt(e) : function(e) {
                        var t = e._i;
                        o(t) ? e._d = new Date(n.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                            var t = Mt.exec(e._i);
                            null === t ? (vt(e), !1 === e._isValid && (delete e._isValid, Lt(e), !1 === e._isValid && (delete e._isValid, n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                        }(e) : r(t) ? (e._a = u(t.slice(0), function(e) {
                            return parseInt(e, 10)
                        }), kt(e)) : i(t) ? function(e) {
                            if (!e._d) {
                                var t = F(e._i);
                                e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                    return e && parseInt(e, 10)
                                }), kt(e)
                            }
                        }(e) : s(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
                    }(e), f(e) || (e._d = null), e))
                }

                function xt(e, t, a, n, o) {
                    var s, d = {};
                    return !0 !== a && !1 !== a || (n = a, a = void 0), (i(e) && function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    }(e) || r(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = o, d._l = a, d._i = e, d._f = t, d._strict = n, (s = new v(ht(wt(d))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
                }

                function Tt(e, t, a, n) {
                    return xt(e, t, a, n, !1)
                }
                n.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), n.ISO_8601 = function() {}, n.RFC_2822 = function() {};
                var St = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Tt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : p()
                    }),
                    Ot = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Tt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : p()
                    });

                function jt(e, t) {
                    var a, n;
                    if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Tt();
                    for (a = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](a) || (a = t[n]);
                    return a
                }
                var Ht = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function Ct(e) {
                    var t = F(e),
                        a = t.year || 0,
                        n = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        o = t.day || 0,
                        s = t.hour || 0,
                        d = t.minute || 0,
                        u = t.second || 0,
                        l = t.millisecond || 0;
                    this._isValid = function(e) {
                        for (var t in e)
                            if (-1 === Ht.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                        for (var a = !1, n = 0; n < Ht.length; ++n)
                            if (e[Ht[n]]) {
                                if (a) return !1;
                                parseFloat(e[Ht[n]]) !== D(e[Ht[n]]) && (a = !0)
                            }
                        return !0
                    }(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * s * 60 * 60, this._days = +o + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = mt(), this._bubble()
                }

                function Pt(e) {
                    return e instanceof Ct
                }

                function At(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function Ft(e, t) {
                    G(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            a = "+";
                        return e < 0 && (e = -e, a = "-"), a + z(~~(e / 60), 2) + t + z(~~e % 60, 2)
                    })
                }
                Ft("Z", ":"), Ft("ZZ", ""), he("Z", le), he("ZZ", le), ge(["Z", "ZZ"], function(e, t, a) {
                    a._useUTC = !0, a._tzm = Wt(le, e)
                });
                var Et = /([\+\-]|\d\d)/gi;

                function Wt(e, t) {
                    var a = (t || "").match(e);
                    if (null === a) return null;
                    var n = ((a[a.length - 1] || []) + "").match(Et) || ["-", 0, 0],
                        r = 60 * n[1] + D(n[2]);
                    return 0 === r ? 0 : "+" === n[0] ? r : -r
                }

                function It(e, t) {
                    var a, r;
                    return t._isUTC ? (a = t.clone(), r = (b(e) || d(e) ? e.valueOf() : Tt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), n.updateOffset(a, !1), a) : Tt(e).local()
                }

                function Nt(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function Rt() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }
                n.updateOffset = function() {};
                var zt = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Bt = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

                function Jt(e, t) {
                    var a, n, r, i = e,
                        o = null;
                    return Pt(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : s(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (o = zt.exec(e)) ? (a = "-" === o[1] ? -1 : 1, i = {
                        y: 0,
                        d: D(o[Le]) * a,
                        h: D(o[De]) * a,
                        m: D(o[ke]) * a,
                        s: D(o[Ye]) * a,
                        ms: D(At(1e3 * o[we])) * a
                    }) : (o = Bt.exec(e)) ? (a = "-" === o[1] ? -1 : 1, i = {
                        y: Vt(o[2], a),
                        M: Vt(o[3], a),
                        w: Vt(o[4], a),
                        d: Vt(o[5], a),
                        h: Vt(o[6], a),
                        m: Vt(o[7], a),
                        s: Vt(o[8], a)
                    }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = function(e, t) {
                        var a;
                        if (!e.isValid() || !t.isValid()) return {
                            milliseconds: 0,
                            months: 0
                        };
                        t = It(t, e), e.isBefore(t) ? a = Ut(e, t) : ((a = Ut(t, e)).milliseconds = -a.milliseconds, a.months = -a.months);
                        return a
                    }(Tt(i.from), Tt(i.to)), (i = {}).ms = r.milliseconds, i.M = r.months), n = new Ct(i), Pt(e) && l(e, "_locale") && (n._locale = e._locale), n
                }

                function Vt(e, t) {
                    var a = e && parseFloat(e.replace(",", "."));
                    return (isNaN(a) ? 0 : a) * t
                }

                function Ut(e, t) {
                    var a = {
                        milliseconds: 0,
                        months: 0
                    };
                    return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
                }

                function Gt(e, t) {
                    return function(a, n) {
                        var r;
                        return null === n || isNaN(+n) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = a, a = n, n = r), qt(this, Jt(a = "string" == typeof a ? +a : a, n), e), this
                    }
                }

                function qt(e, t, a, r) {
                    var i = t._milliseconds,
                        o = At(t._days),
                        s = At(t._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * a), o && R(e, "Date", N(e, "Date") + o * a), s && Pe(e, N(e, "Month") + s * a), r && n.updateOffset(e, o || s))
                }
                Jt.fn = Ct.prototype, Jt.invalid = function() {
                    return Jt(NaN)
                };
                var Kt = Gt(1, "add"),
                    Zt = Gt(-1, "subtract");

                function Xt(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = mt(e)) && (this._locale = t), this)
                }
                n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Qt = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });

                function $t() {
                    return this._locale
                }

                function ea(e, t) {
                    G(0, [e, e.length], 0, t)
                }

                function ta(e, t, a, n, r) {
                    var i;
                    return null == e ? Ve(this, n, r).year : (t > (i = Ue(e, n, r)) && (t = i), function(e, t, a, n, r) {
                        var i = Je(e, t, a, n, r),
                            o = ze(i.year, 0, i.dayOfYear);
                        return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
                    }.call(this, e, t, a, n, r))
                }
                G(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), G(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), ea("gggg", "weekYear"), ea("ggggg", "weekYear"), ea("GGGG", "isoWeekYear"), ea("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), he("G", de), he("g", de), he("GG", te, X), he("gg", te, X), he("GGGG", ie, $), he("gggg", ie, $), he("GGGGG", oe, ee), he("ggggg", oe, ee), ye(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                    t[n.substr(0, 2)] = D(e)
                }), ye(["gg", "GG"], function(e, t, a, r) {
                    t[r] = n.parseTwoDigitYear(e)
                }), G("Q", 0, "Qo", "quarter"), P("quarter", "Q"), W("quarter", 7), he("Q", Z), ge("Q", function(e, t) {
                    t[be] = 3 * (D(e) - 1)
                }), G("D", ["DD", 2], "Do", "date"), P("date", "D"), W("date", 9), he("D", te), he("DD", te, X), he("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), ge(["D", "DD"], Le), ge("Do", function(e, t) {
                    t[Le] = D(e.match(te)[0])
                });
                var aa = I("Date", !0);
                G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), W("dayOfYear", 4), he("DDD", re), he("DDDD", Q), ge(["DDD", "DDDD"], function(e, t, a) {
                    a._dayOfYear = D(e)
                }), G("m", ["mm", 2], 0, "minute"), P("minute", "m"), W("minute", 14), he("m", te), he("mm", te, X), ge(["m", "mm"], ke);
                var na = I("Minutes", !1);
                G("s", ["ss", 2], 0, "second"), P("second", "s"), W("second", 15), he("s", te), he("ss", te, X), ge(["s", "ss"], Ye);
                var ra, ia = I("Seconds", !1);
                for (G("S", 0, 0, function() {
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
                    }), P("millisecond", "ms"), W("millisecond", 16), he("S", re, Z), he("SS", re, X), he("SSS", re, Q), ra = "SSSS"; ra.length <= 9; ra += "S") he(ra, se);

                function oa(e, t) {
                    t[we] = D(1e3 * ("0." + e))
                }
                for (ra = "S"; ra.length <= 9; ra += "S") ge(ra, oa);
                var sa = I("Milliseconds", !1);
                G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
                var da = v.prototype;

                function ua(e) {
                    return e
                }
                da.add = Kt, da.calendar = function(e, t) {
                    var a = e || Tt(),
                        r = It(a, this).startOf("day"),
                        i = n.calendarFormat(this, r) || "sameElse",
                        o = t && (S(t[i]) ? t[i].call(this, a) : t[i]);
                    return this.format(o || this.localeData().calendar(i, this, Tt(a)))
                }, da.clone = function() {
                    return new v(this)
                }, da.diff = function(e, t, a) {
                    var n, r, i, o;
                    return this.isValid() && (n = It(e, this)).isValid() ? (r = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (t = A(t)) || "month" === t || "quarter" === t ? (s = this, d = n, c = 12 * (d.year() - s.year()) + (d.month() - s.month()), m = s.clone().add(c, "months"), d - m < 0 ? (u = s.clone().add(c - 1, "months"), l = (d - m) / (m - u)) : (u = s.clone().add(c + 1, "months"), l = (d - m) / (u - m)), o = -(c + l) || 0, "quarter" === t ? o /= 3 : "year" === t && (o /= 12)) : (i = this - n, o = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), a ? o : L(o)) : NaN;
                    var s, d, u, l, c, m
                }, da.endOf = function(e) {
                    return void 0 === (e = A(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }, da.format = function(e) {
                    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                    var t = q(this, e);
                    return this.localeData().postformat(t)
                }, da.from = function(e, t) {
                    return this.isValid() && (b(e) && e.isValid() || Tt(e).isValid()) ? Jt({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, da.fromNow = function(e) {
                    return this.from(Tt(), e)
                }, da.to = function(e, t) {
                    return this.isValid() && (b(e) && e.isValid() || Tt(e).isValid()) ? Jt({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, da.toNow = function(e) {
                    return this.to(Tt(), e)
                }, da.get = function(e) {
                    return S(this[e = A(e)]) ? this[e]() : this
                }, da.invalidAt = function() {
                    return h(this).overflow
                }, da.isAfter = function(e, t) {
                    var a = b(e) ? e : Tt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(o(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                }, da.isBefore = function(e, t) {
                    var a = b(e) ? e : Tt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(o(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                }, da.isBetween = function(e, t, a, n) {
                    return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
                }, da.isSame = function(e, t) {
                    var a, n = b(e) ? e : Tt(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                }, da.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, da.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, da.isValid = function() {
                    return f(this)
                }, da.lang = Qt, da.locale = Xt, da.localeData = $t, da.max = Ot, da.min = St, da.parsingFlags = function() {
                    return c({}, h(this))
                }, da.set = function(e, t) {
                    if ("object" == typeof e)
                        for (var a = function(e) {
                                var t = [];
                                for (var a in e) t.push({
                                    unit: a,
                                    priority: E[a]
                                });
                                return t.sort(function(e, t) {
                                    return e.priority - t.priority
                                }), t
                            }(e = F(e)), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
                    else if (S(this[e = A(e)])) return this[e](t);
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
                }, da.subtract = Zt, da.toArray = function() {
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
                    return e.year() < 0 || e.year() > 9999 ? q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : S(Date.prototype.toISOString) ? this.toDate().toISOString() : q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
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
                }, da.year = Re, da.isLeapYear = function() {
                    return Ne(this.year())
                }, da.weekYear = function(e) {
                    return ta.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, da.isoWeekYear = function(e) {
                    return ta.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, da.quarter = da.quarters = function(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }, da.month = Ae, da.daysInMonth = function() {
                    return Oe(this.year(), this.month())
                }, da.week = da.weeks = function(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, da.isoWeek = da.isoWeeks = function(e) {
                    var t = Ve(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, da.weeksInYear = function() {
                    var e = this.localeData()._week;
                    return Ue(this.year(), e.dow, e.doy)
                }, da.isoWeeksInYear = function() {
                    return Ue(this.year(), 1, 4)
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
                }, da.hour = da.hours = rt, da.minute = da.minutes = na, da.second = da.seconds = ia, da.millisecond = da.milliseconds = sa, da.utcOffset = function(e, t, a) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Wt(le, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && t && (r = Nt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!t || this._changeInProgress ? qt(this, Jt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? i : Nt(this)
                }, da.utc = function(e) {
                    return this.utcOffset(0, e)
                }, da.local = function(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Nt(this), "m")), this
                }, da.parseZone = function() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = Wt(ue, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }, da.hasAlignedHourOffset = function(e) {
                    return !!this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }, da.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, da.isLocal = function() {
                    return !!this.isValid() && !this._isUTC
                }, da.isUtcOffset = function() {
                    return !!this.isValid() && this._isUTC
                }, da.isUtc = Rt, da.isUTC = Rt, da.zoneAbbr = function() {
                    return this._isUTC ? "UTC" : ""
                }, da.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, da.dates = w("dates accessor is deprecated. Use date instead.", aa), da.months = w("months accessor is deprecated. Use month instead", Ae), da.years = w("years accessor is deprecated. Use year instead", Re), da.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }), da.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                    if (!o(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (y(e, this), (e = wt(e))._a) {
                        var t = e._isUTC ? m(e._a) : Tt(e._a);
                        this._isDSTShifted = this.isValid() && k(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                });
                var la = j.prototype;

                function ca(e, t, a, n) {
                    var r = mt(),
                        i = m().set(n, t);
                    return r[a](i, e)
                }

                function ma(e, t, a) {
                    if (s(e) && (t = e, e = void 0), e = e || "", null != t) return ca(e, t, a, "month");
                    var n, r = [];
                    for (n = 0; n < 12; n++) r[n] = ca(e, n, a, "month");
                    return r
                }

                function ha(e, t, a, n) {
                    "boolean" == typeof e ? (s(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, s(t) && (a = t, t = void 0), t = t || "");
                    var r, i = mt(),
                        o = e ? i._week.dow : 0;
                    if (null != a) return ca(t, (a + o) % 7, n, "day");
                    var d = [];
                    for (r = 0; r < 7; r++) d[r] = ca(t, (r + o) % 7, n, "day");
                    return d
                }
                la.calendar = function(e, t, a) {
                    var n = this._calendar[e] || this._calendar.sameElse;
                    return S(n) ? n.call(t, a) : n
                }, la.longDateFormat = function(e) {
                    var t = this._longDateFormat[e],
                        a = this._longDateFormat[e.toUpperCase()];
                    return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }, la.invalidDate = function() {
                    return this._invalidDate
                }, la.ordinal = function(e) {
                    return this._ordinal.replace("%d", e)
                }, la.preparse = ua, la.postformat = ua, la.relativeTime = function(e, t, a, n) {
                    var r = this._relativeTime[a];
                    return S(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
                }, la.pastFuture = function(e, t) {
                    var a = this._relativeTime[e > 0 ? "future" : "past"];
                    return S(a) ? a(t) : a.replace(/%s/i, t)
                }, la.set = function(e) {
                    var t, a;
                    for (a in e) S(t = e[a]) ? this[a] = t : this["_" + a] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, la.months = function(e, t) {
                    return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || je).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
                }, la.monthsShort = function(e, t) {
                    return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[je.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, la.monthsParse = function(e, t, a) {
                    var n, r, i;
                    if (this._monthsParseExact) return function(e, t, a) {
                        var n, r, i, o = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                        return a ? "MMM" === t ? -1 !== (r = Se.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = Se.call(this._longMonthsParse, o)) ? r : null : "MMM" === t ? -1 !== (r = Se.call(this._shortMonthsParse, o)) ? r : -1 !== (r = Se.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = Se.call(this._longMonthsParse, o)) ? r : -1 !== (r = Se.call(this._shortMonthsParse, o)) ? r : null
                    }.call(this, e, t, a);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (r = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                        if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                        if (!a && this._monthsParse[n].test(e)) return n
                    }
                }, la.monthsRegex = function(e) {
                    return this._monthsParseExact ? (l(this, "_monthsRegex") || We.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ee), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, la.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (l(this, "_monthsRegex") || We.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, la.week = function(e) {
                    return Ve(e, this._week.dow, this._week.doy).week
                }, la.firstDayOfYear = function() {
                    return this._week.doy
                }, la.firstDayOfWeek = function() {
                    return this._week.dow
                }, la.weekdays = function(e, t) {
                    return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }, la.weekdaysMin = function(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }, la.weekdaysShort = function(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }, la.weekdaysParse = function(e, t, a) {
                    var n, r, i;
                    if (this._weekdaysParseExact) return function(e, t, a) {
                        var n, r, i, o = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
                        return a ? "dddd" === t ? -1 !== (r = Se.call(this._weekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = Se.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = Se.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === t ? -1 !== (r = Se.call(this._weekdaysParse, o)) ? r : -1 !== (r = Se.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Se.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = Se.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Se.call(this._weekdaysParse, o)) ? r : -1 !== (r = Se.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = Se.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = Se.call(this._weekdaysParse, o)) ? r : -1 !== (r = Se.call(this._shortWeekdaysParse, o)) ? r : null
                    }.call(this, e, t, a);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                        if (r = m([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                        if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                        if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                        if (!a && this._weekdaysParse[n].test(e)) return n
                    }
                }, la.weekdaysRegex = function(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, la.weekdaysShortRegex = function(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, la.weekdaysMinRegex = function(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }, la.isPM = function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }, la.meridiem = function(e, t, a) {
                    return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
                }, lt("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), n.lang = w("moment.lang is deprecated. Use moment.locale instead.", lt), n.langData = w("moment.langData is deprecated. Use moment.localeData instead.", mt);
                var _a = Math.abs;

                function fa(e, t, a, n) {
                    var r = Jt(t, a);
                    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
                }

                function pa(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function ga(e) {
                    return 4800 * e / 146097
                }

                function ya(e) {
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
                    Da = Ma("h"),
                    ka = Ma("d"),
                    Ya = Ma("w"),
                    wa = Ma("M"),
                    xa = Ma("y");

                function Ta(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }
                var Sa = Ta("milliseconds"),
                    Oa = Ta("seconds"),
                    ja = Ta("minutes"),
                    Ha = Ta("hours"),
                    Ca = Ta("days"),
                    Pa = Ta("months"),
                    Aa = Ta("years");
                var Fa = Math.round,
                    Ea = {
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
                        o = r %= 12,
                        s = n,
                        d = t,
                        u = e,
                        l = a,
                        c = this.asSeconds();
                    return c ? (c < 0 ? "-" : "") + "P" + (i ? i + "Y" : "") + (o ? o + "M" : "") + (s ? s + "D" : "") + (d || u || l ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (l ? l + "S" : "") : "P0D"
                }
                var Na = Ct.prototype;
                return Na.isValid = function() {
                    return this._isValid
                }, Na.abs = function() {
                    var e = this._data;
                    return this._milliseconds = _a(this._milliseconds), this._days = _a(this._days), this._months = _a(this._months), e.milliseconds = _a(e.milliseconds), e.seconds = _a(e.seconds), e.minutes = _a(e.minutes), e.hours = _a(e.hours), e.months = _a(e.months), e.years = _a(e.years), this
                }, Na.add = function(e, t) {
                    return fa(this, e, t, 1)
                }, Na.subtract = function(e, t) {
                    return fa(this, e, t, -1)
                }, Na.as = function(e) {
                    if (!this.isValid()) return NaN;
                    var t, a, n = this._milliseconds;
                    if ("month" === (e = A(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + ga(t), "month" === e ? a : a / 12;
                    switch (t = this._days + Math.round(ya(this._months)), e) {
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
                }, Na.asMilliseconds = va, Na.asSeconds = ba, Na.asMinutes = La, Na.asHours = Da, Na.asDays = ka, Na.asWeeks = Ya, Na.asMonths = wa, Na.asYears = xa, Na.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN
                }, Na._bubble = function() {
                    var e, t, a, n, r, i = this._milliseconds,
                        o = this._days,
                        s = this._months,
                        d = this._data;
                    return i >= 0 && o >= 0 && s >= 0 || i <= 0 && o <= 0 && s <= 0 || (i += 864e5 * pa(ya(s) + o), o = 0, s = 0), d.milliseconds = i % 1e3, e = L(i / 1e3), d.seconds = e % 60, t = L(e / 60), d.minutes = t % 60, a = L(t / 60), d.hours = a % 24, s += r = L(ga(o += L(a / 24))), o -= pa(ya(r)), n = L(s / 12), s %= 12, d.days = o, d.months = s, d.years = n, this
                }, Na.get = function(e) {
                    return e = A(e), this.isValid() ? this[e + "s"]() : NaN
                }, Na.milliseconds = Sa, Na.seconds = Oa, Na.minutes = ja, Na.hours = Ha, Na.days = Ca, Na.weeks = function() {
                    return L(this.days() / 7)
                }, Na.months = Pa, Na.years = Aa, Na.humanize = function(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(),
                        a = function(e, t, a) {
                            var n = Jt(e).abs(),
                                r = Fa(n.as("s")),
                                i = Fa(n.as("m")),
                                o = Fa(n.as("h")),
                                s = Fa(n.as("d")),
                                d = Fa(n.as("M")),
                                u = Fa(n.as("y")),
                                l = r <= Ea.ss && ["s", r] || r < Ea.s && ["ss", r] || i <= 1 && ["m"] || i < Ea.m && ["mm", i] || o <= 1 && ["h"] || o < Ea.h && ["hh", o] || s <= 1 && ["d"] || s < Ea.d && ["dd", s] || d <= 1 && ["M"] || d < Ea.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                            return l[2] = t, l[3] = +e > 0, l[4] = a,
                                function(e, t, a, n, r) {
                                    return r.relativeTime(t || 1, !!a, e, n)
                                }.apply(null, l)
                        }(this, !e, t);
                    return e && (a = t.pastFuture(+this, a)), t.postformat(a)
                }, Na.toISOString = Ia, Na.toString = Ia, Na.toJSON = Ia, Na.locale = Xt, Na.localeData = $t, Na.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ia), Na.lang = Qt, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), he("x", de), he("X", /[+-]?\d+(\.\d{1,3})?/), ge("X", function(e, t, a) {
                    a._d = new Date(1e3 * parseFloat(e, 10))
                }), ge("x", function(e, t, a) {
                    a._d = new Date(D(e))
                }), n.version = "2.18.1", t = Tt, n.fn = da, n.min = function() {
                    return jt("isBefore", [].slice.call(arguments, 0))
                }, n.max = function() {
                    return jt("isAfter", [].slice.call(arguments, 0))
                }, n.now = function() {
                    return Date.now ? Date.now() : +new Date
                }, n.utc = m, n.unix = function(e) {
                    return Tt(1e3 * e)
                }, n.months = function(e, t) {
                    return ma(e, t, "months")
                }, n.isDate = d, n.locale = lt, n.invalid = p, n.duration = Jt, n.isMoment = b, n.weekdays = function(e, t, a) {
                    return ha(e, t, a, "weekdays")
                }, n.parseZone = function() {
                    return Tt.apply(null, arguments).parseZone()
                }, n.localeData = mt, n.isDuration = Pt, n.monthsShort = function(e, t) {
                    return ma(e, t, "monthsShort")
                }, n.weekdaysMin = function(e, t, a) {
                    return ha(e, t, a, "weekdaysMin")
                }, n.defineLocale = ct, n.updateLocale = function(e, t) {
                    if (null != t) {
                        var a, n = it;
                        null != ot[e] && (n = ot[e]._config), (a = new j(t = O(n, t))).parentLocale = ot[e], ot[e] = a, lt(e)
                    } else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]);
                    return ot[e]
                }, n.locales = function() {
                    return H(ot)
                }, n.weekdaysShort = function(e, t, a) {
                    return ha(e, t, a, "weekdaysShort")
                }, n.normalizeUnits = A, n.relativeTimeRounding = function(e) {
                    return void 0 === e ? Fa : "function" == typeof e && (Fa = e, !0)
                }, n.relativeTimeThreshold = function(e, t) {
                    return void 0 !== Ea[e] && (void 0 === t ? Ea[e] : (Ea[e] = t, "s" === e && (Ea.ss = t - 1), !0))
                }, n.calendarFormat = function(e, t) {
                    var a = e.diff(t, "days", !0);
                    return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
                }, n.prototype = da, n
            }, e.exports = t()
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
                    var r;
                    return n = n || {}, r = "string" == typeof e[t] ? e[t] : 1 === a ? e[t].one : e[t].other.replace("{{count}}", a), n.addSuffix ? n.comparison > 0 ? "in " + r : r + " ago" : r
                }
            }
        }
    },
    Q2rx: function(e, t, a) {
        var n = a("u/4p"),
            r = 6e4,
            i = 6048e5;
        e.exports = function(e, t, a) {
            var o = n(e, a),
                s = n(t, a),
                d = o.getTime() - o.getTimezoneOffset() * r,
                u = s.getTime() - s.getTimezoneOffset() * r;
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
                    var e = this,
                        t = e.options.ticks;
                    if (t.beginAtZero) {
                        var a = n.sign(e.min),
                            r = n.sign(e.max);
                        a < 0 && r < 0 ? e.max = 0 : a > 0 && r > 0 && (e.min = 0)
                    }
                    var i = void 0 !== t.min || void 0 !== t.suggestedMin,
                        o = void 0 !== t.max || void 0 !== t.suggestedMax;
                    void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), i !== o && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
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
                        o = e.ticks = r.generators.linear(i, e);
                    e.handleDirectionalChanges(), e.max = n.max(o), e.min = n.min(o), t.reverse ? (o.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                },
                convertTicksToLabels: function() {
                    var t = this;
                    t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
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
        var n = a("k7DW"),
            r = a("wGD1"),
            i = a("iO9N"),
            o = n.global.defaultColor;

        function s(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
        }
        n._set("global", {
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
        }), e.exports = r.extend({
            inRange: function(e, t) {
                var a = this._view;
                return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
            },
            inLabelRange: s,
            inXRange: s,
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
                    s = t.pointStyle,
                    d = t.radius,
                    u = t.x,
                    l = t.y,
                    c = i.color,
                    m = 0;
                t.skip || (r.strokeStyle = t.borderColor || o, r.lineWidth = i.valueOrDefault(t.borderWidth, n.global.elements.point.borderWidth), r.fillStyle = t.backgroundColor || o, void 0 !== e && (a.x < e.left || 1.01 * e.right < a.x || a.y < e.top || 1.01 * e.bottom < a.y) && (a.x < e.left ? m = (u - a.x) / (e.left - a.x) : 1.01 * e.right < a.x ? m = (a.x - u) / (a.x - e.right) : a.y < e.top ? m = (l - a.y) / (e.top - a.y) : 1.01 * e.bottom < a.y && (m = (a.y - l) / (a.y - e.bottom)), m = Math.round(100 * m) / 100, r.strokeStyle = c(r.strokeStyle).alpha(m).rgbString(), r.fillStyle = c(r.fillStyle).alpha(m).rgbString()), i.canvas.drawPoint(r, s, d, u, l))
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
    SHOI: function(e, t, a) {
        var n = a("xA5w"),
            r = a("Jvcu");
        e.exports = function(e, t, a) {
            var i = a && Number(a.weekStartsOn) || 0,
                o = n(e),
                s = Number(t),
                d = o.getDay();
            return r(o, ((s % 7 + 7) % 7 < i ? 7 : 0) + s - d)
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
            var o = /(\w+)2(\w+)/.exec(i),
                s = o[1],
                d = o[2];
            (r[s] = r[s] || {})[d] = r[i] = function(e) {
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
    Tv4R: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var a, r, i = n(e).getTime();
            return t.forEach(function(e) {
                var t = n(e),
                    o = Math.abs(i - t.getTime());
                (void 0 === a || o < r) && (a = t, r = o)
            }), a
        }
    },
    "Uu+E": function(e, t, a) {
        var n = a("xA5w"),
            r = a("iRXW"),
            i = a("nizW");
        e.exports = function(e, t) {
            var a = n(e),
                o = Number(t),
                s = i(a, r(a)),
                d = new Date(0);
            return d.setFullYear(o, 0, 4), d.setHours(0, 0, 0, 0), (a = r(d)).setDate(a.getDate() + s), a
        }
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
            o = a("IbXy");

        function s(e) {
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
                callback: o.formatters.values,
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
                    o = t(e.fontStyle, a.defaultFontStyle),
                    s = t(e.fontFamily, a.defaultFontFamily);
                return {
                    size: r,
                    style: o,
                    family: s,
                    font: i.fontString(r, o, s)
                }
            }

            function o(e) {
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
                    var n, r, o, s, d, u, l = this;
                    for (l.beforeUpdate(), l.maxWidth = e, l.maxHeight = t, l.margins = i.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, a), l.longestTextCache = l.longestTextCache || {}, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), d = l.buildTicks() || [], l.afterBuildTicks(), l.beforeTickToLabelConversion(), o = l.convertTicksToLabels(d) || l.ticks, l.afterTickToLabelConversion(), l.ticks = o, n = 0, r = o.length; n < r; ++n) s = o[n], (u = d[n]) ? u.label = s : d.push(u = {
                        label: s,
                        major: !1
                    });
                    return l._ticks = d, l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l.afterUpdate(), l.minSize
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
                        r = s(e._ticks),
                        o = a(n);
                    t.font = o.font;
                    var d = n.minRotation || 0;
                    if (r.length && e.options.display && e.isHorizontal())
                        for (var u, l = i.longestText(t, o.font, r, e.longestTextCache), c = l, m = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > m && d < n.maxRotation;) {
                            var h = i.toRadians(d);
                            if (u = Math.cos(h), Math.sin(h) * l > e.maxHeight) {
                                d--;
                                break
                            }
                            d++, c = u * l
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
                        r = s(e._ticks),
                        d = e.options,
                        u = d.ticks,
                        l = d.scaleLabel,
                        c = d.gridLines,
                        m = d.display,
                        h = e.isHorizontal(),
                        _ = a(u),
                        f = d.gridLines.tickMarkLength;
                    if (n.width = h ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && c.drawTicks ? f : 0, n.height = h ? m && c.drawTicks ? f : 0 : e.maxHeight, l.display && m) {
                        var p = o(l) + i.options.toPadding(l.padding).height;
                        h ? n.height += p : n.width += p
                    }
                    if (u.display && m) {
                        var g = i.longestText(e.ctx, _.font, r, e.longestTextCache),
                            y = i.numberOfLabelLines(r),
                            M = .5 * _.size,
                            v = e.options.ticks.padding;
                        if (h) {
                            e.longestLabelWidth = g;
                            var b = i.toRadians(e.labelRotation),
                                L = Math.cos(b),
                                D = Math.sin(b) * g + _.size * y + M * (y - 1) + M;
                            n.height = Math.min(e.maxHeight, n.height + D + v), e.ctx.font = _.font;
                            var k = t(e.ctx, r[0], _.font),
                                Y = t(e.ctx, r[r.length - 1], _.font);
                            0 !== e.labelRotation ? (e.paddingLeft = "bottom" === d.position ? L * k + 3 : L * M + 3, e.paddingRight = "bottom" === d.position ? L * M + 3 : L * Y + 3) : (e.paddingLeft = k / 2 + 3, e.paddingRight = Y / 2 + 3)
                        } else u.mirror ? g = 0 : g += v + M, n.width = Math.min(e.maxWidth, n.width + g), e.paddingTop = _.size / 2, e.paddingBottom = _.size / 2
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
                    var o = t.height - (t.paddingTop + t.paddingBottom);
                    return t.top + e * (o / (t._ticks.length - 1))
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
                    var t, a, n, r, o = this,
                        s = o.isHorizontal(),
                        d = o.options.ticks.minor,
                        u = e.length,
                        l = i.toRadians(o.labelRotation),
                        c = Math.cos(l),
                        m = o.longestLabelWidth * c,
                        h = [];
                    for (d.maxTicksLimit && (r = d.maxTicksLimit), s && (t = !1, (m + d.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (t = 1 + Math.floor((m + d.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), r && u > r && (t = Math.max(t, Math.floor(u / r)))), a = 0; a < u; a++) n = e[a], (t > 1 && a % t > 0 || a % t == 0 && a + t >= u) && a !== u - 1 && delete n.label, h.push(n);
                    return h
                },
                draw: function(e) {
                    var t = this,
                        r = t.options;
                    if (r.display) {
                        var s = t.ctx,
                            u = n.global,
                            l = r.ticks.minor,
                            c = r.ticks.major || l,
                            m = r.gridLines,
                            h = r.scaleLabel,
                            _ = 0 !== t.labelRotation,
                            f = t.isHorizontal(),
                            p = l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            g = i.valueOrDefault(l.fontColor, u.defaultFontColor),
                            y = a(l),
                            M = i.valueOrDefault(c.fontColor, u.defaultFontColor),
                            v = a(c),
                            b = m.drawTicks ? m.tickMarkLength : 0,
                            L = i.valueOrDefault(h.fontColor, u.defaultFontColor),
                            D = a(h),
                            k = i.options.toPadding(h.padding),
                            Y = i.toRadians(t.labelRotation),
                            w = [],
                            x = "right" === r.position ? t.left : t.right - b,
                            T = "right" === r.position ? t.left + b : t.right,
                            S = "bottom" === r.position ? t.top : t.bottom - b,
                            O = "bottom" === r.position ? t.top + b : t.bottom;
                        if (i.each(p, function(a, n) {
                                if (!i.isNullOrUndef(a.label)) {
                                    var o, s, c, h, g, y, M, v, L, D, k, j, H, C, P = a.label;
                                    n === t.zeroLineIndex && r.offset === m.offsetGridLines ? (o = m.zeroLineWidth, s = m.zeroLineColor, c = m.zeroLineBorderDash, h = m.zeroLineBorderDashOffset) : (o = i.valueAtIndexOrDefault(m.lineWidth, n), s = i.valueAtIndexOrDefault(m.color, n), c = i.valueOrDefault(m.borderDash, u.borderDash), h = i.valueOrDefault(m.borderDashOffset, u.borderDashOffset));
                                    var A = "middle",
                                        F = "middle",
                                        E = l.padding;
                                    if (f) {
                                        var W = b + E;
                                        "bottom" === r.position ? (F = _ ? "middle" : "top", A = _ ? "right" : "center", C = t.top + W) : (F = _ ? "middle" : "bottom", A = _ ? "left" : "center", C = t.bottom - W);
                                        var I = d(t, n, m.offsetGridLines && p.length > 1);
                                        I < t.left && (s = "rgba(0,0,0,0)"), I += i.aliasPixel(o), H = t.getPixelForTick(n) + l.labelOffset, g = M = L = k = I, y = S, v = O, D = e.top, j = e.bottom
                                    } else {
                                        var N, R = "left" === r.position;
                                        l.mirror ? (A = R ? "left" : "right", N = E) : (A = R ? "right" : "left", N = b + E), H = R ? t.right - N : t.left + N;
                                        var z = d(t, n, m.offsetGridLines && p.length > 1);
                                        z < t.top && (s = "rgba(0,0,0,0)"), z += i.aliasPixel(o), C = t.getPixelForTick(n) + l.labelOffset, g = x, M = T, L = e.left, k = e.right, y = v = D = j = z
                                    }
                                    w.push({
                                        tx1: g,
                                        ty1: y,
                                        tx2: M,
                                        ty2: v,
                                        x1: L,
                                        y1: D,
                                        x2: k,
                                        y2: j,
                                        labelX: H,
                                        labelY: C,
                                        glWidth: o,
                                        glColor: s,
                                        glBorderDash: c,
                                        glBorderDashOffset: h,
                                        rotation: -1 * Y,
                                        label: P,
                                        major: a.major,
                                        textBaseline: F,
                                        textAlign: A
                                    })
                                }
                            }), i.each(w, function(e) {
                                if (m.display && (s.save(), s.lineWidth = e.glWidth, s.strokeStyle = e.glColor, s.setLineDash && (s.setLineDash(e.glBorderDash), s.lineDashOffset = e.glBorderDashOffset), s.beginPath(), m.drawTicks && (s.moveTo(e.tx1, e.ty1), s.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (s.moveTo(e.x1, e.y1), s.lineTo(e.x2, e.y2)), s.stroke(), s.restore()), l.display) {
                                    s.save(), s.translate(e.labelX, e.labelY), s.rotate(e.rotation), s.font = e.major ? v.font : y.font, s.fillStyle = e.major ? M : g, s.textBaseline = e.textBaseline, s.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (i.isArray(t))
                                        for (var a = 0, n = 0; a < t.length; ++a) s.fillText("" + t[a], 0, n), n += 1.5 * y.size;
                                    else s.fillText(t, 0, 0);
                                    s.restore()
                                }
                            }), h.display) {
                            var j, H, C = 0,
                                P = o(h) / 2;
                            if (f) j = t.left + (t.right - t.left) / 2, H = "bottom" === r.position ? t.bottom - P - k.bottom : t.top + P + k.top;
                            else {
                                var A = "left" === r.position;
                                j = A ? t.left + P + k.top : t.right - P - k.top, H = t.top + (t.bottom - t.top) / 2, C = A ? -.5 * Math.PI : .5 * Math.PI
                            }
                            s.save(), s.translate(j, H), s.rotate(C), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = L, s.font = D.font, s.fillText(h.labelString, 0, 0), s.restore()
                        }
                        if (m.drawBorder) {
                            s.lineWidth = i.valueAtIndexOrDefault(m.lineWidth, 0), s.strokeStyle = i.valueAtIndexOrDefault(m.color, 0);
                            var F = t.left,
                                E = t.right,
                                W = t.top,
                                I = t.bottom,
                                N = i.aliasPixel(s.lineWidth);
                            f ? (W = I = "top" === r.position ? t.bottom : t.top, W += N, I += N) : (F = E = "left" === r.position ? t.right : t.left, F += N, E += N), s.beginPath(), s.moveTo(F, W), s.lineTo(E, I), s.stroke()
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

                        function o(t) {
                            return i ? t.xAxisID === e.id : t.yAxisID === e.id
                        }
                        e.min = null, e.max = null;
                        var s = t.stacked;
                        if (void 0 === s && r.each(n, function(e, t) {
                                if (!s) {
                                    var n = a.getDatasetMeta(t);
                                    a.isDatasetVisible(t) && o(n) && void 0 !== n.stack && (s = !0)
                                }
                            }), t.stacked || s) {
                            var d = {};
                            r.each(n, function(n, i) {
                                var s = a.getDatasetMeta(i),
                                    u = [s.type, void 0 === t.stacked && void 0 === s.stack ? i : "", s.stack].join(".");
                                void 0 === d[u] && (d[u] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var l = d[u].positiveValues,
                                    c = d[u].negativeValues;
                                a.isDatasetVisible(i) && o(s) && r.each(n.data, function(a, n) {
                                    var r = +e.getRightValue(a);
                                    isNaN(r) || s.data[n].hidden || (l[n] = l[n] || 0, c[n] = c[n] || 0, t.relativePoints ? l[n] = 100 : r < 0 ? c[n] += r : l[n] += r)
                                })
                            }), r.each(d, function(t) {
                                var a = t.positiveValues.concat(t.negativeValues),
                                    n = r.min(a),
                                    i = r.max(a);
                                e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? i : Math.max(e.max, i)
                            })
                        } else r.each(n, function(t, n) {
                            var i = a.getDatasetMeta(n);
                            a.isDatasetVisible(n) && o(i) && r.each(t.data, function(t, a) {
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
                o = Number(t),
                s = i(a);
            return r(a, o - s)
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
                o = Math.min(n, r, i),
                s = Math.max(n, r, i),
                d = s - o;
            return s == o ? t = 0 : n == s ? t = (r - i) / d : r == s ? t = 2 + (i - n) / d : i == s && (t = 4 + (n - r) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = (o + s) / 2, [t, 100 * (s == o ? 0 : a <= .5 ? d / (s + o) : d / (2 - s - o)), 100 * a]
        }

        function n(e) {
            var t, a, n = e[0],
                r = e[1],
                i = e[2],
                o = Math.min(n, r, i),
                s = Math.max(n, r, i),
                d = s - o;
            return a = 0 == s ? 0 : d / s * 1e3 / 10, s == o ? t = 0 : n == s ? t = (r - i) / d : r == s ? t = 2 + (i - n) / d : i == s && (t = 4 + (n - r) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, a, s / 255 * 1e3 / 10]
        }

        function i(e) {
            var t = e[0],
                n = e[1],
                r = e[2];
            return [a(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))]
        }

        function o(e) {
            var t, a = e[0] / 255,
                n = e[1] / 255,
                r = e[2] / 255;
            return [100 * ((1 - a - (t = Math.min(1 - a, 1 - n, 1 - r))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t]
        }

        function s(e) {
            return k[JSON.stringify(e)]
        }

        function d(e) {
            var t = e[0] / 255,
                a = e[1] / 255,
                n = e[2] / 255;
            return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
        }

        function u(e) {
            var t = d(e),
                a = t[0],
                n = t[1],
                r = t[2];
            return n /= 100, r /= 108.883, a = (a /= 95.047) > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (a - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
        }

        function l(e) {
            var t, a, n, r, i, o = e[0] / 360,
                s = e[1] / 100,
                d = e[2] / 100;
            if (0 == s) return [i = 255 * d, i, i];
            t = 2 * d - (a = d < .5 ? d * (1 + s) : d + s - d * s), r = [0, 0, 0];
            for (var u = 0; u < 3; u++)(n = o + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, i = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, r[u] = 255 * i;
            return r
        }

        function c(e) {
            var t = e[0] / 60,
                a = e[1] / 100,
                n = e[2] / 100,
                r = Math.floor(t) % 6,
                i = t - Math.floor(t),
                o = 255 * n * (1 - a),
                s = 255 * n * (1 - a * i),
                d = 255 * n * (1 - a * (1 - i));
            n *= 255;
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

        function m(e) {
            var t, a, n, i, o = e[0] / 360,
                s = e[1] / 100,
                d = e[2] / 100,
                u = s + d;
            switch (u > 1 && (s /= u, d /= u), n = 6 * o - (t = Math.floor(6 * o)), 0 != (1 & t) && (n = 1 - n), i = s + n * ((a = 1 - d) - s), t) {
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
                o = e[2] / 100;
            return a = -.9689 * r + 1.8758 * i + .0415 * o, n = .0557 * r + -.204 * i + 1.057 * o, t = (t = 3.2406 * r + -1.5372 * i + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (a = Math.min(Math.max(0, a), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
        }

        function f(e) {
            var t = e[0],
                a = e[1],
                n = e[2];
            return a /= 100, n /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (t - a), 200 * (a - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
        }

        function p(e) {
            var t, a, n, r, i = e[0],
                o = e[1],
                s = e[2];
            return i <= 8 ? r = (a = 100 * i / 903.3) / 100 * 7.787 + 16 / 116 : (a = 100 * Math.pow((i + 16) / 116, 3), r = Math.pow(a / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (o / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + r, 3), a, n = n / 108.883 <= .008859 ? n = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3)]
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
            return D[e]
        }
        e.exports = {
            rgb2hsl: a,
            rgb2hsv: n,
            rgb2hwb: i,
            rgb2cmyk: o,
            rgb2keyword: s,
            rgb2xyz: d,
            rgb2lab: u,
            rgb2lch: function(e) {
                return y(u(e))
            },
            hsl2rgb: l,
            hsl2hsv: function(e) {
                var t = e[0],
                    a = e[1] / 100,
                    n = e[2] / 100;
                if (0 === n) return [0, 0, 0];
                return [t, 100 * (2 * (a *= (n *= 2) <= 1 ? n : 2 - n) / (n + a)), 100 * ((n + a) / 2)]
            },
            hsl2hwb: function(e) {
                return i(l(e))
            },
            hsl2cmyk: function(e) {
                return o(l(e))
            },
            hsl2keyword: function(e) {
                return s(l(e))
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
                return o(c(e))
            },
            hsv2keyword: function(e) {
                return s(c(e))
            },
            hwb2rgb: m,
            hwb2hsl: function(e) {
                return a(m(e))
            },
            hwb2hsv: function(e) {
                return n(m(e))
            },
            hwb2cmyk: function(e) {
                return o(m(e))
            },
            hwb2keyword: function(e) {
                return s(m(e))
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
                return s(h(e))
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
                return o(L(e))
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
    ZUMa: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 0 === n(e).getDay()
        }
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

            function o(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            function s(a, n) {
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
                        s = e.ctx,
                        d = n.global,
                        u = i.valueOrDefault,
                        l = u(a.fontSize, d.defaultFontSize),
                        c = u(a.fontStyle, d.defaultFontStyle),
                        m = u(a.fontFamily, d.defaultFontFamily),
                        h = i.fontString(l, c, m),
                        _ = e.legendHitBoxes = [],
                        f = e.minSize,
                        p = e.isHorizontal();
                    if (p ? (f.width = e.maxWidth, f.height = r ? 10 : 0) : (f.width = r ? 10 : 0, f.height = e.maxHeight), r)
                        if (s.font = h, p) {
                            var g = e.lineWidths = [0],
                                y = e.legendItems.length ? l + a.padding : 0;
                            s.textAlign = "left", s.textBaseline = "top", i.each(e.legendItems, function(t, n) {
                                var r = o(a, l) + l / 2 + s.measureText(t.text).width;
                                g[g.length - 1] + r + a.padding >= e.width && (y += l + a.padding, g[g.length] = e.left), _[n] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: l
                                }, g[g.length - 1] += r + a.padding
                            }), f.height += y
                        } else {
                            var M = a.padding,
                                v = e.columnWidths = [],
                                b = a.padding,
                                L = 0,
                                D = 0,
                                k = l + M;
                            i.each(e.legendItems, function(e, t) {
                                var n = o(a, l) + l / 2 + s.measureText(e.text).width;
                                D + k > f.height && (b += L + a.padding, v.push(L), L = 0, D = 0), L = Math.max(L, n), D += k, _[t] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: l
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
                        s = r.elements.line,
                        d = e.width,
                        u = e.lineWidths;
                    if (t.display) {
                        var l, c = e.ctx,
                            m = i.valueOrDefault,
                            h = m(a.fontColor, r.defaultFontColor),
                            _ = m(a.fontSize, r.defaultFontSize),
                            f = m(a.fontStyle, r.defaultFontStyle),
                            p = m(a.fontFamily, r.defaultFontFamily),
                            g = i.fontString(_, f, p);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = h, c.fillStyle = h, c.font = g;
                        var y = o(a, _),
                            M = e.legendHitBoxes,
                            v = e.isHorizontal();
                        l = v ? {
                            x: e.left + (d - u[0]) / 2,
                            y: e.top + a.padding,
                            line: 0
                        } : {
                            x: e.left + a.padding,
                            y: e.top + a.padding,
                            line: 0
                        };
                        var b = _ + a.padding;
                        i.each(e.legendItems, function(n, o) {
                            var h = c.measureText(n.text).width,
                                f = y + _ / 2 + h,
                                p = l.x,
                                g = l.y;
                            v ? p + f >= d && (g = l.y += b, l.line++, p = l.x = e.left + (d - u[l.line]) / 2) : g + b > e.bottom && (p = l.x = p + e.columnWidths[l.line] + a.padding, g = l.y = e.top + a.padding, l.line++),
                                function(e, a, n) {
                                    if (!(isNaN(y) || y <= 0)) {
                                        c.save(), c.fillStyle = m(n.fillStyle, r.defaultColor), c.lineCap = m(n.lineCap, s.borderCapStyle), c.lineDashOffset = m(n.lineDashOffset, s.borderDashOffset), c.lineJoin = m(n.lineJoin, s.borderJoinStyle), c.lineWidth = m(n.lineWidth, s.borderWidth), c.strokeStyle = m(n.strokeStyle, r.defaultColor);
                                        var o = 0 === m(n.lineWidth, s.borderWidth);
                                        if (c.setLineDash && c.setLineDash(m(n.lineDash, s.borderDash)), t.labels && t.labels.usePointStyle) {
                                            var d = _ * Math.SQRT2 / 2,
                                                u = d / Math.SQRT2,
                                                l = e + u,
                                                h = a + u;
                                            i.canvas.drawPoint(c, n.pointStyle, d, l, h)
                                        } else o || c.strokeRect(e, a, y, _), c.fillRect(e, a, y, _);
                                        c.restore()
                                    }
                                }(p, g, n), M[o].left = p, M[o].top = g,
                                function(e, t, a, n) {
                                    var r = _ / 2,
                                        i = y + r + e,
                                        o = t + r;
                                    c.fillText(a.text, i, o), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, o), c.lineTo(i + n, o), c.stroke())
                                }(p, g, n, h), v ? l.x += f + a.padding : l.y += b
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
                    t && s(e, t)
                },
                beforeUpdate: function(e) {
                    var a = e.options.legend,
                        r = e.legend;
                    a ? (i.mergeIf(a, n.global.legend), r ? (t.configure(e, r, a), r.options = a) : s(e, a)) : r && (t.removeBox(e, r), delete e.legend)
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
                for (i = 0; i < t.length; i++) t[i] = l(t[i], 0, 255);
                return a = a || 0 == a ? l(a, 0, 1) : 1, t[3] = a, t
            }
        }

        function i(e) {
            if (e) {
                var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [l(parseInt(t[1]), 0, 360), l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }

        function o(e) {
            if (e) {
                var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [l(parseInt(t[1]), 0, 360), l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }

        function s(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
        }

        function d(e, t) {
            return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
        }

        function u(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
        }

        function l(e, t, a) {
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
            getHwb: o,
            getAlpha: function(e) {
                var t = r(e);
                if (t) return t[3];
                if (t = i(e)) return t[3];
                if (t = o(e)) return t[3]
            },
            hexString: function(e) {
                return "#" + c(e[0]) + c(e[1]) + c(e[2])
            },
            rgbString: function(e, t) {
                if (t < 1 || e[3] && e[3] < 1) return s(e, t);
                return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
            },
            rgbaString: s,
            percentString: function(e, t) {
                if (t < 1 || e[3] && e[3] < 1) return d(e, t);
                var a = Math.round(e[0] / 255 * 100),
                    n = Math.round(e[1] / 255 * 100),
                    r = Math.round(e[2] / 255 * 100);
                return "rgb(" + a + "%, " + n + "%, " + r + "%)"
            },
            percentaString: d,
            hslString: function(e, t) {
                if (t < 1 || e[3] && e[3] < 1) return u(e, t);
                return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            },
            hslaString: u,
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
    b7g8: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            var t = n(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    b9IH: function(e, t, a) {
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
            var a = e.getBoundingClientRect(),
                o = t.getBoundingClientRect();
            a.bottom > o.bottom && i(e, r);
            a.top < o.top && i(e, n)
        };
        var n = !0,
            r = !1;

        function i(e, t) {
            requestAnimationFrame(function() {
                e.scrollIntoView(t)
            })
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
    balU: function(e, t, a) {
        var n = a("xA5w"),
            r = a("Mdww");
        e.exports = function(e, t) {
            var a = n(e),
                i = Number(t),
                o = a.getFullYear(),
                s = a.getDate(),
                d = new Date(0);
            d.setFullYear(o, i, 15), d.setHours(0, 0, 0, 0);
            var u = r(d);
            return a.setMonth(i, Math.min(s, u)), a
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
    dH3X: function(e, t, a) {
        var n = a("607n");
        e.exports = function(e) {
            if (n(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
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
    danj: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = n(e),
                r = Number(t);
            return a.setMinutes(r), a
        }
    },
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
    "e/EH": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return 3 === n(e).getDay()
        }
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
    eCZG: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e) {
            return n(e).getTime() < (new Date).getTime()
        }
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
    fo7E: function(e, t, a) {
        var n = a("w4by");
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, -a)
        }
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
    gAt4: function(e, t, a) {
        var n = a("xA5w"),
            r = a("nizW"),
            i = a("NKE6");
        e.exports = function(e, t) {
            var a = n(e),
                o = n(t),
                s = i(a, o),
                d = Math.abs(r(a, o));
            return a.setDate(a.getDate() - s * d), s * (d - (i(a, o) === -s))
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
            o = a("2xI1");
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
                    var s = o.acquireContext(t, a),
                        d = s && s.canvas,
                        u = d && d.height,
                        l = d && d.width;
                    i.id = r.uid(), i.ctx = s, i.canvas = d, i.config = a, i.width = l, i.height = u, i.aspectRatio = u ? l / u : null, i.options = a.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
                        get: function() {
                            return i.config.data
                        },
                        set: function(e) {
                            i.config.data = e
                        }
                    }), s && d ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
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
                        o = n.maintainAspectRatio && a.aspectRatio || null,
                        s = Math.max(0, Math.floor(r.getMaximumWidth(i))),
                        d = Math.max(0, Math.floor(o ? s / o : r.getMaximumHeight(i)));
                    if ((a.width !== s || a.height !== d) && (i.width = a.width = s, i.height = a.height = d, i.style.width = s + "px", i.style.height = d + "px", r.retinaScale(a, n.devicePixelRatio), !e)) {
                        var u = {
                            width: s,
                            height: d
                        };
                        t.notify(a, "resize", [u]), a.options.onResize && a.options.onResize(a, u), a.stop(), a.update(a.options.responsiveAnimationDuration)
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
                        o = [];
                    n.scales && (o = o.concat((n.scales.xAxes || []).map(function(e) {
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
                    }))), n.scale && o.push({
                        options: n.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }), r.each(o, function(n) {
                        var o = n.options,
                            s = r.valueOrDefault(o.type, n.dtype),
                            d = e.scaleService.getScaleConstructor(s);
                        if (d) {
                            a(o.position) !== a(n.dposition) && (o.position = n.dposition);
                            var u = new d({
                                id: o.id,
                                options: o,
                                ctx: t.ctx,
                                chart: t
                            });
                            i[u.id] = u, u.mergeTicksOptions(), n.isDefault && (t.scale = u)
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
                    var a, n, i = this;
                    if (e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        }), (n = (a = i).options).scale ? a.scale.options = n.scale : n.scales && n.scales.xAxes.concat(n.scales.yAxes).forEach(function(e) {
                            a.scales[e.id].options = e
                        }), a.tooltip._options = n.tooltips, !1 !== t.notify(i, "beforeUpdate")) {
                        i.tooltip._data = i.data;
                        var o = i.buildOrUpdateControllers();
                        r.each(i.data.datasets, function(e, t) {
                            i.getDatasetMeta(t).controller.buildOrUpdateElements()
                        }, i), i.updateLayout(), r.each(o, function(e) {
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
                        o = a.lazy;
                    if (!1 !== t.notify(n, "beforeRender")) {
                        var s = n.options.animation,
                            d = function(e) {
                                t.notify(n, "afterRender"), r.callback(s && s.onComplete, [e], n)
                            };
                        if (s && (void 0 !== i && 0 !== i || void 0 === i && 0 !== s.duration)) {
                            var u = new e.Animation({
                                numSteps: (i || s.duration) / 16.66,
                                easing: a.easing || s.easing,
                                render: function(e, t) {
                                    var a = r.easing.effects[t.easing],
                                        n = t.currentStep,
                                        i = n / t.numSteps;
                                    e.draw(a(i), i, n)
                                },
                                onAnimationProgress: s.onProgress,
                                onAnimationComplete: d
                            });
                            e.animationService.addAnimation(n, u, i, o)
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
                        s = i.canvas;
                    for (i.stop(), a = 0, n = i.data.datasets.length; a < n; ++a) i.destroyDatasetMeta(a);
                    s && (i.unbindEvents(), r.canvas.clear(i), o.releaseContext(i.ctx), i.canvas = null, i.ctx = null), t.notify(i, "destroy"), delete e.instances[i.id]
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
                    for (var n, r = ["fullWidth", "position", "weight"], i = r.length, o = 0; o < i; ++o) n = r[o], a.hasOwnProperty(n) && (t[n] = a[n])
                },
                update: function(e, r, i) {
                    if (e) {
                        var o = e.options.layout || {},
                            s = n.options.toPadding(o.padding),
                            d = s.left,
                            u = s.right,
                            l = s.top,
                            c = s.bottom,
                            m = t(e.boxes, "left"),
                            h = t(e.boxes, "right"),
                            _ = t(e.boxes, "top"),
                            f = t(e.boxes, "bottom"),
                            p = t(e.boxes, "chartArea");
                        a(m, !0), a(h, !1), a(_, !0), a(f, !1);
                        var g = r - d - u,
                            y = i - l - c,
                            M = y / 2,
                            v = (r - g / 2) / (m.length + h.length),
                            b = (i - M) / (_.length + f.length),
                            L = g,
                            D = y,
                            k = [];
                        n.each(m.concat(h, _, f), function(e) {
                            var t, a = e.isHorizontal();
                            a ? (t = e.update(e.fullWidth ? g : L, b), D -= t.height) : (t = e.update(v, M), L -= t.width), k.push({
                                horizontal: a,
                                minSize: t,
                                box: e
                            })
                        });
                        var Y = 0,
                            w = 0,
                            x = 0,
                            T = 0;
                        n.each(_.concat(f), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                Y = Math.max(Y, t.left), w = Math.max(w, t.right)
                            }
                        }), n.each(m.concat(h), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                x = Math.max(x, t.top), T = Math.max(T, t.bottom)
                            }
                        });
                        var S = d,
                            O = u,
                            j = l,
                            H = c;
                        n.each(m.concat(h), I), n.each(m, function(e) {
                            S += e.width
                        }), n.each(h, function(e) {
                            O += e.width
                        }), n.each(_.concat(f), I), n.each(_, function(e) {
                            j += e.height
                        }), n.each(f, function(e) {
                            H += e.height
                        }), n.each(m.concat(h), function(e) {
                            var t = n.findNextWhere(k, function(t) {
                                    return t.box === e
                                }),
                                a = {
                                    left: 0,
                                    right: 0,
                                    top: j,
                                    bottom: H
                                };
                            t && e.update(t.minSize.width, D, a)
                        }), S = d, O = u, j = l, H = c, n.each(m, function(e) {
                            S += e.width
                        }), n.each(h, function(e) {
                            O += e.width
                        }), n.each(_, function(e) {
                            j += e.height
                        }), n.each(f, function(e) {
                            H += e.height
                        });
                        var C = Math.max(Y - S, 0);
                        S += C, O += Math.max(w - O, 0);
                        var P = Math.max(x - j, 0);
                        j += P, H += Math.max(T - H, 0);
                        var A = i - j - H,
                            F = r - S - O;
                        F === L && A === D || (n.each(m, function(e) {
                            e.height = A
                        }), n.each(h, function(e) {
                            e.height = A
                        }), n.each(_, function(e) {
                            e.fullWidth || (e.width = F)
                        }), n.each(f, function(e) {
                            e.fullWidth || (e.width = F)
                        }), D = A, L = F);
                        var E = d + C,
                            W = l + P;
                        n.each(m.concat(_), N), E += L, W += D, n.each(h, N), n.each(f, N), e.chartArea = {
                            left: S,
                            top: j,
                            right: S + L,
                            bottom: j + D
                        }, n.each(p, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(L, D)
                        })
                    }

                    function I(e) {
                        var t = n.findNextWhere(k, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var a = {
                                    left: Math.max(S, Y),
                                    right: Math.max(O, w),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? g : L, y / 2, a)
                            } else e.update(t.minSize.width, D)
                    }

                    function N(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? d : S, e.right = e.fullWidth ? r - u : S + L, e.top = W, e.bottom = W + e.height, W = e.bottom) : (e.left = E, e.right = E + e.width, e.top = j, e.bottom = j + D, E = e.right)
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
    jQas: function(e, t, a) {
        var n = a("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                a = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                o = ["AM", "PM"],
                s = ["am", "pm"],
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
                        return e.getHours() / 12 >= 1 ? o[1] : o[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
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
                return null != e && "none" !== e
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
            i.configMerge = function() {
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
                    o = a.skip ? t : a,
                    s = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
                    d = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
                    u = s / (s + d),
                    l = d / (s + d),
                    c = n * (u = isNaN(u) ? 0 : u),
                    m = n * (l = isNaN(l) ? 0 : l);
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
                var t, a, n, r, o, s, d, u, l, c = (e || []).map(function(e) {
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
                for (t = 0; t < m - 1; ++t) n = c[t], r = c[t + 1], n.model.skip || r.model.skip || (i.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (o = n.mK / n.deltaK, s = r.mK / n.deltaK, (u = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (d = 3 / Math.sqrt(u), n.mK = o * d * n.deltaK, r.mK = s * d * n.deltaK)));
                for (t = 0; t < m; ++t)(n = c[t]).model.skip || (a = t > 0 ? c[t - 1] : null, r = t < m - 1 ? c[t + 1] : null, a && !a.model.skip && (l = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - l, n.model.controlPointPreviousY = n.model.y - l * n.mK), r && !r.model.skip && (l = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + l, n.model.controlPointNextY = n.model.y + l * n.mK))
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
                    o = e.currentTarget || e.srcElement,
                    s = o.getBoundingClientRect(),
                    d = r.touches;
                d && d.length > 0 ? (a = d[0].clientX, n = d[0].clientY) : (a = r.clientX, n = r.clientY);
                var u = parseFloat(i.getStyle(o, "padding-left")),
                    l = parseFloat(i.getStyle(o, "padding-top")),
                    c = parseFloat(i.getStyle(o, "padding-right")),
                    m = parseFloat(i.getStyle(o, "padding-bottom")),
                    h = s.right - s.left - u - c,
                    _ = s.bottom - s.top - l - m;
                return {
                    x: a = Math.round((a - s.left - u) / h * o.width / t.currentDevicePixelRatio),
                    y: n = Math.round((n - s.top - l) / _ * o.height / t.currentDevicePixelRatio)
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
                var r = (n = n || {}).data = n.data || {},
                    o = n.garbageCollect = n.garbageCollect || [];
                n.font !== t && (r = n.data = {}, o = n.garbageCollect = [], n.font = t), e.font = t;
                var s = 0;
                i.each(a, function(t) {
                    null != t && !0 !== i.isArray(t) ? s = i.measureText(e, r, o, s, t) : i.isArray(t) && i.each(t, function(t) {
                        null == t || i.isArray(t) || (s = i.measureText(e, r, o, s, t))
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
            var t = e.layoutService,
                a = i.noop;

            function o(a, n) {
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
                        o = t(a.fontSize, n.global.defaultFontSize),
                        s = e.minSize,
                        d = i.isArray(a.text) ? a.text.length : 1,
                        u = i.options.toLineHeight(a.lineHeight, o),
                        l = r ? d * u + 2 * a.padding : 0;
                    e.isHorizontal() ? (s.width = e.maxWidth, s.height = l) : (s.width = l, s.height = e.maxHeight), e.width = s.width, e.height = s.height
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
                        o = n.global;
                    if (r.display) {
                        var s, d, u, l = a(r.fontSize, o.defaultFontSize),
                            c = a(r.fontStyle, o.defaultFontStyle),
                            m = a(r.fontFamily, o.defaultFontFamily),
                            h = i.fontString(l, c, m),
                            _ = i.options.toLineHeight(r.lineHeight, l),
                            f = _ / 2 + r.padding,
                            p = 0,
                            g = e.top,
                            y = e.left,
                            M = e.bottom,
                            v = e.right;
                        t.fillStyle = a(r.fontColor, o.defaultFontColor), t.font = h, e.isHorizontal() ? (d = y + (v - y) / 2, u = g + f, s = v - y) : (d = "left" === r.position ? y + f : v - f, u = g + (M - g) / 2, s = M - g, p = Math.PI * ("left" === r.position ? -.5 : .5)), t.save(), t.translate(d, u), t.rotate(p), t.textAlign = "center", t.textBaseline = "middle";
                        var b = r.text;
                        if (i.isArray(b))
                            for (var L = 0, D = 0; D < b.length; ++D) t.fillText(b[D], 0, L, s), L += _;
                        else t.fillText(b, 0, 0, s);
                        t.restore()
                    }
                }
            }), {
                id: "title",
                beforeInit: function(e) {
                    var t = e.options.title;
                    t && o(e, t)
                },
                beforeUpdate: function(a) {
                    var r = a.options.title,
                        s = a.titleBlock;
                    r ? (i.mergeIf(r, n.global.title), s ? (t.configure(a, s, r), s.options = r) : o(a, r)) : s && (e.layoutService.removeBox(a, s), delete a.titleBlock)
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
            o = a("GI7G"),
            s = a("uyaC"),
            d = 1440,
            u = 2520,
            l = 43200,
            c = 86400;
        e.exports = function(e, t, a) {
            var m = a || {},
                h = n(e, t),
                _ = m.locale,
                f = s.distanceInWords.localize;
            _ && _.distanceInWords && _.distanceInWords.localize && (f = _.distanceInWords.localize);
            var p, g, y = {
                addSuffix: Boolean(m.addSuffix),
                comparison: h
            };
            h > 0 ? (p = r(e), g = r(t)) : (p = r(t), g = r(e));
            var M, v = i(g, p),
                b = g.getTimezoneOffset() - p.getTimezoneOffset(),
                L = Math.round(v / 60) - b;
            if (L < 2) return m.includeSeconds ? v < 5 ? f("lessThanXSeconds", 5, y) : v < 10 ? f("lessThanXSeconds", 10, y) : v < 20 ? f("lessThanXSeconds", 20, y) : v < 40 ? f("halfAMinute", null, y) : f(v < 60 ? "lessThanXMinutes" : "xMinutes", 1, y) : 0 === L ? f("lessThanXMinutes", 1, y) : f("xMinutes", L, y);
            if (L < 45) return f("xMinutes", L, y);
            if (L < 90) return f("aboutXHours", 1, y);
            if (L < d) return f("aboutXHours", Math.round(L / 60), y);
            if (L < u) return f("xDays", 1, y);
            if (L < l) return f("xDays", Math.round(L / d), y);
            if (L < c) return f("aboutXMonths", M = Math.round(L / l), y);
            if ((M = o(g, p)) < 12) return f("xMonths", Math.round(L / l), y);
            var D = M % 12,
                k = Math.floor(M / 12);
            return D < 3 ? f("aboutXYears", k, y) : D < 9 ? f("overXYears", k, y) : f("almostXYears", k + 1, y)
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
                var o = "";
                switch (r) {
                    case "s":
                        return i ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return i ? "minuutin" : "minuutti";
                    case "mm":
                        o = i ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return i ? "tunnin" : "tunti";
                    case "hh":
                        o = i ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return i ? "päivän" : "päivä";
                    case "dd":
                        o = i ? "päivän" : "päivää";
                        break;
                    case "M":
                        return i ? "kuukauden" : "kuukausi";
                    case "MM":
                        o = i ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return i ? "vuoden" : "vuosi";
                    case "yy":
                        o = i ? "vuoden" : "vuotta"
                }
                return o = function(e, n) {
                    return e < 10 ? n ? a[e] : t[e] : e
                }(e, i) + " " + o
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
                o = n(t),
                s = a.getTime() - a.getTimezoneOffset() * r,
                d = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - d) / i)
        }
    },
    nk30: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = t && Number(t.weekStartsOn) || 0,
                r = n(e),
                i = r.getDay(),
                o = 6 + (i < a ? -7 : 0) - (i - a);
            return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + o), r
        }
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
                        o = i.getDataset(),
                        s = o.data || (o.data = []);
                    i._data !== s && (i._data && a(i._data, i), r = i, (e = s)._chartjs ? e._chartjs.listeners.push(r) : (Object.defineProperty(e, "_chartjs", {
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
                    })), i._data = s), i.resyncElements()
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
    qNYo: function(e, t, a) {
        var n = a("xA5w"),
            r = a("9Jn5"),
            i = a("NKE6"),
            o = a("MKc+");
        e.exports = function(e, t) {
            var a = n(e),
                s = n(t),
                d = i(a, s),
                u = Math.abs(r(a, s));
            return a = o(a, d * u), d * (u - (i(a, s) === -d))
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, r, i = a("RH2O"),
            o = a("2KeS"),
            s = a("+xm8"),
            d = a("f2i/"),
            u = a("Aj/L"),
            l = a("TToO"),
            c = a("GiK3"),
            m = a("CIox"),
            h = a("6sO2"),
            _ = a("yWCw"),
            f = a("68hr"),
            p = a("TP6L"),
            g = a("w9tK"),
            y = a("CSlQ"),
            M = a("Odds"),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        inputValue: "",
                        buttonDisabled: !0,
                        changedSinceSubmit: !1
                    }, t.renderDescriptor = function() {
                        return t.props.descriptor.split("\n").map(function(e, t) {
                            return c.createElement(M.O, {
                                key: t
                            }, e)
                        })
                    }, t.renderButton = function() {
                        var e = c.createElement(M.u, {
                                disabled: t.state.buttonDisabled,
                                onClick: t.handleSubmit
                            }, t.props.buttonText),
                            a = c.createElement(M._44, {
                                label: t.props.errorString,
                                direction: M._46.Right,
                                show: !0
                            }, e);
                        return t.props.errorString.length && !t.state.changedSinceSubmit ? a : e
                    }, t.handleChangeInput = function(e) {
                        var a = e.target.value;
                        t.setState({
                            inputValue: a,
                            buttonDisabled: 0 === a.length,
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
                    return c.createElement(M._4, {
                        alignSelf: M.d.Start,
                        display: M.P.Flex,
                        flexDirection: M.R.Column
                    }, c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Row,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(M._0, {
                        type: M._1.Text,
                        placeholder: this.props.placeholder,
                        value: this.state.inputValue,
                        onChange: this.handleChangeInput,
                        maxLength: 25
                    }), c.createElement(M._4, null, this.renderButton())), c.createElement(M._4, null, this.renderDescriptor()))
                }, t
            }(c.Component),
            b = a("zCIC");
        a("A5K9");
        ! function(e) {
            e.ToTop = "move-to-top", e.Up = "move-up", e.Down = "move-down", e.ToBottom = "move-to-bottom"
        }(n || (n = {})),
        function(e) {
            e.AllButtons = "all-buttons", e.RemoveOnly = "remove-button-only", e.MoveUpAndRemoveOnly = "move-up-and-remove-buttons-only", e.MoveDownAndRemoveOnly = "move-down-and-remove-buttons-only"
        }(r || (r = {}));
        var L, D, k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHovered: !1
                    }, t.renderButtons = function() {
                        var e = t.props.buttonConfiguration === r.AllButtons,
                            a = e || t.props.buttonConfiguration === r.MoveUpAndRemoveOnly,
                            i = e || t.props.buttonConfiguration === r.MoveDownAndRemoveOnly;
                        return c.createElement(M._4, null, a && c.createElement(M._44, {
                            label: Object(h.d)("Move Up", "TeamsDashboard"),
                            direction: M._46.Left
                        }, c.createElement(M.u, {
                            type: M.A.Text,
                            blurAfterClick: !0,
                            icon: M._18.ArrowUp,
                            onClick: t.handleOnMoveClick(n.Up),
                            disabled: t.props.isDisabled
                        })), i && c.createElement(M._44, {
                            label: Object(h.d)("Move Down", "TeamsDashboard"),
                            direction: M._46.Left
                        }, c.createElement(M.u, {
                            type: M.A.Text,
                            blurAfterClick: !0,
                            icon: M._18.ArrowDown,
                            onClick: t.handleOnMoveClick(n.Down),
                            disabled: t.props.isDisabled
                        })), a && c.createElement(M._44, {
                            label: Object(h.d)("Move To Top", "TeamsDashboard"),
                            direction: M._46.Left
                        }, c.createElement(M.u, {
                            type: M.A.Text,
                            blurAfterClick: !0,
                            icon: M._18.ToTop,
                            onClick: t.handleOnMoveClick(n.ToTop),
                            disabled: t.props.isDisabled
                        })), i && c.createElement(M._44, {
                            label: Object(h.d)("Move To Bottom", "TeamsDashboard"),
                            direction: M._46.Left
                        }, c.createElement(M.u, {
                            type: M.A.Text,
                            blurAfterClick: !0,
                            icon: M._18.ToBottom,
                            onClick: t.handleOnMoveClick(n.ToBottom),
                            disabled: t.props.isDisabled
                        })), c.createElement(M._44, {
                            label: Object(h.d)("Remove", "TeamsDashboard"),
                            direction: M._46.Left
                        }, c.createElement(M.u, {
                            type: M.A.Text,
                            blurAfterClick: !0,
                            icon: M._18.Trash,
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
                    var e = Object(h.d)("{displayName}'s Avatar Image", {
                        displayName: this.props.member.displayName
                    }, "TeamsDashboard");
                    return c.createElement("div", {
                        "data-test-selector": this.props.listItemsSelector,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                    }, c.createElement(M._27, {
                        background: this.state.isHovered ? M.m.Base : void 0,
                        display: M.P.Flex,
                        flexDirection: M.R.Row,
                        fullWidth: !0,
                        justifyContent: M._3.Between,
                        padding: 1
                    }, c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Row,
                        alignItems: M.c.Center
                    }, c.createElement(M.l, {
                        src: this.props.member.avatarSrc,
                        alt: e,
                        size: 30
                    }), c.createElement(M._4, {
                        margin: {
                            left: 1
                        }
                    }, c.createElement(M.O, null, this.props.member.displayName))), c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Row,
                        alignItems: M.c.Center
                    }, this.state.isHovered && this.renderButtons())))
                }, t
            }(c.Component),
            Y = function(e) {
                var t, a, i = function(t, a) {
                    var r, i = e.members.findIndex(function(e) {
                        return e.id === t
                    });
                    switch (a) {
                        case n.ToTop:
                            r = 0;
                            break;
                        case n.Up:
                            r = i - 1;
                            break;
                        case n.Down:
                            r = i + 1;
                            break;
                        case n.ToBottom:
                            r = e.members.length - 1;
                            break;
                        default:
                            r = i
                    }
                    e.onMoveClick(t, r)
                };
                return c.createElement(M._4, {
                    fullWidth: !0,
                    margin: {
                        top: 2,
                        bottom: 2
                    }
                }, e.header && c.createElement(M.O, {
                    type: M._41.H3
                }, e.header), e.members.length ? (t = e.members, a = e.onMoveClick ? i : void 0, c.createElement(b.b, null, c.createElement(M._4, {
                    className: "members-list",
                    display: M.P.Flex,
                    flexDirection: M.R.Column
                }, t.map(function(n, i) {
                    return c.createElement(k, {
                        key: n.id,
                        buttonConfiguration: function(t, a) {
                            if (!e.onMoveClick) return r.RemoveOnly;
                            var n = 0 === t,
                                i = t === a - 1;
                            return n && i ? r.RemoveOnly : n ? r.MoveDownAndRemoveOnly : i ? r.MoveUpAndRemoveOnly : r.AllButtons
                        }(i, t.length),
                        member: n,
                        listItemsSelector: e.listItemsSelector,
                        onDeleteClick: e.onDeleteClick,
                        onMoveClick: a,
                        isDisabled: e.isDisabled
                    })
                })))) : c.createElement(M.O, null, e.emptyStateText))
            },
            w = function(e) {
                return c.createElement(b.b, null, c.createElement(M._4, {
                    display: M.P.Flex,
                    flexDirection: M.R.Column,
                    alignItems: M.c.Start,
                    padding: 2
                }, c.createElement(M._4, {
                    display: M.P.Flex,
                    padding: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, c.createElement(M.O, {
                    "data-test-selector": e.titleSelector,
                    type: M._41.H1
                }, e.title)), e.children))
            };
        ! function(e) {
            e.Revenue = "revenue", e.Stats = "stats", e.Members = "members", e.FeaturedChannels = "featured-channels", e.Settings = "settings"
        }(L || (L = {})),
        function(e) {
            e.ChannelNotFoundByLogin = "CHANNEL_NOT_FOUND_BY_LOGIN", e.ChannelPendingInvitation = "CHANNEL_PENDING_INVITATION", e.ChannelAlreadyMember = "CHANNEL_ALREADY_MEMBER", e.ChannelAlreadyFeatured = "CHANNEL_ALREADY_FEATURED"
        }(D || (D = {}));
        var x, T = function(e) {
                for (var t in D)
                    if (e.includes(D[t])) return D[t];
                return ""
            },
            S = function(e) {
                switch (e) {
                    case D.ChannelNotFoundByLogin:
                        return Object(h.d)("Channel not found", "TeamsDashboard");
                    case D.ChannelPendingInvitation:
                        return Object(h.d)("Channel has a pending invitation", "TeamsDashboard");
                    case D.ChannelAlreadyMember:
                        return Object(h.d)("Channel is already a member", "TeamsDashboard");
                    case D.ChannelAlreadyFeatured:
                        return Object(h.d)("Channel is already featured", "TeamsDashboard");
                    default:
                        return Object(h.d)("Unknown Error", "TeamsDashboard")
                }
            },
            O = 100,
            j = function(e) {
                return e.map(H)
            },
            H = function(e) {
                return {
                    id: e._id,
                    displayName: e.display_name,
                    avatarSrc: e.logo
                }
            },
            C = function(e, t) {
                return e.map(function(e, a) {
                    return {
                        id: e.id,
                        displayName: e.displayName,
                        avatarSrc: e.avatarSrc,
                        checked: t && a < O
                    }
                })
            },
            P = function(e) {
                return e.filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                })
            },
            A = function() {
                return Object(h.d)("Twitch username", "TeamsDashboard")
            },
            F = function(e) {
                switch (e) {
                    case L.Revenue:
                        return Object(h.d)("Revenue", "TeamsDashboard");
                    case L.Stats:
                        return Object(h.d)("Stats", "TeamsDashboard");
                    case L.Members:
                        return Object(h.d)("Members", "TeamsDashboard");
                    case L.FeaturedChannels:
                        return Object(h.d)("Featured Channels", "TeamsDashboard");
                    case L.Settings:
                        return Object(h.d)("Settings", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            E = a("9u8h"),
            W = this,
            I = function(e, t) {
                return l.__awaiter(W, void 0, void 0, function() {
                    var a, n, r, i;
                    return l.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return a = "/v5/teams/" + e + "/dashboard/featured_channels", [4, E.a.post(a, {
                                    body: {
                                        channel_login: t
                                    }
                                })];
                            case 1:
                                return (n = o.sent()).body && 200 === n.status ? [2, H(n.body.featured_channel.channel)] : (r = n.error.message) && "" !== (i = T(r)) ? [2, Promise.reject(i)] : [2, Promise.reject(JSON.stringify(n.error))]
                        }
                    })
                })
            },
            N = this,
            R = this,
            z = function(e, t) {
                return V("/v5/teams/" + e + "/dashboard/channels/" + t + "/membership")
            },
            B = function(e, t) {
                return V("/v5/teams/" + e + "/dashboard/featured_channels/" + t)
            },
            J = function(e, t) {
                return V("/v5/teams/" + e + "/dashboard/channels/" + t + "/invitation")
            },
            V = function(e) {
                return l.__awaiter(R, void 0, void 0, function() {
                    return l.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, E.a.delete(e)];
                            case 1:
                                return [2, 204 === t.sent().status]
                        }
                    })
                })
            },
            U = this,
            G = function(e, t, a) {
                return K("/v5/teams/" + e + "/dashboard/channels/" + t + "/membership", a)
            },
            q = function(e, t, a) {
                return K("/v5/teams/" + e + "/dashboard/featured_channels/" + t, a)
            },
            K = function(e, t) {
                return l.__awaiter(U, void 0, void 0, function() {
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, E.a.put(e, {
                                    body: {
                                        display_position: t
                                    }
                                })];
                            case 1:
                                return [2, 204 === a.sent().status]
                        }
                    })
                })
            },
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        featuredChannels: [],
                        tooltipError: "",
                        isDisabled: !1
                    }, t.handleAddFeaturedChannel = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, a;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            tooltipError: ""
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, I(this.props.teamName, e)];
                                    case 2:
                                        return t = n.sent(), this.setState({
                                            featuredChannels: this.state.featuredChannels.concat(t)
                                        }), [3, 4];
                                    case 3:
                                        return a = n.sent(), this.setState({
                                            tooltipError: S(a)
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
                                        }), [4, B(this.props.teamName, e)];
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
                    }, t.handleMoveFeaturedChannel = function(e, a) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.setState({
                                            isDisabled: !0
                                        }), [4, q(this.props.teamName, e, a)];
                                    case 1:
                                        return r.sent() && (t = this.state.featuredChannels.findIndex(function(t) {
                                            return t.id === e
                                        }), (n = this.state.featuredChannels.slice()).splice(a, 0, n.splice(t, 1)[0]), this.setState({
                                            featuredChannels: n
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
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return e = this.setState, t = {}, [4, (n = this.props.teamName, l.__awaiter(N, void 0, void 0, function() {
                                        var e, t, a;
                                        return l.__generator(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return e = "/v5/teams/" + n + "/dashboard/featured_channels", [4, E.a.get(e)];
                                                case 1:
                                                    return !(t = r.sent()).body || 200 !== t.status || t.error || t.requestError ? [2, []] : (a = t.body.featured_channels.map(function(e) {
                                                        return e.channel
                                                    }), [2, j(a)])
                                            }
                                        })
                                    }))];
                                case 1:
                                    return e.apply(this, [(t.featuredChannels = a.sent(), t)]), [2]
                            }
                            var n
                        })
                    })
                }, t.prototype.render = function() {
                    return c.createElement(w, {
                        title: F(L.FeaturedChannels),
                        titleSelector: "featured-channels-page-title"
                    }, c.createElement(v, {
                        descriptor: Object(h.d)("Pick channels to feature. Featured channels do not need to be a member of the team.\nIf none of the featured channels are live, your team will feature a live member based on member ordering.", "TeamsDashboard"),
                        placeholder: A(),
                        buttonText: Object(h.d)("Add", "TeamsDashboard"),
                        submitAction: this.handleAddFeaturedChannel,
                        errorString: this.state.tooltipError
                    }), c.createElement(Y, {
                        emptyStateText: Object(h.d)("No featured channels.", "TeamsDashboard"),
                        members: this.state.featuredChannels,
                        listItemsSelector: "featured-channels-list-items",
                        onDeleteClick: this.handleDeleteFeaturedChannel,
                        isDisabled: this.state.isDisabled,
                        onMoveClick: this.handleMoveFeaturedChannel
                    }))
                }, t = l.__decorate([Object(y.d)("FeaturedChannelsPage", {
                    autoReportInteractive: !0,
                    destination: g.a.TeamsDashboardFeaturedChannels
                })], t)
            }(c.Component),
            X = a("PGY2"),
            Q = this,
            $ = this;
        ! function(e) {
            e.StatsRevealed = "stats_revealed", e.RevenueRevealed = "revenue_revealed"
        }(x || (x = {}));
        var ee, te = function(e, t) {
                return l.__awaiter($, void 0, void 0, function() {
                    var a, n, r;
                    return l.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return a = "/v5/teams/" + e + "/dashboard/members" + (t ? "?" + t + "=true" : ""), [4, Object(X.e)({
                                    path: a
                                })];
                            case 1:
                                return n = i.sent(), r = n.body ? n.body.channels : [], [2, j(r)]
                        }
                    })
                })
            },
            ae = this,
            ne = function(e, t) {
                return l.__awaiter(ae, void 0, void 0, function() {
                    var a, n, r, i;
                    return l.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return a = "/v5/teams/" + e + "/dashboard/invitations", [4, E.a.post(a, {
                                    body: {
                                        channel_login: t
                                    }
                                })];
                            case 1:
                                return (n = o.sent()).body && 200 === n.status ? [2, H(n.body.invitation.channel)] : (r = n.error.message) && "" !== (i = T(r)) ? [2, Promise.reject(i)] : [2, Promise.reject(JSON.stringify(n.error))]
                        }
                    })
                })
            },
            re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        members: [],
                        invitations: [],
                        invitationError: "",
                        isDisabled: !1
                    }, t.onInviteClick = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, a, n;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.setState({
                                            invitationError: ""
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, ne(this.props.teamName, e)];
                                    case 2:
                                        return t = r.sent(), a = this.state.invitations.concat(t), this.setState({
                                            invitations: a
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.setState({
                                            invitationError: S(n)
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleMoveMember = function(e, a) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return l.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.setState({
                                            isDisabled: !0
                                        }), [4, G(this.props.teamName, e, a)];
                                    case 1:
                                        return r.sent() && (t = this.state.members.findIndex(function(t) {
                                            return t.id === e
                                        }), (n = this.state.members.slice()).splice(a, 0, n.splice(t, 1)[0]), this.setState({
                                            members: n
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
                                        }), [4, J(this.props.teamName, e)];
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
                                        }), [4, z(this.props.teamName, e)];
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
                                    return [4, Promise.all([te(this.props.teamName), (a = this.props.teamName, l.__awaiter(Q, void 0, void 0, function() {
                                        var e, t, n;
                                        return l.__generator(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return e = "/v5/teams/" + a + "/dashboard/invitations", [4, Object(X.e)({
                                                        path: e
                                                    })];
                                                case 1:
                                                    return t = r.sent(), n = t.body ? t.body.invitations.map(function(e) {
                                                        return e.channel
                                                    }) : [], [2, j(n)]
                                            }
                                        })
                                    }))])];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        members: e[0],
                                        invitations: e[1]
                                    }), [2]
                            }
                            var a
                        })
                    })
                }, t.prototype.render = function() {
                    return c.createElement(w, {
                        title: F(L.Members),
                        titleSelector: "members-page-title"
                    }, c.createElement(v, {
                        descriptor: Object(h.d)("Live team members will always be at the top. Order is respected for live members and offline members.\nOrder also determines which member will be featured in the video player.", "TeamsDashboard"),
                        placeholder: A(),
                        buttonText: Object(h.d)("Invite", "TeamsDashboard"),
                        submitAction: this.onInviteClick,
                        errorString: this.state.invitationError
                    }), c.createElement(Y, {
                        emptyStateText: Object(h.d)("No pending invitations.", "TeamsDashboard"),
                        header: Object(h.d)("Pending Team Invitations", "TeamsDashboard"),
                        members: this.state.invitations,
                        listItemsSelector: "invitations-list-items",
                        onDeleteClick: this.handleDeleteInvitation,
                        isDisabled: this.state.isDisabled
                    }), c.createElement(Y, {
                        emptyStateText: Object(h.d)("No team members yet.", "TeamsDashboard"),
                        header: Object(h.d)("Current Members", "TeamsDashboard"),
                        members: this.state.members,
                        listItemsSelector: "members-list-items",
                        onDeleteClick: this.handleDeleteMember,
                        onMoveClick: this.handleMoveMember,
                        isDisabled: this.state.isDisabled
                    }))
                }, t = l.__decorate([Object(y.d)("MembersPage", {
                    autoReportInteractive: !0,
                    destination: g.a.TeamsDashboardMembers
                })], t)
            }(c.Component),
            ie = function(e) {
                return Object(h.c)(e, {
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC"
                })
            },
            oe = function(e) {
                var t = Math.floor(e / 3600),
                    a = Math.floor(e % 3600 / 60),
                    n = e % 60 + "s";
                return a && (n = a + "m" + n), t && (n = t + "h" + n), n
            },
            se = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth()))
            },
            de = function(e, t) {
                var a = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() + 1));
                return a.getTime() > t.getTime() ? t : a
            },
            ue = function(e) {
                return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() - 1))
            },
            le = function(e) {
                var t = new Date(e.toISOString());
                return t.setUTCHours(e.getUTCHours() + 4), t
            },
            ce = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleChange = function(e) {
                        var t = new Date(e.currentTarget.value),
                            n = se(t),
                            r = de(n, a.validatedCurrentDate);
                        a.props.onMonthSelection(n, r)
                    }, a.getDropdownOptions = function(e, t) {
                        for (var a = [], n = se(e); n >= t; n = ue(n)) {
                            var r = n.toISOString();
                            a.push(c.createElement("option", {
                                key: r,
                                value: r
                            }, ie(n)))
                        }
                        return a
                    }, a.validatedCurrentDate = t.currentDate < t.earliestDate ? t.earliestDate : t.currentDate, a
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return c.createElement(M._4, {
                        className: "month-select-menu"
                    }, c.createElement(M._23, {
                        disabled: this.props.isDisabled,
                        onChange: this.handleChange
                    }, this.getDropdownOptions(this.validatedCurrentDate, this.props.earliestDate)))
                }, t = l.__decorate([Object(y.d)("MonthSelectMenuComponent")], t)
            }(c.Component),
            me = ["twitch_subscriptions", "prime_subscriptions", "bits", "ads"],
            he = function(e) {
                switch (e) {
                    case "twitch_subscriptions":
                        return Object(h.d)("Subscriptions", "TeamsDashboardRevenueCategory");
                    case "prime_subscriptions":
                        return Object(h.d)("Twitch Prime", "TeamsDashboardRevenueCategory");
                    case "bits":
                        return Object(h.d)("Bits", "TeamsDashboardRevenueCategory");
                    case "ads":
                        return Object(h.d)("Ads", "TeamsDashboardRevenueCategory");
                    default:
                        return ""
                }
            },
            _e = a("WaEV"),
            fe = function(e) {
                return Object(h.e)(e / 100, {
                    style: "currency",
                    currency: "USD"
                })
            },
            pe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.canvas && (this.setCanvasResolution(), this.myChart = new _e(this.canvas, {
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
                                        var t = new Date(e[0].xLabel || "1970-01-01Z"),
                                            a = e.map(function(e) {
                                                return e.yLabel || "0"
                                            }).reduce(function(e, t) {
                                                return e + Math.round(parseFloat(t))
                                            }, 0);
                                        return fe(a) + " - " + function(e) {
                                            return Object(h.c)(e, {
                                                weekday: "short",
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                timeZone: "UTC"
                                            })
                                        }(t)
                                    },
                                    label: function(e, t) {
                                        var a = Math.round(parseFloat(e.yLabel || "0")),
                                            n = "";
                                        return Array.isArray(t.datasets) && void 0 !== e.datasetIndex && (n = t.datasets[e.datasetIndex].label || ""), fe(a) + " " + n
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
                                            return fe(e)
                                        }
                                    }
                                }]
                            }
                        }
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.myChart && this.myChart.destroy()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.myChart.data = ye(e.datasets, e.timestampLabels), this.myChart.update()
                }, t.prototype.render = function() {
                    var e = this;
                    return c.createElement(M.Y, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, c.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    }))
                }, t.prototype.setCanvasResolution = function() {
                    if (this.canvas) {
                        var e = ge(this.canvas.getContext("2d"));
                        this.canvas.height = 36 * e, this.canvas.style.height = "36rem", this.canvas.getContext("2d").setTransform(e, 0, 0, e, 0, 0)
                    }
                }, t = l.__decorate([Object(y.d)("RevenueCanvas", {
                    autoReportInteractive: !0
                })], t)
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
                                categoryLabel: he("twitch_subscriptions"),
                                color: "#7752ba",
                                data: []
                            },
                            prime_subscriptions: {
                                categoryLabel: he("prime_subscriptions"),
                                color: "#059bdc",
                                data: []
                            },
                            bits: {
                                categoryLabel: he("bits"),
                                color: "#3dc7ae",
                                data: []
                            },
                            ads: {
                                categoryLabel: he("ads"),
                                color: "#c5b6e2",
                                data: []
                            },
                            timestampLabels: []
                        };
                        return Object.keys(e).sort().reduce(function(t, a) {
                            return t.timestampLabels.push(a), me.forEach(function(n) {
                                t[n].data.push(e[a][n])
                            }), t
                        }, t)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.formatRevenueChartData(this.props.data),
                        t = me.map(function(t) {
                            return e[t]
                        });
                    return c.createElement(Me, {
                        datasets: t,
                        timestampLabels: e.timestampLabels
                    })
                }, t
            }(c.PureComponent);
        ! function(e) {
            e.Title = "revenue-summary-item-title", e.Symbol = "revenue-summary-item-symbol", e.Dollars = "revenue-summary-item-dollars"
        }(ee || (ee = {}));
        var be, Le, De = function(e) {
                var t, a;
                return e.isLoading ? (t = c.createElement(M.O, {
                    type: M._41.H5
                }, c.createElement(M._10, {
                    width: 90
                })), a = c.createElement(M._4, null, c.createElement(M._10, {
                    width: 140,
                    height: 40
                }))) : (t = c.createElement(M.O, {
                    color: M.J.Alt2,
                    type: M._41.H5,
                    "data-test-selector": ee.Title
                }, e.title), a = c.createElement(M._4, {
                    alignItems: M.c.Start,
                    display: M.P.Flex,
                    flexDirection: M.R.Row
                }, c.createElement(M._4, {
                    margin: {
                        top: .5
                    }
                }, c.createElement(M.O, {
                    "data-test-selector": ee.Symbol,
                    type: M._41.H4
                }, "$")), c.createElement(M.O, {
                    "data-test-selector": ee.Dollars,
                    type: M._41.H1
                }, Object(h.e)(Math.floor(e.cents / 100))))), c.createElement(M._4, {
                    display: M.P.Flex,
                    flexDirection: M.R.Column,
                    flexGrow: 1,
                    margin: 1
                }, t, a)
            },
            ke = function(e) {
                var t = e.revenues.reduce(function(e, t) {
                        return e + t.cents
                    }, 0),
                    a = e.revenues.map(function(t, a) {
                        return c.createElement(De, {
                            cents: t.cents,
                            key: a,
                            isLoading: e.isLoading,
                            title: t.title + " *"
                        })
                    });
                return c.createElement(M._27, {
                    borderMarked: !0,
                    border: !0,
                    fullWidth: !0,
                    background: M.m.Base,
                    display: M.P.Flex,
                    justifyContent: M._3.Between,
                    alignItems: M.c.Center,
                    padding: 1
                }, c.createElement(De, {
                    cents: t,
                    isLoading: e.isLoading,
                    title: Object(h.d)("Total", "TeamsDashboardRevenueSummaryBrick") + " *"
                }), a)
            },
            Ye = function(e) {
                return c.createElement(ke, {
                    isLoading: e.isLoading,
                    revenues: we(e.data)
                })
            },
            we = function(e) {
                var t = {
                    twitch_subscriptions: 0,
                    prime_subscriptions: 0,
                    bits: 0,
                    ads: 0
                };
                return Object.keys(e).forEach(function(a) {
                    var n = e[a];
                    me.forEach(function(e) {
                        t[e] += Math.round(n[e])
                    })
                }), me.map(function(e) {
                    return {
                        title: he(e),
                        cents: t[e]
                    }
                })
            },
            xe = a("+Znq"),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderMenu = function() {
                        if (t.props.isLoading) return c.createElement(M._10, {
                            width: 180,
                            height: 30
                        });
                        var e = t.props.members.filter(function(e) {
                                return e.checked
                            }).length,
                            a = Object(h.d)("Select All", "TeamsDashboard");
                        return t.props.members.length > O && (a = Object(h.d)("Select First {maxSelected, number}", {
                            maxSelected: O
                        }, "TeamsDashboard")), c.createElement(xe.a, {
                            onToggle: t.toggleOpenClose
                        }, c.createElement(M.u, {
                            dropdown: !0,
                            type: M.A.Hollow,
                            disabled: t.props.isDisabled
                        }, Object(h.d)("{checkedCount, plural, one {Stats for # Team Member} other {Stats for # Team Members}}", {
                            checkedCount: e
                        }, "TeamsDashboard")), c.createElement(M.p, {
                            direction: M.q.BottomLeft,
                            elevation: 4,
                            noTail: !0
                        }, c.createElement(b.b, {
                            className: "team-members-select-menu__scroller"
                        }, c.createElement(M._4, null, c.createElement(M._27, {
                            borderBottom: !0,
                            padding: 1
                        }, c.createElement(M.I, {
                            label: a,
                            checked: t.props.groupChecked,
                            onChange: t.props.toggleGroupChecked
                        })), t.props.members.map(function(a) {
                            var n = {
                                label: a.displayName,
                                checked: a.checked,
                                onChange: t.props.toggleMemberChecked.bind(t, a),
                                disabled: e >= O && !a.checked
                            };
                            return c.createElement(M._4, {
                                key: a.id,
                                margin: 1
                            }, c.createElement(M.I, l.__assign({}, n)))
                        })))))
                    }, t.toggleOpenClose = function(e) {
                        e && JSON.stringify(t.props.members) !== t.membersPreviouslyCheckedJSON ? t.props.onMemberSelectClose(t.props.members) : t.membersPreviouslyCheckedJSON = JSON.stringify(t.props.members)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(M._4, {
                        className: "team-members-select-menu"
                    }, this.renderMenu())
                }, t = l.__decorate([Object(y.d)("TeamMembersSelectMenu", {
                    autoReportInteractive: !0
                })], t)
            }(c.Component),
            Se = function(e, t, a) {
                return Object.keys(e).reduce(function(a, n) {
                    return a + t(new Date(n), e[n])
                }, a)
            },
            Oe = function(e, t) {
                var a = encodeURIComponent(e),
                    n = document.createElement("a");
                n.href = "data:text/csv;charset=utf-8," + a, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
            },
            je = function() {
                return Object(h.d)("Time Zone", "TeamsDashboard")
            },
            He = function() {
                return Object(h.d)("Export Data", "TeamsDashboard")
            },
            Ce = function(e) {
                return Pe(e) + " " + Ae(e)
            },
            Pe = function(e) {
                return e.getUTCFullYear() + "-" + Fe(e.getUTCMonth() + 1) + "-" + Fe(e.getUTCDate())
            },
            Ae = function(e) {
                return Fe(e.getUTCHours()) + ":" + Fe(e.getUTCMinutes()) + ":" + Fe(e.getUTCSeconds())
            },
            Fe = function(e) {
                return Object(h.e)(e, {
                    minimumIntegerDigits: 2,
                    maximumFractionDigits: 0
                })
            },
            Ee = this,
            We = function(e, t, a, n) {
                return l.__awaiter(Ee, void 0, void 0, function() {
                    var r, i;
                    return l.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return r = "/v5/teams/" + e + "/revenues?channel_ids=" + t + "&start_date=" + a + "&end_date=" + n + "&fraction=day", [4, Object(X.e)({
                                    path: r
                                })];
                            case 1:
                                return i = o.sent(), [2, Ie(a, n, i.body && i.body.revenues ? i.body.revenues : {})]
                        }
                    })
                })
            },
            Ie = function(e, t, a) {
                for (var n = Ne(e, t), r = 0, i = Object.keys(a); r < i.length; r++)
                    for (var o = i[r], s = 0, d = Object.keys(a[o]); s < d.length; s++) {
                        var u = d[s];
                        if (me.includes(u))
                            for (var l = 0, c = a[o][u]; l < c.length; l++) {
                                var m = c[l],
                                    h = Re(m.timestamp);
                                n[h] && (n[h][u] += m.cents)
                            }
                    }
                return n
            },
            Ne = function(e, t) {
                for (var a = {}, n = new Date(Re(e)); n < new Date(t); n.setUTCDate(n.getUTCDate() + 1)) a[n.toISOString()] = {
                    twitch_subscriptions: 0,
                    prime_subscriptions: 0,
                    bits: 0,
                    ads: 0
                };
                return a
            },
            Re = function(e) {
                var t = new Date(e);
                return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())).toISOString()
            },
            ze = function() {
                var e = Object(h.d)("Date", "TeamsDashboard") + "," + je(),
                    t = "," + Object(h.d)("Total", "TeamsDashboard") + "\n";
                return me.reduce(function(e, t) {
                    return e + "," + he(t)
                }, e) + t
            },
            Be = function(e, t) {
                var a = Pe(e) + ",UTC",
                    n = me.reduce(function(e, a) {
                        return e + Math.round(t[a])
                    }, 0),
                    r = "," + Je(n) + "\n";
                return me.reduce(function(e, a) {
                    return e + "," + Je(t[a])
                }, a) + r
            },
            Je = function(e) {
                return Object(h.e)(e / 100, {
                    useGrouping: !1,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
            },
            Ve = function(e) {
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
                            t = C(a.state.members, e);
                        a.setState({
                            groupChecked: e,
                            members: t
                        })
                    }, a.renderChartLoadingSpinner = function() {
                        return c.createElement(M._27, {
                            attachTop: !0,
                            attachLeft: !0,
                            background: M.m.Base,
                            fullHeight: !0,
                            fullWidth: !0,
                            position: M._11.Absolute
                        }, c.createElement(M._6, {
                            delay: 100,
                            fillContent: !0,
                            size: M._25.Large
                        }))
                    }, a.handleTimeRangeChange = function(e, t) {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var a;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            isLoadingRevenues: !0
                                        }), [4, We(this.props.teamName, P(this.state.members), e.toISOString(), t.toISOString())];
                                    case 1:
                                        return a = n.sent(), this.setState({
                                            startTime: e,
                                            endTime: t,
                                            revenues: a,
                                            isLoadingRevenues: !1
                                        }), [2]
                                }
                            })
                        })
                    }, a.handleMemberSelectionChange = function() {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            isLoadingRevenues: !0
                                        }), [4, We(this.props.teamName, P(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            revenues: e,
                                            isLoadingRevenues: !1
                                        }), [2]
                                }
                            })
                        })
                    }, a.handleCSVClick = function() {
                        var e = Se(a.state.revenues, Be, ze());
                        Oe(e, F(L.Revenue) + " - " + ie(a.state.startTime) + ".csv")
                    }, a.state = {
                        isLoadingMembers: !0,
                        members: [],
                        startTime: se(a.props.currentDate),
                        endTime: a.props.currentDate,
                        groupChecked: !0,
                        isLoadingRevenues: !0,
                        revenues: {}
                    }, a
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t = this;
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, te(this.props.teamName, x.RevenueRevealed)];
                                case 1:
                                    return e = a.sent(), this.setState({
                                        isLoadingMembers: !1,
                                        members: C(e, !0)
                                    }, function() {
                                        return l.__awaiter(t, void 0, void 0, function() {
                                            var e;
                                            return l.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, We(this.props.teamName, P(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
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
                    return c.createElement(w, {
                        title: F(L.Revenue),
                        titleSelector: "revenue-page-title"
                    }, c.createElement(M._27, {
                        border: !0,
                        fullWidth: !0
                    }, c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Row,
                        justifyContent: M._3.Between,
                        margin: 2
                    }, c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Row
                    }, c.createElement(M._4, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(Te, {
                        isDisabled: e,
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        onMemberSelectClose: this.handleMemberSelectionChange,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), c.createElement(ce, {
                        isDisabled: e,
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), c.createElement(M._4, null, c.createElement(M.u, {
                        disabled: e,
                        "data-test-selector": "revenue-csv-button",
                        icon: M._18.Download,
                        onClick: this.handleCSVClick,
                        type: M.A.Hollow
                    }, He()))), c.createElement(M._4, {
                        margin: 2
                    }, c.createElement(Ye, {
                        isLoading: e,
                        data: this.state.revenues
                    }), c.createElement(M._4, {
                        margin: {
                            top: .5
                        }
                    }, c.createElement(M.O, {
                        color: M.J.Alt2
                    }, Object(h.d)("* All revenue values are estimated (in $USD)", "TeamsDashboard")))), c.createElement(M._27, {
                        background: M.m.Base,
                        borderTop: !0,
                        padding: 2
                    }, c.createElement(M._4, {
                        className: "chart-container",
                        position: M._11.Relative
                    }, c.createElement(ve, {
                        data: this.state.revenues
                    }), e ? this.renderChartLoadingSpinner() : null))))
                }, t = l.__decorate([Object(y.d)("RevenuePage", {
                    autoReportInteractive: !0,
                    destination: g.a.TeamsDashboardRevenue
                })], t)
            }(c.Component),
            Ue = a("F8kA"),
            Ge = function(e) {
                var t = e.teamName;
                return c.createElement(M._27, {
                    className: "side-nav-bar",
                    borderRight: !0,
                    display: M.P.Block,
                    fullHeight: !0
                }, c.createElement(M._4, {
                    margin: {
                        bottom: .5,
                        top: 2
                    },
                    padding: {
                        x: 2
                    }
                }, c.createElement(M.O, {
                    type: M._41.H4,
                    fontSize: M.T.Size5
                }, Object(h.d)("Team Dashboard", "TeamsDashboard"))), c.createElement("ul", null, c.createElement(qe, {
                    to: "/teams/" + t + "/dashboard/" + L.Revenue,
                    testSelector: "side-nav-revenue"
                }, F(L.Revenue)), c.createElement(qe, {
                    to: "/teams/" + t + "/dashboard/" + L.Stats,
                    testSelector: "side-nav-stats"
                }, F(L.Stats)), c.createElement(qe, {
                    to: "/teams/" + t + "/dashboard/" + L.Members
                }, F(L.Members)), c.createElement(qe, {
                    to: "/teams/" + t + "/dashboard/" + L.FeaturedChannels
                }, F(L.FeaturedChannels)), c.createElement(qe, {
                    to: "/teams/" + t + "/dashboard/" + L.Settings
                }, F(L.Settings))))
            },
            qe = function(e) {
                return c.createElement("li", null, c.createElement(M.Y, {
                    "data-test-selector": e.testSelector,
                    display: M.P.Block,
                    padding: {
                        x: 2,
                        y: .5
                    }
                }, c.createElement(Ue.b, {
                    activeClassName: "side-nav-bar__option--active",
                    className: "side-nav-bar__option",
                    exact: !0,
                    to: e.to
                }, e.children)))
            },
            Ke = a("HM6l");
        ! function(e) {
            e.Background = "background", e.Banner = "banner", e.Logo = "logo"
        }(be || (be = {})),
        function(e) {
            e.JPEG = "image/jpeg", e.PNG = "image/png"
        }(Le || (Le = {}));
        var Ze, Xe = this,
            Qe = function(e, t) {
                return l.__awaiter(Xe, void 0, void 0, function() {
                    var a, n;
                    return l.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 3, , 4]), [4, $e(e, t)];
                            case 1:
                                return a = r.sent(), [4, et(a.url, t)];
                            case 2:
                                if (!r.sent()) throw new Error("failed to upload");
                                return [2, l.__assign({}, t, {
                                    id: a.image_id
                                })];
                            case 3:
                                return n = r.sent(), [2, Promise.reject(n)];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            $e = function(e, t) {
                return l.__awaiter(Xe, void 0, void 0, function() {
                    var a, n, r;
                    return l.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return a = "/v5/teams/" + e + "/image_uploads", n = {
                                    category: t.category,
                                    file_type: t.fileType,
                                    size: t.size
                                }, [4, E.a.post(a, {
                                    body: n
                                })];
                            case 1:
                                return (r = i.sent()).body && 200 === r.status ? [2, r.body] : [2, Promise.reject(r.error)]
                        }
                    })
                })
            },
            et = function(e, t) {
                return l.__awaiter(Xe, void 0, void 0, function() {
                    var a, n;
                    return l.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return a = new URL(e).toString(), n = {
                                    method: "PUT",
                                    headers: {
                                        "content-length": t.size,
                                        "content-type": t.fileType
                                    },
                                    body: function(e) {
                                        for (var t = e.indexOf(";base64,") + ";base64,".length, a = e.substring(t), n = atob(a), r = new ArrayBuffer(n.length), i = new Uint8Array(r), o = 0; o < n.length; o++) i[o] = n.charCodeAt(o);
                                        return i
                                    }(t.url)
                                }, [4, fetch(a, n)];
                            case 1:
                                return [2, 200 === r.sent().status]
                        }
                    })
                })
            },
            tt = a("J8WN");
        ! function(e) {
            e.HoverWrapper = "hover-wrapper", e.Image = "image", e.Placeholder = "placeholder", e.PlaceholderContainer = "placeholder-container"
        }(Ze || (Ze = {}));
        var at, nt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHoveringOver: !1
                    }, t.handleFilesSubmitted = function(e) {
                        t.props.onFileSelected(e[0])
                    }, t.handleMouseHover = function() {
                        t.setState(function(e) {
                            return {
                                isHoveringOver: !e.isHoveringOver
                            }
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Boolean(this.props.imageSrc),
                        t = this.state.isHoveringOver || this.props.isUploading;
                    return c.createElement(M._27, {
                        background: M.m.Alt2,
                        fullHeight: !0,
                        fullWidth: !0
                    }, c.createElement("div", {
                        "data-test-selector": Ze.HoverWrapper,
                        onMouseOut: this.handleMouseHover,
                        onMouseOver: this.handleMouseHover
                    }, c.createElement(tt.a, {
                        allowedFileTypes: this.props.allowedFileTypes,
                        error: this.props.hasErrored,
                        onFilesSubmitted: this.handleFilesSubmitted
                    }, c.createElement(M._27, {
                        alignItems: M.c.Center,
                        background: M.m.Alt2,
                        display: M.P.Flex,
                        flexDirection: M.R.Column,
                        fullHeight: !0,
                        fullWidth: !0,
                        justifyContent: M._3.Center,
                        overflow: M._7.Hidden,
                        textAlign: M._37.Center
                    }, c.createElement(M.e, {
                        duration: M.g.Long,
                        enabled: e,
                        type: M.i.FadeIn
                    }, e ? this.renderImage() : null), c.createElement(M.e, {
                        enabled: t,
                        type: M.i.FadeIn
                    }, c.createElement(M._27, {
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachTop: !0,
                        background: t ? M.m.Overlay : void 0,
                        color: t ? M.J.Overlay : M.J.Alt2,
                        "data-test-selector": Ze.PlaceholderContainer,
                        display: !e || t ? M.P.Block : M.P.Hide,
                        position: M._11.Absolute
                    }, this.props.isUploading ? this.renderLoadingSpinner() : this.renderPlaceholder()))))))
                }, t.prototype.renderImage = function() {
                    return c.createElement(M.L, {
                        alt: this.props.imageAlt,
                        "data-test-selector": Ze.Image,
                        src: this.props.imageSrc
                    })
                }, t.prototype.renderLoadingSpinner = function() {
                    return c.createElement(M._6, {
                        fillContent: !0,
                        inheritColor: !0
                    })
                }, t.prototype.renderPlaceholder = function() {
                    return c.createElement(M._27, {
                        alignItems: M.c.Center,
                        "data-test-selector": Ze.Placeholder,
                        display: M.P.Flex,
                        flexDirection: M.R.Column,
                        fullHeight: !0,
                        fullWidth: !0,
                        justifyContent: M._3.Center
                    }, c.createElement(M._17, {
                        asset: M._18.Upload,
                        height: 36,
                        width: 36,
                        type: M._19.Inherit
                    }), c.createElement(M.O, {
                        fontSize: M.T.Size6
                    }, Object(h.d)("Choose a file", "TeamDashboard")))
                }, t
            }(c.Component),
            rt = [Le.JPEG, Le.PNG],
            it = 5e5,
            ot = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasErrored: !1,
                        isUploading: !1
                    }, t.handleFileSelected = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, a = this;
                            return l.__generator(this, function(n) {
                                return t = new FileReader, this.setState({
                                    hasErrored: !1
                                }), t.onloadend = function() {
                                    return l.__awaiter(a, void 0, void 0, function() {
                                        var a, n, r;
                                        return l.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (a = rt.includes(e.type), n = e.size <= it, !a || !n) return [2, this.setState({
                                                        hasErrored: !0
                                                    })];
                                                    i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 3, 4, 5]), this.setState({
                                                        isUploading: !0
                                                    }), [4, Qe(this.props.teamName, {
                                                        category: this.props.imageCategory,
                                                        fileType: e.type,
                                                        id: null,
                                                        size: e.size,
                                                        url: t.result
                                                    })];
                                                case 2:
                                                    return r = i.sent(), [3, 5];
                                                case 3:
                                                    return i.sent(), [2, this.setState({
                                                        hasErrored: !0
                                                    })];
                                                case 4:
                                                    return this.setState({
                                                        isUploading: !1
                                                    }), [7];
                                                case 5:
                                                    return this.props.onUpload(r), [2]
                                            }
                                        })
                                    })
                                }, t.readAsDataURL(e), [2]
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(nt, {
                        allowedFileTypes: rt,
                        hasErrored: this.state.hasErrored,
                        imageAlt: this.props.imageAlt,
                        imageCategory: this.props.imageCategory,
                        imageSrc: this.props.imageSrc,
                        isUploading: this.state.isUploading,
                        onFileSelected: this.handleFileSelected
                    })
                }, t
            }(c.Component),
            st = this,
            dt = function(e) {
                var t = e.team;
                return {
                    name: t.name,
                    displayName: t.display_name,
                    descriptionMarkdown: t.description_markdown,
                    logoID: t.logo_id,
                    logoURL: t.logo_url,
                    bannerID: t.banner_id,
                    bannerURL: t.banner_url,
                    backgroundImageID: t.background_image_id,
                    backgroundImageURL: t.background_image_url
                }
            },
            ut = this,
            lt = function(e) {
                return l.__awaiter(ut, void 0, void 0, function() {
                    var t, a, n;
                    return l.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = "/v5/teams/" + e.name, a = {
                                    background_image_id: e.backgroundImageID,
                                    banner_id: e.bannerID,
                                    display_name: e.displayName,
                                    description_markdown: e.descriptionMarkdown,
                                    logo_id: e.logoID
                                }, [4, E.a.put(t, {
                                    body: a
                                })];
                            case 1:
                                return (n = r.sent()).body && 200 === n.status ? [2, dt(n.body)] : [2, Promise.reject(n.error)]
                        }
                    })
                })
            },
            ct = 1e3;
        ! function(e) {
            e.PageTitle = "settings-page-title", e.FormGroupDisplayName = "form-group-display-name", e.FormGroupDescription = "form-group-description", e.FormGroupLogo = "form-group-logo", e.FormGroupBanner = "form-group-banner", e.FormGroupBackground = "form-group-background", e.Button = "button"
        }(at || (at = {}));
        var mt, ht, _t = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.setTeam = function(e) {
                    a.setState({
                        isDirty: !0,
                        team: l.__assign({}, a.state.team, e)
                    })
                }, a.handleDisplayNameChange = function(e) {
                    a.setTeam({
                        displayName: e.target.value
                    })
                }, a.handleDescriptionChange = function(e) {
                    a.setTeam({
                        descriptionMarkdown: e.target.value
                    })
                }, a.handleLogoUpload = function(e) {
                    a.setTeam({
                        logoID: e.id,
                        logoURL: e.url
                    })
                }, a.handleBannerUpload = function(e) {
                    a.setTeam({
                        bannerID: e.id,
                        bannerURL: e.url
                    })
                }, a.handleBackgroundUpload = function(e) {
                    a.setTeam({
                        backgroundImageID: e.id,
                        backgroundImageURL: e.url
                    })
                }, a.handleClick = function(e) {
                    return l.__awaiter(a, void 0, void 0, function() {
                        var e, t = this;
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (this.fakeEnabled()) return [2];
                                    this.setState({
                                        isSaving: !0
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, lt(this.state.team)];
                                case 2:
                                    return e = a.sent(), [3, 4];
                                case 3:
                                    return a.sent(), this.setState({
                                        didError: !0,
                                        isSaving: !1
                                    }), setTimeout(function() {
                                        t.setState({
                                            didError: !1
                                        })
                                    }, ct), [2];
                                case 4:
                                    return this.setState({
                                        didSave: !0,
                                        isDirty: !1,
                                        isSaving: !1,
                                        team: e
                                    }), setTimeout(function() {
                                        t.setState({
                                            didSave: !1
                                        })
                                    }, ct), this.props.onUpdate(e), [2]
                            }
                        })
                    })
                }, a.fakeEnabled = function() {
                    return a.state.didError || a.state.didSave
                }, a.formatBackgroundLabel = function() {
                    return Object(h.d)("Background Image", "TeamsDashboard")
                }, a.formatBannerLabel = function() {
                    return Object(h.d)("Banner", "TeamsDashboard")
                }, a.formatLogoLabel = function() {
                    return Object(h.d)("Logo", "TeamsDashboard")
                }, a.formatOptionalLabel = function() {
                    return Object(h.d)("optional", "TeamsDashboard")
                }, a.state = {
                    isDirty: !1,
                    isSaving: !1,
                    didError: !1,
                    didSave: !1,
                    team: t.team
                }, a.inputID = Object(Ke.b)(), a.textAreaID = Object(Ke.b)(), a
            }
            return l.__extends(t, e), t.prototype.render = function() {
                var e = this.state.team;
                return c.createElement(w, {
                    title: F(L.Settings),
                    titleSelector: at.PageTitle
                }, c.createElement(M._4, {
                    className: "settings-page"
                }, c.createElement(M._4, {
                    fullWidth: !0
                }, c.createElement(M.U, {
                    "data-test-selector": at.FormGroupDisplayName,
                    error: !e.displayName,
                    id: this.inputID,
                    label: Object(h.d)("Display Name", "TeamsDashboard")
                }, c.createElement(M._0, {
                    disabled: this.state.isSaving,
                    error: !e.displayName,
                    id: this.inputID,
                    maxLength: 65,
                    onChange: this.handleDisplayNameChange,
                    required: !0,
                    type: M._1.Text,
                    value: e.displayName
                }))), c.createElement(M._4, {
                    margin: {
                        top: 2
                    },
                    fullWidth: !0
                }, c.createElement(M.U, {
                    "data-test-selector": at.FormGroupDescription,
                    id: this.textAreaID,
                    label: Object(h.d)("Description", "TeamsDashboard"),
                    labelOptional: this.formatOptionalLabel(),
                    hint: Object(h.d)("Supports Markdown", "TeamsDashboard")
                }, c.createElement(M._38, {
                    disabled: this.state.isSaving,
                    id: this.textAreaID,
                    maxLength: 1e4,
                    noResize: !0,
                    onChange: this.handleDescriptionChange,
                    rows: 5,
                    value: e.descriptionMarkdown
                }))), c.createElement(M._4, {
                    margin: {
                        top: 2
                    }
                }, c.createElement(M.U, {
                    "data-test-selector": at.FormGroupLogo,
                    label: this.formatLogoLabel(),
                    labelOptional: this.formatOptionalLabel(),
                    hint: Object(h.d)("Square JPG or PNG at least 600x600px. Max 500 KB.", "TeamsDashboard")
                }, c.createElement(M._4, {
                    className: "logo"
                }, c.createElement(ot, {
                    imageAlt: this.formatLogoLabel(),
                    imageCategory: be.Logo,
                    imageSrc: e.logoURL,
                    onUpload: this.handleLogoUpload,
                    teamName: e.name
                })))), c.createElement(M._4, {
                    margin: {
                        top: 2
                    }
                }, c.createElement(M.U, {
                    "data-test-selector": at.FormGroupBanner,
                    label: this.formatBannerLabel(),
                    labelOptional: this.formatOptionalLabel(),
                    hint: Object(h.d)("JPG or PNG at least 640x125px. Max 500 KB.", "TeamsDashboard")
                }, c.createElement(M._4, {
                    fullWidth: !0,
                    className: "banner"
                }, c.createElement(ot, {
                    imageAlt: this.formatBannerLabel(),
                    imageCategory: be.Banner,
                    imageSrc: e.bannerURL,
                    onUpload: this.handleBannerUpload,
                    teamName: e.name
                })))), c.createElement(M._4, {
                    margin: {
                        top: 2
                    }
                }, c.createElement(M.U, {
                    "data-test-selector": at.FormGroupBackground,
                    label: this.formatBackgroundLabel(),
                    labelOptional: this.formatOptionalLabel(),
                    hint: Object(h.d)("JPG or PNG. Max 500 KB.", "TeamsDashboard")
                }, c.createElement(M._4, {
                    fullWidth: !0,
                    className: "background"
                }, c.createElement(ot, {
                    imageAlt: this.formatBackgroundLabel(),
                    imageCategory: be.Background,
                    imageSrc: e.backgroundImageURL,
                    onUpload: this.handleBackgroundUpload,
                    teamName: e.name
                })))), c.createElement(M._4, {
                    margin: {
                        top: 2
                    }
                }, this.renderButton())))
            }, t.prototype.renderButton = function() {
                var e, t, a, n = !this.fakeEnabled() && (!this.state.team.displayName || !this.state.isDirty || this.state.isSaving);
                return e = this.state.didSave ? M.z.Success : this.state.isSaving ? M.z.Loading : M.z.Default, t = this.state.didSave ? M.A.Success : this.state.didError ? M.A.Alert : M.A.Default, a = this.state.didError ? Object(h.d)("Save Failed", "TeamsDashboard") : Object(h.d)("Save Changes", "TeamsDashboard"), c.createElement(M.u, {
                    "data-test-selector": at.Button,
                    disabled: n,
                    onClick: this.handleClick,
                    state: e,
                    type: t
                }, c.createElement(M._4, {
                    display: M.P.Inline,
                    margin: {
                        x: 4
                    }
                }, a))
            }, t = l.__decorate([Object(y.d)("SettingsPage", {
                autoReportInteractive: !0,
                destination: g.a.TeamsDashboardSettings
            })], t)
        }(c.Component);
        ! function(e) {
            e.AverageViewers = "AverageViewers", e.MinutesWatched = "MinutesWatched", e.NewFollowers = "NewFollowers", e.AverageChatters = "AverageChatters", e.ChatMessages = "ChatMessages", e.AdBreakDuration = "AdBreakDuration", e.AdBreaks = "AdBreaks"
        }(mt || (mt = {})),
        function(e) {
            e.Ads = "Ads", e.Audience = "Audience", e.Chat = "Chat"
        }(ht || (ht = {}));
        var ft, pt, gt = ((ft = {})[mt.AverageViewers] = "concurrent_viewers", ft[mt.MinutesWatched] = "concurrent_viewers", ft[mt.NewFollowers] = "follows", ft[mt.AverageChatters] = "chat_activities", ft[mt.ChatMessages] = "chat_activities", ft[mt.AdBreakDuration] = "commercials", ft),
            yt = ((pt = {})[mt.AverageViewers] = "bar", pt[mt.MinutesWatched] = "bar", pt[mt.NewFollowers] = "line", pt[mt.AverageChatters] = "bar", pt[mt.ChatMessages] = "bar", pt[mt.AdBreakDuration] = "bar", pt),
            Mt = function(e) {
                switch (e) {
                    case ht.Ads:
                        return Object(h.d)("Ads", "TeamsDashboard");
                    case ht.Audience:
                        return Object(h.d)("Audience", "TeamsDashboard");
                    case ht.Chat:
                        return Object(h.d)("Chat", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            vt = function(e) {
                switch (e) {
                    case mt.AverageViewers:
                        return Object(h.d)("Avg. Viewers", "TeamsDashboard");
                    case mt.MinutesWatched:
                        return Object(h.d)("Minutes Watched", "TeamsDashboard");
                    case mt.NewFollowers:
                        return Object(h.d)("New Followers", "TeamsDashboard");
                    case mt.AverageChatters:
                        return Object(h.d)("Avg. Chatters", "TeamsDashboard");
                    case mt.ChatMessages:
                        return Object(h.d)("Chat Messages", "TeamsDashboard");
                    case mt.AdBreakDuration:
                        return Object(h.d)("Ad Break Duration", "TeamsDashboard");
                    case mt.AdBreaks:
                        return Object(h.d)("Ad Breaks", "TeamsDashboard");
                    default:
                        return ""
                }
            },
            bt = function(e) {
                return c.createElement(M._4, {
                    className: "metric-select-menu"
                }, c.createElement(M._23, {
                    disabled: e.isDisabled,
                    value: "" + e.metric,
                    onChange: function(t) {
                        e.onChange(t.target.value)
                    }
                }, c.createElement("optgroup", {
                    label: Mt(ht.Ads)
                }, c.createElement("option", {
                    value: mt.AdBreakDuration
                }, vt(mt.AdBreakDuration))), c.createElement("optgroup", {
                    label: Mt(ht.Audience)
                }, c.createElement("option", {
                    value: mt.AverageViewers
                }, vt(mt.AverageViewers)), c.createElement("option", {
                    value: mt.MinutesWatched
                }, vt(mt.MinutesWatched)), c.createElement("option", {
                    value: mt.NewFollowers
                }, vt(mt.NewFollowers))), c.createElement("optgroup", {
                    label: Mt(ht.Chat)
                }, c.createElement("option", {
                    value: mt.AverageChatters
                }, vt(mt.AverageChatters)), c.createElement("option", {
                    value: mt.ChatMessages
                }, vt(mt.ChatMessages)))))
            },
            Lt = function(e) {
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
                    return c.createElement(M._4, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, c.createElement(M.Y, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, c.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        }
                    })))
                }, t.prototype.rebuildChart = function(e) {
                    var t = this;
                    this.canvas && (this.myChart && this.myChart.destroy(), this.setCanvasResolution(), this.myChart = new _e(this.canvas, {
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
                                        var a, n, r = "",
                                            i = e[0];
                                        return t && t.labels && (r = t.labels[i.index || 0]), a = new Date(r), n = le(a), Object(h.c)(a, {
                                            weekday: "short",
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            timeZone: "UTC"
                                        }) + " | " + Object(h.c)(a, {
                                            hour: "numeric",
                                            timeZone: "UTC"
                                        }) + " - " + Object(h.c)(n, {
                                            hour: "numeric",
                                            timeZone: "UTC"
                                        }) + " (4h)"
                                    },
                                    label: function(e) {
                                        var a = t.props.chartData.dataLabels[e.index || 0],
                                            n = Number(a);
                                        return "string" != typeof a || isNaN(n) ? a : Object(h.e)(n)
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
                                                return Object(h.c)(e, {
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
                                        min: 0,
                                        callback: function(e) {
                                            return Object(h.e)(e)
                                        }
                                    }
                                }]
                            }
                        }
                    }))
                }, t.prototype.updateChartData = function(e) {
                    this.myChart.data.datasets && (this.myChart.data.labels = e.timeLabels, this.myChart.data.datasets[0].label = e.chartLabel, this.myChart.data.datasets[0].data = e.data, this.myChart.update())
                }, t.prototype.setCanvasResolution = function() {
                    if (this.canvas) {
                        var e = Dt(this.canvas.getContext("2d"));
                        this.canvas.height = 36 * e, this.canvas.style.height = "36rem", this.canvas.getContext("2d").setTransform(e, 0, 0, e, 0, 0)
                    }
                }, t = l.__decorate([Object(y.d)("StatsCanvas")], t)
            }(c.Component),
            Dt = function(e) {
                return 1 / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            kt = Lt,
            Yt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.data,
                        a = e.dataType,
                        n = {
                            chartType: yt[a],
                            chartLabel: vt(a),
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
                        case mt.AverageViewers:
                        case mt.ChatMessages:
                        case mt.AverageChatters:
                        case mt.MinutesWatched:
                            n.data = n.timeLabels.map(function(e) {
                                return t[e].count
                            }), n.dataLabels = n.data.map(function(e) {
                                return String(e)
                            }), n.dataFooters = Array(n.data.length).fill("");
                            break;
                        case mt.AdBreakDuration:
                            n.data = n.timeLabels.map(function(e) {
                                return t[e].count
                            }), n.dataLabels = n.data.map(function(e) {
                                return oe(e)
                            }), n.dataFooters = n.timeLabels.map(function(e) {
                                return Object(h.d)("{adBreakCount, plural, one {# Ad Break} other {# Ad Breaks}}", {
                                    adBreakCount: t[e].numberOfDatapoints
                                }, "TeamsDashboard")
                            });
                            break;
                        case mt.NewFollowers:
                            n.data = n.timeLabels.reduce(function(e, a) {
                                return e.push(t[a].count + (e.length ? e[e.length - 1] : 0)), e
                            }, []), n.dataLabels = n.data.map(function(e) {
                                return String(e)
                            }), n.dataFooters = Array(n.data.length).fill("");
                            break;
                        default:
                            throw new Error("Data type: " + a + " is unrecognized")
                    }
                    return c.createElement(kt, {
                        chartData: n
                    })
                }, t
            }(c.PureComponent),
            wt = function(e) {
                var t = e.columnName;
                return c.createElement(M.W, null, c.createElement(M.K, {
                    cols: {
                        default: 3
                    }
                }), c.createElement(M.K, {
                    cols: {
                        default: 5
                    }
                }, c.createElement(M.O, {
                    bold: !0
                }, t)), c.createElement(M.K, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(M._4, {
                    textAlign: M._37.Right
                }, c.createElement(M.O, {
                    bold: !0
                }, Object(h.d)("Views", "TeamsDashboard")))), c.createElement(M.K, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(M._4, {
                    textAlign: M._37.Right
                }, c.createElement(M.O, {
                    bold: !0
                }, Object(h.d)("Percent", "TeamsDashboard")))))
            },
            xt = function(e) {
                var t = e.rowContent;
                return c.createElement(M.W, null, c.createElement(M.K, {
                    cols: {
                        default: 3
                    }
                }, c.createElement(M._4, {
                    fullHeight: !0,
                    display: M.P.Flex,
                    alignItems: M.c.Center
                }, c.createElement(M._14, {
                    value: t.percent,
                    mask: !0
                }))), c.createElement(M.K, {
                    cols: {
                        default: 5
                    }
                }, c.createElement(M.O, {
                    ellipsis: !0
                }, t.name)), c.createElement(M.K, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(M._4, {
                    textAlign: M._37.Right
                }, c.createElement(M.O, null, Object(h.e)(t.views)))), c.createElement(M.K, {
                    cols: {
                        default: 2
                    }
                }, c.createElement(M._4, {
                    textAlign: M._37.Right
                }, c.createElement(M.O, null, Object(h.e)(t.percent), "%"))))
            },
            Tt = function(e, t, a, n) {
                return 0 === e.length ? Ot() : n && 1 === e.length ? jt(e[0].name) : Ht(e, a, t)
            },
            St = function(e, t) {
                return t > 10 ? Object(h.d)("{tableName} (Top 10)", {
                    tableName: e
                }, "TeamsDashboard") : t > 1 ? Object(h.d)("{tableName} (All)", {
                    tableName: e
                }, "TeamsDashboard") : Object(h.d)("{tableName}", {
                    tableName: e
                }, "TeamsDashboard")
            },
            Ot = function() {
                return c.createElement(M.O, {
                    color: M.J.Alt2
                }, Object(h.d)("Not enough data for us to display", "TeamsDashboard"))
            },
            jt = function(e) {
                return c.createElement(M.O, null, Object(h.d)("The top viewer location was {name}", {
                    name: e
                }, "TeamsDashboard"))
            },
            Ht = function(e, t, a) {
                var n = e.slice(0, 10).map(function(e, t) {
                    var n = e.name,
                        r = e.views,
                        i = Math.round(r / a * 100);
                    return c.createElement(xt, {
                        key: t,
                        rowContent: {
                            name: n,
                            views: r,
                            percent: i
                        }
                    })
                });
                return c.createElement(M._4, null, c.createElement(wt, {
                    columnName: t
                }), n)
            },
            Ct = function(e) {
                var t, a, n = e.rowData.reduce(function(e, t) {
                        return e + t.views
                    }, 0),
                    r = e.rowData.sort(function(e, t) {
                        return t.views - e.views || e.name.localeCompare(t.name)
                    });
                return t = e.isLoading ? c.createElement(M._10, {
                    width: 180
                }) : St(e.tableName, r.length), a = e.isLoading ? c.createElement(M._4, null, c.createElement(M.O, null, c.createElement(M._10, null)), c.createElement(M.O, null, c.createElement(M._10, null))) : Tt(r, n, e.columnName, e.isGeo), c.createElement(M._4, {
                    display: M.P.Flex,
                    flexDirection: M.R.Column,
                    padding: 2,
                    className: "table",
                    flexWrap: M.S.NoWrap,
                    fullWidth: !0
                }, c.createElement(M._4, {
                    margin: {
                        bottom: 1
                    }
                }, c.createElement(M.O, {
                    type: M._41.H4
                }, t)), a)
            },
            Pt = Object(h.d)("Referrer", "TeamsDashboard"),
            At = function(e) {
                var t = Object(h.d)("Views by Referrer", "TeamsDashboard"),
                    a = "";
                return e.internalReferral && e.internalReferral.length && (t = Object(h.d)("Views from Outside Twitch", "TeamsDashboard"), a = c.createElement(M._27, {
                    display: M.P.Flex,
                    flexGrow: 1,
                    borderBottom: !0,
                    borderLeft: !0
                }, c.createElement(Ct, {
                    isLoading: e.isLoading,
                    tableName: Object(h.d)("Views from Twitch", "TeamsDashboard"),
                    columnName: Pt,
                    rowData: e.internalReferral
                }))), c.createElement(M._27, {
                    className: "all-tables-wrapper",
                    display: M.P.Flex,
                    flexDirection: M.R.Row,
                    borderTop: !0
                }, c.createElement(M._4, {
                    display: M.P.Flex,
                    flexGrow: 1,
                    flexDirection: M.R.Column,
                    flexWrap: M.S.NoWrap
                }, c.createElement(M._27, {
                    display: M.P.Flex,
                    flexGrow: 1,
                    borderBottom: !0
                }, c.createElement(Ct, {
                    isLoading: e.isLoading,
                    tableName: Object(h.d)("Views by Location", "TeamsDashboard"),
                    columnName: Object(h.d)("Location", "TeamsDashboard"),
                    rowData: e.geographical,
                    isGeo: !0
                })), c.createElement(M._27, {
                    display: M.P.Flex,
                    flexGrow: 1
                }, c.createElement(Ct, {
                    isLoading: e.isLoading,
                    tableName: Object(h.d)("Views by Platform", "TeamsDashboard"),
                    columnName: Object(h.d)("Platform", "TeamsDashboard"),
                    rowData: e.platform
                }))), c.createElement(M._4, {
                    display: M.P.Flex,
                    flexGrow: 1,
                    flexDirection: M.R.Column,
                    flexWrap: M.S.NoWrap
                }, a, c.createElement(M._27, {
                    display: M.P.Flex,
                    flexGrow: 1,
                    borderLeft: !0
                }, c.createElement(Ct, {
                    isLoading: e.isLoading,
                    tableName: t,
                    columnName: Pt,
                    rowData: e.externalReferral
                }))))
            },
            Ft = a("yLtb"),
            Et = a("BoWu"),
            Wt = this,
            It = {
                geographical: [],
                platform: [],
                internalReferral: [],
                externalReferral: []
            },
            Nt = function(e, t, a, n) {
                return l.__awaiter(Wt, void 0, void 0, function() {
                    var r, i, o, s;
                    return l.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return r = It, t.length < 1 ? [2, r] : (i = t.join(","), o = "/v5/teams/" + e + "/stats/video_play_demographics?channel_ids=" + i + "&start_time=" + a + "&end_time=" + n, [4, Object(X.e)({
                                    path: o
                                })]);
                            case 1:
                                return [2, (s = d.sent()).body ? Rt(s.body) : r]
                        }
                    })
                })
            },
            Rt = function(e) {
                for (var t = e.video_play_demographics, a = {
                        geographical: [],
                        platform: [],
                        internalReferral: [],
                        externalReferral: []
                    }, n = 0, r = Object.keys(t.geo); n < r.length; n++) {
                    var i = r[n];
                    a.geographical.push({
                        name: Object(Ft.a)(i),
                        views: t.geo[i]
                    })
                }
                for (var o = 0, s = Object.keys(t.platform); o < s.length; o++) {
                    i = s[o];
                    a.platform.push({
                        name: Object(Et.c)(i),
                        views: t.platform[i]
                    })
                }
                for (var d = 0, u = Object.keys(t.referrer.internal); d < u.length; d++) {
                    i = u[d];
                    a.internalReferral.push({
                        name: Object(Et.b)(i),
                        views: t.referrer.internal[i]
                    })
                }
                for (var l = 0, c = Object.keys(t.referrer.external); l < c.length; l++) {
                    i = c[l];
                    a.externalReferral.push({
                        name: Object(Et.a)(i),
                        views: t.referrer.external[i]
                    })
                }
                return a
            },
            zt = this,
            Bt = function(e, t, a, n, r) {
                return l.__awaiter(zt, void 0, void 0, function() {
                    var i, o, s, d, u, c, m, h, _;
                    return l.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                if (0 === a.length) return [2, Promise.resolve({})];
                                switch (i = "/v5/teams/" + t + "/stats/" + gt[e] + "?channel_ids=" + a + "&start_time=" + n + "&end_time=" + r, e) {
                                    case mt.AverageViewers:
                                        return [3, 1];
                                    case mt.MinutesWatched:
                                        return [3, 3];
                                    case mt.NewFollowers:
                                        return [3, 5];
                                    case mt.AverageChatters:
                                        return [3, 7];
                                    case mt.ChatMessages:
                                        return [3, 9];
                                    case mt.AdBreakDuration:
                                        return [3, 11]
                                }
                                return [3, 13];
                            case 1:
                                return s = Zt, [4, Jt(i)];
                            case 2:
                                return o = s.apply(void 0, [l.sent(), n, r, Qt]), [3, 14];
                            case 3:
                                return [4, Jt(i)];
                            case 4:
                                return d = l.sent(), u = Kt(d), o = Zt(u, n, r, $t), [3, 14];
                            case 5:
                                return c = Zt, [4, Ut(i)];
                            case 6:
                                return o = c.apply(void 0, [l.sent(), n, r, ta]), [3, 14];
                            case 7:
                                return m = Zt, [4, Vt(i)];
                            case 8:
                                return o = m.apply(void 0, [l.sent(), n, r, aa]), [3, 14];
                            case 9:
                                return h = Zt, [4, Vt(i)];
                            case 10:
                                return o = h.apply(void 0, [l.sent(), n, r, na]), [3, 14];
                            case 11:
                                return _ = Xt, [4, Gt(i)];
                            case 12:
                                return o = _.apply(void 0, [l.sent(), n, r, ra]), [3, 14];
                            case 13:
                                throw new Error("fetch type is not in StatsMetric enum");
                            case 14:
                                return [2, qt(o)]
                        }
                    })
                })
            },
            Jt = function(e) {
                return l.__awaiter(zt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(X.e)({
                                    path: e
                                })];
                            case 1:
                                return [2, (t = a.sent()).body ? t.body.concurrent_viewers : {}]
                        }
                    })
                })
            },
            Vt = function(e) {
                return l.__awaiter(zt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(X.e)({
                                    path: e
                                })];
                            case 1:
                                return [2, (t = a.sent()).body ? t.body.chat_activities : {}]
                        }
                    })
                })
            },
            Ut = function(e) {
                return l.__awaiter(zt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(X.e)({
                                    path: e
                                })];
                            case 1:
                                return [2, (t = a.sent()).body ? t.body.follows : {}]
                        }
                    })
                })
            },
            Gt = function(e) {
                return l.__awaiter(zt, void 0, void 0, function() {
                    var t;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Object(X.e)({
                                    path: e
                                })];
                            case 1:
                                return [2, (t = a.sent()).body ? t.body.commercials : {}]
                        }
                    })
                })
            },
            qt = function(e) {
                for (var t = {}, a = 0, n = Object.keys(e); a < n.length; a++)
                    for (var r = 0, i = e[n[a]]; r < i.length; r++) {
                        var o = i[r],
                            s = o.timestamp,
                            d = o.count,
                            u = o.numberOfDatapoints;
                        t[s] ? (t[s].count += d, t[s].numberOfDatapoints += u) : t[s] = {
                            count: d,
                            numberOfDatapoints: u
                        }
                    }
                return t
            },
            Kt = function(e) {
                for (var t = {}, a = 0, n = Object.keys(e); a < n.length; a++) {
                    var r = n[a],
                        i = e[r];
                    t[r] = i.map(function(e) {
                        return {
                            count: 5 * e.count,
                            timestamp: e.timestamp
                        }
                    })
                }
                return t
            },
            Zt = function(e, t, a, n) {
                for (var r = {}, i = 0, o = Object.keys(e); i < o.length; i++) {
                    var s = o[i];
                    r[s] = n(t, a, e[s])
                }
                return r
            },
            Xt = function(e, t, a, n) {
                for (var r = {}, i = 0, o = Object.keys(e); i < o.length; i++) {
                    var s = o[i];
                    r[s] = n(t, a, e[s])
                }
                return r
            },
            Qt = function(e, t, a) {
                return ea(e, t, a).map(function(e) {
                    var t = e.count / 48;
                    return {
                        timestamp: e.timestamp,
                        count: t,
                        numberOfDatapoints: 0
                    }
                })
            },
            $t = function(e, t, a) {
                return ea(e, t, a).map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.count,
                        numberOfDatapoints: 0
                    }
                })
            },
            ea = function(e, t, a) {
                for (var n = ia(e, t), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === oa(e)
                        });
                        a && (a.count += t)
                    }, i = 0, o = a; i < o.length; i++) {
                    var s = o[i];
                    r(s.timestamp, s.count)
                }
                return n
            },
            ta = function(e, t, a) {
                for (var n = ia(e, t), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === oa(e)
                        });
                        a && (a.count += t)
                    }, i = 0, o = a; i < o.length; i++) {
                    var s = o[i];
                    r(s.timestamp, s.count)
                }
                return n
            },
            aa = function(e, t, a) {
                for (var n = ia(e, t).map(function(e) {
                        return l.__assign({}, e, {
                            sampleSize: 0
                        })
                    }), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === oa(e)
                        });
                        a && 0 !== t && (a.count += t, a.sampleSize += 1)
                    }, i = 0, o = a; i < o.length; i++) {
                    var s = o[i];
                    r(s.timestamp, s.participant_count)
                }
                return n.map(function(e) {
                    return {
                        timestamp: e.timestamp,
                        count: e.sampleSize ? Math.floor(e.count / e.sampleSize) : 0,
                        numberOfDatapoints: 0
                    }
                })
            },
            na = function(e, t, a) {
                for (var n = ia(e, t), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === oa(e)
                        });
                        a && (a.count += t)
                    }, i = 0, o = a; i < o.length; i++) {
                    var s = o[i];
                    r(s.timestamp, s.message_count)
                }
                return n
            },
            ra = function(e, t, a) {
                for (var n = ia(e, t), r = function(e, t) {
                        var a = n.find(function(t) {
                            return t.timestamp === oa(e)
                        });
                        a && (a.count += t, a.numberOfDatapoints += 1)
                    }, i = 0, o = a; i < o.length; i++) {
                    var s = o[i];
                    r(s.timestamp, s.duration_seconds)
                }
                return n
            },
            ia = function(e, t) {
                for (var a = [], n = new Date(oa(e)), r = new Date(t); n < r;) a.push({
                    timestamp: n.toISOString(),
                    count: 0,
                    numberOfDatapoints: 0
                }), n = le(n);
                return a
            },
            oa = function(e) {
                var t = new Date(e),
                    a = t.getUTCHours() - t.getUTCHours() % 4;
                return new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), a)).toISOString()
            },
            sa = this,
            da = [mt.AverageViewers, mt.MinutesWatched, mt.NewFollowers, mt.AverageChatters, mt.ChatMessages, mt.AdBreaks, mt.AdBreakDuration],
            ua = Object.keys(gt),
            la = function(e, t, a, n) {
                return l.__awaiter(sa, void 0, void 0, function() {
                    var r, i, o, s, d, u, c, m, h, _, f, p;
                    return l.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                for (r = {}, i = [], o = 0, s = ua; o < s.length; o++) m = s[o], i.push(Bt(m, e, t, a, n));
                                return [4, Promise.all(i)];
                            case 1:
                                for (d = l.sent(), u = 0, c = ua; u < c.length; u++) {
                                    if (m = c[u], h = d.shift() || {}, 0 === Object.keys(h).length) return [2, {}];
                                    for (_ = 0, f = Object.keys(h); _ < f.length; _++) p = f[_], r[p] || (r[p] = {}), r[p][m] = h[p].count, m === mt.AdBreakDuration && (r[p][mt.AdBreaks] = h[p].numberOfDatapoints)
                                }
                                return [2, r]
                        }
                    })
                })
            },
            ca = function() {
                var e = Object(h.d)("Start Time", "TeamsDashboard") + "," + Object(h.d)("End Time", "TeamsDashboard") + "," + je();
                return da.reduce(function(e, t) {
                    return e + "," + vt(t)
                }, e) + "\n"
            },
            ma = function(e, t) {
                var a = le(e),
                    n = Ce(e) + "," + Ce(a) + ",UTC";
                return da.reduce(function(e, a) {
                    var n = "" + t[a];
                    return a === mt.AdBreakDuration && (n = oe(t[a])), e + "," + n
                }, n) + "\n"
            },
            ha = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.toggleMemberChecked = function(e) {
                        var t = a.state.members.slice(),
                            n = t.find(function(t) {
                                return t.id === e.id
                            });
                        n && (n.checked = !n.checked, a.setState({
                            members: t,
                            groupChecked: !1
                        }))
                    }, a.toggleGroupChecked = function() {
                        var e = !a.state.groupChecked,
                            t = C(a.state.members, e);
                        a.setState({
                            groupChecked: e,
                            members: t
                        })
                    }, a.handleMemberSelectionChange = function() {
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
                            var a, r, i, o, s, d;
                            return l.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return a = P(this.state.members), r = e.toISOString(), i = t.toISOString(), o = {
                                            isLoadingDemographics: !1,
                                            demographics: It,
                                            isLoadingStats: !1,
                                            data: {}
                                        }, n !== mt.AverageViewers ? [3, 2] : (this.setState({
                                            isLoadingDemographics: !0
                                        }), s = o, [4, Nt(this.props.teamName, a, r, i)]);
                                    case 1:
                                        s.demographics = u.sent(), u.label = 2;
                                    case 2:
                                        return this.setState({
                                            isLoadingStats: !0
                                        }), d = o, [4, Bt(n, this.props.teamName, a, r, i)];
                                    case 3:
                                        return d.data = u.sent(), [2, o]
                                }
                            })
                        })
                    }, a.handleCSVClick = function() {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, la(this.props.teamName, P(this.state.members), this.state.startTime.toISOString(), this.state.endTime.toISOString())];
                                    case 1:
                                        return e = a.sent(), 0 === Object.keys(e).length ? [2] : (t = Se(e, ma, ca()), Oe(t, F(L.Stats) + " - " + ie(this.state.startTime) + ".csv"), [2])
                                }
                            })
                        })
                    }, a.handleTimeRangeChange = function(e, t) {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var a;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            startTime: e,
                                            endTime: t
                                        }), [4, this.fetchStats(e, t, this.state.metric)];
                                    case 1:
                                        return a = n.sent(), this.setState(l.__assign({}, a)), [2]
                                }
                            })
                        })
                    }, a.onMetricChange = function(e) {
                        return l.__awaiter(a, void 0, void 0, function() {
                            var t;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.setState({
                                            metric: e
                                        }), [4, this.fetchStats(this.state.startTime, this.state.endTime, e)];
                                    case 1:
                                        return t = a.sent(), this.setState(l.__assign({}, t)), [2]
                                }
                            })
                        })
                    }, a.renderChartLoadingSpinner = function() {
                        return c.createElement(M._27, {
                            attachTop: !0,
                            attachLeft: !0,
                            background: M.m.Alt,
                            fullHeight: !0,
                            fullWidth: !0,
                            position: M._11.Absolute
                        }, c.createElement(M._6, {
                            delay: 100,
                            fillContent: !0,
                            size: M._25.Large
                        }))
                    }, a.renderViewershipTables = function() {
                        return c.createElement(At, l.__assign({
                            isLoading: a.state.isLoadingDemographics
                        }, a.state.demographics))
                    }, a.state = {
                        isLoadingMembers: !0,
                        members: [],
                        isLoadingStats: !0,
                        data: {},
                        isLoadingDemographics: !0,
                        demographics: It,
                        startTime: se(a.props.currentDate),
                        endTime: a.props.currentDate,
                        groupChecked: !0,
                        metric: mt.AverageViewers
                    }, a
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t = this;
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, te(this.props.teamName, x.StatsRevealed)];
                                case 1:
                                    return e = a.sent(), this.setState({
                                        isLoadingMembers: !1,
                                        members: C(e, !0)
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
                    return c.createElement(w, {
                        title: F(L.Stats),
                        titleSelector: "stats-page-title"
                    }, c.createElement(M._27, {
                        border: !0,
                        fullWidth: !0
                    }, c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Row,
                        justifyContent: M._3.Between,
                        margin: 2
                    }, c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Row
                    }, c.createElement(M._4, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(Te, {
                        isDisabled: e,
                        isLoading: this.state.isLoadingMembers,
                        members: this.state.members,
                        groupChecked: this.state.groupChecked,
                        onMemberSelectClose: this.handleMemberSelectionChange,
                        toggleMemberChecked: this.toggleMemberChecked,
                        toggleGroupChecked: this.toggleGroupChecked
                    })), c.createElement(M._4, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(ce, {
                        isDisabled: e,
                        earliestDate: this.props.earliestDataDate,
                        currentDate: this.props.currentDate,
                        onMonthSelection: this.handleTimeRangeChange
                    })), c.createElement(bt, {
                        isDisabled: e,
                        metric: this.state.metric,
                        onChange: this.onMetricChange
                    })), c.createElement(M._4, null, c.createElement(M.u, {
                        disabled: e,
                        "data-test-selector": "stats-csv-button",
                        icon: M._18.Download,
                        onClick: this.handleCSVClick,
                        type: M.A.Hollow
                    }, He()))), c.createElement(M._4, {
                        className: "chart-container",
                        margin: 2,
                        position: M._11.Relative
                    }, c.createElement(Yt, {
                        data: this.state.data,
                        dataType: this.state.metric
                    }), e ? this.renderChartLoadingSpinner() : null), this.state.metric === mt.AverageViewers ? this.renderViewershipTables() : ""))
                }, t = l.__decorate([Object(y.d)("StatsPage", {
                    autoReportInteractive: !0,
                    destination: g.a.TeamsDashboardStats
                })], t)
            }(c.Component),
            _a = new Date(Date.UTC(2017, 5)),
            fa = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        isError: !1,
                        isLoadingTeam: !0,
                        team: null
                    }, a.logger = h.o.logger.withCategory("team-dashboard-root"), a.redirectToRevenuePage = function() {
                        return c.createElement(m.a, {
                            to: "/teams/" + a.props.match.params.teamName + "/dashboard/" + L.Revenue
                        })
                    }, a.renderRevenuePage = function() {
                        return c.createElement(Ve, {
                            teamName: a.props.match.params.teamName,
                            earliestDataDate: a.earliestDataDate,
                            currentDate: a.currentDate
                        })
                    }, a.renderStatsPage = function() {
                        return c.createElement(ha, {
                            teamName: a.props.match.params.teamName,
                            earliestDataDate: a.earliestDataDate,
                            currentDate: a.currentDate
                        })
                    }, a.renderMembersPage = function() {
                        return c.createElement(re, {
                            teamName: a.props.match.params.teamName
                        })
                    }, a.renderFeaturedChannelsPage = function() {
                        return c.createElement(Z, {
                            teamName: a.props.match.params.teamName
                        })
                    }, a.renderSettingsPage = function() {
                        return c.createElement(_t, {
                            team: a.state.team,
                            onUpdate: a.handleUpdate
                        })
                    }, a.handleUpdate = function(e) {
                        a.setState({
                            team: e
                        })
                    }, a.earliestDataDate = _a, a.currentDate = t.currentDate || new Date, a.currentDate < a.earliestDataDate && (a.currentDate = a.earliestDataDate), a
                }
                return l.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                    var a = this;
                    this.setState({
                        isError: !0
                    }, function() {
                        a.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                            info: t
                        })
                    })
                }, t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, (a = this.props.match.params.teamName, l.__awaiter(st, void 0, void 0, function() {
                                        var e, t;
                                        return l.__generator(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return e = "/v5/teams/" + a, [4, Object(X.e)({
                                                        path: e
                                                    })];
                                                case 1:
                                                    return [2, (t = n.sent()).body ? dt(t.body) : null]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isLoadingTeam: !1,
                                        team: e
                                    }), [2]
                            }
                            var a
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.isError ? c.createElement(_.a, {
                        message: Object(h.d)("An error occurred on this page", "TeamDashboardRoot")
                    }) : (this.props.isLoggedIn ? e = this.state.isLoadingTeam ? c.createElement(M._6, {
                        fillContent: !0
                    }) : null === this.state.team ? c.createElement(f.a, null) : c.createElement(M._4, {
                        display: M.P.Flex,
                        flexWrap: M.S.NoWrap,
                        fullHeight: !0,
                        overflow: M._7.Hidden,
                        position: M._11.Relative
                    }, c.createElement(Ge, {
                        teamName: this.props.match.params.teamName
                    }), c.createElement(M.Y, {
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0,
                        position: M._11.Relative
                    }, c.createElement("main", null, c.createElement(m.d, null, c.createElement(m.b, {
                        exact: !0,
                        path: "/teams/:teamName/dashboard",
                        render: this.redirectToRevenuePage
                    }), c.createElement(m.b, {
                        exact: !0,
                        path: "/teams/:teamName/dashboard/" + L.Revenue,
                        render: this.renderRevenuePage
                    }), c.createElement(m.b, {
                        exact: !0,
                        path: "/teams/:teamName/dashboard/" + L.Stats,
                        render: this.renderStatsPage
                    }), c.createElement(m.b, {
                        exact: !0,
                        path: "/teams/:teamName/dashboard/" + L.Members,
                        render: this.renderMembersPage
                    }), c.createElement(m.b, {
                        exact: !0,
                        path: "/teams/:teamName/dashboard/" + L.FeaturedChannels,
                        render: this.renderFeaturedChannelsPage
                    }), c.createElement(m.b, {
                        exact: !0,
                        path: "/teams/:teamName/dashboard/" + L.Settings,
                        render: this.renderSettingsPage
                    }), c.createElement(m.b, {
                        component: f.a
                    }))))) : (this.props.onAnonymousVisit(), e = c.createElement(M._6, {
                        fillContent: !0
                    })), c.createElement(M._4, {
                        display: M.P.Flex,
                        flexDirection: M.R.Column,
                        flexWrap: M.S.NoWrap,
                        fullHeight: !0
                    }, c.createElement(p.a, null), e));
                    var e
                }, t
            }(c.Component);
        var pa = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(u.d)(e)
            }
        }, function(e) {
            return Object(o.b)({
                onAnonymousVisit: function() {
                    return Object(d.f)(s.a.DashboardPage)
                }
            }, e)
        })(fa);
        a.d(t, "TeamsDashboardRoot", function() {
            return pa
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
    rO5X: function(e, t, a) {
        var n = a("xA5w"),
            r = a("Bb5e"),
            i = a("NKE6");
        e.exports = function(e, t) {
            var a = n(e),
                o = n(t),
                s = i(a, o),
                d = Math.abs(r(a, o));
            return a.setFullYear(a.getFullYear() - s * d), s * (d - (i(a, o) === -s))
        }
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
                    o = ((r * i == -1 ? r : (r + i) / (1 + r * i)) + 1) / 2,
                    s = 1 - o;
                return this.rgb(o * this.red() + s * a.red(), o * this.green() + s * a.green(), o * this.blue() + s * a.blue()).alpha(this.alpha() * n + a.alpha() * (1 - n))
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                var e, t, a = new i,
                    n = this.values,
                    r = a.values;
                for (var o in n) n.hasOwnProperty(o) && (e = n[o], "[object Array]" === (t = {}.toString.call(e)) ? r[o] = e.slice(0) : "[object Number]" === t ? r[o] = e : console.error("unexpected color value:", e));
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
                o = this.spaces,
                s = this.maxes,
                d = 1;
            if (this.valid = !0, "alpha" === e) d = t;
            else if (t.length) i[e] = t.slice(0, e.length), d = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (a = 0; a < e.length; a++) i[e][a] = t[e.charAt(a)];
                d = t.a
            } else if (void 0 !== t[o[e][0]]) {
                var u = o[e];
                for (a = 0; a < e.length; a++) i[e][a] = t[u[a]];
                d = t.alpha
            }
            if (i.alpha = Math.max(0, Math.min(1, void 0 === d ? i.alpha : d)), "alpha" === e) return !1;
            for (a = 0; a < e.length; a++) r = Math.max(0, Math.min(s[e][a], i[e][a])), i[e][a] = Math.round(r);
            for (var l in o) l !== e && (i[l] = n[e][l](i[e]));
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
                    for (a = 0, n = (o.data.datasets || []).length; a < n; ++a)(r = o.getDatasetMeta(a)).data[i] && (r.data[i].hidden = !r.data[i].hidden);
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
                        h = r.circumference;
                    if (h < 2 * Math.PI) {
                        var _ = r.rotation % (2 * Math.PI),
                            f = (_ += 2 * Math.PI * (_ >= Math.PI ? -1 : _ < -Math.PI ? 1 : 0)) + h,
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
                            L = m / 100,
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
                        u = Math.min(s / Y.width, d / Y.height), l = {
                            x: -.5 * (k.x + D.x),
                            y: -.5 * (k.y + D.y)
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
                        h = n.getDataset(),
                        _ = a && d.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(h.data[t]) * (s.circumference / (2 * Math.PI)),
                        f = a && d.animateScale ? 0 : n.innerRadius,
                        p = a && d.animateScale ? 0 : n.outerRadius,
                        g = i.valueAtIndexOrDefault;
                    i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _model: {
                            x: u + r.offsetX,
                            y: l + r.offsetY,
                            startAngle: c,
                            endAngle: m,
                            circumference: _,
                            outerRadius: p,
                            innerRadius: f,
                            label: g(h.label, t, r.data.labels[t])
                        }
                    });
                    var y = e._model;
                    this.removeHoverStyle(e), a && d.animateRotate || (y.startAngle = 0 === t ? s.rotation : n.getMeta().data[t - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
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
                    for (var t, a, n = 0, r = this.index, i = e.length, o = 0; o < i; o++) t = e[o]._model ? e[o]._model.borderWidth : 0, n = (a = e[o]._chart ? e[o]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (n = t > n ? t : n) ? a : n;
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

            function o(e) {
                var t = e.options;
                return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
            }

            function s(e) {
                var a = e.options.pointLabels,
                    n = r.valueOrDefault(a.fontSize, t.defaultFontSize),
                    i = r.valueOrDefault(a.fontStyle, t.defaultFontStyle),
                    o = r.valueOrDefault(a.fontFamily, t.defaultFontFamily);
                return {
                    size: n,
                    style: i,
                    family: o,
                    font: r.fontString(n, i, o)
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

            function u(e) {
                return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
            }

            function l(e, t, a, n) {
                if (r.isArray(t))
                    for (var i = a.y, o = 1.5 * n, s = 0; s < t.length; ++s) e.fillText(t[s], a.x, i), i += o;
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
                        o = r.valueOrDefault(n.fontSize, t.defaultFontSize);
                    e.drawingArea = a.display ? i / 2 - (o / 2 + n.backdropPaddingY) : i / 2
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
                        var t, a, n, i = s(e),
                            u = Math.min(e.height / 2, e.width / 2),
                            l = {
                                r: e.width,
                                l: 0,
                                t: e.height,
                                b: 0
                            },
                            c = {};
                        e.ctx.font = i.font, e._pointLabelSizes = [];
                        var m, h, _, f = o(e);
                        for (t = 0; t < f; t++) {
                            n = e.getPointPosition(t, u), m = e.ctx, h = i.size, _ = e.pointLabels[t] || "", a = r.isArray(_) ? {
                                w: r.longestText(m, m.font, _),
                                h: _.length * h + 1.5 * (_.length - 1) * h
                            } : {
                                w: m.measureText(_).width,
                                h: h
                            }, e._pointLabelSizes[t] = a;
                            var p = e.getIndexAngle(t),
                                g = r.toDegrees(p) % 360,
                                y = d(g, n.x, a.w, 0, 180),
                                M = d(g, n.y, a.h, 90, 270);
                            y.start < l.l && (l.l = y.start, c.l = p), y.end > l.r && (l.r = y.end, c.r = p), M.start < l.t && (l.t = M.start, c.t = p), M.end > l.b && (l.b = M.end, c.b = p)
                        }
                        e.setReductions(u, l, c)
                    }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
                },
                setReductions: function(e, t, a) {
                    var n = t.l / Math.sin(a.l),
                        r = Math.max(t.r - this.width, 0) / Math.sin(a.r),
                        i = -t.t / Math.cos(a.t),
                        o = -Math.max(t.b - this.height, 0) / Math.cos(a.b);
                    n = m(n), r = m(r), i = m(i), o = m(o), this.drawingArea = Math.min(Math.round(e - (n + r) / 2), Math.round(e - (i + o) / 2)), this.setCenterPoint(n, r, i, o)
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
                    return e * (2 * Math.PI / o(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
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
                            g = r.fontString(_, f, p);
                        r.each(e.ticks, function(a, s) {
                            if (s > 0 || i.reverse) {
                                var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[s]);
                                if (n.display && 0 !== s && function(e, t, a, n) {
                                        var i = e.ctx;
                                        if (i.strokeStyle = r.valueAtIndexOrDefault(t.color, n - 1), i.lineWidth = r.valueAtIndexOrDefault(t.lineWidth, n - 1), e.options.gridLines.circular) i.beginPath(), i.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), i.closePath(), i.stroke();
                                        else {
                                            var s = o(e);
                                            if (0 === s) return;
                                            i.beginPath();
                                            var d = e.getPointPosition(0, a);
                                            i.moveTo(d.x, d.y);
                                            for (var u = 1; u < s; u++) d = e.getPointPosition(u, a), i.lineTo(d.x, d.y);
                                            i.closePath(), i.stroke()
                                        }
                                    }(e, n, u, s), i.display) {
                                    var l = d(i.fontColor, t.defaultFontColor);
                                    if (m.font = g, m.save(), m.translate(e.xCenter, e.yCenter), m.rotate(h), i.showLabelBackdrop) {
                                        var c = m.measureText(a).width;
                                        m.fillStyle = i.backdropColor, m.fillRect(-c / 2 - i.backdropPaddingX, -u - _ / 2 - i.backdropPaddingY, c + 2 * i.backdropPaddingX, _ + 2 * i.backdropPaddingY)
                                    }
                                    m.textAlign = "center", m.textBaseline = "middle", m.fillStyle = l, m.fillText(a, 0, -u), m.restore()
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
                                _ = s(e);
                            a.textBaseline = "top";
                            for (var f = o(e) - 1; f >= 0; f--) {
                                if (d.display) {
                                    var p = e.getPointPosition(f, h);
                                    a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(p.x, p.y), a.stroke(), a.closePath()
                                }
                                if (m.display) {
                                    var g = e.getPointPosition(f, h + 5),
                                        y = n(m.fontColor, t.defaultFontColor);
                                    a.font = _.font, a.fillStyle = y;
                                    var M = e.getIndexAngle(f),
                                        v = r.toDegrees(M);
                                    a.textAlign = u(v), c(v, e._pointLabelSizes[f], g), l(a, e.pointLabels[f] || "", g, _.size)
                                }
                            }
                        }(e)
                    }
                }
            });
            e.scaleService.registerScaleType("radialLinear", h, a)
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
    t6pj: function(e, t, a) {
        var n = a("YRFD"),
            r = a("xA5w"),
            i = a("25hp"),
            o = a("uyaC"),
            s = 1440,
            d = 43200,
            u = 525600;
        e.exports = function(e, t, a) {
            var l = a || {},
                c = n(e, t),
                m = l.locale,
                h = o.distanceInWords.localize;
            m && m.distanceInWords && m.distanceInWords.localize && (h = m.distanceInWords.localize);
            var _, f, p, g = {
                addSuffix: Boolean(l.addSuffix),
                comparison: c
            };
            c > 0 ? (_ = r(e), f = r(t)) : (_ = r(t), f = r(e));
            var y = Math[l.partialMethod ? String(l.partialMethod) : "floor"],
                M = i(f, _),
                v = f.getTimezoneOffset() - _.getTimezoneOffset(),
                b = y(M / 60) - v;
            if ("s" === (p = l.unit ? String(l.unit) : b < 1 ? "s" : b < 60 ? "m" : b < s ? "h" : b < d ? "d" : b < u ? "M" : "Y")) return h("xSeconds", M, g);
            if ("m" === p) return h("xMinutes", b, g);
            if ("h" === p) return h("xHours", y(b / 60), g);
            if ("d" === p) return h("xDays", y(b / s), g);
            if ("M" === p) return h("xMonths", y(b / d), g);
            if ("Y" === p) return h("xYears", y(b / u), g);
            throw new Error("Unknown unit: " + p)
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
    "u/4p": function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            var a = t && Number(t.weekStartsOn) || 0,
                r = n(e),
                i = r.getDay(),
                o = (i < a ? 7 : 0) + i - a;
            return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
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
                var r, i, o;
                for (r = 0, i = e.length; r < i; ++r)
                    if (void 0 !== (o = e[r]) && (void 0 !== t && "function" == typeof o && (o = o(t)), void 0 !== a && n.isArray(o) && (o = o[a]), void 0 !== o)) return o
            }
        }
    },
    u4Vk: function(e, t, a) {
        "use strict";
        t.c = function(e, t) {
            return Object(n.isEqual)(e.start, t.start) && Object(n.isEqual)(e.end, t.end)
        }, t.d = function(e, t) {
            return e.end.getTime() - e.start.getTime() == t.end.getTime() - t.start.getTime()
        }, t.a = function(e) {
            return Object(n.differenceInMinutes)(e.end, e.start)
        }, t.g = function(e) {
            return {
                start_time: e.start.toJSON(),
                end_time: e.end.toJSON()
            }
        }, t.b = function(e) {
            var t = Object(n.differenceInMinutes)(e.end, e.start);
            return Object(r.a)(t)
        }, t.e = function(e, t) {
            void 0 === t && (t = new Date);
            var a = Object(n.endOfDay)(t);
            return {
                start: Object(n.subDays)(a, e),
                end: a
            }
        }, t.f = function(e, t) {
            var a = (Object(n.differenceInDays)(e.end, e.start) + 1) * t;
            return {
                start: Object(n.addDays)(e.start, a),
                end: Object(n.addDays)(e.end, a)
            }
        };
        var n = a("wuJz"),
            r = (a.n(n), a("yiqh"))
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
    w4by: function(e, t, a) {
        var n = a("6Zhv"),
            r = 36e5;
        e.exports = function(e, t) {
            var a = Number(t);
            return n(e, a * r)
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
                    var i, o, s, d, u, l, c, m, h, _ = Object.keys(a);
                    for (i = 0, o = _.length; i < o; ++i)
                        if (l = a[s = _[i]], t.hasOwnProperty(s) || (t[s] = l), (d = t[s]) !== l && "_" !== s[0]) {
                            if (e.hasOwnProperty(s) || (e[s] = d), (c = typeof l) == typeof(u = e[s]))
                                if ("string" === c) {
                                    if ((m = n(u)).valid && (h = n(l)).valid) {
                                        t[s] = h.mix(m, r).rgbString();
                                        continue
                                    }
                                } else if ("number" === c && isFinite(u) && isFinite(l)) {
                                t[s] = u + (l - u) * r;
                                continue
                            }
                            t[s] = l
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
                    return function(t, r, i, o) {
                        var s = a(t),
                            d = n[e][a(t)];
                        return 2 === s && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
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
    wajf: function(e, t, a) {
        var n = a("xA5w"),
            r = a("D6ie");
        e.exports = function(e, t) {
            var a = n(e),
                i = Number(t),
                o = r(a) - i;
            return a.setDate(a.getDate() - 7 * o), a
        }
    },
    wiYS: function(e, t, a) {
        var n = a("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var a, r, i = n(e).getTime();
            return t.forEach(function(e, t) {
                var o = n(e),
                    s = Math.abs(i - o.getTime());
                (void 0 === a || s < r) && (a = t, r = s)
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
        var n = a("607n"),
            r = 36e5,
            i = 6e4,
            o = 2,
            s = /[T ]/,
            d = /:/,
            u = /^(\d{2})$/,
            l = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            c = /^(\d{4})/,
            m = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            h = /^-(\d{2})$/,
            _ = /^-?(\d{3})$/,
            f = /^-?(\d{2})-?(\d{2})$/,
            p = /^-?W(\d{2})$/,
            g = /^-?W(\d{2})-?(\d{1})$/,
            y = /^(\d{2}([.,]\d*)?)$/,
            M = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            v = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            b = /([Z+-].*)$/,
            L = /^(Z)$/,
            D = /^([+-])(\d{2})$/,
            k = /^([+-])(\d{2}):?(\d{2})$/;

        function Y(e, t, a) {
            t = t || 0, a = a || 0;
            var n = new Date(0);
            n.setUTCFullYear(e, 0, 4);
            var r = 7 * t + a + 1 - (n.getUTCDay() || 7);
            return n.setUTCDate(n.getUTCDate() + r), n
        }
        e.exports = function(e, t) {
            if (n(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var a = (t || {}).additionalDigits;
            a = null == a ? o : Number(a);
            var w = function(e) {
                    var t, a = {},
                        n = e.split(s);
                    if (d.test(n[0]) ? (a.date = null, t = n[0]) : (a.date = n[0], t = n[1]), t) {
                        var r = b.exec(t);
                        r ? (a.time = t.replace(r[1], ""), a.timezone = r[1]) : a.time = t
                    }
                    return a
                }(e),
                x = function(e, t) {
                    var a, n = l[t],
                        r = m[t];
                    if (a = c.exec(e) || r.exec(e)) {
                        var i = a[1];
                        return {
                            year: parseInt(i, 10),
                            restDateString: e.slice(i.length)
                        }
                    }
                    if (a = u.exec(e) || n.exec(e)) {
                        var o = a[1];
                        return {
                            year: 100 * parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(w.date, a),
                T = x.year,
                S = function(e, t) {
                    if (null === t) return null;
                    var a, n, r, i;
                    if (0 === e.length) return (n = new Date(0)).setUTCFullYear(t), n;
                    if (a = h.exec(e)) return n = new Date(0), r = parseInt(a[1], 10) - 1, n.setUTCFullYear(t, r), n;
                    if (a = _.exec(e)) {
                        n = new Date(0);
                        var o = parseInt(a[1], 10);
                        return n.setUTCFullYear(t, 0, o), n
                    }
                    if (a = f.exec(e)) {
                        n = new Date(0), r = parseInt(a[1], 10) - 1;
                        var s = parseInt(a[2], 10);
                        return n.setUTCFullYear(t, r, s), n
                    }
                    if (a = p.exec(e)) return i = parseInt(a[1], 10) - 1, Y(t, i);
                    if (a = g.exec(e)) {
                        i = parseInt(a[1], 10) - 1;
                        var d = parseInt(a[2], 10) - 1;
                        return Y(t, i, d)
                    }
                    return null
                }(x.restDateString, T);
            if (S) {
                var O, j = S.getTime(),
                    H = 0;
                return w.time && (H = function(e) {
                    var t, a, n;
                    if (t = y.exec(e)) return (a = parseFloat(t[1].replace(",", "."))) % 24 * r;
                    if (t = M.exec(e)) return a = parseInt(t[1], 10), n = parseFloat(t[2].replace(",", ".")), a % 24 * r + n * i;
                    if (t = v.exec(e)) {
                        a = parseInt(t[1], 10), n = parseInt(t[2], 10);
                        var o = parseFloat(t[3].replace(",", "."));
                        return a % 24 * r + n * i + 1e3 * o
                    }
                    return null
                }(w.time)), w.timezone ? (C = w.timezone, O = (P = L.exec(C)) ? 0 : (P = D.exec(C)) ? (A = 60 * parseInt(P[2], 10), "+" === P[1] ? -A : A) : (P = k.exec(C)) ? (A = 60 * parseInt(P[2], 10) + parseInt(P[3], 10), "+" === P[1] ? -A : A) : 0) : (O = new Date(j + H).getTimezoneOffset(), O = new Date(j + H + O * i).getTimezoneOffset()), new Date(j + H + O * i)
            }
            var C, P, A;
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
    yLtb: function(e, t, a) {
        "use strict";
        t.a = function(e) {
            switch (e.toUpperCase()) {
                case "A1":
                    return Object(n.d)("Anonymous Proxy", "format-country");
                case "A2":
                    return Object(n.d)("Satellite Provider", "format-country");
                case "AD":
                    return Object(n.d)("Andorra", "format-country");
                case "AE":
                    return Object(n.d)("United Arab Emirates", "format-country");
                case "AF":
                    return Object(n.d)("Afghanistan", "format-country");
                case "AG":
                    return Object(n.d)("Antigua and Barbuda", "format-country");
                case "AI":
                    return Object(n.d)("Anguilla", "format-country");
                case "AL":
                    return Object(n.d)("Albania", "format-country");
                case "AM":
                    return Object(n.d)("Armenia", "format-country");
                case "AO":
                    return Object(n.d)("Angola", "format-country");
                case "AP":
                    return Object(n.d)("Asia/Pacific Region", "format-country");
                case "AQ":
                    return Object(n.d)("Antarctica", "format-country");
                case "AR":
                    return Object(n.d)("Argentina", "format-country");
                case "AS":
                    return Object(n.d)("American Samoa", "format-country");
                case "AT":
                    return Object(n.d)("Austria", "format-country");
                case "AU":
                    return Object(n.d)("Australia", "format-country");
                case "AW":
                    return Object(n.d)("Aruba", "format-country");
                case "AX":
                    return Object(n.d)("Aland Islands", "format-country");
                case "AZ":
                    return Object(n.d)("Azerbaijan", "format-country");
                case "BA":
                    return Object(n.d)("Bosnia and Herzegovina", "format-country");
                case "BB":
                    return Object(n.d)("Barbados", "format-country");
                case "BD":
                    return Object(n.d)("Bangladesh", "format-country");
                case "BE":
                    return Object(n.d)("Belgium", "format-country");
                case "BF":
                    return Object(n.d)("Burkina Faso", "format-country");
                case "BG":
                    return Object(n.d)("Bulgaria", "format-country");
                case "BH":
                    return Object(n.d)("Bahrain", "format-country");
                case "BI":
                    return Object(n.d)("Burundi", "format-country");
                case "BJ":
                    return Object(n.d)("Benin", "format-country");
                case "BL":
                    return Object(n.d)("Saint Bartelemey", "format-country");
                case "BM":
                    return Object(n.d)("Bermuda", "format-country");
                case "BN":
                    return Object(n.d)("Brunei", "format-country");
                case "BO":
                    return Object(n.d)("Bolivia", "format-country");
                case "BQ":
                    return Object(n.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                case "BR":
                    return Object(n.d)("Brazil", "format-country");
                case "BS":
                    return Object(n.d)("Bahamas", "format-country");
                case "BT":
                    return Object(n.d)("Bhutan", "format-country");
                case "BV":
                    return Object(n.d)("Bouvet Island", "format-country");
                case "BW":
                    return Object(n.d)("Botswana", "format-country");
                case "BY":
                    return Object(n.d)("Belarus", "format-country");
                case "BZ":
                    return Object(n.d)("Belize", "format-country");
                case "CA":
                    return Object(n.d)("Canada", "format-country");
                case "CC":
                    return Object(n.d)("Cocos (Keeling) Islands", "format-country");
                case "CD":
                    return Object(n.d)("Congo, The Democratic Republic of the", "format-country");
                case "CF":
                    return Object(n.d)("Central African Republic", "format-country");
                case "CG":
                    return Object(n.d)("Congo", "format-country");
                case "CH":
                    return Object(n.d)("Switzerland", "format-country");
                case "CI":
                    return Object(n.d)("Ivory Coast", "format-country");
                case "CK":
                    return Object(n.d)("Cook Islands", "format-country");
                case "CL":
                    return Object(n.d)("Chile", "format-country");
                case "CM":
                    return Object(n.d)("Cameroon", "format-country");
                case "CN":
                    return Object(n.d)("China", "format-country");
                case "CO":
                    return Object(n.d)("Colombia", "format-country");
                case "CR":
                    return Object(n.d)("Costa Rica", "format-country");
                case "CU":
                    return Object(n.d)("Cuba", "format-country");
                case "CV":
                    return Object(n.d)("Cape Verde", "format-country");
                case "CW":
                    return Object(n.d)("Curacao", "format-country");
                case "CX":
                    return Object(n.d)("Christmas Island", "format-country");
                case "CY":
                    return Object(n.d)("Cyprus", "format-country");
                case "CZ":
                    return Object(n.d)("Czech Republic", "format-country");
                case "DE":
                    return Object(n.d)("Germany", "format-country");
                case "DJ":
                    return Object(n.d)("Djibouti", "format-country");
                case "DK":
                    return Object(n.d)("Denmark", "format-country");
                case "DM":
                    return Object(n.d)("Dominica", "format-country");
                case "DO":
                    return Object(n.d)("Dominican Republic", "format-country");
                case "DZ":
                    return Object(n.d)("Algeria", "format-country");
                case "EC":
                    return Object(n.d)("Ecuador", "format-country");
                case "EE":
                    return Object(n.d)("Estonia", "format-country");
                case "EG":
                    return Object(n.d)("Egypt", "format-country");
                case "EH":
                    return Object(n.d)("Western Sahara", "format-country");
                case "ER":
                    return Object(n.d)("Eritrea", "format-country");
                case "ES":
                    return Object(n.d)("Spain", "format-country");
                case "ET":
                    return Object(n.d)("Ethiopia", "format-country");
                case "EU":
                    return Object(n.d)("Europe", "format-country");
                case "FI":
                    return Object(n.d)("Finland", "format-country");
                case "FJ":
                    return Object(n.d)("Fiji", "format-country");
                case "FK":
                    return Object(n.d)("Falkland Islands (Malvinas)", "format-country");
                case "FM":
                    return Object(n.d)("Micronesia", "format-country");
                case "FO":
                    return Object(n.d)("Faroe Islands", "format-country");
                case "FR":
                    return Object(n.d)("France", "format-country");
                case "GA":
                    return Object(n.d)("Gabon", "format-country");
                case "GB":
                    return Object(n.d)("United Kingdom", "format-country");
                case "GD":
                    return Object(n.d)("Grenada", "format-country");
                case "GE":
                    return Object(n.d)("Georgia", "format-country");
                case "GF":
                    return Object(n.d)("French Guiana", "format-country");
                case "GG":
                    return Object(n.d)("Guernsey", "format-country");
                case "GH":
                    return Object(n.d)("Ghana", "format-country");
                case "GI":
                    return Object(n.d)("Gibraltar", "format-country");
                case "GL":
                    return Object(n.d)("Greenland", "format-country");
                case "GM":
                    return Object(n.d)("Gambia", "format-country");
                case "GN":
                    return Object(n.d)("Guinea", "format-country");
                case "GP":
                    return Object(n.d)("Guadeloupe", "format-country");
                case "GQ":
                    return Object(n.d)("Equatorial Guinea", "format-country");
                case "GR":
                    return Object(n.d)("Greece", "format-country");
                case "GS":
                    return Object(n.d)("South Georgia and the South Sandwich Islands", "format-country");
                case "GT":
                    return Object(n.d)("Guatemala", "format-country");
                case "GU":
                    return Object(n.d)("Guam", "format-country");
                case "GW":
                    return Object(n.d)("Guinea-Bissau", "format-country");
                case "GY":
                    return Object(n.d)("Guyana", "format-country");
                case "HK":
                    return Object(n.d)("Hong Kong", "format-country");
                case "HM":
                    return Object(n.d)("Heard Island and McDonald Islands", "format-country");
                case "HN":
                    return Object(n.d)("Honduras", "format-country");
                case "HR":
                    return Object(n.d)("Croatia", "format-country");
                case "HT":
                    return Object(n.d)("Haiti", "format-country");
                case "HU":
                    return Object(n.d)("Hungary", "format-country");
                case "ID":
                    return Object(n.d)("Indonesia", "format-country");
                case "IE":
                    return Object(n.d)("Ireland", "format-country");
                case "IL":
                    return Object(n.d)("Israel", "format-country");
                case "IM":
                    return Object(n.d)("Isle of Man", "format-country");
                case "IN":
                    return Object(n.d)("India", "format-country");
                case "IO":
                    return Object(n.d)("British Indian Ocean Territory", "format-country");
                case "IQ":
                    return Object(n.d)("Iraq", "format-country");
                case "IR":
                    return Object(n.d)("Iran", "format-country");
                case "IS":
                    return Object(n.d)("Iceland", "format-country");
                case "IT":
                    return Object(n.d)("Italy", "format-country");
                case "JE":
                    return Object(n.d)("Jersey", "format-country");
                case "JM":
                    return Object(n.d)("Jamaica", "format-country");
                case "JO":
                    return Object(n.d)("Jordan", "format-country");
                case "JP":
                    return Object(n.d)("Japan", "format-country");
                case "KE":
                    return Object(n.d)("Kenya", "format-country");
                case "KG":
                    return Object(n.d)("Kyrgyzstan", "format-country");
                case "KH":
                    return Object(n.d)("Cambodia", "format-country");
                case "KI":
                    return Object(n.d)("Kiribati", "format-country");
                case "KM":
                    return Object(n.d)("Comoros", "format-country");
                case "KN":
                    return Object(n.d)("Saint Kitts and Nevis", "format-country");
                case "KP":
                    return Object(n.d)("North Korea", "format-country");
                case "KR":
                    return Object(n.d)("South Korea", "format-country");
                case "KW":
                    return Object(n.d)("Kuwait", "format-country");
                case "KY":
                    return Object(n.d)("Cayman Islands", "format-country");
                case "KZ":
                    return Object(n.d)("Kazakhstan", "format-country");
                case "LA":
                    return Object(n.d)("Laos", "format-country");
                case "LB":
                    return Object(n.d)("Lebanon", "format-country");
                case "LC":
                    return Object(n.d)("Saint Lucia", "format-country");
                case "LI":
                    return Object(n.d)("Liechtenstein", "format-country");
                case "LK":
                    return Object(n.d)("Sri Lanka", "format-country");
                case "LR":
                    return Object(n.d)("Liberia", "format-country");
                case "LS":
                    return Object(n.d)("Lesotho", "format-country");
                case "LT":
                    return Object(n.d)("Lithuania", "format-country");
                case "LU":
                    return Object(n.d)("Luxembourg", "format-country");
                case "LV":
                    return Object(n.d)("Latvia", "format-country");
                case "LY":
                    return Object(n.d)("Libya", "format-country");
                case "MA":
                    return Object(n.d)("Morocco", "format-country");
                case "MC":
                    return Object(n.d)("Monaco", "format-country");
                case "MD":
                    return Object(n.d)("Moldova", "format-country");
                case "ME":
                    return Object(n.d)("Montenegro", "format-country");
                case "MF":
                    return Object(n.d)("Saint Martin", "format-country");
                case "MG":
                    return Object(n.d)("Madagascar", "format-country");
                case "MH":
                    return Object(n.d)("Marshall Islands", "format-country");
                case "MK":
                    return Object(n.d)("Macedonia", "format-country");
                case "ML":
                    return Object(n.d)("Mali", "format-country");
                case "MM":
                    return Object(n.d)("Myanmar", "format-country");
                case "MN":
                    return Object(n.d)("Mongolia", "format-country");
                case "MO":
                    return Object(n.d)("Macao", "format-country");
                case "MP":
                    return Object(n.d)("Northern Mariana Islands", "format-country");
                case "MQ":
                    return Object(n.d)("Martinique", "format-country");
                case "MR":
                    return Object(n.d)("Mauritania", "format-country");
                case "MS":
                    return Object(n.d)("Montserrat", "format-country");
                case "MT":
                    return Object(n.d)("Malta", "format-country");
                case "MU":
                    return Object(n.d)("Mauritius", "format-country");
                case "MV":
                    return Object(n.d)("Maldives", "format-country");
                case "MW":
                    return Object(n.d)("Malawi", "format-country");
                case "MX":
                    return Object(n.d)("Mexico", "format-country");
                case "MY":
                    return Object(n.d)("Malaysia", "format-country");
                case "MZ":
                    return Object(n.d)("Mozambique", "format-country");
                case "NA":
                    return Object(n.d)("Namibia", "format-country");
                case "NC":
                    return Object(n.d)("New Caledonia", "format-country");
                case "NE":
                    return Object(n.d)("Niger", "format-country");
                case "NF":
                    return Object(n.d)("Norfolk Island", "format-country");
                case "NG":
                    return Object(n.d)("Nigeria", "format-country");
                case "NI":
                    return Object(n.d)("Nicaragua", "format-country");
                case "NL":
                    return Object(n.d)("Netherlands", "format-country");
                case "NO":
                    return Object(n.d)("Norway", "format-country");
                case "NP":
                    return Object(n.d)("Nepal", "format-country");
                case "NR":
                    return Object(n.d)("Nauru", "format-country");
                case "NU":
                    return Object(n.d)("Niue", "format-country");
                case "NZ":
                    return Object(n.d)("New Zealand", "format-country");
                case "O1":
                    return Object(n.d)("Other Country", "format-country");
                case "OM":
                    return Object(n.d)("Oman", "format-country");
                case "PA":
                    return Object(n.d)("Panama", "format-country");
                case "PE":
                    return Object(n.d)("Peru", "format-country");
                case "PF":
                    return Object(n.d)("French Polynesia", "format-country");
                case "PG":
                    return Object(n.d)("Papua New Guinea", "format-country");
                case "PH":
                    return Object(n.d)("Philippines", "format-country");
                case "PK":
                    return Object(n.d)("Pakistan", "format-country");
                case "PL":
                    return Object(n.d)("Poland", "format-country");
                case "PM":
                    return Object(n.d)("Saint Pierre and Miquelon", "format-country");
                case "PN":
                    return Object(n.d)("Pitcairn", "format-country");
                case "PR":
                    return Object(n.d)("Puerto Rico", "format-country");
                case "PS":
                    return Object(n.d)("Palestine", "format-country");
                case "PT":
                    return Object(n.d)("Portugal", "format-country");
                case "PW":
                    return Object(n.d)("Palau", "format-country");
                case "PY":
                    return Object(n.d)("Paraguay", "format-country");
                case "QA":
                    return Object(n.d)("Qatar", "format-country");
                case "RE":
                    return Object(n.d)("Reunion", "format-country");
                case "RO":
                    return Object(n.d)("Romania", "format-country");
                case "RS":
                    return Object(n.d)("Serbia", "format-country");
                case "RU":
                    return Object(n.d)("Russia", "format-country");
                case "RW":
                    return Object(n.d)("Rwanda", "format-country");
                case "SA":
                    return Object(n.d)("Saudi Arabia", "format-country");
                case "SB":
                    return Object(n.d)("Solomon Islands", "format-country");
                case "SC":
                    return Object(n.d)("Seychelles", "format-country");
                case "SD":
                    return Object(n.d)("Sudan", "format-country");
                case "SE":
                    return Object(n.d)("Sweden", "format-country");
                case "SG":
                    return Object(n.d)("Singapore", "format-country");
                case "SH":
                    return Object(n.d)("Saint Helena", "format-country");
                case "SI":
                    return Object(n.d)("Slovenia", "format-country");
                case "SJ":
                    return Object(n.d)("Svalbard and Jan Mayen", "format-country");
                case "SK":
                    return Object(n.d)("Slovakia", "format-country");
                case "SL":
                    return Object(n.d)("Sierra Leone", "format-country");
                case "SM":
                    return Object(n.d)("San Marino", "format-country");
                case "SN":
                    return Object(n.d)("Senegal", "format-country");
                case "SO":
                    return Object(n.d)("Somalia", "format-country");
                case "SR":
                    return Object(n.d)("Suriname", "format-country");
                case "SS":
                    return Object(n.d)("South Sudan", "format-country");
                case "ST":
                    return Object(n.d)("Sao Tome and Principe", "format-country");
                case "SV":
                    return Object(n.d)("El Salvador", "format-country");
                case "SX":
                    return Object(n.d)("Sint Maarten", "format-country");
                case "SY":
                    return Object(n.d)("Syria", "format-country");
                case "SZ":
                    return Object(n.d)("Swaziland", "format-country");
                case "TC":
                    return Object(n.d)("Turks and Caicos Islands", "format-country");
                case "TD":
                    return Object(n.d)("Chad", "format-country");
                case "TF":
                    return Object(n.d)("French Southern Territories", "format-country");
                case "TG":
                    return Object(n.d)("Togo", "format-country");
                case "TH":
                    return Object(n.d)("Thailand", "format-country");
                case "TJ":
                    return Object(n.d)("Tajikistan", "format-country");
                case "TK":
                    return Object(n.d)("Tokelau", "format-country");
                case "TL":
                    return Object(n.d)("East Timor", "format-country");
                case "TM":
                    return Object(n.d)("Turkmenistan", "format-country");
                case "TN":
                    return Object(n.d)("Tunisia", "format-country");
                case "TO":
                    return Object(n.d)("Tonga", "format-country");
                case "TR":
                    return Object(n.d)("Turkey", "format-country");
                case "TT":
                    return Object(n.d)("Trinidad and Tobago", "format-country");
                case "TV":
                    return Object(n.d)("Tuvalu", "format-country");
                case "TW":
                    return Object(n.d)("Taiwan", "format-country");
                case "TZ":
                    return Object(n.d)("Tanzania", "format-country");
                case "UA":
                    return Object(n.d)("Ukraine", "format-country");
                case "UG":
                    return Object(n.d)("Uganda", "format-country");
                case "UM":
                    return Object(n.d)("United States Minor Outlying Islands", "format-country");
                case "US":
                    return Object(n.d)("United States", "format-country");
                case "UY":
                    return Object(n.d)("Uruguay", "format-country");
                case "UZ":
                    return Object(n.d)("Uzbekistan", "format-country");
                case "VA":
                    return Object(n.d)("Vatican City", "format-country");
                case "VC":
                    return Object(n.d)("Saint Vincent and the Grenadines", "format-country");
                case "VE":
                    return Object(n.d)("Venezuela", "format-country");
                case "VG":
                    return Object(n.d)("British Virgin Islands", "format-country");
                case "VI":
                    return Object(n.d)("U.S. Virgin Islands", "format-country");
                case "VN":
                    return Object(n.d)("Vietnam", "format-country");
                case "VU":
                    return Object(n.d)("Vanuatu", "format-country");
                case "WF":
                    return Object(n.d)("Wallis and Futuna", "format-country");
                case "WS":
                    return Object(n.d)("Samoa", "format-country");
                case "YE":
                    return Object(n.d)("Yemen", "format-country");
                case "YT":
                    return Object(n.d)("Mayotte", "format-country");
                case "ZA":
                    return Object(n.d)("South Africa", "format-country");
                case "ZM":
                    return Object(n.d)("Zambia", "format-country");
                case "ZW":
                    return Object(n.d)("Zimbabwe", "format-country");
                default:
                    return e
            }
        };
        var n = a("6sO2")
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
    yU6t: function(e, t) {},
    yiqh: function(e, t, a) {
        "use strict";
        t.a = function(e) {
            var t, a = Math.floor(e / 60),
                r = e % 60;
            t = a && r ? Object(n.d)("{hours, number}h{minutes, number}m", {
                hours: a,
                minutes: r
            }, "StreamSummaryDuration") : a ? Object(n.d)("{hours, number}h", {
                hours: a
            }, "StreamSummaryDuration") : Object(n.d)("{minutes, number}m", {
                minutes: r
            }, "StreamSummaryDuration");
            return t
        };
        var n = a("6sO2")
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
            var o = r(i),
                s = new Date(0);
            s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0);
            var d = r(s);
            return t.getTime() >= o.getTime() ? a + 1 : t.getTime() >= d.getTime() ? a : a - 1
        }
    }
});
//# sourceMappingURL=pages.teams-dashboard-0f89aeae2d2d9ceff61957d5f7114813.js.map