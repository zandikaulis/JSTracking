(window.webpackJsonp = window.webpackJsonp || []).push([
    [50], {
        "0VVg": function(e, t, n) {
            "use strict";
            var r, i, a = n("mrSG"),
                s = n("b6Yk");
            ! function(e) {
                e.FULL_REFUND = "FULL_REFUND", e.NO_REFUND = "NO_REFUND"
            }(r || (r = {})),
            function(e) {
                e.CANCEL_BENEFITS = "CANCEL_BENEFITS", e.DO_NOT_RENEW_BENEFITS = "DO_NOT_RENEW_BENEFITS"
            }(i || (i = {}));
            var o = function() {
                function e() {}
                return e.cancelSubscription = function(e) {
                    return a.__awaiter(this, void 0, Promise, function() {
                        var t, n, o, c, u, l, d;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.userID, n = e.productName, o = e.reason, c = e.originID, u = e.giftOriginID, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 8, , 9]), c && c.startsWith("amzn1.twitch.payments.sub.") ? (l = "/kraken/order/subscriptions/" + c + "/cancel", d = {
                                        user_id: t,
                                        reason: o,
                                        cancellation_directive: r.FULL_REFUND,
                                        benefits_directive: i.CANCEL_BENEFITS
                                    }, u && (d.gift_origin_id = u, d.cancellation_directive = r.NO_REFUND), [4, s.a.putOrThrow(l, {
                                        body: d
                                    }, {
                                        version: 5
                                    })]) : [3, 3];
                                case 2:
                                    return a.sent(), [3, 7];
                                case 3:
                                    return c && c.startsWith("amzn1.twitch.payments.order.") ? (l = "/kraken/order/purchase_orders/" + c + "/cancel", d = {
                                        user_id: t,
                                        reason: o
                                    }, [4, s.a.putOrThrow(l, {
                                        body: d
                                    }, {
                                        version: 5
                                    })]) : [3, 5];
                                case 4:
                                    return a.sent(), [3, 7];
                                case 5:
                                    return l = "/kraken/checkout/users/" + t + "/products/" + n + "/purchase/cancel", d = {
                                        reason: o
                                    }, c && u && (d.purchase_profile_id = c, d.gift_purchase_profile_id = u), [4, s.a.postOrThrow(l, {
                                        body: d
                                    }, {
                                        version: 5
                                    })];
                                case 6:
                                    a.sent(), a.label = 7;
                                case 7:
                                    return [2, {
                                        success: !0
                                    }];
                                case 8:
                                    return a.sent(), [2, {
                                        success: !1
                                    }];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, e.doNotRenewSubscription = function(e) {
                    return a.__awaiter(this, void 0, Promise, function() {
                        var t, n, o, c, u, l;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.userID, n = e.productName, o = e.reason, c = e.originID, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 6, , 7]), c && c.startsWith("amzn1.twitch.payments.sub.") ? (u = "/kraken/order/subscriptions/" + c + "/cancel", l = {
                                        user_id: t,
                                        reason: o,
                                        cancellation_directive: r.NO_REFUND,
                                        benefits_directive: i.DO_NOT_RENEW_BENEFITS
                                    }, [4, s.a.putOrThrow(u, {
                                        body: l
                                    }, {
                                        version: 5
                                    })]) : [3, 3];
                                case 2:
                                    return a.sent(), [3, 5];
                                case 3:
                                    return u = "/kraken/checkout/users/" + t + "/products/" + n + "/purchase/do_not_renew", l = {
                                        reason: o
                                    }, [4, s.a.postOrThrow(u, {
                                        body: l
                                    }, {
                                        version: 5
                                    })];
                                case 4:
                                    a.sent(), a.label = 5;
                                case 5:
                                    return [2, {
                                        success: !0
                                    }];
                                case 6:
                                    return a.sent(), [2, {
                                        success: !1
                                    }];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.cancelPaidUpgrade = function(e) {
                    return a.__awaiter(this, void 0, Promise, function() {
                        return a.__generator(this, function(t) {
                            return [2, this.cancelSubscription(a.__assign({}, e, {
                                reason: "cancel paid upgrade"
                            }))]
                        })
                    })
                }, e
            }();
            n.d(t, !1, function() {
                return r
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return "amzn1.twitch.payments.sub."
            }), n.d(t, !1, function() {
                return "amzn1.twitch.payments.order."
            }), n.d(t, "a", function() {
                return o
            })
        },
        "1P3F": function(e, t, n) {},
        "7SjK": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("TSYQ"),
                s = n("/7QA"),
                o = n("GnwI"),
                c = n("Ue10"),
                u = (n("GOKC"), i.createElement(c.Fb, {
                    alignItems: c.f.Center,
                    background: c.r.Overlay,
                    borderRadius: c.x.Small,
                    className: "emote-button__lock",
                    color: c.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: c.X.InlineFlex,
                    justifyContent: c.Xa.Center,
                    position: c.kb.Absolute,
                    zIndex: c.jc.Above
                }, i.createElement(c.tb, {
                    asset: c.ub.Lock,
                    height: 10,
                    width: 10
                }))),
                l = function(e) {
                    var t = a("emote-button__link", {
                            "emote-button__link--locked": !e.onClick
                        }),
                        n = e.emote,
                        r = n.displayName,
                        l = n.srcSet;
                    if (!l) return null;
                    var d = i.createElement("img", {
                        className: "emote-picker__image",
                        srcSet: l,
                        alt: r
                    });
                    if (e.isCriticalImage) {
                        for (var p = l.split(" ")[0], m = {}, b = 0, h = l.split(","); b < h.length; b++) {
                            var f = h[b].trim().split(" "),
                                g = f[1],
                                v = f[0];
                            m[g] = v
                        }
                        d = i.createElement(o.a, {
                            className: "emote-picker__emote-image",
                            src: p,
                            srcSet: m,
                            alt: r || ""
                        })
                    }
                    return i.createElement("div", {
                        className: "emote-button"
                    }, i.createElement(c.Zb, {
                        label: r || Object(s.d)("Emote", "EmoteButton"),
                        direction: c.bc.Bottom
                    }, i.createElement(c.Qa, {
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Xa.Center
                    }, i.createElement("button", {
                        "data-test-selector": "emote-button-clickable",
                        className: t,
                        "aria-label": r,
                        name: r,
                        onClick: e.onClick ? e.onClick.bind(null, e.emote) : void 0,
                        "data-a-target": r
                    }, i.createElement("figure", null, e.locked ? u : null, d)))))
                },
                d = (n("VrOd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickEmote = function(e) {
                            t.props.onClickEmote && t.props.onClickEmote(e, t.props.context)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.emotes.map(function(t, n) {
                                return i.createElement(c.Ya, {
                                    key: "emote-button-padder-" + t.id + "--" + t.setID,
                                    padding: {
                                        left: e.props.spaced ? .5 : 0
                                    }
                                }, i.createElement(l, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === n,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                }))
                            });
                        return i.createElement(c.Ya, {
                            display: c.X.Flex,
                            flexWrap: c.Ba.Wrap,
                            justifyContent: c.Xa.Center
                        }, t)
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return d
            })
        },
        "9ELW": function(e, t, n) {},
        "9fjZ": function(e, t, n) {
            var r = {
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
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery TicketDescription($productName: String! $taxCountry: String) {\nproduct: subscriptionProduct(productName: $productName) {\nid\ndisplayName\npriceInfo(taxCountry: $taxCountry) {\ncurrency\nexponent\nid\nisTaxInclusive\nprice\ntax\ntotal\n}\ninterval {\nunit\n}\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\ntier\nowner {\nid\ndisplayName\nbannerImageURL\nprofileImageURL(width: 300)\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\ntier\nemotes {\nid\ntoken\n}\n}\n}\ngiftPromotion {\nnewPrice\n}\nself {\npromotion {\nnewPrice\n}\npaidUpgradePromotion {\nnewPrice\n}\nbenefit {\nid\ngift {\nisGift\n}\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = r
        },
        C8FX: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                s = n("Ue10");
            n("uUdG");
            var o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.price ? i.createElement(s.Ya, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column
                    }, this.props.productDiscountPrice && i.createElement(s.W, {
                        bold: !0,
                        className: "ticket-price__promotion",
                        fontSize: s.Ca.Size4
                    }, Object(a.d)("{discountedPrice} / First Month*", {
                        discountedPrice: this.props.productDiscountPrice
                    }, "TicketPrice")), i.createElement(s.Ya, {
                        display: s.X.Flex,
                        justifyContent: s.Xa.Center,
                        flexWrap: s.Ba.Wrap
                    }, i.createElement(s.W, {
                        type: s.Wb.Span,
                        fontSize: s.Ca.Size4,
                        decoration: this.props.productDiscountPrice ? s.Ub.Strikethrough : void 0,
                        "data-a-target": "js-test-ticket-price-text"
                    }, Object(a.d)("{price} / {interval}", {
                        price: i.createElement(s.W, {
                            type: s.Wb.Span,
                            bold: !0
                        }, this.props.price),
                        interval: function(e) {
                            switch (e) {
                                case "WEEK":
                                    return Object(a.d)("Week", "TicketPrice");
                                case "MONTH":
                                    return Object(a.d)("Month", "TicketPrice");
                                case "YEAR":
                                    return Object(a.d)("Year", "TicketPrice");
                                case "ONE_TIME":
                                    return Object(a.d)("One-Time Purchase", "TicketPrice");
                                default:
                                    return ""
                            }
                        }(this.props.interval)
                    }, "TicketDescription")), this.formattedTaxInclusivity && i.createElement(s.Qa, {
                        margin: {
                            left: .5
                        }
                    }, i.createElement(s.W, {
                        fontSize: s.Ca.Size4,
                        type: s.Wb.Span,
                        decoration: this.props.productDiscountPrice ? s.Ub.Strikethrough : void 0
                    }, Object(a.d)("(Includes VAT)", "TicketDescription"))))) : i.createElement(s.ab, {
                        fillContent: !0
                    })
                }, Object.defineProperty(t.prototype, "formattedTaxInclusivity", {
                    get: function() {
                        return this.props.showEuSubs && this.props.productPriceTaxInclusive ? Object(a.d)("(Includes VAT)", "TicketPrice") : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.PureComponent);
            n.d(t, "a", function() {
                return o
            })
        },
        E78O: function(e, t, n) {},
        GOKC: function(e, t, n) {},
        IKE4: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "fragment badge on Badge {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        KYZ7: function(e, t, n) {
            e.exports = n.p + "assets/turbo-logo-a785836787e34974eea8.svg"
        },
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return u
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "f", function() {
                return b
            }), n.d(t, "d", function() {
                return h
            });
            var r = n("mrSG"),
                i = n("lZdE"),
                a = n("cpJf"),
                s = {
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
                o = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function u(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = s[e.token] || e.token,
                            i = o.reduce(function(t, n) {
                                var r = t;
                                return r && (r = r.concat(", ")), r.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(r.__assign({
                            displayName: n,
                            srcSet: i
                        }, e))
                    }, i = 0, a = e; i < a.length; i++) {
                    n(a[i])
                }
                return t
            }

            function l(e, t) {
                var n = u(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return r.__assign({}, e, {
                            setID: t
                        })
                    })
                }(n, t)), n
            }

            function d(e) {
                return e.filter(function(e) {
                    return !!e && !!e.id && !!e.token
                }).sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            }

            function p(e) {
                for (var t = [], n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    if (i && i.id && i.emotes) {
                        for (var a = {
                                id: i.id,
                                emotes: []
                            }, s = 0, o = i.emotes; s < o.length; s++) {
                            var c = o[s];
                            c && c.id && c.token && a.emotes.push(c)
                        }
                        t.push(a)
                    }
                }
                return t
            }

            function m(e) {
                for (var t = [], n = [], r = 0, i = e; r < i.length; r++) {
                    var a = i[r];
                    if (a && a.id && a.emotes) {
                        var s = {
                            id: a.id,
                            emotes: l(d(a.emotes), a.id)
                        };
                        a.owner && (s.owner = a.owner), c.has(parseInt(a.id, 10)) ? t.push(s) : n.push(s)
                    }
                }
                return n.concat(t)
            }
            var b = function(e, t, n) {
                    var r = n || a.d,
                        s = [],
                        o = [],
                        c = [],
                        u = new RegExp("^" + Object(i.a)(t), "i");
                    return e.forEach(function(e) {
                        r[e.token] ? c.push(e) : e.token.match(u) ? s.push(e) : o.push(e)
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return r[t.token].count - r[e.token].count
                    }), c.concat(s).concat(o)
                },
                h = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        QV0B: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("Ue10"),
                s = function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.collapsable ? i.createElement(i.Fragment, null, i.createElement(a.Ya, {
                            display: this.state.collapsed ? a.X.Hide : a.X.Block,
                            breakpointLarge: {
                                display: a.X.Block
                            }
                        }, i.createElement(a.H, null, this.props.children)), i.createElement(a.Ya, {
                            display: a.X.Block,
                            breakpointLarge: {
                                display: a.X.Hide
                            }
                        }, i.createElement(a.Va, {
                            onClick: this.toggleCollapsed,
                            hover: !1,
                            type: a.Wa.Alpha
                        }, i.createElement(a.Ya, {
                            fullWidth: !0,
                            textAlign: a.Sb.Center,
                            alignItems: a.f.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(a.W, {
                            type: a.Wb.Span,
                            color: a.O.Link
                        }, this.state.collapsed ? this.props.showButtonLabel : this.props.hideButtonLabel))))) : i.createElement(a.H, null, this.props.children)
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        QxOQ: function(e, t, n) {},
        "R9u/": function(e, t, n) {},
        "V+q8": function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("kRBY"),
                a = n("mrSG"),
                s = n("q1tI"),
                o = n("oJmH"),
                c = n("/7QA"),
                u = n("ZS2+"),
                l = n("yR8l"),
                d = n("tIid"),
                p = n("DMoW"),
                m = n("ZEQw"),
                b = n("uIkQ"),
                h = n("7SjK"),
                f = n("OpME"),
                g = n("Ue10"),
                v = function(e) {
                    return s.createElement(g.Ya, {
                        padding: 2
                    }, s.createElement(g.Qa, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(g.W, {
                        bold: !0
                    }, Object(c.d)("Subscription benefits", "ChannelSubscriptionBenefits"))), s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Directly support the broadcaster", "ChannelSubscriptionBenefits"))), e.hasAdFree && s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Ad-free (with limited exceptions)", "ChannelSubscriptionBenefits"))), s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Chat during subscriber-only mode", "ChannelSubscriptionBenefits"))), e.hasFastChat && s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Not affected by chat slow mode", "ChannelSubscriptionBenefits"))), e.hasSubonlyVideoArchive && s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Access to VODs", "ChannelSubscriptionBenefits"))), e.badges.length > 0 && s.createElement(s.Fragment, null, s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Subscriber Badges:", "ChannelSubscriptionBenefits"))), s.createElement(g.Ya, {
                        margin: {
                            bottom: 1
                        },
                        display: g.X.Flex,
                        flexWrap: g.Ba.Wrap,
                        justifyContent: g.Xa.Center
                    }, e.badges.map(function(e) {
                        return s.createElement(g.Ya, {
                            key: e.setID + "/" + e.version,
                            margin: .5
                        }, s.createElement(b.a, {
                            badge: e
                        }))
                    }))), e.emotes.length > 0 && s.createElement(s.Fragment, null, s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("{numEmotes, plural, one {# Subscriber Emote:} other {# Subscriber Emotes:}}", {
                        numEmotes: e.emotes.length
                    }, "ChannelSubscriptionBenefits"))), s.createElement(h.a, {
                        emotes: Object(f.b)(e.emotes)
                    })))
                },
                k = n("C8FX"),
                y = (n("QxOQ"), function(e) {
                    return s.createElement(s.Fragment, null, s.createElement("div", {
                        className: "channel-subscription-header__banner-image",
                        style: {
                            backgroundImage: "url(" + e.bannerImageURL
                        }
                    }, s.createElement(g.Fb, {
                        background: g.r.Overlay,
                        position: g.kb.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }), s.createElement(g.Ya, {
                        className: "channel-subscription-header__banner-background",
                        textAlign: g.Sb.Center
                    }, s.createElement(g.Ya, {
                        padding: {
                            top: 3
                        },
                        display: g.X.Flex,
                        justifyContent: g.Xa.Center
                    }, s.createElement(g.q, {
                        alt: e.ownerDisplayName || "",
                        size: 96,
                        src: e.profileImageURL
                    })))), s.createElement(g.Ya, {
                        textAlign: g.Sb.Center,
                        padding: {
                            bottom: .5
                        }
                    }, s.createElement(g.Qa, {
                        margin: {
                            top: 3
                        }
                    }, s.createElement(g.W, {
                        type: g.Wb.H4,
                        bold: !0
                    }, e.ownerDisplayName)), s.createElement(g.Qa, {
                        margin: .5
                    }, s.createElement(g.W, {
                        type: g.Wb.H5
                    }, e.productDisplayName)), s.createElement(k.a, {
                        price: e.productPrice,
                        interval: e.productPriceInterval,
                        productDiscountPrice: e.productDiscountPrice || void 0,
                        productPriceTaxInclusive: e.productPriceTaxInclusive,
                        showEuSubs: e.showEuSubs
                    })))
                }),
                E = n("ZDlU"),
                w = n("QV0B"),
                S = n("mb7O"),
                N = (n("ZsMu"), function() {
                    return s.createElement(S.a, null, s.createElement(g.Ya, {
                        className: "error-ticket-description__header",
                        padding: 2
                    }, s.createElement(g.Fb, {
                        fullHeight: !0,
                        background: g.r.Alt2
                    }, s.createElement(E.a, null))), s.createElement(w.a, {
                        collapsable: !0
                    }, s.createElement(g.Fb, {
                        className: "error-ticket-description__body",
                        padding: 2,
                        borderTop: !0
                    }, s.createElement(g.Fb, {
                        fullHeight: !0,
                        background: g.r.Alt2
                    }, s.createElement(E.a, null)))))
                }),
                O = (n("1P3F"), function() {
                    return s.createElement(S.a, null, s.createElement(g.Ya, {
                        className: "placeholder-ticket-description__header",
                        padding: 2
                    }, s.createElement(g.Fb, {
                        fullHeight: !0,
                        background: g.r.Alt2
                    })), s.createElement(w.a, {
                        collapsable: !0
                    }, s.createElement(g.Fb, {
                        padding: 2,
                        borderTop: !0
                    }, s.createElement(g.jb, {
                        lineCount: 30
                    }))))
                }),
                _ = n("KYZ7"),
                T = n.n(_),
                I = (n("R9u/"), function(e) {
                    return s.createElement(S.a, null, s.createElement(g.Fb, {
                        background: g.r.Base
                    }, s.createElement(g.Ya, {
                        className: "turbo-ticket-description__banner-image",
                        padding: 3,
                        display: g.X.Flex,
                        alignItems: g.f.Center,
                        justifyContent: g.Xa.Center
                    }, s.createElement(g.S, {
                        className: "turbo-ticket-description__banner-logo",
                        src: T.a,
                        alt: Object(c.d)("Twitch Turbo Logo", "TurboTicketDescription")
                    })), s.createElement(g.Fb, {
                        borderBottom: !0,
                        textAlign: g.Sb.Center,
                        padding: 2
                    }, s.createElement(k.a, {
                        price: e.productPrice,
                        interval: e.productPriceInterval,
                        productPriceTaxInclusive: e.productPriceTaxInclusive,
                        showEuSubs: e.showEuSubs
                    })), s.createElement(w.a, {
                        collapsable: !0,
                        showButtonLabel: Object(c.d)("Show Turbo Benefits", "TurboTicketDescription"),
                        hideButtonLabel: Object(c.d)("Hide Turbo Benefits", "TurboTicketDescription")
                    }, s.createElement(g.Ya, {
                        padding: 2
                    }, s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, {
                        bold: !0
                    }, Object(c.d)("Subscription Benefits", "TurboTicketDescription"))), s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Ad-Free Viewing (with limited exceptions)", "TurboTicketDescription"))), s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Chat Badge", "TurboTicketDescription"))), s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Expanded Emote Set", "TurboTicketDescription"))), s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Custom Chat Username Colors", "TurboTicketDescription"))), s.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(g.W, null, Object(c.d)("Extended Broadcast Storage", "TurboTicketDescription")))))))
                }),
                C = n("GnwI"),
                F = n("9fjZ"),
                P = u.a.wrap(function() {
                    return n.e(209).then(n.bind(null, "skV9"))
                }, "CampaignsTicketDescription"),
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTurboProduct = "turbo" === t.props.productName, t.tierToDisplayMap = {
                            1000: Object(c.d)("Tier 1 Channel Subscription", "TicketDescription"),
                            2000: Object(c.d)("Tier 2 Channel Subscription", "TicketDescription"),
                            3000: Object(c.d)("Tier 3 Channel Subscription", "TicketDescription")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.product,
                            n = e.loading,
                            r = e.error;
                        return !t && n ? s.createElement(O, null) : !t || r ? s.createElement(N, null) : this.isTurboProduct ? s.createElement(I, {
                            productPrice: this.price,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }) : this.isEsportsProduct ? s.createElement(P, {
                            ownerID: t.owner && t.owner.id,
                            badges: this.badges,
                            emotes: this.emotes,
                            productPrice: this.price,
                            productDiscountPrice: this.productDiscountPrice,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }) : s.createElement(S.a, null, s.createElement(g.Fb, {
                            background: g.r.Base
                        }, s.createElement(y, {
                            bannerImageURL: t.owner && t.owner.bannerImageURL,
                            profileImageURL: t.owner && t.owner.profileImageURL,
                            ownerDisplayName: t.owner && t.owner.displayName,
                            productDisplayName: this.productDisplayName,
                            productPrice: this.price,
                            productDiscountPrice: this.productDiscountPrice,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }), s.createElement(w.a, {
                            collapsable: !0,
                            showButtonLabel: Object(c.d)("Show Subscription Benefits", "TicketDescription"),
                            hideButtonLabel: Object(c.d)("Hide Subscription Benefits", "TicketDescription")
                        }, s.createElement(v, {
                            hasAdFree: t.hasAdFree,
                            hasFastChat: t.hasFastChat,
                            hasSubonlyVideoArchive: t.hasSubonlyVideoArchive,
                            badges: this.badges,
                            emotes: this.emotes
                        }))))
                    }, Object.defineProperty(t.prototype, "isEsportsProduct", {
                        get: function() {
                            var e = this.props.data.product;
                            return !!(e && e.owner && e.owner.id && Object(d.a)(e.owner.id, this.props.sessionUser))
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
                                        var n = {
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
                                        e.push(n)
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
                            return t && t.owner && t.owner.subscriptionProducts && t.owner.subscriptionProducts.forEach(function(n) {
                                n && n.emotes && n.tier <= t.tier && n.emotes.forEach(function(t) {
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
                }(s.Component),
                D = Object(o.compose)(Object(C.b)("TicketDescription"), Object(l.a)(F, {
                    options: function(e) {
                        return {
                            variables: {
                                productName: e.productName,
                                taxCountry: e.priceCountry
                            }
                        }
                    }
                }))(j);
            var U = Object(r.connect)(function(e) {
                return {
                    sessionUser: Object(i.e)(e)
                }
            })(D);
            n.d(t, "a", function() {
                return U
            })
        },
        VrOd: function(e, t, n) {},
        ZEQw: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            });
            var r = "subscribe_to_channel",
                i = "turbo",
                a = "visit_url",
                s = "none",
                o = "broadcaster"
        },
        ZsMu: function(e, t, n) {},
        b5C3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("q1tI"),
                i = n("vHGB"),
                a = function(e) {
                    var t = e.badgesToRender,
                        n = e.badgeSets;
                    if (!t) return null;
                    var a = [];
                    ! function(e) {
                        return Array.isArray(e)
                    }(t) ? function(e) {
                        return !Array.isArray(e)
                    }(t) && (a = Object.keys(t).map(function(e) {
                        var a = t[e],
                            s = n.getBadge(e, a);
                        return null === s ? null : r.createElement(i.a, {
                            key: s.setID + "/" + s.version,
                            badge: s
                        })
                    })) : a = t.map(function(e) {
                        var t = n.getBadge(e.setID, e.version);
                        return null === t ? null : r.createElement(i.a, {
                            key: t.setID + "/" + t.version,
                            badge: t
                        })
                    });
                    var s = a.filter(function(e) {
                        return null !== e
                    });
                    return r.createElement("span", null, s)
                };
            a.displayName = "BadgeList"
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("kRBY"),
                s = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var i, a, s, o;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), s = r.__assign({}, t, {
                                            body: a
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
                            var i;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((i = a.sent()).requestError) throw i.requestError;
                                        if (i.error) throw new Error("Error while sending legacy-api request: " + i.error.status + " - " + i.error.message);
                                        return [2, r.__assign({}, i, {
                                            body: i.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, i.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, i, a;
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
                                        return i = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = i), [3, 4];
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
                        var n = i.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": i.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var s = Object(a.e)(n);
                        return s && (r.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (r["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = i.p.logger.withCategory("legacy-api"), e
                }()
        },
        bfgy: function(e, t, n) {},
        c0BZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i = n("/MKj"),
                a = n("fvjX"),
                s = n("yR8l"),
                o = n("V+GM"),
                c = n("1/iK"),
                u = n("y5D0"),
                l = n("NvVO"),
                d = n("2xye"),
                p = n("kRBY"),
                m = n("GnwI"),
                b = n("mrSG"),
                h = n("cr+I"),
                f = n("q1tI"),
                g = n("/7QA"),
                v = n("ZDlU"),
                k = n("DMoW"),
                y = n("V+q8"),
                E = n("NAv5"),
                w = n("oJmH"),
                S = n("qyxT"),
                N = n("Ue10"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            otherTextAreaEnabled: !1,
                            otherReason: ""
                        }, t.radioName = "reason-input", t.handleReasonChange = function(e) {
                            t.props.updateReason(e.currentTarget.value), t.setState({
                                otherTextAreaEnabled: !1
                            })
                        }, t.handleOtherReasonRadioChange = function() {
                            t.props.updateReason(""), t.setState({
                                otherReason: "",
                                otherTextAreaEnabled: !0
                            })
                        }, t.handleOtherReasonTextAreaChange = function(e) {
                            var n = e.currentTarget.value;
                            t.setState({
                                otherReason: n
                            }), t.props.updateReason(n)
                        }, t
                    }
                    return b.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return f.createElement(N.Ya, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                x: 1
                            }
                        }, f.createElement(N.Ea, {
                            label: ""
                        }, this.props.reasons.map(function(t, n) {
                            return f.createElement(N.Ya, {
                                key: "reason-" + n,
                                margin: {
                                    y: 2
                                }
                            }, f.createElement(N.qb, {
                                name: e.radioName,
                                onChange: e.handleReasonChange,
                                disabled: e.props.disabled,
                                value: t.value,
                                label: t.translation()
                            }))
                        }), f.createElement(N.Ya, {
                            margin: {
                                y: 2
                            }
                        }, f.createElement(N.qb, {
                            name: this.radioName,
                            label: Object(g.d)("Other", "ReasonInput"),
                            onChange: this.handleOtherReasonRadioChange,
                            disabled: this.props.disabled
                        })), this.state.otherTextAreaEnabled && f.createElement(N.Ya, {
                            margin: {
                                y: 2
                            }
                        }, f.createElement(N.Tb, {
                            onChange: this.handleOtherReasonTextAreaChange,
                            placeholder: Object(g.d)("Additional reasons or thoughts", "ReasonInput"),
                            maxLength: 500
                        }))))
                    }, t
                }(f.Component),
                _ = Object(w.compose)(Object(m.b)("ReasonInput", {
                    autoReportInteractive: !0
                }))(O),
                T = function(e) {
                    var t = f.createElement(f.Fragment, null, f.createElement(N.W, {
                            type: N.Wb.H2,
                            bold: !0
                        }, Object(g.d)("Subscription Canceled", "UnsubscribeConfirmation")), f.createElement(N.Ya, {
                            margin: {
                                top: 2
                            }
                        }, f.createElement(N.W, null, Object(g.d)("Your subscription has been immediately canceled. You will be receiving an email detailing your refund.", "UnsubscribeConfirmation")))),
                        n = f.createElement(f.Fragment, null, f.createElement(N.W, {
                            type: N.Wb.H2,
                            bold: !0
                        }, Object(g.d)("Subscription No Longer Renewing", "UnsubscribeConfirmation")), f.createElement(N.Ya, {
                            margin: {
                                top: 2
                            }
                        }, f.createElement(N.W, null, e.endsAt && Object(g.d)("Your subscription will no longer renew. You will have access to your benefits until {date}.", {
                            date: f.createElement(N.W, {
                                key: "benefit-end-date",
                                type: N.Wb.Span,
                                bold: !0
                            }, Object(g.c)(new Date(e.endsAt), "medium"))
                        }, "UnsubscribeConfirmation"))), f.createElement(N.Ya, {
                            margin: {
                                top: 2
                            }
                        }, f.createElement(N.W, null, e.endsAt && Object(g.d)("If you change your mind and would like to resubscribe, you can do so as of {date}.", {
                            date: f.createElement(N.W, {
                                key: "resubscribe-date",
                                type: N.Wb.Span,
                                bold: !0
                            }, Object(g.c)(Object(E.addDays)(new Date(e.endsAt), 1), "medium"))
                        }, "UnsubscribeConfirmation"))));
                    return f.createElement(f.Fragment, null, e.unsubscribeType === r.Cancel ? t : n, f.createElement(N.Ya, {
                        margin: {
                            top: 2
                        }
                    }, f.createElement(N.W, null, Object(g.d)("We hope you enjoyed the service and will consider resubscribing some day.", "UnsubscribeConfirmation"))), f.createElement(N.Ya, {
                        margin: {
                            top: 2
                        }
                    }, f.createElement(N.W, null, Object(g.d)("- Your friends at Twitch", "UnsubscribeConfirmation"))), f.createElement(N.Ya, {
                        margin: {
                            top: 2
                        }
                    }, f.createElement(N.z, {
                        linkTo: "/subscriptions"
                    }, Object(g.d)("Return to Subscriptions", "UnsubscribeForm"))))
                },
                I = n("0VVg"),
                C = {
                    value: "I only wanted to subscribe for one month",
                    translation: function() {
                        return Object(g.d)("I only wanted to subscribe for one month", "unsubscribe-reasons")
                    }
                },
                F = {
                    value: "Financial reasons",
                    translation: function() {
                        return Object(g.d)("Financial reasons", "unsubscribe-reasons")
                    }
                },
                P = {
                    value: "I prefer to manually renew my subscriptions",
                    translation: function() {
                        return Object(g.d)("I prefer to manually renew my subscriptions", "unsubscribe-reasons")
                    }
                },
                j = {
                    value: "I accidentally subscribed",
                    translation: function() {
                        return Object(g.d)("I accidentally subscribed", "unsubscribe-reasons")
                    }
                },
                D = {
                    value: "I didn't use Turbo as much as I expected",
                    translation: function() {
                        return Object(g.d)("I didn't use Turbo as much as I expected", "unsubscribe-reasons")
                    }
                },
                U = {
                    value: "I still saw advertisements",
                    translation: function() {
                        return Object(g.d)("I still saw advertisements", "unsubscribe-reasons")
                    }
                },
                x = [{
                    value: "I had a bad interaction with the broadcaster",
                    translation: function() {
                        return Object(g.d)("I had a bad interaction with the broadcaster", "unsubscribe-reasons")
                    }
                }, {
                    value: "The broadcaster's schedule changed or they're not streaming as much anymore",
                    translation: function() {
                        return Object(g.d)("The broadcaster's schedule changed or they're not streaming as much anymore", "unsubscribe-reasons")
                    }
                }, {
                    value: "I need to change my payment method",
                    translation: function() {
                        return Object(g.d)("I need to change my payment method", "unsubscribe-reasons")
                    }
                }, F, P, C, {
                    value: "My schedule changed and I can't keep up with the stream anymore",
                    translation: function() {
                        return Object(g.d)("My schedule changed and I can't keep up with the stream anymore", "unsubscribe-reasons")
                    }
                }],
                R = [j, F, {
                    value: "I just wanted to get a shoutout",
                    translation: function() {
                        return Object(g.d)("I just wanted to get a shoutout", "unsubscribe-reasons")
                    }
                }, C, {
                    value: "The channel benefits are not what I expected",
                    translation: function() {
                        return Object(g.d)("The channel benefits are not what I expected", "unsubscribe-reasons")
                    }
                }],
                A = [U, F, P, C, D, {
                    value: "I don't feel like Turbo offers enough value",
                    translation: function() {
                        return Object(g.d)("I don't feel like Turbo offers enough value", "unsubscribe-reasons")
                    }
                }],
                B = [j, U, F, {
                    value: "I only wanted ad-free viewing for one day",
                    translation: function() {
                        return Object(g.d)("I only wanted ad-free viewing for one day", "unsubscribe-reasons")
                    }
                }, D, {
                    value: "Turbo's benefits were not what I expected",
                    translation: function() {
                        return Object(g.d)("Turbo's benefits were not what I expected", "unsubscribe-reasons")
                    }
                }];
            ! function(e) {
                e[e.Cancel = 0] = "Cancel", e[e.DoNotRenew = 1] = "DoNotRenew"
            }(r || (r = {}));
            var W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            reason: "",
                            unsubscribing: !1,
                            showUnsubConfirmation: !1
                        }, t.cancelReasons = "turbo" === t.props.productName ? B : R, t.doNotRenewReasons = "turbo" === t.props.productName ? A : x, t.isCancel = t.props.unsubscribeType === r.Cancel, t.reasons = t.isCancel ? Object(S.a)(t.cancelReasons.slice()) : Object(S.a)(t.doNotRenewReasons.slice()), t.updateReason = function(e) {
                            t.setState({
                                reason: e
                            })
                        }, t.handleUnsubscribeClick = function() {
                            return b.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, s, o;
                                return b.__generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return this.setState({
                                                unsubscribing: !0
                                            }), e = this.props, t = e.currentUserID, n = e.productName, i = e.originID, a = this.state.reason, s = {
                                                userID: t,
                                                productName: n,
                                                originID: i,
                                                reason: a
                                            }, this.props.unsubscribeType !== r.Cancel ? [3, 2] : [4, I.a.cancelSubscription(s)];
                                        case 1:
                                            return o = c.sent(), [3, 4];
                                        case 2:
                                            return [4, I.a.doNotRenewSubscription(s)];
                                        case 3:
                                            o = c.sent(), c.label = 4;
                                        case 4:
                                            return o.success ? this.setState({
                                                showUnsubConfirmation: !0
                                            }) : this.setState({
                                                unsubscribing: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return b.__extends(t, e), t.prototype.render = function() {
                        return this.state.showUnsubConfirmation ? f.createElement(T, {
                            unsubscribeType: this.props.unsubscribeType,
                            endsAt: this.props.endsAt
                        }) : f.createElement(f.Fragment, null, f.createElement(N.W, {
                            type: N.Wb.H2,
                            bold: !0
                        }, this.unsubscribeActionText), f.createElement(N.Ya, {
                            margin: {
                                y: 1
                            }
                        }, f.createElement(N.W, {
                            color: N.O.Alt2
                        }, Object(g.d)("Having issues with your subscription? Visit our <x:link1>Help Center</x:link1> or <x:link2>Contact Us</x:link2>.", {
                            "x:link1": function(e) {
                                return f.createElement(N.U, {
                                    to: "https://help.twitch.tv/",
                                    targetBlank: !0
                                }, e)
                            },
                            "x:link2": function(e) {
                                return f.createElement(N.U, {
                                    to: "https://help.twitch.tv/customer/portal/emails/new",
                                    targetBlank: !0
                                }, e)
                            }
                        }, "UnsubscribeForm"))), f.createElement(N.Ya, {
                            margin: {
                                y: 1
                            }
                        }, f.createElement(N.W, null, this.warningText)), f.createElement(N.Ya, {
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, f.createElement(N.W, {
                            type: N.Wb.H4,
                            bold: !0
                        }, Object(g.d)("Please select your reason for canceling", "UnsubscribeForm"))), f.createElement(_, {
                            reasons: this.reasons,
                            updateReason: this.updateReason,
                            disabled: this.state.unsubscribing
                        }), f.createElement(N.Fb, {
                            padding: {
                                top: 2
                            },
                            borderTop: !0,
                            fullWidth: !0
                        }, f.createElement(N.Ya, {
                            display: N.X.InlineFlex
                        }, f.createElement(N.z, {
                            type: N.F.Alert,
                            state: this.state.unsubscribing ? N.E.Loading : N.E.Default,
                            disabled: this.state.unsubscribing,
                            onClick: this.handleUnsubscribeClick
                        }, this.unsubscribeActionText), f.createElement(N.Ya, {
                            margin: {
                                left: 1
                            }
                        }, f.createElement(N.z, {
                            linkTo: "/subscriptions",
                            disabled: this.state.unsubscribing
                        }, Object(g.d)("Stay Subscribed", "UnsubscribeForm")))), this.props.unsubscribeType === r.DoNotRenew && f.createElement(N.Ya, {
                            margin: {
                                top: 1
                            }
                        }, f.createElement(N.W, {
                            color: N.O.Alt2
                        }, this.canPurchaseAgainText))))
                    }, Object.defineProperty(t.prototype, "unsubscribeActionText", {
                        get: function() {
                            return this.props.unsubscribeType === r.Cancel ? Object(g.d)("Cancel Subscription", "UnsubscribeForm") : this.props.unsubscribeType === r.DoNotRenew ? Object(g.d)("Don't Renew Subscription", "UnsubscribeForm") : void 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "warningText", {
                        get: function() {
                            if (this.props.unsubscribeType === r.Cancel) return Object(g.d)("You may cancel your subscription within 24 hours of purchase and receive a refund. The broadcaster will not receive any revenue from your subscription if you do so.", "UnsubscribeForm");
                            if (this.props.unsubscribeType === r.DoNotRenew) {
                                var e = this.props.endsAt;
                                return e ? Object(g.d)("If your renewal is stopped, your subscription will end on {endsAtDate}, at which time you will no longer have access to subscriber benefits and emotes.", {
                                    endsAtDate: f.createElement(N.W, {
                                        key: "ends-at-date",
                                        bold: !0,
                                        type: N.Wb.Span
                                    }, Object(g.c)(new Date(e), "medium"))
                                }, "UnsubscribeForm") : null
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canPurchaseAgainText", {
                        get: function() {
                            var e = this.props.endsAt;
                            if (!e) return null;
                            var t = Object(E.addDays)(new Date(e), 1);
                            return Object(g.d)("If canceled, you can purchase the subscription again as of {canPurchaseAgainDate}.", {
                                canPurchaseAgainDate: Object(g.c)(t, "medium")
                            }, "UnsubscribeForm")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(f.Component),
                L = Object(w.compose)(Object(m.b)("UnsubscrbeForm", {
                    autoReportInteractive: !0
                }))(W),
                Y = (n("9ELW"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = g.p.logger.withCategory("unsubscribe-page"), t.recurlyTaxEnabled = g.b.get("recurly_tax_enabled", "false"), t.unsubscribeType = "true" === h.parse(t.props.location.search).cancel ? r.Cancel : r.DoNotRenew, t.redirectToLegacyCheckout = function() {
                            var e = t.props.match.params.productName;
                            g.p.history.push("/products/" + e)
                        }, t
                    }
                    return b.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.currentUser) return this.props.promptLogin(), f.createElement(N.Ya, {
                            fullHeight: !0
                        }, f.createElement(v.a, {
                            message: Object(g.d)("You must be logged in to view this page", "UnsubscribePage")
                        }));
                        var e = this.props.data,
                            t = e.subscriptionProduct,
                            n = e.loading,
                            r = e.error,
                            i = !n && !r;
                        if (i && !t) return f.createElement(N.Ya, {
                            fullHeight: !0
                        }, f.createElement(v.a, null));
                        if (i && !this.hasSubscriptionBenefit) return this.redirectToLegacyCheckout(), f.createElement(N.Ya, {
                            fullHeight: !0
                        }, f.createElement(N.ab, {
                            fillContent: !0
                        }));
                        if (i && !this.canUnsubscribe || r) {
                            if (this.isMobileSub) {
                                var a = this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.owner && this.props.data.subscriptionProduct.owner.displayName;
                                return f.createElement(N.Ya, {
                                    fullHeight: !0
                                }, f.createElement(v.a, null, f.createElement(N.W, {
                                    bold: !0
                                }, Object(g.d)("You purchased a subscription to {productDisplayName} on your mobile device.", {
                                    productDisplayName: a || this.props.match.params.productName
                                }, "UnsubscribePage")), f.createElement(N.Ya, {
                                    margin: {
                                        top: 1
                                    }
                                }, f.createElement(N.W, null, Object(g.d)("Please <x:link>cancel your subscription</x:link> from your mobile app.", {
                                    "x:link": function(e) {
                                        return f.createElement(N.U, {
                                            to: "https://help.twitch.tv/customer/portal/articles/2935963-how-to-purchase-and-manage-subscriptions-on-android"
                                        }, e)
                                    }
                                }, "UnsubscribePage")))))
                            }
                            return f.createElement(N.Ya, {
                                fullHeight: !0
                            }, f.createElement(v.a, null))
                        }
                        var s = t && t.self && t.self.benefit && t.self.benefit.endsAt;
                        return f.createElement(N.Ya, {
                            display: N.X.Flex,
                            justifyContent: N.Xa.Center,
                            flexWrap: N.Ba.Wrap,
                            padding: 3
                        }, f.createElement(N.Ya, {
                            className: "unsubscribe-page__ticket-description-container",
                            margin: {
                                bottom: 2
                            },
                            display: N.X.InlineBlock
                        }, f.createElement(y.a, {
                            productName: this.props.match.params.productName,
                            invoicePrice: this.price,
                            showEuSubs: this.showEuSubs
                        })), f.createElement(N.Ya, {
                            display: N.X.InlineBlock
                        }, f.createElement(N.Fb, {
                            className: "unsubscribe-page__unsubscribe-form-container",
                            background: N.r.Base,
                            padding: 2,
                            border: !0,
                            elevation: 1,
                            margin: {
                                x: 4
                            }
                        }, n ? f.createElement(N.jb, {
                            lineCount: 20
                        }) : f.createElement(L, {
                            currentUserID: this.props.currentUser.id,
                            productName: this.props.match.params.productName,
                            originID: this.originID,
                            unsubscribeType: this.unsubscribeType,
                            endsAt: s
                        }))))
                    }, Object.defineProperty(t.prototype, "hasSubscriptionBenefit", {
                        get: function() {
                            var e = this.props.data.subscriptionProduct;
                            if (!e) return !1;
                            switch (e.type.toUpperCase()) {
                                case k.W.CHANSUB:
                                case k.W.TEAMSUB:
                                    return !!(e && e.self && e.self.benefit);
                                case k.W.TURBO:
                                    return !!(e && e.self && e.self.purchase && e.self.purchase.details && e.self.purchase.details.productType.toUpperCase() === k.W.TURBO && e.self.purchase.details.state.toUpperCase() === k.X.ACTIVE);
                                default:
                                    return this.logger.error(new Error("Cannot determine if user has subscription benefit."), "Unexpected subscription product type:", e.type), !1
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canUnsubscribe", {
                        get: function() {
                            var e = this.props.data.subscriptionProduct;
                            if (!e) return !1;
                            if (this.isMobileSub) return !1;
                            switch (e.type.toUpperCase()) {
                                case k.W.CHANSUB:
                                case k.W.TEAMSUB:
                                    return this.unsubscribeType === r.DoNotRenew ? !!(e && e.self && e.self.benefit && e.self.benefit.renewsAt) : this.unsubscribeType === r.Cancel && !!(e && e.self && e.self.benefit && e.self.benefit.isRefundable);
                                case k.W.TURBO:
                                    return this.hasSubscriptionBenefit;
                                default:
                                    return !1
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isMobileSub", {
                        get: function() {
                            var e = this.props.data.subscriptionProduct;
                            return !!(e && e.self && e.self.purchase && e.self.purchase.details && e.self.purchase.details.paymentProvider && e.self.purchase.details.paymentProvider.toUpperCase() === k.G.GOOGLE_IAB)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "originID", {
                        get: function() {
                            var e = this.props.data.subscriptionProduct;
                            return e && e.self && e.self.benefit && e.self.benefit.originID
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "price", {
                        get: function() {
                            var e = this.props.data.subscriptionProduct,
                                t = e && e.self && e.self.purchase && e.self.purchase.details;
                            return t ? Object(g.f)(t.price / t.divisor, {
                                style: "currency",
                                currency: t.currency
                            }) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showEuSubs", {
                        get: function() {
                            return "true" === this.recurlyTaxEnabled || "staff" === this.recurlyTaxEnabled && !!(this.props.currentUser && this.props.currentUser.roles && this.props.currentUser.roles.isStaff)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(f.Component)),
                H = n("nI5l");
            var Q = Object(a.compose)(Object(m.b)("UnsubscribePage", {
                destination: l.a.UnsubscribePage
            }), Object(o.a)({
                location: d.PageviewLocation.UnsubscribePage
            }), Object(s.a)(H, {
                options: function(e) {
                    return {
                        variables: {
                            productName: e.match.params.productName
                        },
                        fetchPolicy: "network-only"
                    }
                }
            }), Object(i.connect)(function(e) {
                return {
                    currentUser: Object(p.e)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    promptLogin: function() {
                        return Object(u.e)(c.a.DashboardPage)
                    }
                }, e)
            }))(Y);
            n.d(t, "UnsubscribePage", function() {
                return Q
            })
        },
        cpJf: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "d", function() {
                    return a
                }), n.d(t, "c", function() {
                    return s
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(r || (r = {}));
            var i, a = {
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
                s = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
            ! function(e) {
                e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
            }(i || (i = {}))
        },
        fQWD: function(e, t, n) {
            "use strict";
            var r = n("vHGB");
            n.d(t, "a", function() {
                return r.a
            })
        },
        lZdE: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        mb7O: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                i = n("Ue10"),
                a = (n("bfgy"), function(e) {
                    return r.createElement(i.Ya, {
                        className: "ticket-wrapper__container",
                        "data-a-target": "js-test-ticket-container",
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(i.G, {
                        elevation: 1
                    }, e.children))
                }),
                s = a;
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return s
            })
        },
        nI5l: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UnsubscribePage"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        }]
                                    }
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
                                                        value: "originID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewsAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
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
                                                        value: "isRefundable"
                                                    },
                                                    arguments: [],
                                                    directives: []
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
                                                                value: "paymentProvider"
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
                                                                value: "state"
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
                }],
                loc: {
                    start: 0,
                    end: 276
                }
            };
            n.loc.source = {
                body: "query UnsubscribePage($productName: String!) {\nsubscriptionProduct(productName: $productName) {\nid\nowner {\nid\ndisplayName\n}\ntype\nself {\nbenefit {\nid\noriginID\nrenewsAt\nendsAt\nisRefundable\n}\npurchase {\ndetails {\nprice\ncurrency\ndivisor\npaymentProvider\nproductType\nstate\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        qyxT: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1)),
                        r = e[t];
                    e[t] = e[n], e[n] = r
                }
                return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        tIid: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return o
            });
            var r = n("/7QA"),
                i = "esport_insider_pass_whitelist",
                a = "esports_room_cheering_whitelist";

            function s(e, t, n) {
                return void 0 === n && (n = !1), c(i, e, t, n)
            }

            function o(e, t) {
                return c(a, e, t)
            }

            function c(e, t, n, i) {
                void 0 === i && (i = !1);
                var a = r.b.get(e, []),
                    s = n && n.roles && n.roles.isStaff || i;
                return a.includes(t) || a.includes(t + "-staff") && s
            }
        },
        uIkQ: function(e, t, n) {
            "use strict";
            var r = n("b5C3"),
                i = n("fQWD"),
                a = n("ZEQw"),
                s = (n("yzyL"), n("mrSG")),
                o = function() {
                    function e(e, t, n) {
                        this.count = 0, this.globalsBySet = new Map, this.channelsBySet = new Map, this.count = e.length + (t ? t.length : 0), this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                    }
                    return e.prototype.getBadge = function(e, t) {
                        var n = this.channelsBySet.get(e);
                        return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                    }, e.prototype.indexBadges = function(e, t, n) {
                        e.forEach(function(e) {
                            n && e.clickAction === a.c && (e = s.__assign({}, e, {
                                channelName: n
                            }));
                            var r = t.get(e.setID);
                            r || (r = new Map, t.set(e.setID, r)), r.set(e.version, e)
                        })
                    }, e
                }();
            new o([], [], "");
            n.d(t, "b", function() {
                return r.a
            }), n.d(t, "a", function() {
                return i.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
                return o
            })
        },
        uUdG: function(e, t, n) {},
        vHGB: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("ZEQw"),
                s = n("Ue10"),
                o = (n("E78O"), n("/7QA")),
                c = n("2xye"),
                u = function(e) {
                    e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), o.p.tracking.track(c.SpadeEventType.ChatBadgeClick, e)
                };
            n.d(t, "a", function() {
                return l
            });
            var l = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.badge,
                        t = e.title,
                        n = e.image1x,
                        r = e.image2x,
                        a = e.image4x,
                        c = i.createElement("img", {
                            alt: t,
                            "aria-label": Object(o.d)("{badgeTitle} badge", {
                                badgeTitle: t
                            }, "Badge"),
                            className: "chat-badge",
                            src: n,
                            srcSet: n + " 1x, " + r + " 2x, " + a + " 4x",
                            onMouseOver: this.onMouseOver,
                            onMouseOut: this.onMouseOut
                        });
                    return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (c = i.createElement("a", {
                        href: this.targetURL,
                        onClick: this.onBadgeClickHandler,
                        target: "_blank",
                        "data-a-target": "chat-badge"
                    }, c)), this.state.isHovering ? i.createElement(s.Zb, {
                        align: s.ac.Left,
                        "data-a-target": "chat-badge",
                        display: s.X.Inline,
                        key: n,
                        label: t,
                        offsetY: "0.9rem"
                    }, c) : c
                }, t.prototype.getTargetURL = function() {
                    var e = this.props.badge;
                    switch (e.clickAction) {
                        case a.e:
                            return e.clickURL;
                        case a.c:
                            return e.channelName ? this.getSubscriberLink() : "";
                        case a.d:
                            return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                        default:
                            return ""
                    }
                }, t.prototype.getSubscriberLink = function() {
                    return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
                }, t
            }(i.Component)
        },
        yzyL: function(e, t) {}
    }
]);