(window.webpackJsonp = window.webpackJsonp || []).push([
    [54], {
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
                return o
            }), n.d(t, "b", function() {
                return l
            });
            var r, a = n("RcPG"),
                i = n("a1OF");
            ! function(e) {
                e[e.Position = 0] = "Position", e[e.Token = 1] = "Token"
            }(r || (r = {}));
            var s = "0";

            function o(e, t, n) {
                var s = n.type === r.Position ? t : e,
                    o = n.map[s];
                if (o) {
                    var c = function(e, t) {
                        return {
                            images: {
                                sources: {
                                    "1x": Object(i.d)(t, 1),
                                    "2x": Object(i.d)(t, 2),
                                    "4x": Object(i.d)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, o.id);
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
                        for (var i = 0, o = a.emotes; i < o.length; i++) {
                            var l = o[i];
                            if (l && l.id && l.token)
                                for (var u = 0, d = c[l.token] || [l.token]; u < d.length; u++) {
                                    var p = d[u];
                                    t[p] && a.id === s || (t[p] = {
                                        id: l.id,
                                        token: p
                                    })
                                }
                        }
                }
                return t
            }
        },
        "1OTy": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/MKj"),
                s = n("fvjX"),
                o = n("/0dD"),
                c = n("XDQu"),
                l = n("Ue10"),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(l.Ma, {
                            label: this.props.label,
                            type: this.props.type,
                            src: this.props.src,
                            alt: this.props.alt,
                            srcSet: this.srcSet,
                            value: this.props.value,
                            onChange: this.props.onChange,
                            checked: this.props.checked
                        })
                    }, Object.defineProperty(t.prototype, "srcSet", {
                        get: function() {
                            return this.props.darkModeEnabled && this.props.darkSrcSet || this.props.srcSet
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component);
            var d = Object(s.compose)(Object(i.connect)(function(e) {
                return {
                    darkModeEnabled: Object(c.a)(e) === o.a.Dark
                }
            }))(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        "1nFn": function(e, t, n) {},
        "2DIU": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_1x-4f76ba5fbbaca5a76d41.png"
        },
        "2ORI": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_2x-302cb9125ccffd2d356d.png"
        },
        "2xEe": function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_1x-29d0a02f9cc67088594b.png"
        },
        "5gJ6": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/MKj"),
                s = n("/7QA"),
                o = n("2DIU"),
                c = n.n(o),
                l = n("TSpM"),
                u = n.n(l),
                d = n("vE+g"),
                p = n.n(d),
                m = n("/Z6v"),
                h = n.n(m),
                y = n("WJ6U"),
                f = n.n(y),
                g = n("uReR"),
                b = n.n(g),
                v = n("SPyc"),
                E = n.n(v),
                k = n("bOWA"),
                P = n.n(k),
                C = n("KL9a"),
                w = n.n(C),
                T = n("iSjI"),
                j = n.n(T),
                _ = n("bQeB"),
                S = n.n(_),
                x = n("HvcU"),
                O = n.n(x),
                D = n("GA+j"),
                F = n.n(D),
                M = n("FBRg"),
                N = n.n(M),
                A = n("2xEe"),
                I = n.n(A),
                R = n("q8H6"),
                U = n.n(R),
                z = n("oQBz"),
                B = n.n(z),
                Y = n("PwAB"),
                L = n.n(Y),
                W = n("/0dD"),
                X = n("DMoW"),
                H = n("XDQu"),
                V = n("Ue10"),
                G = (n("88jh"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if ("prime" === this.props.paymentProvider) return a.createElement(V.tb, {
                            asset: V.ub.LogoTwitchPrime,
                            width: 66,
                            height: 30,
                            type: V.vb.Brand
                        });
                        var e = this.imageSource,
                            t = e.src,
                            n = e.alt,
                            r = e.srcSet;
                        return a.createElement(V.Ya, {
                            className: "payment-method-image"
                        }, a.createElement(V.S, {
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
                                        src: f.a,
                                        alt: Object(s.d)("Android icon", "PaymentMethodImage")
                                    }
                            }
                            var t = this.props.paymentInstrumentType ? this.props.paymentInstrumentType.toUpperCase() : void 0,
                                n = this.props.cardType ? this.props.cardType.toUpperCase() : void 0;
                            switch (t) {
                                case X.F.CREDIT_CARD:
                                    switch (n) {
                                        case X.E.AMERICAN_EXPRESS:
                                            return {
                                                src: b.a,
                                                alt: Object(s.d)("American Express", "PaymentMethodImage")
                                            };
                                        case X.E.DISCOVER:
                                            return {
                                                src: E.a,
                                                alt: Object(s.d)("Discover", "PaymentMethodImage")
                                            };
                                        case X.E.MASTERCARD:
                                            return {
                                                src: this.props.darkModeEnabled ? w.a : P.a,
                                                alt: Object(s.d)("Mastercard", "PaymentMethodImage")
                                            };
                                        case X.E.VISA:
                                            return {
                                                src: j.a,
                                                alt: Object(s.d)("Visa", "PaymentMethodImage")
                                            };
                                        default:
                                            return {
                                                src: S.a,
                                                srcSet: {
                                                    "1x": S.a,
                                                    "2x": O.a
                                                },
                                                alt: e
                                            }
                                    }
                                case X.F.AMAZON:
                                    return {
                                        src: this.props.darkModeEnabled ? p.a : c.a,
                                        srcSet: this.props.darkModeEnabled ? {
                                            "1x": p.a,
                                            "2x": h.a
                                        } : {
                                            "1x": c.a,
                                            "2x": u.a
                                        },
                                        alt: Object(s.d)("Amazon Pay", "PaymentMethodImage")
                                    };
                                case X.F.PAYPAL:
                                    return {
                                        src: this.props.darkModeEnabled ? I.a : F.a,
                                        srcSet: this.props.darkModeEnabled ? {
                                            "1x": I.a,
                                            "2x": U.a
                                        } : {
                                            "1x": F.a,
                                            "2x": N.a
                                        },
                                        alt: Object(s.d)("Paypal", "PaymentMethodImage")
                                    };
                                default:
                                    return {
                                        src: S.a,
                                        srcSet: {
                                            "1x": S.a,
                                            "2x": O.a
                                        },
                                        alt: e
                                    }
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component));
            var q = Object(i.connect)(function(e) {
                return {
                    darkModeEnabled: Object(H.a)(e) === W.a.Dark
                }
            })(G);
            n.d(t, !1, function() {
                return G
            }), n.d(t, "a", function() {
                return q
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
        AVF4: function(e, t, n) {
            e.exports = n.p + "assets/credit_cards_1x-0c57bd2e9d4cd4bb8474.png"
        },
        BIez: function(e, t, n) {
            e.exports = n.p + "assets/credit_cards_2x-051201f07d7c83cdf807.png"
        },
        "Bd+v": function(e, t, n) {},
        D8NC: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_1x-94c97f413ee6005ab1a1.png"
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
                s = n("q1tI"),
                o = n("Ue10"),
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
                        return s.createElement(o.Ya, {
                            className: "date-picker",
                            "data-a-target": "date-picker"
                        }, s.createElement(o.Sa, r.__assign({
                            type: o.Ua.Text,
                            refDelegate: this.setInputRef
                        }, e)), s.createElement("div", {
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
                }(s.Component));
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
                return s
            }), n.d(t, "d", function() {
                return o
            });
            var r = n("NAv5"),
                a = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function i(e, t) {
                return Object(r.format)(e, t)
            }

            function s(e) {
                return Object(r.parse)(e)
            }

            function o(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var r = parseInt(n[0], 10),
                    a = parseInt(n[1].substring(0, 2), 10),
                    i = n[1].substring(n[1].length - 2);
                if (12 === r && "am" === i && (r = 0), "pm" === i && r < 12 && (r += 12), isNaN(r) || r < 0 || r > 23 || isNaN(a) || a < 0 || a > 59) throw new Error("invalid time string: " + e);
                var s = t || new Date;
                return s.setHours(r, a), s
            }
        },
        HvcU: function(e, t, n) {
            e.exports = n.p + "assets/generic_credit_card_2x-9e855c7d5c5359ac9208.png"
        },
        IRK4: function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_1x-894b335a3c74ebaba75f.png"
        },
        KL9a: function(e, t, n) {
            e.exports = n.p + "assets/mastercard_dark-a85ba185886a8899fef1.svg"
        },
        KRuc: function(e, t, n) {
            e.exports = n.p + "assets/paypal_2x-36ebff55eec001d935d0.png"
        },
        KjOM: function(e, t, n) {},
        PwAB: function(e, t, n) {
            e.exports = n.p + "assets/xsolla_2x-b8ef30f34626976fddc4.png"
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
                s = n("/7QA"),
                o = n("Ue10"),
                c = n("5gJ6"),
                l = (n("KjOM"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.Fb, {
                            className: this.isExpired ? "payment-method-display--expired" : "",
                            display: o.X.Flex,
                            justifyContent: this.props.justifyContent || o.Xa.Between,
                            flexWrap: o.Ba.Wrap,
                            fullWidth: !0
                        }, i.createElement(o.Ya, {
                            alignItems: o.f.Center,
                            display: o.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(c.a, {
                            paymentInstrumentType: this.props.paymentType,
                            cardType: this.props.cardType || void 0,
                            paymentProvider: this.props.provider
                        }), this.renderLastFour()), i.createElement(o.Ya, {
                            display: o.X.Flex,
                            justifyContent: o.Xa.Center,
                            flexDirection: o.Aa.Column
                        }, this.renderBillingEmail(), this.renderExpirationDate()))
                    }, t.prototype.renderLastFour = function() {
                        return this.props.lastFour ? i.createElement(o.Ya, {
                            display: o.X.Flex,
                            margin: {
                                x: 2
                            }
                        }, i.createElement(o.W, {
                            bold: !0
                        }, Object(s.d)("Ending in {lastFour}", {
                            lastFour: this.props.lastFour
                        }, "PaymentMethodDisplay"))) : null
                    }, t.prototype.renderExpirationDate = function() {
                        var e = this.zeroIndexedMonth,
                            t = this.props.expirationYear;
                        if (void 0 === e || !t) return null;
                        var n = new Date(t, e),
                            r = "";
                        return r = this.isExpired ? Object(s.d)("Expired {expirationDate}", {
                            expirationDate: Object(s.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay") : Object(s.d)("Expires {expirationDate}", {
                            expirationDate: Object(s.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay"), i.createElement(o.Ya, {
                            alignItems: o.f.Center,
                            display: o.X.Flex,
                            justifyContent: o.Xa.End
                        }, i.createElement(o.W, {
                            ellipsis: !0,
                            color: o.O.Alt2,
                            bold: this.isExpired
                        }, r))
                    }, t.prototype.renderBillingEmail = function() {
                        return this.props.billingEmail ? i.createElement(o.Ya, {
                            alignItems: o.f.Center,
                            display: o.X.Flex,
                            justifyContent: o.Xa.End
                        }, i.createElement(o.W, {
                            ellipsis: !0,
                            color: o.O.Alt2
                        }, this.props.billingEmail)) : null
                    }, Object.defineProperty(t.prototype, "isExpired", {
                        get: function() {
                            var e = this.zeroIndexedMonth,
                                t = this.props.expirationYear;
                            if (void 0 === e || !t) return !1;
                            var n = Object(a.startOfMonth)(new Date),
                                r = new Date(t, e, 1);
                            return !!Object(a.isBefore)(r, n)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "zeroIndexedMonth", {
                        get: function() {
                            if (this.props.expirationMonth) return this.props.expirationMonth - 1
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
        ZiR0: function(e, t, n) {
            e.exports = n.p + "assets/paypal_1x-2a610ceedc14dc7f9673.png"
        },
        a1OF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "d", function() {
                return y
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("oe5X"),
                s = n("0FG4"),
                o = n("kRBY"),
                c = n("60o1"),
                l = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                u = {};

            function d(e, t, n, a, i, s, o) {
                void 0 === i && (i = !1), void 0 === s && (s = !1), void 0 === o && (o = !1);
                var l = Object(c.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: r.__assign({}, l, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || p(t.userID)
                    }),
                    messageParts: m(e, t.emotes || {}, t.bits, n, a, t.username),
                    deleted: i,
                    banned: o,
                    hidden: s,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof u[e] && (u[e] = Math.floor(Math.random() * t)), l[u[e]]
            }

            function m(e, t, n, r, c, l) {
                var u = Object(o.e)(a.p.store.getState()),
                    d = {
                        cheers: n ? r : void 0,
                        emotes: {
                            type: s.a.Position,
                            map: t
                        },
                        links: {
                            blockLinks: c,
                            parseClips: !0,
                            parseVods: !0
                        },
                        mentions: {
                            senderLogin: l,
                            sessionUser: u
                        }
                    };
                return Object(i.a)(e, d)
            }

            function h(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
            }

            function y(e, t) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
            }
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("kRBY"),
                s = function() {
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
                            var a, i, s, o;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), s = r.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, s)];
                                    case 1:
                                        return o = c.sent(), [4, this.constructLegacyAPIResponse(o)];
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
                        return new URL(e, a.p.config.apiBaseURL)
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
                        var n = a.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var s = Object(i.e)(n);
                        return s && (r.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (r["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        bOWA: function(e, t, n) {
            e.exports = n.p + "assets/mastercard-280a786ec3225a087428.svg"
        },
        bQeB: function(e, t, n) {
            e.exports = n.p + "assets/generic_credit_card_1x-a6b9cd93075728ab4114.png"
        },
        bvmA: function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_2x-5364f28c059af7303d67.png"
        },
        csmi: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_1x-5810bf2a8f8185a1a905.png"
        },
        cz4h: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("/MKj"),
                i = n("fvjX"),
                s = n("1/iK"),
                o = n("y5D0"),
                c = n("kRBY"),
                l = n("mrSG"),
                u = n("q1tI"),
                d = n("oJmH"),
                p = n("/7QA"),
                m = n("ZDlU"),
                h = n("V+GM"),
                y = n("NvVO"),
                f = n("2xye"),
                g = n("GnwI"),
                b = n("yR8l"),
                v = n("f00E"),
                E = n("DMoW");
            ! function(e) {
                e.Recurly = "recurly", e.Xsolla = "xsolla", e.Zuora = "zuora", e.GoogleIAB = "google_iab", e.Prime = "prime", e.Paypal = "paypal", e.LegacyPaypal = "paypal_rt"
            }(r || (r = {}));
            var k = p.k.withCategory("[payments]"),
                P = n("Ue10"),
                C = n("aCAx"),
                w = n("b6Yk"),
                T = n("85n/");
            var j = n("D8NC"),
                _ = n.n(j),
                S = n("yrda"),
                x = n.n(S),
                O = n("csmi"),
                D = n.n(O),
                F = n("2ORI"),
                M = n.n(F),
                N = n("AVF4"),
                A = n.n(N),
                I = n("BIez"),
                R = n.n(I),
                U = n("ZiR0"),
                z = n.n(U),
                B = n("KRuc"),
                Y = n.n(B),
                L = n("IRK4"),
                W = n.n(L),
                X = n("bvmA"),
                H = n.n(X),
                V = n("sV2v"),
                G = n("1OTy"),
                q = n("/0dD"),
                K = n("XDQu"),
                Z = n("6fcp"),
                Q = (n("1nFn"), {
                    light: "#000",
                    dark: "#fff"
                }),
                J = {
                    light: "#a49fad",
                    dark: "#898395"
                },
                $ = function() {
                    return {
                        cvv: !1,
                        first_name: !1,
                        last_name: !1,
                        month: !1,
                        number: !1,
                        year: !1
                    }
                },
                ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            firstName: "",
                            lastName: "",
                            recurlyReady: !1,
                            updatingPaymentMethod: !1,
                            errorMessage: "",
                            errorState: $()
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
                            if (e.code === Z.a.Validation || e.code === Z.a.InvalidParameter) {
                                var n = $();
                                e.fields && e.fields.forEach(function(e) {
                                    n[e] = !0
                                }), t.setState({
                                    errorMessage: Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCard"),
                                    errorState: n
                                })
                            } else e.code && t.setState({
                                errorMessage: Object(p.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCard"),
                                errorState: $()
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
                        return u.createElement("div", null, !this.state.recurlyReady && u.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, u.createElement(P.ab, {
                            fillContent: !0
                        })), u.createElement(P.Ya, {
                            display: this.state.recurlyReady ? P.X.Block : P.X.Hide,
                            margin: {
                                y: 2
                            }
                        }, this.state.errorMessage && u.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(P.W, {
                            color: P.O.Error
                        }, this.state.errorMessage)), u.createElement("form", {
                            className: "recurly-form",
                            ref: function(t) {
                                return e.form = t
                            }
                        }, u.createElement(P.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(P.Ea, {
                            id: "recurly-name",
                            label: Object(p.d)("Name", "RecurlyCardComponent")
                        }, u.createElement("div", {
                            id: "recurly-name"
                        }, u.createElement(P.Ja, {
                            gutterSize: P.Ka.Medium
                        }, u.createElement(P.P, {
                            cols: 6
                        }, u.createElement(P.Sa, {
                            id: "recurly-first-name",
                            type: P.Ua.Text,
                            placeholder: Object(p.d)("First Name", "RecurlyCardComponent"),
                            value: this.state.firstName,
                            onChange: this.handleFirstName,
                            error: this.state.errorState.first_name
                        }), u.createElement("input", {
                            type: "hidden",
                            "data-recurly": "first_name",
                            value: this.state.firstName
                        })), u.createElement(P.P, {
                            cols: 6
                        }, u.createElement(P.Sa, {
                            id: "recurly-last-name",
                            type: P.Ua.Text,
                            placeholder: Object(p.d)("Last Name", "RecurlyCardComponent"),
                            value: this.state.lastName,
                            onChange: this.handleLastName,
                            error: this.state.errorState.last_name
                        }), u.createElement("input", {
                            type: "hidden",
                            "data-recurly": "last_name",
                            value: this.state.lastName
                        })))))), u.createElement(P.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(P.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Credit Card", "RecurlyCardComponent")
                        }, u.createElement("div", {
                            id: "recurly-credit-card"
                        }, u.createElement(P.Ja, {
                            gutterSize: P.Ka.Medium
                        }, u.createElement(P.P, {
                            cols: 8
                        }, u.createElement("div", {
                            id: "recurly-number",
                            "data-recurly": "number",
                            className: this.state.errorState.number ? "recurly-error" : ""
                        })), u.createElement(P.P, {
                            cols: 4
                        }, u.createElement("div", {
                            id: "recurly-cvv",
                            "data-recurly": "cvv",
                            className: this.state.errorState.cvv ? "recurly-error" : ""
                        })))))), u.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, u.createElement(P.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Expiration Date", "RecurlyCardComponent")
                        }, u.createElement("div", {
                            id: "recurly-credit-card"
                        }, u.createElement(P.Ja, {
                            gutterSize: P.Ka.Medium
                        }, u.createElement(P.P, {
                            cols: 6
                        }, u.createElement("div", {
                            id: "recurly-month",
                            "data-recurly": "month",
                            className: this.state.errorState.month ? "recurly-error" : ""
                        })), u.createElement(P.P, {
                            cols: 6
                        }, u.createElement("div", {
                            id: "recurly-year",
                            "data-recurly": "year",
                            className: this.state.errorState.year ? "recurly-error" : ""
                        })))))), u.createElement("input", {
                            type: "hidden",
                            name: "recurly-country",
                            "data-recurly": "country",
                            value: "US"
                        }), u.createElement("input", {
                            type: "hidden",
                            name: "recurly-token",
                            "data-recurly": "token"
                        }), u.createElement(P.z, {
                            onClick: this.handleSubmit,
                            state: this.state.updatingPaymentMethod ? P.E.Loading : P.E.Default,
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
                                        fontColor: this.props.darkModeEnabled ? Q.dark : Q.light,
                                        placeholder: {
                                            color: this.props.darkModeEnabled ? J.dark : J.light
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
                }(u.Component);
            var te, ne = Object(a.connect)(function(e) {
                    return {
                        darkModeEnabled: Object(K.a)(e) === q.a.Dark
                    }
                })(ee),
                re = (n("Bd+v"), function() {
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
                        return this.state.amazonScriptLoaded ? u.createElement(P.Ya, {
                            padding: {
                                top: 2,
                                bottom: 1
                            },
                            textAlign: P.Sb.Center
                        }, u.createElement(P.Ya, {
                            display: this.state.walletLoaded ? P.X.Hide : P.X.Block
                        }, u.createElement("div", {
                            id: "pay-with-amazon-container__button"
                        })), u.createElement(P.Ya, {
                            display: this.state.walletLoaded ? P.X.Block : P.X.Hide
                        }, u.createElement("div", {
                            id: "pay-with-amazon-container__wallet",
                            className: "pay-with-amazon-container__wallet"
                        }), u.createElement(P.Ya, {
                            padding: {
                                top: 1
                            }
                        }, u.createElement(P.z, {
                            onClick: this.handleUpdateCardClick,
                            state: this.state.updatingPaymentMethod ? P.E.Loading : P.E.Default,
                            disabled: this.state.updatingPaymentMethod
                        }, Object(p.d)("Update Card", "PayWithAmazon"))))) : u.createElement(P.ab, null)
                    }, t
                }(u.Component)),
                ae = function(e) {
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
                        return this.state.paypalConfigured ? u.createElement(P.Ya, {
                            margin: {
                                y: 2
                            }
                        }, u.createElement(P.z, {
                            onClick: this.handleClick,
                            state: this.state.updatingPaymentMethod ? P.E.Loading : P.E.Default,
                            disabled: this.state.updatingPaymentMethod
                        }, Object(p.d)("Update with PayPal", "PayPal"))) : u.createElement(P.Ya, {
                            margin: {
                                y: 2
                            }
                        }, u.createElement(P.ab, null))
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
                }(u.Component);
            ! function(e) {
                e.CreditCard = "credit-card", e.AmazonPay = "amazon-pay", e.PayPal = "paypal"
            }(te || (te = {}));
            var ie, se, oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedOption: te.CreditCard
                        }, t.handleOptionChange = function(e) {
                            t.setState({
                                selectedOption: e.currentTarget.value
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(u.Fragment, null, u.createElement(V.a, null), u.createElement(P.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(P.W, {
                            type: P.Wb.H4,
                            bold: !0
                        }, Object(p.d)("Payment Option", "RecurlyCardWrapper"))), u.createElement(P.Ja, {
                            gutterSize: P.Ka.Small
                        }, u.createElement(P.P, {
                            cols: {
                                default: 6,
                                sm: 3
                            }
                        }, u.createElement(P.Ya, {
                            margin: {
                                bottom: .5
                            }
                        }, u.createElement(G.a, {
                            label: this.creditCardText,
                            type: P.Na.Radio,
                            src: A.a,
                            alt: this.creditCardText,
                            srcSet: {
                                "1x": A.a,
                                "2x": R.a
                            },
                            value: te.CreditCard,
                            checked: this.state.selectedOption === te.CreditCard,
                            onChange: this.handleOptionChange
                        }))), !this.disableAmazonPay && u.createElement(P.P, {
                            cols: {
                                default: 6,
                                sm: 3
                            }
                        }, u.createElement(P.Ya, {
                            margin: {
                                bottom: .5
                            }
                        }, u.createElement(G.a, {
                            label: this.amazonPayText,
                            type: P.Na.Radio,
                            src: _.a,
                            alt: this.amazonPayText,
                            srcSet: {
                                "1x": _.a,
                                "2x": x.a
                            },
                            darkSrcSet: {
                                "1x": D.a,
                                "2x": M.a
                            },
                            value: te.AmazonPay,
                            checked: this.state.selectedOption === te.AmazonPay,
                            onChange: this.handleOptionChange
                        }))), !this.disablePayPal && u.createElement(P.P, {
                            cols: {
                                default: 6,
                                sm: 3
                            }
                        }, u.createElement(P.Ya, {
                            margin: {
                                bottom: .5
                            }
                        }, u.createElement(G.a, {
                            label: this.payPalText,
                            type: P.Na.Radio,
                            src: z.a,
                            alt: this.payPalText,
                            srcSet: {
                                "1x": z.a,
                                "2x": Y.a
                            },
                            darkSrcSet: {
                                "1x": W.a,
                                "2x": H.a
                            },
                            value: te.PayPal,
                            checked: this.state.selectedOption === te.PayPal,
                            onChange: this.handleOptionChange
                        })))), u.createElement(P.Ya, {
                            display: this.state.selectedOption === te.CreditCard ? P.X.Block : P.X.Hide
                        }, u.createElement(ne, {
                            publicKey: this.props.config.publicKey,
                            updatePaymentMethod: this.props.updatePaymentMethod
                        })), u.createElement(P.Ya, {
                            display: this.state.selectedOption === te.AmazonPay ? P.X.Block : P.X.Hide
                        }, u.createElement(re, {
                            clientID: this.props.config.payWithAmazonConfigs.clientID,
                            isProduction: this.props.config.payWithAmazonConfigs.isProduction,
                            sellerID: this.props.config.payWithAmazonConfigs.sellerID,
                            updatePaymentMethod: this.props.updatePaymentMethod
                        })), u.createElement(P.Ya, {
                            display: this.state.selectedOption === te.PayPal ? P.X.Block : P.X.Hide
                        }, u.createElement(ae, {
                            publicKey: this.props.config.publicKey,
                            braintreeClientAuthorization: this.props.config.braintreeClientAuthorization,
                            updatePaymentMethod: this.props.updatePaymentMethod
                        })))
                    }, Object.defineProperty(t.prototype, "creditCardText", {
                        get: function() {
                            return Object(p.d)("Credit Card", "RecurlyPaymentMethod")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "amazonPayText", {
                        get: function() {
                            return Object(p.d)("Amazon Pay", "RecurlyPaymentMethod")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "payPalText", {
                        get: function() {
                            return Object(p.d)("PayPal", "RecurlyPaymentMethod")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "disablePayPal", {
                        get: function() {
                            return !this.props.config.braintreeClientAuthorization
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "disableAmazonPay", {
                        get: function() {
                            return !this.props.config.payWithAmazonConfigs.clientID
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(u.Component),
                ce = n("/jfp"),
                le = n.n(ce),
                ue = n("HGFl");
            ! function(e) {
                e.Tier1 = "1000", e.Tier2 = "2000", e.Tier3 = "3000"
            }(se || (se = {}));
            var de, pe = ((ie = {})[se.Tier1] = function() {
                return Object(p.d)("Tier 1", "SubscriptionTier")
            }, ie[se.Tier2] = function() {
                return Object(p.d)("Tier 2", "SubscriptionTier")
            }, ie[se.Tier3] = function() {
                return Object(p.d)("Tier 3", "SubscriptionTier")
            }, ie);
            ! function(e) {
                e.TOTAL_SUB_PRICE_TEXT = "payment-method-card__total-sub-price-text", e.DISPLAY_NAME_TEXT = "subscription-rows__display-name-text", e.TIER_TEXT = "subscription-rows__tier-text", e.COST_TEXT = "subscription-rows__cost-text", e.RENEWAL_DATE_TEXT = "subscription-rows__renewal-date-text"
            }(de || (de = {}));
            var me, he = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showingMore: !1
                        }, t.renderNoRenewingSubscriptionsMessage = function() {
                            return u.createElement(P.Fb, {
                                alignItems: P.f.Center,
                                background: P.r.Base,
                                borderBottom: !0,
                                borderLeft: !0,
                                borderRight: !0,
                                display: P.X.Flex,
                                justifyContent: P.Xa.Center,
                                padding: {
                                    x: 2,
                                    y: 3
                                }
                            }, u.createElement(P.W, {
                                color: P.O.Alt2
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
                        return u.createElement(u.Fragment, null, u.createElement(P.Fb, {
                            borderLeft: !0,
                            borderRight: !0,
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, u.createElement(P.W, {
                            bold: !0,
                            color: P.O.Alt2,
                            type: P.Wb.P,
                            "data-test-selector": de.TOTAL_SUB_PRICE_TEXT
                        }, this.numOfSubscriptionsCopy, " (", this.pricePerMonth, ")")), u.createElement(P.Fb, {
                            background: P.r.Base,
                            border: !0,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, t.map(function(e, n) {
                            var r = "";
                            return r = e.willRenew ? Object(p.d)("Renews {subExpirationDate, date, short}", {
                                subExpirationDate: Object(ue.c)(e.expiresAt)
                            }, "SubscriptionRows") : Object(p.d)("Expires {subExpirationDate, date, short}", {
                                subExpirationDate: Object(ue.c)(e.expiresAt)
                            }, "SubscriptionRows"), u.createElement(P.Fb, {
                                borderBottom: n !== t.length - 1,
                                fullWidth: !0,
                                key: e.id,
                                padding: {
                                    y: 1
                                }
                            }, u.createElement(P.Ja, null, u.createElement(P.P, {
                                cols: 4
                            }, u.createElement(P.Ya, {
                                display: P.X.Flex,
                                alignItems: P.f.Center
                            }, u.createElement(P.U, {
                                to: e.subscriptionBenefit && e.subscriptionBenefit.user ? "/" + e.subscriptionBenefit.user.login : void 0
                            }, u.createElement(P.q, {
                                alt: "turbo" === e.productType ? "turbo" : e.subscriptionBenefit && e.subscriptionBenefit.user && e.subscriptionBenefit.user.displayName ? e.subscriptionBenefit.user.displayName : "",
                                src: "turbo" === e.productType ? le.a : e.subscriptionBenefit && e.subscriptionBenefit.user ? e.subscriptionBenefit.user.profileImageURL : void 0,
                                size: 40
                            })), u.createElement(P.Ya, {
                                padding: {
                                    left: 1
                                }
                            }, u.createElement(P.W, {
                                "data-test-selector": de.DISPLAY_NAME_TEXT,
                                bold: !0
                            }, u.createElement(P.U, {
                                type: P.V.Inherit,
                                to: e.subscriptionBenefit && e.subscriptionBenefit.user ? "/" + e.subscriptionBenefit.user.login : void 0,
                                hoverUnderlineNone: !0
                            }, "turbo" === e.productType ? Object(p.d)("Twitch Turbo", "SubscriptionRows") : e.subscriptionBenefit && e.subscriptionBenefit.user ? e.subscriptionBenefit.user.displayName : void 0))))), u.createElement(P.P, {
                                cols: 2
                            }, u.createElement(P.Ya, {
                                display: P.X.Flex,
                                alignItems: P.f.Center,
                                justifyContent: P.Xa.End,
                                padding: {
                                    right: 1
                                },
                                fullHeight: !0
                            }, u.createElement(P.W, {
                                "data-test-selector": de.TIER_TEXT,
                                bold: !0
                            }, e.subscriptionBenefit ? pe[e.subscriptionBenefit.tier]() : Object(p.d)("Turbo", "SubscriptionRows")))), u.createElement(P.P, {
                                cols: 3
                            }, u.createElement(P.Ya, {
                                display: P.X.Flex,
                                alignItems: P.f.Center,
                                justifyContent: P.Xa.Start,
                                padding: {
                                    left: 1
                                },
                                fullHeight: !0
                            }, u.createElement(P.W, {
                                "data-test-selector": de.COST_TEXT
                            }, Object(p.d)("{localizedPrice} / month", {
                                localizedPrice: Object(p.f)(e.renewalPrice / 100, {
                                    style: "currency",
                                    currency: e.renewalCurrency
                                })
                            }, "SubscriptionRows")))), u.createElement(P.P, {
                                cols: 3
                            }, u.createElement(P.Ya, {
                                display: P.X.Flex,
                                alignItems: P.f.Center,
                                justifyContent: P.Xa.End,
                                padding: {
                                    left: 1
                                },
                                fullHeight: !0
                            }, u.createElement(P.W, {
                                "data-test-selector": de.RENEWAL_DATE_TEXT
                            }, r)))))
                        }), this.props.subscriptions.length > 5 && u.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(P.z, {
                            type: P.F.Text,
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
                                    i = Object(p.f)(a, {
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
                }(u.Component),
                ye = n("a1OF"),
                fe = "64138",
                ge = "SeemsGood",
                be = function(e) {
                    return u.createElement(P.Ya, {
                        padding: {
                            y: 5
                        }
                    }, u.createElement(P.Ya, {
                        display: P.X.Flex,
                        justifyContent: P.Xa.Center,
                        margin: {
                            y: 2
                        }
                    }, u.createElement(P.S, {
                        src: Object(ye.d)(fe, 2),
                        alt: ge
                    })), u.createElement(P.Ya, {
                        display: P.X.Flex,
                        justifyContent: P.Xa.Center,
                        margin: {
                            y: 2
                        }
                    }, u.createElement(P.Ya, {
                        display: P.X.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, u.createElement(P.tb, {
                        asset: P.ub.Check,
                        type: P.vb.Success
                    })), u.createElement(P.W, null, Object(p.d)("Your payment method has been updated.", "UpdatePaymentSuccess"))), u.createElement(P.Ya, {
                        display: P.X.Flex,
                        justifyContent: P.Xa.Center,
                        margin: {
                            y: 2
                        }
                    }, u.createElement(P.Ya, {
                        margin: {
                            x: 1
                        }
                    }, u.createElement(P.z, {
                        onClick: e.onDoneClick
                    }, Object(p.d)("Done", "UpdatePaymentSuccess"))), u.createElement(P.z, {
                        type: P.F.Hollow,
                        onClick: e.onStartOverClick
                    }, Object(p.d)("Start Over", "UpdatePaymentSuccess"))))
                },
                ve = function(e) {
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
                        return u.createElement(P.Ya, {
                            fullWidth: !0
                        }, u.createElement(P.Ya, {
                            display: this.state.xsollaLoaded ? P.X.Hide : P.X.Inline
                        }, u.createElement(P.ab, {
                            fillContent: !0
                        })), u.createElement(P.Ya, {
                            fullWidth: !0,
                            display: this.state.xsollaLoaded ? P.X.Inline : P.X.Hide
                        }, u.createElement("iframe", {
                            ref: function(t) {
                                return e.iframe = t
                            },
                            id: "xsolla",
                            src: this.props.config.iframeURL,
                            width: "100%",
                            height: "650px"
                        })))
                    }, t
                }(u.Component),
                Ee = n("WlZp");
            n("YHBx");
            ! function(e) {
                e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
            }(me || (me = {}));
            var ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        zuoraConfigured: !1,
                        updatingPaymentMethod: !1,
                        errorMessage: "",
                        nullValueErrors: [],
                        sessionId: Object(v.b)()
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.setState({
                            updatingPaymentMethod: !0,
                            errorMessage: "",
                            nullValueErrors: []
                        }), window.Z.submit()
                    }, t.renderErrorMessage = function() {
                        if (t.state.nullValueErrors.length) {
                            var e = t.state.nullValueErrors.map(function(e, t) {
                                return u.createElement(P.Ya, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, u.createElement(P.W, {
                                    color: P.O.Error
                                }, "• ", e))
                            });
                            return u.createElement("div", null, u.createElement(P.Ya, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, u.createElement(P.W, {
                                color: P.O.Error
                            }, Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCardComponent"))), e)
                        }
                        if (t.state.errorMessage) return u.createElement(P.Ya, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, u.createElement(P.W, {
                            color: P.O.Error
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
                    return u.createElement("div", null, !this.state.zuoraConfigured && u.createElement(P.Ya, {
                        padding: {
                            y: 5
                        }
                    }, u.createElement(P.ab, {
                        fillContent: !0
                    })), u.createElement(P.Ya, {
                        display: this.state.zuoraConfigured ? P.X.Block : P.X.Hide,
                        "data-test-selector": me.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), u.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.updatingPaymentMethod ? "zuora-disabled" : ""
                    }), u.createElement(P.Ya, {
                        margin: {
                            left: .5,
                            top: 2,
                            bottom: 1
                        }
                    }, u.createElement(P.z, {
                        onClick: this.handleSubmit,
                        state: this.state.updatingPaymentMethod ? P.E.Loading : P.E.Default,
                        disabled: this.state.updatingPaymentMethod,
                        "data-test-selector": me.UPDATE_PAYMENT_BUTTON
                    }, Object(p.d)("Update Card", "ZuoraCardComponent"))), u.createElement(Ee.a, {
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
            }(u.Component);
            var Pe, Ce, we = Object(a.connect)(function(e) {
                return {
                    languageCode: Object(c.b)(e)
                }
            })(ke);
            ! function(e) {
                e[e.SubRows = 0] = "SubRows", e[e.UpdatePayment = 1] = "UpdatePayment", e[e.UpdateSuccess = 2] = "UpdateSuccess"
            }(Pe || (Pe = {})),
            function(e) {
                e.NUM_SUBS_TEXT = "payment-method-card__num-subs-text", e.UPDATE_BUTTON = "payment-method-card__update-button", e.CLOSE_BUTTON = "payment-method-card__close-button"
            }(Ce || (Ce = {}));
            var Te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            viewType: Pe.SubRows,
                            updatePaymentError: !1
                        }, t.renderPaymentProvider = function() {
                            var e = t.props.paymentProviderConfig;
                            return e.provider === E.G.RECURLY ? u.createElement(oe, {
                                config: e,
                                updatePaymentMethod: t.updatePaymentMethod
                            }) : e.provider === E.G.ZUORA ? u.createElement(we, {
                                config: e,
                                updatePaymentMethod: t.updatePaymentMethod
                            }) : e.provider === E.G.XSOLLA_V3 ? u.createElement(ve, {
                                config: e
                            }) : u.createElement(P.W, null, Object(p.d)("Oops! Payment provider is unavailable. Please try again later.", "PaymentMethodCard"))
                        }, t.renderActionButtons = function() {
                            var e, n;
                            if (t.props.paymentProviderConfig.provider === E.G.GOOGLE_IAB) return u.createElement(P.z, {
                                disabled: !0,
                                fullWidth: !0
                            }, Object(p.d)("Manage on Android Device", "PaymentMethodCard"));
                            if (t.state.viewType === Pe.SubRows) {
                                var r = t.props.paymentProviderConfig.provider === E.G.XSOLLA_V3 ? Object(p.d)("Manage with Xsolla", "PaymentMethodCard") : Object(p.d)("Update Payment Info", "PaymentMethodCard");
                                e = u.createElement(P.z, {
                                    onClick: t.handleUpdateToggleButton,
                                    fullWidth: !0,
                                    "data-test-selector": Ce.UPDATE_BUTTON
                                }, r)
                            } else e = u.createElement(P.z, {
                                onClick: t.handleUpdateToggleButton,
                                fullWidth: !0,
                                type: P.F.Text,
                                "data-test-selector": Ce.CLOSE_BUTTON
                            }, Object(p.d)("Cancel", "PaymentMethodCard"));
                            return [E.G.RECURLY, E.G.ZUORA].includes(t.props.paymentProviderConfig.provider) && (n = u.createElement(P.z, {
                                onClick: t.handleDeleteButton,
                                fullWidth: !0,
                                type: P.F.Hollow
                            }, Object(p.d)("Delete", "PaymentMethodCard"))), u.createElement(u.Fragment, null, !!n && u.createElement(P.Ya, {
                                margin: {
                                    right: 1
                                },
                                fullWidth: !0
                            }, n), e)
                        }, t.handleUpdateToggleButton = function() {
                            return t.state.viewType === Pe.SubRows ? t.setState({
                                viewType: Pe.UpdatePayment,
                                updatePaymentError: !1
                            }) : t.setState({
                                viewType: Pe.SubRows,
                                updatePaymentError: !1
                            })
                        }, t.handleDeleteButton = function() {
                            t.props.showDeletePaymentMethodModal({
                                subscriptions: t.props.subscriptions,
                                lastFour: t.props.lastFour,
                                expirationYear: t.props.expirationYear,
                                billingEmail: t.props.billingEmail,
                                expirationMonth: t.props.expirationMonth,
                                paymentType: t.props.paymentType,
                                cardType: t.props.cardType,
                                provider: t.props.provider,
                                userID: t.props.userID,
                                onDeleteSuccess: t.props.refetchPaymentMethodsData
                            })
                        }, t.onDoneClick = function() {
                            t.setState({
                                viewType: Pe.SubRows,
                                updatePaymentError: !1
                            })
                        }, t.onStartOverClick = function() {
                            return t.setState({
                                viewType: Pe.UpdatePayment,
                                updatePaymentError: !1
                            })
                        }, t.updatePaymentMethod = function(e, n, r, a) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, i, s, o;
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
                                            }, [4, w.a.put(t, {
                                                body: i
                                            }, {
                                                version: 5
                                            })];
                                        case 1:
                                            return s = c.sent(), o = s.body && s.body.error_code, s.error || s.requestError || o ? (this.setState({
                                                viewType: Pe.UpdatePayment,
                                                updatePaymentError: !0,
                                                errorCode: o
                                            }), [2, Promise.reject(null)]) : [4, this.props.refetchPaymentMethodsData()];
                                        case 2:
                                            return c.sent(), this.setState({
                                                viewType: Pe.UpdateSuccess,
                                                updatePaymentError: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(P.Ya, {
                            margin: {
                                y: 3
                            }
                        }, u.createElement(P.Fb, {
                            border: !0,
                            background: P.r.Base
                        }, u.createElement(P.Fb, {
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            justifyContent: P.Xa.Between
                        }, u.createElement(P.Ja, {
                            alignItems: P.f.Center
                        }, u.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, u.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(T.a, {
                            paymentType: this.props.paymentType,
                            cardType: this.props.cardType,
                            provider: this.props.provider,
                            lastFour: this.props.lastFour,
                            expirationYear: this.props.expirationYear,
                            billingEmail: this.props.billingEmail,
                            expirationMonth: this.props.expirationMonth,
                            justifyContent: P.Xa.Start
                        }))), u.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 4
                            }
                        }, u.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.End,
                            margin: {
                                y: 1
                            }
                        }, this.renderActionButtons()))), this.state.viewType === Pe.UpdateSuccess && u.createElement(be, {
                            onDoneClick: this.onDoneClick,
                            onStartOverClick: this.onStartOverClick
                        }), this.state.viewType === Pe.UpdatePayment && u.createElement(u.Fragment, null, u.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.renderPaymentProvider()), this.state.updatePaymentError && u.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(P.W, {
                            color: P.O.Error
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
                        }(this.state.errorCode))), this.props.subscriptions && !!this.props.subscriptions.length && u.createElement(P.W, {
                            color: P.O.Alt2,
                            "data-test-selector": Ce.NUM_SUBS_TEXT
                        }, this.numOfSubscriptionsWillRenew)))), this.state.viewType === Pe.SubRows && u.createElement(he, {
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
                }(u.Component),
                je = n("cZKs"),
                _e = n("geRD"),
                Se = n("TQGo"),
                xe = n("h7rm"),
                Oe = (n("uCCD"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDeleting: !1,
                            hasErrors: !1
                        }, t.renderHeaderText = function() {
                            var e = Object(p.d)("Delete saved payment method", "DeletePaymentMethodModal");
                            return t.hasRenewingSubscriptions && (e = Object(p.d)("Unable to delete payment method", "DeletePaymentMethodModal")), u.createElement(P.W, {
                                bold: !0,
                                type: P.Wb.H1,
                                fontSize: P.Ca.Size4
                            }, e)
                        }, t.renderBodyContent = function() {
                            return t.hasRenewingSubscriptions ? u.createElement(P.W, null, Object(p.d)("Before you can delete this, please cancel all subscriptions renewing with this payment method. You can also transfer all of your subscriptions by changing to a new payment method.", "DeletePaymentMethodModal")) : u.createElement(P.Ya, null, u.createElement(P.W, null, Object(p.d)("Are you sure you want to delete this payment method?", "DeletePaymentMethodModal")), u.createElement(P.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, u.createElement(Se.a, {
                                paymentType: t.props.paymentType,
                                cardType: t.props.cardType,
                                provider: t.props.provider,
                                lastFour: t.props.lastFour,
                                expirationYear: t.props.expirationYear,
                                billingEmail: t.props.billingEmail,
                                expirationMonth: t.props.expirationMonth
                            })))
                        }, t.renderPrimaryButton = function() {
                            return t.hasRenewingSubscriptions ? u.createElement(P.z, {
                                linkTo: "/subscriptions",
                                onClick: t.props.closeModal
                            }, Object(p.d)("Go to Subscriptions", "DeletePaymentMethodModal")) : u.createElement(P.z, {
                                type: P.F.Alert,
                                state: t.state.isDeleting ? P.E.Loading : P.E.Default,
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
                                            return e.trys.push([1, 4, , 5]), [4, this.props.deleteDefaultPaymentMethod(Object(_e.a)({
                                                provider: this.props.provider,
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
                        return u.createElement(P.Fb, {
                            className: "delete-payment-method-modal"
                        }, u.createElement(P.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, this.renderHeaderText()), this.renderBodyContent(), this.state.hasErrors && u.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(P.W, {
                            color: P.O.Error
                        }, Object(p.d)("Oops! Unable to delete payment method.", "DeletePaymentMethodModal"))), u.createElement(P.Ya, {
                            display: P.X.Flex,
                            margin: {
                                top: 2
                            }
                        }, this.renderPrimaryButton(), u.createElement(P.Ya, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(P.z, {
                            type: P.F.Hollow,
                            onClick: this.props.closeModal
                        }, Object(p.d)("Not Right Now", "DeletePaymentMethodModal")))))
                    }, Object.defineProperty(t.prototype, "hasRenewingSubscriptions", {
                        get: function() {
                            return !!this.props.subscriptions.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(u.Component)),
                De = Object(d.compose)(Object(b.a)(xe, {
                    name: "deleteDefaultPaymentMethod"
                }))(Oe),
                Fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(P.Fb, {
                            background: P.r.Base,
                            padding: 2
                        }, u.createElement(De, {
                            subscriptions: this.props.subscriptions,
                            lastFour: this.props.lastFour,
                            expirationYear: this.props.expirationYear,
                            billingEmail: this.props.billingEmail,
                            expirationMonth: this.props.expirationMonth,
                            paymentType: this.props.paymentType,
                            cardType: this.props.cardType,
                            provider: this.props.provider,
                            onDeleteSuccess: this.props.onDeleteSuccess,
                            userID: this.props.userID,
                            closeModal: this.props.closeModal
                        }), u.createElement(je.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(u.Component);
            var Me = Object(a.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    closeModal: C.c
                }, e)
            })(Fe);
            var Ne, Ae = Object(a.connect)(null, function(e) {
                    return Object(i.bindActionCreators)({
                        showDeletePaymentMethodModal: function(e) {
                            var t = l.__rest(e, []);
                            return Object(C.d)(Me, t)
                        }
                    }, e)
                })(Te),
                Ie = (n("o3lI"), n("enyl")),
                Re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.refetchPaymentMethodsData = function() {
                            return t.props.data.refetch()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return u.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, u.createElement(P.ab, {
                            fillContent: !0
                        }));
                        if (this.props.data.error || !this.receivedAllExpectedFields) return u.createElement(m.a, {
                            message: Object(p.d)("Error loading payment methods.", "PaymentMethodsTabComponent")
                        });
                        var e = this.renderPaymentMethodCards();
                        return e && e.length ? u.createElement(P.Ya, {
                            className: "payment-methods-tab"
                        }, e) : u.createElement(P.Fb, {
                            background: P.r.Alt,
                            border: !0,
                            className: "payment-methods-tab",
                            display: P.X.Flex,
                            justifyContent: P.Xa.Center,
                            padding: 1
                        }, u.createElement(P.W, {
                            color: P.O.Alt2
                        }, Object(p.d)("You have no payment methods on record.", "PaymentMethodsTabComponent")))
                    }, t.prototype.renderPaymentMethodCards = function() {
                        var e = this;
                        if (this.props.data.currentUser && this.props.data.currentUser.id) {
                            var t = this.props.data.currentUser,
                                n = this.props.data.currentUser.id,
                                r = t.paymentMethodConfigs,
                                a = t.paymentMethods;
                            if (r) return a && a.map(function(t) {
                                var a, i = t.provider.toUpperCase();
                                if (t.provider === "xsolla_v3".toUpperCase() && (i = E.G.XSOLLA_V3), i === E.G.RECURLY) a = r.recurly;
                                else if (i === E.G.XSOLLA_V3) a = r.xsolla;
                                else if (i === E.G.ZUORA) a = r.zuora;
                                else {
                                    if (i !== E.G.GOOGLE_IAB) return void k.warn("Received invalid payment provider type: " + i);
                                    a = {}
                                }
                                var s = l.__assign({}, a, {
                                    provider: i
                                });
                                if (s.provider === E.G.ZUORA && (s.isProductionConfig = r.recurly.payWithAmazonConfigs.isProduction), i !== E.G.GOOGLE_IAB || null !== t.recurringPaymentDetails && 0 !== t.recurringPaymentDetails.length) {
                                    var o = [];
                                    return t.recurringPaymentDetails && t.recurringPaymentDetails.forEach(function(e) {
                                        e.expiresAt && e.renewalCurrency && e.renewalPrice ? o.push({
                                            expiresAt: e.expiresAt,
                                            id: void 0,
                                            productType: e.productType || void 0,
                                            renewalCurrency: e.renewalCurrency,
                                            renewalPrice: e.renewalPrice,
                                            renewalPriceDivisor: e.renewalPriceDivisor || void 0,
                                            subscriptionBenefit: e.subscriptionBenefit || void 0,
                                            willRenew: e.willRenew,
                                            key: Object(v.b)()
                                        }) : k.warn("Unable to convert RecurringPaymentDetail to Subscription due to missing attribute.")
                                    }), t.purchaseProfiles && t.purchaseProfiles.forEach(function(e) {
                                        e.expiresAt && e.renewalCurrency && e.renewalPrice ? o.push({
                                            expiresAt: e.expiresAt,
                                            id: e.id,
                                            productType: e.productType || void 0,
                                            renewalCurrency: e.renewalCurrency,
                                            renewalPrice: e.renewalPrice,
                                            renewalPriceDivisor: void 0,
                                            subscriptionBenefit: e.subscriptionBenefit || void 0,
                                            willRenew: e.willRenew,
                                            key: Object(v.b)()
                                        }) : k.warn("Unable to convert PurchaseProfile to Subscription due to missing attribute.")
                                    }), u.createElement(Ae, {
                                        key: t.provider,
                                        provider: t.provider,
                                        cardType: t.cardType,
                                        paymentType: t.paymentType,
                                        lastFour: t.lastFour,
                                        expirationYear: t.expirationYear,
                                        billingEmail: t.billingEmail,
                                        expirationMonth: t.expirationMonth,
                                        paymentProviderConfig: s,
                                        refetchPaymentMethodsData: e.refetchPaymentMethodsData,
                                        subscriptions: o,
                                        userID: n
                                    })
                                }
                            })
                        }
                    }, Object.defineProperty(t.prototype, "receivedAllExpectedFields", {
                        get: function() {
                            return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.id && this.props.data.currentUser.paymentMethodConfigs)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(u.Component),
                Ue = Object(d.compose)(Object(b.a)(Ie), Object(g.b)("PaymentMethodsTab"))(Re),
                ze = n("HEnu"),
                Be = function(e, t) {
                    if (void 0 === e && (e = 1), void 0 === t && (t = 10), t < e) throw new Error("Invalid range");
                    return Array.from(Array(t + 1).keys()).slice(e)
                },
                Ye = function(e) {
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
                            var a = Be(1, Math.max(t, 1)).map(function(t) {
                                return e.renderButton(t)
                            });
                            return this.renderWrapper(a)
                        }
                        var i = Be(1, 2).map(function(t) {
                                return e.renderButton(t)
                            }),
                            s = Be(t - 1, t).map(function(t) {
                                return e.renderButton(t)
                            }),
                            o = Be(n - 1, n + 1).map(function(t) {
                                return e.renderButton(t)
                            }),
                            c = this.renderEllipsis("start"),
                            l = this.renderEllipsis("end");
                        return n <= 4 ? (i = Be(1, Math.max(n + 1, 2)).map(function(t) {
                            return e.renderButton(t)
                        }), this.renderWrapper(i.concat([c], s))) : n >= r ? (s = Be(n - 1, t).map(function(t) {
                            return e.renderButton(t)
                        }), this.renderWrapper(i.concat([c], s))) : this.renderWrapper(i.concat([c], o, [l], s))
                    }, t.prototype.renderWrapper = function(e) {
                        return u.createElement(P.Ya, {
                            display: P.X.Flex
                        }, u.createElement(P.Ya, {
                            margin: {
                                right: .5
                            }
                        }, u.createElement(P.z, {
                            type: P.F.Hollow,
                            icon: P.ub.AngleLeft,
                            onClick: this.props.onBack,
                            disabled: 1 === this.state.currentPage,
                            "data-test-selector": "table-pagination__back-button"
                        })), e, u.createElement(P.Ya, {
                            margin: {
                                left: .5
                            }
                        }, u.createElement(P.z, {
                            type: P.F.Hollow,
                            icon: P.ub.AngleRight,
                            onClick: this.props.onNext,
                            disabled: this.state.currentPage === this.state.totalNumberPages,
                            "data-test-selector": "table-pagination__next-button"
                        })))
                    }, t.prototype.renderButton = function(e) {
                        return u.createElement(P.Ya, {
                            margin: {
                                x: .5
                            },
                            key: e
                        }, u.createElement(P.z, {
                            type: e === this.state.currentPage ? P.F.Default : P.F.Hollow,
                            onClick: this.handlePageJump,
                            key: e,
                            "data-page": e
                        }, e))
                    }, t.prototype.renderEllipsis = function(e) {
                        return u.createElement(P.W, {
                            key: e,
                            "data-test-selector": "table-pagination__ellipsis-text"
                        }, "...")
                    }, t.prototype.getAllowedCurrentPage = function(e, t) {
                        return Math.min(Math.max(e, 1), t)
                    }, t
                }(u.Component),
                Le = n("5gJ6");
            n("mo/2");
            ! function(e) {
                e.Tier1 = "1000", e.Tier2 = "2000", e.Tier3 = "3000"
            }(Ne || (Ne = {}));
            var We, Xe, He = function() {
                    return Object(p.d)("Twitch Turbo", "TransactionHistoryTab")
                },
                Ve = function(e) {
                    return u.createElement(P.Nb, null, u.createElement(P.Kb, {
                        verticalAlign: P.gc.Middle
                    }, u.createElement(P.W, null, e.purchasedAt ? Object(p.c)(Object(ue.c)(e.purchasedAt), "medium") : "-")), u.createElement(P.Kb, {
                        verticalAlign: P.gc.Middle
                    }, u.createElement(P.Ya, {
                        display: P.X.Flex
                    }, u.createElement(P.U, {
                        to: e.product.owner ? "/" + e.product.owner.login : void 0
                    }, u.createElement(P.q, {
                        alt: "Turbo" === e.product.name ? He() : e.product.name,
                        src: "Turbo" === e.product.name ? le.a : e.product.owner ? e.product.owner.profileImageURL : void 0,
                        size: 40
                    })), u.createElement(P.Ya, {
                        display: P.X.Flex,
                        padding: {
                            x: 1
                        },
                        alignItems: P.f.Center
                    }, u.createElement(P.W, {
                        bold: !0
                    }, u.createElement(P.U, {
                        type: P.V.Inherit,
                        to: e.product.owner ? "/" + e.product.owner.login : void 0,
                        hoverUnderlineNone: !0
                    }, "Turbo" === e.product.name ? He() : e.product.name))))), u.createElement(P.Kb, {
                        verticalAlign: P.gc.Middle
                    }, u.createElement(P.W, null, function(e, t) {
                        if ("SUBSCRIPTION" === e.type) {
                            if ("Turbo" === e.name) return Object(p.d)("Turbo - Subscription", "TransactionHistoryTab");
                            if (e.tier) {
                                if (t.gift)
                                    if (t.recipient) switch (e.tier) {
                                        case Ne.Tier1:
                                            return Object(p.d)("Gift Subscription - Tier 1 for {recipientName}", {
                                                recipientName: t.recipient.login || "-"
                                            }, "TransactionHistoryTab");
                                        case Ne.Tier2:
                                            return Object(p.d)("Gift Subscription - Tier 2 for {recipientName}", {
                                                recipientName: t.recipient.login || "-"
                                            }, "TransactionHistoryTab");
                                        case Ne.Tier3:
                                            return Object(p.d)("Gift Subscription - Tier 3 for {recipientName}", {
                                                recipientName: t.recipient.login || "-"
                                            }, "TransactionHistoryTab");
                                        default:
                                            return "-"
                                    } else switch (e.tier) {
                                        case Ne.Tier1:
                                            return Object(p.d)("{quantity, number} x Gift Subscriptions - Tier 1", {
                                                quantity: t.quantity
                                            }, "TransactionHistoryTab");
                                        case Ne.Tier2:
                                            return Object(p.d)("{quantity, number} x Gift Subscriptions - Tier 2", {
                                                quantity: t.quantity
                                            }, "TransactionHistoryTab");
                                        case Ne.Tier3:
                                            return Object(p.d)("{quantity, number} x Gift Subscriptions - Tier 3", {
                                                quantity: t.quantity
                                            }, "TransactionHistoryTab");
                                        default:
                                            return "-"
                                    }
                                    switch (e.tier) {
                                        case Ne.Tier1:
                                            return Object(p.d)("Channel Subscription - Tier 1", "TransactionHistoryTab");
                                        case Ne.Tier2:
                                            return Object(p.d)("Channel Subscription - Tier 2", "TransactionHistoryTab");
                                        case Ne.Tier3:
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
                    }))), u.createElement(P.Kb, {
                        verticalAlign: P.gc.Middle
                    }, u.createElement(P.Ya, {
                        display: P.X.Flex,
                        justifyContent: P.Xa.End
                    }, u.createElement(P.W, {
                        className: e.grossAmount && e.grossAmount < 0 ? "transaction-table-row__price--refund" : ""
                    }, function(e, t) {
                        if (e && t) {
                            var n = Object(p.f)(Math.abs(e) / 100, {
                                style: "currency",
                                currency: t
                            });
                            return e < 0 ? "+" + n : n
                        }
                        return "-"
                    }(e.grossAmount, e.currency)))), u.createElement(P.Kb, {
                        verticalAlign: P.gc.Middle
                    }, u.createElement(Le.a, {
                        paymentProvider: e.paymentMethod.provider,
                        paymentInstrumentType: e.paymentMethod.paymentType,
                        cardType: e.paymentMethod.cardType || void 0
                    })))
                },
                Ge = n("e3pt");
            ! function(e) {
                e.PurchaseDateDesc = "PURCHASE_DATE_DESC", e.PurchaseDateAsc = "PURCHASE_DATE_ASC", e.PriceDesc = "PRICE_DESC", e.PriceAsc = "PRICE_ASC"
            }(We || (We = {})),
            function(e) {
                e.All = "ALL", e.Subscriptions = "SUBSCRIPTIONS"
            }(Xe || (Xe = {}));
            var qe = 15,
                Ke = "no-transactions-text-selector",
                Ze = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentIndex: 0,
                            currentFilters: l.__assign({}, t.props.data.variables.filters),
                            dateSortType: P.Cb.Descending,
                            costSortType: P.Cb.Default,
                            refetching: !1
                        }, t.renderNoTransactionsMessage = function() {
                            return u.createElement(P.Fb, {
                                alignItems: P.f.Center,
                                borderBottom: !0,
                                borderLeft: !0,
                                borderRight: !0,
                                color: P.O.Alt2,
                                display: P.X.Flex,
                                flexDirection: P.Aa.Column,
                                padding: 2
                            }, u.createElement(P.W, {
                                bold: !0,
                                "data-test-selector": Ke
                            }, Object(p.d)("No Transactions", "TransactionHistoryTab")), u.createElement(P.Ya, {
                                margin: .5
                            }, u.createElement(P.W, null, Object(p.d)("A subscription would sure look good here. <x:link>Go find one you like</x:link>.", {
                                "x:link": function(e) {
                                    return u.createElement(P.U, {
                                        to: "https://www.twitch.tv/directory/following",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "TransactionHistoryTab"))))
                        }, t.getCurrentPage = function() {
                            return Math.floor(t.state.currentIndex / qe) + 1
                        }, t.getTotalPages = function() {
                            return t.props.data.currentUser && t.props.data.currentUser.paymentTransactions && t.props.data.currentUser.paymentTransactions.totalCount && Math.ceil(t.props.data.currentUser.paymentTransactions.totalCount / qe) || 1
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
                                            return e = this.state.dateSortType, t = e === P.Cb.Default || e === P.Cb.Ascending ? P.Cb.Descending : P.Cb.Ascending, n = l.__assign({}, this.state.currentFilters, {
                                                sortBy: t === P.Cb.Descending ? We.PurchaseDateDesc : We.PurchaseDateAsc
                                            }), [4, this.props.getFilteredQuery(n)];
                                        case 1:
                                            return r.sent(), this.setState({
                                                currentIndex: 0,
                                                currentFilters: n,
                                                dateSortType: t,
                                                costSortType: P.Cb.Default
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
                                            return e = this.state.costSortType, t = e === P.Cb.Default || e === P.Cb.Ascending ? P.Cb.Descending : P.Cb.Ascending, n = l.__assign({}, this.state.currentFilters, {
                                                sortBy: t === P.Cb.Descending ? We.PriceDesc : We.PriceAsc
                                            }), [4, this.props.getFilteredQuery(n)];
                                        case 1:
                                            return r.sent(), this.setState({
                                                currentIndex: 0,
                                                currentFilters: n,
                                                costSortType: t,
                                                dateSortType: P.Cb.Default
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
                        if (this.props.data.loading && !e.data.loading) {
                            var t = e.data.currentUser && e.data.currentUser.paymentTransactions && e.data.currentUser.paymentTransactions.firstPurchasedAt,
                                n = e.data.currentUser && e.data.currentUser.paymentTransactions && e.data.currentUser.paymentTransactions.lastPurchasedAt;
                            this.initializeDateFilterState(t, n)
                        }
                    }, t.prototype.componentDidMount = function() {
                        if (this.props.data.currentUser) {
                            var e = this.props.data.currentUser.paymentTransactions && this.props.data.currentUser.paymentTransactions.firstPurchasedAt,
                                t = this.props.data.currentUser.paymentTransactions && this.props.data.currentUser.paymentTransactions.lastPurchasedAt;
                            this.initializeDateFilterState(e, t)
                        }
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return u.createElement(P.ab, {
                            fillContent: !0
                        });
                        var e = [];
                        return this.props.data.currentUser && this.props.data.currentUser.paymentTransactions && this.props.data.currentUser.paymentTransactions.edges && this.props.data.currentUser.paymentTransactions.edges.forEach(function(t) {
                            var n = t.node;
                            n && e.push(u.createElement(Ve, l.__assign({
                                key: n.id
                            }, n)))
                        }), u.createElement(P.Ya, null, u.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.Between,
                            flexWrap: P.Ba.Wrap
                        }, u.createElement(P.Ya, {
                            display: P.X.Flex,
                            flexWrap: P.Ba.NoWrap,
                            margin: {
                                y: .5
                            }
                        }, u.createElement(P.Ja, null, u.createElement(P.P, {
                            cols: 6
                        }, u.createElement(P.Ya, {
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column
                        }, u.createElement(P.W, {
                            bold: !0
                        }, Object(p.d)("Start", "TransactionHistoryTab")), u.createElement(ze.a, {
                            defaultDate: this.state.currentFilters.purchasedAfter,
                            maxDate: this.state.currentFilters.purchasedBefore,
                            onChange: this.handleMinDate,
                            "data-test-selector": "purchased-after-date-picker-selector"
                        }))), u.createElement(P.P, {
                            cols: 6
                        }, u.createElement(P.Ya, {
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column
                        }, u.createElement(P.W, {
                            bold: !0
                        }, Object(p.d)("End", "TransactionHistoryTab")), u.createElement(ze.a, {
                            defaultDate: this.state.currentFilters.purchasedBefore,
                            minDate: this.state.currentFilters.purchasedAfter,
                            onChange: this.handleMaxDate,
                            "data-test-selector": "purchased-before-date-picker-selector"
                        }))))), u.createElement(P.Ya, {
                            display: P.X.Flex
                        }, u.createElement(P.Ya, {
                            margin: {
                                y: .5,
                                right: 1
                            },
                            display: P.X.Flex,
                            alignItems: P.f.End
                        }, u.createElement(P.z, {
                            type: P.F.Hollow,
                            linkTo: "https://www.amazon.com/gp/your-account/order-history/ref=oh_aui_search?opt=ab&search=Twitch",
                            targetBlank: !0
                        }, Object(p.d)("View Your Amazon Order History", "TransactionHistoryTab"))), u.createElement(P.Ya, {
                            margin: {
                                y: .5
                            },
                            display: P.X.Flex,
                            alignItems: P.f.End
                        }, u.createElement(P.z, {
                            type: P.F.Hollow,
                            linkTo: "https://www.paypal.com/mep/dashboard",
                            targetBlank: !0
                        }, Object(p.d)("View Your PayPal Order History", "TransactionHistoryTab"))))), u.createElement(P.Fb, {
                            background: P.r.Base,
                            elevation: 2,
                            margin: {
                                y: 2
                            }
                        }, u.createElement(P.Ib, {
                            alternateRows: !0
                        }, u.createElement(P.Lb, null, u.createElement(P.Mb, {
                            label: Object(p.d)("Date", "TransactionHistoryTab"),
                            sorting: this.state.dateSortType,
                            onClick: this.handleSortDate,
                            "data-test-selector": "date-table-heading-selector"
                        }), u.createElement(P.Mb, {
                            label: Object(p.d)("Channel", "TransactionHistoryTab")
                        }), u.createElement(P.Mb, {
                            label: Object(p.d)("Product", "TransactionHistoryTab")
                        }), u.createElement(P.Mb, {
                            label: Object(p.d)("Price", "TransactionHistoryTab"),
                            sorting: this.state.costSortType,
                            onClick: this.handleSortCost,
                            "data-test-selector": "price-table-heading-selector"
                        }), u.createElement(P.Mb, {
                            label: Object(p.d)("Payment Method", "TransactionHistoryTab")
                        })), u.createElement(P.Jb, null, e)), !e.length && this.renderNoTransactionsMessage()), u.createElement(Ye, {
                            currentPage: this.getCurrentPage(),
                            totalNumberPages: this.getTotalPages(),
                            onNext: this.handleNextPage,
                            onBack: this.handlePreviousPage,
                            onPageJump: this.handlePageJump
                        }))
                    }, t.prototype.initializeDateFilterState = function(e, t) {
                        var n = new Date,
                            r = e ? Object(ue.c)(e) : new Date((new Date).getFullYear(), 0, 1),
                            a = t ? Object(ue.c)(t) : new Date(n.getFullYear(), n.getMonth(), n.getDay()),
                            i = l.__assign({}, this.state.currentFilters, {
                                purchasedAfter: r,
                                purchasedBefore: a
                            });
                        this.setState({
                            currentFilters: i
                        })
                    }, t
                }(u.Component),
                Qe = Object(i.compose)(Object(a.connect)(function(e) {
                    var t = e.session;
                    return {
                        currentUserID: t.user && t.user.id || null
                    }
                }), Object(b.a)(Ge, {
                    options: function(e) {
                        return {
                            variables: {
                                first: qe,
                                after: "0",
                                filters: {
                                    userID: e.currentUserID,
                                    sortBy: We.PurchaseDateDesc,
                                    type: Xe.All
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return l.__assign({}, e, {
                            getOffsetQuery: function(t, n) {
                                return e.data.fetchMore({
                                    query: Ge,
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
                                    query: Ge,
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
                }))(Ze),
                Je = function(e) {
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
                        return this.props.isLoggedIn ? u.createElement(P.Fb, {
                            fullWidth: !0,
                            alignContent: P.e.Center
                        }, u.createElement(P.Ya, {
                            margin: {
                                x: 4,
                                y: 3
                            }
                        }, u.createElement(P.W, {
                            type: P.Wb.H2
                        }, Object(p.d)("Payments", "PaymentsLandingPagePresentationComponent")), u.createElement(P.Ya, {
                            margin: {
                                top: 2
                            }
                        }, u.createElement(P.Hb, null, u.createElement(P.Gb, {
                            active: !this.state.txnHistoryTabActive,
                            onClick: this.switchToPaymentMethodsTab
                        }, Object(p.d)("Payment Methods", "PaymentsLandingPagePresentationComponent")), u.createElement(P.Gb, {
                            active: this.state.txnHistoryTabActive,
                            onClick: this.switchToTxnTab
                        }, Object(p.d)("Purchase History", "PaymentsLandingPagePresentationComponent"))), u.createElement(P.Ya, {
                            fullHeight: !0,
                            fullWidth: !0,
                            margin: {
                                y: 2
                            }
                        }, this.state.txnHistoryTabActive ? u.createElement(Qe, null) : u.createElement(Ue, null))))) : (this.props.onAnonymousVisit(), u.createElement(m.a, {
                            message: Object(p.d)("You must be logged in to view this page", "PaymentsLandingPagePresentationComponent")
                        }))
                    }, t
                }(u.Component),
                $e = Object(d.compose)(Object(g.b)("PaymentsLandingPage", {
                    autoReportInteractive: !0,
                    destination: y.a.PaymentsLandingPage
                }), Object(h.a)({
                    location: f.PageviewLocation.PaymentsLandingPage
                }))(Je);
            var et = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    onAnonymousVisit: function() {
                        return Object(o.e)(s.a.PaymentsLandingPage)
                    }
                }, e)
            })($e);
            n.d(t, "PaymentsLandingPage", function() {
                return et
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
                s = new RegExp("(?:^|\\s)(?:https?:\\/\\/)?(?:www\\.)?twitch\\.tv\\/(\\w+)\\/clip\\/(\\w+)(?:$|\\s)?");
            var o = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?");
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
                    u = n[2],
                    d = "" + (l || "https://") + u;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = i.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = s.test(e);
                        return t || n
                    }(d)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(i);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(s);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(d);
                    return {
                        type: a.a.ClipLink,
                        content: {
                            slug: p,
                            url: d,
                            displayText: e
                        }
                    }
                }
                if (t.parseVods && function(e) {
                        return void 0 === e && (e = ""), o.test(e)
                    }(d)) {
                    var m = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(o);
                        return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                    }(d);
                    return {
                        type: a.a.VideoLink,
                        content: {
                            id: m,
                            url: d,
                            displayText: e
                        }
                    }
                }
                return {
                    type: a.a.Link,
                    content: {
                        displayText: e,
                        url: d
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
                s = n("i6WW"),
                o = n("gTu3"),
                c = n("6j5V"),
                l = /^(['"*([{</]*)@((?:[^\u0000-\u007F]|[\w-])+)/;

            function u(e, t) {
                if (!t) return !1;
                var n = t.displayName,
                    r = t.login;
                return e === n || e.toLowerCase() === r
            }

            function d(e, t) {
                void 0 === t && (t = {});
                var n = t.cheers,
                    d = t.emotes,
                    y = t.links,
                    f = t.mentions,
                    g = m(e),
                    b = "",
                    v = 0;
                return p(g.reduce(function(e, t, p) {
                    if (h(t)) return b = "", e;
                    if (0 === b.length && (v = p), b += t, p !== g.length - 1 && !h(g[p + 1])) return e;
                    var m = d && Object(i.c)(b, v, d);
                    if (m) return e.concat(m);
                    var E = n && Object(r.e)(b, n);
                    if (E) return e.concat(E);
                    var k = y && Object(s.a)(b, y);
                    if (k) return e.concat(k);
                    var P = f && function(e, t) {
                        var n = e.match(l);
                        if (!n) return u(e, t.sessionUser) ? [{
                            type: a.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var r = [],
                            i = n[1],
                            s = n[2],
                            d = e.slice(n[0].length);
                        i.length && r.push(Object(c.a)(i));
                        var p = o.a.Default;
                        return u(s, t.sessionUser) ? p = o.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (p = o.a.Sender), r.push({
                            type: a.a.Mention,
                            content: {
                                recipient: s,
                                currentUserMentionRelation: p
                            }
                        }), d.length && r.push(Object(c.a)(d)), r
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
                return d
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return m
            })
        },
        q8H6: function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_2x-74742ec8600998675dc5.png"
        },
        sV2v: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("fvjX"),
                s = n("GnwI"),
                o = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (!document.querySelector("#recurly-script")) {
                            var e = document.createElement("script");
                            e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                        }
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(a.Component),
                c = Object(i.compose)(Object(s.b)("RecurlyScript", {
                    autoReportInteractive: !0
                }))(o);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return c
            })
        },
        uCCD: function(e, t, n) {},
        uReR: function(e, t, n) {
            e.exports = n.p + "assets/amex-0e89bed815722eb64119.svg"
        },
        "vE+g": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_1x-27fb4921a874a8f4d84b.png"
        },
        yrda: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_2x-914335e3401a72109a8a.png"
        }
    }
]);