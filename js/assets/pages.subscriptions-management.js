(window.webpackJsonp = window.webpackJsonp || []).push([
    [50], {
        "/jfp": function(e, t, n) {
            e.exports = n.p + "assets/turbo_avatar_1x-7924691a22be364929f8.png"
        },
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
                        var t, n, o, u, c, d, l;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.userID, n = e.productName, o = e.reason, u = e.originID, c = e.giftOriginID, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 8, , 9]), u && u.startsWith("amzn1.twitch.payments.sub.") ? (d = "/kraken/order/subscriptions/" + u + "/cancel", l = {
                                        user_id: t,
                                        reason: o,
                                        cancellation_directive: r.FULL_REFUND,
                                        benefits_directive: i.CANCEL_BENEFITS
                                    }, c && (l.gift_origin_id = c), [4, s.a.putOrThrow(d, {
                                        body: l
                                    }, {
                                        version: 5
                                    })]) : [3, 3];
                                case 2:
                                    return a.sent(), [3, 7];
                                case 3:
                                    return u && u.startsWith("amzn1.twitch.payments.order.") ? (d = "/kraken/order/purchase_orders/" + u + "/cancel", l = {
                                        user_id: t,
                                        reason: o
                                    }, [4, s.a.putOrThrow(d, {
                                        body: l
                                    }, {
                                        version: 5
                                    })]) : [3, 5];
                                case 4:
                                    return a.sent(), [3, 7];
                                case 5:
                                    return d = "/kraken/checkout/users/" + t + "/products/" + n + "/purchase/cancel", l = {
                                        reason: o
                                    }, u && c && (l.purchase_profile_id = u, l.gift_purchase_profile_id = c), [4, s.a.postOrThrow(d, {
                                        body: l
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
                        var t, n, o, u, c, d;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.userID, n = e.productName, o = e.reason, u = e.originID, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 6, , 7]), u && u.startsWith("amzn1.twitch.payments.sub.") ? (c = "/kraken/order/subscriptions/" + u + "/cancel", d = {
                                        user_id: t,
                                        reason: o,
                                        cancellation_directive: r.NO_REFUND,
                                        benefits_directive: i.DO_NOT_RENEW_BENEFITS
                                    }, [4, s.a.putOrThrow(c, {
                                        body: d
                                    }, {
                                        version: 5
                                    })]) : [3, 3];
                                case 2:
                                    return a.sent(), [3, 5];
                                case 3:
                                    return c = "/kraken/checkout/users/" + t + "/products/" + n + "/purchase/do_not_renew", d = {
                                        reason: o
                                    }, [4, s.a.postOrThrow(c, {
                                        body: d
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
        "3Bft": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = {
                Prime: "prime",
                Tier1: "1000",
                Tier2: "2000",
                Tier3: "3000",
                Custom: "Custom"
            }
        },
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var r = n("L9xt");
            n.o(r, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return r.PageviewContent
            }), n.o(r, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return r.PageviewLocation
            }), n.o(r, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return r.PageviewMedium
            }), n.o(r, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return r.SpadeEventType
            })
        },
        "58bG": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SubscriptionsManagement_SubscriptionProduct"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
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
                                        value: "login"
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
                                        value: "broadcastBadges"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "description"
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
                                                value: "title"
                                            },
                                            arguments: [],
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
                                                                value: "tier"
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
                    end: 398
                }
            };
            n.loc.source = {
                body: "query SubscriptionsManagement_SubscriptionProduct($login: String) {\nuser(login: $login) {\nid\nbroadcastBadges {\nid\nsetID\nversion\nclickAction\nclickURL\ndescription\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\ntitle\n}\nsubscriptionProducts {\nid\ntier\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\nemotes {\nid\ntoken\n}\nself {\nbenefit {\nid\ntier\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5g1g": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("wUQP"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.incremental && Object(a.c)(this.props.name) || Object(a.b)(this.props.name) ? this.props.children : null
                    }, t
                }(i.Component),
                o = s;
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            })
        },
        "7SjK": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("TSYQ"),
                s = n("/7QA"),
                o = n("GnwI"),
                u = n("Ue10"),
                c = (n("GOKC"), i.createElement(u.yb, {
                    alignItems: u.f.Center,
                    background: u.r.Overlay,
                    borderRadius: u.x.Small,
                    className: "emote-button__lock",
                    color: u.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: u.X.InlineFlex,
                    justifyContent: u.Wa.Center,
                    position: u.fb.Absolute,
                    zIndex: u.bc.Above
                }, i.createElement(u.ob, {
                    asset: u.pb.Lock,
                    height: 10,
                    width: 10
                }))),
                d = function(e) {
                    var t = a("emote-button__link", {
                            "emote-button__link--locked": !e.onClick
                        }),
                        n = e.emote,
                        r = n.displayName,
                        d = n.srcSet;
                    if (!d) return null;
                    var l = i.createElement("img", {
                        className: "emote-picker__image",
                        srcSet: d,
                        alt: r
                    });
                    if (e.isCriticalImage) {
                        for (var p = d.split(" ")[0], m = {}, b = 0, f = d.split(","); b < f.length; b++) {
                            var g = f[b].trim().split(" "),
                                h = g[1],
                                v = g[0];
                            m[h] = v
                        }
                        l = i.createElement(o.a, {
                            className: "emote-picker__emote-image",
                            src: p,
                            srcSet: m,
                            alt: r || ""
                        })
                    }
                    return i.createElement("div", {
                        className: "emote-button"
                    }, i.createElement(u.Rb, {
                        label: r || Object(s.d)("Emote", "EmoteButton"),
                        direction: u.Tb.Bottom
                    }, i.createElement(u.Pa, {
                        display: u.X.Flex,
                        alignItems: u.f.Center,
                        justifyContent: u.Wa.Center
                    }, i.createElement("button", {
                        "data-test-selector": "emote-button-clickable",
                        className: t,
                        "aria-label": r,
                        name: r,
                        onClick: e.onClick ? e.onClick.bind(null, e.emote) : void 0,
                        "data-a-target": r
                    }, i.createElement("figure", null, e.locked ? c : null, l)))))
                },
                l = (n("VrOd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickEmote = function(e) {
                            t.props.onClickEmote && t.props.onClickEmote(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.emotes.map(function(t, n) {
                                return i.createElement(d, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === n,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                })
                            });
                        return i.createElement(u.Xa, {
                            display: u.X.Flex,
                            flexWrap: u.Ba.Wrap,
                            justifyContent: u.Wa.Center
                        }, t)
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        BLKr: function(e, t, n) {},
        CDqf: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                s = n("Ue10"),
                o = (n("WAGi"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(s.yb, {
                            borderRadius: this.getBannerBorderRadius(),
                            className: "sub-promo-banner",
                            display: s.X.Flex
                        }, this.getCTA())
                    }, t.prototype.getCTA = function() {
                        var e = this.props.alignCTA,
                            t = "Left" === e ? "Right" : "Left",
                            n = i.createElement(s.Xa, {
                                className: "sub-promo-banner__triangle-" + e.toLowerCase()
                            }),
                            r = i.createElement(s.yb, {
                                borderRadius: this.getChildBorderRadius(e),
                                className: "sub-promo-banner__promo-price",
                                display: s.X.Flex,
                                flexDirection: s.Aa.Column,
                                justifyContent: s.Wa.Center
                            }, i.createElement(s.Xa, {
                                display: s.X.Flex,
                                justifyContent: s.Wa.Center
                            }, i.createElement(s.Xa, {
                                margin: {
                                    top: .5
                                }
                            }, i.createElement(s.W, {
                                className: "sub-promo-banner__currency-symbol",
                                color: s.O.Overlay
                            }, "$1".substring(0, 1))), i.createElement(s.W, {
                                bold: !0,
                                className: "sub-promo-banner__currency-number",
                                color: s.O.Overlay
                            }, "$1".substring(1))), i.createElement(s.W, {
                                className: "sub-promo-banner__subs-cta",
                                color: s.O.Overlay
                            }, Object(a.d)("SUBS", "SubPromoBanner"))),
                            o = i.createElement(s.yb, {
                                borderLeft: !1,
                                borderRadius: this.getChildBorderRadius(t),
                                className: "sub-promo-banner__cta",
                                display: s.X.Flex,
                                flexDirection: s.Aa.Column,
                                flexGrow: 1,
                                justifyContent: s.Wa.Center,
                                padding: {
                                    left: 2,
                                    right: 3,
                                    y: 1
                                }
                            }, i.createElement(s.W, {
                                bold: !0,
                                color: s.O.Overlay,
                                fontSize: s.Ca.Size4
                            }, Object(a.d)("Subtember is here!", "SubPromoBanner")), i.createElement(s.W, {
                                color: s.O.Overlay
                            }, Object(a.d)("Make the most of your Gift Sub this September by continuing at Tier 1 for <x:strong>only {promoPrice}</x:strong>. {promoLink}", {
                                promoLink: i.createElement(s.U, {
                                    key: "SubPromoBannerLink",
                                    targetBlank: !0,
                                    to: "https://link.twitch.tv/subtember",
                                    type: s.V.Overlay
                                }, Object(a.d)("Learn More", "SubPromoBanner")),
                                promoPrice: "$1",
                                "x:strong": function(e) {
                                    return i.createElement(s.W, {
                                        bold: !0,
                                        key: "SubPromoBannerBoldText",
                                        type: s.Ob.Span
                                    }, e)
                                }
                            }, "SubPromoBanner")));
                        return "Left" === e ? i.createElement(i.Fragment, null, r, n, o) : i.createElement(i.Fragment, null, o, n, r)
                    }, t.prototype.getBannerBorderRadius = function() {
                        var e = this.props,
                            t = e.roundedBottom,
                            n = e.roundedTop;
                        return t && n ? {
                            bottomLeft: s.x.Large,
                            bottomRight: s.x.Large,
                            topLeft: s.x.Large,
                            topRight: s.x.Large
                        } : t ? {
                            bottomLeft: s.x.Large,
                            bottomRight: s.x.Large
                        } : n ? {
                            topLeft: s.x.Large,
                            topRight: s.x.Large
                        } : {}
                    }, t.prototype.getChildBorderRadius = function(e) {
                        var t, n, r, i = this.props,
                            a = i.roundedBottom,
                            o = i.roundedTop;
                        return a && o ? ((t = {})["bottom" + e] = s.x.Large, t["top" + e] = s.x.Large, t) : a ? ((n = {})["bottom" + e] = s.x.Large, n) : o ? ((r = {})["top" + e] = s.x.Large, r) : {}
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        E78O: function(e, t, n) {},
        FWo1: function(e, t, n) {},
        GOKC: function(e, t, n) {},
        "I/Sa": function(e, t, n) {},
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
        KXaD: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "subscriptionBenefit"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SubscriptionBenefit"
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
                                value: "originID"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "platform"
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
                                        value: "gifter"
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
                                        value: "isGift"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
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
                                        value: "originID"
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
                                        value: "price"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "url"
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
                                value: "purchasedWithPrime"
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
                                        value: "login"
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
                                            value: "50"
                                        }
                                    }],
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
                                                value: "displayBadges"
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
                                        }]
                                    }
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 532
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nfragment subscriptionBenefit on SubscriptionBenefit {\nid\noriginID\nendsAt\nisRefundable\nplatform\ngift {\ngifter {\nid\nlogin\ndisplayName\n}\nisGift\n}\npaidUpgrade {\noriginID\nprice\nstartsAt\n}\nproduct {\nid\ntier\nprice\nname\ndisplayName\nurl\nself {\npaidUpgradePromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\n}\npurchasedWithPrime\nrenewsAt\ntier\nuser {\nid\ndisplayName\nlogin\nbannerImageURL\nprofileImageURL(width: 50)\nself {\ndisplayBadges {\n...badge\n}\n}\nroles {\nisPartner\n}\n}\n}',
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
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "d", function() {
                return g
            });
            var r = n("mrSG"),
                i = n("lZdE"),
                a = n("cpJf"),
                s = {
                    "^B-?\\)$": "B)",
                    "^:-?[z|Z|\\|]$": ":|",
                    "^:-?\\)$": ":)",
                    "^:-?\\($": ":(",
                    "^:-?(p|P)$": ":P",
                    "^;-?(p|P)$": ";P",
                    "^:-?[\\\\/]$": ":/",
                    "^;-?\\)$": ";)",
                    "^R-?\\)$": "R)",
                    "^:>$": ":>",
                    "^:&gt;$": ":>",
                    "^[oO](_|\\.)[oO]$": "O_o",
                    "^:-?D$": ":D",
                    "^:-?(o|O)$": ":O",
                    "^>\\($": ">(",
                    "^:-?(?:7|L)$": ":7",
                    "^:-?(S|s)$": ":S",
                    "^#-?[\\\\/]$": "#/",
                    "^<\\]$": "<]",
                    "^<3$": "<3",
                    "^&lt;3$": "<3",
                    "^&lt;\\]$": "<]",
                    "^&gt;\\($": ">("
                },
                o = ["1.0", "2.0", "3.0"],
                u = new Set([457, 33, 42, 0]);

            function c(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = b(e.token),
                            i = s[n] || n,
                            a = o.reduce(function(t, n) {
                                var r = t;
                                return r && (r = r.concat(", ")), r.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(r.__assign({
                            displayName: i,
                            srcSet: a
                        }, e))
                    }, i = 0, a = e; i < a.length; i++) {
                    n(a[i])
                }
                return t
            }

            function d(e, t) {
                var n = c(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return r.__assign({}, e, {
                            setID: t
                        })
                    })
                }(n, t)), n
            }

            function l(e) {
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
                            var u = o[s];
                            u && u.id && u.token && a.emotes.push(u)
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
                            emotes: d(l(a.emotes), a.id)
                        };
                        u.has(parseInt(a.id, 10)) ? t.push(s) : n.push(s)
                    }
                }
                return n.concat(t)
            }
            var b = function(e) {
                    return function(e) {
                        return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                    }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
                },
                f = function(e, t, n) {
                    var r = n || a.d,
                        s = [],
                        o = [],
                        u = [],
                        c = new RegExp("^" + Object(i.a)(t), "i");
                    return e.forEach(function(e) {
                        r[e.token] ? u.push(e) : e.token.match(c) ? s.push(e) : o.push(e)
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), u.sort(function(e, t) {
                        return r[t.token].count - r[e.token].count
                    }), u.concat(s).concat(o)
                },
                g = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        UGMo: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("/MKj"),
                i = n("fvjX"),
                a = n("1/iK"),
                s = n("y5D0"),
                o = n("kRBY"),
                u = n("mrSG"),
                c = n("cr+I"),
                d = n("q1tI"),
                l = n("/7QA"),
                p = n("ZDlU"),
                m = n("5g1g"),
                b = n("V+GM"),
                f = n("NvVO"),
                g = n("GnwI"),
                h = n("Bh3T"),
                v = n("8/mp"),
                k = n("yR8l"),
                S = n("geRD"),
                y = n("oJmH"),
                E = n("CDqf"),
                B = n("Ue10"),
                O = (n("BLKr"), function() {
                    return d.createElement(B.yb, {
                        className: "available-prime-sub-card",
                        "data-a-target": "available-prime-sub-card",
                        border: !0,
                        background: B.r.Base,
                        display: B.X.Flex,
                        padding: 2,
                        flexDirection: B.Aa.Column,
                        alignItems: B.f.Center,
                        justifyContent: B.Wa.Center,
                        textAlign: B.Kb.Center,
                        margin: {
                            bottom: 2,
                            right: 2
                        }
                    }, d.createElement(B.ob, {
                        type: B.qb.Prime,
                        asset: B.pb.Crown,
                        height: 80,
                        width: 80
                    }), d.createElement(B.Pa, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(B.W, {
                        bold: !0,
                        type: B.Ob.H3
                    }, Object(l.d)("Use your free channel subscription", "AvailablePrimeSubCard"))), d.createElement(B.Pa, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(B.W, null, Object(l.d)("Directly support your favorite streamer, and you can subscribe again for free every 30 days.", "AvailablePrimeSubCard"))), d.createElement(B.Pa, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(B.W, null, Object(l.d)('To use your free subscription, go to a channel of your choice and select "Subscribe Free"', "AvailablePrimeSubCard"))))
                }),
                _ = n("/jfp"),
                C = n.n(_),
                N = n("yLwq"),
                P = n("QVaV"),
                T = n("cMjZ"),
                w = n("fQWD"),
                U = n("aCAx"),
                F = n("cZKs"),
                D = n("b6Yk");
            var I, R;
            n("l1sD");
            ! function(e) {
                e.ErrorMessage = "DisableGiftModalErrorMessage", e.CancelButton = "DisableGiftCancelButton", e.ConfirmButton = "DisableGiftConfirmButton"
            }(I || (I = {})),
            function(e) {
                e[e.Success = 0] = "Success", e[e.Error = 1] = "Error", e[e.InProgress = 2] = "InProgress", e[e.Unconfirmed = 3] = "Unconfirmed"
            }(R || (R = {}));
            var j, A, L, M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            requestStatus: R.Unconfirmed
                        }, t.onConfirmDisableGift = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r = this;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = this.props.currentUserID, t = this.props.originID, n = this.props.subscriptionProductID, this.setState({
                                                requestStatus: R.InProgress
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                                return u.__awaiter(this, void 0, void 0, function() {
                                                    var r, i;
                                                    return u.__generator(this, function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                r = {
                                                                    recipient_id: e,
                                                                    origin_id: t,
                                                                    product_id: n
                                                                }, a.label = 1;
                                                            case 1:
                                                                return a.trys.push([1, 3, , 4]), [4, D.a.postOrThrow("/v5/subscriptions/gift/cancel", {
                                                                    body: r
                                                                }, {
                                                                    version: 5
                                                                })];
                                                            case 2:
                                                                return a.sent(), [3, 4];
                                                            case 3:
                                                                return i = a.sent(), [2, Promise.reject(i)];
                                                            case 4:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }(e, t, n)];
                                        case 2:
                                            return i.sent(), this.setState({
                                                requestStatus: R.Success
                                            }, function() {
                                                r.props.onSuccess()
                                            }), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState({
                                                requestStatus: R.Error
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(B.yb, {
                            className: "disable-gift-modal",
                            background: B.r.Base,
                            padding: 2
                        }, d.createElement(B.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, {
                            bold: !0
                        }, Object(l.d)("Disable Gift Subscription Benefits?", "DisableGiftModal"))), d.createElement(B.W, null, Object(l.d)("Are you sure you wish you disable your Gift Subscription benefits to {channelName}? You won't be able to re-enable them.", {
                            channelName: this.props.formattedChannelDisplayName
                        }, "DisableGiftModal")), this.renderErrorDisplay(), d.createElement(B.Xa, {
                            margin: {
                                top: 2
                            },
                            display: B.X.Flex
                        }, d.createElement(B.Xa, {
                            margin: {
                                right: 1
                            }
                        }, d.createElement(B.z, {
                            state: this.getConfirmButtonState(),
                            type: B.F.Alert,
                            onClick: this.onConfirmDisableGift,
                            "data-test-selector": I.ConfirmButton
                        }, Object(l.d)("Disable Benefits", "DisableGiftModal"))), d.createElement(B.z, {
                            onClick: this.props.onCancel,
                            "data-test-selector": I.CancelButton
                        }, Object(l.d)("Cancel", "DisableGiftModal"))), d.createElement(F.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t.prototype.renderErrorDisplay = function() {
                        return this.state.requestStatus === R.Error ? d.createElement(B.yb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error",
                            "data-test-selector": I.ErrorMessage
                        }, d.createElement(B.W, null, Object(l.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "DisableGiftModal"))) : null
                    }, t.prototype.getConfirmButtonState = function() {
                        switch (this.state.requestStatus) {
                            case R.InProgress:
                                return B.E.Loading;
                            case R.Success:
                                return B.E.Success;
                            case R.Unconfirmed:
                            case R.Error:
                            default:
                                return B.E.Default
                        }
                    }, t
                }(d.Component),
                x = n("u5aL"),
                G = n("3Bft");
            ! function(e) {
                e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
            }(j || (j = {})),
            function(e) {
                e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
            }(A || (A = {})),
            function(e) {
                e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
            }(L || (L = {}));
            var W, X = n("0VVg");
            ! function(e) {
                e.ChangeTierButton = "ChangeTierButton", e.ChangePaymentMethodButton = "ChangePaymentMethodButton", e.DoNotRenewButton = "DoNotRenewButton", e.CancelGiftButton = "CancelGiftButton", e.CancelPaidUpgrade = "CancelPaidUpgrade", e.CancelAndRefundButton = "CancelAndRefundButton"
            }(W || (W = {}));
            var V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            show: !1
                        }, t.onEditClick = function() {
                            t.setState(function(e) {
                                return {
                                    show: !e.show
                                }
                            })
                        }, t.onClickOut = function() {
                            t.state.show && t.setState({
                                show: !1
                            })
                        }, t.renderChangePaymentMethodButton = function() {
                            return t.renderInteractable(W.ChangePaymentMethodButton, Object(l.d)("Change Payment Method", "EditSubscriptionBalloon"), {
                                linkTo: "/payments"
                            })
                        }, t.renderDoNotRenewButton = function() {
                            return t.props.subscriptionBenefit.product ? t.renderInteractable(W.DoNotRenewButton, Object(l.d)("Don't Renew Subscription", "EditSubscriptionBalloon"), {
                                linkTo: "/unsubscribe/" + t.props.subscriptionBenefit.product.name,
                                type: B.Va.Alert
                            }) : null
                        }, t.renderCancelAndRefundButton = function() {
                            return t.props.subscriptionBenefit.product ? t.renderInteractable(W.CancelAndRefundButton, Object(l.d)("Cancel And Refund", "EditSubscriptionBalloon"), {
                                type: B.Va.Alert,
                                linkTo: "/unsubscribe/" + t.props.subscriptionBenefit.product.name + "?cancel=true"
                            }) : null
                        }, t.renderDisableGiftButton = function() {
                            return null !== t.props.subscriptionBenefit.paidUpgrade ? null : t.renderInteractable(W.CancelGiftButton, Object(l.d)("Disable Gift Benefits", "EditSubscriptionBalloon"), {
                                type: B.Va.Alert,
                                onClick: t.onDisableGiftBenefits
                            })
                        }, t.renderCancelPaidUpgrade = function() {
                            return t.renderInteractable(W.CancelPaidUpgrade, Object(l.d)("Cancel Paid Subscription", "EditSubscriptionBalloon"), {
                                type: B.Va.Alert,
                                onClick: t.onCancelPaidUpgrade
                            })
                        }, t.onDisableGiftBenefits = function() {
                            var e = t.props.subscriptionBenefit;
                            t.props.currentUserID && e.user && e.product && e.originID && t.props.showDisableGiftModal({
                                onCancel: t.props.closeModal,
                                onSuccess: t.props.onDisableGiftSuccess,
                                formattedChannelDisplayName: Object(P.a)(e.user.login, e.user.displayName),
                                currentUserID: t.props.currentUserID,
                                originID: e.originID,
                                subscriptionProductID: e.product.id
                            })
                        }, t.onCancelPaidUpgrade = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return u.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = this.props.subscriptionBenefit, this.props.currentUserID && e.product && e.product.name && e.originID && e.paidUpgrade ? [4, X.a.cancelPaidUpgrade({
                                                userID: this.props.currentUserID,
                                                productName: e.product.name,
                                                originID: e.paidUpgrade.originID,
                                                giftOriginID: e.originID
                                            })] : [3, 2];
                                        case 1:
                                            t.sent().success && this.props.onCancelPaidUpgradeSuccess(), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        var e = Object(l.d)("Edit Subscription", "SubscriptionCard"),
                            t = null;
                        if (this.props.subscriptionBenefit.platform === A.WEB) {
                            var n = this.renderInteractables();
                            if (n.length < 1) return null;
                            t = n
                        } else t = d.createElement(B.Xa, {
                            padding: {
                                x: 1
                            }
                        }, this.renderMobileMessage());
                        return d.createElement(B.Xa, {
                            position: B.fb.Relative
                        }, d.createElement(x.a, {
                            onClickOut: this.onClickOut
                        }, d.createElement(B.Rb, {
                            label: e
                        }, d.createElement(B.A, {
                            ariaLabel: e,
                            "data-a-target": "subscription-card-edit-button",
                            icon: B.pb.Gear,
                            onClick: this.onEditClick,
                            size: B.B.Default,
                            type: B.C.Secondary
                        })), d.createElement(B.u, {
                            direction: B.v.Left,
                            show: this.state.show,
                            size: B.w.Small,
                            tailOffset: 10
                        }, d.createElement(B.Xa, {
                            margin: {
                                y: 1
                            }
                        }, t))))
                    }, t.prototype.renderInteractables = function() {
                        var e = this.props.subscriptionBenefit,
                            t = e.gift,
                            n = [];
                        return t && t.isGift ? t && t.isGift && (n.push(this.renderDisableGiftButton()), e.paidUpgrade && n.push(this.renderCancelPaidUpgrade())) : (n.push(this.renderChangeTierButton()), e.renewsAt && (n.push(this.renderChangePaymentMethodButton()), n.push(this.renderDoNotRenewButton())), e.isRefundable && n.push(this.renderCancelAndRefundButton())), n.filter(function(e) {
                            return !!e
                        })
                    }, t.prototype.renderChangeTierButton = function() {
                        if (![G.a.Tier3, G.a.Custom].includes(this.props.subscriptionBenefit.tier) && this.props.subscriptionBenefit.user) {
                            var e = {
                                linkTo: "/subs/" + this.props.subscriptionBenefit.user.login
                            };
                            return this.renderInteractable(W.ChangeTierButton, Object(l.d)("Change Subscription Tier", "EditSubscriptionBalloon"), e)
                        }
                        return null
                    }, t.prototype.renderInteractable = function(e, t, n) {
                        return d.createElement(B.Ua, u.__assign({}, n, {
                            ariaLabel: t,
                            "data-a-target": e,
                            "data-test-selector": e,
                            key: "edit-subscription-" + e
                        }), d.createElement(B.Xa, {
                            padding: 1,
                            textAlign: B.Kb.Center
                        }, d.createElement(B.W, null, t)))
                    }, t.prototype.renderMobileMessage = function() {
                        return this.props.subscriptionBenefit.platform === A.ANDROID ? d.createElement(B.W, null, Object(l.d)("To edit this subscription, please go to the Twitch Subscription Manager on your Android device.              <x:link>               Click here for more information.             </x:link>", {
                            "x:link": function(e) {
                                return d.createElement(B.U, {
                                    to: "https://help.twitch.tv/customer/portal/articles/2935963-how-to-purchase-and-manage-subscriptions-on-android#Manage"
                                }, e)
                            }
                        }, "EditSubscriptionBalloon")) : this.props.subscriptionBenefit.platform === A.IOS ? d.createElement(B.W, null, Object(l.d)("To edit this subscription, please go to your Subscription Manager on your iOS device.              <x:link>               Click here for more information.             </x:link>", {
                            "x:link": function(e) {
                                return d.createElement(B.U, {
                                    to: "https://help.twitch.tv/customer/portal/articles/2935963-how-to-purchase-and-manage-subscriptions-on-ios#Manage"
                                }, e)
                            }
                        }, "EditSubscriptionBalloon")) : null
                    }, t
                }(d.Component),
                q = Object(y.compose)(Object(g.b)("EditSubscriptionBalloon", {
                    autoReportInteractive: !0
                }))(V);
            var $ = Object(r.connect)(void 0, function(e) {
                    return Object(i.bindActionCreators)({
                        showDisableGiftModal: function(e) {
                            var t = u.__rest(e, []);
                            return Object(U.d)(M, t)
                        },
                        closeModal: U.c
                    }, e)
                })(q),
                z = n("7SjK"),
                H = n("OpME"),
                Q = n("ZEQw");

            function K(e) {
                return {
                    id: e.id,
                    setID: e.setID,
                    version: e.version,
                    title: e.title,
                    image1x: e.image1x,
                    image2x: e.image2x,
                    image4x: e.image4x,
                    clickAction: Q.c,
                    clickURL: e.clickURL || ""
                }
            }
            var Y, Z = n("58bG");
            (Y || (Y = {})).HasAdFreeMessage = "HasAdFreeMessage";
            var J = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            show: !1
                        }, t.toggleBenefitsBalloon = function() {
                            t.setState(function(e) {
                                return {
                                    show: !e.show
                                }
                            })
                        }, t.onClickOut = function() {
                            t.setState({
                                show: !1
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractiveIfReady()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractiveIfReady()
                    }, t.prototype.render = function() {
                        return d.createElement(B.Xa, null, d.createElement(x.a, {
                            onClickOut: this.onClickOut
                        }, d.createElement(B.z, {
                            type: B.F.Text,
                            onClick: this.toggleBenefitsBalloon
                        }, Object(l.d)("Show Benefits", "SubscriptionBenefitsBalloon")), d.createElement(B.u, {
                            show: this.state.show,
                            offsetX: "2rem",
                            offsetY: "-0.5rem",
                            size: B.w.Medium
                        }, d.createElement(B.Xa, {
                            padding: 2
                        }, d.createElement(B.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, {
                            bold: !0
                        }, Object(l.d)("Subscription Benefits", "SubscriptionBenefitsBalloon"))), this.renderContent()))))
                    }, t.prototype.renderContent = function() {
                        return this.props.data.user && this.props.data.user.subscriptionProducts ? d.createElement(d.Fragment, null, d.createElement(B.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Directly support the streamer", "SubscriptionBenefitsBalloon"))), this.hasAdFree && d.createElement(B.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, {
                            "data-test-selector": Y.HasAdFreeMessage
                        }, Object(l.d)("Ad-free streams (with limited exceptions)", "SubscriptionBenefitsBalloon"))), this.renderSubscriberBadges(), d.createElement(B.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Chat during subscriber-only mode", "SubscriptionBenefitsBalloon"))), this.hasFastChat && d.createElement(B.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Not affected by chat slow mode", "SubscriptionBenefitsBalloon"))), this.hasSubOnlyVideoArchive && d.createElement(B.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Access to sub only VODs", "SubscriptionBenefitsBalloon"))), this.renderSubscriberEmotes()) : this.props.data.loading ? d.createElement(B.Za, {
                            fillContent: !0
                        }) : null
                    }, t.prototype.renderSubscriberBadges = function() {
                        var e = [];
                        this.props.data && this.props.data.user && this.props.data.user.broadcastBadges && this.props.data.user.broadcastBadges.filter(function(e) {
                            return e && "subscriber" === e.setID
                        }).sort(this.compareBadgeVersion).forEach(function(t) {
                            if (t) {
                                var n = K(t);
                                e.push(d.createElement(w.a, {
                                    key: "subscription-benefit-badge-" + t.id,
                                    badge: n
                                }))
                            }
                        });
                        return e.length < 1 ? null : d.createElement(B.Xa, {
                            margin: {
                                bottom: 1
                            },
                            display: B.X.Flex,
                            flexWrap: B.Ba.Wrap
                        }, d.createElement(B.Pa, {
                            margin: {
                                right: .5
                            },
                            flexShrink: 1
                        }, d.createElement(B.W, null, Object(l.d)("Subscriber badges:", "SubscriptionBenefitsBalloon"))), d.createElement(B.Xa, {
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            flexShrink: 0
                        }, e))
                    }, t.prototype.renderSubscriberEmotes = function() {
                        var e = this.getEmotesFromProducts();
                        return 0 === e.length ? null : d.createElement(B.Xa, null, d.createElement(B.W, null, Object(l.d)("{count, plural, one {# subscriber emote} other {# subscriber emotes}}", {
                            count: e.length
                        }, "SubscriptionBenefitsBalloon")), d.createElement(z.a, {
                            emotes: e,
                            locked: !1
                        }))
                    }, Object.defineProperty(t.prototype, "hasAdFree", {
                        get: function() {
                            var e = !1;
                            return this.props.data.user && this.props.data.user.subscriptionProducts && (e = this.props.data.user.subscriptionProducts.some(function(e) {
                                return !!(e && e.self && e.self.benefit && e.tier === e.self.benefit.tier && e.hasAdFree)
                            })), e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasSubOnlyVideoArchive", {
                        get: function() {
                            var e = !1;
                            return this.props.data.user && this.props.data.user.subscriptionProducts && (e = this.props.data.user.subscriptionProducts.some(function(e) {
                                return !!(e && e.self && e.self.benefit && e.tier === e.self.benefit.tier && e.hasSubonlyVideoArchive)
                            })), e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasFastChat", {
                        get: function() {
                            var e = !1;
                            return this.props.data.user && this.props.data.user.subscriptionProducts && (e = this.props.data.user.subscriptionProducts.some(function(e) {
                                return !!(e && e.self && e.self.benefit && e.tier === e.self.benefit.tier && e.hasFastChat)
                            })), e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.compareBadgeVersion = function(e, t) {
                        return (e && Number(e.version) || 0) - (t && Number(t.version) || 0)
                    }, t.prototype.reportInteractiveIfReady = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.getSubscribedProductAndTiersBelow = function() {
                        return this.props.data.user && this.props.data.user.subscriptionProducts ? this.props.data.user.subscriptionProducts.filter(function(e) {
                            return !!(e && e.self && e.self.benefit) && (e.tier !== G.a.Custom && Number(e.tier) || Number(G.a.Tier1)) <= (e.self.benefit.tier !== G.a.Custom && Number(e.self.benefit.tier) || Number(G.a.Tier1))
                        }) : []
                    }, t.prototype.getEmotesFromProducts = function() {
                        var e = this.getSubscribedProductAndTiersBelow().filter(function(e) {
                            return e && e.emotes
                        }).map(function(e) {
                            return e.emotes
                        }).reduce(function(e, t) {
                            return e.concat(t)
                        }, []).filter(function(e) {
                            return e && e.id && e.token
                        }).map(function(e) {
                            return {
                                id: e.id,
                                token: e.token
                            }
                        });
                        return Object(H.b)(e)
                    }, t
                }(d.Component),
                ee = Object(y.compose)(Object(k.a)(Z, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(g.b)("SubscriptionBenefitsBalloon"))(J),
                te = n("7CzK"),
                ne = n.n(te),
                re = (n("Vscg"), function(e) {
                    var t = {
                        backgroundImage: "url(" + (e.bannerImageSrc || ne.a) + ")"
                    };
                    return d.createElement(B.yb, {
                        background: B.r.Base,
                        className: "subscription-card-banner"
                    }, d.createElement(B.U, {
                        to: e.linkTo
                    }, d.createElement("div", {
                        className: "subscription-card-banner__background",
                        style: t
                    })))
                }),
                ie = n("KXaD");

            function ae(e, t) {
                return t || (t = new Date), t.getMonth() === e.getMonth() && e.getDate() - t.getDate() > 25 ? Object(l.i)(e, {
                    units: "day"
                }) : Object(l.i)(e)
            }
            var se;
            n("I/Sa");
            ! function(e) {
                e.TierDisplay = "TierDisplay", e.ExpiryMessage = "ExpiryMessage", e.PaidUpgradeButton = "PaidUpgradeButton", e.PaidUpgradeMessage = "PaidUpgradeMessage", e.ChannelDisplayName = "ChannelDisplayName"
            }(se || (se = {}));
            var oe, ue, ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onGiftDisableSuccess = function() {
                            Object(S.d)({
                                fragment: ie,
                                fragmentName: "subscriptionBenefit",
                                id: Object(T.a)(t.props.subBenefit),
                                mutator: function(e) {
                                    return u.__assign({}, e, {
                                        platform: A.WEB,
                                        originID: null,
                                        isRefundable: !1,
                                        endsAt: null,
                                        gift: null,
                                        paidUpgrade: null,
                                        product: null,
                                        purchasedWithPrime: !1,
                                        renewsAt: null,
                                        tier: "1000",
                                        user: null
                                    })
                                }
                            })
                        }, t.onCancelPaidUpgradeSuccess = function() {
                            Object(S.d)({
                                fragment: ie,
                                fragmentName: "subscriptionBenefit",
                                id: Object(T.a)(t.props.subBenefit),
                                mutator: function(e) {
                                    return u.__assign({}, e, {
                                        paidUpgrade: null
                                    })
                                }
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = this.renderPaidUpgradeButton(),
                            r = this.props.subBenefit.user && this.props.subBenefit.user.login,
                            i = null,
                            a = "",
                            s = void 0;
                        if (this.props.subBenefit.user && this.props.subBenefit.user.displayName && this.props.subBenefit.user.login) i = this.props.subBenefit.user.bannerImageURL, e = Object(P.a)(this.props.subBenefit.user.login, this.props.subBenefit.user.displayName), a = this.props.subBenefit.user.displayName, s = "/" + this.props.subBenefit.user.login, t = this.props.subBenefit.user.profileImageURL;
                        else if (this.isTurbo) a = e = Object(l.d)("Twitch Turbo", "SubscriptionCard"), s = "/settings/turbo", t = C.a;
                        else {
                            if (this.props.subBenefit.user && this.props.subBenefit.user.displayName) return null;
                            a = e = Object(l.d)("Suspended/Deactivated Broadcaster", "SubscriptionCard"), t = Object(N.a)(N.b[0], 50), s = "/"
                        }
                        return d.createElement(B.Xa, {
                            className: "subscription-card",
                            "data-a-target": "subscription-card",
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(re, {
                            bannerImageSrc: i,
                            linkTo: s
                        }), d.createElement(B.G, {
                            border: !0
                        }, d.createElement(B.H, null, d.createElement(B.U, {
                            to: s
                        }, d.createElement(B.yb, {
                            background: B.r.Base,
                            border: !0,
                            borderRadius: B.x.Small,
                            className: "subscription-card__channel-avatar",
                            position: B.fb.Absolute
                        }, d.createElement(B.q, {
                            alt: a,
                            size: 50,
                            src: t
                        }))), d.createElement(B.yb, {
                            background: B.r.Base,
                            padding: {
                                left: 2,
                                right: 1,
                                y: 1
                            }
                        }, d.createElement(B.Xa, {
                            className: "subscription-card__edit-button",
                            display: B.X.Flex,
                            justifyContent: B.Wa.End
                        }, d.createElement($, {
                            currentUserID: this.props.currentUserID,
                            onCancelPaidUpgradeSuccess: this.onCancelPaidUpgradeSuccess,
                            onDisableGiftSuccess: this.onGiftDisableSuccess,
                            subscriptionBenefit: this.props.subBenefit
                        })), d.createElement(B.Rb, {
                            label: a,
                            offsetY: "-1rem"
                        }, d.createElement(B.Xa, {
                            display: B.X.Flex,
                            ellipsis: !0,
                            flexDirection: B.Aa.Row,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(B.U, {
                            className: "subscription-card__channel-name",
                            "data-a-target": "subscription-card__channel-name",
                            "data-test-selector": se.ChannelDisplayName,
                            hoverUnderlineNone: !0,
                            to: s,
                            type: B.V.Inherit
                        }, d.createElement(B.W, {
                            bold: !0,
                            type: B.Ob.H3,
                            ellipsis: !0
                        }, e)), this.renderVerifiedPartnerBadge())), this.renderTierDisplay(), this.renderCurrentSubscriberBadge(), this.renderGiftInfo(), this.renderBenefitRenewsOrEndsOn(), this.renderPaidUpgradeInfo(), (n || r) && d.createElement(B.Xa, {
                            display: B.X.Flex,
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: .5
                            }
                        }, n && d.createElement(B.Xa, {
                            margin: {
                                right: .5
                            }
                        }, n), r && d.createElement(ee, {
                            channelLogin: this.props.subBenefit.user.login
                        }))))))
                    }, t.prototype.renderVerifiedPartnerBadge = function() {
                        var e = !!(this.props.subBenefit.user && this.props.subBenefit.user.roles && this.props.subBenefit.user.roles.isPartner);
                        return this.isTurbo || !e ? null : d.createElement(B.Xa, {
                            alignItems: B.f.Center,
                            display: B.X.Flex,
                            padding: {
                                left: 1
                            }
                        }, d.createElement(B.ob, {
                            asset: B.pb.Verified,
                            height: 25,
                            type: B.qb.Brand
                        }))
                    }, t.prototype.renderTierDisplay = function() {
                        return d.createElement(B.Xa, {
                            "data-test-selector": se.TierDisplay,
                            display: B.X.Flex,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(B.yb, {
                            alignItems: B.f.Center,
                            background: B.r.Alt2,
                            borderRadius: B.x.Small,
                            className: this.props.subBenefit.purchasedWithPrime ? "subscription-card__tier-display-prime" : "subscription-card__tier-display",
                            "data-a-target": this.props.subBenefit.purchasedWithPrime ? "subscription-card__tier-display-prime" : "subscription-card__tier-display",
                            display: B.X.Flex,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, d.createElement(B.ob, {
                            asset: this.props.subBenefit.purchasedWithPrime ? B.pb.Crown : B.pb.Star
                        }), d.createElement(B.Pa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, {
                            bold: !0
                        }, this.getTierText()))))
                    }, t.prototype.getTierText = function() {
                        if (this.props.subBenefit.purchasedWithPrime) return Object(l.d)("Prime Subscription", "SubscriptionCard");
                        if (this.isTurbo) return Object(l.d)("Turbo Subscription", "SubscriptionCard");
                        switch (this.props.subBenefit.tier) {
                            case "1000":
                                return Object(l.d)("Tier 1 Subscription", "SubscriptionCard");
                            case "2000":
                                return Object(l.d)("Tier 2 Subscription", "SubscriptionCard");
                            case "3000":
                                return Object(l.d)("Tier 3 Subscription", "SubscriptionCard");
                            case "custom":
                            default:
                                return Object(l.d)("Subscription", "SubscriptionCard")
                        }
                    }, t.prototype.renderCurrentSubscriberBadge = function() {
                        if (!(this.isTurbo || this.props.subBenefit.user && this.props.subBenefit.user.self)) return null;
                        var e = Object(l.d)("Current Subscriber Badge", "SubscriptionCard"),
                            t = null;
                        return this.props.subBenefit.user && this.props.subBenefit.user.self ? t = this.props.subBenefit.user.self.displayBadges.find(function(e) {
                            return null !== e && "subscriber" === e.setID
                        }) : this.isTurbo && this.props.turboBadge && (e = Object(l.d)("Turbo Badge", "SubscriptionCard"), t = this.props.turboBadge), t ? d.createElement(B.Xa, {
                            alignItems: B.f.Center,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.Xa, {
                            className: "subscription-card__badge"
                        }, d.createElement(w.a, {
                            badge: K(t)
                        })), d.createElement(B.Pa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, e))) : null
                    }, t.prototype.renderGiftInfo = function() {
                        var e = this.props.subBenefit.gift;
                        return e && e.isGift ? d.createElement(B.Xa, {
                            alignItems: B.f.Center,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.ob, {
                            asset: B.pb.Gift,
                            height: 25
                        }), d.createElement(B.Pa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, e.gifter ? Object(l.d)("Gift Subscription from {sender}", {
                            sender: Object(P.a)(e.gifter.login, e.gifter.displayName)
                        }, "SubscriptionCard") : Object(l.d)("Gift Subscription", "SubscriptionCard")))) : null
                    }, t.prototype.renderPaidUpgradeButton = function() {
                        var e = this.props.subBenefit;
                        if (!e.user || !e.user.login || !e.gift || !e.gift.isGift || !e.product || !e.product.url || e.paidUpgrade) return null;
                        var t = e.product,
                            n = t.url,
                            r = t.price;
                        return t.self && t.self.paidUpgradePromotion && ("2000" === t.tier ? n = t.url.slice(0, t.url.indexOf("_2000")) : "3000" === t.tier && (n = t.url.slice(0, t.url.indexOf("_3000"))), r = t.self.paidUpgradePromotion.newPrice), d.createElement(B.z, {
                            "data-test-selector": se.PaidUpgradeButton,
                            icon: B.pb.Star,
                            linkTo: n,
                            purchase: r
                        }, Object(l.d)("Continue Sub", "SubscriptionCard"))
                    }, t.prototype.renderBenefitRenewsOrEndsOn = function() {
                        var e = null,
                            t = B.pb.Timeout;
                        if (this.props.subBenefit.endsAt) {
                            if (!this.props.subBenefit.renewsAt && this.props.subBenefit.endsAt) {
                                var n = new Date(this.props.subBenefit.endsAt),
                                    r = Object(l.c)(n, {
                                        month: "short",
                                        day: "numeric"
                                    }),
                                    i = ae(n);
                                e = Object(l.d)("Benefits end {date} ({relative})", {
                                    date: r,
                                    relative: i
                                }, "SubscriptionCard"), t = B.pb.Timeout
                            } else if (this.props.subBenefit.renewsAt) {
                                var a = new Date(this.props.subBenefit.renewsAt);
                                r = Object(l.c)(a, {
                                    month: "short",
                                    day: "numeric"
                                }), i = ae(a);
                                e = Object(l.d)("Renews on {date} ({relative})", {
                                    date: r,
                                    relative: i
                                }, "SubscriptionCard"), t = B.pb.Refresh
                            }
                        } else e = Object(l.d)("Lifetime Subscription", "SubscriptionCard");
                        return null === e ? null : d.createElement(B.Xa, {
                            alignItems: B.f.Center,
                            "data-test-selector": se.ExpiryMessage,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.ob, {
                            asset: t,
                            height: 25
                        }), d.createElement(B.Pa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, e)))
                    }, t.prototype.renderPaidUpgradeInfo = function() {
                        if (!this.props.subBenefit.paidUpgrade) return null;
                        var e = Object(l.c)(new Date(this.props.subBenefit.paidUpgrade.startsAt), {
                            month: "short",
                            day: "numeric"
                        });
                        return d.createElement(B.Xa, {
                            alignItems: B.f.Center,
                            "data-test-selector": se.PaidUpgradeMessage,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.ob, {
                            asset: B.pb.Refresh,
                            height: 25
                        }), d.createElement(B.Pa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Your new Paid Subscription will begin on {date}", {
                            date: e
                        }, "SubscriptionCard"))))
                    }, Object.defineProperty(t.prototype, "isTurbo", {
                        get: function() {
                            return this.props.subBenefit.product && "324" === this.props.subBenefit.product.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                de = Object(y.compose)(Object(g.b)("SubscriptionCard", {
                    autoReportInteractive: !0
                }))(ce),
                le = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(B.Xa, {
                            className: "subscriptions-management-tower",
                            display: B.X.Flex,
                            flexWrap: B.Ba.Wrap,
                            margin: {
                                top: 2
                            }
                        }, this.props.type === ue.Gifts && this.props.hasPaidUpgradePromotion && d.createElement(B.Xa, {
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(E.a, {
                            alignCTA: "Left",
                            roundedBottom: !0,
                            roundedTop: !0
                        })), this.renderSubCards())
                    }, t.prototype.renderSubCards = function() {
                        for (var e = [], t = !1, n = 0, r = this.props.subscriptions; n < r.length; n++) {
                            var i = r[n];
                            if (i && this.filterSubType(i)) {
                                var a = d.createElement(B.Xa, {
                                    key: "subscription-" + i.id,
                                    margin: {
                                        right: 2
                                    }
                                }, d.createElement(de, {
                                    currentUserID: this.props.currentUserID,
                                    subBenefit: i,
                                    turboBadge: this.props.turboBadge
                                }));
                                i.purchasedWithPrime ? (t = !0, e.unshift(a)) : e.push(a)
                            }
                        }
                        return this.props.type === ue.Paid && this.props.hasPrime && !t && e.unshift(d.createElement(O, {
                            key: "prime-subscription-available"
                        })), e
                    }, t.prototype.filterSubType = function(e) {
                        return !!e && (!(this.props.type !== ue.Other || !e.product || "324" !== e.product.id) || !(this.props.type === ue.Other || !e.user))
                    }, t
                }(d.Component),
                pe = Object(y.compose)(Object(g.b)("SubscriptionsManagementTower", {
                    autoReportInteractive: !0
                }))(le),
                me = n("sEB7");
            (oe || (oe = {})).EmptyMessage = "SubscriptionsEmptyMessage",
                function(e) {
                    e.Paid = "Paid", e.Gifts = "Gifts", e.Mobile = "Mobile", e.Other = "Other"
                }(ue || (ue = {}));
            var be = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractiveIfReady(), this.reportSubCount()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractiveIfReady(), this.reportSubCount()
                }, t.prototype.render = function() {
                    if (!this.props.visible) return null;
                    if (this.props.data.currentUser) {
                        if (this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.edges) {
                            var e = this.props.data.currentUser.subscriptionBenefits.edges.map(function(e) {
                                return e.node
                            });
                            if (e.length < 1 || this.props.subscriptionType === ue.Other && !this.hasOtherTypeSub(e)) return this.renderEmptyMessage();
                            var t = this.props.data.currentUser.subscriptionBenefits.edges.some(function(e) {
                                return !!(e && e.node && e.node.product && e.node.product.self && e.node.product.self.paidUpgradePromotion)
                            });
                            return d.createElement(B.Xa, {
                                className: "subscriptions-management-tab"
                            }, d.createElement(pe, {
                                currentUserID: this.props.data.currentUser.id,
                                hasPaidUpgradePromotion: t,
                                hasPrime: this.props.data.currentUser.hasPrime,
                                subscriptions: e,
                                turboBadge: this.getTurboBadge(),
                                type: this.props.subscriptionType
                            }), d.createElement(v.a, {
                                enabled: this.props.data.currentUser && this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.pageInfo.hasNextPage,
                                loadMore: this.props.loadMore
                            }))
                        }
                        return this.renderEmptyMessage()
                    }
                    return this.props.data.loading ? d.createElement(B.Za, {
                        fillContent: !0
                    }) : this.props.data.error ? d.createElement(p.a, {
                        message: Object(l.d)("Unable to show your subscriptions at this time. Please try again later.", "SubscriptionsManagementTab")
                    }) : void 0
                }, t.prototype.renderEmptyMessage = function() {
                    var e = "";
                    return e = this.props.subscriptionType === ue.Paid ? Object(l.d)("Any active subscriptions you purchase will show up here.", "SubscriptionsManagementTab") : this.props.subscriptionType === ue.Gifts ? Object(l.d)("Any active gift subscriptions you have will show up here.", "SubscriptionsManagementTab") : this.props.subscriptionType === ue.Mobile ? Object(l.d)("Any active mobile subscriptions you have will show up here.", "SubscriptionsManagementTab") : Object(l.d)("Any other subscriptions you have will show up here.", "SubscriptionsManagementTab"), d.createElement(B.yb, {
                        background: B.r.Base,
                        border: !0,
                        "data-a-target": oe.EmptyMessage + "-" + this.props.subscriptionType,
                        "data-test-selector": oe.EmptyMessage,
                        display: B.X.Flex,
                        justifyContent: B.Wa.Center,
                        padding: 3
                    }, d.createElement(B.W, null, e))
                }, t.prototype.getSubCount = function() {
                    var e = this;
                    return this.props.data.currentUser && this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.edges ? this.props.data.currentUser.subscriptionBenefits.edges.reduce(function(t, n) {
                        return e.props.subscriptionType !== ue.Other && n.node && n.node.user ? ++t : e.props.subscriptionType === ue.Other && n.node && !n.node.user && n.node.product && "324" === n.node.product.id ? ++t : t
                    }, 0) : 0
                }, t.prototype.getTurboBadge = function() {
                    var e = void 0;
                    return this.props.data.currentUser && this.props.data.currentUser.availableBadges && null === (e = this.props.data.currentUser.availableBadges.find(function(e) {
                        return !!e && "turbo" === e.setID
                    })) && (e = void 0), e
                }, t.prototype.reportSubCount = function() {
                    this.props.data.currentUser && this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.edges && this.props.reportSubCount(this.getSubCount())
                }, t.prototype.reportInteractiveIfReady = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.hasOtherTypeSub = function(e) {
                    return this.props.subscriptionType === ue.Other && e.some(function(e) {
                        return !(!e || !e.product || "324" !== e.product.id)
                    })
                }, t
            }(d.Component);

            function fe(e) {
                switch (e) {
                    case ue.Gifts:
                        return {
                            filter: "GIFT",
                            platform: "WEB"
                        };
                    case ue.Mobile:
                        return {
                            filter: "PLATFORM",
                            platform: "ANDROID"
                        };
                    case ue.Other:
                        return {
                            filter: "ALL",
                            platform: "WEB"
                        };
                    case ue.Paid:
                    default:
                        return {
                            filter: "PLATFORM",
                            platform: "WEB"
                        }
                }
            }
            var ge, he, ve = Object(i.compose)(Object(k.a)(me, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 100,
                                cursor: "",
                                filter: fe(e.subscriptionType).filter,
                                platform: fe(e.subscriptionType).platform
                            }
                        }
                    },
                    props: function(e) {
                        return u.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: me,
                                    variables: u.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser && e.data.currentUser.subscriptionBenefits && e.data.currentUser.subscriptionBenefits.edges && e.data.currentUser.subscriptionBenefits.edges[e.data.currentUser.subscriptionBenefits.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            r = [];
                                        return e.currentUser && e.currentUser.subscriptionBenefits && e.currentUser.subscriptionBenefits.edges && n.currentUser && n.currentUser.subscriptionBenefits && n.currentUser.subscriptionBenefits.edges && (r = Object(S.c)(e.currentUser.subscriptionBenefits.edges, n.currentUser.subscriptionBenefits.edges)), {
                                            currentUser: u.__assign({}, n.currentUser, {
                                                subscriptionBenefits: u.__assign({}, n.currentUser && n.currentUser.subscriptionBenefits ? n.currentUser.subscriptionBenefits : {}, {
                                                    edges: r
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.b)("SubscriptionsManagementTab"))(be),
                ke = n("3lt/");
            n("FWo1");
            ! function(e) {
                e.PaidTab = "SubscriptionsPaidTab", e.GiftsTab = "SubscriptionsGiftsTab", e.MobileTab = "SubscriptionsMobileTab", e.OtherTab = "SubscriptionsOtherTab"
            }(ge || (ge = {})),
            function(e) {
                e.Gifts = "GIFTS", e.Paid = "PAID", e.Mobile = "MOBILE", e.Other = "OTHER"
            }(he || (he = {}));
            var Se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentTab: t.getTabFromQueryParam(t.props),
                            paidWebSubCount: 0,
                            giftSubCount: 0,
                            mobileSubCount: 0,
                            otherSubCount: 0
                        }, t.toggleTab = function(e) {
                            if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-tab-title")) {
                                case he.Gifts:
                                    t.setState({
                                        currentTab: he.Gifts
                                    });
                                    break;
                                case he.Mobile:
                                    t.setState({
                                        currentTab: he.Mobile
                                    });
                                    break;
                                case he.Other:
                                    t.setState({
                                        currentTab: he.Other
                                    });
                                    break;
                                case he.Paid:
                                default:
                                    t.setState({
                                        currentTab: he.Paid
                                    })
                            }
                        }, t.updateWebSubCount = function(e) {
                            t.state.paidWebSubCount !== e && t.setState({
                                paidWebSubCount: e
                            })
                        }, t.updateGiftSubCount = function(e) {
                            t.state.giftSubCount !== e && t.setState({
                                giftSubCount: e
                            })
                        }, t.updateOtherSubCount = function(e) {
                            t.state.otherSubCount !== e && t.setState({
                                otherSubCount: e
                            })
                        }, t.updateMobileSubCount = function(e) {
                            t.state.mobileSubCount !== e && t.setState({
                                mobileSubCount: e
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle("Subscriptions")
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? d.createElement(B.yb, {
                            alignContent: B.e.Center,
                            className: "subscriptions-management",
                            margin: 4
                        }, d.createElement(h.b, {
                            suppressScrollX: !0
                        }), d.createElement(B.W, {
                            type: B.Ob.H2
                        }, Object(l.d)("Subscriptions", "SubscriptionsManagementPage")), this.renderTabs(), this.renderTabContent(), d.createElement("div", {
                            className: "subscriptions-management__balloon-spacer"
                        }), " ") : (this.props.login(), d.createElement(p.a, {
                            message: Object(l.d)("You must be logged in to view this page", "SubscriptionsManagementPage")
                        }))
                    }, t.prototype.renderTabs = function() {
                        return d.createElement(B.Ab, null, d.createElement(B.zb, {
                            active: this.state.currentTab === he.Paid,
                            "data-a-target": he.Paid,
                            "data-tab-title": he.Paid,
                            onClick: this.toggleTab
                        }, Object(l.d)("Your Subscriptions", "SubscriptionsManagementPage")), d.createElement(B.zb, {
                            active: this.state.currentTab === he.Gifts,
                            "data-a-target": he.Gifts,
                            "data-tab-title": he.Gifts,
                            onClick: this.toggleTab
                        }, Object(l.d)("Gift Subscriptions", "SubscriptionsManagementPage")), d.createElement(m.a, {
                            name: "mobile_subs_feature_flag"
                        }, d.createElement(B.zb, {
                            active: this.state.currentTab === he.Mobile,
                            "data-a-target": he.Mobile,
                            "data-tab-title": he.Mobile,
                            onClick: this.toggleTab
                        }, Object(l.d)("Mobile Subscriptions", "SubscriptionsManagementPage"))), d.createElement(B.zb, {
                            active: this.state.currentTab === he.Other,
                            "data-a-target": he.Other,
                            "data-tab-title": he.Other,
                            onClick: this.toggleTab
                        }, Object(l.d)("Other Subscriptions", "SubscriptionsManagementPage")))
                    }, t.prototype.renderTabContent = function() {
                        var e, t, n;
                        switch (this.state.currentTab) {
                            case he.Gifts:
                                e = ue.Gifts, t = ge.GiftsTab, n = this.updateGiftSubCount;
                                break;
                            case he.Other:
                                e = ue.Other, t = ge.OtherTab, n = this.updateOtherSubCount;
                                break;
                            case he.Mobile:
                                e = ue.Mobile, t = ge.MobileTab, n = this.updateMobileSubCount;
                                break;
                            case he.Paid:
                            default:
                                t = ge.PaidTab, e = ue.Paid, n = this.updateWebSubCount
                        }
                        return d.createElement(B.Xa, {
                            margin: {
                                top: 2
                            }
                        }, d.createElement(ve, {
                            "data-test-selector": t,
                            reportSubCount: n,
                            subscriptionType: e,
                            visible: !0
                        }))
                    }, t.prototype.getTabFromQueryParam = function(e) {
                        var t = c.parse(e.location.search).tab;
                        if (t) {
                            var n = t.toUpperCase();
                            if ([he.Paid, he.Mobile, he.Gifts, he.Other].includes(n)) return n
                        }
                        return he.Paid
                    }, t
                }(d.Component),
                ye = Object(i.compose)(Object(g.b)("SubsManagementPage", {
                    autoReportInteractive: !0,
                    destination: f.a.SubsManagementPage
                }), Object(b.a)({
                    location: ke.PageviewLocation.SubsManagementPage
                }))(Se);
            var Ee = Object(r.connect)(function(e) {
                var t = Object(o.e)(e);
                return {
                    isLoggedIn: Object(o.f)(e),
                    currentUserIsStaff: !!(t && t.roles && t.roles.isStaff)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    login: function() {
                        return s.e(a.a.SubsManagementPage)
                    }
                }, e)
            })(ye);
            n.d(t, "SubscriptionsManagementPage", function() {
                return Ee
            })
        },
        VrOd: function(e, t, n) {},
        Vscg: function(e, t, n) {},
        WAGi: function(e, t, n) {},
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
                            return r.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), s = r.__assign({}, t, {
                                            body: a
                                        }), [4, this._fetch(e, s)];
                                    case 1:
                                        return o = u.sent(), [4, this.constructLegacyAPIResponse(o)];
                                    case 2:
                                        return [2, u.sent()]
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
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("o4DC");

            function i(e) {
                return e && Object(r.c)(e) || ""
            }
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
        l1sD: function(e, t, n) {},
        lZdE: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        sEB7: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SubscriptionsManagement_SubscriptionBenefits"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
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
                                value: "cursor"
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
                                value: "filter"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SubscriptionBenefitFilter"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platform"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SubscriptionPlatform"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "availableBadges"
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
                                        value: "subscriptionBenefits"
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
                                                value: "limit"
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
                                                value: "cursor"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "criteria"
                                        },
                                        value: {
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "filter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "filter"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "platform"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "platform"
                                                    }
                                                }
                                            }]
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
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "subscriptionBenefit"
                                                            },
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
                    end: 536
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/pages/subscriptions-management/models/subscription-benefit-fragment.gql"\nquery SubscriptionsManagement_SubscriptionBenefits($limit: Int $cursor: Cursor $filter: SubscriptionBenefitFilter $platform: SubscriptionPlatform) {\ncurrentUser {\nid\nhasPrime\navailableBadges {\n...badge\n}\nsubscriptionBenefits(first: $limit after: $cursor criteria: {filter: $filter platform: $platform}) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n...subscriptionBenefit\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(a(n("IKE4").definitions)), r.definitions = r.definitions.concat(a(n("KXaD").definitions)), e.exports = r
        },
        vHGB: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("ZEQw"),
                s = n("Ue10"),
                o = (n("E78O"), n("/7QA")),
                u = n("2xye"),
                c = function(e) {
                    e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), o.p.tracking.track(u.SpadeEventType.ChatBadgeClick, e)
                };
            n.d(t, "a", function() {
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
                        c({
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
                        u = i.createElement("img", {
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
                    return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (u = i.createElement("a", {
                        href: this.targetURL,
                        onClick: this.onBadgeClickHandler,
                        target: "_blank",
                        "data-a-target": "chat-badge"
                    }, u)), this.state.isHovering ? i.createElement(s.Rb, {
                        align: s.Sb.Left,
                        "data-a-target": "chat-badge",
                        display: s.X.Inline,
                        key: n,
                        label: t,
                        offsetY: "0.9rem"
                    }, u) : u
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
        wUQP: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return c
            });
            var r, i, a = n("/7QA"),
                s = n("kRBY");

            function o(e) {
                var t = a.p.store.getState(),
                    n = a.b.get(e, r.Off);
                return !!(n === r.On || n === r.StaffOnly && Object(s.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(r || (r = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(i || (i = {}));
            var u = Math.pow(2, 32);

            function c(e) {
                var t = a.b.get(e, [0, i.Disabled]),
                    n = t[0],
                    r = t[1],
                    o = a.p.session.deviceID,
                    c = a.p.store.getState();
                return !(r !== i.Enabled || !Object(s.g)(c)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, r = 0, i = e.length; r < i; r++) n ^= e.charCodeAt(r), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(o + "-" + e) / u < n
            }
        }
    }
]);