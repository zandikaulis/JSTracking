webpackJsonp([68], {
    1262: function(e, t, n) {
        "use strict";

        function i(e) {
            return s.__awaiter(this, void 0, void 0, function() {
                var t;
                return s.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, a.m.track(o.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }

        function r(e) {
            return s.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return s.__generator(this, function(i) {
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
                    }, a.m.track(o.SpadeEventType.Subscription, n), [2]
                })
            })
        }
        t.a = i, t.b = r;
        var s = n(0),
            a = n(2),
            o = n(12)
    },
    2009: function(e, t) {},
    2010: function(e, t) {},
    2011: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bannerImageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 221
            }
        };
        n.loc.source = {
            body: "query SubsBroadcaster($currentChannelLogin: String!) {\n  user(login: $currentChannelLogin) {\n    id\n    displayName\n    description\n    roles{\n      isPartner\n    }\n    bannerImageURL\n    profileImageURL(width:300)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2012: function(e, t) {},
    2013: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "url"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "price"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "token"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "emoteSetID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 336
            }
        };
        n.loc.source = {
            body: "query SubsBroadcaster($currentChannelLogin: String!) {\n  user(login: $currentChannelLogin) {\n    id\n    displayName\n    login\n    subscriptionProducts{\n      id\n      url\n      price\n      emotes{\n        id,\n        token\n      }\n      emoteSetID\n    }\n    self{\n      subscriptionBenefit {\n        id\n        tier\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2085: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n(7),
            s = n(0),
            a = n(1),
            o = n(2),
            c = n(66),
            l = n(28),
            u = n(6),
            d = n(811),
            p = n(808),
            m = n(12),
            b = n(87),
            h = n(5),
            g = n(272),
            v = n(273),
            k = n(3),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.subscriptionProduct.emotes.length < 1 ? null : a.createElement(k.U, {
                        key: this.props.subscriptionProduct.id,
                        display: k.H.Flex,
                        flexDirection: k.J.Column,
                        alignItems: k.c.Center,
                        margin: 1
                    }, this.buildEmotes(this.props.subscriptionProduct.emotes), this.props.hidePrice ? null : a.createElement(k._21, null, Object(o.d)("{price} emote", {
                        price: this.props.subscriptionProduct.price
                    }, "SubsBonusEmote")))
                }, t.prototype.buildEmotes = function(e) {
                    return Object(b.b)(e).map(function(e) {
                        return a.createElement("figure", {
                            className: "emote-picker__emote-figure",
                            key: e.id
                        }, a.createElement("img", {
                            srcSet: e.srcSet,
                            alt: e.displayName
                        }))
                    })
                }, t
            }(a.Component),
            f = y,
            _ = n(1262);
        n(2009);
        ! function(e) {
            e[e.Tier1 = 0] = "Tier1", e[e.Tier2 = 1] = "Tier2", e[e.Tier3 = 2] = "Tier3"
        }(i || (i = {}));
        var S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTab: i.Tier1,
                        emoteSetId: void 0
                    }, t.messages = {
                        subscribe: Object(o.d)("Subscribe Now", "SubsBroadcasterPlanTabs"),
                        perkChat: Object(o.d)("Chat During Subscriber-Only Mode", "SubsBroadcasterPlanTabs"),
                        includedEmotes: Object(o.d)("Included Emotes", "SubsBroadcasterPlanTabs")
                    }, t.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-tab-" + i.Tier1:
                                t.setState({
                                    activeTab: i.Tier1
                                });
                                break;
                            case "subscribe-tab-" + i.Tier2:
                                t.setState({
                                    activeTab: i.Tier2
                                });
                                break;
                            case "subscribe-tab-" + i.Tier3:
                                t.setState({
                                    activeTab: i.Tier3
                                })
                        }
                    }, t.onSubClick = function(e) {
                        Object(_.b)({
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(k.U, {
                        display: k.H.Flex,
                        justifyContent: k.T.Center,
                        alignItems: k.c.Center,
                        fullHeight: !0
                    }, a.createElement(k.X, null)) : a.createElement(k.U, {
                        className: "subs-broadcaster-tabbed-tiers",
                        display: k.H.Flex,
                        flexDirection: k.J.Column,
                        alignItems: k.c.Center
                    }, a.createElement(k.P, {
                        margin: 1
                    }, a.createElement(k._21, {
                        type: k._26.H3,
                        color: k.F.Link,
                        bold: !0
                    }, this.messages.subscribe)), this.makeTabs(), this.makeTabContents())
                }, t.prototype.makeTabs = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(k._1, null) : 1 === this.props.subscriptionProducts.length ? a.createElement(k._19, null, a.createElement(k._18, {
                        active: !0,
                        "data-a-target": "subscribe-tab-" + i.Tier1
                    }, this.props.subscriptionProducts[0].price)) : a.createElement(k._19, null, a.createElement(k._18, {
                        active: this.state.activeTab === i.Tier1,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier1
                    }, this.props.subscriptionProducts[0].price), a.createElement(k._18, {
                        active: this.state.activeTab === i.Tier2,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier2
                    }, this.props.subscriptionProducts[1].price), a.createElement(k._18, {
                        active: this.state.activeTab === i.Tier3,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier3
                    }, this.props.subscriptionProducts[2].price))
                }, t.prototype.makeTabContents = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(k._1, null) : a.createElement(k.U, {
                        className: "subs-broadcaster-tabbed-tiers__tab",
                        display: k.H.Flex,
                        flexDirection: k.J.Column,
                        alignItems: k.c.Center,
                        textAlign: k._22.Center
                    }, a.createElement(k.P, {
                        margin: 1
                    }, a.createElement(k._21, {
                        type: k._26.H4,
                        bold: !0
                    }, Object(o.d)("Channel Subscription for {displayName}", {
                        displayName: this.props.channelDisplayName
                    }, "SubsBroadcasterPlanTabs"))), a.createElement(k._21, {
                        type: k._26.P
                    }, Object(o.d)("{numEmotes, plural, one {Includes Ad-Free Viewing, Subscriber Badges and 1 Emote.} other {Includes Ad-Free Viewing, Subscriber Badges and {numEmotes, number} Emotes.}}", {
                        numEmotes: this.props.subscriptionProducts[0].emotes.length
                    }, "SubsBroadcasterPlanTabs")), a.createElement(k._21, {
                        type: k._26.P
                    }, this.messages.perkChat), this.getSubButton(), a.createElement(k.P, {
                        margin: {
                            top: 2
                        }
                    }, a.createElement(k._21, {
                        type: k._26.H4,
                        bold: !0
                    }, this.messages.includedEmotes)), this.getBonusEmotes(), this.baseEmotes())
                }, t.prototype.getSubButton = function() {
                    var e;
                    switch (this.state.activeTab) {
                        case i.Tier2:
                            e = this.props.subscriptionProducts[1];
                            break;
                        case i.Tier3:
                            e = this.props.subscriptionProducts[2];
                            break;
                        case i.Tier1:
                        default:
                            e = this.props.subscriptionProducts[0]
                    }
                    return a.createElement(k.U, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(v.a, {
                        isSubbedToTier: this.isSubbedToTier(),
                        tierPrice: e.price,
                        reportSubAction: this.onSubClick,
                        url: e.url + "/ticket",
                        targetBlank: !1
                    }))
                }, t.prototype.isSubbedToTier = function() {
                    var e = 0;
                    switch (this.state.activeTab) {
                        case i.Tier1:
                            e = 1e3;
                            break;
                        case i.Tier2:
                            e = 2e3;
                            break;
                        case i.Tier3:
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
                    if (this.state.activeTab === i.Tier2 || this.state.activeTab === i.Tier3) {
                        var t = this.props.subscriptionProducts[1];
                        e.push(a.createElement(f, {
                            key: "bonus-emote-" + i.Tier2,
                            subscriptionProduct: t
                        }))
                    }
                    if (this.state.activeTab === i.Tier3) {
                        var t = this.props.subscriptionProducts[2];
                        e.push(a.createElement(f, {
                            key: "bonus-emote-" + i.Tier3,
                            subscriptionProduct: t
                        }))
                    }
                    return a.createElement(k.U, {
                        display: k.H.InlineFlex,
                        "data-test-selector": "bonus-emote-container"
                    }, e)
                }, t.prototype.baseEmotes = function() {
                    var e = Object(b.b)(this.props.subscriptionProducts[0].emotes);
                    return a.createElement(k.U, {
                        className: "subs-broadcaster-tabbed-tiers__emotes"
                    }, a.createElement(g.a, {
                        emoteSet: {
                            id: this.state.emoteSetId || "",
                            emotes: e
                        },
                        onClickEmote: void 0,
                        locked: !1
                    }))
                }, t = s.__decorate([Object(h.c)("SubPlanTabs")], t)
            }(a.Component),
            T = S,
            P = (n(2010), n(2011)),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? a.createElement(k.U, null, a.createElement(k._1, {
                        height: 160
                    }), a.createElement(k._1, {
                        height: 160
                    })) : a.createElement("div", {
                        style: {
                            backgroundImage: "url(" + this.props.data.user.bannerImageURL
                        },
                        className: "subs-broadcaster-banner"
                    }, a.createElement(k.U, {
                        className: "subs-broadcaster-banner__broadcaster-info",
                        textAlign: k._22.Center,
                        display: k.H.Flex,
                        flexDirection: k.J.Column,
                        alignItems: k.c.Center,
                        flexWrap: k.K.NoWrap,
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
                    }, a.createElement(k.P, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, a.createElement(k._21, {
                        type: k._26.H2,
                        bold: !0,
                        color: k.F.Overlay
                    }, this.props.data.user.displayName)), a.createElement(k.P, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(k.l, {
                        imageAlt: this.props.data.user.displayName,
                        size: 96,
                        imageSrc: this.props.data.user.profileImageURL
                    })), a.createElement(k.U, {
                        className: "subs-broadcaster-banner__description",
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(k._21, {
                        color: k.F.Overlay
                    }, this.props.data.user.description)), this.verifiedPartner()))
                }, t.prototype.verifiedPartner = function() {
                    return this.props.data.user.roles.isPartner ? a.createElement(k.U, {
                        display: k.H.Flex
                    }, a.createElement(k._8, {
                        asset: k._9.Verified,
                        type: k._10.Brand
                    }), a.createElement(k.P, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(k._21, {
                        color: k.F.Overlay
                    }, Object(o.d)("Verified Twitch Partner", "SubsBroadcasterBanner")))) : null
                }, t = s.__decorate([Object(h.c)("SubsBroadcasterBanner"), Object(u.a)(P, {
                    options: function(e) {
                        return {
                            variables: {
                                currentChannelLogin: e.channelName
                            }
                        }
                    }
                })], t)
            }(a.Component),
            C = E,
            N = (n(2012), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSubClick = function(e) {
                        Object(_.b)({
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(k._1, null) : (this.setMessages(), a.createElement(k.U, {
                        className: "subs-plan-tiers",
                        alignItems: k.c.Center,
                        flexDirection: k.J.Column,
                        margin: {
                            x: 5
                        }
                    }, a.createElement(k.P, {
                        margin: 1,
                        textAlign: k._22.Center
                    }, a.createElement(k._21, {
                        type: k._26.H3,
                        color: k.F.Link,
                        bold: !0
                    }, this.messages.subscribeNow)), a.createElement(k.P, {
                        margin: 1,
                        textAlign: k._22.Center
                    }, a.createElement(k._21, null, this.messages.subscriptionPerks)), this.baseEmotes(), a.createElement(k.U, {
                        margin: 1,
                        display: k.H.Flex
                    }, this.makePlanWrappers())))
                }, t.prototype.makePlanWrappers = function() {
                    var e = this;
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? [a.createElement(k._1, {
                        key: "subs-broadcaster__emote-placeholder"
                    })] : this.props.subscriptionProducts.map(function(t, n) {
                        return a.createElement(k._17, {
                            key: "subs-broadcaster-plan-" + n,
                            className: "subs-plan-tiers__plan",
                            margin: 1,
                            elevation: 2,
                            display: k.H.Flex,
                            flexDirection: k.J.Column,
                            padding: 2,
                            textAlign: k._22.Center,
                            "data-test-selector": "sub-tier-container"
                        }, a.createElement(k.P, {
                            margin: 1
                        }, a.createElement(k._21, {
                            type: k._26.H3,
                            color: k.F.Link
                        }, Object(o.d)("{price} Subscription", {
                            price: t.price
                        }, "SubsPlanTiers"))), a.createElement(k.U, {
                            margin: 1,
                            display: k.H.Flex,
                            flexGrow: 1,
                            alignItems: k.c.Center,
                            justifyContent: k.T.Center
                        }, a.createElement(k._21, null, e.messages.includes), e.bonusEmotesMessage(n)), e.bonusEmotes(n), a.createElement(k.U, {
                            margin: 1
                        }, a.createElement(v.a, {
                            isSubbedToTier: e.isSubbedToTier(n),
                            tierPrice: t.price,
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
                    var e = Object(b.b)(this.props.subscriptionProducts[0].emotes);
                    return a.createElement(k.U, {
                        margin: 1,
                        className: "subs-plan-tiers__base-emotes"
                    }, a.createElement(g.a, {
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
                    return t > 0 ? a.createElement(k._21, {
                        bold: !0
                    }, Object(o.d)("{bonusEmoteCount, plural, one {plus 1 bonus emote!} other {plus {bonusEmoteCount, number} bonus emotes!}}", {
                        bonusEmoteCount: t
                    }, "SubsPlanTiers")) : null
                }, t.prototype.bonusEmotes = function(e) {
                    var t = [],
                        n = [];
                    switch (e) {
                        case 2:
                            n.push(this.props.subscriptionProducts[1]), n.push(this.props.subscriptionProducts[2]);
                            break;
                        case 1:
                            n.push(this.props.subscriptionProducts[1])
                    }
                    return t = n.map(function(e, t) {
                        return a.createElement(f, {
                            key: "subs-broadcaster__bonus-emote-" + t,
                            subscriptionProduct: e,
                            hidePrice: !0
                        })
                    }), a.createElement(k.U, {
                        display: k.H.Flex,
                        justifyContent: k.T.Center,
                        "data-test-selector": "bonus-emote-container"
                    }, t)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribeNow: Object(o.d)("Subscribe Now", "SubsPlanTiers"),
                        subscriptionPerks: Object(o.d)("All subscriptions include Ad-Free Viewing, Subscriber Badges and {emoteCount} Emotes. Chat During Subscriber-Only Mode", {
                            emoteCount: this.props.subscriptionProducts[0].emotes.length
                        }, "SubsPlanTiers"),
                        includes: Object(o.d)("Includes everything listed above.", "SubsPlanTiers")
                    }
                }, t = s.__decorate([Object(h.c)("SubsPlanTiers")], t)
            }(a.Component)),
            w = N,
            D = n(2013),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        processedEmotes: [],
                        emoteSetId: "",
                        subscriptionProducts: [],
                        isSubscribed: !1,
                        subTier: null
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.n.setPageTitle("Subscriptions"), this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading) {
                        if (e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0) {
                            var t = Object(b.b)(e.data.user.subscriptionProducts[0].emotes);
                            this.setState({
                                processedEmotes: t,
                                emoteSetId: e.data.user.subscriptionProducts[0].emoteSetID,
                                subscriptionProducts: e.data.user.subscriptionProducts
                            })
                        }
                        e.data.user.self && e.data.user.self.subscriptionBenefit && this.setState({
                            isSubscribed: !0,
                            subTier: e.data.user.self.subscriptionBenefit.tier
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.data.loading ? a.createElement(k.U, {
                        display: k.H.Flex,
                        justifyContent: k.T.Center,
                        alignItems: k.c.Center,
                        fullHeight: !0
                    }, a.createElement(k.X, null)) : this.props.data.error ? a.createElement(c.a, {
                        message: "Something went wrong"
                    }) : !this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts || this.props.data.user.subscriptionProducts.length < 1 ? (window.location.replace("https://twitch.tv/" + this.props.match.params.channelName), a.createElement(k.U, {
                        display: k.H.Flex,
                        justifyContent: k.T.Center,
                        alignItems: k.c.Center
                    }, a.createElement(k.X, null))) : a.createElement(l.b, null, a.createElement(k.U, null, a.createElement(C, {
                        channelName: this.props.match.params.channelName
                    }), a.createElement(k.U, {
                        padding: {
                            top: 2
                        },
                        breakpointMedium: {
                            display: k.H.Hide
                        }
                    }, a.createElement(T, {
                        channelDisplayName: this.props.data.user.displayName,
                        channelId: this.props.data.user.id,
                        channelLogin: this.props.data.user.login,
                        subscriptionProducts: this.state.subscriptionProducts,
                        subTier: this.state.subTier
                    })), a.createElement(k.U, {
                        padding: {
                            top: 2
                        },
                        display: k.H.Hide,
                        justifyContent: k.T.Center,
                        breakpointMedium: {
                            display: k.H.Flex
                        }
                    }, a.createElement(w, {
                        subscriptionProducts: this.state.subscriptionProducts,
                        subTier: this.state.subTier,
                        channelId: this.props.data.user.id,
                        channelLogin: this.props.data.user.login
                    }))))
                }, t = s.__decorate([Object(u.a)(D, {
                    options: function(e) {
                        return {
                            variables: {
                                currentChannelLogin: e.match.params.channelName
                            }
                        }
                    }
                }), Object(h.c)("SubsBroadcasterPage", {
                    destination: p.a.SubsBroadcasterPage
                }), Object(d.a)({
                    location: m.PageviewLocation.SubsBroadcasterPage
                })], t)
            }(a.Component),
            F = x,
            I = Object(r.a)()(F);
        n.d(t, "SubsBroadcasterPage", function() {
            return I
        })
    },
    808: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryPopularByLanguage: "directory.popular.language",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    811: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, c.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var s = i.referenceTracking,
                                    a = s.content,
                                    o = s.medium,
                                    l = s.content_index;
                                c.n.tracking.trackPageview(r.__assign({
                                    content: a,
                                    medium: o,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, c.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return a.createElement(t, r.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? s.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                r = s.stringify(t);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(a.Component);
                return Object(o.f)(n)
            }
        }
        var r = n(0),
            s = n(20),
            a = n(1),
            o = n(10),
            c = n(2);
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.subs.components.subs-broadcaster-page-5c9a6850dc071d631d4e4210dc4b3d49.js.map