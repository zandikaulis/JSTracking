webpackJsonp([68], {
    1332: function(e, t, n) {
        "use strict";

        function i(e) {
            return a.__awaiter(this, void 0, void 0, function() {
                var t;
                return a.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, s.m.track(o.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }

        function r(e) {
            return a.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return a.__generator(this, function(i) {
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
                    }, s.m.track(o.SpadeEventType.Subscription, n), [2]
                })
            })
        }
        t.a = i, t.b = r;
        var a = n(0),
            s = n(2),
            o = n(14)
    },
    1964: function(e, t) {},
    1965: function(e, t) {},
    1966: function(e, t) {
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
    1967: function(e, t) {},
    1968: function(e, t) {
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
    2040: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n(8),
            a = n(0),
            s = n(1),
            o = n(2),
            c = n(66),
            l = n(30),
            u = n(9),
            d = n(922),
            p = n(918),
            m = n(14),
            b = n(271),
            h = n(6),
            g = n(276),
            k = n(410),
            v = n(3),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.subscriptionProduct.emotes.length < 1 ? null : s.createElement(v.U, {
                        key: this.props.subscriptionProduct.id,
                        display: v.H.Flex,
                        flexDirection: v.J.Column,
                        alignItems: v.c.Center,
                        margin: 1
                    }, this.buildEmotes(this.props.subscriptionProduct.emotes), this.props.hidePrice ? null : s.createElement(v._21, null, Object(o.d)("{price} emote", {
                        price: this.props.subscriptionProduct.price
                    }, "SubsBonusEmote")))
                }, t.prototype.buildEmotes = function(e) {
                    return Object(b.b)(e).map(function(e) {
                        return s.createElement("figure", {
                            className: "emote-picker__emote-figure",
                            key: e.id
                        }, s.createElement("img", {
                            srcSet: e.srcSet,
                            alt: e.displayName
                        }))
                    })
                }, t
            }(s.Component),
            _ = f,
            y = n(1332);
        n(1964);
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
                        Object(y.b)({
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(v.U, {
                        display: v.H.Flex,
                        justifyContent: v.T.Center,
                        alignItems: v.c.Center,
                        fullHeight: !0
                    }, s.createElement(v.X, null)) : s.createElement(v.U, {
                        className: "subs-broadcaster-tabbed-tiers",
                        display: v.H.Flex,
                        flexDirection: v.J.Column,
                        alignItems: v.c.Center
                    }, s.createElement(v.P, {
                        margin: 1
                    }, s.createElement(v._21, {
                        type: v._26.H3,
                        color: v.F.Link,
                        bold: !0
                    }, this.messages.subscribe)), this.makeTabs(), this.makeTabContents())
                }, t.prototype.makeTabs = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(v._1, null) : 1 === this.props.subscriptionProducts.length ? s.createElement(v._19, null, s.createElement(v._18, {
                        active: !0,
                        "data-a-target": "subscribe-tab-" + i.Tier1
                    }, this.props.subscriptionProducts[0].price)) : s.createElement(v._19, null, s.createElement(v._18, {
                        active: this.state.activeTab === i.Tier1,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier1
                    }, this.props.subscriptionProducts[0].price), s.createElement(v._18, {
                        active: this.state.activeTab === i.Tier2,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier2
                    }, this.props.subscriptionProducts[1].price), s.createElement(v._18, {
                        active: this.state.activeTab === i.Tier3,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier3
                    }, this.props.subscriptionProducts[2].price))
                }, t.prototype.makeTabContents = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(v._1, null) : s.createElement(v.U, {
                        className: "subs-broadcaster-tabbed-tiers__tab",
                        display: v.H.Flex,
                        flexDirection: v.J.Column,
                        alignItems: v.c.Center,
                        textAlign: v._22.Center
                    }, s.createElement(v.P, {
                        margin: 1
                    }, s.createElement(v._21, {
                        type: v._26.H4,
                        bold: !0
                    }, Object(o.d)("Channel Subscription for {displayName}", {
                        displayName: this.props.channelDisplayName
                    }, "SubsBroadcasterPlanTabs"))), s.createElement(v._21, {
                        type: v._26.P
                    }, Object(o.d)("{numEmotes, plural, one {Includes Ad-Free Viewing, Subscriber Badges and 1 Emote.} other {Includes Ad-Free Viewing, Subscriber Badges and {numEmotes, number} Emotes.}}", {
                        numEmotes: this.props.subscriptionProducts[0].emotes.length
                    }, "SubsBroadcasterPlanTabs")), s.createElement(v._21, {
                        type: v._26.P
                    }, this.messages.perkChat), this.getSubButton(), s.createElement(v.P, {
                        margin: {
                            top: 2
                        }
                    }, s.createElement(v._21, {
                        type: v._26.H4,
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
                    return s.createElement(v.U, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(k.a, {
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
                        e.push(s.createElement(_, {
                            key: "bonus-emote-" + i.Tier2,
                            subscriptionProduct: t
                        }))
                    }
                    if (this.state.activeTab === i.Tier3) {
                        var t = this.props.subscriptionProducts[2];
                        e.push(s.createElement(_, {
                            key: "bonus-emote-" + i.Tier3,
                            subscriptionProduct: t
                        }))
                    }
                    return s.createElement(v.U, {
                        display: v.H.InlineFlex,
                        "data-test-selector": "bonus-emote-container"
                    }, e)
                }, t.prototype.baseEmotes = function() {
                    var e = Object(b.b)(this.props.subscriptionProducts[0].emotes);
                    return s.createElement(v.U, {
                        className: "subs-broadcaster-tabbed-tiers__emotes"
                    }, s.createElement(g.a, {
                        emoteSet: {
                            id: this.state.emoteSetId || "",
                            emotes: e
                        },
                        onClickEmote: void 0,
                        locked: !1
                    }))
                }, t = a.__decorate([Object(h.c)("SubPlanTabs")], t)
            }(s.Component),
            T = S,
            E = (n(1965), n(1966)),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? s.createElement(v.U, null, s.createElement(v._1, {
                        height: 160
                    }), s.createElement(v._1, {
                        height: 160
                    })) : s.createElement("div", {
                        style: {
                            backgroundImage: "url(" + this.props.data.user.bannerImageURL
                        },
                        className: "subs-broadcaster-banner"
                    }, s.createElement(v.U, {
                        className: "subs-broadcaster-banner__broadcaster-info",
                        textAlign: v._22.Center,
                        display: v.H.Flex,
                        flexDirection: v.J.Column,
                        alignItems: v.c.Center,
                        flexWrap: v.K.NoWrap,
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
                    }, s.createElement(v.P, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, s.createElement(v._21, {
                        type: v._26.H2,
                        bold: !0,
                        color: v.F.Overlay
                    }, this.props.data.user.displayName)), s.createElement(v.P, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, s.createElement(v.l, {
                        imageAlt: this.props.data.user.displayName,
                        size: 96,
                        imageSrc: this.props.data.user.profileImageURL
                    })), s.createElement(v.U, {
                        className: "subs-broadcaster-banner__description",
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, s.createElement(v._21, {
                        color: v.F.Overlay
                    }, this.props.data.user.description)), this.verifiedPartner()))
                }, t.prototype.verifiedPartner = function() {
                    return this.props.data.user.roles.isPartner ? s.createElement(v.U, {
                        display: v.H.Flex
                    }, s.createElement(v._8, {
                        asset: v._9.Verified,
                        type: v._10.Brand
                    }), s.createElement(v.P, {
                        margin: {
                            x: 1
                        }
                    }, s.createElement(v._21, {
                        color: v.F.Overlay
                    }, Object(o.d)("Verified Twitch Partner", "SubsBroadcasterBanner")))) : null
                }, t = a.__decorate([Object(h.c)("SubsBroadcasterBanner"), Object(u.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                currentChannelLogin: e.channelName
                            }
                        }
                    }
                })], t)
            }(s.Component),
            C = P,
            N = (n(1967), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSubClick = function(e) {
                        Object(y.b)({
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? s.createElement(v._1, null) : (this.setMessages(), s.createElement(v.U, {
                        className: "subs-plan-tiers",
                        alignItems: v.c.Center,
                        flexDirection: v.J.Column,
                        margin: {
                            x: 5
                        }
                    }, s.createElement(v.P, {
                        margin: 1,
                        textAlign: v._22.Center
                    }, s.createElement(v._21, {
                        type: v._26.H3,
                        color: v.F.Link,
                        bold: !0
                    }, this.messages.subscribeNow)), s.createElement(v.P, {
                        margin: 1,
                        textAlign: v._22.Center
                    }, s.createElement(v._21, null, this.messages.subscriptionPerks)), this.baseEmotes(), s.createElement(v.U, {
                        margin: 1,
                        display: v.H.Flex
                    }, this.makePlanWrappers())))
                }, t.prototype.makePlanWrappers = function() {
                    var e = this;
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? [s.createElement(v._1, {
                        key: "subs-broadcaster__emote-placeholder"
                    })] : this.props.subscriptionProducts.map(function(t, n) {
                        return s.createElement(v._17, {
                            key: "subs-broadcaster-plan-" + n,
                            className: "subs-plan-tiers__plan",
                            margin: 1,
                            elevation: 2,
                            display: v.H.Flex,
                            flexDirection: v.J.Column,
                            padding: 2,
                            textAlign: v._22.Center,
                            "data-test-selector": "sub-tier-container"
                        }, s.createElement(v.P, {
                            margin: 1
                        }, s.createElement(v._21, {
                            type: v._26.H3,
                            color: v.F.Link
                        }, Object(o.d)("{price} Subscription", {
                            price: t.price
                        }, "SubsPlanTiers"))), s.createElement(v.U, {
                            margin: 1,
                            display: v.H.Flex,
                            flexGrow: 1,
                            alignItems: v.c.Center,
                            justifyContent: v.T.Center
                        }, s.createElement(v._21, null, e.messages.includes), e.bonusEmotesMessage(n)), e.bonusEmotes(n), s.createElement(v.U, {
                            margin: 1
                        }, s.createElement(k.a, {
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
                    return s.createElement(v.U, {
                        margin: 1,
                        className: "subs-plan-tiers__base-emotes"
                    }, s.createElement(g.a, {
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
                    return t > 0 ? s.createElement(v._21, {
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
                        return s.createElement(_, {
                            key: "subs-broadcaster__bonus-emote-" + t,
                            subscriptionProduct: e,
                            hidePrice: !0
                        })
                    }), s.createElement(v.U, {
                        display: v.H.Flex,
                        justifyContent: v.T.Center,
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
                }, t = a.__decorate([Object(h.c)("SubsPlanTiers")], t)
            }(s.Component)),
            w = N,
            D = n(1968),
            I = function(e) {
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return this.props.data.loading ? s.createElement(v.U, {
                        display: v.H.Flex,
                        justifyContent: v.T.Center,
                        alignItems: v.c.Center,
                        fullHeight: !0
                    }, s.createElement(v.X, null)) : this.props.data.error ? s.createElement(c.a, {
                        message: "Something went wrong"
                    }) : !this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts || this.props.data.user.subscriptionProducts.length < 1 ? (window.location.replace("https://twitch.tv/" + this.props.match.params.channelName), s.createElement(v.U, {
                        display: v.H.Flex,
                        justifyContent: v.T.Center,
                        alignItems: v.c.Center
                    }, s.createElement(v.X, null))) : s.createElement(l.b, null, s.createElement(v.U, null, s.createElement(C, {
                        channelName: this.props.match.params.channelName
                    }), s.createElement(v.U, {
                        padding: {
                            top: 2
                        },
                        breakpointMedium: {
                            display: v.H.Hide
                        }
                    }, s.createElement(T, {
                        channelDisplayName: this.props.data.user.displayName,
                        channelId: this.props.data.user.id,
                        channelLogin: this.props.data.user.login,
                        subscriptionProducts: this.state.subscriptionProducts,
                        subTier: this.state.subTier
                    })), s.createElement(v.U, {
                        padding: {
                            top: 2
                        },
                        display: v.H.Hide,
                        justifyContent: v.T.Center,
                        breakpointMedium: {
                            display: v.H.Flex
                        }
                    }, s.createElement(w, {
                        subscriptionProducts: this.state.subscriptionProducts,
                        subTier: this.state.subTier,
                        channelId: this.props.data.user.id,
                        channelLogin: this.props.data.user.login
                    }))))
                }, t = a.__decorate([Object(u.a)(D, {
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
            }(s.Component),
            F = I,
            B = Object(r.a)()(F);
        n.d(t, "SubsBroadcasterPage", function() {
            return B
        })
    },
    269: function(e, t, n) {
        "use strict";

        function i(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, i, l, u, d, p, m, b, h, g, k, v;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            t = a.m.getVideoPlayerTrackingData().vodID, n = !!t, i = {
                                channelID: e.channelID,
                                withVideo: !1
                            }, n && (i.withVideo = !0, i.videoID = t), l = null, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, a.n.apollo.client.query({
                                query: c,
                                variables: i
                            })];
                        case 2:
                            return l = r.sent(), [3, 4];
                        case 3:
                            return u = r.sent(), a.i.error(u, "Failed to make query for channel info in FollowEvent reporting.", {
                                channelID: e.channelID
                            }), [3, 4];
                        case 4:
                            return d = l && l.data && l.data.user || null, l && !d && a.i.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                channelID: e.channelID
                            }), p = null, l && n && (m = l && l.data && l.data.video, m ? p = Object(o.a)(m.broadcastType) : a.i.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                currentVideoID: t
                            })), b = d && d.self, h = b ? !!b.subscriptionBenefit : null, g = b && b.subscriptionBenefit && b.subscriptionBenefit.purchasedWithPrime || !1, k = b ? b.canPrimeSubscribe : null, v = {
                                action: e.action,
                                can_subscribe: k,
                                channel: e.channelLogin,
                                channel_id: e.channelID,
                                checkout_button_tier: e.checkoutButtonTier,
                                has_sub_credit: e.hasSubCredit,
                                host_channel: e.hostChannelLogin,
                                host_channel_id: e.hostChannelID,
                                is_menu_open: e.isMenuOpen,
                                is_subscribed: h,
                                is_subscribed_current_tier: b && b.subscriptionBenefit && b.subscriptionBenefit.tier,
                                sub_location: e.sub_location,
                                sub_recipient: e.giftRecipient,
                                modal: e.modal,
                                modal_level: e.modalLevel || "",
                                show_prime_content: e.showPrimeContent,
                                show_resub: d ? k && g : null,
                                vod_id: t,
                                vod_type: p,
                                viewport_height: window.innerHeight,
                                viewport_width: window.innerWidth
                            }, a.m.track(s.SpadeEventType.Subscription, v), [2]
                    }
                })
            })
        }
        n.d(t, "a", function() {
            return l
        }), t.b = i;
        var r = n(0),
            a = n(2),
            s = n(14),
            o = n(140),
            c = n(425),
            l = (n.n(c), {
                BuyGiftSub: "buy_gift_sub",
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
            })
    },
    271: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "a", function() {
            return d
        }), n.d(t, "e", function() {
            return b
        }), n.d(t, "d", function() {
            return h
        });
        var i = n(0),
            r = n(274),
            a = {
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
            s = ["1.0", "2.0", "3.0"],
            o = new Set([457, 33, 42, 0]),
            c = function(e) {
                return e.map(function(e) {
                    var t = m(e.token),
                        n = a[t] || t,
                        r = s.reduce(function(t, n) {
                            var i = t.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x");
                            return "3.0" !== n && (i = i.concat(", ")), i
                        }, "");
                    return i.__assign({
                        displayName: n,
                        srcSet: r
                    }, e)
                })
            },
            l = function(e) {
                var t = m(e);
                return a[t] || t
            },
            u = function(e) {
                return e.slice().sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            },
            d = function(e) {
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var a = r[i];
                    o.has(parseInt(a.id, 10)) ? t.push({
                        id: a.id,
                        emotes: c(u(a.emotes))
                    }) : n.push({
                        id: a.id,
                        emotes: c(u(a.emotes))
                    })
                }
                return n.concat(t)
            },
            p = function(e) {
                return /[\|\\\^\$\*\+\?\:\#]/.test(e)
            },
            m = function(e) {
                return p(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
            },
            b = function(e, t) {
                var n = r.b,
                    i = [],
                    a = [],
                    s = [],
                    o = new RegExp("^" + t, "i");
                return e.forEach(function(e) {
                    n[e.token] ? s.push(e) : e.token.match(o) ? i.push(e) : a.push(e)
                }), i.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), a.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), s.sort(function(e, t) {
                    return n[t.token].count - n[e.token].count
                }), s.concat(i).concat(a)
            },
            h = function(e) {
                var t = {};
                return e.filter(function(e) {
                    return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                })
            }
    },
    274: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return r
        });
        var i = {
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
            r = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"]
    },
    276: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(4),
            a = n(1),
            s = n(2),
            o = n(3),
            c = (n(426), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = r("emote-picker__emote-link", {
                            "emote-picker__emote-link--locked": this.props.locked
                        }),
                        n = this.props.emoteSet.emotes.map(function(n) {
                            return a.createElement("div", {
                                key: n.id,
                                className: "emote-picker__emote"
                            }, a.createElement(o._30, {
                                label: n.displayName || Object(s.d)("Emote", "EmoteGrid"),
                                direction: o._32.Bottom
                            }, a.createElement(o.P, {
                                display: o.H.Flex,
                                alignItems: o.c.Center,
                                justifyContent: o.T.Center
                            }, a.createElement("button", {
                                className: t,
                                name: n.displayName,
                                onClick: e.props.locked ? void 0 : e.handleClickEmote.bind(e, n.id),
                                "data-a-target": n.displayName
                            }, a.createElement("figure", {
                                className: "emote-picker__emote-figure"
                            }, e.props.locked ? a.createElement("span", {
                                className: "emote-picker__emote-lock"
                            }, a.createElement(o._8, {
                                asset: o._9.Lock
                            })) : null, a.createElement("img", {
                                srcSet: n.srcSet,
                                alt: n.displayName
                            }))))))
                        });
                    return a.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Center
                    }, n)
                }, t.prototype.handleClickEmote = function(e, t) {
                    this.props.onClickEmote && this.props.onClickEmote(t.currentTarget.name, e)
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return c
        })
    },
    410: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            s = n(6),
            o = n(269),
            c = n(3),
            l = "subscribe-button__subscribe-tier-button",
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.messages = {
                        subscribed: Object(a.d)("Subscribed", "SubTierButton"),
                        subscribeNow: Object(a.d)("Subscribe Now", "SubTierButton")
                    }, t.handleClick = function() {
                        t.props.reportSubAction({
                            action: o.a.ClickCheckout,
                            checkoutButtonTier: t.props.tierPrice
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isSubbedToTier ? r.createElement(c.u, {
                        ariaLabel: this.messages.subscribed,
                        "data-test-selector": l,
                        disabled: !0,
                        icon: c._9.Star
                    }, this.messages.subscribed) : r.createElement(c.u, i.__assign({
                        ariaLabel: this.messages.subscribeNow + " " + this.props.tierPrice,
                        "data-test-selector": l,
                        linkTo: this.props.url,
                        onClick: this.handleClick,
                        purchase: this.props.tierPrice
                    }, Object(c._39)(this.props), {
                        targetBlank: void 0 === this.props.targetBlank || this.props.targetBlank
                    }), this.messages.subscribeNow)
                }, t = i.__decorate([Object(s.c)("SubTierButton")], t)
            }(r.Component),
            d = u;
        n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return d
        })
    },
    425: function(e, t) {
        var n = {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
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
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "purchasedWithPrime"
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
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "broadcastType"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 339
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_SubEvent_User($channelID: ID!, $withVideo: Boolean!, $videoID: ID) {\n  user(id: $channelID) {\n    id\n    self {\n      canPrimeSubscribe\n      subscriptionBenefit {\n        id\n        tier\n        purchasedWithPrime\n      }\n    }\n  }\n  video(id: $videoID) @include(if: $withVideo) {\n    id\n    broadcastType\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    426: function(e, t) {},
    918: function(e, t, n) {
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
    922: function(e, t, n) {
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
                                var a = i.referenceTracking,
                                    s = a.content,
                                    o = a.medium,
                                    l = a.content_index;
                                c.n.tracking.trackPageview(r.__assign({
                                    content: s,
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
                        return s.createElement(t, r.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                r = a.stringify(t);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(s.Component);
                return Object(o.f)(n)
            }
        }
        var r = n(0),
            a = n(21),
            s = n(1),
            o = n(12),
            c = n(2);
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.subs.components.subs-broadcaster-page-7ac110b8fdcff7e5e6a3ea1b4b142bd8.js.map