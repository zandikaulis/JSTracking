webpackJsonp([80], {
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
            return i.__awaiter(this, void 0, void 0, function() {
                var t;
                return i.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, r.m.track(s.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }, t.b = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return i.__generator(this, function(i) {
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
                    }, r.m.track(s.SpadeEventType.Subscription, n), [2]
                })
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
            s = n("vH/s")
    },
    bPto: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            s = n("GiK3"),
            a = n("F8kA"),
            o = n("6sO2");

        function c(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var s = r.referenceTracking,
                                    a = s.content,
                                    c = s.medium,
                                    u = s.content_index;
                                o.n.tracking.trackPageview(i.__assign({
                                    content: a,
                                    medium: c,
                                    content_index: u,
                                    location: e.location
                                }, t))
                            }
                        }, o.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return s.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                s = r.stringify(t);
                            s.length > 0 && (i = "?" + s), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, a
                }(s.Component);
                return Object(a.f)(n)
            }
        }
        n.d(t, "a", function() {
            return c
        })
    },
    uy5s: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n("RH2O"),
            s = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            c = n("yWCw"),
            u = n("zCIC"),
            l = n("7vx8"),
            d = n("j7/Y"),
            p = n("w9tK"),
            m = n("vH/s"),
            b = n("Tzcg"),
            h = n("CSlQ"),
            g = n("pQNb"),
            k = n("7LIQ"),
            _ = n("37Pp"),
            v = n("YEG/"),
            f = n("FDYX"),
            T = n("Odds"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.subscriptionProduct.emotes.length < 1 ? null : a.createElement(T._2, {
                        key: this.props.subscriptionProduct.id,
                        display: T.N.Flex,
                        flexDirection: T.P.Column,
                        alignItems: T.c.Center,
                        margin: 1
                    }, this.buildEmotes(this.props.subscriptionProduct.emotes), this.props.hidePrice ? null : a.createElement(T._35, null, Object(o.d)("{price} emote", {
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
            E = n("XFEc");
        n("CqGj");
        ! function(e) {
            e[e.Tier1 = 0] = "Tier1", e[e.Tier2 = 1] = "Tier2", e[e.Tier3 = 2] = "Tier3"
        }(i || (i = {}));
        var P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTab: i.Tier1,
                        emoteSetId: void 0
                    }, t.messages = {
                        subscribe: Object(o.d)("Subscribe Now", "SubsBroadcasterPlanTabs"),
                        mobileSubbed: Object(o.d)("Subscribed", "SubsBroadcasterPlanTabs"),
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
                        Object(E.b)({
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
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.mobileSubbed : this.messages.subscribe;
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(T._2, {
                        display: T.N.Flex,
                        justifyContent: T._1.Center,
                        alignItems: T.c.Center,
                        fullHeight: !0
                    }, a.createElement(T._4, null)) : a.createElement(T._2, {
                        className: "subs-broadcaster-tabbed-tiers",
                        display: T.N.Flex,
                        flexDirection: T.P.Column,
                        alignItems: T.c.Center
                    }, a.createElement(T.W, {
                        margin: 1
                    }, a.createElement(T._35, {
                        type: T._40.H3,
                        color: T.I.Link,
                        bold: !0
                    }, e)), "IOS" !== this.props.subbedPlatform && "ANDROID" !== this.props.subbedPlatform ? this.makeTabs() : null, this.makeTabContents())
                }, t.prototype.makeTabs = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(T._8, null) : 1 === this.props.subscriptionProducts.length ? a.createElement(T._27, null, a.createElement(T._26, {
                        active: !0,
                        "data-a-target": "subscribe-tab-" + i.Tier1
                    }, this.props.subscriptionProducts[0].price)) : a.createElement(T._27, null, a.createElement(T._26, {
                        active: this.state.activeTab === i.Tier1,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier1
                    }, this.props.subscriptionProducts[0].price), a.createElement(T._26, {
                        active: this.state.activeTab === i.Tier2,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier2
                    }, this.props.subscriptionProducts[1].price), a.createElement(T._26, {
                        active: this.state.activeTab === i.Tier3,
                        onClick: this.toggleActiveTab,
                        "data-a-target": "subscribe-tab-" + i.Tier3
                    }, this.props.subscriptionProducts[2].price))
                }, t.prototype.makeTabContents = function() {
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? a.createElement(T._8, null) : a.createElement(T._2, {
                        className: "subs-broadcaster-tabbed-tiers__tab",
                        display: T.N.Flex,
                        flexDirection: T.P.Column,
                        alignItems: T.c.Center,
                        textAlign: T._36.Center
                    }, a.createElement(T.W, {
                        margin: 1
                    }, a.createElement(T._35, {
                        type: T._40.H4,
                        bold: !0
                    }, Object(o.d)("Channel Subscription for {displayName}", {
                        displayName: this.props.channelDisplayName
                    }, "SubsBroadcasterPlanTabs"))), a.createElement(T._35, {
                        type: T._40.P
                    }, Object(o.d)("{numEmotes, plural, one {Includes Ad-Free Viewing, Subscriber Badges and 1 Emote.} other {Includes Ad-Free Viewing, Subscriber Badges and {numEmotes, number} Emotes.}}", {
                        numEmotes: this.props.subscriptionProducts[0].emotes.length
                    }, "SubsBroadcasterPlanTabs")), a.createElement(T._35, {
                        type: T._40.P
                    }, this.messages.perkChat), this.getSubButton(), a.createElement(T.W, {
                        margin: {
                            top: 2
                        }
                    }, a.createElement(T._35, {
                        type: T._40.H4,
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
                    var t = e.price;
                    Object(f.d)([e]) && (t = Object(f.a)(e));
                    var n = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? a.createElement(T._35, {
                        type: T._40.H5
                    }, Object(o.d)("Tier 1 Subscription", "SubsBroadcasterPlanTabs")) : a.createElement(_.a, {
                        subscriptionProduct: e
                    });
                    return a.createElement(T._2, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(T._2, {
                        margin: {
                            top: 1
                        }
                    }, n), a.createElement(T._2, {
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
                        e.push(a.createElement(S, {
                            key: "bonus-emote-" + i.Tier2,
                            subscriptionProduct: t
                        }))
                    }
                    if (this.state.activeTab === i.Tier3) {
                        t = this.props.subscriptionProducts[2];
                        e.push(a.createElement(S, {
                            key: "bonus-emote-" + i.Tier3,
                            subscriptionProduct: t
                        }))
                    }
                    return a.createElement(T._2, {
                        display: T.N.InlineFlex,
                        "data-test-selector": "bonus-emote-container"
                    }, e)
                }, t.prototype.baseEmotes = function() {
                    var e = Object(b.b)(this.props.subscriptionProducts[0].emotes);
                    return a.createElement(T._2, {
                        className: "subs-broadcaster-tabbed-tiers__emotes"
                    }, a.createElement(k.a, {
                        emoteSet: {
                            id: this.state.emoteSetId || "",
                            emotes: e
                        },
                        onClickEmote: void 0,
                        locked: !1
                    }))
                }, t = s.__decorate([Object(h.d)("SubPlanTabs")], t)
            }(a.Component),
            y = (n("bPto"), n("027l")),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || !this.props.data.user ? a.createElement("div", {
                        className: "subs-broadcaster-banner"
                    }, a.createElement(T._2, {
                        className: "subs-broadcaster-banner__broadcaster-info",
                        textAlign: T._36.Center,
                        display: T.N.Flex,
                        flexDirection: T.P.Column,
                        alignItems: T.c.Center,
                        flexWrap: T.Q.NoWrap,
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
                    }, a.createElement(T._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        },
                        fullWidth: !0
                    }, a.createElement(T._8, {
                        height: 40
                    })), a.createElement(T._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(T._8, {
                        height: 80,
                        width: 80
                    })), a.createElement(T._2, {
                        className: "subs-broadcaster-banner__description",
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        },
                        fullWidth: !0
                    }, a.createElement(T._8, {
                        lineCount: 1
                    })))) : a.createElement("div", {
                        style: {
                            backgroundImage: "url(" + this.props.data.user.bannerImageURL
                        },
                        className: "subs-broadcaster-banner"
                    }, a.createElement(T._2, {
                        className: "subs-broadcaster-banner__broadcaster-info",
                        textAlign: T._36.Center,
                        display: T.N.Flex,
                        flexDirection: T.P.Column,
                        alignItems: T.c.Center,
                        flexWrap: T.Q.NoWrap,
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
                    }, a.createElement(T.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, a.createElement(T._35, {
                        type: T._40.H2,
                        bold: !0,
                        color: T.I.Overlay
                    }, this.props.data.user.displayName)), a.createElement(T.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(T.l, {
                        alt: this.props.data.user.displayName,
                        size: 96,
                        src: this.props.data.user.profileImageURL
                    })), a.createElement(T._2, {
                        className: "subs-broadcaster-banner__description",
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(T._35, {
                        color: T.I.Overlay
                    }, this.props.data.user.description)), this.verifiedPartner()))
                }, t.prototype.verifiedPartner = function() {
                    return this.props.data.user && this.props.data.user.roles.isPartner ? a.createElement(T._2, {
                        display: T.N.Flex
                    }, a.createElement(T._15, {
                        asset: T._16.Verified,
                        type: T._17.Brand
                    }), a.createElement(T.W, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(T._35, {
                        color: T.I.Overlay
                    }, Object(o.d)("Verified Twitch Partner", "SubsBroadcasterBanner")))) : null
                }, t = s.__decorate([Object(h.d)("SubsBroadcasterBanner"), Object(l.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                currentChannelLogin: e.channelName
                            }
                        }
                    }
                })], t)
            }(a.Component),
            C = (n("5EZR"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSubClick = function(e) {
                        Object(E.b)({
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
                    if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return a.createElement(T._8, null);
                    this.setMessages();
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? this.messages.subscribed : this.messages.subscribeNow;
                    return a.createElement(T._2, {
                        className: "subs-plan-tiers",
                        alignItems: T.c.Center,
                        flexDirection: T.P.Column,
                        margin: {
                            x: 5
                        }
                    }, a.createElement(T.W, {
                        margin: 1,
                        textAlign: T._36.Center
                    }, a.createElement(T._35, {
                        type: T._40.H3,
                        color: T.I.Link,
                        bold: !0
                    }, e)), a.createElement(T.W, {
                        margin: 1,
                        textAlign: T._36.Center
                    }, a.createElement(T._35, null, this.messages.subscriptionPerks)), this.baseEmotes(), a.createElement(T._2, {
                        margin: 1,
                        display: T.N.Flex,
                        justifyContent: T._1.Center
                    }, this.makePlanWrappers()))
                }, t.prototype.makePlanWrappers = function() {
                    var e = this;
                    return !this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1 ? [a.createElement(T._8, {
                        key: "subs-broadcaster__emote-placeholder"
                    })] : "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform ? [a.createElement(T._25, {
                        "data-test-selector": "mobile-sub-container",
                        key: "subs-broadcaster-plan-0",
                        className: "subs-plan-tiers__plan",
                        margin: 1,
                        elevation: 2,
                        display: T.N.Flex,
                        flexDirection: T.P.Column,
                        padding: 2,
                        textAlign: T._36.Center
                    }, a.createElement(T.W, {
                        margin: 1
                    }, a.createElement(T._35, {
                        type: T._40.H3,
                        color: T.I.Link
                    }, Object(o.d)("Tier 1 Subscription", "SubsPlanTiers"))), a.createElement(T._2, {
                        margin: 1,
                        display: T.N.Flex,
                        flexWrap: T.Q.Wrap,
                        flexGrow: 1,
                        alignItems: T.c.Center,
                        justifyContent: T._1.Center
                    }, a.createElement(T._35, null, this.messages.includes), this.bonusEmotesMessage(0)), this.bonusEmotes(0), a.createElement(T._2, {
                        margin: 1
                    }, a.createElement(v.a, {
                        isSubbedToTier: this.isSubbedToTier(0),
                        tierPrice: "6.99",
                        reportSubAction: this.onSubClick,
                        url: "/ticket",
                        targetBlank: !1
                    })))] : this.props.subscriptionProducts.map(function(t, n) {
                        var i = t.price;
                        return Object(f.d)([t]) && (i = Object(f.a)(t)), a.createElement(T._25, {
                            key: "subs-broadcaster-plan-" + n,
                            className: "subs-plan-tiers__plan",
                            margin: 1,
                            elevation: 2,
                            display: T.N.Flex,
                            flexDirection: T.P.Column,
                            padding: 2,
                            textAlign: T._36.Center,
                            "data-test-selector": "sub-tier-container"
                        }, a.createElement(T.W, {
                            margin: 1
                        }, a.createElement(T._35, {
                            type: T._40.H3,
                            color: T.I.Link
                        }, Object(o.d)("{price} Subscription", {
                            price: t.price
                        }, "SubsPlanTiers"))), a.createElement(T._2, {
                            margin: 1,
                            display: T.N.Flex,
                            flexWrap: T.Q.Wrap,
                            flexGrow: 1,
                            alignItems: T.c.Center,
                            justifyContent: T._1.Center
                        }, a.createElement(T._35, null, e.messages.includes), e.bonusEmotesMessage(n)), e.bonusEmotes(n), a.createElement(_.a, {
                            subscriptionProduct: t
                        }), a.createElement(T._2, {
                            margin: 1
                        }, a.createElement(v.a, {
                            isSubbedToTier: e.isSubbedToTier(n),
                            tierPrice: i,
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
                    return a.createElement(T._2, {
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
                    return t > 0 ? a.createElement(T._35, {
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
                        return a.createElement(S, {
                            key: "subs-broadcaster__bonus-emote-" + t,
                            subscriptionProduct: e,
                            hidePrice: !0
                        })
                    }), a.createElement(T._2, {
                        display: T.N.Flex,
                        justifyContent: T._1.Center,
                        "data-test-selector": "bonus-emote-container"
                    }, t)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribeNow: Object(o.d)("Subscribe Now", "SubsPlanTiers"),
                        subscribed: Object(o.d)("Subscribed", "SubsPlanTiers"),
                        subscriptionPerks: Object(o.d)("{emoteCount, plural, one {All subscriptions include Ad-Free Viewing, Subscriber Badges and # Emote. Chat During Subscriber-Only Mode} other {All subscriptions include Ad-Free Viewing, Subscriber Badges and # Emotes. Chat During Subscriber-Only Mode}}", {
                            emoteCount: this.props.subscriptionProducts[0].emotes.length
                        }, "SubsPlanTiers"),
                        includes: Object(o.d)("Includes everything listed above.", "SubsPlanTiers")
                    }
                }, t = s.__decorate([Object(h.d)("SubsPlanTiers")], t)
            }(a.Component)),
            O = n("Ie7/"),
            I = function(e) {
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
                        e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && this.setState({
                            isSubscribed: !0,
                            subTier: e.data.user.self.subscriptionBenefit.tier,
                            subPlatform: e.data.user.self.subscriptionBenefit.platform
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.data.loading ? a.createElement(T._2, {
                        display: T.N.Flex,
                        justifyContent: T._1.Center,
                        alignItems: T.c.Center,
                        fullHeight: !0
                    }, a.createElement(T._4, null)) : this.props.data.error ? a.createElement(c.a, {
                        message: "Something went wrong"
                    }) : !this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts || this.props.data.user.subscriptionProducts.length < 1 ? (window.location.replace("https://twitch.tv/" + this.props.match.params.channelName), a.createElement(T._2, {
                        display: T.N.Flex,
                        justifyContent: T._1.Center,
                        alignItems: T.c.Center
                    }, a.createElement(T._4, null))) : a.createElement(u.b, null, a.createElement(T._2, null, a.createElement(N, {
                        channelName: this.props.match.params.channelName
                    }), a.createElement(g.a, {
                        subscriptionProducts: this.state.subscriptionProducts
                    }), a.createElement(T._2, {
                        padding: {
                            top: 2
                        },
                        breakpointMedium: {
                            display: T.N.Hide
                        }
                    }, a.createElement(P, {
                        subbedPlatform: this.state.subPlatform,
                        channelDisplayName: this.props.data.user.displayName,
                        channelId: this.props.data.user.id,
                        channelLogin: this.props.data.user.login,
                        subscriptionProducts: this.state.subscriptionProducts,
                        subTier: this.state.subTier
                    })), a.createElement(T._2, {
                        padding: {
                            top: 2
                        },
                        display: T.N.Hide,
                        justifyContent: T._1.Center,
                        breakpointMedium: {
                            display: T.N.Flex
                        }
                    }, a.createElement(C, {
                        subbedPlatform: this.state.subPlatform,
                        subscriptionProducts: this.state.subscriptionProducts,
                        subTier: this.state.subTier,
                        channelId: this.props.data.user.id,
                        channelLogin: this.props.data.user.login
                    }))))
                }, t = s.__decorate([Object(l.a)(O, {
                    options: function(e) {
                        return {
                            variables: {
                                currentChannelLogin: e.match.params.channelName
                            }
                        }
                    }
                }), Object(h.d)("SubsBroadcasterPage", {
                    destination: p.a.SubsBroadcasterPage
                }), Object(d.a)({
                    location: m.PageviewLocation.SubsBroadcasterPage
                })], t)
            }(a.Component),
            x = Object(r.b)()(I);
        n.d(t, "SubsBroadcasterPage", function() {
            return x
        })
    }
});
//# sourceMappingURL=pages.subs.components.subs-broadcaster-page-8b0cbc56dbc608131b26d744b91c1820.js.map