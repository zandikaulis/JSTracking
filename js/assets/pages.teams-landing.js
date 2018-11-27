(window.webpackJsonp = window.webpackJsonp || []).push([
    [77], {
        "0EKw": function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("/7QA"),
                r = t("SHn+"),
                o = t("kduP"),
                s = function(e) {
                    return i.createElement(r.a, {
                        linkTo: {
                            pathname: Object(o.c)(e.name),
                            state: {
                                content: "current_game",
                                medium: "twitch_channel"
                            }
                        },
                        label: Object(a.d)("Category:", "GameLink"),
                        title: e.name,
                        "data-a-target": "stream-game-link"
                    })
                };
            t.d(n, "a", function() {
                return s
            })
        },
        "0WFu": function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return a
            }), t.d(n, "a", function() {
                return r
            });
            t("/7QA");
            var i = t("3Bft");

            function a(e) {
                return [i.a.Prime, i.a.Custom].includes(e) ? null : parseInt(e, 10) / 1e3
            }

            function r(e) {
                var n = e instanceof Date ? e : new Date(e);
                return Math.round((n.getTime() - Date.now()) / 864e5)
            }
        },
        "3Bft": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
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
        "5goO": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("/7QA"),
                o = t("SHn+"),
                s = t("Ue10"),
                l = function(e) {
                    return a.createElement(o.a, i.__assign({
                        linkTo: "/team/" + e.name,
                        title: e.displayName,
                        label: Object(r.d)("Team:", "TeamLink")
                    }, Object(s.kc)(e)))
                };
            t.d(n, "a", function() {
                return l
            })
        },
        "6J1Z": function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_ChannelInfoBar_User"
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
                                        value: "login"
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
                                            value: "70"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcastSettings"
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
                                        value: "followers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primaryTeam"
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
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "profileViewCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "stream"
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
                                                value: "viewersCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "game"
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
                                                        value: "name"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "boxArtURL"
                                                    },
                                                    arguments: [{
                                                        kind: "Argument",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        value: {
                                                            kind: "IntValue",
                                                            value: "40"
                                                        }
                                                    }, {
                                                        kind: "Argument",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        value: {
                                                            kind: "IntValue",
                                                            value: "55"
                                                        }
                                                    }],
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
                    end: 327
                }
            };
            t.loc.source = {
                body: "query ChannelPage_ChannelInfoBar_User($login: String!) {\nuser(login: $login) {\nid\nlogin\ndescription\ndisplayName\nprofileImageURL(width: 70)\nbroadcastSettings {\nid\ntitle\n}\nfollowers {\ntotalCount\n}\nprimaryTeam {\nid\ndisplayName\nname\n}\nprofileViewCount\nstream {\nid\nviewersCount\ngame {\nid\nname\nboxArtURL(width: 40 height: 55)\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        EdhP: function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return l
            }), t.d(n, "a", function() {
                return d
            });
            var i = t("mrSG"),
                a = t("cr+I"),
                r = t("/7QA"),
                o = t("vRsq"),
                s = {
                    height: 378,
                    width: 620,
                    allowScrolling: !0,
                    allowFullscreen: !0
                };

            function l(e, n) {
                return d(function(e) {
                    e.video && (e.video = Object(o.p)(e.video));
                    var n = a.stringify(e);
                    return r.p.config.playerBaseURL + "/?" + n
                }(e), n)
            }

            function d(e, n) {
                void 0 === n && (n = s);
                var t = i.__assign({}, s, n),
                    a = '<iframe src="' + e + '" frameborder="0" ' + (t.allowFullscreen ? 'allowfullscreen="true" ' : "") + (t.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + t.height + '" width="' + t.width + '"></iframe>';
                return t.textLink && (a += function(e, n) {
                    return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + n + "</a>"
                }(t.textLink.url, t.textLink.text)), a
            }
        },
        EuPq: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("Ue10"),
                o = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleClickHandler = function(e) {
                            n.props.onClick && n.props.onClick(), e.currentTarget.select()
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return a.createElement(r.Sa, {
                            readOnly: !0,
                            type: r.Ua.Text,
                            value: this.props.value,
                            onClick: this.handleClickHandler
                        })
                    }, n
                }(a.Component);
            t.d(n, "a", function() {
                return o
            })
        },
        GTf2: function(e, n, t) {},
        "J/U3": function(e, n, t) {},
        "Jxh/": function(e, n, t) {
            "use strict";

            function i(e) {
                var n = document.createElement("textarea");
                n.style.position = "fixed", n.style.top = "0", n.style.left = "0", n.style.fontSize = "12pt", n.style.width = "2em", n.style.height = "2em", n.style.padding = "0", n.style.border = "none", n.style.outline = "none", n.style.boxShadow = "none", n.style.background = "transparent", n.value = e, document.body.appendChild(n), n.select();
                var t = !0;
                try {
                    t = document.execCommand("copy")
                } catch (e) {
                    t = !1
                }
                return document.body.removeChild(n), t
            }
            t.d(n, "a", function() {
                return i
            })
        },
        KriR: function(e, n, t) {
            "use strict";
            t.d(n, "g", function() {
                return r
            }), t.d(n, "d", function() {
                return c
            }), t.d(n, "f", function() {
                return o
            }), t.d(n, "e", function() {
                return s
            }), t.d(n, "b", function() {
                return l
            }), t.d(n, "a", function() {
                return d
            }), t.d(n, "c", function() {
                return u
            });
            var i = t("/7QA"),
                a = t("2xye");

            function r(e) {
                var n = {
                    channel: e.channelLogin,
                    channel_id: e.channelId,
                    payment_type: e.paymentType,
                    payment_flow: e.paymentFlow,
                    quantity: e.quantity,
                    action: e.action,
                    action_detail: e.actionDetail,
                    product_id: e.productId,
                    ticket_price: e.ticketPrice,
                    currency: e.currency,
                    saved_payment: e.savedPayment,
                    is_anonymous: e.isAnonymous,
                    checkout_source: e.trackingContext.source
                };
                e.trackingContext.detail && (n.checkout_source_detail = e.trackingContext.detail), i.o.track(a.SpadeEventType.PaymentFormInteraction, n)
            }
            var o, s, l, d, u, c = function() {
                function e(e) {
                    this.store = {
                        savedPaymentAvailable: null,
                        savedPaymentDisplayed: null
                    }, this.counter = 0, this.config = {
                        allowDuplicateEvents: !(!e || !e.allowDuplicateEvents)
                    }
                }
                return e.prototype.get = function(e) {
                    return this.store[e]
                }, e.prototype.set = function(e) {
                    this.store = Object.assign(this.store, e)
                }, e.prototype.reportEvent = function() {
                    (0 === this.counter || this.config.allowDuplicateEvents) && (this.counter++, function(e) {
                        var n = {
                            saved_payment_available: e.savedPaymentAvailable,
                            saved_payment_displayed: e.savedPaymentDisplayed
                        };
                        i.o.track(a.SpadeEventType.PaymentFormDisplay, n)
                    }(this.store))
                }, e
            }();
            ! function(e) {
                e.Failed = "failed", e.Pending = "pending", e.Success = "success"
            }(o || (o = {})),
            function(e) {
                e.MysteryGifting = "mystery_gifting", e.Gifting = "gifting", e.Personal = "personal"
            }(s || (s = {})),
            function(e) {
                e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlyPayWithAmazon = "recurly_pay_with_amazon", e.ZuoraCreditCard = "zuora_credit_card", e.Xsolla = "xsolla"
            }(l || (l = {})),
            function(e) {
                e.VendorLoginClick = "vendor_login_click", e.CompletePurchaseClick = "complete_purchase_click", e.PaypalTokenError = "paypal_token_error", e.RadioButtonClick = "radio_button_click", e.TokenError = "token_error", e.PriceChangeAlert = "price_change_alert", e.UnsupportedCountryAlert = "unsupported_country_alert"
            }(d || (d = {})),
            function(e) {
                e.ChannelSubscribeButton = "channel_subscribe_button_click", e.Direct = "direct_url_link", e.EmotePicker = "emote_picker_click", e.Extension = "extension_click", e.TurboSubscribeButton = "turbo_subscribe_button_click", e.ViewerCard = "viewer_card_click"
            }(u || (u = {}))
        },
        QjI3: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("/MKj"),
                o = t("fvjX"),
                s = t("ZS2+"),
                l = t("UUve"),
                d = t("1/iK"),
                u = t("aCAx"),
                c = t("kRBY"),
                m = t("GnwI"),
                p = t("d0xR"),
                b = t("oJmH"),
                g = t("/7QA"),
                v = t("2+sX"),
                k = t("u5aL"),
                h = t("eJ65"),
                f = t("yR8l"),
                y = t("x7UT"),
                S = t("3Bft"),
                N = t("tIid"),
                _ = t("ht6z"),
                C = t("/aPz"),
                w = t("KriR"),
                F = t("D7An"),
                E = t("4rCz"),
                I = t("0WFu");
            var L, B = t("br9A"),
                T = t("Ue10"),
                M = (t("a7aT"), t("z+dA"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(L || (L = {}));
            var D = s.a.wrap(function() {
                    return Promise.all([t.e(0), t.e(199)]).then(t.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                O = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            inPrimeRegion: !1
                        }, n.modalLevel = "top_page", n.renderBalloonContentForBalloonLayer = function() {
                            return a.createElement(k.a, {
                                onClickOut: n.handleBalloonClickOut
                            }, a.createElement(T.Ya, {
                                "data-a-target": "sub-balloon",
                                refDelegate: n.setBalloonContentRefDelegate
                            }, n.balloonWrapperContent))
                        }, n.handleButtonClick = function() {
                            n.balloonContentRef || (n.props.useModal && n.props.channelLogin ? (n.props.showSubscriptionModal({
                                channelLogin: n.props.channelLogin,
                                onClose: n.handleModalClose
                            }), n.handleSubMenuAction({
                                action: B.a.OpenSubMenu
                            })) : (n.props.balloonLayer.show({
                                direction: n.getBalloonDirection(),
                                ref: n.containerRef,
                                content: n.renderBalloonContentForBalloonLayer(),
                                contentHeight: 0,
                                closeOnScroll: !0
                            }), n.handleMenuToggle(!1)))
                        }, n.handleBalloonClickOut = function() {
                            n.handleMenuToggle(!0), n.props.balloonLayer.hide({
                                force: !0
                            })
                        }, n.handleModalClose = function() {
                            n.handleSubMenuAction({
                                action: B.a.CloseSubMenu
                            })
                        }, n.setBalloonWrapperContent = function(e) {
                            n.balloonWrapperContent = e
                        }, n.handleSubMenuAction = function(e) {
                            new Set([B.a.ClickCheckout, B.a.BuyGiftSub, B.a.BuyMysteryGift, B.a.BuyCustomMysteryGift, B.a.BuyGiftToPaidUpgrade, B.a.BuyPaidUpgrade, B.a.BuyDNRToResub]).has(e.action) && n.checkAndDisplaySubscriptionCheckout();
                            var t = n.props.data,
                                i = t.user,
                                a = !!(i && i.self && i.self.subscriptionBenefit),
                                r = t.requestInfo && Object(_.a)(t.requestInfo.countryCode);
                            Object(B.b)({
                                action: e.action || "",
                                channelLogin: n.props.channelLogin || "",
                                channelID: i && i.id || "",
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: i && i.self && i.self.canPrimeSubscribe,
                                hostChannelID: n.props.hostChannelID,
                                hostChannelLogin: n.props.hostChannelLogin,
                                isAnonymous: e.isAnonymous,
                                isMenuOpen: e.action !== B.a.OpenSubMenu,
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "channel_page",
                                modal: !a,
                                modalLevel: a ? "" : n.modalLevel.slice(),
                                showPrimeContent: r,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== B.a.ClickMoreSubOptions && e.action !== B.a.ClickBack || (n.modalLevel = e.modalLevel)
                        }, n.handleMenuToggle = function(e) {
                            n.handleSubMenuAction({
                                action: e ? B.a.CloseSubMenu : B.a.OpenSubMenu
                            })
                        }, n.getBalloonDirection = function() {
                            var e = n.props.balloonDirection || T.v.BottomRight;
                            return n.props.hostChannelID && (e = T.v.TopLeft), e
                        }, n.setContainerRefDelegate = function(e) {
                            n.containerRef = e
                        }, n.setBalloonContentRefDelegate = function(e) {
                            n.balloonContentRef = e
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive(), this.checkAndDisplaySubscriptionCheckout()
                    }, n.prototype.componentDidUpdate = function(e) {
                        this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.props.data && !this.props.data.loading && this.props.reportInteractive(), !this.isUserDataReady(e) && this.isUserDataReady(this.props) && this.checkAndDisplaySubscriptionCheckout()
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                    }, n.prototype.componentWillUnmount = function() {
                        Object(l.f)()
                    }, n.prototype.render = function() {
                        var e = this.props.data;
                        if (!e || e.loading || e.error) return null;
                        var n = e.user;
                        if (!n) return null;
                        var t = n.self,
                            i = n.subscriptionProducts;
                        if (!i) return null;
                        var r = i.filter(function(e) {
                            return e
                        });
                        if (0 === r.length) return null;
                        if (this.props.hideEsportsSubscription && Object(N.a)(n.id || "", this.props.sessionUser)) return null;
                        var o = e.requestInfo && Object(_.a)(e.requestInfo.countryCode),
                            s = !(!t || !t.subscriptionBenefit),
                            l = Object(N.a)(n.id || "", this.props.sessionUser),
                            d = 1 === r.length;
                        r.some(function(e) {
                            return !e.emoteSetID
                        }) && (d = !0);
                        var u = null;
                        t && t.subscriptionBenefit && (u = t.subscriptionBenefit.purchasedWithPrime ? S.a.Prime : t.subscriptionBenefit.tier, this.modalLevel = "");
                        var c = function(e) {
                            var n = E.q.experiments.getAssignment(F.b.SubsReanimator);
                            if (e.isSubscribed) {
                                if (e.hasInsiderPass) return Object(E.d)("All-Access Pass", "SubscribeButton");
                                if (e.isNonStandardSub) return Object(E.d)("Subscribed", "SubscribeButton");
                                if (e.hostedDisplayName) return Object(E.d)("Subscribed to {username}", {
                                    username: e.hostedDisplayName
                                }, "SubscribeButton");
                                if ("control" !== n && e.benefitIsDNRd && e.benefitEndsAt && !e.hasPendingSub) {
                                    var t = Object(I.a)(e.benefitEndsAt);
                                    if (t <= 15 && t > 7) return Object(E.d)("Continue Sub", "SubscribeButton");
                                    if (t <= 7 && 0 !== t) return Object(E.d)("{daysRemaining, plural, one {Continue Sub - {daysRemaining} Day Remaining} other {Continue Sub - {daysRemaining} Days Remaining}}", {
                                        daysRemaining: t
                                    }, "SubscribeButton");
                                    if (0 === t) return Object(E.d)("Continue Sub - Ends Today", "SubscribeButton")
                                }
                                return Object(E.d)("Gift A Sub", "SubscribeButton")
                            }
                            return e.hasInsiderPass ? Object(E.d)("Get the All-Access Pass", "SubscribeButton") : e.hostedDisplayName ? Object(E.d)("Subscribe to {username}", {
                                username: e.hostedDisplayName
                            }, "SubscribeButton") : Object(E.d)("Subscribe", "SubscribeButton")
                        }({
                            isSubscribed: s,
                            isNonStandardSub: d,
                            hasInsiderPass: l,
                            hasPendingSub: !!(t && t.subscriptionBenefit && t.subscriptionBenefit.pendingSubscription),
                            benefitIsDNRd: !(!t || !t.subscriptionBenefit) && t.subscriptionBenefit.isDNRd,
                            benefitEndsAt: t && t.subscriptionBenefit && t.subscriptionBenefit.endsAt,
                            hostedDisplayName: this.props.hostChannelID ? n.displayName || "" : void 0
                        });
                        if (s && d && !l) return a.createElement(T.z, {
                            disabled: !0,
                            ariaLabel: c,
                            icon: T.ub.Star
                        }, c);
                        var m = a.createElement(T.z, {
                            ariaLabel: c,
                            "data-a-target": s ? "subscribed-button" : "subscribe-button",
                            "data-test-selector": L.SubButton,
                            dropdown: !this.props.hideDropdownArrow,
                            fullWidth: !0,
                            icon: this.getButtonIcon(s, u),
                            onClick: this.props.renderBalloonInBalloonLayer || this.props.useModal ? this.handleButtonClick : void 0,
                            type: this.getButtonType(s)
                        }, c);
                        if (this.props.useModal) return m;
                        var p = r[0];
                        return this.setBalloonWrapperContent(a.createElement(D, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin || "",
                            "data-test-selector": L.SubscribeBalloon,
                            handleSubMenuAction: this.handleSubMenuAction,
                            inPrimeRegion: o,
                            isEsportChannel: l,
                            isNonStandardSub: d,
                            isStaff: !(!this.props.sessionUser || !this.props.sessionUser.roles) && this.props.sessionUser.roles.isStaff,
                            isSubscribed: s,
                            productId: p ? p.id : "",
                            subbedTier: u || S.a.Prime,
                            userHasPrime: !1
                        })), this.props.renderBalloonInBalloonLayer ? a.createElement(T.Ya, {
                            "data-test-selector": L.BalloonLayerButton,
                            refDelegate: this.setContainerRefDelegate
                        }, m) : a.createElement(T.Ya, null, a.createElement(h.a, {
                            "data-test-selector": L.DefaultButton,
                            onToggle: this.handleMenuToggle
                        }, m, a.createElement(T.u, {
                            "data-a-target": "sub-balloon",
                            direction: this.getBalloonDirection(),
                            size: T.w.Large
                        }, this.balloonWrapperContent)))
                    }, n.prototype.getButtonType = function(e) {
                        T.F.Default;
                        return e && void 0 !== this.props.subscribedButtonType ? this.props.subscribedButtonType : e ? T.F.Success : this.props.unsubscribedButtonType || T.F.Default
                    }, n.prototype.getButtonIcon = function(e, n) {
                        var t = void 0;
                        return e ? t = n === S.a.Prime ? T.ub.Crown : T.ub.Star : this.props.forceIcon && (t = T.ub.StarHollow), t
                    }, n.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, n.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        var e = g.n.get(l.d, "");
                        if (e) {
                            var n = this.props.data.user;
                            if (n && n.subscriptionProducts) n.subscriptionProducts.filter(function(e) {
                                return e
                            }).map(function(e) {
                                return e.name
                            }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                isAnonymous: g.n.get(l.a, !1),
                                mysteryGiftCount: Number(g.n.get(l.c, "")),
                                productName: e,
                                recipientLogin: g.n.get(l.e, ""),
                                trackingContext: {
                                    source: w.c.ChannelSubscribeButton
                                }
                            }) : this.props.showLoginModal() : Object(l.f)()
                        }
                    }, n
                }(a.Component),
                P = Object(b.compose)(Object(f.a)(M, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(y.a)([{
                    topic: function(e) {
                        return Object(C.I)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(v.e)())(O),
                U = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.reportInteractive = function() {
                            n.props.latencyTracking.reportInteractive()
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return a.createElement(P, {
                            authToken: this.props.authToken,
                            balloonDirection: this.props.balloonDirection,
                            channelLogin: this.props.channelLogin,
                            forceIcon: this.props.forceIcon,
                            hideEsportsSubscription: this.props.hideEsportsSubscription,
                            hideDropdownArrow: this.props.hideDropdownArrow,
                            hostChannelID: this.props.hostChannelID,
                            hostChannelLogin: this.props.hostChannelLogin,
                            renderBalloonInBalloonLayer: this.props.renderBalloonInBalloonLayer,
                            reportInteractive: this.reportInteractive,
                            sessionUser: this.props.sessionUser,
                            showLoginModal: this.props.showLoginModal,
                            showSubscriptionCheckoutModal: this.props.showSubscriptionCheckoutModal,
                            showSubscriptionModal: this.props.showSubscriptionModal,
                            subscribedButtonType: this.props.subscribedButtonType,
                            unsubscribedButtonType: this.props.unsubscribedButtonType,
                            updateContainerWidth: this.props.updateContainerWidth,
                            useModal: this.props.useModal
                        })
                    }, n = i.__decorate([Object(m.b)("SubscribeButton")], n)
                }(a.Component);
            var A = Object(r.connect)(function(e) {
                return {
                    authToken: Object(c.a)(e),
                    sessionUser: Object(c.e)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    showLoginModal: Object(l.g)(d.a.ChannelSubscriptionButton),
                    showSubscriptionModal: function(e) {
                        var n = i.__rest(e, []);
                        return Object(u.d)(p.a, n)
                    },
                    showSubscriptionCheckoutModal: function(e) {
                        var n = i.__rest(e, []);
                        return Object(u.d)(s.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([t.e(0), t.e(210)]).then(t.bind(null, "KJv/"))
                            },
                            componentProps: n
                        })
                    }
                }, e)
            })(U);
            t.d(n, !1, function() {
                return U
            }), t.d(n, "a", function() {
                return A
            }), t.d(n, !1, function() {
                return L
            }), t.d(n, !1, function() {
                return O
            }), t.d(n, !1, function() {
                return P
            })
        },
        RuiO: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Core_Services_Spade_SubEvent_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "withVideo"
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
                                value: "videoID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
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
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
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
                                                value: "canPrimeSubscribe"
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
                                                        value: "purchasedWithPrime"
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
                                value: "video"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "videoID"
                                    }
                                }
                            }],
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
                                            value: "withVideo"
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
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcastType"
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
                    end: 266
                }
            };
            t.loc.source = {
                body: "query Core_Services_Spade_SubEvent_User($channelID: ID! $withVideo: Boolean! $videoID: ID) {\nuser(id: $channelID) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\ntier\npurchasedWithPrime\n}\n}\n}\nvideo(id: $videoID) @include(if: $withVideo) {\nid\nbroadcastType\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "SHn+": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("Ue10"),
                o = function(e) {
                    return a.createElement(r.Ya, {
                        margin: {
                            right: 1
                        },
                        display: r.X.Flex,
                        alignItems: r.f.Center
                    }, a.createElement(r.Ya, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(r.Fb, {
                        display: r.X.Flex,
                        alignItems: r.f.Center
                    }, a.createElement(r.W, {
                        fontSize: r.Ca.Size5,
                        "data-test-selector": "labeled-text-label"
                    }, e.label))), a.createElement(r.W, {
                        fontSize: r.Ca.Size5,
                        ellipsis: !0
                    }, a.createElement(r.U, i.__assign({
                        to: e.linkTo
                    }, Object(r.kc)(e), {
                        targetBlank: e.targetBlank,
                        "data-test-selector": "labeled-link-title"
                    }), e.title)))
                };
            t.d(n, "a", function() {
                return o
            })
        },
        ST9J: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TeamsLandingBody"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "teamName"
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
                                value: "team"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "teamName"
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
                                        value: "__typename"
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
                                        value: "backgroundImageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bannerURL"
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
                                        value: "logoURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "TeamsLandingBody_PlayerUser"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "TeamsLandingBody_PlayerUser"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Team"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "liveFeaturedChannels"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "1"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "__typename"
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
                                                value: "__typename"
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
                                                        value: "__typename"
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
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "stream"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "__typename"
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
                                value: "liveMembers"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "1"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "__typename"
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
                                                value: "__typename"
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
                                                        value: "__typename"
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
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "stream"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "__typename"
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
                                value: "members"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "1"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "__typename"
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
                                                value: "__typename"
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
                                                        value: "__typename"
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
                                        value: "__typename"
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
                                        value: "login"
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
                    end: 573
                }
            };
            t.loc.source = {
                body: "query TeamsLandingBody($teamName: String!) {\nteam(name: $teamName) {\n__typename\nid\nbackgroundImageURL\nbannerURL\ndescription\ndisplayName\nlogoURL\n...TeamsLandingBody_PlayerUser\n}\n}\nfragment TeamsLandingBody_PlayerUser on Team {\nliveFeaturedChannels(first: 1) {\n__typename\nedges {\n__typename\nnode {\n__typename\nid\nlogin\nstream {\n__typename\nid\n}\n}\n}\n}\nliveMembers(first: 1) {\n__typename\nedges {\n__typename\nnode {\n__typename\nid\nlogin\nstream {\n__typename\nid\n}\n}\n}\n}\nmembers(first: 1) {\n__typename\nedges {\n__typename\nnode {\n__typename\nid\nlogin\n}\n}\n}\nowner {\n__typename\nid\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        UUve: function(e, n, t) {
            "use strict";
            t.d(n, "d", function() {
                return r
            }), t.d(n, "e", function() {
                return o
            }), t.d(n, "c", function() {
                return s
            }), t.d(n, "a", function() {
                return l
            }), t.d(n, "b", function() {
                return d
            }), t.d(n, "f", function() {
                return c
            }), t.d(n, "g", function() {
                return m
            });
            var i = t("/7QA"),
                a = t("y5D0"),
                r = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                l = "SUB_CHECKOUT__GIFTING_ANONYMOUSLY",
                d = "SUB_CHECKOUT__IS_ONE_TIME",
                u = [r, o, s, l, d];

            function c() {
                u.forEach(function(e) {
                    return i.n.remove(e)
                })
            }

            function m(e) {
                return function() {
                    return Object(a.e)(e, {
                        onClose: c
                    })
                }
            }
        },
        X7Ac: function(e, n, t) {
            "use strict";
            var i = t("wbMx");
            t.d(n, "a", function() {
                return i.a
            }), t.d(n, "b", function() {
                return i.b
            })
        },
        ZLqn: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("/7QA"),
                r = t("EuPq"),
                o = t("X7Ac"),
                s = t("eJ65"),
                l = t("EdhP"),
                d = t("+GjP"),
                u = t("Ue10"),
                c = function(e) {
                    var n = Object(d.e)("https://www.twitch.tv/" + e.login, {
                            tt_medium: "live_embed",
                            tt_content: "text_link"
                        }),
                        t = Object(a.d)("Watch live video from {displayName} on www.twitch.tv", {
                            displayName: e.displayName || e.login
                        }, "ChannelShareButton"),
                        c = Object(l.b)({
                            channel: e.login
                        }, {
                            textLink: {
                                url: n,
                                text: t
                            },
                            allowScrolling: !1,
                            allowFullscreen: !0
                        }),
                        m = "https://www.twitch.tv/embed/" + e.login + "/chat",
                        p = Object(l.a)(m, {
                            height: 500,
                            width: 350,
                            allowFullscreen: !1,
                            allowScrolling: !1
                        });
                    return i.createElement(s.a, null, i.createElement(u.z, {
                        type: u.F.Text,
                        "data-a-target": "share-button",
                        icon: u.ub.Share
                    }, Object(a.d)("Share", "ChannelShareButton")), i.createElement(u.u, {
                        direction: u.v.TopRight,
                        size: u.w.Small,
                        "data-a-target": "share-balloon"
                    }, i.createElement(u.Ya, {
                        padding: 1
                    }, i.createElement(u.Ya, {
                        padding: {
                            top: 1,
                            bottom: 1
                        },
                        display: u.X.Flex,
                        justifyContent: u.Xa.Between
                    }, i.createElement(o.a, {
                        type: o.b.Twitter,
                        text: e.title,
                        "data-a-target": "twitter-share-button"
                    }), i.createElement(o.a, {
                        type: o.b.Facebook,
                        "data-a-target": "facebook-share-button"
                    }), i.createElement(o.a, {
                        type: o.b.VKontakte,
                        "data-a-target": "vkontakte-share-button"
                    }), i.createElement(o.a, {
                        type: o.b.Reddit,
                        text: e.title,
                        "data-a-target": "reddit-share-button"
                    }), i.createElement(o.a, {
                        type: o.b.Copy,
                        "data-a-target": "copy-link-share-button"
                    })), i.createElement(u.Ya, null, i.createElement(u.Ya, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(u.W, null, Object(a.d)("Embed Channel", "ChannelShareButton")), i.createElement(r.a, {
                        value: c
                    })), i.createElement(u.Ya, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(u.W, null, Object(a.d)("Embed Chat", "ChannelShareButton")), i.createElement(r.a, {
                        value: p
                    }))))))
                };
            t.d(n, "a", function() {
                return c
            })
        },
        a7aT: function(e, n, t) {},
        br9A: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return l
            }), t.d(n, "b", function() {
                return d
            });
            var i = t("mrSG"),
                a = t("/7QA"),
                r = t("2xye"),
                o = t("I6K6"),
                s = t("RuiO"),
                l = {
                    BuyCustomMysteryGift: "buy_custom_mystery_gift",
                    BuyGiftSub: "buy_gift_sub",
                    BuyGiftToPaidUpgrade: "buy_gift_to_paid_upgrade",
                    BuyMysteryGift: "buy_mystery_gift",
                    BuyPaidUpgrade: "buy_paid_upgrade",
                    BuyDNRToResub: "buy_dnr_to_resub",
                    ChangeTier: "change_tier",
                    ClickAnonymousGiftCheckbox: "anonymous_gift_click",
                    ClickCheckout: "click_checkout_button",
                    ClickMoreSubOptions: "more_options_click",
                    ClickGiftSubOptions: "gift_options_click",
                    ClickPrimeFAQ: "click_prime_faq",
                    ClickSignupForPrime: "click_signup_for_prime",
                    ClickBack: "back_top_level",
                    CloseSubMenu: "close_subscribe_menu",
                    GiftASub: "gift_a_sub",
                    OpenSubMenu: "open_subscribe_menu",
                    SubWithPrime: "samus_spend_credit"
                };

            function d(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n, t, l, d, u, c, m, p, b, g, v, k, h;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                n = a.o.getVideoPlayerTrackingData().vodID, t = !!n, l = {
                                    channelID: e.channelID,
                                    withVideo: !1
                                }, t && (l.withVideo = !0, l.videoID = n), d = null, i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, a.p.apollo.client.query({
                                    query: s,
                                    variables: l
                                })];
                            case 2:
                                return d = i.sent(), [3, 4];
                            case 3:
                                return u = i.sent(), a.k.error(u, "Failed to make query for channel info in FollowEvent reporting.", {
                                    channelID: e.channelID
                                }), [3, 4];
                            case 4:
                                return c = d && d.data && d.data.user || null, d && !c && a.k.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                    channelID: e.channelID
                                }), m = null, d && t && ((p = d && d.data && d.data.video) ? m = Object(o.a)(p.broadcastType) : a.k.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                    currentVideoID: n
                                })), b = c && c.self, g = b ? !!b.subscriptionBenefit : null, v = b && b.subscriptionBenefit && b.subscriptionBenefit.purchasedWithPrime || !1, k = b ? b.canPrimeSubscribe : null, h = {
                                    action: e.action,
                                    can_subscribe: k,
                                    channel: e.channelLogin,
                                    channel_id: e.channelID,
                                    checkout_button_tier: e.checkoutButtonTier,
                                    has_sub_credit: e.hasSubCredit,
                                    host_channel: e.hostChannelLogin,
                                    host_channel_id: e.hostChannelID,
                                    is_anonymous: e.isAnonymous,
                                    is_menu_open: e.isMenuOpen,
                                    is_subscribed: g,
                                    is_subscribed_current_tier: b && b.subscriptionBenefit && b.subscriptionBenefit.tier,
                                    mystery_gift_count: e.mysteryGiftCount || null,
                                    sub_location: e.sub_location,
                                    sub_recipient: e.giftRecipient,
                                    modal: e.modal,
                                    modal_level: e.modalLevel || "",
                                    show_prime_content: e.showPrimeContent,
                                    show_resub: c ? k && v : null,
                                    vod_id: n,
                                    vod_type: m,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, a.o.track(r.SpadeEventType.Subscription, h), [2]
                        }
                    })
                })
            }
        },
        d0xR: function(e, n, t) {
            "use strict";
            var i, a = t("mrSG"),
                r = t("q1tI"),
                o = t("/MKj"),
                s = t("fvjX"),
                l = t("ZS2+"),
                d = t("cZKs"),
                u = t("UUve"),
                c = t("1/iK"),
                m = t("aCAx"),
                p = t("kRBY"),
                b = t("Ue10"),
                g = t("/7QA"),
                v = t("yR8l"),
                k = t("3Bft"),
                h = t("/0dD"),
                f = t("tIid"),
                y = t("ht6z"),
                S = t("76Lv"),
                N = t("KriR"),
                _ = t("br9A"),
                C = (t("y2dA"), t("eaNi"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(i || (i = {}));
            var w = l.a.wrap(function() {
                    return Promise.all([t.e(0), t.e(199)]).then(t.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                F = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.modalLevel = "top_page", n.handleSubMenuAction = function(e) {
                            new Set([_.a.ClickCheckout, _.a.BuyGiftSub, _.a.BuyMysteryGift, _.a.BuyCustomMysteryGift, _.a.BuyGiftToPaidUpgrade, _.a.BuyPaidUpgrade]).has(e.action) && n.checkAndDisplaySubscriptionCheckout();
                            var t = n.props.data,
                                i = t.user,
                                a = !!(i && i.self && i.self.subscriptionBenefit),
                                r = t.requestInfo && Object(y.a)(t.requestInfo.countryCode);
                            Object(_.b)({
                                action: e.action || "",
                                channelLogin: n.props.channelLogin || "",
                                channelID: i && i.id || "",
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: i && i.self && i.self.canPrimeSubscribe,
                                hostChannelID: n.props.data.user && n.props.data.user.id || "",
                                hostChannelLogin: n.props.channelLogin,
                                isMenuOpen: e.action !== _.a.OpenSubMenu,
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "squad_page",
                                modal: !a,
                                modalLevel: a ? "" : n.modalLevel.slice(),
                                showPrimeContent: r,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== _.a.ClickMoreSubOptions && e.action !== _.a.ClickBack || (n.modalLevel = e.modalLevel)
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.checkAndDisplaySubscriptionCheckout()
                    }, n.prototype.componentDidUpdate = function(e) {
                        !this.isUserDataReady(e) && this.isUserDataReady(this.props) && this.checkAndDisplaySubscriptionCheckout()
                    }, n.prototype.render = function() {
                        if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.subscriptionProducts && this.props.data.requestInfo)) return null;
                        var e = this.props.data.user,
                            n = e.self,
                            t = e.subscriptionProducts.filter(function(e) {
                                return e
                            });
                        if (0 === t.length) return null;
                        if (this.props.hideEsportsSubscription && Object(f.a)(this.props.data.user.id || "", this.props.sessionUser)) return null;
                        var i = Object(y.a)(this.props.data.requestInfo.countryCode),
                            a = !(!n || !n.subscriptionBenefit),
                            o = Object(f.a)(this.props.data.user.id || "", this.props.sessionUser),
                            s = 1 === t.length;
                        t.some(function(e) {
                            return !e.emoteSetID
                        }) && (s = !0);
                        var l = null;
                        n && n.subscriptionBenefit && (l = n.subscriptionBenefit.purchasedWithPrime ? k.a.Prime : n.subscriptionBenefit.tier, this.modalLevel = "");
                        var d = this.props.data.user.displayName || this.props.channelLogin,
                            u = t[0];
                        return r.createElement(b.Fb, {
                            className: Object(S.b)(h.a.Light)
                        }, r.createElement(b.Fb, {
                            overflow: b.db.Hidden,
                            fullWidth: !0,
                            className: "subscribe-modal__banner"
                        }, this.props.data.user.bannerImageURL && r.createElement(b.S, {
                            src: this.props.data.user.bannerImageURL,
                            alt: Object(g.d)("{channelName}'s banner image", {
                                channelName: d
                            }, "SubscribeModal")
                        })), this.props.data.user.profileImageURL && r.createElement(b.Fb, {
                            className: "subscribe-modal__avatar",
                            background: b.r.Alt,
                            position: b.kb.Absolute,
                            borderRadius: b.x.Small,
                            overflow: b.db.Hidden
                        }, r.createElement(b.q, {
                            size: 80,
                            src: this.props.data.user.profileImageURL,
                            alt: Object(g.d)("{channelName}'s profile image", {
                                channelName: d
                            }, "SubscribeModal")
                        })), r.createElement(b.Ya, {
                            padding: {
                                x: 2
                            },
                            margin: {
                                top: 3
                            }
                        }, r.createElement(b.W, {
                            fontSize: b.Ca.Size3
                        }, Object(g.d)("Subscribe to {channelName}", {
                            channelName: d
                        }, "SubscribeModal"))), r.createElement(w, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin,
                            inPrimeRegion: i,
                            isEsportChannel: o,
                            isNonStandardSub: s,
                            isStaff: !(!this.props.sessionUser || !this.props.sessionUser.roles) && this.props.sessionUser.roles.isStaff,
                            isSubscribed: a,
                            userHasPrime: !1,
                            productId: u ? u.id : "",
                            subbedTier: l || k.a.Prime,
                            handleSubMenuAction: this.handleSubMenuAction
                        }))
                    }, n.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, n.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        var e = g.n.get(u.d, "");
                        if (e) {
                            var n = this.props.data.user;
                            if (n && n.subscriptionProducts)
                                if (this.props.showSubscriptionCheckoutModal && this.props.showLoginModal) n.subscriptionProducts.filter(function(e) {
                                    return e
                                }).map(function(e) {
                                    return e.name
                                }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                    isAnonymous: g.n.get(u.a, !1),
                                    mysteryGiftCount: Number(g.n.get(u.c, "")),
                                    productName: e,
                                    recipientLogin: g.n.get(u.e, ""),
                                    trackingContext: {
                                        source: N.c.ChannelSubscribeButton
                                    }
                                }) : (g.n.set("subscription-target-login", this.props.channelLogin), this.props.showLoginModal()) : Object(u.f)()
                        }
                    }, n
                }(r.Component),
                E = Object(v.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                })(F);
            var I = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.handleClose = function() {
                        n.props.closeModal()
                    }, n
                }
                return a.__extends(n, e), n.prototype.componentWillUnmount = function() {
                    this.props.onClose && this.props.onClose()
                }, n.prototype.render = function() {
                    return r.createElement(b.Fb, {
                        className: "subscribe-modal",
                        background: b.r.Base
                    }, r.createElement(E, {
                        authToken: this.props.authToken,
                        sessionUser: this.props.sessionUser,
                        onClose: this.handleClose,
                        channelLogin: this.props.channelLogin,
                        showLoginModal: this.props.showLoginModal,
                        showSubscriptionCheckoutModal: this.props.showSubscriptionCheckoutModal
                    }), r.createElement(d.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, n
            }(r.Component);
            var L = Object(o.connect)(function(e) {
                return {
                    authToken: Object(p.a)(e),
                    sessionUser: Object(p.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: m.c,
                    showLoginModal: Object(u.g)(c.a.ChannelSubscriptionButton),
                    showSubscriptionCheckoutModal: function(e) {
                        var n = a.__rest(e, []);
                        return Object(m.d)(l.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([t.e(0), t.e(210)]).then(t.bind(null, "KJv/"))
                            },
                            componentProps: n
                        })
                    }
                }, e)
            })(I);
            t.d(n, !1, function() {
                return I
            }), t.d(n, "a", function() {
                return L
            }), t.d(n, !1, function() {
                return "subscription-target-login"
            }), t.d(n, !1, function() {
                return i
            }), t.d(n, !1, function() {
                return F
            }), t.d(n, !1, function() {
                return E
            })
        },
        eAAt: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("kduP"),
                r = t("Ue10"),
                o = function(e) {
                    return i.createElement(r.Qa, {
                        margin: {
                            right: 1
                        },
                        overflow: r.db.Hidden,
                        flexShrink: 0
                    }, i.createElement(r.U, {
                        to: {
                            pathname: Object(a.c)(e.name),
                            state: {
                                content: "current_game",
                                medium: "twitch_channel"
                            }
                        },
                        "data-a-target": "stream-box-art-link"
                    }, i.createElement(r.I, {
                        src: e.boxArtURL,
                        alt: e.name,
                        aspect: r.p.Aspect3x4,
                        size: e.size
                    })))
                };
            t.d(n, "a", function() {
                return o
            })
        },
        eaNi: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MultiStream_SubscribeModal_User"
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
                                                value: "emoteSetID"
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
                                                value: "canPrimeSubscribe"
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
                                                        value: "purchasedWithPrime"
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
                                                value: "isStaff"
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
                    end: 418
                }
            };
            t.loc.source = {
                body: "query MultiStream_SubscribeModal_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nbannerImageURL\nprofileImageURL(width:300)\nsubscriptionProducts {\nid\nemoteSetID\nname\nself {\npaidUpgradePromotion {\nnewPrice\n}\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\npendingSubscription {\nstartsAt\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        hy6r: function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("q1tI"),
                a = t("fvjX"),
                r = t("V+GM"),
                o = t("NvVO"),
                s = t("2xye"),
                l = t("GnwI"),
                d = t("mrSG"),
                u = t("9C/b"),
                c = t("/7QA"),
                m = t("ZDlU"),
                p = t("LA8z"),
                b = t("4VQm"),
                g = t("yR8l"),
                v = t("8/mp"),
                k = t("Ue10"),
                h = function(e) {
                    var n = e.member,
                        t = null;
                    n.live && (t = i.createElement(k.Ya, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(k.K, {
                        status: k.M.Live
                    })));
                    var a = null;
                    n.live && (a = i.createElement(k.Ya, null, i.createElement(k.W, {
                        color: k.O.Alt2
                    }, Object(c.f)(n.viewersCount))));
                    return i.createElement(k.Va, {
                        type: k.Wa.Alpha,
                        onClick: function() {
                            e.onClick({
                                userID: n.userID,
                                live: n.live,
                                login: n.login
                            })
                        },
                        selected: e.isSelected
                    }, i.createElement(k.Fb, {
                        display: k.X.Flex,
                        alignItems: k.f.Center,
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, i.createElement(k.q, {
                        alt: n.displayName,
                        size: 30,
                        src: n.profileImageURL
                    }), i.createElement(k.Ya, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: k.db.Hidden,
                        margin: {
                            left: 1
                        }
                    }, i.createElement(k.W, {
                        ellipsis: !0,
                        fontSize: k.Ca.Size5
                    }, n.displayName)), i.createElement(k.Ya, {
                        display: k.X.Flex
                    }, t, a)))
                },
                f = function() {
                    function e(e) {
                        this.data = e
                    }
                    return e.prototype.getTeamID = function() {
                        return this.data.team && this.data.team.id || ""
                    }, e.prototype.getLiveMemberPageInfo = function() {
                        return this.data.team && this.data.team.liveMembers && this.data.team.liveMembers.pageInfo || null
                    }, e.prototype.getMemberPageInfo = function() {
                        return this.data.team && this.data.team.members && this.data.team.members.pageInfo || null
                    }, e.prototype.getLiveMemberEdges = function() {
                        return this.data.team && this.data.team.liveMembers && this.data.team.liveMembers.edges || []
                    }, e.prototype.getMemberEdges = function() {
                        return this.data.team && this.data.team.members && this.data.team.members.edges || []
                    }, e.prototype.hasNextLiveMembersPage = function() {
                        return this.data.team && this.data.team.liveMembers && this.data.team.liveMembers.pageInfo.hasNextPage || !1
                    }, e.prototype.hasNextMembersPage = function() {
                        return this.data.team && this.data.team.members && this.data.team.members.pageInfo.hasNextPage || !1
                    }, e.prototype.getTotalMemberCount = function() {
                        return this.data.team && this.data.team.allMembers && this.data.team.allMembers.totalCount || 0
                    }, e.prototype.getTotalEdgeCount = function() {
                        return this.getLiveMemberEdges().length + this.getMemberEdges().length
                    }, e.prototype.getAllMembers = function() {
                        var e = this.getLiveMembers();
                        if (this.hasNextLiveMembersPage()) return e;
                        var n = new Set(e.map(function(e) {
                                return e.userID
                            })),
                            t = this.getMembers().filter(function(e) {
                                return !n.has(e.userID)
                            });
                        return e.concat(t)
                    }, e.prototype.getLiveMembers = function() {
                        for (var e = new Set, n = [], t = 0, i = this.getLiveMemberEdges(); t < i.length; t++) {
                            var a = i[t],
                                r = a && a.node;
                            if (r) {
                                var o = r.id,
                                    s = r.displayName,
                                    l = r.login,
                                    d = r.stream;
                                if (o && s && l && d) {
                                    var u = d.viewersCount || 0,
                                        c = r.profileImageURL || "";
                                    e.has(o) || (e.add(o), n.push({
                                        userID: o,
                                        displayName: s,
                                        live: !0,
                                        viewersCount: u,
                                        profileImageURL: c,
                                        login: l
                                    }))
                                }
                            }
                        }
                        return n.sort(function(e, n) {
                            return n.viewersCount - e.viewersCount
                        }), n
                    }, e.prototype.getMembers = function() {
                        for (var e = new Set, n = [], t = 0, i = this.getMemberEdges(); t < i.length; t++) {
                            var a = i[t],
                                r = a && a.node;
                            if (r) {
                                var o = r.id,
                                    s = r.displayName,
                                    l = r.login;
                                o && s && l && (e.has(o) || (e.add(o), n.push({
                                    userID: o,
                                    displayName: s,
                                    live: !1,
                                    viewersCount: 0,
                                    profileImageURL: r.profileImageURL,
                                    login: l
                                })))
                            }
                        }
                        return n
                    }, e
                }();

            function y(e, n) {
                return e.concat(n)
            }
            var S, N = function(e) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var t = e[n] && e[n].cursor;
                        if (t) return t
                    }
                    return null
                },
                _ = function(e, n) {
                    return n || e || {
                        __typename: "PageInfo",
                        hasNextPage: !1
                    }
                },
                C = function(e) {
                    var n = new f(e),
                        t = N(n.getLiveMemberEdges());
                    if (n.hasNextLiveMembersPage() && t) return {
                        liveMembersCursor: t,
                        withLiveMembers: !0,
                        membersCursor: null,
                        withMembers: !1
                    };
                    var i = N(n.getMemberEdges());
                    return n.hasNextMembersPage() && i ? {
                        liveMembersCursor: null,
                        withLiveMembers: !1,
                        membersCursor: i,
                        withMembers: !0
                    } : {
                        liveMembersCursor: null,
                        withLiveMembers: !1,
                        membersCursor: null,
                        withMembers: !1
                    }
                },
                w = t("xU3t"),
                F = (t("J/U3"), ["scroll", "wheel", "mousewheel", "DOMMouseScroll", "keyup", "mousedown"]),
                E = 10,
                I = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            activeUserID: "",
                            showBackToTop: !1
                        }, n.handleMemberItemClick = function(e) {
                            n.setState({
                                activeUserID: e.userID
                            }), n.props.onMemberItemClick(e)
                        }, n.scrollToTop = function() {
                            n.scroll && (n.scroll.scrollToTop(), n.setState({
                                showBackToTop: !1
                            }))
                        }, n.handleScrollEvent = function(e) {
                            n.scroll && n.scroll.scrollContent && (e.which > 0 || "mousedown" === e.type || "mousewheel" === e.type || "wheel" === e.type) && (n.scroll.scrollContent.scrollHeight - n.scroll.scrollContent.scrollTop <= n.scroll.scrollContent.scrollHeight - E ? n.setState({
                                showBackToTop: !0
                            }) : n.setState({
                                showBackToTop: !1
                            }))
                        }, n.saveScrollRef = function(e) {
                            n.scroll = e
                        }, n
                    }
                    return d.__extends(n, e), n.prototype.componentDidMount = function() {
                        var e = this;
                        F.forEach(function(n) {
                            e.scroll && e.scroll.scrollContent && e.scroll.scrollContent.addEventListener(n, e.handleScrollEvent)
                        }), this.props.latencyTracking.reportInteractive()
                    }, n.prototype.componentWillUnmount = function() {
                        var e = this;
                        F.forEach(function(n) {
                            e.scroll && e.scroll.scrollContent && e.scroll.scrollContent.removeEventListener(n, e.handleScrollEvent)
                        })
                    }, n.prototype.componentDidUpdate = function() {
                        var e = this;
                        F.forEach(function(n) {
                            e.scroll && e.scroll.scrollContent && e.scroll.scrollContent.addEventListener(n, e.handleScrollEvent)
                        })
                    }, n.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading) return null;
                        var n = this.props.data.members.map(function(n) {
                                var t = e.state.activeUserID === n.userID;
                                return i.createElement(h, {
                                    member: n,
                                    onClick: e.handleMemberItemClick,
                                    isSelected: t,
                                    key: n.userID
                                })
                            }),
                            t = i.createElement(k.Fb, {
                                className: "member-list__scrollable-container",
                                display: k.X.Flex,
                                flexDirection: k.Aa.Column,
                                background: k.r.Base,
                                elevation: 1
                            }, i.createElement(b.b, {
                                scrollRef: this.saveScrollRef
                            }, i.createElement(k.Ya, null, n, i.createElement("div", {
                                style: {
                                    height: "2em "
                                }
                            }), i.createElement(v.a, {
                                loadMore: this.props.loadMore,
                                enabled: this.props.data.infiniteScrollEnabled,
                                contentLength: this.props.data.numLoaded
                            }))), i.createElement(k.Ya, {
                                className: "member-list__back-to-top-placeholder",
                                position: k.kb.Relative
                            }, this.backToTop()));
                        return 0 === this.props.data.total && (t = i.createElement(k.Fb, {
                            className: "member-list__scrollable-container",
                            display: k.X.Flex,
                            flexDirection: k.Aa.Column,
                            background: k.r.Base,
                            elevation: 1,
                            justifyContent: k.Xa.Center,
                            alignItems: k.f.Center
                        }, i.createElement(k.S, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/112291/2.0",
                            alt: Object(c.d)("No team members", "TeamLandingPage_MemberList")
                        }), i.createElement(k.W, {
                            color: k.O.Alt2,
                            fontSize: k.Ca.Size6
                        }, Object(c.d)("No team members to display", "TeamLandingPage_MemberList")))), i.createElement(k.Ya, {
                            display: k.X.Flex,
                            flexDirection: k.Aa.Column
                        }, i.createElement(k.Ya, {
                            display: k.X.Flex,
                            flexShrink: 0,
                            alignItems: k.f.Center,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(k.Ya, {
                            flexGrow: 1,
                            flexShrink: 1
                        }, i.createElement(k.W, {
                            bold: !0,
                            fontSize: k.Ca.Size4
                        }, Object(c.d)("Team Members", "TeamLandingPage_MemberList"))), i.createElement(k.W, {
                            color: k.O.Alt2
                        }, Object(c.f)(this.props.data.total))), t)
                    }, n.prototype.backToTop = function() {
                        return this.state.showBackToTop ? i.createElement(k.i, {
                            type: k.n.FadeIn,
                            enabled: !0
                        }, i.createElement(k.Qa, {
                            display: k.X.Flex,
                            justifyContent: k.Xa.Center,
                            alignItems: k.f.Center,
                            position: k.kb.Absolute,
                            padding: .5,
                            attachBottom: !0,
                            fullWidth: !0
                        }, i.createElement("div", {
                            className: "member-list__back-to-top",
                            onClick: this.scrollToTop
                        }, Object(c.d)("Back to Top", "TeamLandingPage_MemberList")))) : null
                    }, n
                }(i.Component),
                L = Object(a.compose)(Object(l.b)("MemberList"), Object(g.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                teamName: e.teamName,
                                withLiveMembers: !0,
                                withMembers: !0
                            }
                        }
                    },
                    props: function(e) {
                        var n = new f(e.data);
                        return {
                            data: {
                                members: n.getAllMembers(),
                                total: n.getTotalMemberCount(),
                                numLoaded: n.getTotalEdgeCount(),
                                infiniteScrollEnabled: !e.data.loading && function(e) {
                                    var n = C(e);
                                    return n.withLiveMembers || n.withMembers
                                }(e.data),
                                loading: e.data.loading
                            },
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: w,
                                    variables: d.__assign({}, e.data.variables, C(e.data)),
                                    updateQuery: function(e, n) {
                                        return function(e, n) {
                                            if (!e.team && !n.team) return {
                                                team: null
                                            };
                                            var t = new f(e),
                                                i = new f(n),
                                                a = y(t.getLiveMemberEdges(), i.getLiveMemberEdges()),
                                                r = _(t.getLiveMemberPageInfo(), i.getLiveMemberPageInfo()),
                                                o = y(t.getMemberEdges(), i.getMemberEdges()),
                                                s = _(t.getMemberPageInfo(), i.getMemberPageInfo());
                                            return {
                                                team: {
                                                    __typename: "Team",
                                                    id: t.getTeamID(),
                                                    liveMembers: {
                                                        __typename: "UserConnection",
                                                        edges: a,
                                                        pageInfo: r
                                                    },
                                                    members: {
                                                        __typename: "UserConnection",
                                                        edges: o,
                                                        pageInfo: s
                                                    },
                                                    allMembers: {
                                                        __typename: "UserConnection",
                                                        totalCount: t.getTotalMemberCount()
                                                    }
                                                }
                                            }
                                        }(e, n.fetchMoreResult)
                                    }
                                })
                            }
                        }
                    }
                }))(I),
                B = t("6x+I"),
                T = Object(a.compose)(Object(l.b)("TeamsDescription", {
                    autoReportInteractive: !0
                }))(function(e) {
                    return e.description ? i.createElement(k.Ya, {
                        margin: {
                            top: 2
                        }
                    }, i.createElement(k.W, {
                        bold: !0,
                        fontSize: k.Ca.Size4
                    }, e.displayName), i.createElement(k.Fb, {
                        color: k.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(k.fc, null, i.createElement(B, {
                        source: e.description
                    })))) : null
                }),
                M = t("eJ65"),
                D = t("eDVu"),
                O = t("0Log"),
                P = t("/aPz"),
                U = t("ZLqn"),
                A = t("eAAt"),
                x = t("0EKw"),
                j = t("5goO"),
                R = t("QjI3"),
                V = t("eFQ3"),
                G = t("6J1Z"),
                W = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.getGame = function() {
                            return n.props.data.user && n.props.data.user.stream && n.props.data.user.stream.game
                        }, n.getTitle = function() {
                            var e = n.props.data.user;
                            if (e && e.broadcastSettings && e.broadcastSettings.title) return e.broadcastSettings.title
                        }, n.renderGame = function() {
                            var e = n.getGame();
                            return e && e.name ? i.createElement(x.a, {
                                name: e.name
                            }) : null
                        }, n.renderGameBoxArt = function() {
                            var e = n.getGame(),
                                t = e && e.name ? e.name : "",
                                a = e && e.boxArtURL ? e.boxArtURL : "";
                            return e && t && a ? i.createElement(A.a, {
                                name: t,
                                boxArtURL: a,
                                size: k.J.Size4
                            }) : null
                        }, n.renderTeam = function() {
                            var e = n.props.data.user;
                            return e && e.primaryTeam ? i.createElement(j.a, {
                                name: e.primaryTeam.name,
                                displayName: e.primaryTeam.displayName
                            }) : null
                        }, n.renderUserIcon = function() {
                            var e = n.props.data.user;
                            return e ? i.createElement(k.Ya, {
                                margin: {
                                    right: 1
                                },
                                overflow: k.db.Hidden,
                                flexShrink: 0
                            }, i.createElement(k.I, {
                                src: e.profileImageURL || "",
                                alt: name,
                                aspect: k.p.Aspect1x1,
                                size: k.J.Size4
                            })) : null
                        }, n
                    }
                    return d.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        return i.createElement(k.Fb, {
                            className: "teams-player",
                            background: k.r.Base,
                            elevation: 1,
                            fullWidth: !0
                        }, this.renderTopBar(), i.createElement(k.o, {
                            ratio: k.p.Aspect16x9
                        }, i.createElement(V.b, {
                            channelLogin: this.props.channelLogin,
                            vodID: "",
                            disableTheatreButton: !0,
                            playerTypeOverride: V.a.Site
                        })), this.renderBottomBar())
                    }, n.prototype.renderTopBar = function() {
                        var e = this.props.data.user;
                        if (!e || !e.id) return null;
                        var n = Object(c.f)(e.stream && e.stream.viewersCount ? e.stream.viewersCount : 0);
                        return i.createElement(k.Fb, {
                            display: k.X.Flex,
                            flexWrap: k.Ba.Wrap,
                            justifyContent: k.Xa.Between,
                            padding: 1
                        }, i.createElement(k.G, {
                            row: !0
                        }, this.renderUserIcon(), i.createElement(k.H, {
                            overflow: k.db.Hidden
                        }, e.displayName && i.createElement(k.Ya, {
                            margin: {
                                bottom: .5
                            },
                            ellipsis: !0
                        }, i.createElement(k.U, {
                            to: "/" + this.props.channelLogin
                        }, i.createElement(k.W, {
                            type: k.Wb.Span,
                            fontSize: k.Ca.Size4,
                            title: e.displayName
                        }, e.displayName))), i.createElement(k.Fb, {
                            display: k.X.Flex,
                            flexWrap: k.Ba.Wrap,
                            color: k.O.Alt2
                        }, e.stream && e.stream.id && i.createElement(k.Fb, {
                            color: k.O.Live,
                            display: k.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(k.Eb, {
                            value: n,
                            label: Object(c.d)("Watching Now", "TeamPlayer"),
                            icon: k.ub.GlyphLive,
                            "data-a-target": "channel-viewers-count"
                        })), i.createElement(k.Ya, {
                            margin: {
                                right: 1
                            },
                            display: k.X.Flex
                        }, i.createElement(k.Eb, {
                            value: Object(c.d)("{followerCount, number}", {
                                followerCount: e.followers && e.followers.totalCount ? e.followers.totalCount : 0
                            }, "TeamPlayer"),
                            label: Object(c.d)("Followers", "TeamPlayer"),
                            icon: k.ub.GlyphFollowers
                        })), i.createElement(k.Ya, {
                            display: k.X.Flex
                        }, i.createElement(k.Eb, {
                            value: Object(c.d)("{channelCount, number}", {
                                channelCount: e.profileViewCount || 0
                            }, "TeamPlayer"),
                            label: Object(c.d)("Total Views", "TeamPlayer"),
                            icon: k.ub.GlyphViews
                        }))))), i.createElement(k.Ya, {
                            display: k.X.Flex,
                            alignItems: k.f.Center
                        }, e.description && i.createElement(M.a, null, i.createElement(k.z, {
                            type: k.F.Hollow
                        }, Object(c.d)("Info", "Team Player")), i.createElement(k.u, {
                            size: k.w.Medium,
                            direction: k.v.BottomRight
                        }, i.createElement(k.Ya, {
                            zIndex: k.jc.Above,
                            padding: 1
                        }, i.createElement(k.W, {
                            type: k.Wb.Span,
                            fontSize: k.Ca.Size6,
                            color: k.O.Alt2
                        }, e.description)))), i.createElement(k.Ya, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(R.a, {
                            channelLogin: this.props.channelLogin
                        }))))
                    }, n.prototype.renderBottomBar = function() {
                        var e = this.getTitle(),
                            n = this.renderGame(),
                            t = this.renderTeam();
                        return i.createElement(k.Fb, {
                            alignItems: k.f.Center,
                            display: k.X.Flex,
                            flexWrap: k.Ba.NoWrap,
                            justifyContent: k.Xa.Between,
                            padding: 1
                        }, i.createElement(k.Ya, {
                            overflow: k.db.Hidden
                        }, i.createElement(k.G, {
                            row: !0
                        }, this.renderGameBoxArt(), i.createElement(k.H, {
                            overflow: k.db.Hidden
                        }, i.createElement(k.Ya, {
                            margin: {
                                bottom: .5
                            },
                            ellipsis: !0
                        }, i.createElement(k.W, {
                            type: k.Wb.Span,
                            fontSize: k.Ca.Size4,
                            title: e
                        }, e)), i.createElement(k.Ya, {
                            display: k.X.Flex,
                            flexWrap: k.Ba.Wrap
                        }, n, n && t && i.createElement(k.Ya, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(k.W, {
                            bold: !0,
                            color: k.O.Alt2,
                            fontSize: k.Ca.Size5
                        }, "•")), t)))), i.createElement(k.Ya, {
                            className: "teams-player__action-container",
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            justifyContent: k.Xa.End
                        }, i.createElement(k.Ya, {
                            display: k.X.Flex,
                            margin: {
                                x: 1
                            }
                        }, this.props.data.user && i.createElement(U.a, {
                            login: this.props.channelLogin,
                            displayName: this.props.data.user.displayName || "",
                            title: e || ""
                        }))))
                    }, n
                }(i.Component),
                q = Object(a.compose)(Object(l.b)("TeamsPlayer"), Object(g.a)(G, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(D.a)(function(e) {
                    return {
                        query: G,
                        topic: e.data.user && e.data.user.id ? Object(P.e)(e.data.user.id) : "",
                        skip: !(!e.data.loading && !e.data.error && e.data.user),
                        variables: {
                            login: e.channelLogin
                        },
                        type: O.PubsubMessageType.BroadcastSettingsUpdate,
                        mutator: function(e, n) {
                            return n.user && n.user.broadcastSettings && n.user.broadcastSettings.id && (n.user.broadcastSettings.title = e.status || e.old_status), n
                        }
                    }
                }))(W),
                z = t("ST9J");
            t("GTf2");
            ! function(e) {
                e.LogoImage = "teamspagebody-logo", e.BannerImage = "teamspagebody-banner", e.BackgroundImage = "teamspagebody-background"
            }(S || (S = {}));
            var Y = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {}, n.changeSelectedMember = function(e) {
                            e.live ? n.setState({
                                activeUserLogin: e.login
                            }) : n.props.history.push({
                                pathname: "/" + e.login
                            })
                        }, n
                    }
                    return d.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        if (!this.props.data.loading) {
                            if (this.props.data.error) return i.createElement(m.a, {
                                message: Object(c.d)("An error occurred on this page", "TeamsPageBody")
                            });
                            if (!this.props.data.team || !this.props.data.team.id) return i.createElement(p.a, null)
                        }
                        return i.createElement("div", {
                            className: "teams-page-body__outer-container teams-page-body__team-asset",
                            style: this.getBackgroundStyle(),
                            "data-test-selector": S.BackgroundImage
                        }, i.createElement(b.b, null, i.createElement(k.Ya, {
                            display: k.X.Flex,
                            justifyContent: k.Xa.Center,
                            padding: {
                                top: 3,
                                left: 3,
                                right: 3
                            }
                        }, i.createElement(k.Fb, {
                            className: "teams-page-body__inner-container",
                            background: k.r.Alt2,
                            display: k.X.Flex,
                            padding: 2,
                            fullHeight: !0
                        }, i.createElement(k.Ya, {
                            className: "teams-page-body__column--left",
                            display: k.X.Flex,
                            flexDirection: k.Aa.Column,
                            margin: {
                                right: 2
                            }
                        }, this.renderLogo(), i.createElement(L, {
                            teamName: this.props.teamName,
                            onMemberItemClick: this.changeSelectedMember
                        })), i.createElement(k.Ya, {
                            className: "teams-page-body__column--right"
                        }, this.renderBanner(), this.renderPlayer(), this.renderTeamDescription())))))
                    }, n.prototype.getBackgroundStyle = function() {
                        var e = this.props.data.team && this.props.data.team.backgroundImageURL;
                        return e ? {
                            backgroundImage: 'url("' + e + '")'
                        } : {}
                    }, n.prototype.renderLogo = function() {
                        var e = this.props.data.team && this.props.data.team.logoURL;
                        return e ? i.createElement("div", {
                            className: "teams-page-body__team-asset teams-page-body__foreground-image teams-page-body__logo",
                            style: this.getLogoStyle(e),
                            "data-test-selector": S.LogoImage
                        }) : null
                    }, n.prototype.getLogoStyle = function(e) {
                        return {
                            backgroundImage: 'url("' + e + '")'
                        }
                    }, n.prototype.renderBanner = function() {
                        var e = this.props.data.team && this.props.data.team.bannerURL;
                        return e ? i.createElement("div", {
                            className: "teams-page-body__team-asset teams-page-body__foreground-image teams-page-body__banner",
                            style: this.getBannerStyle(e),
                            "data-test-selector": S.BannerImage
                        }) : null
                    }, n.prototype.getBannerStyle = function(e) {
                        return {
                            backgroundImage: 'url("' + e + '")'
                        }
                    }, n.prototype.renderTeamDescription = function() {
                        var e = this.props.data.team && this.props.data.team.displayName || "",
                            n = this.props.data.team && this.props.data.team.description || "";
                        return i.createElement(T, {
                            displayName: e,
                            description: n
                        })
                    }, n.prototype.renderPlayer = function() {
                        var e = this.getPlayerLogin();
                        return e ? i.createElement(q, {
                            channelLogin: e
                        }) : null
                    }, n.prototype.getPlayerLogin = function() {
                        if (this.state && this.state.activeUserLogin) return this.state.activeUserLogin;
                        var e = this.props.data && this.props.data.team;
                        return e ? function(e) {
                            var n = e && e.liveFeaturedChannels && e.liveFeaturedChannels.edges && e.liveFeaturedChannels.edges.length > 0 && e.liveFeaturedChannels.edges[0] && e.liveFeaturedChannels.edges[0].node,
                                t = n && n.stream && n.login;
                            if (t) return t;
                            var i = e && e.liveMembers && e.liveMembers.edges && e.liveMembers.edges.length > 0 && e.liveMembers.edges[0] && e.liveMembers.edges[0].node,
                                a = i && i.stream && i.login;
                            if (a) return a;
                            var r = e && e.members && e.members.edges && e.members.edges.length > 0 && e.members.edges[0] && e.members.edges[0].node,
                                o = r && r.login;
                            return o || e && e.owner && e.owner.login || ""
                        }(e) : ""
                    }, n
                }(i.Component),
                X = Object(a.compose)(u.a, Object(l.b)("TeamsPageBody"), Object(g.a)(z, {
                    options: function(e) {
                        return {
                            variables: {
                                teamName: e.teamName
                            }
                        }
                    }
                }))(Y),
                H = t("Gw3k"),
                Q = function(e) {
                    return i.createElement(k.Ya, {
                        display: k.X.Flex,
                        flexDirection: k.Aa.Column,
                        flexWrap: k.Ba.NoWrap,
                        fullHeight: !0
                    }, i.createElement(H.a, null), i.createElement(k.Ya, {
                        flexGrow: 1,
                        display: k.X.Flex,
                        fullHeight: !0
                    }, e.children))
                },
                K = Object(a.compose)(Object(l.b)("TeamsLandingPage", {
                    destination: o.a.TeamsLandingPage,
                    autoReportInteractive: !0
                }), Object(r.a)({
                    location: s.PageviewLocation.TeamsLandingPage
                }))(function(e) {
                    return i.createElement(Q, null, i.createElement(X, {
                        teamName: e.match.params.teamName
                    }))
                });
            t.d(n, "TeamsLandingPage", function() {
                return K
            })
        },
        jeZI: function(e, n, t) {},
        r62z: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return l
            }), t.d(n, "c", function() {
                return d
            }), t.d(n, "b", function() {
                return u
            }), t.d(n, "d", function() {
                return c
            });
            var i = t("+GjP"),
                a = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(i.e)(a, {
                    u: e
                })
            }

            function d(e, n) {
                return Object(i.e)(r, {
                    url: e,
                    text: n
                })
            }

            function u(e, n) {
                return Object(i.e)(o, {
                    url: e,
                    title: n
                })
            }

            function c(e) {
                return Object(i.e)(s, {
                    url: e
                })
            }
        },
        tIid: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            }), t.d(n, "b", function() {
                return s
            });
            var i = t("/7QA"),
                a = "esport_insider_pass_whitelist",
                r = "esports_room_cheering_whitelist";

            function o(e, n, t) {
                return void 0 === t && (t = !1), l(a, e, n, t)
            }

            function s(e, n) {
                return l(r, e, n)
            }

            function l(e, n, t, a) {
                void 0 === a && (a = !1);
                var r = i.b.get(e, []),
                    o = t && t.roles && t.roles.isStaff || a;
                return r.includes(n) || r.includes(n + "-staff") && o
            }
        },
        wbMx: function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return i
            }), t.d(n, "a", function() {
                return u
            });
            var i, a = t("mrSG"),
                r = t("q1tI"),
                o = t("/7QA"),
                s = t("Jxh/"),
                l = t("r62z"),
                d = t("Ue10");
            t("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(i || (i = {}));
            var u = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.renderLink = function() {
                        var e = "social-button__link " + t.addSocialClassModifier("social-button__link");
                        return t.props.type === i.Download ? r.createElement("a", a.__assign({
                            href: t.props.url,
                            target: "_blank",
                            className: e,
                            onClick: t.onShareClickHandler
                        }, Object(d.kc)(t.props), {
                            download: t.props.text
                        }), t.renderIcon()) : t.isLink() ? r.createElement("a", a.__assign({
                            href: t.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: t.onShareClickHandler
                        }, Object(d.kc)(t.props)), t.renderIcon()) : r.createElement("button", a.__assign({
                            onClick: t.copyPageUrl,
                            onMouseLeave: t.clearIsCopiedStatus,
                            className: e
                        }, Object(d.kc)(t.props)), t.renderIcon())
                    }, t.onShareClickHandler = function() {
                        t.props.onShareClick && t.props.onShareClick(t.props.type)
                    }, t.clearIsCopiedStatus = function() {
                        t.setState({
                            isCopied: !1
                        })
                    }, t.getUrl = function() {
                        return t.props.url || window.location.href
                    }, t.copyPageUrl = function(e) {
                        e && e.preventDefault(), t.props.onShareClick && t.props.onShareClick(t.props.type), Object(s.a)(t.getUrl()), t.setState({
                            isCopied: !0
                        })
                    }, t.renderIcon = function() {
                        var e = t.getAssetFromType();
                        return r.createElement(d.Ya, {
                            className: "social-button__icon " + t.addSocialClassModifier("social-button__icon"),
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Xa.Center
                        }, r.createElement(d.tb, {
                            asset: e
                        }))
                    }, t.isLink = function() {
                        return t.props.type !== i.Copy
                    }, t.getTooltipFromType = function() {
                        switch (t.props.type) {
                            case i.Twitter:
                                return "Twitter";
                            case i.Reddit:
                                return "Reddit";
                            case i.Facebook:
                                return "Facebook";
                            case i.VKontakte:
                                return "VKontakte";
                            case i.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case i.Copy:
                                return t.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, t.getAssetFromType = function() {
                        switch (t.props.type) {
                            case i.Twitter:
                                return d.ub.Twitter;
                            case i.Facebook:
                                return d.ub.Facebook;
                            case i.VKontakte:
                                return d.ub.VKontakte;
                            case i.Reddit:
                                return d.ub.Reddit;
                            case i.Download:
                                return d.ub.Download;
                            case i.Copy:
                            default:
                                return d.ub.Copy
                        }
                    }, t.addSocialClassModifier = function(e) {
                        switch (t.props.type) {
                            case i.Twitter:
                                return e + "--twitter";
                            case i.Reddit:
                                return e + "--reddit";
                            case i.Facebook:
                                return e + "--facebook";
                            case i.VKontakte:
                                return e + "--vkontakte";
                            case i.Download:
                                return e + "--download";
                            case i.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, t.getLinkTarget = function() {
                        var e = t.props,
                            n = e.text,
                            a = e.type,
                            r = t.getUrl(),
                            o = n || "";
                        switch (a) {
                            case i.Reddit:
                                return Object(l.b)(r, o);
                            case i.VKontakte:
                                return Object(l.d)(r);
                            case i.Facebook:
                                return Object(l.a)(r);
                            case i.Twitter:
                                return Object(l.c)(r, o);
                            default:
                                return ""
                        }
                    }, t.state = {
                        isCopied: !1
                    }, t
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    return r.createElement(d.Ya, {
                        className: "social-button"
                    }, r.createElement(d.Zb, {
                        label: this.getTooltipFromType(),
                        direction: d.bc.Bottom
                    }, this.renderLink()))
                }, n
            }(r.Component)
        },
        xU3t: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TeamLandingMemberList"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "teamName"
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
                                value: "withLiveMembers"
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
                                value: "liveMembersCursor"
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
                                value: "withMembers"
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
                                value: "membersCursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
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
                                value: "team"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "teamName"
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
                                        value: "liveMembers"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10"
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
                                                value: "liveMembersCursor"
                                            }
                                        }
                                    }],
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
                                                    value: "withLiveMembers"
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
                                                                value: "stream"
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
                                                                        value: "viewersCount"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "__typename"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "__typename"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
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
                                                        value: "__typename"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "__typename"
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
                                        value: "members"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10"
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
                                                value: "membersCursor"
                                            }
                                        }
                                    }],
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
                                                    value: "withMembers"
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
                                                                value: "__typename"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
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
                                                        value: "__typename"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "__typename"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    alias: {
                                        kind: "Name",
                                        value: "allMembers"
                                    },
                                    name: {
                                        kind: "Name",
                                        value: "members"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                                                value: "__typename"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "__typename"
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
                    end: 695
                }
            };
            t.loc.source = {
                body: "query TeamLandingMemberList($teamName: String! $withLiveMembers: Boolean! $liveMembersCursor: Cursor $withMembers: Boolean! $membersCursor: Cursor) {\nteam(name: $teamName) {\nid\nliveMembers(first: 10 after: $liveMembersCursor) @include(if: $withLiveMembers) {\nedges {\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\nstream {\nid\nviewersCount\n__typename\n}\n__typename\n}\ncursor\n__typename\n}\npageInfo {\nhasNextPage\n__typename\n}\n}\nmembers(first: 10 after: $membersCursor) @include(if: $withMembers) {\nedges {\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n__typename\n}\ncursor\n__typename\n}\npageInfo {\nhasNextPage\n__typename\n}\n}\nallMembers: members {\ntotalCount\n__typename\n}\n__typename\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        y2dA: function(e, n, t) {},
        "z+dA": function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_SubscribeButton_User"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                value: "emoteSetID"
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
                                                value: "canPrimeSubscribe"
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
                                                        value: "purchasedWithPrime"
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
                                                        value: "endsAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isDNRd"
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
                                                        }]
                                                    }
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
                    end: 355
                }
            };
            t.loc.source = {
                body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\nname\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nendsAt\nisDNRd\nplatform\npendingSubscription {\nprice\nstartsAt\ntier\ntype\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        }
    }
]);