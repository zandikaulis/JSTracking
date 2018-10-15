(window.webpackJsonp = window.webpackJsonp || []).push([
    [79], {
        "0EKw": function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("/7QA"),
                r = t("z36O"),
                o = t("kduP"),
                s = t("Ue10"),
                l = function(e) {
                    return i.createElement(r.a, {
                        linkTo: {
                            pathname: Object(o.c)(e.name),
                            state: {
                                content: "current_game",
                                medium: "twitch_channel"
                            }
                        },
                        tooltip: Object(a.d)("Game", "GameLink"),
                        svgAsset: s.ob.NavGames,
                        title: e.name,
                        "data-a-target": "stream-game-link"
                    })
                };
            t.d(n, "a", function() {
                return l
            })
        },
        "3Bft": function(e, n, t) {
            "use strict";
            var i, a;
            t.d(n, "a", function() {
                    return i
                }), t.d(n, "b", function() {
                    return r
                }),
                function(e) {
                    e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR", e.OneTime = "ONE_TIME"
                }(i || (i = {})),
                function(e) {
                    e.PercentOff = "percent_off", e.FixedValueOff = "fixed_value_off"
                }(a || (a = {}));
            var r = {
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
                o = t("z36O"),
                s = t("Ue10"),
                l = function(e) {
                    return a.createElement(o.a, i.__assign({
                        linkTo: "/team/" + e.name,
                        svgAsset: s.ob.Team,
                        title: e.displayName,
                        tooltip: Object(r.d)("Team", "TeamLink")
                    }, Object(s.cc)(e)))
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "directories"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "nodes"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "teamsPlayerGame"
                                                    },
                                                    directives: []
                                                }, {
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "teamsPlayerDirectory"
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "teamsPlayerGame"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Game"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "teamsPlayerDirectory"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Directory"
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
                                value: "directoryType"
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
                }],
                loc: {
                    start: 0,
                    end: 502
                }
            };
            t.loc.source = {
                body: "query ChannelPage_ChannelInfoBar_User($login: String!) {\nuser(login: $login) {\nid\nlogin\ndescription\ndisplayName\nprofileImageURL(width: 70)\nbroadcastSettings {\nid\ntitle\n}\nfollowers {\ntotalCount\n}\nprimaryTeam {\nid\ndisplayName\nname\n}\nprofileViewCount\nstream {\nid\nviewersCount\n}\ndirectories {\nnodes {\n...teamsPlayerGame\n...teamsPlayerDirectory\n}\n}\n}\n}\nfragment teamsPlayerGame on Game {\nname\nboxArtURL(width: 40 height: 55)\n}\nfragment teamsPlayerDirectory on Directory {\nid\ndirectoryType\ndisplayName\nname\n}",
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
                        return a.createElement(r.Qa, {
                            readOnly: !0,
                            type: r.Sa.Text,
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
        QjI3: function(e, n, t) {
            "use strict";
            var i, a = t("mrSG"),
                r = t("q1tI"),
                o = t("/MKj"),
                s = t("fvjX"),
                l = t("ZS2+"),
                d = t("UUve"),
                u = t("1/iK"),
                c = t("aCAx"),
                m = t("kRBY"),
                p = t("GnwI"),
                v = t("oJmH"),
                g = t("/7QA"),
                b = t("2+sX"),
                k = t("u5aL"),
                f = t("eJ65"),
                h = t("yR8l"),
                y = t("x7UT"),
                S = t("3Bft"),
                N = t("tIid"),
                _ = t("ht6z"),
                C = t("/aPz"),
                w = t("D7An"),
                F = t("W8Fi"),
                E = t("br9A"),
                I = t("Ue10"),
                T = (t("a7aT"), t("z+dA"));
            ! function(e) {
                e.SubButton = "subscribe-button__dropdown", e.BalloonLayerButton = "subscribe-button__balloon-layer-btn", e.DefaultButton = "subscribe-button__default-btn", e.SubscribeBalloon = "subscribe-button__subscribe-balloon"
            }(i || (i = {}));
            var L = l.a.wrap(function() {
                    return Promise.all([t.e(0), t.e(180)]).then(t.bind(null, "f+qK"))
                }, "SubscribeBalloon"),
                B = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            inPrimeRegion: !1
                        }, n.modalLevel = "top_page", n.renderBalloonContentForBalloonLayer = function() {
                            return r.createElement(k.a, {
                                onClickOut: n.handleBalloonClickOut
                            }, r.createElement(I.Wa, {
                                "data-a-target": "sub-balloon",
                                refDelegate: n.setBalloonContentRefDelegate
                            }, n.balloonWrapperContent))
                        }, n.handleButtonClick = function() {
                            n.balloonContentRef || (n.props.balloonLayer.show({
                                direction: n.getBalloonDirection(),
                                ref: n.containerRef,
                                content: n.renderBalloonContentForBalloonLayer(),
                                contentHeight: 0,
                                closeOnScroll: !0
                            }), n.handleMenuToggle(!1))
                        }, n.handleBalloonClickOut = function() {
                            n.handleMenuToggle(!0), n.props.balloonLayer.hide({
                                force: !0
                            })
                        }, n.setBalloonWrapperContent = function(e) {
                            n.balloonWrapperContent = e
                        }, n.handleSubMenuAction = function(e) {
                            new Set([E.a.ClickCheckout, E.a.BuyGiftSub, E.a.BuyMysteryGift, E.a.BuyCustomMysteryGift, E.a.BuyGiftToPaidUpgrade, E.a.BuyPaidUpgrade]).has(e.action) && n.checkAndDisplaySubscriptionCheckout();
                            var t = !!(n.props.data.user && n.props.data.user.self && n.props.data.user.self.subscriptionBenefit),
                                i = n.props.data.requestInfo && Object(_.a)(n.props.data.requestInfo.countryCode);
                            Object(E.b)({
                                action: e.action || "",
                                channelLogin: n.props.channelLogin || "",
                                channelID: n.props.data && n.props.data.user.id,
                                checkoutButtonTier: e.checkoutButtonTier,
                                hasSubCredit: !!n.props.data.user.self && n.props.data.user.self.canPrimeSubscribe,
                                hostChannelID: n.props.hostChannelID,
                                hostChannelLogin: n.props.hostChannelLogin,
                                isMenuOpen: e.action !== E.a.OpenSubMenu,
                                mysteryGiftCount: e.mysteryGiftCount,
                                sub_location: "channel_page",
                                modal: !t,
                                modalLevel: t ? "" : n.modalLevel.slice(),
                                showPrimeContent: i,
                                giftRecipient: e.giftRecipient || null
                            }), !e.modalLevel || e.action !== E.a.ClickMoreSubOptions && e.action !== E.a.ClickBack || (n.modalLevel = e.modalLevel)
                        }, n.handleMenuToggle = function(e) {
                            n.handleSubMenuAction({
                                action: e ? E.a.CloseSubMenu : E.a.OpenSubMenu
                            })
                        }, n.getBalloonDirection = function() {
                            var e = n.props.balloonDirection || I.v.BottomRight;
                            return n.props.hostChannelID && (e = I.v.TopLeft), e
                        }, n.setContainerRefDelegate = function(e) {
                            n.containerRef = e
                        }, n.setBalloonContentRefDelegate = function(e) {
                            n.balloonContentRef = e
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive(), this.checkAndDisplaySubscriptionCheckout()
                    }, n.prototype.componentDidUpdate = function(e) {
                        this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.props.data && !this.props.data.loading && this.props.reportInteractive(), !this.isUserDataReady(e) && this.isUserDataReady(this.props) && this.checkAndDisplaySubscriptionCheckout()
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                    }, n.prototype.componentWillUnmount = function() {
                        Object(d.d)()
                    }, n.prototype.render = function() {
                        if (!this.isUserDataReady(this.props) || !this.hasSubscriptionProducts(this.props)) return null;
                        if (this.props.hideEsportsSubscription && Object(N.a)(this.props.data.user.id, this.props.sessionUser)) return null;
                        var e = this.props.data.requestInfo && Object(_.a)(this.props.data.requestInfo.countryCode),
                            n = !!(this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                            t = Object(N.a)(this.props.data.user.id, this.props.sessionUser),
                            a = 1 === this.props.data.user.subscriptionProducts.length,
                            o = null;
                        this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && (o = this.props.data.user.self.subscriptionBenefit.purchasedWithPrime ? S.b.Prime : this.props.data.user.self.subscriptionBenefit.tier, this.modalLevel = ""), this.props.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && (a = !0);
                        var s, l = n ? Object(g.d)("All-Access Pass", "SubscribeButton") : Object(g.d)("Get the All-Access Pass", "SubscribeButton"),
                            d = this.props.data.user.self && Object(F.h)(this.props.data.user.subscriptionProducts, this.props.data.user.self.subscriptionBenefit);
                        if (n) {
                            var u = "";
                            if (u = a ? Object(g.d)("Subscribed", "SubscribeButton") : d ? Object(g.d)("Continue Sub for $1", "SubscribeButton") : Object(g.d)("Gift A Sub", "SubscribeButton"), s = this.props.hostChannelID ? Object(g.d)("Subscribed to {username}", {
                                    username: this.props.data.user.displayName
                                }, "SubscribeButton") : u, a && !t) return r.createElement(I.z, {
                                disabled: !0,
                                ariaLabel: s,
                                icon: I.ob.Star
                            }, s);
                            t && (s = l)
                        } else s = t ? l : this.props.hostChannelID ? Object(g.d)("Subscribe to {username}", {
                            username: this.props.data.user.displayName
                        }, "SubscribeButton") : Object(g.d)("Subscribe", "SubscribeButton");
                        var c = n ? "subscribed-button" : "subscribe-button",
                            m = r.createElement(I.z, {
                                ariaLabel: s,
                                "data-a-target": c,
                                "data-test-selector": i.SubButton,
                                dropdown: !this.props.hideDropdownArrow,
                                fullWidth: !0,
                                icon: this.getButtonIcon(n, o),
                                onClick: this.props.renderBalloonInBalloonLayer ? this.handleButtonClick : void 0,
                                type: this.getButtonType(n)
                            }, s);
                        return this.setBalloonWrapperContent(r.createElement(L, {
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin || "",
                            "data-test-selector": i.SubscribeBalloon,
                            handleSubMenuAction: this.handleSubMenuAction,
                            inPrimeRegion: e,
                            isEsportChannel: t,
                            isNonStandardSub: a,
                            isStaff: !!(this.props.sessionUser && this.props.sessionUser.roles && this.props.sessionUser.roles.isStaff),
                            isSubscribed: n,
                            productId: this.props.data.user.subscriptionProducts[0].id,
                            subbedTier: o || S.b.Prime,
                            userHasPrime: !1
                        })), this.props.renderBalloonInBalloonLayer ? r.createElement(I.Wa, {
                            "data-test-selector": i.BalloonLayerButton,
                            refDelegate: this.setContainerRefDelegate
                        }, m) : r.createElement(I.Wa, {
                            className: d ? "subscribe-button--promo" : ""
                        }, r.createElement(f.a, {
                            "data-test-selector": i.DefaultButton,
                            onToggle: this.handleMenuToggle
                        }, m, r.createElement(I.u, {
                            "data-a-target": "sub-balloon",
                            direction: this.getBalloonDirection(),
                            size: I.w.Large
                        }, this.balloonWrapperContent)))
                    }, n.prototype.getButtonType = function(e) {
                        I.F.Default;
                        return e && void 0 !== this.props.subscribedButtonType ? this.props.subscribedButtonType : e ? I.F.Success : this.props.unsubscribedButtonType || I.F.Default
                    }, n.prototype.getButtonIcon = function(e, n) {
                        var t = void 0;
                        return e ? t = n === S.b.Prime ? I.ob.Crown : I.ob.Star : this.props.forceIcon && (t = I.ob.StarHollow), t
                    }, n.prototype.hasSubscriptionProducts = function(e) {
                        return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                    }, n.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, n.prototype.isSubscriptionProductInvalid = function(e) {
                        return !e.emoteSetID
                    }, n.prototype.checkAndDisplaySubscriptionCheckout = function() {
                        if ("yes" === g.p.experiments.getAssignment(w.b.InstreamCheckout)) {
                            var e = g.n.get(d.b, ""),
                                n = g.n.get(d.c, ""),
                                t = g.n.get(d.a, ""),
                                i = Number(t);
                            e && this.isUserDataReady(this.props) && (this.props.data.user.subscriptionProducts.map(function(e) {
                                return e.name
                            }).includes(e) ? this.props.sessionUser ? this.props.showSubscriptionCheckoutModal({
                                recipientLogin: n,
                                productName: e,
                                mysteryGiftCount: i
                            }) : this.props.showLoginModal() : Object(d.d)())
                        }
                    }, n
                }(r.Component),
                M = Object(v.compose)(Object(h.a)(T, {
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
                        return Object(C.E)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(b.e)())(B),
                D = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.reportInteractive = function() {
                            n.props.latencyTracking.reportInteractive()
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return r.createElement(M, {
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
                            subscribedButtonType: this.props.subscribedButtonType,
                            unsubscribedButtonType: this.props.unsubscribedButtonType,
                            updateContainerWidth: this.props.updateContainerWidth
                        })
                    }, n = a.__decorate([Object(p.b)("SubscribeButton")], n)
                }(r.Component);
            var O = Object(o.connect)(function(e) {
                return {
                    authToken: Object(m.a)(e),
                    sessionUser: Object(m.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    showLoginModal: Object(d.e)(u.a.ChannelSubscriptionButton),
                    showSubscriptionCheckoutModal: function(e) {
                        var n = a.__rest(e, []);
                        return Object(c.d)(l.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([t.e(0), t.e(192)]).then(t.bind(null, "KJv/"))
                            },
                            componentProps: n
                        })
                    }
                }, e)
            })(D);
            t.d(n, !1, function() {
                return D
            }), t.d(n, "a", function() {
                return O
            }), t.d(n, !1, function() {
                return i
            }), t.d(n, !1, function() {
                return B
            }), t.d(n, !1, function() {
                return M
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
            t.d(n, "b", function() {
                return r
            }), t.d(n, "c", function() {
                return o
            }), t.d(n, "a", function() {
                return s
            }), t.d(n, "d", function() {
                return d
            }), t.d(n, "e", function() {
                return u
            });
            var i = t("/7QA"),
                a = t("y5D0"),
                r = "SUB_CHECKOUT__PRODUCT",
                o = "SUB_CHECKOUT__RECIPIENT",
                s = "SUB_CHECKOUT__MYSTERY_GIFT_COUNT",
                l = [r, o, s];

            function d() {
                l.forEach(function(e) {
                    return i.n.remove(e)
                })
            }

            function u(e) {
                return function() {
                    return Object(a.e)(e, {
                        onClose: d
                    })
                }
            }
        },
        W8Fi: function(e, n, t) {
            "use strict";

            function i(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.promotion
                })
            }

            function a(e) {
                return e.some(function(e) {
                    return !!e.giftPromotion
                })
            }

            function r(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                })
            }

            function o(e, n) {
                var t;
                return n ? t = e.giftPromotion : e.self && (t = e.self.promotion), t ? t.newPrice : e.price
            }

            function s(e, n) {
                var t;
                return n ? t = e.giftPromotion : e.self && (t = e.self.promotion), t ? t.discountValue : 0
            }

            function l(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function d(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
            }

            function u(e, n) {
                return !!e && !!n && r(e) && !n.paidUpgrade && !!n.gift && n.gift.isGift
            }
            t.d(n, "g", function() {
                return i
            }), t.d(n, "e", function() {
                return a
            }), t.d(n, "f", function() {
                return r
            }), t.d(n, "c", function() {
                return o
            }), t.d(n, "d", function() {
                return s
            }), t.d(n, "a", function() {
                return l
            }), t.d(n, "b", function() {
                return d
            }), t.d(n, "h", function() {
                return u
            })
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
                        type: u.F.Hollow,
                        "data-a-target": "share-button",
                        icon: u.ob.Share
                    }, Object(a.d)("Share", "ChannelShareButton")), i.createElement(u.u, {
                        direction: u.v.TopRight,
                        size: u.w.Small,
                        "data-a-target": "share-balloon"
                    }, i.createElement(u.Wa, {
                        padding: 1
                    }, i.createElement(u.Wa, {
                        padding: {
                            top: 1,
                            bottom: 1
                        },
                        display: u.X.Flex,
                        justifyContent: u.Va.Between
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
                    })), i.createElement(u.Wa, null, i.createElement(u.Wa, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(u.W, null, Object(a.d)("Embed Channel", "ChannelShareButton")), i.createElement(r.a, {
                        value: c
                    })), i.createElement(u.Wa, {
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
                    ChangeTier: "change_tier",
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
                    var n, t, l, d, u, c, m, p, v, g, b, k, f;
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
                                })), v = c && c.self, g = v ? !!v.subscriptionBenefit : null, b = v && v.subscriptionBenefit && v.subscriptionBenefit.purchasedWithPrime || !1, k = v ? v.canPrimeSubscribe : null, f = {
                                    action: e.action,
                                    can_subscribe: k,
                                    channel: e.channelLogin,
                                    channel_id: e.channelID,
                                    checkout_button_tier: e.checkoutButtonTier,
                                    has_sub_credit: e.hasSubCredit,
                                    host_channel: e.hostChannelLogin,
                                    host_channel_id: e.hostChannelID,
                                    is_menu_open: e.isMenuOpen,
                                    is_subscribed: g,
                                    is_subscribed_current_tier: v && v.subscriptionBenefit && v.subscriptionBenefit.tier,
                                    mystery_gift_count: e.mysteryGiftCount || null,
                                    sub_location: e.sub_location,
                                    sub_recipient: e.giftRecipient,
                                    modal: e.modal,
                                    modal_level: e.modalLevel || "",
                                    show_prime_content: e.showPrimeContent,
                                    show_resub: c ? k && b : null,
                                    vod_id: n,
                                    vod_type: m,
                                    viewport_height: window.innerHeight,
                                    viewport_width: window.innerWidth
                                }, a.o.track(r.SpadeEventType.Subscription, f), [2]
                        }
                    })
                })
            }
        },
        eAAt: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("kduP"),
                r = t("Ue10"),
                o = function(e) {
                    return i.createElement(r.Oa, {
                        margin: {
                            right: 1
                        },
                        overflow: r.Za.Hidden,
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
                v = t("4VQm"),
                g = t("yR8l"),
                b = t("8/mp"),
                k = t("Ue10"),
                f = function(e) {
                    var n = e.member,
                        t = null;
                    n.live && (t = i.createElement(k.Wa, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(k.K, {
                        status: k.M.Live
                    })));
                    var a = null;
                    n.live && (a = i.createElement(k.Wa, null, i.createElement(k.W, {
                        color: k.O.Alt2
                    }, Object(c.f)(n.viewersCount))));
                    return i.createElement(k.Ta, {
                        type: k.Ua.Alpha,
                        onClick: function() {
                            e.onClick({
                                userID: n.userID,
                                live: n.live,
                                login: n.login
                            })
                        },
                        selected: e.isSelected
                    }, i.createElement(k.yb, {
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
                    }), i.createElement(k.Wa, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: k.Za.Hidden,
                        margin: {
                            left: 1
                        }
                    }, i.createElement(k.W, {
                        ellipsis: !0,
                        fontSize: k.Ba.Size5
                    }, n.displayName)), i.createElement(k.Wa, {
                        display: k.X.Flex
                    }, t, a)))
                },
                h = function() {
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
                    var n = new h(e),
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
                                return i.createElement(f, {
                                    member: n,
                                    onClick: e.handleMemberItemClick,
                                    isSelected: t,
                                    key: n.userID
                                })
                            }),
                            t = i.createElement(k.yb, {
                                className: "member-list__scrollable-container",
                                display: k.X.Flex,
                                flexDirection: k.Z.Column,
                                background: k.r.Base,
                                elevation: 1
                            }, i.createElement(v.b, {
                                scrollRef: this.saveScrollRef
                            }, i.createElement(k.Wa, null, n, i.createElement("div", {
                                style: {
                                    height: "2em "
                                }
                            }), i.createElement(b.a, {
                                loadMore: this.props.loadMore,
                                enabled: this.props.data.infiniteScrollEnabled,
                                contentLength: this.props.data.numLoaded
                            }))), i.createElement(k.Wa, {
                                className: "member-list__back-to-top-placeholder",
                                position: k.eb.Relative
                            }, this.backToTop()));
                        return 0 === this.props.data.total && (t = i.createElement(k.yb, {
                            className: "member-list__scrollable-container",
                            display: k.X.Flex,
                            flexDirection: k.Z.Column,
                            background: k.r.Base,
                            elevation: 1,
                            justifyContent: k.Va.Center,
                            alignItems: k.f.Center
                        }, i.createElement(k.S, {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/112291/2.0",
                            alt: Object(c.d)("No team members", "TeamLandingPage_MemberList")
                        }), i.createElement(k.W, {
                            color: k.O.Alt2,
                            fontSize: k.Ba.Size6
                        }, Object(c.d)("No team members to display", "TeamLandingPage_MemberList")))), i.createElement(k.Wa, {
                            display: k.X.Flex,
                            flexDirection: k.Z.Column
                        }, i.createElement(k.Wa, {
                            display: k.X.Flex,
                            flexShrink: 0,
                            alignItems: k.f.Center,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(k.Wa, {
                            flexGrow: 1,
                            flexShrink: 1
                        }, i.createElement(k.W, {
                            bold: !0,
                            fontSize: k.Ba.Size4
                        }, Object(c.d)("Team Members", "TeamLandingPage_MemberList"))), i.createElement(k.W, {
                            color: k.O.Alt2
                        }, Object(c.f)(this.props.data.total))), t)
                    }, n.prototype.backToTop = function() {
                        return this.state.showBackToTop ? i.createElement(k.i, {
                            type: k.n.FadeIn,
                            enabled: !0
                        }, i.createElement(k.Oa, {
                            display: k.X.Flex,
                            justifyContent: k.Va.Center,
                            alignItems: k.f.Center,
                            position: k.eb.Absolute,
                            padding: .5,
                            attachBottom: !0,
                            fullWidth: !0
                        }, i.createElement("div", {
                            className: "member-list__back-to-top",
                            onClick: this.scrollToTop
                        }, Object(c.d)("Back to Top", "TeamLandingPage_MemberList")))) : null
                    }, n
                }(i.Component),
                T = Object(a.compose)(Object(l.b)("MemberList"), Object(g.a)(w, {
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
                        var n = new h(e.data);
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
                                            var t = new h(e),
                                                i = new h(n),
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
                L = t("6x+I"),
                B = Object(a.compose)(Object(l.b)("TeamsDescription", {
                    autoReportInteractive: !0
                }))(function(e) {
                    return e.description ? i.createElement(k.Wa, {
                        margin: {
                            top: 2
                        }
                    }, i.createElement(k.W, {
                        bold: !0,
                        fontSize: k.Ba.Size4
                    }, e.displayName), i.createElement(k.yb, {
                        color: k.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(k.Xb, null, i.createElement(L, {
                        source: e.description
                    })))) : null
                }),
                M = t("eJ65"),
                D = t("eDVu"),
                O = t("0Log"),
                P = t("/aPz"),
                U = t("DMoW"),
                x = t("ZLqn"),
                j = t("eAAt"),
                A = t("0EKw"),
                W = t("5goO"),
                R = t("QjI3"),
                V = t("eFQ3"),
                G = t("6J1Z"),
                z = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.getGame = function() {
                            var e = n.props.data.user;
                            return e && e.directories ? e.directories.nodes.find(function(e) {
                                return !(!e || e.directoryType !== U.r.GAME)
                            }) : null
                        }, n.getTitle = function() {
                            var e = n.props.data.user;
                            if (e && e.broadcastSettings && e.broadcastSettings.title) return e.broadcastSettings.title
                        }, n.renderGame = function() {
                            var e = n.getGame();
                            return e && e.name ? i.createElement(A.a, {
                                name: e.name
                            }) : null
                        }, n.renderGameBoxArt = function() {
                            var e = n.getGame(),
                                t = e && e.name ? e.name : "",
                                a = e && e.boxArtURL ? e.boxArtURL : "";
                            return e && t && a ? i.createElement(j.a, {
                                name: t,
                                boxArtURL: a,
                                size: k.J.Size4
                            }) : null
                        }, n.renderTeam = function() {
                            var e = n.props.data.user;
                            return e && e.primaryTeam ? i.createElement(W.a, {
                                name: e.primaryTeam.name,
                                displayName: e.primaryTeam.displayName
                            }) : null
                        }, n.renderUserIcon = function() {
                            var e = n.props.data.user;
                            return e ? i.createElement(k.Wa, {
                                margin: {
                                    right: 1
                                },
                                overflow: k.Za.Hidden,
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
                        return i.createElement(k.yb, {
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
                        return i.createElement(k.yb, {
                            display: k.X.Flex,
                            flexWrap: k.Aa.Wrap,
                            justifyContent: k.Va.Between,
                            padding: 1
                        }, i.createElement(k.G, {
                            row: !0
                        }, this.renderUserIcon(), i.createElement(k.H, {
                            overflow: k.Za.Hidden
                        }, e.displayName && i.createElement(k.Wa, {
                            margin: {
                                bottom: .5
                            },
                            ellipsis: !0
                        }, i.createElement(k.U, {
                            to: "/" + this.props.channelLogin
                        }, i.createElement(k.W, {
                            type: k.Ob.Span,
                            fontSize: k.Ba.Size4,
                            title: e.displayName
                        }, e.displayName))), i.createElement(k.yb, {
                            display: k.X.Flex,
                            flexWrap: k.Aa.Wrap,
                            color: k.O.Alt2
                        }, e.stream && e.stream.id && i.createElement(k.yb, {
                            color: k.O.Live,
                            display: k.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(k.xb, {
                            value: n,
                            label: Object(c.d)("Watching Now", "TeamPlayer"),
                            icon: k.ob.GlyphLive,
                            "data-a-target": "channel-viewers-count"
                        })), i.createElement(k.Wa, {
                            margin: {
                                right: 1
                            },
                            display: k.X.Flex
                        }, i.createElement(k.xb, {
                            value: Object(c.d)("{followerCount, number}", {
                                followerCount: e.followers && e.followers.totalCount ? e.followers.totalCount : 0
                            }, "TeamPlayer"),
                            label: Object(c.d)("Followers", "TeamPlayer"),
                            icon: k.ob.GlyphFollowers
                        })), i.createElement(k.Wa, {
                            display: k.X.Flex
                        }, i.createElement(k.xb, {
                            value: Object(c.d)("{channelCount, number}", {
                                channelCount: e.profileViewCount || 0
                            }, "TeamPlayer"),
                            label: Object(c.d)("Total Views", "TeamPlayer"),
                            icon: k.ob.GlyphViews
                        }))))), i.createElement(k.Wa, {
                            display: k.X.Flex,
                            alignItems: k.f.Center
                        }, e.description && i.createElement(M.a, null, i.createElement(k.z, {
                            type: k.F.Hollow
                        }, Object(c.d)("Info", "Team Player")), i.createElement(k.u, {
                            size: k.w.Medium,
                            direction: k.v.BottomRight
                        }, i.createElement(k.Wa, {
                            zIndex: k.bc.Above,
                            padding: 1
                        }, i.createElement(k.W, {
                            type: k.Ob.Span,
                            fontSize: k.Ba.Size6,
                            color: k.O.Alt2
                        }, e.description)))), i.createElement(k.Wa, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(R.a, {
                            channelLogin: this.props.channelLogin
                        }))))
                    }, n.prototype.renderBottomBar = function() {
                        var e = this.getTitle();
                        return i.createElement(k.yb, {
                            alignItems: k.f.Center,
                            display: k.X.Flex,
                            flexWrap: k.Aa.NoWrap,
                            justifyContent: k.Va.Between,
                            padding: 1
                        }, i.createElement(k.Wa, {
                            overflow: k.Za.Hidden
                        }, i.createElement(k.G, {
                            row: !0
                        }, this.renderGameBoxArt(), i.createElement(k.H, {
                            overflow: k.Za.Hidden
                        }, i.createElement(k.Wa, {
                            margin: {
                                bottom: .5
                            },
                            ellipsis: !0
                        }, i.createElement(k.W, {
                            type: k.Ob.Span,
                            fontSize: k.Ba.Size4,
                            title: e
                        }, e)), i.createElement(k.Wa, {
                            display: k.X.Flex,
                            flexWrap: k.Aa.Wrap
                        }, this.renderGame(), this.renderTeam())))), i.createElement(k.Wa, {
                            className: "teams-player__action-container",
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            justifyContent: k.Va.End
                        }, i.createElement(k.Wa, {
                            display: k.X.Flex,
                            margin: {
                                x: 1
                            }
                        }, this.props.data.user && i.createElement(x.a, {
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
                }))(z),
                X = t("ST9J");
            t("GTf2");
            ! function(e) {
                e.LogoImage = "teamspagebody-logo", e.BannerImage = "teamspagebody-banner", e.BackgroundImage = "teamspagebody-background"
            }(S || (S = {}));
            var H = function(e) {
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
                        }, i.createElement(v.b, null, i.createElement(k.Wa, {
                            display: k.X.Flex,
                            justifyContent: k.Va.Center,
                            padding: {
                                top: 3,
                                left: 3,
                                right: 3
                            }
                        }, i.createElement(k.yb, {
                            className: "teams-page-body__inner-container",
                            background: k.r.Alt2,
                            display: k.X.Flex,
                            padding: 2,
                            fullHeight: !0
                        }, i.createElement(k.Wa, {
                            className: "teams-page-body__column--left",
                            display: k.X.Flex,
                            flexDirection: k.Z.Column,
                            margin: {
                                right: 2
                            }
                        }, this.renderLogo(), i.createElement(T, {
                            teamName: this.props.teamName,
                            onMemberItemClick: this.changeSelectedMember
                        })), i.createElement(k.Wa, {
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
                        return i.createElement(B, {
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
                Q = Object(a.compose)(u.a, Object(l.b)("TeamsPageBody"), Object(g.a)(X, {
                    options: function(e) {
                        return {
                            variables: {
                                teamName: e.teamName
                            }
                        }
                    }
                }))(H),
                $ = t("Gw3k"),
                K = function(e) {
                    return i.createElement(k.Wa, {
                        display: k.X.Flex,
                        flexDirection: k.Z.Column,
                        flexWrap: k.Aa.NoWrap,
                        fullHeight: !0
                    }, i.createElement($.a, null), i.createElement(k.Wa, {
                        flexGrow: 1,
                        display: k.X.Flex,
                        fullHeight: !0
                    }, e.children))
                },
                Z = Object(a.compose)(Object(l.b)("TeamsLandingPage", {
                    destination: o.a.TeamsLandingPage,
                    autoReportInteractive: !0
                }), Object(r.a)({
                    location: s.PageviewLocation.TeamsLandingPage
                }))(function(e) {
                    return i.createElement(K, null, i.createElement(Q, {
                        teamName: e.match.params.teamName
                    }))
                });
            t.d(n, "TeamsLandingPage", function() {
                return Z
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
                        }, Object(d.cc)(t.props), {
                            download: t.props.text
                        }), t.renderIcon()) : t.isLink() ? r.createElement("a", a.__assign({
                            href: t.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: t.onShareClickHandler
                        }, Object(d.cc)(t.props)), t.renderIcon()) : r.createElement("button", a.__assign({
                            onClick: t.copyPageUrl,
                            onMouseLeave: t.clearIsCopiedStatus,
                            className: e
                        }, Object(d.cc)(t.props)), t.renderIcon())
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
                        return r.createElement(d.Wa, {
                            className: "social-button__icon " + t.addSocialClassModifier("social-button__icon"),
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Va.Center
                        }, r.createElement(d.nb, {
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
                                return d.ob.Twitter;
                            case i.Facebook:
                                return d.ob.Facebook;
                            case i.VKontakte:
                                return d.ob.VKontakte;
                            case i.Reddit:
                                return d.ob.Reddit;
                            case i.Download:
                                return d.ob.Download;
                            case i.Copy:
                            default:
                                return d.ob.Copy
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
                    return r.createElement(d.Wa, {
                        className: "social-button"
                    }, r.createElement(d.Rb, {
                        label: this.getTooltipFromType(),
                        direction: d.Tb.Bottom
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
                    end: 351
                }
            };
            t.loc.source = {
                body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\nname\nself {\npaidUpgradePromotion {\nnewPrice\n}\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\npaidUpgrade {\nstartsAt\n}\ngift {\nisGift\n}\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        z36O: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("Ue10"),
                o = function(e) {
                    return a.createElement(r.Wa, {
                        margin: {
                            right: 1
                        },
                        display: r.X.Flex,
                        alignItems: r.f.Center
                    }, a.createElement(r.Rb, {
                        align: r.Sb.Left,
                        label: e.tooltip,
                        direction: r.Tb.Bottom
                    }, a.createElement(r.Wa, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(r.yb, {
                        display: r.X.Flex,
                        alignItems: r.f.Center,
                        color: r.O.Alt2
                    }, a.createElement(r.nb, {
                        asset: e.svgAsset
                    }))), a.createElement(r.W, {
                        fontSize: r.Ba.Size5,
                        ellipsis: !0
                    }, a.createElement(r.U, i.__assign({
                        to: e.linkTo
                    }, Object(r.cc)(e), {
                        targetBlank: !0
                    }), e.title))))
                };
            t.d(n, "a", function() {
                return o
            })
        }
    }
]);