(window.webpackJsonp = window.webpackJsonp || []).push([
    [51], {
        "/jfp": function(e, t, n) {
            e.exports = n.p + "assets/turbo_avatar_1x-7924691a22be364929f8.png"
        },
        "0VVg": function(e, t, n) {
            "use strict";
            var i, r, a = n("mrSG"),
                s = n("b6Yk");
            ! function(e) {
                e.FULL_REFUND = "FULL_REFUND", e.NO_REFUND = "NO_REFUND"
            }(i || (i = {})),
            function(e) {
                e.CANCEL_BENEFITS = "CANCEL_BENEFITS", e.DO_NOT_RENEW_BENEFITS = "DO_NOT_RENEW_BENEFITS"
            }(r || (r = {}));
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
                                        cancellation_directive: i.FULL_REFUND,
                                        benefits_directive: r.CANCEL_BENEFITS
                                    }, c && (l.gift_origin_id = c, l.cancellation_directive = i.NO_REFUND), [4, s.a.putOrThrow(d, {
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
                                        cancellation_directive: i.NO_REFUND,
                                        benefits_directive: r.DO_NOT_RENEW_BENEFITS
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
                return i
            }), n.d(t, !1, function() {
                return r
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
                return i
            });
            var i = {
                Prime: "prime",
                Tier1: "1000",
                Tier2: "2000",
                Tier3: "3000",
                Custom: "Custom"
            }
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
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("wUQP"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.incremental && Object(a.c)(this.props.name) || Object(a.b)(this.props.name) ? this.props.children : null
                    }, t
                }(r.Component),
                o = s;
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            })
        },
        "7SjK": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("TSYQ"),
                s = n("/7QA"),
                o = n("GnwI"),
                u = n("Ue10"),
                c = (n("GOKC"), r.createElement(u.Fb, {
                    alignItems: u.f.Center,
                    background: u.r.Overlay,
                    borderRadius: u.x.Small,
                    className: "emote-button__lock",
                    color: u.O.Overlay,
                    "data-test-selector": "emote-button-lock",
                    display: u.X.InlineFlex,
                    justifyContent: u.Xa.Center,
                    position: u.kb.Absolute,
                    zIndex: u.jc.Above
                }, r.createElement(u.tb, {
                    asset: u.ub.Lock,
                    height: 10,
                    width: 10
                }))),
                d = function(e) {
                    var t = a("emote-button__link", {
                            "emote-button__link--locked": !e.onClick
                        }),
                        n = e.emote,
                        i = n.displayName,
                        d = n.srcSet;
                    if (!d) return null;
                    var l = r.createElement("img", {
                        className: "emote-picker__image",
                        srcSet: d,
                        alt: i
                    });
                    if (e.isCriticalImage) {
                        for (var p = d.split(" ")[0], m = {}, b = 0, f = d.split(","); b < f.length; b++) {
                            var g = f[b].trim().split(" "),
                                h = g[1],
                                v = g[0];
                            m[h] = v
                        }
                        l = r.createElement(o.a, {
                            className: "emote-picker__emote-image",
                            src: p,
                            srcSet: m,
                            alt: i || ""
                        })
                    }
                    return r.createElement("div", {
                        className: "emote-button"
                    }, r.createElement(u.Zb, {
                        label: i || Object(s.d)("Emote", "EmoteButton"),
                        direction: u.bc.Bottom
                    }, r.createElement(u.Qa, {
                        display: u.X.Flex,
                        alignItems: u.f.Center,
                        justifyContent: u.Xa.Center
                    }, r.createElement("button", {
                        "data-test-selector": "emote-button-clickable",
                        className: t,
                        "aria-label": i,
                        name: i,
                        onClick: e.onClick ? e.onClick.bind(null, e.emote) : void 0,
                        "data-a-target": i
                    }, r.createElement("figure", null, e.locked ? c : null, l)))))
                },
                l = (n("VrOd"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickEmote = function(e) {
                            t.props.onClickEmote && t.props.onClickEmote(e, t.props.context)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.emotes.map(function(t, n) {
                                return r.createElement(u.Ya, {
                                    key: "emote-button-padder-" + t.id + "--" + t.setID,
                                    padding: {
                                        left: e.props.spaced ? .5 : 0
                                    }
                                }, r.createElement(d, {
                                    key: "emote-button-" + t.id + "--" + t.setID,
                                    emote: t,
                                    isCriticalImage: 0 === n,
                                    locked: e.props.locked || t.isLocked,
                                    onClick: e.props.locked ? void 0 : e.handleClickEmote
                                }))
                            });
                        return r.createElement(u.Ya, {
                            display: u.X.Flex,
                            flexWrap: u.Ba.Wrap,
                            justifyContent: u.Xa.Center
                        }, t)
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        BLKr: function(e, t, n) {},
        CDqf: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                s = n("Ue10"),
                o = (n("WAGi"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Fb, {
                            borderRadius: this.getBannerBorderRadius(),
                            className: "sub-promo-banner",
                            display: s.X.Flex
                        }, this.getCTA())
                    }, t.prototype.getCTA = function() {
                        var e = this.props.alignCTA,
                            t = "Left" === e ? "Right" : "Left",
                            n = r.createElement(s.Ya, {
                                className: "sub-promo-banner__triangle-" + e.toLowerCase()
                            }),
                            i = r.createElement(s.Fb, {
                                borderRadius: this.getChildBorderRadius(e),
                                className: "sub-promo-banner__promo-price",
                                display: s.X.Flex,
                                flexDirection: s.Aa.Column,
                                justifyContent: s.Xa.Center
                            }, r.createElement(s.Ya, {
                                display: s.X.Flex,
                                justifyContent: s.Xa.Center
                            }, r.createElement(s.Ya, {
                                margin: {
                                    top: .5
                                }
                            }, r.createElement(s.W, {
                                className: "sub-promo-banner__currency-symbol",
                                color: s.O.Overlay
                            }, "$1".substring(0, 1))), r.createElement(s.W, {
                                bold: !0,
                                className: "sub-promo-banner__currency-number",
                                color: s.O.Overlay
                            }, "$1".substring(1))), r.createElement(s.W, {
                                className: "sub-promo-banner__subs-cta",
                                color: s.O.Overlay
                            }, Object(a.d)("SUBS", "SubPromoBanner"))),
                            o = r.createElement(s.Fb, {
                                borderLeft: !1,
                                borderRadius: this.getChildBorderRadius(t),
                                className: "sub-promo-banner__cta",
                                display: s.X.Flex,
                                flexDirection: s.Aa.Column,
                                flexGrow: 1,
                                justifyContent: s.Xa.Center,
                                padding: {
                                    left: 2,
                                    right: 3,
                                    y: 1
                                }
                            }, r.createElement(s.W, {
                                bold: !0,
                                color: s.O.Overlay,
                                fontSize: s.Ca.Size4
                            }, Object(a.d)("Subtember is here!", "SubPromoBanner")), r.createElement(s.W, {
                                color: s.O.Overlay
                            }, Object(a.d)("Make the most of your Gift Sub this September by continuing at Tier 1 for <x:strong>only {promoPrice}</x:strong>. {promoLink}", {
                                promoLink: r.createElement(s.U, {
                                    key: "SubPromoBannerLink",
                                    targetBlank: !0,
                                    to: "https://link.twitch.tv/subtember",
                                    type: s.V.Overlay
                                }, Object(a.d)("Learn More", "SubPromoBanner")),
                                promoPrice: "$1",
                                "x:strong": function(e) {
                                    return r.createElement(s.W, {
                                        bold: !0,
                                        key: "SubPromoBannerBoldText",
                                        type: s.Wb.Span
                                    }, e)
                                }
                            }, "SubPromoBanner")));
                        return "Left" === e ? r.createElement(r.Fragment, null, i, n, o) : r.createElement(r.Fragment, null, o, n, i)
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
                        var t, n, i, r = this.props,
                            a = r.roundedBottom,
                            o = r.roundedTop;
                        return a && o ? ((t = {})["bottom" + e] = s.x.Large, t["top" + e] = s.x.Large, t) : a ? ((n = {})["bottom" + e] = s.x.Large, n) : o ? ((i = {})["top" + e] = s.x.Large, i) : {}
                    }, t
                }(r.Component));
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
            var i = {
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
                                value: "pendingSubscription"
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
                                        value: "isCancelable"
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
                                            value: "150"
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
                    end: 559
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nfragment subscriptionBenefit on SubscriptionBenefit {\nid\noriginID\nendsAt\nisRefundable\nplatform\ngift {\ngifter {\nid\nlogin\ndisplayName\n}\nisGift\n}\npendingSubscription {\noriginID\nprice\nstartsAt\ntype\nisCancelable\n}\nproduct {\nid\ntier\nprice\nname\ndisplayName\nurl\nself {\npaidUpgradePromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\n}\npurchasedWithPrime\nrenewsAt\ntier\nuser {\nid\ndisplayName\nlogin\nbannerImageURL\nprofileImageURL(width: 150)\nself {\ndisplayBadges {\n...badge\n}\n}\nroles {\nisPartner\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = i
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
                return b
            }), n.d(t, "d", function() {
                return f
            });
            var i = n("mrSG"),
                r = n("lZdE"),
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
                u = new Set([457, 33, 42, 0]);

            function c(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = s[e.token] || e.token,
                            r = o.reduce(function(t, n) {
                                var i = t;
                                return i && (i = i.concat(", ")), i.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(i.__assign({
                            displayName: n,
                            srcSet: r
                        }, e))
                    }, r = 0, a = e; r < a.length; r++) {
                    n(a[r])
                }
                return t
            }

            function d(e, t) {
                var n = c(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return i.__assign({}, e, {
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
                for (var t = [], n = 0, i = e; n < i.length; n++) {
                    var r = i[n];
                    if (r && r.id && r.emotes) {
                        for (var a = {
                                id: r.id,
                                emotes: []
                            }, s = 0, o = r.emotes; s < o.length; s++) {
                            var u = o[s];
                            u && u.id && u.token && a.emotes.push(u)
                        }
                        t.push(a)
                    }
                }
                return t
            }

            function m(e) {
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var a = r[i];
                    if (a && a.id && a.emotes) {
                        var s = {
                            id: a.id,
                            emotes: d(l(a.emotes), a.id)
                        };
                        a.owner && (s.owner = a.owner), u.has(parseInt(a.id, 10)) ? t.push(s) : n.push(s)
                    }
                }
                return n.concat(t)
            }
            var b = function(e, t, n) {
                    var i = n || a.d,
                        s = [],
                        o = [],
                        u = [],
                        c = new RegExp("^" + Object(r.a)(t), "i");
                    return e.forEach(function(e) {
                        i[e.token] ? u.push(e) : e.token.match(c) ? s.push(e) : o.push(e)
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), u.sort(function(e, t) {
                        return i[t.token].count - i[e.token].count
                    }), u.concat(s).concat(o)
                },
                f = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        UGMo: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                r = n("fvjX"),
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
                _ = (n("BLKr"), function() {
                    return d.createElement(B.Fb, {
                        className: "available-prime-sub-card",
                        "data-a-target": "available-prime-sub-card",
                        border: !0,
                        background: B.r.Base,
                        display: B.X.Flex,
                        padding: 2,
                        flexDirection: B.Aa.Column,
                        alignItems: B.f.Center,
                        justifyContent: B.Xa.Center,
                        textAlign: B.Sb.Center,
                        margin: {
                            bottom: 2,
                            right: 2
                        }
                    }, d.createElement(B.tb, {
                        type: B.vb.Prime,
                        asset: B.ub.Crown,
                        height: 80,
                        width: 80
                    }), d.createElement(B.Qa, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(B.W, {
                        bold: !0,
                        type: B.Wb.H3
                    }, Object(l.d)("Use your free channel subscription", "AvailablePrimeSubCard"))), d.createElement(B.Qa, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(B.W, null, Object(l.d)("Directly support your favorite streamer, and you can subscribe again for free every 30 days.", "AvailablePrimeSubCard"))), d.createElement(B.Qa, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(B.W, null, Object(l.d)('To use your free subscription, go to a channel of your choice and select "Subscribe Free"', "AvailablePrimeSubCard"))))
                }),
                O = n("/jfp"),
                N = n.n(O),
                C = n("yLwq"),
                T = n("QVaV"),
                F = n("cMjZ"),
                w = n("DMoW"),
                P = n("fQWD"),
                D = n("aCAx"),
                U = n("cZKs"),
                I = n("b6Yk");
            var R, j;
            n("l1sD");
            ! function(e) {
                e.ErrorMessage = "DisableGiftModalErrorMessage", e.CancelButton = "DisableGiftCancelButton", e.ConfirmButton = "DisableGiftConfirmButton"
            }(R || (R = {})),
            function(e) {
                e[e.Success = 0] = "Success", e[e.Error = 1] = "Error", e[e.InProgress = 2] = "InProgress", e[e.Unconfirmed = 3] = "Unconfirmed"
            }(j || (j = {}));
            var x, A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            requestStatus: j.Unconfirmed
                        }, t.onConfirmDisableGift = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i = this;
                                return u.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            e = this.props.currentUserID, t = this.props.originID, n = this.props.subscriptionProductID, this.setState({
                                                requestStatus: j.InProgress
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                                return u.__awaiter(this, void 0, void 0, function() {
                                                    var i, r;
                                                    return u.__generator(this, function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                i = {
                                                                    recipient_id: e,
                                                                    origin_id: t,
                                                                    product_id: n
                                                                }, a.label = 1;
                                                            case 1:
                                                                return a.trys.push([1, 3, , 4]), [4, I.a.postOrThrow("/v5/subscriptions/gift/cancel", {
                                                                    body: i
                                                                }, {
                                                                    version: 5
                                                                })];
                                                            case 2:
                                                                return a.sent(), [3, 4];
                                                            case 3:
                                                                return r = a.sent(), [2, Promise.reject(r)];
                                                            case 4:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }(e, t, n)];
                                        case 2:
                                            return r.sent(), this.setState({
                                                requestStatus: j.Success
                                            }, function() {
                                                i.props.onSuccess()
                                            }), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                requestStatus: j.Error
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(B.Fb, {
                            className: "disable-gift-modal",
                            background: B.r.Base,
                            padding: 2
                        }, d.createElement(B.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, {
                            bold: !0
                        }, Object(l.d)("Disable Gift Subscription Benefits?", "DisableGiftModal"))), d.createElement(B.W, null, Object(l.d)("Are you sure you wish you disable your Gift Subscription benefits to {channelName}? You won't be able to re-enable them.", {
                            channelName: this.props.formattedChannelDisplayName
                        }, "DisableGiftModal")), this.renderErrorDisplay(), d.createElement(B.Ya, {
                            margin: {
                                top: 2
                            },
                            display: B.X.Flex
                        }, d.createElement(B.Ya, {
                            margin: {
                                right: 1
                            }
                        }, d.createElement(B.z, {
                            state: this.getConfirmButtonState(),
                            type: B.F.Alert,
                            onClick: this.onConfirmDisableGift,
                            "data-test-selector": R.ConfirmButton
                        }, Object(l.d)("Disable Benefits", "DisableGiftModal"))), d.createElement(B.z, {
                            onClick: this.props.onCancel,
                            "data-test-selector": R.CancelButton
                        }, Object(l.d)("Cancel", "DisableGiftModal"))), d.createElement(U.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t.prototype.renderErrorDisplay = function() {
                        return this.state.requestStatus === j.Error ? d.createElement(B.Fb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error",
                            "data-test-selector": R.ErrorMessage
                        }, d.createElement(B.W, null, Object(l.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "DisableGiftModal"))) : null
                    }, t.prototype.getConfirmButtonState = function() {
                        switch (this.state.requestStatus) {
                            case j.InProgress:
                                return B.E.Loading;
                            case j.Success:
                                return B.E.Success;
                            case j.Unconfirmed:
                            case j.Error:
                            default:
                                return B.E.Default
                        }
                    }, t
                }(d.Component),
                L = n("u5aL"),
                M = n("3Bft"),
                G = n("0VVg");
            ! function(e) {
                e.ChangeTierButton = "ChangeTierButton", e.ChangePaymentMethodButton = "ChangePaymentMethodButton", e.DoNotRenewButton = "DoNotRenewButton", e.CancelGiftButton = "CancelGiftButton", e.CancelPaidUpgrade = "CancelPaidUpgrade", e.CancelAndRefundButton = "CancelAndRefundButton"
            }(x || (x = {}));
            var W = function(e) {
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
                            return t.renderInteractable(x.ChangePaymentMethodButton, Object(l.d)("Change Payment Method", "EditSubscriptionBalloon"), {
                                linkTo: "/payments"
                            })
                        }, t.renderDoNotRenewButton = function() {
                            return t.props.subscriptionBenefit.product ? t.renderInteractable(x.DoNotRenewButton, Object(l.d)("Don't Renew Subscription", "EditSubscriptionBalloon"), {
                                linkTo: "/unsubscribe/" + t.props.subscriptionBenefit.product.name,
                                type: B.Wa.Alert
                            }) : null
                        }, t.renderCancelAndRefundButton = function() {
                            return t.props.subscriptionBenefit.product ? t.renderInteractable(x.CancelAndRefundButton, Object(l.d)("Cancel And Refund", "EditSubscriptionBalloon"), {
                                type: B.Wa.Alert,
                                linkTo: "/unsubscribe/" + t.props.subscriptionBenefit.product.name + "?cancel=true"
                            }) : null
                        }, t.renderDisableGiftButton = function() {
                            return null !== t.props.subscriptionBenefit.pendingSubscription ? null : t.renderInteractable(x.CancelGiftButton, Object(l.d)("Disable Gift Benefits", "EditSubscriptionBalloon"), {
                                type: B.Wa.Alert,
                                onClick: t.onDisableGiftBenefits
                            })
                        }, t.renderCancelPaidUpgrade = function() {
                            var e = "";
                            return t.props.subscriptionBenefit.pendingSubscription && (t.props.subscriptionBenefit.pendingSubscription.type === w.L.GIFT_TO_PAID ? e = Object(l.d)("Cancel Paid Subscription", "EditSubscriptionBalloon") : t.props.subscriptionBenefit.pendingSubscription.type === w.L.DNR_TO_RESUB_RECURRING ? e = Object(l.d)("Cancel Recurring Subscription", "EditSubscriptionBalloon") : t.props.subscriptionBenefit.pendingSubscription.type === w.L.DNR_TO_RESUB_NONRECURRING && (e = Object(l.d)("Cancel One Month Subscription Extension", "EditSubscriptionBalloon"))), t.renderInteractable(x.CancelPaidUpgrade, e, {
                                type: B.Wa.Alert,
                                onClick: t.onCancelPendingSubscription
                            })
                        }, t.onDisableGiftBenefits = function() {
                            var e = t.props.subscriptionBenefit;
                            t.props.currentUserID && e.user && e.product && e.originID && t.props.showDisableGiftModal({
                                onCancel: t.props.closeModal,
                                onSuccess: t.props.onDisableGiftSuccess,
                                formattedChannelDisplayName: Object(T.a)(e.user.login, e.user.displayName),
                                currentUserID: t.props.currentUserID,
                                originID: e.originID,
                                subscriptionProductID: e.product.id
                            })
                        }, t.onCancelPendingSubscription = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return u.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = this.props.subscriptionBenefit, this.props.currentUserID && e.product && e.product.name && e.originID && e.pendingSubscription ? [4, G.a.cancelPaidUpgrade({
                                                userID: this.props.currentUserID,
                                                productName: e.product.name,
                                                originID: e.pendingSubscription.originID,
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
                        if (this.props.subscriptionBenefit.platform === w.V.WEB) {
                            var n = this.renderInteractables();
                            if (n.length < 1) return null;
                            t = n
                        } else t = d.createElement(B.Ya, {
                            padding: {
                                x: 1
                            }
                        }, this.renderMobileMessage());
                        return d.createElement(B.Ya, {
                            position: B.kb.Relative
                        }, d.createElement(L.a, {
                            onClickOut: this.onClickOut
                        }, d.createElement(B.Zb, {
                            label: e
                        }, d.createElement(B.A, {
                            ariaLabel: e,
                            "data-a-target": "subscription-card-edit-button",
                            icon: B.ub.Gear,
                            onClick: this.onEditClick,
                            size: B.B.Default,
                            type: B.C.Secondary
                        })), d.createElement(B.u, {
                            direction: B.v.Left,
                            show: this.state.show,
                            size: B.w.Small,
                            tailOffset: 10
                        }, d.createElement(B.Ya, {
                            margin: {
                                y: 1
                            }
                        }, t))))
                    }, t.prototype.renderInteractables = function() {
                        var e = this.props.subscriptionBenefit,
                            t = e.gift,
                            n = [];
                        return t && t.isGift ? t && t.isGift && (n.push(this.renderDisableGiftButton()), e.pendingSubscription && e.pendingSubscription.isCancelable && n.push(this.renderCancelPaidUpgrade())) : (n.push(this.renderChangeTierButton()), e.renewsAt && (n.push(this.renderChangePaymentMethodButton()), n.push(this.renderDoNotRenewButton())), e.isRefundable && n.push(this.renderCancelAndRefundButton())), n.filter(function(e) {
                            return !!e
                        })
                    }, t.prototype.renderChangeTierButton = function() {
                        if (![M.a.Tier3, M.a.Custom].includes(this.props.subscriptionBenefit.tier) && this.props.subscriptionBenefit.user) {
                            var e = {
                                linkTo: "/subs/" + this.props.subscriptionBenefit.user.login
                            };
                            return this.renderInteractable(x.ChangeTierButton, Object(l.d)("Change Subscription Tier", "EditSubscriptionBalloon"), e)
                        }
                        return null
                    }, t.prototype.renderInteractable = function(e, t, n) {
                        return d.createElement(B.Va, u.__assign({}, n, {
                            ariaLabel: t,
                            "data-a-target": e,
                            "data-test-selector": e,
                            key: "edit-subscription-" + e
                        }), d.createElement(B.Ya, {
                            padding: 1,
                            textAlign: B.Sb.Center
                        }, d.createElement(B.W, null, t)))
                    }, t.prototype.renderMobileMessage = function() {
                        return this.props.subscriptionBenefit.platform === w.V.ANDROID ? d.createElement(B.W, null, Object(l.d)("To edit this subscription, please go to the Twitch Subscription Manager on your Android device.              <x:link>               Click here for more information.             </x:link>", {
                            "x:link": function(e) {
                                return d.createElement(B.U, {
                                    to: "https://help.twitch.tv/customer/portal/articles/2935963-how-to-purchase-and-manage-subscriptions-on-android#Manage"
                                }, e)
                            }
                        }, "EditSubscriptionBalloon")) : this.props.subscriptionBenefit.platform === w.V.IOS ? d.createElement(B.W, null, Object(l.d)("To edit this subscription, please go to your Subscription Manager on your iOS device.              <x:link>               Click here for more information.             </x:link>", {
                            "x:link": function(e) {
                                return d.createElement(B.U, {
                                    to: "https://help.twitch.tv/customer/portal/articles/2935963-how-to-purchase-and-manage-subscriptions-on-ios#Manage"
                                }, e)
                            }
                        }, "EditSubscriptionBalloon")) : null
                    }, t
                }(d.Component),
                V = Object(y.compose)(Object(g.b)("EditSubscriptionBalloon", {
                    autoReportInteractive: !0
                }))(W);
            var Y = Object(i.connect)(void 0, function(e) {
                    return Object(r.bindActionCreators)({
                        showDisableGiftModal: function(e) {
                            var t = u.__rest(e, []);
                            return Object(D.d)(A, t)
                        },
                        closeModal: D.c
                    }, e)
                })(V),
                q = n("7SjK"),
                Q = n("OpME"),
                X = n("ZEQw");

            function z(e) {
                return {
                    id: e.id,
                    setID: e.setID,
                    version: e.version,
                    title: e.title,
                    image1x: e.image1x,
                    image2x: e.image2x,
                    image4x: e.image4x,
                    clickAction: X.c,
                    clickURL: e.clickURL || ""
                }
            }
            var H, K = n("58bG");
            (H || (H = {})).HasAdFreeMessage = "HasAdFreeMessage";
            var $ = function(e) {
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
                        return d.createElement(B.Ya, null, d.createElement(L.a, {
                            onClickOut: this.onClickOut
                        }, d.createElement(B.z, {
                            type: B.F.Text,
                            onClick: this.toggleBenefitsBalloon
                        }, Object(l.d)("Show Benefits", "SubscriptionBenefitsBalloon")), d.createElement(B.u, {
                            show: this.state.show,
                            offsetX: "2rem",
                            offsetY: "-0.5rem",
                            size: B.w.Medium
                        }, d.createElement(B.Ya, {
                            padding: 2
                        }, d.createElement(B.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, {
                            bold: !0
                        }, Object(l.d)("Subscription Benefits", "SubscriptionBenefitsBalloon"))), this.renderContent()))))
                    }, t.prototype.renderContent = function() {
                        return this.props.data.user && this.props.data.user.subscriptionProducts ? d.createElement(d.Fragment, null, d.createElement(B.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Directly support the streamer", "SubscriptionBenefitsBalloon"))), this.hasAdFree && d.createElement(B.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, {
                            "data-test-selector": H.HasAdFreeMessage
                        }, Object(l.d)("Ad-free streams (with limited exceptions)", "SubscriptionBenefitsBalloon"))), this.renderSubscriberBadges(), d.createElement(B.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Chat during subscriber-only mode", "SubscriptionBenefitsBalloon"))), this.hasFastChat && d.createElement(B.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Not affected by chat slow mode", "SubscriptionBenefitsBalloon"))), this.hasSubOnlyVideoArchive && d.createElement(B.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(B.W, null, Object(l.d)("Access to sub only VODs", "SubscriptionBenefitsBalloon"))), this.renderSubscriberEmotes()) : this.props.data.loading ? d.createElement(B.ab, {
                            fillContent: !0
                        }) : null
                    }, t.prototype.renderSubscriberBadges = function() {
                        var e = [];
                        this.props.data && this.props.data.user && this.props.data.user.broadcastBadges && this.props.data.user.broadcastBadges.filter(function(e) {
                            return e && "subscriber" === e.setID
                        }).sort(this.compareBadgeVersion).forEach(function(t) {
                            if (t) {
                                var n = z(t);
                                e.push(d.createElement(P.a, {
                                    key: "subscription-benefit-badge-" + t.id,
                                    badge: n
                                }))
                            }
                        });
                        return e.length < 1 ? null : d.createElement(B.Ya, {
                            margin: {
                                bottom: 1
                            },
                            display: B.X.Flex,
                            flexWrap: B.Ba.Wrap
                        }, d.createElement(B.Qa, {
                            margin: {
                                right: .5
                            },
                            flexShrink: 1
                        }, d.createElement(B.W, null, Object(l.d)("Subscriber badges:", "SubscriptionBenefitsBalloon"))), d.createElement(B.Ya, {
                            display: B.X.Flex,
                            alignItems: B.f.Center,
                            flexShrink: 0
                        }, e))
                    }, t.prototype.renderSubscriberEmotes = function() {
                        var e = this.getEmotesFromProducts();
                        return 0 === e.length ? null : d.createElement(B.Ya, null, d.createElement(B.W, null, Object(l.d)("{count, plural, one {# subscriber emote} other {# subscriber emotes}}", {
                            count: e.length
                        }, "SubscriptionBenefitsBalloon")), d.createElement(q.a, {
                            emotes: e
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
                            return !!(e && e.self && e.self.benefit) && (e.tier !== M.a.Custom && Number(e.tier) || Number(M.a.Tier1)) <= (e.self.benefit.tier !== M.a.Custom && Number(e.self.benefit.tier) || Number(M.a.Tier1))
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
                        return Object(Q.b)(e)
                    }, t
                }(d.Component),
                Z = Object(y.compose)(Object(k.a)(K, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(g.b)("SubscriptionBenefitsBalloon"))($),
                J = n("7CzK"),
                ee = n.n(J),
                te = (n("Vscg"), function(e) {
                    var t = {
                        backgroundImage: "url(" + (e.bannerImageSrc || ee.a) + ")"
                    };
                    return d.createElement(B.Fb, {
                        background: B.r.Base,
                        className: "subscription-card-banner"
                    }, d.createElement(B.U, {
                        to: e.linkTo
                    }, d.createElement("div", {
                        className: "subscription-card-banner__background",
                        style: t
                    })))
                }),
                ne = n("KXaD");

            function ie(e, t) {
                return t || (t = new Date), t.getMonth() === e.getMonth() && e.getDate() - t.getDate() > 25 ? Object(l.i)(e, {
                    units: "day"
                }) : Object(l.i)(e)
            }
            var re;
            n("I/Sa");
            ! function(e) {
                e.TierDisplay = "TierDisplay", e.ExpiryMessage = "ExpiryMessage", e.PaidUpgradeButton = "PaidUpgradeButton", e.PaidUpgradeMessage = "PaidUpgradeMessage", e.ChannelDisplayName = "ChannelDisplayName"
            }(re || (re = {}));
            var ae, se, oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onGiftDisableSuccess = function() {
                            Object(S.d)({
                                fragment: ne,
                                fragmentName: "subscriptionBenefit",
                                id: Object(F.a)(t.props.subBenefit),
                                mutator: function(e) {
                                    return u.__assign({}, e, {
                                        platform: w.V.WEB,
                                        originID: null,
                                        isRefundable: !1,
                                        endsAt: null,
                                        gift: null,
                                        pendingSubscription: null,
                                        product: null,
                                        purchasedWithPrime: !1,
                                        renewsAt: null,
                                        tier: "1000",
                                        user: null
                                    })
                                }
                            })
                        }, t.onCancelPendingSubscriptionSuccess = function() {
                            Object(S.d)({
                                fragment: ne,
                                fragmentName: "subscriptionBenefit",
                                id: Object(F.a)(t.props.subBenefit),
                                mutator: function(e) {
                                    return u.__assign({}, e, {
                                        pendingSubscription: null
                                    })
                                }
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = this.renderPaidUpgradeButton(),
                            i = this.props.subBenefit.user && this.props.subBenefit.user.login,
                            r = null,
                            a = "",
                            s = void 0;
                        if (this.props.subBenefit.user && this.props.subBenefit.user.displayName && this.props.subBenefit.user.login) r = this.props.subBenefit.user.bannerImageURL, e = Object(T.a)(this.props.subBenefit.user.login, this.props.subBenefit.user.displayName), a = this.props.subBenefit.user.displayName, s = "/" + this.props.subBenefit.user.login, t = this.props.subBenefit.user.profileImageURL;
                        else if (this.isTurbo) a = e = Object(l.d)("Twitch Turbo", "SubscriptionCard"), s = "/settings/turbo", t = N.a;
                        else {
                            if (this.props.subBenefit.user && this.props.subBenefit.user.displayName) return null;
                            a = e = Object(l.d)("Suspended/Deactivated Broadcaster", "SubscriptionCard"), t = Object(C.a)(C.b[0], 50), s = "/"
                        }
                        return d.createElement(B.Ya, {
                            className: "subscription-card",
                            "data-a-target": "subscription-card",
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(te, {
                            bannerImageSrc: r,
                            linkTo: s
                        }), d.createElement(B.G, {
                            border: !0
                        }, d.createElement(B.H, null, d.createElement(B.U, {
                            to: s
                        }, d.createElement(B.Fb, {
                            background: B.r.Base,
                            border: !0,
                            borderRadius: B.x.Small,
                            className: "subscription-card__channel-avatar",
                            position: B.kb.Absolute
                        }, d.createElement(B.q, {
                            alt: a,
                            borderRadius: B.x.Small,
                            size: 50,
                            src: t
                        }))), d.createElement(B.Fb, {
                            background: B.r.Base,
                            padding: {
                                left: 2,
                                right: 1,
                                y: 1
                            }
                        }, d.createElement(B.Ya, {
                            className: "subscription-card__edit-button",
                            display: B.X.Flex,
                            justifyContent: B.Xa.End
                        }, d.createElement(Y, {
                            currentUserID: this.props.currentUserID,
                            onCancelPaidUpgradeSuccess: this.onCancelPendingSubscriptionSuccess,
                            onDisableGiftSuccess: this.onGiftDisableSuccess,
                            subscriptionBenefit: this.props.subBenefit
                        })), d.createElement(B.Zb, {
                            label: a,
                            offsetY: "-1rem"
                        }, d.createElement(B.Ya, {
                            display: B.X.Flex,
                            ellipsis: !0,
                            flexDirection: B.Aa.Row,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(B.U, {
                            className: "subscription-card__channel-name",
                            "data-a-target": "subscription-card__channel-name",
                            "data-test-selector": re.ChannelDisplayName,
                            hoverUnderlineNone: !0,
                            to: s,
                            type: B.V.Inherit
                        }, d.createElement(B.W, {
                            bold: !0,
                            type: B.Wb.H3,
                            ellipsis: !0
                        }, e)), this.renderVerifiedPartnerBadge())), this.renderTierDisplay(), this.renderCurrentSubscriberBadge(), this.renderGiftInfo(), this.renderBenefitRenewsOrEndsOn(), this.renderPendingSubInfo(), (n || i) && d.createElement(B.Ya, {
                            display: B.X.Flex,
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: .5
                            }
                        }, n && d.createElement(B.Ya, {
                            margin: {
                                right: .5
                            }
                        }, n), i && d.createElement(Z, {
                            channelLogin: this.props.subBenefit.user.login
                        }))))))
                    }, t.prototype.renderVerifiedPartnerBadge = function() {
                        var e = !!(this.props.subBenefit.user && this.props.subBenefit.user.roles && this.props.subBenefit.user.roles.isPartner);
                        return this.isTurbo || !e ? null : d.createElement(B.Ya, {
                            alignItems: B.f.Center,
                            display: B.X.Flex,
                            padding: {
                                left: 1
                            }
                        }, d.createElement(B.tb, {
                            asset: B.ub.Verified,
                            height: 25,
                            type: B.vb.Brand
                        }))
                    }, t.prototype.renderTierDisplay = function() {
                        return d.createElement(B.Ya, {
                            "data-test-selector": re.TierDisplay,
                            display: B.X.Flex,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(B.Fb, {
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
                        }, d.createElement(B.tb, {
                            asset: this.props.subBenefit.purchasedWithPrime ? B.ub.Crown : B.ub.Star
                        }), d.createElement(B.Qa, {
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
                        }) : this.isTurbo && this.props.turboBadge && (e = Object(l.d)("Turbo Badge", "SubscriptionCard"), t = this.props.turboBadge), t ? d.createElement(B.Ya, {
                            alignItems: B.f.Center,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.Ya, {
                            className: "subscription-card__badge"
                        }, d.createElement(P.a, {
                            badge: z(t)
                        })), d.createElement(B.Qa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, e))) : null
                    }, t.prototype.renderGiftInfo = function() {
                        var e = this.props.subBenefit.gift;
                        return e && e.isGift ? d.createElement(B.Ya, {
                            alignItems: B.f.Center,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.tb, {
                            asset: B.ub.Gift,
                            height: 25
                        }), d.createElement(B.Qa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, e.gifter ? Object(l.d)("Gift Subscription from {sender}", {
                            sender: Object(T.a)(e.gifter.login, e.gifter.displayName)
                        }, "SubscriptionCard") : Object(l.d)("Gift Subscription", "SubscriptionCard")))) : null
                    }, t.prototype.renderPaidUpgradeButton = function() {
                        var e = this.props.subBenefit;
                        if (!e.user || !e.user.login || !e.gift || !e.gift.isGift || !e.product || !e.product.url || e.pendingSubscription) return null;
                        var t = e.product,
                            n = t.url,
                            i = t.price;
                        return t.self && t.self.paidUpgradePromotion && ("2000" === t.tier ? n = t.url.slice(0, t.url.indexOf("_2000")) : "3000" === t.tier && (n = t.url.slice(0, t.url.indexOf("_3000"))), i = t.self.paidUpgradePromotion.newPrice), d.createElement(B.z, {
                            "data-test-selector": re.PaidUpgradeButton,
                            icon: B.ub.Star,
                            linkTo: n,
                            purchase: i
                        }, Object(l.d)("Continue Sub", "SubscriptionCard"))
                    }, t.prototype.renderBenefitRenewsOrEndsOn = function() {
                        var e = null,
                            t = B.ub.Timeout;
                        if (this.props.subBenefit.endsAt) {
                            if (!this.props.subBenefit.renewsAt && this.props.subBenefit.endsAt) {
                                var n = new Date(this.props.subBenefit.endsAt),
                                    i = Object(l.c)(n, {
                                        month: "short",
                                        day: "numeric"
                                    }),
                                    r = ie(n);
                                e = Object(l.d)("Benefits end {date} ({relative})", {
                                    date: i,
                                    relative: r
                                }, "SubscriptionCard"), t = B.ub.Timeout
                            } else if (this.props.subBenefit.renewsAt) {
                                var a = new Date(this.props.subBenefit.renewsAt);
                                i = Object(l.c)(a, {
                                    month: "short",
                                    day: "numeric"
                                }), r = ie(a);
                                e = Object(l.d)("Renews on {date} ({relative})", {
                                    date: i,
                                    relative: r
                                }, "SubscriptionCard"), t = B.ub.Refresh
                            }
                        } else e = Object(l.d)("Lifetime Subscription", "SubscriptionCard");
                        return null === e ? null : d.createElement(B.Ya, {
                            alignItems: B.f.Center,
                            "data-test-selector": re.ExpiryMessage,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.tb, {
                            asset: t,
                            height: 25
                        }), d.createElement(B.Qa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, e)))
                    }, t.prototype.renderPendingSubInfo = function() {
                        if (!this.props.subBenefit.pendingSubscription) return null;
                        var e = this.props.subBenefit.pendingSubscription,
                            t = Object(l.c)(new Date(e.startsAt), {
                                month: "short",
                                day: "numeric"
                            }),
                            n = null;
                        return e.type === w.L.GIFT_TO_PAID ? n = Object(l.d)("Your new Paid Subscription will begin on {date}", {
                            date: t
                        }, "SubscriptionCard") : e.type === w.L.DNR_TO_RESUB_RECURRING ? n = Object(l.d)("Your Recurring Subscription will continue on {date}", {
                            date: t
                        }, "SubscriptionCard") : e.type === w.L.DNR_TO_RESUB_NONRECURRING && (n = Object(l.d)("Your one-month Subscription extension will begin on {date}", {
                            date: t
                        }, "SubscriptionCard")), d.createElement(B.Ya, {
                            alignItems: B.f.Center,
                            "data-test-selector": re.PaidUpgradeMessage,
                            display: B.X.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(B.tb, {
                            asset: B.ub.Refresh,
                            height: 25
                        }), d.createElement(B.Qa, {
                            margin: {
                                left: .5
                            }
                        }, d.createElement(B.W, null, n)))
                    }, Object.defineProperty(t.prototype, "isTurbo", {
                        get: function() {
                            return this.props.subBenefit.product && "324" === this.props.subBenefit.product.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                ue = Object(y.compose)(Object(g.b)("SubscriptionCard", {
                    autoReportInteractive: !0
                }))(oe),
                ce = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(B.Ya, {
                            className: "subscriptions-management-tower",
                            display: B.X.Flex,
                            flexWrap: B.Ba.Wrap,
                            margin: {
                                top: 2
                            }
                        }, this.props.type === se.Gifts && this.props.hasPaidUpgradePromotion && d.createElement(B.Ya, {
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
                        for (var e = [], t = !1, n = 0, i = this.props.subscriptions; n < i.length; n++) {
                            var r = i[n];
                            if (r && this.filterSubType(r)) {
                                var a = d.createElement(B.Ya, {
                                    key: "subscription-" + r.id,
                                    margin: {
                                        right: 2
                                    }
                                }, d.createElement(ue, {
                                    currentUserID: this.props.currentUserID,
                                    subBenefit: r,
                                    turboBadge: this.props.turboBadge
                                }));
                                r.purchasedWithPrime ? (t = !0, e.unshift(a)) : e.push(a)
                            }
                        }
                        return this.props.type === se.Paid && this.props.hasPrime && !t && e.unshift(d.createElement(_, {
                            key: "prime-subscription-available"
                        })), e
                    }, t.prototype.filterSubType = function(e) {
                        return !!e && (!(this.props.type !== se.Other || !e.product || "324" !== e.product.id) || !(this.props.type === se.Other || !e.user))
                    }, t
                }(d.Component),
                de = Object(y.compose)(Object(g.b)("SubscriptionsManagementTower", {
                    autoReportInteractive: !0
                }))(ce),
                le = n("sEB7");
            (ae || (ae = {})).EmptyMessage = "SubscriptionsEmptyMessage",
                function(e) {
                    e.Paid = "Paid", e.Gifts = "Gifts", e.Mobile = "Mobile", e.Other = "Other"
                }(se || (se = {}));
            var pe = function(e) {
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
                            if (e.length < 1 || this.props.subscriptionType === se.Other && !this.hasOtherTypeSub(e)) return this.renderEmptyMessage();
                            var t = this.props.data.currentUser.subscriptionBenefits.edges.some(function(e) {
                                return !!(e && e.node && e.node.product && e.node.product.self && e.node.product.self.paidUpgradePromotion)
                            });
                            return d.createElement(B.Ya, {
                                className: "subscriptions-management-tab"
                            }, d.createElement(de, {
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
                    return this.props.data.loading ? d.createElement(B.ab, {
                        fillContent: !0
                    }) : this.props.data.error ? d.createElement(p.a, {
                        message: Object(l.d)("Unable to show your subscriptions at this time. Please try again later.", "SubscriptionsManagementTab")
                    }) : void 0
                }, t.prototype.renderEmptyMessage = function() {
                    var e = "";
                    return e = this.props.subscriptionType === se.Paid ? Object(l.d)("Any active subscriptions you purchase will show up here.", "SubscriptionsManagementTab") : this.props.subscriptionType === se.Gifts ? Object(l.d)("Any active gift subscriptions you have will show up here.", "SubscriptionsManagementTab") : this.props.subscriptionType === se.Mobile ? Object(l.d)("Any active mobile subscriptions you have will show up here.", "SubscriptionsManagementTab") : Object(l.d)("Any other subscriptions you have will show up here.", "SubscriptionsManagementTab"), d.createElement(B.Fb, {
                        background: B.r.Base,
                        border: !0,
                        "data-a-target": ae.EmptyMessage + "-" + this.props.subscriptionType,
                        "data-test-selector": ae.EmptyMessage,
                        display: B.X.Flex,
                        justifyContent: B.Xa.Center,
                        padding: 3
                    }, d.createElement(B.W, null, e))
                }, t.prototype.getSubCount = function() {
                    var e = this;
                    return this.props.data.currentUser && this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.edges ? this.props.data.currentUser.subscriptionBenefits.edges.reduce(function(t, n) {
                        return e.props.subscriptionType !== se.Other && n.node && n.node.user ? ++t : e.props.subscriptionType === se.Other && n.node && !n.node.user && n.node.product && "324" === n.node.product.id ? ++t : t
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
                    return this.props.subscriptionType === se.Other && e.some(function(e) {
                        return !(!e || !e.product || "324" !== e.product.id)
                    })
                }, t
            }(d.Component);

            function me(e) {
                switch (e) {
                    case se.Gifts:
                        return {
                            filter: "GIFT",
                            platform: "WEB"
                        };
                    case se.Mobile:
                        return {
                            filter: "PLATFORM",
                            platform: "ANDROID"
                        };
                    case se.Other:
                        return {
                            filter: "ALL",
                            platform: "WEB"
                        };
                    case se.Paid:
                    default:
                        return {
                            filter: "PLATFORM",
                            platform: "WEB"
                        }
                }
            }
            var be, fe, ge = Object(r.compose)(Object(k.a)(le, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 100,
                                cursor: "",
                                filter: me(e.subscriptionType).filter,
                                platform: me(e.subscriptionType).platform
                            }
                        }
                    },
                    props: function(e) {
                        return u.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: le,
                                    variables: u.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser && e.data.currentUser.subscriptionBenefits && e.data.currentUser.subscriptionBenefits.edges && e.data.currentUser.subscriptionBenefits.edges[e.data.currentUser.subscriptionBenefits.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = [];
                                        return e.currentUser && e.currentUser.subscriptionBenefits && e.currentUser.subscriptionBenefits.edges && n.currentUser && n.currentUser.subscriptionBenefits && n.currentUser.subscriptionBenefits.edges && (i = Object(S.c)(e.currentUser.subscriptionBenefits.edges, n.currentUser.subscriptionBenefits.edges)), {
                                            currentUser: u.__assign({}, n.currentUser, {
                                                subscriptionBenefits: u.__assign({}, n.currentUser && n.currentUser.subscriptionBenefits ? n.currentUser.subscriptionBenefits : {}, {
                                                    edges: i
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.b)("SubscriptionsManagementTab"))(pe),
                he = n("3lt/");
            n("FWo1");
            ! function(e) {
                e.PaidTab = "SubscriptionsPaidTab", e.GiftsTab = "SubscriptionsGiftsTab", e.MobileTab = "SubscriptionsMobileTab", e.OtherTab = "SubscriptionsOtherTab"
            }(be || (be = {})),
            function(e) {
                e.Gifts = "GIFTS", e.Paid = "PAID", e.Mobile = "MOBILE", e.Other = "OTHER"
            }(fe || (fe = {}));
            var ve = function(e) {
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
                                case fe.Gifts:
                                    t.setState({
                                        currentTab: fe.Gifts
                                    });
                                    break;
                                case fe.Mobile:
                                    t.setState({
                                        currentTab: fe.Mobile
                                    });
                                    break;
                                case fe.Other:
                                    t.setState({
                                        currentTab: fe.Other
                                    });
                                    break;
                                case fe.Paid:
                                default:
                                    t.setState({
                                        currentTab: fe.Paid
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
                        return this.props.isLoggedIn ? d.createElement(B.Fb, {
                            alignContent: B.e.Center,
                            className: "subscriptions-management",
                            margin: 4
                        }, d.createElement(h.b, {
                            suppressScrollX: !0
                        }), d.createElement(B.W, {
                            type: B.Wb.H2
                        }, Object(l.d)("Subscriptions", "SubscriptionsManagementPage")), this.renderTabs(), this.renderTabContent(), d.createElement("div", {
                            className: "subscriptions-management__balloon-spacer"
                        }), " ") : (this.props.login(), d.createElement(p.a, {
                            message: Object(l.d)("You must be logged in to view this page", "SubscriptionsManagementPage")
                        }))
                    }, t.prototype.renderTabs = function() {
                        return d.createElement(B.Hb, null, d.createElement(B.Gb, {
                            active: this.state.currentTab === fe.Paid,
                            "data-a-target": fe.Paid,
                            "data-tab-title": fe.Paid,
                            onClick: this.toggleTab
                        }, Object(l.d)("Your Subscriptions", "SubscriptionsManagementPage")), d.createElement(B.Gb, {
                            active: this.state.currentTab === fe.Gifts,
                            "data-a-target": fe.Gifts,
                            "data-tab-title": fe.Gifts,
                            onClick: this.toggleTab
                        }, Object(l.d)("Gift Subscriptions", "SubscriptionsManagementPage")), d.createElement(m.a, {
                            name: "mobile_subs_feature_flag"
                        }, d.createElement(B.Gb, {
                            active: this.state.currentTab === fe.Mobile,
                            "data-a-target": fe.Mobile,
                            "data-tab-title": fe.Mobile,
                            onClick: this.toggleTab
                        }, Object(l.d)("Mobile Subscriptions", "SubscriptionsManagementPage"))), d.createElement(B.Gb, {
                            active: this.state.currentTab === fe.Other,
                            "data-a-target": fe.Other,
                            "data-tab-title": fe.Other,
                            onClick: this.toggleTab
                        }, Object(l.d)("Other Subscriptions", "SubscriptionsManagementPage")))
                    }, t.prototype.renderTabContent = function() {
                        var e, t, n;
                        switch (this.state.currentTab) {
                            case fe.Gifts:
                                e = se.Gifts, t = be.GiftsTab, n = this.updateGiftSubCount;
                                break;
                            case fe.Other:
                                e = se.Other, t = be.OtherTab, n = this.updateOtherSubCount;
                                break;
                            case fe.Mobile:
                                e = se.Mobile, t = be.MobileTab, n = this.updateMobileSubCount;
                                break;
                            case fe.Paid:
                            default:
                                t = be.PaidTab, e = se.Paid, n = this.updateWebSubCount
                        }
                        return d.createElement(B.Ya, {
                            margin: {
                                top: 2
                            }
                        }, d.createElement(ge, {
                            "data-test-selector": t,
                            reportSubCount: n,
                            subscriptionType: e,
                            visible: !0
                        }))
                    }, t.prototype.getTabFromQueryParam = function(e) {
                        var t = c.parse(e.location.search).tab;
                        if (t) {
                            var n = t.toUpperCase();
                            if ([fe.Paid, fe.Mobile, fe.Gifts, fe.Other].includes(n)) return n
                        }
                        return fe.Paid
                    }, t
                }(d.Component),
                ke = Object(r.compose)(Object(g.b)("SubsManagementPage", {
                    autoReportInteractive: !0,
                    destination: f.a.SubsManagementPage
                }), Object(b.a)({
                    location: he.PageviewLocation.SubsManagementPage
                }))(ve);
            var Se = Object(i.connect)(function(e) {
                var t = Object(o.e)(e);
                return {
                    isLoggedIn: Object(o.f)(e),
                    currentUserIsStaff: !!(t && t.roles && t.roles.isStaff)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return s.e(a.a.SubsManagementPage)
                    }
                }, e)
            })(ke);
            n.d(t, "SubscriptionsManagementPage", function() {
                return Se
            })
        },
        VrOd: function(e, t, n) {},
        Vscg: function(e, t, n) {},
        WAGi: function(e, t, n) {},
        ZEQw: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            });
            var i = "subscribe_to_channel",
                r = "turbo",
                a = "visit_url",
                s = "none",
                o = "broadcaster"
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("kRBY"),
                s = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r, a, s, o;
                            return i.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), s = i.__assign({}, t, {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((r = a.sent()).requestError) throw r.requestError;
                                        if (r.error) throw new Error("Error while sending legacy-api request: " + r.error.status + " - " + r.error.message);
                                        return [2, i.__assign({}, r, {
                                            body: r.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, r.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, r, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return r = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = r), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
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
                            headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = r.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var s = Object(a.e)(n);
                        return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = r.p.logger.withCategory("legacy-api"), e
                }()
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("o4DC");

            function r(e) {
                return e && Object(i.c)(e) || ""
            }
        },
        cpJf: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "d", function() {
                    return a
                }), n.d(t, "c", function() {
                    return s
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(i || (i = {}));
            var r, a = {
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
            }(r || (r = {}))
        },
        fQWD: function(e, t, n) {
            "use strict";
            var i = n("vHGB");
            n.d(t, "a", function() {
                return i.a
            })
        },
        l1sD: function(e, t, n) {},
        lZdE: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return i
            })
        },
        sEB7: function(e, t, n) {
            var i = {
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
            i.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/pages/subscriptions-management/models/subscription-benefit-fragment.gql"\nquery SubscriptionsManagement_SubscriptionBenefits($limit: Int $cursor: Cursor $filter: SubscriptionBenefitFilter $platform: SubscriptionPlatform) {\ncurrentUser {\nid\nhasPrime\navailableBadges {\n...badge\n}\nsubscriptionBenefits(first: $limit after: $cursor criteria: {filter: $filter platform: $platform}) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n...subscriptionBenefit\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("IKE4").definitions)), i.definitions = i.definitions.concat(a(n("KXaD").definitions)), e.exports = i
        },
        vHGB: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.badge,
                        t = e.title,
                        n = e.image1x,
                        i = e.image2x,
                        a = e.image4x,
                        u = r.createElement("img", {
                            alt: t,
                            "aria-label": Object(o.d)("{badgeTitle} badge", {
                                badgeTitle: t
                            }, "Badge"),
                            className: "chat-badge",
                            src: n,
                            srcSet: n + " 1x, " + i + " 2x, " + a + " 4x",
                            onMouseOver: this.onMouseOver,
                            onMouseOut: this.onMouseOut
                        });
                    return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (u = r.createElement("a", {
                        href: this.targetURL,
                        onClick: this.onBadgeClickHandler,
                        target: "_blank",
                        "data-a-target": "chat-badge"
                    }, u)), this.state.isHovering ? r.createElement(s.Zb, {
                        align: s.ac.Left,
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
            }(r.Component)
        }
    }
]);