(window.webpackJsonp = window.webpackJsonp || []).push([
    [53], {
        "/Z6v": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_2x-c98151cef856bab0e62c.png"
        },
        "/jfp": function(e, t, n) {
            e.exports = n.p + "assets/turbo_avatar_1x-7924691a22be364929f8.png"
        },
        "0FG4": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var r, a = n("RcPG"),
                i = n("a1OF");
            ! function(e) {
                e[e.Position = 0] = "Position", e[e.Token = 1] = "Token"
            }(r || (r = {}));
            var o = "0";

            function s(e, t, n) {
                var o = n.type === r.Position ? t : e,
                    s = n.map[o];
                if (s) {
                    var c = function(e, t) {
                        return {
                            images: {
                                sources: {
                                    "1x": Object(i.e)(t, 1),
                                    "2x": Object(i.e)(t, 2),
                                    "4x": Object(i.e)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, s.id);
                    return {
                        type: a.a.Emote,
                        content: c
                    }
                }
                return null
            }
            var c = {
                "\\:\\&gt\\;": [":>"],
                "\\&gt\\;\\(": [">("],
                "\\&lt\\;\\]": ["<]"],
                "\\&lt\\;3": ["<3"],
                ":-?(?:7|L)": [":-7", ":-L", ":7", ":L"],
                "[oO](_|\\.)[oO]": ["o_o", "O_O", "o_O", "O_o", "o.o", "O.O", "o.O", "O.o"],
                "\\;-?(p|P)": [";-p", ";-P", ";p", ";P"],
                "\\;-?\\)": [";-)", ";)"],
                "\\:-?(o|O)": [":-o", ":-O", ":o", ":O"],
                "\\:-?(p|P)": [":-p", ":-P", ":p", ":P"],
                "\\:-?(S|s)": [":-S", ":-s", ":s", ":S"],
                "\\:-?[\\\\/]": [":-/", ":-\\", ":/", ":\\"],
                "\\:-?[z|Z|\\|]": [":-|", ":-Z", ":-z", ":|", ":Z", ":z"],
                "\\:-?\\(": [":-(", ":("],
                "\\:-?\\)": [":-)", ":)"],
                "\\:-?D": [":-D", ":D"],
                "#-?[\\\\/]": ["#-/", "#-\\", "#/", "#\\"],
                "B-?\\)": ["B-)", "B)"],
                "R-?\\)": ["R-)", "R)"]
            };

            function l(e) {
                for (var t = {}, n = 0, r = e; n < r.length; n++) {
                    var a = r[n];
                    if (a && a.emotes)
                        for (var i = 0, s = a.emotes; i < s.length; i++) {
                            var l = s[i];
                            if (l && l.id && l.token)
                                for (var d = 0, u = c[l.token] || [l.token]; d < u.length; d++) {
                                    var p = u[d];
                                    t[p] && a.id === o || (t[p] = {
                                        id: l.id,
                                        token: p
                                    })
                                }
                        }
                }
                return t
            }
        },
        "1nFn": function(e, t, n) {},
        "2DIU": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_1x-4f76ba5fbbaca5a76d41.png"
        },
        "2xEe": function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_1x-29d0a02f9cc67088594b.png"
        },
        "5gJ6": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                o = n("/MKj"),
                s = n("/7QA"),
                c = n("2DIU"),
                l = n.n(c),
                d = n("TSpM"),
                u = n.n(d),
                p = n("vE+g"),
                m = n.n(p),
                h = n("/Z6v"),
                y = n.n(h),
                f = n("WJ6U"),
                g = n.n(f),
                b = n("uReR"),
                v = n.n(b),
                k = n("SPyc"),
                E = n.n(k),
                P = n("bOWA"),
                C = n.n(P),
                j = n("KL9a"),
                w = n.n(j),
                _ = n("iSjI"),
                T = n.n(_),
                S = n("bQeB"),
                x = n.n(S),
                D = n("HvcU"),
                O = n.n(D),
                M = n("GA+j"),
                F = n.n(M),
                N = n("FBRg"),
                I = n.n(N),
                A = n("2xEe"),
                V = n.n(A),
                R = n("q8H6"),
                z = n.n(R),
                U = n("oQBz"),
                B = n.n(U),
                W = n("PwAB"),
                L = n.n(W),
                H = n("/0dD"),
                Y = n("XDQu");
            ! function(e) {
                e.AmericanExpress = "american_express", e.Discover = "discover", e.MasterCard = "mastercard", e.Visa = "visa"
            }(r || (r = {}));
            var q = n("cWO5"),
                X = n("Ue10"),
                G = (n("88jh"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if ("prime" === this.props.paymentProvider) return i.createElement(X.mb, {
                            asset: X.nb.LogoTwitchPrime,
                            width: 66,
                            height: 30,
                            type: X.ob.Brand
                        });
                        var e = this.imageSource,
                            t = e.src,
                            n = e.alt,
                            r = e.srcSet;
                        return i.createElement(X.Va, {
                            className: "payment-method-image"
                        }, i.createElement(X.S, {
                            src: t,
                            alt: n,
                            srcSet: r
                        }))
                    }, Object.defineProperty(t.prototype, "imageSource", {
                        get: function() {
                            var e = Object(s.d)("credit card", "PaymentMethodImage");
                            switch (this.props.paymentProvider) {
                                case "xsolla_v3":
                                    return {
                                        src: L.a,
                                        srcSet: {
                                            "1x": B.a,
                                            "2x": L.a
                                        },
                                        alt: Object(s.d)("Xsolla icon", "PaymentMethodImage")
                                    };
                                case "google_iab":
                                    return {
                                        src: g.a,
                                        alt: Object(s.d)("Android icon", "PaymentMethodImage")
                                    }
                            }
                            switch (this.props.paymentInstrumentType) {
                                case q.a.CreditCard:
                                    switch (this.props.cardType) {
                                        case r.AmericanExpress:
                                            return {
                                                src: v.a,
                                                alt: Object(s.d)("American Express", "PaymentMethodImage")
                                            };
                                        case r.Discover:
                                            return {
                                                src: E.a,
                                                alt: Object(s.d)("Discover", "PaymentMethodImage")
                                            };
                                        case r.MasterCard:
                                            return {
                                                src: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? w.a : C.a,
                                                alt: Object(s.d)("Mastercard", "PaymentMethodImage")
                                            };
                                        case r.Visa:
                                            return {
                                                src: T.a,
                                                alt: Object(s.d)("Visa", "PaymentMethodImage")
                                            };
                                        default:
                                            return {
                                                src: x.a,
                                                srcSet: {
                                                    "1x": x.a,
                                                    "2x": O.a
                                                },
                                                alt: e
                                            }
                                    }
                                case q.a.AmazonPay:
                                    return {
                                        src: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? m.a : l.a,
                                        srcSet: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? {
                                            "1x": m.a,
                                            "2x": y.a
                                        } : {
                                            "1x": l.a,
                                            "2x": u.a
                                        },
                                        alt: Object(s.d)("Amazon Pay", "PaymentMethodImage")
                                    };
                                case q.a.Paypal:
                                    return {
                                        src: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? V.a : F.a,
                                        srcSet: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? {
                                            "1x": V.a,
                                            "2x": z.a
                                        } : {
                                            "1x": F.a,
                                            "2x": I.a
                                        },
                                        alt: Object(s.d)("Paypal", "PaymentMethodImage")
                                    };
                                default:
                                    return {
                                        src: x.a,
                                        srcSet: {
                                            "1x": x.a,
                                            "2x": O.a
                                        },
                                        alt: e
                                    }
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component));
            var Z = Object(o.connect)(function(e) {
                return {
                    darkModeEnabled: Object(Y.a)(e) === H.a.Dark
                }
            })(G);
            n.d(t, !1, function() {
                return G
            }), n.d(t, "a", function() {
                return Z
            })
        },
        "60o1": function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e,
                    r = !1;
                return n ? function(e) {
                    return e.split("").map(function(e) {
                        return e.charCodeAt(0) > 127
                    }).reduce(function(e, t) {
                        return e || t
                    })
                }(n) && (r = !0) : n = t, {
                    userDisplayName: n,
                    isIntl: r
                }
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "6fcp": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
                }(r || (r = {}))
        },
        "6j5V": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("RcPG");

            function a(e) {
                return {
                    type: r.a.Text,
                    content: e
                }
            }
        },
        "85n/": function(e, t, n) {
            "use strict";
            var r = n("TQGo");
            n.d(t, "a", function() {
                return r.a
            })
        },
        "88jh": function(e, t, n) {},
        "Bd+v": function(e, t, n) {},
        D409: function(e, t, n) {
            e.exports = n.p + "assets/credit_cards_1x-3ceef2323563b8454856.png"
        },
        FBRg: function(e, t, n) {
            e.exports = n.p + "assets/paypal_2x-bddabc156344e695fa56.png"
        },
        "GA+j": function(e, t, n) {
            e.exports = n.p + "assets/paypal_1x-a2a2f7d96b4384f9f1d7.png"
        },
        HEnu: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("NAv5"),
                i = n("FOa4"),
                o = n("q1tI"),
                s = n("Ue10"),
                c = (n("WHSC"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setInputRef = function(e) {
                            return t.textInput = e
                        }, t.setContainerRef = function(e) {
                            return t.containerElement = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this._picker = new i({
                            field: this.textInput,
                            onSelect: this.props.onChange,
                            theme: "inline",
                            minDate: this.props.minDate,
                            maxDate: this.props.maxDate,
                            defaultDate: this.props.defaultDate,
                            setDefaultDate: !0,
                            container: this.containerElement,
                            format: "MMMM D, YYYY",
                            toString: function(e, t) {
                                return Object(a.format)(e, t)
                            }
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        (this.dateDidChange(e.minDate, this.props.minDate) || this.dateDidChange(e.maxDate, this.props.maxDate)) && this.setDateRangeIfPresent(this.props.minDate, this.props.maxDate), this.dateDidChange(e.defaultDate, this.props.defaultDate) && this.setDate(this.props.defaultDate)
                    }, t.prototype.render = function() {
                        var e = this.props.inputProps;
                        return o.createElement(s.Va, {
                            className: "date-picker",
                            "data-a-target": "date-picker"
                        }, o.createElement(s.Pa, r.__assign({
                            type: s.Ra.Text,
                            refDelegate: this.setInputRef
                        }, e)), o.createElement("div", {
                            className: "date-picker__container",
                            ref: this.setContainerRef
                        }))
                    }, t.prototype.setDate = function(e) {
                        e || (this.textInput.value = ""), this._picker.setDate(e || new Date, !0)
                    }, t.prototype.setDateRangeIfPresent = function(e, t) {
                        e && this._picker.setMinDate(e), t && this._picker.setMaxDate(t)
                    }, t.prototype.dateDidChange = function(e, t) {
                        return (e ? e.getTime() : null) !== (t ? t.getTime() : null)
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return c
            })
        },
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var r = n("NAv5"),
                a = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function i(e, t) {
                return Object(r.format)(e, t)
            }

            function o(e) {
                return Object(r.parse)(e)
            }

            function s(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var r = parseInt(n[0], 10),
                    a = parseInt(n[1].substring(0, 2), 10),
                    i = n[1].substring(n[1].length - 2);
                if (12 === r && "am" === i && (r = 0), "pm" === i && r < 12 && (r += 12), isNaN(r) || r < 0 || r > 23 || isNaN(a) || a < 0 || a > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(r, a), o
            }
        },
        HvcU: function(e, t, n) {
            e.exports = n.p + "assets/generic_credit_card_2x-9e855c7d5c5359ac9208.png"
        },
        KL9a: function(e, t, n) {
            e.exports = n.p + "assets/mastercard_dark-a85ba185886a8899fef1.svg"
        },
        KjOM: function(e, t, n) {},
        PwAB: function(e, t, n) {
            e.exports = n.p + "assets/xsolla_2x-b8ef30f34626976fddc4.png"
        },
        QyYb: function(e, t, n) {
            e.exports = n.p + "assets/credit_cards_2x-ede753dedc96e44eff73.png"
        },
        RnhZ: function(e, t, n) {
            var r = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function a(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                var t = r[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = i, e.exports = a, a.id = "RnhZ"
        },
        SPyc: function(e, t, n) {
            e.exports = n.p + "assets/discover-d67f6b00db816208999c.svg"
        },
        TQGo: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("NAv5"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10"),
                c = n("5gJ6"),
                l = (n("KjOM"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(s.xb, {
                            className: this.isExpired ? "payment-method-display--expired" : "",
                            display: s.W.Flex,
                            justifyContent: this.props.justifyContent || s.Ua.Between,
                            flexWrap: s.Z.Wrap,
                            fullWidth: !0
                        }, i.createElement(s.Va, {
                            alignItems: s.f.Center,
                            display: s.W.Flex,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(c.a, {
                            paymentInstrumentType: this.paymentMethod.paymentType,
                            cardType: this.paymentMethod.cardType,
                            paymentProvider: this.paymentMethod.provider,
                            ignoreDarkMode: this.props.ignoreDarkMode
                        }), this.renderLastFour()), i.createElement(s.Va, {
                            display: s.W.Flex,
                            justifyContent: s.Ua.Center,
                            flexDirection: s.Y.Column
                        }, this.renderBillingEmail(), this.renderExpirationDate()))
                    }, t.prototype.renderLastFour = function() {
                        return this.paymentMethod.lastFour ? i.createElement(s.Va, {
                            display: s.W.Flex,
                            margin: {
                                x: 2
                            }
                        }, i.createElement(s.V, {
                            bold: !0
                        }, Object(o.d)("Ending in {lastFour}", {
                            lastFour: this.paymentMethod.lastFour
                        }, "PaymentMethodDisplay"))) : null
                    }, t.prototype.renderExpirationDate = function() {
                        var e = this.zeroIndexedMonth,
                            t = this.paymentMethod.expirationYear;
                        if (void 0 === e || !t) return null;
                        var n = new Date(t, e),
                            r = "";
                        return r = this.isExpired ? Object(o.d)("Expired {expirationDate}", {
                            expirationDate: Object(o.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay") : Object(o.d)("Expires {expirationDate}", {
                            expirationDate: Object(o.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay"), i.createElement(s.Va, {
                            alignItems: s.f.Center,
                            display: s.W.Flex,
                            justifyContent: s.Ua.End
                        }, i.createElement(s.V, {
                            ellipsis: !0,
                            color: s.O.Alt2,
                            bold: this.isExpired
                        }, r))
                    }, t.prototype.renderBillingEmail = function() {
                        return this.paymentMethod.billingEmail ? i.createElement(s.Va, {
                            alignItems: s.f.Center,
                            display: s.W.Flex,
                            justifyContent: s.Ua.End
                        }, i.createElement(s.V, {
                            ellipsis: !0,
                            color: s.O.Alt2
                        }, this.paymentMethod.billingEmail)) : null
                    }, Object.defineProperty(t.prototype, "paymentMethod", {
                        get: function() {
                            return this.props.paymentMethod
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isExpired", {
                        get: function() {
                            var e = this.zeroIndexedMonth,
                                t = this.props.paymentMethod.expirationYear;
                            if (void 0 === e || !t) return !1;
                            var n = Object(a.startOfMonth)(new Date),
                                r = new Date(t, e, 1);
                            return !!Object(a.isBefore)(r, n)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "zeroIndexedMonth", {
                        get: function() {
                            if (this.props.paymentMethod.expirationMonth) return this.props.paymentMethod.expirationMonth - 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.PureComponent))
        },
        TSpM: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_2x-2eccd73373faaefa6764.png"
        },
        WHSC: function(e, t, n) {},
        WJ6U: function(e, t, n) {
            e.exports = n.p + "assets/android_1x-38340be28156bb72233a.svg"
        },
        WlZp: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "kaptchaIframeSrc", {
                        get: function() {
                            return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoHtm?m=300532&s=" + this.props.sessionId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "kaptchaImgSrc", {
                        get: function() {
                            return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoGif?m=300532&s=" + this.props.sessionId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return a.createElement("iframe", {
                            width: "1",
                            height: "1",
                            scrolling: "no",
                            src: this.kaptchaIframeSrc
                        }, a.createElement("img", {
                            width: "137",
                            height: "33",
                            src: this.kaptchaImgSrc
                        }))
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return i
            })
        },
        YHBx: function(e, t, n) {},
        a1OF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "e", function() {
                return y
            }), n.d(t, "d", function() {
                return f
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("oe5X"),
                o = n("0FG4"),
                s = n("kRBY"),
                c = n("60o1"),
                l = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                d = {};

            function u(e, t, n, a, i, o) {
                void 0 === i && (i = !1), void 0 === o && (o = !1);
                var s = Object(c.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: r.__assign({}, s, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || p(t.userID)
                    }),
                    messageParts: m(e, t.emotes || {}, t.bits, n, a, t.username),
                    deleted: i,
                    hidden: o,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof d[e] && (d[e] = Math.floor(Math.random() * t)), l[d[e]]
            }

            function m(e, t, n, r, c, l) {
                var d = Object(s.e)(a.o.store.getState()),
                    u = {
                        cheers: n ? r : void 0,
                        emotes: {
                            type: o.a.Position,
                            map: t
                        },
                        links: {
                            blockLinks: c,
                            parseClips: !0,
                            parseVods: !0
                        },
                        mentions: {
                            senderLogin: l,
                            sessionUser: d
                        }
                    };
                return Object(i.a)(e, u)
            }

            function h(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
            }

            function y(e, t) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
            }

            function f(e) {
                return {
                    src: y(e, 1),
                    srcSet: y(e, 1) + " 1x, " + y(e, 2) + " 2x, " + y(e, 3) + " 4x"
                }
            }
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a, i, o, s;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = r.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = i.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, r.__assign({}, a, {
                                            body: a.body
                                        })];
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
                        return r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        var o = Object(i.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = a.o.logger.withCategory("legacy-api"), e
                }()
        },
        bOWA: function(e, t, n) {
            e.exports = n.p + "assets/mastercard-280a786ec3225a087428.svg"
        },
        bQeB: function(e, t, n) {
            e.exports = n.p + "assets/generic_credit_card_1x-a6b9cd93075728ab4114.png"
        },
        cWO5: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.AmazonPay = "amazon", e.CreditCard = "credit_card", e.Paypal = "paypal"
                }(r || (r = {}))
        },
        cz4h: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("/MKj"),
                i = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                c = n("kRBY"),
                l = n("mrSG"),
                d = n("q1tI"),
                u = n("oJmH"),
                p = n("/7QA"),
                m = n("ZDlU"),
                h = n("V+GM"),
                y = n("NvVO"),
                f = n("2xye"),
                g = n("GnwI"),
                b = n("yR8l");
            ! function(e) {
                e.Recurly = "recurly", e.Xsolla = "xsolla", e.Zuora = "zuora", e.GoogleIAB = "google_iab", e.Prime = "prime", e.Paypal = "paypal", e.LegacyPaypal = "paypal_rt"
            }(r || (r = {}));
            var v = p.j.withCategory("[payments]"),
                k = n("Ue10"),
                E = n("aCAx"),
                P = n("b6Yk"),
                C = n("85n/");
            var j = n("2DIU"),
                w = n.n(j),
                _ = n("TSpM"),
                T = n.n(_),
                S = n("vE+g"),
                x = n.n(S),
                D = n("/Z6v"),
                O = n.n(D),
                M = n("D409"),
                F = n.n(M),
                N = n("QyYb"),
                I = n.n(N),
                A = n("GA+j"),
                V = n.n(A),
                R = n("FBRg"),
                z = n.n(R),
                U = n("2xEe"),
                B = n.n(U),
                W = n("q8H6"),
                L = n.n(W),
                H = n("x1M1"),
                Y = n("/0dD"),
                q = n("XDQu"),
                X = n("6fcp"),
                G = (n("1nFn"), {
                    light: "#000",
                    dark: "#fff"
                }),
                Z = {
                    light: "#a49fad",
                    dark: "#898395"
                },
                Q = function() {
                    return {
                        cvv: !1,
                        first_name: !1,
                        last_name: !1,
                        month: !1,
                        number: !1,
                        year: !1
                    }
                },
                J = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            firstName: "",
                            lastName: "",
                            recurlyReady: !1,
                            updatingPaymentMethod: !1,
                            errorMessage: "",
                            errorState: Q()
                        }, t.handleSubmit = function(e) {
                            e.preventDefault(), t.setState(function(e) {
                                return {
                                    updatingPaymentMethod: !0,
                                    errorState: l.__assign({}, e.errorState)
                                }
                            }), window.recurly.token(t.form, function(e, n) {
                                e ? (t.handleValidationError(e), t.setState({
                                    updatingPaymentMethod: !1
                                })) : t.handleValidationSuccess(n)
                            })
                        }, t.handleValidationSuccess = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, this.props.updatePaymentMethod("recurly", "cc", e.id, e.billing_info && e.billing_info.cc_bin_country)];
                                        case 1:
                                            return t.sent(), [3, 3];
                                        case 2:
                                            return t.sent(), this.setState(function(e) {
                                                return {
                                                    updatingPaymentMethod: !1,
                                                    errorState: l.__assign({}, e.errorState)
                                                }
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleValidationError = function(e) {
                            if (e.code === X.a.Validation || e.code === X.a.InvalidParameter) {
                                var n = Q();
                                e.fields && e.fields.forEach(function(e) {
                                    n[e] = !0
                                }), t.setState({
                                    errorMessage: Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCard"),
                                    errorState: n
                                })
                            } else e.code && t.setState({
                                errorMessage: Object(p.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCard"),
                                errorState: Q()
                            })
                        }, t.handleFirstName = function(e) {
                            t.setState({
                                firstName: e.currentTarget.value
                            })
                        }, t.handleLastName = function(e) {
                            t.setState({
                                lastName: e.currentTarget.value
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = this;
                        this.recurlyPollId = window.setInterval(function() {
                            window.recurly && (window.clearInterval(e.recurlyPollId), e.setupConfigs(), e.pollForHostedField())
                        }, 500)
                    }, t.prototype.componentWillUnmount = function() {
                        window.clearInterval(this.recurlyPollId), window.clearInterval(this.hostedFieldPollId)
                    }, t.prototype.componentDidUpdate = function(e) {
                        window.recurly && this.props.darkModeEnabled !== e.darkModeEnabled && this.setupConfigs()
                    }, t.prototype.render = function() {
                        var e = this;
                        return d.createElement("div", null, !this.state.recurlyReady && d.createElement(k.Va, {
                            padding: {
                                y: 5
                            }
                        }, d.createElement(k.Xa, {
                            fillContent: !0
                        })), d.createElement(k.Va, {
                            display: this.state.recurlyReady ? k.W.Block : k.W.Hide,
                            margin: {
                                y: 2
                            }
                        }, this.state.errorMessage && d.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(k.V, {
                            color: k.O.Error
                        }, this.state.errorMessage)), d.createElement("form", {
                            className: "recurly-form",
                            ref: function(t) {
                                return e.form = t
                            }
                        }, d.createElement(k.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(k.Ca, {
                            id: "recurly-name",
                            label: Object(p.d)("Name", "RecurlyCardComponent")
                        }, d.createElement("div", {
                            id: "recurly-name"
                        }, d.createElement(k.Ha, {
                            gutterSize: k.Ia.Medium
                        }, d.createElement(k.P, {
                            cols: 6
                        }, d.createElement(k.Pa, {
                            id: "recurly-first-name",
                            type: k.Ra.Text,
                            placeholder: Object(p.d)("First Name", "RecurlyCardComponent"),
                            value: this.state.firstName,
                            onChange: this.handleFirstName,
                            error: this.state.errorState.first_name
                        }), d.createElement("input", {
                            type: "hidden",
                            "data-recurly": "first_name",
                            value: this.state.firstName
                        })), d.createElement(k.P, {
                            cols: 6
                        }, d.createElement(k.Pa, {
                            id: "recurly-last-name",
                            type: k.Ra.Text,
                            placeholder: Object(p.d)("Last Name", "RecurlyCardComponent"),
                            value: this.state.lastName,
                            onChange: this.handleLastName,
                            error: this.state.errorState.last_name
                        }), d.createElement("input", {
                            type: "hidden",
                            "data-recurly": "last_name",
                            value: this.state.lastName
                        })))))), d.createElement(k.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(k.Ca, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Credit Card", "RecurlyCardComponent")
                        }, d.createElement("div", {
                            id: "recurly-credit-card"
                        }, d.createElement(k.Ha, {
                            gutterSize: k.Ia.Medium
                        }, d.createElement(k.P, {
                            cols: 8
                        }, d.createElement("div", {
                            id: "recurly-number",
                            "data-recurly": "number",
                            className: this.state.errorState.number ? "recurly-error" : ""
                        })), d.createElement(k.P, {
                            cols: 4
                        }, d.createElement("div", {
                            id: "recurly-cvv",
                            "data-recurly": "cvv",
                            className: this.state.errorState.cvv ? "recurly-error" : ""
                        })))))), d.createElement(k.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(k.Ca, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Expiration Date", "RecurlyCardComponent")
                        }, d.createElement("div", {
                            id: "recurly-credit-card"
                        }, d.createElement(k.Ha, {
                            gutterSize: k.Ia.Medium
                        }, d.createElement(k.P, {
                            cols: 6
                        }, d.createElement("div", {
                            id: "recurly-month",
                            "data-recurly": "month",
                            className: this.state.errorState.month ? "recurly-error" : ""
                        })), d.createElement(k.P, {
                            cols: 6
                        }, d.createElement("div", {
                            id: "recurly-year",
                            "data-recurly": "year",
                            className: this.state.errorState.year ? "recurly-error" : ""
                        })))))), d.createElement("input", {
                            type: "hidden",
                            name: "recurly-country",
                            "data-recurly": "country",
                            value: "US"
                        }), d.createElement("input", {
                            type: "hidden",
                            name: "recurly-token",
                            "data-recurly": "token"
                        }), d.createElement(k.z, {
                            onClick: this.handleSubmit,
                            state: this.state.updatingPaymentMethod ? k.E.Loading : k.E.Default,
                            disabled: this.state.updatingPaymentMethod
                        }, Object(p.d)("Update Card", "RecurlyCardComponent")))))
                    }, t.prototype.pollForHostedField = function() {
                        var e = this;
                        this.hostedFieldPollId = window.setInterval(function() {
                            document.querySelector(".recurly-hosted-field > iframe") && (e.setState({
                                recurlyReady: !0
                            }), window.clearInterval(e.hostedFieldPollId))
                        }, 500)
                    }, t.prototype.setupConfigs = function() {
                        window.recurly.configure({
                            publicKey: this.props.publicKey,
                            fraud: {
                                kount: {
                                    dataCollector: !0
                                }
                            },
                            required: ["cvv"],
                            fields: {
                                all: {
                                    style: {
                                        height: "auto",
                                        fontSize: "12px",
                                        fontColor: this.props.darkModeEnabled ? G.dark : G.light,
                                        placeholder: {
                                            color: this.props.darkModeEnabled ? Z.dark : Z.light
                                        }
                                    }
                                },
                                number: {
                                    selector: "#recurly-number",
                                    style: {
                                        placeholder: {
                                            content: Object(p.d)("Card Number", "RecurlyCard")
                                        }
                                    }
                                },
                                month: {
                                    selector: "#recurly-month",
                                    inputType: "select",
                                    style: {
                                        placeholder: {
                                            content: Object(p.d)("Select Month", "RecurlyCard")
                                        }
                                    }
                                },
                                year: {
                                    selector: "#recurly-year",
                                    inputType: "select",
                                    style: {
                                        placeholder: {
                                            content: Object(p.d)("Select Year", "RecurlyCard")
                                        }
                                    }
                                },
                                cvv: {
                                    selector: "#recurly-cvv",
                                    style: {
                                        placeholder: {
                                            content: Object(p.d)("CVV", "RecurlyCard")
                                        }
                                    }
                                }
                            }
                        })
                    }, t
                }(d.Component);
            var K, $ = Object(a.connect)(function(e) {
                    return {
                        darkModeEnabled: Object(q.a)(e) === Y.a.Dark
                    }
                })(J),
                ee = (n("Bd+v"), function() {
                    function e(e) {}
                    e.prototype.bind = function(e) {}
                }(), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            amazonScriptLoaded: null,
                            walletLoaded: null,
                            billingAgreementId: null,
                            updatingPaymentMethod: !1
                        }, t.handleUpdateCardClick = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                updatingPaymentMethod: !0
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.updatePaymentMethod("recurly", "amazon", this.state.billingAgreementId || "")];
                                        case 2:
                                            return e.sent(), this.forceUpdate(), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                updatingPaymentMethod: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        window.onAmazonLoginReady = function() {
                            window.amazon.Login.setClientId(e.props.clientID)
                        }, window.onAmazonPaymentsReady = function() {
                            e.setState({
                                amazonScriptLoaded: !0
                            }), window.OffAmazonPayments.Button("pay-with-amazon-container__button", e.props.sellerID, {
                                type: "PwA",
                                color: "DarkGray",
                                useAmazonAddressBook: !1,
                                agreementType: "BillingAgreement",
                                authorization: function() {
                                    window.amazon.Login.authorize({
                                        scope: "profile payments:widget payments:autopay_consent payments:billing_address",
                                        popup: !0
                                    }, function(e) {
                                        if (e.error) return "err"
                                    })
                                },
                                onSignIn: function(t) {
                                    e.setState({
                                        walletLoaded: !0,
                                        billingAgreementId: t.getAmazonBillingAgreementId()
                                    }), e.initWidget()
                                }
                            })
                        };
                        var t = document.querySelector("#pwa-script");
                        t && document.body.removeChild(t);
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.id = "pwa-script", n.src = "https://static-na.payments-amazon.com/OffAmazonPayments/us" + (this.props.isProduction ? "" : "/sandbox") + "/js/Widgets.js?sellerId=" + this.props.sellerID, n.async = !0, document.body.appendChild(n)
                    }, t.prototype.initWidget = function() {
                        var e = {
                            agreementType: "BillingAgreement",
                            amazonBillingAgreementId: this.state.billingAgreementId,
                            sellerId: this.props.sellerID,
                            design: {
                                designMode: "responsive"
                            },
                            onPaymentSelect: function() {
                                return !0
                            },
                            onError: function() {
                                return !1
                            }
                        };
                        new window.OffAmazonPayments.Widgets.Wallet(e).bind("pay-with-amazon-container__wallet")
                    }, t.prototype.render = function() {
                        return this.state.amazonScriptLoaded ? d.createElement(k.Va, {
                            padding: {
                                top: 2,
                                bottom: 1
                            },
                            textAlign: k.Jb.Center
                        }, d.createElement(k.Va, {
                            display: this.state.walletLoaded ? k.W.Hide : k.W.Block
                        }, d.createElement("div", {
                            id: "pay-with-amazon-container__button"
                        })), d.createElement(k.Va, {
                            display: this.state.walletLoaded ? k.W.Block : k.W.Hide
                        }, d.createElement("div", {
                            id: "pay-with-amazon-container__wallet",
                            className: "pay-with-amazon-container__wallet"
                        }), d.createElement(k.Va, {
                            padding: {
                                top: 1
                            }
                        }, d.createElement(k.z, {
                            onClick: this.handleUpdateCardClick,
                            state: this.state.updatingPaymentMethod ? k.E.Loading : k.E.Default,
                            disabled: this.state.updatingPaymentMethod
                        }, Object(p.d)("Update Card", "PayWithAmazon"))))) : d.createElement(k.Xa, null)
                    }, t
                }(d.Component)),
                te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            paypalConfigured: !1,
                            updatingPaymentMethod: !1,
                            hasError: !1
                        }, t.handleValidationSuccess = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, this.props.updatePaymentMethod("recurly", "paypal", e.id)];
                                        case 1:
                                            return t.sent(), [3, 3];
                                        case 2:
                                            return t.sent(), this.setState({
                                                updatingPaymentMethod: !1
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleValidationError = function() {
                            t.setState({
                                hasError: !0
                            })
                        }, t.handleClick = function() {
                            t.setState({
                                updatingPaymentMethod: !0,
                                hasError: !1
                            }), t.paypalInstance.start()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.pollForRecurly = setInterval(function() {
                            recurly && (clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                                paypalConfigured: !0
                            }))
                        }, 500)
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.pollForRecurly)
                    }, t.prototype.render = function() {
                        return this.state.paypalConfigured ? d.createElement(k.Va, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(k.z, {
                            onClick: this.handleClick,
                            state: this.state.updatingPaymentMethod ? k.E.Loading : k.E.Default,
                            disabled: this.state.updatingPaymentMethod
                        }, Object(p.d)("Update with PayPal", "PayPal"))) : d.createElement(k.Va, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(k.Xa, null))
                    }, t.prototype.setupConfigs = function() {
                        var e = this;
                        recurly.configure(this.props.publicKey);
                        var t = recurly.PayPal({
                            braintree: {
                                clientAuthorization: this.props.braintreeClientAuthorization
                            }
                        });
                        t.on("token", function(t) {
                            e.handleValidationSuccess(t)
                        }), t.on("error", function() {
                            e.handleValidationError(), e.setState({
                                updatingPaymentMethod: !1
                            })
                        }), t.on("cancel", function() {
                            e.setState({
                                updatingPaymentMethod: !1
                            })
                        }), this.paypalInstance = t
                    }, t
                }(d.Component);
            ! function(e) {
                e.CreditCard = "credit-card", e.PayWithAmazon = "pay-with-amazon", e.PayPal = "paypal"
            }(K || (K = {}));
            var ne, re, ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedOption: K.CreditCard
                        }, t.handleOptionChange = function(e) {
                            t.setState({
                                selectedOption: e.currentTarget.value
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        if (!document.querySelector("#recurly-script")) {
                            var e = document.createElement("script");
                            e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                        }
                    }, t.prototype.render = function() {
                        return d.createElement(k.Va, {
                            margin: {
                                top: 2
                            }
                        }, d.createElement(k.Ca, {
                            id: "payment-option",
                            label: Object(p.d)("Payment Option", "RecurlyCardWrapper")
                        }, d.createElement("div", {
                            id: "payment-option"
                        }, d.createElement(k.Va, {
                            margin: {
                                right: 2
                            },
                            display: k.W.Inline
                        }, d.createElement(k.Na, {
                            margin: {
                                right: .5
                            }
                        }, d.createElement("input", {
                            type: "radio",
                            className: "payment-option__radio-button",
                            id: K.CreditCard,
                            name: "pay-option",
                            value: K.CreditCard,
                            onChange: this.handleOptionChange,
                            checked: this.state.selectedOption === K.CreditCard
                        })), d.createElement("label", {
                            htmlFor: K.CreditCard
                        }, d.createElement(k.S, {
                            src: F.a,
                            alt: Object(p.d)("Credit Card", "RecurlyPaymentMethod"),
                            srcSet: {
                                "1x": F.a,
                                "2x": I.a
                            }
                        }))), d.createElement(k.Va, {
                            margin: {
                                right: 2
                            },
                            display: k.W.Inline
                        }, d.createElement(k.Na, {
                            margin: {
                                right: .5
                            }
                        }, d.createElement("input", {
                            type: "radio",
                            className: "payment-option__radio-button",
                            id: K.PayWithAmazon,
                            name: "pay-option",
                            value: K.PayWithAmazon,
                            onChange: this.handleOptionChange,
                            checked: this.state.selectedOption === K.PayWithAmazon
                        })), d.createElement("label", {
                            htmlFor: K.PayWithAmazon
                        }, d.createElement(H.a, {
                            alt: Object(p.d)("Amazon Pay", "RecurlyPaymentMethod"),
                            sources: {
                                themed: !0,
                                light: {
                                    "1x": w.a,
                                    "2x": T.a
                                },
                                dark: {
                                    "1x": x.a,
                                    "2x": O.a
                                }
                            }
                        }))), d.createElement(k.Va, {
                            margin: {
                                right: 2
                            },
                            display: k.W.Inline
                        }, d.createElement(k.Na, {
                            margin: {
                                right: .5
                            }
                        }, d.createElement("input", {
                            type: "radio",
                            className: "payment-option__radio-button",
                            id: K.PayPal,
                            name: "pay-option",
                            value: K.PayPal,
                            onChange: this.handleOptionChange,
                            checked: this.state.selectedOption === K.PayPal
                        })), d.createElement("label", {
                            htmlFor: K.PayPal
                        }, d.createElement(H.a, {
                            alt: Object(p.d)("PayPal", "RecurlyPaymentMethod"),
                            sources: {
                                themed: !0,
                                light: {
                                    "1x": V.a,
                                    "2x": z.a
                                },
                                dark: {
                                    "1x": B.a,
                                    "2x": L.a
                                }
                            }
                        }))), d.createElement(k.Va, {
                            display: this.state.selectedOption === K.CreditCard ? k.W.Block : k.W.Hide
                        }, d.createElement($, {
                            publicKey: this.props.config.publicKey,
                            updatePaymentMethod: this.props.updatePaymentMethod
                        })), d.createElement(k.Va, {
                            display: this.state.selectedOption === K.PayWithAmazon ? k.W.Block : k.W.Hide
                        }, d.createElement(ee, {
                            clientID: this.props.config.payWithAmazonConfigs.clientID,
                            isProduction: this.props.config.payWithAmazonConfigs.isProduction,
                            sellerID: this.props.config.payWithAmazonConfigs.sellerID,
                            updatePaymentMethod: this.props.updatePaymentMethod
                        })), d.createElement(k.Va, {
                            display: this.state.selectedOption === K.PayPal ? k.W.Block : k.W.Hide
                        }, d.createElement(te, {
                            publicKey: this.props.config.publicKey,
                            braintreeClientAuthorization: this.props.config.braintreeClientAuthorization,
                            updatePaymentMethod: this.props.updatePaymentMethod
                        })))))
                    }, t
                }(d.Component),
                ie = n("/jfp"),
                oe = n.n(ie),
                se = n("HGFl");
            ! function(e) {
                e.Tier1 = "1000", e.Tier2 = "2000", e.Tier3 = "3000"
            }(re || (re = {}));
            var ce, le = ((ne = {})[re.Tier1] = function() {
                return Object(p.d)("Tier 1", "SubscriptionTier")
            }, ne[re.Tier2] = function() {
                return Object(p.d)("Tier 2", "SubscriptionTier")
            }, ne[re.Tier3] = function() {
                return Object(p.d)("Tier 3", "SubscriptionTier")
            }, ne);
            ! function(e) {
                e.TOTAL_SUB_PRICE_TEXT = "payment-method-card__total-sub-price-text", e.DISPLAY_NAME_TEXT = "subscription-rows__display-name-text", e.TIER_TEXT = "subscription-rows__tier-text", e.COST_TEXT = "subscription-rows__cost-text", e.RENEWAL_DATE_TEXT = "subscription-rows__renewal-date-text"
            }(ce || (ce = {}));
            var de, ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showingMore: !1
                        }, t.renderNoRenewingSubscriptionsMessage = function() {
                            return d.createElement(k.xb, {
                                alignItems: k.f.Center,
                                background: k.r.Base,
                                borderBottom: !0,
                                borderLeft: !0,
                                borderRight: !0,
                                display: k.W.Flex,
                                justifyContent: k.Ua.Center,
                                padding: {
                                    x: 2,
                                    y: 3
                                }
                            }, d.createElement(k.V, {
                                color: k.O.Alt2
                            }, Object(p.d)("You have no renewing subscriptions.", "SubscriptionRows")))
                        }, t.sumPrice = function(e) {
                            var t = e[0].renewalPriceDivisor || 100;
                            return e.reduce(function(e, t) {
                                return e + t.renewalPrice
                            }, 0) / t
                        }, t.toggleShowMore = function() {
                            t.setState(function(e) {
                                return {
                                    showingMore: !e.showingMore
                                }
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (0 === this.numOfSubscriptions) return this.renderNoRenewingSubscriptionsMessage();
                        var e = this.props.subscriptions.slice(0, 5),
                            t = this.state.showingMore ? this.props.subscriptions : e,
                            n = this.state.showingMore ? Object(p.d)("Show Less", "SubscriptionRows") : Object(p.d)("Show More", "SubscriptionRows");
                        return d.createElement(d.Fragment, null, d.createElement(k.xb, {
                            borderLeft: !0,
                            borderRight: !0,
                            display: k.W.Flex,
                            flexDirection: k.Y.Column,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, d.createElement(k.V, {
                            bold: !0,
                            color: k.O.Alt2,
                            type: k.Nb.P,
                            "data-test-selector": ce.TOTAL_SUB_PRICE_TEXT
                        }, this.numOfSubscriptionsCopy, " (", this.pricePerMonth, ")")), d.createElement(k.xb, {
                            background: k.r.Base,
                            border: !0,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, t.map(function(e, n) {
                            var r = "";
                            return r = e.willRenew ? Object(p.d)("Renews {subExpirationDate, date, short}", {
                                subExpirationDate: Object(se.c)(e.expiresAt)
                            }, "SubscriptionRows") : Object(p.d)("Expires {subExpirationDate, date, short}", {
                                subExpirationDate: Object(se.c)(e.expiresAt)
                            }, "SubscriptionRows"), d.createElement(k.xb, {
                                borderBottom: n !== t.length - 1,
                                fullWidth: !0,
                                key: e.id,
                                padding: {
                                    y: 1
                                }
                            }, d.createElement(k.Ha, null, d.createElement(k.P, {
                                cols: 4
                            }, d.createElement(k.Va, {
                                display: k.W.Flex,
                                alignItems: k.f.Center
                            }, d.createElement(k.T, {
                                to: e.subscriptionBenefit && e.subscriptionBenefit.user ? "/" + e.subscriptionBenefit.user.login : void 0
                            }, d.createElement(k.q, {
                                alt: "turbo" === e.productType ? "turbo" : e.subscriptionBenefit && e.subscriptionBenefit.user ? e.subscriptionBenefit.user.displayName : "",
                                src: "turbo" === e.productType ? oe.a : e.subscriptionBenefit && e.subscriptionBenefit.user ? e.subscriptionBenefit.user.profileImageURL : void 0,
                                size: 40
                            })), d.createElement(k.Va, {
                                padding: {
                                    left: 1
                                }
                            }, d.createElement(k.V, {
                                "data-test-selector": ce.DISPLAY_NAME_TEXT,
                                bold: !0
                            }, d.createElement(k.T, {
                                type: k.U.Inherit,
                                to: e.subscriptionBenefit && e.subscriptionBenefit.user ? "/" + e.subscriptionBenefit.user.login : void 0,
                                hoverUnderlineNone: !0
                            }, "turbo" === e.productType ? Object(p.d)("Twitch Turbo", "SubscriptionRows") : e.subscriptionBenefit && e.subscriptionBenefit.user ? e.subscriptionBenefit.user.displayName : void 0))))), d.createElement(k.P, {
                                cols: 2
                            }, d.createElement(k.Va, {
                                display: k.W.Flex,
                                alignItems: k.f.Center,
                                justifyContent: k.Ua.End,
                                padding: {
                                    right: 1
                                },
                                fullHeight: !0
                            }, d.createElement(k.V, {
                                "data-test-selector": ce.TIER_TEXT,
                                bold: !0
                            }, e.subscriptionBenefit ? le[e.subscriptionBenefit.tier]() : Object(p.d)("Turbo", "SubscriptionRows")))), d.createElement(k.P, {
                                cols: 3
                            }, d.createElement(k.Va, {
                                display: k.W.Flex,
                                alignItems: k.f.Center,
                                justifyContent: k.Ua.Start,
                                padding: {
                                    left: 1
                                },
                                fullHeight: !0
                            }, d.createElement(k.V, {
                                "data-test-selector": ce.COST_TEXT
                            }, Object(p.d)("{localizedPrice} / month", {
                                localizedPrice: Object(p.e)(e.renewalPrice / 100, {
                                    style: "currency",
                                    currency: e.renewalCurrency
                                })
                            }, "SubscriptionRows")))), d.createElement(k.P, {
                                cols: 3
                            }, d.createElement(k.Va, {
                                display: k.W.Flex,
                                alignItems: k.f.Center,
                                justifyContent: k.Ua.End,
                                padding: {
                                    left: 1
                                },
                                fullHeight: !0
                            }, d.createElement(k.V, {
                                "data-test-selector": ce.RENEWAL_DATE_TEXT
                            }, r)))))
                        }), this.props.subscriptions.length > 5 && d.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(k.z, {
                            type: k.F.Text,
                            fullWidth: !0,
                            onClick: this.toggleShowMore
                        }, n))))
                    }, Object.defineProperty(t.prototype, "numOfSubscriptions", {
                        get: function() {
                            return (this.props.subscriptions || []).length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "numOfSubscriptionsCopy", {
                        get: function() {
                            return Object(p.d)("{subscriptionsCount, plural, one {# subscription} other {# subscriptions}}", {
                                subscriptionsCount: this.numOfSubscriptions
                            }, "SubscriptionRows")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pricePerMonth", {
                        get: function() {
                            var e = this,
                                t = {};
                            this.props.subscriptions.forEach(function(e) {
                                var n = e.renewalCurrency;
                                t[n] = (t[n] || []).concat(e)
                            });
                            var n = {};
                            Object.keys(t).forEach(function(r) {
                                var a = e.sumPrice(t[r]),
                                    i = Object(p.e)(a, {
                                        style: "currency",
                                        currency: r
                                    });
                                n[r] = i
                            });
                            var r = "";
                            return Object.keys(n).forEach(function(e, t, a) {
                                r += Object(p.d)("{totalPriceI18n} / month", {
                                    totalPriceI18n: n[e]
                                }, "SubscriptionRows"), t !== a.length - 1 && (r += ", ")
                            }), r
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                pe = n("a1OF"),
                me = "64138",
                he = "SeemsGood",
                ye = function(e) {
                    return d.createElement(k.Va, {
                        padding: {
                            y: 5
                        }
                    }, d.createElement(k.Va, {
                        display: k.W.Flex,
                        justifyContent: k.Ua.Center,
                        margin: {
                            y: 2
                        }
                    }, d.createElement(k.S, {
                        src: Object(pe.e)(me, 2),
                        alt: he
                    })), d.createElement(k.Va, {
                        display: k.W.Flex,
                        justifyContent: k.Ua.Center,
                        margin: {
                            y: 2
                        }
                    }, d.createElement(k.Va, {
                        display: k.W.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, d.createElement(k.mb, {
                        asset: k.nb.Check,
                        type: k.ob.Success
                    })), d.createElement(k.V, null, Object(p.d)("Your payment method has been updated.", "UpdatePaymentSuccess"))), d.createElement(k.Va, {
                        display: k.W.Flex,
                        justifyContent: k.Ua.Center,
                        margin: {
                            y: 2
                        }
                    }, d.createElement(k.Va, {
                        margin: {
                            x: 1
                        }
                    }, d.createElement(k.z, {
                        onClick: e.onDoneClick
                    }, Object(p.d)("Done", "UpdatePaymentSuccess"))), d.createElement(k.z, {
                        type: k.F.Hollow,
                        onClick: e.onStartOverClick
                    }, Object(p.d)("Start Over", "UpdatePaymentSuccess"))))
                },
                fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            xsollaLoaded: !1
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.iframe && this.iframe.addEventListener("load", function() {
                            e.setState({
                                xsollaLoaded: !0
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = this;
                        return d.createElement(k.Va, {
                            fullWidth: !0
                        }, d.createElement(k.Va, {
                            display: this.state.xsollaLoaded ? k.W.Hide : k.W.Inline
                        }, d.createElement(k.Xa, {
                            fillContent: !0
                        })), d.createElement(k.Va, {
                            fullWidth: !0,
                            display: this.state.xsollaLoaded ? k.W.Inline : k.W.Hide
                        }, d.createElement("iframe", {
                            ref: function(t) {
                                return e.iframe = t
                            },
                            id: "xsolla",
                            src: this.props.config.iframeURL,
                            width: "100%",
                            height: "650px"
                        })))
                    }, t
                }(d.Component),
                ge = n("f00E"),
                be = n("WlZp");
            n("YHBx");
            ! function(e) {
                e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
            }(de || (de = {}));
            var ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        zuoraConfigured: !1,
                        updatingPaymentMethod: !1,
                        errorMessage: "",
                        nullValueErrors: [],
                        sessionId: Object(ge.b)()
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.setState({
                            updatingPaymentMethod: !0,
                            errorMessage: "",
                            nullValueErrors: []
                        }), window.Z.submit()
                    }, t.renderErrorMessage = function() {
                        if (t.state.nullValueErrors.length) {
                            var e = t.state.nullValueErrors.map(function(e, t) {
                                return d.createElement(k.Va, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, d.createElement(k.V, {
                                    color: k.O.Error
                                }, "• ", e))
                            });
                            return d.createElement("div", null, d.createElement(k.Va, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, d.createElement(k.V, {
                                color: k.O.Error
                            }, Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCardComponent"))), e)
                        }
                        if (t.state.errorMessage) return d.createElement(k.Va, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, d.createElement(k.V, {
                            color: k.O.Error
                        }, t.state.errorMessage))
                    }, t.successCallback = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!e.success) return [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.updatePaymentMethod("zuora", "cc", e.refId)];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            updatingPaymentMethod: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.errorCallback = function(e, n, r) {
                        if (t.setState({
                                updatingPaymentMethod: !1
                            }), "unknown" === n) return t.parseGatewayErrorMessage(r);
                        window.Z.sendErrorMessageToHpm(e, r)
                    }, t.parseGatewayErrorMessage = function(e) {
                        return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                            errorMessage: Object(p.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCardComponent")
                        }) : t.setState({
                            errorMessage: Object(p.d)("We couldn't process your payment. Please try again.", "ZuoraCardComponent")
                        })
                    }, t.parseNullValueErrorMessage = function(e) {
                        var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                            r = {
                                creditCardHolderName: Object(p.d)("Name on Card", "ZuoraCardComponent"),
                                creditCardAddress1: Object(p.d)("Billing Address", "ZuoraCardComponent"),
                                creditCardCity: Object(p.d)("City", "ZuoraCardComponent"),
                                creditCardPostalCode: Object(p.d)("Zip Code", "ZuoraCardComponent")
                            },
                            a = n.map(function(e) {
                                var t = r[e];
                                return t || ""
                            }).filter(function(e) {
                                return "" !== e
                            });
                        t.setState({
                            nullValueErrors: a
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                    else {
                        var t = document.createElement("script");
                        t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                            e.initZuoraIFrame()
                        }
                    }
                }, t.prototype.render = function() {
                    return d.createElement("div", null, !this.state.zuoraConfigured && d.createElement(k.Va, {
                        padding: {
                            y: 5
                        }
                    }, d.createElement(k.Xa, {
                        fillContent: !0
                    })), d.createElement(k.Va, {
                        display: this.state.zuoraConfigured ? k.W.Block : k.W.Hide,
                        "data-test-selector": de.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), d.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.updatingPaymentMethod ? "zuora-disabled" : ""
                    }), d.createElement(k.Va, {
                        margin: {
                            left: .5,
                            top: 2,
                            bottom: 1
                        }
                    }, d.createElement(k.z, {
                        onClick: this.handleSubmit,
                        state: this.state.updatingPaymentMethod ? k.E.Loading : k.E.Default,
                        disabled: this.state.updatingPaymentMethod,
                        "data-test-selector": de.UPDATE_PAYMENT_BUTTON
                    }, Object(p.d)("Update Card", "ZuoraCardComponent"))), d.createElement(be.a, {
                        isProduction: this.props.config.isProductionConfig,
                        sessionId: this.state.sessionId
                    })))
                }, t.prototype.initZuoraIFrame = function() {
                    var e = this,
                        t = {
                            id: this.props.config.hostedPageID,
                            url: this.props.config.hostedPageURL,
                            style: "inline",
                            submitEnabled: "true",
                            field_accountId: this.props.config.externalAccountID,
                            tenantId: this.props.config.tenantID,
                            token: this.props.config.token,
                            key: this.props.config.publicKey,
                            signature: this.props.config.signature,
                            param_gwOptions_KaptchaSessionID: this.state.sessionId,
                            locale: this.formattedLocale
                        };
                    window.Z.renderWithErrorHandler(t, {
                        creditCardCountry: "USA"
                    }, this.successCallback, this.errorCallback);
                    var n = document.getElementById("z_hppm_iframe");
                    n && n.addEventListener("load", function() {
                        e.setState({
                            zuoraConfigured: !0
                        })
                    })
                }, Object.defineProperty(t.prototype, "formattedLocale", {
                    get: function() {
                        var e = this.props.languageCode || "en";
                        if (e.includes("-")) {
                            var t = e.split("-");
                            e = t[0] + "_" + t[1].toUpperCase()
                        }
                        return e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(d.Component);
            var ke, Ee, Pe = Object(a.connect)(function(e) {
                return {
                    languageCode: Object(c.b)(e)
                }
            })(ve);
            ! function(e) {
                e[e.SubRows = 0] = "SubRows", e[e.UpdatePayment = 1] = "UpdatePayment", e[e.UpdateSuccess = 2] = "UpdateSuccess"
            }(ke || (ke = {})),
            function(e) {
                e.NUM_SUBS_TEXT = "payment-method-card__num-subs-text", e.UPDATE_BUTTON = "payment-method-card__update-button", e.CLOSE_BUTTON = "payment-method-card__close-button"
            }(Ee || (Ee = {}));
            var Ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            viewType: ke.SubRows,
                            updatePaymentError: !1
                        }, t.renderPaymentProvider = function() {
                            var e = t.props.paymentProviderConfig;
                            return e.provider === r.Recurly ? d.createElement(ae, {
                                config: e,
                                updatePaymentMethod: t.updatePaymentMethod
                            }) : e.provider === r.Zuora ? d.createElement(Pe, {
                                config: e,
                                updatePaymentMethod: t.updatePaymentMethod
                            }) : e.provider === r.Xsolla ? d.createElement(fe, {
                                config: e
                            }) : d.createElement(k.V, null, Object(p.d)("Oops! Payment provider is unavailable. Please try again later.", "PaymentMethodCard"))
                        }, t.renderActionButtons = function() {
                            var e, n;
                            if (t.props.paymentProviderConfig.provider === r.GoogleIAB) return d.createElement(k.z, {
                                disabled: !0,
                                fullWidth: !0
                            }, Object(p.d)("Manage on Android Device", "PaymentMethodCard"));
                            if (t.state.viewType === ke.SubRows) {
                                var a = t.props.paymentProviderConfig.provider === r.Xsolla ? Object(p.d)("Manage with Xsolla", "PaymentMethodCard") : Object(p.d)("Update Payment Info", "PaymentMethodCard");
                                e = d.createElement(k.z, {
                                    onClick: t.handleUpdateToggleButton,
                                    fullWidth: !0,
                                    "data-test-selector": Ee.UPDATE_BUTTON
                                }, a)
                            } else e = d.createElement(k.z, {
                                onClick: t.handleUpdateToggleButton,
                                fullWidth: !0,
                                type: k.F.Text,
                                "data-test-selector": Ee.CLOSE_BUTTON
                            }, Object(p.d)("Cancel", "PaymentMethodCard"));
                            return [r.Recurly, r.Zuora].includes(t.props.paymentProviderConfig.provider) && (n = d.createElement(k.z, {
                                onClick: t.handleDeleteButton,
                                fullWidth: !0,
                                type: k.F.Hollow
                            }, Object(p.d)("Delete", "PaymentMethodCard"))), d.createElement(d.Fragment, null, !!n && d.createElement(k.Va, {
                                margin: {
                                    right: 1
                                },
                                fullWidth: !0
                            }, n), e)
                        }, t.handleUpdateToggleButton = function() {
                            return t.state.viewType === ke.SubRows ? t.setState({
                                viewType: ke.UpdatePayment,
                                updatePaymentError: !1
                            }) : t.setState({
                                viewType: ke.SubRows,
                                updatePaymentError: !1
                            })
                        }, t.handleDeleteButton = function() {
                            t.props.showDeletePaymentMethodModal({
                                subscriptions: t.props.subscriptions,
                                paymentMethod: t.props.paymentMethod,
                                userID: t.props.userID,
                                onDeleteSuccess: t.props.refetchPaymentMethodsData
                            })
                        }, t.onDoneClick = function() {
                            t.setState({
                                viewType: ke.SubRows,
                                updatePaymentError: !1
                            })
                        }, t.onStartOverClick = function() {
                            return t.setState({
                                viewType: ke.UpdatePayment,
                                updatePaymentError: !1
                            })
                        }, t.updatePaymentMethod = function(e, n, r, a) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, i, o, s;
                                return l.__generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return this.setState({
                                                updatePaymentError: !1
                                            }), t = "/v5/checkout/users/" + this.props.userID + "/payment_methods", i = {
                                                provider: e,
                                                gateway: n,
                                                token: r,
                                                billing_info_country: a
                                            }, [4, P.a.put(t, {
                                                body: i
                                            }, {
                                                version: 5
                                            })];
                                        case 1:
                                            return o = c.sent(), s = o.body && o.body.error_code, o.error || o.requestError || s ? (this.setState({
                                                viewType: ke.UpdatePayment,
                                                updatePaymentError: !0,
                                                errorCode: s
                                            }), [2, Promise.reject(null)]) : [4, this.props.refetchPaymentMethodsData()];
                                        case 2:
                                            return c.sent(), this.setState({
                                                viewType: ke.UpdateSuccess,
                                                updatePaymentError: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(k.Va, {
                            margin: {
                                y: 3
                            }
                        }, d.createElement(k.xb, {
                            border: !0,
                            background: k.r.Base
                        }, d.createElement(k.xb, {
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: k.W.Flex,
                            flexDirection: k.Y.Column,
                            justifyContent: k.Ua.Between
                        }, d.createElement(k.Ha, {
                            alignItems: k.f.Center
                        }, d.createElement(k.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, d.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.a, {
                            paymentMethod: this.props.paymentMethod,
                            justifyContent: k.Ua.Start
                        }))), d.createElement(k.P, {
                            cols: {
                                default: 12,
                                sm: 4
                            }
                        }, d.createElement(k.Va, {
                            display: k.W.Flex,
                            justifyContent: k.Ua.End,
                            margin: {
                                y: 1
                            }
                        }, this.renderActionButtons()))), this.state.viewType === ke.UpdateSuccess && d.createElement(ye, {
                            onDoneClick: this.onDoneClick,
                            onStartOverClick: this.onStartOverClick
                        }), this.state.viewType === ke.UpdatePayment && d.createElement(d.Fragment, null, d.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, this.renderPaymentProvider()), this.state.updatePaymentError && d.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(k.V, {
                            color: k.O.Error
                        }, function(e) {
                            switch (e) {
                                case 1:
                                    return Object(p.d)("The transaction was declined. Please use a different card or contact your bank.", "TransactionErrorCode");
                                case 2:
                                    return Object(p.d)("Your card number is invalid. Please try another card or contact your bank.", "TransactionErrorCode");
                                case 3:
                                    return Object(p.d)("This transaction was declined because it appears to be a fraudulent attempt. Please try a different card.", "TransactionErrorCode");
                                case 4:
                                    return Object(p.d)("The security code you entered does not match. Please update the CVV and try again.", "TransactionErrorCode");
                                case 5:
                                    return Object(p.d)("The transaction was declined due to insufficient funds in your account. Please use a different card or contact your bank.", "TransactionErrorCode");
                                default:
                                    return Object(p.d)("Your request could not be processed. Please try again later.", "TransactionErrorCode")
                            }
                        }(this.state.errorCode))), this.props.subscriptions && !!this.props.subscriptions.length && d.createElement(k.V, {
                            color: k.O.Alt2,
                            "data-test-selector": Ee.NUM_SUBS_TEXT
                        }, this.numOfSubscriptionsWillRenew)))), this.state.viewType === ke.SubRows && d.createElement(ue, {
                            subscriptions: this.props.subscriptions
                        }))
                    }, Object.defineProperty(t.prototype, "numOfSubscriptionsWillRenew", {
                        get: function() {
                            return Object(p.d)("{subscriptionsCount, plural, one {# subscription will renew with this payment method} other {# subscriptions will renew with this payment method}}", {
                                subscriptionsCount: (this.props.subscriptions || []).length
                            }, "PaymentMethodCard")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                je = n("cZKs"),
                we = n("geRD"),
                _e = n("TQGo"),
                Te = n("h7rm"),
                Se = (n("uCCD"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDeleting: !1,
                            hasErrors: !1
                        }, t.renderHeaderText = function() {
                            var e = Object(p.d)("Delete saved payment method", "DeletePaymentMethodModal");
                            return t.hasRenewingSubscriptions && (e = Object(p.d)("Unable to delete payment method", "DeletePaymentMethodModal")), d.createElement(k.V, {
                                bold: !0,
                                type: k.Nb.H1,
                                fontSize: k.Aa.Size4
                            }, e)
                        }, t.renderBodyContent = function() {
                            return t.hasRenewingSubscriptions ? d.createElement(k.V, null, Object(p.d)("Before you can delete this, please cancel all subscriptions renewing with this payment method. You can also transfer all of your subscriptions by changing to a new payment method.", "DeletePaymentMethodModal")) : d.createElement(k.Va, null, d.createElement(k.V, null, Object(p.d)("Are you sure you want to delete this payment method?", "DeletePaymentMethodModal")), d.createElement(k.Va, {
                                margin: {
                                    top: 1
                                }
                            }, d.createElement(_e.a, {
                                paymentMethod: t.props.paymentMethod
                            })))
                        }, t.renderPrimaryButton = function() {
                            return t.hasRenewingSubscriptions ? d.createElement(k.z, {
                                linkTo: "/subscriptions",
                                onClick: t.props.closeModal
                            }, Object(p.d)("Go to Subscriptions", "DeletePaymentMethodModal")) : d.createElement(k.z, {
                                type: k.F.Alert,
                                state: t.state.isDeleting ? k.E.Loading : k.E.Default,
                                onClick: t.handleDeletePaymentMethod
                            }, Object(p.d)("Delete", "DeletePaymentMethodModal"))
                        }, t.handleDeletePaymentMethod = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isDeleting: !0
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 4, , 5]), [4, this.props.deleteDefaultPaymentMethod(Object(we.a)({
                                                provider: this.props.paymentMethod.provider,
                                                userID: this.props.userID
                                            }))];
                                        case 2:
                                            return e.sent(), [4, this.props.onDeleteSuccess()];
                                        case 3:
                                            return e.sent(), this.props.closeModal(), [3, 5];
                                        case 4:
                                            return e.sent(), this.setState({
                                                hasErrors: !0
                                            }), [3, 5];
                                        case 5:
                                            return this.setState({
                                                isDeleting: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(k.xb, {
                            className: "delete-payment-method-modal"
                        }, d.createElement(k.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, this.renderHeaderText()), this.renderBodyContent(), this.state.hasErrors && d.createElement(k.Va, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(k.V, {
                            color: k.O.Error
                        }, Object(p.d)("Oops! Unable to delete payment method.", "DeletePaymentMethodModal"))), d.createElement(k.Va, {
                            display: k.W.Flex,
                            margin: {
                                top: 2
                            }
                        }, this.renderPrimaryButton(), d.createElement(k.Va, {
                            margin: {
                                left: 1
                            }
                        }, d.createElement(k.z, {
                            type: k.F.Hollow,
                            onClick: this.props.closeModal
                        }, Object(p.d)("Not Right Now", "DeletePaymentMethodModal")))))
                    }, Object.defineProperty(t.prototype, "hasRenewingSubscriptions", {
                        get: function() {
                            return !!this.props.subscriptions.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component)),
                xe = Object(u.compose)(Object(b.a)(Te, {
                    name: "deleteDefaultPaymentMethod"
                }))(Se),
                De = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(k.xb, {
                            background: k.r.Base,
                            padding: 2
                        }, d.createElement(xe, {
                            subscriptions: this.props.subscriptions,
                            paymentMethod: this.props.paymentMethod,
                            onDeleteSuccess: this.props.onDeleteSuccess,
                            userID: this.props.userID,
                            closeModal: this.props.closeModal
                        }), d.createElement(je.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(d.Component);
            var Oe = Object(a.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    closeModal: E.c
                }, e)
            })(De);
            var Me, Fe = Object(a.connect)(null, function(e) {
                    return Object(i.bindActionCreators)({
                        showDeletePaymentMethodModal: function(e) {
                            var t = l.__rest(e, []);
                            return Object(E.d)(Oe, t)
                        }
                    }, e)
                })(Ce),
                Ne = (n("o3lI"), n("enyl")),
                Ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.refetchPaymentMethodsData = function() {
                            return t.props.data.refetch()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return d.createElement(k.Va, {
                            padding: {
                                y: 5
                            }
                        }, d.createElement(k.Xa, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return d.createElement(m.a, {
                            message: Object(p.d)("Error loading payment methods.", "PaymentMethodsTabComponent")
                        });
                        var e = this.renderPaymentMethodCards();
                        return e && e.length ? d.createElement(k.Va, {
                            className: "payment-methods-tab"
                        }, e) : d.createElement(k.xb, {
                            background: k.r.Alt,
                            border: !0,
                            className: "payment-methods-tab",
                            display: k.W.Flex,
                            justifyContent: k.Ua.Center,
                            padding: 1
                        }, d.createElement(k.V, {
                            color: k.O.Alt2
                        }, Object(p.d)("You have no payment methods on record.", "PaymentMethodsTabComponent")))
                    }, t.prototype.renderPaymentMethodCards = function() {
                        var e = this,
                            t = this.props.data.currentUser.paymentMethodConfigs,
                            n = this.props.data.currentUser.paymentMethods;
                        return n && n.map(function(n) {
                            var a, i = n.provider;
                            if ("xsolla_v3" === n.provider && (i = r.Xsolla), function(e) {
                                    return e === r.Recurly
                                }(i)) a = t.recurly;
                            else if (function(e) {
                                    return e === r.Xsolla
                                }(i)) a = t.xsolla;
                            else if (function(e) {
                                    return e === r.Zuora
                                }(i)) a = t.zuora;
                            else {
                                if (! function(e) {
                                        return e === r.GoogleIAB
                                    }(i)) return void v.warn("Received invalid payment provider type: " + i);
                                a = {}
                            }
                            var o = l.__assign({}, a, {
                                provider: i
                            });
                            if (function(e) {
                                    return e.provider === r.Zuora
                                }(o) && (o.isProductionConfig = t.recurly.payWithAmazonConfigs.isProduction), n.provider !== r.GoogleIAB || 0 !== n.recurringPaymentDetails.length) {
                                var s = n.recurringPaymentDetails.concat(n.purchaseProfiles);
                                return d.createElement(Fe, {
                                    key: n.provider,
                                    paymentMethod: n,
                                    paymentProviderConfig: o,
                                    refetchPaymentMethodsData: e.refetchPaymentMethodsData,
                                    subscriptions: s,
                                    userID: e.props.data.currentUser.id
                                })
                            }
                        })
                    }, t
                }(d.Component),
                Ae = Object(u.compose)(Object(b.a)(Ne), Object(g.c)("PaymentMethodsTab"))(Ie),
                Ve = n("HEnu"),
                Re = function(e, t) {
                    if (void 0 === e && (e = 1), void 0 === t && (t = 10), t < e) throw new Error("Invalid range");
                    return Array.from(Array(t + 1).keys()).slice(e)
                },
                ze = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handlePageJump = function(e) {
                            var t = e.currentTarget.dataset.page;
                            t && n.props.onPageJump(parseInt(t, 10))
                        }, n.state = {
                            currentPage: n.getAllowedCurrentPage(t.currentPage, t.totalNumberPages),
                            totalNumberPages: t.totalNumberPages
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.setState({
                            currentPage: this.getAllowedCurrentPage(e.currentPage, e.totalNumberPages),
                            totalNumberPages: e.totalNumberPages
                        })
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.state.totalNumberPages,
                            n = this.state.currentPage,
                            r = t - 3;
                        if (t <= 10) {
                            var a = Re(1, Math.max(t, 1)).map(function(t) {
                                return e.renderButton(t)
                            });
                            return this.renderWrapper(a)
                        }
                        var i = Re(1, 2).map(function(t) {
                                return e.renderButton(t)
                            }),
                            o = Re(t - 1, t).map(function(t) {
                                return e.renderButton(t)
                            }),
                            s = Re(n - 1, n + 1).map(function(t) {
                                return e.renderButton(t)
                            }),
                            c = this.renderEllipsis("start"),
                            l = this.renderEllipsis("end");
                        return n <= 4 ? (i = Re(1, Math.max(n + 1, 2)).map(function(t) {
                            return e.renderButton(t)
                        }), this.renderWrapper(i.concat([c], o))) : n >= r ? (o = Re(n - 1, t).map(function(t) {
                            return e.renderButton(t)
                        }), this.renderWrapper(i.concat([c], o))) : this.renderWrapper(i.concat([c], s, [l], o))
                    }, t.prototype.renderWrapper = function(e) {
                        return d.createElement(k.Va, {
                            display: k.W.Flex
                        }, d.createElement(k.Va, {
                            margin: {
                                right: .5
                            }
                        }, d.createElement(k.z, {
                            type: k.F.Hollow,
                            icon: k.nb.AngleLeft,
                            onClick: this.props.onBack,
                            disabled: 1 === this.state.currentPage,
                            "data-test-selector": "table-pagination__back-button"
                        })), e, d.createElement(k.Va, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(k.z, {
                            type: k.F.Hollow,
                            icon: k.nb.AngleRight,
                            onClick: this.props.onNext,
                            disabled: this.state.currentPage === this.state.totalNumberPages,
                            "data-test-selector": "table-pagination__next-button"
                        })))
                    }, t.prototype.renderButton = function(e) {
                        return d.createElement(k.Va, {
                            margin: {
                                x: .5
                            },
                            key: e
                        }, d.createElement(k.z, {
                            type: e === this.state.currentPage ? k.F.Default : k.F.Hollow,
                            onClick: this.handlePageJump,
                            key: e,
                            "data-page": e
                        }, e))
                    }, t.prototype.renderEllipsis = function(e) {
                        return d.createElement(k.V, {
                            key: e,
                            "data-test-selector": "table-pagination__ellipsis-text"
                        }, "...")
                    }, t.prototype.getAllowedCurrentPage = function(e, t) {
                        return Math.min(Math.max(e, 1), t)
                    }, t
                }(d.Component),
                Ue = n("5gJ6");
            n("mo/2");
            ! function(e) {
                e.Tier1 = "1000", e.Tier2 = "2000", e.Tier3 = "3000"
            }(Me || (Me = {}));
            var Be, We, Le = function() {
                    return Object(p.d)("Twitch Turbo", "TransactionHistoryTab")
                },
                He = function(e) {
                    return d.createElement(k.Fb, null, d.createElement(k.Cb, {
                        verticalAlign: k.Xb.Middle
                    }, d.createElement(k.V, null, e.purchasedAt ? Object(p.c)(Object(se.c)(e.purchasedAt), "medium") : "-")), d.createElement(k.Cb, {
                        verticalAlign: k.Xb.Middle
                    }, d.createElement(k.Va, {
                        display: k.W.Flex
                    }, d.createElement(k.T, {
                        to: e.product.owner ? "/" + e.product.owner.login : void 0
                    }, d.createElement(k.q, {
                        alt: "Turbo" === e.product.name ? Le() : e.product.name,
                        src: "Turbo" === e.product.name ? oe.a : e.product.owner ? e.product.owner.profileImageURL : void 0,
                        size: 40
                    })), d.createElement(k.Va, {
                        display: k.W.Flex,
                        padding: {
                            x: 1
                        },
                        alignItems: k.f.Center
                    }, d.createElement(k.V, {
                        bold: !0
                    }, d.createElement(k.T, {
                        type: k.U.Inherit,
                        to: e.product.owner ? "/" + e.product.owner.login : void 0,
                        hoverUnderlineNone: !0
                    }, "Turbo" === e.product.name ? Le() : e.product.name))))), d.createElement(k.Cb, {
                        verticalAlign: k.Xb.Middle
                    }, d.createElement(k.V, null, function(e, t) {
                        if ("SUBSCRIPTION" === e.type) {
                            if ("Turbo" === e.name) return Object(p.d)("Turbo - Subscription", "TransactionHistoryTab");
                            if (e.tier) {
                                if (t.gift)
                                    if (t.recipient) switch (e.tier) {
                                        case Me.Tier1:
                                            return Object(p.d)("Gift Subscription - Tier 1 for {recipientName}", {
                                                recipientName: t.recipient.login || "-"
                                            }, "TransactionHistoryTab");
                                        case Me.Tier2:
                                            return Object(p.d)("Gift Subscription - Tier 2 for {recipientName}", {
                                                recipientName: t.recipient.login || "-"
                                            }, "TransactionHistoryTab");
                                        case Me.Tier3:
                                            return Object(p.d)("Gift Subscription - Tier 3 for {recipientName}", {
                                                recipientName: t.recipient.login || "-"
                                            }, "TransactionHistoryTab");
                                        default:
                                            return "-"
                                    } else switch (e.tier) {
                                        case Me.Tier1:
                                            return Object(p.d)("{quantity, number} x Gift Subscriptions - Tier 1", {
                                                quantity: t.quantity
                                            }, "TransactionHistoryTab");
                                        case Me.Tier2:
                                            return Object(p.d)("{quantity, number} x Gift Subscriptions - Tier 2", {
                                                quantity: t.quantity
                                            }, "TransactionHistoryTab");
                                        case Me.Tier3:
                                            return Object(p.d)("{quantity, number} x Gift Subscriptions - Tier 3", {
                                                quantity: t.quantity
                                            }, "TransactionHistoryTab");
                                        default:
                                            return "-"
                                    }
                                    switch (e.tier) {
                                        case Me.Tier1:
                                            return Object(p.d)("Channel Subscription - Tier 1", "TransactionHistoryTab");
                                        case Me.Tier2:
                                            return Object(p.d)("Channel Subscription - Tier 2", "TransactionHistoryTab");
                                        case Me.Tier3:
                                            return Object(p.d)("Channel Subscription - Tier 3", "TransactionHistoryTab");
                                        default:
                                            return Object(p.d)("Channel Subscription - One Time", "TransactionHistoryTab")
                                    }
                            }
                        }
                        return "-"
                    }(e.product, {
                        gift: e.isGift,
                        recipient: e.recipient,
                        quantity: e.quantity
                    }))), d.createElement(k.Cb, {
                        verticalAlign: k.Xb.Middle
                    }, d.createElement(k.Va, {
                        display: k.W.Flex,
                        justifyContent: k.Ua.End
                    }, d.createElement(k.V, {
                        className: e.grossAmount && e.grossAmount < 0 ? "transaction-table-row__price--refund" : ""
                    }, function(e, t) {
                        if (e && t) {
                            var n = Object(p.e)(Math.abs(e) / 100, {
                                style: "currency",
                                currency: t
                            });
                            return e < 0 ? "+" + n : n
                        }
                        return "-"
                    }(e.grossAmount, e.currency)))), d.createElement(k.Cb, {
                        verticalAlign: k.Xb.Middle
                    }, d.createElement(Ue.a, {
                        paymentProvider: e.paymentMethod.provider,
                        paymentInstrumentType: e.paymentMethod.paymentType,
                        cardType: e.paymentMethod.cardType
                    })))
                },
                Ye = n("e3pt");
            ! function(e) {
                e.PurchaseDateDesc = "PURCHASE_DATE_DESC", e.PurchaseDateAsc = "PURCHASE_DATE_ASC", e.PriceDesc = "PRICE_DESC", e.PriceAsc = "PRICE_ASC"
            }(Be || (Be = {})),
            function(e) {
                e.All = "ALL", e.Subscriptions = "SUBSCRIPTIONS"
            }(We || (We = {}));
            var qe = 15,
                Xe = "no-transactions-text-selector",
                Ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentIndex: 0,
                            currentFilters: l.__assign({}, t.props.data.variables.filters),
                            dateSortType: k.ub.Descending,
                            costSortType: k.ub.Default,
                            refetching: !1
                        }, t.renderNoTransactionsMessage = function() {
                            return d.createElement(k.xb, {
                                alignItems: k.f.Center,
                                borderBottom: !0,
                                borderLeft: !0,
                                borderRight: !0,
                                color: k.O.Alt2,
                                display: k.W.Flex,
                                flexDirection: k.Y.Column,
                                padding: 2
                            }, d.createElement(k.V, {
                                bold: !0,
                                "data-test-selector": Xe
                            }, Object(p.d)("No Transactions", "TransactionHistoryTab")), d.createElement(k.Va, {
                                margin: .5
                            }, d.createElement(k.V, null, Object(p.d)("A subscription would sure look good here. <x:link>Go find one you like</x:link>.", {
                                "x:link": function(e) {
                                    return d.createElement(k.T, {
                                        to: "https://www.twitch.tv/directory/following",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "TransactionHistoryTab"))))
                        }, t.getCurrentPage = function() {
                            return Math.floor(t.state.currentIndex / qe) + 1
                        }, t.getTotalPages = function() {
                            return Math.ceil(t.props.data.currentUser.paymentTransactions.totalCount / qe) || 1
                        }, t.handlePageJump = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.state.refetching ? [2] : (t = (e - 1) * qe, [4, this.queryPageJump(t)]);
                                        case 1:
                                            return n.sent(), this.setState({
                                                currentIndex: t
                                            }), [2]
                                    }
                                })
                            })
                        }, t.queryPageJump = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                refetching: !0
                                            }), [4, this.props.getOffsetQuery(e, this.state.currentFilters)];
                                        case 1:
                                            return t.sent(), this.setState({
                                                refetching: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleNextPage = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.state.refetching ? [2] : [4, this.queryPageJump(this.state.currentIndex + qe)];
                                        case 1:
                                            return e.sent(), this.setState(function(e) {
                                                return {
                                                    currentIndex: e.currentIndex + qe
                                                }
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handlePreviousPage = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.state.refetching ? [2] : [4, this.queryPageJump(this.state.currentIndex - qe)];
                                        case 1:
                                            return e.sent(), this.setState(function(e) {
                                                return {
                                                    currentIndex: e.currentIndex - qe
                                                }
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleSortDate = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return l.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.state.dateSortType, t = e === k.ub.Default || e === k.ub.Ascending ? k.ub.Descending : k.ub.Ascending, n = l.__assign({}, this.state.currentFilters, {
                                                sortBy: t === k.ub.Descending ? Be.PurchaseDateDesc : Be.PurchaseDateAsc
                                            }), [4, this.props.getFilteredQuery(n)];
                                        case 1:
                                            return r.sent(), this.setState({
                                                currentIndex: 0,
                                                currentFilters: n,
                                                dateSortType: t,
                                                costSortType: k.ub.Default
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleSortCost = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return l.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.state.costSortType, t = e === k.ub.Default || e === k.ub.Ascending ? k.ub.Descending : k.ub.Ascending, n = l.__assign({}, this.state.currentFilters, {
                                                sortBy: t === k.ub.Descending ? Be.PriceDesc : Be.PriceAsc
                                            }), [4, this.props.getFilteredQuery(n)];
                                        case 1:
                                            return r.sent(), this.setState({
                                                currentIndex: 0,
                                                currentFilters: n,
                                                costSortType: t,
                                                dateSortType: k.ub.Default
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleMinDate = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = l.__assign({}, this.state.currentFilters, {
                                                purchasedAfter: e
                                            }), [4, this.props.getFilteredQuery(t)];
                                        case 1:
                                            return n.sent(), this.setState({
                                                currentIndex: 0,
                                                currentFilters: t
                                            }), [2]
                                    }
                                })
                            })
                        }, t.handleMaxDate = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = l.__assign({}, this.state.currentFilters, {
                                                purchasedBefore: e
                                            }), [4, this.props.getFilteredQuery(t)];
                                        case 1:
                                            return n.sent(), this.setState({
                                                currentIndex: 0,
                                                currentFilters: t
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.data.loading && !e.data.loading && this.initializeDateFilterState(e.data.currentUser.paymentTransactions.firstPurchasedAt, e.data.currentUser.paymentTransactions.lastPurchasedAt)
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.initializeDateFilterState(this.props.data.currentUser.paymentTransactions.firstPurchasedAt, this.props.data.currentUser.paymentTransactions.lastPurchasedAt)
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return d.createElement(k.Xa, {
                            fillContent: !0
                        });
                        var e = this.props.data.currentUser.paymentTransactions.edges.map(function(e) {
                            var t = e.node;
                            return d.createElement(He, l.__assign({
                                key: t.id
                            }, t))
                        });
                        return d.createElement(k.Va, null, d.createElement(k.Va, {
                            display: k.W.Flex,
                            justifyContent: k.Ua.Between,
                            flexWrap: k.Z.Wrap
                        }, d.createElement(k.Va, {
                            display: k.W.Flex,
                            flexWrap: k.Z.NoWrap,
                            margin: {
                                y: .5
                            }
                        }, d.createElement(k.Ha, null, d.createElement(k.P, {
                            cols: 6
                        }, d.createElement(k.Va, {
                            display: k.W.Flex,
                            flexDirection: k.Y.Column
                        }, d.createElement(k.V, {
                            bold: !0
                        }, Object(p.d)("Start", "TransactionHistoryTab")), d.createElement(Ve.a, {
                            defaultDate: this.state.currentFilters.purchasedAfter,
                            maxDate: this.state.currentFilters.purchasedBefore,
                            onChange: this.handleMinDate,
                            "data-test-selector": "purchased-after-date-picker-selector"
                        }))), d.createElement(k.P, {
                            cols: 6
                        }, d.createElement(k.Va, {
                            display: k.W.Flex,
                            flexDirection: k.Y.Column
                        }, d.createElement(k.V, {
                            bold: !0
                        }, Object(p.d)("End", "TransactionHistoryTab")), d.createElement(Ve.a, {
                            defaultDate: this.state.currentFilters.purchasedBefore,
                            minDate: this.state.currentFilters.purchasedAfter,
                            onChange: this.handleMaxDate,
                            "data-test-selector": "purchased-before-date-picker-selector"
                        }))))), d.createElement(k.Va, {
                            display: k.W.Flex
                        }, d.createElement(k.Va, {
                            margin: {
                                y: .5,
                                right: 1
                            },
                            display: k.W.Flex,
                            alignItems: k.f.End
                        }, d.createElement(k.z, {
                            type: k.F.Hollow,
                            linkTo: "https://www.amazon.com/gp/your-account/order-history/ref=oh_aui_search?opt=ab&search=Twitch",
                            targetBlank: !0
                        }, Object(p.d)("View Your Amazon Order History", "TransactionHistoryTab"))), d.createElement(k.Va, {
                            margin: {
                                y: .5
                            },
                            display: k.W.Flex,
                            alignItems: k.f.End
                        }, d.createElement(k.z, {
                            type: k.F.Hollow,
                            linkTo: "https://www.paypal.com/mep/dashboard",
                            targetBlank: !0
                        }, Object(p.d)("View Your PayPal Order History", "TransactionHistoryTab"))))), d.createElement(k.xb, {
                            background: k.r.Base,
                            elevation: 2,
                            margin: {
                                y: 2
                            }
                        }, d.createElement(k.Ab, {
                            alternateRows: !0
                        }, d.createElement(k.Db, null, d.createElement(k.Eb, {
                            label: Object(p.d)("Date", "TransactionHistoryTab"),
                            sorting: this.state.dateSortType,
                            onClick: this.handleSortDate,
                            "data-test-selector": "date-table-heading-selector"
                        }), d.createElement(k.Eb, {
                            label: Object(p.d)("Channel", "TransactionHistoryTab")
                        }), d.createElement(k.Eb, {
                            label: Object(p.d)("Product", "TransactionHistoryTab")
                        }), d.createElement(k.Eb, {
                            label: Object(p.d)("Price", "TransactionHistoryTab"),
                            sorting: this.state.costSortType,
                            onClick: this.handleSortCost,
                            "data-test-selector": "price-table-heading-selector"
                        }), d.createElement(k.Eb, {
                            label: Object(p.d)("Payment Method", "TransactionHistoryTab")
                        })), d.createElement(k.Bb, null, e)), !e.length && this.renderNoTransactionsMessage()), d.createElement(ze, {
                            currentPage: this.getCurrentPage(),
                            totalNumberPages: this.getTotalPages(),
                            onNext: this.handleNextPage,
                            onBack: this.handlePreviousPage,
                            onPageJump: this.handlePageJump
                        }))
                    }, t.prototype.initializeDateFilterState = function(e, t) {
                        var n = new Date,
                            r = e ? Object(se.c)(e) : new Date((new Date).getFullYear(), 0, 1),
                            a = t ? Object(se.c)(t) : new Date(n.getFullYear(), n.getMonth(), n.getDay()),
                            i = l.__assign({}, this.state.currentFilters, {
                                purchasedAfter: r,
                                purchasedBefore: a
                            });
                        this.setState({
                            currentFilters: i
                        })
                    }, t
                }(d.Component),
                Ze = Object(i.compose)(Object(a.connect)(function(e) {
                    var t = e.session;
                    return {
                        currentUserID: t.user && t.user.id || null
                    }
                }), Object(b.a)(Ye, {
                    options: function(e) {
                        return {
                            variables: {
                                first: qe,
                                after: "0",
                                filters: {
                                    userID: e.currentUserID,
                                    sortBy: Be.PurchaseDateDesc,
                                    type: We.All
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return l.__assign({}, e, {
                            getOffsetQuery: function(t, n) {
                                return e.data.fetchMore({
                                    query: Ye,
                                    variables: {
                                        first: e.data.variables.first,
                                        after: "" + t,
                                        filters: n
                                    },
                                    updateQuery: function(e, t) {
                                        return t.fetchMoreResult
                                    }
                                })
                            },
                            getFilteredQuery: function(t) {
                                return e.data.fetchMore({
                                    query: Ye,
                                    variables: {
                                        first: e.data.variables.first,
                                        after: "0",
                                        filters: t
                                    },
                                    updateQuery: function(e, t) {
                                        return t.fetchMoreResult
                                    }
                                })
                            }
                        })
                    }
                }))(Ge),
                Qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            txnHistoryTabActive: !1
                        }, t.switchToTxnTab = function() {
                            t.setState({
                                txnHistoryTabActive: !0
                            })
                        }, t.switchToPaymentMethodsTab = function() {
                            t.setState({
                                txnHistoryTabActive: !1
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? d.createElement(k.xb, {
                            background: k.r.Alt,
                            fullWidth: !0,
                            alignContent: k.e.Center
                        }, d.createElement(k.Va, {
                            margin: {
                                x: 4,
                                y: 3
                            }
                        }, d.createElement(k.V, {
                            type: k.Nb.H2
                        }, Object(p.d)("Payments", "PaymentsLandingPagePresentationComponent")), d.createElement(k.Va, {
                            margin: {
                                top: 2
                            }
                        }, d.createElement(k.zb, null, d.createElement(k.yb, {
                            active: !this.state.txnHistoryTabActive,
                            onClick: this.switchToPaymentMethodsTab
                        }, Object(p.d)("Payment Methods", "PaymentsLandingPagePresentationComponent")), d.createElement(k.yb, {
                            active: this.state.txnHistoryTabActive,
                            onClick: this.switchToTxnTab
                        }, Object(p.d)("Purchase History", "PaymentsLandingPagePresentationComponent"))), d.createElement(k.Va, {
                            fullHeight: !0,
                            fullWidth: !0,
                            margin: {
                                y: 2
                            }
                        }, this.state.txnHistoryTabActive ? d.createElement(Ze, null) : d.createElement(Ae, null))))) : (this.props.onAnonymousVisit(), d.createElement(m.a, {
                            message: Object(p.d)("You must be logged in to view this page", "PaymentsLandingPagePresentationComponent")
                        }))
                    }, t
                }(d.Component),
                Je = Object(u.compose)(Object(g.c)("PaymentsLandingPage", {
                    autoReportInteractive: !0,
                    destination: y.a.PaymentsLandingPage
                }), Object(h.a)({
                    location: f.PageviewLocation.PaymentsLandingPage
                }))(Qe);
            var Ke = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    onAnonymousVisit: function() {
                        return Object(s.e)(o.a.PaymentsLandingPage)
                    }
                }, e)
            })(Je);
            n.d(t, "PaymentsLandingPage", function() {
                return Ke
            })
        },
        e3pt: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TransactionHistoryTab_UserPaymentTransactions"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "first"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "after"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "filters"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "PaymentTransactionConnectionCriteriaInput"
                                }
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
                                        value: "paymentTransactions"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "first"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "after"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "after"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "criteria"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "filters"
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
                                                value: "pageInfo"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hasNextPage"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "firstPurchasedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "lastPurchasedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "edges"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "node"
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
                                                                value: "purchasedAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "product"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "type"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "name"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "tier"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "owner"
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
                                                                                value: "profileImageURL"
                                                                            },
                                                                            arguments: [{
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "width"
                                                                                },
                                                                                value: {
                                                                                    kind: "IntValue",
                                                                                    value: "50"
                                                                                }
                                                                            }],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "login"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "grossAmount"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "currency"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "quantity"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "recipient"
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
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "paymentMethod"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "provider"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "paymentType"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cardType"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "lastFour"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 526
                }
            };
            n.loc.source = {
                body: "query TransactionHistoryTab_UserPaymentTransactions($first: Int $after: Cursor $filters: PaymentTransactionConnectionCriteriaInput!) {\ncurrentUser {\nid\npaymentTransactions(first: $first after: $after criteria: $filters) {\npageInfo {\nhasNextPage\n}\ntotalCount\nfirstPurchasedAt\nlastPurchasedAt\nedges {\ncursor\nnode {\nid\npurchasedAt\nproduct {\ntype\nname\ntier\nowner {\nid\nprofileImageURL(width: 50)\nlogin\n}\n}\ngrossAmount\ncurrency\nquantity\nisGift\nrecipient{\nid\nlogin\n}\npaymentMethod {\nprovider\npaymentType\ncardType\nlastFour\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        enyl: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PaymentMethodsTab_UserPaymentMethods"
                    },
                    variableDefinitions: [],
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
                                        value: "paymentMethods"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "provider"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "paymentType"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "billingEmail"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "cardType"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "lastFour"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expirationMonth"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expirationYear"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "extMethodID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "purchaseProfiles"
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
                                                        value: "willRenew"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "expiresAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewalPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewalCurrency"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "productType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "subscriptionBenefit"
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
                                                                value: "tier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "user"
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
                                                                        value: "displayName"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "profileImageURL"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "50"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "login"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "recurringPaymentDetails"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "willRenew"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "expiresAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewalPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewalPriceDivisor"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewalCurrency"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "productType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "subscriptionBenefit"
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
                                                                value: "tier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "user"
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
                                                                        value: "displayName"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "profileImageURL"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "50"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "login"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "paymentMethodConfigs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "recurly"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "braintreeClientAuthorization"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "payWithAmazonConfigs"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "clientID"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isProduction"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "sellerID"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "publicKey"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "xsolla"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "iframeURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "zuora"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "externalAccountID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hostedPageID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hostedPageURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "publicKey"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tenantID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "token"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 794
                }
            };
            n.loc.source = {
                body: "query PaymentMethodsTab_UserPaymentMethods {\ncurrentUser {\nid\npaymentMethods {\nprovider\npaymentType\nbillingEmail\ncardType\nlastFour\nexpirationMonth\nexpirationYear\nextMethodID\npurchaseProfiles {\nid\nwillRenew\nexpiresAt\nrenewalPrice\nrenewalCurrency\nproductType\nsubscriptionBenefit {\nid\ntier\nuser {\nid\ndisplayName\nprofileImageURL(width: 50)\nlogin\n}\n}\n}\nrecurringPaymentDetails {\nwillRenew\nexpiresAt\nrenewalPrice\nrenewalPriceDivisor\nrenewalCurrency\nproductType\nsubscriptionBenefit {\nid\ntier\nuser {\nid\ndisplayName\nprofileImageURL(width: 50)\nlogin\n}\n}\n}\n}\npaymentMethodConfigs {\nrecurly {\nbraintreeClientAuthorization\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\n}\nxsolla {\niframeURL\n}\nzuora {\nexternalAccountID\nhostedPageID\nhostedPageURL\npublicKey\nsignature\ntenantID\ntoken\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gTu3: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.Recipient = 1] = "Recipient", e[e.Sender = 2] = "Sender"
                }(r || (r = {}))
        },
        h7rm: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DeletePaymentMethodModal_DeleteDefaultMethod"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DeleteDefaultPaymentMethodInput"
                                }
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
                                value: "deleteDefaultPaymentMethod"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "updatedAt"
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
                    end: 155
                }
            };
            n.loc.source = {
                body: "mutation DeletePaymentMethodModal_DeleteDefaultMethod($input: DeleteDefaultPaymentMethodInput!) {\ndeleteDefaultPaymentMethod(input: $input) {\nupdatedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        i6WW: function(e, t, n) {
            "use strict";
            var r = n("/7QA"),
                a = n("RcPG"),
                i = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
                o = new RegExp("(?:^|\\s)(?:https?:\\/\\/)?(?:www\\.)?twitch\\.tv\\/(\\w+)\\/clip\\/(\\w+)(?:$|\\s)?");
            var s = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?");
            n.d(t, "a", function() {
                return l
            });
            var c = /^(?:(https?:\/\/)?((?:[\w#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./#%&()\-+=:?~]*)?))$/;

            function l(e, t) {
                var n = e.match(c);
                if (!n) return null;
                if (t.blockLinks) return {
                    type: a.a.Text,
                    content: " <" + Object(r.d)("deleted link", "CreateMessageData") + "> "
                };
                var l = n[1],
                    d = n[2],
                    u = "" + (l || "https://") + d;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = i.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = o.test(e);
                        return t || n
                    }(u)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(i);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(o);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(u);
                    return {
                        type: a.a.ClipLink,
                        content: {
                            slug: p,
                            url: u,
                            displayText: e
                        }
                    }
                }
                if (t.parseVods && function(e) {
                        return void 0 === e && (e = ""), s.test(e)
                    }(u)) {
                    var m = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(s);
                        return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                    }(u);
                    return {
                        type: a.a.VideoLink,
                        content: {
                            id: m,
                            url: u,
                            displayText: e
                        }
                    }
                }
                return {
                    type: a.a.Link,
                    content: {
                        displayText: e,
                        url: u
                    }
                }
            }
        },
        iSjI: function(e, t, n) {
            e.exports = n.p + "assets/visa-0862ac17dccf1c7a5a22.svg"
        },
        "mo/2": function(e, t, n) {},
        o3lI: function(e, t, n) {},
        oQBz: function(e, t, n) {
            e.exports = n.p + "assets/xsolla_1x-920aa1ba72411e5fe0aa.png"
        },
        oe5X: function(e, t, n) {
            "use strict";
            var r = n("XmgI"),
                a = n("RcPG"),
                i = n("0FG4"),
                o = n("i6WW"),
                s = n("gTu3"),
                c = n("6j5V"),
                l = /^(['"*([{</]*)@((?:[^\u0000-\u007F]|[\w-])+)/;

            function d(e, t) {
                if (!t) return !1;
                var n = t.displayName,
                    r = t.login;
                return e === n || e.toLowerCase() === r
            }

            function u(e, t) {
                void 0 === t && (t = {});
                var n = t.cheers,
                    u = t.emotes,
                    y = t.links,
                    f = t.mentions,
                    g = m(e),
                    b = "",
                    v = 0;
                return p(g.reduce(function(e, t, p) {
                    if (h(t)) return b = "", e;
                    if (0 === b.length && (v = p), b += t, p !== g.length - 1 && !h(g[p + 1])) return e;
                    var m = u && Object(i.c)(b, v, u);
                    if (m) return e.concat(m);
                    var k = n && Object(r.d)(b, n);
                    if (k) return e.concat(k);
                    var E = y && Object(o.a)(b, y);
                    if (E) return e.concat(E);
                    var P = f && function(e, t) {
                        var n = e.match(l);
                        if (!n) return d(e, t.sessionUser) ? [{
                            type: a.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var r = [],
                            i = n[1],
                            o = n[2],
                            u = e.slice(n[0].length);
                        i.length && r.push(Object(c.a)(i));
                        var p = s.a.Default;
                        return d(o, t.sessionUser) ? p = s.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (p = s.a.Sender), r.push({
                            type: a.a.Mention,
                            content: {
                                recipient: o,
                                currentUserMentionRelation: p
                            }
                        }), u.length && r.push(Object(c.a)(u)), r
                    }(b, f);
                    return P ? e.concat([P]) : e.concat(Object(c.a)(b))
                }, []))
            }

            function p(e) {
                return e.reduce(function(e, t, n) {
                    return 0 === n ? [].concat.call(e, t) : [].concat.call(e, Object(c.a)(" "), t)
                }, []).reduce(function(e, t, n) {
                    if (0 === n) return e.concat(t);
                    var r = e[e.length - 1];
                    return t.type === a.a.Text && r.type === a.a.Text ? (r.content = "" + r.content + t.content, e) : e.concat(t)
                }, [])
            }

            function m(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g) || []
            }

            function h(e) {
                return /\s/.test(e)
            }
            n.d(t, "a", function() {
                return u
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return m
            })
        },
        q8H6: function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_2x-74742ec8600998675dc5.png"
        },
        uCCD: function(e, t, n) {},
        uReR: function(e, t, n) {
            e.exports = n.p + "assets/amex-0e89bed815722eb64119.svg"
        },
        "vE+g": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_1x-27fb4921a874a8f4d84b.png"
        }
    }
]);