webpackJsonp([94], {
    "+27R": function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a, n) {
                var i = {
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
                return t ? i[a][0] : i[a][1]
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
                return t ? i(a)[0] : n ? i(a)[1] : i(a)[2]
            }

            function n(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function i(e) {
                return t[e].split("_")
            }

            function r(e, t, r, s) {
                var o = e + " ";
                return 1 === e ? o + a(0, t, r[0], s) : t ? o + (n(e) ? i(r)[1] : i(r)[0]) : s ? o + i(r)[1] : o + (n(e) ? i(r)[1] : i(r)[2])
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
                    mm: r,
                    h: a,
                    hh: r,
                    d: a,
                    dd: r,
                    M: a,
                    MM: r,
                    y: a,
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
        })(a("PJh5"))
    },
    "/Cz7": function(e, t, a) {
        "use strict";
        t.a = function(e, t) {
            var a = new URL("https://www.twitch.tv/collections/" + e);
            t && (a.search = i.stringify(t));
            return a.toString()
        }, t.b = function(e, t) {
            var a = new URL("https://www.twitch.tv/videos/" + e);
            t && (a.search = i.stringify(n.__assign({}, t, {
                t: "number" == typeof t.t ? Object(r.a)(t.t) : void 0
            })));
            return a.toString()
        };
        var n = a("TToO"),
            i = a("OAwv"),
            r = (a.n(i), a("Ryxq"))
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
            i = a("wGD1"),
            r = a("iO9N");
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
                    beforeTitle: r.noop,
                    title: function(e, t) {
                        var a = "",
                            n = t.labels,
                            i = n ? n.length : 0;
                        if (e.length > 0) {
                            var r = e[0];
                            r.xLabel ? a = r.xLabel : i > 0 && r.index < i && (a = n[r.index])
                        }
                        return a
                    },
                    afterTitle: r.noop,
                    beforeBody: r.noop,
                    beforeLabel: r.noop,
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
                    afterLabel: r.noop,
                    afterBody: r.noop,
                    beforeFooter: r.noop,
                    footer: r.noop,
                    afterFooter: r.noop
                }
            }
        }), e.exports = function(e) {
            function t(e, t) {
                var a = r.color(e);
                return a.alpha(t * a.alpha()).rgbaString()
            }

            function a(e, t) {
                return t && (r.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
            }

            function s(e) {
                var t = n.global,
                    a = r.valueOrDefault;
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
            e.Tooltip = i.extend({
                initialize: function() {
                    this._model = s(this._options), this._lastActive = []
                },
                getTitle: function() {
                    var e = this._options.callbacks,
                        t = e.beforeTitle.apply(this, arguments),
                        n = e.title.apply(this, arguments),
                        i = e.afterTitle.apply(this, arguments),
                        r = [];
                    return r = a(r = a(r = a(r, t), n), i)
                },
                getBeforeBody: function() {
                    var e = this._options.callbacks.beforeBody.apply(this, arguments);
                    return r.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getBody: function(e, t) {
                    var n = this,
                        i = n._options.callbacks,
                        s = [];
                    return r.each(e, function(e) {
                        var r = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        a(r.before, i.beforeLabel.call(n, e, t)), a(r.lines, i.label.call(n, e, t)), a(r.after, i.afterLabel.call(n, e, t)), s.push(r)
                    }), s
                },
                getAfterBody: function() {
                    var e = this._options.callbacks.afterBody.apply(this, arguments);
                    return r.isArray(e) ? e : void 0 !== e ? [e] : []
                },
                getFooter: function() {
                    var e = this._options.callbacks,
                        t = e.beforeFooter.apply(this, arguments),
                        n = e.footer.apply(this, arguments),
                        i = e.afterFooter.apply(this, arguments),
                        r = [];
                    return r = a(r = a(r = a(r, t), n), i)
                },
                update: function(t) {
                    var a, n, i, o, d, l, u, c = this,
                        m = c._options,
                        _ = c._model,
                        h = c._model = s(m),
                        f = c._active,
                        p = c._data,
                        y = {
                            xAlign: _.xAlign,
                            yAlign: _.yAlign
                        },
                        g = {
                            x: _.x,
                            y: _.y
                        },
                        M = {
                            width: _.width,
                            height: _.height
                        },
                        v = {
                            x: _.caretX,
                            y: _.caretY
                        };
                    if (f.length) {
                        h.opacity = 1;
                        var L = [],
                            b = [];
                        v = e.Tooltip.positioners[m.position].call(c, f, c._eventPosition);
                        var k = [];
                        for (a = 0, n = f.length; a < n; ++a) k.push((i = f[a], o = void 0, d = void 0, void 0, void 0, o = i._xScale, d = i._yScale || i._scale, l = i._index, u = i._datasetIndex, {
                            xLabel: o ? o.getLabelForIndex(l, u) : "",
                            yLabel: d ? d.getLabelForIndex(l, u) : "",
                            index: l,
                            datasetIndex: u,
                            x: i._model.x,
                            y: i._model.y
                        }));
                        m.filter && (k = k.filter(function(e) {
                            return m.filter(e, p)
                        })), m.itemSort && (k = k.sort(function(e, t) {
                            return m.itemSort(e, t, p)
                        })), r.each(k, function(e) {
                            L.push(m.callbacks.labelColor.call(c, e, c._chart)), b.push(m.callbacks.labelTextColor.call(c, e, c._chart))
                        }), h.title = c.getTitle(k, p), h.beforeBody = c.getBeforeBody(k, p), h.body = c.getBody(k, p), h.afterBody = c.getAfterBody(k, p), h.footer = c.getFooter(k, p), h.x = Math.round(v.x), h.y = Math.round(v.y), h.caretPadding = m.caretPadding, h.labelColors = L, h.labelTextColors = b, h.dataPoints = k, g = function(e, t, a) {
                            var n = e.x,
                                i = e.y,
                                r = e.caretSize,
                                s = e.caretPadding,
                                o = e.cornerRadius,
                                d = a.xAlign,
                                l = a.yAlign,
                                u = r + s,
                                c = o + s;
                            return "right" === d ? n -= t.width : "center" === d && (n -= t.width / 2), "top" === l ? i += u : i -= "bottom" === l ? t.height + u : t.height / 2, "center" === l ? "left" === d ? n += u : "right" === d && (n -= u) : "left" === d ? n -= c : "right" === d && (n += c), {
                                x: n,
                                y: i
                            }
                        }(h, M = function(e, t) {
                            var a = e._chart.ctx,
                                n = 2 * t.yPadding,
                                i = 0,
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
                            var _ = 0,
                                h = function(e) {
                                    i = Math.max(i, a.measureText(e).width + _)
                                };
                            return a.font = r.fontString(u, t._titleFontStyle, t._titleFontFamily), r.each(t.title, h), a.font = r.fontString(c, t._bodyFontStyle, t._bodyFontFamily), r.each(t.beforeBody.concat(t.afterBody), h), _ = t.displayColors ? c + 2 : 0, r.each(s, function(e) {
                                r.each(e.before, h), r.each(e.lines, h), r.each(e.after, h)
                            }), _ = 0, a.font = r.fontString(m, t._footerFontStyle, t._footerFontFamily), r.each(t.footer, h), {
                                width: i += 2 * t.xPadding,
                                height: n
                            }
                        }(this, h), y = function(e, t) {
                            var a, n, i, r, s, o = e._model,
                                d = e._chart,
                                l = e._chart.chartArea,
                                u = "center",
                                c = "center";
                            o.y < t.height ? c = "top" : o.y > d.height - t.height && (c = "bottom");
                            var m = (l.left + l.right) / 2,
                                _ = (l.top + l.bottom) / 2;
                            "center" === c ? (a = function(e) {
                                return e <= m
                            }, n = function(e) {
                                return e > m
                            }) : (a = function(e) {
                                return e <= t.width / 2
                            }, n = function(e) {
                                return e >= d.width - t.width / 2
                            }), i = function(e) {
                                return e + t.width > d.width
                            }, r = function(e) {
                                return e - t.width < 0
                            }, s = function(e) {
                                return e <= _ ? "top" : "bottom"
                            }, a(o.x) ? (u = "left", i(o.x) && (u = "center", c = s(o.y))) : n(o.x) && (u = "right", r(o.x) && (u = "center", c = s(o.y)));
                            var h = e._options;
                            return {
                                xAlign: h.xAlign ? h.xAlign : u,
                                yAlign: h.yAlign ? h.yAlign : c
                            }
                        }(this, M))
                    } else h.opacity = 0;
                    return h.xAlign = y.xAlign, h.yAlign = y.yAlign, h.x = g.x, h.y = g.y, h.width = M.width, h.height = M.height, h.caretX = v.x, h.caretY = v.y, c._model = h, t && m.custom && m.custom.call(c, h), c
                },
                drawCaret: function(e, t) {
                    var a = this._chart.ctx,
                        n = this._view,
                        i = this.getCaretPosition(e, t, n);
                    a.lineTo(i.x1, i.y1), a.lineTo(i.x2, i.y2), a.lineTo(i.x3, i.y3)
                },
                getCaretPosition: function(e, t, a) {
                    var n, i, r, s, o, d, l = a.caretSize,
                        u = a.cornerRadius,
                        c = a.xAlign,
                        m = a.yAlign,
                        _ = e.x,
                        h = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === m) o = h + p / 2, "left" === c ? (i = (n = _) - l, r = n, s = o + l, d = o - l) : (i = (n = _ + f) + l, r = n, s = o - l, d = o + l);
                    else if ("left" === c ? (n = (i = _ + u + l) - l, r = i + l) : "right" === c ? (n = (i = _ + f - u - l) - l, r = i + l) : (n = (i = _ + f / 2) - l, r = i + l), "top" === m) o = (s = h) - l, d = s;
                    else {
                        o = (s = h + p) + l, d = s;
                        var y = r;
                        r = n, n = y
                    }
                    return {
                        x1: n,
                        x2: i,
                        x3: r,
                        y1: s,
                        y2: o,
                        y3: d
                    }
                },
                drawTitle: function(e, a, n, i) {
                    var s = a.title;
                    if (s.length) {
                        n.textAlign = a._titleAlign, n.textBaseline = "top";
                        var o, d, l = a.titleFontSize,
                            u = a.titleSpacing;
                        for (n.fillStyle = t(a.titleFontColor, i), n.font = r.fontString(l, a._titleFontStyle, a._titleFontFamily), o = 0, d = s.length; o < d; ++o) n.fillText(s[o], e.x, e.y), e.y += l + u, o + 1 === s.length && (e.y += a.titleMarginBottom - u)
                    }
                },
                drawBody: function(e, a, n, i) {
                    var s = a.bodyFontSize,
                        o = a.bodySpacing,
                        d = a.body;
                    n.textAlign = a._bodyAlign, n.textBaseline = "top", n.font = r.fontString(s, a._bodyFontStyle, a._bodyFontFamily);
                    var l = 0,
                        u = function(t) {
                            n.fillText(t, e.x + l, e.y), e.y += s + o
                        };
                    n.fillStyle = t(a.bodyFontColor, i), r.each(a.beforeBody, u);
                    var c = a.displayColors;
                    l = c ? s + 2 : 0, r.each(d, function(o, d) {
                        var l = t(a.labelTextColors[d], i);
                        n.fillStyle = l, r.each(o.before, u), r.each(o.lines, function(r) {
                            c && (n.fillStyle = t(a.legendColorBackground, i), n.fillRect(e.x, e.y, s, s), n.lineWidth = 1, n.strokeStyle = t(a.labelColors[d].borderColor, i), n.strokeRect(e.x, e.y, s, s), n.fillStyle = t(a.labelColors[d].backgroundColor, i), n.fillRect(e.x + 1, e.y + 1, s - 2, s - 2), n.fillStyle = l), u(r)
                        }), r.each(o.after, u)
                    }), l = 0, r.each(a.afterBody, u), e.y -= o
                },
                drawFooter: function(e, a, n, i) {
                    var s = a.footer;
                    s.length && (e.y += a.footerMarginTop, n.textAlign = a._footerAlign, n.textBaseline = "top", n.fillStyle = t(a.footerFontColor, i), n.font = r.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily), r.each(s, function(t) {
                        n.fillText(t, e.x, e.y), e.y += a.footerFontSize + a.footerSpacing
                    }))
                },
                drawBackground: function(e, a, n, i, r) {
                    n.fillStyle = t(a.backgroundColor, r), n.strokeStyle = t(a.borderColor, r), n.lineWidth = a.borderWidth;
                    var s = a.xAlign,
                        o = a.yAlign,
                        d = e.x,
                        l = e.y,
                        u = i.width,
                        c = i.height,
                        m = a.cornerRadius;
                    n.beginPath(), n.moveTo(d + m, l), "top" === o && this.drawCaret(e, i), n.lineTo(d + u - m, l), n.quadraticCurveTo(d + u, l, d + u, l + m), "center" === o && "right" === s && this.drawCaret(e, i), n.lineTo(d + u, l + c - m), n.quadraticCurveTo(d + u, l + c, d + u - m, l + c), "bottom" === o && this.drawCaret(e, i), n.lineTo(d + m, l + c), n.quadraticCurveTo(d, l + c, d, l + c - m), "center" === o && "left" === s && this.drawCaret(e, i), n.lineTo(d, l + m), n.quadraticCurveTo(d, l, d + m, l), n.closePath(), n.fill(), a.borderWidth > 0 && n.stroke()
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
                            i = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                            r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                        this._options.enabled && r && (this.drawBackground(n, t, e, a, i), n.x += t.xPadding, n.y += t.yPadding, this.drawTitle(n, t, e, i), this.drawBody(n, t, e, i), this.drawFooter(n, t, e, i))
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        a = t._options,
                        n = !1;
                    if (t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : t._active = t._chart.getElementsAtEventForMode(e, a.mode, a), !(n = !r.arrayEquals(t._active, t._lastActive))) return !1;
                    if (t._lastActive = t._active, a.enabled || a.custom) {
                        t._eventPosition = {
                            x: e.x,
                            y: e.y
                        };
                        var i = t._model;
                        t.update(!0), t.pivot(), n |= i.x !== t._model.x || i.y !== t._model.y
                    }
                    return n
                }
            }), e.Tooltip.positioners = {
                average: function(e) {
                    if (!e.length) return !1;
                    var t, a, n = 0,
                        i = 0,
                        r = 0;
                    for (t = 0, a = e.length; t < a; ++t) {
                        var s = e[t];
                        if (s && s.hasValue()) {
                            var o = s.tooltipPosition();
                            n += o.x, i += o.y, ++r
                        }
                    }
                    return {
                        x: Math.round(n / r),
                        y: Math.round(i / r)
                    }
                },
                nearest: function(e, t) {
                    var a, n, i, s = t.x,
                        o = t.y,
                        d = Number.POSITIVE_INFINITY;
                    for (a = 0, n = e.length; a < n; ++a) {
                        var l = e[a];
                        if (l && l.hasValue()) {
                            var u = l.getCenterPoint(),
                                c = r.distanceBetweenPoints(t, u);
                            c < d && (d = c, i = l)
                        }
                    }
                    if (i) {
                        var m = i.tooltipPosition();
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
            i = a("L5rj"),
            r = a("iO9N");
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
                dataElementType: i.Point,
                update: function(e) {
                    var t = this,
                        a = t.getMeta().data;
                    r.each(a, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        i = n.getMeta(),
                        r = e.custom || {},
                        s = n.getScaleForId(i.xAxisID),
                        o = n.getScaleForId(i.yAxisID),
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
                        skip: r.skip || isNaN(c) || isNaN(m),
                        x: c,
                        y: m
                    }, e.pivot()
                },
                setHoverStyle: function(e) {
                    var t = e._model,
                        a = e._options;
                    t.backgroundColor = r.valueOrDefault(a.hoverBackgroundColor, r.getHoverColor(a.backgroundColor)), t.borderColor = r.valueOrDefault(a.hoverBorderColor, r.getHoverColor(a.borderColor)), t.borderWidth = r.valueOrDefault(a.hoverBorderWidth, a.borderWidth), t.radius = a.radius + a.hoverRadius
                },
                removeHoverStyle: function(e) {
                    var t = e._model,
                        a = e._options;
                    t.backgroundColor = a.backgroundColor, t.borderColor = a.borderColor, t.borderWidth = a.borderWidth, t.radius = a.radius
                },
                _resolveElementOptions: function(e, t) {
                    var a, n, i, s = this.chart,
                        o = s.data.datasets[this.index],
                        d = e.custom || {},
                        l = s.options.elements.point,
                        u = r.options.resolve,
                        c = o.data[t],
                        m = {},
                        _ = {
                            chart: s,
                            dataIndex: t,
                            dataset: o,
                            datasetIndex: this.index
                        },
                        h = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                    for (a = 0, n = h.length; a < n; ++a) m[i = h[a]] = u([d[i], o[i], l[i]], _, t);
                    return m.radius = u([d.radius, c ? c.r : void 0, o.radius, l.radius], _, t), m
                }
            })
        }
    },
    "1Nt4": function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            i = a("IbXy");
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: i.formatters.logarithmic
                    }
                },
                a = e.Scale.extend({
                    determineDataLimits: function() {
                        var e = this,
                            t = e.options,
                            a = t.ticks,
                            i = e.chart,
                            r = i.data.datasets,
                            s = n.valueOrDefault,
                            o = e.isHorizontal();

                        function d(t) {
                            return o ? t.xAxisID === e.id : t.yAxisID === e.id
                        }
                        e.min = null, e.max = null, e.minNotZero = null;
                        var l = t.stacked;
                        if (void 0 === l && n.each(r, function(e, t) {
                                if (!l) {
                                    var a = i.getDatasetMeta(t);
                                    i.isDatasetVisible(t) && d(a) && void 0 !== a.stack && (l = !0)
                                }
                            }), t.stacked || l) {
                            var u = {};
                            n.each(r, function(a, r) {
                                var s = i.getDatasetMeta(r),
                                    o = [s.type, void 0 === t.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                i.isDatasetVisible(r) && d(s) && (void 0 === u[o] && (u[o] = []), n.each(a.data, function(a, n) {
                                    var i = u[o],
                                        r = +e.getRightValue(a);
                                    isNaN(r) || s.data[n].hidden || (i[n] = i[n] || 0, t.relativePoints ? i[n] = 100 : i[n] += r)
                                }))
                            }), n.each(u, function(t) {
                                var a = n.min(t),
                                    i = n.max(t);
                                e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? i : Math.max(e.max, i)
                            })
                        } else n.each(r, function(t, a) {
                            var r = i.getDatasetMeta(a);
                            i.isDatasetVisible(a) && d(r) && n.each(t.data, function(t, a) {
                                var n = +e.getRightValue(t);
                                isNaN(n) || r.data[a].hidden || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n), 0 !== n && (null === e.minNotZero || n < e.minNotZero) && (e.minNotZero = n))
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
                            r = e.ticks = i.generators.logarithmic(a, e);
                        e.isHorizontal() || r.reverse(), e.max = n.max(r), e.min = n.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
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
                        var t, a, i, r = this,
                            s = r.start,
                            o = +r.getRightValue(e),
                            d = r.options.ticks;
                        return r.isHorizontal() ? (i = n.log10(r.end) - n.log10(s), 0 === o ? a = r.left : (t = r.width, a = r.left + t / i * (n.log10(o) - n.log10(s)))) : (t = r.height, 0 !== s || d.reverse ? 0 === r.end && d.reverse ? (i = n.log10(r.start) - n.log10(r.minNotZero), a = o === r.end ? r.top : o === r.minNotZero ? r.top + .02 * t : r.top + .02 * t + .98 * t / i * (n.log10(o) - n.log10(r.minNotZero))) : 0 === o ? a = d.reverse ? r.top : r.bottom : (i = n.log10(r.end) - n.log10(s), t = r.height, a = r.bottom - t / i * (n.log10(o) - n.log10(s))) : (i = n.log10(r.end) - n.log10(r.minNotZero), a = o === s ? r.bottom : o === r.minNotZero ? r.bottom - .02 * t : r.bottom - .02 * t - .98 * t / i * (n.log10(o) - n.log10(r.minNotZero)))), a
                    },
                    getValueForPixel: function(e) {
                        var t, a, i = this,
                            r = n.log10(i.end) - n.log10(i.start);
                        return i.isHorizontal() ? (a = i.width, t = i.start * Math.pow(10, (e - i.left) * r / a)) : (a = i.height, t = Math.pow(10, (i.bottom - e) * r / a) / i.start), t
                    }
                });
            e.scaleService.registerScaleType("logarithmic", a, t)
        }
    },
    "2ddL": function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            i = a("L5rj"),
            r = a("iO9N");
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
                datasetElementType: i.Line,
                dataElementType: i.Point,
                linkScales: r.noop,
                update: function(e) {
                    var t = this,
                        a = t.getMeta(),
                        n = a.dataset,
                        i = a.data,
                        s = n.custom || {},
                        o = t.getDataset(),
                        d = t.chart.options.elements.line,
                        l = t.chart.scale;
                    void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension), r.extend(a.dataset, {
                        _datasetIndex: t.index,
                        _scale: l,
                        _children: i,
                        _loop: !0,
                        _model: {
                            tension: s.tension ? s.tension : r.valueOrDefault(o.lineTension, d.tension),
                            backgroundColor: s.backgroundColor ? s.backgroundColor : o.backgroundColor || d.backgroundColor,
                            borderWidth: s.borderWidth ? s.borderWidth : o.borderWidth || d.borderWidth,
                            borderColor: s.borderColor ? s.borderColor : o.borderColor || d.borderColor,
                            fill: s.fill ? s.fill : void 0 !== o.fill ? o.fill : d.fill,
                            borderCapStyle: s.borderCapStyle ? s.borderCapStyle : o.borderCapStyle || d.borderCapStyle,
                            borderDash: s.borderDash ? s.borderDash : o.borderDash || d.borderDash,
                            borderDashOffset: s.borderDashOffset ? s.borderDashOffset : o.borderDashOffset || d.borderDashOffset,
                            borderJoinStyle: s.borderJoinStyle ? s.borderJoinStyle : o.borderJoinStyle || d.borderJoinStyle
                        }
                    }), a.dataset.pivot(), r.each(i, function(a, n) {
                        t.updateElement(a, n, e)
                    }, t), t.updateBezierControlPoints()
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        i = e.custom || {},
                        s = n.getDataset(),
                        o = n.chart.scale,
                        d = n.chart.options.elements.point,
                        l = o.getPointPositionForValue(t, s.data[t]);
                    void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), r.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: o,
                        _model: {
                            x: a ? o.xCenter : l.x,
                            y: a ? o.yCenter : l.y,
                            tension: i.tension ? i.tension : r.valueOrDefault(s.lineTension, n.chart.options.elements.line.tension),
                            radius: i.radius ? i.radius : r.valueAtIndexOrDefault(s.pointRadius, t, d.radius),
                            backgroundColor: i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(s.pointBackgroundColor, t, d.backgroundColor),
                            borderColor: i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(s.pointBorderColor, t, d.borderColor),
                            borderWidth: i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(s.pointBorderWidth, t, d.borderWidth),
                            pointStyle: i.pointStyle ? i.pointStyle : r.valueAtIndexOrDefault(s.pointStyle, t, d.pointStyle),
                            hitRadius: i.hitRadius ? i.hitRadius : r.valueAtIndexOrDefault(s.pointHitRadius, t, d.hitRadius)
                        }
                    }), e._model.skip = i.skip ? i.skip : isNaN(e._model.x) || isNaN(e._model.y)
                },
                updateBezierControlPoints: function() {
                    var e = this.chart.chartArea,
                        t = this.getMeta();
                    r.each(t.data, function(a, n) {
                        var i = a._model,
                            s = r.splineCurve(r.previousItem(t.data, n, !0)._model, i, r.nextItem(t.data, n, !0)._model, i.tension);
                        i.controlPointPreviousX = Math.max(Math.min(s.previous.x, e.right), e.left), i.controlPointPreviousY = Math.max(Math.min(s.previous.y, e.bottom), e.top), i.controlPointNextX = Math.max(Math.min(s.next.x, e.right), e.left), i.controlPointNextY = Math.max(Math.min(s.next.y, e.bottom), e.top), a.pivot()
                    })
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e.custom || {},
                        n = e._index,
                        i = e._model;
                    i.radius = a.hoverRadius ? a.hoverRadius : r.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), i.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, r.getHoverColor(i.backgroundColor)), i.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r.valueAtIndexOrDefault(t.pointHoverBorderColor, n, r.getHoverColor(i.borderColor)), i.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, i.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e.custom || {},
                        n = e._index,
                        i = e._model,
                        s = this.chart.options.elements.point;
                    i.radius = a.radius ? a.radius : r.valueAtIndexOrDefault(t.pointRadius, n, s.radius), i.backgroundColor = a.backgroundColor ? a.backgroundColor : r.valueAtIndexOrDefault(t.pointBackgroundColor, n, s.backgroundColor), i.borderColor = a.borderColor ? a.borderColor : r.valueAtIndexOrDefault(t.pointBorderColor, n, s.borderColor), i.borderWidth = a.borderWidth ? a.borderWidth : r.valueAtIndexOrDefault(t.pointBorderWidth, n, s.borderWidth)
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
                var i = e + " ";
                switch (a) {
                    case "s":
                        return t || n ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return i += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return i += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";
                    case "d":
                        return t || n ? "en dan" : "enim dnem";
                    case "dd":
                        return i += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";
                    case "M":
                        return t || n ? "en mesec" : "enim mesecem";
                    case "MM":
                        return i += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";
                    case "y":
                        return t || n ? "eno leto" : "enim letom";
                    case "yy":
                        return i += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti"
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
            i = a("rGYv"),
            r = a("DN1M"),
            s = r._enabled ? r : i;
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
                i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                },
                monthsRegex: i,
                monthsShortRegex: i,
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
                i = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                r = function(e) {
                    return function(t, a, r, s) {
                        var o = n(t),
                            d = i[e][n(t)];
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
                var n, i;
                return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = +e, i = {
                    mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
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
        var n, i = {
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
                return i.valueOrDefault(i.isArray(e) ? e[t] : e, a)
            },
            callback: function(e, t, a) {
                if (e && "function" == typeof e.call) return e.apply(a, t)
            },
            each: function(e, t, a, n) {
                var r, s, o;
                if (i.isArray(e))
                    if (s = e.length, n)
                        for (r = s - 1; r >= 0; r--) t.call(a, e[r], r);
                    else
                        for (r = 0; r < s; r++) t.call(a, e[r], r);
                else if (i.isObject(e))
                    for (s = (o = Object.keys(e)).length, r = 0; r < s; r++) t.call(a, e[o[r]], o[r])
            },
            arrayEquals: function(e, t) {
                var a, n, r, s;
                if (!e || !t || e.length !== t.length) return !1;
                for (a = 0, n = e.length; a < n; ++a)
                    if (r = e[a], s = t[a], r instanceof Array && s instanceof Array) {
                        if (!i.arrayEquals(r, s)) return !1
                    } else if (r !== s) return !1;
                return !0
            },
            clone: function(e) {
                if (i.isArray(e)) return e.map(i.clone);
                if (i.isObject(e)) {
                    for (var t = {}, a = Object.keys(e), n = a.length, r = 0; r < n; ++r) t[a[r]] = i.clone(e[a[r]]);
                    return t
                }
                return e
            },
            _merger: function(e, t, a, n) {
                var r = t[e],
                    s = a[e];
                i.isObject(r) && i.isObject(s) ? i.merge(r, s, n) : t[e] = i.clone(s)
            },
            _mergerIf: function(e, t, a) {
                var n = t[e],
                    r = a[e];
                i.isObject(n) && i.isObject(r) ? i.mergeIf(n, r) : t.hasOwnProperty(e) || (t[e] = i.clone(r))
            },
            merge: function(e, t, a) {
                var n, r, s, o, d, l = i.isArray(t) ? t : [t],
                    u = l.length;
                if (!i.isObject(e)) return e;
                for (n = (a = a || {}).merger || i._merger, r = 0; r < u; ++r)
                    if (t = l[r], i.isObject(t))
                        for (d = 0, o = (s = Object.keys(t)).length; d < o; ++d) n(s[d], e, t, a);
                return e
            },
            mergeIf: function(e, t) {
                return i.merge(e, t, {
                    merger: i._mergerIf
                })
            },
            extend: function(e) {
                for (var t = function(t, a) {
                        e[a] = t
                    }, a = 1, n = arguments.length; a < n; ++a) i.each(arguments[a], t);
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
                return n.prototype = t.prototype, a.prototype = new n, a.extend = i.inherits, e && i.extend(a.prototype, e), a.__super__ = t.prototype, a
            }
        };
        e.exports = i, i.callCallback = i.callback, i.indexOf = function(e, t, a) {
            return Array.prototype.indexOf.call(e, t, a)
        }, i.getValueOrDefault = i.valueOrDefault, i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault
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
                        i = a.isHorizontal();
                    return n.yLabels && !i ? a.getRightValue(n.datasets[t].data[e]) : a.ticks[e - a.minIndex]
                },
                getPixelForValue: function(e, t) {
                    var a, n = this,
                        i = n.options.offset,
                        r = Math.max(n.maxIndex + 1 - n.minIndex - (i ? 0 : 1), 1);
                    if (void 0 !== e && null !== e && (a = n.isHorizontal() ? e.x : e.y), void 0 !== a || void 0 !== e && isNaN(t)) {
                        var s = n.getLabels();
                        e = a || e;
                        var o = s.indexOf(e);
                        t = -1 !== o ? o : t
                    }
                    if (n.isHorizontal()) {
                        var d = n.width / r,
                            l = d * (t - n.minIndex);
                        return i && (l += d / 2), n.left + Math.round(l)
                    }
                    var u = n.height / r,
                        c = u * (t - n.minIndex);
                    return i && (c += u / 2), n.top + Math.round(c)
                },
                getPixelForTick: function(e) {
                    return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                },
                getValueForPixel: function(e) {
                    var t = this,
                        a = t.options.offset,
                        n = Math.max(t._ticks.length - (a ? 0 : 1), 1),
                        i = t.isHorizontal(),
                        r = (i ? t.width : t.height) / n;
                    return e -= i ? t.left : t.top, a && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex
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
            i = a("wGD1"),
            r = a("iO9N");
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
                    var n, i, r, s, o, d = this.descriptors(e),
                        l = d.length;
                    for (n = 0; n < l; ++n)
                        if ("function" == typeof(o = (r = (i = d[n]).plugin)[t]) && ((s = [e].concat(a || [])).push(i.options), !1 === o.apply(r, s))) return !1;
                    return !0
                },
                descriptors: function(e) {
                    var t = e._plugins || (e._plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var a = [],
                        i = [],
                        s = e && e.config || {},
                        o = s.options && s.options.plugins || {};
                    return this._plugins.concat(s.plugins || []).forEach(function(e) {
                        if (-1 === a.indexOf(e)) {
                            var t = e.id,
                                s = o[t];
                            !1 !== s && (!0 === s && (s = r.clone(n.global.plugins[t])), a.push(e), i.push({
                                plugin: e,
                                options: s || {}
                            }))
                        }
                    }), t.descriptors = i, t.id = this._cacheId, i
                }
            }, e.pluginService = e.plugins, e.PluginBase = i.extend({})
        }
    },
    "4mYF": function(e, t, a) {
        "use strict";
        var n, i = a("RH2O"),
            r = a("2KeS"),
            s = a("Hjbq"),
            o = a("j0cR"),
            d = a("TToO"),
            l = a("GiK3"),
            u = a("6sO2"),
            c = a("mi6k"),
            m = a("HM6l"),
            _ = a("CSlQ"),
            h = a("Odds"),
            f = (a("kuCN"), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(n || (n = {}));
        var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0,
                        playerRefID: Object(m.a)()
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            a = e.createdAt,
                            i = e.lengthSeconds,
                            r = e.thumbnailURL,
                            s = e.type,
                            o = e.viewCount,
                            d = i && i > 0 ? Object(c.b)(i) : "";
                        return l.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": f
                        }, l.createElement(h.k, {
                            ratio: h.l.Aspect16x9
                        }, l.createElement(h._8, null, l.createElement(h._2, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: h._15.Absolute
                        }, l.createElement("img", {
                            src: r
                        })), l.createElement(h._8, {
                            className: "embed-card__overlay",
                            position: h._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, l.createElement(h._8, {
                            className: "embed-card__play",
                            display: h.R.Flex,
                            justifyContent: h._7.Center,
                            position: h._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, l.createElement(h._24, {
                            asset: h._25.Play,
                            width: 50,
                            height: 50
                        })), l.createElement(h._8, {
                            position: h._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, a && l.createElement(h.Q, null, Object(u.c)(new Date(a), "medium")), l.createElement(h._8, null, s === n.Stream && l.createElement(h._8, {
                            display: h.R.Inline,
                            margin: {
                                right: .5
                            }
                        }, l.createElement(h.G, {
                            status: h.I.Live
                        })), void 0 !== o && l.createElement("span", null, t.getFormattedViewCount(o, s)))), l.createElement(h._8, {
                            position: h._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, d && l.createElement(h._8, null, l.createElement(h.Q, null, d)))), l.createElement(h._35, {
                            position: h._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: h.V.Size5
                        }, s === n.Stream && l.createElement(h._12, {
                            label: Object(u.d)("Live", "EmbedOverlayPill"),
                            type: h._13.Live
                        }), s === n.Video && l.createElement(h._12, {
                            label: Object(u.d)("Video", "EmbedOverlayPill"),
                            type: h._13.Overlay
                        }), s === n.Clip && l.createElement(h._12, {
                            label: Object(u.d)("Clip", "EmbedOverlayPill"),
                            type: h._13.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.type === n.Clip && t.props.reportPlayerInstanceStarted(t.state.playerRefID), t.props.onClick && t.props.onClick()
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (this.props.type === n.Clip) {
                        var t = e.activeVideoPlayerRefID;
                        t === this.state.playerRefID ? this.setState({
                            showOverlay: !1
                        }) : this.props.activeVideoPlayerRefID === t || t === this.state.playerRefID || this.state.showOverlay || this.setState({
                            showOverlay: !0
                        })
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : l.createElement(h.k, {
                        ratio: h.l.Aspect16x9
                    }, l.createElement("div", {
                        "data-test-selector": "embed-overlay-wrapper"
                    }, this.props.children))
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case n.Stream:
                            return Object(u.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case n.Clip:
                        case n.Video:
                            return Object(u.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(l.Component),
            y = Object(_.d)("EmbedOverlay")(p);
        var g = Object(i.b)(function(e) {
            return {
                activeVideoPlayerRefID: Object(o.a)(e)
            }
        }, function(e) {
            return Object(r.b)({
                reportPlayerInstanceStarted: s.b
            }, e)
        })(y);
        a.d(t, "a", function() {
            return g
        }), a.d(t, !1, function() {
            return f
        }), a.d(t, !1, function() {
            return "embed-overlay-wrapper"
        }), a.d(t, "b", function() {
            return n
        }), a.d(t, !1, function() {
            return p
        }), a.d(t, !1, function() {
            return y
        })
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
            i = a("wGD1"),
            r = a("iO9N");
        n._set("global", {
            elements: {
                arc: {
                    backgroundColor: n.global.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2
                }
            }
        }), e.exports = i.extend({
            inLabelRange: function(e) {
                var t = this._view;
                return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
            },
            inRange: function(e, t) {
                var a = this._view;
                if (a) {
                    for (var n = r.getAngleFromPoint(a, {
                            x: e,
                            y: t
                        }), i = n.angle, s = n.distance, o = a.startAngle, d = a.endAngle; d < o;) d += 2 * Math.PI;
                    for (; i > d;) i -= 2 * Math.PI;
                    for (; i < o;) i += 2 * Math.PI;
                    var l = i >= o && i <= d,
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
            i = a("6sO2"),
            r = a("BoWu"),
            s = a("dPMn"),
            o = a("zjE0"),
            d = a("FeZP"),
            l = a("xygp"),
            u = a("vTHh"),
            c = a("Odds"),
            m = {
                "data-test-selector": "referral-percentage"
            },
            _ = function(e) {
                return e
            },
            h = function(e) {
                var t = e.streamSummaries,
                    a = e.isLoading,
                    m = e.linkToDetails,
                    h = e.onViewDetails;
                if (a) return n.createElement(c._8, {
                    margin: {
                        top: 3,
                        bottom: 1
                    }
                }, n.createElement(c._14, {
                    height: 448
                }));
                var f = Object(l.a)(t.map(function(e) {
                        return e.videoPlayInternalTwitchReferrers
                    })),
                    p = Object(l.a)(t.map(function(e) {
                        return e.videoPlayInternalChannelsReferrers
                    })),
                    y = Object(l.a)(t.map(function(e) {
                        return e.videoPlayExternalReferrers
                    })),
                    g = n.createElement(s.a, null);
                return (f.total || p.total || y.total) && (g = n.createElement(n.Fragment, null, n.createElement(c._35, {
                    borderBottom: !0,
                    padding: {
                        bottom: 1
                    }
                }, n.createElement(u.a, {
                    referrals: f.items.slice(0, 3),
                    total: f.total,
                    translationFunc: r.b,
                    title: Object(i.d)("Twitch", "DashboardReferralPanel")
                }), n.createElement(u.a, {
                    referrals: p.items.slice(0, 3),
                    total: p.total,
                    translationFunc: _,
                    title: Object(i.d)("Channels", "DashboardReferralPanel")
                }), n.createElement(u.a, {
                    referrals: y.items.slice(0, 3),
                    total: y.total,
                    translationFunc: r.a,
                    title: Object(i.d)("External", "DashboardReferralPanel")
                })), n.createElement(d.a, {
                    onClick: h,
                    message: Object(i.d)("View details", "DashboardReferralPanel"),
                    linkTo: m
                }))), n.createElement(o.a, {
                    title: Object(i.d)("Where did my views come from?", "DashboardReferralPanel")
                }, g)
            };
        a.d(t, !1, function() {
            return m
        }), a.d(t, "a", function() {
            return h
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
                var i = "";
                if (t) switch (a) {
                    case "s":
                        i = "काही सेकंद";
                        break;
                    case "m":
                        i = "एक मिनिट";
                        break;
                    case "mm":
                        i = "%d मिनिटे";
                        break;
                    case "h":
                        i = "एक तास";
                        break;
                    case "hh":
                        i = "%d तास";
                        break;
                    case "d":
                        i = "एक दिवस";
                        break;
                    case "dd":
                        i = "%d दिवस";
                        break;
                    case "M":
                        i = "एक महिना";
                        break;
                    case "MM":
                        i = "%d महिने";
                        break;
                    case "y":
                        i = "एक वर्ष";
                        break;
                    case "yy":
                        i = "%d वर्षे"
                } else switch (a) {
                    case "s":
                        i = "काही सेकंदां";
                        break;
                    case "m":
                        i = "एका मिनिटा";
                        break;
                    case "mm":
                        i = "%d मिनिटां";
                        break;
                    case "h":
                        i = "एका तासा";
                        break;
                    case "hh":
                        i = "%d तासां";
                        break;
                    case "d":
                        i = "एका दिवसा";
                        break;
                    case "dd":
                        i = "%d दिवसां";
                        break;
                    case "M":
                        i = "एका महिन्या";
                        break;
                    case "MM":
                        i = "%d महिन्यां";
                        break;
                    case "y":
                        i = "एका वर्षा";
                        break;
                    case "yy":
                        i = "%d वर्षां"
                }
                return i.replace(/%d/i, e)
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
    "6C1Z": function(e, t, a) {
        "use strict";
        t.b = function(e, t) {
            return Object(n.d)(e) + "/edit/" + t
        }, t.c = function(e, t) {
            return Object(n.d)(e) + "/highlighter/" + t
        }, t.d = function(e, t) {
            return Object(n.d)(e) + "/schedule/" + t
        }, t.a = function(e, t) {
            return Object(n.d)(e) + "/appeal/" + t
        }, t.e = function(e) {
            return "/videos/" + e
        };
        var n = a("NY9D")
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
            i = a("wGD1"),
            r = a("iO9N");
        n._set("global", {
            animation: {
                duration: 1e3,
                easing: "easeOutQuart",
                onProgress: r.noop,
                onComplete: r.noop
            }
        }), e.exports = function(e) {
            e.Animation = i.extend({
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
                    var i, r, s = this.animations;
                    for (t.chart = e, n || (e.animating = !0), i = 0, r = s.length; i < r; ++i)
                        if (s[i].chart === e) return void(s[i] = t);
                    s.push(t), 1 === s.length && this.requestAnimationFrame()
                },
                cancelAnimation: function(e) {
                    var t = r.findIndex(this.animations, function(t) {
                        return t.chart === e
                    }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                },
                requestAnimationFrame: function() {
                    var e = this;
                    null === e.request && (e.request = r.requestAnimFrame.call(window, function() {
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
                    for (var t, a, n = this.animations, i = 0; i < n.length;) a = (t = n[i]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), r.callback(t.render, [a, t], a), r.callback(t.onAnimationProgress, [t], a), t.currentStep >= t.numSteps ? (r.callback(t.onAnimationComplete, [t], a), a.animating = !1, n.splice(i, 1)) : ++i
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

            function i(e, t, a) {
                var i = e + " ";
                switch (a) {
                    case "m":
                        return t ? "minuta" : "minutę";
                    case "mm":
                        return i + (n(e) ? "minuty" : "minut");
                    case "h":
                        return t ? "godzina" : "godzinę";
                    case "hh":
                        return i + (n(e) ? "godziny" : "godzin");
                    case "MM":
                        return i + (n(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return i + (n(e) ? "lata" : "lat")
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
                    m: i,
                    mm: i,
                    h: i,
                    hh: i,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: i,
                    y: "rok",
                    yy: i
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
            i = a("L5rj"),
            r = a("iO9N");
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
                return r.valueOrDefault(e.showLine, t.showLines)
            }
            e.controllers.line = e.DatasetController.extend({
                datasetElementType: i.Line,
                dataElementType: i.Point,
                update: function(e) {
                    var a, n, i, s = this,
                        o = s.getMeta(),
                        d = o.dataset,
                        l = o.data || [],
                        u = s.chart.options,
                        c = u.elements.line,
                        m = s.getScaleForId(o.yAxisID),
                        _ = s.getDataset(),
                        h = t(_, u);
                    for (h && (i = d.custom || {}, void 0 !== _.tension && void 0 === _.lineTension && (_.lineTension = _.tension), d._scale = m, d._datasetIndex = s.index, d._children = l, d._model = {
                            spanGaps: _.spanGaps ? _.spanGaps : u.spanGaps,
                            tension: i.tension ? i.tension : r.valueOrDefault(_.lineTension, c.tension),
                            backgroundColor: i.backgroundColor ? i.backgroundColor : _.backgroundColor || c.backgroundColor,
                            borderWidth: i.borderWidth ? i.borderWidth : _.borderWidth || c.borderWidth,
                            borderColor: i.borderColor ? i.borderColor : _.borderColor || c.borderColor,
                            borderCapStyle: i.borderCapStyle ? i.borderCapStyle : _.borderCapStyle || c.borderCapStyle,
                            borderDash: i.borderDash ? i.borderDash : _.borderDash || c.borderDash,
                            borderDashOffset: i.borderDashOffset ? i.borderDashOffset : _.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : _.borderJoinStyle || c.borderJoinStyle,
                            fill: i.fill ? i.fill : void 0 !== _.fill ? _.fill : c.fill,
                            steppedLine: i.steppedLine ? i.steppedLine : r.valueOrDefault(_.steppedLine, c.stepped),
                            cubicInterpolationMode: i.cubicInterpolationMode ? i.cubicInterpolationMode : r.valueOrDefault(_.cubicInterpolationMode, c.cubicInterpolationMode)
                        }, d.pivot()), a = 0, n = l.length; a < n; ++a) s.updateElement(l[a], a, e);
                    for (h && 0 !== d._model.tension && s.updateBezierControlPoints(), a = 0, n = l.length; a < n; ++a) l[a].pivot()
                },
                getPointBackgroundColor: function(e, t) {
                    var a = this.chart.options.elements.point.backgroundColor,
                        n = this.getDataset(),
                        i = e.custom || {};
                    return i.backgroundColor ? a = i.backgroundColor : n.pointBackgroundColor ? a = r.valueAtIndexOrDefault(n.pointBackgroundColor, t, a) : n.backgroundColor && (a = n.backgroundColor), a
                },
                getPointBorderColor: function(e, t) {
                    var a = this.chart.options.elements.point.borderColor,
                        n = this.getDataset(),
                        i = e.custom || {};
                    return i.borderColor ? a = i.borderColor : n.pointBorderColor ? a = r.valueAtIndexOrDefault(n.pointBorderColor, t, a) : n.borderColor && (a = n.borderColor), a
                },
                getPointBorderWidth: function(e, t) {
                    var a = this.chart.options.elements.point.borderWidth,
                        n = this.getDataset(),
                        i = e.custom || {};
                    return isNaN(i.borderWidth) ? !isNaN(n.pointBorderWidth) || r.isArray(n.pointBorderWidth) ? a = r.valueAtIndexOrDefault(n.pointBorderWidth, t, a) : isNaN(n.borderWidth) || (a = n.borderWidth) : a = i.borderWidth, a
                },
                updateElement: function(e, t, a) {
                    var n, i, s = this,
                        o = s.getMeta(),
                        d = e.custom || {},
                        l = s.getDataset(),
                        u = s.index,
                        c = l.data[t],
                        m = s.getScaleForId(o.yAxisID),
                        _ = s.getScaleForId(o.xAxisID),
                        h = s.chart.options.elements.point;
                    void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), n = _.getPixelForValue("object" == typeof c ? c : NaN, t, u), i = a ? m.getBasePixel() : s.calculatePointY(c, t, u), e._xScale = _, e._yScale = m, e._datasetIndex = u, e._index = t, e._model = {
                        x: n,
                        y: i,
                        skip: d.skip || isNaN(n) || isNaN(i),
                        radius: d.radius || r.valueAtIndexOrDefault(l.pointRadius, t, h.radius),
                        pointStyle: d.pointStyle || r.valueAtIndexOrDefault(l.pointStyle, t, h.pointStyle),
                        backgroundColor: s.getPointBackgroundColor(e, t),
                        borderColor: s.getPointBorderColor(e, t),
                        borderWidth: s.getPointBorderWidth(e, t),
                        tension: o.dataset._model ? o.dataset._model.tension : 0,
                        steppedLine: !!o.dataset._model && o.dataset._model.steppedLine,
                        hitRadius: d.hitRadius || r.valueAtIndexOrDefault(l.pointHitRadius, t, h.hitRadius)
                    }
                },
                calculatePointY: function(e, t, a) {
                    var n, i, r, s = this.chart,
                        o = this.getMeta(),
                        d = this.getScaleForId(o.yAxisID),
                        l = 0,
                        u = 0;
                    if (d.options.stacked) {
                        for (n = 0; n < a; n++)
                            if (i = s.data.datasets[n], "line" === (r = s.getDatasetMeta(n)).type && r.yAxisID === d.id && s.isDatasetVisible(n)) {
                                var c = Number(d.getRightValue(i.data[t]));
                                c < 0 ? u += c || 0 : l += c || 0
                            }
                        var m = Number(d.getRightValue(e));
                        return m < 0 ? d.getPixelForValue(u + m) : d.getPixelForValue(l + m)
                    }
                    return d.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    var e, t, a, n, i = this.getMeta(),
                        s = this.chart.chartArea,
                        o = i.data || [];

                    function d(e, t, a) {
                        return Math.max(Math.min(e, a), t)
                    }
                    if (i.dataset._model.spanGaps && (o = o.filter(function(e) {
                            return !e._model.skip
                        })), "monotone" === i.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(o);
                    else
                        for (e = 0, t = o.length; e < t; ++e) a = o[e]._model, n = r.splineCurve(r.previousItem(o, e)._model, a, r.nextItem(o, e)._model, i.dataset._model.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
                    if (this.chart.options.elements.line.capBezierPoints)
                        for (e = 0, t = o.length; e < t; ++e)(a = o[e]._model).controlPointPreviousX = d(a.controlPointPreviousX, s.left, s.right), a.controlPointPreviousY = d(a.controlPointPreviousY, s.top, s.bottom), a.controlPointNextX = d(a.controlPointNextX, s.left, s.right), a.controlPointNextY = d(a.controlPointNextY, s.top, s.bottom)
                },
                draw: function() {
                    var e = this.chart,
                        a = this.getMeta(),
                        n = a.data || [],
                        i = e.chartArea,
                        s = n.length,
                        o = 0;
                    for (r.canvas.clipArea(e.ctx, i), t(this.getDataset(), e.options) && a.dataset.draw(), r.canvas.unclipArea(e.ctx); o < s; ++o) n[o].draw(i)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        n = e.custom || {},
                        i = e._model;
                    i.radius = n.hoverRadius || r.valueAtIndexOrDefault(t.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), i.backgroundColor = n.hoverBackgroundColor || r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, a, r.getHoverColor(i.backgroundColor)), i.borderColor = n.hoverBorderColor || r.valueAtIndexOrDefault(t.pointHoverBorderColor, a, r.getHoverColor(i.borderColor)), i.borderWidth = n.hoverBorderWidth || r.valueAtIndexOrDefault(t.pointHoverBorderWidth, a, i.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this,
                        a = t.chart.data.datasets[e._datasetIndex],
                        n = e._index,
                        i = e.custom || {},
                        s = e._model;
                    void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), s.radius = i.radius || r.valueAtIndexOrDefault(a.pointRadius, n, t.chart.options.elements.point.radius), s.backgroundColor = t.getPointBackgroundColor(e, n), s.borderColor = t.getPointBorderColor(e, n), s.borderWidth = t.getPointBorderWidth(e, n)
                }
            })
        }
    },
    "8v14": function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a, n) {
                var i = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? i[a][0] : i[a][1]
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
            i = a("L5rj"),
            r = a("iO9N");
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
                        i = n && a.isDatasetVisible(t) && n.dataset._children || [],
                        r = i.length || 0;
                    return r ? function(e, t) {
                        return t < r && i[t]._view || null
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
                var n, i = e._model || {},
                    r = i.fill;
                if (void 0 === r && (r = !!i.backgroundColor), !1 === r || null === r) return !1;
                if (!0 === r) return "origin";
                if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = t + n), !(n === t || n < 0 || n >= a) && n;
                switch (r) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return r;
                    default:
                        return !1
                }
            }

            function a(e) {
                var t, a = e.el._model || {},
                    n = e.el._scale || {},
                    i = e.fill,
                    r = null;
                if (isFinite(i)) return null;
                if ("start" === i ? r = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === i ? r = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? r = a.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), void 0 !== r && null !== r) {
                    if (void 0 !== r.x && void 0 !== r.y) return r;
                    if ("number" == typeof r && isFinite(r)) return {
                        x: (t = n.isHorizontal()) ? r : null,
                        y: t ? null : r
                    }
                }
                return null
            }

            function s(e, t, a) {
                var n, i = e[t].fill,
                    r = [t];
                if (!a) return i;
                for (; !1 !== i && -1 === r.indexOf(i);) {
                    if (!isFinite(i)) return i;
                    if (!(n = e[i])) return !1;
                    if (n.visible) return i;
                    r.push(i), i = n.fill
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

            function l(e, t, a, n, i) {
                var s;
                if (n && i) {
                    for (e.moveTo(t[0].x, t[0].y), s = 1; s < n; ++s) r.canvas.lineTo(e, t[s - 1], t[s]);
                    for (e.lineTo(a[i - 1].x, a[i - 1].y), s = i - 1; s > 0; --s) r.canvas.lineTo(e, a[s], a[s - 1], !0)
                }
            }
            return {
                id: "filler",
                afterDatasetsUpdate: function(e, n) {
                    var r, d, l, u, c = (e.data.datasets || []).length,
                        m = n.propagate,
                        _ = [];
                    for (d = 0; d < c; ++d) u = null, (l = (r = e.getDatasetMeta(d)).dataset) && l._model && l instanceof i.Line && (u = {
                        visible: e.isDatasetVisible(d),
                        fill: t(l, d, c),
                        chart: e,
                        el: l
                    }), r.$filler = u, _.push(u);
                    for (d = 0; d < c; ++d)(u = _[d]) && (u.fill = s(_, d, m), u.boundary = a(u), u.mapper = o(u))
                },
                beforeDatasetDraw: function(e, t) {
                    var a = t.meta.$filler;
                    if (a) {
                        var i = e.ctx,
                            s = a.el,
                            o = s._view,
                            u = s._children || [],
                            c = a.mapper,
                            m = o.backgroundColor || n.global.defaultColor;
                        c && m && u.length && (r.canvas.clipArea(i, e.chartArea), function(e, t, a, n, i, r) {
                            var s, o, u, c, m, _, h, f = t.length,
                                p = n.spanGaps,
                                y = [],
                                g = [],
                                M = 0,
                                v = 0;
                            for (e.beginPath(), s = 0, o = f + !!r; s < o; ++s) m = a(c = t[u = s % f]._view, u, n), _ = d(c), h = d(m), _ && h ? (M = y.push(c), v = g.push(m)) : M && v && (p ? (_ && y.push(c), h && g.push(m)) : (l(e, y, g, M, v), M = v = 0, y = [], g = []));
                            l(e, y, g, M, v), e.closePath(), e.fillStyle = i, e.fill()
                        }(i, u, c, o, m, s._loop), r.canvas.unclipArea(i))
                    }
                }
            }
        }
    },
    AFDx: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            i = a("wGD1");

        function r(e) {
            return void 0 !== e._view.width
        }

        function s(e) {
            var t, a, n, i, s = e._view;
            if (r(e)) {
                var o = s.width / 2;
                t = s.x - o, a = s.x + o, n = Math.min(s.y, s.base), i = Math.max(s.y, s.base)
            } else {
                var d = s.height / 2;
                t = Math.min(s.x, s.base), a = Math.max(s.x, s.base), n = s.y - d, i = s.y + d
            }
            return {
                left: t,
                top: n,
                right: a,
                bottom: i
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
        }), e.exports = i.extend({
            draw: function() {
                var e, t, a, n, i, r, s, o = this._chart.ctx,
                    d = this._view,
                    l = d.borderWidth;
                if (d.horizontal ? (e = d.base, t = d.x, a = d.y - d.height / 2, n = d.y + d.height / 2, i = t > e ? 1 : -1, r = 1, s = d.borderSkipped || "left") : (e = d.x - d.width / 2, t = d.x + d.width / 2, a = d.y, i = 1, r = (n = d.base) > a ? 1 : -1, s = d.borderSkipped || "bottom"), l) {
                    var u = Math.min(Math.abs(e - t), Math.abs(a - n)),
                        c = (l = l > u ? u : l) / 2,
                        m = e + ("left" !== s ? c * i : 0),
                        _ = t + ("right" !== s ? -c * i : 0),
                        h = a + ("top" !== s ? c * r : 0),
                        f = n + ("bottom" !== s ? -c * r : 0);
                    m !== _ && (a = h, n = f), h !== f && (e = m, t = _)
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
                return r(this) ? e >= a.left && e <= a.right : t >= a.top && t <= a.bottom
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
                return r(this) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), {
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
                i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                },
                monthsRegex: i,
                monthsShortRegex: i,
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
                        i = t && t.hours();
                    return ((a = n) instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)), n.replace("{}", i % 12 == 1 ? "στη" : "στις")
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
            i = a("6sO2"),
            r = a("MDGG"),
            s = a("Odds"),
            o = function(e) {
                return 0 === e.achievement.progress ? n.createElement("span", null) : e.achievement.completedAt ? n.createElement(s._8, {
                    display: s.R.InlineFlex,
                    alignItems: s.c.Center
                }, n.createElement(r.a, {
                    date: e.achievement.completedAt
                })) : n.createElement(s._35, {
                    className: "ach-card__pill-wrapper",
                    fontSize: s.V.Size5
                }, n.createElement(s._12, {
                    label: Object(i.e)(e.achievement.progressRatio, "percent")
                }))
            };
        a.d(t, "a", function() {
            return o
        })
    },
    DN1M: function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            i = "$chartjs",
            r = "chartjs-",
            s = r + "render-monitor",
            o = r + "render-animation",
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
                i = a && a.match(/^(\d+)(\.\d+)?px$/);
            return i ? Number(i[1]) : void 0
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

        function _(e, t, a) {
            e.removeEventListener(t, a, c)
        }

        function h(e, t, a, n, i) {
            return {
                type: e,
                chart: t,
                native: i || null,
                x: void 0 !== a ? a : null,
                y: void 0 !== n ? n : null
            }
        }

        function f(e, t, a) {
            var l, u, c, _, f = e[i] || (e[i] = {}),
                p = f.resizer = function(e) {
                    var t = document.createElement("div"),
                        a = r + "size-monitor",
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
                    return m(i, "scroll", o.bind(i, "expand")), m(s, "scroll", o.bind(s, "shrink")), t
                }((l = function() {
                    if (f.resizer) return t(h("resize", a))
                }, c = !1, _ = [], function() {
                    _ = Array.prototype.slice.call(arguments), u = u || this, c || (c = !0, n.requestAnimFrame.call(window, function() {
                        c = !1, l.apply(u, _)
                    }))
                }));
            ! function(e, t) {
                var a = e[i] || (e[i] = {}),
                    r = a.renderProxy = function(e) {
                        e.animationName === o && t()
                    };
                n.each(d, function(t) {
                    m(e, t, r)
                }), a.reflow = !!e.offsetParent, e.classList.add(s)
            }(e, function() {
                if (f.resizer) {
                    var t = e.parentNode;
                    t && t !== p.parentNode && t.insertBefore(p, t.firstChild), p._reset()
                }
            })
        }

        function p(e) {
            var t = e[i] || {},
                a = t.resizer;
            delete t.resizer,
                function(e) {
                    var t = e[i] || {},
                        a = t.renderProxy;
                    a && (n.each(d, function(t) {
                        _(e, t, a)
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
                        r = e.getAttribute("width");
                    if (e[i] = {
                            initial: {
                                height: n,
                                width: r,
                                style: {
                                    display: a.display,
                                    height: a.height,
                                    width: a.width
                                }
                            }
                        }, a.display = a.display || "block", null === r || "" === r) {
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
                if (t[i]) {
                    var a = t[i].initial;
                    ["height", "width"].forEach(function(e) {
                        var i = a[e];
                        n.isNullOrUndef(i) ? t.removeAttribute(e) : t.setAttribute(e, i)
                    }), n.each(a.style || {}, function(e, a) {
                        t.style[a] = e
                    }), t.width = t.width, delete t[i]
                }
            },
            addEventListener: function(e, t, a) {
                var r = e.canvas;
                if ("resize" !== t) {
                    var s = a[i] || (a[i] = {});
                    m(r, t, (s.proxies || (s.proxies = {}))[e.id + "_" + t] = function(t) {
                        a(function(e, t) {
                            var a = l[e.type] || e.type,
                                i = n.getRelativePosition(e, t);
                            return h(a, t, i.x, i.y, e)
                        }(t, e))
                    })
                } else f(r, a, e)
            },
            removeEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" !== t) {
                    var r = ((a[i] || {}).proxies || {})[e.id + "_" + t];
                    r && _(n, t, r)
                } else p(n)
            }
        }, n.addEvent = m, n.removeEvent = _
    },
    DNvj: function(e, t, a) {
        "use strict";
        t.a = function(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, o, d, l;
                return n.__generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return a = "/kraken/clips/top", o = i.stringify(n.__assign({
                                channel: e
                            }, Object(r.i)(t))), d = [a, o].join("?"), [4, Object(s.c)({
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
            i = a("OAwv"),
            r = (a.n(i), a("u4Vk")),
            s = a("PGY2")
    },
    DOkx: function(e, t, a) {
        (function(e) {
            "use strict";

            function t(e, t, a, n) {
                var i = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? i[a][0] : i[a][1]
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
        var i = a("k7DW"),
            r = a("iO9N"),
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
            var t, a, n, i = {},
                r = [];
            for (t = 0, a = e.length; t < a; ++t) i[n = e[t]] || (i[n] = !0, r.push(n));
            return r
        }

        function m(e, t, a, n) {
            var i = function(e, t, a) {
                    for (var n, i, r, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                        if (i = e[(n = s + o >> 1) - 1] || null, r = e[n], !i) return {
                            lo: null,
                            hi: r
                        };
                        if (r[t] < a) s = n + 1;
                        else {
                            if (!(i[t] > a)) return {
                                lo: i,
                                hi: r
                            };
                            o = n - 1
                        }
                    }
                    return {
                        lo: r,
                        hi: null
                    }
                }(e, t, a),
                r = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0],
                s = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1],
                o = s[t] - r[t],
                d = o ? (a - r[t]) / o : 0,
                l = (s[n] - r[n]) * d;
            return r[n] + l
        }

        function _(e, t) {
            var a = t.parser,
                i = t.parser || t.format;
            return "function" == typeof a ? a(e) : "string" == typeof e && "string" == typeof i ? n(e, i) : (e instanceof n || (e = n(e)), e.isValid() ? e : "function" == typeof i ? i(e) : e)
        }

        function h(e, t) {
            if (r.isNullOrUndef(e)) return null;
            var a = t.options.time,
                n = _(t.getRightValue(e), a);
            return n.isValid() ? (a.round && n.startOf(a.round), n.valueOf()) : null
        }

        function f(e) {
            for (var t = l.indexOf(e) + 1, a = l.length; t < a; ++t)
                if (d[l[t]].common) return l[t]
        }

        function p(e, t, a, i) {
            var s, u = i.time,
                c = u.unit || function(e, t, a, n) {
                    var i, r, s, u = l.length;
                    for (i = l.indexOf(e); i < u - 1; ++i)
                        if (s = (r = d[l[i]]).steps ? r.steps[r.steps.length - 1] : o, r.common && Math.ceil((a - t) / (s * r.size)) <= n) return l[i];
                    return l[u - 1]
                }(u.minUnit, e, t, a),
                m = f(c),
                _ = r.valueOrDefault(u.stepSize, u.unitStepSize),
                h = "week" === c && u.isoWeekday,
                p = i.ticks.major.enabled,
                y = d[c],
                g = n(e),
                M = n(t),
                v = [];
            for (_ || (_ = function(e, t, a, n) {
                    var i, r, s, o = t - e,
                        l = d[a],
                        u = l.size,
                        c = l.steps;
                    if (!c) return Math.ceil(o / ((n || 1) * u));
                    for (i = 0, r = c.length; i < r && (s = c[i], !(Math.ceil(o / (u * s)) <= n)); ++i);
                    return s
                }(e, t, c, a)), h && (g = g.isoWeekday(h), M = M.isoWeekday(h)), g = g.startOf(h ? "day" : c), (M = M.startOf(h ? "day" : c)) < t && M.add(1, c), s = n(g), p && m && !h && !u.round && (s.startOf(m), s.add(~~((g - s) / (y.size * _)) * _, c)); s < M; s.add(_, c)) v.push(+s);
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
                    var e, t, a, i, d, l, m = this,
                        _ = m.chart,
                        f = m.options.time,
                        p = o,
                        y = s,
                        g = [],
                        M = [],
                        v = [];
                    for (e = 0, a = _.data.labels.length; e < a; ++e) v.push(h(_.data.labels[e], m));
                    for (e = 0, a = (_.data.datasets || []).length; e < a; ++e)
                        if (_.isDatasetVisible(e))
                            if (d = _.data.datasets[e].data, r.isObject(d[0]))
                                for (M[e] = [], t = 0, i = d.length; t < i; ++t) l = h(d[t], m), g.push(l), M[e][t] = l;
                            else g.push.apply(g, v), M[e] = v.slice(0);
                    else M[e] = [];
                    v.length && (v = c(v).sort(u), p = Math.min(p, v[0]), y = Math.max(y, v[v.length - 1])), g.length && (g = c(g).sort(u), p = Math.min(p, g[0]), y = Math.max(y, g[g.length - 1])), p = h(f.min, m) || p, y = h(f.max, m) || y, p = p === o ? +n().startOf("day") : p, y = y === s ? +n().endOf("day") + 1 : y, m.min = Math.min(p, y), m.max = Math.max(p + 1, y), m._horizontal = m.isHorizontal(), m._table = [], m._timestamps = {
                        data: g,
                        datasets: M,
                        labels: v
                    }
                },
                buildTicks: function() {
                    var e, t, a, i = this,
                        r = i.min,
                        s = i.max,
                        o = i.options,
                        u = o.time,
                        c = [],
                        _ = [];
                    switch (o.ticks.source) {
                        case "data":
                            c = i._timestamps.data;
                            break;
                        case "labels":
                            c = i._timestamps.labels;
                            break;
                        case "auto":
                        default:
                            c = p(r, s, i.getLabelCapacity(r), o)
                    }
                    for ("ticks" === o.bounds && c.length && (r = c[0], s = c[c.length - 1]), r = h(u.min, i) || r, s = h(u.max, i) || s, e = 0, t = c.length; e < t; ++e)(a = c[e]) >= r && a <= s && _.push(a);
                    return i.min = r, i.max = s, i._unit = u.unit || function(e, t, a, i) {
                            var r, s, o = n.duration(n(i).diff(n(a)));
                            for (r = l.length - 1; r >= l.indexOf(t); r--)
                                if (s = l[r], d[s].common && o.as(s) >= e.length) return s;
                            return l[t ? l.indexOf(t) : 0]
                        }(_, u.minUnit, i.min, i.max), i._majorUnit = f(i._unit), i._table = function(e, t, a, n) {
                            if ("linear" === n || !e.length) return [{
                                time: t,
                                pos: 0
                            }, {
                                time: a,
                                pos: 1
                            }];
                            var i, r, s, o, d, l = [],
                                u = [t];
                            for (i = 0, r = e.length; i < r; ++i)(o = e[i]) > t && o < a && u.push(o);
                            for (u.push(a), i = 0, r = u.length; i < r; ++i) d = u[i + 1], s = u[i - 1], o = u[i], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({
                                time: o,
                                pos: i / (r - 1)
                            });
                            return l
                        }(i._timestamps.data, r, s, o.distribution), i._offsets = function(e, t, a, n, i) {
                            var r, s, o = 0,
                                d = 0;
                            return i.offset && t.length && (i.time.min || (r = t.length > 1 ? t[1] : n, s = t[0], o = (m(e, "time", r, "pos") - m(e, "time", s, "pos")) / 2), i.time.max || (r = t[t.length - 1], s = t.length > 1 ? t[t.length - 2] : a, d = (m(e, "time", r, "pos") - m(e, "time", s, "pos")) / 2)), {
                                left: o,
                                right: d
                            }
                        }(i._table, _, r, s, o),
                        function(e, t) {
                            var a, i, r, s, o = [];
                            for (a = 0, i = e.length; a < i; ++a) r = e[a], s = !!t && r === +n(r).startOf(t), o.push({
                                value: r,
                                major: s
                            });
                            return o
                        }(_, i._majorUnit)
                },
                getLabelForIndex: function(e, t) {
                    var a = this.chart.data,
                        n = this.options.time,
                        i = a.labels && e < a.labels.length ? a.labels[e] : "",
                        s = a.datasets[t].data[e];
                    return r.isObject(s) && (i = this.getRightValue(s)), n.tooltipFormat && (i = _(i, n).format(n.tooltipFormat)), i
                },
                tickFormatFunction: function(e, t, a, n) {
                    var i = this.options,
                        s = e.valueOf(),
                        o = i.time.displayFormats,
                        d = o[this._unit],
                        l = this._majorUnit,
                        u = o[l],
                        c = e.clone().startOf(l).valueOf(),
                        m = i.ticks.major,
                        _ = m.enabled && l && u && s === c,
                        h = e.format(n || (_ ? u : d)),
                        f = _ ? m : i.ticks.minor,
                        p = r.valueOrDefault(f.callback, f.userCallback);
                    return p ? p(h, t, a) : h
                },
                convertTicksToLabels: function(e) {
                    var t, a, i = [];
                    for (t = 0, a = e.length; t < a; ++t) i.push(this.tickFormatFunction(n(e[t].value), t, e));
                    return i
                },
                getPixelForOffset: function(e) {
                    var t = this,
                        a = t._horizontal ? t.width : t.height,
                        n = t._horizontal ? t.left : t.top,
                        i = m(t._table, "time", e, "pos");
                    return n + a * (t._offsets.left + i) / (t._offsets.left + 1 + t._offsets.right)
                },
                getPixelForValue: function(e, t, a) {
                    var n = null;
                    if (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]), null === n && (n = h(e, this)), null !== n) return this.getPixelForOffset(n)
                },
                getPixelForTick: function(e) {
                    var t = this.getTicks();
                    return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                },
                getValueForPixel: function(e) {
                    var t = this,
                        a = t._horizontal ? t.width : t.height,
                        i = t._horizontal ? t.left : t.top,
                        r = (a ? (e - i) / a : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                        s = m(t._table, "pos", r, "time");
                    return n(s)
                },
                getLabelWidth: function(e) {
                    var t = this.options.ticks,
                        a = this.ctx.measureText(e).width,
                        n = r.toRadians(t.maxRotation),
                        s = Math.cos(n),
                        o = Math.sin(n);
                    return a * s + r.valueOrDefault(t.fontSize, i.global.defaultFontSize) * o
                },
                getLabelCapacity: function(e) {
                    var t = this,
                        a = t.options.time.displayFormats.millisecond,
                        i = t.tickFormatFunction(n(e), 0, [], a),
                        r = t.getLabelWidth(i),
                        s = t.isHorizontal() ? t.width : t.height;
                    return Math.floor(s / r)
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
            roundedRect: function(e, t, a, n, i, r) {
                if (r) {
                    var s = Math.min(r, n / 2),
                        o = Math.min(r, i / 2);
                    e.moveTo(t + s, a), e.lineTo(t + n - s, a), e.quadraticCurveTo(t + n, a, t + n, a + o), e.lineTo(t + n, a + i - o), e.quadraticCurveTo(t + n, a + i, t + n - s, a + i), e.lineTo(t + s, a + i), e.quadraticCurveTo(t, a + i, t, a + i - o), e.lineTo(t, a + o), e.quadraticCurveTo(t, a, t + s, a)
                } else e.rect(t, a, n, i)
            },
            drawPoint: function(e, t, a, n, i) {
                var r, s, o, d, l, u;
                if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (r = t.toString()) && "[object HTMLCanvasElement]" !== r) {
                    if (!(isNaN(a) || a <= 0)) {
                        switch (t) {
                            default: e.beginPath(),
                            e.arc(n, i, a, 0, 2 * Math.PI),
                            e.closePath(),
                            e.fill();
                            break;
                            case "triangle":
                                    e.beginPath(),
                                l = (s = 3 * a / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                e.moveTo(n - s / 2, i + l / 3),
                                e.lineTo(n + s / 2, i + l / 3),
                                e.lineTo(n, i - 2 * l / 3),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rect":
                                    u = 1 / Math.SQRT2 * a,
                                e.beginPath(),
                                e.fillRect(n - u, i - u, 2 * u, 2 * u),
                                e.strokeRect(n - u, i - u, 2 * u, 2 * u);
                                break;
                            case "rectRounded":
                                    var c = a / Math.SQRT2,
                                    m = n - c,
                                    _ = i - c,
                                    h = Math.SQRT2 * a;e.beginPath(),
                                this.roundedRect(e, m, _, h, h, a / 2),
                                e.closePath(),
                                e.fill();
                                break;
                            case "rectRot":
                                    u = 1 / Math.SQRT2 * a,
                                e.beginPath(),
                                e.moveTo(n - u, i),
                                e.lineTo(n, i + u),
                                e.lineTo(n + u, i),
                                e.lineTo(n, i - u),
                                e.closePath(),
                                e.fill();
                                break;
                            case "cross":
                                    e.beginPath(),
                                e.moveTo(n, i + a),
                                e.lineTo(n, i - a),
                                e.moveTo(n - a, i),
                                e.lineTo(n + a, i),
                                e.closePath();
                                break;
                            case "crossRot":
                                    e.beginPath(),
                                o = Math.cos(Math.PI / 4) * a,
                                d = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - o, i - d),
                                e.lineTo(n + o, i + d),
                                e.moveTo(n - o, i + d),
                                e.lineTo(n + o, i - d),
                                e.closePath();
                                break;
                            case "star":
                                    e.beginPath(),
                                e.moveTo(n, i + a),
                                e.lineTo(n, i - a),
                                e.moveTo(n - a, i),
                                e.lineTo(n + a, i),
                                o = Math.cos(Math.PI / 4) * a,
                                d = Math.sin(Math.PI / 4) * a,
                                e.moveTo(n - o, i - d),
                                e.lineTo(n + o, i + d),
                                e.moveTo(n - o, i + d),
                                e.lineTo(n + o, i - d),
                                e.closePath();
                                break;
                            case "line":
                                    e.beginPath(),
                                e.moveTo(n - a, i),
                                e.lineTo(n + a, i),
                                e.closePath();
                                break;
                            case "dash":
                                    e.beginPath(),
                                e.moveTo(n, i),
                                e.lineTo(n + a, i),
                                e.closePath()
                        }
                        e.stroke()
                    }
                } else e.drawImage(t, n - t.width / 2, i - t.height / 2, t.width, t.height)
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
            i = a("wGD1"),
            r = a("iO9N"),
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
        }), e.exports = i.extend({
            draw: function() {
                var e, t, a, n, i = this._view,
                    o = this._chart.ctx,
                    d = i.spanGaps,
                    l = this._children.slice(),
                    u = s.elements.line,
                    c = -1;
                for (this._loop && l.length && l.push(l[0]), o.save(), o.lineCap = i.borderCapStyle || u.borderCapStyle, o.setLineDash && o.setLineDash(i.borderDash || u.borderDash), o.lineDashOffset = i.borderDashOffset || u.borderDashOffset, o.lineJoin = i.borderJoinStyle || u.borderJoinStyle, o.lineWidth = i.borderWidth || u.borderWidth, o.strokeStyle = i.borderColor || s.defaultColor, o.beginPath(), c = -1, e = 0; e < l.length; ++e) t = l[e], a = r.previousItem(l, e), n = t._view, 0 === e ? n.skip || (o.moveTo(n.x, n.y), c = e) : (a = -1 === c ? a : l[c], n.skip || (c !== e - 1 && !d || -1 === c ? o.moveTo(n.x, n.y) : r.canvas.lineTo(o, a._view, t._view), c = e));
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
            i = a("Odds");
        a("J9dY");

        function r(e) {
            return n.createElement(i._35, {
                className: "insight-panel-btn",
                background: e.background || i.n.Alt,
                display: i.R.Flex,
                flexGrow: 1,
                flexWrap: i.U.NoWrap
            }, n.createElement(i.v, {
                disabled: e.disabled,
                type: i.B.Text,
                linkTo: e.linkTo,
                onClick: e.onClick,
                targetBlank: e.targetBlank,
                fullWidth: !0
            }, n.createElement(i.Q, {
                color: e.color
            }, e.message)))
        }
        a.d(t, "a", function() {
            return r
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
                var i = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? i[a][0] : i[a][1]
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
            return i
        }), t.b = function(e, t) {
            void 0 === t && (t = i.Humanized);
            var a;
            t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS);
            switch (t) {
                case i.ClockHM:
                case i.ClockHMS:
                    a = n.Hour;
                    break;
                case i.ClockMS:
                    a = n.Minute
            }
            var l = 2;
            t === i.ClockHMS && (l = 3);
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
                    t !== i.Humanized && t !== i.HumanizedShort || u[e] || delete u[e], a < c.length - l && delete u[e]
                }), t === i.Humanized) return function(e) {
                return e.months ? s(n.Month, e.months) : e.weeks && e.days ? s(n.Week, e.weeks) + " " + s(n.Day, e.days) : e.weeks ? s(n.Week, e.weeks) : e.days && e.hours ? s(n.Day, e.days) + " " + s(n.Hour, e.hours) : e.days ? s(n.Day, e.days) : e.hours && e.minutes ? s(n.Hour, e.hours) + " " + s(n.Minute, e.minutes) : e.hours ? s(n.Hour, e.hours) : e.minutes && e.seconds ? s(n.Minute, e.minutes) + " " + s(n.Second, e.seconds) : e.minutes ? s(n.Minute, e.minutes) : s(n.Second, e.seconds || 0)
            }(u);
            if (t === i.HumanizedShort) return function(e) {
                return e.months ? o(n.Month, e.months) : e.weeks && e.days ? "" + o(n.Week, e.weeks) + o(n.Day, e.days) : e.weeks ? o(n.Week, e.weeks) : e.days && e.hours ? "" + o(n.Day, e.days) + o(n.Hour, e.hours) : e.days ? o(n.Day, e.days) : e.hours && e.minutes ? "" + o(n.Hour, e.hours) + o(n.Minute, e.minutes) : e.hours ? o(n.Hour, e.hours) : e.minutes && e.seconds ? "" + o(n.Minute, e.minutes) + o(n.Second, e.seconds) : e.minutes ? o(n.Minute, e.minutes) : o(n.Second, e.seconds || 0)
            }(u);
            var m = ":",
                _ = !1;
            switch (r.o.intl.getLanguageCode()) {
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
                    _ = !0
            }
            var h = u.seconds || 0,
                f = u.minutes || 0,
                p = u.hours || 0;
            switch (t) {
                case i.ClockHM:
                case i.ClockHMS:
                    var y = _ ? d(p, 2) : p,
                        g = y + m + d(f, 2);
                    return t === i.ClockHMS && (g += m + d(h, 2)), g;
                case i.ClockMS:
                    var y = _ ? d(f, 2) : f;
                    return y + m + d(h, 2)
            }
        };
        var n, i, r = a("6sO2");

        function s(e, t) {
            switch (e) {
                case n.Second:
                    return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case n.Minute:
                    return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case n.Hour:
                    return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case n.Day:
                    return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case n.Week:
                    return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case n.Month:
                    return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function o(e, t) {
            switch (e) {
                case n.Second:
                    return Object(r.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case n.Minute:
                    return Object(r.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case n.Hour:
                    return Object(r.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case n.Day:
                    return Object(r.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case n.Week:
                    return Object(r.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case n.Month:
                    return Object(r.d)("{monthCount}mo", {
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
        }(i || (i = {}))
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
            i = a("L5rj"),
            r = a("iO9N");
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
                    i = a.labels;
                if (n.length)
                    for (var r = 0; r < n[0].data.length; ++r) t.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(a, n) {
                            var i = e.getDatasetMeta(0),
                                s = t.datasets[0],
                                o = i.data[n].custom || {},
                                d = r.valueAtIndexOrDefault,
                                l = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: o.backgroundColor ? o.backgroundColor : d(s.backgroundColor, n, l.backgroundColor),
                                strokeStyle: o.borderColor ? o.borderColor : d(s.borderColor, n, l.borderColor),
                                lineWidth: o.borderWidth ? o.borderWidth : d(s.borderWidth, n, l.borderWidth),
                                hidden: isNaN(s.data[n]) || i.data[n].hidden,
                                index: n
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, i, r = t.index,
                        s = this.chart;
                    for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(i = s.getDatasetMeta(a)).data[r].hidden = !i.data[r].hidden;
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
                dataElementType: i.Arc,
                linkScales: r.noop,
                update: function(e) {
                    var t = this,
                        a = t.chart,
                        n = a.chartArea,
                        i = t.getMeta(),
                        s = a.options,
                        o = s.elements.arc,
                        d = Math.min(n.right - n.left, n.bottom - n.top);
                    a.outerRadius = Math.max((d - o.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(s.cutoutPercentage ? a.outerRadius / 100 * s.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), t.outerRadius = a.outerRadius - a.radiusLength * t.index, t.innerRadius = t.outerRadius - a.radiusLength, i.count = t.countVisibleElements(), r.each(i.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    for (var n = this, i = n.chart, s = n.getDataset(), o = i.options, d = o.animation, l = i.scale, u = i.data.labels, c = n.calculateCircumference(s.data[t]), m = l.xCenter, _ = l.yCenter, h = 0, f = n.getMeta(), p = 0; p < t; ++p) isNaN(s.data[p]) || f.data[p].hidden || ++h;
                    var y = o.startAngle,
                        g = e.hidden ? 0 : l.getDistanceFromCenterForValue(s.data[t]),
                        M = y + c * h,
                        v = M + (e.hidden ? 0 : c),
                        L = d.animateScale ? 0 : l.getDistanceFromCenterForValue(s.data[t]);
                    r.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _scale: l,
                        _model: {
                            x: m,
                            y: _,
                            innerRadius: 0,
                            outerRadius: a ? L : g,
                            startAngle: a && d.animateRotate ? y : M,
                            endAngle: a && d.animateRotate ? y : v,
                            label: r.valueAtIndexOrDefault(u, t, u[t])
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
                    return r.each(t.data, function(t, n) {
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
            i = a("L5rj"),
            r = a("iO9N");
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
                dataElementType: i.Rectangle,
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
                        i = n.chart,
                        s = n.getMeta(),
                        o = n.getDataset(),
                        d = e.custom || {},
                        l = i.options.elements.rectangle;
                    e._xScale = n.getScaleForId(s.xAxisID), e._yScale = n.getScaleForId(s.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
                        datasetLabel: o.label,
                        label: i.data.labels[t],
                        borderSkipped: d.borderSkipped ? d.borderSkipped : l.borderSkipped,
                        backgroundColor: d.backgroundColor ? d.backgroundColor : r.valueAtIndexOrDefault(o.backgroundColor, t, l.backgroundColor),
                        borderColor: d.borderColor ? d.borderColor : r.valueAtIndexOrDefault(o.borderColor, t, l.borderColor),
                        borderWidth: d.borderWidth ? d.borderWidth : r.valueAtIndexOrDefault(o.borderWidth, t, l.borderWidth)
                    }, n.updateElementGeometry(e, t, a), e.pivot()
                },
                updateElementGeometry: function(e, t, a) {
                    var n = this,
                        i = e._model,
                        r = n.getValueScale(),
                        s = r.getBasePixel(),
                        o = r.isHorizontal(),
                        d = n._ruler || n.getRuler(),
                        l = n.calculateBarValuePixels(n.index, t),
                        u = n.calculateBarIndexPixels(n.index, t, d);
                    i.horizontal = o, i.base = a ? s : l.base, i.x = o ? a ? s : l.head : u.center, i.y = o ? u.center : a ? s : l.head, i.height = o ? u.size : void 0, i.width = o ? void 0 : u.size
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
                        i = this.getIndexScale().options.stacked,
                        r = void 0 === e ? n.data.datasets.length : e + 1,
                        s = [];
                    for (t = 0; t < r; ++t)(a = n.getDatasetMeta(t)).bar && n.isDatasetVisible(t) && (!1 === i || !0 === i && -1 === s.indexOf(a.stack) || void 0 === i && (void 0 === a.stack || -1 === s.indexOf(a.stack))) && s.push(a.stack);
                    return s.length
                },
                getStackIndex: function(e) {
                    return this.getStackCount(e) - 1
                },
                getRuler: function() {
                    var e, t, a = this.getIndexScale(),
                        n = this.getStackCount(),
                        i = this.index,
                        r = [],
                        s = a.isHorizontal(),
                        o = s ? a.left : a.top,
                        d = o + (s ? a.width : a.height);
                    for (e = 0, t = this.getMeta().data.length; e < t; ++e) r.push(a.getPixelForValue(null, e, i));
                    return {
                        pixels: r,
                        start: o,
                        end: d,
                        stackCount: n,
                        scale: a
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var a, n, i, r, s, o, d = this.chart,
                        l = this.getMeta(),
                        u = this.getValueScale(),
                        c = d.data.datasets,
                        m = u.getRightValue(c[e].data[t]),
                        _ = u.options.stacked,
                        h = l.stack,
                        f = 0;
                    if (_ || void 0 === _ && void 0 !== h)
                        for (a = 0; a < e; ++a)(n = d.getDatasetMeta(a)).bar && n.stack === h && n.controller.getValueScaleId() === u.id && d.isDatasetVisible(a) && (i = u.getRightValue(c[a].data[t]), (m < 0 && i < 0 || m >= 0 && i > 0) && (f += i));
                    return r = u.getPixelForValue(f), {
                        size: o = ((s = u.getPixelForValue(f + m)) - r) / 2,
                        base: r,
                        head: s,
                        center: s + o / 2
                    }
                },
                calculateBarIndexPixels: function(e, t, a) {
                    var n, i, s, o, d, l = a.scale.options,
                        u = this.getStackIndex(e),
                        c = a.pixels,
                        m = c[t],
                        _ = c.length,
                        h = a.start,
                        f = a.end;
                    return 1 === _ ? (n = m > h ? m - h : f - m, i = m < f ? f - m : m - h) : (t > 0 && (n = (m - c[t - 1]) / 2, t === _ - 1 && (i = n)), t < _ - 1 && (i = (c[t + 1] - m) / 2, 0 === t && (n = i))), d = (o = ((s = n * l.categoryPercentage) + i * l.categoryPercentage) / a.stackCount) * l.barPercentage, m -= s, m += o * u, {
                        size: d = Math.min(r.valueOrDefault(l.barThickness, d), r.valueOrDefault(l.maxBarThickness, 1 / 0)),
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
                        i = a.length,
                        s = 0;
                    for (r.canvas.clipArea(e.ctx, e.chartArea); s < i; ++s) isNaN(t.getRightValue(n.data[s])) || a[s].draw();
                    r.canvas.unclipArea(e.ctx)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        n = e.custom || {},
                        i = e._model;
                    i.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(t.hoverBackgroundColor, a, r.getHoverColor(i.backgroundColor)), i.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(t.hoverBorderColor, a, r.getHoverColor(i.borderColor)), i.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(t.hoverBorderWidth, a, i.borderWidth)
                },
                removeHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        n = e.custom || {},
                        i = e._model,
                        s = this.chart.options.elements.rectangle;
                    i.backgroundColor = n.backgroundColor ? n.backgroundColor : r.valueAtIndexOrDefault(t.backgroundColor, a, s.backgroundColor), i.borderColor = n.borderColor ? n.borderColor : r.valueAtIndexOrDefault(t.borderColor, a, s.borderColor), i.borderWidth = n.borderWidth ? n.borderWidth : r.valueAtIndexOrDefault(t.borderWidth, a, s.borderWidth)
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
                    var a, i = [];
                    if (e.stepSize && e.stepSize > 0) a = e.stepSize;
                    else {
                        var r = n.niceNum(t.max - t.min, !1);
                        a = n.niceNum(r / (e.maxTicks - 1), !0)
                    }
                    var s = Math.floor(t.min / a) * a,
                        o = Math.ceil(t.max / a) * a;
                    e.min && e.max && e.stepSize && n.almostWhole((e.max - e.min) / e.stepSize, a / 1e3) && (s = e.min, o = e.max);
                    var d = (o - s) / a;
                    d = n.almostEquals(d, Math.round(d), a / 1e3) ? Math.round(d) : Math.ceil(d), i.push(void 0 !== e.min ? e.min : s);
                    for (var l = 1; l < d; ++l) i.push(s + l * a);
                    return i.push(void 0 !== e.max ? e.max : o), i
                },
                logarithmic: function(e, t) {
                    var a, i, r = [],
                        s = n.valueOrDefault,
                        o = s(e.min, Math.pow(10, Math.floor(n.log10(t.min)))),
                        d = Math.floor(n.log10(t.max)),
                        l = Math.ceil(t.max / Math.pow(10, d));
                    0 === o ? (a = Math.floor(n.log10(t.minNotZero)), i = Math.floor(t.minNotZero / Math.pow(10, a)), r.push(o), o = i * Math.pow(10, a)) : (a = Math.floor(n.log10(o)), i = Math.floor(o / Math.pow(10, a)));
                    do {
                        r.push(o), 10 === ++i && (i = 1, ++a), o = i * Math.pow(10, a)
                    } while (a < d || a === d && i < l);
                    var u = s(e.max, o);
                    return r.push(u), r
                }
            },
            formatters: {
                values: function(e) {
                    return n.isArray(e) ? e : "" + e
                },
                linear: function(e, t, a) {
                    var i = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                    Math.abs(i) > 1 && e !== Math.floor(e) && (i = e - Math.floor(e));
                    var r = n.log10(Math.abs(i)),
                        s = "";
                    if (0 !== e) {
                        var o = -1 * Math.floor(r);
                        o = Math.max(Math.min(o, 20), 0), s = e.toFixed(o)
                    } else s = "0";
                    return s
                },
                logarithmic: function(e, t, a) {
                    var i = e / Math.pow(10, Math.floor(n.log10(e)));
                    return 0 === e ? "0" : 1 === i || 2 === i || 5 === i || 0 === t || t === a.length - 1 ? e.toExponential() : ""
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
                }, i = 0; i < a; i++) n(i);
            return t
        }, t.a = function(e, t) {
            if ("function" == typeof window.navigator.msSaveBlob) {
                var a = new Blob([t], {
                    type: "text/csv;charset=utf-8;"
                });
                return window.navigator.msSaveBlob(a, e)
            }
            var n = document.createElement("a"),
                i = encodeURIComponent(t);
            void 0 === n.download ? n.href = "data:attachment/csv;charset=utf-8," + i : (n.href = "data:text/csv;charset=utf-8," + i, n.download = e);
            n.target = "_blank", n.setAttribute("style", "visibility: hidden"), document.body.appendChild(n), n.click(), document.body.removeChild(n)
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

        function i(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : n.getRelativePosition(e, t)
        }

        function r(e, t) {
            var a, n, i, r, s;
            for (n = 0, r = e.data.datasets.length; n < r; ++n)
                if (e.isDatasetVisible(n))
                    for (i = 0, s = (a = e.getDatasetMeta(n)).data.length; i < s; ++i) {
                        var o = a.data[i];
                        o._view.skip || t(o)
                    }
        }

        function s(e, t) {
            var a = [];
            return r(e, function(e) {
                e.inRange(t.x, t.y) && a.push(e)
            }), a
        }

        function o(e, t, a, n) {
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

        function d(e) {
            var t = -1 !== e.indexOf("x"),
                a = -1 !== e.indexOf("y");
            return function(e, n) {
                var i = t ? Math.abs(e.x - n.x) : 0,
                    r = a ? Math.abs(e.y - n.y) : 0;
                return Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
            }
        }

        function l(e, t, a) {
            var n = i(t, e);
            a.axis = a.axis || "x";
            var r = d(a.axis),
                l = a.intersect ? s(e, n) : o(e, n, !1, r),
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
                    var a = i(t, e),
                        n = [];
                    return r(e, function(e) {
                        if (e.inRange(a.x, a.y)) return n.push(e), n
                    }), n.slice(0, 1)
                },
                label: l,
                index: l,
                dataset: function(e, t, a) {
                    var n = i(t, e);
                    a.axis = a.axis || "xy";
                    var r = d(a.axis),
                        l = a.intersect ? s(e, n) : o(e, n, !1, r);
                    return l.length > 0 && (l = e.getDatasetMeta(l[0]._datasetIndex).data), l
                },
                "x-axis": function(e, t) {
                    return l(e, t, {
                        intersect: !1
                    })
                },
                point: function(e, t) {
                    return s(e, i(t, e))
                },
                nearest: function(e, t, a) {
                    var n = i(t, e);
                    a.axis = a.axis || "xy";
                    var r = d(a.axis),
                        s = o(e, n, a.intersect, r);
                    return s.length > 1 && s.sort(function(e, t) {
                        var a = e.getArea() - t.getArea();
                        return 0 === a && (a = e._datasetIndex - t._datasetIndex), a
                    }), s.slice(0, 1)
                },
                x: function(e, t, a) {
                    var n = i(t, e),
                        s = [],
                        o = !1;
                    return r(e, function(e) {
                        e.inXRange(n.x) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                    }), a.intersect && !o && (s = []), s
                },
                y: function(e, t, a) {
                    var n = i(t, e),
                        s = [],
                        o = !1;
                    return r(e, function(e) {
                        e.inYRange(n.y) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                    }), a.intersect && !o && (s = []), s
                }
            }
        }
    },
    KMD5: function(e, t, a) {
        "use strict";
        var n = a("GiK3"),
            i = a("6sO2"),
            r = a("rEvf"),
            s = a("Odds"),
            o = function(e) {
                return e.quest.completedAchievements.includes(e.achievement) ? n.createElement("span", {
                    title: Object(i.d)("Completed within the last 30 days", "AchievementsQuests")
                }, n.createElement(r.a, null)) : e.achievement.completedAt ? null : e.achievement.progress ? n.createElement(s._35, {
                    className: "ach-card__pill-wrapper",
                    fontSize: s.V.Size5
                }, n.createElement(s._12, {
                    label: Object(i.e)(e.achievement.progressRatio, "percent")
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
            i = a("6sO2"),
            r = a("Odds"),
            s = function(e) {
                var t = Object(i.d)("Completed on {completedAt, date, short}", {
                        completedAt: e.date
                    }, "AchievementCard"),
                    a = Object(i.c)(e.date, "short");
                return n.createElement(r.Q, {
                    fontSize: r.V.Size5,
                    color: r.K.Alt2,
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
    NqVV: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            i = a("GiK3"),
            r = a("CSlQ"),
            s = a("fc0G"),
            o = a("Odds"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChannelStatus = function() {}, t.onWheelPostMessage = function(e) {
                        if (t.postMessageIsWheelEvent(e) && t.componentEl) {
                            var a = e.data.args[0].data,
                                i = new WheelEvent("wheel", n.__assign({
                                    bubbles: !0
                                }, a));
                            t.componentEl.dispatchEvent(i)
                        }
                    }, t.setComponentRef = function(e) {
                        t.componentEl = e
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), window.addEventListener("message", this.onWheelPostMessage)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.onWheelPostMessage)
                }, t.prototype.render = function() {
                    return i.createElement("div", {
                        ref: this.setComponentRef
                    }, i.createElement(o.k, {
                        ratio: o.l.Aspect16x9
                    }, this.getVideoEmbedComponent()))
                }, t.prototype.getVideoEmbedComponent = function() {
                    var e = this.props,
                        t = e.channelLogin,
                        a = e.vodID,
                        r = e.embedURL,
                        d = e.playerTypeOverride,
                        l = {
                            disableTheatreButton: !0,
                            onChannelStatus: this.onChannelStatus,
                            playerTypeOverride: d || s.b.Frontpage
                        };
                    return r ? i.createElement("iframe", {
                        src: r,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }) : t ? i.createElement(s.c, n.__assign({
                        channelLogin: t
                    }, l)) : a ? i.createElement(s.c, n.__assign({
                        vodID: a
                    }, l)) : i.createElement(o._8, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = n.__decorate([Object(r.d)("EmbedVideoPlayer")], t)
            }(i.Component);
        a.d(t, !1, function() {
            return "player.embed.client"
        }), a.d(t, !1, function() {
            return "bridgeplayereventwithpayload"
        }), a.d(t, "a", function() {
            return d
        })
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

            function i(e, t, a, i) {
                var r = e + " ";
                switch (a) {
                    case "s":
                        return t || i ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return t ? "minúta" : i ? "minútu" : "minútou";
                    case "mm":
                        return t || i ? r + (n(e) ? "minúty" : "minút") : r + "minútami";
                    case "h":
                        return t ? "hodina" : i ? "hodinu" : "hodinou";
                    case "hh":
                        return t || i ? r + (n(e) ? "hodiny" : "hodín") : r + "hodinami";
                    case "d":
                        return t || i ? "deň" : "dňom";
                    case "dd":
                        return t || i ? r + (n(e) ? "dni" : "dní") : r + "dňami";
                    case "M":
                        return t || i ? "mesiac" : "mesiacom";
                    case "MM":
                        return t || i ? r + (n(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                    case "y":
                        return t || i ? "rok" : "rokom";
                    case "yy":
                        return t || i ? r + (n(e) ? "roky" : "rokov") : r + "rokmi"
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
                    s: i,
                    m: i,
                    mm: i,
                    h: i,
                    hh: i,
                    d: i,
                    dd: i,
                    M: i,
                    MM: i,
                    y: i,
                    yy: i
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

                function i(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
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

                function _(e) {
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
                var h = Array.prototype.some ? Array.prototype.some : function(e) {
                    for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                        if (n in t && e.call(this, t[n], n, t)) return !0;
                    return !1
                };

                function f(e) {
                    if (null == e._isValid) {
                        var t = _(e),
                            a = h.call(t.parsedDateParts, function(e) {
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
                    return null != e ? c(_(t), e) : _(t).userInvalidated = !0, t
                }
                var y = n.momentProperties = [];

                function g(e, t) {
                    var a, n, i;
                    if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = _(t)), s(t._locale) || (e._locale = t._locale), y.length > 0)
                        for (a = 0; a < y.length; a++) s(i = t[n = y[a]]) || (e[n] = i);
                    return e
                }
                var M = !1;

                function v(e) {
                    g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === M && (M = !0, n.updateOffset(this), M = !1)
                }

                function L(e) {
                    return e instanceof v || null != e && null != e._isAMomentObject
                }

                function b(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function k(e) {
                    var t = +e,
                        a = 0;
                    return 0 !== t && isFinite(t) && (a = b(t)), a
                }

                function Y(e, t, a) {
                    var n, i = Math.min(e.length, t.length),
                        r = Math.abs(e.length - t.length),
                        s = 0;
                    for (n = 0; n < i; n++)(a && e[n] !== t[n] || !a && k(e[n]) !== k(t[n])) && s++;
                    return s + r
                }

                function D(e) {
                    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function w(e, t) {
                    var a = !0;
                    return c(function() {
                        if (null != n.deprecationHandler && n.deprecationHandler(null, e), a) {
                            for (var i, r = [], s = 0; s < arguments.length; s++) {
                                if (i = "", "object" == typeof arguments[s]) {
                                    for (var o in i += "\n[" + s + "] ", arguments[0]) i += o + ": " + arguments[0][o] + ", ";
                                    i = i.slice(0, -2)
                                } else i = arguments[s];
                                r.push(i)
                            }
                            D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), a = !1
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
                    for (a in t) u(t, a) && (r(e[a]) && r(t[a]) ? (n[a] = {}, c(n[a], e[a]), c(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                    for (a in e) u(e, a) && !u(t, a) && r(e[a]) && (n[a] = c({}, n[a]));
                    return n
                }

                function O(e) {
                    null != e && this.set(e)
                }
                n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
                var H = Object.keys ? Object.keys : function(e) {
                    var t, a = [];
                    for (t in e) u(e, t) && a.push(t);
                    return a
                };
                var P = {};

                function C(e, t) {
                    var a = e.toLowerCase();
                    P[a] = P[a + "s"] = P[t] = e
                }

                function E(e) {
                    return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0
                }

                function A(e) {
                    var t, a, n = {};
                    for (a in e) u(e, a) && (t = E(a)) && (n[t] = e[a]);
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
                        i = t - n.length;
                    return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n
                }
                var V = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    B = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    J = {},
                    G = {};

                function U(e, t, a, n) {
                    var i = n;
                    "string" == typeof n && (i = function() {
                        return this[n]()
                    }), e && (G[e] = i), t && (G[t[0]] = function() {
                        return N(i.apply(this, arguments), t[1], t[2])
                    }), a && (G[a] = function() {
                        return this.localeData().ordinal(i.apply(this, arguments), e)
                    })
                }

                function q(e, t) {
                    return e.isValid() ? (t = K(t, e.localeData()), J[t] = J[t] || function(e) {
                        var t, a, n, i = e.match(V);
                        for (t = 0, a = i.length; t < a; t++) G[i[t]] ? i[t] = G[i[t]] : i[t] = (n = i[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                        return function(t) {
                            var n, r = "";
                            for (n = 0; n < a; n++) r += T(i[n]) ? i[n].call(t, e) : i[n];
                            return r
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
                    Z = /\d\d/,
                    X = /\d{3}/,
                    $ = /\d{4}/,
                    ee = /[+-]?\d{6}/,
                    te = /\d\d?/,
                    ae = /\d\d\d\d?/,
                    ne = /\d\d\d\d\d\d?/,
                    ie = /\d{1,3}/,
                    re = /\d{1,4}/,
                    se = /[+-]?\d{1,6}/,
                    oe = /\d+/,
                    de = /[+-]?\d+/,
                    le = /Z|[+-]\d\d:?\d\d/gi,
                    ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    ce = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    me = {};

                function _e(e, t, a) {
                    me[e] = T(t) ? t : function(e, n) {
                        return e && a ? a : t
                    }
                }

                function he(e, t) {
                    return u(me, e) ? me[e](t._strict, t._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, i) {
                        return t || a || n || i
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
                    ye(e, function(e, a, n, i) {
                        n._w = n._w || {}, t(e, n._w, n, i)
                    })
                }

                function Me(e, t, a) {
                    null != t && u(pe, e) && pe[e](t, a._a, a, e)
                }
                var ve = 0,
                    Le = 1,
                    be = 2,
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
                U("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), U("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), U("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), C("month", "M"), W("month", 8), _e("M", te), _e("MM", te, Z), _e("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), _e("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ye(["M", "MM"], function(e, t) {
                    t[Le] = k(e) - 1
                }), ye(["MMM", "MMMM"], function(e, t, a, n) {
                    var i = a._locale.monthsParse(e, n, a._strict);
                    null != i ? t[Le] = i : _(a).invalidMonth = e
                });
                var Oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
                var Pe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                function Ce(e, t) {
                    var a;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = k(t);
                        else if (!o(t = e.localeData().monthsParse(t))) return e;
                    return a = Math.min(e.date(), je(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                }

                function Ee(e) {
                    return null != e ? (Ce(this, e), n.updateOffset(this, !0), this) : R(this, "Month")
                }
                var Ae = ce;
                var Fe = ce;

                function We() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n = [],
                        i = [],
                        r = [];
                    for (t = 0; t < 12; t++) a = m([2e3, t]), n.push(this.monthsShort(a, "")), i.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
                    for (n.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) n[t] = fe(n[t]), i[t] = fe(i[t]);
                    for (t = 0; t < 24; t++) r[t] = fe(r[t]);
                    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function Ie(e) {
                    return Re(e) ? 366 : 365
                }

                function Re(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }
                U("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), U(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), W("year", 1), _e("Y", de), _e("YY", te, Z), _e("YYYY", re, $), _e("YYYYY", se, ee), _e("YYYYYY", se, ee), ye(["YYYYY", "YYYYYY"], ve), ye("YYYY", function(e, t) {
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

                function Be(e, t, a, n, i) {
                    var r, s, o = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Ve(e, n, i);
                    return o <= 0 ? s = Ie(r = e - 1) + o : o > Ie(e) ? (r = e + 1, s = o - Ie(e)) : (r = e, s = o), {
                        year: r,
                        dayOfYear: s
                    }
                }

                function Je(e, t, a) {
                    var n, i, r = Ve(e.year(), t, a),
                        s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                    return s < 1 ? n = s + Ge(i = e.year() - 1, t, a) : s > Ge(e.year(), t, a) ? (n = s - Ge(e.year(), t, a), i = e.year() + 1) : (i = e.year(), n = s), {
                        week: n,
                        year: i
                    }
                }

                function Ge(e, t, a) {
                    var n = Ve(e, t, a),
                        i = Ve(e + 1, t, a);
                    return (Ie(e) - n + i) / 7
                }
                U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), W("week", 5), W("isoWeek", 5), _e("w", te), _e("ww", te, Z), _e("W", te), _e("WW", te, Z), ge(["w", "ww", "W", "WW"], function(e, t, a, n) {
                    t[n.substr(0, 1)] = k(e)
                });
                U("d", 0, "do", "day"), U("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), U("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), U("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), _e("d", te), _e("e", te), _e("E", te), _e("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), _e("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), _e("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ge(["dd", "ddd", "dddd"], function(e, t, a, n) {
                    var i = a._locale.weekdaysParse(e, n, a._strict);
                    null != i ? t.d = i : _(a).invalidWeekday = e
                }), ge(["d", "e", "E"], function(e, t, a, n) {
                    t[n] = k(e)
                });
                var Ue = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
                var qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
                var Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
                var Qe = ce;
                var Ze = ce;
                var Xe = ce;

                function $e() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n, i, r, s = [],
                        o = [],
                        d = [],
                        l = [];
                    for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), i = this.weekdaysShort(a, ""), r = this.weekdays(a, ""), s.push(n), o.push(i), d.push(r), l.push(n), l.push(i), l.push(r);
                    for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = fe(o[t]), d[t] = fe(d[t]), l[t] = fe(l[t]);
                    this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                }

                function et() {
                    return this.hours() % 12 || 12
                }

                function tt(e, t) {
                    U(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function at(e, t) {
                    return t._meridiemParse
                }
                U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, et), U("k", ["kk", 2], 0, function() {
                    return this.hours() || 24
                }), U("hmm", 0, 0, function() {
                    return "" + et.apply(this) + N(this.minutes(), 2)
                }), U("hmmss", 0, 0, function() {
                    return "" + et.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
                }), U("Hmm", 0, 0, function() {
                    return "" + this.hours() + N(this.minutes(), 2)
                }), U("Hmmss", 0, 0, function() {
                    return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
                }), tt("a", !0), tt("A", !1), C("hour", "h"), W("hour", 13), _e("a", at), _e("A", at), _e("H", te), _e("h", te), _e("k", te), _e("HH", te, Z), _e("hh", te, Z), _e("kk", te, Z), _e("hmm", ae), _e("hmmss", ne), _e("Hmm", ae), _e("Hmmss", ne), ye(["H", "HH"], ke), ye(["k", "kk"], function(e, t, a) {
                    var n = k(e);
                    t[ke] = 24 === n ? 0 : n
                }), ye(["a", "A"], function(e, t, a) {
                    a._isPm = a._locale.isPM(e), a._meridiem = e
                }), ye(["h", "hh"], function(e, t, a) {
                    t[ke] = k(e), _(a).bigHour = !0
                }), ye("hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n)), _(a).bigHour = !0
                }), ye("hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        i = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n, 2)), t[De] = k(e.substr(i)), _(a).bigHour = !0
                }), ye("Hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n))
                }), ye("Hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        i = e.length - 2;
                    t[ke] = k(e.substr(0, n)), t[Ye] = k(e.substr(n, 2)), t[De] = k(e.substr(i))
                });
                var nt, it = I("Hours", !0),
                    rt = {
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
                        monthsShort: Pe,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: Ue,
                        weekdaysMin: Ke,
                        weekdaysShort: qe,
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
                        var a = rt;
                        if (t.abbr = e, null != st[e]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = st[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == st[t.parentLocale]) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = st[t.parentLocale]._config
                        }
                        return st[e] = new O(j(a, t)), ot[e] && ot[e].forEach(function(e) {
                            ct(e.name, e.config)
                        }), ut(e), st[e]
                    }
                    return delete st[e], null
                }

                function mt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return nt;
                    if (!i(e)) {
                        if (t = lt(e)) return t;
                        e = [e]
                    }
                    return function(e) {
                        for (var t, a, n, i, r = 0; r < e.length;) {
                            for (t = (i = dt(e[r]).split("-")).length, a = (a = dt(e[r + 1])) ? a.split("-") : null; t > 0;) {
                                if (n = lt(i.slice(0, t).join("-"))) return n;
                                if (a && a.length >= t && Y(i, a, !0) >= t - 1) break;
                                t--
                            }
                            r++
                        }
                        return null
                    }(e)
                }

                function _t(e) {
                    var t, a = e._a;
                    return a && -2 === _(e).overflow && (t = a[Le] < 0 || a[Le] > 11 ? Le : a[be] < 1 || a[be] > je(a[ve], a[Le]) ? be : a[ke] < 0 || a[ke] > 24 || 24 === a[ke] && (0 !== a[Ye] || 0 !== a[De] || 0 !== a[we]) ? ke : a[Ye] < 0 || a[Ye] > 59 ? Ye : a[De] < 0 || a[De] > 59 ? De : a[we] < 0 || a[we] > 999 ? we : -1, _(e)._overflowDayOfYear && (t < ve || t > be) && (t = be), _(e)._overflowWeeks && -1 === t && (t = Se), _(e)._overflowWeekday && -1 === t && (t = xe), _(e).overflow = t), e
                }
                var ht = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
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
                    var t, a, n, i, r, s, o = e._i,
                        d = ht.exec(o) || ft.exec(o);
                    if (d) {
                        for (_(e).iso = !0, t = 0, a = yt.length; t < a; t++)
                            if (yt[t][1].exec(d[1])) {
                                i = yt[t][0], n = !1 !== yt[t][2];
                                break
                            }
                        if (null == i) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, a = gt.length; t < a; t++)
                                if (gt[t][1].exec(d[3])) {
                                    r = (d[2] || " ") + gt[t][0];
                                    break
                                }
                            if (null == r) return void(e._isValid = !1)
                        }
                        if (!n && null != r) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!pt.exec(d[4])) return void(e._isValid = !1);
                            s = "Z"
                        }
                        e._f = i + (r || "") + (s || ""), Dt(e)
                    } else e._isValid = !1
                }
                var Lt = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

                function bt(e) {
                    var t, a, n, i, r, s, o, d, l = {
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
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), a = Lt.exec(t)) {
                        if (n = a[1] ? "ddd" + (5 === a[1].length ? ", " : " ") : "", i = "D MMM " + (a[2].length > 10 ? "YYYY " : "YY "), r = "HH:mm" + (a[4] ? ":ss" : ""), a[1]) {
                            var u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(a[2]).getDay()];
                            if (a[1].substr(0, 3) !== u) return _(e).weekdayMismatch = !0, void(e._isValid = !1)
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
                        a[5] = o, e._i = a.splice(1).join(""), s = " ZZ", e._f = n + i + r + s, Dt(e), _(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function kt(e, t, a) {
                    return null != e ? e : null != t ? t : a
                }

                function Yt(e) {
                    var t, a, i, r, s = [];
                    if (!e._d) {
                        for (i = function(e) {
                                var t = new Date(n.now());
                                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                            }(e), e._w && null == e._a[be] && null == e._a[Le] && function(e) {
                                var t, a, n, i, r, s, o, d;
                                if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, s = 4, a = kt(t.GG, e._a[ve], Je(xt(), 1, 4).year), n = kt(t.W, 1), ((i = kt(t.E, 1)) < 1 || i > 7) && (d = !0);
                                else {
                                    r = e._locale._week.dow, s = e._locale._week.doy;
                                    var l = Je(xt(), r, s);
                                    a = kt(t.gg, e._a[ve], l.year), n = kt(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (d = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (d = !0)) : i = r
                                }
                                n < 1 || n > Ge(a, r, s) ? _(e)._overflowWeeks = !0 : null != d ? _(e)._overflowWeekday = !0 : (o = Be(a, n, i, r, s), e._a[ve] = o.year, e._dayOfYear = o.dayOfYear)
                            }(e), null != e._dayOfYear && (r = kt(e._a[ve], i[ve]), (e._dayOfYear > Ie(r) || 0 === e._dayOfYear) && (_(e)._overflowDayOfYear = !0), a = Ne(r, 0, e._dayOfYear), e._a[Le] = a.getUTCMonth(), e._a[be] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = i[t];
                        for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[ke] && 0 === e._a[Ye] && 0 === e._a[De] && 0 === e._a[we] && (e._nextDay = !0, e._a[ke] = 0), e._d = (e._useUTC ? Ne : function(e, t, a, n, i, r, s) {
                            var o = new Date(e, t, a, n, i, r, s);
                            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                        }).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ke] = 24)
                    }
                }

                function Dt(e) {
                    if (e._f !== n.ISO_8601)
                        if (e._f !== n.RFC_2822) {
                            e._a = [], _(e).empty = !0;
                            var t, a, i, r, s, o = "" + e._i,
                                d = o.length,
                                l = 0;
                            for (i = K(e._f, e._locale).match(V) || [], t = 0; t < i.length; t++) r = i[t], (a = (o.match(he(r, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(a))).length > 0 && _(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), l += a.length), G[r] ? (a ? _(e).empty = !1 : _(e).unusedTokens.push(r), Me(r, a, e)) : e._strict && !a && _(e).unusedTokens.push(r);
                            _(e).charsLeftOver = d - l, o.length > 0 && _(e).unusedInput.push(o), e._a[ke] <= 12 && !0 === _(e).bigHour && e._a[ke] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[ke] = function(e, t, a) {
                                var n;
                                if (null == a) return t;
                                return null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                            }(e._locale, e._a[ke], e._meridiem), Yt(e), _t(e)
                        } else bt(e);
                    else vt(e)
                }

                function wt(e) {
                    var t = e._i,
                        a = e._f;
                    return e._locale = e._locale || mt(e._l), null === t || void 0 === a && "" === t ? p({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), L(t) ? new v(_t(t)) : (d(t) ? e._d = t : i(a) ? function(e) {
                        var t, a, n, i, r;
                        if (0 === e._f.length) return _(e).invalidFormat = !0, void(e._d = new Date(NaN));
                        for (i = 0; i < e._f.length; i++) r = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Dt(t), f(t) && (r += _(t).charsLeftOver, r += 10 * _(t).unusedTokens.length, _(t).score = r, (null == n || r < n) && (n = r, a = t));
                        c(e, a || t)
                    }(e) : a ? Dt(e) : function(e) {
                        var t = e._i;
                        s(t) ? e._d = new Date(n.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                            var t = Mt.exec(e._i);
                            null === t ? (vt(e), !1 === e._isValid && (delete e._isValid, bt(e), !1 === e._isValid && (delete e._isValid, n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                        }(e) : i(t) ? (e._a = l(t.slice(0), function(e) {
                            return parseInt(e, 10)
                        }), Yt(e)) : r(t) ? function(e) {
                            if (!e._d) {
                                var t = A(e._i);
                                e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                    return e && parseInt(e, 10)
                                }), Yt(e)
                            }
                        }(e) : o(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
                    }(e), f(e) || (e._d = null), e))
                }

                function St(e, t, a, n, s) {
                    var o, d = {};
                    return !0 !== a && !1 !== a || (n = a, a = void 0), (r(e) && function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    }(e) || i(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = a, d._i = e, d._f = t, d._strict = n, (o = new v(_t(wt(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
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

                function Ot(e, t) {
                    var a, n;
                    if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return xt();
                    for (a = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](a) || (a = t[n]);
                    return a
                }
                var Ht = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function Pt(e) {
                    var t = A(e),
                        a = t.year || 0,
                        n = t.quarter || 0,
                        i = t.month || 0,
                        r = t.week || 0,
                        s = t.day || 0,
                        o = t.hour || 0,
                        d = t.minute || 0,
                        l = t.second || 0,
                        u = t.millisecond || 0;
                    this._isValid = function(e) {
                        for (var t in e)
                            if (-1 === Ht.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                        for (var a = !1, n = 0; n < Ht.length; ++n)
                            if (e[Ht[n]]) {
                                if (a) return !1;
                                parseFloat(e[Ht[n]]) !== k(e[Ht[n]]) && (a = !0)
                            }
                        return !0
                    }(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * r, this._months = +i + 3 * n + 12 * a, this._data = {}, this._locale = mt(), this._bubble()
                }

                function Ct(e) {
                    return e instanceof Pt
                }

                function Et(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function At(e, t) {
                    U(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            a = "+";
                        return e < 0 && (e = -e, a = "-"), a + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
                    })
                }
                At("Z", ":"), At("ZZ", ""), _e("Z", ue), _e("ZZ", ue), ye(["Z", "ZZ"], function(e, t, a) {
                    a._useUTC = !0, a._tzm = Wt(ue, e)
                });
                var Ft = /([\+\-]|\d\d)/gi;

                function Wt(e, t) {
                    var a = (t || "").match(e);
                    if (null === a) return null;
                    var n = ((a[a.length - 1] || []) + "").match(Ft) || ["-", 0, 0],
                        i = 60 * n[1] + k(n[2]);
                    return 0 === i ? 0 : "+" === n[0] ? i : -i
                }

                function It(e, t) {
                    var a, i;
                    return t._isUTC ? (a = t.clone(), i = (L(e) || d(e) ? e.valueOf() : xt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + i), n.updateOffset(a, !1), a) : xt(e).local()
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
                    var a, n, i, r = e,
                        s = null;
                    return Ct(e) ? r = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : o(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (s = Nt.exec(e)) ? (a = "-" === s[1] ? -1 : 1, r = {
                        y: 0,
                        d: k(s[be]) * a,
                        h: k(s[ke]) * a,
                        m: k(s[Ye]) * a,
                        s: k(s[De]) * a,
                        ms: k(Et(1e3 * s[we])) * a
                    }) : (s = Vt.exec(e)) ? (a = "-" === s[1] ? -1 : 1, r = {
                        y: Jt(s[2], a),
                        M: Jt(s[3], a),
                        w: Jt(s[4], a),
                        d: Jt(s[5], a),
                        h: Jt(s[6], a),
                        m: Jt(s[7], a),
                        s: Jt(s[8], a)
                    }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = function(e, t) {
                        var a;
                        if (!e.isValid() || !t.isValid()) return {
                            milliseconds: 0,
                            months: 0
                        };
                        t = It(t, e), e.isBefore(t) ? a = Gt(e, t) : ((a = Gt(t, e)).milliseconds = -a.milliseconds, a.months = -a.months);
                        return a
                    }(xt(r.from), xt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), n = new Pt(r), Ct(e) && u(e, "_locale") && (n._locale = e._locale), n
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

                function Ut(e, t) {
                    return function(a, n) {
                        var i;
                        return null === n || isNaN(+n) || (x(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = n, n = i), qt(this, Bt(a = "string" == typeof a ? +a : a, n), e), this
                    }
                }

                function qt(e, t, a, i) {
                    var r = t._milliseconds,
                        s = Et(t._days),
                        o = Et(t._months);
                    e.isValid() && (i = null == i || i, r && e._d.setTime(e._d.valueOf() + r * a), s && z(e, "Date", R(e, "Date") + s * a), o && Ce(e, R(e, "Month") + o * a), i && n.updateOffset(e, s || o))
                }
                Bt.fn = Pt.prototype, Bt.invalid = function() {
                    return Bt(NaN)
                };
                var Kt = Ut(1, "add"),
                    Qt = Ut(-1, "subtract");

                function Zt(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = mt(e)) && (this._locale = t), this)
                }
                n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Xt = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });

                function $t() {
                    return this._locale
                }

                function ea(e, t) {
                    U(0, [e, e.length], 0, t)
                }

                function ta(e, t, a, n, i) {
                    var r;
                    return null == e ? Je(this, n, i).year : (t > (r = Ge(e, n, i)) && (t = r), function(e, t, a, n, i) {
                        var r = Be(e, t, a, n, i),
                            s = Ne(r.year, 0, r.dayOfYear);
                        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                    }.call(this, e, t, a, n, i))
                }
                U(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), U(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), ea("gggg", "weekYear"), ea("ggggg", "weekYear"), ea("GGGG", "isoWeekYear"), ea("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), _e("G", de), _e("g", de), _e("GG", te, Z), _e("gg", te, Z), _e("GGGG", re, $), _e("gggg", re, $), _e("GGGGG", se, ee), _e("ggggg", se, ee), ge(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                    t[n.substr(0, 2)] = k(e)
                }), ge(["gg", "GG"], function(e, t, a, i) {
                    t[i] = n.parseTwoDigitYear(e)
                }), U("Q", 0, "Qo", "quarter"), C("quarter", "Q"), W("quarter", 7), _e("Q", Q), ye("Q", function(e, t) {
                    t[Le] = 3 * (k(e) - 1)
                }), U("D", ["DD", 2], "Do", "date"), C("date", "D"), W("date", 9), _e("D", te), _e("DD", te, Z), _e("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), ye(["D", "DD"], be), ye("Do", function(e, t) {
                    t[be] = k(e.match(te)[0])
                });
                var aa = I("Date", !0);
                U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), W("dayOfYear", 4), _e("DDD", ie), _e("DDDD", X), ye(["DDD", "DDDD"], function(e, t, a) {
                    a._dayOfYear = k(e)
                }), U("m", ["mm", 2], 0, "minute"), C("minute", "m"), W("minute", 14), _e("m", te), _e("mm", te, Z), ye(["m", "mm"], Ye);
                var na = I("Minutes", !1);
                U("s", ["ss", 2], 0, "second"), C("second", "s"), W("second", 15), _e("s", te), _e("ss", te, Z), ye(["s", "ss"], De);
                var ia, ra = I("Seconds", !1);
                for (U("S", 0, 0, function() {
                        return ~~(this.millisecond() / 100)
                    }), U(0, ["SS", 2], 0, function() {
                        return ~~(this.millisecond() / 10)
                    }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
                        return 10 * this.millisecond()
                    }), U(0, ["SSSSS", 5], 0, function() {
                        return 100 * this.millisecond()
                    }), U(0, ["SSSSSS", 6], 0, function() {
                        return 1e3 * this.millisecond()
                    }), U(0, ["SSSSSSS", 7], 0, function() {
                        return 1e4 * this.millisecond()
                    }), U(0, ["SSSSSSSS", 8], 0, function() {
                        return 1e5 * this.millisecond()
                    }), U(0, ["SSSSSSSSS", 9], 0, function() {
                        return 1e6 * this.millisecond()
                    }), C("millisecond", "ms"), W("millisecond", 16), _e("S", ie, Q), _e("SS", ie, Z), _e("SSS", ie, X), ia = "SSSS"; ia.length <= 9; ia += "S") _e(ia, oe);

                function sa(e, t) {
                    t[we] = k(1e3 * ("0." + e))
                }
                for (ia = "S"; ia.length <= 9; ia += "S") ye(ia, sa);
                var oa = I("Milliseconds", !1);
                U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
                var da = v.prototype;

                function la(e) {
                    return e
                }
                da.add = Kt, da.calendar = function(e, t) {
                    var a = e || xt(),
                        i = It(a, this).startOf("day"),
                        r = n.calendarFormat(this, i) || "sameElse",
                        s = t && (T(t[r]) ? t[r].call(this, a) : t[r]);
                    return this.format(s || this.localeData().calendar(r, this, xt(a)))
                }, da.clone = function() {
                    return new v(this)
                }, da.diff = function(e, t, a) {
                    var n, i, r, s;
                    return this.isValid() && (n = It(e, this)).isValid() ? (i = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (t = E(t)) || "month" === t || "quarter" === t ? (o = this, d = n, c = 12 * (d.year() - o.year()) + (d.month() - o.month()), m = o.clone().add(c, "months"), d - m < 0 ? (l = o.clone().add(c - 1, "months"), u = (d - m) / (m - l)) : (l = o.clone().add(c + 1, "months"), u = (d - m) / (l - m)), s = -(c + u) || 0, "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (r = this - n, s = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - i) / 864e5 : "week" === t ? (r - i) / 6048e5 : r), a ? s : b(s)) : NaN;
                    var o, d, l, u, c, m
                }, da.endOf = function(e) {
                    return void 0 === (e = E(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }, da.format = function(e) {
                    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                    var t = q(this, e);
                    return this.localeData().postformat(t)
                }, da.from = function(e, t) {
                    return this.isValid() && (L(e) && e.isValid() || xt(e).isValid()) ? Bt({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, da.fromNow = function(e) {
                    return this.from(xt(), e)
                }, da.to = function(e, t) {
                    return this.isValid() && (L(e) && e.isValid() || xt(e).isValid()) ? Bt({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, da.toNow = function(e) {
                    return this.to(xt(), e)
                }, da.get = function(e) {
                    return T(this[e = E(e)]) ? this[e]() : this
                }, da.invalidAt = function() {
                    return _(this).overflow
                }, da.isAfter = function(e, t) {
                    var a = L(e) ? e : xt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = E(s(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                }, da.isBefore = function(e, t) {
                    var a = L(e) ? e : xt(e);
                    return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = E(s(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                }, da.isBetween = function(e, t, a, n) {
                    return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
                }, da.isSame = function(e, t) {
                    var a, n = L(e) ? e : xt(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = E(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                }, da.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, da.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, da.isValid = function() {
                    return f(this)
                }, da.lang = Xt, da.locale = Zt, da.localeData = $t, da.max = jt, da.min = Tt, da.parsingFlags = function() {
                    return c({}, _(this))
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
                            }(e = A(e)), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
                    else if (T(this[e = E(e)])) return this[e](t);
                    return this
                }, da.startOf = function(e) {
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
                    return e.year() < 0 || e.year() > 9999 ? q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(Date.prototype.toISOString) ? this.toDate().toISOString() : q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }, da.inspect = function() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var a = "[" + e + '("]',
                        n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        i = t + '[")]';
                    return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + i)
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
                }, da.month = Ee, da.daysInMonth = function() {
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
                }, da.hour = da.hours = it, da.minute = da.minutes = na, da.second = da.seconds = ra, da.millisecond = da.milliseconds = oa, da.utcOffset = function(e, t, a) {
                    var i, r = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Wt(ue, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && t && (i = Rt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? qt(this, Bt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? r : Rt(this)
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
                }, da.dates = w("dates accessor is deprecated. Use date instead.", aa), da.months = w("months accessor is deprecated. Use month instead", Ee), da.years = w("years accessor is deprecated. Use year instead", ze), da.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
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
                var ua = O.prototype;

                function ca(e, t, a, n) {
                    var i = mt(),
                        r = m().set(n, t);
                    return i[a](r, e)
                }

                function ma(e, t, a) {
                    if (o(e) && (t = e, e = void 0), e = e || "", null != t) return ca(e, t, a, "month");
                    var n, i = [];
                    for (n = 0; n < 12; n++) i[n] = ca(e, n, a, "month");
                    return i
                }

                function _a(e, t, a, n) {
                    "boolean" == typeof e ? (o(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, o(t) && (a = t, t = void 0), t = t || "");
                    var i, r = mt(),
                        s = e ? r._week.dow : 0;
                    if (null != a) return ca(t, (a + s) % 7, n, "day");
                    var d = [];
                    for (i = 0; i < 7; i++) d[i] = ca(t, (i + s) % 7, n, "day");
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
                    var i = this._relativeTime[a];
                    return T(i) ? i(e, t, a, n) : i.replace(/%d/i, e)
                }, ua.pastFuture = function(e, t) {
                    var a = this._relativeTime[e > 0 ? "future" : "past"];
                    return T(a) ? a(t) : a.replace(/%s/i, t)
                }, ua.set = function(e) {
                    var t, a;
                    for (a in e) T(t = e[a]) ? this[a] = t : this["_" + a] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, ua.months = function(e, t) {
                    return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Oe).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
                }, ua.monthsShort = function(e, t) {
                    return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Oe.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, ua.monthsParse = function(e, t, a) {
                    var n, i, r;
                    if (this._monthsParseExact) return function(e, t, a) {
                        var n, i, r, s = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                        return a ? "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null
                    }.call(this, e, t, a);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (i = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                        if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                        if (!a && this._monthsParse[n].test(e)) return n
                    }
                }, ua.monthsRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || We.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, ua.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || We.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Ae), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, ua.week = function(e) {
                    return Je(e, this._week.dow, this._week.doy).week
                }, ua.firstDayOfYear = function() {
                    return this._week.doy
                }, ua.firstDayOfWeek = function() {
                    return this._week.dow
                }, ua.weekdays = function(e, t) {
                    return e ? i(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }, ua.weekdaysMin = function(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }, ua.weekdaysShort = function(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }, ua.weekdaysParse = function(e, t, a) {
                    var n, i, r;
                    if (this._weekdaysParseExact) return function(e, t, a) {
                        var n, i, r, s = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                        return a ? "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null
                    }.call(this, e, t, a);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                        if (i = m([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                        if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                        if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                        if (!a && this._weekdaysParse[n].test(e)) return n
                    }
                }, ua.weekdaysRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, ua.weekdaysShortRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ze), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, ua.weekdaysMinRegex = function(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
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
                var ha = Math.abs;

                function fa(e, t, a, n) {
                    var i = Bt(t, a);
                    return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble()
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
                    La = Ma("s"),
                    ba = Ma("m"),
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
                    Oa = xa("minutes"),
                    Ha = xa("hours"),
                    Pa = xa("days"),
                    Ca = xa("months"),
                    Ea = xa("years");
                var Aa = Math.round,
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
                        i = Wa(this._months);
                    t = b((e = b(a / 60)) / 60), a %= 60, e %= 60;
                    var r = b(i / 12),
                        s = i %= 12,
                        o = n,
                        d = t,
                        l = e,
                        u = a,
                        c = this.asSeconds();
                    return c ? (c < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (s ? s + "M" : "") + (o ? o + "D" : "") + (d || l || u ? "T" : "") + (d ? d + "H" : "") + (l ? l + "M" : "") + (u ? u + "S" : "") : "P0D"
                }
                var Ra = Pt.prototype;
                return Ra.isValid = function() {
                    return this._isValid
                }, Ra.abs = function() {
                    var e = this._data;
                    return this._milliseconds = ha(this._milliseconds), this._days = ha(this._days), this._months = ha(this._months), e.milliseconds = ha(e.milliseconds), e.seconds = ha(e.seconds), e.minutes = ha(e.minutes), e.hours = ha(e.hours), e.months = ha(e.months), e.years = ha(e.years), this
                }, Ra.add = function(e, t) {
                    return fa(this, e, t, 1)
                }, Ra.subtract = function(e, t) {
                    return fa(this, e, t, -1)
                }, Ra.as = function(e) {
                    if (!this.isValid()) return NaN;
                    var t, a, n = this._milliseconds;
                    if ("month" === (e = E(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + ya(t), "month" === e ? a : a / 12;
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
                }, Ra.asMilliseconds = va, Ra.asSeconds = La, Ra.asMinutes = ba, Ra.asHours = ka, Ra.asDays = Ya, Ra.asWeeks = Da, Ra.asMonths = wa, Ra.asYears = Sa, Ra.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
                }, Ra._bubble = function() {
                    var e, t, a, n, i, r = this._milliseconds,
                        s = this._days,
                        o = this._months,
                        d = this._data;
                    return r >= 0 && s >= 0 && o >= 0 || r <= 0 && s <= 0 && o <= 0 || (r += 864e5 * pa(ga(o) + s), s = 0, o = 0), d.milliseconds = r % 1e3, e = b(r / 1e3), d.seconds = e % 60, t = b(e / 60), d.minutes = t % 60, a = b(t / 60), d.hours = a % 24, o += i = b(ya(s += b(a / 24))), s -= pa(ga(i)), n = b(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this
                }, Ra.get = function(e) {
                    return e = E(e), this.isValid() ? this[e + "s"]() : NaN
                }, Ra.milliseconds = Ta, Ra.seconds = ja, Ra.minutes = Oa, Ra.hours = Ha, Ra.days = Pa, Ra.weeks = function() {
                    return b(this.days() / 7)
                }, Ra.months = Ca, Ra.years = Ea, Ra.humanize = function(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(),
                        a = function(e, t, a) {
                            var n = Bt(e).abs(),
                                i = Aa(n.as("s")),
                                r = Aa(n.as("m")),
                                s = Aa(n.as("h")),
                                o = Aa(n.as("d")),
                                d = Aa(n.as("M")),
                                l = Aa(n.as("y")),
                                u = i <= Fa.ss && ["s", i] || i < Fa.s && ["ss", i] || r <= 1 && ["m"] || r < Fa.m && ["mm", r] || s <= 1 && ["h"] || s < Fa.h && ["hh", s] || o <= 1 && ["d"] || o < Fa.d && ["dd", o] || d <= 1 && ["M"] || d < Fa.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
                            return u[2] = t, u[3] = +e > 0, u[4] = a,
                                function(e, t, a, n, i) {
                                    return i.relativeTime(t || 1, !!a, e, n)
                                }.apply(null, u)
                        }(this, !e, t);
                    return e && (a = t.pastFuture(+this, a)), t.postformat(a)
                }, Ra.toISOString = Ia, Ra.toString = Ia, Ra.toJSON = Ia, Ra.locale = Zt, Ra.localeData = $t, Ra.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ia), Ra.lang = Xt, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), _e("x", de), _e("X", /[+-]?\d+(\.\d{1,3})?/), ye("X", function(e, t, a) {
                    a._d = new Date(1e3 * parseFloat(e, 10))
                }), ye("x", function(e, t, a) {
                    a._d = new Date(k(e))
                }), n.version = "2.18.1", t = xt, n.fn = da, n.min = function() {
                    return Ot("isBefore", [].slice.call(arguments, 0))
                }, n.max = function() {
                    return Ot("isAfter", [].slice.call(arguments, 0))
                }, n.now = function() {
                    return Date.now ? Date.now() : +new Date
                }, n.utc = m, n.unix = function(e) {
                    return xt(1e3 * e)
                }, n.months = function(e, t) {
                    return ma(e, t, "months")
                }, n.isDate = d, n.locale = ut, n.invalid = p, n.duration = Bt, n.isMoment = L, n.weekdays = function(e, t, a) {
                    return _a(e, t, a, "weekdays")
                }, n.parseZone = function() {
                    return xt.apply(null, arguments).parseZone()
                }, n.localeData = mt, n.isDuration = Ct, n.monthsShort = function(e, t) {
                    return ma(e, t, "monthsShort")
                }, n.weekdaysMin = function(e, t, a) {
                    return _a(e, t, a, "weekdaysMin")
                }, n.defineLocale = ct, n.updateLocale = function(e, t) {
                    if (null != t) {
                        var a, n = rt;
                        null != st[e] && (n = st[e]._config), (a = new O(t = j(n, t))).parentLocale = st[e], st[e] = a, ut(e)
                    } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);
                    return st[e]
                }, n.locales = function() {
                    return H(st)
                }, n.weekdaysShort = function(e, t, a) {
                    return _a(e, t, a, "weekdaysShort")
                }, n.normalizeUnits = E, n.relativeTimeRounding = function(e) {
                    return void 0 === e ? Aa : "function" == typeof e && (Aa = e, !0)
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
            i = a("GiK3"),
            r = a("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCanvasReady = function(e) {
                        e && (t.setCanvasResolution(e), t.props.onCanvasReady(e))
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(r._2, {
                        fullWidth: !0
                    }, i.createElement("canvas", {
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
            }(i.Component);
        a.d(t, "a", function() {
            return s
        })
    },
    QV34: function(e, t, a) {
        "use strict";
        var n = a("iO9N"),
            i = a("IbXy");
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
                            i = n.sign(e.max);
                        a < 0 && i < 0 ? e.max = 0 : a > 0 && i > 0 && (e.min = 0)
                    }
                    var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                        s = void 0 !== t.max || void 0 !== t.suggestedMax;
                    void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), r !== s && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
                },
                getTickLimit: t,
                handleDirectionalChanges: t,
                buildTicks: function() {
                    var e = this,
                        t = e.options.ticks,
                        a = e.getTickLimit(),
                        r = {
                            maxTicks: a = Math.max(2, a),
                            min: t.min,
                            max: t.max,
                            stepSize: n.valueOrDefault(t.fixedStepSize, t.stepSize)
                        },
                        s = e.ticks = i.generators.linear(r, e);
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
            i = a("wGD1"),
            r = a("iO9N"),
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
        }), e.exports = i.extend({
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
                    i = this._chart.ctx,
                    o = t.pointStyle,
                    d = t.radius,
                    l = t.x,
                    u = t.y,
                    c = r.color,
                    m = 0;
                t.skip || (i.strokeStyle = t.borderColor || s, i.lineWidth = r.valueOrDefault(t.borderWidth, n.global.elements.point.borderWidth), i.fillStyle = t.backgroundColor || s, void 0 !== e && (a.x < e.left || 1.01 * e.right < a.x || a.y < e.top || 1.01 * e.bottom < a.y) && (a.x < e.left ? m = (l - a.x) / (e.left - a.x) : 1.01 * e.right < a.x ? m = (a.x - l) / (a.x - e.right) : a.y < e.top ? m = (u - a.y) / (e.top - a.y) : 1.01 * e.bottom < a.y && (m = (a.y - u) / (a.y - e.bottom)), m = Math.round(100 * m) / 100, i.strokeStyle = c(i.strokeStyle).alpha(m).rgbString(), i.fillStyle = c(i.fillStyle).alpha(m).rgbString()), r.canvas.drawPoint(i, o, d, l, u))
            }
        })
    },
    RVgG: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            i = a("HW6M"),
            r = a("GiK3"),
            s = a("F8kA"),
            o = a("i3Vq"),
            d = a("PGY2"),
            l = a("Odds"),
            u = {
                "data-test-selector": "achievement-card"
            },
            c = function(e) {
                return r.createElement(s.a, n.__assign({
                    className: "ach-link",
                    "aria-hidden": e.isHidden,
                    tabIndex: e.isHidden ? -1 : void 0,
                    to: d.b.achievement(e.achievement)
                }, u), r.createElement(m, {
                    achievement: e.achievement,
                    className: e.layoutClassName
                }, e.children))
            },
            m = function(e) {
                var t, a = i(e.className, {
                    "ach-card": !0,
                    "ach-card--completed": Boolean(e.achievement.completedAt),
                    "ach-card--recent": e.achievement.wasRecentlyCompleted()
                });
                return e.achievement.completedAt || (t = r.createElement(l._8, {
                    position: l._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, r.createElement(l._18, {
                    size: l._20.ExtraSmall,
                    value: 100 * e.achievement.progressRatio
                }))), r.createElement(l._35, {
                    className: a,
                    position: l._15.Relative
                }, r.createElement(l._35, {
                    className: "ach-card__inner"
                }, r.createElement(o.a, {
                    achievement: e.achievement
                }, r.createElement("div", null, t, e.children))))
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
            i = a("wGD1"),
            r = a("iO9N"),
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
                return r.isArray(t) ? r.longestText(e, a, t) : e.measureText(t).width
            }

            function a(e) {
                var t = r.valueOrDefault,
                    a = n.global,
                    i = t(e.fontSize, a.defaultFontSize),
                    s = t(e.fontStyle, a.defaultFontStyle),
                    o = t(e.fontFamily, a.defaultFontFamily);
                return {
                    size: i,
                    style: s,
                    family: o,
                    font: r.fontString(i, s, o)
                }
            }

            function s(e) {
                return r.options.toLineHeight(r.valueOrDefault(e.lineHeight, 1.2), r.valueOrDefault(e.fontSize, n.global.defaultFontSize))
            }
            e.Scale = i.extend({
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
                    r.callback(this.options.beforeUpdate, [this])
                },
                update: function(e, t, a) {
                    var n, i, s, o, d, l, u = this;
                    for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = r.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, a), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), d = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), s = u.convertTicksToLabels(d) || u.ticks, u.afterTickToLabelConversion(), u.ticks = s, n = 0, i = s.length; n < i; ++n) o = s[n], (l = d[n]) ? l.label = o : d.push(l = {
                        label: o,
                        major: !1
                    });
                    return u._ticks = d, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                },
                afterUpdate: function() {
                    r.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function() {
                    r.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                },
                afterSetDimensions: function() {
                    r.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function() {
                    r.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: r.noop,
                afterDataLimits: function() {
                    r.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function() {
                    r.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: r.noop,
                afterBuildTicks: function() {
                    r.callback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function() {
                    r.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function() {
                    var e = this.options.ticks;
                    this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                },
                afterTickToLabelConversion: function() {
                    r.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function() {
                    r.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function() {
                    var e = this,
                        t = e.ctx,
                        n = e.options.ticks,
                        i = o(e._ticks),
                        s = a(n);
                    t.font = s.font;
                    var d = n.minRotation || 0;
                    if (i.length && e.options.display && e.isHorizontal())
                        for (var l, u = r.longestText(t, s.font, i, e.longestTextCache), c = u, m = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > m && d < n.maxRotation;) {
                            var _ = r.toRadians(d);
                            if (l = Math.cos(_), Math.sin(_) * u > e.maxHeight) {
                                d--;
                                break
                            }
                            d++, c = l * u
                        }
                    e.labelRotation = d
                },
                afterCalculateTickRotation: function() {
                    r.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function() {
                    r.callback(this.options.beforeFit, [this])
                },
                fit: function() {
                    var e = this,
                        n = e.minSize = {
                            width: 0,
                            height: 0
                        },
                        i = o(e._ticks),
                        d = e.options,
                        l = d.ticks,
                        u = d.scaleLabel,
                        c = d.gridLines,
                        m = d.display,
                        _ = e.isHorizontal(),
                        h = a(l),
                        f = d.gridLines.tickMarkLength;
                    if (n.width = _ ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && c.drawTicks ? f : 0, n.height = _ ? m && c.drawTicks ? f : 0 : e.maxHeight, u.display && m) {
                        var p = s(u) + r.options.toPadding(u.padding).height;
                        _ ? n.height += p : n.width += p
                    }
                    if (l.display && m) {
                        var y = r.longestText(e.ctx, h.font, i, e.longestTextCache),
                            g = r.numberOfLabelLines(i),
                            M = .5 * h.size,
                            v = e.options.ticks.padding;
                        if (_) {
                            e.longestLabelWidth = y;
                            var L = r.toRadians(e.labelRotation),
                                b = Math.cos(L),
                                k = Math.sin(L) * y + h.size * g + M * (g - 1) + M;
                            n.height = Math.min(e.maxHeight, n.height + k + v), e.ctx.font = h.font;
                            var Y = t(e.ctx, i[0], h.font),
                                D = t(e.ctx, i[i.length - 1], h.font);
                            0 !== e.labelRotation ? (e.paddingLeft = "bottom" === d.position ? b * Y + 3 : b * M + 3, e.paddingRight = "bottom" === d.position ? b * M + 3 : b * D + 3) : (e.paddingLeft = Y / 2 + 3, e.paddingRight = D / 2 + 3)
                        } else l.mirror ? y = 0 : y += v + M, n.width = Math.min(e.maxWidth, n.width + y), e.paddingTop = h.size / 2, e.paddingBottom = h.size / 2
                    }
                    e.handleMargins(), e.width = n.width, e.height = n.height
                },
                handleMargins: function() {
                    var e = this;
                    e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                },
                afterFit: function() {
                    r.callback(this.options.afterFit, [this])
                },
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function() {
                    return this.options.fullWidth
                },
                getRightValue: function(e) {
                    if (r.isNullOrUndef(e)) return NaN;
                    if ("number" == typeof e && !isFinite(e)) return NaN;
                    if (e)
                        if (this.isHorizontal()) {
                            if (void 0 !== e.x) return this.getRightValue(e.x)
                        } else if (void 0 !== e.y) return this.getRightValue(e.y);
                    return e
                },
                getLabelForIndex: r.noop,
                getPixelForValue: r.noop,
                getValueForPixel: r.noop,
                getPixelForTick: function(e) {
                    var t = this,
                        a = t.options.offset;
                    if (t.isHorizontal()) {
                        var n = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (a ? 0 : 1), 1),
                            i = n * e + t.paddingLeft;
                        a && (i += n / 2);
                        var r = t.left + Math.round(i);
                        return r += t.isFullWidth() ? t.margins.left : 0
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
                    var t, a, n, i, s = this,
                        o = s.isHorizontal(),
                        d = s.options.ticks.minor,
                        l = e.length,
                        u = r.toRadians(s.labelRotation),
                        c = Math.cos(u),
                        m = s.longestLabelWidth * c,
                        _ = [];
                    for (d.maxTicksLimit && (i = d.maxTicksLimit), o && (t = !1, (m + d.autoSkipPadding) * l > s.width - (s.paddingLeft + s.paddingRight) && (t = 1 + Math.floor((m + d.autoSkipPadding) * l / (s.width - (s.paddingLeft + s.paddingRight)))), i && l > i && (t = Math.max(t, Math.floor(l / i)))), a = 0; a < l; a++) n = e[a], (t > 1 && a % t > 0 || a % t == 0 && a + t >= l) && a !== l - 1 && delete n.label, _.push(n);
                    return _
                },
                draw: function(e) {
                    var t = this,
                        i = t.options;
                    if (i.display) {
                        var o = t.ctx,
                            l = n.global,
                            u = i.ticks.minor,
                            c = i.ticks.major || u,
                            m = i.gridLines,
                            _ = i.scaleLabel,
                            h = 0 !== t.labelRotation,
                            f = t.isHorizontal(),
                            p = u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            y = r.valueOrDefault(u.fontColor, l.defaultFontColor),
                            g = a(u),
                            M = r.valueOrDefault(c.fontColor, l.defaultFontColor),
                            v = a(c),
                            L = m.drawTicks ? m.tickMarkLength : 0,
                            b = r.valueOrDefault(_.fontColor, l.defaultFontColor),
                            k = a(_),
                            Y = r.options.toPadding(_.padding),
                            D = r.toRadians(t.labelRotation),
                            w = [],
                            S = "right" === i.position ? t.left : t.right - L,
                            x = "right" === i.position ? t.left + L : t.right,
                            T = "bottom" === i.position ? t.top : t.bottom - L,
                            j = "bottom" === i.position ? t.top + L : t.bottom;
                        if (r.each(p, function(a, n) {
                                if (!r.isNullOrUndef(a.label)) {
                                    var s, o, c, _, y, g, M, v, b, k, Y, O, H, P, C = a.label;
                                    n === t.zeroLineIndex && i.offset === m.offsetGridLines ? (s = m.zeroLineWidth, o = m.zeroLineColor, c = m.zeroLineBorderDash, _ = m.zeroLineBorderDashOffset) : (s = r.valueAtIndexOrDefault(m.lineWidth, n), o = r.valueAtIndexOrDefault(m.color, n), c = r.valueOrDefault(m.borderDash, l.borderDash), _ = r.valueOrDefault(m.borderDashOffset, l.borderDashOffset));
                                    var E = "middle",
                                        A = "middle",
                                        F = u.padding;
                                    if (f) {
                                        var W = L + F;
                                        "bottom" === i.position ? (A = h ? "middle" : "top", E = h ? "right" : "center", P = t.top + W) : (A = h ? "middle" : "bottom", E = h ? "left" : "center", P = t.bottom - W);
                                        var I = d(t, n, m.offsetGridLines && p.length > 1);
                                        I < t.left && (o = "rgba(0,0,0,0)"), I += r.aliasPixel(s), H = t.getPixelForTick(n) + u.labelOffset, y = M = b = Y = I, g = T, v = j, k = e.top, O = e.bottom
                                    } else {
                                        var R, z = "left" === i.position;
                                        u.mirror ? (E = z ? "left" : "right", R = F) : (E = z ? "right" : "left", R = L + F), H = z ? t.right - R : t.left + R;
                                        var N = d(t, n, m.offsetGridLines && p.length > 1);
                                        N < t.top && (o = "rgba(0,0,0,0)"), N += r.aliasPixel(s), P = t.getPixelForTick(n) + u.labelOffset, y = S, M = x, b = e.left, Y = e.right, g = v = k = O = N
                                    }
                                    w.push({
                                        tx1: y,
                                        ty1: g,
                                        tx2: M,
                                        ty2: v,
                                        x1: b,
                                        y1: k,
                                        x2: Y,
                                        y2: O,
                                        labelX: H,
                                        labelY: P,
                                        glWidth: s,
                                        glColor: o,
                                        glBorderDash: c,
                                        glBorderDashOffset: _,
                                        rotation: -1 * D,
                                        label: C,
                                        major: a.major,
                                        textBaseline: A,
                                        textAlign: E
                                    })
                                }
                            }), r.each(w, function(e) {
                                if (m.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), u.display) {
                                    o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? v.font : g.font, o.fillStyle = e.major ? M : y, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                                    var t = e.label;
                                    if (r.isArray(t))
                                        for (var a = 0, n = 0; a < t.length; ++a) o.fillText("" + t[a], 0, n), n += 1.5 * g.size;
                                    else o.fillText(t, 0, 0);
                                    o.restore()
                                }
                            }), _.display) {
                            var O, H, P = 0,
                                C = s(_) / 2;
                            if (f) O = t.left + (t.right - t.left) / 2, H = "bottom" === i.position ? t.bottom - C - Y.bottom : t.top + C + Y.top;
                            else {
                                var E = "left" === i.position;
                                O = E ? t.left + C + Y.top : t.right - C - Y.top, H = t.top + (t.bottom - t.top) / 2, P = E ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(O, H), o.rotate(P), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = b, o.font = k.font, o.fillText(_.labelString, 0, 0), o.restore()
                        }
                        if (m.drawBorder) {
                            o.lineWidth = r.valueAtIndexOrDefault(m.lineWidth, 0), o.strokeStyle = r.valueAtIndexOrDefault(m.color, 0);
                            var A = t.left,
                                F = t.right,
                                W = t.top,
                                I = t.bottom,
                                R = r.aliasPixel(o.lineWidth);
                            f ? (W = I = "top" === i.position ? t.bottom : t.top, W += R, I += R) : (A = F = "left" === i.position ? t.right : t.left, A += R, F += R), o.beginPath(), o.moveTo(A, W), o.lineTo(F, I), o.stroke()
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
        var i = [];
        i.push(a("A5K1")(n), a("ZmvM")(n), a("lRs/")(n)), n.plugins.register(i), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
    },
    "XU/q": function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return s
        });
        var n = a("GiK3"),
            i = (a.n(n), a("jnhC")),
            r = a("Odds"),
            s = function(e) {
                var t = e.children,
                    a = e.tooltip,
                    i = e.title;
                return n.createElement(r._8, {
                    margin: {
                        bottom: 4
                    }
                }, n.createElement(o, {
                    tooltip: a
                }, i), n.createElement(r._35, {
                    elevation: 1,
                    background: r.n.Base
                }, t))
            },
            o = function(e) {
                var t = e.children,
                    a = e.tooltip;
                return n.createElement(r._8, {
                    alignItems: r.c.Center,
                    display: r.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, n.createElement(r.Q, {
                    type: r._49.H5,
                    bold: !0
                }, t), a && n.createElement(i.a, {
                    direction: r.r.Top
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
        var n, i = a("TToO"),
            r = a("GiK3"),
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
                i = (t || 1) - 1;
            return a ? {
                title: a.title,
                description: a.description(a.levelGoals[i]),
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
            var i = new s.b(Array.from(a.values()));
            return e.quests.forEach(function(e) {
                var i, r, o, d = (i = e, r = t.role, o = Object(u.d)(i.key), new s.e({
                    id: i._id,
                    key: i.key,
                    completedAt: i.completed_at ? new Date(i.completed_at) : null,
                    title: o.title,
                    getInstructions: o.getInstructions,
                    learnMoreURL: o.learnMoreURL,
                    hasTimedCompletionWindow: o.hasTimedCompletionWindow,
                    position: o.position,
                    role: r,
                    achievements: []
                }));
                n.push(d), e.achievements.forEach(function(e) {
                    var t = e._id,
                        n = a.get(t);
                    n && (d.achievements.push(n), n.quest = d)
                }), d.finalize()
            }), {
                quests: s.e.sort(n),
                achievements: i
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
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.query()
            }, t.prototype.componentDidUpdate = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return (!e.channel && this.props.channel || (e.channel && e.channel.id) !== (this.props.channel && this.props.channel.id)) && this.query(), [2]
                    })
                })
            }, t.prototype.render = function() {
                return this.props.children(this.state)
            }, t.prototype.query = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.props.channel ? (this.setState({
                                    isLoading: !0
                                }), [4, function(e) {
                                    return i.__awaiter(this, void 0, void 0, function() {
                                        var t, a, n;
                                        return i.__generator(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return t = "/v5/channels/" + e.id + "/achievement_progressions", [4, Object(o.a)({
                                                        path: t
                                                    })];
                                                case 1:
                                                    return (a = r.sent()).isError() ? [2, {
                                                        isError: !0,
                                                        quests: [],
                                                        achievements: new s.b
                                                    }] : (n = c(a.body, e), [2, i.__assign({
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
        }(r.Component);
        a.d(t, "a", function() {
            return m
        })
    },
    XhZS: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            i = a("iO9N"),
            r = a("IbXy");
        e.exports = function(e) {
            var t = {
                    position: "left",
                    ticks: {
                        callback: r.formatters.linear
                    }
                },
                a = e.LinearScaleBase.extend({
                    determineDataLimits: function() {
                        var e = this,
                            t = e.options,
                            a = e.chart,
                            n = a.data.datasets,
                            r = e.isHorizontal();

                        function s(t) {
                            return r ? t.xAxisID === e.id : t.yAxisID === e.id
                        }
                        e.min = null, e.max = null;
                        var o = t.stacked;
                        if (void 0 === o && i.each(n, function(e, t) {
                                if (!o) {
                                    var n = a.getDatasetMeta(t);
                                    a.isDatasetVisible(t) && s(n) && void 0 !== n.stack && (o = !0)
                                }
                            }), t.stacked || o) {
                            var d = {};
                            i.each(n, function(n, r) {
                                var o = a.getDatasetMeta(r),
                                    l = [o.type, void 0 === t.stacked && void 0 === o.stack ? r : "", o.stack].join(".");
                                void 0 === d[l] && (d[l] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var u = d[l].positiveValues,
                                    c = d[l].negativeValues;
                                a.isDatasetVisible(r) && s(o) && i.each(n.data, function(a, n) {
                                    var i = +e.getRightValue(a);
                                    isNaN(i) || o.data[n].hidden || (u[n] = u[n] || 0, c[n] = c[n] || 0, t.relativePoints ? u[n] = 100 : i < 0 ? c[n] += i : u[n] += i)
                                })
                            }), i.each(d, function(t) {
                                var a = t.positiveValues.concat(t.negativeValues),
                                    n = i.min(a),
                                    r = i.max(a);
                                e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? r : Math.max(e.max, r)
                            })
                        } else i.each(n, function(t, n) {
                            var r = a.getDatasetMeta(n);
                            a.isDatasetVisible(n) && s(r) && i.each(t.data, function(t, a) {
                                var n = +e.getRightValue(t);
                                isNaN(n) || r.data[a].hidden || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n))
                            })
                        });
                        e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e, t = this.options.ticks;
                        if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50));
                        else {
                            var a = i.valueOrDefault(t.fontSize, n.global.defaultFontSize);
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
                            i = +a.getRightValue(e),
                            r = a.end - n;
                        return a.isHorizontal() ? (t = a.left + a.width / r * (i - n), Math.round(t)) : (t = a.bottom - a.height / r * (i - n), Math.round(t))
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            a = t.isHorizontal(),
                            n = a ? t.width : t.height,
                            i = (a ? e - t.left : t.bottom - e) / n;
                        return t.start + (t.end - t.start) * i
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
                var i = {
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
                return t ? i[a][2] ? i[a][2] : i[a][1] : n ? i[a][0] : i[a][1]
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
            i = a("wGD1"),
            r = a("iO9N");
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
                        i = n.getDatasetMeta(a);
                    i.hidden = null === i.hidden ? !n.data.datasets[a].hidden : null, n.update()
                },
                onHover: null,
                labels: {
                    boxWidth: 40,
                    padding: 10,
                    generateLabels: function(e) {
                        var t = e.data;
                        return r.isArray(t.datasets) ? t.datasets.map(function(t, a) {
                            return {
                                text: t.label,
                                fillStyle: r.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
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
                a = r.noop;

            function s(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            function o(a, n) {
                var i = new e.Legend({
                    ctx: a.ctx,
                    options: n,
                    chart: a
                });
                t.configure(a, i, n), t.addBox(a, i), a.legend = i
            }
            return e.Legend = i.extend({
                initialize: function(e) {
                    r.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
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
                        a = r.callback(t.generateLabels, [e.chart], e) || [];
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
                        i = t.display,
                        o = e.ctx,
                        d = n.global,
                        l = r.valueOrDefault,
                        u = l(a.fontSize, d.defaultFontSize),
                        c = l(a.fontStyle, d.defaultFontStyle),
                        m = l(a.fontFamily, d.defaultFontFamily),
                        _ = r.fontString(u, c, m),
                        h = e.legendHitBoxes = [],
                        f = e.minSize,
                        p = e.isHorizontal();
                    if (p ? (f.width = e.maxWidth, f.height = i ? 10 : 0) : (f.width = i ? 10 : 0, f.height = e.maxHeight), i)
                        if (o.font = _, p) {
                            var y = e.lineWidths = [0],
                                g = e.legendItems.length ? u + a.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", r.each(e.legendItems, function(t, n) {
                                var i = s(a, u) + u / 2 + o.measureText(t.text).width;
                                y[y.length - 1] + i + a.padding >= e.width && (g += u + a.padding, y[y.length] = e.left), h[n] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: u
                                }, y[y.length - 1] += i + a.padding
                            }), f.height += g
                        } else {
                            var M = a.padding,
                                v = e.columnWidths = [],
                                L = a.padding,
                                b = 0,
                                k = 0,
                                Y = u + M;
                            r.each(e.legendItems, function(e, t) {
                                var n = s(a, u) + u / 2 + o.measureText(e.text).width;
                                k + Y > f.height && (L += b + a.padding, v.push(b), b = 0, k = 0), b = Math.max(b, n), k += Y, h[t] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: u
                                }
                            }), L += b, v.push(b), f.width += L
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
                        i = n.global,
                        o = i.elements.line,
                        d = e.width,
                        l = e.lineWidths;
                    if (t.display) {
                        var u, c = e.ctx,
                            m = r.valueOrDefault,
                            _ = m(a.fontColor, i.defaultFontColor),
                            h = m(a.fontSize, i.defaultFontSize),
                            f = m(a.fontStyle, i.defaultFontStyle),
                            p = m(a.fontFamily, i.defaultFontFamily),
                            y = r.fontString(h, f, p);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = _, c.fillStyle = _, c.font = y;
                        var g = s(a, h),
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
                        var L = h + a.padding;
                        r.each(e.legendItems, function(n, s) {
                            var _ = c.measureText(n.text).width,
                                f = g + h / 2 + _,
                                p = u.x,
                                y = u.y;
                            v ? p + f >= d && (y = u.y += L, u.line++, p = u.x = e.left + (d - l[u.line]) / 2) : y + L > e.bottom && (p = u.x = p + e.columnWidths[u.line] + a.padding, y = u.y = e.top + a.padding, u.line++),
                                function(e, a, n) {
                                    if (!(isNaN(g) || g <= 0)) {
                                        c.save(), c.fillStyle = m(n.fillStyle, i.defaultColor), c.lineCap = m(n.lineCap, o.borderCapStyle), c.lineDashOffset = m(n.lineDashOffset, o.borderDashOffset), c.lineJoin = m(n.lineJoin, o.borderJoinStyle), c.lineWidth = m(n.lineWidth, o.borderWidth), c.strokeStyle = m(n.strokeStyle, i.defaultColor);
                                        var s = 0 === m(n.lineWidth, o.borderWidth);
                                        if (c.setLineDash && c.setLineDash(m(n.lineDash, o.borderDash)), t.labels && t.labels.usePointStyle) {
                                            var d = h * Math.SQRT2 / 2,
                                                l = d / Math.SQRT2,
                                                u = e + l,
                                                _ = a + l;
                                            r.canvas.drawPoint(c, n.pointStyle, d, u, _)
                                        } else s || c.strokeRect(e, a, g, h), c.fillRect(e, a, g, h);
                                        c.restore()
                                    }
                                }(p, y, n), M[s].left = p, M[s].top = y,
                                function(e, t, a, n) {
                                    var i = h / 2,
                                        r = g + i + e,
                                        s = t + i;
                                    c.fillText(a.text, r, s), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(r, s), c.lineTo(r + n, s), c.stroke())
                                }(p, y, n, _), v ? u.x += f + a.padding : u.y += L
                        })
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        a = t.options,
                        n = "mouseup" === e.type ? "click" : e.type,
                        i = !1;
                    if ("mousemove" === n) {
                        if (!a.onHover) return
                    } else {
                        if ("click" !== n) return;
                        if (!a.onClick) return
                    }
                    var r = e.x,
                        s = e.y;
                    if (r >= t.left && r <= t.right && s >= t.top && s <= t.bottom)
                        for (var o = t.legendHitBoxes, d = 0; d < o.length; ++d) {
                            var l = o[d];
                            if (r >= l.left && r <= l.left + l.width && s >= l.top && s <= l.top + l.height) {
                                if ("click" === n) {
                                    a.onClick.call(t, e.native, t.legendItems[d]), i = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    a.onHover.call(t, e.native, t.legendItems[d]), i = !0;
                                    break
                                }
                            }
                        }
                    return i
                }
            }), {
                id: "legend",
                beforeInit: function(e) {
                    var t = e.options.legend;
                    t && o(e, t)
                },
                beforeUpdate: function(e) {
                    var a = e.options.legend,
                        i = e.legend;
                    a ? (r.mergeIf(a, n.global.legend), i ? (t.configure(e, i, a), i.options = a) : o(e, a)) : i && (t.removeBox(e, i), delete e.legend)
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
            i = a("6sO2"),
            r = a("vH/s"),
            s = a("Odds"),
            o = (a("wLsQ"), function(e) {
                return n.createElement(s._8, {
                    className: "clip-card-row"
                }, n.createElement(s._6, {
                    alpha: !0,
                    blurAfterClick: !0,
                    targetBlank: !0,
                    linkTo: e.url + "?tt_content=" + r.PageviewContent.TopClips + "&tt_medium=" + r.PageviewMedium.ChannelAnalytics,
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
                }, Object(i.d)("{views, number}", {
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
                    var i = t.words[n];
                    return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
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
            i = {
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
                    return 1 - i.easeOutBounce(1 - e)
                },
                easeOutBounce: function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                easeInOutBounce: function(e) {
                    return e < .5 ? .5 * i.easeInBounce(2 * e) : .5 * i.easeOutBounce(2 * e - 1) + .5
                }
            };
        e.exports = {
            effects: i
        }, n.easingEffects = i
    },
    dPMn: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            i = a("GiK3"),
            r = a("6sO2"),
            s = a("Odds"),
            o = {
                "data-test-selector": "no-data"
            },
            d = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0",
                alt: "TearGlove"
            },
            l = function() {
                return i.createElement(s._8, n.__assign({
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
                }, o), i.createElement(s._8, {
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(s.m, n.__assign({}, d, {
                    size: 50
                }))), i.createElement(s.Q, {
                    color: s.K.Alt2,
                    fontSize: s.V.Size5
                }, Object(r.d)("Not enough data for us to display", "ChannelAnalyticsNoData")))
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
                    var i = t.words[n];
                    return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
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
            i = a("iO9N"),
            r = a("KC8c"),
            s = a("2xI1");
        e.exports = function(e) {
            var t = e.plugins;

            function a(e) {
                return "top" === e || "bottom" === e
            }
            e.types = {}, e.instances = {}, e.controllers = {}, i.extend(e.prototype, {
                construct: function(t, a) {
                    var r = this;
                    a = function(e) {
                        var t = (e = e || {}).data = e.data || {};
                        return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = i.configMerge(n.global, n[e.type], e.options || {}), e
                    }(a);
                    var o = s.acquireContext(t, a),
                        d = o && o.canvas,
                        l = d && d.height,
                        u = d && d.width;
                    r.id = i.uid(), r.ctx = o, r.canvas = d, r.config = a, r.width = u, r.height = l, r.aspectRatio = l ? u / l : null, r.options = a.options, r._bufferedRender = !1, r.chart = r, r.controller = r, e.instances[r.id] = r, Object.defineProperty(r, "data", {
                        get: function() {
                            return r.config.data
                        },
                        set: function(e) {
                            r.config.data = e
                        }
                    }), o && d ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                },
                initialize: function() {
                    var e = this;
                    return t.notify(e, "beforeInit"), i.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildScales(), e.initToolTip(), t.notify(e, "afterInit"), e
                },
                clear: function() {
                    return i.canvas.clear(this), this
                },
                stop: function() {
                    return e.animationService.cancelAnimation(this), this
                },
                resize: function(e) {
                    var a = this,
                        n = a.options,
                        r = a.canvas,
                        s = n.maintainAspectRatio && a.aspectRatio || null,
                        o = Math.max(0, Math.floor(i.getMaximumWidth(r))),
                        d = Math.max(0, Math.floor(s ? o / s : i.getMaximumHeight(r)));
                    if ((a.width !== o || a.height !== d) && (r.width = a.width = o, r.height = a.height = d, r.style.width = o + "px", r.style.height = d + "px", i.retinaScale(a, n.devicePixelRatio), !e)) {
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
                    i.each(t.xAxes, function(e, t) {
                        e.id = e.id || "x-axis-" + t
                    }), i.each(t.yAxes, function(e, t) {
                        e.id = e.id || "y-axis-" + t
                    }), a && (a.id = a.id || "scale")
                },
                buildScales: function() {
                    var t = this,
                        n = t.options,
                        r = t.scales = {},
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
                    }), i.each(s, function(n) {
                        var s = n.options,
                            o = i.valueOrDefault(s.type, n.dtype),
                            d = e.scaleService.getScaleConstructor(o);
                        if (d) {
                            a(s.position) !== a(n.dposition) && (s.position = n.dposition);
                            var l = new d({
                                id: s.id,
                                options: s,
                                ctx: t.ctx,
                                chart: t
                            });
                            r[l.id] = l, l.mergeTicksOptions(), n.isDefault && (t.scale = l)
                        }
                    }), e.scaleService.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function() {
                    var t = this,
                        a = [],
                        n = [];
                    return i.each(t.data.datasets, function(i, r) {
                        var s = t.getDatasetMeta(r),
                            o = i.type || t.config.type;
                        if (s.type && s.type !== o && (t.destroyDatasetMeta(r), s = t.getDatasetMeta(r)), s.type = o, a.push(s.type), s.controller) s.controller.updateIndex(r);
                        else {
                            var d = e.controllers[s.type];
                            if (void 0 === d) throw new Error('"' + s.type + '" is not a chart type.');
                            s.controller = new d(t, r), n.push(s.controller)
                        }
                    }, t), n
                },
                resetElements: function() {
                    var e = this;
                    i.each(e.data.datasets, function(t, a) {
                        e.getDatasetMeta(a).controller.reset()
                    }, e)
                },
                reset: function() {
                    this.resetElements(), this.tooltip.initialize()
                },
                update: function(e) {
                    var a, n, r = this;
                    if (e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        }), (n = (a = r).options).scale ? a.scale.options = n.scale : n.scales && n.scales.xAxes.concat(n.scales.yAxes).forEach(function(e) {
                            a.scales[e.id].options = e
                        }), a.tooltip._options = n.tooltips, !1 !== t.notify(r, "beforeUpdate")) {
                        r.tooltip._data = r.data;
                        var s = r.buildOrUpdateControllers();
                        i.each(r.data.datasets, function(e, t) {
                            r.getDatasetMeta(t).controller.buildOrUpdateElements()
                        }, r), r.updateLayout(), i.each(s, function(e) {
                            e.reset()
                        }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], t.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = {
                            duration: e.duration,
                            easing: e.easing,
                            lazy: e.lazy
                        } : r.render(e)
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
                    var r = a.duration,
                        s = a.lazy;
                    if (!1 !== t.notify(n, "beforeRender")) {
                        var o = n.options.animation,
                            d = function(e) {
                                t.notify(n, "afterRender"), i.callback(o && o.onComplete, [e], n)
                            };
                        if (o && (void 0 !== r && 0 !== r || void 0 === r && 0 !== o.duration)) {
                            var l = new e.Animation({
                                numSteps: (r || o.duration) / 16.66,
                                easing: a.easing || o.easing,
                                render: function(e, t) {
                                    var a = i.easing.effects[t.easing],
                                        n = t.currentStep,
                                        r = n / t.numSteps;
                                    e.draw(a(r), r, n)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: d
                            });
                            e.animationService.addAnimation(n, l, r, s)
                        } else n.draw(), d(new e.Animation({
                            numSteps: 0,
                            chart: n
                        }));
                        return n
                    }
                },
                draw: function(e) {
                    var a = this;
                    a.clear(), i.isNullOrUndef(e) && (e = 1), a.transition(e), !1 !== t.notify(a, "beforeDraw", [e]) && (i.each(a.boxes, function(e) {
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
                        i = {
                            meta: n,
                            index: e,
                            easingValue: a
                        };
                    !1 !== t.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(a), t.notify(this, "afterDatasetDraw", [i]))
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
                    return r.modes.single(this, e)
                },
                getElementsAtEvent: function(e) {
                    return r.modes.label(this, e, {
                        intersect: !0
                    })
                },
                getElementsAtXAxis: function(e) {
                    return r.modes["x-axis"](this, e, {
                        intersect: !0
                    })
                },
                getElementsAtEventForMode: function(e, t, a) {
                    var n = r.modes[t];
                    return "function" == typeof n ? n(this, e, a) : []
                },
                getDatasetAtEvent: function(e) {
                    return r.modes.dataset(this, e, {
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
                    var a, n, r = this,
                        o = r.canvas;
                    for (r.stop(), a = 0, n = r.data.datasets.length; a < n; ++a) r.destroyDatasetMeta(a);
                    o && (r.unbindEvents(), i.canvas.clear(r), s.releaseContext(r.ctx), r.canvas = null, r.ctx = null), t.notify(r, "destroy"), delete e.instances[r.id]
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
                    i.each(e.options.events, function(n) {
                        s.addEventListener(e, n, a), t[n] = a
                    }), e.options.responsive && (a = function() {
                        e.resize()
                    }, s.addEventListener(e, "resize", a), t.resize = a)
                },
                unbindEvents: function() {
                    var e = this,
                        t = e._listeners;
                    t && (delete e._listeners, i.each(t, function(t, a) {
                        s.removeEventListener(e, a, t)
                    }))
                },
                updateHoverStyle: function(e, t, a) {
                    var n, i, r, s = a ? "setHoverStyle" : "removeHoverStyle";
                    for (i = 0, r = e.length; i < r; ++i)(n = e[i]) && this.getDatasetMeta(n._datasetIndex).controller[s](n)
                },
                eventHandler: function(e) {
                    var a = this,
                        n = a.tooltip;
                    if (!1 !== t.notify(a, "beforeEvent", [e])) {
                        a._bufferedRender = !0, a._bufferedRequest = null;
                        var i = a.handleEvent(e);
                        i |= n && n.handleEvent(e), t.notify(a, "afterEvent", [e]);
                        var r = a._bufferedRequest;
                        return r ? a.render(r) : i && !a.animating && (a.stop(), a.render(a.options.hover.animationDuration, !0)), a._bufferedRender = !1, a._bufferedRequest = null, a
                    }
                },
                handleEvent: function(e) {
                    var t, a = this,
                        n = a.options || {},
                        r = n.hover;
                    return a.lastActive = a.lastActive || [], "mouseout" === e.type ? a.active = [] : a.active = a.getElementsAtEventForMode(e, r.mode, r), i.callback(n.onHover || n.hover.onHover, [e.native, a.active], a), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(a, e.native, a.active), a.lastActive.length && a.updateHoverStyle(a.lastActive, r.mode, !1), a.active.length && r.mode && a.updateHoverStyle(a.active, r.mode, !0), t = !i.arrayEquals(a.active, a.lastActive), a.lastActive = a.active, t
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
                        i = t ? e : a;
                    return n.weight === i.weight ? n._tmpIndex_ - i._tmpIndex_ : n.weight - i.weight
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
                    for (var n, i = ["fullWidth", "position", "weight"], r = i.length, s = 0; s < r; ++s) n = i[s], a.hasOwnProperty(n) && (t[n] = a[n])
                },
                update: function(e, i, r) {
                    if (e) {
                        var s = e.options.layout || {},
                            o = n.options.toPadding(s.padding),
                            d = o.left,
                            l = o.right,
                            u = o.top,
                            c = o.bottom,
                            m = t(e.boxes, "left"),
                            _ = t(e.boxes, "right"),
                            h = t(e.boxes, "top"),
                            f = t(e.boxes, "bottom"),
                            p = t(e.boxes, "chartArea");
                        a(m, !0), a(_, !1), a(h, !0), a(f, !1);
                        var y = i - d - l,
                            g = r - u - c,
                            M = g / 2,
                            v = (i - y / 2) / (m.length + _.length),
                            L = (r - M) / (h.length + f.length),
                            b = y,
                            k = g,
                            Y = [];
                        n.each(m.concat(_, h, f), function(e) {
                            var t, a = e.isHorizontal();
                            a ? (t = e.update(e.fullWidth ? y : b, L), k -= t.height) : (t = e.update(v, M), b -= t.width), Y.push({
                                horizontal: a,
                                minSize: t,
                                box: e
                            })
                        });
                        var D = 0,
                            w = 0,
                            S = 0,
                            x = 0;
                        n.each(h.concat(f), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                D = Math.max(D, t.left), w = Math.max(w, t.right)
                            }
                        }), n.each(m.concat(_), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                S = Math.max(S, t.top), x = Math.max(x, t.bottom)
                            }
                        });
                        var T = d,
                            j = l,
                            O = u,
                            H = c;
                        n.each(m.concat(_), I), n.each(m, function(e) {
                            T += e.width
                        }), n.each(_, function(e) {
                            j += e.width
                        }), n.each(h.concat(f), I), n.each(h, function(e) {
                            O += e.height
                        }), n.each(f, function(e) {
                            H += e.height
                        }), n.each(m.concat(_), function(e) {
                            var t = n.findNextWhere(Y, function(t) {
                                    return t.box === e
                                }),
                                a = {
                                    left: 0,
                                    right: 0,
                                    top: O,
                                    bottom: H
                                };
                            t && e.update(t.minSize.width, k, a)
                        }), T = d, j = l, O = u, H = c, n.each(m, function(e) {
                            T += e.width
                        }), n.each(_, function(e) {
                            j += e.width
                        }), n.each(h, function(e) {
                            O += e.height
                        }), n.each(f, function(e) {
                            H += e.height
                        });
                        var P = Math.max(D - T, 0);
                        T += P, j += Math.max(w - j, 0);
                        var C = Math.max(S - O, 0);
                        O += C, H += Math.max(x - H, 0);
                        var E = r - O - H,
                            A = i - T - j;
                        A === b && E === k || (n.each(m, function(e) {
                            e.height = E
                        }), n.each(_, function(e) {
                            e.height = E
                        }), n.each(h, function(e) {
                            e.fullWidth || (e.width = A)
                        }), n.each(f, function(e) {
                            e.fullWidth || (e.width = A)
                        }), k = E, b = A);
                        var F = d + P,
                            W = u + C;
                        n.each(m.concat(h), R), F += b, W += k, n.each(_, R), n.each(f, R), e.chartArea = {
                            left: T,
                            top: O,
                            right: T + b,
                            bottom: O + k
                        }, n.each(p, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(b, k)
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
                                e.update(e.fullWidth ? y : b, g / 2, a)
                            } else e.update(t.minSize.width, k)
                    }

                    function R(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? d : T, e.right = e.fullWidth ? i - l : T + b, e.top = W, e.bottom = W + e.height, W = e.bottom) : (e.left = F, e.right = F + e.width, e.top = O, e.bottom = O + k, F = e.right)
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
            i = a("sjgK"),
            r = a("Odds"),
            s = function(e) {
                return n.createElement(r._8, {
                    display: r.R.Flex,
                    flexWrap: r.U.NoWrap,
                    flexShrink: 0,
                    position: r._15.Relative
                }, n.createElement(r._8, {
                    className: "ach-card__badge-wrap",
                    position: r._15.Relative,
                    flexShrink: 0
                }, n.createElement(r._35, {
                    className: "ach-card__badge",
                    background: r.n.Alt2
                }, n.createElement("img", {
                    alt: e.achievement.title,
                    className: "ach-card__img",
                    src: e.achievement.image.scale1x,
                    srcSet: e.achievement.image.scale1x + " 1x, " + e.achievement.image.scale3x + " 3x"
                })), Boolean(e.achievement.level) && n.createElement(r._35, {
                    className: "ach-card__lvl",
                    position: r._15.Absolute,
                    background: r.n.Alt
                }, n.createElement(r.o, {
                    border: !0,
                    icon: Object(i.a)(e.achievement.level),
                    size: 20,
                    type: r.p.Dashboard
                }))), n.createElement(r._35, {
                    overflow: r._11.Hidden,
                    display: r.R.Flex,
                    justifyContent: r._7.Center,
                    flexDirection: r.T.Column,
                    margin: {
                        left: 2
                    }
                }, n.createElement(r.Q, {
                    fontSize: r.V.Size4,
                    color: r.K.Alt,
                    bold: !0,
                    ellipsis: !0
                }, e.achievement.title), n.createElement(r.Q, {
                    fontSize: r.V.Size5,
                    color: r.K.Alt2,
                    ellipsis: !0
                }, e.achievement.description)), n.createElement(r._35, {
                    className: "ach-card__progress-meta",
                    display: r.R.Flex,
                    alignContent: r.b.Center,
                    alignItems: r.c.Center,
                    justifyContent: r._7.End,
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
                var i = {
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
                return n ? i[a][0] : t ? i[a][0] : i[a][1]
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
            i = a("iO9N");
        e.exports = function(e) {
            e.scaleService = {
                constructors: {},
                defaults: {},
                registerScaleType: function(e, t, a) {
                    this.constructors[e] = t, this.defaults[e] = i.clone(a)
                },
                getScaleConstructor: function(e) {
                    return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                },
                getScaleDefaults: function(e) {
                    return this.defaults.hasOwnProperty(e) ? i.merge({}, [n.scale, this.defaults[e]]) : {}
                },
                updateScaleDefaults: function(e, t) {
                    this.defaults.hasOwnProperty(e) && (this.defaults[e] = i.extend(this.defaults[e], t))
                },
                addScalesToLayout: function(t) {
                    i.each(t.scales, function(a) {
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
            i = a("GiK3"),
            r = a("Odds"),
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
                    return i.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, i.createElement(r._35, {
                        display: r.R.Flex,
                        padding: {
                            x: 1
                        },
                        position: r._15.Relative
                    }, i.createElement(r._35, {
                        className: "hoverable-icon",
                        display: r.R.InlineFlex,
                        color: r.K.Alt2,
                        alignItems: r.c.Center,
                        justifyContent: r._7.Center
                    }, i.createElement(r._24, {
                        asset: r._25.NotificationInfo,
                        width: 16,
                        height: 16
                    })), i.createElement(r.q, {
                        show: this.state.isHovered,
                        direction: a,
                        offsetX: "1rem"
                    }, i.createElement(r._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: r.r.Bottom
                }, t
            }(i.Component));
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

            function n(e, n, i) {
                return e + " " + a(t[i], e, n)
            }

            function i(e, n, i) {
                return a(t[i], e, n)
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
                    m: i,
                    mm: n,
                    h: i,
                    hh: n,
                    d: i,
                    dd: n,
                    M: i,
                    MM: n,
                    y: i,
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
    kuCN: function(e, t) {},
    lG75: function(e, t, a) {
        "use strict";
        var n = a("rWJA"),
            i = a("k7DW"),
            r = a("iO9N");
        e.exports = function(e) {
            function t(e, t, a) {
                var n;
                return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e, n
            }

            function a(e) {
                return void 0 !== e && null !== e && "none" !== e
            }

            function s(e, n, i) {
                var r = document.defaultView,
                    s = e.parentNode,
                    o = r.getComputedStyle(e)[n],
                    d = r.getComputedStyle(s)[n],
                    l = a(o),
                    u = a(d),
                    c = Number.POSITIVE_INFINITY;
                return l || u ? Math.min(l ? t(o, e, i) : c, u ? t(d, s, i) : c) : "none"
            }
            r.configMerge = function() {
                return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, a, n, i) {
                        var s = a[t] || {},
                            o = n[t];
                        "scales" === t ? a[t] = r.scaleMerge(s, o) : "scale" === t ? a[t] = r.merge(s, [e.scaleService.getScaleDefaults(o.type), o]) : r._merger(t, a, n, i)
                    }
                })
            }, r.scaleMerge = function() {
                return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                    merger: function(t, a, n, i) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var s, o, d, l = n[t].length;
                            for (a[t] || (a[t] = []), s = 0; s < l; ++s) d = n[t][s], o = r.valueOrDefault(d.type, "xAxes" === t ? "category" : "linear"), s >= a[t].length && a[t].push({}), !a[t][s].type || d.type && d.type !== a[t][s].type ? r.merge(a[t][s], [e.scaleService.getScaleDefaults(o), d]) : r.merge(a[t][s], d)
                        } else r._merger(t, a, n, i)
                    }
                })
            }, r.where = function(e, t) {
                if (r.isArray(e) && Array.prototype.filter) return e.filter(t);
                var a = [];
                return r.each(e, function(e) {
                    t(e) && a.push(e)
                }), a
            }, r.findIndex = Array.prototype.findIndex ? function(e, t, a) {
                return e.findIndex(t, a)
            } : function(e, t, a) {
                a = void 0 === a ? e : a;
                for (var n = 0, i = e.length; n < i; ++n)
                    if (t.call(a, e[n], n, e)) return n;
                return -1
            }, r.findNextWhere = function(e, t, a) {
                r.isNullOrUndef(a) && (a = -1);
                for (var n = a + 1; n < e.length; n++) {
                    var i = e[n];
                    if (t(i)) return i
                }
            }, r.findPreviousWhere = function(e, t, a) {
                r.isNullOrUndef(a) && (a = e.length);
                for (var n = a - 1; n >= 0; n--) {
                    var i = e[n];
                    if (t(i)) return i
                }
            }, r.isNumber = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, r.almostEquals = function(e, t, a) {
                return Math.abs(e - t) < a
            }, r.almostWhole = function(e, t) {
                var a = Math.round(e);
                return a - t < e && a + t > e
            }, r.max = function(e) {
                return e.reduce(function(e, t) {
                    return isNaN(t) ? e : Math.max(e, t)
                }, Number.NEGATIVE_INFINITY)
            }, r.min = function(e) {
                return e.reduce(function(e, t) {
                    return isNaN(t) ? e : Math.min(e, t)
                }, Number.POSITIVE_INFINITY)
            }, r.sign = Math.sign ? function(e) {
                return Math.sign(e)
            } : function(e) {
                return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
            }, r.log10 = Math.log10 ? function(e) {
                return Math.log10(e)
            } : function(e) {
                return Math.log(e) / Math.LN10
            }, r.toRadians = function(e) {
                return e * (Math.PI / 180)
            }, r.toDegrees = function(e) {
                return e * (180 / Math.PI)
            }, r.getAngleFromPoint = function(e, t) {
                var a = t.x - e.x,
                    n = t.y - e.y,
                    i = Math.sqrt(a * a + n * n),
                    r = Math.atan2(n, a);
                return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                    angle: r,
                    distance: i
                }
            }, r.distanceBetweenPoints = function(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }, r.aliasPixel = function(e) {
                return e % 2 == 0 ? 0 : .5
            }, r.splineCurve = function(e, t, a, n) {
                var i = e.skip ? t : e,
                    r = t,
                    s = a.skip ? t : a,
                    o = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2)),
                    d = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                    l = o / (o + d),
                    u = d / (o + d),
                    c = n * (l = isNaN(l) ? 0 : l),
                    m = n * (u = isNaN(u) ? 0 : u);
                return {
                    previous: {
                        x: r.x - c * (s.x - i.x),
                        y: r.y - c * (s.y - i.y)
                    },
                    next: {
                        x: r.x + m * (s.x - i.x),
                        y: r.y + m * (s.y - i.y)
                    }
                }
            }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(e) {
                var t, a, n, i, s, o, d, l, u, c = (e || []).map(function(e) {
                        return {
                            model: e._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                    m = c.length;
                for (t = 0; t < m; ++t)
                    if (!(n = c[t]).model.skip) {
                        if (a = t > 0 ? c[t - 1] : null, (i = t < m - 1 ? c[t + 1] : null) && !i.model.skip) {
                            var _ = i.model.x - n.model.x;
                            n.deltaK = 0 !== _ ? (i.model.y - n.model.y) / _ : 0
                        }!a || a.model.skip ? n.mK = n.deltaK : !i || i.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
                    }
                for (t = 0; t < m - 1; ++t) n = c[t], i = c[t + 1], n.model.skip || i.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = i.mK = 0 : (s = n.mK / n.deltaK, o = i.mK / n.deltaK, (l = Math.pow(s, 2) + Math.pow(o, 2)) <= 9 || (d = 3 / Math.sqrt(l), n.mK = s * d * n.deltaK, i.mK = o * d * n.deltaK)));
                for (t = 0; t < m; ++t)(n = c[t]).model.skip || (a = t > 0 ? c[t - 1] : null, i = t < m - 1 ? c[t + 1] : null, a && !a.model.skip && (u = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), i && !i.model.skip && (u = (i.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
            }, r.nextItem = function(e, t, a) {
                return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
            }, r.previousItem = function(e, t, a) {
                return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
            }, r.niceNum = function(e, t) {
                var a = Math.floor(r.log10(e)),
                    n = e / Math.pow(10, a);
                return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, a)
            }, r.requestAnimFrame = "undefined" == typeof window ? function(e) {
                e()
            } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }, r.getRelativePosition = function(e, t) {
                var a, n, i = e.originalEvent || e,
                    s = e.currentTarget || e.srcElement,
                    o = s.getBoundingClientRect(),
                    d = i.touches;
                d && d.length > 0 ? (a = d[0].clientX, n = d[0].clientY) : (a = i.clientX, n = i.clientY);
                var l = parseFloat(r.getStyle(s, "padding-left")),
                    u = parseFloat(r.getStyle(s, "padding-top")),
                    c = parseFloat(r.getStyle(s, "padding-right")),
                    m = parseFloat(r.getStyle(s, "padding-bottom")),
                    _ = o.right - o.left - l - c,
                    h = o.bottom - o.top - u - m;
                return {
                    x: a = Math.round((a - o.left - l) / _ * s.width / t.currentDevicePixelRatio),
                    y: n = Math.round((n - o.top - u) / h * s.height / t.currentDevicePixelRatio)
                }
            }, r.getConstraintWidth = function(e) {
                return s(e, "max-width", "clientWidth")
            }, r.getConstraintHeight = function(e) {
                return s(e, "max-height", "clientHeight")
            }, r.getMaximumWidth = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientWidth;
                var a = parseInt(r.getStyle(t, "padding-left"), 10),
                    n = parseInt(r.getStyle(t, "padding-right"), 10),
                    i = t.clientWidth - a - n,
                    s = r.getConstraintWidth(e);
                return isNaN(s) ? i : Math.min(i, s)
            }, r.getMaximumHeight = function(e) {
                var t = e.parentNode;
                if (!t) return e.clientHeight;
                var a = parseInt(r.getStyle(t, "padding-top"), 10),
                    n = parseInt(r.getStyle(t, "padding-bottom"), 10),
                    i = t.clientHeight - a - n,
                    s = r.getConstraintHeight(e);
                return isNaN(s) ? i : Math.min(i, s)
            }, r.getStyle = function(e, t) {
                return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
            }, r.retinaScale = function(e, t) {
                var a = e.currentDevicePixelRatio = t || window.devicePixelRatio || 1;
                if (1 !== a) {
                    var n = e.canvas,
                        i = e.height,
                        r = e.width;
                    n.height = i * a, n.width = r * a, e.ctx.scale(a, a), n.style.height = i + "px", n.style.width = r + "px"
                }
            }, r.fontString = function(e, t, a) {
                return t + " " + e + "px " + a
            }, r.longestText = function(e, t, a, n) {
                var i = (n = n || {}).data = n.data || {},
                    s = n.garbageCollect = n.garbageCollect || [];
                n.font !== t && (i = n.data = {}, s = n.garbageCollect = [], n.font = t), e.font = t;
                var o = 0;
                r.each(a, function(t) {
                    void 0 !== t && null !== t && !0 !== r.isArray(t) ? o = r.measureText(e, i, s, o, t) : r.isArray(t) && r.each(t, function(t) {
                        void 0 === t || null === t || r.isArray(t) || (o = r.measureText(e, i, s, o, t))
                    })
                });
                var d = s.length / 2;
                if (d > a.length) {
                    for (var l = 0; l < d; l++) delete i[s[l]];
                    s.splice(0, d)
                }
                return o
            }, r.measureText = function(e, t, a, n, i) {
                var r = t[i];
                return r || (r = t[i] = e.measureText(i).width, a.push(i)), r > n && (n = r), n
            }, r.numberOfLabelLines = function(e) {
                var t = 1;
                return r.each(e, function(e) {
                    r.isArray(e) && e.length > t && (t = e.length)
                }), t
            }, r.color = n ? function(e) {
                return e instanceof CanvasGradient && (e = i.global.defaultColor), n(e)
            } : function(e) {
                return console.error("Color.js not found!"), e
            }, r.getHoverColor = function(e) {
                return e instanceof CanvasPattern ? e : r.color(e).saturate(.5).darken(.1).rgbString()
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
            i = a("wGD1"),
            r = a("iO9N");
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
                a = r.noop;

            function s(a, n) {
                var i = new e.Title({
                    ctx: a.ctx,
                    options: n,
                    chart: a
                });
                t.configure(a, i, n), t.addBox(a, i), a.titleBlock = i
            }
            return e.Title = i.extend({
                initialize: function(e) {
                    r.extend(this, e), this.legendHitBoxes = []
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
                        t = r.valueOrDefault,
                        a = e.options,
                        i = a.display,
                        s = t(a.fontSize, n.global.defaultFontSize),
                        o = e.minSize,
                        d = r.isArray(a.text) ? a.text.length : 1,
                        l = r.options.toLineHeight(a.lineHeight, s),
                        u = i ? d * l + 2 * a.padding : 0;
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
                        a = r.valueOrDefault,
                        i = e.options,
                        s = n.global;
                    if (i.display) {
                        var o, d, l, u = a(i.fontSize, s.defaultFontSize),
                            c = a(i.fontStyle, s.defaultFontStyle),
                            m = a(i.fontFamily, s.defaultFontFamily),
                            _ = r.fontString(u, c, m),
                            h = r.options.toLineHeight(i.lineHeight, u),
                            f = h / 2 + i.padding,
                            p = 0,
                            y = e.top,
                            g = e.left,
                            M = e.bottom,
                            v = e.right;
                        t.fillStyle = a(i.fontColor, s.defaultFontColor), t.font = _, e.isHorizontal() ? (d = g + (v - g) / 2, l = y + f, o = v - g) : (d = "left" === i.position ? g + f : v - f, l = y + (M - y) / 2, o = M - y, p = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(d, l), t.rotate(p), t.textAlign = "center", t.textBaseline = "middle";
                        var L = i.text;
                        if (r.isArray(L))
                            for (var b = 0, k = 0; k < L.length; ++k) t.fillText(L[k], 0, b, o), b += h;
                        else t.fillText(L, 0, 0, o);
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
                    var i = a.options.title,
                        o = a.titleBlock;
                    i ? (r.mergeIf(i, n.global.title), o ? (t.configure(a, o, i), o.options = i) : s(a, i)) : o && (e.layoutService.removeBox(a, o), delete a.titleBlock)
                }
            }
        }
    },
    m7yE: function(e, t, a) {
        (function(e) {
            "use strict";
            var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

            function a(e, a, n, i) {
                var r = function(e) {
                    var a = Math.floor(e % 1e3 / 100),
                        n = Math.floor(e % 100 / 10),
                        i = e % 10,
                        r = "";
                    a > 0 && (r += t[a] + "vatlh");
                    n > 0 && (r += ("" !== r ? " " : "") + t[n] + "maH");
                    i > 0 && (r += ("" !== r ? " " : "") + t[i]);
                    return "" === r ? "pagh" : r
                }(e);
                switch (n) {
                    case "mm":
                        return r + " tup";
                    case "hh":
                        return r + " rep";
                    case "dd":
                        return r + " jaj";
                    case "MM":
                        return r + " jar";
                    case "yy":
                        return r + " DIS"
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

            function n(e, n, i, r) {
                var s = "";
                switch (i) {
                    case "s":
                        return r ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return r ? "minuutin" : "minuutti";
                    case "mm":
                        s = r ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return r ? "tunnin" : "tunti";
                    case "hh":
                        s = r ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return r ? "päivän" : "päivä";
                    case "dd":
                        s = r ? "päivän" : "päivää";
                        break;
                    case "M":
                        return r ? "kuukauden" : "kuukausi";
                    case "MM":
                        s = r ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return r ? "vuoden" : "vuosi";
                    case "yy":
                        s = r ? "vuoden" : "vuotta"
                }
                return s = function(e, n) {
                    return e < 10 ? n ? a[e] : t[e] : e
                }(e, r) + " " + s
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
                var n, i;
                return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = +e, i = {
                    mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: t ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
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
                    var i = n.listeners,
                        r = i.indexOf(a); - 1 !== r && i.splice(r, 1), i.length > 0 || (t.forEach(function(t) {
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
                        i = a.data;
                    for (e = 0, t = n.length; e < t; ++e) i[e] = i[e] || this.createMetaData(e);
                    a.dataset = a.dataset || this.createMetaDataset()
                },
                addElementAndReset: function(e) {
                    var t = this.createMetaData(e);
                    this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                },
                buildOrUpdateElements: function() {
                    var e, i, r = this,
                        s = r.getDataset(),
                        o = s.data || (s.data = []);
                    r._data !== o && (r._data && a(r._data, r), i = r, (e = o)._chartjs ? e._chartjs.listeners.push(i) : (Object.defineProperty(e, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [i]
                        }
                    }), t.forEach(function(t) {
                        var a = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                            i = e[t];
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                                var t = Array.prototype.slice.call(arguments),
                                    r = i.apply(this, t);
                                return n.each(e._chartjs.listeners, function(e) {
                                    "function" == typeof e[a] && e[a].apply(e, t)
                                }), r
                            }
                        })
                    })), r._data = o), r.resyncElements()
                },
                update: n.noop,
                transition: function(e) {
                    for (var t = this.getMeta(), a = t.data || [], n = a.length, i = 0; i < n; ++i) a[i].transition(e);
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
                        i = e._index,
                        r = e.custom || {},
                        s = n.valueAtIndexOrDefault,
                        o = e._model;
                    o.backgroundColor = r.backgroundColor ? r.backgroundColor : s(a.backgroundColor, i, t.backgroundColor), o.borderColor = r.borderColor ? r.borderColor : s(a.borderColor, i, t.borderColor), o.borderWidth = r.borderWidth ? r.borderWidth : s(a.borderWidth, i, t.borderWidth)
                },
                setHoverStyle: function(e) {
                    var t = this.chart.data.datasets[e._datasetIndex],
                        a = e._index,
                        i = e.custom || {},
                        r = n.valueAtIndexOrDefault,
                        s = n.getHoverColor,
                        o = e._model;
                    o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r(t.hoverBackgroundColor, a, s(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r(t.hoverBorderColor, a, s(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r(t.hoverBorderWidth, a, o.borderWidth)
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
            i = a("Odds"),
            r = function() {
                return n.createElement(i._35, {
                    className: "ach-checkmark",
                    textAlign: i._45.Center,
                    display: i.R.InlineFlex,
                    justifyContent: i._7.Center,
                    alignItems: i.c.Center,
                    color: i.K.Overlay
                }, n.createElement(i._35, {
                    className: "ach-checkmark__inner",
                    display: i.R.Flex,
                    justifyContent: i._7.Center,
                    alignItems: i.c.Center
                }, n.createElement(i._24, {
                    asset: i._25.Check,
                    width: 8,
                    height: 8
                })))
            };
        a.d(t, "a", function() {
            return r
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
    raKi: function(e, t) {},
    sFj2: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            i = a("L5rj"),
            r = a("iO9N");
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
                    i = a.labels;
                if (n.length)
                    for (var r = 0; r < n[0].data.length; ++r) t.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(a, n) {
                            var i = e.getDatasetMeta(0),
                                s = t.datasets[0],
                                o = i.data[n],
                                d = o && o.custom || {},
                                l = r.valueAtIndexOrDefault,
                                u = e.options.elements.arc;
                            return {
                                text: a,
                                fillStyle: d.backgroundColor ? d.backgroundColor : l(s.backgroundColor, n, u.backgroundColor),
                                strokeStyle: d.borderColor ? d.borderColor : l(s.borderColor, n, u.borderColor),
                                lineWidth: d.borderWidth ? d.borderWidth : l(s.borderWidth, n, u.borderWidth),
                                hidden: isNaN(s.data[n]) || i.data[n].hidden,
                                index: n
                            }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, i, r = t.index,
                        s = this.chart;
                    for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(i = s.getDatasetMeta(a)).data[r] && (i.data[r].hidden = !i.data[r].hidden);
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
                        return r.isArray(a) ? (a = a.slice())[0] += n : a += n, a
                    }
                }
            }
        }), n._set("pie", r.clone(n.doughnut)), n._set("pie", {
            cutoutPercentage: 0
        }), e.exports = function(e) {
            e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                dataElementType: i.Arc,
                linkScales: r.noop,
                getRingIndex: function(e) {
                    for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t;
                    return t
                },
                update: function(e) {
                    var t = this,
                        a = t.chart,
                        n = a.chartArea,
                        i = a.options,
                        s = i.elements.arc,
                        o = n.right - n.left - s.borderWidth,
                        d = n.bottom - n.top - s.borderWidth,
                        l = Math.min(o, d),
                        u = {
                            x: 0,
                            y: 0
                        },
                        c = t.getMeta(),
                        m = i.cutoutPercentage,
                        _ = i.circumference;
                    if (_ < 2 * Math.PI) {
                        var h = i.rotation % (2 * Math.PI),
                            f = (h += 2 * Math.PI * (h >= Math.PI ? -1 : h < -Math.PI ? 1 : 0)) + _,
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
                            L = h <= .5 * -Math.PI && .5 * -Math.PI <= f || h <= 1.5 * Math.PI && 1.5 * Math.PI <= f,
                            b = m / 100,
                            k = {
                                x: v ? -1 : Math.min(p.x * (p.x < 0 ? 1 : b), y.x * (y.x < 0 ? 1 : b)),
                                y: L ? -1 : Math.min(p.y * (p.y < 0 ? 1 : b), y.y * (y.y < 0 ? 1 : b))
                            },
                            Y = {
                                x: g ? 1 : Math.max(p.x * (p.x > 0 ? 1 : b), y.x * (y.x > 0 ? 1 : b)),
                                y: M ? 1 : Math.max(p.y * (p.y > 0 ? 1 : b), y.y * (y.y > 0 ? 1 : b))
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
                    a.borderWidth = t.getMaxBorderWidth(c.data), a.outerRadius = Math.max((l - a.borderWidth) / 2, 0), a.innerRadius = Math.max(m ? a.outerRadius / 100 * m : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, c.total = t.calculateTotal(), t.outerRadius = a.outerRadius - a.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - a.radiusLength, 0), r.each(c.data, function(a, n) {
                        t.updateElement(a, n, e)
                    })
                },
                updateElement: function(e, t, a) {
                    var n = this,
                        i = n.chart,
                        s = i.chartArea,
                        o = i.options,
                        d = o.animation,
                        l = (s.left + s.right) / 2,
                        u = (s.top + s.bottom) / 2,
                        c = o.rotation,
                        m = o.rotation,
                        _ = n.getDataset(),
                        h = a && d.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(_.data[t]) * (o.circumference / (2 * Math.PI)),
                        f = a && d.animateScale ? 0 : n.innerRadius,
                        p = a && d.animateScale ? 0 : n.outerRadius,
                        y = r.valueAtIndexOrDefault;
                    r.extend(e, {
                        _datasetIndex: n.index,
                        _index: t,
                        _model: {
                            x: l + i.offsetX,
                            y: u + i.offsetY,
                            startAngle: c,
                            endAngle: m,
                            circumference: h,
                            outerRadius: p,
                            innerRadius: f,
                            label: y(_.label, t, i.data.labels[t])
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
                    return r.each(a.data, function(a, i) {
                        e = t.data[i], isNaN(e) || a.hidden || (n += Math.abs(e))
                    }), n
                },
                calculateCircumference: function(e) {
                    var t = this.getMeta().total;
                    return t > 0 && !isNaN(e) ? 2 * Math.PI * (e / t) : 0
                },
                getMaxBorderWidth: function(e) {
                    for (var t, a, n = 0, i = this.index, r = e.length, s = 0; s < r; s++) t = e[s]._model ? e[s]._model.borderWidth : 0, n = (a = e[s]._chart ? e[s]._chart.config.data.datasets[i].hoverBorderWidth : 0) > (n = t > n ? t : n) ? a : n;
                    return n
                }
            })
        }
    },
    sFo6: function(e, t, a) {
        "use strict";
        var n = a("k7DW"),
            i = a("iO9N"),
            r = a("IbXy");
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
                        callback: r.formatters.linear
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
                    n = i.valueOrDefault(a.fontSize, t.defaultFontSize),
                    r = i.valueOrDefault(a.fontStyle, t.defaultFontStyle),
                    s = i.valueOrDefault(a.fontFamily, t.defaultFontFamily);
                return {
                    size: n,
                    style: r,
                    family: s,
                    font: i.fontString(n, r, s)
                }
            }

            function d(e, t, a, n, i) {
                return e === n || e === i ? {
                    start: t - a / 2,
                    end: t + a / 2
                } : e < n || e > i ? {
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
                if (i.isArray(t))
                    for (var r = a.y, s = 1.5 * n, o = 0; o < t.length; ++o) e.fillText(t[o], a.x, r), r += s;
                else e.fillText(t, a.x, a.y)
            }

            function c(e, t, a) {
                90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
            }

            function m(e) {
                return i.isNumber(e) ? e : 0
            }
            var _ = e.LinearScaleBase.extend({
                setDimensions: function() {
                    var e = this,
                        a = e.options,
                        n = a.ticks;
                    e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                    var r = i.min([e.height, e.width]),
                        s = i.valueOrDefault(n.fontSize, t.defaultFontSize);
                    e.drawingArea = a.display ? r / 2 - (s / 2 + n.backdropPaddingY) : r / 2
                },
                determineDataLimits: function() {
                    var e = this,
                        t = e.chart,
                        a = Number.POSITIVE_INFINITY,
                        n = Number.NEGATIVE_INFINITY;
                    i.each(t.data.datasets, function(r, s) {
                        if (t.isDatasetVisible(s)) {
                            var o = t.getDatasetMeta(s);
                            i.each(r.data, function(t, i) {
                                var r = +e.getRightValue(t);
                                isNaN(r) || o.data[i].hidden || (a = Math.min(r, a), n = Math.max(r, n))
                            })
                        }
                    }), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
                },
                getTickLimit: function() {
                    var e = this.options.ticks,
                        a = i.valueOrDefault(e.fontSize, t.defaultFontSize);
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
                        var t, a, n, r = o(e),
                            l = Math.min(e.height / 2, e.width / 2),
                            u = {
                                r: e.width,
                                l: 0,
                                t: e.height,
                                b: 0
                            },
                            c = {};
                        e.ctx.font = r.font, e._pointLabelSizes = [];
                        var m, _, h, f = s(e);
                        for (t = 0; t < f; t++) {
                            n = e.getPointPosition(t, l), m = e.ctx, _ = r.size, h = e.pointLabels[t] || "", a = i.isArray(h) ? {
                                w: i.longestText(m, m.font, h),
                                h: h.length * _ + 1.5 * (h.length - 1) * _
                            } : {
                                w: m.measureText(h).width,
                                h: _
                            }, e._pointLabelSizes[t] = a;
                            var p = e.getIndexAngle(t),
                                y = i.toDegrees(p) % 360,
                                g = d(y, n.x, a.w, 0, 180),
                                M = d(y, n.y, a.h, 90, 270);
                            g.start < u.l && (u.l = g.start, c.l = p), g.end > u.r && (u.r = g.end, c.r = p), M.start < u.t && (u.t = M.start, c.t = p), M.end > u.b && (u.b = M.end, c.b = p)
                        }
                        e.setReductions(l, u, c)
                    }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
                },
                setReductions: function(e, t, a) {
                    var n = t.l / Math.sin(a.l),
                        i = Math.max(t.r - this.width, 0) / Math.sin(a.r),
                        r = -t.t / Math.cos(a.t),
                        s = -Math.max(t.b - this.height, 0) / Math.cos(a.b);
                    n = m(n), i = m(i), r = m(r), s = m(s), this.drawingArea = Math.min(Math.round(e - (n + i) / 2), Math.round(e - (r + s) / 2)), this.setCenterPoint(n, i, r, s)
                },
                setCenterPoint: function(e, t, a, n) {
                    var i = this,
                        r = i.width - t - i.drawingArea,
                        s = e + i.drawingArea,
                        o = a + i.drawingArea,
                        d = i.height - n - i.drawingArea;
                    i.xCenter = Math.round((s + r) / 2 + i.left), i.yCenter = Math.round((o + d) / 2 + i.top)
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
                        r = a.ticks,
                        d = i.valueOrDefault;
                    if (a.display) {
                        var m = e.ctx,
                            _ = this.getIndexAngle(0),
                            h = d(r.fontSize, t.defaultFontSize),
                            f = d(r.fontStyle, t.defaultFontStyle),
                            p = d(r.fontFamily, t.defaultFontFamily),
                            y = i.fontString(h, f, p);
                        i.each(e.ticks, function(a, o) {
                            if (o > 0 || r.reverse) {
                                var l = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]);
                                if (n.display && 0 !== o && function(e, t, a, n) {
                                        var r = e.ctx;
                                        if (r.strokeStyle = i.valueAtIndexOrDefault(t.color, n - 1), r.lineWidth = i.valueAtIndexOrDefault(t.lineWidth, n - 1), e.options.gridLines.circular) r.beginPath(), r.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), r.closePath(), r.stroke();
                                        else {
                                            var o = s(e);
                                            if (0 === o) return;
                                            r.beginPath();
                                            var d = e.getPointPosition(0, a);
                                            r.moveTo(d.x, d.y);
                                            for (var l = 1; l < o; l++) d = e.getPointPosition(l, a), r.lineTo(d.x, d.y);
                                            r.closePath(), r.stroke()
                                        }
                                    }(e, n, l, o), r.display) {
                                    var u = d(r.fontColor, t.defaultFontColor);
                                    if (m.font = y, m.save(), m.translate(e.xCenter, e.yCenter), m.rotate(_), r.showLabelBackdrop) {
                                        var c = m.measureText(a).width;
                                        m.fillStyle = r.backdropColor, m.fillRect(-c / 2 - r.backdropPaddingX, -l - h / 2 - r.backdropPaddingY, c + 2 * r.backdropPaddingX, h + 2 * r.backdropPaddingY)
                                    }
                                    m.textAlign = "center", m.textBaseline = "middle", m.fillStyle = u, m.fillText(a, 0, -l), m.restore()
                                }
                            }
                        }), (a.angleLines.display || a.pointLabels.display) && function(e) {
                            var a = e.ctx,
                                n = i.valueOrDefault,
                                r = e.options,
                                d = r.angleLines,
                                m = r.pointLabels;
                            a.lineWidth = d.lineWidth, a.strokeStyle = d.color;
                            var _ = e.getDistanceFromCenterForValue(r.ticks.reverse ? e.min : e.max),
                                h = o(e);
                            a.textBaseline = "top";
                            for (var f = s(e) - 1; f >= 0; f--) {
                                if (d.display) {
                                    var p = e.getPointPosition(f, _);
                                    a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(p.x, p.y), a.stroke(), a.closePath()
                                }
                                if (m.display) {
                                    var y = e.getPointPosition(f, _ + 5),
                                        g = n(m.fontColor, t.defaultFontColor);
                                    a.font = h.font, a.fillStyle = g;
                                    var M = e.getIndexAngle(f),
                                        v = i.toDegrees(M);
                                    a.textAlign = l(v), c(v, e._pointLabelSizes[f], y), u(a, e.pointLabels[f] || "", y, h.size)
                                }
                            }
                        }(e)
                    }
                }
            });
            e.scaleService.registerScaleType("radialLinear", _, a)
        }
    },
    sjgK: function(e, t, a) {
        "use strict";
        var n = a("Odds"),
            i = {
                1: n._25.Roman1,
                2: n._25.Roman2,
                3: n._25.Roman3,
                4: n._25.Roman4,
                5: n._25.Roman5
            };

        function r(e) {
            return i[e]
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
            return r
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

            function i(e, t, a, i) {
                var r = e + " ";
                switch (a) {
                    case "s":
                        return t || i ? "pár sekund" : "pár sekundami";
                    case "m":
                        return t ? "minuta" : i ? "minutu" : "minutou";
                    case "mm":
                        return t || i ? r + (n(e) ? "minuty" : "minut") : r + "minutami";
                    case "h":
                        return t ? "hodina" : i ? "hodinu" : "hodinou";
                    case "hh":
                        return t || i ? r + (n(e) ? "hodiny" : "hodin") : r + "hodinami";
                    case "d":
                        return t || i ? "den" : "dnem";
                    case "dd":
                        return t || i ? r + (n(e) ? "dny" : "dní") : r + "dny";
                    case "M":
                        return t || i ? "měsíc" : "měsícem";
                    case "MM":
                        return t || i ? r + (n(e) ? "měsíce" : "měsíců") : r + "měsíci";
                    case "y":
                        return t || i ? "rok" : "rokem";
                    case "yy":
                        return t || i ? r + (n(e) ? "roky" : "let") : r + "lety"
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
                    s: i,
                    m: i,
                    mm: i,
                    h: i,
                    hh: i,
                    d: i,
                    dd: i,
                    M: i,
                    MM: i,
                    y: i,
                    yy: i
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
                    var i = t.words[n];
                    return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
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
            i = a("GiK3"),
            r = a("3zLD"),
            s = a("6sO2"),
            o = a("7vx8"),
            d = a("j7/Y"),
            l = a("w9tK"),
            u = a("vH/s"),
            c = a("CSlQ"),
            m = a("pK/l"),
            _ = a("WmaG"),
            h = a("5rtz"),
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
                    return i.createElement(f._2, {
                        flexGrow: 0,
                        flexShrink: 1,
                        fullWidth: !0
                    }, i.createElement("canvas", {
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
                            a = L(this.viewerGraph.getContext("2d"));
                        this.viewerGraph.width = e * a, this.viewerGraph.height = t * a, this.viewerGraph.style.width = e + "px", this.viewerGraph.style.height = t + "px", this.viewerGraph.getContext("2d").setTransform(a, 0, 0, a, 0, 0)
                    }
                }, t
            }(i.Component),
            L = function(e) {
                return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
            },
            b = (a("db2S"), {
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
                return i.createElement("div", null, i.createElement(f._35, {
                    className: t,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2
                }, i.createElement(f._35, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(f.Q, {
                    fontSize: f.V.Size4,
                    color: f.K.Overlay,
                    bold: !0
                }, Object(s.d)("Your Viewers", "StreamSummaryViewerGraphTitle")), i.createElement(S, n.__assign({}, e))), i.createElement(x, n.__assign({}, e))))
            },
            S = function(e) {
                var t = e.viewerGraph,
                    a = e.peak;
                if (t.isEmpty) return null;
                var r = Object(s.c)(a.peakViewershipTime, {
                        hour: "numeric",
                        minute: "numeric"
                    }),
                    o = Object(s.d)("{peakViewers, plural, one {# viewer} other {# viewers}}", {
                        peakViewers: a.maxViewerCount
                    }, "StreamSummaryViewerGraphPeakCount"),
                    d = Object(s.d)("Peaked at {peakViewersTxt} at {time}", {
                        peakViewersTxt: i.createElement("strong", null, o),
                        time: r
                    }, "StreamSummaryViewerGraphPeakViewersMsg");
                return i.createElement(f.Q, n.__assign({
                    fontSize: f.V.Size5,
                    color: f.K.OverlayAlt
                }, b), d)
            },
            x = function(e) {
                var t = e.viewerGraph;
                return t.isEmpty ? i.createElement(f._8, n.__assign({
                    flexGrow: 0,
                    flexShrink: 1,
                    fullWidth: !0,
                    className: "sm-graph-panel__no-data-content"
                }, k), i.createElement(f.m, {
                    src: Y,
                    alt: D,
                    size: 50
                }), i.createElement(f.Q, {
                    color: f.K.OverlayAlt,
                    fontSize: f.V.Size5
                }, Object(s.d)("Not enough data for us to display", "StreamSummaryViewerGraphNoData"))) : i.createElement(v, n.__assign({}, t))
            },
            T = a("OAwv"),
            j = a("u4Vk"),
            O = a("PGY2"),
            H = function() {
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
                var t, a, i, r;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = "https://api.twitch.tv/v5/channels/" + e.channel.id + "/analytics/stats_time_series", a = T.stringify(Object(j.i)(e.interval)), i = [t, a].join("?"), [4, Object(O.c)({
                                path: i
                            })];
                        case 1:
                            return (r = n.sent()).isError() ? [2, {
                                isError: !0,
                                statsTimeSeries: new H(P)
                            }] : [2, {
                                isError: !1,
                                statsTimeSeries: (s = r.body, H.fromPayload(s))
                            }]
                    }
                    var s
                })
            })
        }
        var E = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        viewerGraph: new H(P),
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
                    if (t.isLoading || !e) return i.createElement(f._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(f._14, {
                        height: 300
                    }));
                    var n = {
                        maxViewerCount: e.maxViewerCount,
                        peakViewershipTime: e.peakViewershipTime
                    };
                    return i.createElement(w, {
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
            }(i.Component),
            A = a("AOOj"),
            F = a("jK9j"),
            W = a("RVgG"),
            I = a("D6QB"),
            R = a("zjE0"),
            z = a("FeZP"),
            N = function(e) {
                if (e.query.isLoading || !e.streamSummaryCursor.current) return i.createElement(f._14, {
                    height: 400
                });
                var t = e.streamSummaryCursor.current.interval,
                    a = e.query.achievements.nCompletedInRange(3, t);
                if (e.streamSummaryCursor.isLast && a.length < 3) {
                    var n = e.query.achievements.topNInProgress(3 - a.length);
                    a.push.apply(a, n)
                }
                return a.length ? i.createElement(R.a, {
                    title: Object(s.d)("What is my achievements progress?", "StreamSummaryAchievementsPanel")
                }, i.createElement(f._35, {
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    background: f.n.Base
                }, i.createElement(f._35, {
                    padding: 2,
                    borderBottom: !0
                }, a.map(function(e) {
                    return i.createElement(W.a, {
                        key: e.id,
                        achievement: e
                    }, i.createElement(I.a, {
                        achievement: e
                    }))
                })), i.createElement(z.a, {
                    message: Object(s.d)("View Achievements", "StreamSummaryAchievementsPanel"),
                    onClick: F.e,
                    linkTo: O.b.channelAchievements(e.streamSummaryCursor.current.channel.name),
                    targetBlank: !0
                }))) : i.createElement("span", null)
            },
            V = a("Xcw2"),
            B = a("DNvj"),
            J = function(e) {
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
                    return i.createElement(V.a, {
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
                                    }), [4, Object(B.a)(e.channel.name, e.interval)]);
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
            }(i.Component),
            G = a("9Yaz"),
            U = (a("h2tJ"), {
                "data-test-selector": "live-dashboard-link"
            }),
            q = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                alt: "VoHiYo"
            },
            K = "https://help.twitch.tv/customer/portal/articles/2877822";

        function Q(e) {
            var t = e.query;
            return t.isLoading || t.streamSummaries.length || !t.channel ? i.createElement("div", null) : i.createElement(f._8, {
                position: f._15.Absolute,
                fullWidth: !0,
                margin: {
                    top: 5
                },
                zIndex: f._62.Above
            }, i.createElement(f._55, {
                childWidth: f._56.Medium,
                center: !0
            }, i.createElement("div", {
                className: "sm-welcome-modal"
            }, i.createElement(f.e, {
                type: f.j.SlideInBottom,
                duration: f.g.Medium,
                enabled: !0,
                timing: f.i.EaseInOut
            }, i.createElement(f._35, {
                border: !0,
                padding: 2,
                background: f.n.Base,
                elevation: 3
            }, i.createElement(f._8, {
                display: f.R.Flex,
                alignItems: f.c.Center,
                margin: {
                    bottom: 1
                }
            }, i.createElement(f.m, n.__assign({}, q, {
                size: 30
            })), i.createElement(f._8, {
                margin: {
                    left: .5
                }
            }, i.createElement(f.Q, {
                type: f._49.H4,
                bold: !0
            }, Object(s.d)("Welcome to Stream Summary", "StreamSummaryNoAvailableStreamSummariesNotice")))), i.createElement(f._58, null, i.createElement(f.Q, {
                fontSize: f.V.Size5
            }, Object(s.d)("See a summary of your past streams with stats, clips, achievements, and more. Stream to get started!", "StreamSummaryNoAvailableStreamSummariesNotice"))), i.createElement(f._8, {
                padding: {
                    top: 1
                }
            }, i.createElement(f._8, {
                margin: {
                    right: 1
                },
                display: f.R.InlineBlock
            }, i.createElement(f.v, n.__assign({
                linkTo: "https://twitch.tv/" + t.channel.name + "/dashboard"
            }, U), Object(s.d)("Go to Live Dashboard", "StreamSummaryNoAvailableStreamSummariesNotice"))), i.createElement(f.v, {
                linkTo: K,
                type: f.B.Text
            }, Object(s.d)("Learn More", "StreamSummaryNoAvailableStreamSummariesNotice"))))))))
        }
        a("jQxI");
        var Z, X = a("KMD5"),
            $ = function(e) {
                return e.quest && !e.quest.isFinished ? i.createElement(f._35, {
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2,
                    background: f.n.Base
                }, i.createElement(f._8, {
                    padding: {
                        bottom: 2
                    }
                }, i.createElement(f.Q, {
                    type: f._49.H4,
                    bold: !0
                }, e.quest.title)), e.quest.achievements.map(function(t) {
                    return i.createElement(W.a, {
                        key: t.id,
                        achievement: t
                    }, i.createElement(X.a, {
                        achievement: t,
                        quest: e.quest
                    }))
                })) : e.quest ? i.createElement("span", null) : i.createElement(f._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(f._14, {
                    height: 400
                }))
            },
            ee = a("vTHh");

        function te(e) {
            return (Z || (Z = {
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
            }), Z)[e] || e
        }
        a("o8tO");
        var ae = 5,
            ne = {
                "data-test-selector": "no-data"
            },
            ie = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
                alt: "StinkyCheese"
            };

        function re(e) {
            var t = e.streamSummary;
            if (!t) return i.createElement(f._8, {
                margin: {
                    bottom: 2
                }
            }, i.createElement(f._14, {
                height: 375
            }));
            var a = t.videoPlayAllReferrers;
            return i.createElement(R.a, {
                title: Object(s.d)("Where did my views come from?", "StreamSummaryReferralPanel")
            }, i.createElement(f._35, {
                className: "referral-panel",
                flexDirection: a.total ? void 0 : f.T.Column,
                margin: {
                    bottom: 2
                },
                elevation: 1,
                background: f.n.Base
            }, i.createElement(f._35, {
                borderBottom: !0,
                padding: {
                    bottom: 1
                }
            }, i.createElement(ee.a, {
                referrals: a.items.slice(0, ae),
                total: a.total,
                translationFunc: te,
                subtitle: function(e) {
                    if (!e) return "";
                    return Object(s.d)("{viewCount, plural, one {# view across all web sources} other {# views across all web sources}}", {
                        viewCount: e
                    }, "StreamSummaryReferralPanel")
                }(a.total)
            }), !a.total && i.createElement(se, null)), i.createElement(oe, {
                streamSummary: t
            })))
        }

        function se() {
            return i.createElement(f._35, n.__assign({
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
            }, ne), i.createElement(f.m, {
                src: ie.src,
                alt: ie.alt,
                size: 50
            }), i.createElement(f.Q, {
                color: f.K.Alt2,
                fontSize: f.V.Size5
            }, Object(s.d)("Not enough data for us to display", "StreamSummaryReferralPanel")))
        }

        function oe(e) {
            var t, a = e.streamSummary;
            return a ? (t = a.videoPlayAllReferrers.total ? Object(s.d)("View More Stats", "StreamSummaryReferralPanel") : Object(s.d)("View Stats", "StreamSummaryReferralPanel"), i.createElement(z.a, {
                message: t,
                linkTo: "https://twitch.tv/" + a.channel.name + "/dashboard/stats",
                onClick: F.g,
                targetBlank: !0
            })) : null
        }
        var de = a("wuJz"),
            le = a("sjgK"),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTrackClick = function() {
                        Object(A.f)(A.a, t.props.streamSummary)
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    Object(A.g)(A.a, this.props.streamSummary)
                }, Object.defineProperty(t.prototype, "bannerTitle", {
                    get: function() {
                        var e = this.props.achievement,
                            t = e.title,
                            a = e.level,
                            n = i.createElement("span", null, Object(le.b)(a));
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
                    return i.createElement(Oe, {
                        title: this.bannerTitle,
                        subtitle: this.props.achievement.description,
                        url: O.b.achievement(this.props.achievement),
                        purpleScale: !0,
                        onSpotlightDismiss: this.props.onSpotlightDismiss,
                        onSpotlightClick: this.handleTrackClick
                    })
                }, t
            }(i.PureComponent),
            ce = a("zLjR"),
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTrackClick = function() {
                        Object(A.f)(A.c, t.props.streamSummary)
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    Object(A.g)(A.c, this.props.streamSummary)
                }, t.prototype.render = function() {
                    var e = Object(ce.b)(this.props.quest.key),
                        t = i.createElement(_e, {
                            title: e.title
                        }),
                        a = e.bannerTitle(t);
                    return i.createElement(Oe, {
                        title: a,
                        subtitle: e.subtitle,
                        url: O.b.channelAchievements(this.props.streamSummary.channel.name),
                        onSpotlightDismiss: this.props.onSpotlightDismiss,
                        onSpotlightClick: this.handleTrackClick
                    })
                }, t
            }(i.PureComponent),
            _e = function(e) {
                var t = e.title;
                return i.createElement(f.Q, {
                    type: f._49.Span,
                    color: f.K.OverlayAlt
                }, t)
            },
            he = a("bQ8d"),
            fe = ["0s", "0.2s", "0.4s", "0.6s"],
            pe = ["3%", "14%", "26%", "42%", "55%", "66%", "78%", "90%"],
            ye = [{
                src: "https://static-cdn.jtvnw.net/emoticons/v1/192363/3.0",
                alt: "ClappyHype"
            }, {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/192361/3.0",
                alt: "Clappy"
            }],
            ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTrackClick = function() {
                        Object(A.f)(A.b, t.props.streamSummary)
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    Object(A.g)(A.b, this.props.streamSummary)
                }, t.prototype.render = function() {
                    return i.createElement(Se, {
                        title: Object(s.d)("Top Clip of the Stream", "StreamSummarySpotlightClip"),
                        subtitle: this.subtitleMessage,
                        url: this.props.topClip.url,
                        onSpotlightDismiss: this.props.onSpotlightDismiss,
                        onSpotlightClick: this.handleTrackClick,
                        flourish: Object(he.c)(8, function(e) {
                            return i.createElement(Me, n.__assign({}, Object(he.b)(ye), {
                                key: e,
                                style: (t = e, {
                                    left: "" + pe[t],
                                    top: Object(he.a)(-10, 58) + "%",
                                    width: Object(he.a)(3, 7) + "rem",
                                    animationDelay: "" + Object(he.b)(fe)
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
            }(i.PureComponent);
        var Me = function(e) {
            return i.createElement("div", {
                className: "sm-sb-flourish-emotes__float",
                style: n.__assign({}, e.style)
            }, i.createElement("img", {
                className: "sm-sb-flourish-emotes__img",
                src: e.src,
                alt: e.alt,
                style: {
                    transform: "rotate(" + Object(he.a)(65) + "deg)"
                }
            }))
        };
        var ve = a("AJEV"),
            Le = "stream-summary-spotlights",
            be = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.handleSpotlightDismiss = function() {
                        a.setState({
                            show: !1
                        }, function() {
                            var e = s.l.get(Le, {});
                            e[a.streamSummaryKey] = "dismissed", s.l.set(Le, e)
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
                    var e = s.l.get(Le, {});
                    this.streamSummaryKey && e[this.streamSummaryKey] && this.setState({
                        show: !1
                    })
                }, t.prototype.componentDidUpdate = function(e) {
                    e.streamSummary !== this.props.streamSummary && (s.l.get(Le, {})[this.streamSummaryKey] && this.setState({
                        show: !1
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.query.quests[0];
                    if (this.isLoading || !this.state.show || !this.props.streamSummary || !e) return null;
                    var t = this.props.topClips.clips[0],
                        a = this.completedQuest,
                        n = this.completedAchievement;
                    return a ? i.createElement(me, {
                        quest: a,
                        onSpotlightDismiss: this.handleSpotlightDismiss,
                        streamSummary: this.props.streamSummary
                    }) : n ? i.createElement(ue, {
                        achievement: n,
                        onSpotlightDismiss: this.handleSpotlightDismiss,
                        streamSummary: this.props.streamSummary
                    }) : t && t.views > 1 ? i.createElement(ge, {
                        topClip: t,
                        onSpotlightDismiss: this.handleSpotlightDismiss,
                        streamSummary: this.props.streamSummary
                    }) : null
                }, Object.defineProperty(t.prototype, "completedQuest", {
                    get: function() {
                        var e = this.props.streamSummary.interval,
                            t = this.props.query.quests.filter(function(t) {
                                return t.completedAt && Object(de.isWithinRange)(t.completedAt, e.start, e.end)
                            });
                        return ve.e.topCelebratable(t)
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
            }(i.Component),
            ke = {
                "data-test-selector": "title"
            },
            Ye = {
                "data-test-selector": "subtitle"
            },
            De = {
                "data-test-selector": "cta-link"
            },
            we = {
                "data-test-selector": "dismiss"
            },
            Se = (a("raKi"), function(e) {
                return i.createElement(f._8, {
                    className: "sm-sb-flourish-emotes",
                    position: f._15.Relative
                }, i.createElement(f.e, {
                    type: f.j.BounceIn,
                    duration: f.g.Medium,
                    enabled: !0,
                    timing: f.i.EaseInOut
                }, i.createElement(xe, n.__assign({}, e)), i.createElement(f._8, {
                    className: "sm-sb-flourish-emotes__dismiss",
                    position: f._15.Absolute,
                    zIndex: f._62.Above,
                    attachTop: !0,
                    attachRight: !0
                }, i.createElement(f.w, n.__assign({}, we, {
                    ariaLabel: Object(ce.a)().spotlightDismiss,
                    size: f.x.Large,
                    icon: f._25.Close,
                    onClick: e.onSpotlightDismiss,
                    overlay: !0
                })))))
            }),
            xe = function(e) {
                return i.createElement("a", n.__assign({}, De, {
                    href: e.url,
                    className: "sm-sb-flourish-emotes__link",
                    target: "_blank",
                    onClick: e.onSpotlightClick
                }), i.createElement(f._35, {
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
                }, i.createElement(f._35, {
                    className: "sm-sb-flourish-emotes__emotes-layer",
                    position: f._15.Absolute,
                    overflow: f._11.Hidden,
                    attachTop: !0,
                    attachRight: !0,
                    attachBottom: !0,
                    attachLeft: !0,
                    borderRadius: f.t.Small
                }, e.flourish), i.createElement(f._35, {
                    className: "sm-sb-flourish-emotes__text",
                    position: f._15.Relative,
                    zIndex: f._62.Above,
                    padding: {
                        x: .5,
                        y: 0
                    },
                    borderRadius: f.t.Medium
                }, i.createElement(f.Q, n.__assign({}, ke, {
                    fontSize: f.V.Size4,
                    bold: !0,
                    ellipsis: !0
                }), e.title), i.createElement(f.Q, n.__assign({}, Ye, {
                    fontSize: f.V.Size5,
                    color: f.K.OverlayAlt,
                    ellipsis: !0
                }), e.subtitle))))
            },
            Te = a("u3ZQ"),
            je = (a("5t69"), ["rgba(168, 136, 230, 1)", "rgba(158, 128, 221, 1)", "rgba(136, 109, 200, 1)", "rgba(129, 104, 193, 1)"]),
            Oe = function(e) {
                return i.createElement(f._8, {
                    className: "sm-sb-flourish-confetti",
                    position: f._15.Relative
                }, i.createElement(f.e, {
                    type: f.j.BounceIn,
                    duration: f.g.Medium,
                    enabled: !0,
                    timing: f.i.EaseInOut
                }, i.createElement(f._35, {
                    className: "sm-sb-flourish-confetti__wrap",
                    position: f._15.Relative,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    border: !0,
                    borderRadius: f.t.Small
                }, i.createElement(He, n.__assign({}, e)), i.createElement(f._8, {
                    className: "sm-sb-flourish-confetti__dismiss",
                    position: f._15.Absolute,
                    zIndex: f._62.Above,
                    attachTop: !0,
                    attachRight: !0
                }, i.createElement(f.w, n.__assign({}, we, {
                    ariaLabel: Object(ce.a)().spotlightDismiss,
                    type: f.y.Default,
                    size: f.x.Large,
                    icon: f._25.Close,
                    onClick: e.onSpotlightDismiss,
                    overlay: e.purpleScale
                }))), i.createElement(Te.a, {
                    confettiCount: 40,
                    infinite: !0,
                    colors: e.purpleScale ? je : void 0
                }))))
            },
            He = function(e) {
                var t = p({
                    "sm-sb-flourish-confetti__content": !0,
                    "sm-sb-flourish-confetti__content--purple-scale": e.purpleScale
                });
                return i.createElement("a", n.__assign({}, De, {
                    className: "sm-sb-flourish-confetti__link",
                    href: e.url,
                    target: "_blank",
                    onClick: e.onSpotlightClick
                }), i.createElement(f._35, {
                    className: t,
                    position: f._15.Relative,
                    zIndex: f._62.Default,
                    textAlign: f._45.Center,
                    padding: 2,
                    fullWidth: !0,
                    borderRadius: f.t.Small
                }, i.createElement(f.Q, n.__assign({}, ke, {
                    type: f._49.Span,
                    fontSize: f.V.Size4,
                    color: e.purpleScale ? f.K.Overlay : f.K.Base,
                    bold: !0,
                    ellipsis: !0
                }), e.title), i.createElement(f.Q, n.__assign({}, Ye, {
                    fontSize: f.V.Size5,
                    color: e.purpleScale ? f.K.OverlayAlt : f.K.Alt2,
                    ellipsis: !0
                }), e.subtitle)))
            },
            Pe = a("5kgt"),
            Ce = {
                "data-test-selector": "subtitle"
            },
            Ee = {
                "data-test-selector": "value"
            },
            Ae = {
                "data-test-selector": "increase"
            },
            Fe = function(e) {
                return i.createElement(f._8, n.__assign({
                    display: f.R.Flex,
                    flexDirection: f.T.Column
                }, Object(Pe.a)(e)), i.createElement(f._35, {
                    display: f.R.Flex,
                    flexGrow: 1,
                    flexDirection: f.T.Column,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2,
                    background: f.n.Base
                }, i.createElement(f._35, {
                    display: f.R.Flex,
                    flexDirection: f.T.Column
                }, i.createElement(f.Q, {
                    fontSize: f.V.Size4,
                    bold: !0
                }, e.title), i.createElement(f.Q, n.__assign({
                    fontSize: f.V.Size5,
                    color: f.K.Alt2
                }, Ce), e.subtitle || i.createElement("br", null))), i.createElement(f._35, {
                    display: f.R.Flex,
                    flexGrow: 1,
                    alignItems: f.c.End,
                    padding: {
                        top: 2
                    }
                }, i.createElement(f.Q, n.__assign({
                    type: f._49.Span,
                    fontSize: f.V.Size2,
                    bold: !0,
                    color: f.K.Link
                }, Ee), e.value, e.isIncrease && i.createElement(We, null)))))
            };

        function We() {
            return i.createElement(f._24, n.__assign({
                asset: f._25.GlyphArrUp,
                type: f._26.Success
            }, Ae))
        }

        function Ie(e) {
            var t = Math.floor(e.currentValue),
                a = e.previousValue && Math.floor(e.previousValue),
                r = "number" == typeof a && t - a;
            return i.createElement(Fe, n.__assign({
                title: e.title,
                subtitle: function(e) {
                    if ("number" != typeof e) return "";
                    var t = e < 0 ? "-" : "+";
                    return Object(s.d)("{sign}{avgViewerDiff, number} from last stream", {
                        avgViewerDiff: Math.abs(e),
                        sign: t
                    }, "StreamSummaryNumericComparison")
                }(r),
                value: Object(s.e)(t),
                isIncrease: Boolean(r && r > 0)
            }, Object(Pe.a)(e)))
        }
        var Re = {
            "data-test-selector": "stream-summary-stream-duration"
        };

        function ze(e) {
            var t = e.currentStreamSummary,
                a = e.previousStreamSummary;
            return i.createElement(Fe, n.__assign({
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
            }, Re))
        }
        var Ne = a("5CG2"),
            Ve = {
                "data-test-selector": "stream-summary-avg-viewer-stat-card"
            },
            Be = {
                "data-test-selector": "stream-summary-max-viewer-stat-card"
            },
            Je = {
                "data-test-selector": "stream-summary-new-follower-stat-card"
            },
            Ge = {
                "data-test-selector": "stream-summary-unique-chatters-stat-card"
            },
            Ue = {
                "data-test-selector": "stream-summary-clips-created-stat-card"
            },
            qe = {
                "data-test-selector": "stream-summary-unique-viewers-stat-card"
            },
            Ke = {
                "data-test-selector": "stream-summary-live-views-stat-card"
            },
            Qe = {
                "data-test-selector": "stream-summary-new-subscriptions-stat-card"
            },
            Ze = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(f._55, {
                        childWidth: f._56.Medium,
                        gutterSize: f._57.Small,
                        placeholderItems: 3
                    }, this.cards())
                }, t.prototype.cards = function() {
                    var e = this.props,
                        t = e.streamSummary,
                        a = e.previousStreamSummary,
                        r = e.data.user;
                    if (!t) return Array(8).fill("").map(function(e, t) {
                        return i.createElement(f._8, {
                            key: "placeholder-" + t,
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(f._14, {
                            height: 131
                        }))
                    });
                    var o = [i.createElement(ze, {
                        key: "stream-duration",
                        currentStreamSummary: t,
                        previousStreamSummary: a
                    }), i.createElement(Ie, n.__assign({
                        key: "avg-viewers",
                        title: Object(s.d)("Average Viewers", "StreamSummaryStatCard"),
                        currentValue: t.avgViewerCount,
                        previousValue: a && a.avgViewerCount
                    }, Ve)), i.createElement(Ie, n.__assign({
                        key: "max-viewers",
                        title: Object(s.d)("Max Viewers", "StreamSummaryStatCard"),
                        currentValue: t.maxViewerCount,
                        previousValue: a && a.maxViewerCount
                    }, Be)), i.createElement(Ie, n.__assign({
                        key: "unique-viewers",
                        title: Object(s.d)("Unique Viewers", "StreamSummaryStatCard"),
                        currentValue: t.uniqueViewers,
                        previousValue: a && a.uniqueViewers
                    }, qe)), i.createElement(Ie, n.__assign({
                        key: "unique-chatters",
                        title: Object(s.d)("Unique Chatters", "StreamSummaryStatCard"),
                        currentValue: t.uniqueChatters,
                        previousValue: a && a.uniqueChatters
                    }, Ge)), i.createElement(Ie, n.__assign({
                        key: "live-views",
                        title: Object(s.d)("Live Views", "StreamSummaryStatCard"),
                        currentValue: t.totalViewers,
                        previousValue: a && a.totalViewers
                    }, Ke)), i.createElement(Ie, n.__assign({
                        key: "new-followers",
                        title: Object(s.d)("New Followers", "StreamSummaryStatCard"),
                        currentValue: t.followersChange,
                        previousValue: a && a.followersChange
                    }, Je))];
                    return o = r && r.roles && (r.roles.isAffiliate || r.roles.isPartner) ? o.concat([i.createElement(Ie, n.__assign({
                        key: "new-subscriptions",
                        title: Object(s.d)("New Subscriptions", "StreamSummaryStatCard"),
                        currentValue: t.subscriptionsNew,
                        previousValue: a && a.subscriptionsNew
                    }, Qe))]) : o.concat([i.createElement(Ie, n.__assign({
                        key: "clips-created",
                        title: Object(s.d)("Clips", "StreamSummaryStatCard"),
                        currentValue: t.clipCreatesTotal,
                        previousValue: a && a.clipCreatesTotal
                    }, Ue))])
                }, t
            }(i.Component),
            Xe = Object(o.a)(Ne, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelName
                        }
                    }
                }
            })(Ze),
            $e = a("NXs7"),
            et = a("VAT8"),
            tt = a("/Cz7"),
            at = a("Q65K"),
            nt = f.M.Purple12,
            it = function(e) {
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
                                            fontColor: nt,
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
                                            fontColor: nt,
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
                                onClick: t.handleDatasetClick,
                                responsive: !0
                            }
                        })
                    }, t.formatTooltipLabel = function(e) {
                        return t.props.formatTooltipLabel(Number(e.yLabel))
                    }, t.handleDatasetClick = function(e, a) {
                        if (a && 0 !== a.length) {
                            var n = a[0];
                            t.props.onDatasetClick(n._index)
                        }
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(at.a, {
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
            }(i.Component),
            rt = a("InMe"),
            st = 5;
        var ot = {
            get: function() {
                return Object(s.d)("Error", "StreamSummaryExportTimeseriesStats")
            }
        };

        function dt(e, t) {
            return e.isError ? ot : e.data.dates.reduce(function(a, n, i) {
                return a.set(n.getTime(), String(t(e.data)[i] || ""))
            }, new Map)
        }
        var lt = 5;

        function ut(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u, c;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(O.c)({
                                path: "/v5/channels/" + e + "/analytics/chat_time_series?" + a
                            })];
                        case 1:
                            if (i = n.sent(), r = {
                                    messages: [],
                                    participants: [],
                                    dates: [],
                                    interpolationChunkMinutes: lt
                                }, i.isError()) return [2, {
                                isError: !0,
                                data: r
                            }];
                            for (s = 0, o = i.body.chat_activity; s < o.length; s++) d = o[s], l = d.messages, u = d.participants, c = d.timestamp, r.messages.push(l), r.participants.push(u), r.dates.push(new Date(c));
                            return r.interpolationChunkMinutes = i.body.interpolation_chunk_minutes, [2, {
                                isError: !1,
                                data: r
                            }]
                    }
                })
            })
        }

        function ct(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u, c, m;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(O.c)({
                                path: "/v5/channels/" + e + "/analytics/clips_time_series?" + a
                            })];
                        case 1:
                            if (i = n.sent(), r = {
                                    creates: [],
                                    plays: [],
                                    otherPlays: [],
                                    twitchPlays: [],
                                    redditPlays: [],
                                    facebookPlays: [],
                                    twitterPlays: [],
                                    dates: [],
                                    interpolationChunkMinutes: lt
                                }, i.isError()) return [2, {
                                isError: !0,
                                data: r
                            }];
                            for (s = 0, o = i.body.clips; s < o.length; s++) d = o[s], l = d.creates, u = d.plays, c = d.timestamp, m = d.plays_breakdown, r.creates.push(l), r.plays.push(u), r.otherPlays.push(m.other || 0), r.twitchPlays.push(m.twitch || 0), r.redditPlays.push(m.reddit || 0), r.facebookPlays.push(m.facebook || 0), r.twitterPlays.push(m.twitter || 0), r.dates.push(new Date(c));
                            return [2, {
                                isError: !1,
                                data: r
                            }]
                    }
                })
            })
        }

        function mt(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(O.c)({
                                path: "/v5/channels/" + e + "/analytics/commercials_time_series?" + a
                            })];
                        case 1:
                            if (i = n.sent(), r = {
                                    values: [],
                                    dates: [],
                                    interpolationChunkMinutes: lt
                                }, i.isError()) return [2, {
                                isError: !0,
                                data: r
                            }];
                            for (s = 0, o = i.body.commercial; s < o.length; s++) d = o[s], l = d.length, u = d.timestamp, r.values.push(l), r.dates.push(new Date(u));
                            return r.interpolationChunkMinutes = i.body.interpolation_chunk_minutes, [2, {
                                isError: !1,
                                data: r
                            }]
                    }
                })
            })
        }

        function _t(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(O.c)({
                                path: "/v5/channels/" + e + "/analytics/stats_time_series?" + a
                            })];
                        case 1:
                            if (i = n.sent(), r = {
                                    values: [],
                                    dates: [],
                                    interpolationChunkMinutes: lt
                                }, i.isError()) return [2, {
                                isError: !0,
                                data: r
                            }];
                            for (s = 0, o = i.body.concurrent_viewers; s < o.length; s++) d = o[s], l = d.count, u = d.timestamp, r.values.push(l), r.dates.push(new Date(u));
                            return r.interpolationChunkMinutes = i.body.interpolation_chunk_minutes, [2, {
                                isError: !1,
                                data: r
                            }]
                    }
                })
            })
        }

        function ht(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(O.c)({
                                path: "/v5/channels/" + e + "/analytics/followers_time_series?" + a
                            })];
                        case 1:
                            if (i = n.sent(), r = {
                                    values: [],
                                    dates: [],
                                    interpolationChunkMinutes: lt
                                }, i.isError()) return [2, {
                                isError: !0,
                                data: r
                            }];
                            for (s = 0, o = i.body.followers_change; s < o.length; s++) d = o[s], l = d.count, u = d.timestamp, r.values.push(l), r.dates.push(new Date(u));
                            return r.interpolationChunkMinutes = i.body.interpolation_chunk_minutes, [2, {
                                isError: !1,
                                data: r
                            }]
                    }
                })
            })
        }

        function ft(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(O.c)({
                                path: "/v5/channels/" + e + "/analytics/subscription_purchase?" + a
                            })];
                        case 1:
                            if (i = n.sent(), r = {
                                    values: [],
                                    dates: [],
                                    interpolationChunkMinutes: lt
                                }, i.isError()) return [2, {
                                isError: !0,
                                data: r
                            }];
                            for (s = 0, o = i.body.subscription_purchase_activities; s < o.length; s++) d = o[s], l = d.count, u = d.timestamp, r.values.push(l), r.dates.push(new Date(u));
                            return r.interpolationChunkMinutes = i.body.interpolation_chunk_minutes, [2, {
                                isError: !1,
                                data: r
                            }]
                    }
                })
            })
        }

        function pt(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return a = T.stringify(Object(j.i)(t)), [4, Object(O.c)({
                                path: "/v5/channels/" + e + "/analytics/view_summary_time_series?" + a
                            })];
                        case 1:
                            if (i = n.sent(), r = {
                                    dates: [],
                                    totalViews: [],
                                    interpolationChunkMinutes: lt
                                }, i.isError()) return [2, {
                                isError: !0,
                                data: r
                            }];
                            for (s = 0, o = i.body.view_summary; s < o.length; s++) d = o[s], l = d.total_views, u = d.timestamp, r.totalViews.push(l), r.dates.push(new Date(u));
                            return r.interpolationChunkMinutes = i.body.interpolation_chunk_minutes, [2, {
                                isError: !1,
                                data: r
                            }]
                    }
                })
            })
        }

        function yt(e, t) {
            return n.__awaiter(this, void 0, void 0, function() {
                var a, i, r, s, o, d, l, u;
                return n.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, Promise.all([ut(e, t), ct(e, t), mt(e, t), _t(e, t), pt(e, t), ht(e, t), ft(e, t)])];
                        case 1:
                            return a = n.sent(), i = a[0], r = a[1], s = a[2], o = a[3], d = a[4], l = a[5], u = a[6], [2, {
                                chat: i,
                                clips: r,
                                commercials: s,
                                viewers: o,
                                liveViews: d,
                                followers: l,
                                subscriptions: u
                            }]
                    }
                })
            })
        }
        var gt, Mt = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleExport = function() {
                    return n.__awaiter(a, void 0, void 0, function() {
                        var e, t, a, i;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    Object(F.a)(), e = this.props.streamSummary, n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, this.fetchAllTimeseries(e.channel.id, e.interval)];
                                case 2:
                                    return t = n.sent(), [3, 4];
                                case 3:
                                    return a = n.sent(), s.o.logger.error(a, "Network error fetching timeseries data"), this.alert(Object(s.d)("The CSV export failed. Please try again in a few minutes.", "StreamSummaryTimeseriesExport")), [2];
                                case 4:
                                    return r = t, Boolean(Object.keys(r).find(function(e) {
                                        return r[e].isError
                                    })) && this.alert(Object(s.d)("Part of the CSV export failed. Please try again in a few minutes.", "StreamSummaryTimeseriesExport")), i = function(e) {
                                        for (var t = e.interval, a = e.timeseriesResponse, n = [], i = Object(de.addMinutes)(t.start, (st - t.start.getMinutes() % st) % st); i.getTime() <= t.end.getTime();) n.push(i), i = Object(de.addMinutes)(i, st);
                                        var r = [
                                            [Object(s.d)("Timestamp", "StreamSummaryExportTimeseriesStats")].concat(n.map(function(e) {
                                                return Object(s.c)(e, {
                                                    hour: "numeric",
                                                    minute: "numeric"
                                                })
                                            }))
                                        ];
                                        return new Map([
                                            [Object(s.d)("Viewers", "StreamSummaryExportTimeseriesStats"), dt(a.viewers, function(e) {
                                                return e.values
                                            })],
                                            [Object(s.d)("Live Views", "StreamSummaryExportTimeseriesStats"), dt(a.liveViews, function(e) {
                                                return e.totalViews
                                            })],
                                            [Object(s.d)("New Followers", "StreamSummaryExportTimeseriesStats"), dt(a.followers, function(e) {
                                                return e.values
                                            })],
                                            [Object(s.d)("Chatters", "StreamSummaryExportTimeseriesStats"), dt(a.chat, function(e) {
                                                return e.participants
                                            })],
                                            [Object(s.d)("Chat Messages", "StreamSummaryExportTimeseriesStats"), dt(a.chat, function(e) {
                                                return e.messages
                                            })],
                                            [Object(s.d)("Ad Breaks", "StreamSummaryExportTimeseriesStats"), dt(a.commercials, function(e) {
                                                return e.values
                                            })],
                                            [Object(s.d)("Subscriptions", "StreamSummaryExportTimeseriesStats"), dt(a.subscriptions, function(e) {
                                                return e.values
                                            })],
                                            [Object(s.d)("Clips Created", "StreamSummaryExportTimeseriesStats"), dt(a.clips, function(e) {
                                                return e.creates
                                            })],
                                            [Object(s.d)("All Clip Views", "StreamSummaryExportTimeseriesStats"), dt(a.clips, function(e) {
                                                return e.plays
                                            })],
                                            [Object(s.d)("Twitch Clip Views", "StreamSummaryExportTimeseriesStats"), dt(a.clips, function(e) {
                                                return e.twitchPlays
                                            })],
                                            [Object(s.d)("Reddit Clip Views", "StreamSummaryExportTimeseriesStats"), dt(a.clips, function(e) {
                                                return e.redditPlays
                                            })],
                                            [Object(s.d)("Facebook Clip Views", "StreamSummaryExportTimeseriesStats"), dt(a.clips, function(e) {
                                                return e.facebookPlays
                                            })],
                                            [Object(s.d)("Twitter Clip Views", "StreamSummaryExportTimeseriesStats"), dt(a.clips, function(e) {
                                                return e.twitterPlays
                                            })],
                                            [Object(s.d)("Other Clip Views", "StreamSummaryExportTimeseriesStats"), dt(a.clips, function(e) {
                                                return e.otherPlays
                                            })]
                                        ]).forEach(function(e, t) {
                                            r.push([t].concat(n.map(function(t) {
                                                return e.get(t.getTime()) || ""
                                            })))
                                        }), {
                                            fileName: Object(s.d)("Stream Session from {start, date} to {end, date}.csv", {
                                                start: t.start,
                                                end: t.end
                                            }, "StreamSummaryExportTimeseriesStats"),
                                            rows: Object(rt.c)(r)
                                        }
                                    }({
                                        interval: e.interval,
                                        timeseriesResponse: t
                                    }), this.downloadFile(i.fileName, Object(rt.b)(i.rows)), [2]
                            }
                            var r
                        })
                    })
                }, a.downloadFile = t.downloadFile || rt.a, a.alert = t.alert || window.alert, a.fetchAllTimeseries = t.fetchAllTimeseries || yt, a
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return i.createElement(z.a, {
                    background: f.n.AccentAlt2,
                    color: f.K.OverlayAlt,
                    onClick: this.handleExport,
                    message: Object(s.d)("Export data", "StreamSummaryTimeseriesPanel")
                })
            }, t
        }(i.Component);
        a("Rra7");
        ! function(e) {
            e.AverageViewers = "avg_viewers", e.LiveViews = "live_views", e.NewFollowers = "new_followers", e.NewSubScribers = "new_subscribers", e.Chatters = "chatters", e.ChatMessages = "chat_messages", e.AdBreaks = "ad_breaks", e.ClipsCreated = "clips_created", e.ClipViews = "clip_views"
        }(gt || (gt = {}));
        var vt = {
                "data-test-selector": "subtitle"
            },
            Lt = {
                "data-test-selector": "error"
            },
            bt = function(e) {
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
                    }, t.onDatasetClick = function(e) {
                        if (t.props.streamSummary && t.props.streamSummary.videoId) {
                            var a = t.props.streamSummary.videoRecordedAt,
                                n = t.props.streamSummary.videoId,
                                i = (t.state.statData.dates[e].getTime() - a.getTime()) / 1e3,
                                r = Object(tt.b)(n.substring(1), {
                                    t: i
                                });
                            window.open(r)
                        }
                    }, t.formatTooltipLabel = function(e) {
                        return t.currentStat.formatTooltipLabel ? t.currentStat.formatTooltipLabel(e) : Object(s.d)("{label}: {value, number}", {
                            label: t.currentStat.titleMessage(),
                            value: e > 10 ? Math.round(e) : e
                        }, "StreamSummaryTimeseriesPanel")
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackChartView(), this.fetchCurrentStatData()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    e.streamSummary !== this.props.streamSummary && this.fetchCurrentStatData(), e.streamSummary === this.props.streamSummary && t.currentStatIndex === this.state.currentStatIndex || this.trackChartView()
                }, t.prototype.render = function() {
                    return this.props.streamSummary ? i.createElement(f._35, {
                        className: "timeseries-panel",
                        background: f.n.Accent,
                        borderRadius: f.t.Small,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, i.createElement(f._8, {
                        padding: 2
                    }, i.createElement(f._35, {
                        margin: {
                            bottom: 2
                        },
                        display: f.R.Flex,
                        color: f.K.Overlay,
                        justifyContent: f._7.Between,
                        alignItems: f.c.Center
                    }, i.createElement(f._35, {
                        className: Object(et.c)($e.a.Dark),
                        background: f.n.AccentAlt2
                    }, i.createElement(f._30, {
                        onChange: this.handleStatChange,
                        type: f._31.Hollow
                    }, this.props.timeseriesStats.map(function(e, t) {
                        return i.createElement("option", {
                            key: t,
                            value: t
                        }, e.titleMessage())
                    }))), i.createElement("div", n.__assign({}, vt), Boolean(this.state.statData.values.length) && this.currentStat.subtitleMessage(this.props.streamSummary))), i.createElement("div", {
                        className: "timeseries-panel__chart-area"
                    }, this.chartContent())), i.createElement(Mt, {
                        streamSummary: this.props.streamSummary
                    })) : i.createElement(f._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(f._14, {
                        height: 368
                    }))
                }, t.prototype.chartContent = function() {
                    return this.state.inFlightStatRequest ? i.createElement(f._35, {
                        className: Object(et.c)($e.a.Dark),
                        fullHeight: !0
                    }, i.createElement(f._10, {
                        fillContent: !0
                    })) : this.state.didError ? i.createElement(f.Q, n.__assign({
                        color: f.K.OverlayAlt,
                        fontSize: f.V.Size5
                    }, Lt), Object(s.d)("Whoops. Something went wrong.", "StreamSummaryTimeseriesPanel")) : 0 === this.state.statData.values.length ? i.createElement(f._8, {
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        alignContent: f.b.Center,
                        justifyContent: f._7.Center,
                        fullHeight: !0
                    }, i.createElement(f._8, {
                        padding: {
                            bottom: .5
                        }
                    }, i.createElement(f.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
                        alt: "StinkyCheese",
                        size: 50
                    })), i.createElement(f.Q, {
                        color: f.K.OverlayAlt,
                        fontSize: f.V.Size5
                    }, Object(s.d)("Not enough data for us to display", "StreamSummaryTimeseriesPanel"))) : i.createElement(it, {
                        datasetLabel: this.currentStat.titleMessage(),
                        labels: this.formattedDates,
                        onDatasetClick: this.onDatasetClick,
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
                        var e, t, a, i;
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
                                    }), [2]) : (i = function(e, t) {
                                        var a = {
                                                dates: [],
                                                values: []
                                            },
                                            n = e.dates[0];
                                        if (!n) return a;
                                        for (var i = e.interpolationChunkMinutes, r = Object(de.subMinutes)(n, i); r.getTime() >= t.start.getTime();) a.dates.push(r), a.values.push(0), r = Object(de.subMinutes)(r, i);
                                        a.dates.reverse();
                                        var s = 0;
                                        for (r = n; r.getTime() <= t.end.getTime();) {
                                            var o = e.dates[s];
                                            o && o.getTime() === r.getTime() ? (a.dates.push(e.dates[s]), a.values.push(e.values[s]), s++) : (a.dates.push(r), a.values.push(0)), r = Object(de.addMinutes)(r, i)
                                        }
                                        return a
                                    }(a.data, this.props.streamSummary.interval), this.setState({
                                        statData: i,
                                        inFlightStatRequest: void 0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.trackChartView = function() {
                    var e;
                    e = this.currentStat.trackingKey, s.n.track(u.SpadeEventType.StreamSummaryChartView, {
                        chart: e
                    })
                }, t
            }(i.PureComponent),
            kt = a("FsFC"),
            Yt = [{
                fetch: _t,
                titleMessage: function() {
                    return Object(s.d)("Average Viewers", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{peakViewers, plural, one {Peaked at <x:viewers># viewer</x:viewers> at {formattedTime}} other {Peaked at <x:viewers># viewers</x:viewers> at {formattedTime}}}", {
                        peakViewers: e.maxViewerCount,
                        "x:viewers": function(e) {
                            return i.createElement("strong", {
                                key: "viewers"
                            }, e)
                        },
                        formattedTime: Object(s.c)(e.peakViewershipTime, {
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.AverageViewers
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, pt(e, t)];
                                case 1:
                                    return [2, {
                                        isError: (a = n.sent()).isError,
                                        data: {
                                            values: a.data.totalViews,
                                            dates: a.data.dates,
                                            interpolationChunkMinutes: a.data.interpolationChunkMinutes
                                        }
                                    }]
                            }
                        })
                    })
                },
                titleMessage: function() {
                    return Object(s.d)("Live Views", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:views># live view</x:views> for this stream} other {<x:views># live views</x:views> for this stream}}", {
                        count: e.totalViewers,
                        "x:views": function(e) {
                            return i.createElement("strong", {
                                key: "views"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.AverageViewers
            }, {
                fetch: ht,
                titleMessage: function() {
                    return Object(s.d)("New Followers", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:followers># new follower</x:followers> for this stream} other {<x:followers># new followers</x:followers> for this stream}}", {
                        count: e.followersChange,
                        "x:followers": function(e) {
                            return i.createElement("strong", {
                                key: "followers"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.NewFollowers
            }, {
                fetch: ft,
                titleMessage: function() {
                    return Object(s.d)("New Subscriptions", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("{count, plural, one {<x:subscriptions># new subscription</x:subscriptions> for this stream} other {<x:subscriptions># new subscriptions</x:subscriptions> for this stream}}", {
                        count: e.subscriptionsNew,
                        "x:subscriptions": function(e) {
                            return i.createElement("strong", {
                                key: "subscriptions"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.NewSubScribers
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
                            return i.createElement("strong", {
                                key: "chatters"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.Chatters
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
                            return i.createElement("strong", {
                                key: "messages"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.ChatMessages
            }, {
                fetch: mt,
                titleMessage: function() {
                    return Object(s.d)("Ad Breaks", "StreamSummaryTimeseriesStats")
                },
                subtitleMessage: function(e) {
                    return Object(s.d)("<x:time>{time} of ad breaks</x:time> for this stream", {
                        time: Object(kt.b)(e.commercialLengthTotal, kt.a.HumanizedShort),
                        "x:time": function(e) {
                            return i.createElement("strong", {
                                key: "time"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                formatTooltipLabel: function(e) {
                    return Object(kt.b)(e, kt.a.HumanizedShort)
                },
                trackingKey: gt.AdBreaks
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, ct(e, t)];
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
                            return i.createElement("strong", {
                                key: "clips"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.ClipsCreated
            }, {
                fetch: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var a;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, ct(e, t)];
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
                            return i.createElement("strong", {
                                key: "views"
                            }, e)
                        }
                    }, "StreamSummaryTimeseriesStats")
                },
                trackingKey: gt.ClipViews
            }],
            Dt = a("FuaS"),
            wt = a("6w0d"),
            St = {
                "data-test-selector": "summary-tip-message"
            },
            xt = {
                "data-test-selector": "summary-learn-more-cta"
            },
            Tt = "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
            jt = "VoHiYo",
            Ot = function(e) {
                var t = e.tip;
                return e.isLoading ? i.createElement(f._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(f._14, {
                    height: 121
                })) : i.createElement("div", null, i.createElement(R.a, {
                    title: Object(s.d)("What is my tip of the day?", "StreamSummaryTipsPanel")
                }, i.createElement(f._35, {
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    padding: 2,
                    background: f.n.Base
                }, i.createElement(f._8, {
                    display: f.R.Flex,
                    alignItems: f.c.Center,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(f.m, {
                    src: Tt,
                    alt: jt,
                    size: 30
                }), i.createElement(f._8, {
                    margin: {
                        left: .5
                    }
                }, i.createElement(f.Q, n.__assign({
                    type: f._49.Span,
                    fontSize: f.V.Size5
                }, St), t.body), i.createElement(Ht, {
                    url: t.url
                }))))))
            },
            Ht = function(e) {
                var t = e.url;
                return t ? i.createElement(f.Q, n.__assign({
                    type: f._49.Span,
                    fontSize: f.V.Size5
                }, xt), " ", i.createElement("a", {
                    target: "_blank",
                    href: t
                }, Object(s.d)("Learn More", "StreamTipsLearnMoreCTA"))) : null
            },
            Pt = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        tip: void 0
                    }, a
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.requestTip()
                }, t.prototype.render = function() {
                    return this.state.tip ? i.createElement(Ot, {
                        tip: this.state.tip,
                        isLoading: this.props.isLoading
                    }) : null
                }, t.prototype.requestTip = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return n.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Object(wt.a)({
                                        path: "/v5/stream_summary/tip",
                                        headers: {
                                            "Accept-Language": Object(Dt.a)() || "en"
                                        }
                                    })];
                                case 1:
                                    return (e = t.sent()).isSuccess() && this.setState(e.body), [2]
                            }
                        })
                    })
                }, t
            }(i.Component),
            Ct = a("a+9f"),
            Et = function(e) {
                var t = e.streamSummary,
                    a = e.topClips;
                if (a.isLoading) return i.createElement(f._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(f._14, {
                    height: 448
                }));
                if (!a.isLoading && !a.clips.length) return null;
                var n = Object(s.d)("View More Clips", "StreamSummaryTopClipsPanelCTA");
                return i.createElement(R.a, {
                    title: Object(s.d)("What were my top clips?", "StreamSummaryTopClipsPanel")
                }, i.createElement(At, {
                    clipsAttrs: a
                }), t ? i.createElement(z.a, {
                    message: n,
                    linkTo: "/" + t.channel.name + "/manager/clips/channel",
                    onClick: F.f,
                    targetBlank: !0
                }) : i.createElement("p", null, n))
            },
            At = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], a = 0; a < 5; a++) t.push(i.createElement(f._35, {
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: a,
                        borderBottom: !0
                    }, i.createElement(f._14, {
                        height: 50
                    })));
                return i.createElement(f._35, {
                    borderBottom: !0
                }, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return i.createElement(Ct.a, n.__assign({}, e, {
                        key: t,
                        onClick: F.d
                    }))
                }))
            },
            Ft = a("4mYF"),
            Wt = a("NqVV"),
            It = a("6C1Z"),
            Rt = function(e) {
                var t = e.streamSummary;
                return t ? t.videoId ? i.createElement(R.a, {
                    title: Object(s.d)("What is the video for this stream?", "StreamSummaryVodPanel")
                }, i.createElement(Ft.a, {
                    key: t.videoId,
                    onClick: F.c,
                    type: Ft.b.Video,
                    viewCount: t.videoViews,
                    thumbnailURL: t.videoThumbnail
                }, i.createElement(Wt.a, {
                    vodID: t.videoId
                })), i.createElement(z.a, {
                    message: Object(s.d)("Highlight video", "StreamSummaryVodPanelCTA"),
                    onClick: F.h,
                    linkTo: Object(It.c)(t.channel.name, t.videoId.substring(1)),
                    targetBlank: !0
                })) : null : i.createElement(f._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(f._14, {
                    height: 448
                }))
            },
            zt = a("ItYp"),
            Nt = (a("4CR3"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.o.setPageTitle(Object(s.d)("Stream Summary", "DashboardStreamSummaryPage"))
                }, t.prototype.render = function() {
                    var e = this;
                    return i.createElement(m.a, null, i.createElement(G.a, {
                        query: this.props.streamSummaryQuery,
                        summaryID: this.props.streamSummaryID,
                        getURLForStreamSummary: A.d
                    }, function(t) {
                        return i.createElement(J, {
                            previousStreamSummary: t.previous,
                            streamSummary: t.current,
                            channel: e.props.streamSummaryQuery.channel
                        }, function(a) {
                            return i.createElement("div", null, t.isLast && i.createElement(be, {
                                query: a.achievementProgressionsQuery,
                                streamSummary: t.current,
                                topClips: a.topClips
                            }), i.createElement(Q, {
                                query: e.props.streamSummaryQuery
                            }), i.createElement(Xe, {
                                channelName: e.props.channelName,
                                previousStreamSummary: t.previous,
                                streamSummary: t.current
                            }), i.createElement(Bt, {
                                channelName: e.props.channelName,
                                streamSummaryID: e.props.streamSummaryID,
                                data: e.props.data,
                                streamSummaryCursor: t,
                                topClips: a.topClips,
                                achievementProgressionsQuery: a.achievementProgressionsQuery
                            }))
                        })
                    }), i.createElement(_.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2877822",
                        page: "stream-summary"
                    }))
                }, t
            }(i.Component)),
            Vt = Object(r.compose)(Object(c.d)("StreamSummaryPage", {
                destination: l.a.ChannelDashboardStreamSummary,
                autoReportInteractive: !0
            }), Object(d.a)({
                location: u.PageviewLocation.DashboardStreamSummary
            }), Object(o.a)(zt, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelName
                        }
                    }
                }
            }))(Nt);

        function Bt(e) {
            var t = e.streamSummaryCursor,
                a = e.data,
                n = s.b.get("stream_summary_new_referrals", !1),
                r = a.user && a.user.roles && (a.user.roles.isAffiliate || a.user.roles.isPartner);
            return i.createElement("div", null, i.createElement(f._35, {
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
            }, i.createElement(f._8, {
                className: "sm-mw__col",
                display: f.R.Flex,
                flexGrow: 1,
                flexWrap: f.U.NoWrap,
                flexDirection: f.T.Column,
                padding: {
                    left: 1,
                    right: 1
                }
            }, s.b.get("stream_summary_timeseries_panel", !1) ? i.createElement(bt, {
                streamSummary: t.current,
                timeseriesStats: Yt
            }) : i.createElement(E, {
                streamSummary: t.current
            }), i.createElement(Et, {
                streamSummary: t.current,
                topClips: e.topClips
            }), s.b.get("stream_summary_vod_panel", !1) && i.createElement(Rt, {
                streamSummary: t.current
            }), n && i.createElement(h.a, {
                streamSummaries: t.current ? [t.current] : [],
                isLoading: !Boolean(t.current),
                onViewDetails: F.g,
                linkToDetails: {
                    pathname: "/" + e.channelName + "/dashboard/stream-summary/" + e.streamSummaryID + "/referrals",
                    state: {
                        content: u.PageviewContent.ReferralsDetails,
                        medium: u.PageviewMedium.StreamSummary
                    }
                }
            }), !n && i.createElement(re, {
                streamSummary: t.current
            })), i.createElement(f._8, {
                className: "sm-mw__col",
                display: f.R.Flex,
                flexGrow: 1,
                flexWrap: f.U.NoWrap,
                flexDirection: f.T.Column,
                padding: {
                    left: 1,
                    right: 1
                }
            }, !r && i.createElement(Pt, {
                isLoading: !t.current
            }), i.createElement($, {
                quest: t.current && e.achievementProgressionsQuery.quests[0]
            }), i.createElement(N, {
                query: e.achievementProgressionsQuery,
                streamSummaryCursor: t
            }))))
        }
        a.d(t, "StreamSummaryPage", function() {
            return Vt
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
                var t, a, i, r;
                return n.isObject(e) ? (t = +e.top || 0, a = +e.right || 0, i = +e.bottom || 0, r = +e.left || 0) : t = a = i = r = +e || 0, {
                    top: t,
                    right: a,
                    bottom: i,
                    left: r,
                    height: t + i,
                    width: r + a
                }
            },
            resolve: function(e, t, a) {
                var i, r, s;
                for (i = 0, r = e.length; i < r; ++i)
                    if (void 0 !== (s = e[i]) && (void 0 !== t && "function" == typeof s && (s = s(t)), void 0 !== a && n.isArray(s) && (s = s[a]), void 0 !== s)) return s
            }
        }
    },
    u3ZQ: function(e, t, a) {
        "use strict";
        var n = a("TToO"),
            i = a("HW6M"),
            r = a("GiK3"),
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
                        t = i({
                            "confetti-layer__confetti": !0,
                            "confetti-layer__confetti--infinite": this.props.infinite
                        });
                    return r.createElement(o._8, {
                        className: "confetti-layer",
                        position: o._15.Absolute,
                        overflow: o._11.Hidden,
                        zIndex: o._62.Default,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0
                    }, Object(s.c)(this.props.confettiCount, function(a) {
                        return r.createElement("div", {
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
            }(r.PureComponent);
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
                var n, i;
                return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = +e, i = {
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
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

            function a(e, a, n, i) {
                var r = e + " ";
                switch (n) {
                    case "s":
                        return a || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return a ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? r + (a || i ? "mínútur" : "mínútum") : a ? r + "mínúta" : r + "mínútu";
                    case "hh":
                        return t(e) ? r + (a || i ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                    case "d":
                        return a ? "dagur" : i ? "dag" : "degi";
                    case "dd":
                        return t(e) ? a ? r + "dagar" : r + (i ? "daga" : "dögum") : a ? r + "dagur" : r + (i ? "dag" : "degi");
                    case "M":
                        return a ? "mánuður" : i ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? a ? r + "mánuðir" : r + (i ? "mánuði" : "mánuðum") : a ? r + "mánuður" : r + (i ? "mánuð" : "mánuði");
                    case "y":
                        return a || i ? "ár" : "ári";
                    case "yy":
                        return t(e) ? r + (a || i ? "ár" : "árum") : r + (a || i ? "ár" : "ári")
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

        function i(e) {
            return a(r(e))
        }

        function r(e) {
            var t = n[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        i.keys = function() {
            return Object.keys(n)
        }, i.resolve = r, e.exports = i, i.id = "uslO"
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
            i = a("iO9N");
        var r = function(e) {
            i.extend(this, e), this.initialize.apply(this, arguments)
        };
        i.extend(r.prototype, {
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
                    i = t._start,
                    r = t._view;
                return a && 1 !== e ? (r || (r = t._view = {}), i || (i = t._start = {}), function(e, t, a, i) {
                    var r, s, o, d, l, u, c, m, _, h = Object.keys(a);
                    for (r = 0, s = h.length; r < s; ++r)
                        if (u = a[o = h[r]], t.hasOwnProperty(o) || (t[o] = u), (d = t[o]) !== u && "_" !== o[0]) {
                            if (e.hasOwnProperty(o) || (e[o] = d), (c = typeof u) == typeof(l = e[o]))
                                if ("string" === c) {
                                    if ((m = n(l)).valid && (_ = n(u)).valid) {
                                        t[o] = _.mix(m, i).rgbString();
                                        continue
                                    }
                                } else if ("number" === c && isFinite(l) && isFinite(u)) {
                                t[o] = l + (u - l) * i;
                                continue
                            }
                            t[o] = u
                        }
                }(i, r, a, e), t) : (t._view = a, t._start = null, t)
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
        }), r.extend = i.inherits, e.exports = r
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
                i = function(e) {
                    return function(t, i, r, s) {
                        var o = a(t),
                            d = n[e][a(t)];
                        return 2 === o && (d = d[i ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar-ly", {
                months: r,
                monthsShort: r,
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
                var i = e;
                switch (a) {
                    case "s":
                        return n || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (n || t ? " perc" : " perce");
                    case "mm":
                        return i + (n || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (n || t ? " óra" : " órája");
                    case "hh":
                        return i + (n || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (n || t ? " nap" : " napja");
                    case "dd":
                        return i + (n || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (n || t ? " hónap" : " hónapja");
                    case "MM":
                        return i + (n || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (n || t ? " év" : " éve");
                    case "yy":
                        return i + (n || t ? " év" : " éve")
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
                var i = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? i[a][0] : i[a][1]
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
                        title: Object(i.d)("Path to Partner", "AchievementsSpotlightPathToPartner"),
                        bannerTitle: function(e) {
                            return Object(i.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToPartner")
                        },
                        subtitle: Object(i.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                    },
                    path_to_affiliate: {
                        title: Object(i.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate"),
                        bannerTitle: function(e) {
                            return Object(i.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightPathToAffiliate")
                        },
                        subtitle: Object(i.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                    },
                    it_begins: {
                        title: Object(i.d)("It Begins", "AchievementsSpotlightItBegins"),
                        bannerTitle: function(e) {
                            return Object(i.d)("You've completed {achievementTitle}", {
                                achievementTitle: e
                            }, "AchievementsSpotlightItBegins")
                        },
                        subtitle: Object(i.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                    }
                });
                return n
            }()[e] || e
        }, t.a = function() {
            return {
                spotlightDismiss: Object(i.d)("Close", "StreamSummarySpotlightDismiss")
            }
        };
        var n, i = a("6sO2")
    },
    zjE0: function(e, t, a) {
        "use strict";
        var n = a("XU/q");
        a.d(t, "a", function() {
            return n.a
        })
    }
});
//# sourceMappingURL=pages.stream-summary-eafffce80c81458b5bf8911d499dd273.js.map