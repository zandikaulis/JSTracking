(window.webpackJsonp = window.webpackJsonp || []).push([
    [210], {
        "/Z6v": function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_dark_2x-c98151cef856bab0e62c.png"
        },
        "1OTy": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/MKj"),
                o = r("fvjX"),
                s = r("/0dD"),
                c = r("XDQu"),
                u = r("Ue10"),
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.La, {
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
            var l = Object(o.compose)(Object(i.connect)(function(e) {
                return {
                    darkModeEnabled: Object(c.a)(e) === s.a.Dark
                }
            }))(d);
            r.d(t, !1, function() {
                return d
            }), r.d(t, "a", function() {
                return l
            })
        },
        "1P3F": function(e, t, r) {},
        "2DIU": function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_1x-4f76ba5fbbaca5a76d41.png"
        },
        "2ORI": function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_dark_2x-302cb9125ccffd2d356d.png"
        },
        "2xEe": function(e, t, r) {
            e.exports = r.p + "assets/paypal_dark_1x-29d0a02f9cc67088594b.png"
        },
        "5gJ6": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/MKj"),
                o = r("/7QA"),
                s = r("2DIU"),
                c = r.n(s),
                u = r("TSpM"),
                d = r.n(u),
                l = r("vE+g"),
                p = r.n(l),
                m = r("/Z6v"),
                h = r.n(m),
                y = r("WJ6U"),
                f = r.n(y),
                b = r("uReR"),
                g = r.n(b),
                v = r("SPyc"),
                E = r.n(v),
                C = r("bOWA"),
                k = r.n(C),
                P = r("KL9a"),
                O = r.n(P),
                S = r("iSjI"),
                I = r.n(S),
                N = r("bQeB"),
                j = r.n(N),
                w = r("HvcU"),
                _ = r.n(w),
                T = r("GA+j"),
                R = r.n(T),
                M = r("FBRg"),
                A = r.n(M),
                x = r("2xEe"),
                F = r.n(x),
                D = r("q8H6"),
                G = r.n(D),
                U = r("oQBz"),
                B = r.n(U),
                L = r("PwAB"),
                W = r.n(L),
                X = r("/0dD"),
                z = r("DMoW"),
                V = r("XDQu"),
                H = r("Ue10"),
                Z = (r("88jh"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        if ("prime" === this.props.paymentProvider) return a.createElement(H.sb, {
                            asset: H.tb.LogoTwitchPrime,
                            width: 66,
                            height: 30,
                            type: H.ub.Brand
                        });
                        var e = this.imageSource,
                            t = e.src,
                            r = e.alt,
                            n = e.srcSet;
                        return a.createElement(H.Xa, {
                            className: "payment-method-image"
                        }, a.createElement(H.S, {
                            src: t,
                            alt: r,
                            srcSet: n
                        }))
                    }, Object.defineProperty(t.prototype, "imageSource", {
                        get: function() {
                            var e = Object(o.d)("credit card", "PaymentMethodImage");
                            switch (this.props.paymentProvider) {
                                case "xsolla_v3":
                                    return {
                                        src: W.a,
                                        srcSet: {
                                            "1x": B.a,
                                            "2x": W.a
                                        },
                                        alt: Object(o.d)("Xsolla icon", "PaymentMethodImage")
                                    };
                                case "google_iab":
                                    return {
                                        src: f.a,
                                        alt: Object(o.d)("Android icon", "PaymentMethodImage")
                                    }
                            }
                            var t = this.props.paymentInstrumentType ? this.props.paymentInstrumentType.toUpperCase() : void 0,
                                r = this.props.cardType ? this.props.cardType.toUpperCase() : void 0;
                            switch (t) {
                                case z.F.CREDIT_CARD:
                                    switch (r) {
                                        case z.E.AMERICAN_EXPRESS:
                                            return {
                                                src: g.a,
                                                alt: Object(o.d)("American Express", "PaymentMethodImage")
                                            };
                                        case z.E.DISCOVER:
                                            return {
                                                src: E.a,
                                                alt: Object(o.d)("Discover", "PaymentMethodImage")
                                            };
                                        case z.E.MASTERCARD:
                                            return {
                                                src: this.props.darkModeEnabled ? O.a : k.a,
                                                alt: Object(o.d)("Mastercard", "PaymentMethodImage")
                                            };
                                        case z.E.VISA:
                                            return {
                                                src: I.a,
                                                alt: Object(o.d)("Visa", "PaymentMethodImage")
                                            };
                                        default:
                                            return {
                                                src: j.a,
                                                srcSet: {
                                                    "1x": j.a,
                                                    "2x": _.a
                                                },
                                                alt: e
                                            }
                                    }
                                case z.F.AMAZON:
                                    return {
                                        src: this.props.darkModeEnabled ? p.a : c.a,
                                        srcSet: this.props.darkModeEnabled ? {
                                            "1x": p.a,
                                            "2x": h.a
                                        } : {
                                            "1x": c.a,
                                            "2x": d.a
                                        },
                                        alt: Object(o.d)("Amazon Pay", "PaymentMethodImage")
                                    };
                                case z.F.PAYPAL:
                                    return {
                                        src: this.props.darkModeEnabled ? F.a : R.a,
                                        srcSet: this.props.darkModeEnabled ? {
                                            "1x": F.a,
                                            "2x": G.a
                                        } : {
                                            "1x": R.a,
                                            "2x": A.a
                                        },
                                        alt: Object(o.d)("Paypal", "PaymentMethodImage")
                                    };
                                default:
                                    return {
                                        src: j.a,
                                        srcSet: {
                                            "1x": j.a,
                                            "2x": _.a
                                        },
                                        alt: e
                                    }
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component));
            var Y = Object(i.connect)(function(e) {
                return {
                    darkModeEnabled: Object(V.a)(e) === X.a.Dark
                }
            })(Z);
            r.d(t, !1, function() {
                return Z
            }), r.d(t, "a", function() {
                return Y
            })
        },
        "6fcp": function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
                }(n || (n = {}))
        },
        "6oOb": function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.CONFIRMATION = 1] = "CONFIRMATION"
                }(n || (n = {}))
        },
        "7SjK": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("TSYQ"),
                o = r("/7QA"),
                s = r("GnwI"),
                c = r("Ue10"),
                u = (r("GOKC"), a.createElement(c.Eb, {
                    alignItems: c.f.Center,
                    background: c.r.Overlay,
                    borderRadius: c.x.Small,
                    className: "emote-button__lock",
                    color: c.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: c.X.InlineFlex,
                    justifyContent: c.Wa.Center,
                    position: c.jb.Absolute,
                    zIndex: c.ic.Above
                }, a.createElement(c.sb, {
                    asset: c.tb.Lock,
                    height: 10,
                    width: 10
                }))),
                d = function(e) {
                    var t = i("emote-button__link", {
                            "emote-button__link--locked": !e.onClick
                        }),
                        r = e.emote,
                        n = r.displayName,
                        d = r.srcSet;
                    if (!d) return null;
                    var l = a.createElement("img", {
                        className: "emote-picker__image",
                        srcSet: d,
                        alt: n
                    });
                    if (e.isCriticalImage) {
                        for (var p = d.split(" ")[0], m = {}, h = 0, y = d.split(","); h < y.length; h++) {
                            var f = y[h].trim().split(" "),
                                b = f[1],
                                g = f[0];
                            m[b] = g
                        }
                        l = a.createElement(s.a, {
                            className: "emote-picker__emote-image",
                            src: p,
                            srcSet: m,
                            alt: n || ""
                        })
                    }
                    return a.createElement("div", {
                        className: "emote-button"
                    }, a.createElement(c.Yb, {
                        label: n || Object(o.d)("Emote", "EmoteButton"),
                        direction: c.ac.Bottom
                    }, a.createElement(c.Pa, {
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Wa.Center
                    }, a.createElement("button", {
                        "data-test-selector": "emote-button-clickable",
                        className: t,
                        "aria-label": n,
                        name: n,
                        onClick: e.onClick ? e.onClick.bind(null, e.emote) : void 0,
                        "data-a-target": n
                    }, a.createElement("figure", null, e.locked ? u : null, l)))))
                },
                l = (r("VrOd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickEmote = function(e) {
                            t.props.onClickEmote && t.props.onClickEmote(e, t.props.context)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.emotes.map(function(t, r) {
                                return a.createElement(c.Xa, {
                                    key: "emote-button-padder-" + t.id + "--" + t.setID,
                                    padding: {
                                        left: e.props.spaced ? .5 : 0
                                    }
                                }, a.createElement(d, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === r,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                }))
                            });
                        return a.createElement(c.Xa, {
                            display: c.X.Flex,
                            flexWrap: c.Ba.Wrap,
                            justifyContent: c.Wa.Center
                        }, t)
                    }, t
                }(a.Component));
            r.d(t, "a", function() {
                return l
            })
        },
        "85n/": function(e, t, r) {
            "use strict";
            var n = r("TQGo");
            r.d(t, "a", function() {
                return n.a
            })
        },
        "88jh": function(e, t, r) {},
        "9fjZ": function(e, t, r) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TicketDescription"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "productName"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "taxCountry"
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
                            alias: {
                                kind: "Name",
                                value: "product"
                            },
                            name: {
                                kind: "Name",
                                value: "subscriptionProduct"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "productName"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priceInfo"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "taxCountry"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "taxCountry"
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
                                                value: "currency"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "exponent"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                                value: "isTaxInclusive"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tax"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "total"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "interval"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "unit"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasAdFree"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasFastChat"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasSubonlyVideoArchive"
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
                                                value: "displayName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "bannerImageURL"
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
                                                    value: "300"
                                                }
                                            }],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastBadges"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "badge"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionProducts"
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
                                                        value: "emotes"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "giftPromotion"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "newPrice"
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
                                                value: "promotion"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "paidUpgradePromotion"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "benefit"
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
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
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
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 667
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery TicketDescription($productName: String! $taxCountry: String) {\nproduct: subscriptionProduct(productName: $productName) {\nid\ndisplayName\npriceInfo(taxCountry: $taxCountry) {\ncurrency\nexponent\nid\nisTaxInclusive\nprice\ntax\ntotal\n}\ninterval {\nunit\n}\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\ntier\nowner {\nid\ndisplayName\nbannerImageURL\nprofileImageURL(width: 300)\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\ntier\nemotes {\nid\ntoken\n}\n}\n}\ngiftPromotion {\nnewPrice\n}\nself {\npromotion {\nnewPrice\n}\npaidUpgradePromotion {\nnewPrice\n}\nbenefit {\nid\ngift {\nisGift\n}\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(r("IKE4").definitions)), e.exports = n
        },
        AVF4: function(e, t, r) {
            e.exports = r.p + "assets/credit_cards_1x-0c57bd2e9d4cd4bb8474.png"
        },
        Aoab: function(e, t, r) {},
        BIez: function(e, t, r) {
            e.exports = r.p + "assets/credit_cards_2x-051201f07d7c83cdf807.png"
        },
        C8FX: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/7QA"),
                o = r("Ue10");
            r("uUdG");
            var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return this.props.price ? a.createElement(o.Xa, {
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column
                    }, this.props.productDiscountPrice && a.createElement(o.W, {
                        bold: !0,
                        className: "ticket-price__promotion",
                        fontSize: o.Ca.Size4
                    }, Object(i.d)("{discountedPrice} / First Month*", {
                        discountedPrice: this.props.productDiscountPrice
                    }, "TicketPrice")), a.createElement(o.Xa, {
                        display: o.X.Flex,
                        justifyContent: o.Wa.Center,
                        flexWrap: o.Ba.Wrap
                    }, a.createElement(o.W, {
                        type: o.Vb.Span,
                        fontSize: o.Ca.Size4,
                        decoration: this.props.productDiscountPrice ? o.Tb.Strikethrough : void 0,
                        "data-a-target": "js-test-ticket-price-text"
                    }, Object(i.d)("{price} / {interval}", {
                        price: a.createElement(o.W, {
                            type: o.Vb.Span,
                            bold: !0
                        }, this.props.price),
                        interval: function(e) {
                            switch (e) {
                                case "WEEK":
                                    return Object(i.d)("Week", "TicketPrice");
                                case "MONTH":
                                    return Object(i.d)("Month", "TicketPrice");
                                case "YEAR":
                                    return Object(i.d)("Year", "TicketPrice");
                                case "ONE_TIME":
                                    return Object(i.d)("One-Time Purchase", "TicketPrice");
                                default:
                                    return ""
                            }
                        }(this.props.interval)
                    }, "TicketDescription")), this.formattedTaxInclusivity && a.createElement(o.Pa, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(o.W, {
                        fontSize: o.Ca.Size4,
                        type: o.Vb.Span,
                        decoration: this.props.productDiscountPrice ? o.Tb.Strikethrough : void 0
                    }, Object(i.d)("(Includes VAT)", "TicketDescription"))))) : a.createElement(o.Za, {
                        fillContent: !0
                    })
                }, Object.defineProperty(t.prototype, "formattedTaxInclusivity", {
                    get: function() {
                        return this.props.showEuSubs && this.props.productPriceTaxInclusive ? Object(i.d)("(Includes VAT)", "TicketPrice") : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.PureComponent);
            r.d(t, "a", function() {
                return s
            })
        },
        D8NC: function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_1x-94c97f413ee6005ab1a1.png"
        },
        E3rh: function(e, t, r) {
            e.exports = r.p + "assets/more_methods_dark_2x-606b603eb4951527dc9f.png"
        },
        E78O: function(e, t, r) {},
        EF6p: function(e, t, r) {
            e.exports = r.p + "assets/more_methods_1x-98862ad01d0cfaef3e09.png"
        },
        FBRg: function(e, t, r) {
            e.exports = r.p + "assets/paypal_2x-bddabc156344e695fa56.png"
        },
        "GA+j": function(e, t, r) {
            e.exports = r.p + "assets/paypal_1x-a2a2f7d96b4384f9f1d7.png"
        },
        GOKC: function(e, t, r) {},
        H5OX: function(e, t, r) {},
        HGFl: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return a
            }), r.d(t, "b", function() {
                return i
            }), r.d(t, "c", function() {
                return o
            }), r.d(t, "d", function() {
                return s
            });
            var n = r("NAv5"),
                a = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function i(e, t) {
                return Object(n.format)(e, t)
            }

            function o(e) {
                return Object(n.parse)(e)
            }

            function s(e, t) {
                var r = e.split(":");
                if (2 !== r.length) throw new Error("invalid time string: " + e);
                var n = parseInt(r[0], 10),
                    a = parseInt(r[1].substring(0, 2), 10),
                    i = r[1].substring(r[1].length - 2);
                if (12 === n && "am" === i && (n = 0), "pm" === i && n < 12 && (n += 12), isNaN(n) || n < 0 || n > 23 || isNaN(a) || a < 0 || a > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(n, a), o
            }
        },
        HvcU: function(e, t, r) {
            e.exports = r.p + "assets/generic_credit_card_2x-9e855c7d5c5359ac9208.png"
        },
        IKE4: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "badge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Badge"
                        }
                    },
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
                                value: "setID"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "version"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "image1x"
                            },
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "size"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "NORMAL"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "image2x"
                            },
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "size"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "DOUBLE"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "image4x"
                            },
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "size"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "QUADRUPLE"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "clickAction"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "clickURL"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 170
                }
            };
            r.loc.source = {
                body: "fragment badge on Badge {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        IRK4: function(e, t, r) {
            e.exports = r.p + "assets/paypal_dark_1x-894b335a3c74ebaba75f.png"
        },
        JH5r: function(e, t, r) {},
        Jgup: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return a
            }), r.d(t, "a", function() {
                return i
            });
            var n = r("/7QA");

            function a(e) {
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
            }
            var i = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
        },
        "KJv/": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("oJmH"),
                o = r("/7QA"),
                s = r("cZKs"),
                c = r("8/mp"),
                u = r("yR8l"),
                d = r("UUve"),
                l = r("NvVO"),
                p = r("2xye"),
                m = r("SNyx"),
                h = r("GnwI"),
                y = r("Nk81"),
                f = r("Ue10"),
                b = r("LS/W");
            r("H5OX");

            function g(e) {
                return !e.recipientLogin
            }
            var v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startTime = Date.now(), t.handleOnClose = function() {
                            Object(d.e)(), t.props.onClose && t.props.onClose()
                        }, t.onBeforeUnloadHandler = function() {
                            Object(d.e)(), window.removeEventListener("beforeunload", t.onBeforeUnloadHandler)
                        }, t.trackBenchmarkComplete = function() {
                            t.props.latencyTracking.unsubscribeFromInteractivityCompletion(t.trackBenchmarkComplete);
                            var e = Date.now() - t.startTime;
                            new y.a(o.p.tracking, o.p.logger).trackCompleteTransition(l.a.SubsCheckoutPage, p.PageviewLocation.SubsCheckoutPage, "SubsCheckoutPage", e, e, !1, document.hidden)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.subscribeToInteractivityCompletion(this.trackBenchmarkComplete), this.reportInteractive(), window.addEventListener("beforeunload", this.onBeforeUnloadHandler)
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        Object(d.e)(), this.props.latencyTracking.unsubscribeFromInteractivityCompletion(this.trackBenchmarkComplete)
                    }, t.prototype.render = function() {
                        var e;
                        if (this.props.data && this.props.data.loading) e = null;
                        else {
                            var t = this.props.data && this.props.data.recipient || null;
                            e = a.createElement(c.b, {
                                suppressScrollX: !0
                            }, a.createElement(m.a, {
                                productName: this.props.productName,
                                isGift: !(!t || !t.id) || !!this.props.mysteryGiftCount,
                                recipientID: t && t.id,
                                recipientDisplayName: t && t.displayName,
                                trackingContext: this.props.trackingContext,
                                mysteryGiftCount: this.props.mysteryGiftCount || null,
                                isAnonymous: this.props.isAnonymous || !1,
                                onCheckoutProgress: this.props.onCheckoutProgress
                            }))
                        }
                        return a.createElement(f.Eb, {
                            background: f.r.Alt,
                            className: "checkout-modal__container"
                        }, e, a.createElement(s.a, {
                            ignoreEscKey: !0,
                            closeOnPageNavigation: !0,
                            onClose: this.handleOnClose
                        }))
                    }, t.prototype.reportInteractive = function() {
                        g(this.props) ? this.props.latencyTracking.reportInteractive() : !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(a.Component),
                E = Object(i.compose)(Object(h.b)("CheckoutModal"), Object(u.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.recipientLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return g(e)
                    }
                }))(v);
            r.d(t, "CheckoutModal", function() {
                return E
            }), r.d(t, "CheckoutModalPublicProps", function() {}), r.d(t, "clearSubscriptionCheckoutKeys", function() {
                return d.e
            }), r.d(t, "SUB_CHECKOUT__PRODUCT_KEY", function() {
                return d.c
            }), r.d(t, "SUB_CHECKOUT__RECIPIENT_KEY", function() {
                return d.d
            }), r.d(t, "showLoginModalWithCheckoutDispatch", function() {
                return d.f
            })
        },
        KL9a: function(e, t, r) {
            e.exports = r.p + "assets/mastercard_dark-a85ba185886a8899fef1.svg"
        },
        KRuc: function(e, t, r) {
            e.exports = r.p + "assets/paypal_2x-36ebff55eec001d935d0.png"
        },
        KYZ7: function(e, t, r) {
            e.exports = r.p + "assets/turbo-logo-a785836787e34974eea8.svg"
        },
        KjOM: function(e, t, r) {},
        "LS/W": function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CheckoutModal_GiftRecipient"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recipientLogin"
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
                                value: "recipient"
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
                                        value: "recipientLogin"
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
                                        value: "displayName"
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
                    end: 122
                }
            };
            r.loc.source = {
                body: "query CheckoutModal_GiftRecipient ($recipientLogin: String!) {\nrecipient: user(login: $recipientLogin){\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        MU3X: function(e, t, r) {
            e.exports = r.p + "assets/more_methods_dark_1x-e97146d0a834e34ca979.png"
        },
        NwMv: function(e, t, r) {},
        OpME: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return u
            }), r.d(t, "e", function() {
                return d
            }), r.d(t, "c", function() {
                return p
            }), r.d(t, "a", function() {
                return m
            }), r.d(t, "f", function() {
                return h
            }), r.d(t, "d", function() {
                return y
            });
            var n = r("mrSG"),
                a = r("lZdE"),
                i = r("cpJf"),
                o = {
                    "B-?\\)": "B)",
                    "\\:-?[z|Z|\\|]": ":|",
                    "\\:-?\\)": ":)",
                    "\\:-?\\(": ":(",
                    "\\:-?(p|P)": ":P",
                    "\\;-?(p|P)": ";P",
                    "\\:-?[\\\\/]": ":/",
                    "\\;-?\\)": ";)",
                    "R-?\\)": "R)",
                    ":>": ":>",
                    "\\:\\&gt\\;": ":>",
                    "[oO](_|\\.)[oO]": "O_o",
                    "\\:-?D": ":D",
                    "\\:-?(o|O)": ":O",
                    ">\\\\(": ">(",
                    ":-?(?:7|L)": ":7",
                    "\\:-?(S|s)": ":S",
                    "#-?[\\\\/]": "#/",
                    "<\\]": "<]",
                    "<3": "<3",
                    "\\&lt\\;3": "<3",
                    "\\&lt\\;\\]": "<]",
                    "\\&gt\\;\\(": ">("
                },
                s = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function u(e) {
                for (var t = [], r = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var r = o[e.token] || e.token,
                            a = s.reduce(function(t, r) {
                                var n = t;
                                return n && (n = n.concat(", ")), n.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + r + " " + r + "x")
                            }, "");
                        t.push(n.__assign({
                            displayName: r,
                            srcSet: a
                        }, e))
                    }, a = 0, i = e; a < i.length; a++) {
                    r(i[a])
                }
                return t
            }

            function d(e, t) {
                var r = u(e);
                return t && (r = function(e, t) {
                    return e.map(function(e) {
                        return n.__assign({}, e, {
                            setID: t
                        })
                    })
                }(r, t)), r
            }

            function l(e) {
                return e.filter(function(e) {
                    return !!e && !!e.id && !!e.token
                }).sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            }

            function p(e) {
                for (var t = [], r = 0, n = e; r < n.length; r++) {
                    var a = n[r];
                    if (a && a.id && a.emotes) {
                        for (var i = {
                                id: a.id,
                                emotes: []
                            }, o = 0, s = a.emotes; o < s.length; o++) {
                            var c = s[o];
                            c && c.id && c.token && i.emotes.push(c)
                        }
                        t.push(i)
                    }
                }
                return t
            }

            function m(e) {
                for (var t = [], r = [], n = 0, a = e; n < a.length; n++) {
                    var i = a[n];
                    if (i && i.id && i.emotes) {
                        var o = {
                            id: i.id,
                            emotes: d(l(i.emotes), i.id)
                        };
                        i.owner && (o.owner = i.owner), c.has(parseInt(i.id, 10)) ? t.push(o) : r.push(o)
                    }
                }
                return r.concat(t)
            }
            var h = function(e, t, r) {
                    var n = r || i.d,
                        o = [],
                        s = [],
                        c = [],
                        u = new RegExp("^" + Object(a.a)(t), "i");
                    return e.forEach(function(e) {
                        n[e.token] ? c.push(e) : e.token.match(u) ? o.push(e) : s.push(e)
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return n[t.token].count - n[e.token].count
                    }), c.concat(o).concat(s)
                },
                y = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        PwAB: function(e, t, r) {
            e.exports = r.p + "assets/xsolla_2x-b8ef30f34626976fddc4.png"
        },
        QV0B: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("Ue10"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            collapsed: !0
                        }, t.toggleCollapsed = function() {
                            t.setState(function(e) {
                                return {
                                    collapsed: !e.collapsed
                                }
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return this.props.collapsable ? a.createElement(a.Fragment, null, a.createElement(i.Xa, {
                            display: this.state.collapsed ? i.X.Hide : i.X.Block,
                            breakpointLarge: {
                                display: i.X.Block
                            }
                        }, a.createElement(i.H, null, this.props.children)), a.createElement(i.Xa, {
                            display: i.X.Block,
                            breakpointLarge: {
                                display: i.X.Hide
                            }
                        }, a.createElement(i.Ua, {
                            onClick: this.toggleCollapsed,
                            hover: !1,
                            type: i.Va.Alpha
                        }, a.createElement(i.Xa, {
                            fullWidth: !0,
                            textAlign: i.Rb.Center,
                            alignItems: i.f.Center,
                            padding: {
                                y: 1
                            }
                        }, a.createElement(i.W, {
                            type: i.Vb.Span,
                            color: i.O.Link
                        }, this.state.collapsed ? this.props.showButtonLabel : this.props.hideButtonLabel))))) : a.createElement(i.H, null, this.props.children)
                    }, t
                }(a.Component);
            r.d(t, "a", function() {
                return o
            })
        },
        QxOQ: function(e, t, r) {},
        "R9u/": function(e, t, r) {},
        SNyx: function(e, t, r) {
            "use strict";
            var n, a = r("/MKj"),
                i = r("fvjX"),
                o = r("1/iK"),
                s = r("y5D0"),
                c = r("kRBY"),
                u = r("mrSG"),
                d = r("NAv5"),
                l = r("q1tI"),
                p = r("/7QA"),
                m = r("ZDlU"),
                h = r("yR8l"),
                y = r("HGFl"),
                f = r("DMoW"),
                b = r("b6Yk"),
                g = r("tIid");
            ! function(e) {
                e[e.PERSONAL_SUB = 0] = "PERSONAL_SUB", e[e.GIFT_SUB = 1] = "GIFT_SUB", e[e.MYSTERY_GIFT = 2] = "MYSTERY_GIFT"
            }(n || (n = {}));
            var v, E, C = r("Ue10"),
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return this.props.product ? (e = this.props.purchaseFlow === n.GIFT_SUB || this.props.purchaseFlow === n.MYSTERY_GIFT ? this.isEsportPurchase ? this.giftEsportMessageText : this.giftSubMessageText : this.isEsportPurchase ? this.personalEsportMessageText : "turbo" === this.props.product.product.name ? this.turboMessageText : this.personalSubMessageText, l.createElement(C.Xa, null, e)) : l.createElement(C.ib, null);
                        var e
                    }, Object.defineProperty(t.prototype, "turboMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Twitch Turbo subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return l.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return l.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product && this.props.product.product.owner;
                            return e && e.id && Object(g.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "personalEsportMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Pass is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return l.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return l.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "giftEsportMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Pass gift is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return l.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return l.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "personalSubMessageText", {
                        get: function() {
                            if (this.props.product) {
                                var e = Object(p.d)("Buying a Channel Subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                        "x:link": function(e) {
                                            return l.createElement(C.U, {
                                                targetBlank: !0,
                                                to: "https://help.twitch.tv/"
                                            }, e)
                                        }
                                    }, "CheckoutDescription"),
                                    t = Object(p.d)('You may cancel at any time by selecting "Do Not Renew" on your <x:link>subscriptions page</x:link>.', {
                                        "x:link": function(e) {
                                            return l.createElement(C.U, {
                                                targetBlank: !0,
                                                to: "/subscriptions"
                                            }, e)
                                        }
                                    }, "CheckoutDescription");
                                return l.createElement(l.Fragment, null, l.createElement(C.W, null, e), this.props.product.product.interval.unit === f.T.MONTH && l.createElement(C.W, null, t))
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "giftSubMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Gift Subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return l.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return l.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(l.PureComponent),
                P = (r("JH5r"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(C.Eb, {
                            className: "checkout-error-brick",
                            background: C.r.Base,
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            borderRadius: C.x.Small,
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            justifyContent: C.Wa.Center,
                            padding: {
                                x: 1,
                                y: 2
                            }
                        }, this.props.children)
                    }, t
                }(l.Component));
            r("acxT");
            ! function(e) {
                e[e.DefaultMessage = 0] = "DefaultMessage", e[e.PriceChangeNotice = 1] = "PriceChangeNotice", e[e.InvalidResidence = 2] = "InvalidResidence", e[e.InvalidPaymentMethod = 3] = "InvalidPaymentMethod"
            }(v || (v = {})),
            function(e) {
                e[e.Info = 0] = "Info", e[e.Error = 1] = "Error"
            }(E || (E = {}));
            var O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return this.props.level === E.Error ? l.createElement(P, null, l.createElement(C.W, {
                            bold: !0
                        }, this.title), l.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, l.createElement(C.W, null, this.message))) : this.props.level === E.Info ? l.createElement(C.Eb, {
                            className: "checkout-error--info",
                            display: C.X.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(C.sb, {
                            asset: C.tb.NotificationInfo
                        }), l.createElement(C.Xa, {
                            margin: {
                                left: 2
                            }
                        }, l.createElement(C.W, null, this.message))) : void 0
                    }, Object.defineProperty(t.prototype, "title", {
                        get: function() {
                            return this.props.errorCode === v.DefaultMessage ? Object(p.d)("Payment not processed", "CheckoutError") : this.props.errorCode === v.InvalidResidence ? Object(p.d)("Invalid country of residence", "CheckoutError") : this.props.errorCode === v.InvalidPaymentMethod ? Object(p.d)("This payment method is not available for your purchase at this time", "CheckoutError") : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "message", {
                        get: function() {
                            return this.props.errorCode === v.DefaultMessage ? Object(p.d)("Something went wrong, and your payment could not be processed at this time. Please try again later.", "CheckoutError") : this.props.errorCode === v.PriceChangeNotice ? Object(p.d)("We made a change to the price to reflect your country of purchase. Please review the updated price and confirm your payment again.", "CheckoutError") : this.props.errorCode === v.InvalidResidence ? Object(p.d)("Make sure your country of residence and postal code are both valid.", "CheckoutError") : this.props.errorCode === v.InvalidPaymentMethod ? Object(p.d)("Please continue checkout using another payment method.", "CheckoutError") : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(l.Component),
                S = r("6oOb"),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return this.props.progress === S.a.CONFIRMATION ? l.createElement(C.W, {
                            type: C.Vb.H2,
                            bold: !0
                        }, Object(p.d)("Purchase Successful", "CheckoutHeader")) : l.createElement(C.W, {
                            type: C.Vb.H2,
                            bold: !0
                        }, this.headerText)
                    }, Object.defineProperty(t.prototype, "headerText", {
                        get: function() {
                            return this.props.purchaseFlow === n.GIFT_SUB || this.props.purchaseFlow === n.MYSTERY_GIFT ? this.isEsportPurchase ? Object(p.d)("Gift All-Access Pass", "CheckoutHeader") : Object(p.d)("Gift A Subscription", "CheckoutHeader") : this.props.purchaseFlow === n.PERSONAL_SUB ? this.isEsportPurchase ? Object(p.d)("Get Your All-Access Pass", "CheckoutHeader") : Object(p.d)("Subscription Payment Information", "CheckoutHeader") : Object(p.d)("Checkout", "CheckoutHeader")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product && this.props.product.product.owner;
                            return e && e.id && Object(g.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(l.Component);
            var N, j = Object(a.connect)(function(e) {
                    return {
                        sessionUser: Object(c.e)(e)
                    }
                })(I),
                w = (r("u/1r"), function(e) {
                    return l.createElement(C.Xa, {
                        fullWidth: !0,
                        padding: 3,
                        overflow: C.cb.Auto
                    }, l.createElement(C.Xa, {
                        display: C.X.Flex,
                        justifyContent: C.Wa.Center,
                        flexWrap: C.Ba.Wrap
                    }, l.createElement(C.Xa, {
                        display: C.X.Hide,
                        alignItems: C.f.Start,
                        breakpointLarge: {
                            display: C.X.Flex
                        }
                    }, e.productDescription), l.createElement(C.Xa, {
                        className: "checkout-layout__content",
                        breakpointLarge: {
                            margin: {
                                left: 4
                            }
                        }
                    }, e.header, l.createElement(C.Xa, {
                        display: C.X.Flex,
                        breakpointLarge: {
                            display: C.X.Hide
                        }
                    }, e.productDescription), l.createElement(C.Xa, {
                        margin: {
                            y: 1
                        }
                    }, e.children))))
                }),
                _ = function() {
                    var e = Object(p.d)('By clicking "Complete Purchase", you hereby agree to Twitch\'s <x:tos>Terms of Sale</x:tos> and <x:privacy>Privacy Policy</x:privacy>. Your payment method will be saved for future purchases, and, if applicable, recurring subscription payments.', {
                        "x:tos": function(e) {
                            return l.createElement(C.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/terms-of-sale/"
                            }, e)
                        },
                        "x:privacy": function(e) {
                            return l.createElement(C.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/privacy-policy/"
                            }, e)
                        }
                    }, "CheckoutDisclaimer");
                    return l.createElement(C.Xa, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(C.W, null, e))
                };

            function T(e) {
                switch (e) {
                    case N.GIFTABLE_RECIPIENT:
                    case N.NEW_PURCHASE:
                    case N.TIER_UPGRADE:
                    case N.PRIME_UPGRADE:
                    case N.UNKNOWN:
                        return !0;
                    case N.NO_ITEM:
                    case N.NON_GIFTABLE_RECIPIENT:
                    case N.NO_MASS_GIFTING:
                    case N.TIER_DOWNGRADE:
                    case N.MOBILE_UPGRADE:
                    case N.API_INELIGIBLE:
                    default:
                        return !1
                }
            }! function(e) {
                e[e.GIFTABLE_RECIPIENT = 0] = "GIFTABLE_RECIPIENT", e[e.NEW_PURCHASE = 1] = "NEW_PURCHASE", e[e.TIER_UPGRADE = 2] = "TIER_UPGRADE", e[e.PRIME_UPGRADE = 3] = "PRIME_UPGRADE", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.NO_ITEM = 5] = "NO_ITEM", e[e.NON_GIFTABLE_RECIPIENT = 6] = "NON_GIFTABLE_RECIPIENT", e[e.NO_MASS_GIFTING = 7] = "NO_MASS_GIFTING", e[e.TIER_DOWNGRADE = 8] = "TIER_DOWNGRADE", e[e.MOBILE_UPGRADE = 9] = "MOBILE_UPGRADE", e[e.API_INELIGIBLE = 10] = "API_INELIGIBLE"
            }(N || (N = {}));
            var R, M = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        var e;
                        switch (this.props.productEligibility) {
                            case N.NON_GIFTABLE_RECIPIENT:
                                e = this.isEsportPurchase ? Object(p.d)("Sorry, an All-Access Pass to this channel is not available for <x:bold>{recipientName}</x:bold>.", {
                                    "x:bold": function(e) {
                                        return l.createElement(C.W, {
                                            type: C.Vb.Span,
                                            bold: !0
                                        }, e)
                                    },
                                    recipientName: this.props.product.recipient && this.props.product.recipient.displayName || ""
                                }, "IneligiblePurchaseNotice") : Object(p.d)("Sorry, a Gift Subscription to this channel is not available for <x:bold>{recipientName}</x:bold>.", {
                                    "x:bold": function(e) {
                                        return l.createElement(C.W, {
                                            type: C.Vb.Span,
                                            bold: !0
                                        }, e)
                                    },
                                    recipientName: this.props.product.recipient && this.props.product.recipient.displayName || ""
                                }, "IneligiblePurchaseNotice");
                                break;
                            case N.NO_MASS_GIFTING:
                                e = Object(p.d)("Community gifts are not eligible for this product.", "IneligiblePurchaseNotice");
                                break;
                            case N.TIER_DOWNGRADE:
                                var t = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.login;
                                e = Object(p.d)("You are currently subscribed to a higher-tier subscription that offers more benefits. <x:subsLink>Click here to compare subscription benefits</x:subsLink>. If you would still like to purchase this, please <x:subsMgmtLink>cancel your existing subscription</x:subsMgmtLink> or wait for your existing subscription to end.", {
                                    "x:subsLink": function(e) {
                                        return l.createElement(C.U, {
                                            type: C.V.Inherit,
                                            to: "/subs/" + (t || ""),
                                            underline: !0
                                        }, e)
                                    },
                                    "x:subsMgmtLink": function(e) {
                                        return l.createElement(C.U, {
                                            type: C.V.Inherit,
                                            to: "/subscriptions",
                                            underline: !0
                                        }, e)
                                    }
                                }, "IneligiblePurchaseNotice");
                                break;
                            case N.MOBILE_UPGRADE:
                                var r = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.displayName;
                                return l.createElement(m.a, null, l.createElement(C.W, {
                                    bold: !0
                                }, Object(p.d)("You purchased a subscription to {productDisplayName} on your mobile device.", {
                                    productDisplayName: r || ""
                                }, "IneligiblePurchaseNotice")), l.createElement(C.Xa, {
                                    margin: {
                                        top: 1
                                    }
                                }, l.createElement(C.W, null, Object(p.d)("Upgrading your mobile subscription is currently not supported.", "IneligiblePurchaseNotice"))));
                            default:
                                e = Object(p.d)("You are not eligible for this purchase.", "IneligiblePurchaseNotice")
                        }
                        return l.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(C.W, {
                            color: C.O.Error
                        }, e))
                    }, Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product.product.owner;
                            return e && e.id && Object(g.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(l.PureComponent),
                A = function(e) {
                    return l.createElement(C.Eb, {
                        background: C.r.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(C.W, null, Object(p.d)("You are currently subscribed for free with Twitch Prime. If you choose to upgrade to the {newPrice} subscription, you will be immediately billed for {newPrice} and your new subscription will auto-renew every month.", {
                        newPrice: e.newPrice
                    }, "UpgradePrimeWarning"))), l.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(C.W, null, Object(p.d)("You'll be able to subscribe to another channel for free with Twitch Prime 30 days after you last used your free subscription.", "UpgradePrimeWarning"))), l.createElement(C.W, null, Object(p.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradePrimeWarning")))
                },
                x = function(e) {
                    return l.createElement(C.Eb, {
                        background: C.r.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(C.W, null, Object(p.d)("You are currently subscribed to the {originalPrice} subscription plan. If you choose to upgrade to the {newPrice} subscription plan, you will be immediately billed for {newPrice} and your currently active subscription plan for {originalPrice} will not renew any further.", {
                        originalPrice: e.originalPrice,
                        newPrice: e.newPrice
                    }, "UpgradeTierWarning"))), l.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(C.W, null, Object(p.d)("Please note that pro-rated refunds cannot be offered for the remaining time on your {originalPrice} subscription plan", {
                        originalPrice: e.originalPrice
                    }, "UpgradeTierWarning"))), l.createElement(C.W, null, Object(p.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradeTierWarning")))
                },
                F = (r("mIie"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.enablePaidUpgradeFlag = p.b.get("earth_wind_fire", !1), t.chargeTimeMessage = Object(p.d)("You will be charged on {date}", {
                            date: Object(p.c)(new Date(Date.now()), "medium")
                        }, "PurchasePreview"), t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.product) return null;
                        var e = l.createElement(l.Fragment, null),
                            t = l.createElement(l.Fragment, null);
                        if (this.props.purchaseFlow === n.GIFT_SUB) t = this.renderGiftSubPurchase();
                        else if (this.props.purchaseFlow === n.MYSTERY_GIFT) t = this.renderMysteryGiftSubPurchase();
                        else if (this.props.purchaseFlow === n.PERSONAL_SUB)
                            if (this.props.eligiblePromotions && this.props.eligiblePromotions.isOneMonthFreeEligible && (e = this.renderOneFreeMonth()), this.props.productEligibility === N.TIER_UPGRADE) t = this.renderTierUpgrade();
                            else if (this.props.productEligibility === N.PRIME_UPGRADE) {
                            var r = this.formattedPrice;
                            r && (t = l.createElement(A, {
                                newPrice: r
                            }))
                        } else this.props.productEligibility === N.NEW_PURCHASE && this.hasActiveGiftSubscription && (this.props.eligiblePromotions && this.props.eligiblePromotions.paidUpgradePromotion && (e = this.renderSubtemberDiscount()), t = this.renderGiftSubUpgrade());
                        return l.createElement(l.Fragment, null, e, (!this.hasActiveGiftSubscription || this.props.purchaseFlow !== n.PERSONAL_SUB) && l.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, l.createElement(C.W, null, this.chargeTimeMessage)), t)
                    }, t.prototype.renderTierUpgrade = function() {
                        var e = this.props.existingPurchases && this.props.existingPurchases.compatiblePurchases && this.props.existingPurchases.compatiblePurchases[0];
                        if (!e) return null;
                        var t = e.price,
                            r = e.currency,
                            n = e.divisor,
                            a = Object(p.f)(t / n, {
                                style: "currency",
                                currency: r
                            }),
                            i = this.formattedPrice;
                        return a && i ? l.createElement(x, {
                            originalPrice: a,
                            newPrice: i
                        }) : null
                    }, t.prototype.renderGiftSubUpgrade = function() {
                        var e = this.props.benefit.endsAt;
                        if (!e) return null;
                        var t = Object(y.c)(e);
                        return l.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(C.W, null, Object(p.d)("You will be charged when your Gift Subscription ends on <x:strong>{giftSubEndDateFormatted, date, short}</x:strong>.", {
                            giftSubEndDateFormatted: t,
                            "x:strong": function(e) {
                                return l.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PurchasePreview")))
                    }, t.prototype.renderGiftSubPurchase = function() {
                        var e, t = this.props.product && this.props.product.recipient && this.props.product.recipient.displayName;
                        return this.formattedPrice ? (e = this.isEsportPurchase ? Object(p.d)("You are buying a {price} Overwatch League All-Access Pass for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: l.createElement(C.W, {
                                type: C.Vb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview") : Object(p.d)("You are buying a Single Month {price} Gift Subscription for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: l.createElement(C.W, {
                                type: C.Vb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview"), l.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(C.W, null, e))) : null
                    }, t.prototype.renderMysteryGiftSubPurchase = function() {
                        if (!this.props.product) return null;
                        var e, t = this.props.product.product && this.props.product.product.tier,
                            r = t && parseInt(t, 10) / 1e3,
                            n = this.props.product.quantity;
                        if (!n || !this.formattedPrice) return null;
                        var a = Object(p.d)("Gift recipients will be chosen at random, starting with viewers of the streamer's channel who do not currently subscribe. <x:gift-info>Learn how Twitch picks recipients.</x:gift-info>", {
                            "x:gift-info": function(e) {
                                return l.createElement(C.U, {
                                    targetBlank: !0,
                                    to: "https://help.twitch.tv/customer/portal/articles/2903710-gift-subscriptions#CommunityGifting"
                                }, e)
                            }
                        }, "PurchasePreview");
                        e = this.isEsportPurchase ? Object(p.d)("{quantity, plural, one {{quantity} x Overwatch League All-Access Pass Gift} other {{quantity} x Overwatch League All-Access Pass Gifts}}", {
                            quantity: n
                        }, "PurchasePreview") : Object(p.d)("{quantity, plural, one {{quantity} x Single Month Tier {numericalTier} Gift Subscription} other {{quantity} x Single Month Tier {numericalTier} Gift Subscriptions}}", {
                            quantity: n,
                            numericalTier: r
                        }, "PurchasePreview");
                        var i = this.props.product.product.priceInfo.total * n,
                            o = Object(p.d)("{price} each", {
                                price: this.formattedPrice
                            }, "PurchasePreview"),
                            s = Object(p.d)("Total {totalPrice}", {
                                totalPrice: Object(p.f)(i / Math.pow(10, this.props.product.product.priceInfo.exponent), {
                                    style: "currency",
                                    currency: this.props.product.product.priceInfo.currency
                                })
                            }, "PurchasePreview");
                        return l.createElement(l.Fragment, null, l.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(C.Xa, null, l.createElement(C.W, {
                            type: C.Vb.H5
                        }, e)), l.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(C.W, {
                            type: C.Vb.H5
                        }, o)), l.createElement(C.W, {
                            type: C.Vb.H5,
                            bold: !0
                        }, s)), l.createElement(C.W, null, a))
                    }, t.prototype.renderOneFreeMonth = function() {
                        var e = new Date,
                            t = this.props.benefit;
                        t && null !== t.endsAt && (e = Object(y.c)(t.endsAt));
                        var r = new Date(e);
                        return r.setMonth(e.getMonth() + 1), l.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(C.W, null, Object(p.d)("Your next month is on us. You will be charged when your free month ends on <x:strong>{futureChargeDate, date, short}</x:strong>.", {
                            futureChargeDate: r,
                            "x:strong": function(e) {
                                return l.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PurchasePreview")))
                    }, t.prototype.renderSubtemberDiscount = function() {
                        return this.enablePaidUpgradeFlag && this.props.eligiblePromotions && this.props.eligiblePromotions.paidUpgradePromotion ? l.createElement(C.Eb, {
                            background: C.r.Base,
                            className: "purchase-preview__promotion-banner",
                            padding: 1,
                            margin: {
                                y: 1
                            },
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column
                        }, l.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("*Subtember Limited-Time Promotion Applied", "PurchasePreview")), l.createElement(C.W, null, Object(p.d)("Your first month will cost {discountedPrice} and {oldPrice} for each recurring month.", {
                            discountedPrice: this.props.eligiblePromotions.paidUpgradePromotion.newPrice,
                            oldPrice: this.props.eligiblePromotions.paidUpgradePromotion.oldPrice
                        }, "PurchasePreview"))) : null
                    }, Object.defineProperty(t.prototype, "formattedPrice", {
                        get: function() {
                            return this.props.product && this.props.product.product.priceInfo ? Object(p.f)(this.props.product.product.priceInfo.total / Math.pow(10, this.props.product.product.priceInfo.exponent), {
                                style: "currency",
                                currency: this.props.product.product.priceInfo.currency
                            }) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasActiveGiftSubscription", {
                        get: function() {
                            return !!(this.props.benefit && this.props.benefit.gift && this.props.benefit.gift.isGift)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            return this.props.product && this.props.product.product.owner && this.props.product.product.owner.id && Object(g.a)(this.props.product.product.owner.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(l.Component)),
                D = r("9C/b"),
                G = (r("NwMv"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(C.Xa, {
                            className: "gift-sub-receipt__container",
                            padding: {
                                y: 2
                            }
                        }, l.createElement(C.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, this.getGiftSubReceiptInfo()), l.createElement(C.Eb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, l.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Gift Status", "GiftSubReceipt"))), l.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, null, Object(p.d)("Active", "GiftSubReceipt")))), this.props.invoicePrice && l.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, l.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Your Invoice Total", "GiftSubReceipt"))), l.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, null, Object(p.f)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        })))), l.createElement(C.Xa, {
                            margin: {
                                y: 3
                            }
                        }, l.createElement(C.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "GiftSubReceipt"))))
                    }, t.prototype.getGiftSubReceiptInfo = function() {
                        if (this.props.invoicePrice) return this.props.isEsportChannel ? l.createElement(C.W, {
                            "data-test-selector": "esport-gift-sub-receipt-info-selector"
                        }, Object(p.d)("You have purchased a {price} Overwatch League All-Access Pass for <x:strong>{recipientDisplayName}</x:strong>", {
                            price: Object(p.f)(this.props.invoicePrice / 100, {
                                style: "currency",
                                currency: this.props.invoiceCurrency
                            }),
                            recipientDisplayName: this.props.recipientDisplayName || "",
                            "x:strong": function(e) {
                                return l.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "GiftSubReceipt")) : l.createElement(C.W, {
                            "data-test-selector": "gift-sub-receipt-info-selector"
                        }, Object(p.d)("You have purchased a {price} Gift Subscription for <x:strong>{recipientDisplayName}</x:strong>", {
                            price: Object(p.f)(this.props.invoicePrice / 100, {
                                style: "currency",
                                currency: this.props.invoiceCurrency
                            }),
                            recipientDisplayName: this.props.recipientDisplayName || "",
                            "x:strong": function(e) {
                                return l.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "GiftSubReceipt"))
                    }, t
                }(l.PureComponent)),
                U = Object(D.a)(G),
                B = (r("XE3n"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(C.Xa, {
                            className: "gift-sub-receipt__container",
                            padding: {
                                y: 2
                            }
                        }, l.createElement(C.Eb, {
                            padding: {
                                bottom: 2
                            }
                        }, this.getMysteryGiftSubReceiptInfo()), l.createElement(C.Eb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, l.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Gift Status", "MysteryGiftSubReceipt"))), l.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, null, Object(p.d)("Active", "MysteryGiftSubReceipt")))), this.props.invoicePrice && l.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, l.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Your Invoice Total", "MysteryGiftSubReceipt"))), l.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, null, Object(p.f)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        })))), l.createElement(C.Xa, {
                            margin: {
                                y: 3
                            }
                        }, l.createElement(C.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "MysteryGiftSubReceipt"))))
                    }, t.prototype.getMysteryGiftSubReceiptInfo = function() {
                        if (this.props.invoicePrice && this.props.tier) {
                            var e = parseInt(this.props.tier, 10) / 1e3,
                                t = Object(p.d)("{quantity, plural, one {Your gift is now being given in the channel.} other {Your gifts are now being given in the channel.}}", {
                                    quantity: this.props.mysteryGiftCount
                                }, "MysteryGiftSubReceipt");
                            return this.props.isEsportChannel ? l.createElement(l.Fragment, null, l.createElement(C.W, null, Object(p.d)("{quantity, plural, one {You have purchased {quantity} x Overwatch League All-Access Pass Gift.} other {You have purchased {quantity} x Overwatch League All-Access Pass Gifts.}}", {
                                quantity: this.props.mysteryGiftCount
                            }, "MysteryGiftSubReceipt")), l.createElement(C.W, null, t)) : l.createElement(l.Fragment, null, l.createElement(C.W, null, Object(p.d)("{quantity, plural, one {You have purchased {quantity} x Single Month Tier {tier} Gift Subscription.} other {You have purchased {quantity} x Single Month Tier {tier} Gift Subscriptions.}}", {
                                quantity: this.props.mysteryGiftCount,
                                tier: e
                            }, "MysteryGiftSubReceipt")), l.createElement(C.W, null, t))
                        }
                    }, t
                }(l.PureComponent)),
                L = Object(D.a)(B),
                W = (r("ZHRK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), "turbo" === t.props.productOwnerLogin ? t.props.history.push("/settings/turbo") : t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.giftSubEndsAt ? Object(p.d)("Your paid subscription will begin on <x:strong>{endsAt}</x:strong> after your Gift Subscription ends", {
                            "x:strong": function(e) {
                                return l.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            },
                            endsAt: Object(p.c)(new Date(this.props.giftSubEndsAt), "long")
                        }, "PersonalSubReceipt") : Object(p.d)("Active", "PersonalSubReceipt"), l.createElement(C.Xa, {
                            className: "personal-sub-receipt"
                        }, l.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, l.createElement(C.Xa, {
                            className: "personal-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Subscription for", "PersonalSubReceipt"))), l.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, null, this.props.purchaserDisplayName))), l.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, l.createElement(C.Xa, {
                            className: "personal-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Status", "PersonalSubReceipt"))), l.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, l.createElement(C.W, null, e))), l.createElement(C.Xa, {
                            margin: {
                                y: 3
                            }
                        }, l.createElement(C.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "PersonalSubReceipt"))))
                    }, t
                }(l.Component)),
                X = Object(D.a)(W),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.product || !this.props.purchaseInvoice.price) return null;
                        var e = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.id || "",
                            t = Object(g.a)(e, this.props.sessionUser),
                            r = this.props.product.product,
                            a = r && r.owner,
                            i = this.props.benefit;
                        return this.props.purchaseFlow === n.MYSTERY_GIFT ? l.createElement(L, {
                            productOwnerDisplayName: a && a.displayName || "",
                            productOwnerLogin: a && a.login || "",
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            tier: this.props.purchaseInvoice.tier || "",
                            mysteryGiftCount: this.props.product.quantity || 1,
                            isEsportChannel: t
                        }) : this.props.purchaseFlow === n.GIFT_SUB ? this.props.product.recipient ? l.createElement(U, {
                            recipientDisplayName: this.props.product.recipient.displayName,
                            productOwnerDisplayName: a && a.displayName || "",
                            productOwnerLogin: a && a.login || "",
                            invoicePrice: this.props.purchaseInvoice && this.props.purchaseInvoice.price || void 0,
                            invoiceCurrency: this.props.purchaseInvoice && this.props.purchaseInvoice.currency || "USD",
                            isEsportChannel: t
                        }) : null : "turbo" === this.props.product.product.name ? this.props.benefit ? l.createElement(X, {
                            purchaserDisplayName: this.props.currentUser && this.props.currentUser.displayName || "",
                            productOwnerDisplayName: "turbo",
                            productOwnerLogin: "turbo",
                            giftSubEndsAt: i && i.gift && (i.gift.isGift || null) && i.endsAt,
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            invoiceDivisor: this.props.purchaseInvoice.divisor || 100
                        }) : null : l.createElement(X, {
                            purchaserDisplayName: this.props.currentUser && this.props.currentUser.displayName || "",
                            productOwnerDisplayName: a && a.displayName || "",
                            productOwnerLogin: a && a.login || "",
                            giftSubEndsAt: i && i.gift && (i.gift.isGift || null) && i.endsAt || "",
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            invoiceDivisor: this.props.purchaseInvoice.divisor || 100
                        })
                    }, t
                }(l.PureComponent),
                V = r("V+q8"),
                H = r("oJmH"),
                Z = r("sV2v"),
                Y = r("Jgup"),
                K = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.unsupportedCountries = new Set(["A1", "A2", "AP", "AQ", "CU", "EU", "IR", "KP", "MM", "O1", "SD", "SS", "SY", "TL"]), t.displayCountries = Y.a.filter(function(e) {
                            return !t.unsupportedCountries.has(e)
                        }), t.onCountryChange = function(e) {
                            t.props.onChange({
                                countryCode: e.currentTarget.value,
                                zipCode: ""
                            })
                        }, t.onZipChange = function(e) {
                            t.props.onChange({
                                countryCode: t.props.countryCode,
                                zipCode: e.currentTarget.value
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.Wrap
                        }, l.createElement(C.Xa, null, l.createElement(C.Ea, {
                            id: "country-of-residence",
                            label: Object(p.d)("Country of Residence", "CountryOfResidenceSelector"),
                            labelOptional: Object(p.d)("Price may vary", "CountryOfResidenceSelector")
                        }, l.createElement(C.zb, {
                            onChange: this.onCountryChange,
                            value: this.props.countryCode
                        }, this.displayCountries.map(function(e) {
                            return l.createElement("option", {
                                key: e,
                                value: e
                            }, Object(Y.b)(e))
                        })))), this.zipCodeRequired && l.createElement(C.Xa, {
                            margin: {
                                left: 1
                            }
                        }, l.createElement(C.Ea, {
                            id: "zip-code",
                            label: Object(p.d)("Postal Code", "CountryOfResidenceSelector")
                        }, l.createElement(C.Ra, {
                            type: C.Ta.Text,
                            placeholder: Object(p.d)("12345", "CountryOfResidenceSelector"),
                            value: this.props.zipCode || "",
                            error: this.props.zipCodeError,
                            onChange: this.onZipChange
                        }))))
                    }, Object.defineProperty(t.prototype, "zipCodeRequired", {
                        get: function() {
                            return ["US", "CA"].includes(this.props.countryCode)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(l.PureComponent),
                q = (r("lqDW"), function() {
                    return l.createElement(C.Eb, {
                        className: "payment-method--notice--unavailable",
                        display: C.X.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C.sb, {
                        asset: C.tb.NotificationInfo
                    }), l.createElement(C.Xa, {
                        margin: {
                            left: 2
                        }
                    }, l.createElement(C.W, null, Object(p.d)('Please change your payment method and continue to checkout using the "{buttonLabel}” options.', {
                        buttonLabel: "More Methods"
                    }, "PaymentMethodNotice"))))
                });
            ! function(e) {
                e[e.ACTIVE = 0] = "ACTIVE", e[e.DISABLED = 1] = "DISABLED", e[e.HIDDEN = 2] = "HIDDEN"
            }(R || (R = {}));
            var Q = r("KriR"),
                J = r("GnwI"),
                $ = (r("TEvY"), function() {
                    function e(e) {}
                    e.prototype.bind = function(e) {}
                }(), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            amazonScriptLoaded: null,
                            walletLoaded: null,
                            billingAgreementId: null,
                            awaitingResponse: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === R.ACTIVE,
                            zipCodeError: !1
                        }, t.handleSubmit = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e = this;
                                return u.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.hasValidResidence() ? (this.setState({
                                                awaitingResponse: !0,
                                                zipCodeError: !1
                                            }), [4, this.props.onSuccess({
                                                payment_flow: Q.b.RecurlyPayWithAmazon,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: this.state.billingAgreementId,
                                                    gateway: "amazon"
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                errorCallback: function() {
                                                    return e.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })]) : (this.setState({
                                                zipCodeError: !0
                                            }), [2]);
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t.hasValidResidence = function() {
                            return !t.props.showEuSubs || (!["US", "CA"].includes(t.state.userCountryOfResidence) || !!t.state.userZipCode)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        window.onAmazonLoginReady = function() {
                            window.amazon.Login.setClientId(e.props.clientID)
                        }, window.onAmazonPaymentsReady = function() {
                            e.props.latencyTracking.reportInteractive(), e.setState({
                                amazonScriptLoaded: !0
                            }), window.OffAmazonPayments.Button("recurly-amazon-pay__button", e.props.sellerID, {
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
                        var r = document.createElement("script");
                        r.type = "text/javascript", r.id = "pwa-script", r.src = "https://static-na.payments-amazon.com/OffAmazonPayments/us" + (this.props.isProduction ? "" : "/sandbox") + "/js/Widgets.js?sellerId=" + this.props.sellerID, r.async = !0, document.body.appendChild(r)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.eligibilityStatus !== this.props.eligibilityStatus && this.setState({
                            paymentMethodEnabled: this.props.eligibilityStatus === R.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
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
                        new window.OffAmazonPayments.Widgets.Wallet(e).bind("recurly-amazon-pay__wallet")
                    }, t.prototype.render = function() {
                        return this.state.amazonScriptLoaded ? l.createElement(l.Fragment, null, this.props.showEuSubs && l.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(K, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), l.createElement(C.Eb, {
                            background: C.r.Base,
                            border: !0,
                            className: "recurly-amazon-pay"
                        }, !this.state.paymentMethodEnabled && l.createElement(C.Xa, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center,
                            margin: 5
                        }, l.createElement(q, null)), this.state.paymentMethodEnabled && l.createElement(l.Fragment, null, l.createElement(C.Xa, {
                            display: this.state.walletLoaded ? C.X.Hide : C.X.Flex,
                            justifyContent: C.Wa.Center,
                            margin: 5
                        }, l.createElement("div", {
                            id: "recurly-amazon-pay__button"
                        })), l.createElement(C.Xa, {
                            display: this.state.walletLoaded ? C.X.Flex : C.X.Hide,
                            flexDirection: C.Aa.Column,
                            alignItems: C.f.Center,
                            margin: {
                                top: 2
                            }
                        }, l.createElement("div", {
                            id: "recurly-amazon-pay__wallet",
                            className: "recurly-amazon-pay__wallet"
                        }), l.createElement(C.Xa, {
                            padding: {
                                top: 1
                            },
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, l.createElement(C.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                            disabled: this.state.awaitingResponse
                        }, this.props.submitButtonCopy)))))) : l.createElement(C.Za, null)
                    }, t = u.__decorate([Object(J.b)("RecurlyAmazonPay")], t)
                }(l.Component)),
                ee = r("/0dD"),
                te = r("XDQu"),
                re = r("6fcp"),
                ne = (r("Aoab"), {
                    light: "#000",
                    dark: "#fff"
                }),
                ae = {
                    light: "#a49fad",
                    dark: "#898395"
                },
                ie = function() {
                    return {
                        cvv: !1,
                        first_name: !1,
                        last_name: !1,
                        month: !1,
                        number: !1,
                        year: !1,
                        zip: !1
                    }
                },
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            firstName: "",
                            lastName: "",
                            recurlyReady: !1,
                            awaitingResponse: !1,
                            errorMessage: "",
                            errorState: ie(),
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === R.ACTIVE
                        }, t.handleSubmit = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return u.__generator(this, function(r) {
                                    return e.preventDefault(), this.setState(function(e) {
                                        return {
                                            awaitingResponse: !0,
                                            errorState: u.__assign({}, e.errorState)
                                        }
                                    }), window.recurly.token(this.form, function(e, r) {
                                        return u.__awaiter(t, void 0, void 0, function() {
                                            var t;
                                            return u.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return t = this.validateResidence(), e || t.length ? (this.handleValidationError(e, t), this.setState({
                                                            awaitingResponse: !1
                                                        }), [3, 3]) : [3, 1];
                                                    case 1:
                                                        return [4, this.handleValidationSuccess(r)];
                                                    case 2:
                                                        n.sent(), n.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }), [2]
                                })
                            })
                        }, t.validateResidence = function() {
                            if (!t.props.showEuSubs) return [];
                            var e = [];
                            return ["US", "CA"].includes(t.state.userCountryOfResidence) && !t.state.userZipCode && e.push("zip"), e
                        }, t.handleValidationSuccess = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return u.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.props.onSuccess({
                                                payment_flow: Q.b.RecurlyCreditCard,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: e.id,
                                                    gateway: "cc",
                                                    card_bin_country: e.billing_info && e.billing_info.cc_bin_country
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                errorCallback: function() {
                                                    return t.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })];
                                        case 1:
                                            return r.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleValidationError = function(e, r) {
                            var n = ie(),
                                a = "";
                            r.length && r.forEach(function(e) {
                                n[e] = !0
                            }), e && (a = Object(p.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"), e.code !== re.a.Validation && e.code !== re.a.InvalidParameter || (e.fields && e.fields.forEach(function(e) {
                                n[e] = !0
                            }), a = Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"))), t.setState({
                                errorMessage: a,
                                errorState: n
                            })
                        }, t.handleFirstName = function(e) {
                            t.setState({
                                firstName: e.currentTarget.value
                            })
                        }, t.handleLastName = function(e) {
                            t.setState({
                                lastName: e.currentTarget.value
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = this;
                        this.recurlyPollId = setInterval(function() {
                            window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.recurlyPollId), e.setupConfigs(), e.pollForHostedField())
                        }, 500)
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.recurlyPollId), clearInterval(this.hostedFieldPollId)
                    }, t.prototype.componentDidUpdate = function(e) {
                        window.recurly && this.props.darkModeEnabled !== e.darkModeEnabled && this.setupConfigs(), e.eligibilityStatus !== this.props.eligibilityStatus && this.setState({
                            paymentMethodEnabled: this.props.eligibilityStatus === R.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.render = function() {
                        var e = this;
                        return l.createElement(C.Xa, {
                            className: "recurly-credit-card",
                            fullWidth: !0
                        }, l.createElement(C.Xa, {
                            display: this.state.recurlyReady ? C.X.Hide : C.X.Block
                        }, l.createElement(C.Za, {
                            fillContent: !0
                        })), l.createElement(C.Xa, {
                            display: this.state.recurlyReady ? C.X.Block : C.X.Hide
                        }, l.createElement("form", {
                            className: "recurly-form",
                            ref: function(t) {
                                return e.form = t
                            }
                        }, l.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(C.Ea, {
                            id: "recurly-name",
                            label: Object(p.d)("Name", "RecurlyCreditCard")
                        }, l.createElement("div", {
                            id: "recurly-name"
                        }, l.createElement(C.Ja, {
                            gutterSize: C.Ka.Medium
                        }, l.createElement(C.P, {
                            cols: 6
                        }, l.createElement(C.Ra, {
                            id: "recurly-first-name",
                            type: C.Ta.Text,
                            placeholder: Object(p.d)("First Name", "RecurlyCreditCard"),
                            value: this.state.firstName,
                            onChange: this.handleFirstName,
                            error: this.state.errorState.first_name
                        }), l.createElement("input", {
                            type: "hidden",
                            "data-recurly": "first_name",
                            value: this.state.firstName
                        })), l.createElement(C.P, {
                            cols: 6
                        }, l.createElement(C.Ra, {
                            id: "recurly-last-name",
                            type: C.Ta.Text,
                            placeholder: Object(p.d)("Last Name", "RecurlyCreditCard"),
                            value: this.state.lastName,
                            onChange: this.handleLastName,
                            error: this.state.errorState.last_name
                        }), l.createElement("input", {
                            type: "hidden",
                            "data-recurly": "last_name",
                            value: this.state.lastName
                        })))))), l.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(C.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Credit Card", "RecurlyCreditCard")
                        }, l.createElement("div", {
                            id: "recurly-credit-card"
                        }, l.createElement(C.Ja, {
                            gutterSize: C.Ka.Medium
                        }, l.createElement(C.P, {
                            cols: 8
                        }, l.createElement("div", {
                            id: "recurly-number",
                            "data-recurly": "number",
                            className: this.state.errorState.number ? "recurly-error" : ""
                        })), l.createElement(C.P, {
                            cols: 4
                        }, l.createElement("div", {
                            id: "recurly-cvv",
                            "data-recurly": "cvv",
                            className: this.state.errorState.cvv ? "recurly-error" : ""
                        })))))), l.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(C.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Expiration Date", "RecurlyCreditCard")
                        }, l.createElement("div", {
                            id: "recurly-credit-card"
                        }, l.createElement(C.Ja, {
                            gutterSize: C.Ka.Medium
                        }, l.createElement(C.P, {
                            cols: 6
                        }, l.createElement("div", {
                            id: "recurly-month",
                            "data-recurly": "month",
                            className: this.state.errorState.month ? "recurly-error" : ""
                        })), l.createElement(C.P, {
                            cols: 6
                        }, l.createElement("div", {
                            id: "recurly-year",
                            "data-recurly": "year",
                            className: this.state.errorState.year ? "recurly-error" : ""
                        })))))), this.props.showEuSubs && l.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(K, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.errorState.zip,
                            onChange: this.handleCORChange
                        })), l.createElement("input", {
                            type: "hidden",
                            name: "recurly-country",
                            "data-recurly": "country",
                            value: "US"
                        }), l.createElement("input", {
                            type: "hidden",
                            name: "recurly-token",
                            "data-recurly": "token"
                        }), this.props.eligibilityStatus === R.DISABLED && l.createElement(q, null), l.createElement(C.Xa, {
                            margin: {
                                top: 2
                            },
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center,
                            breakpointLarge: {
                                justifyContent: C.Wa.Start
                            }
                        }, l.createElement(C.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                            disabled: this.state.awaitingResponse || !this.state.paymentMethodEnabled
                        }, this.props.submitButtonCopy)))))
                    }, t.prototype.pollForHostedField = function() {
                        var e = this;
                        this.hostedFieldPollId = setInterval(function() {
                            document.querySelector(".recurly-hosted-field > iframe") && (e.setState({
                                recurlyReady: !0
                            }), clearInterval(e.hostedFieldPollId))
                        }, 500)
                    }, t.prototype.setupConfigs = function() {
                        var e = this.props.darkModeEnabled ? ae.dark : ae.light,
                            t = this.props.darkModeEnabled ? ne.dark : ne.light;
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
                                        fontColor: t,
                                        placeholder: {
                                            color: e
                                        }
                                    }
                                },
                                number: {
                                    selector: "#recurly-number",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("Card Number", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                },
                                month: {
                                    selector: "#recurly-month",
                                    inputType: "select",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("Select Month", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                },
                                year: {
                                    selector: "#recurly-year",
                                    inputType: "select",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("Select Year", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                },
                                cvv: {
                                    selector: "#recurly-cvv",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("CVV", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                }
                            }
                        })
                    }, t = u.__decorate([Object(J.b)("RecurlyCreditCard")], t)
                }(l.Component);
            var se, ce = Object(a.connect)(function(e) {
                    return {
                        darkModeEnabled: Object(te.a)(e) === ee.a.Dark
                    }
                })(oe),
                ue = (r("a7Xb"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            paypalConfigured: !1,
                            awaitingResponse: !1,
                            hasError: !1,
                            zipCodeError: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === R.ACTIVE
                        }, t.handleValidationSuccess = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return u.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.props.onSuccess({
                                                payment_flow: Q.b.RecurlyPaypal,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: e.id,
                                                    gateway: "paypal"
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                errorCallback: function() {
                                                    return t.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })];
                                        case 1:
                                            return r.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleValidationError = function() {
                            t.setState({
                                hasError: !0
                            })
                        }, t.handleClick = function() {
                            t.hasValidResidence() ? (t.setState({
                                awaitingResponse: !0,
                                hasError: !1,
                                zipCodeError: !1
                            }), t.paypalInstance.start()) : t.setState({
                                awaitingResponse: !1,
                                hasError: !0,
                                zipCodeError: !0
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t.hasValidResidence = function() {
                            return !t.props.showEuSubs || (!["US", "CA"].includes(t.state.userCountryOfResidence) || !!t.state.userZipCode)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.pollForRecurly = setInterval(function() {
                            window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                                paypalConfigured: !0
                            }))
                        }, 500)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.eligibilityStatus !== this.props.eligibilityStatus && this.setState({
                            paymentMethodEnabled: this.props.eligibilityStatus === R.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.pollForRecurly)
                    }, t.prototype.render = function() {
                        return this.state.paypalConfigured ? l.createElement(C.Xa, null, this.props.showEuSubs && l.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(K, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), !this.state.paymentMethodEnabled && l.createElement(q, null), l.createElement(C.Eb, {
                            className: "recurly-paypal",
                            background: C.r.Base,
                            border: !0,
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, l.createElement(C.Xa, {
                            margin: {
                                top: 5
                            }
                        }, l.createElement(C.z, {
                            "data-a-target": "recurly-paypal__button",
                            onClick: this.handleClick,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                            disabled: this.state.awaitingResponse || !this.state.paymentMethodEnabled
                        }, Object(p.d)("Checkout With PayPal", "RecurlyPaypal"))))) : l.createElement(C.Xa, {
                            margin: {
                                y: 2
                            }
                        }, l.createElement(C.Za, null))
                    }, t.prototype.setupConfigs = function() {
                        var e = this;
                        window.recurly.configure(this.props.publicKey);
                        var t = window.recurly.PayPal({
                            braintree: {
                                clientAuthorization: this.props.braintreeClientAuthorization
                            }
                        });
                        t.on("token", function(t) {
                            e.handleValidationSuccess(t)
                        }), t.on("error", function() {
                            e.handleValidationError(), e.setState({
                                awaitingResponse: !1
                            })
                        }), t.on("cancel", function() {
                            e.setState({
                                awaitingResponse: !1
                            })
                        }), this.paypalInstance = t
                    }, t = u.__decorate([Object(J.b)("RecurlyPaypal")], t)
                }(l.Component)),
                de = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            xsollaLoaded: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode
                        }, t.onIframeLoad = function() {
                            t.props.latencyTracking.reportInteractive(), t.setState({
                                xsollaLoaded: !0
                            })
                        }, t.handleXsollaEvent = function(e) {
                            if ((!e.origin || e.origin.includes("xsolla")) && e.data) try {
                                var r = JSON.parse(e.data);
                                if (r.command && "status" === r.command)
                                    if (r.data && r.data.paymentInfo) switch (r.data.paymentInfo.status) {
                                        case "done":
                                            t.props.trackPaymentFormInteraction({
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Pending
                                            }), t.props.trackPaymentFormInteraction({
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Success
                                            });
                                            break;
                                        case "troubled":
                                            t.props.trackPaymentFormInteraction({
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Pending
                                            }), t.props.trackPaymentFormInteraction({
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Failed
                                            })
                                    }
                            } catch (e) {}
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                xsollaLoaded: !1
                            }), t.props.handleCountryChange(e.countryCode)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.iframe;
                        e && (e.addEventListener("load", this.onIframeLoad), window.addEventListener("message", this.handleXsollaEvent))
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("message", this.handleXsollaEvent)
                    }, t.prototype.render = function() {
                        var e = this;
                        return l.createElement(l.Fragment, null, this.props.showEuSubs && l.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(K, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: !1,
                            onChange: this.handleCORChange
                        })), l.createElement(C.Xa, {
                            fullWidth: !0
                        }, !this.state.xsollaLoaded && l.createElement(C.Za, {
                            fillContent: !0
                        }), l.createElement(C.Xa, {
                            fullWidth: !0,
                            display: this.state.xsollaLoaded ? C.X.Inline : C.X.Hide
                        }, l.createElement("iframe", {
                            ref: function(t) {
                                return e.iframe = t
                            },
                            id: "xsolla",
                            src: this.props.iframeURL,
                            width: "100%",
                            height: "650px"
                        }))))
                    }, t = u.__decorate([Object(J.b)("XsollaMoreMethods")], t)
                }(l.Component),
                le = r("f00E"),
                pe = r("WlZp");
            r("vGoz");
            ! function(e) {
                e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
            }(se || (se = {}));
            var me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        zuoraConfigured: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        nullValueErrors: [],
                        sessionId: Object(le.b)()
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.setState({
                            awaitingResponse: !0,
                            errorMessage: "",
                            nullValueErrors: []
                        }), window.Z.submit()
                    }, t.renderErrorMessage = function() {
                        if (t.state.nullValueErrors.length) {
                            var e = t.state.nullValueErrors.map(function(e, t) {
                                return l.createElement(C.Xa, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, l.createElement(C.W, {
                                    color: C.O.Error
                                }, "• ", e))
                            });
                            return l.createElement("div", null, l.createElement(C.Xa, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, l.createElement(C.W, {
                                color: C.O.Error
                            }, Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                        }
                        if (t.state.errorMessage) return l.createElement(C.Xa, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, l.createElement(C.W, {
                            color: C.O.Error
                        }, t.state.errorMessage))
                    }, t.successCallback = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t = this;
                            return u.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!e.success) return [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_flow: Q.b.ZuoraCreditCard,
                                            payment_provider: "zuora",
                                            payment_info: {
                                                token: e.refId,
                                                gateway: "cc"
                                            },
                                            errorCallback: function() {
                                                return t.setState({
                                                    awaitingResponse: !1
                                                })
                                            }
                                        })];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.errorCallback = function(e, r, n) {
                        if (t.setState({
                                awaitingResponse: !1
                            }), "unknown" === r) return t.parseGatewayErrorMessage(n);
                        window.Z.sendErrorMessageToHpm(e, n)
                    }, t.parseGatewayErrorMessage = function(e) {
                        return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                            errorMessage: Object(p.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                        }) : t.setState({
                            errorMessage: Object(p.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                        })
                    }, t.parseNullValueErrorMessage = function(e) {
                        var r = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                            n = {
                                creditCardHolderName: Object(p.d)("Name on Card", "ZuoraCreditCard"),
                                creditCardAddress1: Object(p.d)("Billing Address", "ZuoraCreditCard"),
                                creditCardCity: Object(p.d)("City", "ZuoraCreditCard"),
                                creditCardPostalCode: Object(p.d)("Zip Code", "ZuoraCreditCard")
                            },
                            a = r.map(function(e) {
                                var t = n[e];
                                return t || ""
                            }).filter(function(e) {
                                return "" !== e
                            });
                        t.setState({
                            nullValueErrors: a
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                    else {
                        var t = document.createElement("script");
                        t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                            e.props.latencyTracking.reportInteractive(), e.initZuoraIFrame()
                        }
                    }
                }, t.prototype.render = function() {
                    return l.createElement("div", null, !this.state.zuoraConfigured && l.createElement(C.Xa, {
                        padding: {
                            y: 5
                        }
                    }, l.createElement(C.Za, {
                        fillContent: !0
                    })), l.createElement(C.Xa, {
                        display: this.state.zuoraConfigured ? C.X.Block : C.X.Hide,
                        "data-test-selector": se.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), l.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.awaitingResponse ? "zuora-disabled" : ""
                    }), l.createElement(C.Xa, {
                        margin: {
                            top: 2
                        },
                        display: C.X.Flex,
                        justifyContent: C.Wa.Center,
                        breakpointLarge: {
                            justifyContent: C.Wa.Start
                        }
                    }, l.createElement(C.z, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                        disabled: this.state.awaitingResponse,
                        "data-test-selector": se.UPDATE_PAYMENT_BUTTON
                    }, this.props.submitButtonCopy)), l.createElement(pe.a, {
                        isProduction: this.props.isProductionConfig,
                        sessionId: this.state.sessionId
                    })))
                }, t.prototype.initZuoraIFrame = function() {
                    var e = this,
                        t = {
                            id: this.props.hostedPageID,
                            url: this.props.hostedPageURL,
                            style: "inline",
                            submitEnabled: "true",
                            field_accountId: this.props.externalAccountID,
                            tenantId: this.props.tenantID,
                            token: this.props.token,
                            key: this.props.publicKey,
                            signature: this.props.signature,
                            locale: this.formattedLocale
                        };
                    window.Z.renderWithErrorHandler(t, {
                        creditCardCountry: "USA"
                    }, this.successCallback, this.errorCallback);
                    var r = document.getElementById("z_hppm_iframe");
                    r && r.addEventListener("load", function() {
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
                }), t = u.__decorate([Object(J.b)("ZuoraCreditCard")], t)
            }(l.Component);
            var he, ye = Object(a.connect)(function(e) {
                return {
                    languageCode: Object(c.b)(e)
                }
            })(me);
            ! function(e) {
                e.RecurlyAmazonPay = "recurly_amazon_pay", e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlySavedPayment = "recurly_saved_payment", e.Xsolla = "xsolla", e.ZuoraCreditCard = "zuora_credit_card"
            }(he || (he = {}));
            var fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.submitButtonCopy = Object(p.d)("Complete Purchase", "PaymentMethods"), t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        switch (this.props.type) {
                            case he.RecurlyAmazonPay:
                                return l.createElement($, u.__assign({
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase
                                }, this.props.configs.recurly.payWithAmazonConfigs, {
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                }));
                            case he.RecurlyCreditCard:
                                return l.createElement(ce, {
                                    publicKey: this.props.configs.recurly.publicKey,
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                });
                            case he.RecurlyPaypal:
                                return l.createElement(ue, {
                                    publicKey: this.props.configs.recurly.publicKey,
                                    braintreeClientAuthorization: this.props.configs.recurly.braintreeClientAuthorization,
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                });
                            case he.ZuoraCreditCard:
                                return l.createElement(ye, u.__assign({
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    isProductionConfig: this.props.configs.recurly.payWithAmazonConfigs.isProduction
                                }, this.props.configs.zuora));
                            default:
                                return l.createElement(de, u.__assign({
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    handleCountryChange: this.props.handleCountryChange,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                }, this.props.configs.xsolla))
                        }
                    }, t
                }(l.PureComponent),
                be = r("D8NC"),
                ge = r.n(be),
                ve = r("yrda"),
                Ee = r.n(ve),
                Ce = r("csmi"),
                ke = r.n(Ce),
                Pe = r("2ORI"),
                Oe = r.n(Pe),
                Se = r("AVF4"),
                Ie = r.n(Se),
                Ne = r("BIez"),
                je = r.n(Ne),
                we = r("EF6p"),
                _e = r.n(we),
                Te = r("xgE2"),
                Re = r.n(Te),
                Me = r("MU3X"),
                Ae = r.n(Me),
                xe = r("E3rh"),
                Fe = r.n(xe),
                De = r("ZiR0"),
                Ge = r.n(De),
                Ue = r("KRuc"),
                Be = r.n(Ue),
                Le = r("IRK4"),
                We = r.n(Le),
                Xe = r("bvmA"),
                ze = r.n(Xe),
                Ve = r("1OTy"),
                He = {
                    CreditCard: function() {
                        return Object(p.d)("Credit Card", "TicketDescription")
                    },
                    Paypal: function() {
                        return Object(p.d)("Paypal", "TicketDescription")
                    },
                    AmazonPay: function() {
                        return Object(p.d)("Amazon Pay", "TicketDescription")
                    },
                    MoreMethods: function() {
                        return Object(p.d)("More Methods", "TicketDescription")
                    }
                },
                Ze = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.paymentProviders = [{
                            paymentMethodType: he.RecurlyCreditCard,
                            paymentFlow: Q.b.RecurlyCreditCard,
                            button: {
                                label: He.CreditCard(),
                                src: Ie.a,
                                alt: He.CreditCard(),
                                srcSet: {
                                    "1x": Ie.a,
                                    "2x": je.a
                                },
                                darkSrcSet: {
                                    "1x": Ie.a,
                                    "2x": je.a
                                }
                            }
                        }, {
                            paymentMethodType: he.ZuoraCreditCard,
                            paymentFlow: Q.b.ZuoraCreditCard,
                            button: {
                                label: He.CreditCard(),
                                src: Ie.a,
                                alt: He.CreditCard(),
                                srcSet: {
                                    "1x": Ie.a,
                                    "2x": je.a
                                },
                                darkSrcSet: {
                                    "1x": Ie.a,
                                    "2x": je.a
                                }
                            }
                        }, {
                            paymentMethodType: he.RecurlyPaypal,
                            paymentFlow: Q.b.RecurlyPaypal,
                            button: {
                                label: He.Paypal(),
                                src: Ge.a,
                                alt: He.Paypal(),
                                srcSet: {
                                    "1x": Ge.a,
                                    "2x": Be.a
                                },
                                darkSrcSet: {
                                    "1x": We.a,
                                    "2x": ze.a
                                }
                            }
                        }, {
                            paymentMethodType: he.RecurlyAmazonPay,
                            paymentFlow: Q.b.RecurlyPayWithAmazon,
                            button: {
                                label: He.AmazonPay(),
                                src: ge.a,
                                alt: He.AmazonPay(),
                                srcSet: {
                                    "1x": ge.a,
                                    "2x": Ee.a
                                },
                                darkSrcSet: {
                                    "1x": ke.a,
                                    "2x": Oe.a
                                }
                            }
                        }, {
                            paymentMethodType: he.Xsolla,
                            paymentFlow: Q.b.Xsolla,
                            button: {
                                label: He.MoreMethods(),
                                src: _e.a,
                                alt: He.MoreMethods(),
                                srcSet: {
                                    "1x": _e.a,
                                    "2x": Re.a
                                },
                                darkSrcSet: {
                                    "1x": Ae.a,
                                    "2x": Fe.a
                                }
                            }
                        }], t.handleClick = function(e, r) {
                            return function() {
                                t.props.trackPaymentFormInteraction({
                                    paymentFlow: r,
                                    action: Q.a.RadioButtonClick,
                                    actionDetail: r
                                }), t.props.handleClick(e)
                            }
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        if (this.props.eligiblePaymentMethods.length <= 1) return null;
                        var e = this,
                            t = this.paymentProviders.map(function(t) {
                                var r = e.props.eligiblePaymentMethods.find(function(e) {
                                    return e.type === t.paymentMethodType
                                });
                                return r && r.status !== R.HIDDEN ? l.createElement(C.P, {
                                    key: t.paymentMethodType,
                                    cols: {
                                        default: 6,
                                        sm: 3
                                    }
                                }, l.createElement(Ve.a, {
                                    label: t.button.label,
                                    type: C.Ma.Radio,
                                    src: t.button.src,
                                    alt: t.button.alt,
                                    srcSet: t.button.srcSet,
                                    darkSrcSet: t.button.darkSrcSet,
                                    value: t.paymentMethodType,
                                    onChange: e.handleClick(t.paymentMethodType, t.paymentFlow),
                                    checked: e.props.selectedProvider === t.paymentMethodType
                                })) : null
                            });
                        return l.createElement(C.Xa, null, l.createElement(C.Ja, {
                            gutterSize: C.Ka.Small
                        }, t))
                    }, t
                }(l.PureComponent),
                Ye = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedProvider: he.RecurlyCreditCard
                        }, t.renderPaymentMethods = function() {
                            var e = t.props,
                                r = e.configs,
                                n = e.handleCompletePurchase,
                                a = e.handleCountryChange,
                                i = e.trackPaymentFormInteraction,
                                o = t.props.eligiblePaymentMethods,
                                s = t;
                            return Object.values(he).map(function(e) {
                                var t = o.find(function(t) {
                                    return t.type === e
                                });
                                return t && t.status !== R.HIDDEN ? l.createElement(C.Xa, {
                                    key: t.type,
                                    display: s.state.selectedProvider === e ? C.X.Inline : C.X.Hide
                                }, l.createElement(fe, {
                                    type: t.type,
                                    configs: r,
                                    eligibilityStatus: t.status,
                                    userCountryOfResidence: s.props.userCountryOfResidence,
                                    userZipCode: s.props.userZipCode,
                                    handleCompletePurchase: n,
                                    handleCountryChange: a,
                                    trackPaymentFormInteraction: i,
                                    showEuSubs: s.props.showEuSubs
                                })) : null
                            })
                        }, t.handlePaymentMethodSelectorToggleChange = function(e) {
                            t.setState({
                                selectedProvider: e
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentWillMount = function() {
                        for (var e = [he.RecurlyCreditCard, he.ZuoraCreditCard, he.RecurlyPaypal, he.RecurlyAmazonPay, he.Xsolla], t = this.props.eligiblePaymentMethods.filter(function(e) {
                                return e.status !== R.HIDDEN
                            }).map(function(e) {
                                return e.type
                            }), r = 0, n = e; r < n.length; r++) {
                            var a = n[r];
                            if (t.includes(a)) {
                                this.setState({
                                    selectedProvider: a
                                });
                                break
                            }
                        }
                    }, t.prototype.render = function() {
                        return l.createElement(l.Fragment, null, l.createElement(Ze, {
                            eligiblePaymentMethods: this.props.eligiblePaymentMethods,
                            selectedProvider: this.state.selectedProvider,
                            handleClick: this.handlePaymentMethodSelectorToggleChange,
                            trackPaymentFormInteraction: this.props.trackPaymentFormInteraction
                        }), l.createElement(Z.a, null), l.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, this.renderPaymentMethods()))
                    }, t
                }(l.Component),
                Ke = r("85n/"),
                qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            awaitingResponse: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            zipCodeError: !1,
                            paymentMethodEnabled: t.props.eligibility.status === R.ACTIVE
                        }, t.isPaymentMethodExpired = function(e) {
                            var r = t.zeroIndexedMonth(e),
                                n = e.expirationYear;
                            if (void 0 === r || !n) return !1;
                            var a = Object(d.startOfMonth)(new Date),
                                i = new Date(n, r, 1);
                            return !!Object(d.isBefore)(i, a)
                        }, t.zeroIndexedMonth = function(e) {
                            if (e.expirationMonth) return e.expirationMonth - 1
                        }, t.handleSubmit = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, r = this;
                                return u.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.hasValidResidence()) return this.setState({
                                                zipCodeError: !0
                                            }), [2];
                                            switch (this.setState({
                                                awaitingResponse: !0,
                                                zipCodeError: !1
                                            }), this.props.savedPaymentMethod.paymentType.toUpperCase()) {
                                                case f.F.AMAZON:
                                                    e = Q.b.RecurlyPayWithAmazon, t = "amazon";
                                                    break;
                                                case f.F.PAYPAL:
                                                    e = Q.b.RecurlyPaypal, t = "paypal";
                                                    break;
                                                default:
                                                    e = Q.b.RecurlyCreditCard, t = "cc"
                                            }
                                            return [4, this.props.handleCompletePurchase({
                                                payment_flow: e,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: "",
                                                    gateway: t,
                                                    card_bin_country: null
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                savedPayment: !0,
                                                errorCallback: function() {
                                                    return r.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t.hasValidResidence = function() {
                            return !t.props.showEuSubs || (!["US", "CA"].includes(t.state.userCountryOfResidence) || !!t.state.userZipCode)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.eligibility !== this.props.eligibility && this.setState({
                            paymentMethodEnabled: this.props.eligibility.status === R.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.savedPaymentMethod,
                            t = this.isPaymentMethodExpired(e);
                        return l.createElement(l.Fragment, null, l.createElement(C.Eb, {
                            background: C.r.Base,
                            border: !0,
                            borderRadius: C.x.Small,
                            padding: 2
                        }, l.createElement(Ke.a, {
                            paymentType: e.paymentType,
                            cardType: e.cardType,
                            provider: e.provider,
                            lastFour: e.lastFour,
                            expirationYear: e.expirationYear,
                            billingEmail: e.billingEmail,
                            expirationMonth: e.expirationMonth
                        })), this.props.showEuSubs && l.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(K, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), !this.state.paymentMethodEnabled && l.createElement(q, null), l.createElement(C.Xa, {
                            margin: {
                                y: 2
                            }
                        }, l.createElement(C.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                            disabled: this.state.awaitingResponse || t || !this.state.paymentMethodEnabled
                        }, Object(p.d)("Complete Purchase", "SavedMethods"))))
                    }, t
                }(l.Component),
                Qe = function() {
                    function e(e) {
                        var t = this;
                        this.recurlyCountries = p.b.get("payments_recurly_countries", ["US"]), this.payPalEuSubsEnabled = p.b.get("paypal_eu_subs", !1), this.getDeterminedTaxCountry = function() {
                            if (t.userBestGuessCountry) return t.userBestGuessCountry;
                            var e = t.savedPaymentMethodBillingCountry;
                            return t.ipCountryCode && e && t.userCountryOfResidence ? t.ipCountryCode === e ? t.ipCountryCode : t.userCountryOfResidence : t.userCountryOfResidence ? t.userCountryOfResidence : t.ipCountryCode
                        }, this.productName = e.productName, this.userCountryOfResidence = e.userCountryOfResidence, this.ipCountryCode = e.ipCountryCode || "", this.userBestGuessCountry = e.userBestGuessCountry, this.savedPaymentMethodBillingCountry = e.savedPaymentMethodBillingCountry, this.savedPaymentMethodPaymentType = e.savedPaymentMethodPaymentType, this.showEuSubs = e.showEuSubs, this.disablePayPal = e.disablePayPal, this.disableAmazonPay = e.disableAmazonPay
                    }
                    return e.prototype.getAvailableMethods = function() {
                        if (!this.showEuSubs) return "owlallaccess2018" === this.productName ? [he.ZuoraCreditCard, he.Xsolla] : "US" !== this.ipCountryCode ? [he.Xsolla] : [he.RecurlyCreditCard, he.RecurlyPaypal, he.RecurlyAmazonPay, he.RecurlySavedPayment, he.Xsolla];
                        var e = [];
                        return this.recurlyCountries.includes(this.getDeterminedTaxCountry()) && "owlallaccess2018" !== this.productName && (this.recurlyCreditCardEligible && e.push(he.RecurlyCreditCard), this.recurlyPaypalEligible && e.push(he.RecurlyPaypal), this.recurlyAmazonPayEligible && e.push(he.RecurlyAmazonPay), this.recurlySavedPaymentEligible && e.push(he.RecurlySavedPayment)), this.xsollaEligible && e.push(he.Xsolla), this.zuoraCreditCardEligible && e.push(he.ZuoraCreditCard), e
                    }, Object.defineProperty(e.prototype, "recurlySavedPaymentEligible", {
                        get: function() {
                            if (this.savedPaymentMethodPaymentType) switch (this.savedPaymentMethodPaymentType.toUpperCase()) {
                                case f.F.AMAZON:
                                    return this.recurlyAmazonPayEligible;
                                case f.F.CREDIT_CARD:
                                    return this.recurlyCreditCardEligible;
                                case f.F.PAYPAL:
                                    return this.recurlyPaypalEligible;
                                default:
                                    return !1
                            }
                            return !1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "recurlyAmazonPayEligible", {
                        get: function() {
                            return !this.disableAmazonPay && "US" === this.getDeterminedTaxCountry()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "recurlyCreditCardEligible", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "recurlyPaypalEligible", {
                        get: function() {
                            return !this.disablePayPal && ("US" === this.getDeterminedTaxCountry() || this.payPalEuSubsEnabled)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "xsollaEligible", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "zuoraCreditCardEligible", {
                        get: function() {
                            return "owlallaccess2018" === this.productName
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }(),
                Je = r("iWNC");
            var $e = function(e) {
                var t = Date.now() - e;
                return function() {
                    var r = Date.now();
                    return t + e <= r ? (t = r, "cache-and-network") : "cache-first"
                }
            }(3e3);
            var et, tt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            useSavedPaymentMethod: !0,
                            eligiblePaymentMethods: []
                        }, t.tracker = new Q.d({
                            allowDuplicateEvents: !1
                        }), t.toggleChangePaymentMethods = function() {
                            t.setState(function(e) {
                                return {
                                    useSavedPaymentMethod: !e.useSavedPaymentMethod
                                }
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        (this.dataReady(this.props) || this.props.data.error) && (this.props.latencyTracking.reportInteractive(), null !== this.tracker.get("savedPaymentAvailable") && null !== this.tracker.get("savedPaymentDisplayed") && this.tracker.reportEvent());
                        var e = this.savedPaymentMethod;
                        this.eligibilityComputer = new Qe({
                            productName: this.props.productName,
                            userCountryOfResidence: this.props.countryOfResidence,
                            ipCountryCode: this.props.ipCountryCode,
                            userBestGuessCountry: this.props.userBestGuessCountry,
                            savedPaymentMethodBillingCountry: e ? e.billingCountry : null,
                            savedPaymentMethodPaymentType: e ? e.paymentType : null,
                            showEuSubs: this.props.showEuSubs,
                            disablePayPal: this.disablePayPal,
                            disableAmazonPay: this.disableAmazonPay
                        });
                        var t = this.eligibilityComputer.getAvailableMethods();
                        if (this.props.showEuSubs) {
                            var r = Object.values(he).map(function(e) {
                                return {
                                    type: e,
                                    status: t.includes(e) ? R.ACTIVE : R.HIDDEN
                                }
                            });
                            this.setState({
                                eligiblePaymentMethods: r
                            })
                        } else {
                            r = t.map(function(e) {
                                return {
                                    type: e,
                                    status: R.ACTIVE
                                }
                            });
                            this.setState({
                                eligiblePaymentMethods: r
                            })
                        }
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        (this.dataReady(this.props) || this.props.data.error) && (this.props.latencyTracking.reportInteractive(), null !== this.tracker.get("savedPaymentAvailable") && null !== this.tracker.get("savedPaymentDisplayed") && this.tracker.reportEvent());
                        var r = this.savedPaymentMethod;
                        if (e.userBestGuessCountry !== this.props.userBestGuessCountry || e.data && this.props.data && e.data.currentUser !== this.props.data.currentUser || !this.dataReady(e) && this.dataReady(this.props)) {
                            this.eligibilityComputer = new Qe({
                                productName: this.props.productName,
                                userCountryOfResidence: this.props.countryOfResidence,
                                ipCountryCode: this.props.ipCountryCode,
                                userBestGuessCountry: this.props.userBestGuessCountry,
                                savedPaymentMethodBillingCountry: r ? r.billingCountry : null,
                                savedPaymentMethodPaymentType: r ? r.paymentType : null,
                                showEuSubs: this.props.showEuSubs,
                                disablePayPal: this.disablePayPal,
                                disableAmazonPay: this.disableAmazonPay
                            });
                            var n = this.eligibilityComputer.getAvailableMethods();
                            if (this.props.showEuSubs) {
                                var a = Object.values(he).map(function(e) {
                                    var r = t.eligiblePaymentMethods.find(function(t) {
                                            return t.type === e
                                        }),
                                        a = r && r.status === R.HIDDEN ? R.HIDDEN : R.DISABLED;
                                    return {
                                        type: e,
                                        status: n.includes(e) ? R.ACTIVE : a
                                    }
                                });
                                this.setState({
                                    eligiblePaymentMethods: a
                                })
                            } else {
                                a = n.map(function(e) {
                                    return {
                                        type: e,
                                        status: R.ACTIVE
                                    }
                                });
                                this.setState({
                                    eligiblePaymentMethods: a
                                })
                            }
                        }
                    }, t.prototype.render = function() {
                        if (this.props.data.error);
                        else if (!this.dataReady(this.props)) return l.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(C.ib, {
                            lineCount: 6
                        }));
                        var e = this.savedPaymentMethodEligibility,
                            t = this.state.eligiblePaymentMethods.filter(function(e) {
                                return e.status !== R.HIDDEN
                            });
                        return l.createElement(l.Fragment, null, this.renderWalletHeader(), this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature && this.savedPaymentMethod && this.props.ipCountryCode && e && l.createElement(qe, {
                            handleCompletePurchase: this.props.handleCompletePurchase,
                            savedPaymentMethod: this.savedPaymentMethod,
                            handleCountryChange: this.props.handleCountryChange,
                            eligibility: e,
                            userCountryOfResidence: this.props.countryOfResidence || this.props.ipCountryCode,
                            userZipCode: this.props.userZipCode,
                            showEuSubs: this.props.showEuSubs
                        }), this.props.configs && t.length > 0 && !(this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature) && this.props.ipCountryCode && l.createElement(C.Xa, {
                            "data-a-target": "PAYMENT_METHOD_SELECTOR"
                        }, l.createElement(Ye, {
                            handleCompletePurchase: this.props.handleCompletePurchase,
                            handleCountryChange: this.props.handleCountryChange,
                            trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                            eligiblePaymentMethods: t,
                            userCountryOfResidence: this.props.countryOfResidence || this.props.ipCountryCode,
                            userZipCode: this.props.userZipCode,
                            configs: this.props.configs,
                            showEuSubs: this.props.showEuSubs
                        })))
                    }, t.prototype.renderWalletHeader = function() {
                        return l.createElement(C.Xa, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Between,
                            margin: {
                                y: 2
                            }
                        }, this.renderWalletTitle(), l.createElement(C.Xa, {
                            padding: {
                                left: 1
                            },
                            display: C.X.Flex,
                            alignItems: C.f.End
                        }, this.renderPaymentMethodToggle()))
                    }, t.prototype.renderWalletTitle = function() {
                        return this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature ? l.createElement(C.W, {
                            type: C.Vb.H4,
                            bold: !0
                        }, Object(p.d)("Saved Payment Method", "Wallet")) : l.createElement(C.W, {
                            type: C.Vb.H4,
                            bold: !0
                        }, Object(p.d)("Choose Your Payment Method", "Wallet"))
                    }, t.prototype.renderPaymentMethodToggle = function() {
                        if (this.showSavedPaymentsFeature) return this.state.useSavedPaymentMethod ? l.createElement(C.U, {
                            onClick: this.toggleChangePaymentMethods,
                            "data-a-target": "js-test-change-payment-method"
                        }, Object(p.d)("Change Payment Method", "Wallet")) : l.createElement(C.Xa, {
                            display: C.X.Flex
                        }, l.createElement(C.sb, {
                            asset: C.tb.AngleLeft,
                            width: 10,
                            height: 10,
                            type: C.ub.Brand
                        }), l.createElement(C.Xa, {
                            margin: {
                                left: 1
                            }
                        }, l.createElement(C.U, {
                            onClick: this.toggleChangePaymentMethods,
                            "data-a-target": "js-test-use-existing-payment-method"
                        }, Object(p.d)("Use Existing Payment Method", "Wallet"))))
                    }, Object.defineProperty(t.prototype, "isLargePurchase", {
                        get: function() {
                            if (!this.props.product) return !1;
                            var e = this.props.product.product.priceInfo,
                                t = this.props.product.quantity;
                            return e.total * t > 5e4
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showSavedPaymentsFeature", {
                        get: function() {
                            if (this.props.data && this.props.data.error) return !1;
                            if (!this.savedPaymentMethodEligibility || this.savedPaymentMethodEligibility.status === R.HIDDEN) return !1;
                            if ("owlallaccess2018" === this.props.productName) return !1;
                            if (this.savedPaymentMethod) {
                                if (this.isLargePurchase) {
                                    if (this.savedPaymentMethod.isRestricted) {
                                        var e = !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.settings && this.props.data.currentUser.settings.hasTwoFactorEnabled);
                                        return this.tracker.set({
                                            savedPaymentAvailable: !0,
                                            savedPaymentDisplayed: e
                                        }), e
                                    }
                                    return this.tracker.set({
                                        savedPaymentAvailable: !0,
                                        savedPaymentDisplayed: !0
                                    }), !0
                                }
                                return !0
                            }
                            return !1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "savedPaymentMethodEligibility", {
                        get: function() {
                            return this.state.eligiblePaymentMethods.find(function(e) {
                                return e.type === he.RecurlySavedPayment
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "savedPaymentMethod", {
                        get: function() {
                            var e = (this.props.data && this.props.data.currentUser && this.props.data.currentUser.paymentMethods || []).filter(function(e) {
                                return e.provider.toUpperCase() === f.G.RECURLY
                            })[0];
                            return e ? e.paymentType.toUpperCase() === f.F.PAYPAL && this.disablePayPal ? null : e.paymentType.toUpperCase() === f.F.AMAZON && this.disableAmazonPay ? null : e : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "disablePayPal", {
                        get: function() {
                            return !this.props.configs || !this.props.configs.recurly.braintreeClientAuthorization
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "disableAmazonPay", {
                        get: function() {
                            return !this.props.configs || !this.props.configs.recurly.payWithAmazonConfigs.clientID
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.dataReady = function(e) {
                        return !!(e.configs && e.product && e.ipCountryCode && e.data.currentUser)
                    }, t
                }(l.Component),
                rt = Object(H.compose)(Object(J.b)("Wallet"), Object(h.a)(Je, {
                    options: function() {
                        return {
                            fetchPolicy: $e()
                        }
                    }
                }))(tt),
                nt = r("T3lN");
            ! function(e) {
                e.ELIGIBLE_PURCHASE = "ELIGIBLE_PURCHASE", e.INELIGIBLE_PURCHASE = "INELIGIBLE_PURCHASE"
            }(et || (et = {}));
            var at = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            progress: S.a.NOT_STARTED,
                            showErrors: !1,
                            userBestGuessCountry: null
                        }, t.enablePaidUpgradeFlag = p.b.get("earth_wind_fire", !1), t.paidUpgradePromotionStartDate = p.b.get("earth_wind_fire_start", "2018-09-10T00:00:00Z"), t.paidUpgradePromotionEndDate = p.b.get("earth_wind_fire_end", "2018-11-02T59:59:59Z"), t.recurlyTaxEnabled = p.b.get("recurly_tax_enabled", "false"), t.trackPaymentFormInteraction = function(e) {
                            if (t.props.data.subscriptionProduct) {
                                var r = t.props.isGift ? Q.e.Gifting : Q.e.Personal;
                                t.props.mysteryGiftCount && (r = Q.e.MysteryGifting);
                                var n = {
                                    channelLogin: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.login,
                                    channelId: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.id,
                                    paymentType: r,
                                    productId: t.props.productName,
                                    quantity: t.props.mysteryGiftCount || 1,
                                    ticketPrice: t.props.data.subscriptionProduct.priceInfo.total,
                                    currency: t.props.data.subscriptionProduct.priceInfo.currency,
                                    paymentFlow: e.paymentFlow,
                                    action: e.action,
                                    actionDetail: e.actionDetail || "",
                                    savedPayment: e.savedPayment || !1,
                                    trackingContext: t.props.trackingContext
                                };
                                Object(Q.g)(n)
                            }
                        }, t.handleCountryChange = function(e) {
                            t.setState({
                                userBestGuessCountry: e
                            });
                            var r = u.__assign({}, t.props.data.variables, {
                                taxCountry: e
                            });
                            t.props.data.refetch(r)
                        }, t.completePurchase = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t, r, n, a;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            t = this.props.data.subscriptionProduct, r = {
                                                payment_provider: e.payment_provider,
                                                payment_info: u.__assign({}, e.payment_info),
                                                is_gift: this.props.isGift,
                                                mystery_gift_count: this.props.mysteryGiftCount,
                                                is_anonymous: this.props.isAnonymous,
                                                recipient_id: this.props.recipientID,
                                                ip_country_code: this.props.data.requestInfo.countryCode,
                                                price_info: {
                                                    id: t && t.priceInfo && t.priceInfo.id,
                                                    currency: t && t.priceInfo && t.priceInfo.currency
                                                },
                                                residence: e.residence,
                                                device_id: p.p.session.deviceID,
                                                tab_session_id: p.p.session.tabID
                                            }, this.setState({
                                                showErrors: !1
                                            }), n = "/kraken/checkout/users/" + (this.props.data.currentUser && this.props.data.currentUser.id) + "/products/" + this.props.productName + "/purchase/complete", i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, b.a.post(n, {
                                                body: r
                                            }, {
                                                version: 5
                                            })];
                                        case 2:
                                            return (a = i.sent()).error || a.body && a.body.error ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Failed,
                                                savedPayment: e.savedPayment
                                            }), a.body && "UNSUPPORTED_COUNTRY" === a.body.error && a.body.error_details && a.body.error_details.country ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.UnsupportedCountryAlert,
                                                actionDetail: a.body.error_details.country,
                                                savedPayment: e.savedPayment
                                            }), this.handleCountryChange(a.body.error_details.country)) : a.body && "INVALID_RESIDENCE" === a.body.error ? this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.InvalidResidence,
                                                    level: E.Error
                                                }
                                            }) : a.body && "PRICE_INFO_INVALID" === a.body.error && a.body.error_details && a.body.error_details.country ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.PriceChangeAlert,
                                                actionDetail: a.body.error_details.country,
                                                savedPayment: e.savedPayment
                                            }), this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.PriceChangeNotice,
                                                    level: E.Info
                                                }
                                            }), this.handleCountryChange(a.body.error_details.country)) : a.body && "INVALID_PAYMENT_METHOD" === a.body.error ? this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.InvalidPaymentMethod,
                                                    level: E.Error
                                                }
                                            }) : this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.DefaultMessage,
                                                    level: E.Error
                                                }
                                            }), e.errorCallback && e.errorCallback(), [2]) : (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Success,
                                                savedPayment: e.savedPayment
                                            }), this.props.data.refetch(), this.setState({
                                                purchaseResponse: a.body,
                                                progress: S.a.CONFIRMATION
                                            }), [3, 4]);
                                        case 3:
                                            return i.sent(), this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.DefaultMessage,
                                                    level: E.Error
                                                }
                                            }), e.errorCallback && e.errorCallback(), this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Failed,
                                                savedPayment: e.savedPayment
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || (this.props.latencyTracking.reportInteractive(), this.state.progress < S.a.CONFIRMATION && this.productAlreadyOwned && !this.props.isGift && this.setState({
                            progress: S.a.CONFIRMATION
                        }))
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && (this.props.latencyTracking.reportInteractive(), this.state.progress < S.a.CONFIRMATION && this.productAlreadyOwned && !this.props.isGift && this.setState({
                            progress: S.a.CONFIRMATION
                        })), this.state.progress !== t.progress && this.props.onCheckoutProgress && this.props.onCheckoutProgress(this.state.progress)
                    }, t.prototype.render = function() {
                        if (this.props.data.error) return l.createElement(m.a, null);
                        if (this.productEligibility === N.MOBILE_UPGRADE) {
                            var e = this.shoppingCartItem,
                                t = e && e.product && e.product.owner && e.product.owner.displayName;
                            return l.createElement(m.a, null, l.createElement(C.W, {
                                bold: !0
                            }, Object(p.d)("You purchased a subscription to {productDisplayName} on your mobile device.", {
                                productDisplayName: t || this.props.productName
                            }, "CheckoutPayments")), l.createElement(C.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, l.createElement(C.W, null, Object(p.d)("Upgrading your mobile subscription is currently not supported.", "CheckoutPayments"))))
                        }
                        if (this.state.progress === S.a.CONFIRMATION) {
                            var r = l.createElement(j, {
                                product: this.shoppingCartItem,
                                purchaseFlow: this.purchaseFlow,
                                progress: this.state.progress
                            });
                            return l.createElement(w, {
                                productDescription: this.renderTicketDescription(),
                                header: r
                            }, this.purchaseInvoice && l.createElement(z, {
                                currentUser: this.props.data.currentUser,
                                purchaseFlow: this.purchaseFlow,
                                product: this.shoppingCartItem,
                                purchaseInvoice: this.purchaseInvoice && this.purchaseInvoice,
                                sessionUser: this.props.sessionUser,
                                benefit: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.benefit
                            }))
                        }
                        var n = l.createElement(j, {
                                product: this.shoppingCartItem,
                                purchaseFlow: this.purchaseFlow,
                                progress: this.state.progress
                            }),
                            a = this.shoppingCartItem && this.shoppingCartItem.product.owner && this.shoppingCartItem.product.owner.displayName,
                            i = "/" + (a || "");
                        return l.createElement(w, {
                            productDescription: this.renderTicketDescription(),
                            header: n
                        }, !this.dataReady && l.createElement(C.Xa, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center,
                            alignItems: C.f.Center
                        }, l.createElement(C.ib, {
                            lineCount: 20
                        })), l.createElement(C.Xa, {
                            display: this.dataReady ? C.X.Block : C.X.Hide
                        }, l.createElement(C.Xa, {
                            display: T(this.productEligibility) ? C.X.Hide : C.X.Block,
                            "data-test-selector": et.INELIGIBLE_PURCHASE
                        }, l.createElement(M, {
                            product: this.shoppingCartItem,
                            existingPurchases: this.existingPurchases,
                            productEligibility: this.productEligibility,
                            sessionUser: this.props.sessionUser
                        }), l.createElement(C.Xa, {
                            margin: {
                                top: 2
                            }
                        }, l.createElement(C.z, {
                            linkTo: i
                        }, Object(p.d)("Go back to {channel}", {
                            channel: a || "Twitch"
                        }, "CheckoutPayments")))), l.createElement(C.Xa, {
                            display: T(this.productEligibility) ? C.X.Block : C.X.Hide,
                            "data-test-selector": et.ELIGIBLE_PURCHASE
                        }, l.createElement(k, {
                            purchaseFlow: this.purchaseFlow,
                            product: this.shoppingCartItem
                        }), l.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(F, {
                            purchaseFlow: this.purchaseFlow,
                            product: this.shoppingCartItem,
                            existingPurchases: this.existingPurchases,
                            productEligibility: this.productEligibility,
                            benefit: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.benefit,
                            eligiblePromotions: this.eligiblePromotions,
                            sessionUser: this.props.sessionUser
                        })), this.state.showErrors && this.state.errors && l.createElement(C.Xa, {
                            margin: {
                                y: 2
                            }
                        }, l.createElement(O, {
                            errorCode: this.state.errors.code,
                            level: this.state.errors.level
                        })), l.createElement(rt, {
                            handleCompletePurchase: this.completePurchase,
                            handleCountryChange: this.handleCountryChange,
                            productName: this.props.productName,
                            trackPaymentFormInteraction: this.trackPaymentFormInteraction,
                            configs: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && this.shoppingCartItem && this.props.data.subscriptionProduct.self.checkoutConfigs.paymentProviderConfigs,
                            ipCountryCode: this.props.data.requestInfo && this.props.data.requestInfo.countryCode,
                            countryOfResidence: this.props.data.currentUser && this.props.data.currentUser.residence && this.props.data.currentUser.residence.countryCode,
                            userBestGuessCountry: this.state.userBestGuessCountry,
                            userZipCode: this.props.data.currentUser && this.props.data.currentUser.residence && this.props.data.currentUser.residence.postalCode,
                            product: this.shoppingCartItem,
                            showEuSubs: this.showEuSubs
                        }), l.createElement(_, null))))
                    }, t.prototype.renderTicketDescription = function() {
                        return this.productEligibility === N.MOBILE_UPGRADE || this.DEPRECRATE_hasActiveMobileSub ? null : l.createElement(V.a, {
                            productName: this.props.productName,
                            isGift: this.props.isGift && this.canGift,
                            showPaidUpgrade: this.enablePaidUpgrade,
                            priceCountry: this.state.userBestGuessCountry,
                            invoicePrice: null,
                            showEuSubs: this.showEuSubs
                        })
                    }, Object.defineProperty(t.prototype, "purchaseFlow", {
                        get: function() {
                            return this.props.isGift ? this.props.mysteryGiftCount && this.props.mysteryGiftCount > 0 ? n.MYSTERY_GIFT : n.GIFT_SUB : n.PERSONAL_SUB
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canPurchase", {
                        get: function() {
                            return !!(this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && this.props.data.subscriptionProduct.self.checkoutConfigs.canPurchase)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productEligibility", {
                        get: function() {
                            var e = this;
                            if (!this.canPurchase) return N.API_INELIGIBLE;
                            if (!this.shoppingCartItem) return N.NO_ITEM;
                            if (this.purchaseFlow === n.GIFT_SUB) return this.canGift ? N.GIFTABLE_RECIPIENT : N.NON_GIFTABLE_RECIPIENT;
                            if (this.purchaseFlow === n.MYSTERY_GIFT) return this.canGift ? N.GIFTABLE_RECIPIENT : N.NO_MASS_GIFTING;
                            var t = this.existingPurchases && this.existingPurchases.compatiblePurchases;
                            if (t) {
                                var r = t.find(function(e) {
                                        return e.paymentProvider.toUpperCase() === f.G.PRIME
                                    }),
                                    a = t.find(function(t) {
                                        return t.productType.toUpperCase() === f.V.CHANSUB && !!t.productTier && parseInt(e.shoppingCartItem.product.tier, 10) < parseInt(t.productTier, 10)
                                    }),
                                    i = t.find(function(t) {
                                        return t.productType.toUpperCase() === f.V.CHANSUB && !!t.productTier && parseInt(e.shoppingCartItem.product.tier, 10) > parseInt(t.productTier, 10)
                                    }),
                                    o = t.find(function(e) {
                                        return e.paymentProvider.toUpperCase() === f.G.GOOGLE_IAB
                                    });
                                if (r) return N.PRIME_UPGRADE;
                                if (a) return N.TIER_DOWNGRADE;
                                if (i) return o ? N.MOBILE_UPGRADE : N.TIER_UPGRADE
                            }
                            return !this.existingPurchases || this.existingPurchases && !this.existingPurchases.details && !this.existingPurchases.compatiblePurchases || this.existingPurchases.details && this.existingPurchases.details.state === f.W.INACTIVE ? N.NEW_PURCHASE : N.UNKNOWN
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "shoppingCartItem", {
                        get: function() {
                            var e = this.props.data.subscriptionProduct;
                            return e ? {
                                product: {
                                    id: e.id,
                                    name: e.name,
                                    priceInfo: e.priceInfo,
                                    interval: e.interval,
                                    tier: e.tier,
                                    owner: e.owner
                                },
                                recipient: this.props.recipientID ? {
                                    id: this.props.recipientID,
                                    displayName: this.props.recipientDisplayName
                                } : null,
                                quantity: this.props.mysteryGiftCount || 1
                            } : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "purchaseInvoice", {
                        get: function() {
                            if (this.state.purchaseResponse && this.state.purchaseResponse.invoice_total) return {
                                price: this.state.purchaseResponse.invoice_total.price,
                                currency: this.state.purchaseResponse.invoice_total.currency,
                                divisor: 100,
                                tier: this.state.purchaseResponse.product_tier
                            };
                            var e = this.existingPurchases && this.existingPurchases.details;
                            return e && {
                                price: e.price,
                                currency: e.currency,
                                divisor: e.divisor,
                                tier: e.productTier
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "existingPurchases", {
                        get: function() {
                            return this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.purchase
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productAlreadyOwned", {
                        get: function() {
                            return !(!this.existingPurchases || !this.existingPurchases.details)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "DEPRECRATE_hasActiveMobileSub", {
                        get: function() {
                            var e = this.existingPurchases;
                            return !(!e || !e.details || e.details.paymentProvider.toUpperCase() !== f.G.GOOGLE_IAB)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "enablePaidUpgrade", {
                        get: function() {
                            if (!this.enablePaidUpgradeFlag) return !1;
                            if (!this.props.data.subscriptionProduct || !this.props.data.subscriptionProduct.self) return !1;
                            var e = this.props.data.subscriptionProduct.self.benefit && this.props.data.subscriptionProduct.self.benefit.paidUpgrade && this.props.data.subscriptionProduct.self.benefit.paidUpgrade.startsAt,
                                t = !!(this.props.data.subscriptionProduct.self.benefit && this.props.data.subscriptionProduct.self.benefit.gift && this.props.data.subscriptionProduct.self.benefit.gift.isGift);
                            return !!(e && Object(d.isWithinRange)(Object(y.c)(e), Object(y.c)(this.paidUpgradePromotionStartDate), Object(y.c)(this.paidUpgradePromotionEndDate)) || this.productEligibility === N.NEW_PURCHASE && t && this.eligiblePromotions.paidUpgradePromotion)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canGift", {
                        get: function() {
                            return !!(this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && this.props.data.subscriptionProduct.self.checkoutConfigs.canGift)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "eligiblePromotions", {
                        get: function() {
                            var e = !1;
                            return this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && (e = this.props.data.subscriptionProduct.self.checkoutConfigs.isOneMonthFreeEligible), {
                                isOneMonthFreeEligible: e,
                                promotion: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.promotion,
                                paidUpgradePromotion: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.paidUpgradePromotion
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "dataReady", {
                        get: function() {
                            return !(this.props.data.loading && !this.props.data.error && !this.props.data.subscriptionProduct)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showEuSubs", {
                        get: function() {
                            return "true" === this.recurlyTaxEnabled || "staff" === this.recurlyTaxEnabled && !!(this.props.sessionUser && this.props.sessionUser.roles && this.props.sessionUser.roles.isStaff)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(l.Component),
                it = Object(i.compose)(Object(h.a)(nt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                productName: e.productName,
                                isAnonymous: e.isAnonymous,
                                isGift: e.isGift,
                                recipientID: e.recipientID,
                                includePromotion: function(e) {
                                    return !["turbo", "owlallaccess2018"].includes(e.productName)
                                }(e),
                                mysteryGiftCount: e.mysteryGiftCount,
                                taxCountry: ""
                            }
                        }
                    }
                }), Object(J.b)("CheckoutPayments"))(at);
            var ot = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e),
                    sessionUser: Object(c.e)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    promptLogin: function() {
                        return Object(s.e)(o.a.DashboardPage)
                    }
                }, e)
            })(it);
            r.d(t, "a", function() {
                return ot
            })
        },
        SPyc: function(e, t, r) {
            e.exports = r.p + "assets/discover-d67f6b00db816208999c.svg"
        },
        T3lN: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CheckoutPayments"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "productName"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "includePromotion"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isAnonymous"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isGift"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recipientID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "mysteryGiftCount"
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
                                value: "taxCountry"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "residence"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "countryCode"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "postalCode"
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
                                value: "subscriptionProduct"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "productName"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priceInfo"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "taxCountry"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "taxCountry"
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
                                                value: "currency"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "exponent"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                                value: "isTaxInclusive"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tax"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "total"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "interval"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "unit"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                        value: "type"
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
                                                value: "displayName"
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
                                                value: "checkoutConfigs"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "isAnonymous"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isAnonymous"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "isGift"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isGift"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "recipientID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "recipientID"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "mysteryGiftCount"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "mysteryGiftCount"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "taxCountryCode"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "taxCountry"
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
                                                        value: "canGift"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canPurchase"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isOneMonthFreeEligible"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paymentProviderConfigs"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "braintreeClientAuthorization"
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
                                                                        value: "token"
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
                                                                        value: "externalAccountID"
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
                                                value: "purchase"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "details"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "paymentProvider"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
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
                                                                value: "divisor"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "state"
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
                                                                value: "productTier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "compatiblePurchases"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "paymentProvider"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
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
                                                                value: "state"
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
                                                                value: "productTier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "divisor"
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
                                                value: "benefit"
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
                                                        value: "paidUpgrade"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "startsAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "endsAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "purchasedWithPrime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
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
                                                value: "promotion"
                                            },
                                            arguments: [],
                                            directives: [{
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "include"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "if"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "includePromotion"
                                                        }
                                                    }
                                                }]
                                            }],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountValue"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "oldPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "paidUpgradePromotion"
                                            },
                                            arguments: [],
                                            directives: [{
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "include"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "if"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "includePromotion"
                                                        }
                                                    }
                                                }]
                                            }],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "oldPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountValue"
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
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 1418
                }
            };
            r.loc.source = {
                body: "query CheckoutPayments($productName: String! $includePromotion: Boolean! $isAnonymous: Boolean $isGift: Boolean! $recipientID: ID $mysteryGiftCount: Int $taxCountry: String) {\ncurrentUser {\nid\ndisplayName\nresidence {\ncountryCode\npostalCode\n}\n}\nsubscriptionProduct(productName: $productName) {\nid\nname\npriceInfo(taxCountry: $taxCountry) {\ncurrency\nexponent\nid\nisTaxInclusive\nprice\ntax\ntotal\n}\ninterval {\nunit\n}\ntier\ntype\nowner {\nid\ndisplayName\nlogin\n}\nself {\ncheckoutConfigs (isAnonymous: $isAnonymous isGift: $isGift recipientID: $recipientID mysteryGiftCount: $mysteryGiftCount taxCountryCode: $taxCountry) {\ncanGift\ncanPurchase\nisOneMonthFreeEligible\npaymentProviderConfigs {\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\ndivisor\nstate\nproductType\nproductTier\n}\ncompatiblePurchases {\npaymentProvider\nprice\ncurrency\nstate\nproductType\nproductTier\ndivisor\n}\n}\nbenefit {\nid\ntier\npaidUpgrade {\nstartsAt\n}\nendsAt\npurchasedWithPrime\ngift {\nisGift\n}\n}\npromotion @include(if: $includePromotion) {\ndiscountType\ndiscountValue\nnewPrice\noldPrice\n}\npaidUpgradePromotion @include(if: $includePromotion) {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        TEvY: function(e, t, r) {},
        TQGo: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return u
            });
            var n = r("mrSG"),
                a = r("NAv5"),
                i = r("q1tI"),
                o = r("/7QA"),
                s = r("Ue10"),
                c = r("5gJ6"),
                u = (r("KjOM"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(s.Eb, {
                            className: this.isExpired ? "payment-method-display--expired" : "",
                            display: s.X.Flex,
                            justifyContent: this.props.justifyContent || s.Wa.Between,
                            flexWrap: s.Ba.Wrap,
                            fullWidth: !0
                        }, i.createElement(s.Xa, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(c.a, {
                            paymentInstrumentType: this.props.paymentType,
                            cardType: this.props.cardType || void 0,
                            paymentProvider: this.props.provider
                        }), this.renderLastFour()), i.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            flexDirection: s.Aa.Column
                        }, this.renderBillingEmail(), this.renderExpirationDate()))
                    }, t.prototype.renderLastFour = function() {
                        return this.props.lastFour ? i.createElement(s.Xa, {
                            display: s.X.Flex,
                            margin: {
                                x: 2
                            }
                        }, i.createElement(s.W, {
                            bold: !0
                        }, Object(o.d)("Ending in {lastFour}", {
                            lastFour: this.props.lastFour
                        }, "PaymentMethodDisplay"))) : null
                    }, t.prototype.renderExpirationDate = function() {
                        var e = this.zeroIndexedMonth,
                            t = this.props.expirationYear;
                        if (void 0 === e || !t) return null;
                        var r = new Date(t, e),
                            n = "";
                        return n = this.isExpired ? Object(o.d)("Expired {expirationDate}", {
                            expirationDate: Object(o.c)(r, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay") : Object(o.d)("Expires {expirationDate}", {
                            expirationDate: Object(o.c)(r, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay"), i.createElement(s.Xa, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Wa.End
                        }, i.createElement(s.W, {
                            ellipsis: !0,
                            color: s.O.Alt2,
                            bold: this.isExpired
                        }, n))
                    }, t.prototype.renderBillingEmail = function() {
                        return this.props.billingEmail ? i.createElement(s.Xa, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Wa.End
                        }, i.createElement(s.W, {
                            ellipsis: !0,
                            color: s.O.Alt2
                        }, this.props.billingEmail)) : null
                    }, Object.defineProperty(t.prototype, "isExpired", {
                        get: function() {
                            var e = this.zeroIndexedMonth,
                                t = this.props.expirationYear;
                            if (void 0 === e || !t) return !1;
                            var r = Object(a.startOfMonth)(new Date),
                                n = new Date(t, e, 1);
                            return !!Object(a.isBefore)(n, r)
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
        TSpM: function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_2x-2eccd73373faaefa6764.png"
        },
        "V+q8": function(e, t, r) {
            "use strict";
            var n = r("/MKj"),
                a = r("kRBY"),
                i = r("mrSG"),
                o = r("q1tI"),
                s = r("oJmH"),
                c = r("/7QA"),
                u = r("ZS2+"),
                d = r("yR8l"),
                l = r("tIid"),
                p = r("DMoW"),
                m = r("ZEQw"),
                h = r("uIkQ"),
                y = r("7SjK"),
                f = r("OpME"),
                b = r("Ue10"),
                g = function(e) {
                    return o.createElement(b.Xa, {
                        padding: 2
                    }, o.createElement(b.Pa, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(b.W, {
                        bold: !0
                    }, Object(c.d)("Subscription benefits", "ChannelSubscriptionBenefits"))), o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Directly support the broadcaster", "ChannelSubscriptionBenefits"))), e.hasAdFree && o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Ad-free (with limited exceptions)", "ChannelSubscriptionBenefits"))), o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Chat during subscriber-only mode", "ChannelSubscriptionBenefits"))), e.hasFastChat && o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Not affected by chat slow mode", "ChannelSubscriptionBenefits"))), e.hasSubonlyVideoArchive && o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Access to VODs", "ChannelSubscriptionBenefits"))), e.badges.length > 0 && o.createElement(o.Fragment, null, o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Subscriber Badges:", "ChannelSubscriptionBenefits"))), o.createElement(b.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: b.X.Flex,
                        flexWrap: b.Ba.Wrap,
                        justifyContent: b.Wa.Center
                    }, e.badges.map(function(e) {
                        return o.createElement(b.Xa, {
                            key: e.setID + "/" + e.version,
                            margin: .5
                        }, o.createElement(h.a, {
                            badge: e
                        }))
                    }))), e.emotes.length > 0 && o.createElement(o.Fragment, null, o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("{numEmotes, plural, one {# Subscriber Emote:} other {# Subscriber Emotes:}}", {
                        numEmotes: e.emotes.length
                    }, "ChannelSubscriptionBenefits"))), o.createElement(y.a, {
                        emotes: Object(f.b)(e.emotes)
                    })))
                },
                v = r("C8FX"),
                E = (r("QxOQ"), function(e) {
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "channel-subscription-header__banner-image",
                        style: {
                            backgroundImage: "url(" + e.bannerImageURL
                        }
                    }, o.createElement(b.Eb, {
                        background: b.r.Overlay,
                        position: b.jb.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }), o.createElement(b.Xa, {
                        className: "channel-subscription-header__banner-background",
                        textAlign: b.Rb.Center
                    }, o.createElement(b.Xa, {
                        padding: {
                            top: 3
                        },
                        display: b.X.Flex,
                        justifyContent: b.Wa.Center
                    }, o.createElement(b.q, {
                        alt: e.ownerDisplayName || "",
                        size: 96,
                        src: e.profileImageURL
                    })))), o.createElement(b.Xa, {
                        textAlign: b.Rb.Center,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(b.Pa, {
                        margin: {
                            top: 3
                        }
                    }, o.createElement(b.W, {
                        type: b.Vb.H4,
                        bold: !0
                    }, e.ownerDisplayName)), o.createElement(b.Pa, {
                        margin: .5
                    }, o.createElement(b.W, {
                        type: b.Vb.H5
                    }, e.productDisplayName)), o.createElement(v.a, {
                        price: e.productPrice,
                        interval: e.productPriceInterval,
                        productDiscountPrice: e.productDiscountPrice || void 0,
                        productPriceTaxInclusive: e.productPriceTaxInclusive,
                        showEuSubs: e.showEuSubs
                    })))
                }),
                C = r("ZDlU"),
                k = r("QV0B"),
                P = r("mb7O"),
                O = (r("ZsMu"), function() {
                    return o.createElement(P.a, null, o.createElement(b.Xa, {
                        className: "error-ticket-description__header",
                        padding: 2
                    }, o.createElement(b.Eb, {
                        fullHeight: !0,
                        background: b.r.Alt2
                    }, o.createElement(C.a, null))), o.createElement(k.a, {
                        collapsable: !0
                    }, o.createElement(b.Eb, {
                        className: "error-ticket-description__body",
                        padding: 2,
                        borderTop: !0
                    }, o.createElement(b.Eb, {
                        fullHeight: !0,
                        background: b.r.Alt2
                    }, o.createElement(C.a, null)))))
                }),
                S = (r("1P3F"), function() {
                    return o.createElement(P.a, null, o.createElement(b.Xa, {
                        className: "placeholder-ticket-description__header",
                        padding: 2
                    }, o.createElement(b.Eb, {
                        fullHeight: !0,
                        background: b.r.Alt2
                    })), o.createElement(k.a, {
                        collapsable: !0
                    }, o.createElement(b.Eb, {
                        padding: 2,
                        borderTop: !0
                    }, o.createElement(b.ib, {
                        lineCount: 30
                    }))))
                }),
                I = r("KYZ7"),
                N = r.n(I),
                j = (r("R9u/"), function(e) {
                    return o.createElement(P.a, null, o.createElement(b.Eb, {
                        background: b.r.Base
                    }, o.createElement(b.Xa, {
                        className: "turbo-ticket-description__banner-image",
                        padding: 3,
                        display: b.X.Flex,
                        alignItems: b.f.Center,
                        justifyContent: b.Wa.Center
                    }, o.createElement(b.S, {
                        className: "turbo-ticket-description__banner-logo",
                        src: N.a,
                        alt: Object(c.d)("Twitch Turbo Logo", "TurboTicketDescription")
                    })), o.createElement(b.Eb, {
                        borderBottom: !0,
                        textAlign: b.Rb.Center,
                        padding: 2
                    }, o.createElement(v.a, {
                        price: e.productPrice,
                        interval: e.productPriceInterval,
                        productPriceTaxInclusive: e.productPriceTaxInclusive,
                        showEuSubs: e.showEuSubs
                    })), o.createElement(k.a, {
                        collapsable: !0,
                        showButtonLabel: Object(c.d)("Show Turbo Benefits", "TurboTicketDescription"),
                        hideButtonLabel: Object(c.d)("Hide Turbo Benefits", "TurboTicketDescription")
                    }, o.createElement(b.Xa, {
                        padding: 2
                    }, o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, {
                        bold: !0
                    }, Object(c.d)("Subscription Benefits", "TurboTicketDescription"))), o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Ad-Free Viewing (with limited exceptions)", "TurboTicketDescription"))), o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Chat Badge", "TurboTicketDescription"))), o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Expanded Emote Set", "TurboTicketDescription"))), o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Custom Chat Username Colors", "TurboTicketDescription"))), o.createElement(b.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b.W, null, Object(c.d)("Extended Broadcast Storage", "TurboTicketDescription")))))))
                }),
                w = r("GnwI"),
                _ = r("9fjZ"),
                T = u.a.wrap(function() {
                    return r.e(209).then(r.bind(null, "skV9"))
                }, "CampaignsTicketDescription"),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTurboProduct = "turbo" === t.props.productName, t.tierToDisplayMap = {
                            1000: Object(c.d)("Tier 1 Channel Subscription", "TicketDescription"),
                            2000: Object(c.d)("Tier 2 Channel Subscription", "TicketDescription"),
                            3000: Object(c.d)("Tier 3 Channel Subscription", "TicketDescription")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.product,
                            r = e.loading,
                            n = e.error;
                        return !t && r ? o.createElement(S, null) : !t || n ? o.createElement(O, null) : this.isTurboProduct ? o.createElement(j, {
                            productPrice: this.price,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }) : this.isEsportsProduct ? o.createElement(T, {
                            ownerID: t.owner && t.owner.id,
                            badges: this.badges,
                            emotes: this.emotes,
                            productPrice: this.price,
                            productDiscountPrice: this.productDiscountPrice,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }) : o.createElement(P.a, null, o.createElement(b.Eb, {
                            background: b.r.Base
                        }, o.createElement(E, {
                            bannerImageURL: t.owner && t.owner.bannerImageURL,
                            profileImageURL: t.owner && t.owner.profileImageURL,
                            ownerDisplayName: t.owner && t.owner.displayName,
                            productDisplayName: this.productDisplayName,
                            productPrice: this.price,
                            productDiscountPrice: this.productDiscountPrice,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }), o.createElement(k.a, {
                            collapsable: !0,
                            showButtonLabel: Object(c.d)("Show Subscription Benefits", "TicketDescription"),
                            hideButtonLabel: Object(c.d)("Hide Subscription Benefits", "TicketDescription")
                        }, o.createElement(g, {
                            hasAdFree: t.hasAdFree,
                            hasFastChat: t.hasFastChat,
                            hasSubonlyVideoArchive: t.hasSubonlyVideoArchive,
                            badges: this.badges,
                            emotes: this.emotes
                        }))))
                    }, Object.defineProperty(t.prototype, "isEsportsProduct", {
                        get: function() {
                            var e = this.props.data.product;
                            return !!(e && e.owner && e.owner.id && Object(l.a)(e.owner.id, this.props.sessionUser))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "taxInclusive", {
                        get: function() {
                            var e = this.props.data.product && this.props.data.product.priceInfo;
                            return !("US" === this.props.priceCountry || e && "USD" === e.currency && null === this.props.priceCountry && "US" === this.props.data.requestInfo.countryCode) && !(!e || !e.isTaxInclusive)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "price", {
                        get: function() {
                            if (this.props.invoicePrice) return this.props.invoicePrice;
                            if (this.props.data.loading) return null;
                            var e = this.props.data.product;
                            return e && e.priceInfo ? Object(c.f)(e.priceInfo.total / Math.pow(10, e.priceInfo.exponent), {
                                style: "currency",
                                currency: e.priceInfo.currency
                            }) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productDiscountPrice", {
                        get: function() {
                            if (this.props.isGift) return this.props.data.product && this.props.data.product.giftPromotion && this.props.data.product.giftPromotion.newPrice;
                            if (!this.props.data.product || !this.props.data.product.self) return null;
                            var e = this.props.data.product.self.paidUpgradePromotion && this.props.data.product.self.paidUpgradePromotion.newPrice;
                            return this.props.showPaidUpgrade && e ? e : this.props.data.product.self.promotion && this.props.data.product.self.promotion.newPrice
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productDisplayName", {
                        get: function() {
                            var e = this.props.data.product;
                            return e && e.priceInfo && e.priceInfo.currency !== p.t.USD ? this.tierToDisplayMap[e.tier || ""] || Object(c.d)("Channel Subscription", "TicketDescription") : e && e.displayName
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "badges", {
                        get: function() {
                            var e = [];
                            if (this.props.data.product && this.props.data.product.owner && this.props.data.product.owner.broadcastBadges) {
                                var t = this.props.data.product.owner.broadcastBadges;
                                (t && t.filter(function(e) {
                                    return e && "subscriber" === e.setID
                                }).sort(function(e, t) {
                                    return e && t && parseInt(e.version, 10) < parseInt(t.version, 10) ? -1 : 1
                                })).forEach(function(t) {
                                    if (t) {
                                        var r = {
                                            id: t.id,
                                            setID: t.setID,
                                            version: t.version,
                                            title: t.title,
                                            image1x: t.image1x,
                                            image2x: t.image2x,
                                            image4x: t.image4x,
                                            clickAction: m.b,
                                            clickURL: t.clickURL || ""
                                        };
                                        e.push(r)
                                    }
                                })
                            }
                            return e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "emotes", {
                        get: function() {
                            var e = [],
                                t = this.props.data.product;
                            return t && t.owner && t.owner.subscriptionProducts && t.owner.subscriptionProducts.forEach(function(r) {
                                r && r.emotes && r.tier <= t.tier && r.emotes.forEach(function(t) {
                                    t && t.id && t.token && e.push({
                                        id: t.id,
                                        token: t.token
                                    })
                                })
                            }), e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                M = Object(s.compose)(Object(w.b)("TicketDescription"), Object(d.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                productName: e.productName,
                                taxCountry: e.priceCountry
                            }
                        }
                    }
                }))(R);
            var A = Object(n.connect)(function(e) {
                return {
                    sessionUser: Object(a.e)(e)
                }
            })(M);
            r.d(t, "a", function() {
                return A
            })
        },
        VrOd: function(e, t, r) {},
        WJ6U: function(e, t, r) {
            e.exports = r.p + "assets/android_1x-38340be28156bb72233a.svg"
        },
        WlZp: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), Object.defineProperty(t.prototype, "kaptchaIframeSrc", {
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
            r.d(t, "a", function() {
                return i
            })
        },
        XE3n: function(e, t, r) {},
        ZEQw: function(e, t, r) {
            "use strict";
            r.d(t, "c", function() {
                return n
            }), r.d(t, "d", function() {
                return a
            }), r.d(t, "e", function() {
                return i
            }), r.d(t, "b", function() {
                return o
            }), r.d(t, "a", function() {
                return s
            });
            var n = "subscribe_to_channel",
                a = "turbo",
                i = "visit_url",
                o = "none",
                s = "broadcaster"
        },
        ZHRK: function(e, t, r) {},
        ZiR0: function(e, t, r) {
            e.exports = r.p + "assets/paypal_1x-2a610ceedc14dc7f9673.png"
        },
        ZsMu: function(e, t, r) {},
        a7Xb: function(e, t, r) {},
        acxT: function(e, t, r) {},
        b5C3: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return i
            });
            var n = r("q1tI"),
                a = r("vHGB"),
                i = function(e) {
                    var t = e.badgesToRender,
                        r = e.badgeSets;
                    if (!t) return null;
                    var i = [];
                    ! function(e) {
                        return Array.isArray(e)
                    }(t) ? function(e) {
                        return !Array.isArray(e)
                    }(t) && (i = Object.keys(t).map(function(e) {
                        var i = t[e],
                            o = r.getBadge(e, i);
                        return null === o ? null : n.createElement(a.a, {
                            key: o.setID + "/" + o.version,
                            badge: o
                        })
                    })) : i = t.map(function(e) {
                        var t = r.getBadge(e.setID, e.version);
                        return null === t ? null : n.createElement(a.a, {
                            key: t.setID + "/" + t.version,
                            badge: t
                        })
                    });
                    var o = i.filter(function(e) {
                        return null !== e
                    });
                    return n.createElement("span", null, o)
                };
            i.displayName = "BadgeList"
        },
        b6Yk: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("mrSG"),
                a = r("/7QA"),
                i = r("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            var a, i, o, s;
                            return n.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, r), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = n.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                    case 1:
                                        if ((a = i.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, n.__assign({}, a, {
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
                        return n.__awaiter(this, void 0, Promise, function() {
                            var t, r, a, i;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return r = n.sent(), e.ok ? t.body = r : t.error = r, [3, 4];
                                    case 3:
                                        return a = n.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: n.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var r = a.p.store.getState(),
                            n = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(r);
                        return o && (n.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (n["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            n[e] && delete n[e]
                        }), n
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        bOWA: function(e, t, r) {
            e.exports = r.p + "assets/mastercard-280a786ec3225a087428.svg"
        },
        bQeB: function(e, t, r) {
            e.exports = r.p + "assets/generic_credit_card_1x-a6b9cd93075728ab4114.png"
        },
        bfgy: function(e, t, r) {},
        bvmA: function(e, t, r) {
            e.exports = r.p + "assets/paypal_dark_2x-5364f28c059af7303d67.png"
        },
        cpJf: function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }), r.d(t, "d", function() {
                    return i
                }), r.d(t, "c", function() {
                    return o
                }), r.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(n || (n = {}));
            var a, i = {
                    TriHard: {
                        count: 196568036
                    },
                    Kappa: {
                        count: 192158118
                    },
                    "4Head": {
                        count: 155758710
                    },
                    PogChamp: {
                        count: 151485090
                    },
                    cmonBruh: {
                        count: 146352878
                    },
                    BibleThump: {
                        count: 56472964
                    },
                    WutFace: {
                        count: 45069031
                    },
                    Kreygasm: {
                        count: 41387580
                    },
                    DansGame: {
                        count: 38097659
                    },
                    hi5F: {
                        count: 34986404
                    },
                    SMOrc: {
                        count: 34734484
                    },
                    KappaPride: {
                        count: 34262839
                    },
                    VoHiYo: {
                        count: 27886434
                    },
                    SwiftRage: {
                        count: 24561900
                    },
                    ResidentSleeper: {
                        count: 24438298
                    },
                    EleGiggle: {
                        count: 19891526
                    },
                    FailFish: {
                        count: 19118343
                    },
                    NotLikeThis: {
                        count: 18802905
                    },
                    Keepo: {
                        count: 18351415
                    },
                    BabyRage: {
                        count: 18220906
                    },
                    MingLee: {
                        count: 18026207
                    },
                    pbfSSH: {
                        count: 16911241
                    },
                    forsenE: {
                        count: 14960299
                    },
                    HeyGuys: {
                        count: 14851569
                    },
                    ANELE: {
                        count: 14648986
                    },
                    PJSalt: {
                        count: 14438861
                    }
                },
                o = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
            ! function(e) {
                e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
            }(a || (a = {}))
        },
        csmi: function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_dark_1x-5810bf2a8f8185a1a905.png"
        },
        fQWD: function(e, t, r) {
            "use strict";
            var n = r("vHGB");
            r.d(t, "a", function() {
                return n.a
            })
        },
        iSjI: function(e, t, r) {
            e.exports = r.p + "assets/visa-0862ac17dccf1c7a5a22.svg"
        },
        iWNC: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SavedInstruments_UserPaymentMethods"
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
                                                value: "billingCountry"
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
                                                value: "isRestricted"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "settings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasTwoFactorEnabled"
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
                    end: 227
                }
            };
            r.loc.source = {
                body: "query SavedInstruments_UserPaymentMethods {\ncurrentUser {\nid\npaymentMethods {\nprovider\npaymentType\nbillingCountry\nbillingEmail\ncardType\nlastFour\nexpirationMonth\nexpirationYear\nisRestricted\n}\nsettings {\nhasTwoFactorEnabled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        lZdE: function(e, t, r) {
            "use strict";

            function n(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            r.d(t, "a", function() {
                return n
            })
        },
        lqDW: function(e, t, r) {},
        mIie: function(e, t, r) {},
        mb7O: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r("Ue10"),
                i = (r("bfgy"), function(e) {
                    return n.createElement(a.Xa, {
                        className: "ticket-wrapper__container",
                        "data-a-target": "js-test-ticket-container",
                        margin: {
                            bottom: 2
                        }
                    }, n.createElement(a.G, {
                        elevation: 1
                    }, e.children))
                }),
                o = i;
            r.d(t, !1, function() {
                return i
            }), r.d(t, "a", function() {
                return o
            })
        },
        oQBz: function(e, t, r) {
            e.exports = r.p + "assets/xsolla_1x-920aa1ba72411e5fe0aa.png"
        },
        q8H6: function(e, t, r) {
            e.exports = r.p + "assets/paypal_dark_2x-74742ec8600998675dc5.png"
        },
        sV2v: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("fvjX"),
                o = r("GnwI"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (!document.querySelector("#recurly-script")) {
                            var e = document.createElement("script");
                            e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                        }
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(a.Component),
                c = Object(i.compose)(Object(o.b)("RecurlyScript", {
                    autoReportInteractive: !0
                }))(s);
            r.d(t, !1, function() {
                return s
            }), r.d(t, "a", function() {
                return c
            })
        },
        tIid: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            }), r.d(t, "b", function() {
                return s
            });
            var n = r("/7QA"),
                a = "esport_insider_pass_whitelist",
                i = "esports_room_cheering_whitelist";

            function o(e, t, r) {
                return void 0 === r && (r = !1), c(a, e, t, r)
            }

            function s(e, t) {
                return c(i, e, t)
            }

            function c(e, t, r, a) {
                void 0 === a && (a = !1);
                var i = n.b.get(e, []),
                    o = r && r.roles && r.roles.isStaff || a;
                return i.includes(t) || i.includes(t + "-staff") && o
            }
        },
        "u/1r": function(e, t, r) {},
        uIkQ: function(e, t, r) {
            "use strict";
            var n = r("b5C3"),
                a = r("fQWD"),
                i = r("ZEQw"),
                o = (r("yzyL"), r("mrSG")),
                s = function() {
                    function e(e, t, r) {
                        this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, r), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, r)
                    }
                    return e.prototype.getBadge = function(e, t) {
                        var r = this.channelsBySet.get(e);
                        return r && r.has(t) ? r.get(t) || null : void 0 !== (r = this.globalsBySet.get(e)) && r.get(t) || null
                    }, e.prototype.indexBadges = function(e, t, r) {
                        e.forEach(function(e) {
                            r && e.clickAction === i.c && (e = o.__assign({}, e, {
                                channelName: r
                            }));
                            var n = t.get(e.setID);
                            n || (n = new Map, t.set(e.setID, n)), n.set(e.version, e)
                        })
                    }, e
                }();
            new s([], [], "");
            r.d(t, "b", function() {
                return n.a
            }), r.d(t, "a", function() {
                return a.a
            }), r.d(t, !1, function() {}), r.d(t, !1, function() {}), r.d(t, "c", function() {
                return s
            })
        },
        uReR: function(e, t, r) {
            e.exports = r.p + "assets/amex-0e89bed815722eb64119.svg"
        },
        uUdG: function(e, t, r) {},
        "vE+g": function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_dark_1x-27fb4921a874a8f4d84b.png"
        },
        vGoz: function(e, t, r) {},
        vHGB: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("ZEQw"),
                o = r("Ue10"),
                s = (r("E78O"), r("/7QA")),
                c = r("2xye"),
                u = function(e) {
                    e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.p.tracking.track(c.SpadeEventType.ChatBadgeClick, e)
                };
            r.d(t, "a", function() {
                return d
            });
            var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHovering: !1
                    }, t.onMouseOver = function() {
                        t.setState({
                            isHovering: !0
                        })
                    }, t.onMouseOut = function() {
                        t.setState({
                            isHovering: !1
                        })
                    }, t.onBadgeClickHandler = function() {
                        u({
                            badge_type: t.props.badge.title,
                            badge_url_target: t.targetURL
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.badge,
                        t = e.title,
                        r = e.image1x,
                        n = e.image2x,
                        i = e.image4x,
                        c = a.createElement("img", {
                            alt: t,
                            "aria-label": Object(s.d)("{badgeTitle} badge", {
                                badgeTitle: t
                            }, "Badge"),
                            className: "chat-badge",
                            src: r,
                            srcSet: r + " 1x, " + n + " 2x, " + i + " 4x",
                            onMouseOver: this.onMouseOver,
                            onMouseOut: this.onMouseOut
                        });
                    return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (c = a.createElement("a", {
                        href: this.targetURL,
                        onClick: this.onBadgeClickHandler,
                        target: "_blank",
                        "data-a-target": "chat-badge"
                    }, c)), this.state.isHovering ? a.createElement(o.Yb, {
                        align: o.Zb.Left,
                        "data-a-target": "chat-badge",
                        display: o.X.Inline,
                        key: r,
                        label: t,
                        offsetY: "0.9rem"
                    }, c) : c
                }, t.prototype.getTargetURL = function() {
                    var e = this.props.badge;
                    switch (e.clickAction) {
                        case i.e:
                            return e.clickURL;
                        case i.c:
                            return e.channelName ? this.getSubscriberLink() : "";
                        case i.d:
                            return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                        default:
                            return ""
                    }
                }, t.prototype.getSubscriberLink = function() {
                    return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
                }, t
            }(a.Component)
        },
        xgE2: function(e, t, r) {
            e.exports = r.p + "assets/more_methods_2x-3b1c8bbdaabcd0fb7c8a.png"
        },
        yrda: function(e, t, r) {
            e.exports = r.p + "assets/amazon_pay_2x-914335e3401a72109a8a.png"
        },
        yzyL: function(e, t) {}
    }
]);