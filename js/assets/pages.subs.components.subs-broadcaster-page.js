webpackJsonp([116], {
    "027l": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SubsBroadcaster"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "currentChannelLogin"
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
                                    value: "currentChannelLogin"
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
                                    value: "description"
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
                                    }]
                                }
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 182
            }
        };
        n.loc.source = {
            body: "query SubsBroadcaster($currentChannelLogin: String!) {\nuser(login: $currentChannelLogin) {\nid\ndisplayName\ndescription\nroles{\nisPartner\n}\nbannerImageURL\nprofileImageURL(width:300)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5EZR": function(e, t) {},
    CqGj: function(e, t) {},
    "Ie7/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SubsBroadcaster"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "currentChannelLogin"
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
                                    value: "currentChannelLogin"
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
                                    value: "login"
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
                                            value: "url"
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
                                            value: "emoteSetID"
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
                                                            value: "discountValue"
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
                                                    value: "platform"
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
                end: 299
            }
        };
        n.loc.source = {
            body: "query SubsBroadcaster($currentChannelLogin: String!) {\nuser(login: $currentChannelLogin) {\nid\ndisplayName\nlogin\nsubscriptionProducts{\nid\nurl\nprice\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\nself{\nsubscriptionBenefit {\nid\ntier\nplatform\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    XFEc: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, s.n.track(i.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }, t.b = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return r.__generator(this, function(r) {
                    if (t = null, e.isSubscribedCurrentTier) switch (e.isSubscribedCurrentTier) {
                        case "1000":
                            t = "$4.99";
                            break;
                        case "2000":
                            t = "$9.99";
                            break;
                        case "3000":
                            t = "$24.99"
                    }
                    return n = {
                        action: e.action,
                        can_subscribe: e.canSubscribe,
                        channel: e.channelLogin,
                        channel_id: e.channelID,
                        checkout_button_tier: e.checkoutButtonTier,
                        has_sub_credit: e.hasSubCredit,
                        host_channel: e.hostChannelLogin,
                        host_channel_id: e.hostChannelID,
                        is_menu_open: e.isMenuOpen,
                        is_subscribed: e.isSubscribed,
                        is_subscribed_current_tier: t,
                        sub_location: e.sub_location,
                        modal: e.modal,
                        modal_level: "",
                        show_prime_content: e.showPrimeContent,
                        show_resub: e.showResub,
                        vod_id: "",
                        vod_type: "",
                        viewport_height: window.innerHeight,
                        viewport_width: window.innerWidth
                    }, s.n.track(i.SpadeEventType.Subscription, n), [2]
                })
            })
        };
        var r = n("TToO"),
            s = n("6sO2"),
            i = n("vH/s")
    },
    Xv4P: function(e, t) {},
    bPto: function(e, t) {},
    uy5s: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, s = n("RH2O"),
            i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            c = n("yWCw"),
            l = n("zCIC"),
            u = n("7vx8"),
            p = n("j7/Y"),
            d = n("TeXj"),
            b = n("w9tK"),
            m = n("vH/s"),
            h = n("Tzcg"),
            g = n("CSlQ"),
            _ = n("Odds"),
            f = (n("bPto"), n("027l")),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || !this.props.data.user ? a.createElement("div", {
                        className: "subs-broadcaster-banner"
                    }, a.createElement(_._8, {
                        className: "subs-broadcaster-banner__broadcaster-info",
                        textAlign: _._45.Center,
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center,
                        flexWrap: _.U.NoWrap,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        fullWidth: !0,
                        breakpointMedium: {
                            padding: 4
                        },
                        breakpointLarge: {
                            padding: 5
                        }
                    }, a.createElement(_._8, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        },
                        fullWidth: !0
                    }, a.createElement(_._14, {
                        height: 40
                    })), a.createElement(_._8, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(_._14, {
                        height: 80,
                        width: 80
                    })), a.createElement(_._8, {
                        className: "subs-broadcaster-banner__description",
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        },
                        fullWidth: !0
                    }, a.createElement(_._14, {
                        lineCount: 1
                    })))) : a.createElement("div", {
                        style: {
                            backgroundImage: "url(" + this.props.data.user.bannerImageURL
                        },
                        className: "subs-broadcaster-banner"
                    }, a.createElement(_._8, {
                        className: "subs-broadcaster-banner__broadcaster-info",
                        textAlign: _._45.Center,
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center,
                        flexWrap: _.U.NoWrap,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        fullWidth: !0,
                        breakpointMedium: {
                            padding: 4
                        },
                        breakpointLarge: {
                            padding: 5
                        }
                    }, a.createElement(_._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, a.createElement(_.Q, {
                        type: _._49.H2,
                        bold: !0,
                        color: _.K.Overlay
                    }, this.props.data.user.displayName)), a.createElement(_._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(_.m, {
                        alt: this.props.data.user.displayName,
                        size: 96,
                        src: this.props.data.user.profileImageURL
                    })), a.createElement(_._8, {
                        className: "subs-broadcaster-banner__description",
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(_.Q, {
                        color: _.K.Overlay
                    }, this.props.data.user.description)), this.verifiedPartner()))
                }, t.prototype.verifiedPartner = function() {
                    return this.props.data.user && this.props.data.user.roles.isPartner ? a.createElement(_._8, {
                        display: _.R.Flex
                    }, a.createElement(_._24, {
                        asset: _._25.Verified,
                        type: _._26.Brand
                    }), a.createElement(_._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(_.Q, {
                        color: _.K.Overlay
                    }, Object(o.d)("Verified Twitch Partner", "SubsBroadcasterBanner")))) : null
                }, t = i.__decorate([Object(g.d)("SubsBroadcasterBanner"), Object(u.a)(f, {
                    options: function(e) {
                        return {
                            variables: {
                                currentChannelLogin: e.channelName
                            }
                        }
                    }
                })], t)
            }(a.Component),
            k = n("7LIQ"),
            v = n("YEG/"),
            P = n("FDYX"),
            T = n("XFEc"),
            y = (n("Xv4P"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.productName = Object(o.d)("All-Access Pass", "SubsPlanEsports"), t.onSubClick = function(e) {
                        Object(T.b)({
                            action: e.action,
                            canSubscribe: !t.props.subTier || "3000" !== t.props.subTier,
                            channelID: t.props.channelId,
                            channelLogin: t.props.channelLogin,
                            checkoutButtonTier: e.checkoutButtonTier,
                            hasSubCredit: !1,
                            isMenuOpen: !1,
                            isSubscribed: !!t.props.subTier,
                            isSubscribedCurrentTier: t.props.subTier ? t.props.subTier : null,
                            sub_location: "landing_page",
                            showResub: !1,
                            modal: !1,
                            showPrimeContent: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(_._14, null) : a.createElement(_._8, {
                        className: "subs-plan-esports",
                        alignItems: _.c.Center,
                        flexDirection: _.T.Column,
                        margin: {
                            x: 5
                        }
                    }, a.createElement(_._2, {
                        margin: 1,
                        textAlign: _._45.Center
                    }, a.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Link,
                        bold: !0
                    }, this.productName)), a.createElement(_._2, {
                        margin: 1,
                        textAlign: _._45.Center
                    }, a.createElement(_.Q, null, Object(o.d)("Your VIP pass to the best of the Overwatch League", "SubsPlanEsports"))), this.baseEmotes(), a.createElement(_._8, {
                        margin: 1,
                        display: _.R.Flex,
                        justifyContent: _._7.Center
                    }, this.makePlanWrappers()))
                }, t.prototype.makePlanWrappers = function() {
                    var e = this;
                    if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return [a.createElement(_._14, {
                        key: "subs-broadcaster__emote-placeholder"
                    })];
                    var t = Object(o.d)("Overwatch League All-Access Pass Benefits", "SubsPlanEsports"),
                        n = Object(o.d)("Exclusive Command Center Stream", "SubPlanEsports"),
                        r = Object(o.d)("Match Analysis Videos by Players", "SubPlanEsports"),
                        s = Object(o.d)("Participate in Post-Match Q&A", "SubPlanEsports"),
                        i = Object(o.d)("Passholder-Only Chat Access", "SubPlanEsports"),
                        c = Object(o.d)("Ad-Free Viewing on Overwatch League", "SubPlanEsports"),
                        l = Object(o.d)("Overwatch In-Game Content", "SubPlanEsports"),
                        u = Object(o.d)("Get All-Access Pass for $19.99 with Twitch Prime", "SubsPlanEsports"),
                        p = Object(o.d)("Offer available for a limited time. Terms and conditions apply", "SubsPlanEsports");
                    return "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? [a.createElement(_._35, {
                        "data-test-selector": "mobile-sub-container",
                        key: "subs-broadcaster-plan-0",
                        className: "subs-plan-esports__plan",
                        margin: 1,
                        elevation: 2,
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        padding: 2,
                        textAlign: _._45.Center
                    }, a.createElement(_._2, {
                        margin: 1
                    }, a.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Link
                    }, this.productName)), a.createElement(_._8, {
                        margin: {
                            x: 1,
                            bottom: 1
                        }
                    }, a.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center
                    }, a.createElement(_._8, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(_._24, {
                        asset: _._25.Crown,
                        type: _._26.Prime
                    })), a.createElement(_.Q, {
                        type: _._49.H5
                    }, u)), a.createElement(_.O, {
                        to: "https://blog.twitch.tv/overwatch-league-all-access-pass-on-twitch-8cbf3e23df0a",
                        targetBlank: !0,
                        hoverUnderlineNone: !1
                    }, p)), a.createElement(_._8, {
                        margin: 1,
                        display: _.R.Flex,
                        flexWrap: _.U.Wrap,
                        flexGrow: 1,
                        alignItems: _.c.Center,
                        justifyContent: _._7.Center
                    }, a.createElement(_.Q, {
                        bold: !0
                    }, t), a.createElement(_._8, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(_.Q, null, n), a.createElement(_.Q, null, r), a.createElement(_.Q, null, s), a.createElement(_.Q, null, i), a.createElement(_.Q, null, c), a.createElement(_.Q, null, l))))] : this.props.subscriptionProducts.map(function(d, b) {
                        var m = d.price;
                        return Object(P.d)([d]) && (m = Object(P.a)(d)), a.createElement(_._35, {
                            key: "subs-broadcaster-plan-" + b,
                            className: "subs-plan-esports__plan",
                            margin: 1,
                            elevation: 2,
                            display: _.R.Flex,
                            flexDirection: _.T.Column,
                            padding: 2,
                            textAlign: _._45.Center,
                            "data-test-selector": "sub-tier-container"
                        }, a.createElement(_._2, {
                            margin: 1
                        }, a.createElement(_.Q, {
                            type: _._49.H3,
                            color: _.K.Link
                        }, Object(o.d)("{price} All-Access Pass", {
                            price: d.price
                        }, "SubsPlanEsports"))), a.createElement(_._8, {
                            margin: {
                                x: 1,
                                bottom: 1
                            }
                        }, a.createElement(_._8, {
                            display: _.R.Flex,
                            justifyContent: _._7.Center
                        }, a.createElement(_._8, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(_._24, {
                            asset: _._25.Crown,
                            type: _._26.Prime
                        })), a.createElement(_.Q, {
                            type: _._49.H5
                        }, u)), a.createElement(_.O, {
                            to: "https://blog.twitch.tv/overwatch-league-all-access-pass-on-twitch-8cbf3e23df0a",
                            targetBlank: !0,
                            hoverUnderlineNone: !1
                        }, p)), a.createElement(_._8, {
                            margin: 1,
                            display: _.R.Flex,
                            flexWrap: _.U.Wrap,
                            flexGrow: 1,
                            alignItems: _.c.Center,
                            justifyContent: _._7.Center
                        }, a.createElement(_.Q, {
                            bold: !0
                        }, t), a.createElement(_._8, {
                            padding: {
                                top: 1
                            }
                        }, a.createElement(_.Q, null, n), a.createElement(_.Q, null, r), a.createElement(_.Q, null, s), a.createElement(_.Q, null, i), a.createElement(_.Q, null, c), a.createElement(_.Q, null, l))), a.createElement(_._8, {
                            margin: 1
                        }, a.createElement(v.a, {
                            isSubbedToTier: e.isSubbedToTier(b),
                            tierPrice: m,
                            reportSubAction: e.onSubClick,
                            url: d.url + "/ticket",
                            targetBlank: !1,
                            isEsportChannel: !0
                        })))
                    })
                }, t.prototype.isSubbedToTier = function(e) {
                    var t = 1e3 * (e + 1);
                    if (this.props.subTier) {
                        var n = Number(this.props.subTier);
                        if (isNaN(n) && (n = 1e3), t <= n) return !0
                    }
                    return !1
                }, t.prototype.baseEmotes = function() {
                    var e = Object(h.b)(this.props.subscriptionProducts[0].emotes);
                    return a.createElement(_._8, {
                        margin: 1,
                        className: "subs-plan-esports__base-emotes"
                    }, a.createElement(k.a, {
                        emoteSet: {
                            id: "",
                            emotes: e
                        },
                        onClickEmote: void 0,
                        locked: !1
                    }))
                }, t = i.__decorate([Object(g.d)("SubsPlanEsports")], t)
            }(a.Component)),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(_._8, null, a.createElement(E, {
                        channelName: this.props.channelDisplayName
                    }), a.createElement(_._8, {
                        display: _.R.Flex,
                        padding: {
                            top: 2
                        },
                        justifyContent: _._7.Center
                    }, a.createElement(y, {
                        subbedPlatform: this.props.subbedPlatform,
                        subscriptionProducts: this.props.subscriptionProducts,
                        subTier: this.props.subTier,
                        channelId: this.props.channelId,
                        channelLogin: this.props.channelLogin
                    })))
                }, t
            }(a.Component),
            C = n("pQNb"),
            N = n("37Pp"),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.subscriptionProduct.emotes.length < 1 ? null : a.createElement(_._8, {
                        key: this.props.subscriptionProduct.id,
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center,
                        margin: 1
                    }, this.buildEmotes(this.props.subscriptionProduct.emotes), this.props.hidePrice ? null : a.createElement(_.Q, null, Object(o.d)("{price} emote", {
                        price: this.props.subscriptionProduct.price
                    }, "SubsBonusEmote")))
                }, t.prototype.buildEmotes = function(e) {
                    return Object(h.b)(e).map(function(e) {
                        return a.createElement("figure", {
                            className: "emote-picker__emote-figure",
                            key: e.id
                        }, a.createElement("img", {
                            srcSet: e.srcSet,
                            alt: e.displayName
                        }))
                    })
                }, t
            }(a.Component);
        n("CqGj");
        ! function(e) {
            e[e.Tier1 = 0] = "Tier1", e[e.Tier2 = 1] = "Tier2", e[e.Tier3 = 2] = "Tier3"
        }(r || (r = {}));
        var x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTab: r.Tier1,
                        emoteSetId: void 0
                    }, t.messages = {
                        subscribe: Object(o.d)("Subscribe Now", "SubsBroadcasterPlanTabs"),
                        mobileSubbed: Object(o.d)("Subscribed", "SubsBroadcasterPlanTabs"),
                        perkChat: Object(o.d)("Chat During Subscriber-Only Mode", "SubsBroadcasterPlanTabs"),
                        includedEmotes: Object(o.d)("Included Emotes", "SubsBroadcasterPlanTabs")
                    }, t.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-tab-" + r.Tier1:
                                t.setState({
                                    activeTab: r.Tier1
                                });
                                break;
                            case "subscribe-tab-" + r.Tier2:
                                t.setState({
                                    activeTab: r.Tier2
                                });
                                break;
                            case "subscribe-tab-" + r.Tier3:
                                t.setState({
                                    activeTab: r.Tier3
                                })
                        }
                    }, t.onSubClick = function(e) {
                        Object(T.b)({
                            action: e.action,
                            canSubscribe: !t.props.subTier || "3000" !== t.props.subTier,
                            channelID: t.props.channelId,
                            channelLogin: t.props.channelLogin,
                            checkoutButtonTier: e.checkoutButtonTier,
                            hasSubCredit: !1,
                            isMenuOpen: !1,
                            isSubscribed: !!t.props.subTier,
                            isSubscribedCurrentTier: t.props.subTier ? t.props.subTier : null,
                            sub_location: "landing_page",
                            showResub: !1,
                            modal: !1,
                            showPrimeContent: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.mobileSubbed : this.messages.subscribe;
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center,
                        alignItems: _.c.Center,
                        fullHeight: !0
                    }, a.createElement(_._10, null)) : a.createElement(_._8, {
                        className: "subs-broadcaster-tabbed-tiers",
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center
                    }, a.createElement(_._2, {
                        margin: 1
                    }, a.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Link,
                        bold: !0
                    }, e)), "IOS" !== this.props.subbedPlatform && "ANDROID" !== this.props.subbedPlatform ? this.makeTabs() : null, this.makeTabContents())
                }, t.prototype.makeTabs = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(_._14, null) : 1 === this.props.subscriptionProducts.length ? a.createElement(_._37, null, a.createElement(_._36, {
                        active: !0,
                        "data-a-target": "subscribe-tab-" + r.Tier1
                    }, this.props.subscriptionProducts[0].price)) : a.createElement(_._37, null, a.createElement(_._36, {
                        active: this.state.activeTab === r.Tier1,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + r.Tier1
                    }, this.props.subscriptionProducts[0].price), a.createElement(_._36, {
                        active: this.state.activeTab === r.Tier2,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + r.Tier2
                    }, this.props.subscriptionProducts[1].price), a.createElement(_._36, {
                        active: this.state.activeTab === r.Tier3,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + r.Tier3
                    }, this.props.subscriptionProducts[2].price))
                }, t.prototype.makeTabContents = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(_._14, null) : a.createElement(_._8, {
                        className: "subs-broadcaster-tabbed-tiers__tab",
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        alignItems: _.c.Center,
                        textAlign: _._45.Center
                    }, a.createElement(_._2, {
                        margin: 1
                    }, a.createElement(_.Q, {
                        type: _._49.H4,
                        bold: !0
                    }, Object(o.d)("Channel Subscription for {displayName}", {
                        displayName: this.props.channelDisplayName
                    }, "SubsBroadcasterPlanTabs"))), a.createElement(_.Q, {
                        type: _._49.P
                    }, Object(o.d)("{numEmotes, plural, one {Includes Ad-Free Viewing, Subscriber Badges and 1 Emote.} other {Includes Ad-Free Viewing, Subscriber Badges and {numEmotes, number} Emotes.}}", {
                        numEmotes: this.props.subscriptionProducts[0].emotes.length
                    }, "SubsBroadcasterPlanTabs")), a.createElement(_.Q, {
                        type: _._49.P
                    }, this.messages.perkChat), this.getSubButton(), a.createElement(_._2, {
                        margin: {
                            top: 2
                        }
                    }, a.createElement(_.Q, {
                        type: _._49.H4,
                        bold: !0
                    }, this.messages.includedEmotes)), this.getBonusEmotes(), this.baseEmotes())
                }, t.prototype.getSubButton = function() {
                    var e;
                    switch (this.state.activeTab) {
                        case r.Tier2:
                            e = this.props.subscriptionProducts[1];
                            break;
                        case r.Tier3:
                            e = this.props.subscriptionProducts[2];
                            break;
                        case r.Tier1:
                        default:
                            e = this.props.subscriptionProducts[0]
                    }
                    var t = e.price;
                    Object(P.d)([e]) && (t = Object(P.a)(e));
                    var n = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? a.createElement(_.Q, {
                        type: _._49.H5
                    }, Object(o.d)("Tier 1 Subscription", "SubsBroadcasterPlanTabs")) : a.createElement(N.a, {
                        subscriptionProduct: e
                    });
                    return a.createElement(_._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(_._8, {
                        margin: {
                            top: 1
                        }
                    }, n), a.createElement(_._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(v.a, {
                        isSubbedToTier: this.isSubbedToTier(),
                        tierPrice: t,
                        reportSubAction: this.onSubClick,
                        url: e.url + "/ticket",
                        targetBlank: !1
                    })))
                }, t.prototype.isSubbedToTier = function() {
                    var e = 0;
                    switch (this.state.activeTab) {
                        case r.Tier1:
                            e = 1e3;
                            break;
                        case r.Tier2:
                            e = 2e3;
                            break;
                        case r.Tier3:
                            e = 3e3;
                            break;
                        default:
                            e = 1e3
                    }
                    if (this.props.subTier) {
                        var t = Number(this.props.subTier);
                        if (isNaN(t) && (t = 1e3), e <= t) return !0
                    }
                    return !1
                }, t.prototype.getBonusEmotes = function() {
                    var e = [];
                    if (this.state.activeTab === r.Tier2 || this.state.activeTab === r.Tier3) {
                        var t = this.props.subscriptionProducts[1];
                        e.push(a.createElement(O, {
                            key: "bonus-emote-" + r.Tier2,
                            subscriptionProduct: t
                        }))
                    }
                    if (this.state.activeTab === r.Tier3) {
                        t = this.props.subscriptionProducts[2];
                        e.push(a.createElement(O, {
                            key: "bonus-emote-" + r.Tier3,
                            subscriptionProduct: t
                        }))
                    }
                    return a.createElement(_._8, {
                        display: _.R.InlineFlex,
                        "data-test-selector": "bonus-emote-container"
                    }, e)
                }, t.prototype.baseEmotes = function() {
                    var e = Object(h.b)(this.props.subscriptionProducts[0].emotes);
                    return a.createElement(_._8, {
                        className: "subs-broadcaster-tabbed-tiers__emotes"
                    }, a.createElement(k.a, {
                        emoteSet: {
                            id: this.state.emoteSetId || "",
                            emotes: e
                        },
                        onClickEmote: void 0,
                        locked: !1
                    }))
                }, t = i.__decorate([Object(g.d)("SubPlanTabs")], t)
            }(a.Component),
            I = (n("5EZR"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSubClick = function(e) {
                        Object(T.b)({
                            action: e.action,
                            canSubscribe: !t.props.subTier || "3000" !== t.props.subTier,
                            channelID: t.props.channelId,
                            channelLogin: t.props.channelLogin,
                            checkoutButtonTier: e.checkoutButtonTier,
                            hasSubCredit: !1,
                            isMenuOpen: !1,
                            isSubscribed: !!t.props.subTier,
                            isSubscribedCurrentTier: t.props.subTier ? t.props.subTier : null,
                            sub_location: "landing_page",
                            showResub: !1,
                            modal: !1,
                            showPrimeContent: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return a.createElement(_._14, null);
                    this.setMessages();
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.subscribed : this.messages.subscribeNow;
                    return a.createElement(_._8, {
                        className: "subs-plan-tiers",
                        alignItems: _.c.Center,
                        flexDirection: _.T.Column,
                        margin: {
                            x: 5
                        }
                    }, a.createElement(_._2, {
                        margin: 1,
                        textAlign: _._45.Center
                    }, a.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Link,
                        bold: !0
                    }, e)), a.createElement(_._2, {
                        margin: 1,
                        textAlign: _._45.Center
                    }, a.createElement(_.Q, null, this.messages.subscriptionPerks)), this.baseEmotes(), a.createElement(_._8, {
                        margin: 1,
                        display: _.R.Flex,
                        justifyContent: _._7.Center
                    }, this.makePlanWrappers()))
                }, t.prototype.makePlanWrappers = function() {
                    var e = this;
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? [a.createElement(_._14, {
                        key: "subs-broadcaster__emote-placeholder"
                    })] : "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? [a.createElement(_._35, {
                        "data-test-selector": "mobile-sub-container",
                        key: "subs-broadcaster-plan-0",
                        className: "subs-plan-tiers__plan",
                        margin: 1,
                        elevation: 2,
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        padding: 2,
                        textAlign: _._45.Center
                    }, a.createElement(_._2, {
                        margin: 1
                    }, a.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Link
                    }, Object(o.d)("Tier 1 Subscription", "SubsPlanTiers"))), a.createElement(_._8, {
                        margin: 1,
                        display: _.R.Flex,
                        flexWrap: _.U.Wrap,
                        flexGrow: 1,
                        alignItems: _.c.Center,
                        justifyContent: _._7.Center
                    }, a.createElement(_.Q, null, this.messages.includes), this.bonusEmotesMessage(0)), this.bonusEmotes(0), a.createElement(_._8, {
                        margin: 1
                    }, a.createElement(v.a, {
                        isSubbedToTier: this.isSubbedToTier(0),
                        tierPrice: "6.99",
                        reportSubAction: this.onSubClick,
                        url: "/ticket",
                        targetBlank: !1
                    })))] : this.props.subscriptionProducts.map(function(t, n) {
                        var r = t.price;
                        return Object(P.d)([t]) && (r = Object(P.a)(t)), a.createElement(_._35, {
                            key: "subs-broadcaster-plan-" + n,
                            className: "subs-plan-tiers__plan",
                            margin: 1,
                            elevation: 2,
                            display: _.R.Flex,
                            flexDirection: _.T.Column,
                            padding: 2,
                            textAlign: _._45.Center,
                            "data-test-selector": "sub-tier-container"
                        }, a.createElement(_._2, {
                            margin: 1
                        }, a.createElement(_.Q, {
                            type: _._49.H3,
                            color: _.K.Link
                        }, Object(o.d)("{price} Subscription", {
                            price: t.price
                        }, "SubsPlanTiers"))), a.createElement(_._8, {
                            margin: 1,
                            display: _.R.Flex,
                            flexWrap: _.U.Wrap,
                            flexGrow: 1,
                            alignItems: _.c.Center,
                            justifyContent: _._7.Center
                        }, a.createElement(_.Q, null, e.messages.includes), e.bonusEmotesMessage(n)), e.bonusEmotes(n), a.createElement(N.a, {
                            subscriptionProduct: t
                        }), a.createElement(_._8, {
                            margin: 1
                        }, a.createElement(v.a, {
                            isSubbedToTier: e.isSubbedToTier(n),
                            tierPrice: r,
                            reportSubAction: e.onSubClick,
                            url: t.url + "/ticket",
                            targetBlank: !1
                        })))
                    })
                }, t.prototype.isSubbedToTier = function(e) {
                    var t = 1e3 * (e + 1);
                    if (this.props.subTier) {
                        var n = Number(this.props.subTier);
                        if (isNaN(n) && (n = 1e3), t <= n) return !0
                    }
                    return !1
                }, t.prototype.baseEmotes = function() {
                    var e = Object(h.b)(this.props.subscriptionProducts[0].emotes);
                    return a.createElement(_._8, {
                        margin: 1,
                        className: "subs-plan-tiers__base-emotes"
                    }, a.createElement(k.a, {
                        emoteSet: {
                            id: "",
                            emotes: e
                        },
                        onClickEmote: void 0,
                        locked: !1
                    }))
                }, t.prototype.bonusEmotesMessage = function(e) {
                    var t = 0;
                    switch (e) {
                        case 2:
                            t = this.props.subscriptionProducts[2].emotes.length + this.props.subscriptionProducts[1].emotes.length;
                            break;
                        case 1:
                            t = this.props.subscriptionProducts[1].emotes.length;
                            break;
                        default:
                            t = 0
                    }
                    return t > 0 ? a.createElement(_.Q, {
                        bold: !0
                    }, Object(o.d)("{bonusEmoteCount, plural, one {plus 1 bonus emote!} other {plus {bonusEmoteCount, number} bonus emotes!}}", {
                        bonusEmoteCount: t
                    }, "SubsPlanTiers")) : null
                }, t.prototype.bonusEmotes = function(e) {
                    var t, n = [];
                    switch (e) {
                        case 2:
                            n.push(this.props.subscriptionProducts[1]), n.push(this.props.subscriptionProducts[2]);
                            break;
                        case 1:
                            n.push(this.props.subscriptionProducts[1])
                    }
                    return t = n.map(function(e, t) {
                        return a.createElement(O, {
                            key: "subs-broadcaster__bonus-emote-" + t,
                            subscriptionProduct: e,
                            hidePrice: !0
                        })
                    }), a.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center,
                        "data-test-selector": "bonus-emote-container"
                    }, t)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribeNow: Object(o.d)("Subscribe Now", "SubsPlanTiers"),
                        subscriptionPerks: Object(o.d)("{emoteCount, plural, one {All subscriptions include Subscriber Badges and # Emote.} other {All subscriptions include Subscriber Badges and # Emotes.}}", {
                            emoteCount: this.props.subscriptionProducts[0].emotes.length
                        }, "SubsPlanTiers"),
                        subscribed: Object(o.d)("Subscribed", "SubsPlanTiers"),
                        includes: Object(o.d)("Includes everything listed above.", "SubsPlanTiers")
                    }
                }, t = i.__decorate([Object(g.d)("SubsPlanTiers")], t)
            }(a.Component)),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(_._8, null, a.createElement(E, {
                        channelName: this.props.channelDisplayName
                    }), a.createElement(C.a, {
                        subscriptionProducts: this.props.subscriptionProducts
                    }), a.createElement(_._8, {
                        padding: {
                            top: 2
                        },
                        breakpointMedium: {
                            display: _.R.Hide
                        }
                    }, a.createElement(x, {
                        subbedPlatform: this.props.subbedPlatform,
                        channelDisplayName: this.props.channelDisplayName,
                        channelId: this.props.channelId,
                        channelLogin: this.props.channelLogin,
                        subscriptionProducts: this.props.subscriptionProducts,
                        subTier: this.props.subTier
                    })), a.createElement(_._8, {
                        padding: {
                            top: 2
                        },
                        display: _.R.Hide,
                        justifyContent: _._7.Center,
                        breakpointMedium: {
                            display: _.R.Flex
                        }
                    }, a.createElement(I, {
                        subbedPlatform: this.props.subbedPlatform,
                        subscriptionProducts: this.props.subscriptionProducts,
                        subTier: this.props.subTier,
                        channelId: this.props.channelId,
                        channelLogin: this.props.channelLogin
                    })))
                }, t
            }(a.Component),
            w = n("Ie7/"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        processedEmotes: [],
                        emoteSetId: "",
                        subscriptionProducts: [],
                        isSubscribed: !1,
                        subTier: null,
                        subPlatform: null
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.o.setPageTitle("Subscriptions"), this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading) {
                        if (e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0) {
                            var t = Object(h.b)(e.data.user.subscriptionProducts[0].emotes);
                            this.setState({
                                processedEmotes: t,
                                emoteSetId: e.data.user.subscriptionProducts[0].emoteSetID,
                                subscriptionProducts: e.data.user.subscriptionProducts
                            })
                        }
                        e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && this.setState({
                            isSubscribed: !0,
                            subTier: e.data.user.self.subscriptionBenefit.tier,
                            subPlatform: e.data.user.self.subscriptionBenefit.platform
                        })
                    }
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return a.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center,
                        alignItems: _.c.Center,
                        fullHeight: !0
                    }, a.createElement(_._10, null));
                    if (this.props.data.error) return a.createElement(c.a, {
                        message: "Something went wrong"
                    });
                    if (!this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts || this.props.data.user.subscriptionProducts.length < 1) return window.location.replace("https://twitch.tv/" + this.props.match.params.channelName), a.createElement(_._8, {
                        display: _.R.Flex,
                        justifyContent: _._7.Center,
                        alignItems: _.c.Center
                    }, a.createElement(_._10, null));
                    var e = Object(d.c)(this.props.data.user.id),
                        t = a.createElement(j, {
                            subbedPlatform: this.state.subPlatform,
                            channelDisplayName: this.props.data.user.displayName,
                            channelId: this.props.data.user.id,
                            channelLogin: this.props.data.user.login,
                            subscriptionProducts: this.state.subscriptionProducts,
                            subTier: this.state.subTier
                        });
                    return e && (t = a.createElement(S, {
                        subbedPlatform: this.state.subPlatform,
                        channelDisplayName: this.props.data.user.displayName,
                        channelId: this.props.data.user.id,
                        channelLogin: this.props.data.user.login,
                        subscriptionProducts: this.state.subscriptionProducts,
                        subTier: this.state.subTier
                    })), a.createElement(l.b, null, t)
                }, t = i.__decorate([Object(u.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                currentChannelLogin: e.match.params.channelName
                            }
                        }
                    }
                }), Object(g.d)("SubsBroadcasterPage", {
                    destination: b.a.SubsBroadcasterPage
                }), Object(p.a)({
                    location: m.PageviewLocation.SubsBroadcasterPage
                })], t)
            }(a.Component),
            L = Object(s.b)()(F);
        n.d(t, "SubsBroadcasterPage", function() {
            return L
        })
    }
});
//# sourceMappingURL=pages.subs.components.subs-broadcaster-page-99f595558d50bce917c6039bee3d697b.js.map