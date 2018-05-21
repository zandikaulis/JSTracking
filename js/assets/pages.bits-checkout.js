webpackJsonp([61], {
    "10JX": function(e, t) {},
    "1WAG": function(e, t) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BitsCheckoutSummaryPage"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "returnURL"
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
                            value: "cancelURL"
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
                    }, {
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
                                    value: "payPalBillingAgreement"
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
                                            value: "countryCode"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "firstName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payPalBillingAgreementURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "returnURL"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "returnURL"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "cancelURL"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cancelURL"
                                        }
                                    }
                                }],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 282
            }
        };
        r.loc.source = {
            body: "query BitsCheckoutSummaryPage($returnURL: String! $cancelURL: String!) {\nrequestInfo {\ncountryCode\n}\ncurrentUser {\nid\npayPalBillingAgreement {\nid\ncountryCode\nfirstName\n}\npayPalBillingAgreementURL (returnURL: $returnURL cancelURL: $cancelURL)\nresidence {\ncountryCode\npostalCode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    "3cdp": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("RH2O"),
            a = r("2KeS"),
            c = r("+xm8"),
            o = r("f2i/"),
            i = r("Aj/L"),
            s = r("TToO"),
            u = r("OAwv"),
            d = r("GiK3"),
            l = r("3zLD"),
            m = r("CIox"),
            p = r("6sO2"),
            y = r("yWCw"),
            f = r("7vx8"),
            b = r("CSlQ"),
            h = r("j7/Y"),
            g = r("w9tK"),
            O = r("vH/s"),
            j = r("FE1O"),
            _ = r.n(j),
            E = r("4ypz"),
            v = r.n(E),
            C = r("z3gE"),
            S = r.n(C),
            k = r("Py5i"),
            P = r.n(k),
            B = r("FuaS"),
            A = r("Odds");
        r("yR7m");

        function R(e, t) {
            switch (t) {
                case "JPY":
                case "KRW":
                    return e;
                default:
                    return e / 100
            }
        }
        var N, I = Object(l.compose)(Object(b.d)("BitsCheckoutInfoCard", {
                autoReportInteractive: !0
            }))(function(e) {
                var t = "https://static-cdn.jtvnw.net/revenue-payments-assets/images/" + e.bitsAmount + "-bits.png",
                    r = Object(p.d)("{bitsAmount, number} Bits", {
                        bitsAmount: e.bitsAmount
                    }, "BitsCheckoutInfoCard"),
                    n = e.taxInclusive ? d.createElement(d.Fragment, null, d.createElement(A._35, {
                        display: A.R.Flex,
                        alignItems: A.c.Stretch,
                        flexWrap: A.U.NoWrap,
                        fullHeight: !0,
                        justifyContent: A._7.Between,
                        borderBottom: !0,
                        padding: 1
                    }, d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, r)), d.createElement(A._35, {
                        display: A.R.Flex,
                        alignItems: A.c.Stretch,
                        flexWrap: A.U.NoWrap,
                        fullHeight: !0,
                        justifyContent: A._7.Between,
                        padding: 1
                    }, d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, Object(p.d)("Total with VAT", "BitsCheckoutInfoCard")), d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, Object(p.e)(R(e.total, e.localizedCurrency), {
                        style: "currency",
                        currency: e.localizedCurrency
                    })))) : d.createElement(d.Fragment, null, d.createElement(A._35, {
                        display: A.R.Flex,
                        alignItems: A.c.Stretch,
                        flexWrap: A.U.NoWrap,
                        fullHeight: !0,
                        justifyContent: A._7.Between,
                        padding: 1
                    }, d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, r), d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, Object(p.e)(R(e.price, e.localizedCurrency), {
                        style: "currency",
                        currency: e.localizedCurrency
                    }))), d.createElement(A._35, {
                        display: A.R.Flex,
                        alignItems: A.c.Stretch,
                        flexWrap: A.U.NoWrap,
                        fullHeight: !0,
                        justifyContent: A._7.Between,
                        borderBottom: !0,
                        padding: 1
                    }, d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, Object(p.d)("Estimated Tax", "BitsCheckoutInfoCard")), d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, Object(p.e)(R(e.tax, e.localizedCurrency), {
                        style: "currency",
                        currency: e.localizedCurrency
                    }))), d.createElement(A._35, {
                        display: A.R.Flex,
                        alignItems: A.c.Stretch,
                        flexWrap: A.U.NoWrap,
                        fullHeight: !0,
                        justifyContent: A._7.Between,
                        padding: 1
                    }, d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, Object(p.d)("Total", "BitsCheckoutInfoCard")), d.createElement(A.Q, {
                        color: A.K.Alt2,
                        type: A._49.Span
                    }, Object(p.e)(R(e.total, e.localizedCurrency), {
                        style: "currency",
                        currency: e.localizedCurrency
                    }))));
                return d.createElement(A._35, {
                    className: "bits-checkout-info-card",
                    background: A.n.Alt,
                    border: !0
                }, d.createElement(A._35, {
                    display: A.R.Flex,
                    justifyContent: A._7.Center,
                    padding: 2
                }, d.createElement(A._35, {
                    display: A.R.Flex
                }, d.createElement(A.N, {
                    src: t,
                    alt: r
                }))), d.createElement(A._35, {
                    padding: 1
                }, n))
            }),
            w = (r("7KB5"), function() {
                return d.createElement(A._35, {
                    className: "bits-checkout-info-card-placeholder",
                    background: A.n.Alt,
                    border: !0
                }, d.createElement(A._35, {
                    display: A.R.Flex,
                    justifyContent: A._7.Center,
                    padding: 2,
                    borderBottom: !0
                }, d.createElement(A._35, {
                    display: A.R.Flex
                }, d.createElement(A._14, {
                    width: 150,
                    height: 150
                }))), d.createElement(A._35, {
                    padding: 1
                }, d.createElement(A._35, {
                    display: A.R.Flex,
                    alignItems: A.c.Stretch,
                    flexWrap: A.U.NoWrap,
                    fullHeight: !0,
                    justifyContent: A._7.Between,
                    padding: 1
                }, d.createElement(A._14, {
                    lineCount: 1
                })), d.createElement(A._35, {
                    display: A.R.Flex,
                    alignItems: A.c.Stretch,
                    flexWrap: A.U.NoWrap,
                    fullHeight: !0,
                    justifyContent: A._7.Between,
                    borderBottom: !0,
                    padding: 1
                }, d.createElement(A._14, {
                    lineCount: 1
                })), d.createElement(A._35, {
                    display: A.R.Flex,
                    alignItems: A.c.Stretch,
                    flexWrap: A.U.NoWrap,
                    fullHeight: !0,
                    justifyContent: A._7.Between,
                    padding: 1
                }, d.createElement(A._14, {
                    lineCount: 1
                }))))
            }),
            T = function() {
                return d.createElement(A.O, {
                    to: "https://help.twitch.tv/customer/portal/emails/new"
                }, Object(p.d)("Need help? Contact Purchase Support", "NeedHelpText"))
            },
            L = r("9u8h");
        ! function(e) {
            e[e.NEED_RESIDENCE = 0] = "NEED_RESIDENCE", e[e.NO_BILLING_AGREEMENT = 1] = "NO_BILLING_AGREEMENT", e[e.UNSUPPORTED_COUNTRY = 2] = "UNSUPPORTED_COUNTRY", e[e.GENERAL_ERROR = 3] = "GENERAL_ERROR"
        }(N || (N = {}));
        var U, M = function() {
            function e() {}
            return e.getBitsPrice = function(e, t, r) {
                return void 0 === r && (r = {
                    networkOnly: !1
                }), s.__awaiter(this, void 0, void 0, function() {
                    var n, a, c, o, i;
                    return s.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return this.cachedBitsPrice && !r.networkOnly ? [2, this.cachedBitsPrice] : (n = "/kraken/checkout/users/" + e + "/products/" + t + "/preview_purchase", [4, L.a.get(n, {}, {
                                    version: 5
                                })]);
                            case 1:
                                if (a = s.sent(), c = a.body, !(o = a.error) && c) return i = {
                                    bitsPrice: {
                                        localizedCurrency: c.pricing.localized_currency,
                                        price: c.pricing.price,
                                        tax: c.pricing.tax,
                                        total: c.pricing.total,
                                        taxInclusive: c.tax_inclusive
                                    }
                                }, [2, this.cachedBitsPrice = i];
                                switch (o && o.status) {
                                    case 409:
                                        return [2, {
                                            error: N.NEED_RESIDENCE
                                        }];
                                    case 410:
                                        return [2, {
                                            error: N.NO_BILLING_AGREEMENT
                                        }];
                                    case 422:
                                        return [2, {
                                            error: N.UNSUPPORTED_COUNTRY
                                        }];
                                    default:
                                        return [2, {
                                            error: N.GENERAL_ERROR
                                        }]
                                }
                                return [2]
                        }
                    })
                })
            }, e.purchaseBits = function(e, t) {
                return s.__awaiter(this, void 0, void 0, function() {
                    var r;
                    return s.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                r = "/kraken/checkout/users/" + e + "/products/" + t + "/bits_purchase", n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, L.a.postOrThrow(r, {}, {
                                    version: 5
                                })];
                            case 2:
                                return [2, {
                                    orderID: n.sent().body.order_id
                                }];
                            case 3:
                                return n.sent(), [2, {
                                    error: !0
                                }];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.setBillingAgreement = function(e, t) {
                return s.__awaiter(this, void 0, void 0, function() {
                    var r, n, a;
                    return s.__generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                r = "/kraken/checkout/users/" + e + "/paypal/billing_agreement", n = {
                                    token: t
                                }, c.label = 1;
                            case 1:
                                return c.trys.push([1, 3, , 4]), [4, L.a.putOrThrow(r, {
                                    body: n
                                }, {
                                    version: 5
                                })];
                            case 2:
                                return [2, {
                                    billingAgreement: {
                                        userID: (a = c.sent().body).user_id,
                                        billingAgreementID: a.billing_agreement_id,
                                        countryCode: a.country_code,
                                        firstName: a.first_name,
                                        lastName: a.last_name,
                                        email: a.email
                                    }
                                }];
                            case 3:
                                return c.sent(), [2, {
                                    error: !0
                                }];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.cachedBitsPrice = null, e
        }();
        ! function(e) {
            e.Amazon = "amazon", e.Paypal = "paypal"
        }(U || (U = {}));
        var x = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    provider: U.Amazon,
                    priceViewable: !0,
                    priceLoading: !0,
                    localizedCurrency: null,
                    price: null,
                    tax: null,
                    total: null,
                    taxInclusive: null
                }, t.renderBitsDescription = function() {
                    return t.state.priceViewable ? t.state.priceLoading ? d.createElement(w, null) : null !== t.props.bitsAmount && null !== t.state.localizedCurrency && null !== t.state.price && null !== t.state.tax && null !== t.state.total && null !== t.state.taxInclusive ? d.createElement(I, {
                        bitsAmount: t.props.bitsAmount,
                        localizedCurrency: t.state.localizedCurrency,
                        price: t.state.price,
                        tax: t.state.tax,
                        total: t.state.total,
                        taxInclusive: t.state.taxInclusive
                    }) : void 0 : null
                }, t.renderMainContent = function() {
                    return d.createElement(d.Fragment, null, d.createElement(A._35, {
                        background: A.n.Base,
                        padding: {
                            y: 2,
                            x: 3
                        }
                    }, d.createElement(A.Q, {
                        type: A._49.H4
                    }, Object(p.d)("Select Payment Service", "BitsCheckoutSelectPage"))), d.createElement(A._35, {
                        borderTop: !0,
                        padding: 3
                    }, d.createElement("fieldset", null, d.createElement(A._35, {
                        display: A.R.InlineBlock,
                        margin: {
                            y: 1,
                            right: 1
                        },
                        background: A.n.Base
                    }, d.createElement(A._0, {
                        alt: Object(p.d)("Amazon", "BitsCheckoutSelectPage"),
                        label: U.Amazon,
                        src: _.a,
                        srcSet: {
                            "1x": _.a,
                            "2x": v.a
                        },
                        type: A._1.Radio,
                        onChange: t.setProviderWrapper(U.Amazon),
                        checked: t.state.provider === U.Amazon
                    })), d.createElement(A._35, {
                        display: A.R.InlineBlock,
                        margin: {
                            y: 1
                        },
                        background: A.n.Base
                    }, d.createElement(A._0, {
                        alt: Object(p.d)("Paypal", "BitsCheckoutSelectPage"),
                        label: U.Amazon,
                        src: S.a,
                        srcSet: {
                            "1x": S.a,
                            "2x": P.a
                        },
                        type: A._1.Radio,
                        onChange: t.setProviderWrapper(U.Paypal),
                        checked: t.state.provider === U.Paypal
                    }))), d.createElement(A._8, {
                        margin: {
                            y: 3
                        }
                    }, t.renderContinueButton()), d.createElement(A._8, {
                        margin: {
                            y: 1
                        }
                    }, d.createElement(T, null))))
                }, t.getBitsPrice = function() {
                    return s.__awaiter(t, void 0, void 0, function() {
                        var e, t, r;
                        return s.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return (e = this.props.sessionUser) && e.id ? (this.setState({
                                        priceLoading: !0,
                                        priceViewable: !0
                                    }), [4, M.getBitsPrice(e.id, this.props.productID)]) : [2];
                                case 1:
                                    return t = n.sent(), r = t.bitsPrice, t.error || !r ? this.setState({
                                        priceViewable: !1
                                    }) : this.setState({
                                        localizedCurrency: r.localizedCurrency,
                                        price: r.price,
                                        tax: r.tax,
                                        total: r.total,
                                        taxInclusive: r.taxInclusive,
                                        priceViewable: !0
                                    }), this.setState({
                                        priceLoading: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.setProviderWrapper = function(e) {
                    return function() {
                        return t.setState({
                            provider: e
                        })
                    }
                }, t.renderContinueButton = function() {
                    var e, r = t.state.provider,
                        n = t.props.productID;
                    if (r === U.Amazon) {
                        e = "https://twitch.amazon.com/checkout/summary" + ("?asin=" + n + "&br_id=" + (t.props.sessionUser && t.props.sessionUser.id) + "&lang=" + (Object(B.a)() || "en"))
                    } else r === U.Paypal && (e = "/bits-checkout/summary?asin=" + n);
                    return d.createElement(A.v, {
                        linkTo: e
                    }, Object(p.d)("Continue", "BitsCheckoutSelectPage"))
                }, t
            }
            return s.__extends(t, e), t.prototype.componentDidMount = function() {
                this.getBitsPrice()
            }, t.prototype.render = function() {
                return d.createElement(A._8, {
                    padding: 2
                }, d.createElement(A._8, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement(A.Q, {
                    type: A._49.H3
                }, Object(p.d)("Purchase Bits", "BitsCheckoutSelectPage"))), d.createElement(A._23, {
                    centered: !0
                }, d.createElement(A.Y, {
                    gutterSize: A.Z.Medium
                }, this.state.priceViewable && d.createElement(A.L, {
                    cols: {
                        default: 12,
                        md: 3
                    }
                }, d.createElement(A._8, {
                    margin: {
                        y: 1
                    }
                }, this.renderBitsDescription())), d.createElement(A.L, {
                    cols: {
                        default: 12,
                        md: this.state.priceViewable ? 9 : 12
                    }
                }, d.createElement(A._35, {
                    border: !0,
                    background: A.n.Alt,
                    fullWidth: !0,
                    margin: {
                        y: 1
                    }
                }, this.renderMainContent())))))
            }, t
        }(d.Component);
        var D = Object(a.d)(Object(b.d)("BitsCheckoutSelectPage", {
                autoReportInteractive: !0,
                destination: g.a.BitsCheckoutSelect
            }), Object(h.a)({
                location: O.PageviewLocation.BitsCheckoutSelect
            }), Object(n.b)(function(e) {
                return {
                    sessionUser: Object(i.c)(e)
                }
            }, null))(x),
            G = r("oIkB"),
            F = function(e) {
                return d.createElement(A._8, {
                    textAlign: A._45.Center,
                    padding: {
                        y: 5,
                        x: 1
                    }
                }, d.createElement(A._2, {
                    margin: {
                        y: 2
                    }
                }, d.createElement(A.Q, {
                    type: A._49.H4,
                    bold: !0
                }, Object(p.d)("Oh nooooooes", "BitsPurchaseError"))), d.createElement(A._2, {
                    margin: {
                        y: 2
                    }
                }, d.createElement(A.Q, null, Object(p.d)("Looks like we encountered an error. Please try again.", "BitsPurchaseError"))), d.createElement(A._2, {
                    margin: {
                        y: 2
                    }
                }, d.createElement(A.Q, null, Object(p.d)("If you continue to have issues, try another payment method.", "BitsPurchaseError"))), d.createElement(A._8, {
                    margin: {
                        y: 2
                    }
                }, d.createElement(A.v, {
                    onClick: e.onTryAgainClick
                }, Object(p.d)("Try Again", "BitsPurchaseError"))), d.createElement(A._8, {
                    margin: {
                        y: 1
                    }
                }, d.createElement(T, null)))
            };

        function K() {
            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), window.location.assign("https://www.twitch.tv")
        }
        var H, W = function() {
                return d.createElement(A.v, {
                    size: A.z.Large,
                    onClick: K
                }, Object(p.d)("Back to Twitch", "BackToTwitchButton"))
            },
            z = function(e) {
                return d.createElement(A._8, {
                    fullWidth: !0
                }, d.createElement(A._8, {
                    fullWidth: !0
                }, d.createElement(A.N, {
                    alt: Object(p.d)("Bits Banner", "BitsPurchaseSuccess"),
                    src: "https://static-cdn.jtvnw.net/revenue-payments-assets/images/bits-banner.png"
                })), d.createElement(A._8, {
                    padding: {
                        y: 2,
                        x: 3
                    }
                }, d.createElement(A._2, {
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(A.Q, {
                    type: A._49.H4
                }, Object(p.d)("Purchase Successful!", "BitsPurchaseSuccess"))), d.createElement(A._2, {
                    margin: {
                        y: 1
                    }
                }, d.createElement(A.Q, null, Object(p.d)("Order: {orderID}", {
                    orderID: e.orderID
                }, "BitsPurchaseSuccess"))), d.createElement(A._2, {
                    margin: {
                        y: 1
                    }
                }, d.createElement(A.Q, null, Object(p.d)("Thank you for purchasing Bits! Your payment has been confirmed and your inventory will update momentarily.", "BitsPurchaseSuccess"))), d.createElement(A._8, {
                    margin: {
                        y: 2
                    }
                }, d.createElement(W, null)), d.createElement(A._8, {
                    margin: {
                        y: 1
                    }
                }, d.createElement(T, null))))
            },
            V = r("6hIG"),
            q = r.n(V),
            Q = r("siAa"),
            Y = r.n(Q),
            Z = function(e) {
                return d.createElement(A._35, {
                    background: A.n.Base,
                    padding: {
                        y: 2,
                        x: 3
                    },
                    display: A.R.Flex,
                    justifyContent: A._7.Between,
                    fullWidth: !0
                }, d.createElement(A.N, {
                    alt: Object(p.d)("PayPal", "ChangePaymentService"),
                    src: q.a,
                    srcSet: {
                        "1x": q.a,
                        "2x": Y.a
                    }
                }), d.createElement(A._8, {
                    display: A.R.Flex,
                    alignItems: A.c.Center
                }, d.createElement(A.O, {
                    to: "/bits-checkout/select?asin=" + e.productID
                }, Object(p.d)("Change Payment Service", "ChangePaymentService"))))
            },
            J = function(e) {
                return d.createElement(A._8, {
                    display: A.R.Flex,
                    justifyContent: A._7.Between,
                    padding: {
                        x: .5
                    },
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(A.Q, {
                    type: A._49.H5
                }, Object(p.d)("Hi, {name}", {
                    name: e.firstName
                }, "Greeting")), d.createElement(A.O, {
                    onClick: e.openPayPalLogin
                }, Object(p.d)("Not you?", "Greeting")))
            },
            X = function(e) {
                return d.createElement(d.Fragment, null, d.createElement(A._35, {
                    background: A.n.Base,
                    border: !0,
                    padding: {
                        x: 2
                    },
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(A._35, {
                    borderBottom: !0,
                    padding: {
                        y: 2
                    }
                }, d.createElement(A.Q, {
                    color: A.K.Alt2,
                    transform: A._48.Uppercase,
                    type: A._49.H5
                }, Object(p.d)("Payment Method", "PayNow"))), d.createElement(A._8, {
                    padding: {
                        y: 2
                    }
                }, d.createElement(A.O, {
                    onClick: e.openPayPalLogin
                }, Object(p.d)("Visit PayPal to review, edit, or add payment methods", "PayNow")))), d.createElement(A.Y, null, d.createElement(A.L, {
                    cols: {
                        default: 6,
                        md: 3
                    }
                }, d.createElement(A.v, {
                    state: e.purchasing ? A.A.Loading : A.A.Default,
                    disabled: e.purchasing,
                    fullWidth: !0,
                    size: A.z.Large,
                    onClick: e.purchaseBits
                }, Object(p.d)("Pay Now", "PayNow")))), d.createElement(A._2, {
                    margin: {
                        top: 2
                    }
                }, d.createElement(A.Q, null, Object(p.d)("By clicking Pay Now, you agree to the <x:use>Twitch Bits Acceptable Use Policy</x:use>, <x:tos>Terms of Sale</x:tos>, and <x:privacy>Privacy Policy</x:privacy> and that we may start to deliver this order. You cannot cancel your order once delivery has started.", {
                    "x:use": function(e) {
                        return d.createElement(A.O, {
                            key: "use-policy",
                            to: "/p/legal/bits-acceptable-use/"
                        }, e)
                    },
                    "x:tos": function(e) {
                        return d.createElement(A.O, {
                            key: "terms-of-sale",
                            to: "/p/legal/terms-of-sale/"
                        }, e)
                    },
                    "x:privacy": function(e) {
                        return d.createElement(A.O, {
                            key: "privacy-of-sale",
                            to: "/p/legal/privacy-policy/"
                        }, e)
                    }
                }, "PayNow"))), d.createElement(A._8, {
                    margin: {
                        top: 2
                    }
                }, d.createElement(T, null)))
            };
        r("KwMB");
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.Error = 1] = "Error"
        }(H || (H = {}));
        var $ = function(e) {
                return d.createElement(A._35, {
                    fullWidth: !0,
                    color: A.K.Overlay,
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        y: 2
                    },
                    textAlign: A._45.Center,
                    className: e.type === H.Success ? "purchase-feedback-banner__success" : "purchase-feedback-banner__error"
                }, d.createElement(A.Q, {
                    type: A._49.H4
                }, e.type === H.Success ? Object(p.d)("Purchase Successful!", "PurchaseFeedbackBanner") : Object(p.d)("Purchase Failed", "PurchaseFeedbackBanner")))
            },
            ee = r("yLtb"),
            te = r("6BiW"),
            re = /^\d{5}$/,
            ne = /^[A-Z]\d[A-Z] \d[A-Z]\d$/,
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        countryCode: t.props.defaultCountryCode || "",
                        postalCode: t.props.defaultPostalCode || "",
                        settingResidence: !1,
                        error: !1
                    }, t.countrySelections = ee.a.map(function(e) {
                        return d.createElement("option", {
                            value: e,
                            key: "countryCode-" + e
                        }, Object(ee.b)(e))
                    }), t.handleCountryChange = function(e) {
                        var r = e.target.value;
                        t.setState({
                            countryCode: r,
                            postalCode: ""
                        })
                    }, t.handlePostalCodeChange = function(e) {
                        var r = e.target.value;
                        t.setState({
                            postalCode: r
                        })
                    }, t.setUserResidence = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, r, n, a;
                            return s.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.setState({
                                            settingResidence: !0,
                                            error: !1
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), e = Object(G.a)({
                                            userID: this.props.userID,
                                            countryCode: this.state.countryCode,
                                            zipCode: this.state.postalCode
                                        }), [4, this.props.setUserResidence(e)];
                                    case 2:
                                        return (t = c.sent().data).setUserResidence && t.setUserResidence.user && t.setUserResidence.user.residence ? (r = t.setUserResidence.user.residence, n = r.countryCode, a = r.postalCode, this.props.onSetResidenceSuccess(n, a)) : this.setState({
                                            settingResidence: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 3:
                                        return c.sent(), this.setState({
                                            settingResidence: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(A._35, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        }
                    }, d.createElement(A._8, {
                        display: A.R.InlineBlock,
                        margin: {
                            y: 2,
                            right: 2
                        }
                    }, d.createElement(A.W, {
                        label: Object(p.d)("Select Country of Residence", "SelectResidence"),
                        orientation: A.X.Vertical
                    }, d.createElement(A._30, {
                        defaultValue: this.state.countryCode,
                        onChange: this.handleCountryChange
                    }, d.createElement("option", {
                        value: "",
                        disabled: !0
                    }), this.countrySelections))), this.postalCodeRequired && d.createElement(A._8, {
                        display: A.R.InlineBlock,
                        margin: {
                            y: 2
                        }
                    }, d.createElement(A.W, {
                        label: Object(p.d)("Zip Code/Postal Code", "SelectResidence"),
                        orientation: A.X.Vertical
                    }, d.createElement(A._4, {
                        type: A._5.Text,
                        value: this.state.postalCode,
                        onChange: this.handlePostalCodeChange,
                        maxLength: "US" === this.state.countryCode ? 5 : 7
                    }))), d.createElement(A._8, {
                        margin: {
                            top: 2,
                            bottom: 5
                        },
                        padding: {
                            bottom: 5
                        }
                    }, this.state.error && d.createElement(A._8, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(A.Q, {
                        color: A.K.Error
                    }, Object(p.d)("There was an error processing your information. Please try again.", "SelectResidence"))), d.createElement(A.v, {
                        state: this.state.settingResidence ? A.A.Loading : A.A.Default,
                        disabled: !this.residenceValid || this.state.settingResidence,
                        onClick: this.setUserResidence
                    }, Object(p.d)("Proceed", "SelectResidence"))), d.createElement(T, null))
                }, Object.defineProperty(t.prototype, "postalCodeRequired", {
                    get: function() {
                        return "US" === this.state.countryCode || "CA" === this.state.countryCode
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "residenceValid", {
                    get: function() {
                        return "US" === this.state.countryCode ? re.test(this.state.postalCode) : "CA" === this.state.countryCode ? ne.test(this.state.postalCode) : !!this.state.countryCode
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(d.Component),
            ce = Object(l.compose)(Object(b.d)("SelectResidence", {
                autoReportInteractive: !0
            }), Object(f.a)(te, {
                name: "setUserResidence"
            }))(ae),
            oe = function() {
                return d.createElement(A._8, {
                    padding: 3,
                    textAlign: A._45.Center
                }, d.createElement(A._2, {
                    margin: {
                        y: 2
                    }
                }, d.createElement(A.Q, {
                    type: A._49.H4
                }, Object(p.d)("Sorry, PayPal is not supported in your region, but we're working on rolling it out to more countries soon. Stay tuned!", "UnsupportedCountryError"))), d.createElement(A._8, {
                    margin: {
                        y: 3
                    }
                }, d.createElement(W, null)), d.createElement(A._8, {
                    margin: {
                        y: 1
                    }
                }, d.createElement(T, null)))
            },
            ie = r("1WAG"),
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        openingPayPalLogin: !1,
                        creatingBillingAgreement: !1,
                        fetchingPrice: !1,
                        localizedCurrency: null,
                        price: null,
                        tax: null,
                        total: null,
                        taxInclusive: null,
                        priceRequiresResidence: !1,
                        residenceAlreadyUpdated: !1,
                        unsupportedCountry: !1,
                        generalError: !1,
                        purchasing: !1,
                        purchaseError: !1,
                        purchaseSuccess: !1,
                        orderID: ""
                    }, t.token = u.parse(t.props.location.search).token, t.queryVariables = {
                        cancelURL: window.location.origin + "/bits-checkout/select?asin=" + t.props.productID,
                        returnURL: window.location.origin + "/bits-checkout/summary?asin=" + t.props.productID
                    }, t.renderHeader = function() {
                        return t.state.purchaseSuccess ? d.createElement($, {
                            type: H.Success
                        }) : t.state.purchaseError ? d.createElement($, {
                            type: H.Error
                        }) : d.createElement(A._8, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(A.Q, {
                            type: A._49.H3
                        }, Object(p.d)("Purchase Bits", "BitsCheckoutSummaryPage")))
                    }, t.renderBitsDescription = function() {
                        return t.state.openingPayPalLogin || null === t.props.bitsAmount || null === t.state.localizedCurrency || null === t.state.price || null === t.state.tax || null === t.state.total || null === t.state.taxInclusive ? d.createElement(w, null) : d.createElement(I, {
                            bitsAmount: t.props.bitsAmount,
                            localizedCurrency: t.state.localizedCurrency,
                            price: t.state.price,
                            tax: t.state.tax,
                            total: t.state.total,
                            taxInclusive: t.state.taxInclusive
                        })
                    }, t.renderMainContent = function() {
                        var e = t.props.data.currentUser;
                        return t.state.fetchingPrice || t.state.creatingBillingAgreement || t.state.openingPayPalLogin || t.props.data.loading ? d.createElement(d.Fragment, null, d.createElement(Z, {
                            productID: t.props.productID
                        }), d.createElement(A._35, {
                            borderTop: !0,
                            padding: 3
                        }, d.createElement(A._14, {
                            lineCount: 15
                        }))) : t.state.generalError || t.props.data.error ? d.createElement(d.Fragment, null, d.createElement(Z, {
                            productID: t.props.productID
                        }), d.createElement(A._35, {
                            borderTop: !0,
                            padding: {
                                y: 5
                            }
                        }, d.createElement(y.a, null))) : t.state.purchaseError ? d.createElement(F, {
                            onTryAgainClick: t.onTryAgainClick
                        }) : t.state.purchaseSuccess ? d.createElement(z, {
                            orderID: t.state.orderID
                        }) : e && e.id && e.payPalBillingAgreement ? d.createElement(d.Fragment, null, d.createElement(Z, {
                            productID: t.props.productID
                        }), d.createElement(A._35, {
                            borderTop: !0,
                            padding: 3
                        }, d.createElement(J, {
                            firstName: e.payPalBillingAgreement.firstName,
                            openPayPalLogin: t.openPayPalLogin
                        }), d.createElement(X, {
                            purchasing: t.state.purchasing,
                            purchaseBits: t.purchaseBits,
                            openPayPalLogin: t.openPayPalLogin
                        }))) : void 0
                    }, t.onTryAgainClick = function() {
                        t.setState({
                            purchaseError: !1
                        })
                    }, t.getBitsPrice = function(e) {
                        return void 0 === e && (e = {
                            networkOnly: !1
                        }), s.__awaiter(t, void 0, void 0, function() {
                            var t, r, n, a;
                            return s.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return (t = this.props.sessionUser) && t.id ? (this.setState({
                                            fetchingPrice: !0
                                        }), [4, M.getBitsPrice(t.id, this.props.productID, e)]) : [2];
                                    case 1:
                                        if (r = c.sent(), n = r.bitsPrice, a = r.error, this.props.latencyTracking.reportInteractive(), a || !n) switch (a) {
                                            case N.NO_BILLING_AGREEMENT:
                                                break;
                                            case N.NEED_RESIDENCE:
                                                this.setState({
                                                    priceRequiresResidence: !0
                                                });
                                                break;
                                            case N.UNSUPPORTED_COUNTRY:
                                                this.setState({
                                                    unsupportedCountry: !0
                                                });
                                                break;
                                            default:
                                                this.setState({
                                                    generalError: !0
                                                })
                                        } else this.setState({
                                            localizedCurrency: n.localizedCurrency,
                                            price: n.price,
                                            tax: n.tax,
                                            total: n.total,
                                            taxInclusive: n.taxInclusive,
                                            priceRequiresResidence: !1,
                                            unsupportedCountry: !1
                                        });
                                        return this.setState({
                                            fetchingPrice: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.onSetResidenceSuccess = function(e, r) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return s.__generator(this, function(n) {
                                return this.setState({
                                    residenceAlreadyUpdated: !0
                                }), t = function(t) {
                                    return t.currentUser && (t.currentUser.residence = {
                                        countryCode: e,
                                        postalCode: r,
                                        __typename: "UserResidence"
                                    }), t
                                }, Object(G.e)(ie, s.__assign({}, this.queryVariables), t), this.getBitsPrice({
                                    networkOnly: !0
                                }), [2]
                            })
                        })
                    }, t.openPayPalLogin = function() {
                        var e = t.props.data.currentUser;
                        e && (t.setState({
                            openingPayPalLogin: !0
                        }), window.location.assign(e.payPalBillingAgreementURL))
                    }, t.createBillingAgreement = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, r, n, a;
                            return s.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return (e = this.props.sessionUser) && e.id && this.token ? (this.setState({
                                            creatingBillingAgreement: !0
                                        }), [4, M.setBillingAgreement(e.id, this.token)]) : [2];
                                    case 1:
                                        return t = c.sent(), r = t.billingAgreement, n = t.error, !r || n ? this.setState({
                                            generalError: !0
                                        }) : r && (a = function(e) {
                                            return e.currentUser && (e.currentUser.payPalBillingAgreement = {
                                                __typename: "PayPalBillingAgreement",
                                                id: r.billingAgreementID,
                                                countryCode: r.countryCode,
                                                firstName: r.firstName
                                            }), e
                                        }, Object(G.e)(ie, s.__assign({}, this.queryVariables), a)), this.setState({
                                            creatingBillingAgreement: !1
                                        }), this.getBitsPrice({
                                            networkOnly: !0
                                        }), [2]
                                }
                            })
                        })
                    }, t.purchaseBits = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, r, n;
                            return s.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return (e = this.props.data.currentUser) && e.id ? (this.setState({
                                            purchasing: !0
                                        }), [4, M.purchaseBits(e.id, this.props.productID)]) : [2];
                                    case 1:
                                        return t = a.sent(), r = t.orderID, n = t.error, !r || n ? this.setState({
                                            purchaseError: !0
                                        }) : r && this.setState({
                                            orderID: r,
                                            purchaseSuccess: !0
                                        }), this.setState({
                                            purchasing: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.token ? this.createBillingAgreement() : (this.getBitsPrice(), this.props.data.loading || this.props.latencyTracking.reportInteractive())
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.token || this.state.openingPayPalLogin || this.props.data.loading || this.props.data.error || !this.props.data.currentUser || this.props.data.currentUser.payPalBillingAgreement || this.openPayPalLogin()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser;
                    return e && e.id && e.payPalBillingAgreement && this.askForResidence ? d.createElement(A._8, {
                        padding: 2
                    }, d.createElement(A._35, {
                        border: !0,
                        background: A.n.Alt
                    }, d.createElement(Z, {
                        productID: this.props.productID
                    }), d.createElement(A._35, {
                        borderTop: !0,
                        padding: 3
                    }, d.createElement(J, {
                        firstName: e.payPalBillingAgreement.firstName,
                        openPayPalLogin: this.openPayPalLogin
                    }), d.createElement(ce, {
                        userID: e.id,
                        defaultCountryCode: e.residence && e.residence.countryCode,
                        defaultPostalCode: e.residence && e.residence.postalCode,
                        onSetResidenceSuccess: this.onSetResidenceSuccess
                    })))) : this.state.fetchingPrice || this.props.data.loading || !this.state.unsupportedCountry ? d.createElement(A._8, {
                        padding: 2
                    }, this.renderHeader(), d.createElement(A._23, {
                        centered: !0
                    }, d.createElement(A.Y, {
                        gutterSize: A.Z.Medium
                    }, d.createElement(A.L, {
                        cols: {
                            default: 12,
                            md: 3
                        }
                    }, d.createElement(A._8, {
                        margin: {
                            y: 1
                        }
                    }, this.renderBitsDescription())), d.createElement(A.L, {
                        cols: {
                            default: 12,
                            md: 9
                        }
                    }, d.createElement(A._35, {
                        border: !0,
                        background: A.n.Alt,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        }
                    }, this.renderMainContent()))))) : d.createElement(A._8, {
                        padding: 2
                    }, d.createElement(A._35, {
                        border: !0,
                        background: A.n.Alt
                    }, d.createElement(Z, {
                        productID: this.props.productID
                    }), d.createElement(A._35, {
                        borderTop: !0
                    }, d.createElement(oe, null))))
                }, Object.defineProperty(t.prototype, "askForResidence", {
                    get: function() {
                        var e = this.props.data,
                            t = e.loading,
                            r = e.error,
                            n = e.currentUser,
                            a = e.requestInfo,
                            c = this.state,
                            o = c.fetchingPrice,
                            i = c.residenceAlreadyUpdated;
                        return !(t || r || o || i) && (!!(a && n && n.payPalBillingAgreement && a.countryCode !== n.payPalBillingAgreement.countryCode) || !!this.state.priceRequiresResidence)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(d.Component);
        var ue = Object(a.d)(Object(b.d)("BitsCheckoutSummaryPage", {
            destination: g.a.BitsCheckoutSummary
        }), Object(h.a)({
            location: O.PageviewLocation.BitsCheckoutSummary
        }), Object(f.a)(ie, {
            options: function(e) {
                var t = u.parse(e.location.search).asin;
                return {
                    variables: {
                        cancelURL: window.location.origin + "/bits-checkout/select?asin=" + t,
                        returnURL: window.location.origin + "/bits-checkout/summary?asin=" + t
                    }
                }
            }
        }), Object(n.b)(function(e) {
            return {
                sessionUser: Object(i.c)(e)
            }
        }, null))(se);
        r("10JX");
        var de = Object(a.d)(Object(b.d)("BitsCheckoutTopNav", {
                autoReportInteractive: !0
            }), Object(n.b)(function(e) {
                return {
                    userDisplayName: e.session.user && e.session.user.displayName
                }
            }, null))(function(e) {
                return d.createElement(A._35, {
                    className: "bits-checkout-top-nav",
                    display: A.R.Flex,
                    justifyContent: A._7.Center,
                    fullWidth: !0
                }, d.createElement(A._35, {
                    className: "bits-checkout-top-nav__content",
                    display: A.R.Flex,
                    alignItems: A.c.Center,
                    flexWrap: A.U.NoWrap,
                    justifyContent: A._7.Between,
                    fullWidth: !0,
                    fullHeight: !0,
                    padding: 2,
                    borderBottom: !0
                }, d.createElement(A._24, {
                    asset: A._25.LogoTwitch,
                    type: A._26.Brand,
                    width: 94,
                    height: 32
                }), d.createElement(A.Q, {
                    type: A._49.H5
                }, e.userDisplayName)))
            }),
            le = r("476P"),
            me = (r("vqCj"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.productID = u.parse(t.props.location.search).asin, t.renderMainContent = function() {
                        return t.props.isLoggedIn ? t.productID && t.canPurchase && !t.props.data.error ? d.createElement(m.e, null, d.createElement(m.b, {
                            exact: !0,
                            from: "/bits-checkout",
                            to: {
                                pathname: "/bits-checkout/select",
                                search: "?asin=" + t.productID
                            }
                        }), d.createElement(m.c, {
                            path: "/bits-checkout/select",
                            render: t.renderBitsCheckoutSelectPage
                        }), d.createElement(m.c, {
                            path: "/bits-checkout/summary",
                            render: t.renderBitsCheckoutSummaryPage
                        })) : d.createElement(y.a, null) : (t.props.promptLogin(), d.createElement(y.a, {
                            message: Object(p.d)("You must be logged in to view this page", "BitsCheckoutRoot")
                        }, d.createElement(A._8, {
                            margin: {
                                top: 1
                            }
                        }, d.createElement(A.v, {
                            onClick: t.props.promptLogin
                        }, Object(p.d)("Log In", "BitsCheckoutRoot")))))
                    }, t.renderBitsCheckoutSelectPage = function() {
                        return d.createElement(D, {
                            productID: t.productID,
                            bitsAmount: t.bitsAmount
                        })
                    }, t.renderBitsCheckoutSummaryPage = function() {
                        return d.createElement(ue, {
                            productID: t.productID,
                            bitsAmount: t.bitsAmount
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(A._35, {
                        background: A.n.Base,
                        fullWidth: !0,
                        fullHeight: !0,
                        display: A.R.Flex,
                        justifyContent: A._7.Center,
                        overflow: A._11.Auto
                    }, d.createElement(A._8, {
                        className: "bits-checkout-root__routes-container",
                        fullHeight: !0,
                        fullWidth: !0
                    }, d.createElement(de, null), this.renderMainContent()))
                }, Object.defineProperty(t.prototype, "bitsAmount", {
                    get: function() {
                        var e = this,
                            t = this.props.data.currentUser;
                        if (!t || !t.bitsOffers) return null;
                        var r = t.bitsOffers.find(function(t) {
                            return !(!t || t.id !== e.productID)
                        });
                        return r ? r.bits : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "canPurchase", {
                    get: function() {
                        var e = this,
                            t = this.props.data,
                            r = t.currentUser;
                        return !!t.loading || !!(r && r.bitsOffers && r.bitsOffers.find(function(t) {
                            return !(!t || t.id !== e.productID)
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(d.Component)),
            pe = Object(l.compose)(Object(b.d)("BitsCheckoutRoot", {
                autoReportInteractive: !0
            }), Object(f.a)(le))(me);
        var ye = Object(n.b)(function(e) {
            return {
                isLoggedIn: Object(i.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                promptLogin: function() {
                    return Object(o.f)(c.a.BitsCheckoutPage)
                }
            }, e)
        })(pe);
        r.d(t, "BitsCheckoutRoot", function() {
            return ye
        })
    },
    "476P": function(e, t) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BitsCheckoutRoot"
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
                                    value: "bitsOffers"
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
                                            value: "bits"
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
                end: 68
            }
        };
        r.loc.source = {
            body: "query BitsCheckoutRoot {\ncurrentUser {\nid\nbitsOffers {\nid\nbits\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    "4ypz": function(e, t, r) {
        e.exports = r.p + "assets/bits_checkout_amazon_2x-d08738cf23ed7e96be1b17a85929aa0f.png"
    },
    "6BiW": function(e, t) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "SetUserResidenceMutation"
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
                                value: "SetUserResidenceInput"
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
                            value: "setUserResidence"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 154
            }
        };
        r.loc.source = {
            body: "mutation SetUserResidenceMutation($input: SetUserResidenceInput!) {\nsetUserResidence(input: $input) {\nuser {\nid\nresidence {\ncountryCode\npostalCode\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    "6hIG": function(e, t, r) {
        e.exports = r.p + "assets/paypal_1x-a2a2f7d96b4384f9f1d7639977bfdc73.png"
    },
    "7KB5": function(e, t) {},
    "9u8h": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return o
        });
        var n = r("TToO"),
            a = r("6sO2"),
            c = r("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        var a, c, o, i;
                        return n.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return t = this.constructOptions(t, r), a = t.headers ? t.headers["Content-Type"] : void 0, c = this.serialize(t.body, a), o = n.__assign({}, t, {
                                        body: c
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return i = s.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, function() {
                        var a, c;
                        return n.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                case 1:
                                    if ((a = o.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return c = n.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(c)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var t, r, a, c;
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
                                    return a = n.sent(), e.headers && e.headers.get && (c = e.headers.get("Content-Type")) && -1 !== c.indexOf("application/json") && (t.requestError = a), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), n.__awaiter(this, void 0, void 0, function() {
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
                    var r = a.o.store.getState(),
                        n = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(c.c)(r);
                    return o && (n.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (n["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        n[e] && delete n[e]
                    }), n
                }, e.logger = a.o.logger.withCategory("legacy-api"), e
            }()
    },
    FE1O: function(e, t, r) {
        e.exports = r.p + "assets/bits_checkout_amazon_1x-642f385e965902094114a67baf62e17b.png"
    },
    KwMB: function(e, t) {},
    Py5i: function(e, t, r) {
        e.exports = r.p + "assets/bits_checkout_paypal_2x-0cce74ae3180a16e16fa259570ae7d7b.png"
    },
    "j7/Y": function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            a = r("OAwv"),
            c = r("GiK3"),
            o = r("F8kA"),
            i = r("6sO2");

        function s(e) {
            return function(t) {
                var r = function(r) {
                    function o(t) {
                        var a = r.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = n.__assign({}, e.properties));
                                var r = n.__assign({}, a.props);
                                r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index);
                                var c = a.referenceTracking,
                                    o = c.content,
                                    s = c.medium,
                                    u = c.content_index;
                                i.o.tracking.trackPageview(n.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: u,
                                    location: e.location
                                }, t))
                            }
                        }, i.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : i.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return n.__extends(o, r), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                            "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return c.createElement(t, n.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            r = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, r.medium || r.content) {
                            var n = "",
                                c = a.stringify(t);
                            c.length > 0 && (n = "?" + c), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: n
                            })
                        }
                        return r
                    }, o
                }(c.Component);
                return Object(o.f)(r)
            }
        }
        r.d(t, "a", function() {
            return s
        })
    },
    siAa: function(e, t, r) {
        e.exports = r.p + "assets/paypal_2x-bddabc156344e695fa56cf9767f3c155.png"
    },
    vqCj: function(e, t) {},
    yLtb: function(e, t, r) {
        "use strict";
        t.b = function(e) {
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
        }, r.d(t, "a", function() {
            return a
        });
        var n = r("6sO2");
        var a = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
    },
    yR7m: function(e, t) {},
    z3gE: function(e, t, r) {
        e.exports = r.p + "assets/bits_checkout_paypal_1x-4f1874a574476c628e79dcaff2abd2fe.png"
    }
});
//# sourceMappingURL=pages.bits-checkout-a0dafa423f2f9cf02984022051d5b181.js.map