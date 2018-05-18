webpackJsonp([95], {
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
    "+ear": function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        });
        var n = a("TToO"),
            r = a("wuJz"),
            i = (a.n(r), a("OAwv")),
            s = (a.n(i), a("IJpv")),
            o = function() {
                function e(e, t, a) {
                    void 0 === a && (a = new Date);
                    var o = this;
                    this.location = e, this.history = t, this.replace = function(e) {
                        var t = o.buildPathWithParams(e);
                        o.history.replace(t)
                    }, this.searchStringWith = function(e) {
                        void 0 === e && (e = {});
                        var t = function(e) {
                                var t = {};
                                for (var a in e) {
                                    var n = e[a];
                                    "" !== n && (t[a] = n)
                                }
                                return t
                            }(n.__assign({}, o.rawParams, function(e) {
                                var t = {};
                                e.hasOwnProperty("end") && (t.end = d(e.end));
                                e.hasOwnProperty("start") && (t.start = d(e.start));
                                e.hasOwnProperty("topStatsIndex") && (t.topStatsIndex = "number" == typeof(a = e.topStatsIndex) && String(a) || "");
                                var a;
                                e.hasOwnProperty("topStatsAggregation") && (t.topStatsAggregation = e.topStatsAggregation || "");
                                return t
                            }(e))),
                            a = i.stringify(t);
                        return a.length ? "?" + a : ""
                    }, this.buildPathWithParams = function(e) {
                        return "" + o.location.pathname + o.searchStringWith(e)
                    }, this.location = e, this.history = t, this.rawParams = i.parse(e.search);
                    var u = l(this.rawParams.start) || Object(r.startOfMonth)(a),
                        c = Object(r.endOfDay)(l(this.rawParams.end) || a),
                        m = function(e) {
                            var t = Number(e);
                            if (!t) return 0;
                            return t = Math.floor(t), t = Math.max(0, t)
                        }(this.rawParams.topStatsIndex),
                        h = Object(s.b)(this.rawParams.topStatsAggregation);
                    this.params = {
                        start: u,
                        end: c,
                        topStatsIndex: m,
                        topStatsAggregation: h
                    }
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }();

        function l(e) {
            if (e) {
                var t = Object(r.parse)(e);
                if (Object(r.isValid)(t)) return t
            }
        }

        function d(e) {
            return e ? Object(r.format)(e, "YYYY-MM-DD") : ""
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
                    var a, n, r, o, l, d, u, c = this,
                        m = c._options,
                        h = c._model,
                        _ = c._model = s(m),
                        p = c._active,
                        f = c._data,
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
                        b = {
                            x: h.caretX,
                            y: h.caretY
                        };
                    if (p.length) {
                        _.opacity = 1;
                        var v = [],
                            L = [];
                        b = e.Tooltip.positioners[m.position].call(c, p, c._eventPosition);
                        var k = [];
                        for (a = 0, n = p.length; a < n; ++a) k.push((r = p[a], o = void 0, l = void 0, void 0, void 0, o = r._xScale, l = r._yScale || r._scale, d = r._index, u = r._datasetIndex, {
                            xLabel: o ? o.getLabelForIndex(d, u) : "",
                            yLabel: l ? l.getLabelForIndex(d, u) : "",
                            index: d,
                            datasetIndex: u,
                            x: r._model.x,
                            y: r._model.y
                        }));
                        m.filter && (k = k.filter(function(e) {
                            return m.filter(e, f)
                        })), m.itemSort && (k = k.sort(function(e, t) {
                            return m.itemSort(e, t, f)
                        })), i.each(k, function(e) {
                            v.push(m.callbacks.labelColor.call(c, e, c._chart)), L.push(m.callbacks.labelTextColor.call(c, e, c._chart))
                        }), _.title = c.getTitle(k, f), _.beforeBody = c.getBeforeBody(k, f), _.body = c.getBody(k, f), _.afterBody = c.getAfterBody(k, f), _.footer = c.getFooter(k, f), _.x = Math.round(b.x), _.y = Math.round(b.y), _.caretPadding = m.caretPadding, _.labelColors = v, _.labelTextColors = L, _.dataPoints = k, y = function(e, t, a) {
                            var n = e.x,
                                r = e.y,
                                i = e.caretSize,
                                s = e.caretPadding,
                                o = e.cornerRadius,
                                l = a.xAlign,
                                d = a.yAlign,
                                u = i + s,
                                c = o + s;
                            return "right" === l ? n -= t.width : "center" === l && (n -= t.width / 2), "top" === d ? r += u : r -= "bottom" === d ? t.height + u : t.height / 2, "center" === d ? "left" === l ? n += u : "right" === l && (n -= u) : "left" === l ? n -= c : "right" === l && (n += c), {
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
                            var l = t.title.length,
                                d = t.footer.length,
                                u = t.titleFontSize,
                                c = t.bodyFontSize,
                                m = t.footerFontSize;
                            n += l * u, n += l ? (l - 1) * t.titleSpacing : 0, n += l ? t.titleMarginBottom : 0, n += o * c, n += o ? (o - 1) * t.bodySpacing : 0, n += d ? t.footerMarginTop : 0, n += d * m, n += d ? (d - 1) * t.footerSpacing : 0;
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
                        }(this, _), g = function(e, t) {
                            var a, n, r, i, s, o = e._model,
                                l = e._chart,
                                d = e._chart.chartArea,
                                u = "center",
                                c = "center";
                            o.y < t.height ? c = "top" : o.y > l.height - t.height && (c = "bottom");
                            var m = (d.left + d.right) / 2,
                                h = (d.top + d.bottom) / 2;
                            "center" === c ? (a = function(e) {
                                return e <= m
                            }, n = function(e) {
                                return e > m
                            }) : (a = function(e) {
                                return e <= t.width / 2
                            }, n = function(e) {
                                return e >= l.width - t.width / 2
                            }), r = function(e) {
                                return e + t.width > l.width
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
                    return _.xAlign = g.xAlign, _.yAlign = g.yAlign, _.x = y.x, _.y = y.y, _.width = M.width, _.height = M.height, _.caretX = b.x, _.caretY = b.y, c._model = _, t && m.custom && m.custom.call(c, _), c
                },
                drawCaret: function(e, t) {
                    var a = this._chart.ctx,
                        n = this._view,
                        r = this.getCaretPosition(e, t, n);
                    a.lineTo(r.x1, r.y1), a.lineTo(r.x2, r.y2), a.lineTo(r.x3, r.y3)
                },
                getCaretPosition: function(e, t, a) {
                    var n, r, i, s, o, l, d = a.caretSize,
                        u = a.cornerRadius,
                        c = a.xAlign,
                        m = a.yAlign,
                        h = e.x,
                        _ = e.y,
                        p = t.width,
                        f = t.height;
                    if ("center" === m) o = _ + f / 2, "left" === c ? (r = (n = h) - d, i = n, s = o + d, l = o - d) : (r = (n = h + p) + d, i = n, s = o - d, l = o + d);
                    else if ("left" === c ? (n = (r = h + u + d) - d, i = r + d) : "right" === c ? (n = (r = h + p - u - d) - d, i = r + d) : (n = (r = h + p / 2) - d, i = r + d), "top" === m) o = (s = _) - d, l = s;
                    else {
                        o = (s = _ + f) + d, l = s;
                        var g = i;
                        i = n, n = g
                    }
                    return {
                        x1: n,
                        x2: r,
                        x3: i,
                        y1: s,
                        y2: o,
                        y3: l
                    }
                },
                drawTitle: function(e, a, n, r) {
                    var s = a.title;
                    if (s.length) {
                        n.textAlign = a._titleAlign, n.textBaseline = "top";
                        var o, l, d = a.titleFontSize,
                            u = a.titleSpacing;
                        for (n.fillStyle = t(a.titleFontColor, r), n.font = i.fontString(d, a._titleFontStyle, a._titleFontFamily), o = 0, l = s.length; o < l; ++o) n.fillText(s[o], e.x, e.y), e.y += d + u, o + 1 === s.length && (e.y += a.titleMarginBottom - u)
                    }
                },
                drawBody: function(e, a, n, r) {
                    var s = a.bodyFontSize,
                        o = a.bodySpacing,
                        l = a.body;
                    n.textAlign = a._bodyAlign, n.textBaseline = "top", n.font = i.fontString(s, a._bodyFontStyle, a._bodyFontFamily);
                    var d = 0,
                        u = function(t) {
                            n.fillText(t, e.x + d, e.y), e.y += s + o
                        };
                    n.fillStyle = t(a.bodyFontColor, r), i.each(a.beforeBody, u);
                    var c = a.displayColors;
                    d = c ? s + 2 : 0, i.each(l, function(o, l) {
                        var d = t(a.labelTextColors[l], r);
                        n.fillStyle = d, i.each(o.before, u), i.each(o.lines, function(i) {
                            c && (n.fillStyle = t(a.legendColorBackground, r), n.fillRect(e.x, e.y, s, s), n.lineWidth = 1, n.strokeStyle = t(a.labelColors[l].borderColor, r), n.strokeRect(e.x, e.y, s, s), n.fillStyle = t(a.labelColors[l].backgroundColor, r), n.fillRect(e.x + 1, e.y + 1, s - 2, s - 2), n.fillStyle = d), u(i)
                        }), i.each(o.after, u)
                    }), d = 0, i.each(a.afterBody, u), e.y -= o
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
                        l = e.x,
                        d = e.y,
                        u = r.width,
                        c = r.height,
                        m = a.cornerRadius;
                    n.beginPath(), n.moveTo(l + m, d), "top" === o && this.drawCaret(e, r), n.lineTo(l + u - m, d), n.quadraticCurveTo(l + u, d, l + u, d + m), "center" === o && "right" === s && this.drawCaret(e, r), n.lineTo(l + u, d + c - m), n.quadraticCurveTo(l + u, d + c, l + u - m, d + c), "bottom" === o && this.drawCaret(e, r), n.lineTo(l + m, d + c), n.quadraticCurveTo(l, d + c, l, d + c - m), "center" === o && "left" === s && this.drawCaret(e, r), n.lineTo(l, d + m), n.quadraticCurveTo(l, d, l + m, d), n.closePath(), n.fill(), a.borderWidth > 0 && n.stroke()
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
                        l = Number.POSITIVE_INFINITY;
                    for (a = 0, n = e.length; a < n; ++a) {
                        var d = e[a];
                        if (d && d.hasValue()) {
                            var u = d.getCenterPoint(),
                                c = i.distanceBetweenPoints(t, u);
                            c < l && (l = c, r = d)
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
    "0NoZ": function(e, t) {},
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
                        l = n._resolveElementOptions(e, t),
                        d = n.getDataset().data[t],
                        u = n.index,
                        c = a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof d ? d : NaN, t, u),
                        m = a ? o.getBasePixel() : o.getPixelForValue(d, t, u);
                    e._xScale = s, e._yScale = o, e._options = l, e._datasetIndex = u, e._index = t, e._model = {
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        hitRadius: l.hitRadius,
                        pointStyle: l.pointStyle,
                        radius: a ? 0 : l.radius,
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
                        l = e.custom || {},
                        d = s.options.elements.point,
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
                    for (a = 0, n = _.length; a < n; ++a) m[r = _[a]] = u([l[r], o[r], d[r]], h, t);
                    return m.radius = u([l.radius, c ? c.r : void 0, o.radius, d.radius], h, t), m
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

                        function l(t) {
                            return o ? t.xAxisID === e.id : t.yAxisID === e.id
                        }
                        e.min = null, e.max = null, e.minNotZero = null;
                        var d = t.stacked;
                        if (void 0 === d && n.each(i, function(e, t) {
                                if (!d) {
                                    var a = r.getDatasetMeta(t);
                                    r.isDatasetVisible(t) && l(a) && void 0 !== a.stack && (d = !0)
                                }
                            }), t.stacked || d) {
                            var u = {};
                            n.each(i, function(a, i) {
                                var s = r.getDatasetMeta(i),
                                    o = [s.type, void 0 === t.stacked && void 0 === s.stack ? i : "", s.stack].join(".");
                                r.isDatasetVisible(i) && l(s) && (void 0 === u[o] && (u[o] = []), n.each(a.data, function(a, n) {
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
                            r.isDatasetVisible(a) && l(i) && n.each(t.data, function(t, a) {
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
                            l = i.options.ticks;
                        return i.isHorizontal() ? (r = n.log10(i.end) - n.log10(s), 0 === o ? a = i.left : (t = i.width, a = i.left + t / r * (n.log10(o) - n.log10(s)))) : (t = i.height, 0 !== s || l.reverse ? 0 === i.end && l.reverse ? (r = n.log10(i.start) - n.log10(i.minNotZero), a = o === i.end ? i.top : o === i.minNotZero ? i.top + .02 * t : i.top + .02 * t + .98 * t / r * (n.log10(o) - n.log10(i.minNotZero))) : 0 === o ? a = l.reverse ? i.top : i.bottom : (r = n.log10(i.end) - n.log10(s), t = i.height, a = i.bottom - t / r * (n.log10(o) - n.log10(s))) : (r = n.log10(i.end) - n.log10(i.minNotZero), a = o === s ? i.bottom : o === i.minNotZero ? i.bottom - .02 * t : i.bottom - .02 * t - .98 * t / r * (n.log10(o) - n.log10(i.minNotZero)))), a
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
                        l = t.chart.options.elements.line,
                        d = t.chart.scale;
                    void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension), i.extend(a.dataset, {
                        _datasetIndex: t.index,
                        _scale: d,
                        _children: r,
                        _loop: !0,
                        _model: {
                            tension: s.tension ? s.tension : i.valueOrDefault(o.lineTension, l.tension),
                            backgroundColor: s.backgroundColor ? s.backgroundColor : o.backgroundColor || l.backgroundColor,
                            borderWidth: s.borderWidth ? s.borderWidth : o.borderWidth || l.borderWidth,
                            borderColor: s.borderColor ? s.borderColor : o.borderColor || l.borderColor,
                            fill: s.fill ? s.fill : void 0 !== o.fill ? o.fill : l.fill,
                            borderCapStyle: s.borderCapStyle ? s.borderCapStyle : o.borderCapStyle || l.borderCapStyle,
                            borderDash: s.borderDash ? s.borderDash : o.borderDash || l.borderDash,
                            borderDashOffset: s.borderDashOffset ? s.borderDashOffset : o.borderDashOffset || l.borderDashOffset,
                            borderJoinStyle: s.borderJoinStyle ? s.borderJoinStyle : o.borderJoinStyle || l.borderJoinStyle
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
                        l = n.chart.options.elements.point,
                        d = o.getPointPositionForValue(t, s.data[t]);
                    void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: o,
                        _model: {
                            x: a ? o.xCenter : d.x,
                            y: a ? o.yCenter : d.y,
                            tension: r.tension ? r.tension : i.valueOrDefault(s.lineTension, n.chart.options.elements.line.tension),
                            radius: r.radius ? r.radius : i.valueAtIndexOrDefault(s.pointRadius, t, l.radius),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : i.valueAtIndexOrDefault(s.pointBackgroundColor, t, l.backgroundColor),
                            borderColor: r.borderColor ? r.borderColor : i.valueAtIndexOrDefault(s.pointBorderColor, t, l.borderColor),
                            borderWidth: r.borderWidth ? r.borderWidth : i.valueAtIndexOrDefault(s.pointBorderWidth, t, l.borderWidth),
                            pointStyle: r.pointStyle ? r.pointStyle : i.valueAtIndexOrDefault(s.pointStyle, t, l.pointStyle),
                            hitRadius: r.hitRadius ? r.hitRadius : i.valueAtIndexOrDefault(s.pointHitRadius, t, l.hitRadius)
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
                            l = r[e][n(t)];
                        return 2 === o && (l = l[a ? 0 : 1]), l.replace(/%d/i, t)
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
                var n, i, s, o, l, d = r.isArray(t) ? t : [t],
                    u = d.length;
                if (!r.isObject(e)) return e;
                for (n = (a = a || {}).merger || r._merger, i = 0; i < u; ++i)
                    if (t = d[i], r.isObject(t))
                        for (l = 0, o = (s = Object.keys(t)).length; l < o; ++l) n(s[l], e, t, a);
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
                        var l = n.width / i,
                            d = l * (t - n.minIndex);
                        return r && (d += l / 2), n.left + Math.round(d)
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
                    var n, r, i, s, o, l = this.descriptors(e),
                        d = l.length;
                    for (n = 0; n < d; ++n)
                        if ("function" == typeof(o = (i = (r = l[n]).plugin)[t]) && ((s = [e].concat(a || [])).push(r.options), !1 === o.apply(i, s))) return !1;
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
                        }), r = n.angle, s = n.distance, o = a.startAngle, l = a.endAngle; l < o;) l += 2 * Math.PI;
                    for (; r > l;) r -= 2 * Math.PI;
                    for (; r < o;) r += 2 * Math.PI;
                    var d = r >= o && r <= l,
                        u = s >= a.innerRadius && s <= a.outerRadius;
                    return d && u
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
            o = a("zjE0"),
            l = a("FeZP"),
            d = a("xygp"),
            u = a("vTHh"),
            c = a("Odds"),
            m = {
                "data-test-selector": "referral-percentage"
            },
            h = function(e) {
                return e
            },
            _ = function(e) {
                var t = e.streamSummaries,
                    a = e.isLoading,
                    m = e.linkToDetails,
                    _ = e.onViewDetails;
                if (a) return n.createElement(c._8, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, n.createElement(c._14, {
                    height: 448
                }));
                var p = Object(d.a)(t.map(function(e) {
                        return e.videoPlayInternalTwitchReferrers
                    })),
                    f = Object(d.a)(t.map(function(e) {
                        return e.videoPlayInternalChannelsReferrers
                    })),
                    g = Object(d.a)(t.map(function(e) {
                        return e.videoPlayExternalReferrers
                    })),
                    y = n.createElement(s.a, null);
                return (p.total || f.total || g.total) && (y = n.createElement(n.Fragment, null, n.createElement(c._35, {
                    borderBottom: !0,
                    padding: {
                        bottom: 1
                    }
                }, n.createElement(u.a, {
                    referrals: p.items.slice(0, 3),
                    total: p.total,
                    translationFunc: i.b,
                    title: Object(r.d)("Twitch", "DashboardReferralPanel")
                }), n.createElement(u.a, {
                    referrals: f.items.slice(0, 3),
                    total: f.total,
                    translationFunc: h,
                    title: Object(r.d)("Channels", "DashboardReferralPanel")
                }), n.createElement(u.a, {
                    referrals: g.items.slice(0, 3),
                    total: g.total,
                    translationFunc: i.a,
                    title: Object(r.d)("External", "DashboardReferralPanel")
                })), n.createElement(l.a, {
                    onClick: _,
                    message: Object(r.d)("View details", "DashboardReferralPanel"),
                    linkTo: m
                }))), n.createElement(o.a, {
                    title: Object(r.d)("Where did my views come from?", "DashboardReferralPanel")
                }, y)
            };
        a.d(t, !1, function() {
            return m
        }), a.d(t, "a", function() {
            return _
        })
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
                        l = o.dataset,
                        d = o.data || [],
                        u = s.chart.options,
                        c = u.elements.line,
                        m = s.getScaleForId(o.yAxisID),
                        h = s.getDataset(),
                        _ = t(h, u);
                    for (_ && (r = l.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), l._scale = m, l._datasetIndex = s.index, l._children = d, l._model = {
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
                        }, l.pivot()), a = 0, n = d.length; a < n; ++a) s.updateElement(d[a], a, e);
                    for (_ && 0 !== l._model.tension && s.updateBezierControlPoints(), a = 0, n = d.length; a < n; ++a) d[a].pivot()
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
                        l = e.custom || {},
                        d = s.getDataset(),
                        u = s.index,
                        c = d.data[t],
                        m = s.getScaleForId(o.yAxisID),
                        h = s.getScaleForId(o.xAxisID),
                        _ = s.chart.options.elements.point;
                    void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), n = h.getPixelForValue("object" == typeof c ? c : NaN, t, u), r = a ? m.getBasePixel() : s.calculatePointY(c, t, u), e._xScale = h, e._yScale = m, e._datasetIndex = u, e._index = t, e._model = {
                        x: n,
                        y: r,
                        skip: l.skip || isNaN(n) || isNaN(r),
                        radius: l.radius || i.valueAtIndexOrDefault(d.pointRadius, t, _.radius),
                        pointStyle: l.pointStyle || i.valueAtIndexOrDefault(d.pointStyle, t, _.pointStyle),
                        backgroundColor: s.getPointBackgroundColor(e, t),
                        borderColor: s.getPointBorderColor(e, t),
                        borderWidth: s.getPointBorderWidth(e, t),
                        tension: o.dataset._model ? o.dataset._model.tension : 0,
                        steppedLine: !!o.dataset._model && o.dataset._model.steppedLine,
                        hitRadius: l.hitRadius || i.valueAtIndexOrDefault(d.pointHitRadius, t, _.hitRadius)
                    }
                },
                calculatePointY: function(e, t, a) {
                    var n, r, i, s = this.chart,
                        o = this.getMeta(),
                        l = this.getScaleForId(o.yAxisID),
                        d = 0,
                        u = 0;
                    if (l.options.stacked) {
                        for (n = 0; n < a; n++)
                            if (r = s.data.datasets[n], "line" === (i = s.getDatasetMeta(n)).type && i.yAxisID === l.id && s.isDatasetVisible(n)) {
                                var c = Number(l.getRightValue(r.data[t]));
                                c < 0 ? u += c || 0 : d += c || 0
                            }
                        var m = Number(l.getRightValue(e));
                        return m < 0 ? l.getPixelForValue(u + m) : l.getPixelForValue(d + m)
                    }
                    return l.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    var e, t, a, n, r = this.getMeta(),
                        s = this.chart.chartArea,
                        o = r.data || [];

                    function l(e, t, a) {
                        return Math.max(Math.min(e, a), t)
                    }
                    if (r.dataset._model.spanGaps && (o = o.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === r.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(o);
                    else
                        for (e = 0, t = o.length; e < t; ++e) a = o[e]._model, n = i.splineCurve(i.previousItem(o, e)._model, a, i.nextItem(o, e)._model, r.dataset._model.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
                    if (this.chart.options.elements.line.capBezierPoints)
                        for (e = 0, t = o.length; e < t; ++e)(a = o[e]._model).controlPointPreviousX = l(a.controlPointPreviousX, s.left, s.right), a.controlPointPreviousY = l(a.controlPointPreviousY, s.top, s.bottom), a.controlPointNextX = l(a.controlPointNextX, s.left, s.right), a.controlPointNextY = l(a.controlPointNextY, s.top, s.bottom)
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

            function l(e) {
                return e && !e.skip
            }

            function d(e, t, a, n, r) {
                var s;
                if (n && r) {
                    for (e.moveTo(t[0].x, t[0].y), s = 1; s < n; ++s) i.canvas.lineTo(e, t[s - 1], t[s]);
                    for (e.lineTo(a[r - 1].x, a[r - 1].y), s = r - 1; s > 0; --s) i.canvas.lineTo(e, a[s], a[s - 1], !0)
                }
            }
            return {
                id: "filler",
                afterDatasetsUpdate: function(e, n) {
                    var i, l, d, u, c = (e.data.datasets || []).length,
                        m = n.propagate,
                        h = [];
                    for (l = 0; l < c; ++l) u = null, (d = (i = e.getDatasetMeta(l)).dataset) && d._model && d instanceof r.Line && (u = {
                        visible: e.isDatasetVisible(l),
                        fill: t(d, l, c),
                        chart: e,
                        el: d
                    }), i.$filler = u, h.push(u);
                    for (l = 0; l < c; ++l)(u = h[l]) && (u.fill = s(h, l, m), u.boundary = a(u), u.mapper = o(u))
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
                            var s, o, u, c, m, h, _, p = t.length,
                                f = n.spanGaps,
                                g = [],
                                y = [],
                                M = 0,
                                b = 0;
                            for (e.beginPath(), s = 0, o = p + !!i; s < o; ++s) m = a(c = t[u = s % p]._view, u, n), h = l(c), _ = l(m), h && _ ? (M = g.push(c), b = y.push(m)) : M && b && (f ? (h && g.push(c), _ && y.push(m)) : (d(e, g, y, M, b), M = b = 0, g = [], y = []));
                            d(e, g, y, M, b), e.closePath(), e.fillStyle = r, e.fill()
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
                var l = s.height / 2;
                t = Math.min(s.x, s.base), a = Math.max(s.x, s.base), n = s.y - l, r = s.y + l
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
                    l = this._view,
                    d = l.borderWidth;
                if (l.horizontal ? (e = l.base, t = l.x, a = l.y - l.height / 2, n = l.y + l.height / 2, r = t > e ? 1 : -1, i = 1, s = l.borderSkipped || "left") : (e = l.x - l.width / 2, t = l.x + l.width / 2, a = l.y, r = 1, i = (n = l.base) > a ? 1 : -1, s = l.borderSkipped || "bottom"), d) {
                    var u = Math.min(Math.abs(e - t), Math.abs(a - n)),
                        c = (d = d > u ? u : d) / 2,
                        m = e + ("left" !== s ? c * r : 0),
                        h = t + ("right" !== s ? -c * r : 0),
                        _ = a + ("top" !== s ? c * i : 0),
                        p = n + ("bottom" !== s ? -c * i : 0);
                    m !== h && (a = _, n = p), _ !== p && (e = m, t = h)
                }
                o.beginPath(), o.fillStyle = l.backgroundColor, o.strokeStyle = l.borderColor, o.lineWidth = d;
                var f = [
                        [e, n],
                        [e, a],
                        [t, a],
                        [t, n]
                    ],
                    g = ["bottom", "left", "top", "right"].indexOf(s, 0);

                function y(e) {
                    return f[(g + e) % 4]
                } - 1 === g && (g = 0);
                var M = y(0);
                o.moveTo(M[0], M[1]);
                for (var b = 1; b < 4; b++) M = y(b), o.lineTo(M[0], M[1]);
                o.fill(), d && o.stroke()
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
    DN1M: function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            r = "$chartjs",
            i = "chartjs-",
            s = i + "render-monitor",
            o = i + "render-animation",
            l = ["animationstart", "webkitAnimationStart"],
            d = {
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

        function p(e, t, a) {
            var d, u, c, h, p = e[r] || (e[r] = {}),
                f = p.resizer = function(e) {
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
                }((d = function() {
                    if (p.resizer) return t(_("resize", a))
                }, c = !1, h = [], function() {
                    h = Array.prototype.slice.call(arguments), u = u || this, c || (c = !0, n.requestAnimFrame.call(window, function() {
                        c = !1, d.apply(u, h)
                    }))
                }));
            ! function(e, t) {
                var a = e[r] || (e[r] = {}),
                    i = a.renderProxy = function(e) {
                        e.animationName === o && t()
                    };
                n.each(l, function(t) {
                    m(e, t, i)
                }), a.reflow = !!e.offsetParent, e.classList.add(s)
            }(e, function() {
                if (p.resizer) {
                    var t = e.parentNode;
                    t && t !== f.parentNode && t.insertBefore(f, t.firstChild), f._reset()
                }
            })
        }

        function f(e) {
            var t = e[r] || {},
                a = t.resizer;
            delete t.resizer,
                function(e) {
                    var t = e[r] || {},
                        a = t.renderProxy;
                    a && (n.each(l, function(t) {
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
                            var a = d[e.type] || e.type,
                                r = n.getRelativePosition(e, t);
                            return _(a, t, r.x, r.y, e)
                        }(t, e))
                    })
                } else p(i, a, e)
            },
            removeEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" !== t) {
                    var i = ((a[r] || {}).proxies || {})[e.id + "_" + t];
                    i && h(n, t, i)
                } else f(n)
            }
        }, n.addEvent = m, n.removeEvent = h
    },
    DNvj: function(e, t, a) {
        "use strict";
        t.a = function(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, o, l, d;
                return n.__generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return a = "/kraken/clips/top", o = r.stringify(n.__assign({
                                channel: e
                            }, Object(i.i)(t))), l = [a, o].join("?"), [4, Object(s.c)({
                                path: l
                            })];
                        case 1:
                            return (d = u.sent()).isError() ? [2, {
                                isError: !0,
                                topClips: []
                            }] : [2, {
                                isError: !1,
                                topClips: (c = d.body, c.clips.map(function(e) {
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
            l = {
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
            d = Object.keys(l);

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
                l = o ? (a - i[t]) / o : 0,
                d = (s[n] - i[n]) * l;
            return i[n] + d
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

        function p(e) {
            for (var t = d.indexOf(e) + 1, a = d.length; t < a; ++t)
                if (l[d[t]].common) return d[t]
        }

        function f(e, t, a, r) {
            var s, u = r.time,
                c = u.unit || function(e, t, a, n) {
                    var r, i, s, u = d.length;
                    for (r = d.indexOf(e); r < u - 1; ++r)
                        if (s = (i = l[d[r]]).steps ? i.steps[i.steps.length - 1] : o, i.common && Math.ceil((a - t) / (s * i.size)) <= n) return d[r];
                    return d[u - 1]
                }(u.minUnit, e, t, a),
                m = p(c),
                h = i.valueOrDefault(u.stepSize, u.unitStepSize),
                _ = "week" === c && u.isoWeekday,
                f = r.ticks.major.enabled,
                g = l[c],
                y = n(e),
                M = n(t),
                b = [];
            for (h || (h = function(e, t, a, n) {
                    var r, i, s, o = t - e,
                        d = l[a],
                        u = d.size,
                        c = d.steps;
                    if (!c) return Math.ceil(o / ((n || 1) * u));
                    for (r = 0, i = c.length; r < i && (s = c[r], !(Math.ceil(o / (u * s)) <= n)); ++r);
                    return s
                }(e, t, c, a)), _ && (y = y.isoWeekday(_), M = M.isoWeekday(_)), y = y.startOf(_ ? "day" : c), (M = M.startOf(_ ? "day" : c)) < t && M.add(1, c), s = n(y), f && m && !_ && !u.round && (s.startOf(m), s.add(~~((y - s) / (g.size * h)) * h, c)); s < M; s.add(h, c)) b.push(+s);
            return b.push(+s), b
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
                    var e, t, a, r, l, d, m = this,
                        h = m.chart,
                        p = m.options.time,
                        f = o,
                        g = s,
                        y = [],
                        M = [],
                        b = [];
                    for (e = 0, a = h.data.labels.length; e < a; ++e) b.push(_(h.data.labels[e], m));
                    for (e = 0, a = (h.data.datasets || []).length; e < a; ++e)
                        if (h.isDatasetVisible(e))
                            if (l = h.data.datasets[e].data, i.isObject(l[0]))
                                for (M[e] = [], t = 0, r = l.length; t < r; ++t) d = _(l[t], m), y.push(d), M[e][t] = d;
                            else y.push.apply(y, b), M[e] = b.slice(0);
                    else M[e] = [];
                    b.length && (b = c(b).sort(u), f = Math.min(f, b[0]), g = Math.max(g, b[b.length - 1])), y.length && (y = c(y).sort(u), f = Math.min(f, y[0]), g = Math.max(g, y[y.length - 1])), f = _(p.min, m) || f, g = _(p.max, m) || g, f = f === o ? +n().startOf("day") : f, g = g === s ? +n().endOf("day") + 1 : g, m.min = Math.min(f, g), m.max = Math.max(f + 1, g), m._horizontal = m.isHorizontal(), m._table = [], m._timestamps = {
                        data: y,
                        datasets: M,
                        labels: b
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
                            c = f(i, s, r.getLabelCapacity(i), o)
                    }
                    for ("ticks" === o.bounds && c.length && (i = c[0], s = c[c.length - 1]), i = _(u.min, r) || i, s = _(u.max, r) || s, e = 0, t = c.length; e < t; ++e)(a = c[e]) >= i && a <= s && h.push(a);
                    return r.min = i, r.max = s, r._unit = u.unit || function(e, t, a, r) {
                            var i, s, o = n.duration(n(r).diff(n(a)));
                            for (i = d.length - 1; i >= d.indexOf(t); i--)
                                if (s = d[i], l[s].common && o.as(s) >= e.length) return s;
                            return d[t ? d.indexOf(t) : 0]
                        }(h, u.minUnit, r.min, r.max), r._majorUnit = p(r._unit), r._table = function(e, t, a, n) {
                            if ("linear" === n || !e.length) return [{
                                time: t,
                                pos: 0
                            }, {
                                time: a,
                                pos: 1
                            }];
                            var r, i, s, o, l, d = [],
                                u = [t];
                            for (r = 0, i = e.length; r < i; ++r)(o = e[r]) > t && o < a && u.push(o);
                            for (u.push(a), r = 0, i = u.length; r < i; ++r) l = u[r + 1], s = u[r - 1], o = u[r], void 0 !== s && void 0 !== l && Math.round((l + s) / 2) === o || d.push({
                                time: o,
                                pos: r / (i - 1)
                            });
                            return d
                        }(r._timestamps.data, i, s, o.distribution), r._offsets = function(e, t, a, n, r) {
                            var i, s, o = 0,
                                l = 0;
                            return r.offset && t.length && (r.time.min || (i = t.length > 1 ? t[1] : n, s = t[0], o = (m(e, "time", i, "pos") - m(e, "time", s, "pos")) / 2), r.time.max || (i = t[t.length - 1], s = t.length > 1 ? t[t.length - 2] : a, l = (m(e, "time", i, "pos") - m(e, "time", s, "pos")) / 2)), {
                                left: o,
                                right: l
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
                        l = o[this._unit],
                        d = this._majorUnit,
                        u = o[d],
                        c = e.clone().startOf(d).valueOf(),
                        m = r.ticks.major,
                        h = m.enabled && d && u && s === c,
                        _ = e.format(n || (h ? u : l)),
                        p = h ? m : r.ticks.minor,
                        f = i.valueOrDefault(p.callback, p.userCallback);
                    return f ? f(_, t, a) : _
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
                var i, s, o, l, d, u;
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
                                d = (s = 3 * a / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                e.moveTo(n - s / 2, r + d / 3),
                                e.lineTo(n + s / 2, r + d / 3),
                                e.lineTo(n, r - 2 * d / 3),
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
                                l = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - o, r - l),
                                e.lineTo(n + o, r + l),
                                e.moveTo(n - o, r + l),
                                e.lineTo(n + o, r - l),
                                e.closePath();
                                break;
                            case "star":
                                    e.beginPath(),
                                e.moveTo(n, r + a),
                                e.lineTo(n, r - a),
                                e.moveTo(n - a, r),
                                e.lineTo(n + a, r),
                                o = Math.cos(Math.PI / 4) * a,
                                l = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - o, r - l),
                                e.lineTo(n + o, r + l),
                                e.moveTo(n - o, r + l),
                                e.lineTo(n + o, r - l),
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
                    l = r.spanGaps,
                    d = this._children.slice(),
                    u = s.elements.line,
                    c = -1;
                for (this._loop && d.length && d.push(d[0]), o.save(), o.lineCap = r.borderCapStyle || u.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || u.borderDash), o.lineDashOffset = r.borderDashOffset || u.borderDashOffset, o.lineJoin = r.borderJoinStyle || u.borderJoinStyle, o.lineWidth = r.borderWidth || u.borderWidth, o.strokeStyle = r.borderColor || s.defaultColor, o.beginPath(), c = -1, e = 0; e < d.length; ++e) t = d[e], a = i.previousItem(d, e), n = t._view, 0 === e ? n.skip || (o.moveTo(n.x, n.y), c = e) : (a = -1 === c ? a : d[c], n.skip || (c !== e - 1 && !l || -1 === c ? o.moveTo(n.x, n.y) : i.canvas.lineTo(o, a._view, t._view), c = e));
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
                background: e.background || r.n.Alt,
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
            }, n.createElement(r.Q, {
                color: e.color
            }, e.message)))
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
            var d = 2;
            t === r.ClockHMS && (d = 3);
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
                    t !== r.Humanized && t !== r.HumanizedShort || u[e] || delete u[e], a < c.length - d && delete u[e]
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
                p = u.minutes || 0,
                f = u.hours || 0;
            switch (t) {
                case r.ClockHM:
                case r.ClockHMS:
                    var g = h ? l(f, 2) : f,
                        y = g + m + l(p, 2);
                    return t === r.ClockHMS && (y += m + l(_, 2)), y;
                case r.ClockMS:
                    var g = h ? l(p, 2) : p;
                    return g + m + l(_, 2)
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

        function l(e, t) {
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
                                l = i.valueAtIndexOrDefault,
                                d = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: o.backgroundColor ? o.backgroundColor : l(s.backgroundColor, n, d.backgroundColor),
                                strokeStyle: o.borderColor ? o.borderColor : l(s.borderColor, n, d.borderColor),
                                lineWidth: o.borderWidth ? o.borderWidth : l(s.borderWidth, n, d.borderWidth),
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
                        l = Math.min(n.right - n.left, n.bottom - n.top);
                    a.outerRadius = Math.max((l - o.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(s.cutoutPercentage ? a.outerRadius / 100 * s.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), t.outerRadius = a.outerRadius - a.radiusLength * t.index, t.innerRadius = t.outerRadius - a.radiusLength, r.count = t.countVisibleElements(), i.each(r.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    for (var n = this, r = n.chart, s = n.getDataset(), o = r.options, l = o.animation, d = r.scale, u = r.data.labels, c = n.calculateCircumference(s.data[t]), m = d.xCenter, h = d.yCenter, _ = 0, p = n.getMeta(), f = 0; f < t; ++f) isNaN(s.data[f]) || p.data[f].hidden || ++_;
                    var g = o.startAngle,
                        y = e.hidden ? 0 : d.getDistanceFromCenterForValue(s.data[t]),
                        M = g + c * _,
                        b = M + (e.hidden ? 0 : c),
                        v = l.animateScale ? 0 : d.getDistanceFromCenterForValue(s.data[t]);
                    i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: d,
                        _model: {
                            x: m,
                            y: h,
                            innerRadius: 0,
                            outerRadius: a ? v : y,
                            startAngle: a && l.animateRotate ? g : M,
                            endAngle: a && l.animateRotate ? g : b,
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
    G6h4: function(e, t) {},
    G70b: function(e, t) {},
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
                        l = e.custom || {},
                        d = r.options.elements.rectangle;
                    e._xScale = n.getScaleForId(s.xAxisID), e._yScale = n.getScaleForId(s.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
                        datasetLabel: o.label,
                        label: r.data.labels[t],
                        borderSkipped: l.borderSkipped ? l.borderSkipped : d.borderSkipped,
                        backgroundColor: l.backgroundColor ? l.backgroundColor : i.valueAtIndexOrDefault(o.backgroundColor, t, d.backgroundColor),
                        borderColor: l.borderColor ? l.borderColor : i.valueAtIndexOrDefault(o.borderColor, t, d.borderColor),
                        borderWidth: l.borderWidth ? l.borderWidth : i.valueAtIndexOrDefault(o.borderWidth, t, d.borderWidth)
                    }, n.updateElementGeometry(e, t, a), e.pivot()
                },
                updateElementGeometry: function(e, t, a) {
                    var n = this,
                        r = e._model,
                        i = n.getValueScale(),
                        s = i.getBasePixel(),
                        o = i.isHorizontal(),
                        l = n._ruler || n.getRuler(),
                        d = n.calculateBarValuePixels(n.index, t),
                        u = n.calculateBarIndexPixels(n.index, t, l);
                    r.horizontal = o, r.base = a ? s : d.base, r.x = o ? a ? s : d.head : u.center, r.y = o ? u.center : a ? s : d.head, r.height = o ? u.size : void 0, r.width = o ? void 0 : u.size
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
                        l = o + (s ? a.width : a.height);
                    for (e = 0, t = this.getMeta().data.length; e < t; ++e) i.push(a.getPixelForValue(null, e, r));
                    return {
                        pixels: i,
                        start: o,
                        end: l,
                        stackCount: n,
                        scale: a
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var a, n, r, i, s, o, l = this.chart,
                        d = this.getMeta(),
                        u = this.getValueScale(),
                        c = l.data.datasets,
                        m = u.getRightValue(c[e].data[t]),
                        h = u.options.stacked,
                        _ = d.stack,
                        p = 0;
                    if (h || void 0 === h && void 0 !== _)
                        for (a = 0; a < e; ++a)(n = l.getDatasetMeta(a)).bar && n.stack === _ && n.controller.getValueScaleId() === u.id && l.isDatasetVisible(a) && (r = u.getRightValue(c[a].data[t]), (m < 0 && r < 0 || m >= 0 && r > 0) && (p += r));
                    return i = u.getPixelForValue(p), {
                        size: o = ((s = u.getPixelForValue(p + m)) - i) / 2,
                        base: i,
                        head: s,
                        center: s + o / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, a) {
                    var n, r, s, o, l, d = a.scale.options,
                        u = this.getStackIndex(e),
                        c = a.pixels,
                        m = c[t],
                        h = c.length,
                        _ = a.start,
                        p = a.end;
                    return 1 === h ? (n = m > _ ? m - _ : p - m, r = m < p ? p - m : m - _) : (t > 0 && (n = (m - c[t - 1]) / 2, t === h - 1 && (r = n)), t < h - 1 && (r = (c[t + 1] - m) / 2, 0 === t && (n = r))), l = (o = ((s = n * d.categoryPercentage) + r * d.categoryPercentage) / a.stackCount) * d.barPercentage, m -= s, m += o * u, {
                        size: l = Math.min(i.valueOrDefault(d.barThickness, l), i.valueOrDefault(d.maxBarThickness, 1 / 0)),
                        base: m += (o - l) / 2,
                        head: m + l,
                        center: m + l / 2
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
    HCOe: function(e, t) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardChannelAnalytics_Channel"
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
                end: 146
            }
        };
        a.loc.source = {
            body: "query DashboardChannelAnalytics_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = a
    },
    IJpv: function(e, t, a) {
        "use strict";
        var n;
        a.d(t, "a", function() {
                return n
            }), t.b = function(e) {
                if (e === n.Week || e === n.Month) return e;
                return n.Day
            },
            function(e) {
                e.Day = "day", e.Week = "week", e.Month = "month"
            }(n || (n = {}))
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
                    var l = (o - s) / a;
                    l = n.almostEquals(l, Math.round(l), a / 1e3) ? Math.round(l) : Math.ceil(l), r.push(void 0 !== e.min ? e.min : s);
                    for (var d = 1; d < l; ++d) r.push(s + d * a);
                    return r.push(void 0 !== e.max ? e.max : o), r
                },
                logarithmic: function(e, t) {
                    var a, r, i = [],
                        s = n.valueOrDefault,
                        o = s(e.min, Math.pow(10, Math.floor(n.log10(t.min)))),
                        l = Math.floor(n.log10(t.max)),
                        d = Math.ceil(t.max / Math.pow(10, l));
                    0 === o ? (a = Math.floor(n.log10(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, a)), i.push(o), o = r * Math.pow(10, a)) : (a = Math.floor(n.log10(o)), r = Math.floor(o / Math.pow(10, a)));
                    do {
                        i.push(o), 10 === ++r && (r = 1, ++a), o = r * Math.pow(10, a)
                    } while (a < l || a === l && r < d);
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
    InMe: function(e, t, a) {
        "use strict";
        t.b = function(e) {
            return e.map(function(e) {
                return e.join(",")
            }).join("\n")
        }, t.c = function(e) {
            for (var t = [], a = e[0].length, n = function(a) {
                    t.push(e.map(function(e) {
                        return e[a]
                    }))
                }, r = 0; r < a; r++) n(r);
            return t
        }, t.a = function(e, t) {
            if ("function" == typeof window.navigator.msSaveBlob) {
                var a = new Blob([t], {
                    type: "text/csv;charset=utf-8;"
                });
                return window.navigator.msSaveBlob(a, e)
            }
            var n = document.createElement("a"),
                r = encodeURIComponent(t);
            void 0 === n.download ? n.href = "data:attachment/csv;charset=utf-8," + r : (n.href = "data:text/csv;charset=utf-8," + r, n.download = e);
            n.target = "_blank", n.setAttribute("style", "visibility: hidden"), document.body.appendChild(n), n.click(), document.body.removeChild(n)
        }
    },
    J9dY: function(e, t) {},
    JczT: function(e, t) {},
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

        function l(e) {
            var t = -1 !== e.indexOf("x"),
                a = -1 !== e.indexOf("y");
            return function(e, n) {
                var r = t ? Math.abs(e.x - n.x) : 0,
                    i = a ? Math.abs(e.y - n.y) : 0;
                return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2))
            }
        }

        function d(e, t, a) {
            var n = r(t, e);
            a.axis = a.axis || "x";
            var i = l(a.axis),
                d = a.intersect ? s(e, n) : o(e, n, !1, i),
                u = [];
            return d.length ? (e.data.datasets.forEach(function(t, a) {
                if (e.isDatasetVisible(a)) {
                    var n = e.getDatasetMeta(a).data[d[0]._index];
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
                label: d,
                index: d,
                dataset: function(e, t, a) {
                    var n = r(t, e);
                    a.axis = a.axis || "xy";
                    var i = l(a.axis),
                        d = a.intersect ? s(e, n) : o(e, n, !1, i);
                    return d.length > 0 && (d = e.getDatasetMeta(d[0]._datasetIndex).data), d
                },
                "x-axis": function(e, t) {
                    return d(e, t, {
                        intersect: !1
                    })
                },
                point: function(e, t) {
                    return s(e, r(t, e))
                },
                nearest: function(e, t, a) {
                    var n = r(t, e);
                    a.axis = a.axis || "xy";
                    var i = l(a.axis),
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
    KiQY: function(e, t, a) {
        "use strict";
        t.a = function(e) {
            var t = new Date(e);
            return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
        }
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
    MXAS: function(e, t) {},
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

                function l(e) {
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

                function c(e, t) {
                    for (var a in t) u(t, a) && (e[a] = t[a]);
                    return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function m(e, t, a, n) {
                    return wt(e, t, a, n, !0).utc()
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

                function p(e) {
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

                function f(e) {
                    var t = m(NaN);
                    return null != e ? c(h(t), e) : h(t).userInvalidated = !0, t
                }
                var g = n.momentProperties = [];

                function y(e, t) {
                    var a, n, r;
                    if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = h(t)), s(t._locale) || (e._locale = t._locale), g.length > 0)
                        for (a = 0; a < g.length; a++) s(r = t[n = g[a]]) || (e[n] = r);
                    return e
                }
                var M = !1;

                function b(e) {
                    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === M && (M = !0, n.updateOffset(this), M = !1)
                }

                function v(e) {
                    return e instanceof b || null != e && null != e._isAMomentObject
                }

                function L(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function k(e) {
                    var t = +e,
                        a = 0;
                    return 0 !== t && isFinite(t) && (a = L(t)), a
                }

                function D(e, t, a) {
                    var n, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        s = 0;
                    for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && k(e[n]) !== k(t[n])) && s++;
                    return s + i
                }

                function Y(e) {
                    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function S(e, t) {
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
                            Y(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
                        }
                        return t.apply(this, arguments)
                    }, t)
                }
                var w = {};

                function T(e, t) {
                    null != n.deprecationHandler && n.deprecationHandler(e, t), w[e] || (Y(t), w[e] = !0)
                }

                function x(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function C(e, t) {
                    var a, n = c({}, e);
                    for (a in t) u(t, a) && (i(e[a]) && i(t[a]) ? (n[a] = {}, c(n[a], e[a]), c(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                    for (a in e) u(e, a) && !u(t, a) && i(e[a]) && (n[a] = c({}, n[a]));
                    return n
                }

                function j(e) {
                    null != e && this.set(e)
                }
                n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
                var O = Object.keys ? Object.keys : function(e) {
                    var t, a = [];
                    for (t in e) u(e, t) && a.push(t);
                    return a
                };
                var P = {};

                function H(e, t) {
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

                function R(e, t) {
                    F[e] = t
                }

                function W(e, t) {
                    return function(a) {
                        return null != a ? (z(this, e, a), n.updateOffset(this, t), this) : I(this, e)
                    }
                }

                function I(e, t) {
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
                    U = {};

                function G(e, t, a, n) {
                    var r = n;
                    "string" == typeof n && (r = function() {
                        return this[n]()
                    }), e && (U[e] = r), t && (U[t[0]] = function() {
                        return N(r.apply(this, arguments), t[1], t[2])
                    }), a && (U[a] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function q(e, t) {
                    return e.isValid() ? (t = K(t, e.localeData()), J[t] = J[t] || function(e) {
                        var t, a, n, r = e.match(V);
                        for (t = 0, a = r.length; t < a; t++) U[r[t]] ? r[t] = U[r[t]] : r[t] = (n = r[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                        return function(t) {
                            var n, i = "";
                            for (n = 0; n < a; n++) i += x(r[n]) ? r[n].call(t, e) : r[n];
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
                    le = /[+-]?\d+/,
                    de = /Z|[+-]\d\d:?\d\d/gi,
                    ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    ce = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    me = {};

                function he(e, t, a) {
                    me[e] = x(t) ? t : function(e, n) {
                        return e && a ? a : t
                    }
                }

                function _e(e, t) {
                    return u(me, e) ? me[e](t._strict, t._locale) : new RegExp(pe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, r) {
                        return t || a || n || r
                    })))
                }

                function pe(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                var fe = {};

                function ge(e, t) {
                    var a, n = t;
                    for ("string" == typeof e && (e = [e]), o(t) && (n = function(e, a) {
                            a[t] = k(e)
                        }), a = 0; a < e.length; a++) fe[e[a]] = n
                }

                function ye(e, t) {
                    ge(e, function(e, a, n, r) {
                        n._w = n._w || {}, t(e, n._w, n, r)
                    })
                }

                function Me(e, t, a) {
                    null != t && u(fe, e) && fe[e](t, a._a, a, e)
                }
                var be = 0,
                    ve = 1,
                    Le = 2,
                    ke = 3,
                    De = 4,
                    Ye = 5,
                    Se = 6,
                    we = 7,
                    Te = 8,
                    xe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1
                    };

                function Ce(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }
                G("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), G("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), G("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), H("month", "M"), R("month", 8), he("M", te), he("MM", te, X), he("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), he("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ge(["M", "MM"], function(e, t) {
                    t[ve] = k(e) - 1
                }), ge(["MMM", "MMMM"], function(e, t, a, n) {
                    var r = a._locale.monthsParse(e, n, a._strict);
                    null != r ? t[ve] = r : h(a).invalidMonth = e
                });
                var je = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Oe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
                var Pe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                function He(e, t) {
                    var a;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = k(t);
                        else if (!o(t = e.localeData().monthsParse(t))) return e;
                    return a = Math.min(e.date(), Ce(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                }

                function Ae(e) {
                    return null != e ? (He(this, e), n.updateOffset(this, !0), this) : I(this, "Month")
                }
                var Ee = ce;
                var Fe = ce;

                function Re() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n = [],
                        r = [],
                        i = [];
                    for (t = 0; t < 12; t++) a = m([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), i.push(this.months(a, "")), i.push(this.monthsShort(a, ""));
                    for (n.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) n[t] = pe(n[t]), r[t] = pe(r[t]);
                    for (t = 0; t < 24; t++) i[t] = pe(i[t]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function We(e) {
                    return Ie(e) ? 366 : 365
                }

                function Ie(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }
                G("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), G(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), H("year", "y"), R("year", 1), he("Y", le), he("YY", te, X), he("YYYY", ie, $), he("YYYYY", se, ee), he("YYYYYY", se, ee), ge(["YYYYY", "YYYYYY"], be), ge("YYYY", function(e, t) {
                    t[be] = 2 === e.length ? n.parseTwoDigitYear(e) : k(e)
                }), ge("YY", function(e, t) {
                    t[be] = n.parseTwoDigitYear(e)
                }), ge("Y", function(e, t) {
                    t[be] = parseInt(e, 10)
                }), n.parseTwoDigitYear = function(e) {
                    return k(e) + (k(e) > 68 ? 1900 : 2e3)
                };
                var ze = W("FullYear", !0);

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
                    return o <= 0 ? s = We(i = e - 1) + o : o > We(e) ? (i = e + 1, s = o - We(e)) : (i = e, s = o), {
                        year: i,
                        dayOfYear: s
                    }
                }

                function Je(e, t, a) {
                    var n, r, i = Ve(e.year(), t, a),
                        s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return s < 1 ? n = s + Ue(r = e.year() - 1, t, a) : s > Ue(e.year(), t, a) ? (n = s - Ue(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = s), {
                        week: n,
                        year: r
                    }
                }

                function Ue(e, t, a) {
                    var n = Ve(e, t, a),
                        r = Ve(e + 1, t, a);
                    return (We(e) - n + r) / 7
                }
                G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), H("week", "w"), H("isoWeek", "W"), R("week", 5), R("isoWeek", 5), he("w", te), he("ww", te, X), he("W", te), he("WW", te, X), ye(["w", "ww", "W", "WW"], function(e, t, a, n) {
                    t[n.substr(0, 1)] = k(e)
                });
                G("d", 0, "do", "day"), G("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), G("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), G("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), H("day", "d"), H("weekday", "e"), H("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), he("d", te), he("e", te), he("E", te), he("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), he("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), he("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ye(["dd", "ddd", "dddd"], function(e, t, a, n) {
                    var r = a._locale.weekdaysParse(e, n, a._strict);
                    null != r ? t.d = r : h(a).invalidWeekday = e
                }), ye(["d", "e", "E"], function(e, t, a, n) {
                    t[n] = k(e)
                });
                var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
                var qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
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
                        l = [],
                        d = [];
                    for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), r = this.weekdaysShort(a, ""), i = this.weekdays(a, ""), s.push(n), o.push(r), l.push(i), d.push(n), d.push(r), d.push(i);
                    for (s.sort(e), o.sort(e), l.sort(e), d.sort(e), t = 0; t < 7; t++) o[t] = pe(o[t]), l[t] = pe(l[t]), d[t] = pe(d[t]);
                    this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
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
                    return "" + et.apply(this) + N(this.minutes(), 2)
                }), G("hmmss", 0, 0, function() {
                    return "" + et.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
                }), G("Hmm", 0, 0, function() {
                    return "" + this.hours() + N(this.minutes(), 2)
                }), G("Hmmss", 0, 0, function() {
                    return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
                }), tt("a", !0), tt("A", !1), H("hour", "h"), R("hour", 13), he("a", at), he("A", at), he("H", te), he("h", te), he("k", te), he("HH", te, X), he("hh", te, X), he("kk", te, X), he("hmm", ae), he("hmmss", ne), he("Hmm", ae), he("Hmmss", ne), ge(["H", "HH"], ke), ge(["k", "kk"], function(e, t, a) {
                    var n = k(e);
                    t[ke] = 24 === n ? 0 : n
                }), ge(["a", "A"], function(e, t, a) {
                    a._isPm = a._locale.isPM(e), a._meridiem = e
                }), ge(["h", "hh"], function(e, t, a) {
                    t[ke] = k(e), h(a).bigHour = !0
                }), ge("hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[De] = k(e.substr(n)), h(a).bigHour = !0
                }), ge("hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[De] = k(e.substr(n, 2)), t[Ye] = k(e.substr(r)), h(a).bigHour = !0
                }), ge("Hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[De] = k(e.substr(n))
                }), ge("Hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[De] = k(e.substr(n, 2)), t[Ye] = k(e.substr(r))
                });
                var nt, rt = W("Hours", !0),
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
                        weekdays: Ge,
                        weekdaysMin: Ke,
                        weekdaysShort: qe,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    st = {},
                    ot = {};

                function lt(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function dt(t) {
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
                        if (t.abbr = e, null != st[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = st[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == st[t.parentLocale]) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = st[t.parentLocale]._config
                        }
                        return st[e] = new j(C(a, t)), ot[e] && ot[e].forEach(function(e) {
                            ct(e.name, e.config)
                        }), ut(e), st[e]
                    }
                    return delete st[e], null
                }

                function mt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return nt;
                    if (!r(e)) {
                        if (t = dt(e)) return t;
                        e = [e]
                    }
                    return function(e) {
                        for (var t, a, n, r, i = 0; i < e.length;) {
                            for (t = (r = lt(e[i]).split("-")).length, a = (a = lt(e[i + 1])) ? a.split("-") : null; t > 0;) {
                                if (n = dt(r.slice(0, t).join("-"))) return n;
                                if (a && a.length >= t && D(r, a, !0) >= t - 1) break;
                                t--
                            }
                            i++
                        }
                        return null
                    }(e)
                }

                function ht(e) {
                    var t, a = e._a;
                    return a && -2 === h(e).overflow && (t = a[ve] < 0 || a[ve] > 11 ? ve : a[Le] < 1 || a[Le] > Ce(a[be], a[ve]) ? Le : a[ke] < 0 || a[ke] > 24 || 24 === a[ke] && (0 !== a[De] || 0 !== a[Ye] || 0 !== a[Se]) ? ke : a[De] < 0 || a[De] > 59 ? De : a[Ye] < 0 || a[Ye] > 59 ? Ye : a[Se] < 0 || a[Se] > 999 ? Se : -1, h(e)._overflowDayOfYear && (t < be || t > Le) && (t = Le), h(e)._overflowWeeks && -1 === t && (t = we), h(e)._overflowWeekday && -1 === t && (t = Te), h(e).overflow = t), e
                }
                var _t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    pt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ft = /Z|[+-]\d\d(?::?\d\d)?/,
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

                function bt(e) {
                    var t, a, n, r, i, s, o = e._i,
                        l = _t.exec(o) || pt.exec(o);
                    if (l) {
                        for (h(e).iso = !0, t = 0, a = gt.length; t < a; t++)
                            if (gt[t][1].exec(l[1])) {
                                r = gt[t][0], n = !1 !== gt[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (l[3]) {
                            for (t = 0, a = yt.length; t < a; t++)
                                if (yt[t][1].exec(l[3])) {
                                    i = (l[2] || " ") + yt[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!n && null != i) return void(e._isValid = !1);
                        if (l[4]) {
                            if (!ft.exec(l[4])) return void(e._isValid = !1);
                            s = "Z"
                        }
                        e._f = r + (i || "") + (s || ""), Yt(e)
                    } else e._isValid = !1
                }
                var vt = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

                function Lt(e) {
                    var t, a, n, r, i, s, o, l, d = {
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
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), a = vt.exec(t)) {
                        if (n = a[1] ? "ddd" + (5 === a[1].length ? ", " : " ") : "", r = "D MMM " + (a[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (a[4] ? ":ss" : ""), a[1]) {
                            var u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(a[2]).getDay()];
                            if (a[1].substr(0, 3) !== u) return h(e).weekdayMismatch = !0, void(e._isValid = !1)
                        }
                        switch (a[5].length) {
                            case 2:
                                o = 0 === l ? " +0000" : ((l = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(a[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + l).replace(/^-?/, "0").match(/..$/)[0] + "00";
                                break;
                            case 4:
                                o = d[a[5]];
                                break;
                            default:
                                o = d[" GMT"]
                        }
                        a[5] = o, e._i = a.splice(1).join(""), s = " ZZ", e._f = n + r + i + s, Yt(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function kt(e, t, a) {
                    return null != e ? e : null != t ? t : a
                }

                function Dt(e) {
                    var t, a, r, i, s = [];
                    if (!e._d) {
                        for (r = function(e) {
                                var t = new Date(n.now());
                                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                            }(e), e._w && null == e._a[Le] && null == e._a[ve] && function(e) {
                                var t, a, n, r, i, s, o, l;
                                if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, s = 4, a = kt(t.GG, e._a[be], Je(Tt(), 1, 4).year), n = kt(t.W, 1), ((r = kt(t.E, 1)) < 1 || r > 7) && (l = !0);
                                else {
                                    i = e._locale._week.dow, s = e._locale._week.doy;
                                    var d = Je(Tt(), i, s);
                                    a = kt(t.gg, e._a[be], d.year), n = kt(t.w, d.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (l = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : r = i
                                }
                                n < 1 || n > Ue(a, i, s) ? h(e)._overflowWeeks = !0 : null != l ? h(e)._overflowWeekday = !0 : (o = Be(a, n, r, i, s), e._a[be] = o.year, e._dayOfYear = o.dayOfYear)
                            }(e), null != e._dayOfYear && (i = kt(e._a[be], r[be]), (e._dayOfYear > We(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), a = Ne(i, 0, e._dayOfYear), e._a[ve] = a.getUTCMonth(), e._a[Le] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
                        for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[ke] && 0 === e._a[De] && 0 === e._a[Ye] && 0 === e._a[Se] && (e._nextDay = !0, e._a[ke] = 0), e._d = (e._useUTC ? Ne : function(e, t, a, n, r, i, s) {
                            var o = new Date(e, t, a, n, r, i, s);
                            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                        }).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ke] = 24)
                    }
                }

                function Yt(e) {
                    if (e._f !== n.ISO_8601)
                        if (e._f !== n.RFC_2822) {
                            e._a = [], h(e).empty = !0;
                            var t, a, r, i, s, o = "" + e._i,
                                l = o.length,
                                d = 0;
                            for (r = K(e._f, e._locale).match(V) || [], t = 0; t < r.length; t++) i = r[t], (a = (o.match(_e(i, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(a))).length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), d += a.length), U[i] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(i), Me(i, a, e)) : e._strict && !a && h(e).unusedTokens.push(i);
                            h(e).charsLeftOver = l - d, o.length > 0 && h(e).unusedInput.push(o), e._a[ke] <= 12 && !0 === h(e).bigHour && e._a[ke] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[ke] = function(e, t, a) {
                                var n;
                                if (null == a) return t;
                                return null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                            }(e._locale, e._a[ke], e._meridiem), Dt(e), ht(e)
                        } else Lt(e);
                    else bt(e)
                }

                function St(e) {
                    var t = e._i,
                        a = e._f;
                    return e._locale = e._locale || mt(e._l), null === t || void 0 === a && "" === t ? f({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new b(ht(t)) : (l(t) ? e._d = t : r(a) ? function(e) {
                        var t, a, n, r, i;
                        if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                        for (r = 0; r < e._f.length; r++) i = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Yt(t), p(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == n || i < n) && (n = i, a = t));
                        c(e, a || t)
                    }(e) : a ? Yt(e) : function(e) {
                        var t = e._i;
                        s(t) ? e._d = new Date(n.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                            var t = Mt.exec(e._i);
                            null === t ? (bt(e), !1 === e._isValid && (delete e._isValid, Lt(e), !1 === e._isValid && (delete e._isValid, n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                        }(e) : r(t) ? (e._a = d(t.slice(0), function(e) {
                            return parseInt(e, 10)
                        }), Dt(e)) : i(t) ? function(e) {
                            if (!e._d) {
                                var t = E(e._i);
                                e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                    return e && parseInt(e, 10)
                                }), Dt(e)
                            }
                        }(e) : o(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
                    }(e), p(e) || (e._d = null), e))
                }

                function wt(e, t, a, n, s) {
                    var o, l = {};
                    return !0 !== a && !1 !== a || (n = a, a = void 0), (i(e) && function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    }(e) || r(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = a, l._i = e, l._f = t, l._strict = n, (o = new b(ht(St(l))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
                }

                function Tt(e, t, a, n) {
                    return wt(e, t, a, n, !1)
                }
                n.createFromInputFallback = S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), n.ISO_8601 = function() {}, n.RFC_2822 = function() {};
                var xt = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Tt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : f()
                    }),
                    Ct = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Tt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : f()
                    });

                function jt(e, t) {
                    var a, n;
                    if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Tt();
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
                        l = t.minute || 0,
                        d = t.second || 0,
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
                    }(t), this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = mt(), this._bubble()
                }

                function Ht(e) {
                    return e instanceof Pt
                }

                function At(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function Et(e, t) {
                    G(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            a = "+";
                        return e < 0 && (e = -e, a = "-"), a + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
                    })
                }
                Et("Z", ":"), Et("ZZ", ""), he("Z", ue), he("ZZ", ue), ge(["Z", "ZZ"], function(e, t, a) {
                    a._useUTC = !0, a._tzm = Rt(ue, e)
                });
                var Ft = /([\+\-]|\d\d)/gi;

                function Rt(e, t) {
                    var a = (t || "").match(e);
                    if (null === a) return null;
                    var n = ((a[a.length - 1] || []) + "").match(Ft) || ["-", 0, 0],
                        r = 60 * n[1] + k(n[2]);
                    return 0 === r ? 0 : "+" === n[0] ? r : -r
                }

                function Wt(e, t) {
                    var a, r;
                    return t._isUTC ? (a = t.clone(), r = (v(e) || l(e) ? e.valueOf() : Tt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), n.updateOffset(a, !1), a) : Tt(e).local()
                }

                function It(e) {
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
                    return Ht(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : o(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (s = Nt.exec(e)) ? (a = "-" === s[1] ? -1 : 1, i = {
                        y: 0,
                        d: k(s[Le]) * a,
                        h: k(s[ke]) * a,
                        m: k(s[De]) * a,
                        s: k(s[Ye]) * a,
                        ms: k(At(1e3 * s[Se])) * a
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
                        t = Wt(t, e), e.isBefore(t) ? a = Ut(e, t) : ((a = Ut(t, e)).milliseconds = -a.milliseconds, a.months = -a.months);
                        return a
                    }(Tt(i.from), Tt(i.to)), (i = {}).ms = r.milliseconds, i.M = r.months), n = new Pt(i), Ht(e) && u(e, "_locale") && (n._locale = e._locale), n
                }

                function Jt(e, t) {
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
                        return null === n || isNaN(+n) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = a, a = n, n = r), qt(this, Bt(a = "string" == typeof a ? +a : a, n), e), this
                    }
                }

                function qt(e, t, a, r) {
                    var i = t._milliseconds,
                        s = At(t._days),
                        o = At(t._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * a), s && z(e, "Date", I(e, "Date") + s * a), o && He(e, I(e, "Month") + o * a), r && n.updateOffset(e, s || o))
                }
                Bt.fn = Pt.prototype, Bt.invalid = function() {
                    return Bt(NaN)
                };
                var Kt = Gt(1, "add"),
                    Qt = Gt(-1, "subtract");

                function Xt(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = mt(e)) && (this._locale = t), this)
                }
                n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Zt = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
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
                    return null == e ? Je(this, n, r).year : (t > (i = Ue(e, n, r)) && (t = i), function(e, t, a, n, r) {
                        var i = Be(e, t, a, n, r),
                            s = Ne(i.year, 0, i.dayOfYear);
                        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                    }.call(this, e, t, a, n, r))
                }
                G(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), G(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), ea("gggg", "weekYear"), ea("ggggg", "weekYear"), ea("GGGG", "isoWeekYear"), ea("GGGGG", "isoWeekYear"), H("weekYear", "gg"), H("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), he("G", le), he("g", le), he("GG", te, X), he("gg", te, X), he("GGGG", ie, $), he("gggg", ie, $), he("GGGGG", se, ee), he("ggggg", se, ee), ye(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                    t[n.substr(0, 2)] = k(e)
                }), ye(["gg", "GG"], function(e, t, a, r) {
                    t[r] = n.parseTwoDigitYear(e)
                }), G("Q", 0, "Qo", "quarter"), H("quarter", "Q"), R("quarter", 7), he("Q", Q), ge("Q", function(e, t) {
                    t[ve] = 3 * (k(e) - 1)
                }), G("D", ["DD", 2], "Do", "date"), H("date", "D"), R("date", 9), he("D", te), he("DD", te, X), he("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), ge(["D", "DD"], Le), ge("Do", function(e, t) {
                    t[Le] = k(e.match(te)[0])
                });
                var aa = W("Date", !0);
                G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), H("dayOfYear", "DDD"), R("dayOfYear", 4), he("DDD", re), he("DDDD", Z), ge(["DDD", "DDDD"], function(e, t, a) {
                    a._dayOfYear = k(e)
                }), G("m", ["mm", 2], 0, "minute"), H("minute", "m"), R("minute", 14), he("m", te), he("mm", te, X), ge(["m", "mm"], De);
                var na = W("Minutes", !1);
                G("s", ["ss", 2], 0, "second"), H("second", "s"), R("second", 15), he("s", te), he("ss", te, X), ge(["s", "ss"], Ye);
                var ra, ia = W("Seconds", !1);
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
                    }), H("millisecond", "ms"), R("millisecond", 16), he("S", re, Q), he("SS", re, X), he("SSS", re, Z), ra = "SSSS"; ra.length <= 9; ra += "S") he(ra, oe);

                function sa(e, t) {
                    t[Se] = k(1e3 * ("0." + e))
                }
                for (ra = "S"; ra.length <= 9; ra += "S") ge(ra, sa);
                var oa = W("Milliseconds", !1);
                G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
                var la = b.prototype;

                function da(e) {
                    return e
                }
                la.add = Kt, la.calendar = function(e, t) {
                    var a = e || Tt(),
                        r = Wt(a, this).startOf("day"),
                        i = n.calendarFormat(this, r) || "sameElse",
                        s = t && (x(t[i]) ? t[i].call(this, a) : t[i]);
                    return this.format(s || this.localeData().calendar(i, this, Tt(a)))
                }, la.clone = function() {
                    return new b(this)
                }, la.diff = function(e, t, a) {
                    var n, r, i, s;
                    return this.isValid() && (n = Wt(e, this)).isValid() ? (r = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (t = A(t)) || "month" === t || "quarter" === t ? (o = this, l = n, c = 12 * (l.year() - o.year()) + (l.month() - o.month()), m = o.clone().add(c, "months"), l - m < 0 ? (d = o.clone().add(c - 1, "months"), u = (l - m) / (m - d)) : (d = o.clone().add(c + 1, "months"), u = (l - m) / (d - m)), s = -(c + u) || 0, "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - n, s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), a ? s : L(s)) : NaN;
                    var o, l, d, u, c, m
                }, la.endOf = function(e) {
                    return void 0 === (e = A(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }, la.format = function(e) {
                    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                    var t = q(this, e);
                    return this.localeData().postformat(t)
                }, la.from = function(e, t) {
                    return this.isValid() && (v(e) && e.isValid() || Tt(e).isValid()) ? Bt({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, la.fromNow = function(e) {
                    return this.from(Tt(), e)
                }, la.to = function(e, t) {
                    return this.isValid() && (v(e) && e.isValid() || Tt(e).isValid()) ? Bt({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, la.toNow = function(e) {
                    return this.to(Tt(), e)
                }, la.get = function(e) {
                    return x(this[e = A(e)]) ? this[e]() : this
                }, la.invalidAt = function() {
                    return h(this).overflow
                }, la.isAfter = function(e, t) {
                    var a = v(e) ? e : Tt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(s(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                }, la.isBefore = function(e, t) {
                    var a = v(e) ? e : Tt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(s(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                }, la.isBetween = function(e, t, a, n) {
                    return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
                }, la.isSame = function(e, t) {
                    var a, n = v(e) ? e : Tt(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                }, la.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, la.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, la.isValid = function() {
                    return p(this)
                }, la.lang = Zt, la.locale = Xt, la.localeData = $t, la.max = Ct, la.min = xt, la.parsingFlags = function() {
                    return c({}, h(this))
                }, la.set = function(e, t) {
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
                    else if (x(this[e = A(e)])) return this[e](t);
                    return this
                }, la.startOf = function(e) {
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
                }, la.subtract = Qt, la.toArray = function() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }, la.toObject = function() {
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
                }, la.toDate = function() {
                    return new Date(this.valueOf())
                }, la.toISOString = function() {
                    if (!this.isValid()) return null;
                    var e = this.clone().utc();
                    return e.year() < 0 || e.year() > 9999 ? q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : x(Date.prototype.toISOString) ? this.toDate().toISOString() : q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }, la.inspect = function() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var a = "[" + e + '("]',
                        n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }, la.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, la.toString = function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, la.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, la.valueOf = function() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }, la.creationData = function() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }, la.year = ze, la.isLeapYear = function() {
                    return Ie(this.year())
                }, la.weekYear = function(e) {
                    return ta.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, la.isoWeekYear = function(e) {
                    return ta.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, la.quarter = la.quarters = function(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }, la.month = Ae, la.daysInMonth = function() {
                    return Ce(this.year(), this.month())
                }, la.week = la.weeks = function(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, la.isoWeek = la.isoWeeks = function(e) {
                    var t = Je(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, la.weeksInYear = function() {
                    var e = this.localeData()._week;
                    return Ue(this.year(), e.dow, e.doy)
                }, la.isoWeeksInYear = function() {
                    return Ue(this.year(), 1, 4)
                }, la.date = aa, la.day = la.days = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = function(e, t) {
                        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                    }(e, this.localeData()), this.add(e - t, "d")) : t
                }, la.weekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }, la.isoWeekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = function(e, t) {
                            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                        }(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }, la.dayOfYear = function(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }, la.hour = la.hours = rt, la.minute = la.minutes = na, la.second = la.seconds = ia, la.millisecond = la.milliseconds = oa, la.utcOffset = function(e, t, a) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Rt(ue, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && t && (r = It(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!t || this._changeInProgress ? qt(this, Bt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? i : It(this)
                }, la.utc = function(e) {
                    return this.utcOffset(0, e)
                }, la.local = function(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(It(this), "m")), this
                }, la.parseZone = function() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = Rt(de, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }, la.hasAlignedHourOffset = function(e) {
                    return !!this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }, la.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, la.isLocal = function() {
                    return !!this.isValid() && !this._isUTC
                }, la.isUtcOffset = function() {
                    return !!this.isValid() && this._isUTC
                }, la.isUtc = zt, la.isUTC = zt, la.zoneAbbr = function() {
                    return this._isUTC ? "UTC" : ""
                }, la.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, la.dates = S("dates accessor is deprecated. Use date instead.", aa), la.months = S("months accessor is deprecated. Use month instead", Ae), la.years = S("years accessor is deprecated. Use year instead", ze), la.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }), la.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                    if (!s(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (y(e, this), (e = St(e))._a) {
                        var t = e._isUTC ? m(e._a) : Tt(e._a);
                        this._isDSTShifted = this.isValid() && D(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                });
                var ua = j.prototype;

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
                    var l = [];
                    for (r = 0; r < 7; r++) l[r] = ca(t, (r + s) % 7, n, "day");
                    return l
                }
                ua.calendar = function(e, t, a) {
                    var n = this._calendar[e] || this._calendar.sameElse;
                    return x(n) ? n.call(t, a) : n
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
                }, ua.preparse = da, ua.postformat = da, ua.relativeTime = function(e, t, a, n) {
                    var r = this._relativeTime[a];
                    return x(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
                }, ua.pastFuture = function(e, t) {
                    var a = this._relativeTime[e > 0 ? "future" : "past"];
                    return x(a) ? a(t) : a.replace(/%s/i, t)
                }, ua.set = function(e) {
                    var t, a;
                    for (a in e) x(t = e[a]) ? this[a] = t : this["_" + a] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, ua.months = function(e, t) {
                    return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || je).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
                }, ua.monthsShort = function(e, t) {
                    return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[je.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, ua.monthsParse = function(e, t, a) {
                    var n, r, i;
                    if (this._monthsParseExact) return function(e, t, a) {
                        var n, r, i, s = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                        return a ? "MMM" === t ? -1 !== (r = xe.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = xe.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = xe.call(this._shortMonthsParse, s)) ? r : -1 !== (r = xe.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = xe.call(this._longMonthsParse, s)) ? r : -1 !== (r = xe.call(this._shortMonthsParse, s)) ? r : null
                    }.call(this, e, t, a);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (r = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                        if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                        if (!a && this._monthsParse[n].test(e)) return n
                    }
                }, ua.monthsRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || Re.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, ua.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || Re.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Ee), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
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
                        return a ? "dddd" === t ? -1 !== (r = xe.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = xe.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = xe.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = xe.call(this._weekdaysParse, s)) ? r : -1 !== (r = xe.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = xe.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = xe.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = xe.call(this._weekdaysParse, s)) ? r : -1 !== (r = xe.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = xe.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = xe.call(this._weekdaysParse, s)) ? r : -1 !== (r = xe.call(this._shortWeekdaysParse, s)) ? r : null
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
                }), n.lang = S("moment.lang is deprecated. Use moment.locale instead.", ut), n.langData = S("moment.langData is deprecated. Use moment.localeData instead.", mt);
                var _a = Math.abs;

                function pa(e, t, a, n) {
                    var r = Bt(t, a);
                    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
                }

                function fa(e) {
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
                var ba = Ma("ms"),
                    va = Ma("s"),
                    La = Ma("m"),
                    ka = Ma("h"),
                    Da = Ma("d"),
                    Ya = Ma("w"),
                    Sa = Ma("M"),
                    wa = Ma("y");

                function Ta(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }
                var xa = Ta("milliseconds"),
                    Ca = Ta("seconds"),
                    ja = Ta("minutes"),
                    Oa = Ta("hours"),
                    Pa = Ta("days"),
                    Ha = Ta("months"),
                    Aa = Ta("years");
                var Ea = Math.round,
                    Fa = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    };
                var Ra = Math.abs;

                function Wa() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, a = Ra(this._milliseconds) / 1e3,
                        n = Ra(this._days),
                        r = Ra(this._months);
                    t = L((e = L(a / 60)) / 60), a %= 60, e %= 60;
                    var i = L(r / 12),
                        s = r %= 12,
                        o = n,
                        l = t,
                        d = e,
                        u = a,
                        c = this.asSeconds();
                    return c ? (c < 0 ? "-" : "") + "P" + (i ? i + "Y" : "") + (s ? s + "M" : "") + (o ? o + "D" : "") + (l || d || u ? "T" : "") + (l ? l + "H" : "") + (d ? d + "M" : "") + (u ? u + "S" : "") : "P0D"
                }
                var Ia = Pt.prototype;
                return Ia.isValid = function() {
                    return this._isValid
                }, Ia.abs = function() {
                    var e = this._data;
                    return this._milliseconds = _a(this._milliseconds), this._days = _a(this._days), this._months = _a(this._months), e.milliseconds = _a(e.milliseconds), e.seconds = _a(e.seconds), e.minutes = _a(e.minutes), e.hours = _a(e.hours), e.months = _a(e.months), e.years = _a(e.years), this
                }, Ia.add = function(e, t) {
                    return pa(this, e, t, 1)
                }, Ia.subtract = function(e, t) {
                    return pa(this, e, t, -1)
                }, Ia.as = function(e) {
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
                }, Ia.asMilliseconds = ba, Ia.asSeconds = va, Ia.asMinutes = La, Ia.asHours = ka, Ia.asDays = Da, Ia.asWeeks = Ya, Ia.asMonths = Sa, Ia.asYears = wa, Ia.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
                }, Ia._bubble = function() {
                    var e, t, a, n, r, i = this._milliseconds,
                        s = this._days,
                        o = this._months,
                        l = this._data;
                    return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * fa(ya(o) + s), s = 0, o = 0), l.milliseconds = i % 1e3, e = L(i / 1e3), l.seconds = e % 60, t = L(e / 60), l.minutes = t % 60, a = L(t / 60), l.hours = a % 24, o += r = L(ga(s += L(a / 24))), s -= fa(ya(r)), n = L(o / 12), o %= 12, l.days = s, l.months = o, l.years = n, this
                }, Ia.get = function(e) {
                    return e = A(e), this.isValid() ? this[e + "s"]() : NaN
                }, Ia.milliseconds = xa, Ia.seconds = Ca, Ia.minutes = ja, Ia.hours = Oa, Ia.days = Pa, Ia.weeks = function() {
                    return L(this.days() / 7)
                }, Ia.months = Ha, Ia.years = Aa, Ia.humanize = function(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(),
                        a = function(e, t, a) {
                            var n = Bt(e).abs(),
                                r = Ea(n.as("s")),
                                i = Ea(n.as("m")),
                                s = Ea(n.as("h")),
                                o = Ea(n.as("d")),
                                l = Ea(n.as("M")),
                                d = Ea(n.as("y")),
                                u = r <= Fa.ss && ["s", r] || r < Fa.s && ["ss", r] || i <= 1 && ["m"] || i < Fa.m && ["mm", i] || s <= 1 && ["h"] || s < Fa.h && ["hh", s] || o <= 1 && ["d"] || o < Fa.d && ["dd", o] || l <= 1 && ["M"] || l < Fa.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d];
                            return u[2] = t, u[3] = +e > 0, u[4] = a,
                                function(e, t, a, n, r) {
                                    return r.relativeTime(t || 1, !!a, e, n)
                                }.apply(null, u)
                        }(this, !e, t);
                    return e && (a = t.pastFuture(+this, a)), t.postformat(a)
                }, Ia.toISOString = Wa, Ia.toString = Wa, Ia.toJSON = Wa, Ia.locale = Xt, Ia.localeData = $t, Ia.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Wa), Ia.lang = Zt, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), he("x", le), he("X", /[+-]?\d+(\.\d{1,3})?/), ge("X", function(e, t, a) {
                    a._d = new Date(1e3 * parseFloat(e, 10))
                }), ge("x", function(e, t, a) {
                    a._d = new Date(k(e))
                }), n.version = "2.18.1", t = Tt, n.fn = la, n.min = function() {
                    return jt("isBefore", [].slice.call(arguments, 0))
                }, n.max = function() {
                    return jt("isAfter", [].slice.call(arguments, 0))
                }, n.now = function() {
                    return Date.now ? Date.now() : +new Date
                }, n.utc = m, n.unix = function(e) {
                    return Tt(1e3 * e)
                }, n.months = function(e, t) {
                    return ma(e, t, "months")
                }, n.isDate = l, n.locale = ut, n.invalid = f, n.duration = Bt, n.isMoment = v, n.weekdays = function(e, t, a) {
                    return ha(e, t, a, "weekdays")
                }, n.parseZone = function() {
                    return Tt.apply(null, arguments).parseZone()
                }, n.localeData = mt, n.isDuration = Ht, n.monthsShort = function(e, t) {
                    return ma(e, t, "monthsShort")
                }, n.weekdaysMin = function(e, t, a) {
                    return ha(e, t, a, "weekdaysMin")
                }, n.defineLocale = ct, n.updateLocale = function(e, t) {
                    if (null != t) {
                        var a, n = it;
                        null != st[e] && (n = st[e]._config), (a = new j(t = C(n, t))).parentLocale = st[e], st[e] = a, ut(e)
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
                }, n.prototype = la, n
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
                    l = t.radius,
                    d = t.x,
                    u = t.y,
                    c = i.color,
                    m = 0;
                t.skip || (r.strokeStyle = t.borderColor || s, r.lineWidth = i.valueOrDefault(t.borderWidth, n.global.elements.point.borderWidth), r.fillStyle = t.backgroundColor || s, void 0 !== e && (a.x < e.left || 1.01 * e.right < a.x || a.y < e.top || 1.01 * e.bottom < a.y) && (a.x < e.left ? m = (d - a.x) / (e.left - a.x) : 1.01 * e.right < a.x ? m = (a.x - d) / (a.x - e.right) : a.y < e.top ? m = (u - a.y) / (e.top - a.y) : 1.01 * e.bottom < a.y && (m = (a.y - u) / (a.y - e.bottom)), m = Math.round(100 * m) / 100, r.strokeStyle = c(r.strokeStyle).alpha(m).rgbString(), r.fillStyle = c(r.fillStyle).alpha(m).rgbString()), i.canvas.drawPoint(r, o, l, d, u))
            }
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
    RpnM: function(e, t) {},
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
    T0UN: function(e, t) {},
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
    UWcj: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            r = a("GiK3"),
            i = a("RH2O"),
            s = a("2KeS"),
            o = a("+8VM"),
            l = a("V5M+"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t,
                            a = function(t) {
                                function a() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return n.__extends(a, t), a.prototype.render = function() {
                                    return e.props.triggerModal(e.closeModal)
                                }, a
                            }(r.Component);
                        t.props.showModal(a, {})
                    }, t.closeModal = function() {
                        t.props.closeModal()
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, this.props.children(this.openModal), r.createElement(o.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(r.Component);
        var u = Object(i.b)(null, function(e) {
            return Object(s.b)({
                showModal: l.d,
                closeModal: l.c
            }, e)
        })(d);
        a.d(t, "a", function() {
            return u
        })
    },
    Ukf0: function(e, t) {},
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

        function l(e, t, a) {
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
                    var n, r, s, o, l, d, u = this;
                    for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = i.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, a), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), l = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), s = u.convertTicksToLabels(l) || u.ticks, u.afterTickToLabelConversion(), u.ticks = s, n = 0, r = s.length; n < r; ++n) o = s[n], (d = l[n]) ? d.label = o : l.push(d = {
                        label: o,
                        major: !1
                    });
                    return u._ticks = l, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
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
                    var l = n.minRotation || 0;
                    if (r.length && e.options.display && e.isHorizontal())
                        for (var d, u = i.longestText(t, s.font, r, e.longestTextCache), c = u, m = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > m && l < n.maxRotation;) {
                            var h = i.toRadians(l);
                            if (d = Math.cos(h), Math.sin(h) * u > e.maxHeight) {
                                l--;
                                break
                            }
                            l++, c = d * u
                        }
                    e.labelRotation = l
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
                        l = e.options,
                        d = l.ticks,
                        u = l.scaleLabel,
                        c = l.gridLines,
                        m = l.display,
                        h = e.isHorizontal(),
                        _ = a(d),
                        p = l.gridLines.tickMarkLength;
                    if (n.width = h ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && c.drawTicks ? p : 0, n.height = h ? m && c.drawTicks ? p : 0 : e.maxHeight, u.display && m) {
                        var f = s(u) + i.options.toPadding(u.padding).height;
                        h ? n.height += f : n.width += f
                    }
                    if (d.display && m) {
                        var g = i.longestText(e.ctx, _.font, r, e.longestTextCache),
                            y = i.numberOfLabelLines(r),
                            M = .5 * _.size,
                            b = e.options.ticks.padding;
                        if (h) {
                            e.longestLabelWidth = g;
                            var v = i.toRadians(e.labelRotation),
                                L = Math.cos(v),
                                k = Math.sin(v) * g + _.size * y + M * (y - 1) + M;
                            n.height = Math.min(e.maxHeight, n.height + k + b), e.ctx.font = _.font;
                            var D = t(e.ctx, r[0], _.font),
                                Y = t(e.ctx, r[r.length - 1], _.font);
                            0 !== e.labelRotation ? (e.paddingLeft = "bottom" === l.position ? L * D + 3 : L * M + 3, e.paddingRight = "bottom" === l.position ? L * M + 3 : L * Y + 3) : (e.paddingLeft = D / 2 + 3, e.paddingRight = Y / 2 + 3)
                        } else d.mirror ? g = 0 : g += b + M, n.width = Math.min(e.maxWidth, n.width + g), e.paddingTop = _.size / 2, e.paddingBottom = _.size / 2
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
                        l = s.options.ticks.minor,
                        d = e.length,
                        u = i.toRadians(s.labelRotation),
                        c = Math.cos(u),
                        m = s.longestLabelWidth * c,
                        h = [];
                    for (l.maxTicksLimit && (r = l.maxTicksLimit), o && (t = !1, (m + l.autoSkipPadding) * d > s.width - (s.paddingLeft + s.paddingRight) && (t = 1 + Math.floor((m + l.autoSkipPadding) * d / (s.width - (s.paddingLeft + s.paddingRight)))), r && d > r && (t = Math.max(t, Math.floor(d / r)))), a = 0; a < d; a++) n = e[a], (t > 1 && a % t > 0 || a % t == 0 && a + t >= d) && a !== d - 1 && delete n.label, h.push(n);
                    return h
                },
                draw: function(e) {
                    var t = this,
                        r = t.options;
                    if (r.display) {
                        var o = t.ctx,
                            d = n.global,
                            u = r.ticks.minor,
                            c = r.ticks.major || u,
                            m = r.gridLines,
                            h = r.scaleLabel,
                            _ = 0 !== t.labelRotation,
                            p = t.isHorizontal(),
                            f = u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            g = i.valueOrDefault(u.fontColor, d.defaultFontColor),
                            y = a(u),
                            M = i.valueOrDefault(c.fontColor, d.defaultFontColor),
                            b = a(c),
                            v = m.drawTicks ? m.tickMarkLength : 0,
                            L = i.valueOrDefault(h.fontColor, d.defaultFontColor),
                            k = a(h),
                            D = i.options.toPadding(h.padding),
                            Y = i.toRadians(t.labelRotation),
                            S = [],
                            w = "right" === r.position ? t.left : t.right - v,
                            T = "right" === r.position ? t.left + v : t.right,
                            x = "bottom" === r.position ? t.top : t.bottom - v,
                            C = "bottom" === r.position ? t.top + v : t.bottom;
                        if (i.each(f, function(a, n) {
                                if (!i.isNullOrUndef(a.label)) {
                                    var s, o, c, h, g, y, M, b, L, k, D, j, O, P, H = a.label;
                                    n === t.zeroLineIndex && r.offset === m.offsetGridLines ? (s = m.zeroLineWidth, o = m.zeroLineColor, c = m.zeroLineBorderDash, h = m.zeroLineBorderDashOffset) : (s = i.valueAtIndexOrDefault(m.lineWidth, n), o = i.valueAtIndexOrDefault(m.color, n), c = i.valueOrDefault(m.borderDash, d.borderDash), h = i.valueOrDefault(m.borderDashOffset, d.borderDashOffset));
                                    var A = "middle",
                                        E = "middle",
                                        F = u.padding;
                                    if (p) {
                                        var R = v + F;
                                        "bottom" === r.position ? (E = _ ? "middle" : "top", A = _ ? "right" : "center", P = t.top + R) : (E = _ ? "middle" : "bottom", A = _ ? "left" : "center", P = t.bottom - R);
                                        var W = l(t, n, m.offsetGridLines && f.length > 1);
                                        W < t.left && (o = "rgba(0,0,0,0)"), W += i.aliasPixel(s), O = t.getPixelForTick(n) + u.labelOffset, g = M = L = D = W, y = x, b = C, k = e.top, j = e.bottom
                                    } else {
                                        var I, z = "left" === r.position;
                                        u.mirror ? (A = z ? "left" : "right", I = F) : (A = z ? "right" : "left", I = v + F), O = z ? t.right - I : t.left + I;
                                        var N = l(t, n, m.offsetGridLines && f.length > 1);
                                        N < t.top && (o = "rgba(0,0,0,0)"), N += i.aliasPixel(s), P = t.getPixelForTick(n) + u.labelOffset, g = w, M = T, L = e.left, D = e.right, y = b = k = j = N
                                    }
                                    S.push({
                                        tx1: g,
                                        ty1: y,
                                        tx2: M,
                                        ty2: b,
                                        x1: L,
                                        y1: k,
                                        x2: D,
                                        y2: j,
                                        labelX: O,
                                        labelY: P,
                                        glWidth: s,
                                        glColor: o,
                                        glBorderDash: c,
                                        glBorderDashOffset: h,
                                        rotation: -1 * Y,
                                        label: H,
                                        major: a.major,
                                        textBaseline: E,
                                        textAlign: A
                                    })
                                }
                            }), i.each(S, function(e) {
                                if (m.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), u.display) {
                                    o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? b.font : y.font, o.fillStyle = e.major ? M : g, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (i.isArray(t))
                                        for (var a = 0, n = 0; a < t.length; ++a) o.fillText("" + t[a], 0, n), n += 1.5 * y.size;
                                    else o.fillText(t, 0, 0);
                                    o.restore()
                                }
                            }), h.display) {
                            var j, O, P = 0,
                                H = s(h) / 2;
                            if (p) j = t.left + (t.right - t.left) / 2, O = "bottom" === r.position ? t.bottom - H - D.bottom : t.top + H + D.top;
                            else {
                                var A = "left" === r.position;
                                j = A ? t.left + H + D.top : t.right - H - D.top, O = t.top + (t.bottom - t.top) / 2, P = A ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(j, O), o.rotate(P), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = L, o.font = k.font, o.fillText(h.labelString, 0, 0), o.restore()
                        }
                        if (m.drawBorder) {
                            o.lineWidth = i.valueAtIndexOrDefault(m.lineWidth, 0), o.strokeStyle = i.valueAtIndexOrDefault(m.color, 0);
                            var E = t.left,
                                F = t.right,
                                R = t.top,
                                W = t.bottom,
                                I = i.aliasPixel(o.lineWidth);
                            p ? (R = W = "top" === r.position ? t.bottom : t.top, R += I, W += I) : (E = F = "left" === r.position ? t.right : t.left, E += I, F += I), o.beginPath(), o.moveTo(E, R), o.lineTo(F, W), o.stroke()
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
    WHrl: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        }), a.d(t, "b", function() {
            return l
        });
        var n = a("TToO"),
            r = a("tiQ5"),
            i = a("yvDY"),
            s = a("KiQY"),
            o = {
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            l = function() {
                function e(e) {
                    var t = this,
                        a = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : r.c;
                    this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = a.map(function(e) {
                        return n.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var i = this.twitchSubscriptionProducts.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []).sort(function(e, t) {
                        return e.date.getTime() - t.date.getTime()
                    });
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(i)
                }
                return e.fromPayload = function(t) {
                    return new e(this.normalizePayload(t))
                }, e.partitionFromPayload = function(t, a) {
                    var n = this.normalizePayload(t),
                        r = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        s = {
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        o = Object(i.a)(n.primeSubscriptions, a),
                        l = o[0],
                        d = o[1];
                    return r.primeSubscriptions = l, s.primeSubscriptions = d, n.twitchSubscriptionProducts.forEach(function(e) {
                        var t = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            n = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            o = Object(i.a)(e.timeseries, a),
                            l = o[0],
                            d = o[1];
                        t.timeseries = l, n.timeseries = d, r.twitchSubscriptionProducts.push(t), s.twitchSubscriptionProducts.push(n)
                    }), [new e(r), new e(s)]
                }, e.buildEmpty = function() {
                    return new e({
                        primeSubscriptions: [],
                        twitchSubscriptionProducts: []
                    })
                }, e.normalizePayload = function(e) {
                    var t = this;
                    return {
                        primeSubscriptions: this.normalizeTimeseries(e.prime_subscriptions),
                        twitchSubscriptionProducts: e.twitch_subscriptions.map(function(e) {
                            var a = {
                                defaultPrice: e.default_price,
                                productID: e.product_id
                            };
                            return n.__assign({}, a, {
                                timeseries: t.normalizeTimeseries(e.sub_counts, a)
                            })
                        })
                    }
                }, e.normalizeTimeseries = function(e, t) {
                    return e.map(function(e) {
                        return {
                            count: e.count,
                            date: Object(s.a)(e.timestamp),
                            product: t
                        }
                    })
                }, e.prototype.getTotalSubCount = function() {
                    return this.primeSubscriptions.total + this.twitchSubscriptions.total
                }, e.prototype.getTimeseriesWithTotal = function(e) {
                    return {
                        timeseries: e,
                        total: Math.floor(e.reduce(function(e, t) {
                            return e + t.count
                        }, 0))
                    }
                }, e
            }()
    },
    WaEV: function(e, t, a) {
        var n = a("+ItH")();
        n.helpers = a("iO9N"), a("lG75")(n), n.defaults = a("k7DW"), n.Element = a("wGD1"), n.elements = a("L5rj"), n.Interaction = a("KC8c"), n.platform = a("2xI1"), a("4Uxm")(n), a("6rMk")(n), a("ghsk")(n), a("oQMP")(n), a("hAmm")(n), a("jJ84")(n), a("VRu6")(n), a("/jKm")(n), a("QV34")(n), a("40fB")(n), a("XhZS")(n), a("1Nt4")(n), a("sFo6")(n), a("Db81")(n), a("GBuA")(n), a("19SQ")(n), a("sFj2")(n), a("8uqi")(n), a("Fv8P")(n), a("2ddL")(n), a("mC8W")(n), a("vvdA")(n), a("wPWQ")(n), a("mg6x")(n), a("0gJx")(n), a("gCP2")(n), a("0C1O")(n), a("GqGk")(n);
        var r = [];
        r.push(a("A5K1")(n), a("ZmvM")(n), a("lRs/")(n)), n.plugins.register(r), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
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
                            var l = {};
                            r.each(n, function(n, i) {
                                var o = a.getDatasetMeta(i),
                                    d = [o.type, void 0 === t.stacked && void 0 === o.stack ? i : "", o.stack].join(".");
                                void 0 === l[d] && (l[d] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var u = l[d].positiveValues,
                                    c = l[d].negativeValues;
                                a.isDatasetVisible(i) && s(o) && r.each(n.data, function(a, n) {
                                    var r = +e.getRightValue(a);
                                    isNaN(r) || o.data[n].hidden || (u[n] = u[n] || 0, c[n] = c[n] || 0, t.relativePoints ? u[n] = 100 : r < 0 ? c[n] += r : u[n] += r)
                                })
                            }), r.each(l, function(t) {
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
                        l = n.global,
                        d = i.valueOrDefault,
                        u = d(a.fontSize, l.defaultFontSize),
                        c = d(a.fontStyle, l.defaultFontStyle),
                        m = d(a.fontFamily, l.defaultFontFamily),
                        h = i.fontString(u, c, m),
                        _ = e.legendHitBoxes = [],
                        p = e.minSize,
                        f = e.isHorizontal();
                    if (f ? (p.width = e.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = e.maxHeight), r)
                        if (o.font = h, f) {
                            var g = e.lineWidths = [0],
                                y = e.legendItems.length ? u + a.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", i.each(e.legendItems, function(t, n) {
                                var r = s(a, u) + u / 2 + o.measureText(t.text).width;
                                g[g.length - 1] + r + a.padding >= e.width && (y += u + a.padding, g[g.length] = e.left), _[n] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: u
                                }, g[g.length - 1] += r + a.padding
                            }), p.height += y
                        } else {
                            var M = a.padding,
                                b = e.columnWidths = [],
                                v = a.padding,
                                L = 0,
                                k = 0,
                                D = u + M;
                            i.each(e.legendItems, function(e, t) {
                                var n = s(a, u) + u / 2 + o.measureText(e.text).width;
                                k + D > p.height && (v += L + a.padding, b.push(L), L = 0, k = 0), L = Math.max(L, n), k += D, _[t] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: u
                                }
                            }), v += L, b.push(L), p.width += v
                        }
                    e.width = p.width, e.height = p.height
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
                        l = e.width,
                        d = e.lineWidths;
                    if (t.display) {
                        var u, c = e.ctx,
                            m = i.valueOrDefault,
                            h = m(a.fontColor, r.defaultFontColor),
                            _ = m(a.fontSize, r.defaultFontSize),
                            p = m(a.fontStyle, r.defaultFontStyle),
                            f = m(a.fontFamily, r.defaultFontFamily),
                            g = i.fontString(_, p, f);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = h, c.fillStyle = h, c.font = g;
                        var y = s(a, _),
                            M = e.legendHitBoxes,
                            b = e.isHorizontal();
                        u = b ? {
                            x: e.left + (l - d[0]) / 2,
                            y: e.top + a.padding,
                            line: 0
                        } : {
                            x: e.left + a.padding,
                            y: e.top + a.padding,
                            line: 0
                        };
                        var v = _ + a.padding;
                        i.each(e.legendItems, function(n, s) {
                            var h = c.measureText(n.text).width,
                                p = y + _ / 2 + h,
                                f = u.x,
                                g = u.y;
                            b ? f + p >= l && (g = u.y += v, u.line++, f = u.x = e.left + (l - d[u.line]) / 2) : g + v > e.bottom && (f = u.x = f + e.columnWidths[u.line] + a.padding, g = u.y = e.top + a.padding, u.line++),
                                function(e, a, n) {
                                    if (!(isNaN(y) || y <= 0)) {
                                        c.save(), c.fillStyle = m(n.fillStyle, r.defaultColor), c.lineCap = m(n.lineCap, o.borderCapStyle), c.lineDashOffset = m(n.lineDashOffset, o.borderDashOffset), c.lineJoin = m(n.lineJoin, o.borderJoinStyle), c.lineWidth = m(n.lineWidth, o.borderWidth), c.strokeStyle = m(n.strokeStyle, r.defaultColor);
                                        var s = 0 === m(n.lineWidth, o.borderWidth);
                                        if (c.setLineDash && c.setLineDash(m(n.lineDash, o.borderDash)), t.labels && t.labels.usePointStyle) {
                                            var l = _ * Math.SQRT2 / 2,
                                                d = l / Math.SQRT2,
                                                u = e + d,
                                                h = a + d;
                                            i.canvas.drawPoint(c, n.pointStyle, l, u, h)
                                        } else s || c.strokeRect(e, a, y, _), c.fillRect(e, a, y, _);
                                        c.restore()
                                    }
                                }(f, g, n), M[s].left = f, M[s].top = g,
                                function(e, t, a, n) {
                                    var r = _ / 2,
                                        i = y + r + e,
                                        s = t + r;
                                    c.fillText(a.text, i, s), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, s), c.lineTo(i + n, s), c.stroke())
                                }(f, g, n, h), b ? u.x += p + a.padding : u.y += v
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
                        for (var o = t.legendHitBoxes, l = 0; l < o.length; ++l) {
                            var d = o[l];
                            if (i >= d.left && i <= d.left + d.width && s >= d.top && s <= d.top + d.height) {
                                if ("click" === n) {
                                    a.onClick.call(t, e.native, t.legendItems[l]), r = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    a.onHover.call(t, e.native, t.legendItems[l]), r = !0;
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
    dNsn: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return s
        });
        var n = a("6sO2"),
            r = {
                499: function() {
                    return Object(n.d)("Tier 1 subs", "ChannelAnalyticsTier")
                },
                999: function() {
                    return Object(n.d)("Tier 2 subs", "ChannelAnalyticsTier")
                },
                2499: function() {
                    return Object(n.d)("Tier 3 subs", "ChannelAnalyticsTier")
                }
            },
            i = {
                499: function(e) {
                    return Object(n.d)("{numOfSubs, plural, one {# Tier 1 sub} other {# Tier 1 subs}}", {
                        numOfSubs: e
                    }, "ChannelAnalyticsTiers")
                },
                999: function(e) {
                    return Object(n.d)("{numOfSubs, plural, one {# Tier 2 sub} other {# Tier 2 subs}}", {
                        numOfSubs: e
                    }, "ChannelAnalyticsTiers")
                },
                2499: function(e) {
                    return Object(n.d)("{numOfSubs, plural, one {# Tier 3 sub} other {# Tier 3 subs}}", {
                        numOfSubs: e
                    }, "ChannelAnalyticsTiers")
                }
            },
            s = function(e, t) {
                return void 0 !== t ? i[e](t) : r[e]()
            }
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
            l = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0",
                alt: "TearGlove"
            },
            d = function() {
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
                }, r.createElement(s.m, n.__assign({}, l, {
                    size: 50
                }))), r.createElement(s.Q, {
                    color: s.K.Alt2,
                    fontSize: s.V.Size5
                }, Object(i.d)("Not enough data for us to display", "ChannelAnalyticsNoData")))
            };
        a.d(t, !1, function() {
            return o
        }), a.d(t, "a", function() {
            return d
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
    eZz2: function(e, t) {},
    ehuU: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, r = a("TToO"),
            i = a("GiK3"),
            s = a("CIox"),
            o = a("2KeS"),
            l = a("6sO2"),
            d = a("7vx8"),
            u = a("F8kA"),
            c = a("j7/Y"),
            m = a("w9tK"),
            h = a("vH/s"),
            _ = a("CSlQ"),
            p = a("wuJz"),
            f = a("3zLD"),
            g = a("6UW8"),
            y = (a("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t.picker.destroy() : (t.picker = new g({
                            onSelect: t.props.onChange,
                            theme: "inline",
                            minDate: t.props.minDate && Object(p.startOfDay)(t.props.minDate),
                            maxDate: Object(p.startOfDay)(t.props.maxDate),
                            defaultDate: Object(p.startOfDay)(t.props.date),
                            startRange: Object(p.startOfDay)(t.props.startRange),
                            endRange: Object(p.startOfDay)(t.props.endRange),
                            setDefaultDate: !0
                        }), e.appendChild(t.picker.el))
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.picker.setStartRange(Object(p.startOfDay)(this.props.startRange)), this.picker.setEndRange(Object(p.startOfDay)(this.props.endRange)), this.props.minDate && this.picker.setMinDate(Object(p.startOfDay)(this.props.minDate)), this.picker.setMaxDate(Object(p.startOfDay)(this.props.maxDate)), this.picker.setDate(Object(p.startOfDay)(this.props.date), !0)
                }, t.prototype.render = function() {
                    return i.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(i.Component)),
            M = a("AJEV"),
            b = a("Odds");
        ! function(e) {
            e.Custom = "custom", e.Default = "default", e.Last7Days = "last_7_days", e.Last30Days = "last_30_days", e.CurrentMonth = "current_month", e.oneMonthAgo = "t_minus_1_month", e.twoMonthsAgo = "t_minus_2_month"
        }(n || (n = {}));
        var v = function(e) {
            function t(t) {
                var a = e.call(this, t) || this,
                    r = t.now || new Date,
                    i = Object(p.endOfDay)(r),
                    s = Object(p.startOfDay)(r),
                    o = Object(p.startOfMonth)(r);
                return a.presets = [{
                    message: Object(l.d)("Last 7 Days", "ChannelAnalyticsDateRangePickerPresets"),
                    interval: {
                        start: Object(p.subDays)(s, 6),
                        end: i,
                        id: n.Last7Days
                    }
                }, {
                    message: Object(l.d)("Last 30 Days", "ChannelAnalyticsDateRangePickerPresets"),
                    interval: {
                        start: Object(p.subDays)(s, 29),
                        end: i,
                        id: n.Last30Days
                    }
                }, {
                    message: Object(l.c)(o, {
                        month: "long",
                        year: "numeric"
                    }),
                    interval: {
                        start: o,
                        end: i,
                        id: n.CurrentMonth
                    }
                }, {
                    message: Object(l.c)(Object(p.subMonths)(i, 1), {
                        month: "long",
                        year: "numeric"
                    }),
                    interval: {
                        start: Object(p.startOfMonth)(Object(p.subMonths)(r, 1)),
                        end: Object(p.endOfMonth)(Object(p.subMonths)(r, 1)),
                        id: n.oneMonthAgo
                    }
                }, {
                    message: Object(l.c)(Object(p.subMonths)(i, 2), {
                        month: "long",
                        year: "numeric"
                    }),
                    interval: {
                        start: Object(p.startOfMonth)(Object(p.subMonths)(r, 2)),
                        end: Object(p.endOfMonth)(Object(p.subMonths)(r, 2)),
                        id: n.twoMonthsAgo
                    }
                }], a
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this;
                return i.createElement(b._8, {
                    display: b.R.Flex,
                    flexDirection: b.T.Column
                }, this.presets.map(function(t, a) {
                    return i.createElement(b._35, {
                        color: b.K.Link,
                        key: a
                    }, i.createElement(b._6, {
                        selected: Object(M.f)(e.props.interval, t.interval),
                        onClick: e.handleClickFor(t.interval)
                    }, i.createElement(b._35, {
                        padding: 1,
                        textAlign: b._45.Center
                    }, i.createElement(b.Q, {
                        noWrap: !0,
                        fontSize: b.V.Size5
                    }, t.message))))
                }))
            }, t.prototype.handleClickFor = function(e) {
                var t = this;
                return function() {
                    return t.props.onChange(e)
                }
            }, t
        }(i.Component);

        function L(e, t, a) {
            void 0 === a && (a = new Date);
            var n = r.__assign({}, e, t);
            if (Object(p.differenceInDays)(n.end, n.start) >= 0) return n;
            var i = Object(p.differenceInDays)(e.end, e.start);
            if (Object(p.isEqual)(e.end, n.end)) {
                var s = Object(p.startOfDay)(a),
                    o = Object(p.addDays)(n.start, i);
                return o > s && (o = s), r.__assign({}, n, {
                    end: o
                })
            }
            return Object(p.isEqual)(e.start, n.start) ? r.__assign({}, n, {
                start: Object(p.subDays)(n.end, i)
            }) : e
        }
        var k = a("PGY2");

        function D(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, a, n, i, s;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = "/api/channels/" + e + "/revenue_splits", a = "/api/channels/" + e + "/subscriber_count", [4, Promise.all([Object(k.c)({
                                path: t
                            }, {
                                excludeHeaders: ["Twitch-Api-Token"]
                            }), Object(k.c)({
                                path: a
                            }, {
                                excludeHeaders: ["Twitch-Api-Token"]
                            })])];
                        case 1:
                            return n = r.sent(), i = n[0], s = n[1], i.isError() || s.isError() ? [2, {
                                isError: !0,
                                subscriptions: []
                            }] : [2, {
                                isError: !1,
                                subscriptions: function(e, t) {
                                    var a = e.active_products.reduce(function(e, t) {
                                        var a = {
                                            id: t.id,
                                            customName: t.custom_name,
                                            plan: t.plan,
                                            price: t.price,
                                            revenueSplit: t.revenue_split,
                                            count: 0,
                                            score: 0
                                        };
                                        return e.set(a.plan, a), e
                                    }, new Map);
                                    a = t.count_breakdown.reduce(function(e, t) {
                                        var a = e.get(t.plan);
                                        return a && (a.count = t.count, e.set(a.plan, a)), e
                                    }, a), a = t.score_breakdown.reduce(function(e, t) {
                                        var a = e.get(t.plan);
                                        return a && (a.score = t.score, e.set(a.plan, a)), e
                                    }, a);
                                    var n = Array.from(a.values());
                                    return Object(k.d)(n, [function(e) {
                                        return e.plan
                                    }], [k.a.Ascending])
                                }(i.body, s.body)
                            }]
                    }
                })
            })
        }
        var Y = a("tiQ5");

        function S(e) {
            return e === M.d.None ? Y.e : Y.a
        }

        function w(e) {
            return e === M.d.None ? Y.f : Object.keys(Y.g)
        }
        var T, x = {
                "data-test-selector": "commit-button"
            },
            C = {
                "data-test-selector": "cancel-button"
            },
            j = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleStartChange = function(e) {
                        var t = L(a.state.interval, {
                            start: e
                        });
                        a.setState({
                            interval: t
                        })
                    }, a.handleEndChange = function(e) {
                        var t = L(a.state.interval, {
                            end: Object(p.endOfDay)(e)
                        });
                        a.setState({
                            interval: t
                        })
                    }, a.handleUpdateClick = function() {
                        a.props.onCommit(r.__assign({}, a.state.interval, {
                            id: n.Custom
                        }))
                    }, a.state = {
                        interval: a.props.interval
                    }, a
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return i.createElement("div", null, i.createElement(b._8, {
                        display: b.R.Flex,
                        flexWrap: b.U.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(b._8, {
                        padding: {
                            right: 2
                        },
                        textAlign: b._45.Center
                    }, i.createElement(b.Q, {
                        color: b.K.Alt2,
                        fontSize: b.V.Size4
                    }, Object(l.d)("Start date", "ChannelAnalyticsDateRangePicker")), i.createElement(y, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), i.createElement(b._8, {
                        padding: {
                            right: 2
                        },
                        textAlign: b._45.Center
                    }, i.createElement(b.Q, {
                        color: b.K.Alt2,
                        fontSize: b.V.Size4
                    }, Object(l.d)("End date", "ChannelAnalyticsDateRangePicker")), i.createElement(y, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), i.createElement(b._35, {
                        padding: {
                            top: 1,
                            left: 2
                        },
                        borderLeft: !0
                    }, i.createElement(v, {
                        interval: this.state.interval,
                        onChange: this.props.onCommit
                    }))), i.createElement(b._8, {
                        display: b.R.Flex,
                        justifyContent: b._7.Center
                    }, i.createElement(b._8, {
                        margin: {
                            right: 2
                        }
                    }, i.createElement(b.v, r.__assign({}, x, {
                        onClick: this.handleUpdateClick
                    }), Object(l.d)("Update", "ChannelAnalyticsDateRangePicker"))), i.createElement(b.v, r.__assign({}, C, {
                        type: b.B.Text,
                        onClick: this.props.onDismiss
                    }), Object(l.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(i.Component);

        function O(e, t) {
            return void 0 === t && (t = new Date), e.start <= e.end && e.end <= Object(p.endOfDay)(t)
        }

        function P(e) {
            l.n.track(h.SpadeEventType.ChannelAnalyticsInteraction, e)
        }! function(e) {
            e.OpenDatePicker = "open_date_picker", e.VisitPreviousDateRange = "visit_previous_date_range", e.VisitNextDateRange = "visit_next_date_range", e.ExportDataRevenue = "export_data_revenue", e.ExportDataStream = "export_data_stream", e.ViewDetailsReferrers = "view_details_referrers", e.ViewDetailsClips = "view_details_clips", e.TopStreamsSelectAvgViewers = "topstreams_select_avg_viewers", e.TopStreamsSelectNewFollowers = "topstreams_select_new_followers", e.TopStreamsSelectNewSubscribers = "topstreams_select_new_subscribers", e.TopStreamsStream = "topstreams_stream", e.TopClipsClip = "topclips_clip", e.EmailMeMySubs = "email_me_my_subs", e.EmailToSubs = "email_to_subs"
        }(T || (T = {}));
        var H = a("ylrR"),
            A = a("9uzc"),
            E = a("u4Vk"),
            F = {
                "data-test-selector": "time-range"
            },
            R = {
                "data-test-selector": "total-days"
            },
            W = {
                "data-test-selector": "date-picker-toggle"
            },
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatePickerOpen = function() {
                        P({
                            action: T.OpenDatePicker
                        })
                    }, t.handlePrevious = function() {
                        P({
                            action: T.VisitPreviousDateRange
                        })
                    }, t.handleNext = function() {
                        P({
                            action: T.VisitNextDateRange
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore.params;
                    return i.createElement(b._8, {
                        position: b._15.Relative
                    }, i.createElement(H.a, {
                        onOpen: this.handleDatePickerOpen,
                        control: function(a) {
                            var n = a.toggle;
                            return i.createElement(b._8, {
                                padding: {
                                    bottom: 2
                                }
                            }, i.createElement(A.a, {
                                previousPath: e.pathWithShiftedInterval(-1),
                                nextPath: e.pathWithShiftedInterval(1),
                                onPrevious: e.handlePrevious,
                                onNext: e.handleNext
                            }, i.createElement(b.v, r.__assign({}, W, {
                                type: b.B.Text,
                                onClick: n,
                                fullWidth: !0
                            }), i.createElement(b.Q, r.__assign({}, F, {
                                fontSize: b.V.Size4
                            }), e.formatDateRange(t)), i.createElement(b.Q, r.__assign({}, R, {
                                fontSize: b.V.Size6,
                                color: b.K.Alt2
                            }), e.formatDaysInRange(t)))))
                        }
                    }, function(a) {
                        var n = a.close;
                        return i.createElement(b._35, {
                            margin: {
                                top: 5
                            },
                            position: b._15.Absolute,
                            display: b.R.Flex,
                            alignItems: b.c.Center,
                            flexDirection: b.T.Column,
                            zIndex: b._62.Above,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(b._35, {
                            margin: {
                                top: .5
                            },
                            elevation: 4,
                            position: b._15.Relative,
                            display: b.R.Flex,
                            background: b.n.Base,
                            zIndex: b._62.Above,
                            attachTop: !0
                        }, i.createElement(b._8, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, i.createElement(j, {
                            interval: t,
                            onCommit: Object(f.compose)(n, e.props.onDateSelect),
                            onDismiss: n
                        }))))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(p.differenceInDays)(e.end, e.start) + 1 ? Object(l.c)(e.start, "medium") : Object(l.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(p.differenceInDays)(e.end, e.start) + 1;
                    return Object(l.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.pathWithShiftedInterval = function(e) {
                    var t = Object(E.h)(this.props.urlStore.params, e);
                    return O(t) ? this.props.urlStore.buildPathWithParams(t) : ""
                }, t
            }(i.Component),
            z = a("dPMn"),
            N = a("zjE0"),
            V = a("jqvb"),
            B = (a("MXAS"), function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleHover = function() {
                        a.setState(function(e) {
                            return {
                                isHovered: !e.isHovered
                            }
                        })
                    }, a.state = {
                        isHovered: !1
                    }, a
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement("div", {
                        className: "breakdown-card-row",
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, i.createElement(b._35, {
                        padding: {
                            x: 2,
                            y: 1
                        },
                        className: this.props.children ? "breakdown-card" : "",
                        position: b._15.Relative
                    }, i.createElement(b._8, {
                        display: b.R.Flex,
                        justifyContent: b._7.Between
                    }, i.createElement(b._8, {
                        display: b.R.Flex,
                        alignItems: b.c.Center
                    }, i.createElement("div", {
                        className: "revenue-breakdown-panel__key " + this.props.className
                    }), i.createElement(b._8, {
                        margin: {
                            left: 1
                        }
                    }, i.createElement(b.Q, {
                        type: b._49.H5
                    }, this.props.title))), i.createElement(b._8, {
                        textAlign: b._45.Right
                    }, i.createElement(b.Q, {
                        type: b._49.H5,
                        bold: !0
                    }, this.props.revenue), i.createElement(b.Q, {
                        type: b._49.H6,
                        color: b.K.Alt2
                    }, Object(l.d)("{lastRevenue} last period", {
                        lastRevenue: this.props.lastRevenue
                    }, "ChannelAnalyticsRevenueBreakdownPanel")))), this.props.children && this.state.isHovered ? i.createElement(b.q, {
                        show: !0,
                        direction: b.r.TopRight,
                        offsetY: "-0.5rem",
                        offsetX: "2rem"
                    }, this.props.children) : null))
                }, t
            }(i.Component)),
            J = a("dNsn"),
            U = function(e) {
                return i.createElement(b._8, {
                    padding: {
                        x: 1,
                        y: 2
                    }
                }, i.createElement("table", null, i.createElement("thead", null, i.createElement("tr", null, i.createElement("td", null, i.createElement(b._8, {
                    padding: {
                        right: 2
                    }
                }, i.createElement(b.Q, {
                    bold: !0
                }, Object(l.d)("Subscription", "ChannelAnalyticsPaidSubs")))), i.createElement("td", null, i.createElement(b._8, {
                    padding: {
                        right: 2
                    }
                }, i.createElement(b.Q, {
                    bold: !0
                }, Object(l.d)("Subscribers", "ChannelAnalyticsPaidSubs")))), i.createElement("td", null, i.createElement(b._8, {
                    padding: {
                        right: 2
                    }
                }, i.createElement(b.Q, {
                    bold: !0
                }, Object(l.d)("Revenue", "ChannelAnalyticsPaidSubs")))))), i.createElement("tbody", null, e.subCounts.streams.twitchSubscriptionProducts.map(function(t, a) {
                    return i.createElement(q, {
                        key: a,
                        tier: Object(J.a)(t.defaultPrice),
                        subscribers: Object(l.e)(t.total),
                        revenue: function(e, t) {
                            var a = t.twitchSubscriptionProducts.filter(function(t) {
                                return e === t.productID
                            })[0];
                            if (!a) return Object(l.e)(0, {
                                style: "currency",
                                currency: "USD"
                            });
                            return Object(l.e)(a.total, {
                                style: "currency",
                                currency: "USD"
                            })
                        }(t.productID, e.revenue.streams)
                    })
                }))))
            };
        var G, q = function(e) {
                return i.createElement("tr", null, i.createElement("td", null, i.createElement(b.Q, null, e.tier)), i.createElement("td", null, i.createElement(b.Q, null, e.subscribers)), i.createElement("td", null, i.createElement(b.Q, null, e.revenue)))
            },
            K = (a("JczT"), {
                "data-test-selector": "total-revenue"
            }),
            Q = function(e) {
                if (e.channel.role === M.d.None) return null;
                if (e.revenue.isLoading) return i.createElement(b._8, {
                    margin: {
                        top: 3
                    }
                }, i.createElement(b._14, {
                    height: 448
                }));
                var t = e.revenue,
                    a = t.streams,
                    n = t.lookbackStreams,
                    r = e.channel.role === M.d.Affiliate ? Object(l.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 60 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel") : Object(l.d)("Your estimated revenue minus Twitch’s share, fees, and taxes. Your payment is sent 45 days after the end of each month your balance reaches $100 or more.", "ChannelAnalyticsRevenueBreakdownPanel"),
                    s = i.createElement(z.a, null);
                return a.getTotalAmountAllStreams() && (s = i.createElement(i.Fragment, null, i.createElement(X, {
                    totalAmount: a.getTotalAmountAllStreams()
                }), i.createElement(b._8, {
                    padding: {
                        top: 2,
                        bottom: 1
                    }
                }, i.createElement(b._8, {
                    textAlign: b._45.Right,
                    padding: {
                        x: 2
                    }
                }, i.createElement(b.Q, {
                    type: b._49.H6,
                    bold: !0,
                    color: b.K.Alt2
                }, Object(l.d)("Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel"))), i.createElement(b._8, null, i.createElement(B, {
                    title: Object(l.d)("Paid subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(a.twitchSubscriptions.total),
                    lastRevenue: Z(n.twitchSubscriptions.total),
                    className: "revenue-breakdown-panel__key--paid-subs"
                }, e.subCounts.isLoading ? null : i.createElement(U, {
                    subCounts: e.subCounts,
                    revenue: e.revenue
                })), i.createElement(B, {
                    title: Object(l.d)("Twitch Prime subs", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(a.primeSubscriptions.total),
                    lastRevenue: Z(n.primeSubscriptions.total),
                    className: "revenue-breakdown-panel__key--prime-subs"
                }), i.createElement(B, {
                    title: Object(l.d)("Ads", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(a.ads.total),
                    lastRevenue: Z(n.ads.total),
                    className: "revenue-breakdown-panel__key--ads"
                }), i.createElement(B, {
                    title: Object(l.d)("Bits", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(a.bits.total),
                    lastRevenue: Z(n.bits.total),
                    className: "revenue-breakdown-panel__key--bits"
                }), i.createElement(B, {
                    title: Object(l.d)("Game Sales", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(a.gameCommerce.total),
                    lastRevenue: Z(n.gameCommerce.total),
                    className: "revenue-breakdown-panel__key--game-sales"
                }), i.createElement(B, {
                    title: Object(l.d)("Extensions", "ChannelAnalyticsRevenueBreakdownPanel"),
                    revenue: Z(a.extensions.total),
                    lastRevenue: Z(n.extensions.total),
                    className: "revenue-breakdown-panel__key--extensions"
                }))))), i.createElement(N.a, {
                    title: Object(l.d)("Where does my revenue come from?", "ChannelAnalyticsRevenueBreakdownPanel"),
                    tooltip: r
                }, s)
            },
            X = function(e) {
                return i.createElement(b._8, r.__assign({
                    textAlign: b._45.Center,
                    padding: {
                        y: 2
                    }
                }, K), i.createElement(b._8, {
                    display: b.R.Flex,
                    justifyContent: b._7.Center
                }, i.createElement(b.Q, {
                    type: b._49.H2
                }, Object(V.a)(e.totalAmount, function(e, t) {
                    switch (e.type) {
                        case "currency":
                            return i.createElement(b._2, {
                                key: t,
                                display: b.R.InlineBlock,
                                padding: {
                                    top: .5,
                                    right: .5
                                },
                                verticalAlign: 0 === t ? b._59.TextTop : b._59.Baseline
                            }, i.createElement(b.Q, {
                                color: b.K.Alt2,
                                fontSize: b.V.Size6,
                                type: b._49.Span
                            }, e.value));
                        case "integer":
                        case "group":
                            return i.createElement(b.Q, {
                                key: t,
                                type: b._49.Span,
                                bold: !0
                            }, e.value);
                        case "decimal":
                        case "fraction":
                            return i.createElement(b.Q, {
                                key: t,
                                type: b._49.Span,
                                fontSize: b.V.Size6,
                                bold: !0
                            }, e.value);
                        default:
                            return i.createElement(b.Q, {
                                key: t,
                                type: b._49.Span,
                                bold: !0
                            }, e.value)
                    }
                }, function(e) {
                    return i.createElement(b.Q, {
                        key: "key",
                        type: b._49.Span,
                        bold: !0
                    }, e)
                }))), i.createElement(b.Q, {
                    type: b._49.H6
                }, Object(l.d)("Total Estimated Revenue (USD)", "ChannelAnalyticsRevenueBreakdownPanel")))
            },
            Z = function(e) {
                return Object(l.e)(e, {
                    style: "currency",
                    currency: "USD"
                })
            },
            $ = {
                "data-test-selector": "cancel-button"
            },
            ee = {
                "data-test-selector": "send-email-button"
            };
        ! function(e) {
            e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
        }(G || (G = {}));
        var te, ae = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleSendEmail = function() {
                        return r.__awaiter(a, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: G.InFlight
                                        }), e = "/api/channels/" + this.props.channelLogin + "/subscriber_list_email", [4, Object(k.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                on_site: "1"
                                            }
                                        }, {
                                            excludeHeaders: ["Twitch-Api-Token"]
                                        })];
                                    case 1:
                                        return (t = a.sent()).isError() ? (this.setState({
                                            requestState: G.Failed
                                        }), [2]) : (this.setState({
                                            emailAddress: t.body.message.substring(20),
                                            requestState: G.Success
                                        }), [2])
                                }
                            })
                        })
                    }, a.state = {
                        emailAddress: "",
                        requestState: G.Pending
                    }, a
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i.createElement(b.Q, {
                            color: b.K.Error
                        }, Object(l.d)("Oops, something went wrong. Please try again.", "ChannelAnalyticsEmailSubsList")),
                        t = i.createElement(i.Fragment, null, i.createElement(b._35, {
                            borderBottom: !0
                        }, i.createElement(b._8, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(b.Q, {
                            color: b.K.Alt2
                        }, Object(l.d)("Do you wish to be emailed a list of your active subscribers?", "ChannelAnalyticsEmailSubsList")), i.createElement(b.Q, {
                            color: b.K.Alt2
                        }, Object(l.d)("An email with a CSV attachment will be sent to you.", "ChannelAnalyticsEmailSubsList")), this.state.requestState === G.Failed && e)), i.createElement(b._8, {
                            display: b.R.Flex,
                            justifyContent: b._7.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(b._8, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(b.v, r.__assign({}, $, {
                            onClick: this.props.onClose,
                            type: b.B.Text
                        }), Object(l.d)("Cancel", "ChannelAnalyticsEmailSubsList"))), i.createElement(b._8, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(b.v, r.__assign({}, ee, {
                            disabled: this.state.requestState === G.InFlight,
                            onClick: this.handleSendEmail
                        }), this.state.requestState === G.InFlight ? Object(l.d)("Sending Email...", "ChannelAnalyticsEmailSubsList") : Object(l.d)("Send Me Email", "ChannelAnalyticsEmailSubsList"))))),
                        a = i.createElement(i.Fragment, null, i.createElement(b._35, {
                            borderBottom: !0
                        }, i.createElement(b._8, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(b.Q, {
                            color: b.K.Alt2
                        }, Object(l.d)("An email with a CSV attachment is being sent to {email}.", {
                            email: this.state.emailAddress
                        }, "ChannelAnalyticsEmailSubsList")), i.createElement(b.Q, {
                            color: b.K.Alt2
                        }, Object(l.d)("This may take several minutes if you have a large number of subscribers.", "ChannelAnalyticsEmailSubsList")))), i.createElement(b._8, {
                            display: b.R.Flex,
                            justifyContent: b._7.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(b.v, {
                            onClick: this.props.onClose
                        }, Object(l.d)("Close", "ChannelAnalyticsEmailSubsList"))));
                    return i.createElement(i.Fragment, null, i.createElement(b._35, {
                        background: b.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, i.createElement(b._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(b.Q, {
                        type: b._49.H4,
                        color: b.K.Alt
                    }, Object(l.d)("Receive Subscriber List", "ChannelAnalyticsEmailSubsList"))), this.state.requestState === G.Success ? a : t, i.createElement(b._8, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: b._15.Absolute
                    }, i.createElement(b.v, {
                        onClick: this.props.onClose,
                        type: b.B.Text,
                        overlay: !0
                    }, i.createElement(b._24, {
                        asset: b._25.RemoveTag,
                        width: 16,
                        height: 16
                    })))))
                }, t
            }(i.Component),
            ne = {
                "data-test-selector": "cancel-button"
            },
            re = {
                "data-test-selector": "send-email-button"
            };
        ! function(e) {
            e[e.Pending = 0] = "Pending", e[e.InFlight = 1] = "InFlight", e[e.Failed = 2] = "Failed", e[e.Success = 3] = "Success"
        }(te || (te = {}));
        var ie = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleSendEmail = function() {
                        return r.__awaiter(a, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.setState({
                                            requestState: te.InFlight
                                        }), [4, Object(k.c)({
                                            path: "/api/channels/" + this.props.channelLogin + "/subscriber_emails",
                                            method: "POST",
                                            body: {
                                                body: this.state.body,
                                                title: this.state.title,
                                                on_site: "1"
                                            }
                                        }, {
                                            excludeHeaders: ["Twitch-Api-Token"]
                                        })];
                                    case 1:
                                        return e.sent().isError() ? (this.setState({
                                            requestState: te.Failed
                                        }), [2]) : (this.setState({
                                            requestState: te.Success
                                        }), [2])
                                }
                            })
                        })
                    }, a.handleBodyChange = function(e) {
                        a.setState({
                            body: e.currentTarget.value
                        })
                    }, a.handleTitleChange = function(e) {
                        a.setState({
                            title: e.currentTarget.value
                        })
                    }, a.state = {
                        body: "",
                        requestState: te.Pending,
                        title: ""
                    }, a
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i.createElement(b.Q, {
                            color: b.K.Error
                        }, Object(l.d)("Oops, something went wrong. Please try again.", "ChannelAnalyticsEmailSubs")),
                        t = i.createElement(i.Fragment, null, i.createElement(b._35, {
                            borderBottom: !0
                        }, i.createElement(b._8, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(b.Q, {
                            color: b.K.Alt2
                        }, Object(l.d)("Use this form to send a message to all {subscribers,number} of your active subscribers.", {
                            subscribers: this.props.totalSubscribers
                        }, "ChannelAnalyticsEmailSubs")), i.createElement(b._8, {
                            padding: {
                                top: 2,
                                bottom: 1
                            }
                        }, i.createElement(b.W, {
                            label: Object(l.d)("Message Title", "ChannelAnalyticsEmailSubs")
                        }, i.createElement(b._4, {
                            type: b._5.Text,
                            onChange: this.handleTitleChange
                        }))), i.createElement(b._8, {
                            padding: {
                                y: 1
                            }
                        }, i.createElement(b.W, {
                            label: Object(l.d)("Message Body", "ChannelAnalyticsEmailSubs")
                        }, i.createElement(b._46, {
                            onChange: this.handleBodyChange,
                            rows: 6
                        }))), this.state.requestState === te.Failed && e)), i.createElement(b._8, {
                            display: b.R.Flex,
                            justifyContent: b._7.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(b._8, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(b.v, r.__assign({}, ne, {
                            onClick: this.props.onClose,
                            type: b.B.Text
                        }), Object(l.d)("Cancel", "ChannelAnalyticsEmailSubs"))), i.createElement(b._8, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(b.v, r.__assign({}, re, {
                            disabled: "" === this.state.body || "" === this.state.title || this.state.requestState === te.InFlight,
                            onClick: this.handleSendEmail
                        }), this.state.requestState === te.InFlight ? Object(l.d)("Sending Email...", "ChannelAnalyticsEmailSubs") : Object(l.d)("Send Email", "ChannelAnalyticsEmailSubs"))))),
                        a = i.createElement(i.Fragment, null, i.createElement(b._35, {
                            borderBottom: !0
                        }, i.createElement(b._8, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(b.Q, {
                            color: b.K.Alt2
                        }, Object(l.d)("Your email has been sent!", "ChannelAnalyticsEmailSubs")))), i.createElement(b._8, {
                            display: b.R.Flex,
                            justifyContent: b._7.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(b.v, {
                            onClick: this.props.onClose
                        }, Object(l.d)("Close", "ChannelAnalyticsEmailSubs"))));
                    return i.createElement(i.Fragment, null, i.createElement(b._35, {
                        background: b.n.Base,
                        elevation: 3,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 2
                        }
                    }, i.createElement(b._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(b.Q, {
                        type: b._49.H4,
                        color: b.K.Alt
                    }, Object(l.d)("Send Email to Subscribers", "ChannelAnalyticsEmailSubs"))), this.state.requestState === te.Success ? a : t, i.createElement(b._8, {
                        attachRight: !0,
                        attachTop: !0,
                        className: "modal__close-button",
                        margin: {
                            left: .5
                        },
                        position: b._15.Absolute
                    }, i.createElement(b.v, {
                        type: b.B.Text,
                        onClick: this.props.onClose,
                        overlay: !0
                    }, i.createElement(b._24, {
                        asset: b._25.RemoveTag,
                        width: 16,
                        height: 16
                    })))))
                }, t
            }(i.Component),
            se = a("UWcj"),
            oe = a("XU/q"),
            le = a("FeZP"),
            de = (a("G70b"), {
                1000: function() {
                    return Object(l.d)("Tier 1 subs", "ChannelAnalyticsSubscribersPanel")
                },
                2000: function() {
                    return Object(l.d)("Tier 2 subs", "ChannelAnalyticsSubscribersPanel")
                },
                3000: function() {
                    return Object(l.d)("Tier 3 subs", "ChannelAnalyticsSubscribersPanel")
                }
            }),
            ue = {
                "data-test-selector": "email-me-my-subs"
            },
            ce = {
                "data-test-selector": "email-my-subs"
            },
            me = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.emailButtons = function(e) {
                        return i.createElement(b._35, {
                            display: b.R.Flex
                        }, i.createElement(se.a, {
                            triggerModal: function(e) {
                                return i.createElement(ae, {
                                    channelLogin: a.props.channel.name,
                                    onClose: e
                                })
                            }
                        }, function(e) {
                            return i.createElement(le.a, r.__assign({}, ue, {
                                message: Object(l.d)("E-mail me my subscriber list", "ChannelAnalyticsSubscribersPanel"),
                                onClick: Object(f.compose)(e, pe)
                            }))
                        }), i.createElement(se.a, {
                            triggerModal: function(t) {
                                return i.createElement(ie, {
                                    channelLogin: a.props.channel.name,
                                    totalSubscribers: e,
                                    onClose: t
                                })
                            }
                        }, function(e) {
                            return i.createElement(b._35, {
                                borderLeft: !0,
                                flexGrow: 1
                            }, i.createElement(le.a, r.__assign({}, ce, {
                                message: Object(l.d)("Send e-mail to my subs", "ChannelAnalyticsSubscribersPanel"),
                                onClick: Object(f.compose)(e, _e)
                            })))
                        }))
                    }, a.subscriptionRows = function() {
                        return a.state.subscriptions.map(function(e) {
                            return i.createElement(fe, {
                                name: de[e.plan](),
                                revSplit: e.revenueSplit + " / " + (100 - e.revenueSplit),
                                score: Object(l.e)(e.score),
                                count: Object(l.e)(e.count),
                                key: e.id
                            })
                        })
                    }, a.state = {
                        subscriptions: [],
                        isLoading: !0
                    }, a
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchSubscriptions()
                }, t.prototype.render = function() {
                    if (this.props.channel.role === M.d.None) return null;
                    if (this.state.isLoading) return i.createElement(b._8, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, i.createElement(b._14, {
                        height: 448
                    }));
                    var e = i.createElement(z.a, null),
                        t = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.score
                        }, 0),
                        a = this.state.subscriptions.reduce(function(e, t) {
                            return e + t.count
                        }, 0);
                    return this.state.subscriptions.length && (e = i.createElement(i.Fragment, null, i.createElement(b._35, {
                        borderBottom: !0,
                        padding: {
                            top: 1,
                            bottom: 2
                        }
                    }, i.createElement(he, null), this.subscriptionRows(), i.createElement(fe, {
                        name: Object(l.d)("Total", "ChannelAnalyticsSubscribersPanel"),
                        score: Object(l.e)(t),
                        count: Object(l.e)(a)
                    })), this.emailButtons(a))), i.createElement(oe.a, {
                        title: Object(l.d)("How many subscribers do I have today?", "ChannelAnalyticsSubscribersPanel")
                    }, e)
                }, t.prototype.fetchSubscriptions = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel.role === M.d.None ? [2, this.setState({
                                        isLoading: !1,
                                        subscriptions: []
                                    })] : (this.setState({
                                        isLoading: !0,
                                        subscriptions: []
                                    }), [4, D(this.props.channel.name)]);
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isLoading: !1
                                    }), e.isError ? [2] : (this.setState({
                                        subscriptions: e.subscriptions
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(i.Component),
            he = function() {
                return i.createElement(b._35, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    position: b._15.Relative
                }, i.createElement(b.Y, null, i.createElement(b.L, {
                    cols: 8
                }, i.createElement(b._8, {
                    textAlign: b._45.Right
                }, i.createElement(b.Q, {
                    type: b._49.H6,
                    bold: !0,
                    color: b.K.Alt2
                }, Object(l.d)("Revenue Split", "ChannelAnalyticsSubscribersPanel")))), i.createElement(b.L, {
                    cols: 2
                }, i.createElement(b._8, {
                    textAlign: b._45.Right
                }, i.createElement(b.Q, {
                    type: b._49.H6,
                    bold: !0,
                    color: b.K.Alt2
                }, Object(l.d)("Sub Points", "ChannelAnalyticsSubscribersPanel")))), i.createElement(b.L, {
                    cols: 2
                }, i.createElement(b._8, {
                    textAlign: b._45.Right
                }, i.createElement(b.Q, {
                    type: b._49.H6,
                    bold: !0,
                    color: b.K.Alt2
                }, Object(l.d)("Subscribers", "ChannelAnalyticsSubscribersPanel"))))))
            };

        function _e() {
            P({
                action: T.EmailToSubs
            })
        }

        function pe() {
            P({
                action: T.EmailMeMySubs
            })
        }
        var fe = function(e) {
                return i.createElement(b._35, {
                    className: "subscribers-panel-row",
                    padding: {
                        x: 2,
                        y: 1
                    },
                    position: b._15.Relative
                }, i.createElement(b.Y, null, i.createElement(b.L, {
                    cols: 6
                }, i.createElement(b._8, {
                    textAlign: b._45.Left
                }, i.createElement(b.Q, {
                    type: b._49.H5,
                    color: b.K.Alt
                }, e.name))), i.createElement(b.L, {
                    cols: 2
                }, i.createElement(b._8, {
                    textAlign: b._45.Right
                }, i.createElement(b.Q, {
                    type: b._49.H5
                }, e.revSplit))), i.createElement(b.L, {
                    cols: 2
                }, i.createElement(b._8, {
                    textAlign: b._45.Right
                }, i.createElement(b.Q, {
                    type: b._49.H5,
                    bold: !0
                }, e.score))), i.createElement(b.L, {
                    cols: 2
                }, i.createElement(b._8, {
                    textAlign: b._45.Right
                }, i.createElement(b.Q, {
                    type: b._49.H5,
                    bold: !0
                }, e.count)))))
            },
            ge = a("a+9f"),
            ye = function(e) {
                var t = e.channel,
                    a = e.topClips;
                if (a.isLoading) return i.createElement(b._8, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, i.createElement(b._14, {
                    height: 448
                }));
                var n = i.createElement(z.a, null);
                if (a.clips.length) {
                    var r = Object(l.d)("View details", "ChannelAnalyticsTopClipsPanel"),
                        s = {
                            path: "/" + t + "/manager/clips/channel",
                            state: {
                                medium: h.PageviewMedium.ChannelAnalytics,
                                content: h.PageviewContent.TopClipsDetails
                            }
                        };
                    n = i.createElement(i.Fragment, null, i.createElement(Me, {
                        clipsAttrs: a
                    }), i.createElement(le.a, {
                        message: r,
                        onClick: be,
                        linkTo: s
                    }))
                }
                return i.createElement(N.a, {
                    title: Object(l.d)("What were my top clips?", "ChannelAnalyticsTopClipsPanel")
                }, n)
            },
            Me = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], a = 0; a < 5; a++) t.push(i.createElement(b._35, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: a
                    }, i.createElement(b._14, {
                        height: 50
                    })));
                return i.createElement(b._35, {
                    borderBottom: !0
                }, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return i.createElement(ge.a, r.__assign({}, e, {
                        key: t,
                        onClick: ve
                    }))
                }))
            };

        function be() {
            P({
                action: T.ViewDetailsClips
            })
        }

        function ve() {
            P({
                action: T.TopClipsClip
            })
        }
        var Le = a("InMe"),
            ke = function(e, t) {
                var a = e.revenue,
                    n = e.subscriptions,
                    r = [
                        [Object(l.d)("Date", "CSVExporterRevenue")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(l.d)("Sub Revenue", "CSVExporterRevenue")].concat(t.sum(a.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Twitch Prime Revenue", "CSVExporterRevenue")].concat(t.sum(a.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Bits Revenue", "CSVExporterRevenue")].concat(t.sum(a.bits.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Ad Revenue", "CSVExporterRevenue")].concat(t.sum(a.ads.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Game Sales Revenue", "CSVExporterRevenue")].concat(t.sum(a.gameCommerce.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Extensions Revenue", "CSVExporterRevenue")].concat(t.sum(a.extensions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.amount
                            }
                        })), [Object(l.d)("Twitch Prime Subs", "CSVExporterRevenue")].concat(t.sum(n.primeSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        })), [Object(l.d)("Subs", "CSVExporterRevenue")].concat(t.sum(n.twitchSubscriptions.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    ].concat(n.twitchSubscriptionProducts.map(function(e) {
                        return [Object(J.a)(e.defaultPrice)].concat(t.sum(e.timeseries, function(e) {
                            return {
                                date: e.date,
                                value: e.count
                            }
                        }))
                    }));
                return {
                    fileName: t.isByDay ? Object(l.d)("Revenue by day {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : t.isByWeek ? Object(l.d)("Revenue by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue") : Object(l.d)("Revenue by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterRevenue"),
                    csv: Object(Le.c)(r).join("\n")
                }
            },
            De = function(e, t) {
                return t.isByDay ? function(e, t) {
                    var a = [
                        [Object(l.d)("Start Time", "CSVExporterStreamSessions"), Object(l.d)("End Time", "CSVExporterStreamSessions"), Object(l.d)("Average Viewers", "CSVExporterStreamSessions"), Object(l.d)("Max. Viewers", "CSVExporterStreamSessions"), Object(l.d)("Total Views", "CSVExporterStreamSessions"), Object(l.d)("Unique Views", "CSVExporterStreamSessions"), Object(l.d)("Minutes Watched", "CSVExporterStreamSessions"), Object(l.d)("New Followers", "CSVExporterStreamSessions"), Object(l.d)("Chatters", "CSVExporterStreamSessions"), Object(l.d)("Chat Messages", "CSVExporterStreamSessions"), Object(l.d)("Clips Created", "CSVExporterStreamSessions"), Object(l.d)("Clip Views", "CSVExporterStreamSessions"), Object(l.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessions"), Object(l.d)("Minutes Streamed", "CSVExporterStreamSessions")]
                    ];
                    return e.forEach(function(e) {
                        a.push(['"' + e.interval.start + '"', '"' + e.interval.end + '"', "" + e.avgViewerCount, "" + e.maxViewerCount, "" + e.totalViewers, "" + e.uniqueViewers, "" + e.totalMinutesWatched, "" + e.followersChange, "" + e.uniqueChatters, "" + e.messagesTotal, "" + e.clipCreatesTotal, "" + e.clipPlaysTotal, "" + e.commercialLengthTotal / 60, "" + Object(E.a)(e.interval)])
                    }), {
                        fileName: Object(l.d)("Stream Sessions {start, date} to {end, date}.csv", {
                            start: t.start,
                            end: t.end
                        }, "CSVExporterStreamSessions"),
                        csv: a.join("\n")
                    }
                }(e, t.interval) : function(e, t) {
                    var a, n = [
                        [Object(l.d)("Date", "CSVExporterStreamSessionsAggregated")].concat(t.dates.map(function(e) {
                            return e.toDateString()
                        })), [Object(l.d)("Average Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(E.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Max. Viewers", "CSVExporterStreamSessionsAggregated")].concat(t.max(e, function(e) {
                            return {
                                value: e.maxViewerCount,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Total Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalViewers,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Average Unique Views", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(E.a)(e.interval),
                                value: e.uniqueViewers,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Minutes Watched", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.totalMinutesWatched,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("New Followers", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.followersChange,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Average Unique Chatters", "CSVExporterStreamSessionsAggregated")].concat(t.weightedAverage(e, function(e) {
                            return {
                                weight: Object(E.a)(e.interval),
                                value: e.uniqueChatters,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Chat Messages", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Clips Created", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipCreatesTotal,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Clip Views", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.clipPlaysTotal,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Ad Breaks (Minutes)", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: e.commercialLengthTotal / 60,
                                date: e.interval.start
                            }
                        })), [Object(l.d)("Minutes Streamed", "CSVExporterStreamSessionsAggregated")].concat(t.sum(e, function(e) {
                            return {
                                value: Object(E.a)(e.interval),
                                date: e.interval.start
                            }
                        }))
                    ];
                    a = t.isByWeek ? Object(l.d)("StreamSessions by week {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated") : Object(l.d)("StreamSessions by month {start, date} to {end, date}.csv", {
                        start: t.interval.start,
                        end: t.interval.end
                    }, "CSVExporterStreamSessionsAggregated");
                    return {
                        fileName: a,
                        csv: Object(Le.c)(n).join("\n")
                    }
                }(e, t)
            };
        var Ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.download = function() {
                        var e;
                        t.props.dataGroup === Y.b.StreamSummaries ? (P({
                            action: T.ExportDataStream
                        }), e = De(t.props.analyticsResponse.streamSessions.sessions, t.props.aggregation)) : (P({
                            action: T.ExportDataRevenue
                        }), e = ke({
                            revenue: t.props.analyticsResponse.revenue.streams,
                            subscriptions: t.props.analyticsResponse.subCounts.streams
                        }, t.props.aggregation)), Object(Le.a)(e.fileName, e.csv)
                    }, t.isDataAvailable = function() {
                        return t.props.dataGroup === Y.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.analyticsResponse.streamSessions.isLoading || this.props.analyticsResponse.revenue.isLoading ? null : i.createElement(le.a, {
                        disabled: !this.isDataAvailable(),
                        message: Object(l.d)("Export Data", "ChannelAnalyticsRevenueBreakdownPanel"),
                        onClick: this.download
                    })
                }, t
            }(i.Component),
            Se = a("IJpv"),
            we = function() {
                function e(e, t) {
                    var a = this;
                    switch (this.formatDateFromLabel = function(e) {
                        return a.formatDate(new Date(Number(e)))
                    }, this.formatShortDateFromLabel = function(e) {
                        return a.formatShortDate(new Date(Number(e)))
                    }, this.aggregationInterval = e, this.interval = t, this.aggregationInterval) {
                        case Se.a.Day:
                            this.addInterval = p.addDays, this.startOf = p.startOfDay, this.formatDate = function(e) {
                                return Object(l.c)(e, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case Se.a.Week:
                            this.addInterval = p.addWeeks, this.startOf = p.startOfWeek, this.formatDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                }) + " – " + Object(l.c)(Object(p.endOfWeek)(e), {
                                    month: "short",
                                    day: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    day: "numeric"
                                })
                            };
                            break;
                        case Se.a.Month:
                            this.addInterval = p.addMonths, this.startOf = p.startOfMonth, this.formatDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    year: "numeric"
                                })
                            }, this.formatShortDate = function(e) {
                                return Object(l.c)(e, {
                                    month: "short",
                                    year: "numeric"
                                })
                            };
                            break;
                        default:
                            throw new Error("Expected an AggregationInterval but received " + this.aggregationInterval)
                    }
                    this.dates = this.datesInRange(t), this.datesAsNumbers = this.dates.map(function(e) {
                        return e.getTime()
                    }), this.datesAsLabels = this.datesAsNumbers.map(function(e) {
                        return e.toString()
                    }), this.formattedDates = this.dates.map(function(e) {
                        return a.formatShortDate(e)
                    })
                }
                return e.prototype.sum = function(e, t) {
                    var a = this,
                        n = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            i = r.value,
                            s = r.date,
                            o = a.startOf(s).getTime(),
                            l = n.get(o) || 0;
                        n.set(o, l + i)
                    }), this.datesAsNumbers.map(function(e) {
                        return n.get(e) || 0
                    })
                }, e.prototype.average = function(e, t) {
                    var a = this,
                        n = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            i = r.value,
                            s = r.date,
                            o = a.startOf(s).getTime(),
                            l = n.get(o);
                        l || (l = {
                            total: 0,
                            count: 0
                        }, n.set(o, l)), l.count += 1, l.total += i
                    }), this.datesAsNumbers.map(function(e) {
                        var t = n.get(e) || {
                            total: 0,
                            count: 1
                        };
                        return t.total / t.count
                    })
                }, e.prototype.weightedAverage = function(e, t) {
                    var a = this,
                        n = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            i = r.weight,
                            s = r.value,
                            o = r.date,
                            l = a.startOf(o).getTime(),
                            d = n.get(l);
                        d || (d = {
                            totalWeight: 0,
                            weightedValue: 0
                        }, n.set(l, d)), d.totalWeight += i, d.weightedValue += i * s
                    }), this.datesAsNumbers.map(function(e) {
                        var t = n.get(e) || {
                            totalWeight: 0,
                            weightedValue: 0
                        };
                        return t.weightedValue / t.totalWeight
                    })
                }, e.prototype.max = function(e, t) {
                    var a = this,
                        n = new Map;
                    return e.forEach(function(e) {
                        var r = t(e),
                            i = r.value,
                            s = r.date,
                            o = a.startOf(s).getTime(),
                            l = n.get(o) || 0;
                        n.set(o, Math.max(l, i))
                    }), this.datesAsNumbers.map(function(e) {
                        return n.get(e) || 0
                    })
                }, Object.defineProperty(e.prototype, "isByDay", {
                    get: function() {
                        return this.aggregationInterval === Se.a.Day
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByWeek", {
                    get: function() {
                        return this.aggregationInterval === Se.a.Week
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isByMonth", {
                    get: function() {
                        return this.aggregationInterval === Se.a.Month
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEqual = function(e) {
                    return e.aggregationInterval === this.aggregationInterval
                }, e.prototype.datesInRange = function(e) {
                    for (var t = [], a = this.startOf(e.start); a <= e.end;) t.push(a), a = this.addInterval(a, 1);
                    return t
                }, e
            }(),
            Te = function() {
                function e(e) {
                    this.defaultTopStats = [], this.topStatsKeys = [], this.channel = e, this.defaultTopStats = S(this.channel.role), this.topStatsKeys = w(this.channel.role), this.statsStorageKey = this.channel.name + "-top"
                }
                return e.prototype.store = function(e) {
                    var t;
                    l.l.set("channel-analytics-stats", r.__assign({}, this.storedStats(), ((t = {})[this.statsStorageKey] = e, t)))
                }, e.prototype.storedStats = function() {
                    return l.l.get("channel-analytics-stats", ((e = {})[this.statsStorageKey] = [], e));
                    var e
                }, e.prototype.getValidStoredStats = function() {
                    var e = this,
                        t = this.storedStats(),
                        a = Array.isArray(t[this.statsStorageKey]) ? t[this.statsStorageKey] : [],
                        n = [],
                        r = this.topStatsKeys.slice();
                    return a.forEach(function(t) {
                        if (e.topStatsKeys.includes(t) && !n.includes(t)) return r.splice(r.indexOf(t), 1), n.push(t)
                    }), n.length ? n.length < Y.d && (n = n.concat(r)) : n = this.defaultTopStats, n.slice(0, Y.d)
                }, e
            }(),
            xe = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.defaultTopStats = [], a.topStatsKeys = [], a.handleUpdateStat = function(e, t) {
                        a.state.selectedStats.indexOf(e) !== t && a.setState(function(n) {
                            var r = n.selectedStats.slice(),
                                i = n.selectedStats.indexOf(e);
                            return r[t] = e, -1 !== i && (r[i] = a.getRemainingStats(r)[0]), a.statsStorage.store(r), a.props.onSelect(e, t, r), {
                                selectedStats: r
                            }
                        })
                    }, a.statsStorage = new Te(a.props.channel), a.defaultTopStats = S(a.props.channel.role), a.topStatsKeys = w(a.props.channel.role), a.state = {
                        selectedStats: a.defaultTopStats
                    }, a
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        selectedStats: this.statsStorage.getValidStoredStats()
                    })
                }, t.prototype.render = function() {
                    return this.props.children({
                        stats: this.state.selectedStats.map(function(e) {
                            return Y.g[e]
                        }),
                        onUpdateStat: this.handleUpdateStat
                    })
                }, t.prototype.getRemainingStats = function(e) {
                    return this.topStatsKeys.filter(function(t) {
                        return !e.includes(t)
                    })
                }, t
            }(i.Component),
            Ce = {
                "data-test-selector": "stats-dropdown-title"
            },
            je = {
                "data-test-selector": "date-picker-toggle"
            },
            Oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return i.createElement(b._8, {
                        position: b._15.Relative
                    }, i.createElement(H.a, {
                        control: function(e) {
                            var t = e.toggle;
                            return i.createElement(b._8, {
                                display: b.R.Flex,
                                fullHeight: !0
                            }, i.createElement(b.w, r.__assign({
                                ariaLabel: Object(l.d)("Select top statistic", "ChannelAnalyticsDropdownAria"),
                                icon: b._25.GlyphArrUpDown,
                                onClick: t,
                                size: b.x.Small
                            }, je)))
                        }
                    }, function(t) {
                        var a = t.close;
                        return i.createElement(b.q, {
                            show: !0,
                            direction: b.r.BottomRight,
                            tailOffset: 5
                        }, e.props.availableStats.map(function(t) {
                            return i.createElement(b._6, r.__assign({
                                onClick: Object(f.compose)(a, e.props.onUpdateStat.bind(e, t, e.props.index)),
                                key: t,
                                alpha: !0
                            }, Ce), i.createElement(b._8, {
                                padding: 1
                            }, i.createElement(b.Q, {
                                color: b.K.Link
                            }, Y.g[t].title())))
                        }))
                    }))
                }, t
            }(i.Component),
            Pe = {
                "data-test-selector": "current-chart"
            },
            He = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.chart = function(e) {
                        return i.createElement(e.definition.Chart, r.__assign({}, Pe, {
                            analyticsResponse: t.props.analyticsResponse,
                            aggregation: e.aggregation
                        }))
                    }, t.handleAggregationChange = function(e) {
                        t.props.onAggregationSelect(e.currentTarget.value)
                    }, t.isDataAvailable = function(e) {
                        return e === Y.b.StreamSummaries ? t.props.analyticsResponse.streamSessions.sessions.length > 0 : t.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() > 0
                    }, t.handleTabClick = function(e) {
                        return t.props.onTabSelect(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = new we(this.props.urlStore.params.topStatsAggregation, this.props.urlStore.params),
                        a = this.cappedIndex;
                    return i.createElement(xe, {
                        channel: this.props.channel,
                        onSelect: this.props.onStatsSelect
                    }, function(n) {
                        var r = n.stats,
                            s = n.onUpdateStat;
                        return i.createElement(b._35, {
                            margin: {
                                bottom: 4
                            },
                            background: b.n.Base,
                            elevation: 1
                        }, i.createElement(b._37, null, r.map(function(t, n) {
                            var r = t.Tab;
                            return i.createElement(r, {
                                analyticsResponse: e.props.analyticsResponse,
                                linkTo: e.props.urlStore.buildPathWithParams({
                                    topStatsIndex: n
                                }),
                                isActive: a === n,
                                key: n,
                                onClick: e.handleTabClick
                            }, i.createElement(Oe, {
                                availableStats: w(e.props.channel.role),
                                index: n,
                                onUpdateStat: s
                            }))
                        })), i.createElement(b._35, {
                            padding: 2,
                            borderBottom: !0
                        }, i.createElement(b._8, {
                            display: b.R.Flex,
                            flexDirection: b.T.RowReverse,
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement("div", null, i.createElement(b._30, {
                            disabled: !e.isDataAvailable(r[a].dataGroup),
                            onChange: e.handleAggregationChange,
                            value: e.props.urlStore.params.topStatsAggregation
                        }, i.createElement("option", {
                            value: Se.a.Day
                        }, Object(l.d)("Day", "ChannelAnalyticsTopStats")), i.createElement("option", {
                            value: Se.a.Week
                        }, Object(l.d)("Week", "ChannelAnalyticsTopStats")), i.createElement("option", {
                            value: Se.a.Month
                        }, Object(l.d)("Month", "ChannelAnalyticsTopStats"))))), i.createElement(e.chart, {
                            definition: r[a],
                            aggregation: t
                        })), i.createElement(Ye, {
                            analyticsResponse: e.props.analyticsResponse,
                            aggregation: t,
                            dataGroup: r[a].dataGroup
                        }))
                    })
                }, Object.defineProperty(t.prototype, "cappedIndex", {
                    get: function() {
                        var e = Y.d - 1;
                        return Math.min(e, this.props.urlStore.params.topStatsIndex)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            Ae = (a("G6h4"), {
                "data-test-selector": "card-image"
            }),
            Ee = function(e) {
                var t = e.stream,
                    a = e.statNum;
                return i.createElement(b._8, {
                    className: "stream-card-row"
                }, i.createElement(b._6, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: {
                        pathname: "/" + t.channel.name + "/dashboard/stream-summary/" + t.id,
                        search: "?tt_content=" + h.PageviewContent.TopStreams + "&tt_medium=" + h.PageviewMedium.ChannelAnalytics
                    },
                    onClick: Fe
                }, i.createElement(b._35, {
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, i.createElement(b.C, {
                    row: !0
                }, i.createElement(b.E, r.__assign({
                    src: t.videoThumbnail || "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
                    alt: t.startChannelStatus,
                    size: b.F.Size8,
                    aspect: b.l.Aspect16x9
                }, Ae)), i.createElement(b.D, {
                    overflow: b._11.Hidden
                }, i.createElement(b._8, {
                    display: b.R.Flex,
                    flexGrow: 1,
                    alignItems: b.c.Center,
                    justifyContent: b._7.Between,
                    margin: {
                        left: 1
                    },
                    ellipsis: !0
                }, i.createElement(b._8, {
                    display: b.R.Flex,
                    flexDirection: b.T.Column,
                    ellipsis: !0
                }, i.createElement(b.Q, {
                    color: b.K.Base,
                    type: b._49.H5,
                    ellipsis: !0
                }, Object(l.d)("{start} - {end, time, short}", {
                    start: Object(l.c)(t.interval.start, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    end: t.interval.end
                }, "ChannelAnalyticsStreamCard")), i.createElement(b.Q, {
                    color: b.K.Alt2,
                    type: b._49.Span,
                    ellipsis: !0
                }, t.startChannelStatus)))), i.createElement(b._8, {
                    display: b.R.Flex,
                    flexGrow: 1,
                    justifyContent: b._7.End,
                    padding: {
                        left: 2
                    }
                }, i.createElement(b.Q, {
                    bold: !0,
                    fontSize: b.V.Size5,
                    color: b.K.Alt,
                    type: b._49.Span
                }, Object(l.d)("{statNum, number}", {
                    statNum: function(e) {
                        if (e < 10) return Math.floor(10 * e) / 10;
                        return Math.floor(e)
                    }(a)
                }, "ChannelAnalyticsStreamCard")))))))
            };

        function Fe() {
            P({
                action: T.TopStreamsStream
            })
        }
        var Re, We = 5;
        ! function(e) {
            e.AvgViewers = "avg_viewers", e.NewFollowers = "new_followers", e.NewSubscribers = "new_subscribers"
        }(Re || (Re = {}));
        var Ie, ze = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.sortDropdown = function() {
                    return i.createElement(b._30, {
                        value: a.state.sortType,
                        onChange: a.handleSortTypeChange
                    }, i.createElement("option", {
                        value: Re.AvgViewers
                    }, Object(l.d)("Average Viewers", "ChannelAnalyticsTopStreamsPanel")), i.createElement("option", {
                        value: Re.NewFollowers
                    }, Object(l.d)("New Followers", "ChannelAnalyticsTopStreamsPanel")), i.createElement("option", {
                        value: Re.NewSubscribers
                    }, Object(l.d)("New Subscriptions", "ChannelAnalyticsTopStreamsPanel")))
                }, a.streamsList = function() {
                    return i.createElement(b._8, null, a.sortedStreamSummaries().slice(0, We).map(function(e, t) {
                        return i.createElement(Ee, {
                            stream: e,
                            statNum: a.statNumForStreamSummary(e),
                            key: t
                        })
                    }))
                }, a.handleSortTypeChange = function(e) {
                    var t = e.target.value;
                    switch (t) {
                        case Re.NewFollowers:
                            P({
                                action: T.TopStreamsSelectNewFollowers
                            });
                            break;
                        case Re.AvgViewers:
                            P({
                                action: T.TopStreamsSelectAvgViewers
                            });
                            break;
                        case Re.NewSubscribers:
                            P({
                                action: T.TopStreamsSelectNewSubscribers
                            })
                    }
                    a.setState({
                        sortType: t
                    })
                }, a.statNumForStreamSummary = function(e) {
                    switch (a.state.sortType) {
                        case Re.NewFollowers:
                            return e.followersChange;
                        case Re.NewSubscribers:
                            return e.subscriptionsNew;
                        case Re.AvgViewers:
                        default:
                            return e.avgViewerCount
                    }
                }, a.sortedStreamSummaries = function() {
                    var e = a.props.streamSessions.sessions.slice();
                    switch (a.state.sortType) {
                        case Re.NewFollowers:
                            return Object(k.d)(e, [function(e) {
                                return e.followersChange
                            }], [k.a.Descending]);
                        case Re.NewSubscribers:
                            return Object(k.d)(e, [function(e) {
                                return e.subscriptionsNew
                            }], [k.a.Descending]);
                        case Re.AvgViewers:
                        default:
                            return Object(k.d)(e, [function(e) {
                                return e.avgViewerCount
                            }], [k.a.Descending])
                    }
                }, a.state = {
                    sortType: Re.AvgViewers
                }, a
            }
            return r.__extends(t, e), t.prototype.render = function() {
                if (this.props.streamSessions.isLoading) return i.createElement(b._8, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, i.createElement(b._14, {
                    height: 448
                }));
                var e = i.createElement(z.a, null);
                return this.props.streamSessions.sessions.length >= 3 && (e = i.createElement(i.Fragment, null, i.createElement(b._8, {
                    padding: {
                        x: 2,
                        top: 2
                    },
                    margin: {
                        bottom: .5
                    },
                    display: b.R.Flex
                }, i.createElement(b._8, {
                    flexGrow: 1
                }, i.createElement(b.Q, {
                    type: b._49.H5,
                    bold: !0
                }, Object(l.d)("Top {limit}", {
                    limit: We
                }, "ChannelAnalyticsTopStreamsPanel"))), i.createElement(b._8, null, this.sortDropdown())), i.createElement(b._8, {
                    padding: {
                        top: 1,
                        bottom: 1
                    }
                }, this.streamsList()))), i.createElement(N.a, {
                    title: Object(l.d)("What were my top streams?", "ChannelAnalyticsTopStreamsPanel")
                }, e)
            }, t
        }(i.Component);
        ! function(e) {
            e.Pageview = "pageview", e.DateSelect = "date_select", e.DateAggregationSelect = "date_aggregation_select", e.TabSelect = "tab_select", e.TabDropdownSelect = "tab_dropdown_select"
        }(Ie || (Ie = {}));
        var Ne = {
                tab_ad_breaks: !1,
                tab_avg_chat_messages: !1,
                tab_avg_chatters: !1,
                tab_avg_unique_viewers: !1,
                tab_avg_viewers: !1,
                tab_clip_views: !1,
                tab_clips_created: !1,
                tab_live_views: !1,
                tab_max_viewers: !1,
                tab_minutes_watched: !1,
                tab_new_followers: !1,
                tab_revenue: !1,
                tab_subscriptions: !1,
                tab_time_streamed: !1
            },
            Ve = function(e) {
                return "tab_" + e.replace(/-/g, "_")
            },
            Be = function(e) {
                return function(e) {
                    return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
                }(e).getTime() / 1e3
            };
        var Je = a("pK/l"),
            Ue = a("WmaG"),
            Ge = a("5rtz"),
            qe = a("06ME"),
            Ke = (a("T0UN"), function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    a.track = function(e) {
                        var t, n = a.props.urlStore,
                            i = r.__assign({
                                dateRangeSelection: a.dateRangeSelection,
                                selectedStats: a.statsStorage.getValidStoredStats()
                            }, n.params);
                        t = function(e, t) {
                            var a = t.selectedStats,
                                n = a[t.topStatsIndex],
                                i = {};
                            return a.forEach(function(e) {
                                i[Ve(e)] = !0
                            }), r.__assign({
                                action: e,
                                chart: n,
                                date_range_selection: t.dateRangeSelection,
                                date_start: Be(t.start),
                                date_end: Be(t.end),
                                date_aggregation: t.topStatsAggregation
                            }, Ne, i)
                        }(e, i), l.n.track(h.SpadeEventType.ChannelAnalyticsTopStatsView, t)
                    }, a.handleSelectStat = function(e, t, n) {
                        a.props.urlStore.replace({
                            topStatsIndex: t
                        }), a.track(Ie.TabDropdownSelect)
                    }, a.handleDateSelect = function(e) {
                        var t = e.start,
                            n = e.end,
                            r = e.id;
                        a.dateRangeSelection = r, a.props.urlStore.replace({
                            start: t,
                            end: n
                        }), a.track(Ie.DateSelect)
                    }, a.handleAggregationSelect = function(e) {
                        a.props.urlStore.replace({
                            topStatsAggregation: e
                        }), a.track(Ie.DateAggregationSelect)
                    }, a.handleTabSelect = function(e) {
                        a.track(Ie.TabSelect)
                    };
                    var i = a.props.channel;
                    return a.statsStorage = new Te(i), a.dateRangeSelection = n.Default, a
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.track(Ie.Pageview), l.l.set(qe.a, !0)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        a = t.urlStore,
                        n = t.channelAnalyticsResponse,
                        r = t.channel;
                    return i.createElement(Je.a, null, i.createElement(I, {
                        urlStore: a,
                        onDateSelect: this.handleDateSelect
                    }), i.createElement(He, {
                        channel: r,
                        urlStore: a,
                        analyticsResponse: n,
                        onStatsSelect: this.handleSelectStat,
                        onAggregationSelect: this.handleAggregationSelect,
                        onTabSelect: this.handleTabSelect
                    }), i.createElement(b._35, {
                        className: "channel-analytics-index-page",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        flexWrap: b.U.NoWrap,
                        alignItems: b.c.Stretch,
                        breakpointMedium: {
                            flexDirection: b.T.Row
                        }
                    }, i.createElement(b._8, {
                        className: "channel-analytics-index-page__col",
                        display: b.R.Flex,
                        flexGrow: 1,
                        flexWrap: b.U.NoWrap,
                        flexDirection: b.T.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, i.createElement(Q, {
                        channel: r,
                        revenue: n.revenue,
                        subCounts: n.subCounts
                    }), i.createElement(u.d, null, function(t) {
                        var a = t.location;
                        return i.createElement(Ge.a, {
                            streamSummaries: n.streamSessions.sessions,
                            isLoading: n.streamSessions.isLoading,
                            onViewDetails: Xe,
                            linkToDetails: {
                                pathname: "/" + e.props.channel.name + "/dashboard/channel-analytics/referrals",
                                search: a.search,
                                state: {
                                    content: h.PageviewContent.ReferralsDetails,
                                    medium: h.PageviewMedium.ChannelAnalytics
                                }
                            }
                        })
                    })), i.createElement(b._8, {
                        className: "channel-analytics-index-page__col",
                        display: b.R.Flex,
                        flexGrow: 1,
                        flexWrap: b.U.NoWrap,
                        flexDirection: b.T.Column,
                        padding: {
                            left: 1,
                            right: 1
                        }
                    }, i.createElement(me, {
                        channel: r
                    }), i.createElement(ze, {
                        streamSessions: n.streamSessions
                    }), i.createElement(ye, {
                        channel: r.name,
                        topClips: n.topClips
                    }))), i.createElement(Ue.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2927997",
                        page: "channel-analytics"
                    }))
                }, t
            }(i.Component)),
            Qe = Object(o.d)(Object(_.d)("ChannelAnalyticsIndexPage", {
                destination: m.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(c.a)({
                location: h.PageviewLocation.DashboardChannelAnalytics
            }))(Ke);

        function Xe() {
            P({
                action: T.ViewDetailsReferrers
            })
        }
        var Ze = a("Cd7A"),
            $e = (a("lV23"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDateSelect = function(e) {
                        var a = e.start,
                            n = e.end;
                        t.setState({
                            startDate: a,
                            endDate: n
                        }, function() {
                            t.props.urlStore.replace({
                                start: a,
                                end: n
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.channelAnalyticsResponse.streamSessions,
                        a = t.isLoading,
                        n = t.sessions;
                    return i.createElement(Je.a, null, i.createElement(b._35, {
                        elevation: 1,
                        background: b.n.Base,
                        display: b.R.Flex,
                        position: b._15.Relative,
                        flexDirection: b.T.Row,
                        flexWrap: b.U.NoWrap,
                        className: "referrals-page-nav-bar",
                        borderBottom: !0
                    }, i.createElement(b._35, {
                        position: b._15.Absolute,
                        display: b.R.Flex,
                        flexDirection: b.T.Row,
                        attachTop: !0,
                        attachLeft: !0,
                        attachBottom: !0
                    }, i.createElement(s.c, null, function(t) {
                        var a = t.location;
                        return i.createElement(b.v, {
                            type: b.B.Text,
                            linkTo: {
                                pathname: "/" + e.props.channel.name + "/dashboard/channel-analytics",
                                search: a.search,
                                state: {
                                    content: h.PageviewContent.ReferralsBack,
                                    medium: h.PageviewMedium.ChannelAnalytics
                                }
                            }
                        }, i.createElement(b._8, {
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, i.createElement(b.Q, null, Object(l.d)("Back", "ChannelAnalyticsReferralPage"))))
                    })), i.createElement(b._35, {
                        display: b.R.Flex,
                        flexGrow: 1,
                        flexWrap: b.U.NoWrap,
                        justifyContent: b._7.Center,
                        alignItems: b.c.Center
                    }, i.createElement(b.Q, {
                        type: b._49.H2,
                        fontSize: b.V.Size4,
                        bold: !0
                    }, Object(l.d)("Views by Source", "ChannelAnalyticsReferralPage")))), i.createElement(I, {
                        urlStore: this.props.urlStore,
                        onDateSelect: this.handleDateSelect
                    }), i.createElement(Ze.a, {
                        isLoading: a,
                        streamSummaries: n
                    }), i.createElement(Ue.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2927997",
                        page: "channel-analytics"
                    }))
                }, t
            }(i.Component)),
            et = Object(o.d)(Object(_.d)("ChannelAnalyticsReferralsPage", {
                destination: m.a.ChannelDashboardChannelAnalyticsReferrals,
                autoReportInteractive: !0
            }), Object(c.a)({
                location: h.PageviewLocation.DashboardChannelAnalyticsReferrals
            }))($e),
            tt = a("kA6m"),
            at = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.location.pathname !== this.props.location.pathname || e.location.search !== this.props.location.search
                }, t.prototype.render = function() {
                    var e = new tt.URLStore(this.props.location, this.props.history, this.props.now);
                    return O(e.params, this.props.now) ? this.props.children(e) : (e.replace({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t
            }(i.Component),
            nt = a("HCOe"),
            rt = a("OAwv");

        function it(e, t) {
            return {
                start_date: e.toJSON(),
                end_date: t.toJSON()
            }
        }
        var st = a("+TF1"),
            ot = a("DNvj");
        var lt = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        },
                        revenue: {
                            streams: tt.RevenueStreams.buildEmpty(),
                            lookbackStreams: tt.RevenueStreams.buildEmpty(),
                            isLoading: !0
                        },
                        subCounts: {
                            streams: tt.SubCountStreams.buildEmpty(),
                            lookbackStreams: tt.SubCountStreams.buildEmpty(),
                            isLoading: !0
                        },
                        streamSessions: {
                            sessions: [],
                            lookbackSessions: [],
                            isLoading: !0
                        }
                    }, a
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions()
                }, t.prototype.componentDidUpdate = function(e) {
                    Object(M.f)(this.props.interval, e.interval) || (this.fetchTopClips(), this.fetchRevenues(), this.fetchSubCounts(), this.fetchStreamSessions())
                }, t.prototype.render = function() {
                    return this.props.channel ? this.props.children(this.state) : i.createElement("span", null)
                }, t.prototype.fetchStreamSessions = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, a, n, i, s = this;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        streamSessions: r.__assign({}, this.state.streamSessions, {
                                            isLoading: !0
                                        })
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, Object(st.b)(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = o.sent()).isError ? (this.setState({
                                        streamSessions: {
                                            isLoading: !1,
                                            sessions: [],
                                            lookbackSessions: []
                                        }
                                    }), [2]) : (a = function(e, t) {
                                        for (var a = [], n = [], r = 0, i = e; r < i.length; r++) {
                                            var s = i[r];
                                            t(s) ? a.push(s) : n.push(s)
                                        }
                                        return [a, n]
                                    }(t.streamSummaries, function(e) {
                                        return e.interval.start > s.props.lookbackInterval.end
                                    }), n = a[0], i = a[1], this.setState({
                                        streamSessions: {
                                            isLoading: !1,
                                            sessions: n,
                                            lookbackSessions: i
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.fetchTopClips = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(ot.a)(this.props.channel.name, this.props.interval)]) : [2];
                                case 1:
                                    return (e = t.sent()).isError ? [2] : (this.setState({
                                        topClips: {
                                            clips: e.topClips,
                                            isLoading: !1
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.fetchRevenues = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, a, n, i;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        revenue: {
                                            streams: tt.RevenueStreams.buildEmpty(),
                                            lookbackStreams: tt.RevenueStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, function(e, t) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            var a, n, i, s;
                                            return r.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === M.d.None ? [2, {
                                                            isError: !1,
                                                            streams: tt.EMPTY_REVENUE_RESPONSE
                                                        }] : (a = "/kraken/channels/" + e.id + "/dashboard/revenues", n = rt.stringify(r.__assign({}, it(t.start, Object(p.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), i = [a, n].join("?"), [4, Object(k.c)({
                                                            path: i
                                                        })]);
                                                    case 1:
                                                        return (s = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            streams: tt.EMPTY_REVENUE_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            streams: s.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = s.sent()).isError ? [2] : (a = tt.RevenueStreams.partitionFromPayload(t.streams, {
                                        splitAt: this.props.lookbackInterval.end,
                                        max: this.props.interval.end
                                    }), n = a[0], i = a[1], this.setState({
                                        revenue: {
                                            isLoading: !1,
                                            streams: n,
                                            lookbackStreams: i
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.fetchSubCounts = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, a, n, i;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        subCounts: {
                                            streams: tt.SubCountStreams.buildEmpty(),
                                            lookbackStreams: tt.SubCountStreams.buildEmpty(),
                                            isLoading: !0
                                        }
                                    }), e = {
                                        start: this.props.lookbackInterval.start,
                                        end: this.props.interval.end
                                    }, [4, function(e, t) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            var a, n, i, s;
                                            return r.__generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e.role === M.d.None ? [2, {
                                                            isError: !1,
                                                            subscriptions: tt.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : (a = "/kraken/channels/" + e.id + "/dashboard/sub_counts", n = rt.stringify(r.__assign({}, it(t.start, Object(p.addDays)(t.end, 1)), {
                                                            fraction: "day"
                                                        })), i = [a, n].join("?"), [4, Object(k.c)({
                                                            path: i
                                                        })]);
                                                    case 1:
                                                        return (s = o.sent()).isError() ? [2, {
                                                            isError: !0,
                                                            subscriptions: tt.EMPTY_SUB_COUNT_RESPONSE
                                                        }] : [2, {
                                                            isError: !1,
                                                            subscriptions: s.body
                                                        }]
                                                }
                                            })
                                        })
                                    }(this.props.channel, e)]) : [2];
                                case 1:
                                    return (t = s.sent()).isError ? [2] : (a = tt.SubCountStreams.partitionFromPayload(t.subscriptions, {
                                        splitAt: this.props.lookbackInterval.end,
                                        max: this.props.interval.end
                                    }), n = a[0], i = a[1], this.setState({
                                        subCounts: {
                                            isLoading: !1,
                                            streams: n,
                                            lookbackStreams: i
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(i.Component),
            dt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.o.setPageTitle(Object(l.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    var e = this,
                        t = M.c.fromChannelData(this.props.data);
                    return t ? i.createElement(at, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(a) {
                        return i.createElement(lt, {
                            interval: a.params,
                            lookbackInterval: Object(E.h)(a.params, -1),
                            channel: t
                        }, function(n) {
                            return i.createElement(i.Fragment, null, i.createElement(s.c, {
                                path: "/:channelName/dashboard/channel-analytics",
                                exact: !0,
                                render: ut.bind(e, t, a, n)
                            }), i.createElement(s.c, {
                                path: "/:channelName/dashboard/channel-analytics/referrals",
                                exact: !0,
                                render: ct.bind(e, t, a, n)
                            }))
                        })
                    }) : null
                }, t
            }(i.Component),
            ut = function(e, t, a) {
                return i.createElement(Qe, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: a
                })
            },
            ct = function(e, t, a) {
                return i.createElement(et, {
                    channel: e,
                    urlStore: t,
                    channelAnalyticsResponse: a
                })
            },
            mt = Object(o.d)(Object(d.a)(nt, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(dt);
        a.d(t, "ChannelAnalyticsPageComponent", function() {
            return dt
        }), a.d(t, "ChannelAnalyticsPageRoot", function() {
            return mt
        })
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
    fnik: function(e, t) {},
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
                        l = o && o.canvas,
                        d = l && l.height,
                        u = l && l.width;
                    i.id = r.uid(), i.ctx = o, i.canvas = l, i.config = a, i.width = u, i.height = d, i.aspectRatio = d ? u / d : null, i.options = a.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
                        get: function() {
                            return i.config.data
                        },
                        set: function(e) {
                            i.config.data = e
                        }
                    }), o && l ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
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
                        l = Math.max(0, Math.floor(s ? o / s : r.getMaximumHeight(i)));
                    if ((a.width !== o || a.height !== l) && (i.width = a.width = o, i.height = a.height = l, i.style.width = o + "px", i.style.height = l + "px", r.retinaScale(a, n.devicePixelRatio), !e)) {
                        var d = {
                            width: o,
                            height: l
                        };
                        t.notify(a, "resize", [d]), a.options.onResize && a.options.onResize(a, d), a.stop(), a.update(a.options.responsiveAnimationDuration)
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
                            l = e.scaleService.getScaleConstructor(o);
                        if (l) {
                            a(s.position) !== a(n.dposition) && (s.position = n.dposition);
                            var d = new l({
                                id: s.id,
                                options: s,
                                ctx: t.ctx,
                                chart: t
                            });
                            i[d.id] = d, d.mergeTicksOptions(), n.isDefault && (t.scale = d)
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
                            var l = e.controllers[s.type];
                            if (void 0 === l) throw new Error('"' + s.type + '" is not a chart type.');
                            s.controller = new l(t, i), n.push(s.controller)
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
                            l = function(e) {
                                t.notify(n, "afterRender"), r.callback(o && o.onComplete, [e], n)
                            };
                        if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                            var d = new e.Animation({
                                numSteps: (i || o.duration) / 16.66,
                                easing: a.easing || o.easing,
                                render: function(e, t) {
                                    var a = r.easing.effects[t.easing],
                                        n = t.currentStep,
                                        i = n / t.numSteps;
                                    e.draw(a(i), i, n)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: l
                            });
                            e.animationService.addAnimation(n, d, i, s)
                        } else n.draw(), l(new e.Animation({
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
                            l = o.left,
                            d = o.right,
                            u = o.top,
                            c = o.bottom,
                            m = t(e.boxes, "left"),
                            h = t(e.boxes, "right"),
                            _ = t(e.boxes, "top"),
                            p = t(e.boxes, "bottom"),
                            f = t(e.boxes, "chartArea");
                        a(m, !0), a(h, !1), a(_, !0), a(p, !1);
                        var g = r - l - d,
                            y = i - u - c,
                            M = y / 2,
                            b = (r - g / 2) / (m.length + h.length),
                            v = (i - M) / (_.length + p.length),
                            L = g,
                            k = y,
                            D = [];
                        n.each(m.concat(h, _, p), function(e) {
                            var t, a = e.isHorizontal();
                            a ? (t = e.update(e.fullWidth ? g : L, v), k -= t.height) : (t = e.update(b, M), L -= t.width), D.push({
                                horizontal: a,
                                minSize: t,
                                box: e
                            })
                        });
                        var Y = 0,
                            S = 0,
                            w = 0,
                            T = 0;
                        n.each(_.concat(p), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                Y = Math.max(Y, t.left), S = Math.max(S, t.right)
                            }
                        }), n.each(m.concat(h), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                w = Math.max(w, t.top), T = Math.max(T, t.bottom)
                            }
                        });
                        var x = l,
                            C = d,
                            j = u,
                            O = c;
                        n.each(m.concat(h), W), n.each(m, function(e) {
                            x += e.width
                        }), n.each(h, function(e) {
                            C += e.width
                        }), n.each(_.concat(p), W), n.each(_, function(e) {
                            j += e.height
                        }), n.each(p, function(e) {
                            O += e.height
                        }), n.each(m.concat(h), function(e) {
                            var t = n.findNextWhere(D, function(t) {
                                    return t.box === e
                                }),
                                a = {
                                    left: 0,
                                    right: 0,
                                    top: j,
                                    bottom: O
                                };
                            t && e.update(t.minSize.width, k, a)
                        }), x = l, C = d, j = u, O = c, n.each(m, function(e) {
                            x += e.width
                        }), n.each(h, function(e) {
                            C += e.width
                        }), n.each(_, function(e) {
                            j += e.height
                        }), n.each(p, function(e) {
                            O += e.height
                        });
                        var P = Math.max(Y - x, 0);
                        x += P, C += Math.max(S - C, 0);
                        var H = Math.max(w - j, 0);
                        j += H, O += Math.max(T - O, 0);
                        var A = i - j - O,
                            E = r - x - C;
                        E === L && A === k || (n.each(m, function(e) {
                            e.height = A
                        }), n.each(h, function(e) {
                            e.height = A
                        }), n.each(_, function(e) {
                            e.fullWidth || (e.width = E)
                        }), n.each(p, function(e) {
                            e.fullWidth || (e.width = E)
                        }), k = A, L = E);
                        var F = l + P,
                            R = u + H;
                        n.each(m.concat(_), I), F += L, R += k, n.each(h, I), n.each(p, I), e.chartArea = {
                            left: x,
                            top: j,
                            right: x + L,
                            bottom: j + k
                        }, n.each(f, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(L, k)
                        })
                    }

                    function W(e) {
                        var t = n.findNextWhere(D, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var a = {
                                    left: Math.max(x, Y),
                                    right: Math.max(C, S),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? g : L, y / 2, a)
                            } else e.update(t.minSize.width, k)
                    }

                    function I(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? l : x, e.right = e.fullWidth ? r - d : x + L, e.top = R, e.bottom = R + e.height, R = e.bottom) : (e.left = F, e.right = F + e.width, e.top = j, e.bottom = j + k, F = e.right)
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
    "i/9b": function(e, t) {},
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
    jUGK: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        }), a.d(t, "b", function() {
            return l
        });
        var n = a("TToO"),
            r = a("tiQ5"),
            i = a("yvDY"),
            s = a("KiQY"),
            o = {
                ads: [],
                bits: [],
                extensions: [],
                game_commerce: [],
                prime_subscriptions: [],
                twitch_subscriptions: []
            },
            l = function() {
                function e(e) {
                    var t = this,
                        a = e.twitchSubscriptionProducts.length ? e.twitchSubscriptionProducts : r.c;
                    this.ads = this.getTimeseriesWithTotal(e.ads), this.bits = this.getTimeseriesWithTotal(e.bits), this.extensions = this.getTimeseriesWithTotal(e.extensions), this.gameCommerce = this.getTimeseriesWithTotal(e.gameCommerce), this.primeSubscriptions = this.getTimeseriesWithTotal(e.primeSubscriptions), this.twitchSubscriptionProducts = a.map(function(e) {
                        return n.__assign({}, e, t.getTimeseriesWithTotal(e.timeseries))
                    }).sort(function(e, t) {
                        return e.defaultPrice - t.defaultPrice
                    });
                    var i = a.reduce(function(e, t) {
                        return e.concat(t.timeseries)
                    }, []);
                    this.twitchSubscriptions = this.getTimeseriesWithTotal(i)
                }
                return e.fromPayload = function(t) {
                    return new e(this.normalizePayload(t))
                }, e.partitionFromPayload = function(t, a) {
                    var n, r, s, o, l, d = this.normalizePayload(t),
                        u = {
                            ads: [],
                            bits: [],
                            extensions: [],
                            gameCommerce: [],
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        },
                        c = {
                            ads: [],
                            bits: [],
                            extensions: [],
                            gameCommerce: [],
                            primeSubscriptions: [],
                            twitchSubscriptionProducts: []
                        };
                    return n = Object(i.a)(d.ads, a), u.ads = n[0], c.ads = n[1], r = Object(i.a)(d.bits, a), u.bits = r[0], c.bits = r[1], s = Object(i.a)(d.extensions, a), u.extensions = s[0], c.extensions = s[1], o = Object(i.a)(d.gameCommerce, a), u.gameCommerce = o[0], c.gameCommerce = o[1], l = Object(i.a)(d.primeSubscriptions, a), u.primeSubscriptions = l[0], c.primeSubscriptions = l[1], d.twitchSubscriptionProducts.forEach(function(e) {
                        var t = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            n = {
                                defaultPrice: e.defaultPrice,
                                productID: e.productID,
                                timeseries: []
                            },
                            r = Object(i.a)(e.timeseries, a),
                            s = r[0],
                            o = r[1];
                        t.timeseries = s, n.timeseries = o, u.twitchSubscriptionProducts.push(t), c.twitchSubscriptionProducts.push(n)
                    }), [new e(u), new e(c)]
                }, e.buildEmpty = function() {
                    return new e({
                        ads: [],
                        bits: [],
                        extensions: [],
                        gameCommerce: [],
                        primeSubscriptions: [],
                        twitchSubscriptionProducts: []
                    })
                }, e.normalizePayload = function(e) {
                    var t = this;
                    return {
                        ads: this.normalizeTimeseries(e.ads),
                        bits: this.normalizeTimeseries(e.bits),
                        extensions: this.normalizeTimeseries(e.extensions),
                        gameCommerce: this.normalizeTimeseries(e.game_commerce),
                        primeSubscriptions: this.normalizeTimeseries(e.prime_subscriptions),
                        twitchSubscriptionProducts: e.twitch_subscriptions.map(function(e) {
                            return {
                                defaultPrice: e.default_price,
                                productID: e.product_id,
                                timeseries: t.normalizeTimeseries(e.revenue)
                            }
                        })
                    }
                }, e.normalizeTimeseries = function(e) {
                    return e.map(function(e) {
                        return {
                            amount: e.amount / 100,
                            date: Object(s.a)(e.timestamp)
                        }
                    })
                }, e.prototype.getTotalAmountAllStreams = function() {
                    return this.ads.total + this.bits.total + this.extensions.total + this.gameCommerce.total + this.primeSubscriptions.total + this.twitchSubscriptions.total
                }, e.prototype.getTimeseriesWithTotal = function(e) {
                    return {
                        timeseries: e,
                        total: Math.round(100 * e.reduce(function(e, t) {
                            return e + t.amount
                        }, 0)) / 100
                    }
                }, e
            }()
    },
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
                        a = e.direction,
                        n = e.size;
                    return r.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, r.createElement(i._35, {
                        display: i.R.Flex,
                        margin: {
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
                        size: n
                    }, r.createElement(i._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: i.r.Bottom,
                    size: i.s.Small
                }, t
            }(r.Component));
        a.d(t, "a", function() {
            return s
        })
    },
    jqvb: function(e, t, a) {
        "use strict";
        t.a = function(e, t, a) {
            if (Boolean(Intl && Intl.NumberFormat && Intl.NumberFormat.prototype.formatToParts)) {
                var r = n.o.intl.getLanguageCode() || "en",
                    i = Intl.NumberFormat(r, {
                        style: "currency",
                        currency: "USD"
                    });
                return i.formatToParts(e).map(t)
            }
            var s = Object(n.e)(e, {
                style: "currency",
                currency: "USD"
            });
            return [a(s)]
        };
        var n = a("6sO2")
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
    kA6m: function(e, t, a) {
        "use strict";
        var n = a("+ear");
        a.d(t, "URLStore", function() {
            return n.a
        });
        var r = a("jUGK");
        a.d(t, "EMPTY_REVENUE_RESPONSE", function() {
            return r.a
        }), a.d(t, "RevenueStreams", function() {
            return r.b
        });
        var i = a("WHrl");
        a.d(t, "EMPTY_SUB_COUNT_RESPONSE", function() {
            return i.a
        }), a.d(t, "SubCountStreams", function() {
            return i.b
        });
        var s = a("0NoZ");
        a.n(s)
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
                    l = i.getComputedStyle(s)[n],
                    d = a(o),
                    u = a(l),
                    c = Number.POSITIVE_INFINITY;
                return d || u ? Math.min(d ? t(o, e, r) : c, u ? t(l, s, r) : c) : "none"
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
                            var s, o, l, d = n[t].length;
                            for (a[t] || (a[t] = []), s = 0; s < d; ++s) l = n[t][s], o = i.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), s >= a[t].length && a[t].push({}), !a[t][s].type || l.type && l.type !== a[t][s].type ? i.merge(a[t][s], [e.scaleService.getScaleDefaults(o), l]) : i.merge(a[t][s], l)
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
                    l = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2)),
                    d = o / (o + l),
                    u = l / (o + l),
                    c = n * (d = isNaN(d) ? 0 : d),
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
                var t, a, n, r, s, o, l, d, u, c = (e || []).map(function(e) {
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
                for (t = 0; t < m - 1; ++t) n = c[t], r = c[t + 1], n.model.skip || r.model.skip || (i.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (s = n.mK / n.deltaK, o = r.mK / n.deltaK, (d = Math.pow(s, 2) + Math.pow(o, 2)) <= 9 || (l = 3 / Math.sqrt(d), n.mK = s * l * n.deltaK, r.mK = o * l * n.deltaK)));
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
                    l = r.touches;
                l && l.length > 0 ? (a = l[0].clientX, n = l[0].clientY) : (a = r.clientX, n = r.clientY);
                var d = parseFloat(i.getStyle(s, "padding-left")),
                    u = parseFloat(i.getStyle(s, "padding-top")),
                    c = parseFloat(i.getStyle(s, "padding-right")),
                    m = parseFloat(i.getStyle(s, "padding-bottom")),
                    h = o.right - o.left - d - c,
                    _ = o.bottom - o.top - u - m;
                return {
                    x: a = Math.round((a - o.left - d) / h * s.width / t.currentDevicePixelRatio),
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
                var l = s.length / 2;
                if (l > a.length) {
                    for (var d = 0; d < l; d++) delete r[s[d]];
                    s.splice(0, l)
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
                        l = i.isArray(a.text) ? a.text.length : 1,
                        d = i.options.toLineHeight(a.lineHeight, s),
                        u = r ? l * d + 2 * a.padding : 0;
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
                        var o, l, d, u = a(r.fontSize, s.defaultFontSize),
                            c = a(r.fontStyle, s.defaultFontStyle),
                            m = a(r.fontFamily, s.defaultFontFamily),
                            h = i.fontString(u, c, m),
                            _ = i.options.toLineHeight(r.lineHeight, u),
                            p = _ / 2 + r.padding,
                            f = 0,
                            g = e.top,
                            y = e.left,
                            M = e.bottom,
                            b = e.right;
                        t.fillStyle = a(r.fontColor, s.defaultFontColor), t.font = h, e.isHorizontal() ? (l = y + (b - y) / 2, d = g + p, o = b - y) : (l = "left" === r.position ? y + p : b - p, d = g + (M - g) / 2, o = M - g, f = Math.PI * ("left" === r.position ? -.5 : .5)), t.save(), t.translate(l, d), t.rotate(f), t.textAlign = "center", t.textBaseline = "middle";
                        var v = r.text;
                        if (i.isArray(v))
                            for (var L = 0, k = 0; k < v.length; ++k) t.fillText(v[k], 0, L, o), L += _;
                        else t.fillText(v, 0, 0, o);
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
    lV23: function(e, t) {},
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
                                l = o && o.custom || {},
                                d = i.valueAtIndexOrDefault,
                                u = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: l.backgroundColor ? l.backgroundColor : d(s.backgroundColor, n, u.backgroundColor),
                                strokeStyle: l.borderColor ? l.borderColor : d(s.borderColor, n, u.borderColor),
                                lineWidth: l.borderWidth ? l.borderWidth : d(s.borderWidth, n, u.borderWidth),
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
                        l = n.bottom - n.top - s.borderWidth,
                        d = Math.min(o, l),
                        u = {
                            x: 0,
                            y: 0
                        },
                        c = t.getMeta(),
                        m = r.cutoutPercentage,
                        h = r.circumference;
                    if (h < 2 * Math.PI) {
                        var _ = r.rotation % (2 * Math.PI),
                            p = (_ += 2 * Math.PI * (_ >= Math.PI ? -1 : _ < -Math.PI ? 1 : 0)) + h,
                            f = {
                                x: Math.cos(_),
                                y: Math.sin(_)
                            },
                            g = {
                                x: Math.cos(p),
                                y: Math.sin(p)
                            },
                            y = _ <= 0 && p >= 0 || _ <= 2 * Math.PI && 2 * Math.PI <= p,
                            M = _ <= .5 * Math.PI && .5 * Math.PI <= p || _ <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                            b = _ <= -Math.PI && -Math.PI <= p || _ <= Math.PI && Math.PI <= p,
                            v = _ <= .5 * -Math.PI && .5 * -Math.PI <= p || _ <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                            L = m / 100,
                            k = {
                                x: b ? -1 : Math.min(f.x * (f.x < 0 ? 1 : L), g.x * (g.x < 0 ? 1 : L)),
                                y: v ? -1 : Math.min(f.y * (f.y < 0 ? 1 : L), g.y * (g.y < 0 ? 1 : L))
                            },
                            D = {
                                x: y ? 1 : Math.max(f.x * (f.x > 0 ? 1 : L), g.x * (g.x > 0 ? 1 : L)),
                                y: M ? 1 : Math.max(f.y * (f.y > 0 ? 1 : L), g.y * (g.y > 0 ? 1 : L))
                            },
                            Y = {
                                width: .5 * (D.x - k.x),
                                height: .5 * (D.y - k.y)
                            };
                        d = Math.min(o / Y.width, l / Y.height), u = {
                            x: -.5 * (D.x + k.x),
                            y: -.5 * (D.y + k.y)
                        }
                    }
                    a.borderWidth = t.getMaxBorderWidth(c.data), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(m ? a.outerRadius / 100 * m : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, c.total = t.calculateTotal(), t.outerRadius = a.outerRadius - a.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - a.radiusLength, 0), i.each(c.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        r = n.chart,
                        s = r.chartArea,
                        o = r.options,
                        l = o.animation,
                        d = (s.left + s.right) / 2,
                        u = (s.top + s.bottom) / 2,
                        c = o.rotation,
                        m = o.rotation,
                        h = n.getDataset(),
                        _ = a && l.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(h.data[t]) * (o.circumference / (2 * Math.PI)),
                        p = a && l.animateScale ? 0 : n.innerRadius,
                        f = a && l.animateScale ? 0 : n.outerRadius,
                        g = i.valueAtIndexOrDefault;
                    i.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _model: {
                            x: d + r.offsetX,
                            y: u + r.offsetY,
                            startAngle: c,
                            endAngle: m,
                            circumference: _,
                            outerRadius: f,
                            innerRadius: p,
                            label: g(h.label, t, r.data.labels[t])
                        }
                    });
                    var y = e._model;
                    this.removeHoverStyle(e), a && l.animateRotate || (y.startAngle = 0 === t ? o.rotation : n.getMeta().data[t - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
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

            function l(e, t, a, n, r) {
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
                            d = Math.min(e.height / 2, e.width / 2),
                            u = {
                                r: e.width,
                                l: 0,
                                t: e.height,
                                b: 0
                            },
                            c = {};
                        e.ctx.font = i.font, e._pointLabelSizes = [];
                        var m, h, _, p = s(e);
                        for (t = 0; t < p; t++) {
                            n = e.getPointPosition(t, d), m = e.ctx, h = i.size, _ = e.pointLabels[t] || "", a = r.isArray(_) ? {
                                w: r.longestText(m, m.font, _),
                                h: _.length * h + 1.5 * (_.length - 1) * h
                            } : {
                                w: m.measureText(_).width,
                                h: h
                            }, e._pointLabelSizes[t] = a;
                            var f = e.getIndexAngle(t),
                                g = r.toDegrees(f) % 360,
                                y = l(g, n.x, a.w, 0, 180),
                                M = l(g, n.y, a.h, 90, 270);
                            y.start < u.l && (u.l = y.start, c.l = f), y.end > u.r && (u.r = y.end, c.r = f), M.start < u.t && (u.t = M.start, c.t = f), M.end > u.b && (u.b = M.end, c.b = f)
                        }
                        e.setReductions(d, u, c)
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
                        l = r.height - n - r.drawingArea;
                    r.xCenter = Math.round((s + i) / 2 + r.left), r.yCenter = Math.round((o + l) / 2 + r.top)
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
                        l = r.valueOrDefault;
                    if (a.display) {
                        var m = e.ctx,
                            h = this.getIndexAngle(0),
                            _ = l(i.fontSize, t.defaultFontSize),
                            p = l(i.fontStyle, t.defaultFontStyle),
                            f = l(i.fontFamily, t.defaultFontFamily),
                            g = r.fontString(_, p, f);
                        r.each(e.ticks, function(a, o) {
                            if (o > 0 || i.reverse) {
                                var d = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]);
                                if (n.display && 0 !== o && function(e, t, a, n) {
                                        var i = e.ctx;
                                        if (i.strokeStyle = r.valueAtIndexOrDefault(t.color, n - 1), i.lineWidth = r.valueAtIndexOrDefault(t.lineWidth, n - 1), e.options.gridLines.circular) i.beginPath(), i.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), i.closePath(), i.stroke();
                                        else {
                                            var o = s(e);
                                            if (0 === o) return;
                                            i.beginPath();
                                            var l = e.getPointPosition(0, a);
                                            i.moveTo(l.x, l.y);
                                            for (var d = 1; d < o; d++) l = e.getPointPosition(d, a), i.lineTo(l.x, l.y);
                                            i.closePath(), i.stroke()
                                        }
                                    }(e, n, d, o), i.display) {
                                    var u = l(i.fontColor, t.defaultFontColor);
                                    if (m.font = g, m.save(), m.translate(e.xCenter, e.yCenter), m.rotate(h), i.showLabelBackdrop) {
                                        var c = m.measureText(a).width;
                                        m.fillStyle = i.backdropColor, m.fillRect(-c / 2 - i.backdropPaddingX, -d - _ / 2 - i.backdropPaddingY, c + 2 * i.backdropPaddingX, _ + 2 * i.backdropPaddingY)
                                    }
                                    m.textAlign = "center", m.textBaseline = "middle", m.fillStyle = u, m.fillText(a, 0, -d), m.restore()
                                }
                            }
                        }), (a.angleLines.display || a.pointLabels.display) && function(e) {
                            var a = e.ctx,
                                n = r.valueOrDefault,
                                i = e.options,
                                l = i.angleLines,
                                m = i.pointLabels;
                            a.lineWidth = l.lineWidth, a.strokeStyle = l.color;
                            var h = e.getDistanceFromCenterForValue(i.ticks.reverse ? e.min : e.max),
                                _ = o(e);
                            a.textBaseline = "top";
                            for (var p = s(e) - 1; p >= 0; p--) {
                                if (l.display) {
                                    var f = e.getPointPosition(p, h);
                                    a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(f.x, f.y), a.stroke(), a.closePath()
                                }
                                if (m.display) {
                                    var g = e.getPointPosition(p, h + 5),
                                        y = n(m.fontColor, t.defaultFontColor);
                                    a.font = _.font, a.fillStyle = y;
                                    var M = e.getIndexAngle(p),
                                        b = r.toDegrees(M);
                                    a.textAlign = d(b), c(b, e._pointLabelSizes[p], g), u(a, e.pointLabels[p] || "", g, _.size)
                                }
                            }
                        }(e)
                    }
                }
            });
            e.scaleService.registerScaleType("radialLinear", h, a)
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
    tiQ5: function(e, t, a) {
        "use strict";
        var n = a("6sO2"),
            r = a("TToO"),
            i = a("GiK3"),
            s = a("FsFC"),
            o = a("vH/s"),
            l = a("WaEV"),
            d = a("Q65K"),
            u = a("Odds"),
            c = (a("i/9b"), u.M.HintedGrey8),
            m = [u.M.Purple8, u.M.PrimeBlue, u.M.Purple11, "#3dc6ae", u.M.Orange, "#69d420"],
            h = "rgba(0, 0, 0, 0)",
            _ = u.M.HintedGrey11,
            p = u.M.HintedGrey15,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        var a = {
                            type: "bar",
                            data: {
                                labels: t.props.labels,
                                datasets: t.datasetsWithColor()
                            },
                            options: {
                                scales: {
                                    xAxes: [{
                                        stacked: !0,
                                        ticks: {
                                            maxRotation: 0,
                                            minRotation: 0,
                                            maxTicksLimit: 4,
                                            fontColor: c,
                                            fontSize: 10,
                                            padding: 5,
                                            callback: t.formatXAxes
                                        },
                                        gridLines: {
                                            color: p,
                                            lineWidth: 1,
                                            drawBorder: !1,
                                            display: !1
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: !0,
                                        ticks: {
                                            min: 0,
                                            maxTicksLimit: 6,
                                            fontColor: c,
                                            fontSize: 10,
                                            padding: 5
                                        },
                                        gridLines: {
                                            borderDash: [5, 5],
                                            color: "rgba(150,150,150,0.2)",
                                            zeroLineColor: "rgba(150,150,150,0.2)",
                                            tickMarkLength: 5
                                        }
                                    }]
                                },
                                legend: {
                                    display: !0,
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 12,
                                        fontColor: c,
                                        padding: 15
                                    }
                                },
                                tooltips: {
                                    backgroundColor: "rgba(0,0,0,0.95)",
                                    intersect: !1,
                                    mode: "index",
                                    titleFontColor: p,
                                    bodyFontColor: _,
                                    titleFontSize: 15,
                                    xPadding: 15,
                                    yPadding: 12,
                                    cornerRadius: 3,
                                    displayColors: !0,
                                    multiKeyBackground: h,
                                    footerFontStyle: "normal",
                                    callbacks: {
                                        title: t.formatTooltipTitle,
                                        label: t.formatTooltipLabel,
                                        afterLabel: t.formatTooltipAfterLabel,
                                        labelColor: t.getLabelColor
                                    }
                                },
                                onClick: t.handleDatasetClick,
                                responsive: !0,
                                maintainAspectRatio: !1
                            }
                        };
                        t.myChart = new l(e, a)
                    }, t.formatXAxes = function(e) {
                        if (t.props.formatXAxis) return t.props.formatXAxis(e);
                        var a = Number(e);
                        return isNaN(a) ? e : Object(n.c)(new Date(Number(e)), {
                            month: "short",
                            day: "numeric"
                        })
                    }, t.handleDatasetClick = function(e, a) {
                        if (t.props.onDatasetClick) return t.props.onDatasetClick(e, a)
                    }, t.formatTooltipTitle = function(e) {
                        var a = e[0].index,
                            n = {
                                label: t.props.labels[a],
                                value: e.reduce(function(e, t) {
                                    return e + Number(t.yLabel)
                                }, 0),
                                index: a
                            };
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(n)
                    }, t.formatTooltipLabel = function(e, a) {
                        var r = e.index,
                            i = a.datasets[e.datasetIndex].label;
                        if (t.props.formatTooltipLabel) return t.props.formatTooltipLabel({
                            label: i,
                            value: Number(e.yLabel),
                            index: r
                        });
                        var s = Number(e.yLabel);
                        return isNaN(s) ? e.yLabel : Object(n.e)(Number(e.yLabel))
                    }, t.formatTooltipAfterLabel = function(e, a) {
                        if (t.props.formatTooltipAfterLabel) {
                            var n = e.index,
                                r = Number(a.labels[n]),
                                i = a.datasets[e.datasetIndex].label;
                            return t.props.formatTooltipAfterLabel({
                                label: i,
                                time: r,
                                value: Number(e.yLabel),
                                index: n
                            })
                        }
                    }, t.getLabelColor = function(e, t) {
                        return {
                            borderColor: h,
                            backgroundColor: t.data.datasets[e.datasetIndex].backgroundColor
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(u._8, {
                        className: "top-stats-chart",
                        position: u._15.Relative
                    }, i.createElement(d.a, {
                        onCanvasReady: this.handleCanvasReady
                    }))
                }, t.prototype.componentDidUpdate = function() {
                    this.myChart && (this.myChart.data.datasets = this.datasetsWithColor(), this.myChart.data.labels = this.props.labels, this.myChart.update())
                }, t.prototype.datasetsWithColor = function() {
                    return this.props.datasets.map(function(e, t) {
                        return {
                            label: e.label,
                            data: e.data,
                            backgroundColor: e.color || m[t % m.length],
                            borderWidth: 0
                        }
                    })
                }, t
            }(i.Component),
            g = (a("RpnM"), function() {
                return i.createElement(u._8, {
                    className: "top-stats-chart-loading",
                    flexGrow: 1,
                    flexShrink: 0,
                    justifyContent: u._7.Center,
                    fullWidth: !0
                }, i.createElement(u._10, {
                    fillContent: !0
                }))
            }),
            y = a("dPMn"),
            M = (a("Ukf0"), function() {
                return i.createElement(u._8, {
                    className: "top-stats-chart-no-data",
                    display: u.R.Flex
                }, i.createElement(y.a, null))
            }),
            b = a("u4Vk"),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleDatasetClick = function(e, a) {
                        if (t.props.aggregation.isByDay) {
                            var n = t.props.streamSessionsResponse.sessions[0].channel.name;
                            if (n && a && a.length > 0) {
                                var r = a[0],
                                    i = t.props.streamSessionsResponse.sessions[r._index];
                                window.open("/" + n + "/dashboard/stream-summary/" + i.id + "?tt_content=" + o.PageviewContent.TopStatsChart + "&tt_medium=" + o.PageviewMedium.ChannelAnalytics)
                            }
                        }
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.formatTooltipTitle) return t.props.formatTooltipTitle(e);
                        if (t.props.aggregation.isByDay) {
                            var a = new Date(Number(e.label)),
                                r = t.props.streamSessionsResponse.sessions[e.index],
                                i = Object(n.c)(a, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                s = Object(b.b)(r.interval);
                            return Object(n.d)("{date} – {shortDuration}", {
                                date: i,
                                shortDuration: s
                            }, "ChannelAnalyticsTopStatsChart")
                        }
                        return t.props.aggregation.formatDateFromLabel(e.label)
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.streamSessionsResponse !== e.streamSessionsResponse || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.streamSessionsResponse.isLoading) return i.createElement(g, null);
                    var t, a, n = this.props.streamSessionsResponse.sessions;
                    return n.length ? (this.props.aggregation.isByDay ? (t = n.map(function(e) {
                        return e.interval.start.getTime().toString()
                    }), a = this.props.datasetBuilders.map(function(e) {
                        return {
                            label: e.label,
                            data: n.map(e.getDataFromSession),
                            color: e.color
                        }
                    })) : (t = this.props.aggregation.datesAsLabels, a = this.props.datasetBuilders.map(function(t) {
                        return {
                            label: t.label,
                            data: t.aggregateDataFromSessions(e.props.streamSessionsResponse.sessions),
                            color: t.color
                        }
                    })), i.createElement(f, {
                        labels: t,
                        datasets: a,
                        formatTooltipLabel: this.props.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel,
                        onDatasetClick: this.handleDatasetClick
                    })) : i.createElement(M, null)
                }, t
            }(i.Component),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.commercialLengthTotal / 60
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.commercialLengthTotal / 60,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = 60 * e.value;
                        return Object(n.d)("{adTime} Ad Breaks", {
                            adTime: Object(s.b)(t, s.a.HumanizedShort)
                        }, "ChannelAnalyticsAdBreaks")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Ad Breaks", "ChannelAnalyticsAdBreaks"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var a = e.value;
                        return a = a < 10 ? Math.round(10 * a) / 10 : Math.round(a), t.props.aggregation.isByDay ? Object(n.d)("{total, plural, one {# Unique Viewer} other {# Unique Viewers}}", {
                            total: a
                        }, "ChannelAnalyticsAverageUniqueViewers") : Object(n.d)("{total, plural, one {# Average Unique Viewer} other {# Average Unique Viewers}}", {
                            total: a
                        }, "ChannelAnalyticsAverageUniqueViewers")
                    }, t.getDataFromSession = function(e) {
                        return e.uniqueViewers
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.average(e, function(e) {
                            return {
                                value: e.uniqueViewers,
                                date: e.interval.start
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Average Unique Viewers", "ChannelAnalyticsAverageUniqueViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = e.value;
                        return t = t < 10 ? Math.round(10 * t) / 10 : Math.round(t), Object(n.d)("{total, plural, one {# Average Viewer} other {# Average Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsAvgViewers")
                    }, t.getDataFromSession = function(e) {
                        return e.avgViewerCount
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(b.a)(e.interval),
                                value: e.avgViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Average Viewers", "ChannelAnalyticsAvgViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.messagesTotal
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(b.a)(e.interval),
                                value: e.messagesTotal,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.round(e.value);
                        return Object(n.d)("{total, plural, one {# Message} other {# Messages}}", {
                            total: t
                        }, "ChannelAnalyticsChatMessages")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Average Chat Messages", "ChannelAnalyticsChatMessages"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.uniqueChatters
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.weightedAverage(e, function(e) {
                            return {
                                weight: Object(b.a)(e.interval),
                                value: e.uniqueChatters,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.round(e.value);
                        return Object(n.d)("{total, plural, one {# Chatter} other {# Chatters}}", {
                            total: t
                        }, "ChannelAnalyticsTopStatsChatters")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Average Chatters", "ChannelAnalyticsTopStatsChatters"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return Object(n.d)("{views,number} {label}", {
                            views: e.value,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var a;
                        if (t.props.aggregation.isByDay) {
                            var r = new Date(Number(e.label)),
                                i = Object(n.c)(r, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric"
                                }),
                                s = t.props.analyticsResponse.streamSessions.sessions[e.index],
                                o = Object(b.b)(s.interval);
                            a = Object(n.d)("{date} - {shortDuration}", {
                                date: i,
                                shortDuration: o
                            }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                        } else a = t.props.aggregation.formatDateFromLabel(e.label);
                        return Object(n.d)("{total,number} {date}", {
                            date: a,
                            total: e.value
                        }, "ChannelAnalyticsTopStatsClipViewsTooltip")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Twitch", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitch"),
                            aggregateDataFromSessions: this.aggregateData("twitch"),
                            color: "#7752ba"
                        }, {
                            label: Object(n.d)("Reddit", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("reddit"),
                            aggregateDataFromSessions: this.aggregateData("reddit"),
                            color: "#ff5700"
                        }, {
                            label: Object(n.d)("Facebook", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("facebook"),
                            aggregateDataFromSessions: this.aggregateData("facebook"),
                            color: "#3b5998"
                        }, {
                            label: Object(n.d)("Twitter", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("twitter"),
                            aggregateDataFromSessions: this.aggregateData("twitter"),
                            color: "#00aced"
                        }, {
                            label: Object(n.d)("Other", "ChannelAnalyticsTopStatsClipViews"),
                            getDataFromSession: this.getDataFromSession("other"),
                            aggregateDataFromSessions: this.aggregateData("other"),
                            color: "#bdc3c7"
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle
                    })
                }, t.prototype.getDataFromSession = function(e) {
                    return function(t) {
                        return t.clipPlaysBreakdown[e]
                    }
                }, t.prototype.aggregateData = function(e) {
                    var t = this;
                    return function(a) {
                        return t.props.aggregation.sum(a, function(t) {
                            return {
                                value: t.clipPlaysBreakdown[e],
                                date: t.interval.start
                            }
                        })
                    }
                }, t
            }(i.Component),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.clipCreatesTotal
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.clipCreatesTotal,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(n.d)("{total, plural, one {# Clip Created} other {# Clips Created}}", {
                            total: t
                        }, "ChannelAnalyticsClipsCreated")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Clips Created", "ChannelAnalyticsClipsCreated"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.totalViewers
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.totalViewers,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(n.d)("{total, plural, one {# Live View} other {# Live Views}}", {
                            total: t
                        }, "ChannelAnalyticsLiveViews")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Live Views", "ChannelAnalyticsLiveViews"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.maxViewerCount
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.max(e, function(e) {
                            return {
                                value: e.maxViewerCount,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(n.d)("{total, plural, one {# Max Viewer} other {# Max Viewers}}", {
                            total: t
                        }, "ChannelAnalyticsMaxViewers")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Max Viewers", "ChannelAnalyticsMaxViewers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.totalMinutesWatched
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.totalMinutesWatched,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(n.d)("{total, plural, one {# Minute Watched} other {# Minutes Watched}}", {
                            total: t
                        }, "ChannelAnalyticsMinutesWatched")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("Minutes Watched", "ChannelAnalyticsMinutesWatched"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return e.followersChange
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: e.followersChange,
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        return Object(n.d)("{total, plural, one {# New Follower} other {# New Followers}}", {
                            total: e.value
                        }, "ChannelAnalyticsTopStatsNewFollowers")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        datasetBuilders: [{
                            label: Object(n.d)("New Followers", "ChannelAnalyticsTopStatsNewFollowers"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }],
                        formatTooltipLabel: this.formatTooltipLabel
                    })
                }, t
            }(i.Component),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        var t = e.value <= 10 && 0 !== e.value ? 2 : 0,
                            a = Object(n.e)(e.value, {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: t,
                                minimumFractionDigits: t
                            });
                        return Object(n.d)("{currency} {label}", {
                            currency: a,
                            label: e.label
                        }, "ChannelAnalyticsTopStatsRevenueTooltip")
                    }, t.formatTooltipTitle = function(e) {
                        var a = e.value <= 10 && 0 !== e.value ? 2 : 0,
                            r = Object(n.e)(e.value, {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: a,
                                minimumFractionDigits: a
                            });
                        return Object(n.d)("{currency} {label}", {
                            currency: r,
                            label: t.props.aggregation.formatDateFromLabel(e.label)
                        }, "ChannelAnalyticsTopStatsRevenueTitle")
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.revenue !== e.analyticsResponse.revenue || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.revenue.isLoading) return i.createElement(g, null);
                    var e = this.props.analyticsResponse.revenue.streams;
                    return e.getTotalAmountAllStreams() ? i.createElement(f, {
                        labels: this.props.aggregation.datesAsLabels,
                        datasets: [{
                            label: Object(n.d)("Paid subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Ads", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.ads.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Bits", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.bits.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Game Sales", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.gameCommerce.timeseries, this.getAggregationData)
                        }, {
                            label: Object(n.d)("Extensions", "ChannelAnalyticsTopStatsRevenue"),
                            data: this.props.aggregation.sum(e.extensions.timeseries, this.getAggregationData)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatXAxis: this.props.aggregation.formatShortDateFromLabel
                    }) : i.createElement(M, null)
                }, t.prototype.getAggregationData = function(e) {
                    return {
                        value: e.amount,
                        date: e.date
                    }
                }, t
            }(i.Component),
            H = a("dNsn"),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.formatTooltipLabel = function(e) {
                        return e.label === t.paidSubMessage ? Object(n.d)("{numOfSubs, plural, one {# Paid sub} other {# Paid subs}}", {
                            numOfSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions") : Object(n.d)("{numOfSubs, plural, one {# Twitch Prime sub} other {# Twitch Prime subs}}", {
                            numOfSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipTitle = function(e) {
                        var a = t.props.aggregation.formatDate(new Date(Number(e.label)));
                        return Object(n.d)("{totalSubs, plural, one {{date} – # Sub} other {{date} – # Subs}}", {
                            date: a,
                            totalSubs: e.value
                        }, "ChannelAnalyticsTopStatsSubscriptions")
                    }, t.formatTooltipAfterLabel = function(e) {
                        if (e.label === t.paidSubMessage && e.value && e.time) {
                            var a = {};
                            return t.props.analyticsResponse.subCounts.streams.twitchSubscriptions.timeseries.forEach(function(n) {
                                if (t.props.aggregation.startOf(n.date).getTime() === e.time) {
                                    var r = n.product.defaultPrice;
                                    void 0 === a[r] && (a[r] = 0), a[r] += n.count
                                }
                            }), Object.keys(a).map(function(e) {
                                return Object(H.a)(Number(e), a[e])
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.analyticsResponse.subCounts !== e.analyticsResponse.subCounts || !this.props.aggregation.isEqual(e.aggregation)
                }, t.prototype.render = function() {
                    if (this.props.analyticsResponse.subCounts.isLoading) return i.createElement(g, null);
                    var e = this.props.analyticsResponse.subCounts.streams;
                    return e.getTotalSubCount() ? i.createElement(f, {
                        labels: this.props.aggregation.dates.map(function(e) {
                            return e.getTime().toString()
                        }),
                        datasets: [{
                            label: this.paidSubMessage,
                            data: this.props.aggregation.sum(e.twitchSubscriptions.timeseries, this.getAggregationData)
                        }, {
                            label: this.twitchSubMessage,
                            data: this.props.aggregation.sum(e.primeSubscriptions.timeseries, this.getAggregationData)
                        }],
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        formatTooltipAfterLabel: this.formatTooltipAfterLabel
                    }) : i.createElement(M, null)
                }, Object.defineProperty(t.prototype, "paidSubMessage", {
                    get: function() {
                        return Object(n.d)("Paid subs", "ChannelAnalyticsTopStatsSubscriptions")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "twitchSubMessage", {
                    get: function() {
                        return Object(n.d)("Twitch Prime subs", "ChannelAnalyticsTopStatsSubscriptions")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getAggregationData = function(e) {
                    return {
                        value: e.count,
                        date: e.date
                    }
                }, t
            }(i.Component),
            E = a("yiqh"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDataFromSession = function(e) {
                        return Object(b.a)(e.interval)
                    }, t.aggregateData = function(e) {
                        return t.props.aggregation.sum(e, function(e) {
                            return {
                                value: Object(b.a)(e.interval),
                                date: e.interval.start
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        var t = Math.floor(e.value);
                        return Object(E.a)(t)
                    }, t.formatTooltipTitle = function(e) {
                        if (t.props.aggregation.isByDay) {
                            var a = new Date(Number(e.label));
                            return Object(n.c)(a, {
                                weekday: "short",
                                month: "short",
                                day: "numeric"
                            })
                        }
                        return t.props.aggregation.formatDateFromLabel(e.label)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, {
                        streamSessionsResponse: this.props.analyticsResponse.streamSessions,
                        aggregation: this.props.aggregation,
                        formatTooltipLabel: this.formatTooltipLabel,
                        formatTooltipTitle: this.formatTooltipTitle,
                        datasetBuilders: [{
                            label: Object(n.d)("Live Views", "ChannelAnalyticsTimeStreamed"),
                            getDataFromSession: this.getDataFromSession,
                            aggregateDataFromSessions: this.aggregateData
                        }]
                    })
                }, t
            }(i.Component),
            R = a("HW6M"),
            W = a("F8kA"),
            I = (a("fnik"), {
                "data-test-selector": "up-trend-indicator"
            }),
            z = {
                "data-test-selector": "down-trend-indicator"
            },
            N = {
                "data-test-selector": "tab-selector"
            },
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = R("top-stats-tab", {
                        "top-stats-tab--active": this.props.isActive
                    });
                    return i.createElement(u._8, r.__assign({
                        className: e,
                        display: u.R.Flex,
                        flexGrow: 1
                    }, N), i.createElement(u._2, {
                        flexGrow: 1,
                        flexDirection: u.T.Column,
                        textAlign: u._45.Center
                    }, i.createElement(W.a, {
                        onClick: this.props.onClick,
                        to: this.props.linkTo,
                        className: "top-stats-tab__link",
                        replace: !0
                    }, i.createElement(u._8, {
                        display: u.R.Flex,
                        flexGrow: 1,
                        flexDirection: u.T.Column,
                        padding: {
                            left: 3,
                            right: 1,
                            y: 1
                        },
                        ellipsis: !0
                    }, i.createElement(u.Q, {
                        className: "top-stats-tab__title",
                        type: u._49.H3
                    }, this.props.title, this.renderTrendIndicator()), i.createElement(u.Q, {
                        type: u._49.H6,
                        color: u.K.Alt2,
                        title: this.props.subtitle,
                        ellipsis: !0
                    }, this.props.subtitle)))), this.props.children)
                }, t.prototype.renderTrendIndicator = function() {
                    return this.props.trend ? this.props.trend > 0 ? i.createElement(u._8, {
                        display: u.R.Inline,
                        margin: {
                            left: .5
                        }
                    }, i.createElement(u._24, r.__assign({
                        asset: u._25.GlyphArrUp,
                        type: u._26.Success
                    }, I))) : this.props.trend < 0 ? i.createElement(u._8, {
                        display: u.R.Inline,
                        margin: {
                            left: .5
                        }
                    }, i.createElement(u._24, r.__assign({
                        asset: u._25.GlyphArrDown,
                        type: u._26.Warn
                    }, z))) : null : null
                }, t
            }(i.Component),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.adBreaks,
                        a = this.previousAdBreaks,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(s.b)(t, s.a.HumanizedShort), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Ad Breaks", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "adBreaks", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.commercialLengthTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousAdBreaks", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.commercialLengthTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        a = this.averageUniqueViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Average Unique Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageUniqueViewers = function(e) {
                    return 0 === e.length ? 0 : e.reduce(function(e, t) {
                        return e + t.uniqueViewers
                    }, 0) / e.length
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(n.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(n.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(i.Component);

        function U(e, t) {
            var a = 0,
                n = 0;
            return e.forEach(function(e) {
                var r = t(e);
                n += r.weight * r.value, a += r.weight
            }), 0 === a ? 0 : n / a
        }
        var G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageViewers(this.props.analyticsResponse.streamSessions.sessions || []),
                        a = this.averageViewers(this.props.analyticsResponse.streamSessions.lookbackSessions || []),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : this.formatTitle(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Average Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageViewers = function(e) {
                    return U(e, function(e) {
                        return {
                            weight: Object(b.a)(e.interval),
                            value: e.avgViewerCount
                        }
                    })
                }, t.prototype.formatTitle = function(e) {
                    return e < 10 ? Object(n.e)(e, {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }) : Object(n.e)(e, {
                        maximumFractionDigits: 0
                    })
                }, t
            }(i.Component),
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageMessages(this.props.analyticsResponse.streamSessions.sessions),
                        a = this.averageMessages(this.props.analyticsResponse.streamSessions.lookbackSessions),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(n.e)(t, {
                        maximumFractionDigits: 0
                    }), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Average Chat Messages", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageMessages = function(e) {
                    return U(e, function(e) {
                        return {
                            weight: Object(b.a)(e.interval),
                            value: e.messagesTotal
                        }
                    })
                }, t
            }(i.Component),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.sessions),
                        a = this.averageUniqueChatters(this.props.analyticsResponse.streamSessions.lookbackSessions),
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(n.e)(t, {
                        maximumFractionDigits: 0
                    }), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Average Chatters", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.averageUniqueChatters = function(e) {
                    return U(e, function(e) {
                        return {
                            weight: Object(b.a)(e.interval),
                            value: e.uniqueChatters
                        }
                    })
                }, t
            }(i.Component),
            Q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.previousTotalClipViews,
                        a = this.totalClipViews,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(n.e)(a, {
                        maximumFractionDigits: 0
                    }), i.createElement(V, {
                        title: e,
                        subtitle: Object(n.d)("Clip Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        trend: r.length ? Math.sign(a - t) : 0,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "totalClipViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.clipPlaysTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousTotalClipViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.clipPlaysTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.clipsCreated,
                        a = this.previousClipsCreated,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(n.e)(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Clips Created", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "clipsCreated", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.clipCreatesTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousClipsCreated", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.clipCreatesTotal
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.liveViews,
                        a = this.previousLiveViews,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(n.e)(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Live Views", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "liveViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.totalViewers
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousLiveViews", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.totalViewers
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.maxViewers,
                        a = this.previousMaxViewers,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(n.e)(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Max Viewers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "maxViewers", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e < t.maxViewerCount ? t.maxViewerCount : e
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousMaxViewers", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e < t.maxViewerCount ? t.maxViewerCount : e
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.minutesWatched,
                        a = this.previousMinutesWatched,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(n.e)(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Minutes Watched", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "minutesWatched", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.totalMinutesWatched
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousMinutesWatched", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.totalMinutesWatched
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.followersChange,
                        a = this.previousFollowersChange,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : function(e) {
                        if ("number" != typeof e) return "";
                        var t = e < 0 ? "-" : "+";
                        return Object(n.d)("{sign}{followersDiff, number}", {
                            followersDiff: Math.abs(e),
                            sign: t
                        }, "ChannelAnalyticsTopStats")
                    }(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("New Followers", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "followersChange", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + t.followersChange
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousFollowersChange", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + t.followersChange
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
        var ae, ne, re = a("jqvb"),
            ie = (a("w5Qh"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.analyticsResponse.revenue.lookbackStreams.getTotalAmountAllStreams(),
                        t = this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams();
                    return i.createElement(V, {
                        title: this.renderTitle(t),
                        trend: t ? Math.sign(t - e) : 0,
                        subtitle: Object(n.d)("Revenue", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t.prototype.renderTitle = function(e) {
                    return this.props.analyticsResponse.revenue.isLoading || !this.props.analyticsResponse.revenue.streams.getTotalAmountAllStreams() ? "—" : Object(re.a)(e, function(e, t) {
                        switch (e.type) {
                            case "currency":
                                return i.createElement(u.Q, {
                                    className: "top-stats-tab-revenue__currency",
                                    fontSize: u.V.Size5,
                                    type: u._49.Span,
                                    key: t
                                }, e.value);
                            case "fraction":
                            case "decimal":
                                return i.createElement(u.Q, {
                                    className: "top-stats-tab-revenue__fraction",
                                    fontSize: u.V.Size4,
                                    type: u._49.Span,
                                    key: t
                                }, e.value);
                            default:
                                return e.value
                        }
                    }, function(e) {
                        return e
                    })
                }, t
            }(i.Component)),
            se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.analyticsResponse.subCounts.streams.getTotalSubCount(),
                        a = this.props.analyticsResponse.subCounts.lookbackStreams.getTotalSubCount();
                    return e = this.props.analyticsResponse.subCounts.isLoading || !t ? "—" : Object(n.e)(t, {
                        maximumFractionDigits: 0
                    }), i.createElement(V, {
                        title: e,
                        trend: t ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Subscriptions", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, t
            }(i.Component),
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.timeStreamed,
                        a = this.previousTimeStreamed,
                        r = this.props.analyticsResponse.streamSessions.sessions;
                    return e = this.props.analyticsResponse.streamSessions.isLoading || !r.length ? "—" : Object(E.a)(t), i.createElement(V, {
                        title: e,
                        trend: r.length ? Math.sign(t - a) : 0,
                        subtitle: Object(n.d)("Time Streamed", "ChannelAnalyticsTopStats"),
                        linkTo: this.props.linkTo,
                        isActive: this.props.isActive,
                        onClick: this.props.onClick
                    }, this.props.children)
                }, Object.defineProperty(t.prototype, "timeStreamed", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.sessions || []).reduce(function(e, t) {
                            return e + Object(b.a)(t.interval)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "previousTimeStreamed", {
                    get: function() {
                        return (this.props.analyticsResponse.streamSessions.lookbackSessions || []).reduce(function(e, t) {
                            return e + Object(b.a)(t.interval)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
        ! function(e) {
            e.AdBreaks = "ad-breaks", e.AverageUniqueViewers = "avg-unique-viewers", e.AverageViewers = "avg-viewers", e.ChatMessages = "avg-chat-messages", e.Chatters = "avg-chatters", e.ClipsCreated = "clips-created", e.ClipViews = "clip-views", e.LiveViews = "live-views", e.MaxViewers = "max-viewers", e.MinutesWatched = "minutes-watched", e.NewFollowers = "new-followers", e.Revenue = "revenue", e.Subscriptions = "subscriptions", e.TimeStreamed = "time-streamed"
        }(ae || (ae = {})),
        function(e) {
            e[e.StreamSummaries = 0] = "StreamSummaries", e[e.Revenue = 1] = "Revenue"
        }(ne || (ne = {}));
        var le, de = ((le = {})[ae.AverageViewers] = {
                title: function() {
                    return Object(n.d)("Average Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: G,
                Chart: D,
                dataGroup: ne.StreamSummaries
            }, le[ae.LiveViews] = {
                title: function() {
                    return Object(n.d)("Live Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Z,
                Chart: x,
                dataGroup: ne.StreamSummaries
            }, le[ae.NewFollowers] = {
                title: function() {
                    return Object(n.d)("New Followers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: te,
                Chart: O,
                dataGroup: ne.StreamSummaries
            }, le[ae.Subscriptions] = {
                title: function() {
                    return Object(n.d)("Subscriptions", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: se,
                Chart: A,
                dataGroup: ne.Revenue
            }, le[ae.Revenue] = {
                title: function() {
                    return Object(n.d)("Revenue", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: ie,
                Chart: P,
                dataGroup: ne.Revenue
            }, le[ae.MinutesWatched] = {
                title: function() {
                    return Object(n.d)("Minutes Watched", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: ee,
                Chart: j,
                dataGroup: ne.StreamSummaries
            }, le[ae.TimeStreamed] = {
                title: function() {
                    return Object(n.d)("Time Streamed", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: oe,
                Chart: F,
                dataGroup: ne.StreamSummaries
            }, le[ae.MaxViewers] = {
                title: function() {
                    return Object(n.d)("Max Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: $,
                Chart: C,
                dataGroup: ne.StreamSummaries
            }, le[ae.AverageUniqueViewers] = {
                title: function() {
                    return Object(n.d)("Average Unique Viewers", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: J,
                Chart: k,
                dataGroup: ne.StreamSummaries
            }, le[ae.Chatters] = {
                title: function() {
                    return Object(n.d)("Average Chatters", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: K,
                Chart: S,
                dataGroup: ne.StreamSummaries
            }, le[ae.ChatMessages] = {
                title: function() {
                    return Object(n.d)("Average Chat Messages", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: q,
                Chart: Y,
                dataGroup: ne.StreamSummaries
            }, le[ae.ClipsCreated] = {
                title: function() {
                    return Object(n.d)("Clips Created", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: X,
                Chart: T,
                dataGroup: ne.StreamSummaries
            }, le[ae.ClipViews] = {
                title: function() {
                    return Object(n.d)("Clip Views", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: Q,
                Chart: w,
                dataGroup: ne.StreamSummaries
            }, le[ae.AdBreaks] = {
                title: function() {
                    return Object(n.d)("Ad Breaks", "ChannelAnalyticsTopStatsDropdown")
                },
                Tab: B,
                Chart: L,
                dataGroup: ne.StreamSummaries
            }, le),
            ue = [ae.AverageViewers, ae.LiveViews, ae.NewFollowers, ae.Subscriptions, ae.Revenue],
            ce = [ae.AverageViewers, ae.LiveViews, ae.NewFollowers, ae.ChatMessages, ae.MinutesWatched],
            me = [ae.AverageViewers, ae.LiveViews, ae.NewFollowers, ae.MinutesWatched, ae.TimeStreamed, ae.MaxViewers, ae.AverageUniqueViewers, ae.Chatters, ae.ChatMessages, ae.ClipsCreated, ae.ClipViews, ae.AdBreaks],
            he = [{
                defaultPrice: 499,
                productID: "",
                timeseries: []
            }, {
                defaultPrice: 999,
                productID: "",
                timeseries: []
            }, {
                defaultPrice: 2499,
                productID: "",
                timeseries: []
            }];
        a.d(t, !1, function() {
            return ae
        }), a.d(t, "b", function() {
            return ne
        }), a.d(t, "g", function() {
            return de
        }), a.d(t, "d", function() {
            return 5
        }), a.d(t, "a", function() {
            return ue
        }), a.d(t, "e", function() {
            return ce
        }), a.d(t, "f", function() {
            return me
        }), a.d(t, "c", function() {
            return he
        })
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
    w5Qh: function(e, t) {},
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
                    var i, s, o, l, d, u, c, m, h, _ = Object.keys(a);
                    for (i = 0, s = _.length; i < s; ++i)
                        if (u = a[o = _[i]], t.hasOwnProperty(o) || (t[o] = u), (l = t[o]) !== u && "_" !== o[0]) {
                            if (e.hasOwnProperty(o) || (e[o] = l), (c = typeof u) == typeof(d = e[o]))
                                if ("string" === c) {
                                    if ((m = n(d)).valid && (h = n(u)).valid) {
                                        t[o] = h.mix(m, r).rgbString();
                                        continue
                                    }
                                } else if ("number" === c && isFinite(d) && isFinite(u)) {
                                t[o] = d + (u - d) * r;
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
                            l = n[e][a(t)];
                        return 2 === o && (l = l[r ? 0 : 1]), l.replace(/%d/i, t)
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
    yvDY: function(e, t, a) {
        "use strict";
        t.a = function(e, t) {
            var a = [],
                n = [];
            return e.forEach(function(e) {
                e.date > t.splitAt ? e.date <= t.max && a.push(e) : n.push(e)
            }), [a, n]
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
    zjE0: function(e, t, a) {
        "use strict";
        var n = a("XU/q");
        a.d(t, "a", function() {
            return n.a
        })
    }
});
//# sourceMappingURL=pages.channel-analytics-fb5eaafa9ec7f9c2ca17fd4f302e854f.js.map